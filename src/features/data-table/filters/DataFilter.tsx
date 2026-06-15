import { type Column } from '@tanstack/react-table';
import { DebouncedInput } from '../../debounced-input/DebouncedInput';
export interface IFilterProps<TData> {
  column: Column<TData, unknown>;
}

// A lot of this was pulled from their example of fuzzy searching/sorting https://tanstack.com/table/latest/docs/framework/react/examples/filters-fuzzy
const Filter = <TData,>({ column }: IFilterProps<TData>) => {
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
};

export { Filter };
