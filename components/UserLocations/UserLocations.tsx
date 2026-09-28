// Власник: TBD (див. docs/FRONTEND_TASKS.md)
// Сітка статей користувача (6 / 4), «Показати ще», placeholder «ще не ділився»
// TODO: верстка за макетом у 3 брейкпоінтах; 'use client' додай, якщо потрібні хуки/події

import css from './UserLocations.module.css';

type Props = { userId?: string; isOwnProfile?: boolean };

export default function UserLocations({ userId, isOwnProfile }: Props) {
  return <div className={css.userLocations}>UserLocations — TODO</div>;
}
