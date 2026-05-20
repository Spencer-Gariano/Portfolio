import type { ColumnDef } from '@tanstack/react-table';
import type { ISubmitUserProps, IUser } from '../Types';
import { DataTable } from '@/features/data-table/DataTable';
import { UserForm } from './UserForm';
import { useState } from 'react';
import { UserDeleteDialog } from './UserDeleteDialog';
import { createDataTableRowActions } from '@/features/data-table/DataTableRowActions';
import { Button } from '@/components/ui/Button';
import { Pencil, Trash } from 'lucide-react';
import { useMediaQuery } from 'usehooks-ts';

export interface IUserTableProps {
  users: IUser[];
  isLoading: boolean;
  onSubmitUser: (data: ISubmitUserProps) => void;
  onDeleteUser: (data: IUser) => void;
}

const UserTable = (props: IUserTableProps) => {
  const [selectedUser, setSelectedUser] = useState<IUser | undefined>(undefined);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);
  const [isCreateFormOpen, setIsCreateFormOpen] = useState<boolean>(false);
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState<boolean>(false);
  const onOpenDeleteDialog = (user: IUser) => {
    setIsDeleteDialogOpen(true);
    setSelectedUser(user);
  };

  const onDeleteDialogChange = (value: boolean) => {
    setIsDeleteDialogOpen(value);
    if (!value) {
      setSelectedUser(undefined);
    }
  };

  const onCreateUser = () => {
    setIsCreateFormOpen(true);
    setSelectedUser(undefined);
  };

  const onEditUser = (user: IUser) => {
    setIsUpdateFormOpen(true);
    setSelectedUser(user);
  };

  const onDeleteUser = (user: IUser) => {
    props.onDeleteUser(user);
    setIsDeleteDialogOpen(false);
  };
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
    createDataTableRowActions<IUser>({
      cellRender: (user) => (
        <>
          <Button
            size='icon-sm'
            aria-label={`Edit ${user.firstName} ${user.lastName}`}
            variant='outline'
            onClick={() => {
              onEditUser(user);
            }}
          >
            <Pencil />
          </Button>
          <Button
            size='icon-sm'
            variant='destructive'
            aria-label={`Delete ${user.firstName} ${user.lastName}`}
            onClick={() => {
              onOpenDeleteDialog(user);
            }}
          >
            <Trash />
          </Button>
        </>
      ),
    }),
  ];

  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <>
      <UserForm
        onSubmit={props.onSubmitUser}
        mode={'create'}
        isOpen={isCreateFormOpen}
        setIsOpen={setIsCreateFormOpen}
      />
      {selectedUser && (
        <UserForm
          onSubmit={props.onSubmitUser}
          mode={'update'}
          user={selectedUser}
          setUser={setSelectedUser}
          isOpen={isUpdateFormOpen}
          setIsOpen={setIsUpdateFormOpen}
        />
      )}
      {selectedUser && (
        <UserDeleteDialog
          user={selectedUser}
          onDeleteUser={onDeleteUser}
          isDeleteOpen={isDeleteDialogOpen}
          onDeleteDialogChange={onDeleteDialogChange}
        />
      )}
      <div className='space-y-4'>
        <div className={'flex justify-end'}>
          <Button
            aria-label='Create User'
            onClick={() => {
              onCreateUser();
            }}
          >
            {isDesktop ? 'Create User' : 'Create'}
          </Button>
        </div>
        <DataTable
          data={props.users}
          columns={userColumns}
          isLoading={props.isLoading}
          globalFilterHeader={'name'}
        />
      </div>
    </>
  );
};

export { UserTable };
