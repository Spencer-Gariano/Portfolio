import { useUsers } from '@/features/user/UseUsers';
import { PageHeader } from './PageHeader';
import { UserTable } from '@/features/user/components/UserTable';

const UsersPage = () => {
  const { users, areUsersLoading } = useUsers();

  return (
    <div className='space-y-8'>
      <PageHeader
        title={'Users'}
        subtitle={
          'Users management playground focused on TanStack Table, TanStack Form, React Query, and CRUD synchronization patterns.'
        }
      />
      <UserTable users={users} isLoading={areUsersLoading} />
    </div>
  );
};

export { UsersPage };
