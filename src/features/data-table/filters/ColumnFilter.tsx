import { Filter } from './DataFilter';
import { DateBetween } from './DateBetween';
import type { Column } from '@tanstack/react-table';

export interface IColumnFilterProps<TData> {
  column: Column<TData, unknown>;
}

const ColumnFilter = <TData,>({ column }: IColumnFilterProps<TData>) => {
  const filterVariant = column.columnDef.meta?.filterVariant;

  switch (filterVariant) {
    case 'date-range':
      return <DateBetween column={column} />;
    case 'text':
      return <Filter column={column} />;
    default:
      return <Filter column={column} />;
  }
};

export { ColumnFilter };
