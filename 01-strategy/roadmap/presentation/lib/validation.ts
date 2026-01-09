/**
 * Zod schemas for data validation
 */

import { z } from 'zod'
import type {
  StrategicVision,
  StrategicTheme,
  StrategicPillar,
  PortfolioInitiative,
  LaunchMoment,
  DeliveryRelease,
  RoadmapData,
} from './roadmap-data'

const voCEvidenceSchema = z.object({
  type: z.enum(['Executive Theme', 'Primary Persona Pain', 'Customer Theme', 'Market Theme']),
  quote: z.string(),
})

export const strategicVisionSchema = z.object({
  mission: z.string().min(1),
  vision: z.string().min(1),
})

export const strategicThemeSchema = z.object({
  id: z.string(),
  number: z.number().int().positive(),
  title: z.string().min(1),
  vision: z.string().min(1),
  whyThisMatters: z.array(voCEvidenceSchema),
  strategicInitiatives: z.array(z.string()),
  desiredOutcome: z.string(),
  businessImpact: z.string(),
  whyNow: z.string(),
})

export const strategicPillarSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  description: z.string().min(1),
  themeAlignment: z.array(z.string()),
})

export const portfolioInitiativeSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  problemStatement: z.string().min(1),
  opportunitySummary: z.string().min(1),
  strategicThemeAlignment: z.array(z.string()),
  expectedOutcome: z.string(),
  keyMetrics: z.array(z.string()),
  status: z.enum(['Building', 'Validating', 'Exploring', 'Proposed']),
  deliverables: z.array(z.string()),
  timePeriod: z.enum(['Now', 'Next', 'Later', 'Future']),
})

export const launchMomentSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  targetDate: z.string(),
  components: z.array(z.string()),
  targetAudience: z.string(),
  keyMessage: z.string(),
  strategicThemeAlignment: z.array(z.string()),
})

export const deliveryReleaseSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  status: z.enum(['Ready to Release', 'In Progress', 'In QA', 'Needs Clarification', 'Blocked']),
  targetWindow: z.string(),
  launchAlignment: z.string().optional(),
  description: z.string().optional(),
})

export const roadmapDataSchema = z.object({
  strategicVision: strategicVisionSchema,
  strategicThemes: z.array(strategicThemeSchema),
  strategicPillars: z.array(strategicPillarSchema),
  portfolioInitiatives: z.array(portfolioInitiativeSchema),
  launchMoments: z.array(launchMomentSchema),
  deliveryReleases: z.array(deliveryReleaseSchema),
  hierarchy: z.array(z.object({
    themeId: z.string(),
    portfolioInitiatives: z.array(z.string()),
    deliveryReleases: z.array(z.string()),
  })),
  lastUpdated: z.string().optional(),
})

export function validateRoadmapData(data: unknown): RoadmapData {
  return roadmapDataSchema.parse(data)
}


