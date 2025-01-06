'use client';

import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ProductVariant } from '@/types/product';

interface ProductVariantsProps {
  variants: ProductVariant[];
  onVariantChange: (variant: ProductVariant) => void;
}

export function ProductVariants({
  variants,
  onVariantChange,
}: ProductVariantsProps) {
  const [selectedColor, setSelectedColor] = useState<string>(variants[0].color);
  const [selectedSize, setSelectedSize] = useState<string>(variants[0].size);

  const availableColors = Array.from(
    new Set(variants.map((variant) => variant.color))
  );
  const availableSizes = Array.from(
    new Set(
      variants
        .filter((variant) => variant.color === selectedColor)
        .map((variant) => variant.size)
    )
  );

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    const availableSizesForColor = variants.filter(
      (variant) => variant.color === color
    );
    setSelectedSize(availableSizesForColor[0].size);
    onVariantChange(availableSizesForColor[0]);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
    const selectedVariant = variants.find(
      (variant) => variant.color === selectedColor && variant.size === size
    )!;
    onVariantChange(selectedVariant);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Color</label>
        <Select value={selectedColor} onValueChange={handleColorChange}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {availableColors.map((color) => (
              <SelectItem key={color} value={color}>
                {color}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Size</label>
        <Select value={selectedSize} onValueChange={handleSizeChange}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {availableSizes.map((size) => (
              <SelectItem key={size} value={size}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}