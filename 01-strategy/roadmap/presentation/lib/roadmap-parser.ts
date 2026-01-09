/**
 * Markdown parsing utilities for roadmap files
 * Robust parsing that finds sections by heading text
 */

import * as fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import type {
  StrategicVision,
  StrategicTheme,
  StrategicPillar,
  PortfolioInitiative,
  LaunchMoment,
  DeliveryRelease,
  RoadmapData,
  VoCEvidence,
} from './roadmap-data'
import { validateRoadmapData } from './validation'

// Get the roadmap directory (parent of presentation directory)
// In Next.js, process.cwd() returns the project root
// We need to go up from presentation/ to roadmap/
function getRoadmapDir(): string {
  if (typeof window !== 'undefined') {
    // Client-side - shouldn't happen, but fallback
    return ''
  }
  // Server-side: process.cwd() is the presentation directory
  // Go up one level to get to roadmap directory
  return path.join(process.cwd(), '..')
}

/**
 * Find section by heading text (flexible matching)
 */
function findSection(content: string, headingText: string): string | null {
  const lines = content.split('\n')
  let inSection = false
  let sectionLines: string[] = []
  let currentLevel = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/)

    if (headingMatch) {
      const level = headingMatch[1].length
      const text = headingMatch[2].trim()

      // Check if this is our target section
      if (text.toLowerCase().includes(headingText.toLowerCase())) {
        inSection = true
        currentLevel = level
        sectionLines = []
        continue
      }

      // If we're in a section and hit a heading at same or higher level, end section
      if (inSection && level <= currentLevel && !text.toLowerCase().includes(headingText.toLowerCase())) {
        break
      }
    }

    if (inSection) {
      sectionLines.push(line)
    }
  }

  return sectionLines.length > 0 ? sectionLines.join('\n') : null
}

/**
 * Extract list items from markdown
 */
