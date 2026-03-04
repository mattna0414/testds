import React from 'react';

import { Button as UiButton } from '@/components/ui/button';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const variant = primary ? 'default' : 'secondary';
  const mappedSize = size === 'small' ? 'sm' : size === 'large' ? 'lg' : 'default';

  return (
    <UiButton
      type="button"
      variant={variant}
      size={mappedSize}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      {label}
    </UiButton>
  );
};
