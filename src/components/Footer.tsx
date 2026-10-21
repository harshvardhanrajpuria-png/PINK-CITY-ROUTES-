import React from 'react';
import { Compass, Phone, MessageSquare, Instagram, Mail, MapPin, Heart, ShieldCheck, ArrowUp } from 'lucide-react';
import { AGENCY_DETAILS } from '../data/travelData';
import { getGeneralWhatsAppLink } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A121D] text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shadow border border-white/20 shrink-0 bg-white">
                <img
                  src={AGENCY_DETAILS.logo}
                  alt="Pinkcityroutes Brand Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-display text-2xl font-bold tracking-tight text-white block">
                  Pinkcity<span className="text-[#C83E5C]">routes</span>
                </span>
                <span className="text-[11px] font-medium uppercase tracking-wider text-amber-300 block">
                  Founded by Harshvardhan Gupta & Ananya Gupta
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Pinkcityroutes is a premier travel and tour agency providing handpicked domestic and
              international journeys, bespoke itineraries, and seamless on-ground support guided by
              Harshvardhan Gupta & Ananya Gupta.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={AGENCY_DETAILS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-pink-600/20 text-pink-400 hover:text-pink-300 flex items-center justify-center transition-all border border-white/10"
                title="Follow Pinkcityroutes on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-emerald-600/20 text-emerald-400 hover:text-emerald-300 flex items-center justify-center transition-all border border-white/10"
                title="WhatsApp Harshvardhan"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={`tel:${AGENCY_DETAILS.phoneRaw}`}
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-amber-600/20 text-amber-300 hover:text-amber-200 flex items-center justify-center transition-all border border-white/10"
                title="Call Pinkcityroutes"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Signature Packages
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#packages" className="hover:text-amber-300 transition-colors">
                  Royal Rajasthan Heritage (4D/3N)
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-amber-300 transition-colors">
                  Kashmir Valley Getaway (6D/5N)
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-amber-300 transition-colors">
                  Dubai Highlights & Desert Safari (5D/4N)
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-amber-300 transition-colors">
                  Kerala Backwaters Retreat
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-amber-300 transition-colors">
                  Bali Island Honeymoon
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-amber-300 transition-colors">
                  Thailand Islands Tour
                </a>
              </li>
            </ul>
          </div>

          {/* How It Works & Navigation */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Agency Navigation
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#one-day-tours" className="hover:text-amber-300 transition-colors">
                  1-Day Sightseeing Tours
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-amber-300 transition-colors">
                  Fleet & Car Rentals
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-amber-300 transition-colors">
                  Multi-Day Packages
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-amber-300 transition-colors">
                  Top Destinations
                </a>
              </li>
              <li>
                <a href="#diaries" className="hover:text-amber-300 transition-colors">
                  Traveler Diaries & Blogs
                </a>
              </li>
              <li>
                <a href="#coupons" className="hover:text-amber-300 transition-colors">
                  Promo & Coupon Codes
                </a>
              </li>
              <li>
                <a href="#perks" className="hover:text-amber-300 transition-colors">
                  Complimentary Perks
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-amber-300 transition-colors">
                  4-Step Planning Process
                </a>
              </li>
              <li>
                <a href="#planner" className="hover:text-amber-300 transition-colors">
                  Interactive Itinerary Planner
                </a>
              </li>
              <li>
                <a href="#founder" className="hover:text-amber-300 transition-colors">
                  Meet Harshvardhan
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-300 transition-colors">
                  Guest Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">
                  Contact & HQ Address
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Details */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-200 font-medium">Founder: Harshvardhan</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${AGENCY_DETAILS.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {AGENCY_DETAILS.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={getGeneralWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                >
                  WhatsApp: +91 98932 21141
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-300 shrink-0" />
                <a
                  href={`mailto:${AGENCY_DETAILS.email}`}
                  className="hover:text-amber-300 transition-colors"
                  title="Official Email"
                >
                  <span className="text-slate-400">Email: </span>
                  <span className="text-slate-200 hover:text-amber-300">{AGENCY_DETAILS.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <a
                  href={AGENCY_DETAILS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-300 transition-colors"
                >
                  @pinkcityroutes
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 text-[11px] text-slate-400">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>MI Road / C-Scheme, Jaipur, Rajasthan 302001, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-300 font-semibold">Pinkcityroutes</strong>.
            Founded by Harshvardhan Gupta & Ananya Gupta. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400">Jaipur · Heritage · Global Journeys</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
