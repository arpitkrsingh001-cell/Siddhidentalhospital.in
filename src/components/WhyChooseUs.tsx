import React from 'react';
import {
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Cpu,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Search,
  FileText,
  UserCheck,
} from 'lucide-react';
import { WHY_CHOOSE_US, PATIENT_EXPERIENCE_STEPS } from '../data/dentalData';

export const WhyChooseUs: React.FC = () => {
  const getFeatureIcon = (index: number) => {
    switch (index) {
      case 0:
        return <ShieldCheck className="w-6 h-6 text-[#16A6A1]" />;
      case 1:
        return <HeartHandshake className="w-6 h-6 text-[#16A6A1]" />;
      case 2:
        return <Sparkles className="w-6 h-6 text-[#16A6A1]" />;
      case 3:
        return <Cpu className="w-6 h-6 text-[#16A6A1]" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#16A6A1]" />;
    }
  };

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MessageSquare className="w-5 h-5 text-white" />;
      case 1:
        return <Search className="w-5 h-5 text-white" />;
      case 2:
        return <FileText className="w-5 h-5 text-white" />;
      case 3:
        return <UserCheck className="w-5 h-5 text-white" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs uppercase tracking-wider font-bold text-[#16A6A1] bg-[#E6F7F5] px-3.5 py-1 rounded-full mb-3">
            Our Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
            Why Patients Choose Siddhi Dental Hospital
          </h2>
          <p className="mt-3 text-base text-[#627D98]">
            We are committed to rendering top-notch dental care focused on your
            long-term comfort, hygiene, and confident smile.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.number}
              className="bg-[#F5F9FC] rounded-2xl p-6 border border-slate-200/60 hover:border-[#16A6A1]/40 shadow-xs hover:shadow-md transition-all group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-white shadow-xs flex items-center justify-center group-hover:bg-[#16A6A1] group-hover:text-white transition-all">
                  {getFeatureIcon(index)}
                </div>
                <span className="text-2xl font-black text-[#102A43]/15 group-hover:text-[#16A6A1]/30 transition-colors">
                  {item.number}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#102A43] mb-2 group-hover:text-[#16A6A1] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-[#627D98] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* 4-Step Patient Experience Journey */}
        <div className="bg-[#102A43] text-white rounded-3xl p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs uppercase tracking-wider font-bold text-[#16A6A1] bg-white/10 px-3.5 py-1 rounded-full mb-3">
              How It Works
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Your Patient Experience
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              A structured, stress-free clinical workflow centered on clarity,
              comfort, and honest diagnosis.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {PATIENT_EXPERIENCE_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#16A6A1] flex items-center justify-center shadow-xs">
                      {getStepIcon(idx)}
                    </div>
                    <span className="text-xs font-bold text-[#16A6A1] bg-[#16A6A1]/20 px-2 py-0.5 rounded">
                      Step {step.step}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#appointment"
              className="inline-flex items-center gap-2 bg-[#16A6A1] hover:bg-[#0E7C79] text-white px-7 py-3 rounded-xl font-bold text-sm shadow-md transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Experience Gentle Care – Book Visit</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
