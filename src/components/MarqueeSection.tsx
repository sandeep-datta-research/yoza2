import React, { useRef, useState, useEffect } from 'react';

const ROW_1_IMAGES: string[] = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
];

const ROW_2_IMAGES: string[] = [
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

export interface MarqueeSectionProps {
  onSelectImage?: (url: string) => void;
}

export const MarqueeSection: React.FC<MarqueeSectionProps> = ({ onSelectImage }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollOffset, setScrollOffset] = useState<number>(0);

  // Triple the arrays for seamless scrolling
  const row1Tripled = React.useMemo(
    () => [...ROW_1_IMAGES, ...ROW_1_IMAGES, ...ROW_1_IMAGES],
    []
  );
  const row2Tripled = React.useMemo(
    () => [...ROW_2_IMAGES, ...ROW_2_IMAGES, ...ROW_2_IMAGES],
    []
  );

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
        setScrollOffset(offset);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    updateScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1: Moves RIGHT on scroll: translateX(offset - 200) */}
        <div
          className="flex gap-3 transition-transform duration-75 ease-out"
          style={{
            transform: `translateX(${scrollOffset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {row1Tripled.map((url, idx) => (
            <div
              key={`r1-${idx}`}
              onClick={() => onSelectImage?.(url)}
              className="w-[420px] h-[270px] min-w-[420px] max-w-[420px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#16181b] group relative shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <img
                src={url}
                alt={`3D Motion Showpiece ${idx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl group-hover:brightness-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll: translateX(-(offset - 200)) */}
        <div
          className="flex gap-3 transition-transform duration-75 ease-out"
          style={{
            transform: `translateX(${-(scrollOffset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {row2Tripled.map((url, idx) => (
            <div
              key={`r2-${idx}`}
              onClick={() => onSelectImage?.(url)}
              className="w-[420px] h-[270px] min-w-[420px] max-w-[420px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#16181b] group relative shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <img
                src={url}
                alt={`3D Motion Showpiece ${idx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl group-hover:brightness-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
