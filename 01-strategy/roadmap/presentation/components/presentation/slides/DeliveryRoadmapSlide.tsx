'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../SectionHeader'
import { MapIcon } from '@/icons/MapIcon'
import { EmptyState } from '../EmptyState'
import type { DeliveryRelease } from '@/lib/roadmap-data'

interface DeliveryRoadmapSlideProps {
  releases: DeliveryRelease[]
}

const statusColors = {
  'Ready to Release': 'text-teal',
  'In Progress': 'text-yellow',
  'In QA': 'text-orange',
  'Needs Clarification': 'text-gray-400',
  'Blocked': 'text-red-400',
}

export const DeliveryRoadmapSlide: React.FC<DeliveryRoadmapSlideProps> = ({ releases }) => {
  if (releases.length === 0) {
    return (
      <div className="slide-bg min-h-screen p-slide">
        <SectionHeader icon={MapIcon} label="DELIVERY ROADMAP" className="mb-12" />
        <EmptyState 
          title="No releases scheduled"
          message="Delivery releases will appear here once they are defined."
        />
      </div>
    )
  }

  const releasesByStatus = releases.reduce((acc, release) => {
    if (!acc[release.status]) {
      acc[release.status] = []
    }
    acc[release.status].push(release)
    return acc
  }, {} as Record<DeliveryRelease['status'], DeliveryRelease[]>)

  const statusOrder: DeliveryRelease['status'][] = [
    'Ready to Release',
    'In Progress',
    'In QA',
    'Needs Clarification',
    'Blocked',
  ]

  return (
    <div className="slide-bg min-h-screen p-slide flex flex-col">
      <SectionHeader 
        icon={MapIcon} 
        label="DELIVERY ROADMAP" 
        className="mb-12"
      />

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-8">
          {statusOrder.map((status, statusIndex) => {
            const statusReleases = releasesByStatus[status] || []
            if (statusReleases.length === 0) return null

            return (
              <motion.div
                key={status}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: statusIndex * 0.1, duration: 0.4 }}
              >
                <h2 className={`section-title ${statusColors[status]} mb-4`}>{status}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {statusReleases.map((release, index) => (
                    <motion.div
                      key={release.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (statusIndex * 0.1) + (index * 0.05), duration: 0.4 }}
                      className="card-dark p-4"
                    >
                      <h3 className="card-title mb-2">{release.name}</h3>
                      {release.targetWindow && (
                        <p className="body-text text-sm text-gray-400">{release.targetWindow}</p>
                      )}
                      {release.description && (
                        <p className="body-text text-sm mt-2 line-clamp-2">{release.description}</p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}


