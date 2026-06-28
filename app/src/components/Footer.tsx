import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="font-display text-xl font-bold tracking-[2px] uppercase text-foreground">
              QUEUETTE <span className="text-[#c4956a]">CLOTHING</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              A Christian-based fashion brand dedicated to creating stylish, modern, faith-inspired clothing for young adults. Wear your belief boldly.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { label: 'Instagram', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z', rect: true },
                { label: 'TikTok', path: 'M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5' },
                { label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
                { label: 'X', path: 'M4 4l11.733 16h4.267l-11.733-16z M4 20l6.768-6.768m2.46-2.46l6.772-6.772' },
              ].map(social => (
                <a
                  key={social.label}
                  href="#"
                  className="w-9 h-9 rounded-full bg-border flex items-center justify-center text-muted-foreground hover:bg-[#c4956a] hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {social.rect && <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>}
                    <path d={social.path}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[1.5px] mb-5">Shop</h4>
            <ul className="space-y-3">
              {['All Products', 'T-Shirts', 'Caps', 'Hats', 'Tote Bags'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-muted-foreground hover:text-[#c4956a] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[1.5px] mb-5">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Mission', 'Sustainability', 'Press'].map(item => (
                <li key={item}>
                  <Link to="/about" className="text-sm text-muted-foreground hover:text-[#c4956a] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[1.5px] mb-5">Support</h4>
            <ul className="space-y-3">
              {['Contact', 'Shipping', 'Returns', 'FAQ'].map(item => (
                <li key={item}>
                  <Link to="/contact" className="text-sm text-muted-foreground hover:text-[#c4956a] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border">
        <div className="section-container py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <span>2026 Queuette Clothing. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#c4956a] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#c4956a] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
