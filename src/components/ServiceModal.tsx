import React, { useEffect } from 'react';
import {
  X,
  Clock,
  CheckCircle2,
  Calendar,
  MessageCircle,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';
import { DentalService } from '../types/dental';
import { HOSPITAL_INFO } from '../data/dentalData';

interface ServiceModalProps {
  service: DentalService | null;
  onClose: () => void;
  onSelectForBooking: (serviceId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectForBooking,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const handleBookClick = () => {
    onSelectForBooking(service.id);
    onClose();
    document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappDirectUrl = `https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=Hello%20Siddhi%20Dental%20Hospital,%20I%20am%20interested%20in%20${encodeURIComponent(service.name)}.%20Please%20share%20details.`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#102A43]/70 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-[#102A43] hover:bg-slate-100 transition-colors"
          aria-label="Close service details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="inline-block text-xs uppercase tracking-wider font-bold text-[#16A6A1] bg-[#E6F7F5] px-3 py-1 rounded-full mb-2">
            {service.category}
          </span>
          <h3
            id="modal-service-title"
            className="text-2xl sm:text-3xl font-extrabold text-[#102A43]"
          >
            {service.name}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-[#627D98] leading-relaxed">
            {service.overview}
          </p>
        </div>

        {/* Key Info Strip */}
        <div className="flex items-center gap-3 bg-[#F5F9FC] p-3.5 rounded-xl border border-slate-200/60 mb-6 text-xs sm:text-sm text-[#243B53]">
          <Clock className="w-4 h-4 text-[#16A6A1] shrink-0" />
          <span className="font-semibold">Typical Session:</span>
          <span>{service.estimatedDuration}</span>
        </div>

        {/* Who is it for */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-3 flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-[#16A6A1]" />
            When Do You Need This?
          </h4>
          <ul className="space-y-2">
            {service.whoIsItFor.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs sm:text-sm text-[#243B53]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#16A6A1] mt-1.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-3 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#16A6A1]" />
            Procedure Benefits
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.keyBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-[#F5F9FC] p-2.5 rounded-lg text-xs sm:text-sm text-[#243B53] border border-slate-100"
              >
                <CheckCircle2 className="w-4 h-4 text-[#16A6A1] shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-slate-100">
          <button
            onClick={handleBookClick}
            type="button"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#16A6A1] hover:bg-[#0E7C79] text-white py-3 px-5 rounded-xl font-bold text-sm shadow-sm transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment for {service.name}</span>
          </button>
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#102A43] hover:bg-[#243B53] text-white py-3 px-5 rounded-xl font-bold text-sm transition-all text-center"
          >
            <MessageCircle className="w-4 h-4 text-[#16A6A1]" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>
      </div>
    </div>
  );
};
