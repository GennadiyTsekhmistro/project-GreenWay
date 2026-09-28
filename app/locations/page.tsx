import { Suspense } from 'react';

import FiltersPanel from '@/components/FiltersPanel/FiltersPanel';
import LocationsGrid from '@/components/LocationsGrid/LocationsGrid';
import Loader from '@/components/ui/Loader/Loader';

export default function LocationsPage() {
  return (
    <section className="container">
      <h1>Усі місця відпочинку</h1>
      {/* Suspense потрібен, бо FiltersPanel і LocationsGrid читають useSearchParams */}
      <Suspense fallback={<Loader />}>
        <FiltersPanel />
        <LocationsGrid />
      </Suspense>
    </section>
  );
}
