'use client';

import React from 'react';
import { useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Amir Naim',
    program: 'Marine Cargo Surveying',
    image: '/alumni/alumni-Amir-Naim.png',
    quote: 'Sebagai bekas pelajar jurusan Marine Cargo Surveying, saya kini sudah 5 tahun bekerja sebagai process technician di Singapura bersama syarikat Air Liquid Singapore. All the best Ranaco and thanks for all the knowledge that I get from all the lecturers. Mungkin rezeki saya dalam bidang Marine Survey tak panjang tetapi di atas tiket Diploma yang saya dapat dari Ranaco, saya Berjaya bina kerjaya di Ranaco dalam industri Petrochemical & Gas. SAYA BANGGA DENGAN RANACO!!'
  },
  {
    name: 'Uswatun',
    program: 'Occupational Safety & Health',
    image: '/alumni/alumni-Uswatun.png',
    quote: 'Ranaco adalah antara institusi yang menyediakan tawaran pengajian yang relevan dengan perkembangan dan permintaan semasa industri. Selain itu, pendedahan pembelajaran yang menyeluruh dari pensyarah yang berkaliber dan berpengalaman sangat membantu untuk menjadi graduan kompeten. Syabas Ranaco!'
  },
  {
    name: 'Ikram',
    program: 'Maritime Management',
    image: '/alumni/alumni-Ikram.png',
    quote: 'Sepanjang saya belajar di Ranaco, pelbagai ilmu dan perkongsian pengalaman kerja dari tenaga pengajar. Silibus dalam setiap pelajaran yang mencukupi, ringkas dan lengkap serta mudah difahami untuk dipelajari. Saya juga banyak mengikuti latihan dan menyertai pasukan ragbi serta pasukan Rejimen Askar Wataniah dalam tempoh tersebut.'
  },
  {
    name: 'Haziq',
    program: 'Port Management',
    image: '/alumni/alumni-Haziq.png',
    quote: 'Ranaco banyak mengajar dari sudut teori dan praktikal bukan sahaja di sesi kuliah malah juga di sesi tidak langsung. Isi kandungan silibus juga sentiasa dikemaskini seiring dengan isu-isu semasa yang berbangkit di lapangan industri. Teknik sesi pembelajaran 2 hala juga menarik perhatian saya untuk lebih fokus ketika belajar. Pengalaman yang tidak dapat dibeli adalah bila dapat berborak dengan otai-otai industri yang berada di sekitar Kemaman. Banyak ilmu dan manfaat yang telah dikongsi bersama.'
  },
  {
    name: 'Effa',
    program: 'Maritime Law & Insurance',
    image: '/alumni/alumni-Effa.png',
    quote: 'Saya memilih Ranaco kerana Ranaco antara institut yang terkenal dengan pencapaian pelajar-pelajar yang cemerlang dalam bidang yang dipilih seperti bidang OSH, bidang maritim dan sebagainya. Selain daripada itu, Ranaco juga menawarkan yuran kursus yang murah berbanding institut pengajian yang lain serta silibus yang diperakui oleh MQA. SAYA JUGA MEMILIH Ranaco kerana program OSH yang menjadi pilihan saya mendapat perakuan daripada Jabatan Kesihatan dan Keselamatan Pekerjaan (JKKP).'
  }
];

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 386; // card width (380px) + gap (6px)
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="testimoni" className="relative py-20 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/alumni background.png"
          alt="Alumni Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[#FF6B5B] to-[#FF8B6D] text-white font-bold text-sm uppercase tracking-wider px-6 py-2 rounded-full">
              TESTIMONI
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Alumni of RETI
          </h2>
          <p className="text-lg text-gray-200">
            Dengar pengalaman sebenar alumni kami yang kini berjaya dalam kerjaya masing-masing
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative py-8">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center transition-all duration-300 hover:scale-125"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-10 h-10 sm:w-12 sm:h-12 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" strokeWidth={3} />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center transition-all duration-300 hover:scale-125"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-10 h-10 sm:w-12 sm:h-12 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" strokeWidth={3} />
          </button>
          
          {/* Scrolling Content Wrapper */}
          <div className="overflow-hidden px-12 sm:px-16">
            <div 
              ref={scrollContainerRef}
              className="overflow-x-hidden py-4"
            >
              <div className="flex gap-4 sm:gap-6 animate-scroll group">
                {/* First set of testimonials */}
                {testimonials.map((testimonial, idx) => (
                <div
                  key={`first-${idx}`}
                  className="flex-shrink-0 w-[240px] sm:w-[350px] lg:w-[380px]"
                >
                  <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 sm:p-8 border border-white/20 hover:bg-black/50 hover:border-[#FF6B5B]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full flex flex-col">
                    {/* Quote Icon */}
                    <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-[#FF6B5B] mb-3 sm:mb-6 opacity-70" />

                    {/* Testimonial Text */}
                    <p className="text-gray-100 leading-snug mb-3 sm:mb-6 italic flex-grow text-xs sm:text-[15px]">
                      {`"${testimonial.quote}"`}
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-2 sm:gap-4 pt-3 sm:pt-6 border-t border-white/20 mt-auto">
                      <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg overflow-hidden relative bg-gray-200">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          sizes="(max-width: 640px) 40px, 64px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-white text-sm sm:text-lg">{testimonial.name}</div>
                        <div className="text-[10px] sm:text-sm text-gray-300 truncate">{testimonial.program}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {testimonials.map((testimonial, idx) => (
                <div
                  key={`second-${idx}`}
                  className="flex-shrink-0 w-[240px] sm:w-[350px] lg:w-[380px]"
                >
                  <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 sm:p-8 border border-white/20 hover:bg-black/50 hover:border-[#FF6B5B]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full flex flex-col">
                    {/* Quote Icon */}
                    <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-[#FF6B5B] mb-3 sm:mb-6 opacity-70" />

                    {/* Testimonial Text */}
                    <p className="text-gray-100 leading-snug mb-3 sm:mb-6 italic flex-grow text-xs sm:text-[15px]">
                      "{testimonial.quote}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-2 sm:gap-4 pt-3 sm:pt-6 border-t border-white/20 mt-auto">
                      <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg overflow-hidden relative bg-gray-200">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          sizes="(max-width: 640px) 40px, 64px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-white text-sm sm:text-lg">{testimonial.name}</div>
                        <div className="text-[10px] sm:text-sm text-gray-300 truncate">{testimonial.program}</div>
                      </div>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-386px * 5));
            }
          }

          .animate-scroll {
            animation: scroll 50s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Video Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Tonton Video Testimoni Alumni</h3>
            <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden mb-8">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/9n2dYu1X4Ms"
                title="APA CERITA ALUMNI RANACO"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Additional Videos Slider */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-6">Lebih Banyak Video Alumni</h4>
              <div className="relative">
                <div className="overflow-hidden px-12 sm:px-16">
                {/* Left Arrow */}
                <button
                  onClick={() => {
                    const container = document.getElementById('video-slider');
                    if (container) {
                      const scrollAmount = window.innerWidth < 640 ? container.offsetWidth : 340;
                      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                    }
                  }}
                  className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-all duration-300 hover:scale-125"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-10 h-10 sm:w-12 sm:h-12 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" strokeWidth={3} />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={() => {
                    const container = document.getElementById('video-slider');
                    if (container) {
                      const scrollAmount = window.innerWidth < 640 ? container.offsetWidth : 340;
                      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                    }
                  }}
                  className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-all duration-300 hover:scale-125"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-10 h-10 sm:w-12 sm:h-12 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" strokeWidth={3} />
                </button>

                  <div id="video-slider" className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
                  {[
                    { id: 'ZYBSfVMyaxw', title: 'Majlis Konvokesyen Ranaco Ke-13' },
                    { id: '9n2dYu1X4Ms', title: 'Apa Cerita Alumni RETI' },
                    { id: 'nNyxB6n7fU4', title: 'Siaran Langsung Bersama TV Alhijrah' },
                    { id: 'Cw4hmNz6GeU', title: 'Apa Cerita Alumni RETI (Sharing Session Bersama Ain)' },
                    { id: 'Bnf1Fg4Jn4U', title: 'Apa Cerita Alumni RETI' },
                    { id: 'FHtK1dQP4IY', title: 'Sharing Session: Diploma In Nautical Studies' },
                    { id: 'eA-RBDuVFXM', title: 'Sharing Session: Diploma In Logistics & Supply Chain' },
                    { id: 'Nxoo7eqGtpU', title: 'Sharing Session: Diploma In Occupational Safety & Health' },
                  ].map((video, idx) => (
                    <div
                      key={idx}
                      className="flex-shrink-0 w-[calc(100%-1rem)] sm:w-80 snap-start"
                    >
                      <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-[#FF6B5B]/50 transition-all duration-300 hover:scale-105">
                        <div className="aspect-video">
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${video.id}`}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          ></iframe>
                        </div>
                        <div className="p-4 text-center">
                          <p className="text-sm font-medium text-white/90">{video.title}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <style jsx global>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </section>
  );
}
