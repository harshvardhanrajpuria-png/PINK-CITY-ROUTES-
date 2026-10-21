import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  Instagram,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Send,
  CheckCircle2,
} from 'lucide-react';
import { AGENCY_DETAILS } from '../data/travelData';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState('Royal Rajasthan Heritage');
  const [dates, setDates] = useState('');
  const [travelers, setTravelers] = useState('2');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(AGENCY_DETAILS.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMsg =
      `Hello Harsh Vardhan & Ananya,\n` +
      `My name is ${name}.\n` +
      `📍 Target Destination: ${destination}\n` +
      `👥 Travelers: ${travelers}\n` +
      (dates ? `📅 Target Dates: ${dates}\n` : '') +
      (phone ? `📞 Phone: ${phone}\n` : '') +
      (message ? `📝 Notes: ${message}\n` : '') +
      `\nPlease share tour options and availability. Thank you!`;

    const url = createWhatsAppUrl(formattedMsg);
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#101B2B] text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C83E5C]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info & Credentials */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Direct Agency Connection
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Connect with Harsh Vardhan Gupta, Ananya Gupta & Pinkcityroutes
              </h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you need a quick quote, have questions about hotel categories, or want to
                co-design an international journey, our co-founders are always ready to assist you.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* WhatsApp & Call */}
              <a
                href={createWhatsAppUrl('Hello Harsh Vardhan & Ananya, I would like to plan a tour with Pinkcityroutes.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-6 h-6 fill-current/30" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                    Direct Phone & WhatsApp
                  </span>
                  <span className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {AGENCY_DETAILS.phone}
                  </span>
                  <span className="text-xs text-emerald-400 block mt-0.5">
                    Harsh Vardhan Gupta & Ananya Gupta (Co-Founders)
                  </span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={AGENCY_DETAILS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                    Instagram Official
                  </span>
                  <span className="text-base font-bold text-white group-hover:text-pink-300 transition-colors">
                    {AGENCY_DETAILS.instagramHandle}
                  </span>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    {AGENCY_DETAILS.instagram}
                  </span>
                </div>
              </a>

              {/* Official Email */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/50 hover:bg-white/10 transition-all group">
                <a
                  href={`mailto:${AGENCY_DETAILS.email}`}
                  className="flex items-center gap-4 flex-1 min-w-0"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                      Official Email
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors truncate block">
                      {AGENCY_DETAILS.email}
                    </span>
                    <span className="text-xs text-amber-300/80 block mt-0.5 truncate">
                      Direct inquiries & voucher confirmations
                    </span>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="ml-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-amber-300 hover:text-white transition-colors shrink-0"
                  title="Copy email address"
                >
                  {copiedEmail ? 'Copied ✓' : 'Copy'}
                </button>
              </div>

              {/* Physical Office Location in Jaipur */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                    Pink City Headquarters
                  </span>
                  <span className="text-sm font-medium text-slate-200 block">
                    {AGENCY_DETAILS.address}
                  </span>
                  <span className="text-xs text-amber-300/90 block mt-1">
                    Pink City Hospitality · Registered Travel Operator
                  </span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                    Support Availability
                  </span>
                  <span className="text-sm font-bold text-white block">
                    24/7 Dedicated WhatsApp Support
                  </span>
                  <span className="text-xs text-slate-400 block">
                    Office Walk-in: Mon - Sat: 9:30 AM to 7:30 PM IST
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick Direct Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/15 shadow-2xl">
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Quick Itinerary Inquiry
              </h3>
              <p className="text-xs text-slate-300 mb-6">
                Fill this quick brief to immediately chat with Harsh Vardhan & Ananya on WhatsApp with your exact trip requirements.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/50 flex items-center gap-3 text-emerald-300 text-xs">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>
                    Thank you! Your WhatsApp chat window should have opened. If not, tap the button below.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Interested Destination *
                    </label>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
                    >
                      <option value="Royal Rajasthan Heritage (4D/3N)">Royal Rajasthan Heritage (4D/3N)</option>
                      <option value="Kashmir Valley Getaway (6D/5N)">Kashmir Valley Getaway (6D/5N)</option>
                      <option value="Dubai Highlights & Desert Safari (5D/4N)">Dubai Highlights & Desert Safari (5D/4N)</option>
                      <option value="Kerala Backwaters & Munnar">Kerala Backwaters & Munnar</option>
                      <option value="Bali Island Retreat">Bali Island Retreat</option>
                      <option value="Thailand Wonders & Islands">Thailand Wonders & Islands</option>
                      <option value="Custom Tailored Tour">Custom Tailored Tour</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Number of Travelers
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="50"
                      value={travelers}
                      onChange={(e) => setTravelers(e.target.value)}
                      placeholder="2"
                      className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Target Dates / Tentative Month
                  </label>
                  <input
                    type="text"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                    placeholder="e.g. Next month, 15th to 20th"
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Special Wishes or Questions
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell Harsh Vardhan & Ananya about your preferences (e.g., Honeymoon bed decoration, senior-friendly vehicle, vegetarian meals)..."
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-bold text-base py-4 px-6 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageSquare className="w-5 h-5 fill-slate-950/20 stroke-slate-950" />
                  <span>Send Directly to Harsh Vardhan & Ananya on WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
