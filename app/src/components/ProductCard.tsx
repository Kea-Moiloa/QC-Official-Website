import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView, onAddToCart }: ProductCardProps) {
  return (
    <div className="group bg-card rounded-xl overflow-hidden border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
      onClick={() => onQuickView(product)}>
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.badge && (
          <span className={`absolute top-3 left-3 px-3 py-1 text-[10px] font-bold uppercase tracking-wide rounded ${
            product.badge === 'Pre-Order' ? 'bg-blue-600' :
            product.badge === 'Sale' ? 'bg-red-500' : 'bg-[#c4956a]'
          } text-white`}>
            {product.badge}
          </span>
        )}
        {/* Actions */}
        <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={(e) => { e.stopPropagation(); onQuickView(product); }}
            className="w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-lg hover:bg-[#c4956a] hover:text-white transition-colors cursor-pointer"
            title="Quick View"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
            className="w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-lg hover:bg-[#c4956a] hover:text-white transition-colors cursor-pointer"
            title="Add to Cart"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14"/><path d="M12 5v14"/>
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4 lg:p-5">
        <p className="text-[10px] font-semibold text-[#c4956a] uppercase tracking-[2px] mb-1">{product.category}</p>
        <h3 className="font-medium text-sm lg:text-base mb-2 truncate">{product.name}</h3>
        <div className="flex items-center gap-3">
          <span className="font-semibold text-sm">R{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">R{product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}
