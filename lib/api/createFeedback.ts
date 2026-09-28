// Власник: TBD (див. docs/FRONTEND_TASKS.md)
// Функція запиту з браузера до нашого Route Handler (див. lib/api/auth.ts як приклад).
// POST /api/feedbacks { locationId, rate, description } → Feedback
import type { Feedback } from '@/types/feedback';

export type CreateFeedbackRequest = {
  locationId: string;
  rate: number;
  description: string;
};

export const createFeedback = async (_body: CreateFeedbackRequest): Promise<Feedback> => {
  throw new Error('TODO: createFeedback');
};
