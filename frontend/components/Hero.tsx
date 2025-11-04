'use client';

import { ArrowRight, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="utama" className="relative min-h-screen flex items-center bg-gradient-to-br from-[#1E4A7A] via-[#153858] to-[#4A90E2] overflow-hidden">
      {/* Subtle dot pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="inline-block">
              <span className="bg-[#FF6B5B]/20 text-[#FF6B5B] px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-[#FF6B5B]/30">
                Pendaftaran Dibuka 2025
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Mulakan Kerjaya Cemerlang Anda Di{' '}
              <span className="text-[#FF6B5B]">Industri Global</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Program Diploma berkualiti dalam bidang Maritim, Keselamatan, Logistik, Minyak & Gas, dan Hospitaliti. 
              <span className="font-semibold text-white"> 75% graduan bekerja dalam 6 bulan!</span>
            </p>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4 max-w-3xl mx-auto">
              {[
                '✓ Sijil Industri Percuma',
                '✓ Jaminan Kerja Selepas Tamat',
                '✓ Kampus Di Pusat Industri',
                '✓ 20+ Tahun Pengalaman'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20">
                  <span className="text-[#FF6B5B] text-lg">●</span>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="#daftar"
                className="group bg-[#FF6B5B] hover:bg-[#ff5544] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span>Daftar Sekarang</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="#tentang"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center"
              >
                Ketahui Lebih Lanjut
              </a>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative lg:block hidden">
            {/* Placeholder removed - can add actual image here later */}
          </div>
        </div>
      </div>
    </section>
  );
}
