import type { HTMLAttributes, ReactNode } from 'react';

type TypographyVariant = 'display' | 'title' | 'body' | 'caption';

type TypographyProps = HTMLAttributes<HTMLElement> & {
  as?: 'h1' | 'h2' | 'p' | 'span';
  variant?: TypographyVariant;
  children: ReactNode;
};

export function Typography({ as: Component = 'p', variant = 'body', className = '', children, ...props }: TypographyProps) {
  const variantClass = `pds-typo--${variant}`;
  const mergedClassName = ['pds-typo', variantClass, className].filter(Boolean).join(' ');

  return (
    <Component className={mergedClassName} {...props}>
      {children}
    </Component>
  );
}

export type { TypographyProps };
