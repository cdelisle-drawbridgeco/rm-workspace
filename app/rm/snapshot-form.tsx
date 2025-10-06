'use client';
import { useState } from 'react';

export default function RmSnapshotForm({ usdDefaults = false }: { usdDefaults?: boolean }) {
  const [scopeName, setScopeName] = useState('Alex Lee');
  const [best, setBest] = useState(usdDefaults ? '15000' : '1500000');
  const [worst, setWorst] = useState(usdDefaults ? '10000' : '1000000');
  const [callV, setCallV] = useState(usdDefaults ? '12000' : '1200000');
  const [confidence, setConfidence] = useState('75');
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('Saving...');
    const res = await fetch('/api/snapshots', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        scopeType: 'RM',
        scopeName,
        best: Number(best),
        worst: Number(worst),
        call: Number(callV),
        confidencePct: Number(confidence),
        notes
      })
    });
    if (res.ok) {
      setStatus('Saved.');
      setNotes('');
    } else {
      const txt = await res.text();
      setStatus(`Error: ${txt}`);
    }
  }

  return (
    <form onSubmit={submit} className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
      <label className="text-sm">
        <div className="text-gray-600">RM</div>
        <input className="w-full rounded border p-2" value={scopeName} onChange={e => setScopeName(e.target.value)} />
      </label>
      <label className="text-sm">
        <div className="text-gray-600">Best (USD)</div>
        <input className="w-full rounded border p-2" value={best} onChange={e => setBest(e.target.value)} />
      </label>
      <label className="text-sm">
        <div className="text-gray-600">Worst (USD)</div>
        <input className="w-full rounded border p-2" value={worst} onChange={e => setWorst(e.target.value)} />
      </label>
      <label className="text-sm">
        <div className="text-gray-600">Call (USD)</div>
        <input className="w-full rounded border p-2" value={callV} onChange={e => setCallV(e.target.value)} />
      </label>
      <label className="text-sm">
        <div className="text-gray-600">Confidence %</div>
        <input className="w-full rounded border p-2" value={confidence} onChange={e => setConfidence(e.target.value)} />
      </label>
      <label className="sm:col-span-3 text-sm">
        <div className="text-gray-600">Notes</div>
        <input className="w-full rounded border p-2" value={notes} onChange={e => setNotes(e.target.value)} />
      </label>
      <div className="sm:col-span-3 flex items-center gap-3">
        <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700" type="submit">Save</button>
        {status && <span className="text-sm text-gray-700">{status}</span>}
      </div>
    </form>
  );
}

