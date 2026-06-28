import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router';
import { products, heroImages } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { showToast } from '@/components/Toast';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import type { Product } from '@/types';

// ===== HERO SECTION =====
function HeroSection() {
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1 animate-fade-in">
            <div className="text-[#c4956a] text-sm lg:text-base font-medium uppercase tracking-[3px] mb-4">
              Wear Your Belief
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] mb-6">
              Faith Meets<br/>Fashion
            </h1>
            <p className="text-muted-foreground text-sm lg:text-base leading-relaxed max-w-md mx-auto lg:mx-0 mb-8">
              Queuette Clothing is a Christian-based fashion brand creating stylish, modern, faith-inspired clothing for young adults. Express your faith boldly and beautifully — not just on Sundays, but every day.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Link to="/shop" className="btn">Shop Collection</Link>
              <Link to="/shop" className="btn btn-outline">Explore</Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-fade-in stagger-1">
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] max-w-lg mx-auto">
              <img
                src={heroImages[currentHero]}
                alt="Queuette Clothing"
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/60 backdrop-blur-md p-1.5 rounded-full">
                {heroImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentHero(i)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      i === currentHero ? 'w-6 bg-white' : 'w-2 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== COUNTDOWN SECTION =====
function CountdownSection() {
  const [time, setTime] = useState({ d: 14, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 14);

    const calc = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return;
      setTime({
        d: Math.floor(diff / (1000 * 60 * 60 * 24)),
        h: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        m: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        s: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };
    calc();
    const iv = setInterval(calc, 1000);
    return () => clearInterval(iv);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section className="bg-[#c4956a] text-white py-10 lg:py-14">
      <div className="section-container text-center">
        <h2 className="text-xs lg:text-sm font-semibold uppercase tracking-[2px] mb-8">
          Pre-Order Drop Ends In
        </h2>
        <div className="flex justify-center gap-6 lg:gap-10 flex-wrap">
          {[
            { val: pad(time.d), label: 'Days' },
            { val: pad(time.h), label: 'Hours' },
            { val: pad(time.m), label: 'Minutes' },
            { val: pad(time.s), label: 'Seconds' },
          ].map(item => (
            <div key={item.label} className="text-center">
              <span className="font-display text-4xl lg:text-6xl font-bold leading-none">{item.val}</span>
              <div className="text-[10px] lg:text-xs uppercase tracking-[2px] opacity-80 mt-2">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== MISSION SECTION =====
function MissionSection() {
  return (
    <section className="bg-[#f5ede4] dark:bg-[#2a2420] py-16 lg:py-20">
      <div className="section-container text-center">
        <h2 className="font-display text-2xl lg:text-4xl font-semibold mb-4">Our Mission</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm lg:text-base leading-relaxed">
          To provide high-quality, fashionable Christian apparel that empowers young people to express their faith boldly and beautifully. Every product carries a message that uplifts, inspires, and strengthens faith.
        </p>
      </div>
    </section>
  );
}

// ===== BESTSELLERS SECTION =====
function BestsellersSection({
  onQuickView,
  onAddToCart
}: {
  onQuickView: (p: Product) => void;
  onAddToCart: (p: Product) => void;
}) {
  const bestsellers = products.slice(0, 4);

  return (
    <section className="py-16 lg:py-24">
      <div className="section-container">
        <div className="flex items-end justify-between mb-8 lg:mb-12">
          <div>
            <h2 className="font-display text-2xl lg:text-4xl font-semibold mb-2">Bestsellers</h2>
            <p className="text-muted-foreground text-sm">Our most loved pieces by the community.</p>
          </div>
          <Link to="/shop" className="hidden sm:flex items-center gap-2 text-xs font-medium uppercase tracking-[1.5px] text-muted-foreground hover:text-[#c4956a] transition-colors">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {bestsellers.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== ABOUT PREVIEW SECTION =====
function AboutPreview() {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="rounded-xl overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
              alt="Queuette Clothing Store"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="animate-fade-in">
            <p className="text-[10px] font-semibold text-[#c4956a] uppercase tracking-[2px] mb-3">About Queuette</p>
            <h2 className="font-display text-2xl lg:text-4xl font-semibold mb-6">
              More Than Fashion — A Movement
            </h2>
            <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-4">
              Queuette Clothing is a Christian-based fashion brand dedicated to creating stylish, modern, faith-inspired clothing for young adults. We believe that faith can be expressed confidently through everyday fashion.
            </p>
            <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-8">
              Our designs are trendy, minimalistic, and crafted to fit seamlessly into any wardrobe — allowing individuals to proudly wear their belief. Not just on Sundays, but every single day.
            </p>
            <Link to="/about" className="btn">Learn Our Story</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== COMING SOON SECTION =====
function ComingSoonSection() {
  const items = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
      ),
      title: 'Hoodies & Sweaters',
      desc: 'Premium cozy layers with scripture-inspired designs for every season.'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
        </svg>
      ),
      title: 'Watches & Accessories',
      desc: 'Minimalist timepieces and faith-based jewelry to complete your look.'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      title: 'Pop-Up Events',
      desc: 'Campus activations, church partnerships, and exclusive seasonal drops.'
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="section-container text-center">
        <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-4">Coming Soon</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10 lg:mb-12 text-sm lg:text-base">
          We're expanding beyond apparel. Here's what's on the horizon for Queuette Clothing.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {items.map(item => (
            <div key={item.title} className="p-6 lg:p-8 rounded-xl bg-background border border-border">
              <div className="w-14 h-14 rounded-full bg-[#f5ede4] dark:bg-[#2a2420] flex items-center justify-center mx-auto mb-4 text-[#c4956a]">
                {item.icon}
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <Link to="/contact" className="btn">Get Notified</Link>
      </div>
    </section>
  );
}

// ===== NEWSLETTER SECTION =====
function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSuccess(true);
      setEmail('');
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  return (
    <section className="bg-[#c4956a] text-white py-16 lg:py-20">
      <div className="section-container text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-2xl lg:text-4xl font-semibold mb-3">Stay in the Loop</h2>
          <p className="text-white/90 text-sm lg:text-base mb-8">
            Be the first to know about new drops, pre-orders, exclusive offers, and pop-up events.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 rounded-lg text-foreground text-sm outline-none border-none"
            />
            <button type="submit" className="btn bg-foreground text-background hover:bg-foreground/90 whitespace-nowrap">
              Subscribe
            </button>
          </form>
          {success && (
            <div className="mt-4 p-3 bg-white/20 rounded-lg text-sm animate-fade-in">
              Thank you for subscribing! You'll be the first to hear about our latest drops.
            </div>
          )}
          <div className="flex justify-center gap-3 mt-8">
            {['Instagram', 'TikTok', 'Facebook', 'X'].map(social => (
              <a
                key={social}
                href="#"
                className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label={social}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {social === 'Instagram' && <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>}
                  {social === 'TikTok' && <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>}
                  {social === 'Facebook' && <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>}
                  {social === 'X' && <><path d="M4 4l11.733 16h4.267l-11.733-16z"/><path d="M4 20l6.768-6.768m2.46-2.46l6.772-6.772"/></>}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== CONTACT PREVIEW SECTION =====
function ContactPreview() {
  return (
    <section className="py-16 lg:py-20 bg-[#f5ede4] dark:bg-[#2a2420]">
      <div className="section-container text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-2xl lg:text-4xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground mb-8 text-sm lg:text-base leading-relaxed">
            Have questions about our products, partnerships, or want to collaborate? We'd love to hear from you.
          </p>
          <div className="space-y-2 mb-8 text-sm text-muted-foreground">
            <p><strong className="text-foreground">Email:</strong> queuette.clothing@gmail.com</p>
            <p><strong className="text-foreground">Phone:</strong> 067 303 1232</p>
            <p><strong className="text-foreground">Founder:</strong> Kay M.</p>
          </div>
          <Link to="/contact" className="btn">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}

// ===== HOME PAGE =====
export default function Home() {
  const { addToCart } = useCart();
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  const handleQuickView = useCallback((product: Product) => {
    setModalProduct(product);
  }, []);

  const handleAddToCart = useCallback((product: Product) => {
    addToCart(product, 'M');
    showToast(`${product.name} added to cart`);
  }, [addToCart]);

  return (
    <main>
      <HeroSection />
      <CountdownSection />
      <MissionSection />
      <BestsellersSection onQuickView={handleQuickView} onAddToCart={handleAddToCart} />
      <AboutPreview />
      <ComingSoonSection />
      <NewsletterSection />
      <ContactPreview />

      {modalProduct && (
        <ProductModal product={modalProduct} onClose={() => setModalProduct(null)} />
      )}
    </main>
  );
}
