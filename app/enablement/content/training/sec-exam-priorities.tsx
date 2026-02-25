'use client';

import React from 'react';
import {
  StatCard,
  SectionHeading,
  TermBadge,
  HeroSection,
  DrawbridgeAngle,
  SubSection,
  FlowDiagram,
} from '../../components/shared-ui';

export default function SECExamPriorities() {
  return (
    <>
      <HeroSection
        icon="\uD83D\uDD0D"
        title="SEC Cybersecurity Exam Priorities"
        subtitle="What the SEC's Division of Examinations is actively looking for — and how it directly shapes what Drawbridge clients need."
      />

      <div className="mt-6 grid grid-cols-4 gap-4">
        <StatCard label="Cyber as Exam Priority Since" value="2014" />
        <StatCard label="Exams Conducted Annually" value="~3,000" />
        <StatCard label="% Citing Cyber Deficiencies" value="~25%" />
        <StatCard label="Avg. Exam Duration" value="4\u20138 Weeks" />
      </div>

      {/* What Is the Exam Program */}
      <SectionHeading>What Is the SEC Exam Program?</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        The SEC&apos;s <strong>Division of Examinations</strong> (formerly OCIE) is the agency&apos;s
        front-line compliance oversight arm. It conducts examinations of registered
        entities — including investment advisers, broker-dealers, and fund complexes — to
        assess compliance with federal securities laws and to identify risks to investors
        and the markets.
      </p>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        Each year, the Division publishes its <strong>Examination Priorities</strong>,
        signaling to the industry what topics examiners will focus on. Cybersecurity and
        operational resilience have been <strong>explicitly named as a priority every year
        since 2014</strong> — and the depth and specificity of the cyber-related priorities
        has increased dramatically. For Drawbridge clients, understanding these priorities
        is essential because they represent exactly what an examiner will ask for during
        a visit.
      </p>

      {/* How Exams Work */}
      <SectionHeading>How a Cybersecurity Exam Works</SectionHeading>
      <FlowDiagram
        steps={[
          'Notification Letter',
          'Document Request',
          'On-Site / Remote Review',
          'Staff Interviews',
          'Findings & Deficiency Letter',
          'Remediation & Follow-Up',
        ]}
      />

      <SubSection icon="\uD83D\uDCEC" title="The Exam Lifecycle">
        <p>
          Exams typically follow a predictable pattern, though the SEC can also conduct
          &ldquo;sweep&rdquo; exams targeting specific topics across many firms simultaneously:
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li>
            <strong>Notification &amp; Document Request</strong> — The firm receives a letter
            (sometimes with little advance notice) requesting specific documents. For
            cybersecurity, this typically includes: written information security policies,
            incident response plans, vendor risk assessments, employee training records,
            access control documentation, data classification policies, and evidence of
            ongoing monitoring.
          </li>
          <li>
            <strong>Review Period</strong> — Examiners review the submitted documents and
            may request additional materials. They are looking for both the <em>existence</em> of
            policies and <em>evidence of implementation</em>. A policy document that hasn&apos;t
            been updated in 3 years, or training records showing 40% completion rates,
            will raise red flags.
          </li>
          <li>
            <strong>Interviews</strong> — Examiners interview key personnel including the
            CCO, CTO/CISO (or equivalent), and sometimes the COO or CEO. They ask specific
            questions: &ldquo;Walk me through what happens when you detect a security incident.&rdquo;
            &ldquo;How do you evaluate the security of your third-party vendors?&rdquo; &ldquo;When was
            your last penetration test and what were the findings?&rdquo;
          </li>
          <li>
            <strong>Deficiency Letter</strong> — If issues are found, the firm receives a
            deficiency letter outlining the findings and requiring a written response with
            a remediation plan. Firms typically have 30–60 days to respond. Failure to
            remediate can lead to referral to the Division of Enforcement.
          </li>
        </ul>
      </SubSection>

      {/* Current Priorities */}
      <SectionHeading>Current Cybersecurity Exam Focus Areas</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        Based on the Division&apos;s published priorities and recent exam trends, these are
        the areas examiners are most focused on. Each maps directly to Drawbridge
        service capabilities.
      </p>

      <SubSection icon="\uD83D\uDCDD" title="1. Governance & Written Policies">
        <p>
          Examiners want to see that cybersecurity is <strong>governed at the senior
          level</strong>, not buried in IT. They look for:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Board or senior management approval of the information security program</li>
          <li>Regular reporting of cyber risks to senior leadership</li>
          <li>Written policies that are specific to the firm (not generic templates)</li>
          <li>Evidence that policies are reviewed and updated at least annually</li>
          <li>Clear assignment of cybersecurity responsibilities to named individuals</li>
        </ul>
        <p className="mt-2 text-xs text-gray-500 italic">
          Drawbridge service: Policy Program, Annual Policy Reviews, Board Reporting
        </p>
      </SubSection>

      <SubSection icon="\uD83D\uDEA8" title="2. Incident Response Preparedness">
        <p>
          With the 2025 Reg S-P amendments mandating incident response programs, this
          area has moved from &ldquo;best practice&rdquo; to <strong>regulatory requirement</strong>.
          Examiners assess:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Existence of a written incident response plan with defined roles, escalation procedures, and communication templates</li>
          <li>Evidence of tabletop exercises or simulations (when was the last one? who participated?)</li>
          <li>Incident log — have there been any incidents? how were they handled?</li>
          <li>Breach notification procedures aligned with the 30-day Reg S-P requirement</li>
          <li>Retainer agreements with IR firms for surge support</li>
        </ul>
        <p className="mt-2 text-xs text-gray-500 italic">
          Drawbridge service: IR Planning, Tabletop Exercises, IR Retainer, Breach Response Support
        </p>
      </SubSection>

      <SubSection icon="\uD83D\uDD10" title="3. Access Controls & Identity Management">
        <p>
          Unauthorized access is a leading cause of breaches in financial services.
          Examiners focus heavily on:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Multi-factor authentication (MFA) — is it implemented for all users on all critical systems?</li>
          <li>Privileged access management — who has admin rights and why?</li>
          <li>User access reviews — are permissions reviewed and deprovisioned when employees leave or change roles?</li>
          <li>Remote access controls — especially relevant post-COVID with hybrid work models</li>
          <li>Password policies — complexity, rotation, and prohibition of shared credentials</li>
        </ul>
        <p className="mt-2 text-xs text-gray-500 italic">
          Drawbridge service: Security Assessments, Access Control Reviews, Policy Program
        </p>
      </SubSection>

      <SubSection icon="\uD83D\uDCE7" title="4. Email Security & Phishing Prevention">
        <p>
          Email remains the #1 attack vector for financial services firms. The SEC has
          brought <strong>multiple enforcement actions</strong> against firms that suffered
          email account takeovers. Examiners look for:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Email filtering and anti-phishing technology in place</li>
          <li>Employee phishing awareness training — frequency, completion rates, and testing (simulated phishing campaigns)</li>
          <li>DMARC, DKIM, and SPF email authentication records configured</li>
          <li>Policies for verifying wire transfer instructions received via email</li>
          <li>Monitoring for compromised email accounts</li>
        </ul>
        <p className="mt-2 text-xs text-gray-500 italic">
          Drawbridge service: Security Awareness Training, Phishing Simulations, Email Security Assessment
        </p>
      </SubSection>

      <SubSection icon="\uD83C\uDFE2" title="5. Third-Party / Vendor Risk Management">
        <p>
          Financial firms rely on dozens of third-party vendors — fund administrators,
          cloud providers, IT managed service providers, trading platforms. Examiners
          want to see:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>A documented vendor risk management program with defined assessment criteria</li>
          <li>Initial due diligence conducted before onboarding vendors that access sensitive data</li>
          <li>Ongoing monitoring and periodic reassessment of critical vendors</li>
          <li>Contractual provisions requiring vendors to maintain security controls and notify of breaches</li>
          <li>Classification of vendors by risk tier (critical, high, medium, low)</li>
        </ul>
        <p className="mt-2 text-xs text-gray-500 italic">
          Drawbridge service: Third-Party Risk Management Program, Vendor Assessments
        </p>
      </SubSection>

      <SubSection icon="\uD83D\uDD04" title="6. Data Loss Prevention & Encryption">
        <p>
          Protecting sensitive data — both at rest and in transit — is a core exam focus:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Encryption of sensitive data at rest (laptops, servers, databases) and in transit (TLS, VPN)</li>
          <li>Data classification program — does the firm know where its sensitive data lives?</li>
          <li>Data loss prevention (DLP) controls to prevent unauthorized exfiltration</li>
          <li>Mobile device management (MDM) policies for firm and personal devices</li>
          <li>Secure disposal procedures for hardware and media</li>
        </ul>
        <p className="mt-2 text-xs text-gray-500 italic">
          Drawbridge service: Security Assessments, Data Classification Guidance, Policy Program
        </p>
      </SubSection>

      <SubSection icon="\uD83C\uDFD7\uFE0F" title="7. Business Continuity & Disaster Recovery">
        <p>
          Operational resilience has become increasingly important, especially after
          COVID exposed gaps in many firms&apos; BCP/DR programs:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Written BCP/DR plans covering critical business functions and systems</li>
          <li>Defined recovery time objectives (RTO) and recovery point objectives (RPO)</li>
          <li>Regular testing of backup and recovery procedures (not just backups — actual recovery tests)</li>
          <li>Consideration of scenarios beyond natural disasters: ransomware, provider outages, key-person risk</li>
          <li>Communication plans for clients and counterparties during disruptions</li>
        </ul>
        <p className="mt-2 text-xs text-gray-500 italic">
          Drawbridge service: BCP/DR Planning, Tabletop Exercises, Resilience Assessments
        </p>
      </SubSection>

      <SubSection icon="\uD83D\uDCCA" title="8. Emerging Technology & AI Risks">
        <p>
          The SEC has signaled increasing attention to risks from new technologies:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Use of AI and machine learning in trading, compliance, and client communications — governance and controls around these tools</li>
          <li>Cloud security posture — configuration management, shared responsibility model understanding, data residency</li>
          <li>Cryptocurrency and digital asset custody controls (for firms with exposure)</li>
          <li>Shadow IT — use of unsanctioned tools and services by employees</li>
        </ul>
        <p className="mt-2 text-xs text-gray-500 italic">
          Drawbridge service: Technology Risk Assessments, Cloud Security Reviews, Policy Program
        </p>
      </SubSection>

      {/* Exam Readiness Checklist */}
      <SectionHeading>Exam Readiness — What Clients Should Have Ready</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        When the SEC sends a document request letter, clients need to produce these
        materials quickly and confidently. Drawbridge helps build, maintain, and organize
        all of them.
      </p>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-start gap-2 rounded-md border border-gray-200 bg-white p-3">
          <span className="text-green-500 mt-0.5">&#10003;</span>
          <p className="text-sm text-gray-700">Written Information Security Policy (current, board-approved)</p>
        </div>
        <div className="flex items-start gap-2 rounded-md border border-gray-200 bg-white p-3">
          <span className="text-green-500 mt-0.5">&#10003;</span>
          <p className="text-sm text-gray-700">Incident Response Plan with defined roles &amp; escalation</p>
        </div>
        <div className="flex items-start gap-2 rounded-md border border-gray-200 bg-white p-3">
          <span className="text-green-500 mt-0.5">&#10003;</span>
          <p className="text-sm text-gray-700">Business Continuity / Disaster Recovery Plan</p>
        </div>
        <div className="flex items-start gap-2 rounded-md border border-gray-200 bg-white p-3">
          <span className="text-green-500 mt-0.5">&#10003;</span>
          <p className="text-sm text-gray-700">Vendor risk assessment records &amp; third-party inventory</p>
        </div>
        <div className="flex items-start gap-2 rounded-md border border-gray-200 bg-white p-3">
          <span className="text-green-500 mt-0.5">&#10003;</span>
          <p className="text-sm text-gray-700">Security awareness training completion records</p>
        </div>
        <div className="flex items-start gap-2 rounded-md border border-gray-200 bg-white p-3">
          <span className="text-green-500 mt-0.5">&#10003;</span>
          <p className="text-sm text-gray-700">Penetration test / vulnerability assessment reports</p>
        </div>
        <div className="flex items-start gap-2 rounded-md border border-gray-200 bg-white p-3">
          <span className="text-green-500 mt-0.5">&#10003;</span>
          <p className="text-sm text-gray-700">Access control reviews &amp; MFA implementation evidence</p>
        </div>
        <div className="flex items-start gap-2 rounded-md border border-gray-200 bg-white p-3">
          <span className="text-green-500 mt-0.5">&#10003;</span>
          <p className="text-sm text-gray-700">Incident log (even if no incidents — document that fact)</p>
        </div>
        <div className="flex items-start gap-2 rounded-md border border-gray-200 bg-white p-3">
          <span className="text-green-500 mt-0.5">&#10003;</span>
          <p className="text-sm text-gray-700">Risk assessment documentation &amp; remediation tracking</p>
        </div>
        <div className="flex items-start gap-2 rounded-md border border-gray-200 bg-white p-3">
          <span className="text-green-500 mt-0.5">&#10003;</span>
          <p className="text-sm text-gray-700">Privacy notices &amp; customer information handling procedures</p>
        </div>
      </div>

      <DrawbridgeAngle>
        <p>
          The SEC exam program is Drawbridge&apos;s most powerful sales and renewal driver.
          Every priority area listed above maps to a Drawbridge service. During renewals,
          frame the conversation around <strong>exam readiness</strong>:
        </p>
        <p>
          &ldquo;If the SEC sent you a document request letter tomorrow, could you respond
          confidently within a week? Drawbridge ensures the answer is yes.&rdquo;
        </p>
        <p>
          For clients who have been examined, reference the experience — &ldquo;You saw firsthand
          what the SEC asks for. Drawbridge keeps all of that current and organized so you&apos;re
          always ready.&rdquo; For clients who haven&apos;t been examined yet, create urgency —
          &ldquo;With ~3,000 exams a year and cyber as a stated priority, it&apos;s a matter of
          when, not if.&rdquo;
        </p>
        <p>
          Key renewal levers: number of exam-ready deliverables maintained, policy updates
          completed, training completion rates, IR plan currency, and the peace of mind
          that comes from knowing you&apos;re prepared.
        </p>
      </DrawbridgeAngle>

      <SectionHeading>Key Terms</SectionHeading>
      <div className="grid grid-cols-3 gap-3">
        <TermBadge term="Division of Examinations" definition="The SEC division (formerly OCIE) responsible for conducting compliance examinations of registered entities. Publishes annual exam priorities." />
        <TermBadge term="Exam Priorities" definition="Annual publication by the Division of Examinations identifying the topics and risk areas examiners will focus on in the coming year." />
        <TermBadge term="Deficiency Letter" definition="Written communication from SEC examiners identifying compliance shortcomings — requires a written remediation response within 30\u201360 days." />
        <TermBadge term="Sweep Exam" definition="A targeted exam conducted simultaneously across many firms to assess industry-wide compliance on a specific topic (e.g., email security, ransomware readiness)." />
        <TermBadge term="Risk Alert" definition="Public notice from the Division of Examinations highlighting common deficiencies observed during exams — serves as a warning to the industry." />
        <TermBadge term="MFA" definition="Multi-Factor Authentication — requiring two or more verification methods to access systems. Absence of MFA is one of the most commonly cited exam deficiencies." />
        <TermBadge term="DMARC" definition="Domain-based Message Authentication — email security protocol that prevents domain spoofing. Increasingly checked by SEC examiners as a baseline email security control." />
        <TermBadge term="Shadow IT" definition="Technology tools and services used by employees without organizational approval — creates unmonitored security risks that examiners increasingly scrutinize." />
        <TermBadge term="Document Request List" definition="The initial list of documents and records the SEC requests at the start of an examination — typically 30\u201350 specific items for cybersecurity-focused exams." />
      </div>
    </>
  );
}
