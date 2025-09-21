import React from 'react';
import { cn } from '@/lib/utils';
import Typography from '../ui/Typography';

interface SectionContainerProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  headerAction?: React.ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  title,
  children,
  className,
  headerAction
}) => {
  return (
    <div className={cn(
      'bg-background  rounded-lg overflow-hidden',
      className
    )}>
      <div className="px-4 py-3  flex items-center justify-between">
        <Typography variant="section-title">
          {title}
        </Typography>
        {headerAction}
      </div>
      <div className="">
        {children}
      </div>
    </div>
  );
};

export default SectionContainer;