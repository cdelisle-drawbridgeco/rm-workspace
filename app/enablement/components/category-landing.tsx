import type { CategoryConfig, TopicConfig, TopicId } from '../types';
import { HeroSection } from './shared-ui';

interface Props {
  category: CategoryConfig;
  onSelectTopic: (id: TopicId) => void;
}

function TopicCard({
  topic,
  onSelect,
}: {
  topic: TopicConfig;
  onSelect: (id: TopicId) => void;
}) {
  return (
    <button
      onClick={() => onSelect(topic.id)}
      className="rounded-lg border border-gray-200 bg-white p-5 text-left hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="flex items-start gap-4">
        <span className="text-3xl">{topic.icon}</span>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-db-dark">{topic.title}</p>
          <p className="mt-1 text-sm text-gray-600">{topic.description}</p>
        </div>
      </div>
    </button>
  );
}

export default function CategoryLanding({ category, onSelectTopic }: Props) {
  const hasGroups = category.topics.some((t) => t.group);

  // Group topics by their group field, preserving order
  const groups: { label: string; topics: TopicConfig[] }[] = [];
  if (hasGroups) {
    const seen = new Map<string, TopicConfig[]>();
    for (const topic of category.topics) {
      const key = topic.group ?? '';
      if (!seen.has(key)) {
        const arr: TopicConfig[] = [];
        seen.set(key, arr);
        groups.push({ label: key, topics: arr });
      }
      seen.get(key)!.push(topic);
    }
  }

  return (
    <>
      <HeroSection
        icon={category.icon}
        title={category.label}
        subtitle={category.subtitle}
      />

      {hasGroups ? (
        <div className="mt-6 space-y-8">
          {groups.map((group) => (
            <div key={group.label}>
              {group.label && (
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
                  {group.label}
                </h3>
              )}
              <div className="grid grid-cols-2 gap-4">
                {group.topics.map((topic) => (
                  <TopicCard
                    key={topic.id}
                    topic={topic}
                    onSelect={onSelectTopic}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-4">
          {category.topics.map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              onSelect={onSelectTopic}
            />
          ))}
        </div>
      )}
    </>
  );
}
