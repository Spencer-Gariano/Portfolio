import type { ISubmitUserProps, IUser } from './Types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { UserQueryKeys } from './QueryKeys';
import { createUser, deleteUser, fetchUsers, updateUser } from './UserApi';
import { toast } from 'sonner';

export interface IUseUsersResponse {
  users: IUser[];
  areUsersLoading: boolean;
  onSubmitUser: (data: ISubmitUserProps) => void;
  onDeleteUser: (data: IUser) => void;
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
    mutationFn: async (variables: ISubmitUserProps) => {
      if (variables.mode === 'update' && variables.currentUser) {
        return await updateUser(variables.newUser, variables.currentUser);
      }
      return createUser(variables.newUser);
    },
    onSuccess: (data, variables) => {
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
        toast.success('Updated User');
      } else {
        toast.success('Created User');
      }
    },
    onError: (err) => {
      toast.warning(err.message);
    },
  });

  const { mutate: onDeleteUser } = useMutation({
    mutationFn: async (user: IUser) => {
      return await deleteUser(user);
    },
    onSuccess: (data) => {
      queryClient.setQueryData([UserQueryKeys.GetUsers], (old: IUser[] = []) => {
        return old.filter((u) => u.id !== data);
      });
      toast.success('Deleted User');
    },
    onError: (err) => {
      toast.warning(err.message);
    },
  });

  return {
    users: users ?? [],
    areUsersLoading: areUsersLoading ?? false,
    onSubmitUser: onSubmitUser,
    onDeleteUser: onDeleteUser,
  };
}
