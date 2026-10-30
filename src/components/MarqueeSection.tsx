import React from 'react';
import FadeIn from './FadeIn';

export interface MarqueeSectionProps {
  onSelectImage?: (url: string) => void;
}

export const MarqueeSection: React.FC<MarqueeSectionProps> = () => (
  <section className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-16 sm:py-20 overflow-hidden">
    <FadeIn y={24} className="max-w-6xl mx-auto border-y border-[#D7E2EA]/15 py-8 sm:py-12 flex flex-col sm:flex-row items-center justify-between gap-5">
      <div>
        <p className="text-[#B600A8] uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-3">The artist's sketchbook</p>
        <h2 className="hero-heading text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#D7E2EA]">Stories in every stroke.</h2>
      </div>
      <p className="max-w-xs text-center sm:text-right text-sm sm:text-base text-[#D7E2EA]/55 leading-relaxed">
        Original paintings and illustrations will appear here as Yoza's gallery takes shape.
      </p>
    </FadeIn>
  </section>
);

export default MarqueeSection;
