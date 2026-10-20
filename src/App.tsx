/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DiscountBanner } from './components/DiscountBanner';
import { CouponSection } from './components/CouponSection';
import { ComplimentaryPerks } from './components/ComplimentaryPerks';
import { TopDestinations } from './components/TopDestinations';
import { FeaturedPackages } from './components/FeaturedPackages';
import { HowItWorks } from './components/HowItWorks';
import { FounderStory } from './components/FounderStory';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedPlannerDestination, setSelectedPlannerDestination] = useState<string | undefined>(undefined);

  const handleExplorePackages = () => {
    const el = document.getElementById('packages');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToCoupons = () => {
    const el = document.getElementById('coupons');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenPlanner = (destName?: string) => {
    if (destName) {
      setSelectedPlannerDestination(destName);
    }
    const el = document.getElementById('planner');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-800 antialiased selection:bg-[#E05A76] selection:text-white">
      {/* Navigation */}
      <Navbar onOpenPlanner={() => handleOpenPlanner()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExplorePackages={handleExplorePackages}
          onOpenPlanner={(dest) => handleOpenPlanner(dest)}
        />

        {/* 2. Instant Discount Banner (5% - 8% Off) */}
        <DiscountBanner onScrollToCoupons={handleScrollToCoupons} />

        {/* 3. Top Destination Highlights */}
        <TopDestinations
          onSelectDestinationForPlan={(dest) => handleOpenPlanner(dest)}
        />

        {/* 4. Featured Tour Packages */}
        <FeaturedPackages />

        {/* 5. Exclusive Promo & Coupon Codes Section */}
        <CouponSection />

        {/* 6. Dedicated Complimentary Perks Section */}
        <ComplimentaryPerks />

        {/* 7. How It Works / Custom Tour Planning */}
        <HowItWorks initialDestination={selectedPlannerDestination} />

        {/* 8. Founder Story / Why Pinkcityroutes */}
        <FounderStory />

        {/* 9. Guest Testimonials with Authentic Indian Travelers */}
        <Testimonials />

        {/* 10. Frequently Asked Questions */}
        <FaqSection />

        {/* 11. Direct Contact & Office Details */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp and Mobile sticky bar */}
      <FloatingWhatsApp />
    </div>
  );
}
