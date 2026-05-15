import { flexRender, type Table } from '@tanstack/react-table';
import { Filter } from './DataFilter';
import { ChevronUp, ChevronDown } from 'lucide-react';

export interface IDataTableHeaderProps<T> {
  table: Table<T>;
}

const DataTableHeader = <T,>(props: IDataTableHeaderProps<T>) => {
  return (
    <thead className='bg-background sticky top-0 z-10 border-b'>
      {props.table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th key={header.id} className='p-2 text-left'>
              {header.isPlaceholder ? null : (
                <>
                  <div
                    {...{
                      className: header.column.getCanSort()
                        ? 'cursor-pointer select-none flex items-center gap-1'
                        : '',
                      onClick: header.column.getToggleSortingHandler(),
                    }}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{
                      asc: <ChevronUp size={16} />,
                      desc: <ChevronDown size={16} />,
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                  {header.column.getCanFilter() ? (
                    <div>
                      <Filter column={header.column} />
                    </div>
                  ) : null}
                </>
              )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export { DataTableHeader };
