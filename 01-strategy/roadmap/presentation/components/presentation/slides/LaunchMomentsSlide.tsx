'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../SectionHeader'
import { RocketIcon } from '@/icons/RocketIcon'
import { EmptyState } from '../EmptyState'
import type { LaunchMoment } from '@/lib/roadmap-data'

interface LaunchMomentsSlideProps {
  launchMoments: LaunchMoment[]
}

export const LaunchMomentsSlide: React.FC<LaunchMomentsSlideProps> = ({ launchMoments }) => {
  if (launchMoments.length === 0) {
    return (
      <div className="slide-bg min-h-screen p-slide">
        <SectionHeader icon={RocketIcon} label="LAUNCH MOMENTS" className="mb-12" />
        <EmptyState 
          title="No launch moments scheduled"
          message="Launch moments will appear here once they are defined."
        />
      </div>
    )
  }

  return (
    <div className="slide-bg min-h-screen p-slide flex flex-col">
      <SectionHeader 
        icon={RocketIcon} 
        label="LOOKING AHEAD" 
        className="mb-12"
      />

      <div className="flex-1 flex items-center">
        <div className="w-full max-w-5xl mx-auto space-y-6">
          {launchMoments.map((moment, index) => (
            <motion.div
              key={moment.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="card-dark border-2 border-gold p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                    <RocketIcon size={24} className="text-gold" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="card-title">{moment.name}</h3>
                    <span className="label-text text-gold">{moment.targetDate}</span>
                  </div>
                  <p className="body-text mb-4">{moment.keyMessage}</p>
                  {moment.components.length > 0 && (
                    <div className="mb-4">
                      <p className="label-text text-gray-400 mb-2">Components</p>
                      <div className="flex flex-wrap gap-2">
                        {moment.components.map((component, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-800 rounded-full text-sm body-text"
                          >
                            {component}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-gray-400">Target Audience:</span>
                    <span className="body-text">{moment.targetAudience}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}


