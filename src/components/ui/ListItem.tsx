import React from 'react';
import Typography from './Typography';
import { cn } from '@/lib/utils';

interface ListItemProps {
  icon?: React.ReactNode;
  image?: string;
  title: string;
  subtitle?: string;
  timestamp?: string;
  onClick?: () => void;
  className?: string;
  iconBgClassName?: string;
  showTimeline?: boolean;
  isLastTimelineItem?: boolean;
  timelineIcon?: React.ReactNode;
  timelineIconBgClassName?: string;
}

const ListItem: React.FC<ListItemProps> = ({
  icon,
  image,
  title,
  subtitle,
  timestamp,
  onClick,
  className,
  iconBgClassName = "bg-foreground/10",
  showTimeline = false,
  isLastTimelineItem = false,
  timelineIcon,
  timelineIconBgClassName = "bg-foreground/10"
}) => {
  if (showTimeline) {
    return (
      <div
        className={cn(
          'relative flex gap-3 px-4 py-2 hover:bg-foreground/5 transition-colors cursor-pointer',
          className
        )}
        onClick={onClick}
      >
        {!isLastTimelineItem && (
          <div className="absolute left-7 top-8 w-[1px] h-full bg-foreground/10" />
        )}
        
        <div className="flex-shrink-0 mt-0.5">
          {image ? (
            <img
              src={image}
              alt=""
              className="size-6 rounded-full object-cover relative z-10"
            />
          ) : icon ? (
            <div className={cn(
              "size-6 rounded-full flex items-center justify-center relative z-10",
              iconBgClassName
            )}>
              {icon}
            </div>
          ) : null}
        </div>
       
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <Typography variant="body" className="truncate">
              {title}
            </Typography>
           
          </div>
          {subtitle && (
            <Typography variant="caption">
              {subtitle}
            </Typography>
          )}
          {timestamp && (
            <Typography variant="caption" >
              {timestamp}
            </Typography>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'flex items-start gap-3 px-4 py-2 hover:bg-foreground/5 transition-colors cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      <div className="flex-shrink-0 ">
        {image ? (
          <img
            src={image}
            alt=""
            className="size-6 rounded-full object-cover"
          />
        ) : icon ? (
          <div className={cn(
            "size-6 rounded-full flex text-black items-center justify-center",
            iconBgClassName
          )}>
            {icon}
          </div>
        ) : null}
      </div>
     
      <div className="flex-1 min-w-0">
        <div className="flex-1">
          <Typography variant="body" className="truncate">
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="caption">
              {subtitle}
            </Typography>
          )}
        </div>
        {timestamp && (
          <Typography variant="caption">
            {timestamp}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default ListItem;