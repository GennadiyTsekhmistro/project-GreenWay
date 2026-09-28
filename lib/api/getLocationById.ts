// Власник: TBD (див. docs/FRONTEND_TASKS.md)
// Функція запиту з браузера до нашого Route Handler (див. lib/api/auth.ts як приклад).
// GET /api/locations/:locationId → Location (з ownerId і feedbacksId)
import type { Location } from '@/types/location';

export const getLocationById = async (_locationId: string): Promise<Location> => {
  throw new Error('TODO: getLocationById');
};
