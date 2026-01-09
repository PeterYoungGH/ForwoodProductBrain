'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { LightningIcon } from '@/icons/LightningIcon'

interface ImpactCardProps {
  impactStatement: string
  highlightedPhrase: string
  className?: string
}

export const ImpactCard: React.FC<ImpactCardProps> = ({
  impactStatement,
  highlightedPhrase,
  className = '',
}) => {
  const parts = impactStatement.split(highlightedPhrase)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`
        card-dark
        border-2 border-gold
        p-6
        flex items-center gap-4
        ${className}
      `}
    >
      <LightningIcon size={32} className="text-gold flex-shrink-0" />
      <div className="flex-1">
        <span className="body-text font-bold text-gold">Impact</span>
        <p className="body-text mt-2">
          {parts[0]}
          <span className="font-bold text-gold">{highlightedPhrase}</span>
          {parts[1]}
        </p>
      </div>
    </motion.div>
  )
}


