import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../utils/utils';
const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-sm border px-2 h-5 text-[10px] font-bold tracking-wider uppercase w-fit whitespace-nowrap shrink-0 gap-1.5 transition-colors overflow-hidden [&>svg]:size-3',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground rounded-md',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground bg-opacity-50 dark:bg-opacity-30 rounded-md',
        outline: 'border-zinc-800 bg-zinc-950 text-zinc-400 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return (
    <span data-slot="badge" className={cn(badgeVariants({ variant, className }))} {...props} />
  );
}

export { Badge, badgeVariants };
export default Badge;
