import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from '@/components/ui/Dialog';
import type { IUser } from '../Types';
import { Button } from '@/components/ui/Button';

export interface IUserDeleteDialogProps {
  user: IUser;
  onDeleteUser: (user: IUser) => void;
  isDeleteOpen: boolean;
  onDeleteDialogChange: (value: boolean) => void;
}

const UserDeleteDialog = (props: IUserDeleteDialogProps) => {
  return (
    <Dialog open={props.isDeleteOpen} onOpenChange={props.onDeleteDialogChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete user?</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>
        <DialogFooter className={'border-0 bg-transparent'}>
          <DialogClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DialogClose>
          <Button
            variant='destructive'
            onClick={() => {
              props.onDeleteUser(props.user);
            }}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { UserDeleteDialog };
