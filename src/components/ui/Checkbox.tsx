// components/ui/Checkbox.tsx
import React from 'react';
import { cn } from '@/lib/utils';
import { CheckIcon } from '@heroicons/react/24/outline';

interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  "aria-label"?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ 
  checked = false, 
  indeterminate = false, 
  onCheckedChange,
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={indeterminate ? 'mixed' : checked}
      onClick={() => onCheckedChange?.(!checked)}
      className={cn(
        'size-4 rounded-sm border border-border/20 flex items-center justify-center',
        'transition-colors duration-200',
        'hover:border-border/40',
        (checked || indeterminate) && 'bg-primary border-primary',
        className
      )}
      {...props}
    >
      {checked && !indeterminate && (
        <CheckIcon className="size-3 text-white" strokeWidth={2} />
      )}
      {indeterminate && (
        <div className="size-2 bg-white rounded-sm" />
      )}
    </button>
  );
};

export default Checkbox;