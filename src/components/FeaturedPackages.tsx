import React, { useState } from 'react';
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
} from 'lucide-react';
import { FEATURED_PACKAGES, TourPackage, AGENCY_DETAILS } from '../data/travelData';
import { getPackageWhatsAppLink } from '../utils/whatsapp';

export const FeaturedPackages: React.FC = () => {
  const [activePackageModal, setActivePackageModal] = useState<TourPackage | null>(null);
  const [travelersCount, setTravelersCount] = useState<number>(2);
  const [selectedMonth, setSelectedMonth] = useState<string>('Upcoming Month');

  const openItinerary = (pkg: TourPackage) => {
    setActivePackageModal(pkg);
    setTravelersCount(2);
  };

  return (
    <section id="packages" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C83E5C] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Curated Signature Itineraries
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Featured Tour Packages
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            All-inclusive, handpicked journeys designed for comfort, authenticity, and seamless
            memories. Verified stays, private transfers, and zero hidden costs.
          </p>
        </div>

        {/* 3 Structured Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-5">
          {FEATURED_PACKAGES.map((pkg, idx) => {
            const isPopular = idx === 0; // Royal Rajasthan
            return (
              <div
                key={pkg.id}
                className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between relative bg-white ${
                  isPopular
                    ? 'border-[#C83E5C] shadow-xl ring-2 ring-[#C83E5C]/10 hover:shadow-2xl'
                    : 'border-stone-200 shadow-sm hover:shadow-xl'
                }`}
              >
                {/* Popular or Recommended banner */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 bg-[#C83E5C] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg border-2 border-white whitespace-nowrap pointer-events-none">
                    <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                    <span>Founder's Top Recommendation</span>
                  </div>
                )}

                {/* Card Top: Image & Key Details */}
                <div>
                  <div className="relative h-56 rounded-t-2xl overflow-hidden bg-stone-100">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    {/* Price Ribbon */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                      <div>
                        <span className="text-[11px] text-amber-200 uppercase tracking-wider block font-semibold">
                          Starting At
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="font-display text-2xl font-bold text-white">
                            {pkg.formattedPrice}
                          </span>
                          <span className="text-xs text-slate-300">/ person</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-amber-300 font-semibold bg-slate-950/60 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10">
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
                      <Clock className="w-3.5 h-3.5" />
                      <span>{pkg.duration}</span>
                      <span aria-hidden="true" className="text-stone-300">·</span>
                      <span className="text-slate-500 font-normal">{pkg.stayType}</span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-slate-900 tracking-tight mb-2">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-slate-500 mb-4">{pkg.subtitle}</p>

                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-100 text-xs text-slate-700 mb-5 flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#C83E5C] shrink-0 mt-0.5" />
                      <span className="font-medium">{pkg.route}</span>
                    </div>

                    {/* Inclusions Section */}
                    <div className="mb-5">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5 flex items-center justify-between">
                        <span>Package Inclusions</span>
                        <span className="text-[10px] text-emerald-600 font-semibold lowercase">All confirmed</span>
                      </div>
                      <ul className="space-y-2">
                        {pkg.inclusions.map((item, i) => (
                          <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Exclusions Section */}
                    <div className="mb-6 pt-4 border-t border-stone-100">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                        Exclusions
                      </div>
                      <ul className="space-y-1.5">
                        {pkg.exclusions.map((item, i) => (
                          <li key={i} className="text-xs text-slate-500 flex items-start gap-2">
                            <XCircle className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Actions: View Itinerary & WhatsApp Inquiry */}
                <div className="p-6 pt-0 space-y-2.5">
                  <button
                    onClick={() => openItinerary(pkg)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-slate-800 bg-stone-100 hover:bg-stone-200 transition-colors"
                  >
                    <FileText className="w-4 h-4 text-slate-600" />
                    <span>View Day-by-Day Itinerary</span>
                  </button>

                  <a
                    href={getPackageWhatsAppLink(pkg.title, pkg.formattedPrice, pkg.duration)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#128C7E] hover:bg-[#075E54] shadow-sm hover:shadow transition-all"
                  >
                    <MessageSquare className="w-4 h-4 fill-white/20" />
                    <span>Inquire via WhatsApp (+91 98932 21141)</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Customization Guarantee Note */}
        <div className="mt-14 max-w-4xl mx-auto bg-amber-50/70 border border-amber-200/60 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-slate-900">
                Need customized dates, extra days, or luxury suite upgrades?
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                Base package prices cover core travel essentials. Upgrading hotel tiers, private vehicles, or special sightseeing activities will be calculated transparently with zero hidden charges. Chat directly with Harshvardhan on WhatsApp (+91 98932 21141) for a customized real-time quote.
              </p>
            </div>
          </div>
          <a
            href={getPackageWhatsAppLink('Customized Tour Request', 'Custom', 'Flexible')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs font-bold px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors"
          >
            Request Custom Quotation
          </a>
        </div>
      </div>

      {/* Day-by-Day Itinerary Modal */}
      {activePackageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-stone-200 max-h-[92vh] flex flex-col">
            {/* Modal Header */}
            <div className="p-6 bg-slate-900 text-white flex items-center justify-between relative">
              <div>
                <div className="flex items-center gap-2 text-xs text-amber-300 font-semibold mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{activePackageModal.duration}</span>
                  <span>·</span>
                  <span>Starting {activePackageModal.formattedPrice} / person</span>
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight">
                  {activePackageModal.title} — Detailed Itinerary
                </h3>
              </div>
              <button
                onClick={() => setActivePackageModal(null)}
                className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Quick Summary Pill Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                  <div className="text-slate-400">Duration</div>
                  <div className="font-bold text-slate-900 mt-0.5">{activePackageModal.duration}</div>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                  <div className="text-slate-400">Stay Category</div>
                  <div className="font-bold text-slate-900 mt-0.5 truncate">{activePackageModal.stayType.split(' ')[0]} 4-Star</div>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                  <div className="text-slate-400">Transfers</div>
                  <div className="font-bold text-slate-900 mt-0.5">Private AC Chauffeur</div>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                  <div className="text-slate-400">Support</div>
                  <div className="font-bold text-emerald-700 mt-0.5">24/7 Harshvardhan</div>
                </div>
              </div>

              {/* Day-by-day timeline */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#C83E5C]" />
                  <span>Day-by-Day Experience Schedule</span>
                </h4>
                <div className="space-y-6 relative before:content-[''] before:absolute before:top-3 before:bottom-3 before:left-3.5 before:w-[2px] before:bg-stone-200">
                  {activePackageModal.dayWiseItinerary.map((day) => (
                    <div key={day.day} className="relative pl-10">
                      {/* Day Number badge */}
                      <div className="absolute left-0 top-0 w-7 h-7 rounded-full bg-[#C83E5C] text-white text-xs font-bold flex items-center justify-center shadow-sm">
                        {day.day}
                      </div>

                      <div className="bg-stone-50/70 p-4 rounded-xl border border-stone-200/80">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                          <h5 className="font-display text-base font-bold text-slate-900">
                            Day {day.day}: {day.title}
                          </h5>
                          <span className="text-[11px] font-semibold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded-md self-start sm:self-auto">
                            {day.meals}
                          </span>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed mb-3">
                          {day.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {day.highlights.map((hl, hIdx) => (
                            <span
                              key={hIdx}
                              className="text-[11px] text-slate-700 bg-white border border-stone-200 px-2 py-1 rounded-md flex items-center gap-1"
                            >
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              {hl}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Group Size Quote Estimator */}
              <div className="p-4 bg-amber-50/80 border border-amber-200/80 rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-amber-700" />
                    <span>Estimate for Your Group Size</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {[1, 2, 4, 6].map((num) => (
                      <button
                        key={num}
                        onClick={() => setTravelersCount(num)}
                        className={`text-xs px-2.5 py-1 rounded-md font-semibold transition-all ${
                          travelersCount === num
                            ? 'bg-[#C83E5C] text-white shadow-sm'
                            : 'bg-white text-slate-700 border border-stone-300'
                        }`}
                      >
                        {num} {num === 1 ? 'Traveler' : 'People'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-amber-200/60 text-xs">
                  <div>
                    <span className="text-slate-600">
                      Calculated Total for {travelersCount} traveler(s):
                    </span>
                    <div className="font-display text-xl font-bold text-slate-900">
                      ₹{(activePackageModal.startingPrice * travelersCount).toLocaleString('en-IN')}
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-500 max-w-xs text-right">
                    *Taxes & private chauffeur included. Subject to seasonal availability.
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-4 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => setActivePackageModal(null)}
                className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Close Itinerary
              </button>

              <a
                href={getPackageWhatsAppLink(
                  activePackageModal.title,
                  `₹${(activePackageModal.startingPrice * travelersCount).toLocaleString('en-IN')}`,
                  activePackageModal.duration,
                  travelersCount,
                  selectedMonth
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#128C7E] hover:bg-[#075E54] text-white text-xs font-bold px-6 py-3 rounded-xl shadow transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book / Inquire with Harshvardhan on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
