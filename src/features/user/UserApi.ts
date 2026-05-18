import type { IUser, UserFormData } from './Types';
import { mockUsers } from './Users.Mock';

export async function fetchUsers(): Promise<IUser[]> {
  // simulate network delay (optional but useful early)
  await new Promise((resolve) => setTimeout(resolve, 300));

  return mockUsers;
}

export async function createUser(user: UserFormData): Promise<IUser> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const timestamp = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');
  return {
    ...user,
    id: (mockUsers.length + 1).toString(),
    lastLoginAt: timestamp,
    createdAt: timestamp,
    status: 'pending',
  } satisfies IUser;
}

export async function updateUser(updatedUser: UserFormData, currentUser: IUser): Promise<IUser> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return {
    ...currentUser,
    ...updatedUser,
  } satisfies IUser;
}
