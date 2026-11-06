import React, { useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  ZoomIn,
} from 'lucide-react';
import { GalleryPhoto } from '../types/dental';

interface LightboxModalProps {
  photos: GalleryPhoto[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % photos.length);
      if (e.key === 'ArrowLeft')
        onNavigate((currentIndex - 1 + photos.length) % photos.length);
    };

    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, photos.length, onClose, onNavigate]);

  if (currentIndex === null || !photos[currentIndex]) return null;

  const currentPhoto = photos[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + photos.length) % photos.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % photos.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#102A43]/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top action controls */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-3 z-10">
        <span className="text-white/80 text-xs sm:text-sm font-semibold bg-black/40 px-3 py-1.5 rounded-full">
          {currentIndex + 1} / {photos.length}
        </span>
        <button
          onClick={onClose}
          type="button"
          className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        type="button"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition-all z-10"
        aria-label="Previous photograph"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        type="button"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition-all z-10"
        aria-label="Next photograph"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Center Image Container */}
      <div
        className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-2xl overflow-hidden bg-black/40 shadow-2xl border border-white/10">
          <img
            src={currentPhoto.imageUrl}
            alt={currentPhoto.title}
            className="max-h-[68vh] w-auto max-w-full object-contain mx-auto"
          />
        </div>

        {/* Caption Bar */}
        <div className="mt-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 text-left max-w-2xl w-full shadow-lg border border-white/20">
          <div className="flex items-center justify-between gap-3 mb-1">
            <h4 className="font-bold text-[#102A43] text-sm sm:text-base">
              {currentPhoto.title}
            </h4>
            {currentPhoto.isActualPhoto ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-[#E6F7F5] text-[#0E7C79] px-2 py-0.5 rounded-full shrink-0">
                <ShieldCheck className="w-3 h-3 text-[#16A6A1]" />
                Actual Clinic Photo
              </span>
            ) : (
              <span className="text-[11px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full shrink-0">
                Facility Preview
              </span>
            )}
          </div>
          <p className="text-xs sm:text-sm text-[#627D98] leading-relaxed">
            {currentPhoto.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
