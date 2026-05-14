import { flexRender, getCoreRowModel, useReactTable, type ColumnDef } from '@tanstack/react-table';
import { TableLoadingSkeleton } from '../table-loading-skeleton/TableLoadingSkeleton';

export interface IDataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  isLoading: boolean;
}

const DataTable = <T,>(props: IDataTableProps<T>) => {
  const table = useReactTable({
    data: props.data,
    columns: props.columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return props.isLoading ? (
    <TableLoadingSkeleton columns={props.columns} />
  ) : (
    <div className='max-h-[70vh] w-full overflow-auto rounded-md border'>
      <table className='w-max min-w-full text-sm'>
        <thead className='bg-background sticky top-0 z-10 border-b'>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className='p-2 text-left'>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className='border-b last:border-0'>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className='p-2'>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { DataTable };
