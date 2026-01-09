/**
 * TypeScript interfaces for roadmap data structures
 */

export interface StrategicVision {
  mission: string
  vision: string
}

export interface VoCEvidence {
  type: 'Executive Theme' | 'Primary Persona Pain' | 'Customer Theme' | 'Market Theme'
  quote: string
}

export interface StrategicTheme {
  id: string
  number: number
  title: string
  vision: string
  whyThisMatters: VoCEvidence[]
  strategicInitiatives: string[]
  desiredOutcome: string
  businessImpact: string
  whyNow: string
}

export interface StrategicPillar {
  id: string
  name: string
  description: string
  themeAlignment: string[]
}

export interface PortfolioInitiative {
  id: string
  name: string
  problemStatement: string
  opportunitySummary: string
  strategicThemeAlignment: string[]
  expectedOutcome: string
  keyMetrics: string[]
  status: 'Building' | 'Validating' | 'Exploring' | 'Proposed'
  deliverables: string[]
  timePeriod: 'Now' | 'Next' | 'Later' | 'Future'
}

export interface LaunchMoment {
  id: string
  name: string
  targetDate: string
  components: string[]
  targetAudience: string
  keyMessage: string
  strategicThemeAlignment: string[]
}

export interface DeliveryRelease {
  id: string
  name: string
  status: 'Ready to Release' | 'In Progress' | 'In QA' | 'Needs Clarification' | 'Blocked'
  targetWindow: string
  launchAlignment?: string
  description?: string
}

export interface RoadmapHierarchy {
  themeId: string
  portfolioInitiatives: string[]
  deliveryReleases: string[]
}

export interface RoadmapData {
  strategicVision: StrategicVision
  strategicThemes: StrategicTheme[]
  strategicPillars: StrategicPillar[]
  portfolioInitiatives: PortfolioInitiative[]
  launchMoments: LaunchMoment[]
  deliveryReleases: DeliveryRelease[]
  hierarchy: RoadmapHierarchy[]
  lastUpdated?: string
}


