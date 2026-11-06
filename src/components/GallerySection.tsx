import React, { useState } from 'react';
import {
  ZoomIn,
  ShieldCheck,
  Camera,
  Image as ImageIcon,
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/dentalData';
import { LightboxModal } from './LightboxModal';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos (8)' },
    { id: 'clinical', label: 'Procedures & Doctor' },
    { id: 'operatory', label: 'Treatment Operatory' },
    { id: 'interior', label: 'Hospital & Chamber' },
    { id: 'credentials', label: 'Credentials & Hygiene' },
  ];

  const filteredPhotos = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'clinical')
      return (
        item.category.toLowerCase().includes('care') ||
        item.category.toLowerCase().includes('setup') ||
        item.category.toLowerCase().includes('doctor')
      );
    if (activeCategory === 'operatory')
      return (
        item.category.toLowerCase().includes('operatory') ||
        item.category.toLowerCase().includes('diagnostics')
      );
    if (activeCategory === 'interior')
      return (
        item.category.toLowerCase().includes('interior') ||
        item.category.toLowerCase().includes('chamber')
      );
    if (activeCategory === 'credentials')
      return (
        item.category.toLowerCase().includes('certifications') ||
        item.category.toLowerCase().includes('hygiene')
      );
    return true;
  });

  const handleOpenLightbox = (photoId: string) => {
    const idx = GALLERY_ITEMS.findIndex((p) => p.id === photoId);
    if (idx !== -1) setLightboxIndex(idx);
  };

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs uppercase tracking-wider font-bold text-[#16A6A1] bg-[#E6F7F5] px-3.5 py-1 rounded-full mb-3">
            Hospital Tour
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
            Clinic & Facility Gallery
          </h2>
          <p className="mt-3 text-base text-[#627D98]">
            Explore authentic photographs of Siddhi Dental Hospital in Siwan:
            modern dental chairs, executive consultation chamber, active clinical
            procedures, and verified surgeon certifications.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#102A43] text-white shadow-xs'
                    : 'bg-[#F5F9FC] text-[#627D98] hover:text-[#102A43] hover:bg-slate-200/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid (4 columns on xl, 3 on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => handleOpenLightbox(photo.id)}
              className="group relative rounded-2xl overflow-hidden bg-slate-100 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer border border-slate-200/70 flex flex-col justify-between"
            >
              {/* Image Frame with 4:3 Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Actual photo tag badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1 bg-[#102A43]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-lg border border-white/20 shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#16A6A1]" />
                    Actual Clinic Photo
                  </span>
                </div>

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/80 via-[#102A43]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-[#102A43] flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn className="w-5 h-5 text-[#16A6A1]" />
                  </div>
                </div>
              </div>

              {/* Caption Bottom Card */}
              <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#16A6A1] block mb-1">
                    {photo.category}
                  </span>
                  <h4 className="font-bold text-[#102A43] text-sm group-hover:text-[#16A6A1] transition-colors line-clamp-1">
                    {photo.title}
                  </h4>
                </div>
                <p className="mt-1 text-xs text-[#627D98] line-clamp-2">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Component */}
      <LightboxModal
        photos={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
};
