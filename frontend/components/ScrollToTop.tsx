'use client';

import { useState, useEffect } from 'react';
import { ArrowUp} from 'lucide-react';
import React from 'react';
import { useMobileMenu } from '@/contexts/MobileMenuContext';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const { isMobileMenuOpen } = useMobileMenu();

    //detect scroll position
    useEffect (() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);

    }, []);

    //scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
        {isVisible && !isMobileMenuOpen && (
            <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-[#FF6B5B] to-[#FF8B6D] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
            >
                <ArrowUp className="w-6 h-6" strokeWidth={2.5} />
            </button>
        )}
        </>
    );
}