import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface PackageImageCarouselProps {
  images: string[];
  title: string;
  className?: string;
  aspectRatioClass?: string;
}

export const PackageImageCarousel: React.FC<PackageImageCarouselProps> = ({
  images,
  title,
  className = '',
  aspectRatioClass = 'aspect-[16/10]',
}) => {
  // Normalize images array and ensure at least one valid fallback
  const validImages = images && images.length > 0 ? images : ['/assets/aistudio/Rajasthan-1_c57fba4b.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  // Touch swipe support
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  // Auto-play every 4 seconds
  useEffect(() => {
    if (isPaused || validImages.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % validImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, validImages.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % validImages.length);
  };

  const handleDotClick = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      // Swiped left -> next
      setCurrentIndex((prev) => (prev + 1) % validImages.length);
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> prev
      setCurrentIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  const handleImageError = (index: number) => {
    setFailedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div
      className={`relative w-full overflow-hidden bg-slate-900 group select-none ${aspectRatioClass} ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label={`${title} image gallery`}
    >
      {/* Slides */}
      {validImages.map((imgUrl, idx) => {
        const isCurrent = idx === currentIndex;
        const hasError = failedImages[idx];
        const displaySrc = hasError
          ? 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80'
          : imgUrl;

        return (
          <div
            key={`${imgUrl}-${idx}`}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={displaySrc}
              alt={`${title} highlight ${idx + 1}`}
              loading={idx === 0 ? 'eager' : 'lazy'}
              onError={() => handleImageError(idx)}
              className="w-full h-full object-cover transform duration-700 group-hover:scale-105"
            />
          </div>
        );
      })}

      {/* Subtle Dark Gradient Overlay for legible text & controls */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-black/30" />

      {/* Nav Chevrons (visible if > 1 image) */}
      {validImages.length > 1 && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous slide"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-slate-950/60 backdrop-blur-md text-white border border-white/20 flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all hover:bg-slate-900 hover:scale-110 active:scale-95 shadow-md"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next slide"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-slate-950/60 backdrop-blur-md text-white border border-white/20 flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all hover:bg-slate-900 hover:scale-110 active:scale-95 shadow-md"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Image Counter Badge (Top Right) */}
      {validImages.length > 1 && (
        <div className="absolute top-3 right-3 z-30 px-2 py-0.5 rounded-full bg-slate-950/70 backdrop-blur-md text-[10px] font-semibold text-white/90 border border-white/15 flex items-center gap-1 shadow-sm">
          <ImageIcon className="w-3 h-3 text-amber-300" />
          <span>
            {currentIndex + 1}/{validImages.length}
          </span>
        </div>
      )}

      {/* Indicator Dots (Bottom Center) */}
      {validImages.length > 1 && (
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/10">
          {validImages.map((_, idx) => (
            <button
              key={`dot-${idx}`}
              type="button"
              onClick={(e) => handleDotClick(idx, e)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-4 h-1.5 bg-amber-400'
                  : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
