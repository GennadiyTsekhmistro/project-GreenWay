// Власник: TBD (див. docs/FRONTEND_TASKS.md)
// Модалка для гостя «Щоб залишити відгук — увійдіть» (Увійти / Зареєструватись)
// TODO: верстка за макетом у 3 брейкпоінтах; 'use client' додай, якщо потрібні хуки/події

import css from './AuthPromptModal.module.css';

type Props = { onClose: () => void };

export default function AuthPromptModal({ onClose }: Props) {
  return <div className={css.authPromptModal}>AuthPromptModal — TODO</div>;
}
