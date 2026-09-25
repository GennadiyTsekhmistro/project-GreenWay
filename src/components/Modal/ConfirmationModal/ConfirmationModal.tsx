"use client";

import Link from "next/link";
import Image from "next/image";

type ConfirmationModalProps = {
  title: string;
  confirmButtonText: string;
  cancelButtonText: string;
  onConfirm: () => void;
  onCancel: () => void;
  isLoading?: boolean;
};

export default function ConfirmationModal({
  title,
  confirmButtonText,
  cancelButtonText,
  onConfirm,
  onCancel,
  isLoading = false,
}: ConfirmationModalProps) {
  return (
    <div>
      <nav>
        <div>
          {/* Логотип компанії */}
          <div>
            <Image
              src="/logo.svg"
              alt="Логотип компанії"
              width={121}
              height={29}
            />
          </div>

          {/* Навігація */}
          <div>
            <Link href="/">Головна</Link>
            <Link href="/places">Місця відпочинку</Link>
          </div>

          {/* Кнопки */}
          <div>
            <button type="button">Вхід</button>
            <button type="button">Реєстрація</button>
          </div>
        </div>
      </nav>

      <div>
        <button type="button" onClick={onCancel} disabled={isLoading}>
          ×
        </button>

        <h2>{title}</h2>

        <div>
          <button type="button" onClick={onCancel} disabled={isLoading}>
            {cancelButtonText}
          </button>

          <button type="button" onClick={onConfirm} disabled={isLoading}>
            {isLoading ? "Завантаження..." : confirmButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}
