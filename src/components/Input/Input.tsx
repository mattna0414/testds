import type { InputHTMLAttributes } from 'react';

import { Input as ShadcnInput } from '../ui/input';
import { cn } from '../../lib/utils';

type InputSize = 'sm' | 'md' | 'lg';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  inputSize?: InputSize;
  invalid?: boolean;
};

const sizeClassMap: Record<InputSize, string> = {
  sm: 'h-8 text-xs',
  md: 'h-9 text-sm',
  lg: 'h-11 text-base',
};

export function Input({ inputSize = 'md', invalid = false, className = '', ...props }: InputProps) {
  return (
    <ShadcnInput
      className={cn(sizeClassMap[inputSize], invalid && 'border-destructive focus-visible:ring-destructive/40', className)}
      {...props}
    />
  );
}
