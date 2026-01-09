'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { IconSquare, IconColor } from './IconSquare'

interface InfoCardProps {
  icon: React.ComponentType<{ className?: string; size?: number }>
  title: string
  description: string
  iconColor?: IconColor
  borderColor?: 'teal' | 'yellow' | 'gold'
  className?: string
}

export const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  title,
  description,
  iconColor = 'teal',
  borderColor = 'teal',
  className = '',
}) => {
  const borderClass = borderColor === 'teal' 
    ? 'border-teal' 
    : borderColor === 'yellow' 
    ? 'border-yellow' 
    : 'border-gold'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`
        card-dark
        ${borderClass}
        border-2
        p-8
        flex flex-col items-center gap-4
        ${className}
      `}
    >
      <IconSquare icon={icon} color={iconColor} size={64} />
      <h3 className={`card-title text-${borderColor} text-center`}>{title}</h3>
      <p className="body-text text-center max-w-2xl">{description}</p>
    </motion.div>
  )
}


