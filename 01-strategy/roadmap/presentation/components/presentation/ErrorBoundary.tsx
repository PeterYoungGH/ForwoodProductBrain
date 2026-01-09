'use client'

import React from 'react'

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="slide-bg min-h-screen flex items-center justify-center p-8">
            <div className="text-center max-w-2xl">
              <h1 className="section-title text-red-400 mb-4">Something went wrong</h1>
              <p className="body-text mb-6">
                {this.state.error?.message || 'An unexpected error occurred while loading the presentation.'}
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-teal text-white rounded-lg hover:bg-teal-light transition-colors"
              >
                Reload Page
              </button>
            </div>
          </div>
        )
      )
    }

    return this.props.children
  }
}


