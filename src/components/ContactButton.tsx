import React from 'react';

export interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
  href?: string;
  label?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  onClick,
  className = '',
  href,
  label = 'Contact Me',
}) => {
  const content = (
    <span className="relative z-10 flex items-center justify-center gap-2">
      {label}
    </span>
  );

  const buttonStyle: React.CSSProperties = {
    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
    boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
    outline: '2px solid white',
    outlineOffset: '-3px',
  };

  const classes = `
    group relative inline-flex items-center justify-center
    rounded-full text-white font-medium uppercase tracking-widest
    px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
    text-xs sm:text-sm md:text-base
    cursor-pointer select-none transition-all duration-300
    hover:scale-[1.03] active:scale-[0.98] hover:brightness-110
    ${className}
  `.trim();

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes} style={buttonStyle}>
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={classes}
      style={buttonStyle}
    >
      {content}
    </button>
  );
};

export default ContactButton;
