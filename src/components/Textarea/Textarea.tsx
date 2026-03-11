import type { TextareaHTMLAttributes } from 'react';

import { Textarea as ShadcnTextarea } from '../ui/textarea';
import { cn } from '../../lib/utils';

type TextareaSize = 'sm' | 'md' | 'lg';

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  textareaSize?: TextareaSize;
  invalid?: boolean;
};

const sizeClassMap: Record<TextareaSize, string> = {
  sm: 'min-h-[80px] text-xs',
  md: 'min-h-[96px] text-sm',
  lg: 'min-h-[140px] text-base',
};

export function Textarea({ textareaSize = 'md', invalid = false, className = '', ...props }: TextareaProps) {
  return (
    <ShadcnTextarea
      className={cn(sizeClassMap[textareaSize], invalid && 'border-destructive focus-visible:ring-destructive', className)}
      {...props}
    />
  );
}
