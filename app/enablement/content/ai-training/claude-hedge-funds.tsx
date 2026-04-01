'use client';

import React from 'react';
import {
  StatCard,
  SectionHeading,
  SubSection,
  HeroSection,
  DrawbridgeAngle,
  LastUpdated,
} from '../../components/shared-ui';

function UseCaseCard({
  number,
  title,
  when,
  howTo,
  risks,
}: {
  number: string;
  title: string;
  when: string[];
  howTo: string[];
  risks: string[];
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
      <div className="flex items-center gap-3 bg-db-dark px-5 py-3">
        <span className="text-2xl font-bold text-db-aqua font-mono">{number}</span>
        <h3 className="text-sm font-semibold text-white">{title}</h3>
      </div>
      <div className="grid grid-cols-3 divide-x divide-gray-100">
        <div className="p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-db-aqua-dark mb-2">Use it when</p>
          <ul className="space-y-1.5">
            {when.map((item, i) => (
              <li key={i} className="flex gap-2 text-xs text-gray-700">
                <span className="text-db-aqua-dark mt-0.5 shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-db-aqua-dark mb-2">How to</p>
          <ul className="space-y-1.5">
            {howTo.map((item, i) => (
              <li key={i} className="flex gap-2 text-xs text-gray-700">
                <span className="text-db-aqua-dark mt-0.5 shrink-0">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 mb-2">Risk profile</p>
          <ul className="space-y-1.5">
            {risks.map((item, i) => (
              <li key={i} className="flex gap-2 text-xs text-gray-700">
                <span className="text-amber-500 mt-0.5 shrink-0">⚠</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ClaudeHedgeFunds() {
  return (
    <>
      <HeroSection
        icon="📈"
        title="Claude for Hedge Funds"
        subtitle="How analysts are actually using AI — 4 use cases, how they run them, and what to watch for."
      />
      <LastUpdated date="April 1, 2026 at 9:00 AM" />

      {/* ── Stats Row ─────────────────────────────────────── */}
      <div className="mt-6 grid grid-cols-4 gap-4">
        <StatCard label="Use Cases Generating Measurable Analyst Productivity" value="4" />
        <StatCard label="Most Common Failure Mode" value="Bad inputs" />
        <StatCard label="Source: How Analysts Are Using Claude" value="Active use" />
        <StatCard label="Claude Creates Edge When" value="You do" />
      </div>

      {/* ── Framing ───────────────────────────────────────── */}
      <SectionHeading>What This Is</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        This is a reference for talking to hedge fund clients and executives about how analysts
        are actually using AI tools like Claude — not in theory, but in practice. Four use cases
        are generating real productivity gains at funds today. Each has a specific setup, a clear
        risk profile, and a way to fail if you skip the structure.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mt-2">
        The key framing for any client conversation:{' '}
        <strong>Claude doesn&apos;t create edge on its own. The use case does.</strong> An analyst
        who knows how to run a well-structured decision-support session is getting something
        different out of the tool than one who&apos;s just prompting freehand.
      </p>

      {/* ── The 4 Use Cases ───────────────────────────────── */}
      <SectionHeading>The 4 Alpha-Generating Use Cases</SectionHeading>
      <div className="space-y-4">
        <UseCaseCard
          number="01"
          title="Research & Idea Generation"
          when={[
            'Building or updating a thesis',
            'Need a quick, cited breakdown',
            'Comparing disclosures across quarters',
          ]}
          howTo={[
            'Create one Project per position — load only the 10-K, 10-Qs, transcripts, and thesis',
            'Set instruction: every claim must cite source, section, and period',
            'If it can\'t be sourced from loaded docs, exclude it',
            'Don\'t load broad commentary or documents you haven\'t read',
          ]}
          risks={[
            'Hallucination = missing data — Claude can only work with what you load',
            'Misalignment without a defined instruction block upfront',
          ]}
        />

        <UseCaseCard
          number="02"
          title="Monitoring & Tracking"
          when={[
            'Tracking multiple names simultaneously',
            'Catching filing changes, language shifts, and updates',
          ]}
          howTo={[
            'Drop incoming docs into a folder — filings, transcripts, news',
            'Define materiality upfront: guidance changes, risk factor shifts, capital allocation moves',
            'Run separate sessions by task type',
            'Output a flagged summary with sources — not raw data dumps',
          ]}
          risks={[
            'Over-flagging without clear materiality rules',
            'Under-flagging if materiality criteria are too narrow',
          ]}
        />

        <UseCaseCard
          number="03"
          title="Decision Support — Sparring Partner"
          when={[
            'Finalizing analysis pre-IC',
            'Want the strongest counterargument to your thesis',
            'Testing downside scenarios',
          ]}
          howTo={[
            'Load thesis, model, and relevant filings',
            'Instruction: challenge every assumption using only loaded docs, cite all',
            'Ask for the strongest bear case and where it diverges from consensus',
            'Standardize prompts across names so output is comparable',
          ]}
          risks={[
            'Shallow critique if inputs are weak or incomplete',
            'False authority — Claude is a sparring partner, not a decision-maker',
          ]}
        />

        <UseCaseCard
          number="04"
          title="Compliance & Standardization"
          when={[
            'Producing client or IC materials',
            'Need consistent formats across the team',
          ]}
          howTo={[
            'Use a five-part instruction block: (1) purpose, (2) audience, (3) tone & format, (4) quality bar, (5) guardrails',
            'Never input proprietary data, MNPI, or position-level detail',
            'Lock structure explicitly — not vague terms like "professional"',
            'Define quality criteria before running, not after',
          ]}
          risks={[
            'Generic output without a clearly defined reader and format',
            'Compliance gaps without explicit hard constraints in the instruction block',
          ]}
        />
      </div>

      {/* ── The Setup That Makes It Work ─────────────────── */}
      <SectionHeading>The Setup That Makes It Work</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        Across all four use cases, the pattern is the same: structure before you prompt. The
        analysts getting the most out of Claude aren&apos;t the ones with the best prompts —
        they&apos;re the ones who built the right context before they started.
      </p>
      <div className="mt-3 grid grid-cols-3 gap-4">
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="text-xs font-semibold text-db-dark uppercase tracking-wide mb-2">Projects</p>
          <p className="text-xs text-gray-600 leading-relaxed">
            Use Claude&apos;s Projects feature to scope context per position or task type. Load
            only what&apos;s relevant. A bloated context with unread docs degrades output quality.
          </p>
        </div>
        <div className="rounded-lg border border-db-aqua/30 bg-db-aqua/5 p-4">
          <p className="text-xs font-semibold text-db-aqua-dark uppercase tracking-wide mb-2">Instruction Blocks</p>
          <p className="text-xs text-gray-600 leading-relaxed">
            Every session should open with a defined instruction block: what Claude should do,
            what it should never do, citation requirements, and output format. Don&apos;t rely on
            vague framing.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="text-xs font-semibold text-db-dark uppercase tracking-wide mb-2">Separate Sessions</p>
          <p className="text-xs text-gray-600 leading-relaxed">
            Run different task types in separate sessions. Research is not the same as decision
            support — mixing them produces muddier output and harder-to-audit reasoning.
          </p>
        </div>
      </div>

      {/* ── Talking to Clients ────────────────────────────── */}
      <SectionHeading>Talking to Clients & Executives</SectionHeading>
      <SubSection icon="💬" title="Questions clients are asking">
        <div className="space-y-3">
          <div className="rounded-lg border border-gray-200 p-4">
            <p className="text-xs font-semibold text-gray-800 mb-1">
              &ldquo;Our analysts are already using ChatGPT — is that a problem?&rdquo;
            </p>
            <p className="text-xs text-gray-600">
              Probably. The question is whether they&apos;re using it with structure or just
              prompting freehand. Freehand AI use in investment research has real hallucination
              risk — outputs that sound confident but aren&apos;t sourced. The use cases that work
              all have one thing in common: a defined instruction block, scoped context, and
              citation requirements. That&apos;s a governance question, not just a productivity one.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <p className="text-xs font-semibold text-gray-800 mb-1">
              &ldquo;Is our team actually getting an edge from this, or just saving time?&rdquo;
            </p>
            <p className="text-xs text-gray-600">
              Both are real. The monitoring and research use cases compress time — more names
              covered, faster. The decision support use case is where edge shows up: a structured
              bear case session surfaces assumptions an analyst might rationalize past on their own.
              That&apos;s a quality-of-thinking improvement, not just speed.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <p className="text-xs font-semibold text-gray-800 mb-1">
              &ldquo;What are the compliance risks of using Claude internally?&rdquo;
            </p>
            <p className="text-xs text-gray-600">
              The two hard rules: no MNPI, no proprietary position data into the model. The
              compliance use case is specifically about outputs — producing consistent IC and
              client materials with explicit guardrails in the instruction block. If a fund
              doesn&apos;t have an AI policy defining what can and can&apos;t go into these
              tools, that&apos;s the first gap to address.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <p className="text-xs font-semibold text-gray-800 mb-1">
              &ldquo;LPs are asking about our AI use — how should we respond?&rdquo;
            </p>
            <p className="text-xs text-gray-600">
              The answer LPs want to hear isn&apos;t &ldquo;we don&apos;t use AI&rdquo; — that&apos;s
              increasingly a credibility gap. They want to know you use it deliberately, with
              controls. Being able to articulate which use cases you run, what the guardrails are,
              and how you prevent MNPI exposure is a stronger answer than avoidance.
            </p>
          </div>
        </div>
      </SubSection>

      {/* ── Drawbridge Angle ──────────────────────────────── */}
      <DrawbridgeAngle>
        <p>
          Every one of these use cases creates a new attack surface. Analysts loading docs into
          AI tools, outputs going into IC materials, vendors with AI integrations touching fund
          data — the governance question follows the productivity story everywhere.
        </p>
        <p className="mt-2">
          Drawbridge sits at the intersection: the GenAI Assessment evaluates whether a fund has
          an AI policy, an inventory of tools in use, and controls around what data goes where.
          When a client says &ldquo;our team is using Claude — should we be worried?&rdquo; that&apos;s
          an Outcome 6 conversation and a natural door into the AI Security Bundle (Assessment +
          Policy + Training).
        </p>
        <p className="mt-2">
          The LP question is also your opening: funds that can demonstrate deliberate, governed
          AI use are ahead of the ones who&apos;ll be caught flat-footed when the DDQ question
          becomes standard. Help them get there before it&apos;s reactive.
        </p>
      </DrawbridgeAngle>
    </>
  );
}
