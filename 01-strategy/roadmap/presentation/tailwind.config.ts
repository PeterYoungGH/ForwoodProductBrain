import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary gradient colors
        'teal-dark': '#0a4d5c',
        'black-dark': '#0a0a0a',
        // Accent colors
        'teal': {
          DEFAULT: '#14b8a6',
          light: '#06b6d4',
        },
        'yellow': '#fbbf24',
        'gold': '#f59e0b',
        'orange': '#fb923c',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0a4d5c 0%, #0a0a0a 100%)',
        'gradient-teal': 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)',
        'gradient-orange': 'linear-gradient(135deg, #fb923c 0%, #f59e0b 100%)',
        'gradient-icon': 'linear-gradient(135deg, #14b8a6 0%, #fbbf24 100%)',
      },
      fontSize: {
        'hero': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'hero-lg': ['72px', { lineHeight: '1.1', fontWeight: '700' }],
        'section': ['30px', { lineHeight: '1.3', fontWeight: '600' }],
        'section-lg': ['36px', { lineHeight: '1.3', fontWeight: '600' }],
        'card': ['20px', { lineHeight: '1.4', fontWeight: '500' }],
        'card-lg': ['24px', { lineHeight: '1.4', fontWeight: '500' }],
      },
      spacing: {
        'slide': '48px',
        'slide-lg': '64px',
        'card-gap': '24px',
        'card-gap-lg': '32px',
      },
      borderRadius: {
        'icon': '8px',
        'icon-lg': '12px',
        'card': '12px',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-in-out',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
export default config


