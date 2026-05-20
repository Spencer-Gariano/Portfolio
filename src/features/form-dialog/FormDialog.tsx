import { Button } from '@/components/ui/Button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog';
import { type PropsWithChildren } from 'react';

export interface IFormDialogProps extends PropsWithChildren {
  dialogTitle: string;
  dialogDescription: string;
  submitButton: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const FormDialog = (props: IFormDialogProps) => {
  return (
    <Dialog open={props.isOpen} onOpenChange={props.setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{props.dialogTitle}</DialogTitle>
          <DialogDescription>{props.dialogDescription}</DialogDescription>
        </DialogHeader>
        {props.children}
        <DialogFooter className={'border-0 bg-transparent'}>
          <DialogClose asChild>
            <Button variant={'outline'}>Close</Button>
          </DialogClose>
          {props.submitButton}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { FormDialog };
