// Власник: TBD (див. docs/FRONTEND_TASKS.md)
// Функція запиту з браузера до нашого Route Handler (див. lib/api/auth.ts як приклад).
// GET /api/feedbacks?limit=6 → Feedback[]
import type { Feedback } from '@/types/feedback';

export const getLatestFeedbacks = async (_limit = 6): Promise<Feedback[]> => {
  throw new Error('TODO: getLatestFeedbacks');
};
