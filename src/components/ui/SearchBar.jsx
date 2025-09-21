import React from 'react'
import { SearchIcon } from '../icons'
import { cn } from '@/lib/utils'


const SearchBar = ({ 
  placeholder = "Search", 
  shortcut = "⌘/",
  showShortcut = true,
  className = "",
  iconClassName = "",
  shortcutClassName = "",
  ...props 
}) => (
  <div className="relative">
    <SearchIcon 
      className={cn(
        "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400", 
        iconClassName
      )} 
    />
    <input
      type="text"
      placeholder={placeholder}
      className={cn(
        "w-full h-7 pl-8 bg-foreground/5 rounded text-sm placeholder-foreground/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
        showShortcut ? "pr-12" : "pr-3",
        className
      )}
      {...props}
    />
    {showShortcut && (
      <kbd 
        className={cn(
          "absolute right-3 top-1/2 -translate-y-1/2 px-1.5 py-0.5 text-sm text-foreground/20",
          shortcutClassName
        )}
      >
        {shortcut}
      </kbd>
    )}
  </div>
)

export default SearchBar