import React, { useState } from 'react';
import { ShieldCheck, HeartHandshake, PhoneCall, Award, MessageSquare, Instagram, MapPin, Sparkles, Check } from 'lucide-react';
import { AGENCY_DETAILS } from '../data/travelData';
import { getGeneralWhatsAppLink } from '../utils/whatsapp';

export const FounderStory: React.FC = () => {
  const [profileImgFailed, setProfileImgFailed] = useState(false);

  return (
    <section id="founder" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Column / Founder Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background border and warm badge */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#E05A76]/20 via-amber-200/30 to-[#128C7E]/20 rounded-3xl transform -rotate-1" />
              
              <div className="relative bg-[#101B2B] rounded-2xl overflow-hidden border border-stone-200 shadow-2xl">
                {!profileImgFailed ? (
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                    alt="Harshvardhan - Founder of Pinkcityroutes"
                    onError={() => setProfileImgFailed(true)}
                    className="w-full h-[430px] object-cover object-top filter brightness-95"
                  />
                ) : (
                  <div className="w-full h-[430px] flex flex-col items-center justify-center p-8 text-center bg-slate-900 text-white">
                    <div className="w-20 h-20 rounded-full bg-[#C83E5C] text-white flex items-center justify-center text-3xl font-display font-bold mb-4 shadow">
                      H
                    </div>
                    <h3 className="font-display text-2xl font-bold">Harshvardhan</h3>
                    <p className="text-xs text-amber-300 uppercase tracking-wider mt-1">Founder & Travel Architect</p>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                {/* Founder badge overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 text-xs text-amber-300 font-semibold mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Founder & Travel Architect</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    Harshvardhan
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Jaipur native · Over a decade of curated travel excellence
                  </p>
                </div>
              </div>

              {/* Floating verified badge */}
              <div className="absolute -bottom-5 -right-4 sm:right-6 z-20 bg-white p-3.5 rounded-2xl border border-stone-200 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Direct Founder Access</div>
                  <div className="text-[11px] text-slate-500">Call / WhatsApp Anytime</div>
                </div>
              </div>
            </div>
          </div>

          {/* Story & Philosophy Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C83E5C] flex items-center gap-1.5 mb-2">
                <HeartHandshake className="w-4 h-4" />
                The Pinkcityroutes Heritage
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                "We treat every journey as if our own family were traveling."
              </h2>
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              Born and rooted in Jaipur — the historic Pink City world-famous for royalty and hospitality — 
              <strong className="text-slate-900 font-semibold"> Pinkcityroutes</strong> was built by{' '}
              <strong className="text-slate-900 font-semibold">Harshvardhan</strong> with a clear vision:
              to rescue travelers from robotic booking algorithms, cookie-cutter tour buses, and hidden commissions.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Whether you are discovering the hidden royal courtyards of Rajasthan, sailing a private cedar
              houseboat in Kashmir, taking in Dubai’s towering skylines, or resting in Bali’s lush rice valleys,
              our team ensures your trip is completely personalized, transparent, and seamless from start to finish.
            </p>

            {/* 4 Pillars of Trust */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-stone-200">
                <div className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-1 flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Personally Vetted Stays
                </div>
                <p className="text-xs text-slate-600">
                  Every heritage hotel, mountain resort, and desert camp is personally inspected for hygiene and service.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-stone-200">
                <div className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-1 flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Verified Private Fleet
                </div>
                <p className="text-xs text-slate-600">
                  Air-conditioned, modern vehicles with disciplined, courteous chauffeurs who double as trusted local guides.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-stone-200">
                <div className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-1 flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Zero Hidden Costs
                </div>
                <p className="text-xs text-slate-600">
                  Crystal-clear quotations upfront with explicit lists of inclusions, meals, and monument guidelines.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-stone-200">
                <div className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-1 flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  24/7 Direct Founder Line
                </div>
                <p className="text-xs text-slate-600">
                  You receive Harshvardhan’s direct phone and WhatsApp number for instant on-trip support.
                </p>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#128C7E] hover:bg-[#075E54] text-white text-xs font-bold px-6 py-3 rounded-xl shadow transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat with Harshvardhan on WhatsApp</span>
              </a>

              <a
                href={`tel:${AGENCY_DETAILS.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-stone-100 hover:bg-stone-200 text-slate-800 text-xs font-bold px-5 py-3 rounded-xl transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                <span>Call {AGENCY_DETAILS.phone}</span>
              </a>

              <a
                href={AGENCY_DETAILS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-pink-700 hover:text-pink-800 text-xs font-semibold px-4 py-3 rounded-xl hover:bg-pink-50 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow @pinkcityroutes</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
