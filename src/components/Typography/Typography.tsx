import type { HTMLAttributes, ReactNode } from 'react';

import { cn } from '../../lib/utils';

type TypographyVariant = 'display' | 'title' | 'body' | 'caption';

type TypographyProps = HTMLAttributes<HTMLElement> & {
  as?: 'h1' | 'h2' | 'p' | 'span';
  variant?: TypographyVariant;
  children: ReactNode;
};

const variantClassMap: Record<TypographyVariant, string> = {
  display: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
  title: 'scroll-m-20 text-3xl font-semibold tracking-tight',
  body: 'leading-7',
  caption: 'text-sm text-muted-foreground',
};

export function Typography({ as: Component = 'p', variant = 'body', className = '', children, ...props }: TypographyProps) {
  return (
    <Component className={cn(variantClassMap[variant], className)} {...props}>
      {children}
    </Component>
  );
}

export type { TypographyProps };
