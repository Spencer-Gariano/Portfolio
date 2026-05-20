import * as z from 'zod';

export type UserStatus = 'active' | 'pending';

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  lastLoginAt: string;
  status: UserStatus;
}

export type UserSchemaMode = 'create' | 'update';

export type UserFormUIState = 'readonly';

export const userFormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.email(),
});

export type UserFormData = z.infer<typeof userFormSchema>;

//enforce that no user object can be assocated with the create user dialog
export type CreateUserDialogProps = {
  mode: 'create';
  onSubmit: (data: ISubmitUserProps) => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  user?: never;
  setUser?: never;
};

export type UpdateUserDialogProps = {
  mode: 'update';
  onSubmit: (data: ISubmitUserProps) => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  user: IUser;
  setUser: (user: IUser | undefined) => void;
};

export interface ISubmitUserProps {
  mode: UserSchemaMode;
  newUser: UserFormData;
  currentUser?: IUser;
}
