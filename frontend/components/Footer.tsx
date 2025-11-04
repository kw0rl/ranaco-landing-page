'use client';

import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

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
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/ranacoedu" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#000000] rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.instagram.com/officialranacoedu?igsh=MWR2Ymt0anR1bmN3aw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#E4405F] rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@officialranacoedu?_r=1&_t=ZS-913iFd6Lh7B" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#000000] rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
              <a href="https://www.youtube.com/@officialranacoedu" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#FF0000] rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <Youtube className="w-5 h-5" />
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
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#FF6B5B] flex-shrink-0 mt-1" />
                <p className="text-gray-400 text-sm">
                  PT 4568, Jalan Bengkel 1,<br />
                  Kawasan Perindustrian Jakar II,<br />
                  24000 Kemaman, Terengganu
                </p>
              </div>
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
