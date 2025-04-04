import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          'bg-primary-btn text-primary-btn-foreground shadow-xs hover:bg-primary-btn/80',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/80 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline_primary:
          'border border-primary-btn-outline text-primary-btn-outline-foreground shadow-xs hover:border-primary-btn-outline/80 hover:text-primary-btn-outline-foreground/80',
        secondary:
          'bg-secondary-btn text-secondary-btn-foreground shadow-md hover:bg-secondary-btn/80',
        outline_secondary:
          'border border-secondary-btn-outline text-secondary-btn-outline-foreground shadow-xs hover:border-secondary-btn-outline/80 hover:text-secondary-btn-outline-foreground/80',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        small: 'w-[94px] h-[24px] rounded-full gap-1.5 px-3 has-[>svg]:px-2.5',
        medium:
          'w-[130px] h-[36px] rounded-full gap-1.5 px-3 has-[>svg]:px-2.5',
        large: 'w-[220px] h-[56px] rounded-full px-6 has-[>svg]:px-4',
        icon: 'rounded-full size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
