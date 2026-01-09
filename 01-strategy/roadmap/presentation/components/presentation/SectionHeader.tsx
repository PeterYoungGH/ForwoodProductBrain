'use client'

import React from 'react'
import { IconSquare, IconColor } from './IconSquare'

interface SectionHeaderProps {
  icon: React.ComponentType<{ className?: string; size?: number }>
  label: string
  iconColor?: IconColor
  className?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  icon,
  label,
  iconColor = 'teal',
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <IconSquare icon={icon} color={iconColor} size={32} />
      <span className="label-text text-white">{label}</span>
    </div>
  )
}


