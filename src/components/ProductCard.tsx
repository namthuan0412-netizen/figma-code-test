import { formatVnd, type Product } from "../data/products";
import { Bottle } from "./Bottle";
import { Chili, Heart, Plus, Star } from "./Icons";

interface ProductCardProps {
  product: Product;
  favorite: boolean;
  onToggleFavorite: () => void;
  onAdd: () => void;
}

const badgeStyle: Record<NonNullable<Product["badge"]>, string> = {
  "Bán chạy": "bg-ink text-white",
  "Mới": "bg-leaf text-white",
  "Giảm giá": "bg-gold text-ink",
};

export function ProductCard({ product, favorite, onToggleFavorite, onAdd }: ProductCardProps) {
  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  return (
    <article className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      {/* Image */}
      <div className="relative flex h-[156px] items-end justify-center bg-brand-50 pt-3">
        <Bottle {...product.bottle} className="h-[136px]" />

        {product.badge && (
          <span
            className={
              "absolute top-2.5 left-2.5 rounded-full px-2 py-0.5 text-[10px] font-bold " +
              (discount > 0 ? badgeStyle["Giảm giá"] : badgeStyle[product.badge])
            }
          >
            {discount > 0 ? `-${discount}%` : product.badge}
          </span>
        )}

        <button
          type="button"
          onClick={onToggleFavorite}
          aria-label={favorite ? "Bỏ yêu thích" : "Yêu thích"}
          aria-pressed={favorite}
          className={
            "absolute top-2 right-2 grid size-8 place-items-center rounded-full bg-white/90 transition-colors " +
            (favorite ? "text-brand-600" : "text-muted")
          }
        >
          <Heart size={16} filled={favorite} />
        </button>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-0.5 text-brand-600" aria-label={`Độ cay ${product.spice}/3`}>
            {[1, 2, 3].map((n) => (
              <Chili key={n} size={12} className={n <= product.spice ? "" : "opacity-20"} />
            ))}
          </div>
          <div className="flex items-center gap-0.5 text-[11px] font-semibold text-ink">
            <Star size={11} className="text-gold" />
            {product.rating}
            <span className="font-normal text-muted">({product.reviews})</span>
          </div>
        </div>

        <h3 className="mt-1.5 line-clamp-2 text-[14px] leading-[1.3] font-semibold">
          {product.name}
        </h3>
        <p className="mt-0.5 text-[12px] text-muted">{product.size}</p>

        <div className="mt-auto flex items-end justify-between pt-2.5">
          <div className="leading-tight">
            {product.oldPrice && (
              <p className="text-[11px] text-muted line-through">{formatVnd(product.oldPrice)}</p>
            )}
            <p className="text-[16px] font-extrabold text-brand-600">{formatVnd(product.price)}</p>
          </div>
          <button
            type="button"
            onClick={onAdd}
            aria-label={`Thêm ${product.name} vào giỏ`}
            className="grid size-9 place-items-center rounded-full bg-brand-600 text-white transition-transform active:scale-90"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}
