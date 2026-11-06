import React from 'react';
import { Calendar, MessageCircle, Sparkles } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/dentalData';

export const CtaBanner: React.FC = () => {
  const scrollToAppointment = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-r from-[#102A43] via-[#1B365D] to-[#102A43] text-white py-14 sm:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#16A6A1_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-[#16A6A1] bg-white/10 px-3.5 py-1.5 rounded-full mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#16A6A1]" />
          Take the First Step
        </span>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Your Smile Deserves the Best Care.
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
          Schedule your comprehensive dental consultation with Dr. Rohit Siddhi
          today. Experience gentle, modern, and trustworthy oral care in Siwan.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#appointment"
            onClick={scrollToAppointment}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#16A6A1] hover:bg-[#0E7C79] text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </a>

          <a
            href={HOSPITAL_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-3.5 rounded-xl font-bold text-sm transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#16A6A1]" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};
