'use client';
import React from 'react';
import { motion } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  distance?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number; // porcentaje del viewport para disparar (0 a 1)
}

function getInitialOffset(direction: Direction, distance: number) {
  switch (direction) {
    case 'up':
      return { x: 0, y: distance };
    case 'down':
      return { x: 0, y: -distance };
    case 'left':
      return { x: distance, y: 0 };
    case 'right':
      return { x: -distance, y: 0 };
    default:
      return { x: 0, y: 0 };
  }
}

const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  direction = 'up',
  distance = 24,
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
}) => {
  const initialOffset = getInitialOffset(direction, distance);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;


