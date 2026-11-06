import React, { useState, useEffect } from 'react';
import {
  Phone,
  Clock,
  MapPin,
  Menu,
  X,
  Calendar,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/dentalData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Dental Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Patient Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top emergency / information bar */}
      <div className="bg-[#102A43] text-white/90 text-xs sm:text-sm py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-[#16A6A1]" />
              <span>Hospital Rd, Infront of Dr. B. L. Das, Naya Bazar, Siwan</span>
            </span>
            <span className="flex items-center space-x-2 text-white/80">
              <Clock className="w-3.5 h-3.5 text-[#16A6A1]" />
              <span>Open Daily: 10:00 AM – 8:00 PM</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${HOSPITAL_INFO.phoneClean}`}
              className="flex items-center space-x-1.5 font-medium hover:text-[#16A6A1] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#16A6A1]" />
              <span>Call: {HOSPITAL_INFO.phone}</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={HOSPITAL_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-[#16A6A1] hover:text-white font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white py-4 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#102A43] to-[#243B53] flex items-center justify-center text-white shadow-sm group-hover:shadow transition-all">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-[#16A6A1]"
              >
                <path d="M12 2C8 2 6 5 6 8c0 3 1.5 6 2 9 0.5 3 2 4 4 4s3.5-1 4-4c0.5-3 2-6 2-9 0-3-2-6-6-6Z" />
                <path d="M9 12c1.5 1 4.5 1 6 0" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-[#102A43] tracking-tight leading-tight">
                SIDDHI DENTAL HOSPITAL
              </span>
              <span className="text-xs font-semibold text-[#16A6A1] flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 inline" />
                Dr. Rohit Siddhi • Siwan, Bihar
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-semibold text-[#243B53] hover:text-[#16A6A1] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#16A6A1] after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Header Action Button (Desktop) */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="#appointment"
              onClick={(e) => handleLinkClick(e, '#appointment')}
              className="inline-flex items-center gap-2 bg-[#16A6A1] hover:bg-[#0E7C79] text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href="#appointment"
              onClick={(e) => handleLinkClick(e, '#appointment')}
              className="bg-[#16A6A1] text-white p-2 sm:px-3 sm:py-2 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Book</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-[#102A43] hover:bg-[#F5F9FC] transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-2 rounded-md text-sm font-semibold text-[#243B53] hover:bg-[#F5F9FC] hover:text-[#16A6A1] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                <a
                  href="#appointment"
                  onClick={(e) => handleLinkClick(e, '#appointment')}
                  className="w-full flex items-center justify-center gap-2 bg-[#16A6A1] text-white py-2.5 px-4 rounded-lg text-sm font-bold shadow-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </a>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${HOSPITAL_INFO.phoneClean}`}
                    className="flex items-center justify-center gap-1.5 border border-[#102A43] text-[#102A43] py-2 px-3 rounded-lg text-xs font-bold"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#16A6A1]" />
                    <span>Call Clinic</span>
                  </a>
                  <a
                    href={HOSPITAL_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-[#E6F7F5] text-[#0E7C79] py-2 px-3 rounded-lg text-xs font-bold"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#16A6A1]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
