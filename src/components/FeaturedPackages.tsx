import React, { useState, useMemo } from 'react';
import {
  Clock,
  CheckCircle2,
  XCircle,
  MessageSquare,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Star,
  Users,
  MapPin,
  Calendar,
  X,
  FileText,
  Filter,
  ShieldAlert,
  Info,
  Search,
  RotateCcw,
} from 'lucide-react';
import { FEATURED_PACKAGES, TourPackage, AGENCY_DETAILS } from '../data/travelData';
import { PackageImageCarousel } from './PackageImageCarousel';
import { getPackageWhatsAppLink } from '../utils/whatsapp';

type FilterCategory = 'all' | 'jaipur' | 'desert' | 'mewar' | 'golden-triangle' | 'wildlife';

export const FeaturedPackages: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePackageModal, setActivePackageModal] = useState<TourPackage | null>(null);
  const [travelersCount, setTravelersCount] = useState<number>(2);
  const [selectedMonth, setSelectedMonth] = useState<string>('Upcoming Month');

  const openItinerary = (pkg: TourPackage) => {
    setActivePackageModal(pkg);
    setTravelersCount(2);
  };

  const handleOpenAdvisory = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-traveler-advisory'));
  };

  // Pure state filtering: only queries against the 13 official packages
  const filteredPackages = useMemo(() => {
    return FEATURED_PACKAGES.filter((pkg) => {
      // Category filter check
      const matchesCategory =
        selectedFilter === 'all' ||
        (selectedFilter === 'jaipur' && pkg.circuitCategory === 'jaipur') ||
        (selectedFilter === 'desert' && (pkg.circuitCategory === 'desert' || pkg.circuitCategory === 'grand')) ||
        (selectedFilter === 'mewar' && pkg.circuitCategory === 'mewar') ||
        (selectedFilter === 'golden-triangle' && (pkg.circuitCategory === 'golden-triangle' || pkg.circuitCategory === 'grand')) ||
        (selectedFilter === 'wildlife' && pkg.circuitCategory === 'wildlife');

      if (!matchesCategory) return false;

      // Search query check across title, route, subtitle, days, and highlights
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const inTitle = pkg.title.toLowerCase().includes(q);
      const inRoute = pkg.route.toLowerCase().includes(q);
      const inSubtitle = pkg.subtitle.toLowerCase().includes(q);
      const inDuration = pkg.duration.toLowerCase().includes(q);
      const inItinerary = pkg.dayWiseItinerary.some(
        (d) => d.title.toLowerCase().includes(q) || d.highlights.some((h) => h.toLowerCase().includes(q))
      );

      return inTitle || inRoute || inSubtitle || inDuration || inItinerary;
    });
  }, [selectedFilter, searchQuery]);

  const filterTabs = [
    { id: 'all', label: `All Packages (${FEATURED_PACKAGES.length})` },
    { id: 'jaipur', label: 'Jaipur & Express' },
    { id: 'desert', label: 'Thar Desert & Havelis' },
    { id: 'mewar', label: 'Royal Mewar & Lakes' },
    { id: 'golden-triangle', label: 'Golden Triangle & Agra' },
    { id: 'wildlife', label: 'Wildlife & Safari' },
  ];

  return (
    <section id="packages" className="py-24 bg-stone-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C83E5C] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            13 Signature Pinkcityroutes Journeys
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Curated Tour Packages
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Our complete 13-package master catalog engineered for the smoothest travel flow.
            Handpicked heritage stays, dedicated private chauffeurs, and 24/7 personal support from
            founders Harsh Vardhan Gupta & Ananya Gupta.
          </p>

          {/* Quick Notice Trigger & Master Count Badge */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 text-xs text-slate-700 bg-white/95 border border-stone-200 shadow-sm px-4 py-2 rounded-full">
              <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
              <span>All packages feature "Price on Request" & flexible sequencing.</span>
              <button
                type="button"
                onClick={handleOpenAdvisory}
                className="text-[#C83E5C] hover:underline font-bold text-xs cursor-pointer ml-1"
              >
                Read Traveler Advisory
              </button>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3.5 py-1.5 rounded-full font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Official Master Catalog ({FEATURED_PACKAGES.length} Tours)</span>
            </div>
          </div>
        </div>

        {/* Real-Time Search Bar & Filter Navigation */}
        <div className="max-w-3xl mx-auto mb-8 space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search across 13 packages by fort, destination, duration, or keyword (e.g. Amer, Taj Mahal, Desert, Tiger)..."
              className="w-full bg-white border border-stone-300/90 rounded-2xl pl-11 pr-10 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C83E5C] shadow-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-stone-100"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter Navigation Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2">
            {filterTabs.map((tab) => {
              const isActive = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id as FilterCategory)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#101B2B] text-white shadow-md'
                      : 'bg-white text-slate-600 border border-stone-200 hover:border-slate-400 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Active Search & Filter Feedback */}
          <div className="text-center text-xs text-slate-500 flex items-center justify-center gap-2">
            <span>
              Showing <strong className="text-slate-900 font-bold">{filteredPackages.length}</strong> of{' '}
              <strong className="text-slate-900 font-bold">{FEATURED_PACKAGES.length}</strong> official packages
            </span>
            {(searchQuery || selectedFilter !== 'all') && (
              <button
                type="button"
                onClick={() => {
                  setSelectedFilter('all');
                  setSearchQuery('');
                }}
                className="inline-flex items-center gap-1 text-[#C83E5C] hover:underline font-semibold ml-2 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* 13 Packages Grid or Zero Match State */}
        {filteredPackages.length === 0 ? (
          <div className="bg-white rounded-3xl border border-stone-200 p-12 text-center max-w-lg mx-auto shadow-sm my-8">
            <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="font-display text-xl font-bold text-slate-900">No packages matched your search</h3>
            <p className="text-xs text-slate-500 mt-1 mb-5">
              Try searching for "Jaipur", "Udaipur", "Taj Mahal", "Tiger", or "Jaisalmer".
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedFilter('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-xl bg-[#101B2B] text-white text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
            >
              View All 13 Official Packages
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredPackages.map((pkg, idx) => {
              return (
                <div
                  key={pkg.id}
                  className="rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between bg-white overflow-hidden group"
                >
                {/* Top Part: Dynamic Image Carousel & Header */}
                <div>
                  <div className="relative">
                    {/* Dynamic Image Slider Component */}
                    <PackageImageCarousel
                      images={pkg.images && pkg.images.length > 0 ? pkg.images : [pkg.image]}
                      title={pkg.title}
                      aspectRatioClass="aspect-[16/10]"
                    />

                    {/* Badge top-left */}
                    {pkg.badge && (
                      <div className="absolute top-3 left-3 z-30 inline-flex items-center gap-1.5 bg-[#C83E5C] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg border border-white/20 whitespace-nowrap pointer-events-none">
                        <Sparkles className="w-3 h-3 text-amber-200" />
                        <span>{pkg.badge}</span>
                      </div>
                    )}

                    {/* Price Ribbon Bottom Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 z-30 flex items-end justify-between text-white pointer-events-none">
                      <div className="bg-slate-950/75 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                        <span className="text-[10px] text-amber-300 uppercase tracking-wider block font-bold">
                          Pricing Mode
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="font-display text-lg font-bold text-white">
                            {pkg.formattedPrice}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-amber-300 font-semibold bg-slate-950/75 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-white/10">
                        <Star className="w-3.5 h-3.5 fill-amber-300" />
                        <span>{pkg.rating}</span>
                        <span className="text-slate-400">({pkg.reviewsCount})</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    {/* Header & Duration */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#C83E5C] mb-2">
                      <Clock className="w-3.5 h-3.5 shrink-0" />
                      <span>{pkg.duration}</span>
                      <span aria-hidden="true" className="text-stone-300">·</span>
                      <span className="text-slate-500 font-normal truncate">{pkg.stayType.split('(')[0]}</span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-slate-900 tracking-tight mb-2 line-clamp-2">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-slate-500 mb-4 line-clamp-2">{pkg.subtitle}</p>

                    {/* Route */}
                    <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200/80 text-xs text-slate-700 mb-4 flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#C83E5C] shrink-0 mt-0.5" />
                      <span className="font-medium line-clamp-2">{pkg.route}</span>
                    </div>

                    {/* Operational Pricing Notice Link */}
                    <div className="mb-5 p-2.5 bg-amber-50/70 rounded-xl border border-amber-200/50 text-[11px] text-amber-900 flex items-start gap-2">
                      <Info className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                      <div>
                        <span>Price varies based on vehicle tier & 5-star palace choice.</span>{' '}
                        <button
                          type="button"
                          onClick={handleOpenAdvisory}
                          className="font-bold underline text-amber-800 hover:text-amber-950 cursor-pointer"
                        >
                          View Policy
                        </button>
                      </div>
                    </div>

                    {/* Key Itinerary Day Preview */}
                    <div className="mb-4">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center justify-between">
                        <span>Day-by-Day Highlights ({pkg.dayWiseItinerary.length} Days)</span>
                      </div>
                      <div className="space-y-1.5 text-xs text-slate-600">
                        {pkg.dayWiseItinerary.slice(0, 3).map((d) => (
                          <div key={d.day} className="flex items-center gap-2 truncate">
                            <span className="w-5 h-5 rounded-md bg-stone-100 text-[#C83E5C] text-[10px] font-bold flex items-center justify-center shrink-0">
                              D{d.day}
                            </span>
                            <span className="truncate font-medium">{d.title}</span>
                          </div>
                        ))}
                        {pkg.dayWiseItinerary.length > 3 && (
                          <p className="text-[11px] text-[#C83E5C] font-semibold pt-1">
                            + {pkg.dayWiseItinerary.length - 3} more days in full schedule
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Inclusions summary */}
                    <div className="mb-4 pt-3 border-t border-stone-100">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2 flex items-center justify-between">
                        <span>Confirmed Inclusions</span>
                        <span className="text-[10px] text-emerald-600 font-semibold">Verified</span>
                      </div>
                      <ul className="space-y-1.5">
                        {pkg.inclusions.slice(0, 3).map((item, i) => (
                          <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-tight line-clamp-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 space-y-2.5">
                  <button
                    type="button"
                    onClick={() => openItinerary(pkg)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-slate-800 bg-stone-100 hover:bg-stone-200 transition-colors cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-slate-600" />
                    <span>View Day-by-Day Itinerary ({pkg.days}D/{pkg.nights}N)</span>
                  </button>

                  <a
                    href={getPackageWhatsAppLink(pkg.title, 'Price on Request', pkg.duration)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#128C7E] hover:bg-[#075E54] shadow-sm hover:shadow transition-all"
                  >
                    <MessageSquare className="w-4 h-4 fill-white/20" />
                    <span>Book via WhatsApp (+91 98932 21141)</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Advisory Banner Footer */}
        <div className="mt-16 max-w-4xl mx-auto bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#101B2B] text-amber-300 flex items-center justify-center shrink-0 shadow">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-slate-900">
                Important Traveler Notice & Operational Policy
              </h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Flexible sightseeing sequence, instant coordinator communication via WhatsApp,
                universal monument ticket exclusion (pay direct on-site with zero markup), and
                vehicle/palace pricing adjustments.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleOpenAdvisory}
            className="shrink-0 text-xs font-bold px-5 py-3 rounded-xl bg-[#C83E5C] text-white hover:bg-[#b0344f] transition-colors cursor-pointer shadow"
          >
            Read Operational Policy
          </button>
        </div>
      </div>

      {/* Day-by-Day Itinerary Modal */}
      {activePackageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-stone-200 max-h-[92vh] flex flex-col">
            {/* Modal Header */}
            <div className="p-6 bg-[#101B2B] text-white flex items-center justify-between relative">
              <div>
                <div className="flex items-center gap-2 text-xs text-amber-300 font-semibold mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{activePackageModal.duration}</span>
                  <span>·</span>
                  <span>{activePackageModal.formattedPrice}</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight">
                  {activePackageModal.title}
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">{activePackageModal.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setActivePackageModal(null)}
                className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Media Carousel inside Modal */}
              <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
                <PackageImageCarousel
                  images={
                    activePackageModal.images && activePackageModal.images.length > 0
                      ? activePackageModal.images
                      : [activePackageModal.image]
                  }
                  title={activePackageModal.title}
                  aspectRatioClass="aspect-[16/9]"
                />
              </div>

              {/* Quick Summary Pill Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                  <div className="text-slate-400 font-medium">Duration</div>
                  <div className="font-bold text-slate-900 mt-0.5">{activePackageModal.duration}</div>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                  <div className="text-slate-400 font-medium">Stay Category</div>
                  <div className="font-bold text-slate-900 mt-0.5 truncate">{activePackageModal.stayType}</div>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                  <div className="text-slate-400 font-medium">Transfers</div>
                  <div className="font-bold text-slate-900 mt-0.5">Private AC Chauffeur</div>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                  <div className="text-slate-400 font-medium">Trip Supervision</div>
                  <div className="font-bold text-emerald-700 mt-0.5">Harsh Vardhan & Ananya</div>
                </div>
              </div>

              {/* Day-by-Day Detailed Timeline */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#C83E5C]" />
                  <span>Elaborated Day-by-Day Schedule</span>
                </h4>
                <div className="space-y-6 relative before:content-[''] before:absolute before:top-3 before:bottom-3 before:left-3.5 before:w-[2px] before:bg-stone-200">
                  {activePackageModal.dayWiseItinerary.map((day) => (
                    <div key={day.day} className="relative pl-10">
                      {/* Day Number badge */}
                      <div className="absolute left-0 top-0 w-7 h-7 rounded-full bg-[#C83E5C] text-white text-xs font-bold flex items-center justify-center shadow-sm">
                        {day.day}
                      </div>

                      <div className="bg-stone-50/70 p-4 sm:p-5 rounded-2xl border border-stone-200/80">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                          <h5 className="font-display text-base font-bold text-slate-900">
                            Day {day.day}: {day.title}
                          </h5>
                          <span className="text-[11px] font-semibold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded-md self-start sm:self-auto">
                            {day.meals}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                          {day.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {day.highlights.map((hl, hIdx) => (
                            <span
                              key={hIdx}
                              className="text-[11px] text-slate-700 bg-white border border-stone-200 px-2.5 py-1 rounded-lg flex items-center gap-1.5"
                            >
                              <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                              <span>{hl}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-stone-200">
                <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Package Inclusions</span>
                  </h5>
                  <ul className="space-y-2">
                    {activePackageModal.inclusions.map((inc, i) => (
                      <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-rose-50/50 rounded-2xl border border-rose-100">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-rose-800 mb-3 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-rose-600" />
                    <span>Exclusions & Policies</span>
                  </h5>
                  <ul className="space-y-2">
                    {activePackageModal.exclusions.map((exc, i) => (
                      <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                        <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Group Size Selector for Inquiry */}
              <div className="p-4 bg-amber-50/80 border border-amber-200/80 rounded-2xl space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-amber-700" />
                    <span>Select Number of Travelers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {[1, 2, 4, 6, 8].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setTravelersCount(num)}
                        className={`text-xs px-3 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                          travelersCount === num
                            ? 'bg-[#101B2B] text-white shadow-sm'
                            : 'bg-white text-slate-700 border border-stone-300 hover:border-slate-400'
                        }`}
                      >
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="text-[11px] text-slate-600 border-t border-amber-200/60 pt-2 flex items-center justify-between">
                  <span>Vehicles allocated: Sedan (1-3) · Innova Crysta (4-6) · Tempo Traveller (7+)</span>
                  <button
                    type="button"
                    onClick={handleOpenAdvisory}
                    className="text-[#C83E5C] font-bold hover:underline"
                  >
                    Policy Notice
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setActivePackageModal(null)}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Close Itinerary
              </button>

              <a
                href={getPackageWhatsAppLink(
                  activePackageModal.title,
                  'Price on Request',
                  activePackageModal.duration,
                  travelersCount,
                  selectedMonth
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#128C7E] hover:bg-[#075E54] text-white text-xs font-bold px-6 py-3 rounded-xl shadow transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire for {travelersCount} Traveler(s) with Harsh Vardhan & Ananya</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
