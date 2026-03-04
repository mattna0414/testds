import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const variantClass = variant === 'primary' ? 'pds-btn--primary' : 'pds-btn--secondary';
  const mergedClassName = ['pds-btn', variantClass, className].filter(Boolean).join(' ');

  return <button className={mergedClassName} {...props} />;
}
