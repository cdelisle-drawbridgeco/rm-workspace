import { Suspense } from 'react';
import EnablementContent from './enablement-content';

export default function EnablementPage() {
  return (
    <main className="mx-auto max-w-6xl" style={{ height: 'calc(100vh - 44px)' }}>
      <Suspense>
        <EnablementContent />
      </Suspense>
    </main>
  );
}
