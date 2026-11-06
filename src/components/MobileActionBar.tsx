import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/dentalData';

export const MobileActionBar: React.FC = () => {
  const handleBookClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappAppointmentUrl = `https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=Hello%20Siddhi%20Dental%20Hospital,%20I%20would%20like%20to%20book%20a%20dental%20appointment.`;

  return (
    <>
      {/* Floating WhatsApp Button for Desktop/Tablet */}
      <aside aria-label="Floating WhatsApp Contact">
        <a
          href={whatsappAppointmentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-4 py-3 rounded-full shadow-2xl hover:shadow-green-500/30 transition-all transform hover:-translate-y-1 group"
          aria-label="Chat with Dr. Rohit Siddhi Dental Hospital on WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6 fill-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full" />
          </div>
          <span className="text-sm font-bold tracking-wide pr-1">Chat on WhatsApp</span>
        </a>
      </aside>

      {/* Mobile Sticky Bottom Action Bar (visible on screens < 768px) */}
      <nav
        aria-label="Mobile quick actions"
        className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-2 py-2 safe-bottom"
      >
        <div className="grid grid-cols-3 gap-2">
          {/* 1. Call */}
          <a
            href={`tel:${HOSPITAL_INFO.phoneClean}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl text-[#102A43] hover:bg-slate-50 transition-colors"
            aria-label="Call Siddhi Dental Hospital"
          >
            <div className="w-8 h-8 rounded-full bg-[#F5F9FC] flex items-center justify-center text-[#102A43] mb-1">
              <Phone className="w-4 h-4 text-[#16A6A1]" />
            </div>
            <span className="text-[11px] font-bold">Call Now</span>
          </a>

          {/* 2. WhatsApp */}
          <a
            href={whatsappAppointmentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl text-[#0E7C79] bg-[#E6F7F5] transition-colors"
            aria-label="Message on WhatsApp"
          >
            <div className="w-8 h-8 rounded-full bg-[#16A6A1] flex items-center justify-center text-white mb-1 shadow-xs">
              <MessageCircle className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-extrabold text-[#0E7C79]">WhatsApp</span>
          </a>

          {/* 3. Appointment */}
          <a
            href="#appointment"
            onClick={handleBookClick}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl text-[#102A43] hover:bg-slate-50 transition-colors"
            aria-label="Book Dental Appointment"
          >
            <div className="w-8 h-8 rounded-full bg-[#F5F9FC] flex items-center justify-center text-[#102A43] mb-1">
              <Calendar className="w-4 h-4 text-[#16A6A1]" />
            </div>
            <span className="text-[11px] font-bold">Book</span>
          </a>
        </div>
      </nav>
    </>
  );
};
