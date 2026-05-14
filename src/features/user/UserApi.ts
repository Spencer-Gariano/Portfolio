import type { IUser } from './Types';
import { mockUsers } from './Users.Mock';

export async function fetchUsers(): Promise<IUser[]> {
  // simulate network delay (optional but useful early)
  await new Promise((resolve) => setTimeout(resolve, 300));

  return mockUsers;
}
