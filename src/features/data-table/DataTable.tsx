import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
} from '@tanstack/react-table';
import { TableLoadingSkeleton } from '../table-loading-skeleton/TableLoadingSkeleton';
import { useEffect, useState } from 'react';
import { DataTablePagination } from './DataTablePagination';
import { DataTableBody } from './DataTableBody';
import { DataTableHeader } from './DataTableHeader';
import { fuzzyFilter } from './DataFilter';
import { DataTableToolbar } from './DataTableToolbar';

export interface IDataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  isLoading: boolean;
  globalFilterHeader?: string;
}

const DataTable = <T,>(props: IDataTableProps<T>) => {
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data: props.data,
    columns: props.columns,
    filterFns: { fuzzy: fuzzyFilter },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: 'fuzzy',
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    state: {
      pagination: pagination,
      sorting: sorting,
      globalFilter: globalFilter,
      columnFilters: columnFilters,
    },
  });

  //apply the fuzzy sort if the fullName column is being filtered
  useEffect(() => {
    if (table.getState().columnFilters[0]?.id === props.globalFilterHeader) {
      if (table.getState().sorting[0]?.id !== props.globalFilterHeader) {
        table.setSorting([{ id: props.globalFilterHeader, desc: false }]);
      }
    }
  }, [table.getState().columnFilters[0]?.id]);

  return props.isLoading ? (
    <TableLoadingSkeleton columns={props.columns} />
  ) : (
    <div className='max-h-[70vh] w-full overflow-auto rounded-md border'>
      <DataTableToolbar globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
      <table className='w-max min-w-full text-sm'>
        <DataTableHeader table={table} />
        <DataTableBody table={table} />
      </table>
      <DataTablePagination table={table} />
    </div>
  );
};

export { DataTable };
