'use client';
import React from 'react';
import Image from 'next/image';

const HeroSlides: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      {/* Slide 4 */}
      <div className="absolute inset-0 animate-slideshow-bg opacity-100">
        <Image
          src="/Slide-4.jpg"
          alt="Slide 4"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      
      {/* Slide 5 */}
      <div className="absolute inset-0 animate-slideshow-bg-delayed opacity-0">
        <Image
          src="/Slide-5.jpg"
          alt="Slide 5"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default HeroSlides; 