import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS, AGENCY_DETAILS } from '../data/travelData';
import { getGeneralWhatsAppLink } from '../utils/whatsapp';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C83E5C] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Answers to Common Questions
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about planning, customization, pricing, and on-trip support
            with Pinkcityroutes.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-stone-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 bg-white hover:bg-stone-50 transition-colors"
                >
                  <span className="font-display text-base sm:text-lg font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#C83E5C]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 bg-stone-50/50 text-slate-600 text-sm leading-relaxed border-t border-stone-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions CTA */}
        <div className="mt-12 text-center p-6 bg-[#FAF7F2] rounded-2xl border border-stone-200">
          <p className="text-sm font-semibold text-slate-800">
            Have a unique question or custom itinerary in mind?
          </p>
          <p className="text-xs text-slate-500 mt-1 mb-4">
            Harshvardhan is available directly on WhatsApp to answer any specific query within minutes.
          </p>
          <a
            href={getGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#128C7E] hover:bg-[#075E54] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-sm transition-all"
          >
            <span>Ask Harshvardhan on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
