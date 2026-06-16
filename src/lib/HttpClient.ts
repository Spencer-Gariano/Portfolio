import { env } from '@/config/Env';

export const httpClient = async <T>(input: string, init?: RequestInit): Promise<T> => {
  const requiresToken = ['POST', 'PUT', 'PATCH', 'DELETE'].includes(
    init?.method?.toUpperCase() ?? 'GET',
  );

  const response = await fetch(input, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(requiresToken && {
        'x-api-token': env.API_TOKEN,
      }),
      ...init?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
};
