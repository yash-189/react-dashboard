import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import React, { useState } from "react"
import { ArrowUpDown } from "lucide-react"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { DataTableHeader } from "./DataTableHeader"
import { ErrorState } from "./ErrorState"
import { EmptyState } from "./EmptyState"
import { DataTablePagination } from "./DataTablePagination"
import Typography from "@/components/ui/Typography"
import Checkbox from "@/components/ui/Checkbox"
import { DateCell } from "./DateCell"
import { StatusBadge } from "./StatusBadge"

function TableLoadingSkeleton({ rows, columns }) {
  return (
    <div className="w-full">
      <div className="h-12 bg-gray-100 rounded-sm mb-4 animate-pulse"></div>
      <div className="border rounded-sm">
        <div className="h-10 bg-gray-50 border-b"></div>
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="h-12 border-b border-gray-100 animate-pulse">
            <div className="flex items-center h-full px-4 gap-4">
              {Array.from({ length: columns }).map((_, j) => (
                <div key={j} className="h-4 bg-gray-200 rounded flex-1"></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function DataTable({
  columns,
  data,
  title,
  onAdd,
  searchPlaceholder = "Search...",
  isLoading = false,
  error = null,
  onRetry,
  emptyStateProps = {},
  showCheckbox = true,
  showStatus = true,
  showDate = true,
  showActions = true,
}) {
  const [sorting, setSorting] = useState([])
  const [columnFilters, setColumnFilters] = useState([])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [rowSelection, setRowSelection] = useState({})
  const [globalFilter, setGlobalFilter] = useState("")

  const buildColumns = () => {
    let builtColumns = []

    if (showCheckbox) {
      builtColumns.push({
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
            className="translate-y-[2px]"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
            className="translate-y-[2px]"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      })
    }

    const processedColumns = columns.map(column => {
      if (column.accessorKey === "date" && showDate && !column.cell) {
        return {
          ...column,
          header: ({ column: col }) => (
            <div 
              className="cursor-pointer flex items-center hover:text-foreground/80"
              onClick={() => col.toggleSorting(col.getIsSorted() === "asc")}
            >
              <Typography variant="table-header">
                {typeof column.header === 'string' ? column.header : 'Date'}
              </Typography>
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </div>
          ),
          cell: ({ row }) => <DateCell date={row.getValue(column.accessorKey)} />,
          enableSorting: true,
        }
      }

      if (column.accessorKey === "status" && showStatus && !column.cell) {
        return {
          ...column,
          header: ({ column: col }) => (
            <div 
              className="cursor-pointer flex items-center hover:text-foreground/80"
              onClick={() => col.toggleSorting(col.getIsSorted() === "asc")}
            >
              <Typography variant="table-header">
                {typeof column.header === 'string' ? column.header : 'Status'}
              </Typography>
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </div>
          ),
          cell: ({ row }) => <StatusBadge status={row.getValue(column.accessorKey)} />,
          enableSorting: true,
        }
      }

      if (typeof column.header === "string") {
        return {
          ...column,
          header: ({ column: col }) => (
            <div 
              className="cursor-pointer flex items-center hover:text-foreground/80"
              onClick={() => col.toggleSorting(col.getIsSorted() === "asc")}
            >
              <Typography variant="table-header">{column.header}</Typography>
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </div>
          ),
          enableSorting: true,
        }
      }

      return column
    })

    builtColumns = [...builtColumns, ...processedColumns]
    return builtColumns
  }

  const table = useReactTable({
    data: data || [],
    columns: buildColumns(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: (row, columnId, value) => {
      const search = value.toLowerCase()
      const cellValue = row.getValue(columnId)
      
      if (cellValue == null) return false
      
      return String(cellValue)
        .toLowerCase()
        .includes(search)
    },
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
    },
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  })

  if (isLoading) {
    return <TableLoadingSkeleton rows={10} columns={buildColumns().length} />
  }

  if (error) {
    return (
      <div className="w-full">
        <DataTableHeader
          title={title}
          onAdd={onAdd}
          searchValue={globalFilter}
          onSearchChange={setGlobalFilter}
          searchPlaceholder={searchPlaceholder}
          table={table}
        />
        <ErrorState
          title="Failed to load data"
          description={error.message || "Something went wrong while loading your data."}
          onRetry={onRetry}
        />
      </div>
    )
  }

  const hasData = table.getRowModel().rows?.length > 0
  const hasSearchResults = globalFilter && !hasData

  return (
    <div className="w-full gap-3 flex flex-col">
      <DataTableHeader
        title={title}
        onAdd={onAdd}
        searchValue={globalFilter}
        onSearchChange={setGlobalFilter}
        searchPlaceholder={searchPlaceholder}
        table={table}
      />

      <div className="h-full flex flex-col gap-3 min-h-[440px] ">
        {!hasData && !globalFilter ? (
          <div className="flex-1 flex items-center justify-center">
            <EmptyState
              title={emptyStateProps.title || `No ${title?.toLowerCase() || "items"} yet`}
              description={
                emptyStateProps.description ||
                `Get started by adding your first ${title?.toLowerCase()?.slice(0, -1) || "item"}.`
              }
              actionLabel={emptyStateProps.actionLabel || `Add ${title?.toLowerCase()?.slice(0, -1) || "item"}`}
              onAction={onAdd}
              {...emptyStateProps}
            />
          </div>
        ) : hasSearchResults ? (
          <div className="flex-1 flex items-center justify-center">
            <EmptyState
              title="No results found"
              description={`No ${title?.toLowerCase() || "items"} match your search for "${globalFilter}".`}
              actionLabel={null}
            />
          </div>
        ) : (
          <div className="flex-1 overflow-auto  rounded-sm">
            <Table>
              <TableHeader className="border-b border-foreground/20 ">
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id} className="hover:bg-transparent">
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id} className="h-10 ">
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className="hover:bg-gray-50/50 border-b border-foreground/5 cursor-pointer"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="h-10">
                        <Typography variant="table-cell">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        {hasData && (
          <div className="">
            <DataTablePagination table={table} />
          </div>
        )}
      </div>
    </div>
  )
}