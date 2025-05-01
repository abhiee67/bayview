
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
  subtitleClassName?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  center = false,
  className,
  subtitleClassName,
}) => {
  return (
    <div className={cn('mb-8', center && 'text-center', className)}>
      <h2 className="text-3xl md:text-4xl font-serif font-medium text-maroon">{title}</h2>
      {subtitle && (
        <p className={cn('mt-3 text-lg text-maroon/80', subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
