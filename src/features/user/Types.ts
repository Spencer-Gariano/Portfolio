export type UserStatus = 'active' | 'pending';

export interface IUser {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  lastLoginAt: string;
  status: UserStatus;
}

export type UserFormMode = 'create' | 'edit' | 'readonly';

//enforce that no user object can be assocated with the create user dialog
export type CreateUserDialogProps = {
  mode: 'create';
  user?: never;
};

export type EditUserDialogProps = {
  mode: 'edit';
  user: IUser;
};
