import React, { memo } from 'react';

const THUMB_WIDTH_MAP = {
  cake_black_forest: 400,
  cake_chocolate_truffle: 320,
  cake_strawberry_dream: 320,
  cake_red_velvet: 256,
  cake_butterscotch: 256,
  cat_celebration: 400,
  cat_pastries: 400,
  cat_cupcakes: 400,
  cat_desserts: 400,
};

function getCartThumbSources(imageSrc) {
  if (!imageSrc) return null;
  const match = imageSrc.match(/\/images\/([a-z0-9_]+)\.(?:jpg|jpeg|png|webp|avif)$/i);
  if (!match) return null;
  const base = match[1];
  const w = THUMB_WIDTH_MAP[base];
  if (!w) return null;
  return {
    avif: `/images/${base}-${w}w.avif`,
    webp: `/images/${base}-${w}w.webp`,
  };
}

const CartDrawer = memo(function CartDrawer({
  isOpen,
  onClose,
  cart,
  onIncrement,
  onDecrement,
  onRemove,
  subtotal,
}) {
  if (!isOpen) return null;

  return (
    <div
      id="cart-drawer"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-drawer-title"
      className="fixed inset-0 z-50 flex justify-end bg-deep-chocolate/60"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm h-full bg-warm-ivory text-deep-chocolate border-l border-warm-beige flex flex-col justify-between p-gutter-lg overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-gutter-md">
          <div className="flex items-center justify-between border-b border-warm-beige pb-gutter-sm">
            <h2
              id="cart-drawer-title"
              data-design-text-token="title-lg"
              className="font-headline text-title-lg text-deep-chocolate"
            >
              Your Cart
            </h2>
            <button
              id="close-cart-btn"
              type="button"
              onClick={onClose}
              aria-label="Close shopping cart"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-ivory-soft text-deep-chocolate border border-warm-beige hover:bg-warm-beige transition-colors duration-state-change"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>

          <div id="cart-items-container" className="flex flex-col gap-gutter-md">
            {cart.length === 0 ? (
              <p className="font-body text-body-sm text-chocolate-muted">
                Your cart is currently empty. Add a cake or pastry to begin.
              </p>
            ) : (
              cart.map((item) => {
                const thumbSources = getCartThumbSources(item.image);
                return (
                  <div
                    key={item.id}
                    className="flex items-center gap-gutter-sm border-b border-warm-beige pb-gutter-sm"
                  >
                    <picture className="contents">
                      {thumbSources && (
                        <>
                          <source type="image/avif" srcSet={thumbSources.avif} />
                          <source type="image/webp" srcSet={thumbSources.webp} />
                        </>
                      )}
                      <img
                        src={item.image}
                        alt={item.name}
                        width={56}
                        height={56}
                        loading="lazy"
                        decoding="async"
                        className="w-14 h-14 object-cover rounded-sm shrink-0 bg-ivory-soft"
                      />
                    </picture>
                    <div className="flex-1 min-w-0">
                      <p className="font-body font-bold text-body-sm text-deep-chocolate truncate">
                        {item.name}
                      </p>
                      <p className="font-body text-body-sm text-chocolate-muted tabular-nums">
                        ₹{item.price.toLocaleString('en-IN')}
                      </p>
                      <div className="flex items-center gap-gutter-sm pt-gutter-xs">
                        <button
                          type="button"
                          onClick={() => onDecrement(item.id)}
                          aria-label="Decrease quantity"
                          className="w-6 h-6 rounded-sm border border-warm-beige bg-ivory-soft text-deep-chocolate font-label text-label-sm"
                        >
                          -
                        </button>
                        <span className="font-label text-label-sm text-deep-chocolate tabular-nums">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => onIncrement(item.id)}
                          aria-label="Increase quantity"
                          className="w-6 h-6 rounded-sm border border-warm-beige bg-ivory-soft text-deep-chocolate font-label text-label-sm"
                        >
                          +
                        </button>
                        <button
                          type="button"
                          onClick={() => onRemove(item.id)}
                          className="ml-auto font-label text-label-sm uppercase text-cherry-burgundy"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        <div className="border-t border-warm-beige pt-gutter-md flex flex-col gap-gutter-md">
          <div className="flex items-center justify-between">
            <span
              data-design-text-token="label-sm"
              className="font-label text-label-sm uppercase text-chocolate-muted"
            >
              Subtotal
            </span>
            <span
              id="cart-subtotal"
              className="font-headline text-title-lg text-deep-chocolate tabular-nums"
            >
              ₹{subtotal.toLocaleString('en-IN')}
            </span>
          </div>
          <a
            href="#final-cta"
            id="cart-checkout-link"
            onClick={onClose}
            className="w-full inline-flex items-center justify-center gap-gutter-xs py-gutter-sm px-gutter-md rounded-full bg-deep-chocolate text-warm-ivory font-label text-label-sm uppercase tracking-wider hover:bg-cherry-burgundy transition-colors duration-state-change"
          >
            <span>Proceed to Order ↗</span>
          </a>
        </div>
      </div>
    </div>
  );
});

export default CartDrawer;
