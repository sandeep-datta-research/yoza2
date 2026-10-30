import React from 'react';
import FadeIn from './FadeIn';
import { ProjectItem } from '../types';

const GALLERY_ITEMS = [
  { number: '01', title: 'Character Illustrations', note: 'Portraits and full-body anime artwork' },
  { number: '02', title: 'Original Characters', note: 'Custom designs and character concepts' },
  { number: '03', title: 'Manga & Cover Art', note: 'Story-driven illustrations and key visuals' },
];

export interface ProjectsSectionProps {
  onOpenProject: (project: ProjectItem, imgIdx: number) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = () => (
  <section id="projects" className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 pt-16 sm:pt-20 md:pt-24 pb-28 sm:pb-36 px-5 sm:px-8 md:px-10">
    <div className="max-w-6xl mx-auto">
      <FadeIn delay={0} y={40} className="text-center mb-8 sm:mb-12">
        <h2 className="hero-heading font-black uppercase text-center leading-none tracking-tight select-none" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>Artwork</h2>
        <p className="text-[#D7E2EA]/60 uppercase tracking-[0.25em] text-xs sm:text-sm mt-5">A collection of Yoza's illustrations</p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {GALLERY_ITEMS.map((item, index) => (
          <FadeIn key={item.number} delay={index * 0.1} y={30}>
            <div className="group relative min-h-[300px] sm:min-h-[390px] rounded-[30px] border border-[#D7E2EA]/20 overflow-hidden bg-gradient-to-br from-[#24152a] via-[#111315] to-[#0C0C0C] flex flex-col justify-between p-6 sm:p-8">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_40%,rgba(182,0,168,0.18),transparent_65%)]" />
              <div className="relative z-10 flex items-start justify-between">
                <span className="text-5xl sm:text-6xl font-black text-[#D7E2EA]/25">{item.number}</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D7E2EA]/45">Gallery</span>
              </div>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full border border-[#D7E2EA]/25 flex items-center justify-center text-[#D7E2EA]/50 mb-5 text-xl">＋</div>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#D7E2EA]">{item.title}</h3>
                <p className="text-sm text-[#D7E2EA]/55 mt-2">{item.note}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#B600A8] mt-6">Artwork coming soon</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
