import React from 'react';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';

export interface HeroSectionProps {
  onOpenContact: () => void;
  onOpenPricing: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  onOpenPricing,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* 1. Navbar */}
      <FadeIn
        delay={0}
        y={-20}
        as="nav"
        className="w-full px-6 md:px-10 pt-6 md:pt-8 z-30"
      >
        <div className="w-full flex items-center justify-between text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          <button
            onClick={() => scrollTo('about')}
            className="transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={onOpenPricing}
            className="transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            Price
          </button>
          <button
            onClick={() => scrollTo('projects')}
            className="transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={onOpenContact}
            className="transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            Contact
          </button>
        </div>
      </FadeIn>

      {/* 2. Hero Heading */}
      <div className="w-full overflow-hidden flex items-center justify-center my-auto sm:my-0 relative z-0">
        <FadeIn delay={0.15} y={40} className="w-full text-center">
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5 select-none"
            style={{ letterSpacing: '-0.04em' }}
          >
            Hi, i&apos;m yoza
          </h1>
        </FadeIn>
      </div>

      {/* 3. Hero Portrait with Magnet effect */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30} className="w-full flex justify-center">
          <div className="w-full aspect-[4/5] max-h-[70vh] sm:max-h-[82vh] flex items-center justify-center rounded-t-full border border-[#D7E2EA]/20 bg-gradient-to-b from-[#B600A8]/20 via-[#211326] to-transparent shadow-[0_0_100px_rgba(182,0,168,0.12)]">
              <div className="text-center">
                <span className="block text-[#D7E2EA]/50 text-xs sm:text-sm tracking-[0.5em] mb-4">ANIME ARTIST</span>
                <span className="hero-heading block text-white font-black text-[22vw] sm:text-[18vw] md:text-[13vw] leading-none tracking-tighter">Y.</span>
                <span className="block text-[#D7E2EA]/70 text-sm sm:text-base tracking-[0.35em] mt-3">YOZA</span>
              </div>
            </div>
        </FadeIn>
      </div>

      {/* 4. Bottom bar */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-20">
        {/* Left text */}
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            anime artist creating expressive characters and stories through illustration
          </p>
        </FadeIn>

        {/* Right Contact button */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={onOpenContact} />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
