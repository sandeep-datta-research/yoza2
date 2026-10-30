import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles } from 'lucide-react';
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
  const [message, setMessage] = useState(
    initialSubject ? `Interested in: ${initialSubject}` : ''
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
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
              Thanks for your interest in Yoza's artwork. This form is a preview and is not connected yet; contact links will be added soon.
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
              Interested in an illustration, original character, fan art, or cover commission? Share your idea below.
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
                <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1">Commission Type</label>
                <select
                  className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 focus:border-[#B600A8] rounded-xl px-4 py-3 text-white outline-none transition-colors text-sm"
                  defaultValue="Anime character illustration"
                  onChange={(e) => setMessage((current) => current || e.target.value)}
                >
                  <option>Anime character illustration</option>
                  <option>Original character design</option>
                  <option>Fan art / portrait</option>
                  <option>Manga or cover illustration</option>
                  <option>Wallpaper / profile art</option>
                  <option>Other idea</option>
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
                  placeholder="Describe the character, style, reference, or artwork you have in mind..."
                  className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 focus:border-[#B600A8] rounded-xl px-4 py-3 text-white placeholder-white/25 outline-none transition-colors text-sm resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-center text-[#D7E2EA]/45">Contact details coming soon</span>

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
