import {
  Select as ShadcnSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

export type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type SelectProps = {
  id?: string;
  name?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
  onValueChange?: (value: string) => void;
  options: SelectOption[];
};

export function Select({
  id,
  name,
  className,
  placeholder = 'Select an option',
  value,
  defaultValue,
  disabled,
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  onValueChange,
  options,
}: SelectProps) {
  return (
    <ShadcnSelect value={value} defaultValue={defaultValue} disabled={disabled} name={name} onValueChange={onValueChange}>
      <SelectTrigger id={id} className={className} aria-describedby={ariaDescribedBy} aria-invalid={ariaInvalid}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </ShadcnSelect>
  );
}
