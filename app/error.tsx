'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <section className="container">
      <h1>Щось пішло не так</h1>
      <p>{error.message}</p>
      <button type="button" onClick={reset}>
        Спробувати ще раз
      </button>
    </section>
  );
}
