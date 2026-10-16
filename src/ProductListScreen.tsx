import { useMemo, useState } from "react";
import { AppHeader } from "./components/AppHeader";
import { BottomNav } from "./components/BottomNav";
import { CategoryChips } from "./components/CategoryChips";
import { ChevronDown, Truck } from "./components/Icons";
import { ProductCard } from "./components/ProductCard";
import { PromoBanner } from "./components/PromoBanner";
import { SearchBar } from "./components/SearchBar";
import { categories, products, type Category } from "./data/products";

export function ProductListScreen() {
  const [category, setCategory] = useState<Category>("all");
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState<Set<string>>(new Set(["p3"]));
  const [cartCount, setCartCount] = useState(2);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter(
      (p) =>
        (category === "all" || p.category === category) &&
        (q === "" || p.name.toLowerCase().includes(q)),
    );
  }, [category, query]);

  const toggleFavorite = (id: string) =>
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[430px] flex-col bg-cream">
      <AppHeader title="Tương ớt Heinz" cartCount={cartCount} />

      <main className="flex flex-1 flex-col gap-4 pb-6">
        <SearchBar value={query} onChange={setQuery} />

        <div className="mx-4 flex items-center gap-2 rounded-xl bg-leaf/10 px-3 py-2 text-[12px] font-medium text-leaf">
          <Truck size={16} />
          Giao nhanh 2h nội thành · Freeship đơn từ 150k
        </div>

        <PromoBanner />

        <CategoryChips items={categories} active={category} onSelect={setCategory} />

        <div className="flex items-center justify-between px-4">
          <p className="text-[13px] text-muted">
            <span className="font-bold text-ink">{visible.length}</span> sản phẩm
          </p>
          <button type="button" className="flex items-center gap-1 text-[13px] font-semibold text-ink">
            Phổ biến nhất
            <ChevronDown size={16} />
          </button>
        </div>

        {visible.length > 0 ? (
          <section className="grid grid-cols-2 gap-3 px-4">
            {visible.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                favorite={favorites.has(p.id)}
                onToggleFavorite={() => toggleFavorite(p.id)}
                onAdd={() => setCartCount((c) => c + 1)}
              />
            ))}
          </section>
        ) : (
          <div className="mx-4 rounded-3xl bg-white px-6 py-10 text-center">
            <p className="text-[15px] font-semibold">Không tìm thấy sản phẩm</p>
            <p className="mt-1 text-[13px] text-muted">Thử từ khoá khác hoặc chọn danh mục “Tất cả”.</p>
          </div>
        )}
      </main>

      <BottomNav active="shop" cartCount={cartCount} />
    </div>
  );
}
