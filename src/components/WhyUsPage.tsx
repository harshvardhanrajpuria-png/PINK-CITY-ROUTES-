import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Users,
  Clock,
  Sparkles,
  PhoneCall,
  MessageSquare,
  Car,
  HeartHandshake,
  Compass,
  ArrowLeft,
  ChevronRight,
  Award,
  BadgePercent,
  MapPin,
  Coffee,
} from 'lucide-react';
import { AGENCY_DETAILS } from '../data/travelData';
import { getGeneralWhatsAppLink, createWhatsAppUrl } from '../utils/whatsapp';

interface WhyUsPageProps {
  onBackToHome: () => void;
  onExplorePackages: () => void;
  onOpenPlanner: () => void;
}

export const WhyUsPage: React.FC<WhyUsPageProps> = ({
  onBackToHome,
  onExplorePackages,
  onOpenPlanner,
}) => {
  const milestones = [
    { number: '2,500+', label: 'Road Journeys Completed', desc: 'Across Rajasthan, Delhi, Agra, and Golden Triangle circuits.' },
    { number: '4.9 / 5', label: 'Traveler Satisfaction', desc: 'Verified reviews from families, couples, and solo travelers.' },
    { number: '100%', label: 'On-Time Guaranteed Pickups', desc: 'Tracked flight arrivals and railway station pickups.' },
    { number: '0 ₹', label: 'Hidden Billing Surprises', desc: 'Tolls, parking, permits, and fuel included upfront.' },
  ];

  const coreBenefits = [
    {
      icon: Users,
      title: '1. Verified, Courteous Chauffeurs',
      subtitle: 'Native drivers who know the highways, not just GPS',
      desc: 'Our chauffeurs are verified professionals with years of experience driving state highways. They know clean, hygienic dhaba stops, scenic bypasses to avoid traffic jams, and respect your family’s privacy and pace.',
      badge: 'Safety & Courtesy First',
    },
    {
      icon: BadgePercent,
      title: '2. Zero Surprise Billing',
      subtitle: 'Complete clarity before the wheels turn',
      desc: 'No sudden requests for parking charges, night driving fees, or border toll surcharges. Everything agreed upon in your itinerary quote is 100% transparent and confirmed in writing on WhatsApp.',
      badge: 'All-Inclusive Pricing',
    },
    {
      icon: Coffee,
      title: '3. Human-Paced Flexibility',
      subtitle: 'Freedom for spontaneous chai breaks & sunset viewpoints',
      desc: 'We do not herd travelers through robotic checklists. If you spot a roadside pottery artisan, want an extra 30 minutes watching the sunset from Nahargarh, or wish to start 30 minutes later in the morning, your private cab adapts to you.',
      badge: 'Your Pace, Your Schedule',
    },
    {
      icon: MessageSquare,
      title: '4. Direct WhatsApp Coordination with Harsh Vardhan',
      subtitle: 'Direct accountability without nameless call centers',
      desc: 'You receive direct WhatsApp access (+91 98932 21141) with Harsh Vardhan Gupta and your assigned trip coordinator. From arrival tracking to evening recommendations, your points of contact are real people who care.',
      badge: 'Direct Founder Line',
    },
    {
      icon: Car,
      title: '5. Clean, Serviced & Inspected Fleet',
      subtitle: 'Sanitized Sedans, SUVs, Innova Crystas & Tempo Travellers',
      desc: 'Every vehicle undergoes mechanical inspections, AC checks, and sanitization before every departure. We maintain commercial tourist permits with proper passenger insurance for total legal compliance.',
      badge: 'Flawless Fleet Standards',
    },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-slate-800 antialiased pb-24">
      {/* Top Breadcrumb Header */}
      <div className="bg-[#111A24] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-amber-900/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C83E5C]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 text-xs sm:text-sm font-semibold mb-6 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" />
            Why Choose Pinkcityroutes
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl leading-tight">
            Grounded Hospitality, Honest Road Travel & Zero Surprises
          </h1>

          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            We don’t make inflated corporate promises. We are a family of travel architects born in Jaipur who believe in fair pricing, safe highway driving, and treating every traveler like a personal guest in our homeland.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        {/* Founder Vision Section */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-44 aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-2 border-amber-300/60 bg-slate-900">
                <img
                  src="/founder.jpg"
                  alt="Harsh Vardhan Gupta - Founder of Pinkcityroutes"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (!img.src.includes('20250121_235344_c15c3e04.jpg')) {
                      img.src = '/assets/aistudio/20250121_235344_c15c3e04.jpg';
                    }
                  }}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-0 right-0 text-center">
                  <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                    Harsh Vardhan Gupta
                  </span>
                </div>
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900 mt-4">Harsh Vardhan Gupta</h3>
              <p className="text-xs text-[#C83E5C] font-semibold">Founder & Chief Travel Architect</p>
              <p className="text-[11px] text-slate-500 mt-1">Jaipur, Rajasthan</p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs text-amber-600 font-bold uppercase tracking-wider">
                <HeartHandshake className="w-3.5 h-3.5 text-amber-500" />
                Our Founder’s Philosophy
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                "Road travel should give you peace of mind, not hidden invoices."
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                When I started Pinkcityroutes in Jaipur, I noticed a recurring frustration among travelers visiting Rajasthan: opaque quotations where tolls and driver allowances were added after booking, rushed drivers racing between tourist traps to collect commissions, and unresponsive customer service.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                We rebuilt the entire journey from the ground up: verified private cars, drivers who are paid fairly and treat you with respect, total transparency in itineraries, and personal WhatsApp coordination from the moment your flight touches down until you head back home.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={createWhatsAppUrl('Hello Harsh Vardhan, I would like to discuss planning a trip with Pinkcityroutes.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#128C7E] hover:bg-[#075E54] text-white text-xs sm:text-sm font-bold py-2.5 px-5 rounded-xl shadow-xs transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Message Harsh Vardhan Directly</span>
                </a>
                <a
                  href={`tel:${AGENCY_DETAILS.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-600" />
                  <span>+91 98932 21141</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Honest Milestones */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              Numbers Built on Genuine Travel Memories
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              No artificial inflation. Every milestone represents genuine highway kilometers and real traveler smiles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm text-center relative overflow-hidden group hover:border-[#C83E5C]/40 hover:-translate-y-1 transition-all"
              >
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#C83E5C] mb-2 tracking-tight">
                  {item.number}
                </div>
                <div className="text-sm font-bold text-slate-900 mb-1">{item.label}</div>
                <div className="text-xs text-slate-500 leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 5 Core Real-World Benefits */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C83E5C] mb-2 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full">
              <Award className="w-3.5 h-3.5" />
              The 5 Pillars of Our Service
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              Why Discerning Travelers Choose Pinkcityroutes
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Practical advantages engineered for real highway driving and memorable family holidays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreBenefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 text-[#C83E5C] flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-stone-100 text-stone-700 px-2.5 py-1 rounded-full">
                        {benefit.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-slate-900 tracking-tight mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#C83E5C] mb-3">{benefit.subtitle}</p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Sixth bonus card: Clean Bazaars & Authentic Experiences */}
            <div className="bg-gradient-to-br from-slate-900 to-[#18283E] rounded-2xl p-6 sm:p-7 text-white shadow-sm flex flex-col justify-between border border-white/10">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/10 text-amber-300 flex items-center justify-center mb-4">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-white tracking-tight mb-1">
                  6. Zero Forced Shopping Stops
                </h3>
                <p className="text-xs font-semibold text-amber-300 mb-3">
                  No commission kickbacks or pressured retail visits
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Unlike conventional agency cabs that steer you into overpriced tourist emporiums, our drivers only stop where you request. We respect your autonomy and your holiday time.
                </p>
              </div>

              <div className="pt-6">
                <a
                  href={getGeneralWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 text-xs font-bold py-2.5 px-4 rounded-xl shadow-xs transition-colors"
                >
                  <MessageSquare className="w-4 h-4 fill-slate-950/20" />
                  <span>Consult with Harsh Vardhan</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Banner Call to Action */}
        <section className="bg-gradient-to-r from-[#101B2B] via-[#1B2A3E] to-[#101B2B] rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden border border-white/10 shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Ready to Experience Rajasthan with Complete Peace of Mind?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Connect directly with Harsh Vardhan Gupta on WhatsApp or explore our 13 curated multi-day tour itineraries.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 text-xs sm:text-sm font-bold py-3.5 px-7 rounded-xl shadow-lg transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950/20" />
                <span>Chat on WhatsApp (+91 98932 21141)</span>
              </a>

              <button
                onClick={onExplorePackages}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold py-3.5 px-6 rounded-xl border border-white/20 transition-all"
              >
                <span>Browse 13 Curated Packages</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
