import React from 'react';
import FadeIn from './FadeIn';
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
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0C0C0C] select-none">
      <FadeIn delay={0} y={-20} as="nav" className="w-full px-6 md:px-10 pt-6 md:pt-8 z-30">
        <div className="w-full flex items-center justify-between text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          <button onClick={() => scrollTo('about')} className="transition-opacity duration-200 hover:opacity-70 cursor-pointer">About</button>
          <button onClick={onOpenPricing} className="transition-opacity duration-200 hover:opacity-70 cursor-pointer">Price</button>
          <button onClick={() => scrollTo('projects')} className="transition-opacity duration-200 hover:opacity-70 cursor-pointer">Projects</button>
          <button onClick={onOpenContact} className="transition-opacity duration-200 hover:opacity-70 cursor-pointer">Contact</button>
        </div>
      </FadeIn>

      <div className="w-full overflow-hidden flex items-center justify-center my-auto relative z-0">
        <FadeIn delay={0.15} y={40} className="w-full text-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5 select-none" style={{ letterSpacing: '-0.04em' }}>
            Hi, i&apos;m yoza
          </h1>
        </FadeIn>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[min(76vw,390px)] sm:w-[360px] md:w-[440px] lg:w-[500px] top-1/2 -translate-y-[42%] sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none">
        <FadeIn delay={0.6} y={30} className="w-full flex justify-center">
          <div className="w-full aspect-[4/5] max-h-[72vh] sm:max-h-[82vh] overflow-hidden rounded-t-full border border-[#D7E2EA]/20 bg-[#211326] shadow-[0_0_100px_rgba(182,0,168,0.18)]">
            <img
              src="/IMG_20261030_233323_494.jpg"
              alt="Yoza — anime artist"
              className="h-full w-full object-cover object-center"
              fetchPriority="high"
            />
          </div>
        </FadeIn>
      </div>

      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
            anime artist creating expressive characters and stories through illustration
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={onOpenContact} />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
