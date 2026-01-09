'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../SectionHeader'
import { MapIcon } from '@/icons/MapIcon'
import type { PortfolioInitiative } from '@/lib/roadmap-data'

interface PortfolioRoadmapOverviewSlideProps {
  initiatives: PortfolioInitiative[]
}

export const PortfolioRoadmapOverviewSlide: React.FC<PortfolioRoadmapOverviewSlideProps> = ({ initiatives }) => {
  const timePeriods: Array<'Now' | 'Next' | 'Later' | 'Future'> = ['Now', 'Next', 'Later', 'Future']
  
  const initiativesByPeriod = timePeriods.map(period => ({
    period,
    count: initiatives.filter(i => i.timePeriod === period).length,
    statuses: {
      Building: initiatives.filter(i => i.timePeriod === period && i.status === 'Building').length,
      Validating: initiatives.filter(i => i.timePeriod === period && i.status === 'Validating').length,
      Exploring: initiatives.filter(i => i.timePeriod === period && i.status === 'Exploring').length,
      Proposed: initiatives.filter(i => i.timePeriod === period && i.status === 'Proposed').length,
    },
  }))

  return (
    <div className="slide-bg min-h-screen p-slide flex flex-col">
      <SectionHeader 
        icon={MapIcon} 
        label="PORTFOLIO ROADMAP" 
        className="mb-12"
      />

      <div className="flex-1 flex items-center">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiativesByPeriod.map((period, index) => (
              <motion.div
                key={period.period}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="card-dark p-6"
              >
                <h3 className="card-title text-teal mb-4">{period.period}</h3>
                <div className="text-4xl font-bold mb-4">{period.count}</div>
                <div className="space-y-2">
                  {period.statuses.Building > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Building</span>
                      <span className="text-teal">{period.statuses.Building}</span>
                    </div>
                  )}
                  {period.statuses.Validating > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Validating</span>
                      <span className="text-yellow">{period.statuses.Validating}</span>
                    </div>
                  )}
                  {period.statuses.Exploring > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Exploring</span>
                      <span className="text-orange">{period.statuses.Exploring}</span>
                    </div>
                  )}
                  {period.statuses.Proposed > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Proposed</span>
                      <span className="text-gray-500">{period.statuses.Proposed}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


