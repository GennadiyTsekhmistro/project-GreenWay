// Власник: Олександр (TL)
// Модалка «Ви точно хочете вийти?» (на базі Modal); логаут чистить стор навіть при помилці запиту
// TODO: верстка за макетом у 3 брейкпоінтах; 'use client' додай, якщо потрібні хуки/події

import css from './ConfirmLogoutModal.module.css';

type Props = { onClose: () => void };

export default function ConfirmLogoutModal({ onClose }: Props) {
  return (
    <div className={css.confirmLogoutModal}>
      ConfirmLogoutModal — TODO (Олександр (TL))
    </div>
  );
}
