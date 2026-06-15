import { flexRender, type Table } from '@tanstack/react-table';

export interface IDataTableBodyProps<T> {
  table: Table<T>;
}

const DataTableBody = <T,>(props: IDataTableBodyProps<T>) => {
  return (
    <tbody>
      {props.table.getRowModel().rows.map((row) => (
        <tr key={row.id} className='even:bg-muted/40 hover:bg-muted/50 transition-colors'>
          {row.getVisibleCells().map((cell) => (
            <td
              key={cell.id}
              className='px-2 py-2 leading-5 shadow-[inset_0_-1px_0_hsl(var(--border))]'
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export { DataTableBody };
