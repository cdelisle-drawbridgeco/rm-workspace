'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const search = useSearchParams();
  const [code, setCode] = useState('');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code })
    });
    if (res.ok) {
      const redirect = search.get('redirect') || '/rm';
      router.push(redirect);
    } else {
      setError('Invalid passcode');
    }
  }

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-md flex-col justify-center p-6">
      <h1 className="text-xl font-semibold">Enter access passcode</h1>
      <form onSubmit={onSubmit} className="mt-4 space-y-3">
        <input
          className="w-full rounded border p-2"
          placeholder="Passcode"
          type="password"
          value={code}
          onChange={e => setCode(e.target.value)}
        />
        <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700" type="submit">
          Continue
        </button>
        {error && <p className="text-sm text-red-600">{error}</p>}
      </form>
    </main>
  );
}

