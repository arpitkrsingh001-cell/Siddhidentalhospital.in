import React from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Navigation,
  Building2,
  ExternalLink,
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/dentalData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#F5F9FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs uppercase tracking-wider font-bold text-[#16A6A1] bg-[#E6F7F5] px-3.5 py-1 rounded-full mb-3">
            Find Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
            Visit Siddhi Dental Hospital
          </h2>
          <p className="mt-3 text-base text-[#627D98]">
            We are conveniently located on Hospital Road, in front of Dr. B. L.
            Das in Naya Bazar, Siwan.
          </p>
        </div>

        {/* Contact Info Cards & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Cards & Direct Action Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              {/* Card 1: Address */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#E6F7F5] flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 text-[#16A6A1]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#102A43] text-base mb-1">
                    {HOSPITAL_INFO.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#627D98] leading-relaxed">
                    {HOSPITAL_INFO.address.full}
                  </p>
                </div>
              </div>

              {/* Card 2: Phone */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#E6F7F5] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#16A6A1]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#102A43] text-base mb-1">
                    Phone Consultation
                  </h3>
                  <a
                    href={`tel:${HOSPITAL_INFO.phoneClean}`}
                    className="text-base font-bold text-[#16A6A1] hover:underline block"
                  >
                    {HOSPITAL_INFO.phone}
                  </a>
                  <span className="text-xs text-[#627D98]">
                    Direct line for appointments & emergencies
                  </span>
                </div>
              </div>

              {/* Card 3: Hours */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#E6F7F5] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-[#16A6A1]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#102A43] text-base mb-1">
                    Working Hours
                  </h3>
                  <p className="text-xs sm:text-sm text-[#243B53] font-semibold">
                    {HOSPITAL_INFO.timings.days}: {HOSPITAL_INFO.timings.hours}
                  </p>
                  <span className="text-xs text-[#16A6A1] font-medium block mt-0.5">
                    {HOSPITAL_INFO.timings.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <a
                href={`tel:${HOSPITAL_INFO.phoneClean}`}
                className="inline-flex items-center justify-center gap-2 bg-[#102A43] hover:bg-[#243B53] text-white py-3 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-xs transition-all text-center"
              >
                <Phone className="w-4 h-4 text-[#16A6A1]" />
                <span>Call Now</span>
              </a>

              <a
                href={HOSPITAL_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#16A6A1] hover:bg-[#0E7C79] text-white py-3 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-xs transition-all text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={HOSPITAL_INFO.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-[#102A43] py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all text-center"
              >
                <Navigation className="w-4 h-4 text-[#16A6A1]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-7">
            <div className="h-full min-h-[380px] sm:min-h-[440px] rounded-3xl overflow-hidden shadow-md border border-slate-200/80 bg-slate-100 relative">
              <iframe
                title="Siddhi Dental Hospital Location Map"
                src={HOSPITAL_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-lg shadow-sm text-xs font-semibold text-[#102A43] border border-slate-100 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#16A6A1]" />
                <span>Hospital Road, Naya Bazar, Siwan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
