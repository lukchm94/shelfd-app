import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { Avatar as Avatar$1 } from 'radix-ui';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';

declare function Avatar({ className, ...props }: React.ComponentProps<typeof Avatar$1.Root>): react_jsx_runtime.JSX.Element;
declare function AvatarImage({ className, ...props }: React.ComponentProps<typeof Avatar$1.Image>): react_jsx_runtime.JSX.Element;
declare function AvatarFallback({ className, ...props }: React.ComponentProps<typeof Avatar$1.Fallback>): react_jsx_runtime.JSX.Element;

declare const badgeVariants: (props?: ({
    variant?: "default" | "secondary" | "outline" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
declare function Badge({ className, variant, ...props }: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants>): react_jsx_runtime.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "secondary" | "outline" | "ghost" | "destructive" | null | undefined;
    size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
declare function Button({ className, variant, size, asChild, ...props }: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): react_jsx_runtime.JSX.Element;

declare function Card({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function CardHeader({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function CardTitle({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function CardDescription({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function CardContent({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function CardFooter({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;

export { Avatar, AvatarFallback, AvatarImage, Badge, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, badgeVariants, buttonVariants };
