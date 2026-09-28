// Власник: TBD (див. docs/FRONTEND_TASKS.md)
// Базова модалка: портал, хрестик, backdrop, Escape, блок скролу
// TODO: верстка за макетом у 3 брейкпоінтах; 'use client' додай, якщо потрібні хуки/події

import css from './Modal.module.css';

type Props = { children: React.ReactNode; onClose: () => void };

export default function Modal({ children }: Props) {
  return <div className={css.modal}>Modal — TODO</div>;
}
