'use client'

import React from 'react'

interface EmptyStateProps {
  title?: string
  message?: string
  icon?: React.ComponentType<{ className?: string; size?: number }>
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No data available',
  message = 'This section is currently empty.',
  icon: Icon,
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8">
      {Icon && (
        <div className="mb-4 text-gray-600">
          <Icon size={48} />
        </div>
      )}
      <h3 className="card-title mb-2">{title}</h3>
      <p className="body-text text-gray-400">{message}</p>
    </div>
  )
}


