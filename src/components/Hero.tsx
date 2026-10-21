import React, { useState } from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, Star, Users, MapPin, Calendar, Sparkles } from 'lucide-react';
import { AGENCY_DETAILS, TOP_DESTINATIONS } from '../data/travelData';
import { getGeneralWhatsAppLink, getDestinationWhatsAppLink } from '../utils/whatsapp';

interface HeroProps {
  onExplorePackages: () => void;
  onOpenPlanner: (initialDestination?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePackages, onOpenPlanner }) => {
  const [selectedDest, setSelectedDest] = useState(TOP_DESTINATIONS[0].name);
  const [selectedMonth, setSelectedMonth] = useState('Next 30 Days');
  const [travelers, setTravelers] = useState('2 Travelers (Couple)');

  const handleQuickFind = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenPlanner(selectedDest);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#101b2b] via-[#16253b] to-[#1c2d47] text-white">
      {/* Background imagery with rich cinematic overlay and warm ambient glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/assets/aistudio/Rajasthan-1_c57fba4b.jpg"
          alt="Jaipur Amber Fort & Heritage Architecture - Pinkcityroutes"
          className="w-full h-full object-cover object-center filter brightness-[0.42] saturate-[1.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#101b2b]/75 via-[#101b2b]/55 to-[#101b2b]/95" />
      </div>

      {/* Decorative gradient radial glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#C83E5C]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="text-center max-w-4xl mx-auto">
          {/* Unboxed Metadata Tagline with separators */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300/90 mb-5">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#E05A76]" />
              Jaipur's Premier Travel Agency
            </span>
            <span aria-hidden="true" className="text-amber-500/50">·</span>
            <span>Founded by Harshvardhan</span>
            <span aria-hidden="true" className="text-amber-500/50">·</span>
            <span className="text-emerald-400">24/7 Concierge</span>
          </div>

          {/* Exact Required Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
            Experience the World with{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-200 to-pink-300">
              Pinkcityroutes
            </span>
          </h1>

          {/* Exact Required Subheadline */}
          <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            Curated domestic and international journeys, bespoke itineraries, and seamless travel
            support guided by Harshvardhan and team.
          </p>

          {/* Exact Required Primary Call to Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              onClick={onExplorePackages}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C83E5C] hover:bg-[#B0334E] text-white text-base font-semibold px-8 py-4 rounded-xl shadow-lg shadow-[#C83E5C]/30 hover:shadow-[#C83E5C]/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Packages</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={getGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 text-base font-semibold px-8 py-4 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare className="w-5 h-5 fill-slate-950/20 stroke-slate-950 stroke-2" />
              <span>Chat on WhatsApp (+91 98932 21141)</span>
            </a>
          </div>

          {/* Quick Finder & Itinerary Starter Bar */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-2xl max-w-3xl mx-auto shadow-2xl">
            <form onSubmit={handleQuickFind} className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div>
                <label className="block text-[11px] font-medium uppercase tracking-wider text-amber-200 mb-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-300" /> Destination
                </label>
                <select
                  value={selectedDest}
                  onChange={(e) => setSelectedDest(e.target.value)}
                  className="w-full bg-slate-900/80 border border-slate-700/80 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
                >
                  {TOP_DESTINATIONS.map((d) => (
                    <option key={d.id} value={d.name} className="bg-slate-900 text-white">
                      {d.name}
                    </option>
                  ))}
                  <option value="Custom Tour" className="bg-slate-900 text-white">
                    Other / Custom Destination
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-medium uppercase tracking-wider text-amber-200 mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-300" /> Travel Period
                </label>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="w-full bg-slate-900/80 border border-slate-700/80 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
                >
                  <option value="Next 30 Days" className="bg-slate-900 text-white">Within Next 30 Days</option>
                  <option value="Summer Holidays" className="bg-slate-900 text-white">Upcoming Month</option>
                  <option value="Autumn / Festive Season" className="bg-slate-900 text-white">Festive Season</option>
                  <option value="Winter Holiday" className="bg-slate-900 text-white">Winter Vacation</option>
                </select>
              </div>

              <div className="flex flex-col justify-end">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm py-2 px-4 rounded-lg transition-all flex items-center justify-center gap-1.5 shadow"
                >
                  <span>Build Route</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Trust Badges / Social Proof Counters */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-display font-bold text-white">100%</div>
            <div className="text-xs text-slate-300">Custom Tailored Itineraries</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-display font-bold text-amber-300 flex items-center justify-center gap-1">
              4.9 <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
            </div>
            <div className="text-xs text-slate-300">Guest Review Rating</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-display font-bold text-white">12,000+</div>
            <div className="text-xs text-slate-300">Memorable Journeys Crafted</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-display font-bold text-emerald-400">24/7</div>
            <div className="text-xs text-slate-300">Direct Founder Access</div>
          </div>
        </div>
      </div>
    </section>
  );
};
