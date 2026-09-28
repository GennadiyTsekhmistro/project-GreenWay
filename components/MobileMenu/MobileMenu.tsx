// Власник: TBD (див. docs/FRONTEND_TASKS.md)
// Бургер-меню на весь екран (tablet/mobile), блокує скрол сторінки
// TODO: верстка за макетом у 3 брейкпоінтах; 'use client' додай, якщо потрібні хуки/події

import css from './MobileMenu.module.css';

type Props = { onClose: () => void };

export default function MobileMenu({ onClose }: Props) {
  return <div className={css.mobileMenu}>MobileMenu — TODO</div>;
}
