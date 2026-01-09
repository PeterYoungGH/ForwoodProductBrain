'use client'

import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface NavigationControlsProps {
  currentSlide: number
  totalSlides: number
  onPrevious: () => void
  onNext: () => void
  onSlideSelect?: (index: number) => void
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onSlideSelect,
}) => {
  const isFirst = currentSlide === 0
  const isLast = currentSlide === totalSlides - 1

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-t border-gray-800"
      aria-label="Presentation navigation"
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-center gap-6">
          {/* Previous button */}
          <button
            onClick={onPrevious}
            disabled={isFirst}
            className={`
              w-12 h-12 rounded-full
              flex items-center justify-center
              transition-all duration-200
              focus-ring
              ${
                isFirst
                  ? 'opacity-50 cursor-not-allowed bg-gray-800'
                  : 'bg-teal hover:bg-teal-light text-white hover:scale-110'
              }
            `}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Slide counter */}
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span className="font-medium">{currentSlide + 1}</span>
            <span className="text-gray-500">/</span>
            <span className="font-medium">{totalSlides}</span>
          </div>

          {/* Next button */}
          <button
            onClick={onNext}
            disabled={isLast}
            className={`
              w-12 h-12 rounded-full
              flex items-center justify-center
              transition-all duration-200
              focus-ring
              ${
                isLast
                  ? 'opacity-50 cursor-not-allowed bg-gray-800'
                  : 'bg-teal hover:bg-teal-light text-white hover:scale-110'
              }
            `}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </nav>
  )
}


