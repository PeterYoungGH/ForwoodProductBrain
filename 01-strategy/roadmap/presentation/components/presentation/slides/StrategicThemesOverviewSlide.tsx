'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../SectionHeader'
import { MapIcon } from '@/icons/MapIcon'
import { IconSquare } from '../IconSquare'
import { getIcon } from '@/lib/icon-mapping'
import type { StrategicTheme } from '@/lib/roadmap-data'

interface StrategicThemesOverviewSlideProps {
  themes: StrategicTheme[]
}

export const StrategicThemesOverviewSlide: React.FC<StrategicThemesOverviewSlideProps> = ({ themes }) => {
  return (
    <div className="slide-bg min-h-screen p-slide flex flex-col">
      <SectionHeader 
        icon={MapIcon} 
        label="STRATEGIC THEMES" 
        className="mb-12"
      />

      <div className="flex-1 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-card-gap w-full max-w-6xl mx-auto">
          {themes.map((theme, index) => {
            const Icon = getIcon(theme.id)
            const colors: Array<'teal' | 'yellow' | 'gold' | 'orange'> = ['teal', 'yellow', 'gold', 'orange']
            const color = colors[index % colors.length]

            return (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="card-dark card-border-teal border-2 p-6 flex flex-col items-center gap-4 hover:border-teal-light transition-colors"
              >
                <IconSquare icon={Icon} color={color} size={48} />
                <div className="text-center">
                  <h3 className="label-text text-teal mb-2">ROADMAP {String.fromCharCode(64 + theme.number)}</h3>
                  <h4 className="card-title mb-2">{theme.title}</h4>
                  <p className="body-text text-sm line-clamp-2">{theme.vision}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}


