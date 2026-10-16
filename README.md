# Heinz Chili Sauce – Mobile Product List

Mobile screen (390 × 844) for a product listing page selling Heinz chili sauce, built to test Figma's code layers.

**Stack:** React 18 · TypeScript · Vite · Tailwind CSS v4 · Be Vietnam Pro

## Run

```bash
npm install
npm run dev      # http://localhost:5173 — open DevTools mobile view (iPhone 14, 390px)
npm run build
```

## Structure

```
src/
  ProductListScreen.tsx     # the screen (state: category, search, favorites, cart)
  data/products.ts          # demo products + categories (placeholder prices)
  components/
    AppHeader.tsx           # back button, title, cart badge
    SearchBar.tsx           # search input + filter button
    PromoBanner.tsx         # "Giảm 20% combo 3 chai" banner
    CategoryChips.tsx       # horizontal scrolling filter chips
    ProductCard.tsx         # 2-column grid card: badge, favorite, spice level, rating, price, add
    BottomNav.tsx           # sticky tab bar
    Bottle.tsx              # SVG bottle illustration (placeholder for product photos)
    Icons.tsx               # inline SVG icons, no icon library
```

Each component is self-contained (only React + Tailwind classes), so it can be pasted into a Figma code layer on its own.
Design tokens (brand red, cream, ink, etc.) live in `src/index.css` under `@theme`.

## Interactions

- Category chips and search filter the grid
- Heart toggles favorite
- `+` adds to cart (header and tab bar badges update)

> Product data is mock data for prototyping. Bottle images are illustrations, not real product photography.
