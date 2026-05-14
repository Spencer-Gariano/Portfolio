import { Outlet } from '@tanstack/react-router';

const PlaygroundLayout = () => {
  return (
    <div className='space-y-8'>
      {/* Main content to be used as needed for a shared layout since this will contain experiment sub routes*/}
      <main className='flex-1'>
        <Outlet />
      </main>
    </div>
  );
};

export { PlaygroundLayout };
