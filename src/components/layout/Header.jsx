import React from 'react';
import { 
  Squares2X2Icon, 
  MagnifyingGlassIcon,
  
} from '@heroicons/react/24/outline';

import SearchBar from '../ui/SearchBar'
import IconButton from '../ui/IconButton'  
import Breadcrumb from '../ui/Breadcrumb'
import { ClockIcon, NotificationIcon, StarIcon, SunIcon, ToggleIcon } from '../icons';
import { ModeToggle } from '../shared/mode-toggle';
import SidebarToggle from '../SidebarToggle';
import RightSidebarToggle from '../RightSidebarToggle';


const Header = () => {
  const breadcrumbItems = [
    { name: "Dashboards", active: false },
    { name: "Default", active: true }
  ]

  return (
    <header className="h-[4.25rem] px-7 py-5 bg-background border-b border-foreground/20 flex items-center justify-between">
      <div className="flex items-center gap-2">
         <SidebarToggle/>
      
        <IconButton icon={StarIcon} />
        <Breadcrumb items={breadcrumbItems} />
      </div>

      

      <div className="flex items-center gap-5">
        <div className="flex-1 max-w-[10rem]">
        <SearchBar />
      </div>
      <div className='flex items-center gap-2'>
        <ModeToggle/>
        <IconButton icon={ClockIcon} />
        <IconButton icon={NotificationIcon}/>
        <RightSidebarToggle/>
        </div>
      </div>
    </header>
  )
}

export default Header;