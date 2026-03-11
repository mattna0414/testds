import type { ComponentPropsWithoutRef } from 'react';

import { Checkbox as ShadcnCheckbox } from '../ui/checkbox';

export type CheckboxProps = ComponentPropsWithoutRef<typeof ShadcnCheckbox>;

export function Checkbox(props: CheckboxProps) {
  return <ShadcnCheckbox {...props} />;
}
