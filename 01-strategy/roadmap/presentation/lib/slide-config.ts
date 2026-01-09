/**
 * Dynamic slide configuration
 * Auto-generates from data
 */

import type { RoadmapData } from './roadmap-data'
import { generateSlideSequence, type SlideConfig } from './slide-registry'

export interface SlideConfigData {
  slides: SlideConfig[]
  totalSlides: number
}

/**
 * Generate slide configuration from roadmap data
 */
export function createSlideConfig(data: RoadmapData): SlideConfigData {
  const slides = generateSlideSequence(data)
  
  return {
    slides,
    totalSlides: slides.length,
  }
}


