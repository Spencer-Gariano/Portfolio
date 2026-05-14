import { useMemo } from 'react';
import { mockUsers } from './Users.Mock';
import type { IUser } from './Types';
import { useQuery } from '@tanstack/react-query';
import { UserQueryKeys } from './QueryKeys';
import { fetchUsers } from './UserApi';

export interface IUseUsersResponse {
  users: IUser[];
  areUsersLoading: boolean;
}

export function useUsers(): IUseUsersResponse {
  const { isLoading: areUsersLoading, data: users } = useQuery({
    queryKey: [UserQueryKeys.GetUsers],
    queryFn: async () => {
      const data = await fetchUsers();
      return data;
    },
  });

  return {
    users: users ?? [],
    areUsersLoading: areUsersLoading ?? false,
  };
}
