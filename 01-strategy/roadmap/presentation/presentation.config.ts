/**
 * Presentation configuration file
 * Customize icon mappings, slide ordering, colors, and feature flags
 */

export interface PresentationConfig {
  iconMappings: Record<string, string>;
  slideOrder?: string[];
  colorOverrides?: {
    teal?: string;
    yellow?: string;
    gold?: string;
    orange?: string;
  };
  animation?: {
    enabled: boolean;
    duration?: number;
  };
  featureFlags?: {
    enableDeliveryRoadmap?: boolean;
    enableLaunchMoments?: boolean;
    enablePortfolioDetail?: boolean;
  };
}

export const config: PresentationConfig = {
  iconMappings: {
    // Theme icons
    'fatal-risk-visibility': 'ShieldIcon',
    'data-to-action': 'ChartIcon',
    'credibility-trust': 'BrainIcon',
    'controls-that-work': 'GearIcon',
    'standardization': 'ChainLinkIcon',
    
    // Section header icons
    'mission': 'TargetIcon',
    'vision': 'EyeIcon',
    'strategic-focus': 'CompassIcon',
    'roadmap': 'MapIcon',
    'core-principles': 'ChecklistIcon',
    'special-mention': 'ChecklistIcon',
    'looking-ahead': 'RocketIcon',
    
    // Feature icons
    'unified-platform': 'GearIcon',
    'cloud-native': 'GearIcon',
    'ai-powered': 'BrainIcon',
    'integration': 'ChainLinkIcon',
    'modern-ux': 'BrainIcon',
    'scalable-platform': 'GearIcon',
  },
  slideOrder: [
    'title',
    'vision',
    'themes-overview',
    'theme-detail', // repeated for each theme
    'pillars',
    'portfolio-overview',
    'portfolio-initiatives',
    'launch-moments',
    'delivery',
    'summary',
  ],
  animation: {
    enabled: true,
    duration: 400,
  },
  featureFlags: {
    enableDeliveryRoadmap: true,
    enableLaunchMoments: true,
    enablePortfolioDetail: true,
  },
};


