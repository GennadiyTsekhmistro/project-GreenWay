// Власник: TBD (див. docs/FRONTEND_TASKS.md)
// Аватар, ім'я, кількість статей. Без userId — поточний користувач
// TODO: верстка за макетом у 3 брейкпоінтах; 'use client' додай, якщо потрібні хуки/події

import css from './ProfileInfo.module.css';

type Props = { userId?: string };

export default function ProfileInfo({ userId }: Props) {
  return <div className={css.profileInfo}>ProfileInfo — TODO</div>;
}
