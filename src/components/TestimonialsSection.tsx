import React from 'react';
import {
  Star,
  ExternalLink,
  Quote,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';
import { TESTIMONIALS, HOSPITAL_INFO } from '../data/dentalData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-[#F5F9FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs uppercase tracking-wider font-bold text-[#16A6A1] bg-[#E6F7F5] px-3.5 py-1 rounded-full mb-3">
            Patient Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
            What Our Patients Say
          </h2>
          <p className="mt-3 text-base text-[#627D98]">
            Genuine testimonials and feedback from patients treated at Siddhi
            Dental Hospital in Siwan.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="mt-8 inline-flex items-center gap-4 bg-white px-5 py-3 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center gap-1.5 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <div className="text-left border-l border-slate-200 pl-4">
              <span className="block text-base font-extrabold text-[#102A43]">
                {HOSPITAL_INFO.ratings.average} out of 5
              </span>
              <span className="text-xs text-[#627D98] font-medium">
                Based on {HOSPITAL_INFO.ratings.count} verified Google Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* Top Row: Stars + Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-[#16A6A1]/20 group-hover:text-[#16A6A1]/40 transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-[#243B53] leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Patient Attribution & Verification Tag */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-[#102A43] text-sm flex items-center gap-1.5">
                    {review.patientName}
                    <CheckCircle className="w-3.5 h-3.5 text-[#16A6A1]" />
                  </h4>
                  <span className="text-xs text-[#627D98]">
                    {review.patientTag}
                  </span>
                </div>

                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0E7C79] bg-[#E6F7F5] px-2.5 py-1 rounded-md">
                  <ShieldCheck className="w-3 h-3 text-[#16A6A1]" />
                  {review.verifiedOn}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Google Reviews Action Button */}
        <div className="text-center">
          <a
            href={HOSPITAL_INFO.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#102A43] border border-slate-200 px-6 py-3 rounded-xl font-bold text-sm shadow-xs hover:shadow transition-all"
          >
            <span>Read More Google Reviews</span>
            <ExternalLink className="w-4 h-4 text-[#16A6A1]" />
          </a>
        </div>
      </div>
    </section>
  );
};
