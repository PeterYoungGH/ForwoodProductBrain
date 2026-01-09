'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ICON_SIZES, BORDER_RADIUS } from '@/lib/constants'

export type IconColor = 'teal' | 'yellow' | 'gold' | 'orange'
export type IconSize = 48 | 64 | 32

interface IconSquareProps {
  icon: React.ComponentType<{ className?: string; size?: number }>
  color: IconColor
  size?: IconSize
  className?: string
  useGradient?: boolean
}

const colorClasses: Record<IconColor, string> = {
  teal: 'bg-teal',
  yellow: 'bg-yellow',
  gold: 'bg-gold',
  orange: 'bg-orange',
}

export const IconSquare: React.FC<IconSquareProps> = ({
  icon: Icon,
  color,
  size = 48,
  className = '',
  useGradient = false,
}) => {
  const sizeClass = size === 32 ? 'w-8 h-8' : size === 64 ? 'w-16 h-16' : 'w-12 h-12'
  const radiusClass = size === 32 ? 'rounded-icon' : 'rounded-icon-lg'
  const iconSize = size === 32 ? 16 : size === 64 ? 32 : 24
  
  const bgClass = useGradient 
    ? 'bg-gradient-icon' 
    : colorClasses[color]

  return (
    <motion.div
      className={`
        ${sizeClass} 
        ${radiusClass} 
        ${bgClass}
        flex items-center justify-center
        transition-transform duration-200
        ${className}
      `}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon size={iconSize} className="text-white" />
    </motion.div>
  )
}


