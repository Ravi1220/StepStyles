'use client';

import { useState } from 'react';
import { use } from 'react';
import Link from 'next/link';
import { ChevronLeft, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageGallery } from '@/components/product/ImageGallery';
import { ProductVariants } from '@/components/product/ProductVariants';
import { ProductReviews } from '@/components/product/ProductReviews';
import { mockProducts } from '@/lib/data';
import { ProductVariant } from '@/types/product';

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = use(Promise.resolve(params.id));
  const product = mockProducts.find((p) => p.id === productId);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product?.variants[0]
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    console.log('Added to cart:', {
      product,
      variant: selectedVariant,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/products"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ImageGallery images={product.images} />

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-2xl font-semibold text-primary">
                ${selectedVariant?.price.toFixed(2)}
              </p>
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            <ProductVariants
              variants={product.variants}
              onVariantChange={setSelectedVariant}
            />

            <div className="space-y-4">
              <p className="text-sm">
                Availability:{' '}
                <span
                  className={
                    selectedVariant?.stock > 0 ? 'text-green-600' : 'text-red-600'
                  }
                >
                  {selectedVariant?.stock > 0
                    ? `${selectedVariant?.stock} in stock`
                    : 'Out of stock'}
                </span>
              </p>

              <Button
                size="lg"
                className="w-full"
                onClick={handleAddToCart}
                disabled={selectedVariant?.stock === 0}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <ProductReviews reviews={product.reviews} />
        </div>
      </div>
    </div>
  );
}