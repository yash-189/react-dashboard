import { Outlet, useLocation } from 'react-router'
import Sidebar from './Sidebar'
import Header from './Header'
import RightSidebar from '../right-side-panel/RightSidePanel'
import { useSidebar } from '@/hooks/useSidebar'
import { cn } from '@/lib/utils'

const Layout = () => {
  const location = useLocation()
  const isDashboard = location.pathname === '/' || location.pathname === '/dashboard'
  const { isOpen, isRightOpen } = useSidebar()

  return (
    <div className="h-screen flex overflow-hidden">
      <Sidebar />
     
      <div className={cn(
        "flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out",
        "md:ml-0",
        isOpen && "md:ml-[var(--sidebar-width)]"
      )}>
        <div className="flex-shrink-0">
          <Header />
        </div>
       
        <div className="flex flex-1 overflow-hidden">
          <main className="flex-1 overflow-y-auto">
            <div className="p-4 sm:p-6 lg:p-7">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
     
      {isRightOpen && (
        <div className="hidden md:block w-80 flex-shrink-0">
          <RightSidebar />
        </div>
      )}
      
      <div className="md:hidden">
        <RightSidebar />
      </div>
    </div>
  )
}

export default Layout