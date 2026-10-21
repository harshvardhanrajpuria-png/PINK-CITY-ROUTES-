import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Calendar,
  MapPin,
  Clock,
  ArrowLeft,
  Search,
  PlusCircle,
  Edit3,
  Trash2,
  X,
  Save,
  Sparkles,
  CheckCircle2,
  Share2,
  MessageSquare,
  Eye,
  RotateCcw,
  Tag,
  Phone,
  Mail,
  Instagram,
  Compass,
  Lock,
  Unlock,
  ShieldCheck,
} from 'lucide-react';
import { TRAVEL_DIARIES, TravelDiary, AGENCY_DETAILS } from '../data/travelData';
import { createWhatsAppUrl, getGeneralWhatsAppLink } from '../utils/whatsapp';
import { isAdminSessionActive, setAdminSessionActive } from '../utils/adminAuth';
import { AdminPasscodeModal } from './AdminPasscodeModal';

const STORAGE_KEY = 'pinkcityroutes_user_blogs_v2';

interface BlogPageProps {
  onBackToHome: () => void;
  onOpenPlanner?: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onBackToHome, onOpenPlanner }) => {
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

  // Admin authentication state: regular visitors are strictly view-only
  const [isAdmin, setIsAdmin] = useState<boolean>(() => isAdminSessionActive());
  const [isPasscodeModalOpen, setIsPasscodeModalOpen] = useState(false);
  const [pendingAdminAction, setPendingAdminAction] = useState<(() => void) | null>(null);

  const [activeDiary, setActiveDiary] = useState<TravelDiary | null>(null);
  const [editingDiary, setEditingDiary] = useState<TravelDiary | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [editorTab, setEditorTab] = useState<'edit' | 'preview'>('edit');

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    author: 'Harshvardhan (Founder)',
    location: 'Jaipur, Rajasthan',
    date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    travelerType: "Founder's Guide",
    readTime: '4 min read',
    excerpt: '',
    fullStory: '',
    highlights: 'Panoramic golden hour views, Handpicked authentic dining, Seamless private transfers',
    image: '/assets/aistudio/Rajasthan-1_c57fba4b.jpg',
  });

  // Preset cover photos
  const presetPhotos = [
    { label: 'Amber Fort Jaipur', url: '/assets/aistudio/Rajasthan-1_c57fba4b.jpg' },
    { label: 'Jaipur Nahargarh Sunset', url: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80' },
    { label: 'Taj Mahal Agra', url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80' },
    { label: 'Dal Lake Kashmir', url: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80' },
    { label: 'Delhi Monuments', url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80' },
    { label: 'Highway Road Trip', url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80' },
    { label: 'Kerala Backwaters', url: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80' },
    { label: 'Dubai Desert Safari', url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80' },
  ];

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
    } catch (e) {
      console.error('Error saving blogs:', e);
    }
  }, [blogs]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
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
    showToast('Admin Mode locked. Blog page is now in View-Only mode.');
  };

  const handleOpenNewPost = () => {
    requireAdminAccess(() => {
      setFormData({
        title: '',
        author: 'Harshvardhan (Founder)',
        location: 'Jaipur, Rajasthan',
        date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        travelerType: "Founder's Guide",
        readTime: '4 min read',
        excerpt: '',
        fullStory: '',
        highlights: 'Royal palace exploration, Verified local street food, Private chauffeur care',
        image: '/assets/aistudio/Rajasthan-1_c57fba4b.jpg',
      });
      setEditingDiary(null);
      setIsCreatingNew(true);
      setEditorTab('edit');
    });
  };

  const handleOpenEdit = (diary: TravelDiary) => {
    requireAdminAccess(() => {
      setFormData({
        title: diary.title,
        author: diary.author,
        location: diary.location,
        date: diary.date,
        travelerType: diary.travelerType,
        readTime: diary.readTime || '4 min read',
        excerpt: diary.excerpt,
        fullStory: diary.fullStory,
        highlights: diary.highlights ? diary.highlights.join(', ') : '',
        image: diary.image,
      });
      setEditingDiary(diary);
      setIsCreatingNew(false);
      setEditorTab('edit');
    });
  };

  const handleSaveBlog = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAdmin) {
      setIsPasscodeModalOpen(true);
      return;
    }

    if (!formData.title.trim() || !formData.fullStory.trim()) {
      showToast('Please enter both a blog title and story content.');
      return;
    }

    const highlightsArray = formData.highlights
      ? formData.highlights.split(',').map((s) => s.trim()).filter(Boolean)
      : ['Personalized on-ground support by Harshvardhan', 'Private sanitized vehicle and verified stays'];

    if (editingDiary) {
      const updated = blogs.map((b) =>
        b.id === editingDiary.id
          ? {
              ...b,
              title: formData.title,
              author: formData.author || 'Harshvardhan',
              location: formData.location || 'Rajasthan, India',
              date: formData.date || 'Recent',
              travelerType: formData.travelerType,
              readTime: formData.readTime || '4 min read',
              excerpt: formData.excerpt || formData.fullStory.slice(0, 160) + '...',
              fullStory: formData.fullStory,
              highlights: highlightsArray,
              image: formData.image,
            }
          : b
      );
      setBlogs(updated);
      showToast('✓ Blog article updated successfully!');

      if (activeDiary && activeDiary.id === editingDiary.id) {
        setActiveDiary({
          ...activeDiary,
          title: formData.title,
          author: formData.author,
          location: formData.location,
          date: formData.date,
          travelerType: formData.travelerType,
          readTime: formData.readTime,
          excerpt: formData.excerpt,
          fullStory: formData.fullStory,
          highlights: highlightsArray,
          image: formData.image,
        });
      }
    } else {
      const newPost: TravelDiary = {
        id: 'blog-' + Date.now(),
        title: formData.title,
        author: formData.author || 'Harshvardhan',
        location: formData.location || 'Jaipur, Rajasthan',
        date: formData.date || 'Recent',
        travelerType: formData.travelerType,
        readTime: formData.readTime || '4 min read',
        excerpt: formData.excerpt || formData.fullStory.slice(0, 160) + '...',
        fullStory: formData.fullStory,
        highlights: highlightsArray,
        image: formData.image,
      };
      setBlogs([newPost, ...blogs]);
      showToast('✓ New travel blog published successfully!');
    }

    setEditingDiary(null);
    setIsCreatingNew(false);
  };

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

  const handleResetToDefault = () => {
    requireAdminAccess(() => {
      if (confirm('Reset all blog posts to default sample travel stories?')) {
        setBlogs(TRAVEL_DIARIES);
        localStorage.removeItem(STORAGE_KEY);
        showToast('Restored default blogs.');
      }
    });
  };

  const filteredBlogs = blogs.filter((diary) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      diary.title.toLowerCase().includes(q) ||
      diary.location.toLowerCase().includes(q) ||
      diary.author.toLowerCase().includes(q) ||
      diary.fullStory.toLowerCase().includes(q);

    const matchesCategory =
      selectedCategory === 'All' ||
      diary.travelerType.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      diary.location.toLowerCase().includes(selectedCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-slate-800 flex flex-col">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl border border-emerald-500/40 text-xs font-semibold flex items-center gap-2 animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Header Bar for Blog Page */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#C83E5C] bg-stone-100 hover:bg-stone-200 px-3 py-2 rounded-xl transition-colors shrink-0"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>

            <div className="h-5 w-px bg-stone-200 hidden sm:block" />

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#C83E5C]/30 bg-white shrink-0">
                <img
                  src={AGENCY_DETAILS.logo}
                  alt="Pinkcityroutes"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-display font-bold text-slate-900 text-base leading-tight block">
                  Pinkcity<span className="text-[#C83E5C]">routes</span> Travel Blog
                </span>
                <span className="text-[10px] text-slate-500 hidden sm:block">
                  Curated by Harshvardhan Gupta & Ananya Gupta · Direct WhatsApp {AGENCY_DETAILS.phone}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* If Admin Mode Active: show publish & lock controls */}
            {isAdmin ? (
              <>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="hidden md:inline">Admin Mode</span>
                </div>

                <button
                  onClick={handleOpenNewPost}
                  className="inline-flex items-center gap-1.5 bg-[#C83E5C] hover:bg-[#B0334E] text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-sm transition-all hover:scale-105"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">Write New Blog</span>
                  <span className="sm:hidden">Write</span>
                </button>

                <button
                  onClick={handleLockAdmin}
                  className="inline-flex items-center gap-1 text-slate-600 hover:text-rose-600 bg-stone-100 hover:bg-rose-50 text-xs font-semibold px-2.5 py-2 rounded-xl border border-stone-200 transition-colors"
                  title="Lock admin controls"
                >
                  <Lock className="w-3.5 h-3.5 text-slate-500" />
                  <span className="hidden lg:inline">Lock</span>
                </button>
              </>
            ) : (
              /* Regular visitor: Subtle author access login button */
              <button
                onClick={() => {
                  setPendingAdminAction(() => handleOpenNewPost);
                  setIsPasscodeModalOpen(true);
                }}
                className="inline-flex items-center gap-1.5 bg-stone-100 hover:bg-stone-200 text-slate-700 text-xs font-semibold px-3 py-2 rounded-xl transition-all"
                title="Admin Passcode Required to Publish"
              >
                <Lock className="w-3.5 h-3.5 text-stone-500" />
                <span className="hidden sm:inline">Author Login</span>
              </button>
            )}

            <a
              href={getGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#128C7E] hover:bg-[#075E54] text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="hidden md:inline">WhatsApp Harshvardhan</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section of the Blog Page */}
      <section className="bg-gradient-to-b from-[#101B2B] to-[#18283E] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C83E5C]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 mb-3 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              <BookOpen className="w-3.5 h-3.5" />
              Official Travel Diaries & Regular Blogs
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Stories, Hidden Gems & Route Guides from Pinkcityroutes
            </h1>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Read authentic day-by-day travelogues, vehicle comparisons, and local Pink City insider guides.
              All itineraries and travel notes are curated to help you plan effortless journeys.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {isAdmin ? (
                <>
                  <button
                    onClick={handleOpenNewPost}
                    className="inline-flex items-center gap-2 bg-[#C83E5C] hover:bg-[#B0334E] text-white text-xs sm:text-sm font-bold py-3 px-5 rounded-xl shadow-lg transition-all hover:scale-105"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>Publish New Blog Post</span>
                  </button>

                  <button
                    onClick={handleResetToDefault}
                    className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-semibold py-3 px-4 rounded-xl border border-white/15 transition-all"
                    title="Restore default articles"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-amber-300" />
                    <span>Reset Sample Articles</span>
                  </button>
                </>
              ) : (
                <div className="flex flex-wrap items-center gap-3">
                  <div className="text-xs text-slate-300 bg-white/10 border border-white/15 px-3.5 py-2.5 rounded-xl">
                    Showing <strong className="text-white">{blogs.length}</strong> active published stories · View-only guest mode
                  </div>

                  <button
                    onClick={() => {
                      setPendingAdminAction(() => handleOpenNewPost);
                      setIsPasscodeModalOpen(true);
                    }}
                    className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-semibold py-2.5 px-3.5 rounded-xl border border-white/15 transition-all"
                  >
                    <Lock className="w-3.5 h-3.5 text-amber-300" />
                    <span>Admin Login to Publish</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Search, Filters & Blog Grid */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Search & Category Filter */}
        <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search blogs, destinations, topics..."
              className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {[
              'All',
              'Jaipur',
              'Rajasthan',
              'Taj Mahal',
              'Kashmir',
              "Founder's Guide",
              'Travel Advice',
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#C83E5C] text-white shadow-xs'
                    : 'bg-stone-50 text-slate-700 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post Grid */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20 p-8 bg-white rounded-3xl border border-dashed border-stone-300">
            <BookOpen className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <h3 className="font-display text-xl font-bold text-slate-900">No blog articles found</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Try searching with a different keyword or browse other categories.
            </p>
            {isAdmin && (
              <button
                onClick={handleOpenNewPost}
                className="inline-flex items-center gap-2 bg-[#C83E5C] text-white text-xs font-bold py-2.5 px-5 rounded-xl shadow-sm"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Write New Blog Post</span>
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
                  <div className="relative h-56 overflow-hidden bg-stone-100">
                    <img
                      src={diary.image}
                      alt={diary.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    {/* Category Badge */}
                    <span className="absolute top-3.5 left-3.5 bg-slate-900/85 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-white/10">
                      {diary.travelerType}
                    </span>

                    {/* Quick Edit Button (Admin Only) */}
                    {isAdmin && (
                      <button
                        onClick={() => handleOpenEdit(diary)}
                        className="absolute top-3.5 right-3.5 bg-white/95 hover:bg-white text-slate-800 p-2 rounded-lg shadow-sm transition-all hover:scale-105"
                        title="Edit this regular blog"
                      >
                        <Edit3 className="w-3.5 h-3.5 text-[#C83E5C]" />
                      </button>
                    )}

                    {/* Location & Read Time on Image bottom */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-amber-200 font-medium">
                      <div className="flex items-center gap-1 truncate mr-2">
                        <MapPin className="w-3.5 h-3.5 text-rose-300 shrink-0" />
                        <span className="truncate">{diary.location}</span>
                      </div>
                      {diary.readTime && (
                        <div className="flex items-center gap-1 text-[11px] text-slate-200 shrink-0 bg-black/40 px-2 py-0.5 rounded">
                          <Clock className="w-3 h-3 text-amber-300" />
                          <span>{diary.readTime}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
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

                {/* Footer Actions: Strictly View-Only for Guests, Full Controls for Admin */}
                <div className="p-6 pt-0 space-y-2">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveDiary(diary)}
                      className={`text-xs font-bold py-2.5 px-4 rounded-xl text-slate-800 bg-[#FAF7F2] hover:bg-stone-200 transition-colors flex items-center justify-between group-hover:text-[#C83E5C] ${
                        isAdmin ? 'flex-1' : 'w-full'
                      }`}
                    >
                      <span>Read Full Article</span>
                      <Eye className="w-4 h-4 text-stone-400" />
                    </button>

                    {/* Admin-only controls */}
                    {isAdmin && (
                      <>
                        <button
                          type="button"
                          onClick={() => handleOpenEdit(diary)}
                          className="p-2.5 rounded-xl border border-stone-200 hover:border-[#C83E5C] text-slate-600 hover:text-[#C83E5C] hover:bg-rose-50 transition-colors"
                          title="Edit blog post"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDeleteBlog(diary.id)}
                          className="p-2.5 rounded-xl border border-stone-200 hover:border-rose-400 text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                          title="Delete blog post"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* Editor Modal: STRICTLY Admin Only */}
      {isAdmin && (isCreatingNew || editingDiary) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-stone-200 max-h-[92vh] flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-stone-200 flex items-center justify-between bg-[#FAF7F2]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#C83E5C]/10 text-[#C83E5C] flex items-center justify-center font-bold">
                  {isCreatingNew ? <PlusCircle className="w-5 h-5" /> : <Edit3 className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-lg">
                    {isCreatingNew ? 'Publish New Blog Post' : 'Edit Travel Blog Post'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Admin verified controls · Saves to Pinkcityroutes blog storage
                  </p>
                </div>
              </div>

              {/* Mode Toggle & Close */}
              <div className="flex items-center gap-2">
                <div className="bg-stone-200/80 p-1 rounded-xl flex items-center text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setEditorTab('edit')}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      editorTab === 'edit' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditorTab('preview')}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      editorTab === 'preview' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    Preview
                  </button>
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
            </div>

            {/* Tab: Edit Mode */}
            {editorTab === 'edit' ? (
              <form onSubmit={handleSaveBlog} className="p-6 overflow-y-auto space-y-4 flex-1">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Blog Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g. Secret Sunset Viewpoints of Nahargarh Fort"
                    className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Author Name
                    </label>
                    <input
                      type="text"
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Destination / City
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Jaipur, Rajasthan"
                      className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Read Time
                    </label>
                    <input
                      type="text"
                      value={formData.readTime}
                      onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                      placeholder="e.g. 5 min read"
                      className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Category Tag
                    </label>
                    <select
                      value={formData.travelerType}
                      onChange={(e) => setFormData({ ...formData, travelerType: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
                    >
                      <option value="Founder's Guide">Founder's Guide (Harshvardhan)</option>
                      <option value="Day Trip Guide">1-Day Sightseeing Guide</option>
                      <option value="Vehicle & Fleet">Fleet & Car Comparison</option>
                      <option value="Heritage & Culture">Heritage & Architecture</option>
                      <option value="Food & Markets">Street Food & Artisan Bazaars</option>
                      <option value="Guest Diary">Client Travel Story</option>
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
                      className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
                    />
                  </div>
                </div>

                {/* Preset Photos */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Select Cover Photo
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
                    placeholder="Or paste an image URL..."
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
                    placeholder="Concise 2-sentence summary for the blog card..."
                    rows={2}
                    className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Full Travel Article / Itinerary Breakdown *
                  </label>
                  <textarea
                    value={formData.fullStory}
                    onChange={(e) => setFormData({ ...formData, fullStory: e.target.value })}
                    placeholder="Write your complete guide, tips, schedule, secret viewpoints, recommended stops, and vehicle advice..."
                    rows={8}
                    className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Key Highlights & Tips (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={formData.highlights}
                    onChange={(e) => setFormData({ ...formData, highlights: e.target.value })}
                    placeholder="e.g. Best photography spot, Private AC cab recommended, Verified local restaurant"
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
            ) : (
              /* Tab: Live Preview Mode */
              <div className="p-6 overflow-y-auto space-y-6 flex-1">
                <div className="relative h-60 bg-stone-900 rounded-2xl overflow-hidden">
                  <img
                    src={formData.image}
                    alt={formData.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <span className="text-[11px] uppercase tracking-wider text-amber-300 font-bold block mb-1">
                      {formData.location} · {formData.date}
                    </span>
                    <h3 className="font-display text-2xl font-bold leading-tight">
                      {formData.title || 'Untitled Blog Post'}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-600 border-b border-stone-200 pb-3">
                  <span>Author: <strong>{formData.author}</strong></span>
                  <span className="bg-rose-100 text-[#C83E5C] font-semibold px-2 py-0.5 rounded">
                    {formData.travelerType}
                  </span>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">
                  {formData.fullStory || 'No story content entered yet.'}
                </p>

                <div className="pt-4 border-t border-stone-200 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setEditorTab('edit')}
                    className="bg-[#C83E5C] text-white text-xs font-bold py-2 px-5 rounded-xl"
                  >
                    Back to Edit Mode
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Reader Modal (Available to all visitors) */}
      {activeDiary && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
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
                  Curated & Written by: <strong className="text-slate-900">{activeDiary.author}</strong>
                </span>
                <span className="text-[#C83E5C] font-semibold bg-rose-50 px-2.5 py-0.5 rounded-md">
                  {activeDiary.travelerType}
                </span>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Trip Article & Itinerary Notes:
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">
                  {activeDiary.fullStory}
                </p>
              </div>

              {activeDiary.highlights && activeDiary.highlights.length > 0 && (
                <div className="p-4 bg-[#FAF7F2] rounded-xl border border-stone-200/80">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    Key Highlights & Tips:
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
              )}

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
                    Curated on-ground travel guide
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

      {/* Blog Page Footer */}
      <footer className="bg-[#0A121D] text-slate-400 py-8 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-white text-sm">
              Pinkcity<span className="text-[#C83E5C]">routes</span>
            </span>
            <span>· Founded by Harshvardhan Gupta & Ananya Gupta</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a href={`mailto:${AGENCY_DETAILS.email}`} className="hover:text-amber-300">
              {AGENCY_DETAILS.email}
            </a>
            <span>·</span>
            <a href={`tel:${AGENCY_DETAILS.phoneRaw}`} className="hover:text-emerald-400">
              {AGENCY_DETAILS.phone}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
