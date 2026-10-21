import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Instagram, Mail, Menu, X, ChevronRight, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { AGENCY_DETAILS } from '../data/travelData';
import { getGeneralWhatsAppLink } from '../utils/whatsapp';

interface NavbarProps {
  onOpenPlanner: () => void;
  onNavigateToBlog?: () => void;
  onNavigateToHome?: () => void;
  currentView?: 'home' | 'blog';
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPlanner,
  onNavigateToBlog,
  onNavigateToHome,
  currentView = 'home',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Responsive nav items with collision protection
  const navLinks = [
    { name: '1-Day Tours', href: '#one-day-tours' },
    { name: 'Fleet & Cars', href: '#fleet' },
    { name: 'Tour Packages', href: '#packages' },
    { name: 'Destinations', href: '#destinations' },
    {
      name: 'Travel Blog',
      href: '#diaries',
      isBlog: true,
      badge: 'Blog & Edit',
    },
    { name: 'Offers', href: '#coupons', hideOnLg: true },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    if (link.isBlog && onNavigateToBlog) {
      e.preventDefault();
      onNavigateToBlog();
      return;
    }

    if (currentView === 'blog' && onNavigateToHome) {
      e.preventDefault();
      onNavigateToHome();
      // Scroll to anchor on home after brief frame
      setTimeout(() => {
        const el = document.querySelector(link.href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Bar for Trust & Direct Contact with Official Email */}
      <div className="bg-[#111A24] text-amber-50/90 text-xs py-2 px-4 border-b border-amber-900/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left: Founder Credibility */}
          <div className="flex items-center gap-2 sm:gap-3 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 text-amber-300 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              Founded & Managed by Harshvardhan
            </span>
            <span className="hidden sm:inline text-slate-500">·</span>
            <span className="hidden sm:inline text-slate-300 text-[11px]">
              Jaipur Headquarters · Bespoke Journeys
            </span>
          </div>

          {/* Right: Direct Phone, WhatsApp, Official Email, Instagram */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs">
            {/* Official Email */}
            <a
              href={`mailto:${AGENCY_DETAILS.email}`}
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-amber-300 transition-colors font-medium group"
              title="Official Agency Email: harshvardhanrajpuria@gmail.com"
            >
              <Mail className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span className="hidden sm:inline text-[11px] text-amber-300 font-bold uppercase tracking-wider">Email:</span>
              <span>{AGENCY_DETAILS.email}</span>
            </a>

            <span className="text-slate-600 hidden sm:inline">·</span>

            {/* Direct Phone */}
            <a
              href={`tel:${AGENCY_DETAILS.phoneRaw}`}
              className="inline-flex items-center gap-1 text-slate-200 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{AGENCY_DETAILS.phone}</span>
            </a>

            <span className="text-slate-600">·</span>

            {/* WhatsApp */}
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

            {/* Instagram */}
            <a
              href={AGENCY_DETAILS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-pink-400 hover:text-pink-300 transition-colors"
              title="Follow @pinkcityroutes on Instagram"
            >
              <Instagram className="w-3 h-3" />
              <span className="hidden lg:inline">@pinkcityroutes</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar with Anti-Collision Architecture */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-stone-200'
            : 'bg-white/90 backdrop-blur-sm py-3 border-b border-stone-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo with Guaranteed Spacing & Physical Divider */}
          <div className="flex items-center shrink-0">
            <a
              href="#"
              onClick={(e) => {
                if (currentView === 'blog' && onNavigateToHome) {
                  e.preventDefault();
                  onNavigateToHome();
                }
              }}
              className="flex items-center gap-2.5 sm:gap-3 group shrink-0 mr-4 lg:mr-6"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-sm border-2 border-[#C83E5C]/30 group-hover:scale-105 transition-transform shrink-0 bg-white">
                <img
                  src={AGENCY_DETAILS.logo}
                  alt="Pinkcityroutes Official Brand Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-900 block leading-tight whitespace-nowrap">
                  Pinkcity<span className="text-[#C83E5C]">routes</span>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C83E5C] block whitespace-nowrap">
                  Explore · Experience · Remember
                </span>
              </div>
            </a>

            {/* Boundary Divider so Pinkcityroutes Logo NEVER touches 1-Day Tours */}
            <div className="hidden lg:block h-7 w-[1px] bg-stone-200 mr-5 xl:mr-7 shrink-0" />
          </div>

          {/* Desktop Navigation Links with Ample Spacing */}
          <div className="hidden lg:flex items-center gap-3.5 xl:gap-6 min-w-0">
            {navLinks.map((link) => {
              if (link.hideOnLg) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className="hidden xl:flex text-xs xl:text-sm font-semibold text-slate-700 hover:text-[#C83E5C] transition-colors relative py-1.5 whitespace-nowrap items-center gap-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C83E5C] hover:after:w-full after:transition-all"
                  >
                    <span>{link.name}</span>
                  </a>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`text-xs xl:text-sm font-semibold transition-colors relative py-1.5 whitespace-nowrap flex items-center gap-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C83E5C] hover:after:w-full after:transition-all ${
                    link.isBlog && currentView === 'blog'
                      ? 'text-[#C83E5C] font-bold'
                      : 'text-slate-700 hover:text-[#C83E5C]'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-rose-100 text-[#C83E5C] px-1.5 py-0.5 rounded shadow-2xs">
                      {link.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </div>

          {/* Action CTAs with Boundary Divider so Contact NEVER touches buttons */}
          <div className="hidden md:flex items-center shrink-0 ml-auto lg:ml-0">
            {/* Boundary line */}
            <div className="hidden lg:block h-7 w-[1px] bg-stone-200 ml-4 xl:ml-6 mr-3 xl:mr-4 shrink-0" />

            <div className="flex items-center gap-2.5 shrink-0">
              <button
                onClick={onOpenPlanner}
                className="hidden 2xl:inline-flex text-xs font-semibold px-3.5 py-2.5 rounded-lg border border-stone-300 text-slate-700 hover:bg-stone-50 transition-colors whitespace-nowrap"
              >
                Plan Custom Trip
              </button>

              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#128C7E] hover:bg-[#075E54] text-white text-xs font-bold px-3.5 xl:px-4 py-2.5 rounded-lg shadow-sm transition-all hover:shadow whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 fill-white/20" />
                <span>
                  WhatsApp <span className="hidden xl:inline">Harshvardhan</span>
                </span>
              </a>
            </div>
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
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleLinkClick(e, link);
                  }}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-stone-50"
                >
                  <div className="flex items-center gap-2">
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="text-[9px] font-bold uppercase tracking-wider bg-rose-100 text-[#C83E5C] px-1.5 py-0.5 rounded">
                        {link.badge}
                      </span>
                    )}
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </a>
              ))}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigateToBlog) onNavigateToBlog();
                }}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-bold text-[#C83E5C] bg-rose-50 hover:bg-rose-100"
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Blog Page & Regular Editor</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#C83E5C]" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPlanner();
                }}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-stone-50 text-left"
              >
                <span>Interactive Trip Planner</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>
            </div>

            <div className="pt-3 border-t border-stone-100 space-y-2">
              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#128C7E] text-white py-3 px-4 rounded-xl text-sm font-bold shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 98932 21141)</span>
              </a>

              <a
                href={`mailto:${AGENCY_DETAILS.email}`}
                className="w-full flex items-center justify-center gap-2 bg-stone-100 text-slate-800 py-2.5 px-4 rounded-xl text-xs font-semibold hover:bg-stone-200 transition-colors"
              >
                <Mail className="w-4 h-4 text-[#C83E5C]" />
                <span>Email: {AGENCY_DETAILS.email}</span>
              </a>

              <a
                href={`tel:${AGENCY_DETAILS.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 bg-stone-100 text-slate-800 py-2.5 px-4 rounded-xl text-xs font-semibold hover:bg-stone-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call Harshvardhan: {AGENCY_DETAILS.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
