// Власник: TBD (див. docs/FRONTEND_TASKS.md)
// Рейтинг, назва, регіон, тип, автор-посилання, фото, опис
// TODO: верстка за макетом у 3 брейкпоінтах; 'use client' додай, якщо потрібні хуки/події

import css from './LocationDetails.module.css';

type Props = { locationId: string };

export default function LocationDetails({ locationId }: Props) {
  return <div className={css.locationDetails}>LocationDetails — TODO</div>;
}
