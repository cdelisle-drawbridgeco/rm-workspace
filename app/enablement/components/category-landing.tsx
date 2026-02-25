import type { CategoryConfig, TopicId } from '../types';
import { HeroSection } from './shared-ui';

interface Props {
  category: CategoryConfig;
  onSelectTopic: (id: TopicId) => void;
}

export default function CategoryLanding({ category, onSelectTopic }: Props) {
  return (
    <>
      <HeroSection
        icon={category.icon}
        title={category.label}
        subtitle={category.subtitle}
      />

      <div className="mt-6 grid grid-cols-2 gap-4">
        {category.topics.map((topic) => (
          <button
            key={topic.id}
            onClick={() => onSelectTopic(topic.id)}
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
        ))}
      </div>
    </>
  );
}
