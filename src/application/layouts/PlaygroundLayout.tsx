import { Link, Outlet } from '@tanstack/react-router';

const PlaygroundLayout = () => {
  return (
    <div className='flex min-h-screen'>
      <aside className='w-56 space-y-2 border-r p-4'>
        <div className='mb-4 font-medium'>Playground</div>

        <nav className='space-y-1'>
          <Link to='/playground/users' className='hover:bg-muted block rounded px-2 py-1'>
            Users
          </Link>
        </nav>
      </aside>
      {/* Main content */}
      <main className='flex-1 p-6'>
        <Outlet />
      </main>
    </div>
  );
};

export { PlaygroundLayout };
