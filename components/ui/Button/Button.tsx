// Власник: TBD (див. docs/FRONTEND_TASKS.md)
// Кнопка/посилання-кнопка з варіантами за UI Kit
// TODO: верстка за макетом у 3 брейкпоінтах; 'use client' додай, якщо потрібні хуки/події

import css from './Button.module.css';

type Props = {
  children: React.ReactNode;
  href?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({ children }: Props) {
  return <div className={css.button}>Button — TODO</div>;
}
