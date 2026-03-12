'use client';

import { useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import type { CategoryId, NavState, TopicId } from './types';
import { CATEGORIES, TOPIC_COMPONENTS, getCategoryById } from './registry';
import CategoryLanding from './components/category-landing';
import BackButton from './components/back-button';

function TopicContent({ id }: { id: TopicId }) {
  const Component = TOPIC_COMPONENTS[id];
  return <Component />;
}

export default function EnablementContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const contentRef = useRef<HTMLElement>(null);

  const category = (searchParams.get('cat') || 'training') as CategoryId;
  const topic = searchParams.get('topic') as TopicId | null;
  const nav: NavState = topic
    ? { view: 'topic', category, topic }
    : { view: 'landing', category };

  function scrollTop() {
    contentRef.current?.scrollTo(0, 0);
  }

  function goToCategory(id: CategoryId) {
    if (id === 'marketing') {
      router.push(`/enablement?cat=marketing&topic=marketing-materials`);
    } else {
      router.push(`/enablement?cat=${id}`);
    }
    scrollTop();
  }

  function goToTopic(topicId: TopicId) {
    router.push(`/enablement?cat=${category}&topic=${topicId}`);
    scrollTop();
  }

  function goBack() {
    router.back();
  }

  const categoryConfig = getCategoryById(nav.category);

  return (
    <div className="flex h-full gap-0">
      {/* Sidebar */}
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
          <CategoryLanding category={categoryConfig} onSelectTopic={goToTopic} />
        ) : (
          <>
            {nav.category !== 'marketing' && (
              <BackButton label={categoryConfig.label} onClick={goBack} />
            )}
            {nav.topic && <TopicContent id={nav.topic} />}
          </>
        )}
      </section>
    </div>
  );
}