function extractListItems(content: string, prefix: string = '-'): string[] {
  const lines = content.split('\n')
  const items: string[] = []
  let currentItem = ''

  for (const line of lines) {
    if (line.trim().startsWith(prefix)) {
      if (currentItem) {
        items.push(currentItem.trim())
      }
      currentItem = line.replace(/^[-\*]\s*/, '').trim()
    } else if (line.trim() && currentItem && !line.match(/^#{1,6}\s/)) {
      currentItem += ' ' + line.trim()
    } else if (currentItem && (line.trim() === '' || line.match(/^#{1,6}\s/))) {
      items.push(currentItem.trim())
      currentItem = ''
    }
  }

  if (currentItem) {
    items.push(currentItem.trim())
  }

  return items.filter(item => item.length > 0)
}

/**
 * Extract bold text from markdown
 */
function extractBoldText(text: string): string | null {
  const match = text.match(/\*\*(.+?)\*\*/)
  return match ? match[1] : null
}

/**
 * Parse strategic roadmap
 */
async function parseStrategicRoadmap(): Promise<{
  vision: StrategicVision
  themes: StrategicTheme[]
  pillars: StrategicPillar[]
}> {
  const filePath = path.join(getRoadmapDir(), '01-strategic-roadmap.md')
  const content = fs.readFileSync(filePath, 'utf-8')
  const { data: frontmatter } = matter(content)

  // Extract Strategic Vision
  const visionSection = findSection(content, 'Strategic Vision')
  let vision: StrategicVision = {
    mission: '',
    vision: '',
  }

  if (visionSection) {
    const lines = visionSection.split('\n').filter(l => l.trim() && !l.startsWith('#'))
    const text = lines.join(' ')
    const missionMatch = text.match(/[Oo]ur mission is (.+?)(?:\.|Over)/)
    const visionMatch = text.match(/Over the next two years, (.+?)(?:\.|$)/)

    if (missionMatch) {
      vision.mission = missionMatch[1].trim() + '.'
    } else {
      vision.mission = 'To eliminate workplace fatalities and serious injuries.'
    }

    if (visionMatch) {
      vision.vision = visionMatch[1].trim() + '.'
    } else {
      vision.vision = 'We will establish Forwood One as the global leader in Critical Risk Management (CRM), setting the standard for SIF prevention in high-risk industries.'
    }
  }

  // Extract Strategic Themes
  const themesSection = findSection(content, 'Strategic Themes')
  const themes: StrategicTheme[] = []

  if (themesSection) {
    const themeMatches = themesSection.matchAll(/### Theme (\d+): ([\s\S]+?)(?=###|$)/g)
    
    for (const match of themeMatches) {
      const themeNumber = parseInt(match[1])
      const themeContent = match[2]
      
      const visionMatch = themeContent.match(/\*\*Vision:\*\*\s*([\s\S]+?)(?=\*\*|$)/)
      const visionText = visionMatch ? visionMatch[1].trim() : ''

      // Extract VoC Evidence
      const vocSection = findSection(themeContent, 'Why This Matters')
      const vocEvidence: VoCEvidence[] = []
      
      if (vocSection) {
        const vocItems = extractListItems(vocSection)
        for (const item of vocItems) {
          const typeMatch = item.match(/\*\*(.+?):\*\*/)
          const quoteMatch = item.match(/-\s*(.+)/)
          if (typeMatch && quoteMatch) {
            const type = typeMatch[1].trim() as VoCEvidence['type']
            const quote = quoteMatch[1].trim()
            vocEvidence.push({ type, quote })
          }
        }
      }

      // Extract Strategic Initiatives
      const initiativesSection = findSection(themeContent, 'Strategic Initiatives')
      const initiatives = initiativesSection 
        ? extractListItems(initiativesSection)
        : []

      // Extract Desired Outcome
      const outcomeMatch = themeContent.match(/\*\*Desired Outcome:\*\*\s*([\s\S]+?)(?=\*\*|$)/)
      const outcome = outcomeMatch ? outcomeMatch[1].trim() : ''

      // Extract Business Impact
      const impactMatch = themeContent.match(/\*\*Business Impact:\*\*\s*([\s\S]+?)(?=\*\*|$)/)
      const impact = impactMatch ? impactMatch[1].trim() : ''

      // Extract Why Now
      const whyNowMatch = themeContent.match(/\*\*Why Now:\*\*\s*([\s\S]+?)(?=\*\*|$)/)
      const whyNow = whyNowMatch ? whyNowMatch[1].trim() : ''

      themes.push({
        id: `theme-${themeNumber}`,
        number: themeNumber,
        title: match[2].split('\n')[0].trim(),
        vision: visionText,
        whyThisMatters: vocEvidence,
        strategicInitiatives: initiatives,
        desiredOutcome: outcome,
        businessImpact: impact,
        whyNow: whyNow,
      })
    }
  }

  // Extract Strategic Pillars
  const pillarsSection = findSection(content, 'Strategic Pillars')
  const pillars: StrategicPillar[] = []

  if (pillarsSection) {
    const pillarMatches = pillarsSection.matchAll(/### (\d+)\.\s+([\s\S]+?)(?=###|$)/g)
    
    for (const match of pillarMatches) {
      const pillarContent = match[2]
      const name = match[2].split('\n')[0].trim()
      const description = pillarContent.split('\n').slice(1).join(' ').trim()
      
      // Extract theme alignment
      const alignmentMatch = description.match(/\*\*Embedded in:\*\*\s*(.+?)(?:\*\*|$)/)
      const alignment = alignmentMatch 
        ? alignmentMatch[1].split(',').map(a => a.trim())
        : []

      pillars.push({
        id: `pillar-${match[1]}`,
        name: name,
        description: description.replace(/\*\*Embedded in:\*\*.+/, '').trim(),
        themeAlignment: alignment,
      })
    }
  }

  return { vision, themes, pillars }
}

/**
 * Parse portfolio roadmap
 */
async function parsePortfolioRoadmap(): Promise<{
  initiatives: PortfolioInitiative[]
  launchMoments: LaunchMoment[]
}> {
  const filePath = path.join(getRoadmapDir(), '02-portfolio-roadmap.md')
  const content = fs.readFileSync(filePath, 'utf-8')

  const initiatives: PortfolioInitiative[] = []
  const launchMoments: LaunchMoment[] = []

  // Extract initiatives by time period
  const timePeriods = ['Now', 'Next', 'Later', 'Future'] as const

  for (const period of timePeriods) {
    const periodSection = findSection(content, `### ${period}`)
    if (!periodSection) continue

    const initiativeMatches = periodSection.matchAll(/#### Initiative:\s+([\s\S]+?)(?=####|###|$)/g)
    
    for (const match of initiativeMatches) {
      const initiativeContent = match[1]
      const name = initiativeContent.split('\n')[0].trim()

      const problemMatch = initiativeContent.match(/- \*\*Problem Statement:\*\*\s*([\s\S]+?)(?=-|$)/)
      const problem = problemMatch ? problemMatch[1].trim() : ''

      const opportunityMatch = initiativeContent.match(/- \*\*Opportunity Summary:\*\*\s*([\s\S]+?)(?=-|$)/)
      const opportunity = opportunityMatch ? opportunityMatch[1].trim() : ''

      const themeMatch = initiativeContent.match(/- \*\*Strategic Theme Alignment:\*\*\s*([\s\S]+?)(?=-|$)/)
      const themes = themeMatch 
        ? themeMatch[1].split('\n').map(t => t.trim()).filter(t => t)
        : []

      const outcomeMatch = initiativeContent.match(/- \*\*Expected Outcome:\*\*\s*([\s\S]+?)(?=-|$)/)
      const outcome = outcomeMatch ? outcomeMatch[1].trim() : ''

      const metricsSection = findSection(initiativeContent, 'Key Metrics')
      const metrics = metricsSection ? extractListItems(metricsSection) : []

      const statusMatch = initiativeContent.match(/- \*\*Status:\*\*\s*(.+?)(?=\n|$)/)
      const status = statusMatch 
        ? (statusMatch[1].trim() as PortfolioInitiative['status'])
        : 'Exploring'

      const deliverablesSection = findSection(initiativeContent, 'Key Deliverables')
      const deliverables = deliverablesSection 
        ? extractListItems(deliverablesSection)
        : []

      initiatives.push({
        id: `initiative-${name.toLowerCase().replace(/\s+/g, '-')}`,
        name,
        problemStatement: problem,
        opportunitySummary: opportunity,
        strategicThemeAlignment: themes,
        expectedOutcome: outcome,
        keyMetrics: metrics,
        status,
        deliverables,
        timePeriod: period,
      })
    }
  }

  // Extract Launch Moments
  const launchSection = findSection(content, 'Launch Moments')
  if (launchSection) {
    const launchMatches = launchSection.matchAll(/### ([\s\S]+?)(?=###|$)/g)
    
    for (const match of launchMatches) {
      const launchContent = match[1]
      const name = launchContent.split('\n')[0].trim()

      const dateMatch = launchContent.match(/\*\*Launch Date:\*\*\s*(.+?)(?=\n|$)/)
      const date = dateMatch ? dateMatch[1].trim() : ''

      const componentsSection = findSection(launchContent, 'Components')
      const components = componentsSection 
        ? extractListItems(componentsSection)
        : []

      const audienceMatch = launchContent.match(/\*\*Target Audience:\*\*\s*(.+?)(?=\n|$)/)
      const audience = audienceMatch ? audienceMatch[1].trim() : ''

      const messageMatch = launchContent.match(/\*\*Key Message:\*\*\s*(.+?)(?=\n|$)/)
      const message = messageMatch ? messageMatch[1].trim() : ''

      const alignmentMatch = launchContent.match(/\*\*Strategic Theme Alignment:\*\*\s*(.+?)(?=\n|$)/)
      const alignment = alignmentMatch 
        ? alignmentMatch[1].split(',').map(a => a.trim())
        : []

      launchMoments.push({
        id: `launch-${name.toLowerCase().replace(/\s+/g, '-')}`,
        name,
        targetDate: date,
        components,
        targetAudience: audience,
        keyMessage: message,
        strategicThemeAlignment: alignment,
      })
    }
  }

  return { initiatives, launchMoments }
}

/**
 * Parse delivery roadmap
 */
async function parseDeliveryRoadmap(): Promise<{
  releases: DeliveryRelease[]
}> {
  const filePath = path.join(getRoadmapDir(), '03-delivery-roadmap.md')
  const content = fs.readFileSync(filePath, 'utf-8')

  const releases: DeliveryRelease[] = []

  // Extract releases from Release Pipeline
  const pipelineSection = findSection(content, 'Release Pipeline')
  if (pipelineSection) {
    const statusSections = [
      'Ready to Release',
      'In Progress',
      'In QA',
      'Needs Clarification',
      'Blocked',
    ] as const

    for (const status of statusSections) {
      const statusSection = findSection(pipelineSection, status)
      if (statusSection) {
        const items = extractListItems(statusSection)
        for (const item of items) {
          if (item.trim() && !item.includes('[To be updated')) {
            releases.push({
              id: `release-${item.toLowerCase().replace(/\s+/g, '-')}`,
              name: item.trim(),
              status: status as DeliveryRelease['status'],
              targetWindow: 'TBD',
              description: item.trim(),
            })
          }
        }
      }
    }
  }

  // Extract upcoming releases
  const upcomingSection = findSection(content, 'Upcoming Releases')
  if (upcomingSection) {
    const releaseMatches = upcomingSection.matchAll(/### Release Window:\s+([\s\S]+?)(?=###|$)/g)
    
    for (const match of releaseMatches) {
      const releaseContent = match[1]
      const window = match[0].match(/Release Window:\s+(.+?)(?=\n|$)/)?.[1] || 'TBD'
      
      const itemsSection = findSection(releaseContent, 'Key Items')
      if (itemsSection) {
        const items = extractListItems(itemsSection)
        for (const item of items) {
          if (item.trim() && !item.includes('[To be updated')) {
            releases.push({
              id: `release-${item.toLowerCase().replace(/\s+/g, '-')}`,
              name: item.trim(),
              status: 'In Progress',
              targetWindow: window.trim(),
              description: item.trim(),
            })
          }
        }
      }
    }
  }

  return { releases }
}

/**
 * Parse roadmap hierarchy
 */
async function parseRoadmapHierarchy(): Promise<RoadmapData['hierarchy']> {
  const filePath = path.join(getRoadmapDir(), 'roadmap-hierarchy.md')
  if (!fs.existsSync(filePath)) {
    return []
  }

  const content = fs.readFileSync(filePath, 'utf-8')
  const hierarchy: RoadmapData['hierarchy'] = []

  // Extract theme sections
  const themeMatches = content.matchAll(/## Theme \d+:([\s\S]+?)(?=##|$)/g)
  
  for (const match of themeMatches) {
    const themeContent = match[1]
    const themeIdMatch = match[0].match(/Theme (\d+):/)
    if (!themeIdMatch) continue

    const themeId = `theme-${themeIdMatch[1]}`

    // Extract portfolio initiatives
    const initiativesSection = findSection(themeContent, 'Portfolio Initiatives')
    const initiatives: string[] = []
    if (initiativesSection) {
      const initiativeMatches = initiativesSection.matchAll(/- \*\*(.+?)\*\*/g)
      for (const im of initiativeMatches) {
        initiatives.push(im[1].trim())
      }
    }

    // Extract delivery releases
    const releasesSection = findSection(themeContent, 'Delivery Releases')
    const releases: string[] = []
    if (releasesSection) {
      const releaseItems = extractListItems(releasesSection)
      releases.push(...releaseItems.map(r => r.split('*')[0].trim()))
    }

    hierarchy.push({
      themeId,
      portfolioInitiatives: initiatives,
      deliveryReleases: releases,
    })
  }

  return hierarchy
}

/**
 * Load and parse all roadmap data
 */
export async function loadRoadmapData(): Promise<RoadmapData> {
  try {
    const [strategic, portfolio, delivery, hierarchy] = await Promise.all([
      parseStrategicRoadmap(),
      parsePortfolioRoadmap(),
      parseDeliveryRoadmap(),
      parseRoadmapHierarchy(),
    ])

    const data: RoadmapData = {
      strategicVision: strategic.vision,
      strategicThemes: strategic.themes,
      strategicPillars: strategic.pillars,
      portfolioInitiatives: portfolio.initiatives,
      launchMoments: portfolio.launchMoments,
      deliveryReleases: delivery.releases,
      hierarchy,
    }

    // Validate data
    try {
      return validateRoadmapData(data)
    } catch (error) {
      console.warn('Validation warnings:', error)
      // Return data anyway with warnings
      return data
    }
  } catch (error) {
    console.error('Error parsing roadmap data:', error)
    throw new Error(`Failed to parse roadmap data: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

