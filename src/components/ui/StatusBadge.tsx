// components/ui/StatusBadge.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  status: 'In Progress' | 'Complete' | 'Pending' | 'Approved' | 'Rejected';
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'In Progress':
        return 'text-purple-600 bg-purple-50';
      case 'Complete':
        return 'text-green-600 bg-green-50';
      case 'Pending':
        return 'text-blue-600 bg-blue-50';
      case 'Approved':
        return 'text-yellow-600 bg-yellow-50';
      case 'Rejected':
        return 'text-gray-600 bg-gray-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <span className={cn(
      'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-normal',
      getStatusStyles(status),
      className
    )}>
      <span className="size-1 rounded-full bg-current mr-1.5"></span>
      {status}
    </span>
  );
};

export default StatusBadge;