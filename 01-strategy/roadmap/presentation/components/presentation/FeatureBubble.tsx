'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { IconSquare, IconColor } from './IconSquare'

interface FeatureBubbleProps {
  icon: React.ComponentType<{ className?: string; size?: number }>
  title: string
  iconColor?: IconColor
  className?: string
  index?: number
}

export const FeatureBubble: React.FC<FeatureBubbleProps> = ({
  icon,
  title,
  iconColor = 'teal',
  className = '',
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className={`
        card-dark
        flex flex-col items-center gap-3
        p-6
        border-white/20
        hover:border-teal/50
        transition-all duration-200
        ${className}
      `}
    >
      <IconSquare icon={icon} color={iconColor} size={48} />
      <h3 className="card-title text-center">{title}</h3>
    </motion.div>
  )
}


