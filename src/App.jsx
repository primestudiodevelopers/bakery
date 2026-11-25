import React, { useState, useEffect, useCallback, useRef } from 'react';
import Hero from './components/Hero';
import SignatureCakes from './components/SignatureCakes';
import ExploreCravings from './components/ExploreCravings';
import GoogleReviews from './components/GoogleReviews';
import VisitBakery from './components/VisitBakery';
import Footer from './components/Footer';
import CartPill from './components/CartPill';
import CartToast from './components/CartToast';
import CartDrawer from './components/CartDrawer';

export default function App() {
  const [cart, setCart] = useState(() => {
    try {
      const saved = sessionStorage.getItem('sbf_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastShow, setToastShow] = useState(false);
  const toastTimerRef = useRef(null);

  // Sync cart to sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem('sbf_cart', JSON.stringify(cart));
    } catch {}
  }, [cart]);

  // Cleanup toast timer on unmount
  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  // Reveal-item intersection observer animation
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal-item');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      reveals.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    } else {
      reveals.forEach((el) => el.classList.add('is-visible'));
    }
  }, []);

  const showToast = useCallback(() => {
    setToastShow(true);
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = setTimeout(() => {
      setToastShow(false);
    }, 2200);
  }, []);

  const handleAddToCart = useCallback(
    (product) => {
      setCart((prev) => {
        const existing = prev.find((item) => item.id === product.id);
        if (existing) {
          return prev.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          );
        }
        return [...prev, { ...product, qty: 1 }];
      });
      showToast();
    },
    [showToast]
  );

  const handleIncrement = useCallback((id) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item))
    );
  }, []);

  const handleDecrement = useCallback((id) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );
  }, []);

  const handleRemove = useCallback((id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const handleOpenCart = useCallback(() => {
    setIsCartOpen(true);
  }, []);

  const handleCloseCart = useCallback(() => {
    setIsCartOpen(false);
  }, []);

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <main
        className="min-h-[884px] w-full overflow-x-hidden"
        data-stitch-vh="min-h-[884px]===min-h-screen"
      >
        {/* SECTION 1: FULL-BLEED PHOTOGRAPHIC HERO */}
        <Hero />

        {/* SECTION 2: SIGNATURE CAKES */}
        <SignatureCakes onAddToCart={handleAddToCart} />

        {/* SECTION 3: EXPLORE OUR CRAVINGS */}
        <ExploreCravings onAddToCart={handleAddToCart} />

        {/* SECTION 6: GOOGLE REVIEWS */}
        <GoogleReviews />

        {/* SECTION 7: VISIT OUR BAKERY */}
        <VisitBakery />

        {/* SECTION 7: FINAL CTA & COMPACT FOOTER */}
        <Footer />
      </main>

      {/* Floating Cart Pill */}
      <CartPill count={totalQty} onOpen={handleOpenCart} />

      {/* Subtle Confirmation Toast */}
      <CartToast show={toastShow} />

      {/* Interactive Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={handleCloseCart}
        cart={cart}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onRemove={handleRemove}
        subtotal={subtotal}
      />
    </>
  );
}
