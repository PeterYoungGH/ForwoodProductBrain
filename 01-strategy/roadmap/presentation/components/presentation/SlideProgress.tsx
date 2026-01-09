'use client'

import React from 'react'

interface SlideProgressProps {
  currentSlide: number
  totalSlides: number
  onSlideSelect?: (index: number) => void
}

export const SlideProgress: React.FC<SlideProgressProps> = ({
  currentSlide,
  totalSlides,
  onSlideSelect,
}) => {
  return (
    <div className="flex items-center justify-center gap-2 flex-wrap max-w-4xl mx-auto px-4">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSlideSelect?.(index)}
          className={`
            w-2 h-2 rounded-full
            transition-all duration-200
            focus-ring
            ${
              index === currentSlide
                ? 'bg-teal w-8'
                : 'bg-gray-700 hover:bg-gray-600'
            }
          `}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === currentSlide ? 'true' : undefined}
        />
      ))}
    </div>
  )
}


