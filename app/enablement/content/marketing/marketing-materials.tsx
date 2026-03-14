'use client';

import { HeroSection, LastUpdated } from '../../components/shared-ui';

const ONE_PAGERS = [
  {
    title: 'AI Security & Governance Bundle',
    description:
      'Client-facing overview of the Assessment, Policy, and Training bundle. Designed for sharing with prospects and referral partners.',
    href: '/marketing/ai-bundle',
    tag: 'New',
  },
];

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
      <LastUpdated date="March 14, 2026" />

      {/* One-Pagers */}
      <div className="mt-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">📄</span>
          <h2 className="font-semibold text-db-dark">One-Pagers</h2>
        </div>
        <div className="space-y-2">
          {ONE_PAGERS.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md hover:border-db-aqua/40 transition-all group"
            >
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">📄</span>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-db-dark text-sm group-hover:text-db-aqua-dark transition-colors">
                      {item.title}
                    </p>
                    {item.tag && (
                      <span className="rounded-full bg-db-aqua/20 px-2 py-0.5 text-xs font-semibold text-db-aqua-dark">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                </div>
              </div>
              <span className="text-gray-400 group-hover:text-db-aqua-dark transition-colors text-sm ml-4">↗</span>
            </a>
          ))}
        </div>
      </div>

      {/* Other categories */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="rounded-lg border border-gray-200 bg-white p-5"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{cat.icon}</span>
              <div className="flex-1">
                <p className="font-semibold text-db-dark text-sm">{cat.title}</p>
                <p className="mt-1 text-xs text-gray-600">{cat.description}</p>
                <p className="mt-3 text-xs text-gray-400">
                  {cat.count} files available
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-lg border-2 border-dashed border-db-aqua/40 bg-db-aqua/5 p-6 text-center">
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
