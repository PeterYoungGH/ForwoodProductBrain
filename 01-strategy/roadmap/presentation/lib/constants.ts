/**
 * Design system constants for the roadmap presentation
 */

export const COLORS = {
  gradient: {
    primary: 'linear-gradient(135deg, #0a4d5c 0%, #0a0a0a 100%)',
    teal: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)',
    orange: 'linear-gradient(135deg, #fb923c 0%, #f59e0b 100%)',
    icon: 'linear-gradient(135deg, #14b8a6 0%, #fbbf24 100%)',
  },
  accent: {
    teal: ['#14b8a6', '#06b6d4'],
    yellow: '#fbbf24',
    gold: '#f59e0b',
    orange: '#fb923c',
  },
  text: {
    heading: '#ffffff',
    body: '#d1d5db', // light gray
    label: '#9ca3af', // lighter gray
  },
} as const;

export const TYPOGRAPHY = {
  hero: {
    size: '48px',
    sizeLg: '72px',
    weight: '700',
    color: COLORS.text.heading,
  },
  section: {
    size: '30px',
    sizeLg: '36px',
    weight: '600',
    color: COLORS.text.heading,
  },
  card: {
    size: '20px',
    sizeLg: '24px',
    weight: '500',
    color: COLORS.text.heading,
  },
  body: {
    size: '16px',
    sizeLg: '18px',
    weight: '400',
    color: COLORS.text.body,
  },
  label: {
    size: '14px',
    weight: '400',
    color: COLORS.text.label,
  },
} as const;

export const SPACING = {
  slidePadding: 48,
  slidePaddingLg: 64,
  cardGap: 24,
  cardGapLg: 32,
  baseUnit: 4,
  scale: [4, 8, 12, 16, 24, 32, 48, 64] as const,
} as const;

export const ICON_SIZES = {
  standard: 48,
  large: 64,
  sectionHeader: 32,
} as const;

export const BORDER_RADIUS = {
  icon: 8,
  iconLg: 12,
  card: 12,
} as const;

export const ANIMATION = {
  slideTransition: {
    duration: 400,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  staggerDelay: 100,
  hoverScale: 1.1,
} as const;

export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  large: 1280,
} as const;


