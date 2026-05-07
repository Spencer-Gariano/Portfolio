import { Button } from '@/components/ui/Button';
import {
  SheetContent,
  SheetTrigger,
  Sheet,
  SheetTitle,
  SheetHeader,
  SheetDescription,
} from '@/components/ui/Sheet';
import { Menu } from 'lucide-react';
import { NavigationLink } from './NavigationLink';
import { routes } from '@/application/routes/Routes';
import { useMemo, useState } from 'react';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const routesArray = useMemo(() => Object.values(routes), [routes]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          className='md:hidden'
          size='icon-sm'
          aria-label='Mobile Navigation Button'
          variant='outline'
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side='left' showCloseButton={false}>
        <SheetHeader hidden>
          <SheetTitle>Navigation Menu</SheetTitle>
          <SheetDescription>Navigate with the links here</SheetDescription>
        </SheetHeader>
        <nav className='gap-4mt-8 mt-8 flex flex-col gap-2'>
          {routesArray.map((route) => {
            return (
              <NavigationLink key={route.path} to={route.path} onClick={() => setIsOpen(false)}>
                {route.title}
              </NavigationLink>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export { MobileNavigation };
