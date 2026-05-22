import { isSameDay, isWithinInterval } from 'date-fns';
import type { FilterFn } from '@tanstack/react-table';
import type { IDateRangeFilter } from './DataFilter.Utils';

export const dateBetweenFilter: FilterFn<unknown> = (
  row,
  columnId,
  filterValue: IDateRangeFilter,
) => {
  const value = row.getValue<string | null>(columnId);
  if (!value) {
    return false;
  }

  const date = new Date(value);
  const { start, end } = filterValue || {};

  // No filter at all so show all rows=
  if (!start && !end) {
    return true;
  }

  // Only partial selection so do NOT filter yet
  if (!start || !end) {
    return true;
  }

  if (start === end) {
    return isSameDay(date, start);
  }

  // Both → range filter
  return isWithinInterval(date, {
    start,
    end,
  });
};
