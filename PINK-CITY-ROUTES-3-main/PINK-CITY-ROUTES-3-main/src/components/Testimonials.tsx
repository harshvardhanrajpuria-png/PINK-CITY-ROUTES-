import React from 'react';
import { Star, Quote, Sparkles, MapPin, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/travelData';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C83E5C] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Verified Guest Journeys
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Loved by Travelers Worldwide
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Real stories from honeymooners, families, and globetrotters who explored the world with
            Pinkcityroutes and co-founders Harsh Vardhan Gupta & Ananya Gupta.
          </p>
        </div>

        {/* Testimonials Grid (3 Columns for 3 Indian Travelers) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-7 border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <Quote className="w-9 h-9 text-amber-100 group-hover:text-amber-200 transition-colors absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Star rating & verified badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                    <CheckCircle className="w-3 h-3" />
                    Verified Guest
                  </span>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-5 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover border-2 border-stone-100 shadow-sm group-hover:scale-105 transition-transform"
                  />
                  <div>
                    <div className="font-display text-base font-bold text-slate-900 leading-tight">
                      {t.name}
                    </div>
                    <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>{t.location}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-semibold text-[#C83E5C] block">
                    {t.destination}
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">{t.tripDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
