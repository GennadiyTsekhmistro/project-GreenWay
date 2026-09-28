// Власник: TBD (див. docs/FRONTEND_TASKS.md)
// Функція запиту з браузера до нашого Route Handler (див. lib/api/auth.ts як приклад).
// GET /api/users/:userId → User
import type { User } from '@/types/user';

export const getUserById = async (_userId: string): Promise<User> => {
  throw new Error('TODO: getUserById');
};
