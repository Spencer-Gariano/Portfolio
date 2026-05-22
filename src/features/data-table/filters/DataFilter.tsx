import { type Column } from '@tanstack/react-table';
import { DebouncedInput } from '../../debounced-input/DebouncedInput';
type FilterProps<TData> = {
  column: Column<TData, unknown>;
};
// A lot of this was pulled from their example of fuzzy searching/sorting https://tanstack.com/table/latest/docs/framework/react/examples/filters-fuzzy
export function Filter<TData>({ column }: FilterProps<TData>) {
  const columnFilterValue = column.getFilterValue();

  return (
    <DebouncedInput
      type='text'
      value={typeof columnFilterValue === 'string' ? columnFilterValue : ''}
      onChange={(value) => column.setFilterValue(value)}
      placeholder={`Search...`}
      className='w-36 rounded border shadow'
      debounce={500}
    />
  );
}
