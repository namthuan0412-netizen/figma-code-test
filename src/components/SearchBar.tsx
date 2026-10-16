import { Search, Sliders } from "./Icons";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="flex gap-2 px-4">
      <label className="flex h-12 flex-1 items-center gap-2 rounded-2xl bg-white px-4 text-muted shadow-[0_1px_2px_rgba(0,0,0,0.06)] focus-within:ring-2 focus-within:ring-brand-600/30">
        <Search size={20} />
        <input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Tìm tương ớt Heinz..."
          className="h-full flex-1 bg-transparent text-[15px] text-ink outline-none placeholder:text-muted"
        />
      </label>
      <button
        type="button"
        aria-label="Bộ lọc"
        className="grid size-12 place-items-center rounded-2xl bg-ink text-white"
      >
        <Sliders size={20} />
      </button>
    </div>
  );
}
