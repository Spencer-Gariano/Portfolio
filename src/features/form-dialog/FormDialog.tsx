import { Button } from '@/components/ui/Button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog';
import { type PropsWithChildren } from 'react';

export interface IFormDialogProps extends PropsWithChildren {
  dialogTrigger: React.ReactNode;
  dialogTitle: string;
  dialogDescription: string;
  submitButton: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const FormDialog = (props: IFormDialogProps) => {
  return (
    <Dialog open={props.isOpen} onOpenChange={props.setIsOpen}>
      <DialogTrigger asChild>{props.dialogTrigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{props.dialogTitle}</DialogTitle>
          <DialogDescription>{props.dialogDescription}</DialogDescription>
        </DialogHeader>
        {props.children}
        <DialogFooter>
          <DialogClose>
            <Button variant={'outline'}>Close</Button>
          </DialogClose>
          {props.submitButton}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { FormDialog };
