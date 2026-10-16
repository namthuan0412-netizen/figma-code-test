import { Bag, Grid, Heart, Home, User } from "./Icons";

const items = [
  { id: "home", label: "Trang chủ", Icon: Home },
  { id: "shop", label: "Sản phẩm", Icon: Grid },
  { id: "fav", label: "Yêu thích", Icon: Heart },
  { id: "cart", label: "Giỏ hàng", Icon: Bag },
  { id: "me", label: "Tài khoản", Icon: User },
] as const;

interface BottomNavProps {
  active?: (typeof items)[number]["id"];
  cartCount: number;
}

export function BottomNav({ active = "shop", cartCount }: BottomNavProps) {
  return (
    <nav className="sticky bottom-0 z-20 border-t border-line bg-white/95 px-2 pt-2 pb-[max(env(safe-area-inset-bottom),12px)] backdrop-blur">
      <ul className="flex justify-between">
        {items.map(({ id, label, Icon }) => {
          const isActive = id === active;
          return (
            <li key={id} className="flex-1">
              <button
                type="button"
                aria-current={isActive ? "page" : undefined}
                className={
                  "relative mx-auto flex flex-col items-center gap-1 text-[11px] font-medium " +
                  (isActive ? "text-brand-600" : "text-muted")
                }
              >
                <Icon size={22} />
                {id === "cart" && cartCount > 0 && (
                  <span className="absolute -top-1 right-2 grid h-4 min-w-4 place-items-center rounded-full bg-brand-600 px-1 text-[9px] font-bold text-white">
                    {cartCount}
                  </span>
                )}
                {label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
