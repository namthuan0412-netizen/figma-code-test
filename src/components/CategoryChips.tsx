import type { Category } from "../data/products";

interface CategoryChipsProps {
  items: { id: Category; label: string }[];
  active: Category;
  onSelect: (id: Category) => void;
}

export function CategoryChips({ items, active, onSelect }: CategoryChipsProps) {
  return (
    <div className="no-scrollbar flex gap-2 overflow-x-auto px-4 py-1" role="tablist">
      {items.map((item) => {
        const isActive = item.id === active;
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(item.id)}
            className={
              "h-9 shrink-0 rounded-full px-4 text-[14px] font-semibold transition-colors " +
              (isActive
                ? "bg-brand-600 text-white shadow-[0_4px_12px_rgba(200,16,46,0.3)]"
                : "border border-line bg-white text-ink")
            }
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
