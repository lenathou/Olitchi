'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ModernProductCardProps {
  id: string;
  nom: string;
  description?: string;
  prix: number;
  image?: string;
  index: number;
  isMobile: boolean;
}

export function ModernProductCard({
  nom,
  description,
  prix,
  image,
  index,
  isMobile
}: ModernProductCardProps) {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setQuantity(prev => prev + 1);
  };

  const handleRemoveFromCart = () => {
    setQuantity(prev => Math.max(0, prev - 1));
  };

  if (isMobile) {
    return (
      <Card
        variant="product"
        className="flex flex-row items-center gap-4 p-4 text-left"
      >
        {/* Image - Rounded (Left) */}
        <div className="relative w-28 h-28 shrink-0">
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            {image && (
              <Image
                src={image}
                alt={nom}
                fill
                className="object-contain"
                sizes="112px"
              />
            )}
          </div>
        </div>

        {/* Content (Right) */}
        <div className="flex-1 flex flex-col justify-between h-full min-h-[110px]">
          <div>
            <h3 className="font-serif font-bold text-foreground text-xl leading-tight mb-1">
              {nom}
            </h3>
            {description && (
              <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed opacity-90 font-medium">
                {description}
              </p>
            )}
          </div>

          {/* Price & Actions */}
          <div className="flex items-end justify-between mt-2">
            {quantity === 0 ? (
              <div className="flex-1"></div> // Spacer
            ) : (
              <div className="flex items-center gap-2 bg-secondary/30 rounded-full p-1 pr-3">
                <button
                  onClick={handleRemoveFromCart}
                  className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-foreground shadow-sm"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="font-bold text-sm text-foreground">
                  {quantity}
                </span>
                <button
                  onClick={handleAddToCart}
                  className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center shadow-sm"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            )}

            {/* Add Button or Price Positioned Right */}
            <div className="flex flex-col items-end gap-1">
              <span className="text-lg font-bold text-primary">
                {prix.toFixed(2)}€
              </span>
              {quantity === 0 && (
                <Button
                  onClick={handleAddToCart}
                  size="sm"
                  className="h-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white px-4 text-xs font-bold"
                >
                  Ajouter
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    );
  }

  // Desktop version
  return (
    <Card
      variant="secondary"
      className="group h-full flex flex-col overflow-hidden hover:-translate-y-2 transition-all duration-500 relative rounded-3xl"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-3xl">
        {image && (
          <Image
            src={image}
            alt={nom}
            fill
            className="object-contain group-hover:scale-110 transition-transform duration-700 p-4"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        )}
      </div>

      {/* Content */}
      <CardContent className="p-6 pt-4 flex flex-col flex-1">
        <div className="mb-4">
          <h3 className="font-serif font-bold text-foreground text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
            {nom}
          </h3>

          {description && (
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Actions & Price footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-primary/5">
          <span className="text-xl font-bold text-foreground">
            {prix.toFixed(2)}€
          </span>

          {quantity === 0 ? (
            <Button
              onClick={handleAddToCart}
              className="bg-primary/10 hover:bg-primary/20 text-primary font-bold rounded-full px-6 transition-all duration-300"
            >
              Ajouter
            </Button>
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={handleRemoveFromCart}
                className="w-10 h-10 bg-secondary/10 hover:bg-secondary/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md text-foreground"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-bold text-lg min-w-[24px] text-center text-foreground">
                {quantity}
              </span>
              <button
                onClick={handleAddToCart}
                className="w-10 h-10 bg-primary hover:bg-primary/90 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}