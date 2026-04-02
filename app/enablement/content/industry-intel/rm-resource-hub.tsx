'use client';

import React from 'react';
import { SectionHeading, HeroSection, LastUpdated } from '../../components/shared-ui';

type Resource = {
  name: string;
  description: string;
  url: string;
};

function ResourceCard({ name, description, url }: Resource) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-db-aqua/50 hover:bg-db-aqua/5"
    >
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-db-dark group-hover:text-db-aqua-dark transition-colors">
          {name}
        </p>
        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{description}</p>
        <p className="text-xs text-db-aqua-dark/70 mt-1 truncate">{url.replace(/^https?:\/\//, '')}</p>
      </div>
      <span className="text-gray-300 group-hover:text-db-aqua-dark transition-colors mt-0.5 shrink-0 text-sm">↗</span>
    </a>
  );
}

function ResourceSection({
  icon,
  title,
  subtitle,
  resources,
  placeholder,
}: {
  icon: string;
  title: string;
  subtitle: string;
  resources: Resource[];
  placeholder?: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-base">{icon}</span>
        <h3 className="text-sm font-bold text-db-dark">{title}</h3>
      </div>
      <p className="text-xs text-gray-500 mb-3">{subtitle}</p>
      {resources.length > 0 ? (
        <div className="grid grid-cols-2 gap-3">
          {resources.map((r) => (
            <ResourceCard key={r.url} {...r} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-4 text-center">
          <p className="text-xs text-gray-400">{placeholder ?? 'Resources coming soon — drop suggestions in the team channel.'}</p>
        </div>
      )}
    </div>
  );
}

export default function RMResourceHub() {
  return (
    <>
      <HeroSection
        icon="🔖"
        title="RM Resource Hub"
        subtitle="Curated sources for staying current on threats, regulation, and the alternatives market. Reference these to add context to client conversations — or share with the team when something relevant breaks."
      />
      <LastUpdated date="April 2, 2026 at 12:00 PM" />

      <div className="mt-4 rounded-lg border border-db-aqua/30 bg-db-aqua/5 px-4 py-3">
        <p className="text-xs text-gray-600">
          <strong className="text-db-dark">How to use this:</strong> These are external sources worth monitoring regularly. When a relevant story breaks, use it to open a client conversation — a well-timed insight on a threat or regulatory change signals that you're paying attention to their world.
        </p>
      </div>

      <div className="mt-6 space-y-8">
        <ResourceSection
          icon="🛡️"
          title="Threat Intelligence"
          subtitle="Breaking cybersecurity news, incident coverage, and threat actor reporting."
          resources={[
            {
              name: 'CyberScoop',
              description: 'Breaking cybersecurity news with a focus on public sector and enterprise threats.',
              url: 'https://cyberscoop.com',
            },
            {
              name: 'BleepingComputer',
              description: 'Detailed technical coverage of malware, ransomware, data breaches, and vulnerabilities.',
              url: 'https://www.bleepingcomputer.com',
            },
            {
              name: 'TechRepublic — Security',
              description: 'Security news and analysis aimed at IT and business decision-makers.',
              url: 'https://www.techrepublic.com/topic/security/',
            },
            {
              name: 'FedScoop',
              description: 'Federal government technology and cybersecurity news — useful for regulatory and policy signals.',
              url: 'https://fedscoop.com',
            },
            {
              name: 'The Hacker News',
              description: 'High-volume cybersecurity news covering vulnerabilities, breaches, and threat actor activity.',
              url: 'https://thehackernews.com',
            },
          ]}
        />

        <ResourceSection
          icon="⚖️"
          title="Regulatory Updates"
          subtitle="SEC, CFTC, FCA, and other regulatory bodies — rule-making, enforcement actions, and exam guidance."
          resources={[]}
          placeholder="No sources added yet — suggest links in the team channel and we'll add them here."
        />

        <ResourceSection
          icon="📈"
          title="Alternative Investment Industry"
          subtitle="Hedge fund, private equity, and broader alts market news — LP trends, fundraising, and industry moves."
          resources={[
            {
              name: 'AltsWire',
              description: 'Daily alternative investment news covering hedge funds, private equity, and real assets.',
              url: 'https://altswire.com',
            },
            {
              name: 'InvestmentNews — Alternatives',
              description: 'Alternative investment coverage for financial advisors — fund flows, allocator sentiment, and product news.',
              url: 'https://www.investmentnews.com/alternatives',
            },
          ]}
        />
      </div>
    </>
  );
}
