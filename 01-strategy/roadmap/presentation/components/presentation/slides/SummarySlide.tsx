'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { IconSquare } from '../IconSquare'
import { ShieldIcon } from '@/icons/ShieldIcon'

export const SummarySlide: React.FC = () => {
  return (
    <div className="slide-bg min-h-screen flex flex-col items-center justify-center p-slide">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto"
      >
        <IconSquare 
          icon={ShieldIcon} 
          color="teal" 
          size={64}
          useGradient={true}
          className="mx-auto mb-8"
        />

        <h1 className="hero-title mb-6">
          <span className="text-gradient-teal">Forwood One</span>
        </h1>

        <p className="section-title mb-8">
          Transforming critical risk management into an intelligent, unified safety platform
        </p>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="body-text text-gray-400">
            Thank you for reviewing our vision and roadmap
          </p>
        </div>
      </motion.div>
    </div>
  )
}


