// Власник: TBD (див. docs/FRONTEND_TASKS.md)
// Функція запиту з браузера до нашого Route Handler (див. lib/api/auth.ts як приклад).
// GET /api/locations/popular?limit=6 → Location[]
import type { Location } from '@/types/location';

export const getPopularLocations = async (_limit = 6): Promise<Location[]> => {
  throw new Error('TODO: getPopularLocations');
};
