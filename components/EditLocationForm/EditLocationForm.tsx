// Власник: TBD (див. docs/FRONTEND_TASKS.md)
// Тягне локацію за id і передає її в LocationForm; «Відмінити» відкочує зміни; submit → PATCH
// TODO: верстка за макетом у 3 брейкпоінтах; 'use client' додай, якщо потрібні хуки/події

import css from './EditLocationForm.module.css';

type Props = { locationId: string };

export default function EditLocationForm({ locationId }: Props) {
  return <div className={css.editLocationForm}>EditLocationForm — TODO</div>;
}
