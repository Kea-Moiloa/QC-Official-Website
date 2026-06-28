import { useState, useMemo, useCallback } from 'react';
import { products, categories, categoryTitles } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { showToast } from '@/components/Toast';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import type { Product, Category } from '@/types';

export default function Shop() {
  const { addToCart } = useCart();
  const [activeFilter, setActiveFilter] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    let result = products;

    if (activeFilter !== 'all') {
      if (activeFilter === 'Pre-Order') {
        result = result.filter(p => p.badge === 'Pre-Order');
      } else {
        result = result.filter(p => p.category === activeFilter);
      }
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }

    return result;
  }, [activeFilter, searchQuery]);

  const handleQuickView = useCallback((product: Product) => {
    setModalProduct(product);
  }, []);

  const handleAddToCart = useCallback((product: Product) => {
    addToCart(product, 'M');
    showToast(`${product.name} added to cart`);
  }, [addToCart]);

  return (
    <main className="pt-24 lg:pt-28 pb-16 lg:pb-24 page-enter">
      <div className="section-container">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl lg:text-5xl font-semibold mb-2">
            {categoryTitles[activeFilter] || 'Products'}
          </h1>
          <p className="text-muted-foreground text-sm lg:text-base">
            Inspired by scripture. Designed for everyday wear.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-6 max-w-md">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-11 pr-10 py-3 rounded-lg border border-border bg-card text-sm outline-none focus:border-[#c4956a] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-secondary transition-colors cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
              </svg>
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key as Category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer border-[1.5px] ${
                activeFilter === cat.key
                  ? 'bg-[#c4956a] text-white border-[#c4956a]'
                  : 'bg-card text-muted-foreground border-border hover:border-[#c4956a] hover:text-[#c4956a]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search results info */}
        {searchQuery && (
          <p className="text-sm text-muted-foreground mb-6">
            Found {filtered.length} result{filtered.length !== 1 ? 's' : ''} for "{searchQuery}"
          </p>
        )}

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-4 opacity-30">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
            </svg>
            <h3 className="text-lg font-medium mb-1">No products found</h3>
            <p className="text-sm">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {filtered.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={handleQuickView}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}
      </div>

      {modalProduct && (
        <ProductModal product={modalProduct} onClose={() => setModalProduct(null)} />
      )}
    </main>
  );
}
