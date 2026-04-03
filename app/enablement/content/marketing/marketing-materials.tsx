'use client';

import { HeroSection, SectionHeading, DrawbridgeAngle, LastUpdated } from '../../components/shared-ui';

type Material = {
  title: string;
  description: string;
  href: string;
  tag?: string;
};

function MaterialCard({ title, description, href, tag }: Material) {
  const ready = href !== '#';
  return (
    <a
      href={ready ? href : undefined}
      target={ready ? '_blank' : undefined}
      rel={ready ? 'noopener noreferrer' : undefined}
      className={`group flex items-start justify-between rounded-lg border bg-white p-4 transition-all ${
        ready
          ? 'border-gray-200 hover:shadow-md hover:border-db-aqua/40 cursor-pointer'
          : 'border-dashed border-gray-300 cursor-default opacity-60'
      }`}
    >
      <div className="flex items-start gap-3 flex-1 min-w-0">
        <span className="text-xl mt-0.5 shrink-0">{ready ? '📄' : '🔒'}</span>
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <p className={`font-medium text-sm ${ready ? 'text-db-dark group-hover:text-db-aqua-dark transition-colors' : 'text-gray-500'}`}>
              {title}
            </p>
            {tag && (
              <span className="rounded-full bg-db-aqua/20 px-2 py-0.5 text-xs font-semibold text-db-aqua-dark shrink-0">
                {tag}
              </span>
            )}
            {!ready && (
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-400 shrink-0">
                Link pending
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-0.5">{description}</p>
        </div>
      </div>
      {ready && (
        <span className="text-gray-400 group-hover:text-db-aqua-dark transition-colors text-sm ml-4 shrink-0 mt-0.5">↗</span>
      )}
    </a>
  );
}

// ── Replace '#' with the SharePoint link once IT provides it ──────────────────

const OVERVIEW_DOCS: Material[] = [
  {
    title: 'Drawbridge Solutions 2026',
    description: 'Full company overview — the complete Drawbridge platform, service lines, and value proposition for alternative investment firms.',
    href: '#',
  },
  {
    title: 'AI Risk Intelligence Overview',
    description: 'Official client-facing overview of AI Risk Intelligence — secure AI adoption for alternative investment firms. Use with prospects and referral partners.',
    href: '#',
    tag: 'New',
  },
  {
    title: 'Vendor Risk Assessment Overview',
    description: 'One-pager on Drawbridge Vendor Cyber Risk Services — the DCA model, third-party risk management, and what clients get.',
    href: '#',
  },
  {
    title: 'PE Portfolio Company Cyber Risk Intelligence',
    description: 'Overview of Drawbridge\'s PE PortCo solution — cyber risk intelligence for PE sponsors across the deal lifecycle.',
    href: '#',
  },
];

const BATTLE_CARDS: Material[] = [
  {
    title: 'TrueGuard Battle Card',
    description: 'Competitive positioning and objection handling for TrueGuard — continuous control validation vs. annual attestation.',
    href: '#',
  },
  {
    title: 'PE Cyber Audit Battle Card',
    description: 'Positioning guide for PE portfolio company cyber audits — how to frame the conversation with sponsors and portfolio management teams.',
    href: '#',
  },
];

export default function MarketingMaterials() {
  return (
    <>
      <HeroSection
        icon="📁"
        title="Marketing Materials"
        subtitle="Official Drawbridge sales collateral — overviews, one-pagers, and battle cards."
      />
      <LastUpdated date="April 3, 2026 at 9:00 AM" />

      <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">
        <p className="text-xs text-amber-800">
          <strong>Links coming soon —</strong> SharePoint access is being set up with IT. Files will open directly in your browser once links are added.
        </p>
      </div>

      <SectionHeading>Overviews & One-Pagers</SectionHeading>
      <div className="space-y-2">
        {OVERVIEW_DOCS.map((m) => (
          <MaterialCard key={m.title} {...m} />
        ))}
      </div>

      <SectionHeading>Battle Cards</SectionHeading>
      <div className="space-y-2">
        {BATTLE_CARDS.map((m) => (
          <MaterialCard key={m.title} {...m} />
        ))}
      </div>

      <DrawbridgeAngle>
        <p>
          Drawbridge is trusted by <strong>1,200+ alternative investment firms</strong> and
          has supported over <strong>2,000 successful ODD reviews</strong>. Every piece of
          collateral here is built on that proof — designed to give clients and prospects
          confidence they&apos;re working with the purpose-built leader in alternative asset
          management cybersecurity.
        </p>
        <p className="mt-2">
          Use these materials to anchor conversations in outcomes, not features. The
          strongest pitch is the one that shows a client exactly where they are —
          and what it costs to stay there.
        </p>
      </DrawbridgeAngle>
    </>
  );
}
