// Власник: TBD (див. docs/FRONTEND_TASKS.md)
// Функція запиту з браузера до нашого Route Handler (див. lib/api/auth.ts як приклад).
// GET /api/users/:userId/locations?page&limit → PaginatedResponse<Location>
import type { PaginatedResponse } from '@/types/api';
import type { Location } from '@/types/location';

export const getUserLocations = async (
  _userId: string,
  _page = 1,
  _limit = 6,
): Promise<PaginatedResponse<Location>> => {
  throw new Error('TODO: getUserLocations');
};
