import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Clock,
  Shield,
  HeartPulse,
  ZoomIn,
  FileCheck,
} from 'lucide-react';
import { DOCTOR_PROFILE, HOSPITAL_INFO } from '../data/dentalData';
import { LightboxModal } from './LightboxModal';

export const DoctorSection: React.FC = () => {
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  const scrollToAppointment = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  const certificatePhoto = {
    id: 'doc-cert',
    title: 'Verified BDS Degree & AAI Implantology Certification',
    category: 'Doctor Credentials',
    imageUrl: '/images/clinic/certificates-bds-implantology.jpg',
    caption:
      'Official credentials displayed at clinic: BDS from Seema Dental College & Hospital (H.N.B. Garhwal Central University) and Academy of Advanced Implantology (AAI) Certificate in Advanced Implantology, Osteointegration & Bone Regeneration (2014).',
    isActualPhoto: true,
  };

  return (
    <section id="about" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs uppercase tracking-wider font-bold text-[#16A6A1] bg-[#E6F7F5] px-3.5 py-1 rounded-full mb-3">
            About the Lead Doctor
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
            Meet Dr. Rohit Siddhi
          </h2>
          <p className="mt-3 text-base text-[#627D98]">
            Dedicated to gentle, transparent, and patient-centered dental care for
            families across Siwan and neighboring regions.
          </p>
        </div>

        {/* Two-Column Doctor Profile Card */}
        <div className="bg-[#F5F9FC] rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/60 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Doctor Photo & Verified Certificate Preview */}
            <div className="lg:col-span-5 flex flex-col items-center space-y-4">
              {/* Doctor Main Photo */}
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-white">
                <img
                  src={DOCTOR_PROFILE.photoUrl}
                  alt="Dr. Rohit Siddhi Dental Surgeon in Siwan"
                  className="w-full h-[360px] sm:h-[400px] object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#102A43]/90 via-[#102A43]/40 to-transparent p-4 text-white text-center">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#16A6A1]">
                    Verified Dental Surgeon
                  </span>
                  <p className="font-bold text-sm sm:text-base">
                    Dr. Rohit Siddhi (BDS, AAI)
                  </p>
                </div>
              </div>

              {/* Verified Certificates On Display (Clickable for Inspection) */}
              <div
                onClick={() => setShowCertificateModal(true)}
                className="w-full max-w-sm bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs hover:shadow-md transition-all cursor-pointer group relative overflow-hidden"
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border border-slate-200">
                    <img
                      src="/images/clinic/certificates-bds-implantology.jpg"
                      alt="Dr. Rohit Kumar verified certificates"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-[#102A43]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1 text-[11px] font-bold text-[#0E7C79]">
                      <FileCheck className="w-3.5 h-3.5 text-[#16A6A1]" />
                      <span>Verified Qualifications</span>
                    </div>
                    <p className="text-xs font-bold text-[#102A43] truncate mt-0.5">
                      BDS (2012) & AAI Implantology (2014)
                    </p>
                    <span className="text-[10px] text-[#627D98] block">
                      Click to view official framed certificates
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Stat Pill */}
              <div className="flex items-center justify-center gap-6 text-xs text-[#243B53] font-medium bg-white px-5 py-2.5 rounded-xl border border-slate-200 w-full max-w-sm">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#16A6A1]" />
                  <span>12+ Years Exp.</span>
                </div>
                <div className="w-px h-4 bg-slate-200" />
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-[#16A6A1]" />
                  <span>BDS (2012)</span>
                </div>
                <div className="w-px h-4 bg-slate-200" />
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#16A6A1]" />
                  <span>AAI (2014)</span>
                </div>
              </div>
            </div>

            {/* Right Column: Verified Qualifications, Experience, Specializations */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#16A6A1]">
                  Dental Surgeon & Hospital Director
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#102A43] mt-1">
                  Dr. Rohit Siddhi (Dr. Rohit Kumar)
                </h3>
                <div className="mt-2 space-y-1">
                  <p className="text-sm font-semibold text-[#243B53] flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#16A6A1] shrink-0" />
                    <span>BDS (Bachelor of Dental Surgery) • Seema Dental College & Hospital (2012)</span>
                  </p>
                  <p className="text-sm font-semibold text-[#243B53] flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#16A6A1] shrink-0" />
                    <span>AAI Certified – Advanced Implantology & Bone Regeneration (2014)</span>
                  </p>
                </div>
              </div>

              {/* Verified Biography */}
              <p className="text-sm sm:text-base text-[#243B53] leading-relaxed">
                {DOCTOR_PROFILE.bio}
              </p>

              {/* Specializations Grid */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-3 flex items-center gap-1.5">
                  <HeartPulse className="w-4 h-4 text-[#16A6A1]" />
                  Clinical Specializations & Services
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {DOCTOR_PROFILE.specializations.map((spec) => (
                    <div
                      key={spec}
                      className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#243B53] bg-white p-2.5 rounded-lg border border-slate-200/70"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#16A6A1] shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="#appointment"
                  onClick={scrollToAppointment}
                  className="inline-flex items-center justify-center gap-2 bg-[#16A6A1] hover:bg-[#0E7C79] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-sm transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation with Dr. Rohit</span>
                </a>
                <a
                  href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=Hello%20Dr.%20Rohit,%20I%20would%20like%20to%20consult%20regarding%20my%20dental%20health.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-[#102A43] px-5 py-3 rounded-xl font-bold text-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#16A6A1]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      {showCertificateModal && (
        <LightboxModal
          photos={[certificatePhoto]}
          currentIndex={0}
          onClose={() => setShowCertificateModal(false)}
          onNavigate={() => {}}
        />
      )}
    </section>
  );
};
