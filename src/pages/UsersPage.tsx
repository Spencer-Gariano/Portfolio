import { PageHeader } from './PageHeader';

const UsersPage = () => {
  return (
    <div className='space-y-8'>
      <PageHeader
        title={'Users'}
        subtitle={
          'Users management playground focused on TanStack Table, TanStack Form, React Query, and CRUD synchronization patterns.'
        }
      />
    </div>
  );
};

export { UsersPage };
