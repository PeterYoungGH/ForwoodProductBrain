'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavigationControls } from './NavigationControls'
import { SlideProgress } from './SlideProgress'
import { ErrorBoundary } from './ErrorBoundary'
import { LoadingSkeleton } from './LoadingSkeleton'
import type { RoadmapData } from '@/lib/roadmap-data'
import { generateSlideSequence, type SlideConfig } from '@/lib/slide-registry'

// Import slide components
import { TitleSlide } from './slides/TitleSlide'
import { StrategicVisionSlide } from './slides/StrategicVisionSlide'
import { StrategicThemesOverviewSlide } from './slides/StrategicThemesOverviewSlide'
import { StrategicThemeDetailSlide } from './slides/StrategicThemeDetailSlide'
import { StrategicPillarsSlide } from './slides/StrategicPillarsSlide'
import { PortfolioRoadmapOverviewSlide } from './slides/PortfolioRoadmapOverviewSlide'
import { PortfolioInitiativesSlide } from './slides/PortfolioInitiativesSlide'
import { LaunchMomentsSlide } from './slides/LaunchMomentsSlide'
import { DeliveryRoadmapSlide } from './slides/DeliveryRoadmapSlide'
import { SummarySlide } from './slides/SummarySlide'

interface RoadmapPresentationProps {
  data: RoadmapData
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
}

export const RoadmapPresentation: React.FC<RoadmapPresentationProps> = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [slides, setSlides] = useState<SlideConfig[]>([])

  useEffect(() => {
    const slideSequence = generateSlideSequence(data)
    setSlides(slideSequence)
    
    // Handle URL hash for direct slide navigation
    const hash = window.location.hash
    if (hash) {
      const slideIndex = parseInt(hash.replace('#slide=', ''))
      if (!isNaN(slideIndex) && slideIndex >= 0 && slideIndex < slideSequence.length) {
        setCurrentSlide(slideIndex)
      }
    }
  }, [data])

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setDirection(index > currentSlide ? 1 : -1)
      setCurrentSlide(index)
      window.history.replaceState(null, '', `#slide=${index}`)
    }
  }, [currentSlide, slides.length])

  const goToNext = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1)
    }
  }, [currentSlide, slides.length, goToSlide])

  const goToPrevious = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1)
    }
  }, [currentSlide, goToSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        goToNext()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goToPrevious()
      } else if (e.key === 'Escape') {
        // Could navigate away or show exit dialog
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [goToNext, goToPrevious])

  // Touch gestures for mobile
  useEffect(() => {
    let touchStartX = 0
    let touchEndX = 0

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX
    }

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX
      const diff = touchStartX - touchEndX

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          goToNext()
        } else {
          goToPrevious()
        }
      }
    }

    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchend', handleTouchEnd)
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [goToNext, goToPrevious])

  if (slides.length === 0) {
    return <LoadingSkeleton />
  }

  const currentSlideConfig = slides[currentSlide]

  const renderSlide = () => {
    if (!currentSlideConfig) return null

    switch (currentSlideConfig.type) {
      case 'title':
        return <TitleSlide />
      case 'vision':
        return <StrategicVisionSlide data={currentSlideConfig.data} />
      case 'themes-overview':
        return <StrategicThemesOverviewSlide themes={currentSlideConfig.data} />
      case 'theme-detail':
        return <StrategicThemeDetailSlide theme={currentSlideConfig.data} />
      case 'pillars':
        return <StrategicPillarsSlide pillars={currentSlideConfig.data} />
      case 'portfolio-overview':
        return <PortfolioRoadmapOverviewSlide initiatives={currentSlideConfig.data} />
      case 'portfolio-initiatives':
        return <PortfolioInitiativesSlide initiatives={currentSlideConfig.data} />
      case 'launch-moments':
        return <LaunchMomentsSlide launchMoments={currentSlideConfig.data} />
      case 'delivery':
        return <DeliveryRoadmapSlide releases={currentSlideConfig.data} />
      case 'summary':
        return <SummarySlide />
      default:
        return null
    }
  }

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0"
          >
            {renderSlide()}
          </motion.div>
        </AnimatePresence>

        <NavigationControls
          currentSlide={currentSlide}
          totalSlides={slides.length}
          onPrevious={goToPrevious}
          onNext={goToNext}
          onSlideSelect={goToSlide}
        />

        <div className="fixed bottom-20 left-0 right-0 z-40">
          <SlideProgress
            currentSlide={currentSlide}
            totalSlides={slides.length}
            onSlideSelect={goToSlide}
          />
        </div>
      </div>
    </ErrorBoundary>
  )
}


