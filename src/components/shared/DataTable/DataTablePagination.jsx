"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Typography from "@/components/ui/Typography"

export function DataTablePagination({ table }) {
  const currentPage = table.getState().pagination.pageIndex + 1
  const totalPages = table.getPageCount()
  const canPreviousPage = table.getCanPreviousPage()
  const canNextPage = table.getCanNextPage()
  const selectedRows = table.getFilteredSelectedRowModel().rows.length
  
  const getVisiblePages = () => {
    // Show at least 5 pages if available
    const minPages = Math.min(5, totalPages)
    
    if (totalPages <= 5) {
      // If total pages is 5 or less, show all pages
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }
    
    // Calculate start and end to show 5 pages centered around current page
    let start = Math.max(1, currentPage - 2)
    let end = Math.min(totalPages, start + 4)
    
    // Adjust start if we're near the end
    if (end - start < 4) {
      start = Math.max(1, end - 4)
    }
    
    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  }

  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex-1">
        {selectedRows > 0 && (
          <Typography variant="table-cell" className="text-sm text-muted-foreground">
            {selectedRows} of {table.getFilteredRowModel().rows.length} row(s) selected.
          </Typography>
        )}
      </div>
      
      <div className="flex items-center space-x-2">
        <button
          className="inline-flex items-center justify-center h-7 w-7 hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50"
          onClick={() => table.previousPage()}
          disabled={!canPreviousPage}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        
        {/* Page numbers */}
        <div className="flex items-center space-x-1">
          {getVisiblePages().map((pageNumber) => (
            <button
              key={pageNumber}
              className={`inline-flex items-center justify-center h-7 w-7 rounded-sm transition-colors ${
                pageNumber === currentPage
                  ? 'bg-foreground/5'
                  : ''
              }`}
              onClick={() => table.setPageIndex(pageNumber - 1)}
            >
              <Typography variant="table-cell">
                {pageNumber}
              </Typography>
            </button>
          ))}
        </div>
        
        <button
          className="inline-flex items-center justify-center h-7 w-7 rounded-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50"
          onClick={() => table.nextPage()}
          disabled={!canNextPage}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}