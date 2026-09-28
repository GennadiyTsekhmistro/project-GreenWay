// Власник: TBD (див. docs/FRONTEND_TASKS.md)
// Спільна картка: фото, тип, зірки, назва, «Переглянути локацію», опційно «Редагувати». Тільки пропси, без запитів
// TODO: верстка за макетом у 3 брейкпоінтах; 'use client' додай, якщо потрібні хуки/події

import type { Location } from '@/types/location';
import css from './LocationCard.module.css';

type Props = { location: Location; showEdit?: boolean };

export default function LocationCard({ location, showEdit }: Props) {
  return <div className={css.locationCard}>LocationCard — TODO</div>;
}
