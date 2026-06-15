import type { DateRange } from 'react-day-picker';

export type ISingleDatePickerProps = {
  calendarMode: 'single';
  date?: Date;
  setDate: (date: Date | undefined) => void;
};

export type IRangeDatePickerProps = {
  calendarMode: 'range';
  dateRange?: DateRange;
  setDateRange?: (date: DateRange | undefined) => void;
};

export type IMultipleDatePickerProps = {
  calendarMode: 'multiple';
  dates?: Date[];
  setDates?: (dates: Date[] | undefined) => void;
};
