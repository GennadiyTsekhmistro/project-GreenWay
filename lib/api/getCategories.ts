// Власник: TBD (див. docs/FRONTEND_TASKS.md)
// Функція запиту з браузера до нашого Route Handler (див. lib/api/auth.ts як приклад).
// GET /api/categories → { regions, locationTypes }
import type { Categories } from '@/types/category';

export const getCategories = async (): Promise<Categories> => {
  throw new Error('TODO: getCategories');
};
