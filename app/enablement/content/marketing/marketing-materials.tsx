'use client';

import { HeroSection, SectionHeading, DrawbridgeAngle, LastUpdated } from '../../components/shared-ui';

type Material = {
  title: string;
  description: string;
  filename: string;
  tag?: string;
};

function MaterialCard({ title, description, filename, tag }: Material) {
  const href = `/api/marketing/${encodeURIComponent(filename)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start justify-between rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md hover:border-db-aqua/40 transition-all"
    >
      <div className="flex items-start gap-3 flex-1 min-w-0">
        <span className="text-xl mt-0.5 shrink-0">📄</span>
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="font-medium text-db-dark text-sm group-hover:text-db-aqua-dark transition-colors">
              {title}
            </p>
            {tag && (
              <span className="rounded-full bg-db-aqua/20 px-2 py-0.5 text-xs font-semibold text-db-aqua-dark shrink-0">
                {tag}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-0.5">{description}</p>
          <p className="text-xs text-gray-300 mt-1 truncate">{filename}</p>
        </div>
      </div>
      <span className="text-gray-400 group-hover:text-db-aqua-dark transition-colors text-sm ml-4 shrink-0 mt-0.5">↗</span>
    </a>
  );
}

const OVERVIEW_DOCS: Material[] = [
  {
    title: 'Drawbridge Solutions 2026',
    description: 'Full company overview — the complete Drawbridge platform, service lines, and value proposition for alternative investment firms.',
    filename: 'Drawbridge Solutions 2026.pdf',
  },
  {
    title: 'AI Risk Intelligence Overview',
    description: 'Official client-facing overview of AI Risk Intelligence — secure AI adoption for alternative investment firms. Use with prospects and referral partners.',
    filename: 'Drawbridge - AI Security Overview.pdf',
    tag: 'New',
  },
  {
    title: 'Vendor Risk Assessment Overview',
    description: 'One-pager on Drawbridge Vendor Cyber Risk Services — the DCA model, third-party risk management, and what clients get.',
    filename: 'Drawbridge - Vendor Risk Assessment Overview.pdf',
  },
  {
    title: 'PE Portfolio Company Cyber Risk Intelligence',
    description: 'Overview of Drawbridge\'s PE PortCo solution — cyber risk intelligence for PE sponsors across the deal lifecycle.',
    filename: 'Drawbridge - PE PortCo Cyber Risk Intelligence Overview.pdf',
  },
];

const BATTLE_CARDS: Material[] = [
  {
    title: 'TrueGuard Battle Card',
    description: 'Competitive positioning and objection handling for TrueGuard — continuous control validation vs. annual attestation.',
    filename: 'Drawbridge True Guard Battle Card.pdf',
  },
  {
    title: 'PE Cyber Audit Battle Card',
    description: 'Positioning guide for PE portfolio company cyber audits — how to frame the conversation with sponsors and portfolio management teams.',
    filename: 'PE Cyber Audit Battlecard v2.pdf',
  },
];

export default function MarketingMaterials() {
  return (
    <>
      <HeroSection
        icon="📁"
        title="Marketing Materials"
        subtitle="Official Drawbridge sales collateral — overviews, one-pagers, and battle cards. All materials are served directly from the approved brand library."
      />
      <LastUpdated date="April 3, 2026 at 9:00 AM" />

      <div className="mt-4 rounded-lg border border-db-aqua/30 bg-db-aqua/5 px-4 py-3">
        <p className="text-xs text-gray-600">
          <strong className="text-db-dark">Opens in browser:</strong> Click any file to view the PDF in a new tab. Right-click → Save As to download. These are the approved versions — always use these rather than saved local copies.
        </p>
      </div>

      <SectionHeading>Overviews & One-Pagers</SectionHeading>
      <div className="space-y-2">
        {OVERVIEW_DOCS.map((m) => (
          <MaterialCard key={m.filename} {...m} />
        ))}
      </div>

      <SectionHeading>Battle Cards</SectionHeading>
      <div className="space-y-2">
        {BATTLE_CARDS.map((m) => (
          <MaterialCard key={m.filename} {...m} />
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
