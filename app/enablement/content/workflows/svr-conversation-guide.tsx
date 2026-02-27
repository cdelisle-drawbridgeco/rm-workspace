'use client';

import React from 'react';
import {
  HeroSection,
  SectionHeading,
  SubSection,
  DrawbridgeAngle,
} from '../../components/shared-ui';

function QuestionBlock({ question }: { question: string }) {
  return (
    <div className="rounded-md bg-db-aqua/10 border border-db-aqua/30 p-3">
      <p className="text-xs italic text-gray-700">{question}</p>
    </div>
  );
}

export default function SvrConversationGuide() {
  return (
    <>
      <HeroSection
        icon="&#128172;"
        title="SVR Conversation Guide & Question Bank"
        subtitle="Turning the SVR from a presentation into a partnership &mdash; structured questions that surface intelligence and let clients articulate the value themselves."
      />

      {/* The Mindset Shift */}
      <SectionHeading>The Mindset Shift</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed">
        The biggest mistake RMs make in client meetings is <strong>talking too much</strong>. A great
        SVR is not a presentation you happen to have a client in the room for. It is a structured
        conversation where you ask more than you tell, and where the client feels heard before they
        feel informed.
      </p>
      <div className="mt-4 flex items-center justify-center gap-6">
        <div className="text-center">
          <div className="mx-auto h-20 w-20 rounded-full bg-db-aqua/20 flex items-center justify-center">
            <span className="text-2xl font-bold text-db-dark font-heading">40%</span>
          </div>
          <p className="mt-2 text-xs font-medium text-gray-600">RM talking</p>
        </div>
        <div className="text-center">
          <div className="mx-auto h-20 w-20 rounded-full bg-db-dark/10 flex items-center justify-center">
            <span className="text-2xl font-bold text-db-dark font-heading">60%</span>
          </div>
          <p className="mt-2 text-xs font-medium text-gray-600">Client talking</p>
        </div>
      </div>
      <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4">
        <p className="text-sm font-semibold text-db-dark mb-2">Questions do three things a presentation never can:</p>
        <ol className="list-decimal ml-5 space-y-1 text-sm text-gray-700">
          <li>They surface intelligence you didn&apos;t have walking in</li>
          <li>They make the client feel like a partner, not an audience</li>
          <li>They let the client articulate the value themselves &mdash; which is far more powerful than you stating it</li>
        </ol>
      </div>
      <p className="mt-3 text-sm text-gray-500 italic">
        Use 2&ndash;3 questions per section. Never read them like a list. Let the conversation breathe.
      </p>

      {/* Opening Questions */}
      <SectionHeading>Opening Questions &mdash; Anchor in Their World</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        <strong>Goal:</strong> understand what has changed, what is top of mind, and what this
        client actually cares about right now. Set the tone for a conversation, not a meeting.
      </p>

      <SubSection icon="&#127758;" title="Business Context">
        <div className="space-y-2">
          <QuestionBlock question="&ldquo;What's changed at the firm since we last spoke — anything new on the fundraising, regulatory, or growth front?&rdquo;" />
          <QuestionBlock question="&ldquo;What's taking up most of your leadership team's attention right now?&rdquo;" />
          <QuestionBlock question="&ldquo;Is there anything coming up in the next 6 months — a new fund, an exam, an LP event — that we should be thinking about together?&rdquo;" />
          <QuestionBlock question="&ldquo;How are your investors engaging with you on operational topics right now? More questions, fewer?&rdquo;" />
        </div>
      </SubSection>

      <SubSection icon="&#129309;" title="Relationship Calibration">
        <div className="space-y-2">
          <QuestionBlock question="&ldquo;Before I walk through where things stand, what would make this conversation most useful for you today?&rdquo;" />
          <QuestionBlock question="&ldquo;Looking back at the last few months — is there anything you felt we should have done differently or done more of?&rdquo;" />
        </div>
        <p className="mt-3 text-xs font-medium text-gray-500 uppercase tracking-wide">For a new contact (sponsor change):</p>
        <div className="mt-2 space-y-2">
          <QuestionBlock question="&ldquo;Since you're newer to working with us, I'd love to understand what success looks like from your seat — what matters most to you in this relationship?&rdquo;" />
          <QuestionBlock question="&ldquo;What's your current read on where your firm's cyber program stands? Where do you feel confident, and where does it feel like a gap?&rdquo;" />
        </div>
      </SubSection>

      {/* Score & Posture Questions */}
      <SectionHeading>Score & Posture Questions &mdash; Make It a Dialogue</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        <strong>Goal:</strong> don&apos;t just tell them where their score is &mdash; find out if it
        matches their perception, and use the gap to start a real conversation.
      </p>

      <SubSection icon="&#128200;" title="Score Reaction">
        <div className="space-y-2">
          <QuestionBlock question="&ldquo;Your score has moved from [baseline] to [current] since we started the assessment. Does that track with how things have felt on your end — or does it surprise you?&rdquo;" />
          <QuestionBlock question="&ldquo;When you think about your cyber program today, what feels solid to you? What keeps you up at night?&rdquo;" />
          <QuestionBlock question="&ldquo;If a new LP asked you tomorrow to describe your cybersecurity program in two sentences, what would you say?&rdquo;" />
        </div>
      </SubSection>

      <SubSection icon="&#9874;&#65039;" title="Remediation Ownership">
        <div className="space-y-2">
          <QuestionBlock question="&ldquo;Some of the open items on your list require action on your side to close. Who on your team typically owns that — and do they have the bandwidth?&rdquo;" />
          <QuestionBlock question="&ldquo;Are there items on the remediation list that feel unclear, or that you're not sure how to action? I want to make sure we're removing blockers, not just flagging things.&rdquo;" />
          <QuestionBlock question="&ldquo;What would make it easier for your team to move faster on the open items?&rdquo;" />
        </div>
      </SubSection>

      <SubSection icon="&#128201;" title="For a Flat or Declining Score">
        <div className="space-y-2">
          <QuestionBlock question="&ldquo;Your score hasn't moved much from baseline. I have a hypothesis about why — but before I share it, what's your read on what's getting in the way?&rdquo;" />
          <QuestionBlock question="&ldquo;Is cyber getting enough internal priority right now to make progress? I want to be realistic about what's achievable given what's on your plate.&rdquo;" />
        </div>
      </SubSection>

      {/* Reg S-P Questions */}
      <SectionHeading>Reg S-P Readiness Questions</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-2">
        <strong>Goal:</strong> assess where they actually stand on Reg S-P preparedness, surface gaps
        they may not have connected to Drawbridge, and position Drawbridge as the firm that helps
        them stay ahead &mdash; not catch up.
      </p>
      <p className="text-xs text-gray-500 mb-4">
        Background: Reg S-P amendments significantly expanded requirements around incident response
        programs, breach notification timelines, and written policies. Many alternative managers are
        underprepared.
      </p>

      <SubSection icon="&#128220;" title="Awareness and Posture">
        <div className="space-y-2">
          <QuestionBlock question="&ldquo;How are you thinking about Reg S-P right now — is it on your radar as something you're actively preparing for, or is it more in the background?&rdquo;" />
          <QuestionBlock question="&ldquo;Has your outside counsel or compliance team flagged anything specific you need to address?&rdquo;" />
          <QuestionBlock question="&ldquo;Do you have a documented incident response program today — one that assigns roles, escalation paths, and notification timelines? If the SEC asked to see it tomorrow, how would you feel?&rdquo;" />
        </div>
      </SubSection>

      <SubSection icon="&#128269;" title="Gap Identification">
        <div className="space-y-2">
          <QuestionBlock question="&ldquo;One thing we're seeing across clients is that the IR plan exists on paper but hasn't been tested. Have you run any kind of tabletop or simulation to stress-test it?&rdquo;" />
          <QuestionBlock question="&ldquo;Reg S-P has specific requirements around customer notification timelines in the event of a breach. Is your team clear on what that process looks like for your firm?&rdquo;" />
          <QuestionBlock question="&ldquo;Are your policies current and board-approved? That's typically the first thing examiners look for — and it's an easy thing to be caught flat on.&rdquo;" />
        </div>
      </SubSection>

      <SubSection icon="&#127970;" title="Connecting to Their Business">
        <div className="space-y-2">
          <QuestionBlock question="&ldquo;How would an SEC exam go for you right now if it were tomorrow? What would feel ready and what would feel scrambled?&rdquo;" />
          <QuestionBlock question="&ldquo;Are your LPs asking about regulatory readiness in ODD reviews? We're seeing this come up more frequently — especially from institutional allocators.&rdquo;" />
          <QuestionBlock question="&ldquo;If there were one thing you could have buttoned up before an exam, what would it be?&rdquo;" />
        </div>
      </SubSection>

      <SubSection icon="&#128279;" title="The Bridge to Drawbridge&apos;s Help">
        <QuestionBlock question="&ldquo;We've been helping a number of clients specifically prepare for Reg S-P — getting their IR plans documented, their policies current, and their teams trained. Is that a conversation worth having in more depth?&rdquo;" />
      </SubSection>

      {/* AI Questions */}
      <SectionHeading>AI Questions &mdash; A Priority Topic</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-2">
        <strong>Goal:</strong> understand what AI tools are in use (sanctioned and shadow), assess
        their awareness of the risks, and position Drawbridge&apos;s AI readiness offering as the
        practical next step &mdash; not a fear sell.
      </p>
      <p className="text-xs text-gray-500 mb-4">
        Background: Employees at alternative investment firms are already using AI tools &mdash;
        often without oversight. LPs are beginning to ask about AI governance in DDQs. The SEC has
        flagged AI in exam priorities. Most firms don&apos;t have a policy.
      </p>

      <SubSection icon="&#129302;" title="Current State">
        <div className="space-y-2">
          <QuestionBlock question="&ldquo;Where does AI sit on your firm's radar right now — is it something you're actively thinking about, or more of a background noise topic?&rdquo;" />
          <QuestionBlock question="&ldquo;Are your employees using AI tools today — things like ChatGPT, Copilot, or other tools? Do you have a sense of what they're using and for what?&rdquo;" />
          <QuestionBlock question="&ldquo;Has anyone at the firm been asked about AI — by LPs in a DDQ, by your board, by compliance? What did that conversation look like?&rdquo;" />
        </div>
      </SubSection>

      <SubSection icon="&#9888;&#65039;" title="Risk Awareness">
        <div className="space-y-2">
          <QuestionBlock question="&ldquo;One thing we're seeing is that employees are using AI tools in ways that could expose client data or firm information without realizing it. Does your team have any guardrails around that today?&rdquo;" />
          <QuestionBlock question="&ldquo;If an employee uploaded a client memo or a portfolio document into an AI tool, would that be a problem for your firm? Is there any policy around that right now?&rdquo;" />
          <QuestionBlock question="&ldquo;How comfortable are you that you know what AI tools are actually being used across your team — not just the ones that have been approved, but everything?&rdquo;" />
        </div>
      </SubSection>

      <SubSection icon="&#128200;" title="LP and Regulatory Pressure">
        <div className="space-y-2">
          <QuestionBlock question="&ldquo;We're starting to see AI governance questions show up in LP DDQs — things like 'do you have an AI acceptable use policy?' and 'how do you manage the risk of AI tool usage?' Are you fielding those yet?&rdquo;" />
          <QuestionBlock question="&ldquo;The SEC has mentioned AI in exam priorities. Is that something your compliance team has flagged as an area to prepare for?&rdquo;" />
        </div>
      </SubSection>

      <SubSection icon="&#128301;" title="Forward-Looking">
        <div className="space-y-2">
          <QuestionBlock question="&ldquo;If you were to think about where AI could actually add value for your firm — not the risk side, but the opportunity side — where would you start?&rdquo;" />
          <QuestionBlock question="&ldquo;Is AI something you want to get ahead of proactively, or are you waiting to see how the regulatory guidance develops before acting?&rdquo;" />
        </div>
        <div className="mt-3 rounded-md bg-orange-50 border border-orange-200 p-3">
          <p className="text-xs font-semibold text-orange-700">The bridge to Drawbridge&apos;s help:</p>
          <p className="mt-1 text-xs text-gray-700 italic">
            &ldquo;We&apos;re working with clients right now on three specific things: training
            employees on safe AI usage, assessing which AI tools are in use and what the exposure
            looks like, and building AI acceptable use policies that satisfy regulators and LPs. Is
            any of that relevant to where you are right now?&rdquo;
          </p>
        </div>
      </SubSection>

      {/* Value Story Questions */}
      <SectionHeading>Value Story Questions &mdash; Let Them Confirm the Value</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        <strong>Goal:</strong> instead of just telling them what you delivered, ask questions that let
        the client <strong>articulate what worked</strong> &mdash; and surface anything that didn&apos;t.
      </p>
      <div className="space-y-2">
        <QuestionBlock question="&ldquo;We turned around [X] DDQs this quarter with no follow-up from allocators. Did that feel smoother than before — or is there still friction in that process you'd want us to address?&rdquo;" />
        <QuestionBlock question="&ldquo;Your training completion rate is at [X]%. How is that landing with your team — are employees engaging with it, or does it feel like a box they're checking?&rdquo;" />
        <QuestionBlock question="&ldquo;We updated your policies and got them board-approved. How did that process feel from your end? Was there anything that was harder than it should have been?&rdquo;" />
        <QuestionBlock question="&ldquo;Looking at the work we did together this quarter, what felt most valuable to you? What felt less useful or harder to see the impact of?&rdquo;" />
        <QuestionBlock question="&ldquo;Is there something you expected us to have done that didn't happen? I'd rather hear that from you now than at renewal.&rdquo;" />
      </div>

      {/* Forward-Looking & Expansion Questions */}
      <SectionHeading>Forward-Looking & Expansion Questions &mdash; Plant the Seeds</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        <strong>Goal:</strong> understand where the client&apos;s business is going and position
        Drawbridge as the firm that&apos;s thinking ahead with them. These are <strong>not
        pitches</strong> &mdash; they are advisory observations framed as questions.
      </p>

      <SubSection icon="&#128640;" title="Business Growth">
        <div className="space-y-2">
          <QuestionBlock question="&ldquo;You mentioned [new fund / new hires / new office]. How are you thinking about what that means for your operational infrastructure — not just cyber, but the whole back office?&rdquo;" />
          <QuestionBlock question="&ldquo;As your firm grows, the security demands grow with it — more people, more vendors, more regulatory surface area. Are you thinking about how to scale your program without adding headcount internally?&rdquo;" />
        </div>
      </SubSection>

      <SubSection icon="&#127942;" title="Competitive Positioning">
        <div className="space-y-2">
          <QuestionBlock question="&ldquo;How do you feel your cyber program compares to your peers right now — firms of similar size and strategy? Is that something you think about?&rdquo;" />
          <QuestionBlock question="&ldquo;When you're in competitive fundraising situations, does your operational story ever come up as a differentiator? Or is it mostly invisible until someone asks?&rdquo;" />
        </div>
      </SubSection>

      <SubSection icon="&#128202;" title="Peer Benchmarking">
        <QuestionBlock question="&ldquo;We benchmark against 1,200+ firms in the alternatives space. Would it be useful to see where you stand relative to peers of similar size and strategy — not just your absolute score, but your relative position?&rdquo;" />
      </SubSection>

      <SubSection icon="&#128736;&#65039;" title="Journey / Next Phase">
        <div className="space-y-2">
          <QuestionBlock question="&ldquo;You've done a lot of good foundational work this year. If you were to think about where you want your program to be 12 months from now, what would success look like?&rdquo;" />
          <QuestionBlock question="&ldquo;The firms that get the most value from Drawbridge tend to move through a few distinct stages — from getting the basics right, to building a program that can withstand an exam, to actually using that program as a competitive advantage. Where do you see yourself on that path?&rdquo;" />
        </div>
      </SubSection>

      {/* Closing Questions */}
      <SectionHeading>Closing Questions &mdash; Confirm Value and Earn the Next Conversation</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        <strong>Goal:</strong> close the loop, confirm mutual understanding, and open the door to
        what comes next.
      </p>

      <SubSection icon="&#9989;" title="Confirming Value">
        <div className="space-y-2">
          <QuestionBlock question="&ldquo;Looking at what we covered today — what feels most relevant or useful to you?&rdquo;" />
          <QuestionBlock question="&ldquo;Is there anything we should be doing differently to make this relationship work better for you?&rdquo;" />
        </div>
      </SubSection>

      <SubSection icon="&#128203;" title="Next Steps">
        <div className="space-y-2">
          <QuestionBlock question="&ldquo;We talked about [X, Y, Z]. Of those, what feels most pressing to get moving on from your side?&rdquo;" />
          <QuestionBlock question="&ldquo;Who else on your team should be part of these conversations? Is there someone from compliance, IT, or your executive team who would benefit from being in the room?&rdquo;" />
        </div>
      </SubSection>

      <SubSection icon="&#128578;" title="Relationship Depth">
        <div className="space-y-2">
          <QuestionBlock question="&ldquo;One thing I want to make sure we're doing is staying close to what's happening in your business — not just your cyber program. Is there a better way for us to stay in sync between these quarterly meetings?&rdquo;" />
          <QuestionBlock question="&ldquo;Is there a conversation we should be having that we haven't had yet?&rdquo;" />
        </div>
      </SubSection>

      {/* Active Listening Cues */}
      <SectionHeading>Quick Reference: Active Listening Cues</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        When a client says something like this &mdash; it maps to an outcome and a follow-up question.
      </p>
      <div className="rounded-md border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left font-medium text-gray-600">They say...</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">They mean...</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Follow-up question</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              {
                say: '"Our LPs keep asking about cyber"',
                mean: 'Capital confidence pressure',
                follow: '"What kinds of questions are they asking — are they general, or getting more specific?"',
              },
              {
                say: '"We have an exam coming up"',
                mean: 'Regulatory anxiety',
                follow: '"How prepared do you feel right now — what would give you more confidence walking in?"',
              },
              {
                say: '"We\'re raising a new fund"',
                mean: 'Capital confidence + scrutiny increasing',
                follow: '"Have you seen the ODD process get more rigorous with this raise compared to prior ones?"',
              },
              {
                say: '"Our team is stretched thin"',
                mean: 'They need you to do more, not less',
                follow: '"Where are the biggest time sinks for your team right now when it comes to cyber?"',
              },
              {
                say: '"We just hired [X] new people"',
                mean: 'Growing attack surface, onboarding risk',
                follow: '"Do new hires go through any kind of security onboarding today?"',
              },
              {
                say: '"I\'m not sure our team uses the platform"',
                mean: 'Engagement risk, unused value',
                follow: '"What would make it more useful — is it access, time, or knowing what to do with it?"',
              },
              {
                say: '"Our competitor just got breached"',
                mean: 'Fear, LP pressure incoming',
                follow: '"Has that prompted any conversations internally about where you stand?"',
              },
              {
                say: '"We\'re looking at AI tools"',
                mean: 'AI readiness opportunity',
                follow: '"Do you have a sense of what guardrails you\'d want in place before rolling something out?"',
              },
              {
                say: '"Cyber is important but not a priority"',
                mean: 'Check-the-box mindset, churn risk',
                follow: '"What would need to change for it to move up the priority list?"',
              },
            ].map((row, i) => (
              <tr key={i}>
                <td className="px-3 py-2 text-gray-700 font-medium text-xs">{row.say}</td>
                <td className="px-3 py-2 text-gray-600 text-xs">{row.mean}</td>
                <td className="px-3 py-2 text-gray-600 italic text-xs">{row.follow}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <DrawbridgeAngle>
        <p>
          The question bank is a companion to the SVR Framework. The RM who asks great questions
          doesn&apos;t just run better meetings &mdash; they build deeper relationships, surface
          expansion opportunities naturally, and make clients feel like partners rather than accounts.
          Update this question bank quarterly as regulatory and market topics evolve.
        </p>
      </DrawbridgeAngle>
    </>
  );
}
