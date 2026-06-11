import { httpClient } from '@/lib/HttpClient';
import type { IUser, OrderBy, UserFormData, UserSort } from './Types';
import { api } from '@/lib/Api';

export async function fetchUsers(params?: { sort?: UserSort; order?: OrderBy }): Promise<IUser[]> {
  const query = new URLSearchParams();

  if (params?.sort) query.set('sort', params.sort);
  if (params?.order) query.set('order', params.order);

  const url = `${api.users.root()}${query.toString() ? `?${query}` : ''}`;

  return httpClient<IUser[]>(url);
}

export async function createUser(user: UserFormData): Promise<IUser> {
  return httpClient<IUser>(api.users.root(), { method: 'POST', body: JSON.stringify(user) });
}

export async function updateUser(updatedUser: UserFormData, currentUser: IUser): Promise<IUser> {
  return httpClient<IUser>(api.users.byId(currentUser.id), {
    method: 'PUT',
    body: JSON.stringify(updatedUser),
  });
}

export async function deleteUser(user: IUser): Promise<string> {
  return httpClient<string>(api.users.byId(user.id), { method: 'DELETE' });
}
