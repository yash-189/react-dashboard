

import { useSidebar } from '@/hooks/useSidebar'
import { cn } from '@/lib/utils'
import { ToggleIcon } from './icons'
import IconButton from './ui/IconButton'

const SidebarToggle = ({ className, ...props }) => {
  const { toggleSidebar } = useSidebar()
  
  return (
     <IconButton icon={ToggleIcon}
     
      onClick={toggleSidebar}
      className={cn( className)}
      {...props}
     />
    
  )
}

export default SidebarToggle