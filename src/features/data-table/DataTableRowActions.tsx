import type { ColumnDef } from '@tanstack/react-table';

interface IDataTableRowActionsProps<T> {
  cellRender: (row: T) => React.ReactNode;
}

export const createDataTableRowActions = <T,>(
  props: IDataTableRowActionsProps<T>,
): ColumnDef<T> => {
  return {
    id: 'actions',
    header: () => <span className='sr-only'>Actions</span>,
    enableSorting: false,
    enableColumnFilter: false,
    enableHiding: false,
    cell: ({ row }) => {
      return <div className='flex justify-end gap-2'>{props.cellRender(row.original)}</div>;
    },
  };
};
