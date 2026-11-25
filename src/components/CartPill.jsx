import React, { memo } from 'react';

const CartPill = memo(function CartPill({ count, onOpen }) {
  return (
    <button
      id="open-cart-btn"
      type="button"
      onClick={onOpen}
      aria-label="Open shopping cart"
      className="fixed bottom-gutter-md right-gutter-md z-40 inline-flex items-center gap-gutter-sm px-gutter-md py-gutter-sm rounded-full bg-deep-chocolate text-warm-ivory border border-soft-caramel shadow-lg transition-transform duration-state-change hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-chocolate"
    >
      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
        shopping_bag
      </span>
      <span data-design-text-token="label-sm" className="font-label text-label-sm uppercase tracking-wider">
        Cart
      </span>
      <span
        id="cart-count-badge"
        className="inline-flex items-center justify-center min-w-6 h-6 px-gutter-xs rounded-full bg-cherry-burgundy text-warm-ivory font-label text-label-sm tabular-nums"
      >
        {count}
      </span>
    </button>
  );
});

export default CartPill;
