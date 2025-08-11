'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setQuantity(prev => prev + 1);
  };

  const handleRemoveFromCart = () => {
    setQuantity(prev => Math.max(0, prev - 1));
  };

  if (isMobile) {
    return (
      <div 
        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className="flex gap-4 p-4">
          {/* Image */}
          <div className="relative w-24 h-24 flex-shrink-0">
            {image && (
              <Image
                src={image}
                alt={nom}
                fill
                className="object-cover rounded-xl"
                sizes="96px"
              />
            )}
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Heart 
                className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
              />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-gray-900 text-sm leading-tight truncate pr-2">
                {nom}
              </h3>
              <span className="text-lg font-bold text-orange-600 flex-shrink-0">
                {prix.toFixed(2)}€
              </span>
            </div>
            
            {description && (
              <p className="text-xs text-gray-600 line-clamp-2 mb-3">
                {description}
              </p>
            )}

            {/* Actions */}
            <div className="flex items-center justify-between">
              {quantity === 0 ? (
                <Button 
                  onClick={handleAddToCart}
                  size="sm"
                  className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-4 h-8 text-xs font-medium"
                >
                  <Plus className="w-3 h-3 mr-1" />
                  Voir détails
                </Button>
              ) : (
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleRemoveFromCart}
                    className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="font-medium text-sm min-w-[20px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={handleAddToCart}
                    className="w-8 h-8 bg-orange-600 hover:bg-orange-700 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop version
  return (
    <div 
      className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20 overflow-hidden hover:shadow-2xl hover:-translate-y-2 hover:bg-white/90 transition-all duration-500 relative"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-3xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
        {image && (
          <Image
            src={image}
            alt={nom}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        )}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center hover:scale-110 hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
        >
          <Heart 
            className={`w-6 h-6 ${isLiked ? 'fill-red-500 text-red-500' : 'text-white drop-shadow-lg'}`}
          />
        </button>
        
        {/* Price Badge */}
        <div className="absolute bottom-4 left-4 bg-gradient-to-r from-orange-500 to-orange-600 backdrop-blur-sm rounded-full px-4 py-2 shadow-xl z-20">
          <span className="text-lg font-bold text-white drop-shadow-sm">
            {prix.toFixed(2)}€
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-gray-900 text-xl mb-3 line-clamp-1 group-hover:text-orange-600 transition-colors duration-300">
          {nom}
        </h3>
        
        {description && (
          <p className="text-sm text-gray-500 line-clamp-2 mb-5 leading-relaxed">
            {description}
          </p>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between">
          {quantity === 0 ? (
            <Button 
              onClick={handleAddToCart}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full px-8 h-12 font-semibold flex-1 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Plus className="w-5 h-5 mr-2" />
              Voir les détails
            </Button>
          ) : (
            <div className="flex items-center gap-3 flex-1">
              <button
                onClick={handleRemoveFromCart}
                className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
              >
                <Minus className="w-5 h-5" />
              </button>
              <span className="font-bold text-xl min-w-[40px] text-center text-gray-800">
                {quantity}
              </span>
              <button
                onClick={handleAddToCart}
                className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Plus className="w-5 h-5" />
              </button>
              <div className="flex-1 text-right">
                <span className="text-sm text-gray-500">
                  Total: <span className="font-bold text-lg text-orange-600">
                    {(prix * quantity).toFixed(2)}€
                  </span>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}