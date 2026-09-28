// Власник: TBD (див. docs/FRONTEND_TASKS.md)
// Модалка відгуку: текст + зірки, «Надіслати» / «Відмінити»
// TODO: верстка за макетом у 3 брейкпоінтах; 'use client' додай, якщо потрібні хуки/події

import css from './AddFeedbackModal.module.css';

type Props = { locationId: string; onClose: () => void };

export default function AddFeedbackModal({ locationId }: Props) {
  return <div className={css.addFeedbackModal}>AddFeedbackModal — TODO</div>;
}
