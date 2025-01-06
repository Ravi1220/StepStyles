import { Product } from '@/types/product';

export const mockProduct: Product = {
  id: '1',
  name: 'Premium Comfort Sneakers',
  description: 'Experience unparalleled comfort with our premium sneakers. Featuring advanced cushioning technology and breathable materials, these sneakers are perfect for both athletic activities and casual wear.',
  price: 129.99,
  images: [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    'https://images.unsplash.com/photo-1608231387042-66d1773070a5',
    'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519',
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a',
  ],
  variants: [
    { id: '1-1', color: 'Black', size: 'US 8', price: 129.99, stock: 5 },
    { id: '1-2', color: 'Black', size: 'US 9', price: 129.99, stock: 3 },
    { id: '1-3', color: 'White', size: 'US 8', price: 129.99, stock: 7 },
    { id: '1-4', color: 'White', size: 'US 9', price: 129.99, stock: 0 },
  ],
  reviews: [
    {
      id: 'r1',
      userName: 'John D.',
      rating: 5,
      comment: "Best sneakers I've ever owned! The comfort is unmatched.",
      date: '2024-03-15',
    },
    {
      id: 'r2',
      userName: 'Sarah M.',
      rating: 4,
      comment: 'Great quality and style. Runs slightly large.',
      date: '2024-03-10',
    },
  ],
  category: 'Footwear',
};

export const mockProducts: Product[] = [
  mockProduct,
  {
    id: '2',
    name: 'Running Shoes',
    description: 'High-performance running shoes designed for maximum comfort and durability. Perfect for both professional athletes and casual runners.',
    price: 149.99,
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5',
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519',
    ],
    variants: [
      { id: '2-1', color: 'Blue', size: 'US 8', price: 149.99, stock: 3 },
      { id: '2-2', color: 'Blue', size: 'US 9', price: 149.99, stock: 2 },
      { id: '2-3', color: 'Red', size: 'US 8', price: 149.99, stock: 4 },
      { id: '2-4', color: 'Red', size: 'US 9', price: 149.99, stock: 1 },
    ],
    reviews: [
      {
        id: 'r3',
        userName: 'Mike R.',
        rating: 5,
        comment: 'Perfect for my morning runs!',
        date: '2024-03-18',
      }
    ],
    category: 'Footwear',
  }
];