export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number | null;
  image: string;
  badge: string | null;
  description: string;
}

export interface CartItem extends Product {
  size: string;
  qty: number;
}

export type Category = 'all' | 'T-Shirts' | 'Caps' | 'Hats' | 'Tote Bags' | 'Pre-Order';
