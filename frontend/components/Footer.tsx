'use client';

import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0f2942] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                src="/LOGO-RETI-OFFICIAL.jpeg" 
                alt="RANACO Education & Training Institute" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Memenuhi Keperluan Industri melalui pendidikan berkualiti dan latihan industri yang komprehensif sejak 2004.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/share/1A3jBj7iYY/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#1877F2] rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://x.com/ranacoedu" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#000000] rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.instagram.com/officialranacoedu?igsh=MWR2Ymt0anR1bmN3aw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#E4405F] rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@officialranacoedu?_r=1&_t=ZS-913iFd6Lh7B" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#000000] rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
              <a href="https://www.youtube.com/@officialranacoedu" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#FF0000] rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Menu Column */}
          <div>
            <h3 className="font-bold text-lg mb-6">Menu</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#utama" className="text-gray-400 hover:text-[#FF6B5B] transition-colors text-sm">
                  Utama
                </a>
              </li>
              <li>
                <a href="/#programs" className="text-gray-400 hover:text-[#FF6B5B] transition-colors text-sm">
                  Program Ditawarkan
                </a>
              </li>
              <li>
                <a href="/#footer" className="text-gray-400 hover:text-[#FF6B5B] transition-colors text-sm">
                  Hubungi Kami
                </a>
              </li>
              <li>
                <a href="/#daftar" className="text-gray-400 hover:text-[#FF6B5B] transition-colors text-sm">
                  Daftar Sekarang!
                </a>
              </li>
            </ul>
          </div>

          {/* Programs Column */}
          <div>
            <h3 className="font-bold text-lg mb-6">Program Popular</h3>
            <ul className="space-y-3">
              <li>
                <a href="/programs/maritime-management" className="text-gray-400 hover:text-[#FF6B5B] transition-colors text-sm">
                  Maritime Management
                </a>
              </li>
              <li>
                <a href="/programs/marine-cargo-surveying" className="text-gray-400 hover:text-[#FF6B5B] transition-colors text-sm">
                  Marine Cargo Surveying
                </a>
              </li>
              <li>
                <a href="/programs/nautical-studies" className="text-gray-400 hover:text-[#FF6B5B] transition-colors text-sm">
                  Nautical
                </a>
              </li>
              <li>
                <a href="/programs/marine-engineering" className="text-gray-400 hover:text-[#FF6B5B] transition-colors text-sm">
                  Marine Engineering
                </a>
              </li>
              <li>
                <a href="/programs/occupational-safety-health" className="text-gray-400 hover:text-[#FF6B5B] transition-colors text-sm">
                  Safety & Health
                </a>
              </li>
              <li>
                <a href="/programs/integrated-management-system" className="text-gray-400 hover:text-[#FF6B5B] transition-colors text-sm">
                  Integrated Management System
                </a>
              </li>
              <li>
                <a href="/programs/logistic-supply-chain" className="text-gray-400 hover:text-[#FF6B5B] transition-colors text-sm">
                  Logistic & Supply Chain
                </a>
              </li>
              <li>
                <a href="/programs/offshore-engineering" className="text-gray-400 hover:text-[#FF6B5B] transition-colors text-sm">
                  Offshore Engineering
                </a>
              </li>
              <li>
                <a href="/programs/culinary-arts" className="text-gray-400 hover:text-[#FF6B5B] transition-colors text-sm">
                  Culinary Arts
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-bold text-lg mb-6">Hubungi Kami</h3>
            <div className="space-y-4">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=4.215116880552498,103.42635841887314" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start space-x-3 hover:text-[#FF6B5B] transition-colors group"
              >
                <MapPin className="w-5 h-5 text-[#FF6B5B] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <p className="text-gray-400 text-sm group-hover:text-[#FF6B5B]">
                  PT 4568, Jalan Bengkel 1,<br />
                  Kawasan Perindustrian Jakar II,<br />
                  24000 Kemaman, Terengganu
                </p>
              </a>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#FF6B5B] flex-shrink-0" />
                <a href="tel:+60985031261" className="text-gray-400 hover:text-[#FF6B5B] transition-colors text-sm">
                  +609 850 3161
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#FF6B5B] flex-shrink-0" />
                <a href="mailto:marketing@reti.edu.my" className="text-gray-400 hover:text-[#FF6B5B] transition-colors text-sm">
                  marketing@reti.edu.my
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 RETI. Hak cipta terpelihara.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#FF6B5B] transition-colors">
                Polisi Privasi
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6B5B] transition-colors">
                Terma & Syarat
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
