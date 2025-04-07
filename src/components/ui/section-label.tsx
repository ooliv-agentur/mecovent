
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface SectionLabelProps {
  label: string;
  className?: string;
}

export function SectionLabel({ label, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center justify-center w-full max-w-full mx-auto mb-4", className)}>
      <Separator className="flex-grow h-px bg-gray-200" />
      <div className="px-4 py-1 mx-3 text-xs font-medium tracking-wider uppercase text-primary bg-blue-50 rounded-full inline-block max-w-full text-center">
        {label}
      </div>
      <Separator className="flex-grow h-px bg-gray-200" />
    </div>
  );
}
