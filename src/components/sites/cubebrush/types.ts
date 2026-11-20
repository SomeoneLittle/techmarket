export type ProductPrice =
  | { kind: "free" }
  | { kind: "normal" | "sale"; now: string; was?: string; plus?: boolean };

export type Product = {
  id: string;
  href: string;
  /** true when the product has a local detail page in this clone */
  internal: boolean;
  title: string;
  store: string;
  storeName: string;
  category: string;
  img: string | null;
  alt: string;
  video: boolean;
  fill: string;
  ratingLabel: string;
  reviews?: string;
  likes: string | null;
  comments?: string;
  badge?: { text: string; bg?: string | null };
  price: ProductPrice;
};
