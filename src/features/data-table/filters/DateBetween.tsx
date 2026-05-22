import { DatePicker } from '@/features/date-picker/DatePicker';
import type { Column } from '@tanstack/react-table';
import type { DateRange } from 'react-day-picker';
import { fromDateRange, toDateRange, type IDateRangeFilter } from './DataFilter.Utils';

export interface IDateBetweenProps<TData> {
  column: Column<TData, unknown>;
}

const DateBetween = <TData,>(props: IDateBetweenProps<TData>) => {
  const filterValue = props.column.getFilterValue() as IDateRangeFilter | undefined;

  const onChange = (dateRange: DateRange | undefined) => {
    props.column.setFilterValue(fromDateRange(dateRange));
  };

  return (
    <DatePicker
      calendarMode={'range'}
      dateRange={toDateRange(filterValue)}
      setDateRange={(range) => onChange(range)}
    />
  );
};
export { DateBetween };
