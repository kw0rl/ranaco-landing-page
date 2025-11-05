'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { useMobileMenu } from '@/contexts/MobileMenuContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu();
  const [isProgramsDropdownOpen, setIsProgramsDropdownOpen] = useState(false);
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#utama', label: 'UTAMA' },
    { href: '/#kenapa', label: 'KENAPA KAMI' },
    { href: '/#testimoni', label: 'TESTIMONI' },
  ];

  const programs = [
    { title: 'Maritime Management', slug: 'maritime-management' },
    { title: 'Marine Cargo Surveying', slug: 'marine-cargo-surveying' },
    { title: 'Nautical Studies', slug: 'nautical-studies' },
    { title: 'Marine Engineering', slug: 'marine-engineering' },
    { title: 'Occupational Safety & Health', slug: 'occupational-safety-health' },
    { title: 'Integrated Management System', slug: 'integrated-management-system' },
    { title: 'Logistic & Supply Chain', slug: 'logistic-supply-chain' },
    { title: 'Offshore Engineering', slug: 'offshore-engineering' },
    { title: 'Culinary Arts', slug: 'culinary-arts' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#1E4A7A] text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Left Side - Contact Info */}
          <div className="flex items-center gap-3 md:gap-6 flex-wrap">
            <a href="tel:+60985031261" className="flex items-center gap-2 hover:text-[#FF6B5B] transition-colors">
              <Phone size={16} />
              <span className="hidden sm:inline">+609 850 3161</span>
              <span className="sm:hidden">Call</span>
            </a>
            <a href="mailto:marketing@reti.edu.my" className="flex items-center gap-2 hover:text-[#FF6B5B] transition-colors">
              <Mail size={16} />
              <span className="hidden md:inline">marketing@reti.edu.my</span>
              <span className="md:hidden">Email</span>
            </a>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=4.215116880552498,103.42635841887314" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 hover:text-[#FF6B5B] transition-colors"
            >
              <MapPin size={16} />
              <span>PT 4568, Jalan Bengkel 1, Kawasan Perindustrian Jakar II, 24000 Kemaman, Terengganu</span>
            </a>
          </div>
          
          {/* Right Side - Social Media */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Social Media Icons */}
            <a href="https://www.facebook.com/share/1A3jBj7iYY/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#1877F2] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://x.com/ranacoedu" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="hover:text-[#000000] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.instagram.com/officialranacoedu?igsh=MWR2Ymt0anR1bmN3aw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#E4405F] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@officialranacoedu?_r=1&_t=ZS-913iFd6Lh7B" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-[#000000] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            </a>
            <a href="https://www.youtube.com/@officialranacoedu" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-[#FF0000] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="w-48 h-12 relative">
                <img 
                  src="/LOGO-RETI-OFFICIAL.jpeg" 
                  alt="RANACO Education & Training Institute" 
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#1A2332] hover:text-[#FF6B5B] font-medium text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              
              {/* Program Ditawarkan Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsProgramsDropdownOpen(true)}
                onMouseLeave={() => setIsProgramsDropdownOpen(false)}
              >
                <button
                  className="flex items-center space-x-1 text-[#1A2332] hover:text-[#FF6B5B] font-medium text-sm transition-colors duration-200"
                >
                  <span>PROGRAM DITAWARKAN</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProgramsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Invisible bridge to prevent gap */}
                {isProgramsDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 h-2" />
                )}
                
                {/* Dropdown Menu */}
                {isProgramsDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 animate-fadeIn">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Pilih Program</p>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {programs.map((program) => (
                          <a
                            key={program.slug}
                            href={`/programs/${program.slug}`}
                            className="block px-4 py-3 text-sm text-[#1A2332] hover:bg-[#FF6B5B]/5 hover:text-[#FF6B5B] transition-colors duration-150"
                          >
                            {program.title}
                          </a>
                        ))}
                      </div>
                      <div className="px-4 py-2 border-t border-gray-100 mt-2">
                        <a
                          href="/#programs"
                          className="text-xs font-semibold text-[#FF6B5B] hover:text-[#ff5544] transition-colors"
                        >
                          Lihat Semua Program →
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <a
                href="/#daftar"
                className="bg-[#FF6B5B] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#ff5544] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                DAFTAR SEKARANG
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-[#1A2332] p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu - Slide from Right */}
        <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-end p-6 border-b border-gray-200">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#1A2332] p-2"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-[#1A2332] hover:text-[#FF6B5B] hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              
              {/* Mobile Program Ditawarkan Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileProgramsOpen(!isMobileProgramsOpen)}
                  className="w-full flex items-center justify-between text-[#1A2332] hover:text-[#FF6B5B] hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  <span>PROGRAM DITAWARKAN</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileProgramsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMobileProgramsOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    {programs.map((program) => (
                      <a
                        key={program.slug}
                        href={`/programs/${program.slug}`}
                        className="block text-sm text-[#1A2332] hover:text-[#FF6B5B] hover:bg-gray-50 py-2 px-4 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {program.title}
                      </a>
                    ))}
                    <a
                      href="/#programs"
                      className="block text-sm font-semibold text-[#FF6B5B] hover:text-[#ff5544] py-2 px-4 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Lihat Semua →
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Button */}
            <div className="p-6 border-t border-gray-200">
              <a
                href="/#daftar"
                className="block text-center bg-[#FF6B5B] text-white px-6 py-4 rounded-full font-semibold hover:bg-[#ff5544] transition-colors shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                DAFTAR SEKARANG
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
