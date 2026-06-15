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
import { NavigationLink } from '../NavigationLink';
import { useState } from 'react';
import { navigationArray } from '../Navigation';
import { Accordion } from '@/components/ui/Accordian';
import { MobileAccordian } from './MobileAccordian';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
        <Accordion type={'multiple'}>
          <nav className='gap-4mt-8 mt-8 flex flex-col gap-2'>
            {navigationArray.map((navItem) => {
              if (navItem.children?.length) {
                return (
                  <MobileAccordian navigationItem={navItem} onClick={() => setIsOpen(false)} />
                );
              } else {
                return (
                  <NavigationLink key={navItem.to} to={navItem.to} onClick={() => setIsOpen(false)}>
                    {navItem.label}
                  </NavigationLink>
                );
              }
            })}
          </nav>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
};

export { MobileNavigation };
