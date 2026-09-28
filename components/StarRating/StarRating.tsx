// Власник: TBD (див. docs/FRONTEND_TASKS.md)
// Зірки: показ із половинками + інтерактивний вибір
// TODO: верстка за макетом у 3 брейкпоінтах; 'use client' додай, якщо потрібні хуки/події

import css from './StarRating.module.css';

type Props = { value: number; onChange?: (value: number) => void };

export default function StarRating({ value }: Props) {
  return <div className={css.starRating}>StarRating — TODO</div>;
}
