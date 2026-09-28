// Власник: TBD (див. docs/FRONTEND_TASKS.md)
// Функція запиту з браузера до нашого Route Handler (див. lib/api/auth.ts як приклад).
// GET /api/locations?page&limit&region&type&search&sort → PaginatedResponse<Location>
import type { PaginatedResponse } from '@/types/api';
import type { Location, LocationsQuery } from '@/types/location';

export const getLocations = async (
  _query: LocationsQuery,
): Promise<PaginatedResponse<Location>> => {
  throw new Error('TODO: getLocations');
};
