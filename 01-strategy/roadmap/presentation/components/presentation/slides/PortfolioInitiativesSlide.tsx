'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../SectionHeader'
import { MapIcon } from '@/icons/MapIcon'
import { IconSquare } from '../IconSquare'
import { getIcon } from '@/lib/icon-mapping'
import { EmptyState } from '../EmptyState'
import type { PortfolioInitiative } from '@/lib/roadmap-data'

interface PortfolioInitiativesSlideProps {
  initiatives: PortfolioInitiative[]
}

const statusColors = {
  Building: 'text-teal',
  Validating: 'text-yellow',
  Exploring: 'text-orange',
  Proposed: 'text-gray-400',
}

export const PortfolioInitiativesSlide: React.FC<PortfolioInitiativesSlideProps> = ({ initiatives }) => {
  const timePeriods: Array<'Now' | 'Next' | 'Later' | 'Future'> = ['Now', 'Next', 'Later', 'Future']

  if (initiatives.length === 0) {
    return (
      <div className="slide-bg min-h-screen p-slide">
        <SectionHeader icon={MapIcon} label="PORTFOLIO INITIATIVES" className="mb-12" />
        <EmptyState 
          title="No initiatives available"
          message="Portfolio initiatives will appear here once they are defined."
        />
      </div>
    )
  }

  return (
    <div className="slide-bg min-h-screen p-slide flex flex-col">
      <SectionHeader 
        icon={MapIcon} 
        label="PORTFOLIO INITIATIVES" 
        className="mb-12"
      />

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          {timePeriods.map((period, periodIndex) => {
            const periodInitiatives = initiatives.filter(i => i.timePeriod === period)
            if (periodInitiatives.length === 0) return null

            return (
              <motion.div
                key={period}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: periodIndex * 0.1, duration: 0.4 }}
              >
                <h2 className="section-title text-teal mb-6">{period}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {periodInitiatives.map((initiative, index) => {
                    const Icon = getIcon(initiative.id)

                    return (
                      <motion.div
                        key={initiative.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: (periodIndex * 0.1) + (index * 0.05), duration: 0.4 }}
                        className="card-dark p-6"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <IconSquare icon={Icon} color="teal" size={48} />
                          <div className="flex-1">
                            <h3 className="card-title mb-2">{initiative.name}</h3>
                            <span className={`text-sm font-medium ${statusColors[initiative.status]}`}>
                              {initiative.status}
                            </span>
                          </div>
                        </div>
                        <p className="body-text text-sm mb-4 line-clamp-2">{initiative.problemStatement}</p>
                        {initiative.expectedOutcome && (
                          <div className="mt-4 pt-4 border-t border-gray-700">
                            <p className="label-text text-gray-400 mb-1">Expected Outcome</p>
                            <p className="body-text text-sm">{initiative.expectedOutcome}</p>
                          </div>
                        )}
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}


