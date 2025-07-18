'use client';
import React from 'react';
import Image from 'next/image';

const HeroSlides: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      {/* Slide 4 */}
      <div className="absolute inset-0 animate-slideshow-bg opacity-100">
        <Image
          src="/slide-7.jpg"
          alt="slide 7"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      
      {/* Slide 5 */}
      <div className="absolute inset-0 animate-slideshow-bg-delayed opacity-0">
        <Image
          src="/slide-9.jpg"
          alt="slide 9"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 animate-slideshow-bg-delayed opacity-0">
        <Image
          src="/slide-8.jpg"
          alt="slide 8"
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