import { createContext, useContext, useState, useEffect } from 'react'

const SidebarContext = createContext()

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768
    }
    return false
  })
  
  const [isRightOpen, setIsRightOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1400
    }
    return false
  })

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }

      if (window.innerWidth >= 1400) {
        setIsRightOpen(true)
      } else {
        setIsRightOpen(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleSidebar = () => setIsOpen(prev => !prev)
  const closeSidebar = () => setIsOpen(false)
  const openSidebar = () => setIsOpen(true)

  const toggleRightSidebar = () => setIsRightOpen(prev => !prev)
  const closeRightSidebar = () => setIsRightOpen(false)
  const openRightSidebar = () => setIsRightOpen(true)

  return (
    <SidebarContext.Provider value={{
      isOpen, 
      toggleSidebar, 
      closeSidebar, 
      openSidebar,
      isRightOpen,
      toggleRightSidebar,
      closeRightSidebar,
      openRightSidebar
    }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}