import type { IUser } from './Types';

export const mockUsers: IUser[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    createdAt: '2025-01-10T12:00:00Z',
    lastLoginAt: '2026-05-12T08:00:00Z',
    status: 'active',
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob@example.com',
    createdAt: '2024-11-03T12:00:00Z',
    lastLoginAt: '2026-05-10T10:30:00Z',
    status: 'pending',
  },
];
