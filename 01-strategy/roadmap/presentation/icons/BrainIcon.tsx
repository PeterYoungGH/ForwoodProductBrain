import React from 'react'

interface BrainIconProps {
  className?: string
  size?: number
}

export const BrainIcon: React.FC<BrainIconProps> = ({ 
  className = '', 
  size = 24 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44L6.5 20.5a2.5 2.5 0 0 1-4.96-.44v-15A2.5 2.5 0 0 1 4.5 2h5z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44L17.5 20.5a2.5 2.5 0 0 0 4.96-.44v-15A2.5 2.5 0 0 0 19.5 2h-5z" />
    </svg>
  )
}


