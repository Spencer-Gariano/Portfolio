import { env } from '@/config/Env';

export const api = {
  users: {
    root: () => `${env.API_URL}/users`,
    byId: (id: string) => `${env.API_URL}/users/${id}`,
  },
};
