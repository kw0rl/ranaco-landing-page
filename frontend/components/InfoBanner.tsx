'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  {
    src: '/program diploma jaminan kerja.jpeg',
    alt: 'Program Diploma Jaminan Kerja'
  },
  {
    src: '/kenapa memilih kami.jpeg',
    alt: 'Kenapa Memilih Kami'
  },
  {
    src: '/program ditawarkan.jpeg',
    alt: 'Program Ditawarkan'
  }
];

export default function InfoBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  return (
    <section
      className="relative py-6 sm:py-8 lg:py-10 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/ranaco%20background.jpg')" }}
    >
      {/* Dark Overlay for better content visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Slider Container */}
          <div className="relative overflow-hidden shadow-2xl">
            
            {/* Slides */}
            <div className="relative w-full h-auto">
              {banners.map((banner, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-700 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  <Image
                    src={banner.src}
                    alt={banner.alt}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            {/* Dots Indicator - Visible on desktop only */}
            <div className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 gap-2 sm:gap-3 z-10">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? 'bg-white w-8 sm:w-10 h-2 sm:h-3'
                      : 'bg-white/50 hover:bg-white/70 w-2 sm:w-3 h-2 sm:h-3'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          </div>

          {/* Navigation Buttons - Below slider on mobile, sides on desktop */}
          <div className="flex justify-center items-center gap-4 mt-4 sm:hidden">
            {/* Previous Button - Mobile */}
            <button
              onClick={goToPrevious}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-[#FF6B5B] p-2 rounded-full transition-all duration-300 hover:scale-110 shadow-xl"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" strokeWidth={3} />
            </button>

            {/* Next Button - Mobile */}
            <button
              onClick={goToNext}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-[#FF6B5B] p-2 rounded-full transition-all duration-300 hover:scale-110 shadow-xl"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" strokeWidth={3} />
            </button>
          </div>

          {/* Desktop Navigation Buttons - Sides */}
          <div className="hidden sm:block">
            {/* Previous Button - Desktop */}
            <button
              onClick={goToPrevious}
              className="absolute -left-12 lg:-left-16 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-[#FF6B5B] p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-xl z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-8 h-8" strokeWidth={3} />
            </button>

            {/* Next Button - Desktop */}
            <button
              onClick={goToNext}
              className="absolute -right-12 lg:-right-16 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-[#FF6B5B] p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-xl z-20"
              aria-label="Next slide"
            >
              <ChevronRight className="w-8 h-8" strokeWidth={3} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
