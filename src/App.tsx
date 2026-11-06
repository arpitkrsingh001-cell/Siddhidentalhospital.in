import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DoctorSection } from './components/DoctorSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AppointmentSection } from './components/AppointmentSection';
import { ContactSection } from './components/ContactSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('general-dentistry');

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
  };

  return (
    <div className="min-h-screen bg-white text-[#243B53] flex flex-col selection:bg-[#16A6A1]/20 selection:text-[#102A43]">
      {/* Sticky Navigation */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Doctor Profile Section */}
        <DoctorSection />

        {/* Dental Services (all 8 preserved) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Why Choose Us & Patient Experience */}
        <WhyChooseUs />

        {/* Hospital Photo Gallery (featuring actual clinic photos) */}
        <GallerySection />

        {/* Patient Testimonials & Google Ratings */}
        <TestimonialsSection />

        {/* WhatsApp Appointment Booking Section */}
        <AppointmentSection
          selectedServiceId={selectedServiceId}
          onServiceChange={setSelectedServiceId}
        />

        {/* Contact Information & Google Maps */}
        <ContactSection />

        {/* Final CTA Banner */}
        <CtaBanner />
      </main>

      {/* Footer */}
      <Footer onSelectService={handleSelectService} />

      {/* Floating Desktop WhatsApp & Mobile Sticky Action Bar */}
      <MobileActionBar />
    </div>
  );
}
