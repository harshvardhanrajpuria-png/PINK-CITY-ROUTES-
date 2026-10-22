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
import { FeaturedPackages } from './components/FeaturedPackages';
import { HowItWorks } from './components/HowItWorks';
import { FounderStory } from './components/FounderStory';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BlogPage } from './components/BlogPage';
import { TravelerAdvisoryModal } from './components/TravelerAdvisoryModal';

import { WhyUsPage } from './components/WhyUsPage';
import { WhyRajasthanPage } from './components/WhyRajasthanPage';

export type AppView = 'home' | 'blog' | 'why-us' | 'why-rajasthan';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>(() => {
    const hash = window.location.hash;
    const path = window.location.pathname;
    if (hash === '#why-us' || path === '/why-us') return 'why-us';
    if (hash === '#why-rajasthan' || path === '/why-rajasthan') return 'why-rajasthan';
    if (hash === '#blog' || path === '/blog') return 'blog';
    return 'home';
  });

  const [selectedPlannerDestination, setSelectedPlannerDestination] = useState<string | undefined>(undefined);

  // Sync hash / popstate with current view
  useEffect(() => {
    const handleNavigation = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;
      if (hash === '#why-us' || path === '/why-us') {
        setCurrentView('why-us');
      } else if (hash === '#why-rajasthan' || path === '/why-rajasthan') {
        setCurrentView('why-rajasthan');
      } else if (hash === '#blog' || path === '/blog') {
        setCurrentView('blog');
      } else if (hash === '#home' || hash === '' || path === '/') {
        setCurrentView('home');
      }
    };
    window.addEventListener('hashchange', handleNavigation);
    window.addEventListener('popstate', handleNavigation);
    return () => {
      window.removeEventListener('hashchange', handleNavigation);
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  const navigateToBlog = () => {
    setCurrentView('blog');
    window.location.hash = '#blog';
    try {
      window.history.pushState(null, '', '/blog');
    } catch {
      // fallback to hash
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToWhyUs = () => {
    setCurrentView('why-us');
    window.location.hash = '#why-us';
    try {
      window.history.pushState(null, '', '/why-us');
    } catch {
      // fallback
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToWhyRajasthan = () => {
    setCurrentView('why-rajasthan');
    window.location.hash = '#why-rajasthan';
    try {
      window.history.pushState(null, '', '/why-rajasthan');
    } catch {
      // fallback
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentView('home');
    window.location.hash = '#home';
    try {
      window.history.pushState(null, '', '/');
    } catch {
      // fallback
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExplorePackages = () => {
    if (currentView !== 'home') {
      navigateToHome();
    }
    setTimeout(() => {
      const el = document.getElementById('packages');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleScrollToCoupons = () => {
    if (currentView !== 'home') {
      navigateToHome();
    }
    setTimeout(() => {
      const el = document.getElementById('coupons');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleOpenPlanner = (destName?: string) => {
    if (destName) {
      setSelectedPlannerDestination(destName);
    }
    if (currentView !== 'home') {
      navigateToHome();
    }
    setTimeout(() => {
      const el = document.getElementById('planner');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Dedicated "Why Choose Us" View
  if (currentView === 'why-us') {
    return (
      <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-800 antialiased selection:bg-[#E05A76] selection:text-white">
        <Navbar
          currentView="why-us"
          onOpenPlanner={() => handleOpenPlanner()}
          onNavigateToBlog={navigateToBlog}
          onNavigateToHome={navigateToHome}
          onNavigateToWhyUs={navigateToWhyUs}
          onNavigateToWhyRajasthan={navigateToWhyRajasthan}
        />
        <main className="flex-1">
          <WhyUsPage
            onBackToHome={navigateToHome}
            onExplorePackages={handleExplorePackages}
            onOpenPlanner={() => handleOpenPlanner()}
          />
        </main>
        <Footer
          onNavigateToWhyUs={navigateToWhyUs}
          onNavigateToWhyRajasthan={navigateToWhyRajasthan}
          onNavigateToBlog={navigateToBlog}
          onNavigateToHome={navigateToHome}
        />
        <FloatingWhatsApp />
        <TravelerAdvisoryModal />
      </div>
    );
  }

  // Dedicated "Why Rajasthan" View
  if (currentView === 'why-rajasthan') {
    return (
      <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-800 antialiased selection:bg-[#E05A76] selection:text-white">
        <Navbar
          currentView="why-rajasthan"
          onOpenPlanner={() => handleOpenPlanner()}
          onNavigateToBlog={navigateToBlog}
          onNavigateToHome={navigateToHome}
          onNavigateToWhyUs={navigateToWhyUs}
          onNavigateToWhyRajasthan={navigateToWhyRajasthan}
        />
        <main className="flex-1">
          <WhyRajasthanPage
            onBackToHome={navigateToHome}
            onExplorePackages={handleExplorePackages}
            onOpenPlanner={() => handleOpenPlanner()}
          />
        </main>
        <Footer
          onNavigateToWhyUs={navigateToWhyUs}
          onNavigateToWhyRajasthan={navigateToWhyRajasthan}
          onNavigateToBlog={navigateToBlog}
          onNavigateToHome={navigateToHome}
        />
        <FloatingWhatsApp />
        <TravelerAdvisoryModal />
      </div>
    );
  }

  // If in dedicated Blog Page mode
  if (currentView === 'blog') {
    return (
      <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-800 antialiased selection:bg-[#E05A76] selection:text-white">
        <Navbar
          currentView="blog"
          onOpenPlanner={() => handleOpenPlanner()}
          onNavigateToBlog={navigateToBlog}
          onNavigateToHome={navigateToHome}
          onNavigateToWhyUs={navigateToWhyUs}
          onNavigateToWhyRajasthan={navigateToWhyRajasthan}
        />
        <main className="flex-1">
          <BlogPage
            onBackToHome={navigateToHome}
            onOpenPlanner={() => handleOpenPlanner()}
          />
        </main>
        <Footer
          onNavigateToWhyUs={navigateToWhyUs}
          onNavigateToWhyRajasthan={navigateToWhyRajasthan}
          onNavigateToBlog={navigateToBlog}
          onNavigateToHome={navigateToHome}
        />
        <FloatingWhatsApp />
        <TravelerAdvisoryModal />
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
        onNavigateToWhyUs={navigateToWhyUs}
        onNavigateToWhyRajasthan={navigateToWhyRajasthan}
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

        {/* 13. Co-Founders Section: Harsh Vardhan Gupta & Ananya Gupta */}
        <FounderStory />

        {/* 14. Direct Contact & Office Details */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigateToWhyUs={navigateToWhyUs}
        onNavigateToWhyRajasthan={navigateToWhyRajasthan}
        onNavigateToBlog={navigateToBlog}
        onNavigateToHome={navigateToHome}
      />

      {/* Floating WhatsApp and Mobile sticky bar */}
      <FloatingWhatsApp />

      {/* Persistent Traveler Notice & Operational Policy */}
      <TravelerAdvisoryModal />
    </div>
  );
}
