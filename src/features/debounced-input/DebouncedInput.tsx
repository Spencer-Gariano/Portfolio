import { Input } from '@/components/ui/Input';
import { useEffect, useState } from 'react';

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
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      props.onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return <Input {...props} value={value} onChange={(e) => setValue(e.target.value)} />;
};
export { DebouncedInput };
