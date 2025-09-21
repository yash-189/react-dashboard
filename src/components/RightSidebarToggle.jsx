import { useSidebar } from '@/hooks/useSidebar'
import { cn } from '@/lib/utils'
import { ToggleIcon } from './icons'
import IconButton from './ui/IconButton'

const RightSidebarToggle = ({ className, ...props }) => {
  const { toggleRightSidebar } = useSidebar()
 
  return (
    <IconButton 
      icon={ToggleIcon}
      onClick={toggleRightSidebar}
      className={cn(className)}
      {...props}
    />
  )
}

export default RightSidebarToggle