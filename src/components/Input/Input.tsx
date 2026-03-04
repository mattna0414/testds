import type { InputHTMLAttributes } from 'react';

type InputSize = 'sm' | 'md' | 'lg';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  inputSize?: InputSize;
  invalid?: boolean;
};

export function Input({ inputSize = 'md', invalid = false, className = '', ...props }: InputProps) {
  const sizeClass = `pds-input--${inputSize}`;
  const invalidClass = invalid ? 'pds-input--invalid' : '';
  const mergedClassName = ['pds-input', sizeClass, invalidClass, className].filter(Boolean).join(' ');

  return <input className={mergedClassName} {...props} />;
}
