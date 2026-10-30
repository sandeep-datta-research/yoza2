/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactModal from './components/ContactModal';
import PricingModal from './components/PricingModal';
import ProjectLightbox from './components/ProjectLightbox';
import FooterSection from './components/FooterSection';
import { ProjectItem } from './types';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState('');

  // Lightbox state
  const [lightboxProject, setLightboxProject] = useState<ProjectItem | null>(null);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleOpenContact = (subject?: string) => {
    if (subject) {
      setSelectedTier(subject);
    }
    setIsContactOpen(true);
  };

  const handleOpenPricing = () => {
    setIsPricingOpen(true);
  };

  const handleSelectTier = (tierName: string) => {
    setIsPricingOpen(false);
    setSelectedTier(`${tierName} Package`);
    setIsContactOpen(true);
  };

  const handleOpenProject = (project: ProjectItem, imgIdx: number = 0) => {
    setLightboxProject(project);
    setLightboxImageIndex(imgIdx);
    setIsLightboxOpen(true);
  };

  const handleSelectMarqueeImage = (url: string) => {
    // When a marquee item is clicked, create a quick preview item for the lightbox
    setLightboxProject({
      id: 'marquee-preview',
      number: '3D',
      title: 'Motion Showcase',
      category: 'Client',
      col1Image1: url,
      col1Image2: url,
      col2Image: url,
    });
    setLightboxImageIndex(0);
    setIsLightboxOpen(true);
  };

  return (
    <div
      className="min-h-screen w-full bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] relative"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. HERO SECTION */}
      <HeroSection
        onOpenContact={() => handleOpenContact()}
        onOpenPricing={handleOpenPricing}
      />

      {/* 2. MARQUEE SECTION */}
      <MarqueeSection onSelectImage={handleSelectMarqueeImage} />

      {/* 3. ABOUT SECTION */}
      <AboutSection onOpenContact={() => handleOpenContact()} />

      {/* 4. SERVICES SECTION */}
      <ServicesSection />

      {/* 5. PROJECTS SECTION */}
      <ProjectsSection onOpenProject={handleOpenProject} />

      {/* FOOTER */}
      <FooterSection onOpenContact={() => handleOpenContact()} />

      {/* MODALS */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => {
          setIsContactOpen(false);
          setSelectedTier('');
        }}
        initialSubject={selectedTier}
      />

      <PricingModal
        isOpen={isPricingOpen}
        onClose={() => setIsPricingOpen(false)}
        onSelectTier={handleSelectTier}
      />

      <ProjectLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        project={lightboxProject}
        activeImageIndex={lightboxImageIndex}
        onSelectIndex={(idx) => setLightboxImageIndex(idx)}
      />
    </div>
  );
}
