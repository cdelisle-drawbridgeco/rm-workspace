'use client';
import { useState } from 'react';

export default function ImportPage() {
  const [text, setText] = useState('');
  const [resText, setResText] = useState('');

  async function onImport() {
    const res = await fetch('/api/import/csv', {
      method: 'POST',
      headers: { 'Content-Type': 'text/csv' },
      body: text
    });
    const body = await res.text();
    setResText(`${res.status}: ${body}`);
  }

  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-2xl font-semibold">Admin Import (CSV)</h1>
      <p className="mt-2 text-gray-600">Paste CSV content and import. MVP mapping expected header names.</p>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        className="mt-4 h-64 w-full rounded border p-2 font-mono text-sm"
        placeholder="Account Name,Opportunity Name,Renewal Date,Expiring ARR,Stage,Probability,Health Score,Risk Flag,Product Family,Term Months,Owner Name,Region,Segment"
      />
      <div className="mt-3">
        <button onClick={onImport} className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Import
        </button>
      </div>
      {resText && <pre className="mt-4 rounded bg-gray-100 p-2 text-sm">{resText}</pre>}
    </main>
  );
}

