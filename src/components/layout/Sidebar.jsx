import React, { useState, useEffect } from 'react';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useLocation, Link } from 'react-router';

import profileImg from '../../assets/profile.png';
import { navigationConfig } from '@/config/navigation';
import { cn } from '@/lib/utils';
import Typography from '../ui/Typography';
import { useSidebar } from '@/hooks/useSidebar';

const useSidebarLogic = () => {
    const location = useLocation();
    const [expandedItems, setExpandedItems] = useState(() => {
        const initialExpanded = {};
        navigationConfig.sections.forEach(section => {
            section.items.forEach(item => {
                if (item.expanded) {
                    initialExpanded[item.name] = true;
                }
            });
        });
        return initialExpanded;
    });

    const isPathActive = (href, hasChildren = false) => {
        if (!href) return false;
        
        if (hasChildren) {
            return false;
        }
        
        return location.pathname === href;
    };

    const toggleExpanded = (itemName) => {
        setExpandedItems(prev => ({
            ...prev,
            [itemName]: !prev[itemName]
        }));
    };

    useEffect(() => {
        for (const section of navigationConfig.sections) {
            for (const item of section.items) {
                if (item.children) {
                    const hasActiveChild = item.children.some(child => 
                        location.pathname === child.href
                    );
                    
                    if (hasActiveChild && item.collapsible) {
                        setExpandedItems(prev => ({
                            ...prev,
                            [item.name]: true
                        }));
                    }
                }
            }
        }
    }, [location.pathname]);

    return {
        expandedItems,
        isPathActive,
        toggleExpanded
    };
};

const SidebarOverlay = ({ isOpen, onClose }) => (
    <div 
        className={cn(
            "md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
    />
);

const SidebarHeader = () => (
    <header className='p-4 flex items-center gap-2 rounded flex-shrink-0'>
        <span>
            <img src={profileImg} alt="user" className="size-6 rounded-full w-auto" />
        </span>
        <Typography variant='sidebar-heading'>
            {navigationConfig.header.title}
        </Typography>
    </header>
);

const SidebarTabs = () => (
    <div className='flex items-center'>
        {navigationConfig.tabs.map(tab => (
            <Typography
                key={tab.name}
                variant='sidebar-group'
                className={cn('py-1 px-2 rounded', tab.active ? 'text-foreground/40' : 'text-foreground/20')}
            >
                {tab.name}
            </Typography>
        ))}
    </div>
);

const QuickLinks = ({ isPathActive }) => (
    <>
        {navigationConfig.quickLinks.map(link => (
            <Link key={link.name} to={link.href} className="w-full">
                <Typography
                    variant='sidebar-item'
                    className={cn(
                        'flex items-center gap-1 rounded py-1 px-2 gap-2',
                        isPathActive(link.href, false) && 'bg-foreground/5'
                    )}
                >
                    <span className="size-[6px] bg-foreground/20 rounded-full flex-shrink-0"></span>
                    {link.name}
                </Typography>
            </Link>
        ))}
    </>
);

const NavItem = ({ item, isChild = false, isPathActive, expandedItems, toggleExpanded }) => {
    const hasChildren = item.children && item.children.length > 0;
    const isActive = isPathActive(item.href, hasChildren);
    const isExpanded = expandedItems[item.name];

    return (
        <div className="relative">
            <button
                onClick={() => {
                    if (item.collapsible && hasChildren) {
                        toggleExpanded(item.name);
                    }
                }}
                className={cn(
                    "w-full flex items-center gap-1 transition-all duration-200 ease-in-out group relative",
                    'py-1 px-2',
                    isActive && 'bg-foreground/5'
                )}
            >
                {isActive && <span className='absolute left-0 bg-primary dark:bg-primary-brand-dark w-1 h-4 rounded-full top-1/2 -translate-y-1/2'></span>}

                {item.collapsible && hasChildren && (
                    <div className={cn(
                        "flex-shrink-0 transition-transform duration-200 ease-in-out text-foreground/20",
                        isExpanded && "transform rotate-0"
                    )}>
                        {isExpanded ? (
                            <ChevronDownIcon className="size-4" />
                        ) : (
                            <ChevronRightIcon className="size-4" />
                        )}
                    </div>
                )}

                {!item.collapsible && !hasChildren && !isChild && (
                    <div className="flex-shrink-0 text-foreground/20 pl-4">
                    </div>
                )}
                <div className="flex items-center gap-1">
                    {item.icon && (
                        <item.icon className={cn(
                            "flex-shrink-0 transition-colors duration-200",
                            "size-5"
                        )} />
                    )}
                    
                  
                    {hasChildren ? (
                        <Typography
                            variant={'sidebar-item'}
                            className={cn("truncate ", 
                                isChild && 'text-center w-full pl-11')}
                        >
                            {item.name}
                        </Typography>
                    ) : (
                        <Link to={item.href || '#'} className="w-full">
                            <Typography
                                variant={'sidebar-item'}
                                className={cn("truncate  ", 
                                    isChild && 'text-center w-full pl-11')}
                            >
                                {item.name}
                            </Typography>
                        </Link>
                    )}
                </div>
            </button>

            {hasChildren && (
                <div
                    className={cn(
                        "overflow-hidden transition-all duration-300 ease-in-out",
                        isExpanded
                            ? "max-h-max opacity-100"
                            : "max-h-0 opacity-0"
                    )}
                >
                    <div className="text-center">
                        {item.children.map(child => (
                            <NavItem 
                                key={child.name}
                                item={child} 
                                isChild={true}
                                isPathActive={isPathActive}
                                expandedItems={expandedItems}
                                toggleExpanded={toggleExpanded}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const SidebarSection = ({ section, isPathActive, expandedItems, toggleExpanded }) => (
    <section className="pb-3 gap-1 flex flex-col">
        <Typography
            variant="sidebar-group"
            className='pl-3'
        >
            {section.title}
        </Typography>
        <>
            {section.items.map(item => (
                <NavItem 
                    key={item.name}
                    item={item}
                    isPathActive={isPathActive}
                    expandedItems={expandedItems}
                    toggleExpanded={toggleExpanded}
                />
            ))}
        </>
    </section>
);

const SidebarContent = ({ isPathActive, expandedItems, toggleExpanded }) => (
    <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="space-y-4">
            <section className="pb-3 gap-1 flex flex-col">
                <SidebarTabs />
                <QuickLinks isPathActive={isPathActive} />
            </section>

            {navigationConfig.sections.map(section => (
                <SidebarSection 
                    key={section.id} 
                    section={section}
                    isPathActive={isPathActive}
                    expandedItems={expandedItems}
                    toggleExpanded={toggleExpanded}
                />
            ))}
        </div>
    </div>
);

const Sidebar = () => {
    const { isOpen, closeSidebar } = useSidebar();
    const { expandedItems, isPathActive, toggleExpanded } = useSidebarLogic();

    return (
        <>
            <SidebarOverlay isOpen={isOpen} onClose={closeSidebar} />
            
            <aside className={cn(
                "bg-background border-r border-foreground/10 h-screen flex flex-col z-50 transition-transform duration-300 ease-in-out",
                "fixed top-0 left-0 w-80",
                "md:w-sidebar",
                isOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <SidebarHeader />
                <SidebarContent 
                    isPathActive={isPathActive}
                    expandedItems={expandedItems}
                    toggleExpanded={toggleExpanded}
                />
            </aside>
        </>
    );
};

export default Sidebar;