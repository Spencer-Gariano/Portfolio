import { flexRender, type Table } from '@tanstack/react-table';

export interface IDataTableBodyProps<T> {
  table: Table<T>;
}

const DataTableBody = <T,>(props: IDataTableBodyProps<T>) => {
  return (
    <tbody>
      {props.table.getRowModel().rows.map((row) => (
        <tr key={row.id} className='border-b last:border-0'>
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id} className='p-2'>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export { DataTableBody };
