import { DebouncedInput } from '../debounced-input/DebouncedInput';

export interface IDataTableToolbarProps {
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
}

const DataTableToolbar = (props: IDataTableToolbarProps) => {
  return (
    <div className='flex justify-end px-2 pt-2'>
      <DebouncedInput
        value={props.globalFilter ?? ''}
        onChange={(value) => props.setGlobalFilter(String(value))}
        className='font-lg border-block w-auto justify-end-safe border p-2 shadow'
        placeholder='Search all columns...'
      />
    </div>
  );
};

export { DataTableToolbar };
