import type { ColumnDef } from '@tanstack/react-table';

export interface ITableLoadingSkeletonProps<T> {
  columns: ColumnDef<T>[];
}

const TableLoadingSkeleton = <T,>(props: ITableLoadingSkeletonProps<T>) => {
  return (
    <div className='w-full rounded-md border'>
      <table className='w-full text-sm'>
        <thead>
          <tr>
            {props.columns.map((_, i) => (
              <th key={i} className='p-2 text-left'>
                <div className='bg-muted h-4 w-24 animate-pulse rounded' />
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: 5 }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {props.columns.map((_, colIndex) => (
                <td key={colIndex} className='p-2'>
                  <div className='bg-muted h-4 w-full animate-pulse rounded' />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { TableLoadingSkeleton };
