'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

interface ScaleAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  scale?: number;
  threshold?: number;
  rootMargin?: string;
}

const ScaleAnimation: React.FC<ScaleAnimationProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  scale = 0.8,
  threshold = 0.1,
  rootMargin = '0px',
}) => {
  const { ref, isInView } = useInView({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ scale, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale, opacity: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScaleAnimation; 