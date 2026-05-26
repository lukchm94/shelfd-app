import * as React from 'react';

import { cn } from '../utils/utils';

function Card({
  className,
  layout = CardPropsLayout.VERTICAL,
  ...props
}: React.ComponentProps<'div'> & {
  layout?: (typeof CardPropsLayout)[keyof typeof CardPropsLayout];
}) {
  return (
    <div
      data-slot="card"
      className={cn(
        'bg-card text-card-foreground rounded-xl border border-border/70 p-6 shadow-sm',
        layout === CardPropsLayout.VERTICAL && 'flex flex-col gap-6',
        layout === CardPropsLayout.HORIZONTAL && 'flex flex-row items-center justify-between gap-6',
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn('grid auto-rows-min grid-rows-[auto_auto] gap-12', className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn('text-lg leading-snug font-semibold tracking-tight', className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('text-muted-foreground text-sm leading-6', className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-content" className={cn('px-7 py-7', className)} {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-footer" className={cn('flex items-center', className)} {...props} />;
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
export default Card;
import { CardPropsLayout } from './interface/Card';
