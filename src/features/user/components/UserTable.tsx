import type { ColumnDef } from '@tanstack/react-table';
import type { IUser } from '../Types';
import { DataTable } from '@/features/data-table/DataTable';

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
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => {
        const status = row.original.status;
        return <span className={`text-sm capitalize`}>{status}</span>;
      },
    },
    {
      accessorKey: 'createdAt',
      header: 'Created',
      cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString(),
    },
    {
      accessorKey: 'lastLoginAt',
      header: 'Last Login',
      cell: ({ row }) => new Date(row.original.lastLoginAt).toLocaleDateString(),
    },
  ];

  return (
    <div className='space-y-4'>
      <DataTable data={props.users} columns={userColumns} isLoading={props.isLoading} />
    </div>
  );
};

export { UserTable };
