import React from 'react';
import { motion, MotionProps } from 'framer-motion';

export interface FadeInProps extends MotionProps {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: keyof typeof motion | React.ComponentType<any> | string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  style,
  onClick,
  ...props
}) => {
  // Use motion.create if present, or index motion[as], fallback to motion.div
  const MotionComponent = React.useMemo(() => {
    if (typeof (motion as any).create === 'function') {
      try {
        return (motion as any).create(as);
      } catch {
        // fallback
      }
    }
    return (motion as any)[as as string] || motion.div;
  }, [as]);

  return (
    <MotionComponent
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      style={style}
      onClick={onClick}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default FadeIn;
