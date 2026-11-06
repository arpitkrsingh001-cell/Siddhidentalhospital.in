import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  Phone,
  User,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  MessageCircle,
  ShieldAlert,
} from 'lucide-react';
import { BookingFormData } from '../types/dental';
import {
  HOSPITAL_INFO,
  DENTAL_SERVICES,
  TIME_SLOTS,
} from '../data/dentalData';
import {
  validateIndianPhone,
  formatWhatsAppBookingMessage,
  buildWhatsAppUrl,
  getMinBookingDate,
  cleanPhoneNumber,
} from '../utils/appointment';

interface AppointmentSectionProps {
  selectedServiceId: string;
  onServiceChange: (serviceId: string) => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  selectedServiceId,
  onServiceChange,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    serviceId: selectedServiceId || 'general-dentistry',
    preferredDate: '',
    preferredTime: TIME_SLOTS[0],
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<{
    whatsappUrl: string;
    formattedMessage: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  // Sync external service selection with form state
  useEffect(() => {
    if (selectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: selectedServiceId }));
    }
  }, [selectedServiceId]);

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter patient name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters long.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter mobile number.';
    } else if (!validateIndianPhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number (e.g. 9546717655).';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select your preferred appointment date.';
    }

    if (!formData.serviceId) {
      newErrors.serviceId = 'Please select a dental service.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const serviceObj = DENTAL_SERVICES.find((s) => s.id === formData.serviceId);
    const serviceName = serviceObj ? serviceObj.name : 'General Dental Consultation';

    const formattedMessage = formatWhatsAppBookingMessage(formData, serviceName);
    const whatsappUrl = buildWhatsAppUrl(
      HOSPITAL_INFO.whatsappNumber,
      formattedMessage
    );

    setSubmissionSuccess({
      whatsappUrl,
      formattedMessage,
    });

    // Attempt to open WhatsApp in new window/tab
    try {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.warn('Popup blocked or could not open window directly', err);
    }

    setIsSubmitting(false);
  };

  const handleCopyMessage = () => {
    if (!submissionSuccess) return;
    navigator.clipboard.writeText(submissionSuccess.formattedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="appointment" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context, Working Hours & Phone Help */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block text-xs uppercase tracking-wider font-bold text-[#16A6A1] bg-[#E6F7F5] px-3.5 py-1 rounded-full">
              Appointment Booking
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
              Ready to Take Care of Your Smile?
            </h2>
            <p className="text-base text-[#627D98] leading-relaxed">
              Book your dental consultation in a few simple steps. Your booking
              details are formatted directly into WhatsApp so our clinic staff can
              promptly confirm your requested slot.
            </p>

            {/* Quick Contact Box */}
            <div className="bg-[#F5F9FC] rounded-2xl p-6 border border-slate-200/70 space-y-4">
              <h3 className="font-bold text-[#102A43] text-sm uppercase tracking-wider">
                Direct Clinic Contact
              </h3>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 border border-slate-200">
                  <Phone className="w-5 h-5 text-[#16A6A1]" />
                </div>
                <div>
                  <span className="block text-xs text-[#627D98]">Call Us Directly</span>
                  <a
                    href={`tel:${HOSPITAL_INFO.phoneClean}`}
                    className="font-bold text-[#102A43] hover:text-[#16A6A1] transition-colors text-base"
                  >
                    {HOSPITAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 border border-slate-200">
                  <Clock className="w-5 h-5 text-[#16A6A1]" />
                </div>
                <div>
                  <span className="block text-xs text-[#627D98]">Clinic Hours</span>
                  <span className="font-bold text-[#102A43] text-sm">
                    {HOSPITAL_INFO.timings.days}: {HOSPITAL_INFO.timings.hours}
                  </span>
                  <span className="block text-xs text-[#16A6A1] font-semibold">
                    {HOSPITAL_INFO.timings.status}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 border border-slate-200">
                  <ShieldAlert className="w-5 h-5 text-[#16A6A1]" />
                </div>
                <div>
                  <span className="block text-xs text-[#627D98]">Confirmation Policy</span>
                  <p className="text-xs text-[#243B53] leading-relaxed">
                    Appointments are confirmed directly with our clinic staff on
                    WhatsApp or phone call. No automated bot bookings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F5F9FC] rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md">
              {submissionSuccess ? (
                /* Success Confirmation State */
                <div className="text-center py-6 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#E6F7F5] flex items-center justify-center mx-auto text-[#16A6A1]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#102A43]">
                      WhatsApp Message Prepared!
                    </h3>
                    <p className="mt-2 text-sm text-[#627D98] max-w-md mx-auto">
                      Click the button below to send your pre-filled appointment
                      details to Siddhi Dental Hospital via WhatsApp.
                    </p>
                  </div>

                  {/* Formatted Message Preview */}
                  <div className="text-left bg-white p-4 rounded-xl border border-slate-200 text-xs text-[#243B53] font-mono whitespace-pre-wrap max-h-48 overflow-y-auto">
                    {submissionSuccess.formattedMessage}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={submissionSuccess.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#16A6A1] hover:bg-[#0E7C79] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-sm transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Open WhatsApp Now</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-[#102A43] px-5 py-3.5 rounded-xl font-bold text-sm transition-all"
                    >
                      <Copy className="w-4 h-4 text-[#16A6A1]" />
                      <span>{copied ? 'Copied to Clipboard!' : 'Copy Message Text'}</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmissionSuccess(null)}
                    className="text-xs font-semibold text-[#627D98] hover:text-[#102A43] underline"
                  >
                    ← Edit or Book Another Appointment
                  </button>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-slate-200 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-[#102A43]">
                      Book Appointment on WhatsApp
                    </h3>
                    <p className="text-xs text-[#627D98] mt-1">
                      Fill in your details and send directly to our clinic WhatsApp.
                    </p>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="patientName"
                      className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-1.5"
                    >
                      Patient Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="patientName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        placeholder="e.g. Ramesh Kumar"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border text-sm text-[#243B53] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16A6A1] transition-all ${
                          errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label
                      htmlFor="patientPhone"
                      className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-1.5"
                    >
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        id="patientPhone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder="e.g. 9546717655"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border text-sm text-[#243B53] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16A6A1] transition-all ${
                          errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Dental Service Selection */}
                  <div>
                    <label
                      htmlFor="dentalService"
                      className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-1.5"
                    >
                      Select Dental Service <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="dentalService"
                      value={formData.serviceId}
                      onChange={(e) => {
                        const val = e.target.value;
                        setFormData({ ...formData, serviceId: val });
                        onServiceChange(val);
                        if (errors.serviceId) setErrors({ ...errors, serviceId: '' });
                      }}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#243B53] focus:outline-none focus:ring-2 focus:ring-[#16A6A1] transition-all"
                    >
                      <option value="">-- Choose a Dental Service --</option>
                      {DENTAL_SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} ({s.category})
                        </option>
                      ))}
                      <option value="other-consultation">Other / Routine Checkup</option>
                    </select>
                    {errors.serviceId && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.serviceId}
                      </p>
                    )}
                  </div>

                  {/* Date & Time Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="preferredDate"
                        className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-1.5"
                      >
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="preferredDate"
                          type="date"
                          min={getMinBookingDate()}
                          value={formData.preferredDate}
                          onChange={(e) => {
                            setFormData({ ...formData, preferredDate: e.target.value });
                            if (errors.preferredDate) setErrors({ ...errors, preferredDate: '' });
                          }}
                          className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#243B53] focus:outline-none focus:ring-2 focus:ring-[#16A6A1] transition-all ${
                            errors.preferredDate ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                          }`}
                        />
                      </div>
                      {errors.preferredDate && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.preferredDate}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="preferredTime"
                        className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-1.5"
                      >
                        Preferred Time Slot
                      </label>
                      <select
                        id="preferredTime"
                        value={formData.preferredTime}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredTime: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#243B53] focus:outline-none focus:ring-2 focus:ring-[#16A6A1] transition-all"
                      >
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Additional Message / Symptoms */}
                  <div>
                    <label
                      htmlFor="dentalConcern"
                      className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-1.5"
                    >
                      Dental Concern / Symptoms (Optional)
                    </label>
                    <textarea
                      id="dentalConcern"
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="e.g. Tooth sensitivity when drinking cold water, mild pain in upper left side..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#243B53] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16A6A1] transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2.5 bg-[#16A6A1] hover:bg-[#0E7C79] text-white py-4 px-6 rounded-xl font-bold text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-75"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Book Appointment on WhatsApp</span>
                    </button>
                    <p className="mt-2.5 text-center text-xs text-[#627D98]">
                      Upon submission, WhatsApp will open with your pre-formatted appointment request.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
