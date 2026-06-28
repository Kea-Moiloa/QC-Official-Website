import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border transition-colors duration-300">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Brand */}
          <Link to="/" className="font-display text-lg lg:text-xl font-bold tracking-[2px] uppercase text-foreground hover:opacity-80 transition-opacity">
            QUEUETTE <span className="text-[#c4956a]">CLOTHING</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-xs font-medium uppercase tracking-[1.5px] transition-colors duration-300 hover:text-[#c4956a] ${
                  location.pathname === link.to ? 'text-[#c4956a]' : 'text-muted-foreground'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-[#c4956a] transition-all duration-300 ${
                  location.pathname === link.to ? 'w-full' : 'w-0'
                }`} />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="relative w-12 h-6 rounded-full bg-border transition-colors duration-300 cursor-pointer"
              aria-label="Toggle theme"
            >
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-background shadow-md transition-transform duration-300 ${
                isDark ? 'translate-x-6' : 'translate-x-0'
              }`} />
            </button>

            {/* Cart */}
            <button
              onClick={openCart}
              className="relative p-2 rounded-lg hover:bg-secondary transition-colors cursor-pointer"
              aria-label="Cart"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#c4956a] text-[10px] font-bold text-white flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors cursor-pointer"
              aria-label="Menu"
            >
              {mobileOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
          <div className="section-container py-4 flex flex-col gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`py-3 px-4 rounded-lg text-sm font-medium uppercase tracking-[1.5px] transition-colors ${
                  location.pathname === link.to
                    ? 'bg-[#c4956a]/10 text-[#c4956a]'
                    : 'text-muted-foreground hover:bg-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
