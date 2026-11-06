import React, { useState } from 'react';
import {
  Stethoscope,
  Sparkles,
  ShieldAlert,
  CheckCircle2,
  Activity,
  Smile,
  Award,
  HeartHandshake,
  ArrowRight,
  Calendar,
} from 'lucide-react';
import { DentalService } from '../types/dental';
import { DENTAL_SERVICES } from '../data/dentalData';
import { ServiceModal } from './ServiceModal';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
}) => {
  const [activeModalService, setActiveModalService] = useState<DentalService | null>(
    null
  );

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-[#16A6A1]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#16A6A1]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-[#16A6A1]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-[#16A6A1]" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#16A6A1]" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-[#16A6A1]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#16A6A1]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#16A6A1]" />;
      default:
        return <Stethoscope className="w-6 h-6 text-[#16A6A1]" />;
    }
  };

  const handleQuickBook = (serviceId: string) => {
    onSelectService(serviceId);
    document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#F5F9FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs uppercase tracking-wider font-bold text-[#16A6A1] bg-[#E6F7F5] px-3.5 py-1 rounded-full mb-3">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
            Our Dental Services
          </h2>
          <p className="mt-3 text-base text-[#627D98]">
            Comprehensive, patient-focused dental care for healthier teeth and
            confident smiles in Siwan.
          </p>
        </div>

        {/* 8 Services Responsive Grid (4 cols desktop, 2 cols tablet, 1 col mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DENTAL_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/70 hover:border-[#16A6A1]/40 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Category Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E6F7F5] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-[#627D98] bg-[#F5F9FC] px-2.5 py-1 rounded-md">
                    {service.category}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-[#102A43] group-hover:text-[#16A6A1] transition-colors leading-snug">
                  {service.name}
                </h3>

                {/* Short Description */}
                <p className="mt-2 text-xs sm:text-sm text-[#627D98] leading-relaxed line-clamp-3">
                  {service.shortDesc}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModalService(service)}
                  className="text-xs font-bold text-[#102A43] hover:text-[#16A6A1] transition-colors inline-flex items-center gap-1 py-1"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => handleQuickBook(service.id)}
                  className="bg-[#E6F7F5] hover:bg-[#16A6A1] text-[#0E7C79] hover:text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all inline-flex items-center gap-1"
                >
                  <Calendar className="w-3 h-3" />
                  <span>Book</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal View for detailed service examination */}
      <ServiceModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onSelectForBooking={onSelectService}
      />
    </section>
  );
};
