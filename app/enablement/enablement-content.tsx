'use client';

import { useRef, useState } from 'react';
import type { CategoryId, NavState, TopicId } from './types';
import { CATEGORIES, TOPIC_COMPONENTS, getCategoryById } from './registry';
import CategoryLanding from './components/category-landing';
import BackButton from './components/back-button';

const DEFAULT_NAV: NavState = { view: 'landing', category: 'training' };

function TopicContent({ id }: { id: TopicId }) {
  const Component = TOPIC_COMPONENTS[id];
  return <Component />;
}

export default function EnablementContent() {
  const [nav, setNav] = useState<NavState>(DEFAULT_NAV);
  const [prevNav, setPrevNav] = useState<NavState | null>(null);
  const contentRef = useRef<HTMLElement>(null);

  function scrollTop() {
    contentRef.current?.scrollTo(0, 0);
  }

  function goToCategory(id: CategoryId) {
    setPrevNav(null);
    if (id === 'marketing') {
      setNav({ view: 'topic', category: 'marketing', topic: 'marketing-materials' });
    } else {
      setNav({ view: 'landing', category: id });
    }
    scrollTop();
  }

  function goToTopic(topicId: TopicId) {
    setPrevNav(nav);
    setNav({ view: 'topic', category: nav.category, topic: topicId });
    scrollTop();
  }

  function goBackToLanding() {
    if (prevNav) {
      setNav(prevNav);
      setPrevNav(null);
      scrollTop();
    }
  }

  const category = getCategoryById(nav.category);

  return (
    <div className="flex h-full gap-0">
      {/* Sidebar — 4 category buttons */}
      <aside className="w-56 shrink-0 overflow-y-auto border-r border-gray-200 bg-white">
        <nav className="p-4 space-y-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => goToCategory(cat.id)}
              className={`w-full rounded-md px-3 py-2.5 text-left text-sm transition flex items-center gap-2 ${
                nav.category === cat.id
                  ? 'border-l-3 border-db-aqua bg-db-aqua/10 font-medium text-db-dark'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-db-dark'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Content Area */}
      <section ref={contentRef} className="flex-1 min-w-0 overflow-y-auto p-6">
        {nav.view === 'landing' ? (
          <CategoryLanding category={category} onSelectTopic={goToTopic} />
        ) : (
          <>
            {/* Back button (except for marketing which has no intermediate landing) */}
            {nav.category !== 'marketing' && (
              <BackButton label={category.label} onClick={goBackToLanding} />
            )}
            {nav.topic && <TopicContent id={nav.topic} />}
          </>
        )}
      </section>
    </div>
  );
}
