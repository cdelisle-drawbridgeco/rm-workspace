'use client';

import { HeroSection } from '../../components/shared-ui';

export default function MarketingMaterials() {
  const categories = [
    {
      icon: '📊',
      title: 'Pitch Decks',
      description:
        'Company overview and solution pitch decks for prospects and partner meetings.',
      count: 12,
    },
    {
      icon: '📋',
      title: 'Case Studies',
      description:
        'Client success stories demonstrating measurable security improvements and ROI.',
      count: 8,
    },
    {
      icon: '📄',
      title: 'One-Pagers',
      description:
        'Product and service one-pagers for quick reference during sales conversations.',
      count: 15,
    },
    {
      icon: '⚔️',
      title: 'Battle Cards',
      description:
        'Competitive positioning guides with objection handling and differentiation points.',
      count: 6,
    },
  ];

  return (
    <>
      <HeroSection
        icon="📁"
        title="Marketing Materials"
        subtitle="Sales collateral, competitive intelligence, and customer-facing resources."
      />

      <div className="mt-6 grid grid-cols-2 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="rounded-lg border border-gray-200 bg-white p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">{cat.icon}</span>
              <div className="flex-1">
                <p className="font-semibold text-db-dark">{cat.title}</p>
                <p className="mt-1 text-sm text-gray-600">{cat.description}</p>
                <p className="mt-3 text-xs text-gray-400">
                  {cat.count} files available
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-lg border-2 border-dashed border-db-aqua/40 bg-db-aqua/5 p-6 text-center">
        <span className="text-3xl">🔗</span>
        <p className="mt-2 font-semibold text-db-dark font-heading">
          Connect to SharePoint
        </p>
        <p className="mt-1 text-sm text-gray-500">
          Link your organization&apos;s SharePoint library to access and sync marketing
          materials directly within Drawbridge.
        </p>
        <button
          disabled
          className="mt-4 rounded-md bg-db-aqua/30 px-5 py-2 text-sm font-medium text-db-dark cursor-not-allowed"
        >
          Coming Soon
        </button>
      </div>
    </>
  );
}
