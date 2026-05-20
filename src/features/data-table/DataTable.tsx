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
import { fuzzyFilter } from './DataFilter.Utils';
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

  const tableState = table.getState();

  const firstFilterId = tableState.columnFilters[0]?.id;
  const currentSortId = tableState.sorting[0]?.id;

  useEffect(() => {
    if (!firstFilterId) return;

    if (firstFilterId === props.globalFilterHeader) {
      if (currentSortId !== props.globalFilterHeader) {
        table.setSorting([{ id: props.globalFilterHeader, desc: false }]);
      }
    }
  }, [firstFilterId, currentSortId, props.globalFilterHeader, table]);

  return props.isLoading ? (
    <TableLoadingSkeleton columns={props.columns} />
  ) : (
    <div className='flex max-h-[72vh] w-full flex-col overflow-hidden rounded-md border'>
      <DataTableToolbar globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
      <div className='min-h-0 flex-1 overflow-y-auto overscroll-contain'>
        <table className='min-w-full table-fixed border-collapse text-sm'>
          <DataTableHeader table={table} />
          <DataTableBody table={table} />
        </table>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
};

export { DataTable };
