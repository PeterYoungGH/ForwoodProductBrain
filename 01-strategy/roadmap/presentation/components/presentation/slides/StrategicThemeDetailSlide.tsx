'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../SectionHeader'
import { IconSquare } from '../IconSquare'
import { getIcon } from '@/lib/icon-mapping'
import type { StrategicTheme } from '@/lib/roadmap-data'

interface StrategicThemeDetailSlideProps {
  theme: StrategicTheme
}

export const StrategicThemeDetailSlide: React.FC<StrategicThemeDetailSlideProps> = ({ theme }) => {
  const Icon = getIcon(theme.id)
  const colors: Array<'teal' | 'yellow' | 'gold' | 'orange'> = ['teal', 'yellow', 'gold', 'orange']
  const color = colors[(theme.number - 1) % colors.length]

  return (
    <div className="slide-bg min-h-screen p-slide flex flex-col">
      <SectionHeader 
        icon={Icon} 
        label={`ROADMAP ${String.fromCharCode(64 + theme.number)}`}
        iconColor={color}
        className="mb-12"
      />

      <div className="flex-1 flex flex-col justify-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="hero-title mb-4">{theme.title}</h2>
          <p className="section-title text-teal mb-6">{theme.vision}</p>
        </motion.div>

        {theme.whyThisMatters.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <h3 className="card-title mb-4">Why This Matters</h3>
            <ul className="space-y-3">
              {theme.whyThisMatters.map((voc, index) => (
                <li key={index} className="body-text pl-4 border-l-2 border-teal/30">
                  <span className="font-semibold text-teal">{voc.type}:</span>{' '}
                  {voc.quote}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {theme.strategicInitiatives.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-8"
          >
            <h3 className="card-title mb-4">Strategic Initiatives</h3>
            <ul className="space-y-2">
              {theme.strategicInitiatives.map((initiative, index) => (
                <li key={index} className="body-text flex items-start gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>{initiative}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="card-dark p-6">
            <h4 className="card-title text-teal mb-2">Desired Outcome</h4>
            <p className="body-text">{theme.desiredOutcome}</p>
          </div>
          <div className="card-dark p-6">
            <h4 className="card-title text-teal mb-2">Business Impact</h4>
            <p className="body-text">{theme.businessImpact}</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


