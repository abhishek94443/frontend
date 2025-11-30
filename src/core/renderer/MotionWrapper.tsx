"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

export type AnimationType = 'none' | 'fade-in' | 'slide-up' | 'slide-down' | 'scale-up' | 'scale-down';

interface MotionWrapperProps {
  children: React.ReactNode;
  animation?: AnimationType;
  className?: string;
  delay?: number;
}

const variants: Record<string, Variants> = {
  'fade-in': {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  },
  'slide-up': {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  },
  'slide-down': {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  },
  'scale-up': {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  },
  'scale-down': {
    hidden: { opacity: 0, scale: 1.05 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  }
};

export const MotionWrapper: React.FC<MotionWrapperProps> = ({ 
  children, 
  animation = 'none', 
  className,
  delay = 0 
}) => {
  if (!animation || animation === 'none') {
    return <>{children}</>;
  }

  const selectedVariant = variants[animation] || variants['fade-in'];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={selectedVariant}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
