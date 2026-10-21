import React, { useState } from 'react';
import {
  ShieldCheck,
  HeartHandshake,
  PhoneCall,
  Award,
  MessageSquare,
  Instagram,
  MapPin,
  Sparkles,
  Check,
  Compass,
  Star,
  Users,
} from 'lucide-react';
import { AGENCY_DETAILS } from '../data/travelData';
import { getGeneralWhatsAppLink, createWhatsAppUrl } from '../utils/whatsapp';

export const FounderStory: React.FC = () => {
  const [harshImgFailed, setHarshImgFailed] = useState(false);
  const [ananyaImgFailed, setAnanyaImgFailed] = useState(false);

  return (
    <section id="founders" className="py-24 bg-gradient-to-b from-white via-[#FAF7F2] to-white relative overflow-hidden">
      {/* Decorative ambient radial glows */}
      <div className="absolute top-10 -left-32 w-96 h-96 bg-[#C83E5C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C83E5C] mb-3 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full">
            <HeartHandshake className="w-3.5 h-3.5" />
            Our Leadership & Hospitality Vision
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Meet Our Co-Founders
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Founded by <strong className="text-slate-900 font-semibold">Harshvardhan Gupta</strong> &{' '}
            <strong className="text-slate-900 font-semibold">Ananya Gupta</strong> in Jaipur, Pinkcityroutes
            was born from a shared conviction: every journey should be treated with the same warmth, honesty,
            and flawless attention to detail as if our own family were traveling.
          </p>
        </div>

        {/* 2 Co-Founders Side-by-Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {/* Founder 1: Harshvardhan Gupta */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1">
            <div className="absolute -top-3 right-6 bg-[#111A24] text-amber-300 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-amber-300/30 shadow-sm flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              Co-Founder & Travel Architect
            </div>

            <div>
              {/* Photo & Identity Row */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-2xl overflow-hidden bg-slate-900 shrink-0 border-2 border-amber-300/40 shadow-lg">
                  {!harshImgFailed ? (
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                      alt="Harshvardhan Gupta - Co-Founder of Pinkcityroutes"
                      onError={() => setHarshImgFailed(true)}
                      className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-white p-4 text-center">
                      <div className="w-14 h-14 rounded-full bg-[#C83E5C] text-white flex items-center justify-center text-2xl font-bold font-display mb-2">
                        HG
                      </div>
                      <span className="text-xs font-semibold">Harshvardhan</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 text-center sm:text-left">
                    <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">
                      Jaipur Native
                    </span>
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 text-xs text-amber-600 font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    Bespoke Routes & Operations
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Harshvardhan Gupta
                  </h3>
                  <p className="text-xs font-semibold text-[#C83E5C] mt-0.5">
                    Co-Founder & Chief Travel Architect
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3">
                    Born and raised in the heart of Jaipur, Harshvardhan has spent over a decade mapping
                    the royal circuits of Rajasthan, the valleys of Kashmir, and cross-state highway corridors.
                    He personally inspects our private vehicle fleet and ensures transparent pricing with zero commissions.
                  </p>
                </div>
              </div>

              {/* Founder Quote */}
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-stone-200/80 mb-6">
                <p className="text-xs sm:text-sm italic text-slate-700 leading-relaxed">
                  "Every fort, sand dune, and highway turn in India has a story. I engineer our itineraries
                  so travelers spend less time stuck in traffic and more time savoring golden hour sunsets with peace of mind."
                </p>
              </div>

              {/* Key Domains */}
              <div className="space-y-2 mb-6">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Key Focus & Responsibilities:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Private AC Fleet & Chauffeur Care</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Same-Day & Heritage Circuits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Transparent Milestone Quotes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>24/7 On-Ground Emergency Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Connect Action */}
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
              <a
                href={createWhatsAppUrl(
                  'Hello Harshvardhan, I would like to consult with you directly regarding my travel itinerary.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#128C7E] hover:bg-[#075E54] text-white text-xs font-bold py-3 px-4 rounded-xl shadow-xs transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat with Harshvardhan on WhatsApp</span>
              </a>

              <a
                href={`tel:${AGENCY_DETAILS.phoneRaw}`}
                className="p-3 text-slate-700 hover:text-emerald-600 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors"
                title="Direct Phone Call"
              >
                <PhoneCall className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Founder 2: Ananya Gupta */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1">
            <div className="absolute -top-3 right-6 bg-[#111A24] text-amber-300 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-amber-300/30 shadow-sm flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-pink-400" />
              Co-Founder & Experience Director
            </div>

            <div>
              {/* Photo & Identity Row */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-2xl overflow-hidden bg-slate-900 shrink-0 border-2 border-rose-300/40 shadow-lg">
                  {!ananyaImgFailed ? (
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                      alt="Ananya Gupta - Co-Founder of Pinkcityroutes"
                      onError={() => setAnanyaImgFailed(true)}
                      className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-white p-4 text-center">
                      <div className="w-14 h-14 rounded-full bg-amber-500 text-white flex items-center justify-center text-2xl font-bold font-display mb-2">
                        AG
                      </div>
                      <span className="text-xs font-semibold">Ananya</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 text-center sm:text-left">
                    <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">
                      Hospitality Curator
                    </span>
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#C83E5C] font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                    Guest Delight & Stays
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Ananya Gupta
                  </h3>
                  <p className="text-xs font-semibold text-[#C83E5C] mt-0.5">
                    Co-Founder & Experience Director
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3">
                    With an eye for boutique elegance and authentic cultural charm, Ananya curates
                    our stay collections and guest touchpoints. She personally evaluates heritage havelis,
                    oversees complimentary welcome/farewell goodies, and coordinates curated culinary walks.
                  </p>
                </div>
              </div>

              {/* Founder Quote */}
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-stone-200/80 mb-6">
                <p className="text-xs sm:text-sm italic text-slate-700 leading-relaxed">
                  "Memories live in the small, thoughtful moments — the fragrant welcome garlands, a clean room
                  waiting after a long flight, and authentic local recommendations that aren't on tourist pamphlets."
                </p>
              </div>

              {/* Key Domains */}
              <div className="space-y-2 mb-6">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Key Focus & Responsibilities:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Handpicked Heritage Havelis & Stays</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Welcome & Good Bye Gift Curation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Artisan Bazaars & Food Experiences</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>VIP Personalized Guest Concierge</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Connect Action */}
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
              <a
                href={createWhatsAppUrl(
                  'Hello Ananya, I would like to consult with you directly regarding boutique stays and guest experiences.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#128C7E] hover:bg-[#075E54] text-white text-xs font-bold py-3 px-4 rounded-xl shadow-xs transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat with Ananya on WhatsApp</span>
              </a>

              <a
                href={AGENCY_DETAILS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-pink-600 hover:text-pink-700 bg-pink-50 hover:bg-pink-100 rounded-xl transition-colors"
                title="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Co-Founders Combined Commitment Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#101B2B] via-[#18283E] to-[#101B2B] text-white p-8 sm:p-12 shadow-2xl border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C83E5C]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
              <Award className="w-4 h-4 text-amber-400" />
              The Pinkcityroutes Promise
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              "You are not a booking number to us. You are our honored guest."
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Whether you are traveling solo, planning a once-in-a-lifetime honeymoon, or coordinating a multi-generation
              family reunion, Harshvardhan Gupta and Ananya Gupta oversee your journey with direct accountability.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 text-xs sm:text-sm font-bold py-3.5 px-7 rounded-xl shadow-lg transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950/20" />
                <span>Plan Your Journey Directly with Our Co-Founders</span>
              </a>

              <a
                href={`tel:${AGENCY_DETAILS.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold py-3.5 px-6 rounded-xl border border-white/15 transition-all"
              >
                <PhoneCall className="w-4 h-4 text-amber-300" />
                <span>Call Us: +91 98932 21141</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
