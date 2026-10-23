import React, { useState } from 'react';
import { MessageSquare, Phone, X } from 'lucide-react';
import { AGENCY_DETAILS } from '../data/travelData';
import { getGeneralWhatsAppLink } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <>
      {/* Desktop Floating WhatsApp Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-2 animate-in fade-in duration-300">
        {showTooltip && (
          <div className="bg-white rounded-2xl p-3.5 shadow-2xl border border-stone-200 text-xs text-slate-800 max-w-xs relative flex items-start gap-2.5">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-1.5 -left-1.5 w-5 h-5 bg-stone-200 hover:bg-stone-300 rounded-full text-slate-600 flex items-center justify-center text-[10px]"
              aria-label="Dismiss"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 mt-1 animate-pulse" />
            <div>
              <div className="font-bold text-slate-900">Plan with Harsh Vardhan & Ananya</div>
              <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                Ask about packages, dates & get a custom quote within minutes!
              </div>
            </div>
          </div>
        )}

        <a
          href={getGeneralWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-bold text-xs py-3.5 px-5 rounded-full shadow-2xl shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all"
          title="Chat directly on WhatsApp with Harsh Vardhan & Ananya"
        >
          <MessageSquare className="w-5 h-5 fill-slate-950/20" />
          <span className="tracking-wide">Chat with Harsh Vardhan & Ananya</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Conversion Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-stone-200 p-2.5 px-4 flex items-center justify-between gap-3 shadow-2xl">
        <a
          href={`tel:${AGENCY_DETAILS.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 bg-stone-100 active:bg-stone-200 text-slate-900 py-2.5 rounded-xl text-xs font-bold transition-colors"
        >
          <Phone className="w-4 h-4 text-emerald-600" />
          <span>Call Now</span>
        </a>

        <a
          href={getGeneralWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-slate-950 py-2.5 rounded-xl text-xs font-bold shadow-sm"
        >
          <MessageSquare className="w-4 h-4 fill-slate-950/20" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
};
