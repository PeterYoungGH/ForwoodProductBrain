/**
 * Slide registry system - maps slide types to components dynamically
 */

import type { RoadmapData } from './roadmap-data'
import { config } from '../presentation.config'

export type SlideType = 
  | 'title'
  | 'vision'
  | 'themes-overview'
  | 'theme-detail'
  | 'pillars'
  | 'portfolio-overview'
  | 'portfolio-initiatives'
  | 'launch-moments'
  | 'delivery'
  | 'summary'

export interface SlideConfig {
  type: SlideType
  id: string
  data?: any
  skip?: boolean
}

/**
 * Generate slide sequence from roadmap data
 */
export function generateSlideSequence(data: RoadmapData): SlideConfig[] {
  const slides: SlideConfig[] = []

  // Title slide
  slides.push({ type: 'title', id: 'title' })

  // Vision slide
  if (data.strategicVision) {
    slides.push({ 
      type: 'vision', 
      id: 'vision',
      data: data.strategicVision,
    })
  }

  // Themes overview
  if (data.strategicThemes.length > 0) {
    slides.push({
      type: 'themes-overview',
      id: 'themes-overview',
      data: data.strategicThemes,
    })
  }

  // Individual theme detail slides
  for (const theme of data.strategicThemes) {
    slides.push({
      type: 'theme-detail',
      id: `theme-${theme.id}`,
      data: theme,
    })
  }

  // Strategic pillars
  if (data.strategicPillars.length > 0) {
    slides.push({
      type: 'pillars',
      id: 'pillars',
      data: data.strategicPillars,
    })
  }

  // Portfolio overview
  if (data.portfolioInitiatives.length > 0) {
    slides.push({
      type: 'portfolio-overview',
      id: 'portfolio-overview',
      data: data.portfolioInitiatives,
    })
  }

  // Portfolio initiatives detail
  if (config.featureFlags?.enablePortfolioDetail && data.portfolioInitiatives.length > 0) {
    slides.push({
      type: 'portfolio-initiatives',
      id: 'portfolio-initiatives',
      data: data.portfolioInitiatives,
    })
  }

  // Launch moments
  if (config.featureFlags?.enableLaunchMoments && data.launchMoments.length > 0) {
    slides.push({
      type: 'launch-moments',
      id: 'launch-moments',
      data: data.launchMoments,
    })
  }

  // Delivery roadmap
  if (config.featureFlags?.enableDeliveryRoadmap && data.deliveryReleases.length > 0) {
    slides.push({
      type: 'delivery',
      id: 'delivery',
      data: data.deliveryReleases,
    })
  }

  // Summary slide
  slides.push({ type: 'summary', id: 'summary' })

  // Filter out skipped slides
  return slides.filter(slide => !slide.skip)
}

/**
 * Get total slide count
 */
export function getSlideCount(data: RoadmapData): number {
  return generateSlideSequence(data).length
}


