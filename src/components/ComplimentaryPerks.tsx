import React from 'react';
import { Sparkles, Check, Gift, ShoppingBag, Landmark, Car, Ticket, ShieldCheck, Heart } from 'lucide-react';
import { COMPLIMENTARY_PERKS, ComplimentaryPerk } from '../data/travelData';

export const ComplimentaryPerks: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'welcome-goodies':
        return <Gift className="w-6 h-6 text-[#C83E5C]" />;
      case 'goodbye-goodies':
        return <ShoppingBag className="w-6 h-6 text-amber-600" />;
      case 'guide-services':
        return <Landmark className="w-6 h-6 text-emerald-600" />;
      case 'pickup-drop':
        return <Car className="w-6 h-6 text-sky-600" />;
      case 'exclusive-vouchers':
        return <Ticket className="w-6 h-6 text-purple-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="perks" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 -left-24 w-80 h-80 bg-rose-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C83E5C] mb-3">
            <Heart className="w-3.5 h-3.5 fill-[#C83E5C]" />
            Pink City Hospitality Standards
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            The Pinkcityroutes Experience: What's Always Included on Us
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            True luxury is in thoughtful care. We believe travel should be full of delight from the moment
            you arrive until you unpack your souvenirs back home.
          </p>
        </div>

        {/* 5-Point Luxury Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {COMPLIMENTARY_PERKS.map((perk, idx) => (
            <div
              key={perk.id}
              className="bg-[#FAF7F2] rounded-2xl p-6 border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Emoji / Icon Container */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-stone-200/60 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {perk.iconEmoji}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-white px-2 py-0.5 rounded border border-stone-200">
                    {perk.tag}
                  </span>
                </div>

                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#C83E5C] mb-1">
                  {perk.subtitle}
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 leading-snug mb-3">
                  {perk.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {perk.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-200/70 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                <Check className="w-3.5 h-3.5" />
                <span>100% Complimentary</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom hospitality assurance note */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          *Terms & conditions apply on select third-party monument tickets and partner merchant vouchers.
          All complimentary inclusions are coordinated seamlessly by Harshvardhan and your private chauffeur.
        </div>
      </div>
    </section>
  );
};
