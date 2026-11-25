import React, { memo } from 'react';

const CartToast = memo(function CartToast({ show }) {
  if (!show) return null;

  return (
    <div
      id="cart-toast"
      role="status"
      aria-live="polite"
      className="fixed bottom-gutter-md left-gutter-md z-40 inline-flex items-center gap-gutter-xs px-gutter-md py-gutter-sm rounded-sm bg-deep-chocolate text-warm-ivory border border-soft-caramel shadow-lg"
    >
      <span className="material-symbols-outlined text-[16px] text-soft-caramel" aria-hidden="true">
        check_circle
      </span>
      <span data-design-text-token="body-sm" className="font-body text-body-sm">
        Added to your cart
      </span>
    </div>
  );
});

export default CartToast;
