import React from 'react';
import { ExternalLink } from 'lucide-react';

export interface LiveProjectButtonProps {
  onClick?: () => void;
  href?: string;
  className?: string;
  label?: string;
  showIcon?: boolean;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  onClick,
  href,
  className = '',
  label = 'Live Project',
  showIcon = false,
}) => {
  const classes = `
    inline-flex items-center justify-center gap-2
    rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA]
    font-medium uppercase tracking-widest
    px-8 py-3 sm:px-10 sm:py-3.5
    text-sm sm:text-base
    cursor-pointer select-none
    transition-all duration-300
    hover:bg-[#D7E2EA]/10 hover:scale-[1.02] active:scale-[0.98]
    ${className}
  `.trim();

  const content = (
    <>
      <span>{label}</span>
      {showIcon && <ExternalLink className="w-4 h-4 ml-0.5 opacity-80" />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
};

export default LiveProjectButton;
