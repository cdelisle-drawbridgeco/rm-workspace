import React from 'react';

export function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm border border-gray-100 text-center">
      <p className="text-2xl font-bold font-heading text-db-dark">{value}</p>
      <p className="mt-1 text-xs text-gray-500">{label}</p>
    </div>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-8 mb-3 text-lg font-semibold font-heading text-db-dark">
      {children}
    </h3>
  );
}

export function CharacteristicCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4">
      <p className="font-semibold text-db-dark">{title}</p>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
    </div>
  );
}

export function TermBadge({ term, definition }: { term: string; definition: string }) {
  return (
    <div className="rounded-lg bg-db-aqua/10 border border-db-aqua/30 p-3">
      <p className="text-sm font-semibold text-db-dark">{term}</p>
      <p className="mt-1 text-xs text-gray-600">{definition}</p>
    </div>
  );
}

export function HeroSection({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-xl bg-gradient-to-r from-db-dark to-db-dark/90 p-8 text-white">
      <span className="text-4xl">{icon}</span>
      <h2 className="mt-3 text-2xl font-bold font-heading">{title}</h2>
      <p className="mt-2 text-sm text-gray-300">{subtitle}</p>
    </div>
  );
}

export function DrawbridgeAngle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 rounded-lg border-l-4 border-db-orange bg-orange-50 p-5">
      <p className="mb-2 text-sm font-semibold text-db-orange uppercase tracking-wide">
        What This Means for Drawbridge
      </p>
      <div className="text-sm text-gray-700 space-y-2">{children}</div>
    </div>
  );
}

export function SubSection({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6 rounded-lg border border-gray-200 bg-white p-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">{icon}</span>
        <h4 className="font-semibold font-heading text-db-dark">{title}</h4>
      </div>
      <div className="text-sm text-gray-700 leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}

export function LastUpdated({ date }: { date: string }) {
  return (
    <p className="mt-8 text-xs text-gray-400 text-right">
      Last updated: {date}
    </p>
  );
}

export function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="flex items-center gap-1 overflow-x-auto py-3">
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          <div className="shrink-0 rounded-md bg-db-dark/5 border border-gray-200 px-3 py-2 text-xs font-medium text-db-dark text-center min-w-[100px]">
            {step}
          </div>
          {i < steps.length - 1 && (
            <span className="shrink-0 text-gray-300 text-lg">&rarr;</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
