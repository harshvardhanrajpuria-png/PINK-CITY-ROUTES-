import React, { useState, useEffect, useRef } from 'react';
import {
  Phone,
  MessageSquare,
  Instagram,
  Mail,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Tag,
  Users,
  Compass,
} from 'lucide-react';
import { AGENCY_DETAILS } from '../data/travelData';
import { getGeneralWhatsAppLink } from '../utils/whatsapp';

interface NavbarProps {
  onOpenPlanner: () => void;
  onNavigateToBlog?: () => void;
  onNavigateToHome?: () => void;
  onNavigateToWhyUs?: () => void;
  onNavigateToWhyRajasthan?: () => void;
  currentView?: 'home' | 'blog' | 'why-us' | 'why-rajasthan';
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPlanner,
  onNavigateToBlog,
  onNavigateToHome,
  onNavigateToWhyUs,
  onNavigateToWhyRajasthan,
  currentView = 'home',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close "More" dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Primary navigation links shown on desktop
  const primaryNavLinks = [
    { name: '1-Day Tours', href: '#one-day-tours' },
    { name: 'Fleet & Cars', href: '#fleet' },
    { name: 'Tour Packages', href: '#packages' },
    {
      name: 'Why Choose Us',
      href: '/why-us',
      isWhyUs: true,
    },
    {
      name: 'Why Rajasthan',
      href: '/why-rajasthan',
      isWhyRajasthan: true,
    },
    {
      name: 'Travel Blog',
      href: '#diaries',
      isBlog: true,
    },
  ];

  // Secondary items shown inline on wide screens (2xl) or in the clean "More" dropdown on lg/xl
  const secondaryNavLinks = [
    { name: 'Offers', href: '#coupons', icon: Tag, showOnXl: true },
    { name: 'Founders', href: '#founders', icon: Users, showOnXl: false },
    { name: 'Contact', href: '#contact', icon: Compass, showOnXl: true },
  ];

