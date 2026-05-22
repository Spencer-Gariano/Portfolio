import { Button } from '@/components/ui/Button';
import { Calendar } from '@/components/ui/Calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import type {
  IMultipleDatePickerProps,
  IRangeDatePickerProps,
  ISingleDatePickerProps,
} from './Types';

export type IDatePickerProps =
  | ISingleDatePickerProps
  | IRangeDatePickerProps
  | IMultipleDatePickerProps;

const DatePicker = (props: IDatePickerProps) => {
  switch (props.calendarMode) {
    case 'single': {
      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant='outline'>
              <CalendarIcon />

              {props.date ? format(props.date, 'PPP') : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>

          <PopoverContent className='w-auto p-0'>
            <Calendar mode={props.calendarMode} selected={props.date} onSelect={props.setDate} />
          </PopoverContent>
        </Popover>
      );
    }

    case 'range': {
      const label = props.dateRange?.from
        ? props.dateRange.to
          ? props.dateRange.to === props.dateRange.from
            ? format(props.dateRange.from, 'PPP')
            : `${format(props.dateRange.from, 'PPP')} - ${format(
                props.dateRange.to,

                'PPP',
              )}`
          : format(props.dateRange.from, 'PPP')
        : 'Pick a date range';
      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant='outline'>
              <CalendarIcon />
              <span>{label}</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-auto p-0'>
            <Calendar
              mode={props.calendarMode}
              selected={props.dateRange}
              onSelect={props.setDateRange}
            />
          </PopoverContent>
        </Popover>
      );
    }
    case 'multiple': {
      const label = props.dates?.length ? `${props.dates.length} selected` : 'Pick dates';
      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant='outline'>
              <CalendarIcon />
              <span>{label}</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-auto p-0'>
            <Calendar mode={props.calendarMode} selected={props.dates} onSelect={props.setDates} />
          </PopoverContent>
        </Popover>
      );
    }
    default: {
      return <></>;
    }
  }
};

export { DatePicker };
