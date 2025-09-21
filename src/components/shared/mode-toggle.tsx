import { useState } from "react"
import { SunIcon } from '../icons'
import { MoonIcon } from '@heroicons/react/24/outline'
import { useTheme } from "@/contexts/ThemeContext"
import IconButton from '../ui/IconButton'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [isAnimating, setIsAnimating] = useState(false)
  
  const isDark = theme === 'dark'
  
  const handleToggle = () => {
    setIsAnimating(true)
    
    // Toggle theme
    setTheme(isDark ? 'light' : 'dark')
    
    // Reset animation after transition
    setTimeout(() => setIsAnimating(false), 300)
  }

  // Create a combined icon component that handles the animation
  const ThemeIcon = () => (
    <div className="relative">
      <SunIcon 
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 ease-in-out ${
          isDark 
            ? 'scale-0 rotate-90 opacity-0' 
            : `scale-100 rotate-0 opacity-100 ${isAnimating ? 'animate-spin' : ''}`
        }`}
      />
      <MoonIcon 
        className={`absolute top-0 left-0 h-[1.2rem] w-[1.2rem] transition-all duration-300 ease-in-out ${
          isDark 
            ? `scale-100 rotate-0 opacity-100 ${isAnimating ? 'animate-spin' : ''}` 
            : 'scale-0 -rotate-90 opacity-0'
        }`}
      />
    </div>
  )

  return (
    <IconButton 
      icon={ThemeIcon} 
      onClick={handleToggle}
    />
  )
}