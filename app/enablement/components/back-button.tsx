interface Props {
  label: string;
  onClick: () => void;
}

export default function BackButton({ label, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="mb-4 inline-flex items-center gap-1 text-sm text-gray-500 hover:text-db-dark transition-colors"
    >
      <span>&larr;</span>
      <span>Back to {label}</span>
    </button>
  );
}
