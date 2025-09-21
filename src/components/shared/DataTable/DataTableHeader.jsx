"use client"

import { Plus, Filter, ArrowUpDown, Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState, useRef, useEffect } from "react"
import IconButton from "@/components/ui/IconButton"
import { MenuIcon, SortIcon } from "@/components/icons"

function CustomDropdown({ trigger, children, isOpen, onOpenChange }) {
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onOpenChange(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onOpenChange])

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={() => onOpenChange(!isOpen)}>
        {trigger}
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-1 w-48 rounded-md border bg-background p-1 text-popover-foreground shadow-md">
          {children}
        </div>
      )}
    </div>
  )
}

function DropdownLabel({ children }) {
  return (
    <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">
      {children}
    </div>
  )
}

function DropdownSeparator() {
  return <div className="my-1 h-px bg-border" />
}

function DropdownItem({ onClick, children }) {
  return (
    <div
      onClick={onClick}
      className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
    >
      {children}
    </div>
  )
}

function DropdownCheckboxItem({ checked, onCheckedChange, children }) {
  return (
    <div
      onClick={() => onCheckedChange(!checked)}
      className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
    >
      <div className="flex h-4 w-4 items-center justify-center mr-2">
        {checked && (
          <div className="h-2 w-2 rounded-sm bg-primary" />
        )}
      </div>
      <span className="capitalize">{children}</span>
    </div>
  )
}

export function DataTableHeader({ title, onAdd, searchValue, onSearchChange, searchPlaceholder = "Search...", table }) {
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [showFilterDropdown, setShowFilterDropdown] = useState(false)
  const [showColumnDropdown, setShowColumnDropdown] = useState(false)

  const handleClearFilters = () => {
    table?.resetColumnFilters()
    onSearchChange?.("")
    setShowFilterDropdown(false)
  }

  return (
    <div className="flex items-center justify-between p-2 bg-primary-light dark:bg-primary-light/5 rounded-sm">
      <div className="flex items-center gap-4">
        {onAdd && (
          <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
            <DialogTrigger asChild>
              <IconButton icon={Plus} size="size-5" />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Order</DialogTitle>
                <DialogDescription>
                  Create a new {title?.toLowerCase().slice(0, -1) || "item"} by filling out the form below.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p className="text-sm text-gray-600">Add form would go here...</p>
                <div className="flex justify-end gap-2 mt-4">
                  <Button variant="outline"  onClick={() => setShowAddDialog(false)}>
                    Cancel
                  </Button>
                  <Button
                  className="bg-primary text-white dark:text-black hover:bg-primary/90"
                    onClick={() => {
                      onAdd()
                      setShowAddDialog(false)
                    }}
                  >
                    Add Order
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}

        <CustomDropdown
          trigger={<IconButton icon={MenuIcon} size="size-5" />}
          isOpen={showFilterDropdown}
          onOpenChange={setShowFilterDropdown}
        >
          <DropdownLabel>Filter Options</DropdownLabel>
          <DropdownSeparator />
          <DropdownItem onClick={() => {
            console.log('Show All')
            setShowFilterDropdown(false)
          }}>
            Show All
          </DropdownItem>
          <DropdownItem onClick={() => {
            console.log('Active Only')
            setShowFilterDropdown(false)
          }}>
            Active Only
          </DropdownItem>
          <DropdownItem onClick={() => {
            console.log('Inactive Only')
            setShowFilterDropdown(false)
          }}>
            Inactive Only
          </DropdownItem>
          <DropdownSeparator />
          <DropdownItem onClick={handleClearFilters}>
            Clear Filters
          </DropdownItem>
        </CustomDropdown>

        {table && (
          <CustomDropdown
            trigger={<IconButton icon={SortIcon} size="size-5" />}
            isOpen={showColumnDropdown}
            onOpenChange={setShowColumnDropdown}
          >
            <DropdownLabel>Toggle Columns</DropdownLabel>
            <DropdownSeparator />
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownCheckboxItem
                  key={column.id}
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => {
                    column.toggleVisibility(!!value)
                  }}
                >
                  {column.id}
                </DropdownCheckboxItem>
              ))}
          </CustomDropdown>
        )}
      </div>
      
      <div className="relative max-w-40">
        <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder={searchPlaceholder}
          value={searchValue || ""}
          onChange={(e) => onSearchChange?.(e.target.value)}
          className="pl-8 bg-background/40 border border-foreground/10"
        />
      </div>
    </div>
  )
}