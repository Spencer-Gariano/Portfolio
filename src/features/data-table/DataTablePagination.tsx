import { Button } from '@/components/ui/Button';
import { ButtonGroup, ButtonGroupSeparator } from '@/components/ui/ButtonGroup';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';
import { Separator } from '@/components/ui/Separator';
import type { Table } from '@tanstack/react-table';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export interface IDataTablePaginationProps<T> {
  table: Table<T>;
}

const DataTablePagination = <T,>(props: IDataTablePaginationProps<T>) => {
  return (
    <div className='flex h-12 items-center justify-end-safe border-t px-2 py-2'>
      {/* Page size controls */}
      <div className='flex items-center gap-2'>
        <span className='text-muted-foreground text-sm leading-none'>Rows</span>
        <Select
          value={`${props.table.getState().pagination.pageSize}`}
          onValueChange={(value) => {
            props.table.setPageSize(Number(value));
          }}
        >
          <SelectTrigger className='h-8 w-auto px-2 text-sm' aria-label='Rows per page'>
            <SelectValue />
          </SelectTrigger>
          <SelectContent side='top'>
            <SelectGroup>
              <SelectLabel>Page Size</SelectLabel>
              {[10, 20, 30, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Separator orientation={'vertical'} className='mx-3 h-8 opacity-30' />
      {/* Pagination Control */}
      <div className='flex items-center gap-2'>
        <div className='text-muted-foreground text-sm'>
          Page {props.table.getState().pagination.pageIndex + 1} of {props.table.getPageCount()}
        </div>
        <ButtonGroup>
          <Button
            onClick={() => props.table.previousPage()}
            disabled={!props.table.getCanPreviousPage()}
            variant={'outline'}
            size={'icon'}
            aria-label={'Go to previous page'}
          >
            <ChevronLeft />
          </Button>
          <ButtonGroupSeparator />
          <Button
            onClick={() => props.table.nextPage()}
            disabled={!props.table.getCanNextPage()}
            variant={'outline'}
            size={'icon'}
            aria-label={'Go to next page'}
          >
            <ChevronRight />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};
export { DataTablePagination };
