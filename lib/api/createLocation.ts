// Власник: TBD (див. docs/FRONTEND_TASKS.md)
// Функція запиту з браузера до нашого Route Handler (див. lib/api/auth.ts як приклад).
// POST /api/locations, multipart/form-data (image, name, type, region, description) → Location
import type { Location } from '@/types/location';

export const createLocation = async (_formData: FormData): Promise<Location> => {
  throw new Error('TODO: createLocation');
};
