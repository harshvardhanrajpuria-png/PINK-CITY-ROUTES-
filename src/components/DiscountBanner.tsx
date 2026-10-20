import React from 'react';
import { Tag, Sparkles, MessageSquare, ArrowRight, Percent } from 'lucide-react';
import { AGENCY_DETAILS } from '../data/travelData';
import { getCouponWhatsAppLink } from '../utils/whatsapp';

interface DiscountBannerProps {
  onScrollToCoupons?: () => void;
}

export const DiscountBanner: React.FC<DiscountBannerProps> = ({ onScrollToCoupons }) => {
  return (
    <aside aria-label="Limited Time Offer" className="relative overflow-hidden bg-gradient-to-r from-[#A82A45] via-[#C83E5C] to-[#E05A76] text-white py-4 px-4 sm:px-6 shadow-md border-y border-rose-300/30">
      {/* Decorative subtle background accents */}
      <div className="absolute -left-12 -top-12 w-48 h-48 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/15 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        {/* Banner Copy */}
        <div className="flex items-center gap-3.5 text-center md:text-left">
          <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center shrink-0 shadow-sm">
            <Percent className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider bg-amber-300 text-slate-950 px-2 py-0.5 rounded shadow-sm">
                Instant 5% - 8% Off
              </span>
              <p className="font-display text-sm sm:text-base font-bold text-white tracking-tight">
                Limited Time Offer: Get an instant 5% to 8% discount on all advance tour package bookings!
              </p>
            </div>
            <p className="text-xs text-rose-100 mt-0.5 font-medium">
              Mention your discount code on WhatsApp to lock in your special rate.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 shrink-0">
          {onScrollToCoupons && (
            <button
              onClick={onScrollToCoupons}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 bg-white hover:bg-stone-100 px-4 py-2 rounded-lg shadow-sm transition-all hover:scale-105 active:scale-95"
            >
              <Tag className="w-3.5 h-3.5 text-[#C83E5C]" />
              <span>View Coupon Codes</span>
            </button>
          )}

          <a
            href={getCouponWhatsAppLink('PINKCITYEARLY', 'Flat 8% OFF')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-950 bg-amber-300 hover:bg-amber-400 px-4 py-2 rounded-lg shadow-sm transition-all hover:scale-105 active:scale-95"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-slate-950/20" />
            <span>Claim via WhatsApp</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
