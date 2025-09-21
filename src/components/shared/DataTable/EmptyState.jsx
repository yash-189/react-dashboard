"use client"

import { FileX, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EmptyState({
  title = "No data found",
  description = "Get started by adding your first item.",
  icon: Icon = FileX,
  actionLabel,
  onAction,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
        <Icon className="h-6 w-6 text-gray-400" />
      </div>
      <h3 className="mt-4 text-sm font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-500 max-w-sm">{description}</p>
      {actionLabel && onAction && (
        <Button onClick={onAction} className="mt-6" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          {actionLabel}
        </Button>
      )}
    </div>
  )
}
