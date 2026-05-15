import type { ColumnDef } from '@tanstack/react-table';
import type { IUser } from '../Types';
import { DataTable } from '@/features/data-table/DataTable';
import { fuzzySort } from '@/features/data-table/DataFilter';

export interface IUserTableProps {
  users: IUser[];
  isLoading: boolean;
}

const UserTable = (props: IUserTableProps) => {
  const userColumns: ColumnDef<IUser>[] = [
    {
      accessorKey: 'name',
      header: 'Name',
      cell: ({ row }) => row.original.name,
      filterFn: 'includesString',
    },
    {
      accessorKey: 'email',
      header: 'Email',
      filterFn: 'includesString',
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => {
        const status = row.original.status;
        return <span className={`text-sm capitalize`}>{status}</span>;
      },
      meta: {
        filterVariant: 'select',
      },
    },
    {
      accessorKey: 'createdAt',
      header: 'Created',
      cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString(),
      filterFn: 'weakEquals',
    },
    {
      accessorKey: 'lastLoginAt',
      header: 'Last Login',
      cell: ({ row }) => new Date(row.original.lastLoginAt).toLocaleDateString(),
      filterFn: 'weakEquals',
    },
  ];

  return (
    <div className='space-y-4'>
      <DataTable
        data={props.users}
        columns={userColumns}
        isLoading={props.isLoading}
        globalFilterHeader={'name'}
      />
    </div>
  );
};

export { UserTable };
