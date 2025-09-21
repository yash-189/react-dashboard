import React from 'react';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/hooks/useSidebar';
import Notifications from './Notifications';
import Activities from './Activities';
import Contacts from './Contacts';

const RightSidebarOverlay = ({ isOpen, onClose }) => (
    <div 
        className={cn(
            "md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
    />
);

const RightSidebar = () => {
    const { isRightOpen, closeRightSidebar } = useSidebar();

    return (
        <>
            <RightSidebarOverlay isOpen={isRightOpen} onClose={closeRightSidebar} />
            
            <aside className={cn(
                "w-80 bg-background border-l border-foreground/10 h-screen flex flex-col z-50 transition-transform duration-300 ease-in-out",
                "fixed top-0 right-0 md:relative",
                isRightOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
            )}>
                <div className="flex-1 overflow-y-auto p-4">
                    <div className="space-y-6">
                        <Notifications />
                        <Activities />
                        <Contacts />
                    </div>
                </div>
            </aside>
        </>
    );
};

export default RightSidebar;