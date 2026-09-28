// Власник: TBD (див. docs/FRONTEND_TASKS.md)
// Зірки, текст, автор, назва локації (якщо є)
// TODO: верстка за макетом у 3 брейкпоінтах; 'use client' додай, якщо потрібні хуки/події

import type { Feedback } from '@/types/feedback';
import css from './FeedbackCard.module.css';

type Props = { feedback: Feedback };

export default function FeedbackCard({ feedback }: Props) {
  return <div className={css.feedbackCard}>FeedbackCard — TODO</div>;
}
