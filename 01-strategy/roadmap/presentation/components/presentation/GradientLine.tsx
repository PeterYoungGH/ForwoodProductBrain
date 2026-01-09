'use client'

import React from 'react'

interface GradientLineProps {
  className?: string
  height?: number
}

export const GradientLine: React.FC<GradientLineProps> = ({
  className = '',
  height = 2,
}) => {
  return (
    <div
      className={`bg-gradient-orange ${className}`}
      style={{ height: `${height}px` }}
    />
  )
}


