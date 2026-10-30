import React from 'react';
import FadeIn from './FadeIn';

const GALLERY_ITEMS = [
  {
    number: '01',
    title: 'Celestial Dreams',
    category: 'Anime illustration',
    image: 'https://cdn.pixabay.com/photo/2023/12/07/11/11/girl-8435339_640.png',
    source: 'https://pixabay.com/',
    alt: 'Anime-inspired character beneath a starry sky',
  },
  {
    number: '02',
    title: 'Blue Reverie',
    category: 'Character art',
    image: 'https://cdn.pixabay.com/photo/2024/07/08/05/41/girl-8880144_1280.png',
    source: 'https://pixabay.com/',
    alt: 'Blue-haired anime-style character with birds and flowing shapes',
  },
  {
    number: '03',
    title: 'Starlit Waltz',
    category: 'Fantasy illustration',
    image: 'https://cdn.pixabay.com/photo/2024/07/26/05/54/girl-8922722_640.png',
    source: 'https://pixabay.com/',
    alt: 'Purple-haired fantasy anime character floating against a dark sky',
  },
  {
    number: '04',
    title: 'Golden Hour',
    category: 'Digital portrait',
    image: 'https://cdn.pixabay.com/photo/2023/04/30/05/05/anime-digital-art-7959760_640.jpg',
    source: 'https://pixabay.com/illustrations/anime-digital-art-anime-characters-7959758/',
    alt: 'Warmly lit anime-inspired digital portrait',
  },
  {
    number: '05',
    title: 'Beyond the Horizon',
    category: 'Anime environment art',
    image: 'https://cdn.pixabay.com/photo/2023/03/28/11/52/ai-generated-7882967_640.jpg',
    source: 'https://pixabay.com/',
    alt: 'Dreamlike anime-inspired fantasy city under a glowing sky',
  },
  {
    number: '06',
    title: 'Radiant',
    category: 'Fantasy character art',
    image: 'https://cdn.pixabay.com/photo/2023/11/05/07/47/ai-generated-8366445_640.jpg',
    source: 'https://pixabay.com/',
    alt: 'Fantasy anime-style character in warm golden light',
  },
];

export interface ProjectsSectionProps {
  onOpenProject?: (project: any, imgIdx: number) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = () => (
  <section id="projects" className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 pt-16 sm:pt-20 md:pt-24 pb-28 sm:pb-36 px-5 sm:px-8 md:px-10">
    <div className="max-w-6xl mx-auto">
      <FadeIn delay={0} y={40} className="text-center mb-8 sm:mb-12">
        <h2 className="hero-heading font-black uppercase text-center leading-none tracking-tight select-none" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>Artwork</h2>
        <p className="text-[#D7E2EA]/60 uppercase tracking-[0.25em] text-xs sm:text-sm mt-5">A curated visual preview while Yoza's own gallery is in progress</p>
        <p className="text-[#D7E2EA]/40 text-[10px] sm:text-xs mt-3 tracking-wide">SAMPLE ARTWORK · SOURCED FROM PIXABAY · NOT YOZA'S ORIGINAL WORK</p>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {GALLERY_ITEMS.map((item, index) => (
          <FadeIn key={item.number} delay={index * 0.07} y={30}>
            <article className="group relative overflow-hidden rounded-[24px] sm:rounded-[30px] border border-[#D7E2EA]/15 bg-[#151319]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.045]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/90 via-transparent to-black/10" />
                <span className="absolute top-4 left-4 text-xs font-bold tracking-[0.2em] text-white/70">{item.number}</span>
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-[#E7A8F0] mb-2">{item.category}</p>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">{item.title}</h3>
                  <a href={item.source} target="_blank" rel="noreferrer" className="inline-block mt-3 text-[10px] uppercase tracking-[0.2em] text-white/55 hover:text-white transition-colors">Image source: Pixabay ↗</a>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
      <p className="text-center text-[#D7E2EA]/35 text-[10px] sm:text-xs mt-8 leading-relaxed">
        These online examples are temporary placeholders for layout preview. They will be replaced with Yoza's own paintings when provided.
      </p>
    </div>
  </section>
);

export default ProjectsSection;
