import React from "react"

const LoadingSpinner = () => {
  return (
    <div className="h-[80vh] flex overflow-hidden bg-background">
      
      <div className="flex-1 flex flex-col min-w-0">
        
        <main className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-blue-100 dark:border-blue-900 rounded-full animate-spin">
                <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-medium text-gray-900 dark:text-gray-100">Loading</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Please wait...</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default LoadingSpinner