export interface ProductVariant {
  id: string;
  color: string;
  size: string;
  price: number;
  stock: number;
}

export interface ProductReview {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  variants: ProductVariant[];
  reviews: ProductReview[];
  category: string;
}