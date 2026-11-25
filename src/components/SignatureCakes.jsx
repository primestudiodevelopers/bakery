import React, { memo } from 'react';
import ResponsiveImage from './ResponsiveImage';

const SignatureCakes = memo(function SignatureCakes({ onAddToCart }) {
  const handleAdd = (id, name, price, image) => {
    if (onAddToCart) {
      onAddToCart({ id, name, price, image });
    }
  };

  return (
    <section id="signature-cakes" className="w-full bg-warm-ivory py-gutter-2xl md:py-section">
      <div className="max-w-5xl mx-auto px-page-margin flex flex-col gap-gutter-xl">
        <header className="reveal-item flex flex-col gap-gutter-xs border-b border-warm-beige pb-gutter-md">
          <span
            data-design-text-token="label-sm"
            className="font-label text-label-sm uppercase tracking-widest text-cherry-burgundy"
          >
            Signature Collection
          </span>
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-gutter-xs">
            <h2
              data-design-text-token="display-lg-mobile"
              className="font-display text-display-lg-mobile md:text-display-lg text-deep-chocolate uppercase text-balance"
            >
              THE OBJECTS OF OUR OBSESSION.
            </h2>
            <p
              data-design-text-token="body-sm"
              className="font-body text-body-sm text-chocolate-muted text-pretty"
            >
              Some things are simply too good to share.
            </p>
          </div>
        </header>

        {/* #1 Lead Editorial Feature: Black Forest */}
        <article
          data-component-id="editorial-cake-lead"
          data-component-type="card"
          data-component-variant="elevated"
          className="reveal-item group flex flex-col md:grid md:grid-cols-12 gap-gutter-md md:gap-gutter-xl items-center"
        >
          <div className="w-full md:col-span-7 overflow-hidden rounded-sm bg-ivory-soft">
            <ResponsiveImage
              baseName="cake_black_forest"
              widths={[400, 480, 720, 1200]}
              sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1024px) 56vw, 560px"
              fallbackSrc="/images/cake_black_forest.jpg"
              alt="Black Forest signature layer cake with dark chocolate shavings and cherries"
              width={1200}
              height={896}
              className="w-full aspect-[4/3] object-cover transition-transform duration-card-hover ease-card-hover group-hover:scale-105"
            />
          </div>
          <div className="w-full md:col-span-5 flex flex-col gap-gutter-xs">
            <span
              data-design-text-token="label-sm"
              className="self-start px-gutter-sm py-gutter-xs rounded-full bg-cherry-burgundy text-warm-ivory font-label text-label-sm uppercase tracking-wider"
            >
              House Icon
            </span>
            <h3
              data-design-text-token="headline-md"
              className="font-headline text-headline-md text-deep-chocolate"
            >
              Black Forest
            </h3>
            <p
              data-design-text-token="body-sm"
              className="font-body text-body-sm text-chocolate-muted text-pretty"
            >
              Feather-light cocoa sponge, Chantilly cream peaks, dark chocolate curls, and ruby cherries.
            </p>
            <div className="pt-gutter-xs">
              <button
                type="button"
                data-add-to-cart
                data-product-id="black-forest"
                data-product-name="Black Forest"
                data-product-price="650"
                data-product-image="/images/cake_black_forest.jpg"
                onClick={() =>
                  handleAdd(
                    'black-forest',
                    'Black Forest',
                    650,
                    '/images/cake_black_forest.jpg'
                  )
                }
                className="inline-flex items-center justify-center gap-gutter-xs min-h-10 px-gutter-md py-gutter-xs rounded-sm bg-deep-chocolate text-warm-ivory font-label text-label-sm uppercase tracking-wider transition-colors duration-state-change hover:bg-cherry-burgundy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-chocolate whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  shopping_bag
                </span>
                <span data-design-text-token="label-sm">+ ADD TO CART</span>
              </button>
            </div>
          </div>
        </article>

        {/* #2 & #3 Compact 2-Column Photo Pair on Mobile & Desktop */}
        <div className="grid grid-cols-2 gap-gutter-md md:gap-gutter-xl items-stretch">
          <article
            data-component-id="editorial-cake-pair"
            data-component-type="card"
            data-component-variant="elevated"
            className="reveal-item group flex flex-col justify-between gap-gutter-sm h-full"
          >
            <div className="flex flex-col gap-gutter-sm">
              <div className="overflow-hidden rounded-sm bg-ivory-soft">
                <ResponsiveImage
                  baseName="cake_chocolate_truffle"
                  widths={[320, 540, 896]}
                  sizes="(max-width: 767px) calc(50vw - 32px), (max-width: 1024px) calc(50vw - 40px), 472px"
                  fallbackSrc="/images/cake_chocolate_truffle.jpg"
                  alt="Chocolate Truffle cake with glossy dark ganache glaze"
                  width={896}
                  height={1200}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-card-hover ease-card-hover group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-gutter-xs">
                <span
                  data-design-text-token="label-sm"
                  className="font-label text-label-sm uppercase text-soft-caramel"
                >
                  Pure Cocoa
                </span>
                <h3
                  data-design-text-token="body-md"
                  className="font-body font-bold text-body-md text-deep-chocolate"
                >
                  Chocolate Truffle
                </h3>
                <p
                  data-design-text-token="body-sm"
                  className="font-body text-body-sm text-chocolate-muted text-pretty"
                >
                  Rich dark sponge glazed in mirror-smooth ganache.
                </p>
              </div>
            </div>
            <button
              type="button"
              data-add-to-cart
              data-product-id="chocolate-truffle"
              data-product-name="Chocolate Truffle"
              data-product-price="720"
              data-product-image="/images/cake_chocolate_truffle.jpg"
              onClick={() =>
                handleAdd(
                  'chocolate-truffle',
                  'Chocolate Truffle',
                  720,
                  '/images/cake_chocolate_truffle.jpg'
                )
              }
              className="w-full inline-flex items-center justify-center gap-gutter-xs min-h-10 px-gutter-sm py-gutter-xs rounded-sm bg-deep-chocolate text-warm-ivory font-label text-label-sm uppercase tracking-wider transition-colors duration-state-change hover:bg-cherry-burgundy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-chocolate whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                shopping_bag
              </span>
              <span data-design-text-token="label-sm">+ ADD TO CART</span>
            </button>
          </article>

          <article
            data-component-id="editorial-cake-pair"
            data-component-type="card"
            data-component-variant="elevated"
            className="reveal-item group flex flex-col justify-between gap-gutter-sm h-full"
          >
            <div className="flex flex-col gap-gutter-sm">
              <div className="overflow-hidden rounded-sm bg-ivory-soft">
                <ResponsiveImage
                  baseName="cake_strawberry_dream"
                  widths={[320, 540, 896]}
                  sizes="(max-width: 767px) calc(50vw - 32px), (max-width: 1024px) calc(50vw - 40px), 472px"
                  fallbackSrc="/images/cake_strawberry_dream.jpg"
                  alt="Strawberry Dream cake topped with ripe glazed strawberries"
                  width={896}
                  height={1200}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-card-hover ease-card-hover group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-gutter-xs">
                <span
                  data-design-text-token="label-sm"
                  className="font-label text-label-sm uppercase text-cherry-burgundy"
                >
                  Berry &amp; Cream
                </span>
                <h3
                  data-design-text-token="body-md"
                  className="font-body font-bold text-body-md text-deep-chocolate"
                >
                  Strawberry Dream
                </h3>
                <p
                  data-design-text-token="body-sm"
                  className="font-body text-body-sm text-chocolate-muted text-pretty"
                >
                  Vanilla sponge with fresh strawberry compote and cream.
                </p>
              </div>
            </div>
            <button
              type="button"
              data-add-to-cart
              data-product-id="strawberry-dream"
              data-product-name="Strawberry Dream"
              data-product-price="680"
              data-product-image="/images/cake_strawberry_dream.jpg"
              onClick={() =>
                handleAdd(
                  'strawberry-dream',
                  'Strawberry Dream',
                  680,
                  '/images/cake_strawberry_dream.jpg'
                )
              }
              className="w-full inline-flex items-center justify-center gap-gutter-xs min-h-10 px-gutter-sm py-gutter-xs rounded-sm bg-deep-chocolate text-warm-ivory font-label text-label-sm uppercase tracking-wider transition-colors duration-state-change hover:bg-cherry-burgundy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-chocolate whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                shopping_bag
              </span>
              <span data-design-text-token="label-sm">+ ADD TO CART</span>
            </button>
          </article>
        </div>

        {/* #4 & #5 Horizontal Editorial Split Rows */}
        <div className="flex flex-col divide-y divide-warm-beige border-t border-b border-warm-beige">
          <article
            data-component-id="editorial-cake-row"
            data-component-type="card"
            data-component-variant="elevated"
            className="reveal-item group grid grid-cols-12 gap-gutter-md items-center py-gutter-md"
          >
            <div className="col-span-4 md:col-span-3 overflow-hidden rounded-sm bg-ivory-soft">
              <ResponsiveImage
                baseName="cake_red_velvet"
                widths={[256, 512, 1024]}
                sizes="(max-width: 767px) calc(33vw - 24px), (max-width: 1024px) calc(25vw - 24px), 232px"
                fallbackSrc="/images/cake_red_velvet.jpg"
                alt="Red Velvet cake with smooth cream cheese frosting"
                width={1024}
                height={1024}
                className="w-full aspect-square object-cover transition-transform duration-card-hover ease-card-hover group-hover:scale-105"
              />
            </div>
            <div className="col-span-8 md:col-span-9 flex flex-col gap-gutter-xs">
              <span
                data-design-text-token="label-sm"
                className="self-start px-gutter-sm py-gutter-xs rounded-full bg-deep-chocolate text-warm-ivory font-label text-label-sm uppercase"
              >
                Crimson Classic
              </span>
              <h3
                data-design-text-token="title-lg"
                className="font-title text-title-lg text-deep-chocolate"
              >
                Red Velvet
              </h3>
              <p
                data-design-text-token="body-sm"
                className="font-body text-body-sm text-chocolate-muted text-pretty"
              >
                Tender crimson cocoa crumb finished with whipped cream cheese frosting.
              </p>
              <div className="pt-gutter-xs">
                <button
                  type="button"
                  data-add-to-cart
                  data-product-id="red-velvet"
                  data-product-name="Red Velvet"
                  data-product-price="750"
                  data-product-image="/images/cake_red_velvet.jpg"
                  onClick={() =>
                    handleAdd(
                      'red-velvet',
                      'Red Velvet',
                      750,
                      '/images/cake_red_velvet.jpg'
                    )
                  }
                  className="inline-flex items-center justify-center gap-gutter-xs min-h-10 px-gutter-md py-gutter-xs rounded-sm bg-deep-chocolate text-warm-ivory font-label text-label-sm uppercase tracking-wider transition-colors duration-state-change hover:bg-cherry-burgundy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-chocolate whitespace-nowrap"
                >
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    shopping_bag
                  </span>
                  <span data-design-text-token="label-sm">+ ADD TO CART</span>
                </button>
              </div>
            </div>
          </article>

          <article
            data-component-id="editorial-cake-row"
            data-component-type="card"
            data-component-variant="elevated"
            className="reveal-item group grid grid-cols-12 gap-gutter-md items-center py-gutter-md"
          >
            <div className="col-span-8 md:col-span-9 flex flex-col gap-gutter-xs">
              <span
                data-design-text-token="label-sm"
                className="self-start px-gutter-sm py-gutter-xs rounded-full bg-deep-chocolate text-warm-ivory font-label text-label-sm uppercase"
              >
                Caramel Crunch
              </span>
              <h3
                data-design-text-token="title-lg"
                className="font-title text-title-lg text-deep-chocolate"
              >
                Butterscotch
              </h3>
              <p
                data-design-text-token="body-sm"
                className="font-body text-body-sm text-chocolate-muted text-pretty"
              >
                Caramelized sponge layered with butterscotch cream and crisp praline shards.
              </p>
              <div className="pt-gutter-xs">
                <button
                  type="button"
                  data-add-to-cart
                  data-product-id="butterscotch"
                  data-product-name="Butterscotch"
                  data-product-price="620"
                  data-product-image="/images/cake_butterscotch.jpg"
                  onClick={() =>
                    handleAdd(
                      'butterscotch',
                      'Butterscotch',
                      620,
                      '/images/cake_butterscotch.jpg'
                    )
                  }
                  className="inline-flex items-center justify-center gap-gutter-xs min-h-10 px-gutter-md py-gutter-xs rounded-sm bg-deep-chocolate text-warm-ivory font-label text-label-sm uppercase tracking-wider transition-colors duration-state-change hover:bg-cherry-burgundy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-chocolate whitespace-nowrap"
                >
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    shopping_bag
                  </span>
                  <span data-design-text-token="label-sm">+ ADD TO CART</span>
                </button>
              </div>
            </div>
            <div className="col-span-4 md:col-span-3 overflow-hidden rounded-sm bg-ivory-soft">
              <ResponsiveImage
                baseName="cake_butterscotch"
                widths={[256, 512, 1024]}
                sizes="(max-width: 767px) calc(33vw - 24px), (max-width: 1024px) calc(25vw - 24px), 232px"
                fallbackSrc="/images/cake_butterscotch.jpg"
                alt="Butterscotch cake with golden caramel drizzle and praline crunch"
                width={1024}
                height={1024}
                className="w-full aspect-square object-cover transition-transform duration-card-hover ease-card-hover group-hover:scale-105"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
});

export default SignatureCakes;
