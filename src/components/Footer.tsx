import React from 'react';
import {
  ShieldCheck,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ExternalLink,
  Star,
  ChevronRight,
} from 'lucide-react';
import { HOSPITAL_INFO, DENTAL_SERVICES } from '../data/dentalData';

interface FooterProps {
  onSelectService: (serviceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Dental Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Patient Reviews', href: '#reviews' },
    { name: 'Book Appointment', href: '#appointment' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleServiceClick = (e: React.MouseEvent, serviceId: string) => {
    e.preventDefault();
    onSelectService(serviceId);
    document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#102A43] text-white pt-16 pb-24 md:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Hospital Brand & Overview */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#16A6A1] shadow-xs">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M12 2C8 2 6 5 6 8c0 3 1.5 6 2 9 0.5 3 2 4 4 4s3.5-1 4-4c0.5-3 2-6 2-9 0-3-2-6-6-6Z" />
                  <path d="M9 12c1.5 1 4.5 1 6 0" />
                </svg>
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-white tracking-tight">
                  {HOSPITAL_INFO.name}
                </h3>
                <span className="text-xs text-[#16A6A1] font-semibold block">
                  Dr. Rohit Siddhi (BDS) • Siwan, Bihar
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Professional dental care in Siwan, Bihar. Committed to helping you
              and your family maintain optimal dental health, pain-free teeth, and
              a confident smile with modern sterilization and clinical precision.
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl text-xs">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white">4.9 ★</span>
              <span className="text-slate-400">(49 Google Reviews)</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-[#16A6A1] transition-colors inline-flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#16A6A1]" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Dental Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Dental Treatments
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {DENTAL_SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={(e) => handleServiceClick(e, s.id)}
                    className="hover:text-[#16A6A1] transition-colors text-left inline-flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#16A6A1]" />
                    <span>{s.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Timings */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact & Location
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#16A6A1] shrink-0 mt-0.5" />
                <span>{HOSPITAL_INFO.address.full}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#16A6A1] shrink-0" />
                <a
                  href={`tel:${HOSPITAL_INFO.phoneClean}`}
                  className="hover:text-[#16A6A1] font-semibold text-white transition-colors"
                >
                  {HOSPITAL_INFO.phone}
                </a>
              </p>
              <p className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#16A6A1] shrink-0 mt-0.5" />
                <span>
                  {HOSPITAL_INFO.timings.days}
                  <br />
                  {HOSPITAL_INFO.timings.hours}
                </span>
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={HOSPITAL_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#16A6A1] hover:bg-[#0E7C79] text-white text-xs font-bold px-3.5 py-2 rounded-lg transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href={HOSPITAL_INFO.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3.5 py-2 rounded-lg transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#16A6A1]" />
                <span>Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 text-center sm:text-left">
          <p>© 2026 Siddhi Dental Hospital. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <span>Hospital Road, Naya Bazar, Siwan, Bihar 841226</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
