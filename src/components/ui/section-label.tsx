
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface SectionLabelProps {
  label: string;
  className?: string;
}

export function SectionLabel({ label, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center justify-center w-full mx-auto mb-4", className)}>
      <Separator className="flex-grow-0 w-12 h-px bg-gray-200 mr-4" />
      <div className="px-4 py-1 text-xs font-medium tracking-wider uppercase text-primary bg-blue-50 rounded-full break-keep whitespace-nowrap">
        {label}
      </div>
      <Separator className="flex-grow-0 w-12 h-px bg-gray-200 ml-4" />
    </div>
  );
}
