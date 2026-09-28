// Власник: TBD (див. docs/FRONTEND_TASKS.md)
// Функція запиту з браузера до нашого Route Handler (див. lib/api/auth.ts як приклад).
// PATCH /api/locations/:locationId, multipart/form-data → Location
import type { Location } from '@/types/location';

export const updateLocation = async (
  _locationId: string,
  _formData: FormData,
): Promise<Location> => {
  throw new Error('TODO: updateLocation');
};
