import { Suspense } from 'react';
import EnablementContent from './enablement-content';
import { getVisibleCategories } from './registry';

export default function EnablementPage() {
  const categories = getVisibleCategories();
  return (
    <main className="mx-auto max-w-6xl" style={{ height: 'calc(100vh - 44px)' }}>
      <Suspense>
        <EnablementContent categories={categories} />
      </Suspense>
    </main>
  );
}
