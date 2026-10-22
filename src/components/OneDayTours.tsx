import React, { useState } from 'react';
import { Clock, MapPin, CheckCircle2, MessageSquare, Sparkles, Compass, Car, ChevronRight, X } from 'lucide-react';
import { ONE_DAY_TOURS, OneDayTour } from '../data/travelData';
import { getOneDayTourWhatsAppLink } from '../utils/whatsapp';

export const OneDayTours: React.FC = () => {
  const [activeTourModal, setActiveTourModal] = useState<OneDayTour | null>(null);

  return (
    <section id="one-day-tours" className="py-24 bg-white relative scroll-mt-28 lg:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C83E5C] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Same-Day Excursions & City Sightseeing
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Curated 1-Day Sightseeing Tours
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Short on time? Discover iconic royal monuments, sacred shrines, and heritage expressways in a single day
            with a dedicated air-conditioned private vehicle and seasoned chauffeur.
          </p>
        </div>

        {/* Side-by-Side Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {ONE_DAY_TOURS.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5"
            >
              {/* Card Image */}
              <div>
                <div className="relative h-48 overflow-hidden bg-stone-100">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    loading="lazy"
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (!img.src.includes('photo-1512343879784-a960bf40e7f2')) {
                        img.src = 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80';
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Badge */}
                  <span className="absolute top-3.5 left-3.5 bg-[#C83E5C] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                    {tour.badge}
                  </span>

                  {/* Starting Price in Image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                    <div>
                      <span className="text-[10px] text-amber-200 uppercase tracking-wider block font-semibold">
                        Starting From
                      </span>
                      <span className="font-display text-xl font-bold text-white">
                        {tour.startingPrice}
                      </span>
                    </div>
                    <div className="text-[11px] font-medium text-slate-200 bg-slate-950/60 backdrop-blur-sm px-2 py-0.5 rounded-md flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-300" />
                      <span>{tour.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-4">
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900 leading-snug mb-1.5 group-hover:text-[#C83E5C] transition-colors">
                      {tour.title}
                    </h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                      <Clock className="w-3 h-3 text-emerald-600" />
                      <span>{tour.hours}</span>
                    </p>
                  </div>

                  {/* Route Highlights */}
                  <div className="p-3 rounded-xl bg-[#FAF7F2] border border-stone-100 text-xs text-slate-700 space-y-1">
                    <span className="font-bold text-[11px] uppercase tracking-wider text-slate-900 block">
                      Route Itinerary:
                    </span>
                    <p className="leading-relaxed line-clamp-3">
                      {tour.routeHighlights}
                    </p>
                  </div>

                  {/* Top Key Stops */}
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1.5">
                      {tour.stops.slice(0, 3).map((stop, sIdx) => (
                        <li key={sIdx} className="text-xs text-slate-600 flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{stop}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 space-y-2">
                <button
                  type="button"
                  onClick={() => setActiveTourModal(tour)}
                  className="w-full text-xs font-semibold py-2 px-3 rounded-xl text-slate-700 bg-stone-100 hover:bg-stone-200 transition-colors flex items-center justify-center gap-1"
                >
                  <span>View Full Schedule</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={getOneDayTourWhatsAppLink(tour.title, tour.duration)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#128C7E] hover:bg-[#075E54] text-white text-xs font-bold py-2.5 px-3 rounded-xl shadow-xs transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Book on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tour Detail Modal */}
      {activeTourModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-stone-200 max-h-[90vh] flex flex-col">
            <div className="relative h-48 bg-stone-900">
              <img
                src={activeTourModal.image}
                alt={activeTourModal.title}
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80';
                }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              <button
                onClick={() => setActiveTourModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-[10px] uppercase tracking-wider text-amber-300 font-bold bg-slate-900/60 px-2 py-0.5 rounded">
                  {activeTourModal.duration} · {activeTourModal.startingPrice}
                </span>
                <h3 className="font-display text-2xl font-bold mt-1">
                  {activeTourModal.title}
                </h3>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-5 text-xs text-slate-600">
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <span className="font-bold text-slate-900 block mb-1">Timing & Departure:</span>
                <p>{activeTourModal.hours}</p>
                <p className="mt-1 font-medium text-emerald-700">Recommended for: {activeTourModal.bestFor}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Complete Planned Stops & Sightseeing:
                </h4>
                <div className="space-y-1.5">
                  {activeTourModal.stops.map((stop, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{stop}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Inclusions With Private Chauffeur:
                </h4>
                <div className="space-y-1.5">
                  {activeTourModal.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-700 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-[#C83E5C] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTourModal(null)}
                  className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  Close
                </button>
                <a
                  href={getOneDayTourWhatsAppLink(activeTourModal.title, activeTourModal.duration)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#128C7E] hover:bg-[#075E54] text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Reserve on WhatsApp (+91 98932 21141)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
