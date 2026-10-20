import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Instagram, Menu, X, Compass, ChevronRight, ShieldCheck } from 'lucide-react';
import { AGENCY_DETAILS } from '../data/travelData';
import { getGeneralWhatsAppLink } from '../utils/whatsapp';

interface NavbarProps {
  onOpenPlanner: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPlanner }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Destinations', href: '#destinations' },
    { name: 'Packages', href: '#packages' },
    { name: 'Offers & Coupons', href: '#coupons' },
    { name: 'Complimentary Perks', href: '#perks' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Custom Planner', href: '#planner', onClick: onOpenPlanner },
    { name: 'Founder Note', href: '#founder' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Bar for Trust & Direct Contact */}
      <div className="bg-[#111A24] text-amber-50/90 text-xs py-2 px-4 border-b border-amber-900/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-amber-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              Founded & Managed by Harshvardhan
            </span>
            <span className="hidden md:inline text-slate-500">·</span>
            <span className="hidden md:inline text-slate-300">
              Personalized Domestic & International Itineraries
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${AGENCY_DETAILS.phoneRaw}`}
              className="inline-flex items-center gap-1 text-slate-200 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{AGENCY_DETAILS.phone}</span>
            </a>
            <span className="text-slate-600">·</span>
            <a
              href={getGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp Us</span>
            </a>
            <span className="text-slate-600">·</span>
            <a
              href={AGENCY_DETAILS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-pink-400 hover:text-pink-300 transition-colors"
              title="Follow @pinkcityroutes on Instagram"
            >
              <Instagram className="w-3 h-3" />
              <span className="hidden sm:inline">pinkcityroutes</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-stone-200'
            : 'bg-white/90 backdrop-blur-sm py-4 border-b border-stone-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E05A76] to-[#C83E5C] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <span className="font-display text-2xl font-bold tracking-tight text-slate-900 block leading-tight">
                Pinkcity<span className="text-[#C83E5C]">routes</span>
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-stone-500 block">
                Tours & Bespoke Journeys
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={link.onClick}
                className="text-sm font-medium text-slate-700 hover:text-[#C83E5C] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C83E5C] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenPlanner}
              className="text-xs font-semibold px-4 py-2.5 rounded-lg border border-stone-300 text-slate-700 hover:bg-stone-50 transition-colors"
            >
              Plan Custom Trip
            </button>
            <a
              href={getGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#128C7E] hover:bg-[#075E54] text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-all hover:shadow"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
              <span>WhatsApp Harshvardhan</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={getGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-50 text-emerald-700"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-stone-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (link.onClick) link.onClick();
                  }}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-stone-50"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-stone-100 space-y-2">
              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#128C7E] text-white py-3 px-4 rounded-xl text-sm font-semibold shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 98932 21141)</span>
              </a>

              <a
                href={`tel:${AGENCY_DETAILS.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 bg-stone-100 text-slate-800 py-3 px-4 rounded-xl text-sm font-semibold hover:bg-stone-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call Harshvardhan: {AGENCY_DETAILS.phone}</span>
              </a>

              <a
                href={AGENCY_DETAILS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 border border-pink-200 text-pink-700 bg-pink-50/50 py-2.5 px-4 rounded-xl text-xs font-semibold"
              >
                <Instagram className="w-4 h-4 text-pink-600" />
                <span>Follow @pinkcityroutes on Instagram</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
