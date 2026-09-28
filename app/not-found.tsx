import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container">
      <h1>404 — сторінку не знайдено</h1>
      <Link href="/">На головну</Link>
    </section>
  );
}
