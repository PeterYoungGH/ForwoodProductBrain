/**
 * Icon mapping configuration
 * Maps theme/initiative names to icon components
 */

import { ShieldIcon } from '@/icons/ShieldIcon'
import { BrainIcon } from '@/icons/BrainIcon'
import { ChainLinkIcon } from '@/icons/ChainLinkIcon'
import { GearIcon } from '@/icons/GearIcon'
import { ChartIcon } from '@/icons/ChartIcon'
import { LightningIcon } from '@/icons/LightningIcon'
import { TargetIcon } from '@/icons/TargetIcon'
import { EyeIcon } from '@/icons/EyeIcon'
import { CompassIcon } from '@/icons/CompassIcon'
import { MapIcon } from '@/icons/MapIcon'
import { ChecklistIcon } from '@/icons/ChecklistIcon'
import { RocketIcon } from '@/icons/RocketIcon'
import { StarIcon } from '@/icons/StarIcon'
import { HeartIcon } from '@/icons/HeartIcon'

export type IconComponent = React.ComponentType<{ className?: string; size?: number }>

export const iconMap: Record<string, IconComponent> = {
  // Theme icons
  'fatal-risk-visibility': ShieldIcon,
  'data-to-action': ChartIcon,
  'credibility-trust': BrainIcon,
  'controls-that-work': GearIcon,
  'standardization': ChainLinkIcon,
  
  // Section header icons
  'mission': TargetIcon,
  'vision': EyeIcon,
  'strategic-focus': CompassIcon,
  'roadmap': MapIcon,
  'core-principles': ChecklistIcon,
  'special-mention': ChecklistIcon,
  'looking-ahead': RocketIcon,
  
  // Feature icons
  'unified-platform': GearIcon,
  'cloud-native': GearIcon,
  'ai-powered': BrainIcon,
  'integration': ChainLinkIcon,
  'modern-ux': BrainIcon,
  'scalable-platform': GearIcon,
  'lightning': LightningIcon,
  'star': StarIcon,
  'heart': HeartIcon,
}

export function getIcon(name: string): IconComponent {
  const normalizedName = name.toLowerCase().replace(/\s+/g, '-')
  return iconMap[normalizedName] || GearIcon // Default icon
}


