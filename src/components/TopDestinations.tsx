import React, { useState } from 'react';
import { MapPin, Clock, Calendar, ArrowRight, MessageSquare, Check, Sparkles, X } from 'lucide-react';
import { TOP_DESTINATIONS, Destination } from '../data/travelData';
import { getDestinationWhatsAppLink } from '../utils/whatsapp';

interface TopDestinationsProps {
  onSelectDestinationForPlan: (destName: string) => void;
}

export const TopDestinations: React.FC<TopDestinationsProps> = ({ onSelectDestinationForPlan }) => {
  const [filter, setFilter] = useState<'all' | 'domestic' | 'international'>('all');
  const [activeModalDest, setActiveModalDest] = useState<Destination | null>(null);

  const filteredDestinations = TOP_DESTINATIONS.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <section id="destinations" className="py-20 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-[#C83E5C] mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Handpicked Portfolios
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Top Destination Highlights
            </h2>
            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              From majestic Rajasthan fortresses and snow-peaked Kashmir valleys to sun-kissed
              international retreats in Dubai, Bali, and Thailand.
            </p>
          </div>

          {/* Filter Segmented Controls */}
          <div className="inline-flex p-1 bg-stone-200/80 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                filter === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Destinations ({TOP_DESTINATIONS.length})
            </button>
            <button
              onClick={() => setFilter('domestic')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                filter === 'domestic'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Domestic Wonders
            </button>
            <button
              onClick={() => setFilter('international')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                filter === 'international'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              International Escapes
            </button>
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-stone-100">
                <img
                  src={dest.image}
                  alt={dest.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Clean unboxed category & location in corner */}
                <div className="absolute top-4 left-4 z-10 text-xs font-semibold text-white drop-shadow-md flex items-center gap-2">
                  <span className="bg-slate-900/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] uppercase tracking-wider text-amber-300 border border-white/10">
                    {dest.category === 'domestic' ? 'India Domestic' : 'International'}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs text-amber-200 font-medium flex items-center gap-1 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-300" />
                    <span>{dest.stateOrCountry}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white leading-snug">
                    {dest.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  {/* Clean unboxed metadata strip with typographic separators */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-medium">
                    <span className="flex items-center gap-1 text-slate-700">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      {dest.duration}
                    </span>
                    <span aria-hidden="true" className="text-stone-300">·</span>
                    <span className="flex items-center gap-1 text-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-[#C83E5C]" />
                      Best: {dest.bestTime}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 mb-4">
                    {dest.description}
                  </p>

                  {/* Key Attractions list */}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Key Attractions:
                    </div>
                    <ul className="space-y-1.5">
                      {dest.keyAttractions.slice(0, 4).map((attraction, idx) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{attraction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pricing & Actions */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-medium">
                      Starting From
                    </span>
                    <span className="font-display text-xl font-bold text-slate-900">
                      {dest.startingPrice}
                    </span>
                    <span className="text-[10px] text-slate-400 block">/ person</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveModalDest(dest)}
                      className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#C83E5C] bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
                    >
                      Quick View
                    </button>
                    <a
                      href={getDestinationWhatsAppLink(dest.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#128C7E] hover:bg-[#075E54] text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
                      title="Inquire via WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Destination Quick View Modal */}
      {activeModalDest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200 max-h-[90vh] flex flex-col">
            <div className="relative h-56 bg-stone-900">
              <img
                src={activeModalDest.image}
                alt={activeModalDest.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              <button
                onClick={() => setActiveModalDest(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold">
                  {activeModalDest.stateOrCountry}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold">
                  {activeModalDest.name}
                </h3>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
                  Destination Overview
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeModalDest.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 p-4 bg-stone-50 rounded-xl border border-stone-100 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Recommended Duration</span>
                  <span className="font-semibold text-slate-800 text-sm">{activeModalDest.duration}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Ideal Season to Visit</span>
                  <span className="font-semibold text-slate-800 text-sm">{activeModalDest.bestTime}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Starting Package Price</span>
                  <span className="font-semibold text-[#C83E5C] text-sm">{activeModalDest.startingPrice} / person</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Personal Route Curation</span>
                  <span className="font-semibold text-emerald-700 text-sm">By Harsh Vardhan & Ananya</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                  All Featured Attractions & Experiences
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalDest.keyAttractions.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                  {activeModalDest.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-amber-800 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => {
                    setActiveModalDest(null);
                    onSelectDestinationForPlan(activeModalDest.name);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-stone-300 text-slate-800 text-xs font-semibold hover:bg-stone-50 transition-colors"
                >
                  Customize in Trip Planner
                </button>
                <a
                  href={getDestinationWhatsAppLink(activeModalDest.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#128C7E] hover:bg-[#075E54] text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp (+91 98932 21141)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
