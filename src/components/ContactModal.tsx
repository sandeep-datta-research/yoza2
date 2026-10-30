import React, { useState } from 'react';
import { X, Mail, Send, CheckCircle2, Copy, Sparkles } from 'lucide-react';
import ContactButton from './ContactButton';

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialSubject = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('$3,000 - $7,000');
  const [message, setMessage] = useState(
    initialSubject ? `Interested in: ${initialSubject}` : ''
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jack.3dcreator@example.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-xl w-full bg-[#111315] border-2 border-[#D7E2EA]/30 rounded-3xl sm:rounded-[36px] p-6 sm:p-8 shadow-2xl overflow-hidden"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 p-2 rounded-full text-[#D7E2EA]/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-12 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-2">
              Message Received
            </h3>
            <p className="text-[#D7E2EA]/80 font-light max-w-sm mb-8">
              Thanks for reaching out! Jack will review your project details and get back to you within 24 hours.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 font-medium uppercase text-sm tracking-wider"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#B600A8]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D7E2EA]/70">
                Let&apos;s Collaborate
              </span>
            </div>
            <h3 className="hero-heading text-3xl sm:text-4xl font-black uppercase tracking-tight mb-2">
              Start A Project
            </h3>
            <p className="text-[#D7E2EA]/70 text-sm font-light mb-6">
              Have a 3D vision, brand revamp, or motion design in mind? Drop a note below or reach out directly.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Mercer"
                  className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 focus:border-[#B600A8] rounded-xl px-4 py-3 text-white placeholder-white/25 outline-none transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@studio.com"
                  className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 focus:border-[#B600A8] rounded-xl px-4 py-3 text-white placeholder-white/25 outline-none transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1">
                  Estimated Budget
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 focus:border-[#B600A8] rounded-xl px-4 py-3 text-white outline-none transition-colors text-sm"
                >
                  <option value="$1,500 - $3,000">$1,500 - $3,000 (Single 3D asset)</option>
                  <option value="$3,000 - $7,000">$3,000 - $7,000 (Complete 3D scene / motion)</option>
                  <option value="$7,000 - $15,000+">$7,000 - $15,000+ (Full 3D Web experience & brand)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1">
                  Project Details
                </label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your product, timeline, and goals..."
                  className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 focus:border-[#B600A8] rounded-xl px-4 py-3 text-white placeholder-white/25 outline-none transition-colors text-sm resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D7E2EA]/70 hover:text-white transition-colors cursor-pointer"
                >
                  {isCopied ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                  <span>{isCopied ? 'Email Copied!' : 'jack.3dcreator@example.com'}</span>
                </button>

                <ContactButton label="Send Inquiry" />
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
