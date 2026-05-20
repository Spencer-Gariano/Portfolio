import type { PropsWithChildren } from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/Drawer';
import { Button } from '@/components/ui/Button';

export interface IFormDrawerProps extends PropsWithChildren {
  drawerTitle: string;
  drawerDescription: string;
  submitButton: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  direction: 'top' | 'bottom' | 'left' | 'right' | undefined;
}

const FormDrawer = (props: IFormDrawerProps) => {
  return (
    <Drawer open={props.isOpen} onOpenChange={props.setIsOpen} direction={props.direction}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{props.drawerTitle}</DrawerTitle>
          <DrawerDescription>{props.drawerDescription}</DrawerDescription>
        </DrawerHeader>
        <div className={'px-4 pb-2'}>{props.children}</div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant={'outline'}>Close</Button>
          </DrawerClose>
          {props.submitButton}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export { FormDrawer };
