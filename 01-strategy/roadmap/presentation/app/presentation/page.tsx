import { RoadmapPresentation } from '@/components/presentation/RoadmapPresentation'
import { loadRoadmapData } from '@/lib/roadmap-parser'
import { LoadingSkeleton } from '@/components/presentation/LoadingSkeleton'
import { ErrorBoundary } from '@/components/presentation/ErrorBoundary'

export default async function PresentationPage() {
  let roadmapData
  
  try {
    roadmapData = await loadRoadmapData()
  } catch (error) {
    console.error('Failed to load roadmap data:', error)
    return (
      <ErrorBoundary>
        <div className="slide-bg min-h-screen flex items-center justify-center p-8">
          <div className="text-center max-w-2xl">
            <h1 className="section-title text-red-400 mb-4">Failed to load roadmap</h1>
            <p className="body-text mb-6">
              {error instanceof Error ? error.message : 'An error occurred while loading the roadmap data.'}
            </p>
            <p className="body-text text-sm text-gray-400">
              Please check that the roadmap markdown files exist and are properly formatted.
            </p>
          </div>
        </div>
      </ErrorBoundary>
    )
  }
  
  return (
    <ErrorBoundary>
      <RoadmapPresentation data={roadmapData} />
    </ErrorBoundary>
  )
}

