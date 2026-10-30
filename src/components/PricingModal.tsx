import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import ContactButton from './ContactButton';

export interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTier: (tierName: string) => void;
}

const TIERS = [
  {
    name: '3D Asset',
    tag: 'Starter',
    price: '$2,200',
    period: 'per asset / model',
    description: 'Detailed 3D models with high-res textures, optimized for web or real-time pipelines.',
    features: [
      'Custom 3D modeling & sculpt',
      'PBR texturing & materials',
      'Web-ready GLTF / USDZ formats',
      '3 high-res still render angles',
      '2 revision rounds',
    ],
    highlight: false,
  },
  {
    name: 'Motion & Render',
    tag: 'Most Popular',
    price: '$5,500',
    period: 'per project scene',
    description: 'Cinematic 3D animation and photorealistic rendering designed to captivate your audience.',
    features: [
      'Complete 3D hero environment',
      'Lighting & dynamic camera animation',
      '15-30s 4K 60fps motion render',
      'Seamless looping social / web cutdowns',
      'Sound design & color grade',
      'Dedicated art direction',
    ],
    highlight: true,
  },
  {
    name: 'Brand & 3D Web',
    tag: 'Enterprise / Studio',
    price: '$11,000+',
    period: 'comprehensive scope',
    description: 'Full-spectrum visual identity with 3D web experience, interactive models, and design system.',
    features: [
      'Full visual identity & 3D design system',
      'Interactive 3D web assets & animations',
      'Multiple scene motion graphics suite',
      'Custom shader and lighting setup',
      'Priority delivery & unlimited revisions',
      'Developer handoff & consulting',
    ],
    highlight: false,
  },
];

export const PricingModal: React.FC<PricingModalProps> = ({
  isOpen,
  onClose,
  onSelectTier,
}) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 animate-fadeIn overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full bg-[#111315] border-2 border-[#D7E2EA]/30 rounded-3xl sm:rounded-[40px] p-6 sm:p-10 shadow-2xl my-8"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 p-2 rounded-full text-[#D7E2EA]/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B600A8]">
            Investment & Packages
          </span>
          <h3 className="hero-heading text-3xl sm:text-5xl font-black uppercase tracking-tight mt-1 mb-3">
            Transparent Pricing
          </h3>
          <p className="text-[#D7E2EA]/70 font-light text-sm sm:text-base">
            Every 3D project is custom-crafted to your brand goals. Choose a tier or request a custom scope.
          </p>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                tier.highlight
                  ? 'bg-gradient-to-b from-[#1c1828] to-[#121316] border-2 border-[#B600A8] shadow-[0_0_30px_rgba(182,0,168,0.25)]'
                  : 'bg-[#0C0C0C] border border-[#D7E2EA]/20 hover:border-[#D7E2EA]/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/70">
                    {tier.tag}
                  </span>
                  {tier.highlight && (
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-[#B600A8]/30 text-white border border-[#B600A8]">
                      Featured
                    </span>
                  )}
                </div>

                <h4 className="text-2xl font-bold uppercase text-white tracking-tight mb-1">
                  {tier.name}
                </h4>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-3xl sm:text-4xl font-black text-[#D7E2EA]">
                    {tier.price}
                  </span>
                  <span className="text-xs text-[#D7E2EA]/60 uppercase tracking-wide">
                    {tier.period}
                  </span>
                </div>
                <p className="text-[#D7E2EA]/75 font-light text-xs sm:text-sm leading-relaxed mb-6">
                  {tier.description}
                </p>

                <div className="space-y-2.5 mb-8 pt-4 border-t border-white/10">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D7E2EA]/90">
                      <Check className="w-4 h-4 text-[#B600A8] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => onSelectTier(tier.name)}
                  className={`w-full py-3 rounded-full font-medium uppercase text-xs tracking-widest transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                    tier.highlight
                      ? 'bg-[#B600A8] hover:bg-[#c902b9] text-white shadow-lg'
                      : 'border border-[#D7E2EA]/30 hover:bg-[#D7E2EA]/10 text-white'
                  }`}
                >
                  <span>Select {tier.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingModal;
