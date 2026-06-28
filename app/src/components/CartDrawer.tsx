import { useNavigate } from 'react-router';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { cart, isOpen, closeCart, removeFromCart, updateQty, subtotal } = useCart();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 animate-fade-in"
        onClick={closeCart}
      />
      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-[420px] bg-background z-50 flex flex-col animate-slide-in-right shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-display text-xl font-semibold">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 rounded-lg hover:bg-secondary transition-colors cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-30 mb-4">
                <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
              </svg>
              <p className="text-sm">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item, idx) => (
                <div key={`${item.id}-${item.size}-${idx}`} className="flex gap-4 pb-4 border-b border-border/50">
                  <div className="w-20 h-24 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{item.name}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">Size: {item.size}</p>
                    <p className="text-sm font-semibold mt-1">R{item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQty(item.id, item.size, -1)}
                        className="w-7 h-7 rounded-md border border-border flex items-center justify-center text-xs hover:bg-[#c4956a] hover:text-white hover:border-[#c4956a] transition-colors cursor-pointer"
                      >
                        -
                      </button>
                      <span className="text-sm w-5 text-center">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.size, 1)}
                        className="w-7 h-7 rounded-md border border-border flex items-center justify-center text-xs hover:bg-[#c4956a] hover:text-white hover:border-[#c4956a] transition-colors cursor-pointer"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="ml-auto p-1.5 text-muted-foreground hover:text-red-500 transition-colors cursor-pointer"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-border px-6 py-5 bg-card">
            <div className="flex justify-between items-center mb-1 text-sm text-muted-foreground">
              <span>Subtotal</span>
              <span>R{subtotal}</span>
            </div>
            <div className="flex justify-between items-center mb-5 text-lg font-bold">
              <span>Total</span>
              <span>R{subtotal}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="btn w-full"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
