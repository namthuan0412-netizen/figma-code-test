// Demo data for the prototype — prices and ratings are placeholders.

export type Category = "all" | "hot" | "sweet" | "garlic" | "sriracha" | "combo";

export interface Product {
  id: string;
  name: string;
  size: string;
  category: Exclude<Category, "all">;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  spice: 1 | 2 | 3;
  badge?: "Bán chạy" | "Mới" | "Giảm giá";
  bottle: {
    body: string;
    cap: string;
    label: string;
    labelText: string;
  };
}

export const categories: { id: Category; label: string }[] = [
  { id: "all", label: "Tất cả" },
  { id: "hot", label: "Cay nồng" },
  { id: "sweet", label: "Ngọt dịu" },
  { id: "garlic", label: "Tỏi ớt" },
  { id: "sriracha", label: "Sriracha" },
  { id: "combo", label: "Combo" },
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Tương ớt Heinz Chilli Sauce",
    size: "Chai 300g",
    category: "hot",
    price: 32000,
    rating: 4.8,
    reviews: 1240,
    spice: 2,
    badge: "Bán chạy",
    bottle: { body: "#c8102e", cap: "#1d1b1a", label: "#fbf6ef", labelText: "CHILLI" },
  },
  {
    id: "p2",
    name: "Heinz Sweet Chilli Sauce",
    size: "Chai 250ml",
    category: "sweet",
    price: 45000,
    oldPrice: 52000,
    rating: 4.7,
    reviews: 860,
    spice: 1,
    badge: "Giảm giá",
    bottle: { body: "#e8562a", cap: "#c8102e", label: "#fff1d6", labelText: "SWEET" },
  },
  {
    id: "p3",
    name: "Heinz Sriracha Hot Chilli",
    size: "Chai 220ml",
    category: "sriracha",
    price: 58000,
    rating: 4.9,
    reviews: 532,
    spice: 3,
    badge: "Mới",
    bottle: { body: "#a50d26", cap: "#2f7d4b", label: "#ffffff", labelText: "SRIRACHA" },
  },
  {
    id: "p4",
    name: "Tương ớt Tỏi Heinz Garlic Chilli",
    size: "Chai 300g",
    category: "garlic",
    price: 36000,
    rating: 4.6,
    reviews: 418,
    spice: 2,
    bottle: { body: "#d23a2a", cap: "#f2e6cf", label: "#fbf6ef", labelText: "GARLIC" },
  },
  {
    id: "p5",
    name: "Tương ớt Heinz Extra Hot",
    size: "Chai 500g",
    category: "hot",
    price: 49000,
    rating: 4.7,
    reviews: 690,
    spice: 3,
    bottle: { body: "#8f0b1f", cap: "#1d1b1a", label: "#f5a524", labelText: "EXTRA HOT" },
  },
  {
    id: "p6",
    name: "Heinz Sweet Chilli Squeeze",
    size: "Chai bóp 500ml",
    category: "sweet",
    price: 69000,
    oldPrice: 79000,
    rating: 4.5,
    reviews: 274,
    spice: 1,
    badge: "Giảm giá",
    bottle: { body: "#f07a2c", cap: "#ffffff", label: "#fff1d6", labelText: "SWEET" },
  },
  {
    id: "p7",
    name: "Combo 3 chai Tương ớt Heinz",
    size: "3 × 300g",
    category: "combo",
    price: 86000,
    oldPrice: 96000,
    rating: 4.9,
    reviews: 1012,
    spice: 2,
    badge: "Bán chạy",
    bottle: { body: "#c8102e", cap: "#1d1b1a", label: "#fbf6ef", labelText: "×3 PACK" },
  },
  {
    id: "p8",
    name: "Heinz Chilli Sauce Gói nhỏ",
    size: "Hộp 50 gói × 9g",
    category: "hot",
    price: 55000,
    rating: 4.4,
    reviews: 188,
    spice: 2,
    bottle: { body: "#c8102e", cap: "#c8102e", label: "#ffffff", labelText: "SACHET" },
  },
];

export const formatVnd = (value: number) =>
  value.toLocaleString("vi-VN") + "đ";
