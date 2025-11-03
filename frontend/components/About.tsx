'use client';

import { Building2, Award, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Counter component: animates from 0 to target when visible
function Counter({ end, duration = 1500, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const [hasRun, setHasRun] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun) {
            setHasRun(true);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasRun]);

  useEffect(() => {
    if (!hasRun) return;
    let start: number | null = null;
    const startVal = 0;
    const animate = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = Math.floor(startVal + (end - startVal) * progress);
      setValue(current);
      if (progress < 1) requestAnimationFrame(animate);
    };
    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [hasRun, duration, end]);

  const formatted = new Intl.NumberFormat('en-US').format(value);
  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="tentang" className="relative py-24 overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070')",
          }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332]/95 via-[#1E4A7A]/90 to-[#1A2332]/95"></div>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[#FF6B5B] to-[#FF8B6D] text-white font-bold text-sm uppercase tracking-wider px-6 py-2 rounded-full">
              TENTANG
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ranaco Education & Training<br />Institute
          </h2>
          <div className="w-24 h-1 bg-[#FF6B5B] mx-auto rounded-full"></div>
        </div>

        {/* Main Content Text */}
        <div className="max-w-4xl mx-auto mb-16" data-aos="fade-up" data-aos-delay="100">
          <p className="text-white/90 text-lg md:text-xl leading-relaxed text-center mb-6">
            Ditubuhkan pada tahun <span className="font-bold text-[#FF6B5B]">2004</span> sebagai tindak balas kepada keperluan yang semakin meningkat untuk profesional dan kakitangan mahir dalam bidang maritim, keselamatan, luar pesisir, logistik dan hospitaliti di rantau ini. RANACO membuka pintunya kepada semua yang ingin meningkatkan prospek kerjaya mereka melalui konsep pendidikan dan latihan industri kami yang unik.
          </p>
          
          <p className="text-white/90 text-lg md:text-xl leading-relaxed text-center mb-6">
            <span className="font-semibold text-white">RANACO Marine Sdn. Bhd.</span> menubuhkan Institut Pendidikan & Latihan RANACO, sebuah institut pengajian tinggi di bawah <span className="font-semibold text-white">Akta Institut Pendidikan Tinggi (1996)</span>. Semua program RETI diakreditasi oleh <span className="font-semibold text-white">Agensi Kelayakan Malaysia</span>.
          </p>
          
          <p className="text-white/90 text-lg md:text-xl leading-relaxed text-center mb-8">
            Konsep unik kami dalam menyediakan sijil industri kepada semua graduan kami adalah untuk memastikan mereka bersedia untuk memasuki industri. Ini terbukti apabila lebih daripada <span className="font-bold text-[#FF6B5B] text-2xl">75%</span> graduan kami bekerja di lapangan dalam tempoh <span className="font-bold text-[#FF6B5B] text-2xl">6 bulan</span> selepas selesai.
          </p>
          
          <p className="text-[#ff5544] text-sm text-center italic">
            (TracerStudy oleh Kementerian Pengajian Tinggi.)
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20" data-aos="fade-up" data-aos-delay="200">
          <a
            href="#daftar"
            className="group bg-[#FF6B5B] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#ff5544] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-2"
          >
            DAFTAR SEKARANG
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#footer"
            className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#1E4A7A] transition-all duration-300 shadow-xl flex items-center gap-2"
          >
            HUBUNGI KAMI
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="300">
          {/* Stat 1 */}
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-extrabold text-white">
              <Counter end={20} suffix="+" />
            </div>
            <div className="text-sm sm:text-base text-gray-200 mt-2">Tahun Beroperasi</div>
          </div>
          {/* Stat 2 */}
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-extrabold text-white">
              <Counter end={100} suffix="%" />
            </div>
            <div className="text-sm sm:text-base text-gray-200 mt-2">Sijil Industri Percuma</div>
          </div>
          {/* Stat 3 */}
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-extrabold text-white">
              <Counter end={10000} suffix="+" />
            </div>
            <div className="text-sm sm:text-base text-gray-200 mt-2">Graduan Berjaya</div>
          </div>
        </div>
      </div>
    </section>
  );
}
