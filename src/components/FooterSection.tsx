import React from 'react';
import { ArrowUp } from 'lucide-react';
import ContactButton from './ContactButton';

export interface FooterSectionProps {
  onOpenContact: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenContact }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative w-full bg-[#0C0C0C] border-t border-[#D7E2EA]/10 px-6 md:px-10 py-16 sm:py-20 select-none z-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-12 border-b border-[#D7E2EA]/10">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 block mb-2 font-light">Open to Art Commissions & Collaborations</span>
            <h3 className="hero-heading font-black uppercase text-3xl sm:text-5xl tracking-tight leading-tight">
              Have an idea?
              <br />
              Let's turn it into art.
            </h3>
          </div>
          <div className="flex items-center gap-4">
            <ContactButton onClick={onOpenContact} label="Let's Talk" />
            <button onClick={scrollToTop} className="w-12 h-12 rounded-full border border-[#D7E2EA]/30 flex items-center justify-center text-[#D7E2EA] hover:bg-[#D7E2EA]/10 hover:border-white transition-all cursor-pointer" title="Back to top" aria-label="Back to top">
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-[#D7E2EA]/60 text-xs sm:text-sm uppercase tracking-wider font-light">
          <span>© {new Date().getFullYear()} YOZA • ANIME ARTIST</span>
          <span className="text-[#D7E2EA]/40">Social links will be added soon</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
