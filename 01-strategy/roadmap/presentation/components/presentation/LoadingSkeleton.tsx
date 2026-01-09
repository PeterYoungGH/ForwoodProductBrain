'use client'

import React from 'react'

export const LoadingSkeleton: React.FC = () => {
  return (
    <div className="slide-bg min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-pulse">
          <div className="w-16 h-16 bg-teal/20 rounded-icon-lg mx-auto mb-4" />
          <div className="h-4 bg-gray-700 rounded w-48 mx-auto mb-2" />
          <div className="h-4 bg-gray-700 rounded w-32 mx-auto" />
        </div>
      </div>
    </div>
  )
}


