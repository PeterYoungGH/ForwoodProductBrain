'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { IconSquare } from '../IconSquare'
import { ShieldIcon } from '@/icons/ShieldIcon'

export const TitleSlide: React.FC = () => {
  return (
    <div className="slide-bg min-h-screen flex flex-col items-center justify-center p-slide relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-8"
      >
        <IconSquare 
          icon={ShieldIcon} 
          color="teal" 
          size={64}
          useGradient={true}
        />
        
        <div className="text-center">
          <h1 className="label-text text-teal mb-4">VISION & EXECUTIVE ROADMAP</h1>
          <h2 className="hero-title">
            <span className="text-gradient-teal">Forwood</span>{' '}
            <span className="text-white">One</span>
          </h2>
          <p className="body-text mt-6 max-w-2xl">
            Transforming critical risk management into an intelligent, unified safety platform
          </p>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-24 text-sm text-gray-400"
      >
        Use arrow keys or click to navigate →
      </motion.p>
    </div>
  )
}


