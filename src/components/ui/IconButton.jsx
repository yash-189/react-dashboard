import { cn } from '@/lib/utils'
import React from 'react'

const IconButton = ({ icon: Icon, onClick, className, children,size='size-5' }) => (
  <button 
    onClick={onClick}
    className={cn("p-1 rounded flex justify-center items-center", className)}
  >
    <Icon className={size} />
    {children}
  </button>
)

export default IconButton