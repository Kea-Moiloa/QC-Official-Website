import { Routes, Route, useLocation } from 'react-router';
import { useEffect } from 'react';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Toast from '@/components/Toast';
import PageTransition from '@/components/PageTransition';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Checkout from '@/pages/Checkout';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  const location = useLocation();
  const isCheckout = location.pathname === '/checkout';

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <CartDrawer />
      <Toast />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </PageTransition>
      {!isCheckout && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Layout />
    </CartProvider>
  );
}
