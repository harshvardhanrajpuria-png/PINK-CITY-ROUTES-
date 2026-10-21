/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DiscountBanner } from './components/DiscountBanner';
import { CouponSection } from './components/CouponSection';
import { ComplimentaryPerks } from './components/ComplimentaryPerks';
import { OneDayTours } from './components/OneDayTours';
import { FleetSection } from './components/FleetSection';
import { TravelDiaries } from './components/TravelDiaries';
import { TopDestinations } from './components/TopDestinations';
import { FeaturedPackages } from './components/FeaturedPackages';
import { HowItWorks } from './components/HowItWorks';
import { FounderStory } from './components/FounderStory';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BlogPage } from './components/BlogPage';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'blog'>(() => {
    return window.location.hash === '#blog' ? 'blog' : 'home';
  });

  const [selectedPlannerDestination, setSelectedPlannerDestination] = useState<string | undefined>(undefined);

  // Sync hash with current view
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#blog') {
        setCurrentView('blog');
      } else if (window.location.hash === '#home' || window.location.hash === '') {
        setCurrentView('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToBlog = () => {
    setCurrentView('blog');
    window.location.hash = '#blog';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentView('home');
    window.location.hash = '#home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExplorePackages = () => {
    if (currentView === 'blog') {
      setCurrentView('home');
    }
    setTimeout(() => {
      const el = document.getElementById('packages');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleScrollToCoupons = () => {
    if (currentView === 'blog') {
      setCurrentView('home');
    }
    setTimeout(() => {
      const el = document.getElementById('coupons');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleOpenPlanner = (destName?: string) => {
    if (destName) {
      setSelectedPlannerDestination(destName);
    }
    if (currentView === 'blog') {
      setCurrentView('home');
    }
    setTimeout(() => {
      const el = document.getElementById('planner');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  // If in dedicated Blog Page mode
  if (currentView === 'blog') {
    return (
      <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-800 antialiased selection:bg-[#E05A76] selection:text-white">
        <BlogPage
          onBackToHome={navigateToHome}
          onOpenPlanner={() => handleOpenPlanner()}
        />
        <FloatingWhatsApp />
      </div>
    );
  }

  // Home Page View
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-800 antialiased selection:bg-[#E05A76] selection:text-white">
      {/* Navigation */}
      <Navbar
        currentView="home"
        onOpenPlanner={() => handleOpenPlanner()}
        onNavigateToBlog={navigateToBlog}
        onNavigateToHome={navigateToHome}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExplorePackages={handleExplorePackages}
          onOpenPlanner={(dest) => handleOpenPlanner(dest)}
        />

        {/* 2. Instant Discount Banner (5% - 8% Off) */}
        <DiscountBanner onScrollToCoupons={handleScrollToCoupons} />

        {/* 3. Curated 1-Day Sightseeing Tours */}
        <OneDayTours />

        {/* 4. Pinkcityroutes Fleet & Rental Categories */}
        <FleetSection />

        {/* 5. Top Destination Highlights */}
        <TopDestinations
          onSelectDestinationForPlan={(dest) => handleOpenPlanner(dest)}
        />

        {/* 6. Featured Multi-Day Tour Packages */}
        <FeaturedPackages />

        {/* 7. Exclusive Promo & Coupon Codes Section */}
        <CouponSection />

        {/* 8. Dedicated Complimentary Perks Section */}
        <ComplimentaryPerks />

        {/* 9. How It Works / Custom Tour Planning */}
        <HowItWorks initialDestination={selectedPlannerDestination} />

        {/* 10. Traveler Diaries & Regular Blog Hub */}
        <TravelDiaries onOpenDedicatedBlogPage={navigateToBlog} />

        {/* 11. Guest Testimonials with Authentic Indian Travelers */}
        <Testimonials />

        {/* 12. Frequently Asked Questions */}
        <FaqSection />

        {/* 13. Co-Founders Section: Harshvardhan Gupta & Ananya Gupta */}
        <FounderStory />

        {/* 14. Direct Contact & Office Details */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp and Mobile sticky bar */}
      <FloatingWhatsApp />
    </div>
  );
}
