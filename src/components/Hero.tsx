import React from 'react';
import {
  Calendar,
  MessageCircle,
  Star,
  ShieldCheck,
  Award,
  Sparkles,
  MapPin,
  Clock,
} from 'lucide-react';
import { HOSPITAL_INFO, DOCTOR_PROFILE } from '../data/dentalData';

export const Hero: React.FC = () => {
  const scrollToAppointment = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-gradient-to-b from-[#F5F9FC] via-white to-white pt-8 pb-16 lg:py-20 overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#16A6A1]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-24 w-80 h-80 rounded-full bg-[#102A43]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Value Proposition, Verified Stats & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            {/* Trust Pill / Location Badge */}
            <div className="inline-flex items-center gap-2 self-start bg-[#E6F7F5] border border-[#16A6A1]/20 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-[#0E7C79]">
              <span className="w-2 h-2 rounded-full bg-[#16A6A1] animate-pulse" />
              <span>Trusted Dental Hospital in Siwan, Bihar</span>
              <span className="text-[#16A6A1]/40">•</span>
              <span className="hidden sm:inline">Hospital Road</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-[#102A43] tracking-tight leading-[1.15]">
              Your Smile Deserves{' '}
              <span className="text-[#16A6A1] underline decoration-[#16A6A1]/30 underline-offset-4">
                Expert Care.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#627D98] max-w-2xl leading-relaxed">
              Experience comfortable, reliable and professional dental care with a
              focus on healthy, confident smiles. Led by Dr. Rohit Siddhi with
              modern equipment and gentle clinical procedures in Siwan.
            </p>

            {/* Verified Google Rating & Social Proof Banner */}
            <div className="flex flex-wrap items-center gap-4 py-2 border-y border-slate-100">
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-xs">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-sm font-extrabold text-[#102A43]">
                  {HOSPITAL_INFO.ratings.average} ★
                </span>
              </div>
              <div className="text-xs sm:text-sm text-[#243B53]">
                <strong className="font-bold text-[#102A43]">
                  {HOSPITAL_INFO.ratings.count} Verified Google Reviews
                </strong>
                <span className="block text-xs text-[#627D98]">
                  Consistent high patient satisfaction in Siwan
                </span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#appointment"
                onClick={scrollToAppointment}
                className="inline-flex items-center justify-center gap-2 bg-[#16A6A1] hover:bg-[#0E7C79] text-white px-7 py-3.5 rounded-xl font-bold text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-center"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </a>

              <a
                href={HOSPITAL_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#102A43] hover:bg-[#243B53] text-white px-6 py-3.5 rounded-xl font-bold text-base shadow-sm hover:shadow transition-all text-center"
              >
                <MessageCircle className="w-5 h-5 text-[#16A6A1]" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Small Verified Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
              <div className="flex items-center gap-2 text-xs text-[#243B53]">
                <ShieldCheck className="w-4 h-4 text-[#16A6A1] shrink-0" />
                <span>Hygienic Sterilized Clinic</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#243B53]">
                <Award className="w-4 h-4 text-[#16A6A1] shrink-0" />
                <span>BDS Dental Surgeon</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#243B53]">
                <Sparkles className="w-4 h-4 text-[#16A6A1] shrink-0" />
                <span>Gentle & Pain-Free Care</span>
              </div>
            </div>
          </div>

          {/* Right Column: Actual Doctor & Hospital Photography with Trust Overlay Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src={DOCTOR_PROFILE.photoUrl}
                  alt="Dr. Rohit Siddhi standing with modern dental unit at Siddhi Dental Hospital"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-top"
                  loading="eager"
                />

                {/* Gradient overlay at bottom for readable text badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/90 via-transparent to-transparent pointer-events-none" />

                {/* Bottom caption card over photo */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-slate-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-[#102A43] text-sm sm:text-base">
                        Dr. Rohit Siddhi (BDS, AAI)
                      </h4>
                      <p className="text-xs text-[#627D98]">
                        Lead Dental Surgeon • BDS (2012) • AAI Implantology (2014)
                      </p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[#E6F7F5] text-[#0E7C79]">
                      Verified Clinic
                    </span>
                  </div>

                  <div className="mt-2.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-[#243B53]">
                    <span className="flex items-center gap-1 text-[#627D98]">
                      <MapPin className="w-3.5 h-3.5 text-[#16A6A1]" />
                      Hospital Road, Siwan
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-[#16A6A1]">
                      <Clock className="w-3.5 h-3.5" />
                      Open Today
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating verified experience badge */}
              <div className="absolute -top-3 -right-3 sm:-right-4 bg-gradient-to-br from-[#102A43] to-[#243B53] text-white p-3 sm:p-3.5 rounded-2xl shadow-xl border border-white/20 text-center">
                <span className="block text-xl sm:text-2xl font-extrabold text-[#16A6A1] leading-none">
                  12+
                </span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-200">
                  Years of Care
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
