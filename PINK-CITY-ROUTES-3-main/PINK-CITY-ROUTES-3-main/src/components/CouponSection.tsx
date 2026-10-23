import React, { useState } from 'react';
import { Tag, Copy, Check, MessageSquare, Sparkles, Percent, ShieldCheck } from 'lucide-react';
import { PROMO_COUPONS, PromoCoupon } from '../data/travelData';
import { getCouponWhatsAppLink } from '../utils/whatsapp';

export const CouponSection: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2000);
  };

  return (
    <section id="coupons" className="py-20 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C83E5C] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Seasonal Savings & Privileges
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Exclusive Promo & Coupon Codes
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Unlock instant savings on your personalized holiday. Choose a coupon code below and mention
            it directly to Harsh Vardhan Gupta & Ananya Gupta when locking in your bespoke itinerary.
          </p>
        </div>

        {/* 5 Coupon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROMO_COUPONS.map((coupon, idx) => {
            const isCopied = copiedCode === coupon.code;
            const isVIP = coupon.code === 'harshdostspecial';

            return (
              <div
                key={coupon.code}
                className={`bg-white rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1 ${
                  isVIP
                    ? 'border-amber-400/80 shadow-lg ring-2 ring-amber-400/20 bg-gradient-to-br from-white to-amber-50/30'
                    : 'border-stone-200/90 shadow-sm hover:shadow-xl'
                }`}
              >
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${
                      isVIP
                        ? 'bg-amber-100 text-amber-900 border border-amber-300'
                        : 'bg-rose-50 text-[#C83E5C] border border-rose-100'
                    }`}
                  >
                    {coupon.badge}
                  </span>
                  <div className="font-display text-xl font-bold text-slate-900">
                    {coupon.discount}
                  </div>
                </div>

                {/* Title & Description */}
                <div className="mb-6">
                  <h3 className="font-display text-lg font-bold text-slate-900 leading-snug mb-2">
                    {coupon.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {coupon.description}
                  </p>
                </div>

                {/* Coupon Code Strip */}
                <div className="pt-4 border-t border-dashed border-stone-200 space-y-3">
                  <div className="flex items-center justify-between gap-2 p-2.5 bg-stone-50 rounded-xl border border-stone-200/80">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <Tag className="w-4 h-4 text-[#C83E5C] shrink-0" />
                      <code className="font-mono text-sm font-bold text-slate-900 tracking-wide truncate">
                        {coupon.code}
                      </code>
                    </div>

                    <button
                      onClick={() => handleCopy(coupon.code)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                        isCopied
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-white hover:bg-stone-100 text-slate-700 border border-stone-200 shadow-xs'
                      }`}
                      title="Copy coupon code"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Apply via WhatsApp Button */}
                  <a
                    href={getCouponWhatsAppLink(coupon.code, coupon.discount)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#128C7E] hover:bg-[#075E54] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-xs transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Apply via WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Required Mandatory Note Below Cards */}
        <div className="mt-10 text-center max-w-2xl mx-auto p-4 rounded-xl bg-white border border-stone-200 shadow-xs">
          <p className="text-xs text-slate-700 font-medium flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              <strong>Note:</strong> Apply coupons directly when confirming your booking with Harsh Vardhan Gupta & Ananya Gupta on WhatsApp.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
