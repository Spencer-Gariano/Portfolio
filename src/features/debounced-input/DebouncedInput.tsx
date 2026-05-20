import { Input } from '@/components/ui/Input';
import { useRef, useState } from 'react';

export interface IDebouncedInputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
}

const DebouncedInput = (props: IDebouncedInputProps) => {
  const debounce = props.debounce ?? 500;
  const [value, setValue] = useState(() => props.value);
  const timeoutRef = useRef<number | null>(null);

  const handleChange = (next: string) => {
    setValue(next);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      props.onChange(next);
    }, debounce);
  };

  return <Input {...props} value={value} onChange={(e) => handleChange(e.target.value)} />;
};
export { DebouncedInput };
