import React from 'react';
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectItem } from '../types';

export interface ProjectLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectItem | null;
  activeImageIndex?: number;
  onSelectIndex?: (index: number) => void;
}

export const ProjectLightbox: React.FC<ProjectLightboxProps> = ({
  isOpen,
  onClose,
  project,
  activeImageIndex = 0,
  onSelectIndex,
}) => {
  if (!isOpen || !project) return null;

  const images = [project.col1Image1, project.col1Image2, project.col2Image];
  const currentImage = images[activeImageIndex] || images[0];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prev = (activeImageIndex - 1 + images.length) % images.length;
    onSelectIndex?.(prev);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = (activeImageIndex + 1) % images.length;
    onSelectIndex?.(next);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 transition-all animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full bg-[#111315] border border-[#D7E2EA]/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0C0C0C]">
          <div className="flex items-center gap-3">
            <span className="font-black text-[#D7E2EA] text-xl">
              {project.number}
            </span>
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 px-2 py-0.5 rounded-full border border-white/10">
              {project.category}
            </span>
            <h3 className="font-semibold text-white tracking-wide text-lg sm:text-xl">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={currentImage}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-white/10 text-[#D7E2EA] transition-colors"
              title="Open full resolution"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-[#D7E2EA] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main image view */}
        <div className="relative flex-1 bg-black/60 flex items-center justify-center p-4 min-h-[340px] sm:min-h-[460px] overflow-hidden">
          <img
            src={currentImage}
            alt={project.title}
            className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl shadow-lg"
          />

          {/* Left / Right arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/10 transition-all cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/10 transition-all cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Thumbnail gallery */}
        <div className="flex items-center justify-center gap-3 p-4 bg-[#0C0C0C] border-t border-white/10">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => onSelectIndex?.(i)}
              className={`relative rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                activeImageIndex === i
                  ? 'border-[#D7E2EA] scale-105 shadow-md'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={img}
                alt={`Preview thumbnail ${i + 1}`}
                className="w-20 h-14 sm:w-24 sm:h-16 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectLightbox;
