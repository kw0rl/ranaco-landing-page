'use client';

import Image from 'next/image';

export default function InfoBanner() {
  return (
    <section
      className="relative py-12 sm:py-16 lg:py-20 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/ranaco%20background.jpg')" }}
    >
      {/* Dark Overlay for better content visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Vertical Stack Layout - Full Width */}
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Program Diploma Jaminan Kerja */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="relative w-full h-auto">
              <Image
                src="/program diploma jaminan kerja.jpeg"
                alt="Program Diploma Jaminan Kerja"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Kenapa Memilih Kami */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="relative w-full h-auto">
              <Image
                src="/kenapa memilih kami.jpeg"
                alt="Kenapa Memilih Kami"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Program Ditawarkan */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="relative w-full h-auto">
              <Image
                src="/program ditawarkan.jpeg"
                alt="Program Ditawarkan"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
