import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: 1,
    name: "Faith Over Fear Tee",
    category: "T-Shirts",
    price: 350,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    badge: "New",
    description: "A bold statement tee inspired by 2 Timothy 1:7. Crafted from premium cotton with a modern, relaxed fit. Features a minimalistic scripture print designed for everyday wear — not just Sundays."
  },
  {
    id: 2,
    name: "Blessed Snapback Cap",
    category: "Caps",
    price: 280,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80",
    badge: "New",
    description: "A sleek snapback cap embroidered with 'Blessed' in elegant script. Adjustable strap, breathable fabric, and a structured crown for a clean, modern look that speaks faith without saying a word."
  },
  {
    id: 3,
    name: "Walk by Faith Tote",
    category: "Tote Bags",
    price: 220,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=80",
    badge: "Pre-Order",
    description: "A spacious canvas tote featuring 2 Corinthians 5:7. Reinforced handles, interior pocket, and a magnetic closure. Perfect for church, campus, or everyday errands with purpose."
  },
  {
    id: 4,
    name: "Grace Upon Grace Tee",
    category: "T-Shirts",
    price: 350,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80",
    badge: "New",
    description: "Inspired by John 1:16, this tee celebrates the overflowing grace we receive daily. Soft-touch cotton, tailored fit, and a subtle design that sparks conversations about faith."
  },
  {
    id: 5,
    name: "Chosen Bucket Hat",
    category: "Hats",
    price: 250,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1575428652377-a2697242633c?w=600&q=80",
    badge: "Pre-Order",
    description: "A trendy bucket hat embroidered with 'Chosen' — a reminder of 1 Peter 2:9. Reversible design, breathable cotton, and UPF 50+ protection. Style meets scripture."
  },
  {
    id: 6,
    name: "Fearfully Made Tee",
    category: "T-Shirts",
    price: 350,
    originalPrice: 420,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80",
    badge: "Sale",
    description: "Psalm 139:14 comes to life in this premium tee. Premium heavyweight cotton with a vintage wash finish. A wardrobe staple that reminds you — and everyone who sees it — that you are fearfully and wonderfully made."
  },
  {
    id: 7,
    name: "Hope Anchors Cap",
    category: "Caps",
    price: 280,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=600&q=80",
    badge: "New",
    description: "Hebrews 6:19 inspires this dad cap with 'Hope' embroidered on the front. Soft cotton twill, adjustable strap, and a curved brim. Minimal, meaningful, and made for everyday faith."
  },
  {
    id: 8,
    name: "Faithful Tote Bag",
    category: "Tote Bags",
    price: 220,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1597484662317-c931384b2d5e?w=600&q=80",
    badge: "New",
    description: "A durable canvas tote with 'Faithful' printed in elegant typography. Lamentations 3:23 reminds us of God's mercies renewed every morning. Roomy, stylish, and built to last."
  },
  {
    id: 9,
    name: "Child of God Tee",
    category: "T-Shirts",
    price: 350,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80",
    badge: "New",
    description: "John 1:12 declares who you are — a child of God. This statement tee features a clean, bold design on premium cotton. Wear your identity with confidence and style."
  },
  {
    id: 10,
    name: "Be Still Wide-Brim Hat",
    category: "Hats",
    price: 320,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=600&q=80",
    badge: "Pre-Order",
    description: "Psalm 46:10 inspires this elegant wide-brim hat. 'Be Still' is embroidered along the band. UPF protection, packable design, and a timeless silhouette for sunny days filled with faith."
  },
  {
    id: 11,
    name: "Peace Be Still Cap",
    category: "Caps",
    price: 280,
    originalPrice: 340,
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&q=80",
    badge: "Sale",
    description: "Mark 4:39 comes alive on this structured cap. 'Peace Be Still' embroidered on the front panel. Breathable mesh back, snap closure, and a design that calms storms before they start."
  },
  {
    id: 12,
    name: "Love Your Neighbor Tote",
    category: "Tote Bags",
    price: 220,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80",
    badge: "Pre-Order",
    description: "Matthew 22:39 in action — a tote that carries more than your belongings. 'Love Your Neighbor' printed in warm, inviting typography. Spacious, sustainable, and full of purpose."
  }
];

export const heroImages = [
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
];

export const sizes = ["S", "M", "L", "XL", "XXL"];

export const categories = [
  { key: 'all', label: 'All' },
  { key: 'T-Shirts', label: 'T-Shirts' },
  { key: 'Caps', label: 'Caps' },
  { key: 'Hats', label: 'Hats' },
  { key: 'Tote Bags', label: 'Tote Bags' },
  { key: 'Pre-Order', label: 'Pre-Order' },
] as const;

export const categoryTitles: Record<string, string> = {
  'all': 'Our Collection',
  'T-Shirts': 'T-Shirts',
  'Caps': 'Caps',
  'Hats': 'Hats',
  'Tote Bags': 'Tote Bags',
  'Pre-Order': 'Pre-Order'
};
