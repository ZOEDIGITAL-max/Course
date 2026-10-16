/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { ModulesSection } from './components/ModulesSection';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { ChallengeRoadmap } from './components/ChallengeRoadmap';
import { OutcomesAudience } from './components/OutcomesAudience';
import { InstructorSection } from './components/InstructorSection';
import { OfferStack } from './components/OfferStack';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FinalCta } from './components/FinalCta';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { EnrollmentModal } from './components/EnrollmentModal';
import { WhatsAppChatModal } from './components/WhatsAppChatModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SalesPopup } from './components/SalesPopup';

export default function App() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  const handleOpenEnroll = () => setIsEnrollModalOpen(true);
  const handleCloseEnroll = () => setIsEnrollModalOpen(false);

  const handleOpenWhatsApp = () => setIsWhatsAppModalOpen(true);
  const handleCloseWhatsApp = () => setIsWhatsAppModalOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-slate-950 font-sans">
      
      {/* Sticky Navigation */}
      <Navbar 
        onOpenEnroll={handleOpenEnroll} 
        onOpenWhatsApp={handleOpenWhatsApp} 
      />

      {/* Main Page Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero 
          onOpenEnroll={handleOpenEnroll} 
          onOpenWhatsApp={handleOpenWhatsApp} 
        />

        {/* 2. Problem & Paradigm Shift */}
        <ProblemSolution 
          onOpenEnroll={handleOpenEnroll} 
        />

        {/* 3. Detailed Modules (01 to 04) */}
        <ModulesSection 
          onOpenEnroll={handleOpenEnroll} 
        />

        {/* 4. Portfolio Website Interactive Feature (Module 03 Highlight) */}
        <PortfolioShowcase 
          onOpenEnroll={handleOpenEnroll} 
        />

        {/* 5. 14-Day Content & Visibility Challenge (Module 04 Highlight) */}
        <ChallengeRoadmap 
          onOpenEnroll={handleOpenEnroll} 
        />

        {/* 6. By The End of Bootcamp & Target Audience */}
        <OutcomesAudience 
          onOpenEnroll={handleOpenEnroll} 
        />

        {/* 7. Why Learn From Me & What Makes This Different */}
        <InstructorSection 
          onOpenEnroll={handleOpenEnroll} 
          onOpenWhatsApp={handleOpenWhatsApp} 
        />

        {/* 8. Full Offer Stack & Value Breakdown */}
        <OfferStack 
          onOpenEnroll={handleOpenEnroll} 
        />

        {/* 9. Student Testimonials */}
        <TestimonialsSection 
          onOpenEnroll={handleOpenEnroll} 
        />

        {/* 10. Final Call to Action & Mindset */}
        <FinalCta 
          onOpenEnroll={handleOpenEnroll} 
          onOpenWhatsApp={handleOpenWhatsApp} 
        />

        {/* 11. FAQ */}
        <FaqSection 
          onOpenWhatsApp={handleOpenWhatsApp} 
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenWhatsApp={handleOpenWhatsApp} 
        onOpenEnroll={handleOpenEnroll} 
      />

      {/* Floating WhatsApp Action Widget */}
      <FloatingWhatsApp 
        onOpenWhatsApp={handleOpenWhatsApp}
        onOpenEnroll={handleOpenEnroll}
      />

      {/* Interactive Registration / Checkout Modal */}
      <EnrollmentModal 
        isOpen={isEnrollModalOpen}
        onClose={handleCloseEnroll}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* WhatsApp Topic Selector Modal */}
      <WhatsAppChatModal 
        isOpen={isWhatsAppModalOpen}
        onClose={handleCloseWhatsApp}
      />

      {/* Social Proof Sales Popup */}
      <SalesPopup />

    </div>
  );
}
