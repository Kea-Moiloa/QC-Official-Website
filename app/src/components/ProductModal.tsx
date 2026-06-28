import { useState } from 'react';
import type { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { sizes } from '@/data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState('M');
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, selectedSize);
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden grid grid-cols-1 md:grid-cols-2 animate-slide-up shadow-2xl">
        {/* Image */}
        <div className="relative bg-secondary aspect-square md:aspect-auto">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="p-6 lg:p-10 overflow-y-auto relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-secondary transition-colors z-10 cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>

          <p className="text-xs font-semibold text-[#c4956a] uppercase tracking-[2px] mb-2">{product.category}</p>
          <h2 className="font-display text-2xl lg:text-3xl font-semibold mb-3">{product.name}</h2>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl lg:text-2xl font-bold">R{product.price}</span>
            {product.originalPrice && (
              <span className="text-base text-muted-foreground line-through">R{product.originalPrice}</span>
            )}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">{product.description}</p>

          {/* Size Selector */}
          <div className="mb-8">
            <label className="text-sm font-semibold mb-3 block">Select Size</label>
            <div className="flex gap-2 flex-wrap">
              {sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 rounded-lg border-[1.5px] font-medium text-sm transition-all duration-200 cursor-pointer ${
                    selectedSize === size
                      ? 'bg-[#c4956a] text-white border-[#c4956a]'
                      : 'border-border hover:border-[#c4956a]'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="btn w-full"
          >
            Add to Cart — R{product.price}
          </button>

          {/* Features */}
          <div className="mt-6 pt-6 border-t border-border grid grid-cols-3 gap-4">
            {[
              { icon: '📦', label: 'Free Shipping' },
              { icon: '↩️', label: 'Easy Returns' },
              { icon: '✝️', label: 'Faith-Inspired' },
            ].map(f => (
              <div key={f.label} className="text-center">
                <div className="text-lg mb-1">{f.icon}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wide">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
