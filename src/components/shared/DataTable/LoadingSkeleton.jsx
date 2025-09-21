import { Skeleton } from "@/components/ui/skeleton"

export function TableLoadingSkeleton({ rows = 5, columns = 6 }) {
  return (
    <div className="w-full bg-white rounded-lg border">
      {/* Header skeleton */}
      <div className="flex items-center justify-between p-6 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-8 w-8 rounded" />
        </div>
        <Skeleton className="h-9 w-64" />
      </div>

      {/* Table skeleton */}
      <div className="overflow-hidden">
        {/* Table header skeleton */}
        <div className="border-b border-gray-100 px-6 py-3">
          <div className="flex items-center gap-6">
            {Array.from({ length: columns }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-16" />
            ))}
          </div>
        </div>

        {/* Table rows skeleton */}
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="border-b border-gray-50 px-6 py-4">
            <div className="flex items-center gap-6">
              <Skeleton className="h-4 w-4 rounded" />
              <Skeleton className="h-4 w-20" />
              <div className="flex items-center gap-3">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-4 w-24" />
              </div>
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination skeleton */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
        <Skeleton className="h-4 w-32" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-8 w-8 rounded" />
        </div>
      </div>
    </div>
  )
}
