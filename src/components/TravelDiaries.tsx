import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Calendar,
  MapPin,
  User,
  ChevronRight,
  X,
  MessageSquare,
  Instagram,
  Sparkles,
  CheckCircle2,
  Edit3,
  PlusCircle,
  Trash2,
  Save,
  Search,
  Image as ImageIcon,
  RotateCcw,
  Tag,
  Share2,
  Lock,
  Unlock,
  ShieldCheck,
} from 'lucide-react';
import { TRAVEL_DIARIES, TravelDiary, AGENCY_DETAILS } from '../data/travelData';
import { getDiarySubmissionWhatsAppLink, createWhatsAppUrl } from '../utils/whatsapp';
import { isAdminSessionActive, setAdminSessionActive } from '../utils/adminAuth';
import { AdminPasscodeModal } from './AdminPasscodeModal';

const STORAGE_KEY = 'pinkcityroutes_user_blogs_v2';

interface TravelDiariesProps {
  onOpenDedicatedBlogPage?: () => void;
}

export const TravelDiaries: React.FC<TravelDiariesProps> = ({ onOpenDedicatedBlogPage }) => {
  // Load blogs from localStorage or fallback to TRAVEL_DIARIES
  const [blogs, setBlogs] = useState<TravelDiary[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error loading blogs from storage:', e);
    }
    return TRAVEL_DIARIES;
  });

  // Admin authentication state - regular visitors are strictly view-only
  const [isAdmin, setIsAdmin] = useState<boolean>(() => isAdminSessionActive());
  const [isPasscodeModalOpen, setIsPasscodeModalOpen] = useState(false);
  const [pendingAdminAction, setPendingAdminAction] = useState<(() => void) | null>(null);

  // State for active reader modal, editor modal, search, and category filter
  const [activeDiary, setActiveDiary] = useState<TravelDiary | null>(null);
  const [editingDiary, setEditingDiary] = useState<TravelDiary | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Form state for creating / editing
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    location: '',
    date: '',
    travelerType: 'Couple Trip',
    excerpt: '',
    fullStory: '',
    highlights: '',
    image: '/assets/aistudio/Rajasthan-1_c57fba4b.jpg',
  });

  // Preset cover photos for fast 1-click selection
  const presetPhotos = [
    { label: 'Amber Fort Jaipur', url: '/assets/aistudio/Rajasthan-1_c57fba4b.jpg' },
    { label: 'Taj Mahal Agra', url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80' },
    { label: 'Dal Lake Kashmir', url: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80' },
    { label: 'Delhi Monuments', url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80' },
    { label: 'Kerala Backwaters', url: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80' },
    { label: 'Dubai Desert Dunes', url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80' },
  ];

  // Save to localStorage whenever blogs change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
    } catch (e) {
      console.error('Error saving blogs to storage:', e);
    }
  }, [blogs]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Guard function to ensure admin authentication before mutating
  const requireAdminAccess = (action: () => void) => {
    if (isAdmin) {
      action();
    } else {
      setPendingAdminAction(() => action);
      setIsPasscodeModalOpen(true);
    }
  };

  // Called when secret PIN is correctly validated
  const handlePasscodeSuccess = () => {
    setIsAdmin(true);
    showToast('Admin Mode unlocked! Blog management controls active.');
    if (pendingAdminAction) {
      pendingAdminAction();
      setPendingAdminAction(null);
    }
  };

  // Lock admin mode and return to view-only
  const handleLockAdmin = () => {
    setAdminSessionActive(false);
    setIsAdmin(false);
    setIsCreatingNew(false);
    setEditingDiary(null);
    showToast('Admin Mode locked. Section is now in View-Only mode.');
  };

  // Open editor for a new post (Admin only)
  const handleOpenNewPost = () => {
    requireAdminAccess(() => {
      setFormData({
        title: '',
        author: 'Harshvardhan Gupta & Ananya Gupta',
        location: 'Jaipur, Rajasthan',
        date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        travelerType: 'Curated Guide',
        excerpt: '',
        fullStory: '',
        highlights: 'Royal palace exploration, Verified local dining, Private chauffeur support',
        image: '/assets/aistudio/Rajasthan-1_c57fba4b.jpg',
      });
      setEditingDiary(null);
      setIsCreatingNew(true);
    });
  };

  // Open editor for an existing post (Admin only)
  const handleOpenEdit = (diary: TravelDiary) => {
    requireAdminAccess(() => {
      setFormData({
        title: diary.title,
        author: diary.author,
        location: diary.location,
        date: diary.date,
        travelerType: diary.travelerType,
        excerpt: diary.excerpt,
        fullStory: diary.fullStory,
        highlights: diary.highlights.join(', '),
        image: diary.image,
      });
      setEditingDiary(diary);
      setIsCreatingNew(false);
    });
  };

  // Save changes (update or insert)
  const handleSaveBlog = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAdmin) {
      setIsPasscodeModalOpen(true);
      return;
    }

    if (!formData.title.trim() || !formData.fullStory.trim()) {
      showToast('Please provide a title and story text.');
      return;
    }

    const highlightsArray = formData.highlights
      ? formData.highlights.split(',').map((s) => s.trim()).filter(Boolean)
      : ['Personalized on-ground support', 'Verified stays and private transport'];

    if (editingDiary) {
      // Update existing
      const updatedList = blogs.map((b) =>
        b.id === editingDiary.id
          ? {
              ...b,
              title: formData.title,
              author: formData.author || 'Harshvardhan Gupta & Ananya Gupta',
              location: formData.location || 'Rajasthan, India',
              date: formData.date || 'Recent',
              travelerType: formData.travelerType,
              excerpt: formData.excerpt || formData.fullStory.slice(0, 160) + '...',
              fullStory: formData.fullStory,
              highlights: highlightsArray,
              image: formData.image,
            }
          : b
      );
      setBlogs(updatedList);
      showToast('Blog post updated successfully!');

      // Update reader modal if open
      if (activeDiary && activeDiary.id === editingDiary.id) {
        setActiveDiary({
          ...activeDiary,
          title: formData.title,
          author: formData.author,
          location: formData.location,
          date: formData.date,
          travelerType: formData.travelerType,
          excerpt: formData.excerpt,
          fullStory: formData.fullStory,
          highlights: highlightsArray,
          image: formData.image,
        });
      }
    } else {
      // Create new
      const newPost: TravelDiary = {
        id: 'blog-' + Date.now(),
        title: formData.title,
        author: formData.author || 'Harshvardhan Gupta & Ananya Gupta',
        location: formData.location || 'Jaipur, Rajasthan',
        date: formData.date || 'Recent',
        travelerType: formData.travelerType,
        excerpt: formData.excerpt || formData.fullStory.slice(0, 160) + '...',
        fullStory: formData.fullStory,
        highlights: highlightsArray,
        image: formData.image,
      };
      setBlogs([newPost, ...blogs]);
      showToast('New regular blog post published!');
    }

    setEditingDiary(null);
    setIsCreatingNew(false);
  };

  // Delete a post (Admin only)
  const handleDeleteBlog = (id: string) => {
    requireAdminAccess(() => {
      if (confirm('Are you sure you want to delete this blog post?')) {
        const filtered = blogs.filter((b) => b.id !== id);
        setBlogs(filtered);
        showToast('Blog post deleted.');
        if (activeDiary && activeDiary.id === id) {
          setActiveDiary(null);
        }
        setEditingDiary(null);
        setIsCreatingNew(false);
      }
    });
  };

  // Reset to original starter blogs (Admin only)
  const handleResetToDefault = () => {
    requireAdminAccess(() => {
      if (confirm('Reset blogs back to the original default stories?')) {
        setBlogs(TRAVEL_DIARIES);
        localStorage.removeItem(STORAGE_KEY);
        showToast('Restored default blogs.');
      }
    });
  };

  // Filtered blogs list
  const filteredBlogs = blogs.filter((diary) => {
    const matchesSearch =
      diary.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      diary.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      diary.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      diary.fullStory.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' ||
      diary.travelerType.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      diary.location.toLowerCase().includes(selectedCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="diaries" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Toast Alert */}
        {toastMessage && (
          <div className="fixed top-20 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl border border-emerald-500/40 text-xs font-semibold flex items-center gap-2 animate-in fade-in slide-in-from-top-4">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Section Heading & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C83E5C] mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              Regular Travel Blogs & Guest Trip Logs
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Pinkcityroutes Travel Diaries — Stories From the Road
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Every day brings a new journey. Read real daily trip logs written by our travelers, browse
              curated itineraries, or submit your own day's experience to be featured.
            </p>
          </div>

          {/* Action Buttons: View-Only for Visitors; Unlocked for Verified Admin */}
          <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto shrink-0">
            {onOpenDedicatedBlogPage && (
              <button
                onClick={onOpenDedicatedBlogPage}
                className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-sm transition-all"
              >
                <BookOpen className="w-4 h-4 text-amber-300" />
                <span>Open Full Blog Page</span>
              </button>
            )}

            {/* If Admin Mode is active: show publish, reset & lock controls */}
            {isAdmin ? (
              <>
                <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="hidden sm:inline">Admin Active</span>
                </div>

                <button
                  onClick={handleOpenNewPost}
                  className="inline-flex items-center gap-2 bg-[#C83E5C] hover:bg-[#B0334E] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-sm transition-all hover:scale-105 active:scale-95"
                  title="Create and publish new blog"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Write / Add Blog</span>
                </button>

                <button
                  onClick={handleResetToDefault}
                  className="p-2.5 text-slate-500 hover:text-slate-800 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors text-xs font-medium"
                  title="Reset to default blogs"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={handleLockAdmin}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-100 hover:bg-rose-50 text-slate-700 hover:text-rose-600 text-xs font-semibold border border-stone-200 transition-colors"
                  title="Lock admin controls and return to view-only"
                >
                  <Lock className="w-3.5 h-3.5 text-slate-500" />
                  <span>Lock Admin</span>
                </button>
              </>
            ) : (
              /* Regular visitors: Discreet author login lock to unlock editor */
              <button
                onClick={() => {
                  setPendingAdminAction(() => handleOpenNewPost);
                  setIsPasscodeModalOpen(true);
                }}
                className="inline-flex items-center gap-1.5 bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-slate-900 text-xs font-medium py-2.5 px-3 rounded-xl transition-all"
                title="Admin access for Harshvardhan Gupta & Ananya Gupta (PIN required)"
              >
                <Lock className="w-3.5 h-3.5 text-stone-400" />
                <span className="hidden sm:inline">Author Access</span>
              </button>
            )}
          </div>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 bg-[#FAF7F2] rounded-2xl border border-stone-200 mb-10">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search blogs, routes, authors..."
              className="w-full bg-white border border-stone-300 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {['All', 'Jaipur', 'Kashmir', 'Taj Mahal', 'Couple', 'Family'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#C83E5C] text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-16 bg-stone-50 rounded-2xl border border-dashed border-stone-300">
            <BookOpen className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <p className="text-sm text-slate-500 font-medium">No travel blogs found matching your search.</p>
            {isAdmin && (
              <button
                onClick={handleOpenNewPost}
                className="mt-4 inline-flex items-center gap-1.5 text-xs text-[#C83E5C] font-bold hover:underline"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Create a new blog post</span>
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((diary) => (
              <article
                key={diary.id}
                className="bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-52 overflow-hidden bg-stone-100">
                    <img
                      src={diary.image}
                      alt={diary.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    {/* Category Tag */}
                    <span className="absolute top-3.5 left-3.5 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-white/10">
                      {diary.travelerType}
                    </span>

                    {/* Quick Edit Icon on Card (Admin Only) */}
                    {isAdmin && (
                      <button
                        onClick={() => handleOpenEdit(diary)}
                        className="absolute top-3.5 right-3.5 bg-white/90 hover:bg-white text-slate-800 p-2 rounded-lg shadow-sm transition-all hover:scale-105"
                        title="Edit this blog post"
                      >
                        <Edit3 className="w-3.5 h-3.5 text-[#C83E5C]" />
                      </button>
                    )}

                    <div className="absolute bottom-3 left-3 text-xs text-amber-200 flex items-center gap-1 font-medium">
                      <MapPin className="w-3 h-3 text-rose-300" />
                      <span>{diary.location}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#C83E5C]" />
                      <span>{diary.date}</span>
                      <span>·</span>
                      <span className="text-slate-700 font-semibold truncate">{diary.author}</span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-slate-900 leading-snug group-hover:text-[#C83E5C] transition-colors line-clamp-2">
                      {diary.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {diary.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Actions: Strictly View-Only for Visitors, Full Controls for Admin */}
                <div className="p-6 pt-0 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveDiary(diary)}
                    className={`text-xs font-bold py-2.5 px-4 rounded-xl text-slate-800 bg-[#FAF7F2] hover:bg-stone-200/80 transition-colors flex items-center justify-between group-hover:text-[#C83E5C] ${
                      isAdmin ? 'flex-1' : 'w-full'
                    }`}
                  >
                    <span>Read Full Story</span>
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Admin-only Edit and Delete Controls on Card */}
                  {isAdmin && (
                    <>
                      <button
                        type="button"
                        onClick={() => handleOpenEdit(diary)}
                        className="p-2.5 rounded-xl border border-stone-200 hover:border-[#C83E5C] text-slate-600 hover:text-[#C83E5C] hover:bg-rose-50 transition-colors"
                        title="Edit blog"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDeleteBlog(diary.id)}
                        className="p-2.5 rounded-xl border border-stone-200 hover:border-rose-400 text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                        title="Delete blog"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Community Submission Box */}
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-[#101B2B] via-[#16253B] to-[#1C2E46] text-white p-8 sm:p-12 shadow-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#C83E5C]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              Traveler Stories & Guest Spotlight
            </div>

            <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Traveled with us today? Share your story!
            </h3>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl mx-auto">
              Clients can submit their daily travel log, photos, and tips to be featured on our official diary
              and Instagram <strong className="text-pink-300 font-semibold">@pinkcityroutes</strong>. Send your story directly via WhatsApp.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getDiarySubmissionWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-bold text-sm py-3.5 px-8 rounded-xl shadow-lg transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950/20" />
                <span>Submit Your Travel Blog via WhatsApp</span>
              </a>

              <a
                href={AGENCY_DETAILS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm py-3.5 px-6 rounded-xl border border-white/20 transition-all"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Follow @pinkcityroutes</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Editor Modal: STRICTLY Admin Only */}
      {isAdmin && (isCreatingNew || editingDiary) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200 max-h-[92vh] flex flex-col">
            {/* Modal Header */}
            <div className="p-6 border-b border-stone-200 flex items-center justify-between bg-[#FAF7F2]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#C83E5C]/10 text-[#C83E5C] flex items-center justify-center font-bold">
                  {isCreatingNew ? <PlusCircle className="w-5 h-5" /> : <Edit3 className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-lg">
                    {isCreatingNew ? 'Create New Travel Blog' : 'Edit Travel Blog Post'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Admin editorial controls · Saves instantly to Pinkcityroutes
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsCreatingNew(false);
                  setEditingDiary(null);
                }}
                className="p-2 text-stone-400 hover:text-slate-800 rounded-full hover:bg-stone-200 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSaveBlog} className="p-6 overflow-y-auto space-y-4 flex-1">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Blog Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Day 1 in the Pink City: Exploring Amer Fort at Sunrise"
                  className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Author / Traveler Name
                  </label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    placeholder="e.g. Harshvardhan, Sneha & Rohan"
                    className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Destination / Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Jaipur, Rajasthan"
                    className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Traveler Category / Tag
                  </label>
                  <select
                    value={formData.travelerType}
                    onChange={(e) => setFormData({ ...formData, travelerType: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
                  >
                    <option value="Curated Guide">Curated Guide (Harshvardhan)</option>
                    <option value="Couple Trip">Couple Anniversary / Honeymoon</option>
                    <option value="Family Tour">Family Heritage Tour</option>
                    <option value="Solo Explorer">Solo Traveler Diary</option>
                    <option value="Corporate / Group">Group Expedition</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Display Date
                  </label>
                  <input
                    type="text"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    placeholder="e.g. October 2026"
                    className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
                  />
                </div>
              </div>

              {/* Photo Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Cover Photo
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {presetPhotos.map((p, idx) => (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => setFormData({ ...formData, image: p.url })}
                      className={`text-[11px] px-2.5 py-1 rounded-lg border transition-all ${
                        formData.image === p.url
                          ? 'border-[#C83E5C] bg-[#C83E5C] text-white font-bold'
                          : 'border-stone-300 bg-white text-slate-700 hover:bg-stone-100'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="Or paste custom image URL..."
                  className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Card Short Excerpt (Preview text)
                </label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  placeholder="Short 2-line summary for the blog card..."
                  rows={2}
                  className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Travel Story / Daily Log *
                </label>
                <textarea
                  value={formData.fullStory}
                  onChange={(e) => setFormData({ ...formData, fullStory: e.target.value })}
                  placeholder="Write the complete daily trip details, schedule, recommendations, chauffeur highlights..."
                  rows={6}
                  className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Key Highlights (comma-separated)
                </label>
                <input
                  type="text"
                  value={formData.highlights}
                  onChange={(e) => setFormData({ ...formData, highlights: e.target.value })}
                  placeholder="e.g. Sunrise view, Chauffeur assistance, Traditional kachori breakfast"
                  className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
                />
              </div>

              {/* Form Buttons */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                {editingDiary && (
                  <button
                    type="button"
                    onClick={() => handleDeleteBlog(editingDiary.id)}
                    className="inline-flex items-center gap-1.5 text-rose-600 hover:text-rose-700 text-xs font-bold px-3 py-2 rounded-xl hover:bg-rose-50"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Delete Blog</span>
                  </button>
                )}

                <div className="flex items-center gap-2 ml-auto">
                  <button
                    type="button"
                    onClick={() => {
                      setIsCreatingNew(false);
                      setEditingDiary(null);
                    }}
                    className="px-4 py-2.5 rounded-xl border border-stone-300 text-slate-700 hover:bg-stone-100 text-xs font-bold transition-colors"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 bg-[#C83E5C] hover:bg-[#B0334E] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition-all hover:scale-105"
                  >
                    <Save className="w-4 h-4" />
                    <span>{isCreatingNew ? 'Publish Blog' : 'Save Changes'}</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Full Diary Story Modal (Accessible to all visitors) */}
      {activeDiary && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200 max-h-[92vh] flex flex-col">
            <div className="relative h-64 bg-stone-900 shrink-0">
              <img
                src={activeDiary.image}
                alt={activeDiary.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              <button
                onClick={() => setActiveDiary(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-[11px] uppercase tracking-wider text-amber-300 font-bold block mb-1">
                  {activeDiary.location} · {activeDiary.date}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight">
                  {activeDiary.title}
                </h3>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100 text-xs">
                <span className="text-slate-600 font-medium">
                  Written by: <strong className="text-slate-900">{activeDiary.author}</strong>
                </span>
                <span className="text-[#C83E5C] font-semibold bg-rose-50 px-2.5 py-0.5 rounded-md">
                  {activeDiary.travelerType}
                </span>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Daily Trip Experience:
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">
                  {activeDiary.fullStory}
                </p>
              </div>

              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-stone-200/80">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  Key Highlights & Traveler Tips:
                </h5>
                <ul className="space-y-1.5">
                  {activeDiary.highlights.map((hl, i) => (
                    <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                {/* Edit button is only visible to Admin */}
                {isAdmin ? (
                  <button
                    onClick={() => {
                      handleOpenEdit(activeDiary);
                      setActiveDiary(null);
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-slate-700 hover:text-[#C83E5C] font-bold px-3 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 transition-colors"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Edit This Blog</span>
                  </button>
                ) : (
                  <div className="text-[11px] text-slate-400">
                    Curated on-ground travel story
                  </div>
                )}

                <a
                  href={createWhatsAppUrl(
                    `Hello Harshvardhan, I was reading the travel blog *${activeDiary.title}* on Pinkcityroutes. I would like to plan a similar tour!`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-[#128C7E] hover:bg-[#075E54] text-white font-bold px-5 py-2.5 rounded-xl shadow-xs transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Plan Similar Journey on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Secret Admin Passcode Modal */}
      <AdminPasscodeModal
        isOpen={isPasscodeModalOpen}
        onClose={() => {
          setIsPasscodeModalOpen(false);
          setPendingAdminAction(null);
        }}
        onSuccess={handlePasscodeSuccess}
      />
    </section>
  );
};
