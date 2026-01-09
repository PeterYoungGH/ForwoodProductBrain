'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../SectionHeader'
import { ChecklistIcon } from '@/icons/ChecklistIcon'
import { IconSquare } from '../IconSquare'
import { getIcon } from '@/lib/icon-mapping'
import type { StrategicPillar } from '@/lib/roadmap-data'

interface StrategicPillarsSlideProps {
  pillars: StrategicPillar[]
}

export const StrategicPillarsSlide: React.FC<StrategicPillarsSlideProps> = ({ pillars }) => {
  return (
    <div className="slide-bg min-h-screen p-slide flex flex-col">
      <SectionHeader 
        icon={ChecklistIcon} 
        label="CORE PRINCIPLES" 
        className="mb-12"
      />

      <div className="flex-1 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-card-gap w-full max-w-5xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = getIcon(pillar.id)
            const colors: Array<'teal' | 'yellow' | 'gold' | 'orange'> = ['teal', 'yellow', 'gold', 'orange']
            const color = colors[index % colors.length]

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className={`
                  card-dark 
                  border-2 
                  ${color === 'teal' ? 'border-teal' : color === 'yellow' ? 'border-yellow' : color === 'gold' ? 'border-gold' : 'border-orange'}
                  p-8
                  flex flex-col items-center gap-4
                `}
              >
                <IconSquare icon={Icon} color={color} size={64} />
                <h3 className="card-title text-center">{pillar.name}</h3>
                <p className="body-text text-center">{pillar.description}</p>
                {pillar.themeAlignment.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-700 w-full">
                    <p className="label-text text-gray-400 mb-2">Embedded in:</p>
                    <p className="body-text text-sm">{pillar.themeAlignment.join(', ')}</p>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}


