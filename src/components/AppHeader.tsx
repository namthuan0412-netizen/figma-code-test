import { Bag, ChevronLeft } from "./Icons";

interface AppHeaderProps {
  title: string;
  cartCount: number;
}

export function AppHeader({ title, cartCount }: AppHeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 pt-3 pb-2">
      <button
        type="button"
        aria-label="Quay lại"
        className="grid size-10 place-items-center rounded-full bg-white text-ink shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
      >
        <ChevronLeft size={22} />
      </button>

      <div className="text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">Heinz Official</p>
        <h1 className="text-[17px] font-bold leading-tight">{title}</h1>
      </div>

      <button
        type="button"
        aria-label={`Giỏ hàng, ${cartCount} sản phẩm`}
        className="relative grid size-10 place-items-center rounded-full bg-white text-ink shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
      >
        <Bag size={21} />
        {cartCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-brand-600 px-1 text-[10px] font-bold text-white ring-2 ring-cream">
            {cartCount}
          </span>
        )}
      </button>
    </header>
  );
}
