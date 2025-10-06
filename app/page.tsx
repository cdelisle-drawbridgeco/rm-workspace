export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-2xl font-semibold">Renewal Forecast MVP</h1>
      <p className="mt-2 text-gray-600">Use the navigation to access RM, Manager, Exec views.</p>
      <ul className="mt-6 list-disc pl-6">
        <li>
          <a className="text-blue-600 hover:underline" href="/login">Login (passcode)</a>
        </li>
        <li>
          <a className="text-blue-600 hover:underline" href="/rm">RM Workspace</a>
        </li>
        <li>
          <a className="text-blue-600 hover:underline" href="/manager">Manager Summary</a>
        </li>
        <li>
          <a className="text-blue-600 hover:underline" href="/exec">Executive Dashboard</a>
        </li>
        <li>
          <a className="text-blue-600 hover:underline" href="/admin/import">Admin Import</a>
        </li>
      </ul>
    </main>
  );
}

