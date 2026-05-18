import type { ColumnDef } from '@tanstack/react-table';
import type { ISubmitUserProps, IUser } from '../Types';
import { DataTable } from '@/features/data-table/DataTable';
import { UserFormDialog } from './UserFormDrawer';
import { useState } from 'react';

export interface IUserTableProps {
  users: IUser[];
  isLoading: boolean;
  onSubmitUser: (data: ISubmitUserProps) => void;
}

const UserTable = (props: IUserTableProps) => {
  const [selectedUser, setSelectedUser] = useState<IUser | undefined>(undefined);
  const userColumns: ColumnDef<IUser>[] = [
    {
      accessorFn: (row) => `${row.firstName} ${row.lastName}`,
      id: 'name',
      header: 'Name',
      cell: (info) => info.getValue(),
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
      <UserFormDialog onSubmit={props.onSubmitUser} mode={'create'} />
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
