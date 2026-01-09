'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../SectionHeader'
import { TargetIcon } from '@/icons/TargetIcon'
import { GradientLine } from '../GradientLine'
import type { StrategicVision } from '@/lib/roadmap-data'

interface StrategicVisionSlideProps {
  data: StrategicVision
}

export const StrategicVisionSlide: React.FC<StrategicVisionSlideProps> = ({ data }) => {
  return (
    <div className="slide-bg min-h-screen p-slide flex flex-col">
      <SectionHeader 
        icon={TargetIcon} 
        label="OUR MISSION" 
        className="mb-12"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex flex-col justify-center max-w-4xl mx-auto"
      >
        <p className="section-title mb-8 leading-relaxed">
          {data.mission}
        </p>

        <GradientLine className="mb-8" />

        <SectionHeader 
          icon={TargetIcon} 
          label="OUR VISION" 
          className="mb-6"
        />

        <p className="body-text text-lg leading-relaxed">
          {data.vision}
        </p>
      </motion.div>
    </div>
  )
}


