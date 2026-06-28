import { useState } from 'react';
import { Link } from 'react-router';
import { useCart } from '@/context/CartContext';

export default function Checkout() {
  const { cart, subtotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'ZA',
    state: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    cardName: '',
  });

  const tax = Math.round(subtotal * 0.15 * 100) / 100;
  const total = subtotal + tax;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const validate = () => {
    const required = ['firstName', 'lastName', 'email', 'address', 'city', 'postalCode', 'country'];
    const newErrors: Record<string, boolean> = {};
    let valid = true;

    required.forEach(field => {
      if (!formData[field as keyof typeof formData]?.trim()) {
        newErrors[field] = true;
        valid = false;
      }
    });

    setErrors(newErrors);
    return valid;
  };

  const placeOrder = () => {
    if (cart.length === 0) return;
    if (!validate()) return;
    setShowSuccess(true);
    clearCart();
  };

  if (showSuccess) {
    return (
      <main className="pt-24 lg:pt-28 pb-16 lg:pb-24 page-enter">
        <div className="section-container max-w-lg mx-auto text-center py-16 lg:py-24">
          <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-6">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <h1 className="font-display text-2xl lg:text-3xl font-semibold mb-3">Order Placed!</h1>
          <p className="text-muted-foreground text-sm lg:text-base mb-8 leading-relaxed">
            Thank you for your purchase. Your order has been confirmed and will be shipped soon. God bless!
          </p>
          <Link to="/shop" className="btn">
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 lg:pt-28 pb-16 lg:pb-24 page-enter">
      <div className="section-container">
        {/* Back */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#c4956a] transition-colors mb-6"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Back to Shop
        </Link>

        <h1 className="font-display text-2xl lg:text-3xl font-semibold mb-8">Checkout</h1>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-4 opacity-30 text-muted-foreground">
              <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
            </svg>
            <h2 className="font-display text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground text-sm mb-6">Add some items to get started.</p>
            <Link to="/shop" className="btn">Browse Products</Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact */}
              <section>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-7 h-7 rounded-full bg-[#c4956a] text-white flex items-center justify-center text-sm font-bold">1</span>
                  <h2 className="font-medium">Contact Information</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">First Name</label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className={`w-full px-4 py-3 rounded-lg border bg-background text-sm outline-none focus:border-[#c4956a] transition-colors ${
                        errors.firstName ? 'border-red-500' : 'border-border'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Last Name</label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className={`w-full px-4 py-3 rounded-lg border bg-background text-sm outline-none focus:border-[#c4956a] transition-colors ${
                        errors.lastName ? 'border-red-500' : 'border-border'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-lg border bg-background text-sm outline-none focus:border-[#c4956a] transition-colors ${
                        errors.email ? 'border-red-500' : 'border-border'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+27 67 303 1232"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm outline-none focus:border-[#c4956a] transition-colors"
                    />
                  </div>
                </div>
              </section>

              {/* Shipping */}
              <section>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-7 h-7 rounded-full bg-[#c4956a] text-white flex items-center justify-center text-sm font-bold">2</span>
                  <h2 className="font-medium">Shipping Address</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Address</label>
                    <input
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="123 Main Street"
                      className={`w-full px-4 py-3 rounded-lg border bg-background text-sm outline-none focus:border-[#c4956a] transition-colors ${
                        errors.address ? 'border-red-500' : 'border-border'
                      }`}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">City</label>
                      <input
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Johannesburg"
                        className={`w-full px-4 py-3 rounded-lg border bg-background text-sm outline-none focus:border-[#c4956a] transition-colors ${
                          errors.city ? 'border-red-500' : 'border-border'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Postal Code</label>
                      <input
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        placeholder="2000"
                        className={`w-full px-4 py-3 rounded-lg border bg-background text-sm outline-none focus:border-[#c4956a] transition-colors ${
                          errors.postalCode ? 'border-red-500' : 'border-border'
                        }`}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Country</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border bg-background text-sm outline-none focus:border-[#c4956a] transition-colors appearance-none ${
                          errors.country ? 'border-red-500' : 'border-border'
                        }`}
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', paddingRight: '2.5rem' }}
                      >
                        <option value="ZA">South Africa</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                        <option value="DE">Germany</option>
                        <option value="FR">France</option>
                        <option value="JP">Japan</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Province / State</label>
                      <input
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="Gauteng"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm outline-none focus:border-[#c4956a] transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Payment */}
              <section>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-7 h-7 rounded-full bg-[#c4956a] text-white flex items-center justify-center text-sm font-bold">3</span>
                  <h2 className="font-medium">Payment Method</h2>
                </div>
                <div className="space-y-3">
                  {[
                    { id: 'card', label: 'Credit / Debit Card', color: 'bg-border' },
                    { id: 'paypal', label: 'PayPal', color: 'bg-blue-800' },
                    { id: 'apple', label: 'Apple Pay', color: 'bg-black' },
                  ].map(method => (
                    <label
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id)}
                      className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        paymentMethod === method.id
                          ? 'border-[#c4956a] bg-background'
                          : 'border-border bg-card hover:border-muted-foreground/30'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={() => setPaymentMethod(method.id)}
                        className="accent-[#c4956a]"
                      />
                      <div className={`w-10 h-6 rounded ${method.color} flex items-center justify-center text-[8px] font-bold text-white`}>
                        {method.id === 'card' ? 'CARD' : method.id === 'paypal' ? 'PP' : 'AP'}
                      </div>
                      <span className="text-sm font-medium">{method.label}</span>
                    </label>
                  ))}
                </div>

                {paymentMethod === 'card' && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Card Number</label>
                      <input
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="0000 0000 0000 0000"
                        maxLength={19}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm outline-none focus:border-[#c4956a] transition-colors"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Expiry Date</label>
                        <input
                          name="expiry"
                          value={formData.expiry}
                          onChange={handleChange}
                          placeholder="MM / YY"
                          maxLength={7}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm outline-none focus:border-[#c4956a] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5">CVV</label>
                        <input
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          placeholder="123"
                          maxLength={4}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm outline-none focus:border-[#c4956a] transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Name on Card</label>
                      <input
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm outline-none focus:border-[#c4956a] transition-colors"
                      />
                    </div>
                  </div>
                )}
              </section>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-xl p-6 lg:p-8 sticky top-28">
                <h2 className="font-display text-lg font-semibold mb-6">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  {cart.map((item, idx) => (
                    <div key={`${item.id}-${item.size}-${idx}`} className="flex gap-3 pb-4 border-b border-border/50">
                      <div className="w-14 h-16 rounded-md overflow-hidden bg-secondary flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.category} / Size {item.size} / Qty {item.qty}</p>
                      </div>
                      <p className="text-sm font-semibold">R{item.price * item.qty}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>R{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Tax (15% VAT)</span>
                    <span>R{tax}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold pt-3 border-t border-border">
                    <span>Total</span>
                    <span>R{total}</span>
                  </div>
                </div>
                <button
                  onClick={placeOrder}
                  className="btn w-full"
                >
                  Place Order
                </button>
                <p className="text-[10px] text-muted-foreground text-center mt-4">
                  By placing your order, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