  // All links combined for mobile menu drawer
  const allMobileLinks = [
    ...primaryNavLinks,
    { name: 'Special Offers', href: '#coupons' },
    { name: 'Founders Story', href: '#founders' },
    { name: 'Contact & Office', href: '#contact' },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: { name: string; href: string; isBlog?: boolean; isWhyUs?: boolean; isWhyRajasthan?: boolean }
  ) => {
    setMoreDropdownOpen(false);

    if (link.isWhyUs && onNavigateToWhyUs) {
      e.preventDefault();
      onNavigateToWhyUs();
      return;
    }

    if (link.isWhyRajasthan && onNavigateToWhyRajasthan) {
      e.preventDefault();
      onNavigateToWhyRajasthan();
      return;
    }

    if (link.isBlog && onNavigateToBlog) {
      e.preventDefault();
      onNavigateToBlog();
      return;
    }

    if (currentView !== 'home' && onNavigateToHome) {
      e.preventDefault();
      onNavigateToHome();
      setTimeout(() => {
        const el = document.querySelector(link.href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Bar for Trust & Direct Contact */}
      <div className="bg-[#111A24] text-amber-50/90 text-xs py-2 px-4 border-b border-amber-900/30">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left: Trust & Headquarters */}
          <div className="flex items-center gap-2 sm:gap-3 text-center sm:text-left shrink-0">
            <span className="inline-flex items-center gap-1.5 text-amber-300 font-semibold tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-amber-400" />
              Verified Local Chauffeurs & Clean AC Cabs
            </span>
            <span className="hidden sm:inline text-slate-500">·</span>
            <span className="hidden sm:inline text-slate-300 text-[11px]">
              Jaipur Headquarters · Bespoke Journeys
            </span>
          </div>

          {/* Right: Direct Phone, WhatsApp, Official Email, Instagram */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs shrink-0">
            {/* Primary Email */}
            <a
              href={`mailto:${AGENCY_DETAILS.email}`}
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-amber-300 transition-colors font-medium group"
              title={`Primary Email: ${AGENCY_DETAILS.email}`}
            >
              <Mail className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span className="hidden sm:inline text-[11px] text-amber-300 font-bold uppercase tracking-wider">
                Email:
              </span>
              <span>{AGENCY_DETAILS.email}</span>
            </a>

            <span className="text-slate-600 hidden sm:inline">·</span>

            {/* Direct Phone */}
            <a
              href={`tel:${AGENCY_DETAILS.phoneRaw}`}
              className="inline-flex items-center gap-1 text-slate-200 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400 shrink-0" />
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
              <MessageSquare className="w-3 h-3 shrink-0" />
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
              <Instagram className="w-3 h-3 shrink-0" />
              <span className="hidden lg:inline">@pinkcityroutes</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar with Anti-Collision Responsive Architecture */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-stone-200'
            : 'bg-white/90 backdrop-blur-sm py-3 border-b border-stone-100'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 xl:gap-4">
          {/* Brand Logo with Guaranteed Spacing & Physical Divider */}
          <div className="flex items-center shrink-0">
            <a
              href="#"
              onClick={(e) => {
                if (currentView !== 'home' && onNavigateToHome) {
                  e.preventDefault();
                  onNavigateToHome();
                }
              }}
              className="flex items-center gap-2.5 sm:gap-3 group shrink-0 mr-2 sm:mr-3 lg:mr-5"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 rounded-full overflow-hidden shadow-lg border-2 border-[#C83E5C]/60 group-hover:scale-105 transition-transform shrink-0 bg-white p-1">
                <img
                  src={AGENCY_DETAILS.logo}
                  alt="Pinkcityroutes Official Brand Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="shrink-0">
                <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-900 block leading-tight whitespace-nowrap">
                  Pinkcity<span className="text-[#C83E5C]">routes</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#C83E5C] block whitespace-nowrap">
                  Explore · Experience · Remember
                </span>
              </div>
            </a>

            {/* Boundary Divider so Brand Logo NEVER collides with navigation */}
            <div className="hidden lg:block h-8 w-[1px] bg-stone-200 mr-3 xl:mr-5 shrink-0" />
          </div>

          {/* Desktop Navigation Links: Clean, Scalable & Zero Collision */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-6 shrink-0">
            {/* Primary Core Links */}
            {primaryNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`text-xs xl:text-sm font-semibold transition-colors relative py-1.5 whitespace-nowrap shrink-0 flex items-center gap-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#C83E5C] hover:after:w-full after:transition-all ${
                  (link.isBlog && currentView === 'blog') ||
                  (link.isWhyUs && currentView === 'why-us') ||
                  (link.isWhyRajasthan && currentView === 'why-rajasthan')
                    ? 'text-[#C83E5C] font-bold after:w-full'
                    : 'text-slate-700 hover:text-[#C83E5C] after:w-0'
                }`}
              >
                <span>{link.name}</span>
              </a>
            ))}

            {/* Offers Link: shown on xl (1280px+) */}
            <a
              href="#coupons"
              onClick={(e) => handleLinkClick(e, { name: 'Offers', href: '#coupons' })}
              className="hidden xl:flex text-xs xl:text-sm font-semibold text-slate-700 hover:text-[#C83E5C] transition-colors relative py-1.5 whitespace-nowrap shrink-0 items-center gap-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C83E5C] hover:after:w-full after:transition-all"
            >
              <span>Offers</span>
            </a>

            {/* Founders Link: shown on 2xl (1536px+) */}
            <a
              href="#founders"
              onClick={(e) => handleLinkClick(e, { name: 'Founders', href: '#founders' })}
              className="hidden 2xl:flex text-xs xl:text-sm font-semibold text-slate-700 hover:text-[#C83E5C] transition-colors relative py-1.5 whitespace-nowrap shrink-0 items-center gap-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C83E5C] hover:after:w-full after:transition-all"
            >
              <span>Founders</span>
            </a>

            {/* Contact Link: shown on 2xl (1536px+) or via More on smaller screens */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, { name: 'Contact', href: '#contact' })}
              className="hidden 2xl:flex text-xs xl:text-sm font-semibold text-slate-700 hover:text-[#C83E5C] transition-colors relative py-1.5 whitespace-nowrap shrink-0 items-center gap-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C83E5C] hover:after:w-full after:transition-all"
            >
              <span>Contact</span>
            </a>

            {/* "More" Dropdown Menu for Laptop & Intermediate Screens (1024px - 1535px) */}
            <div className="relative 2xl:hidden shrink-0" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setMoreDropdownOpen((prev) => !prev)}
                className="inline-flex items-center gap-1 text-xs xl:text-sm font-semibold text-slate-700 hover:text-[#C83E5C] transition-colors py-1.5 px-2 rounded-md hover:bg-stone-50"
                aria-expanded={moreDropdownOpen}
              >
                <span>More</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    moreDropdownOpen ? 'rotate-180 text-[#C83E5C]' : 'text-slate-400'
                  }`}
                />
              </button>

              {moreDropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 rounded-xl bg-white shadow-xl border border-stone-200 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  {/* Why Choose Us */}
                  <a
                    href="/why-us"
                    onClick={(e) => handleLinkClick(e, { name: 'Why Choose Us', href: '/why-us', isWhyUs: true })}
                    className="flex items-center gap-2.5 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-rose-50 hover:text-[#C83E5C] transition-colors"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Why Choose Us</span>
                  </a>

                  {/* Why Rajasthan */}
                  <a
                    href="/why-rajasthan"
                    onClick={(e) => handleLinkClick(e, { name: 'Why Rajasthan', href: '/why-rajasthan', isWhyRajasthan: true })}
                    className="flex items-center gap-2.5 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-rose-50 hover:text-[#C83E5C] transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Why Rajasthan</span>
                  </a>

                  {/* Offers inside dropdown if screen < xl */}
                  <a
                    href="#coupons"
                    onClick={(e) => handleLinkClick(e, { name: 'Offers', href: '#coupons' })}
                    className="xl:hidden flex items-center gap-2.5 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-rose-50 hover:text-[#C83E5C] transition-colors"
                  >
                    <Tag className="w-3.5 h-3.5 text-[#C83E5C]" />
                    <span>Special Offers & Deals</span>
                  </a>

                  {/* Founders Story */}
                  <a
                    href="#founders"
                    onClick={(e) => handleLinkClick(e, { name: 'Founders', href: '#founders' })}
                    className="flex items-center gap-2.5 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-rose-50 hover:text-[#C83E5C] transition-colors"
                  >
                    <Users className="w-3.5 h-3.5 text-amber-600" />
                    <span>Meet the Founders</span>
                  </a>

                  {/* Contact & Location */}
                  <a
                    href="#contact"
                    onClick={(e) => handleLinkClick(e, { name: 'Contact', href: '#contact' })}
                    className="flex items-center gap-2.5 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-rose-50 hover:text-[#C83E5C] transition-colors"
                  >
                    <Compass className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Contact & Office</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Action CTAs: Protected Boundary with Zero Collision */}
          <div className="hidden md:flex items-center shrink-0 ml-auto lg:ml-0 gap-2 xl:gap-3">
            {/* Divider line before action buttons */}
            <div className="hidden lg:block h-6 w-[1px] bg-stone-200 shrink-0" />

            {/* Plan Custom Trip button */}
            <button
              onClick={onOpenPlanner}
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg border border-stone-300 text-slate-700 hover:bg-stone-50 hover:border-[#C83E5C] transition-all whitespace-nowrap shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C83E5C]" />
              <span>Plan Custom Trip</span>
            </button>

            {/* Direct WhatsApp Callout - Compact, clean, and dedicated */}
            <a
              href={getGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#128C7E] hover:bg-[#075E54] text-white text-xs font-bold px-3 xl:px-4 py-2 rounded-lg shadow-sm transition-all hover:shadow whitespace-nowrap shrink-0"
              title="Chat with Harsh Vardhan & Ananya on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 fill-white/20 shrink-0" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile & Tablet Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={getGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
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

        {/* Mobile & Tablet Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200 shadow-lg">
            <div className="space-y-1">
              {allMobileLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleLinkClick(e, link);
                  }}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-stone-50 transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </a>
              ))}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigateToBlog) onNavigateToBlog();
                }}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-bold text-[#C83E5C] bg-rose-50 hover:bg-rose-100 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Travel Diaries & Stories</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#C83E5C]" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPlanner();
                }}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-stone-50 text-left transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C83E5C]" />
                  <span>Interactive Trip Planner</span>
                </div>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>
            </div>

            <div className="pt-3 border-t border-stone-100 space-y-2">
              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#128C7E] hover:bg-[#075E54] text-white py-3 px-4 rounded-xl text-sm font-bold shadow-sm transition-colors"
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
                <span>Call Founders: {AGENCY_DETAILS.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
