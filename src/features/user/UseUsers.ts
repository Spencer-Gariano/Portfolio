import type { ISubmitUserProps, IUser } from './Types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { UserQueryKeys } from './QueryKeys';
import { createUser, fetchUsers, updateUser } from './UserApi';
import { toast } from 'sonner';

export interface IUseUsersResponse {
  users: IUser[];
  areUsersLoading: boolean;
  onSubmitUser: (data: ISubmitUserProps) => void;
}

export function useUsers(): IUseUsersResponse {
  const queryClient = useQueryClient();

  const { isLoading: areUsersLoading, data: users } = useQuery({
    queryKey: [UserQueryKeys.GetUsers],
    queryFn: async () => {
      const data = await fetchUsers();
      return data;
    },
  });

  const { mutate: onSubmitUser } = useMutation({
    mutationFn: (variables: ISubmitUserProps) => {
      if (variables.mode === 'update' && variables.currentUser) {
        return updateUser(variables.newUser, variables.currentUser);
      }
      return createUser(variables.newUser);
    },
    onSuccess: (data, variables, onMutateResult) => {
      queryClient.setQueryData([UserQueryKeys.GetUsers], (old: IUser[] = []) => {
        const index = old.findIndex((u) => u.id === data.id);
        if (index === -1) {
          return [...old, data]; // create
        }
        const copy = [...old];
        copy[index] = data; // update
        return copy;
      });
      if (variables.mode === 'update') {
        toast('Updated User');
      } else {
        toast('Created User');
      }
    },
    onError: (err) => {
      toast(err.message);
    },
  });

  return {
    users: users ?? [],
    areUsersLoading: areUsersLoading ?? false,
    onSubmitUser: onSubmitUser,
  };
}
