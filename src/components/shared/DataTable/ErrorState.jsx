"use client"

import { AlertCircle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ErrorState({
  title = "Something went wrong",
  description = "We encountered an error while loading your data.",
  onRetry,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
        <AlertCircle className="h-6 w-6 text-red-600" />
      </div>
      <h3 className="mt-4 text-sm font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-500 max-w-sm">{description}</p>
      {onRetry && (
        <Button onClick={onRetry} variant="outline" className="mt-6 bg-transparent" size="sm">
          <RefreshCw className="h-4 w-4 mr-2" />
          Try again
        </Button>
      )}
    </div>
  )
}
