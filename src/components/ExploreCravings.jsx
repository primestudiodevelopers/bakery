import React, { memo } from 'react';
import ResponsiveImage from './ResponsiveImage';

const ExploreCravings = memo(function ExploreCravings({ onAddToCart }) {
  const handleAdd = (id, name, price, image) => {
    if (onAddToCart) {
      onAddToCart({ id, name, price, image });
    }
  };

  return (
    <section
      id="explore-cravings"
      className="w-full bg-ivory-soft py-gutter-2xl md:py-section border-t border-warm-beige"
    >
      <div className="max-w-5xl mx-auto px-page-margin flex flex-col gap-gutter-lg">
        <header className="reveal-item flex items-center justify-between gap-gutter-md border-b border-warm-beige pb-gutter-sm">
          <h2
            data-design-text-token="headline-lg-mobile"
            className="font-headline text-headline-lg-mobile md:text-headline-lg text-deep-chocolate uppercase"
          >
            EXPLORE OUR CRAVINGS.
          </h2>
          <span
            data-design-text-token="label-sm"
            className="font-label text-label-sm uppercase text-chocolate-muted whitespace-nowrap"
          >
            4 Specialties
          </span>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter-md items-stretch">
          {/* Item 1: Celebration Cakes */}
          <div
            data-component-id="craving-tile"
            data-component-type="card"
            data-component-variant="interactive"
            className="reveal-item group flex flex-col justify-between gap-gutter-sm h-full"
          >
            <div className="flex flex-col gap-gutter-xs">
              <div className="overflow-hidden rounded-sm border-b-2 border-cherry-burgundy bg-warm-ivory">
                <ResponsiveImage
                  baseName="cat_celebration"
                  widths={[400, 640, 800, 1200]}
                  sizes="(max-width: 767px) calc(84vw - 54px), (max-width: 1024px) 42vw, 390px"
                  fallbackSrc="/images/cat_celebration.jpg"
                  alt="Celebration Cakes multi-tiered showcase"
                  width={1200}
                  height={896}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-card-hover ease-card-hover group-hover:scale-105"
                />
              </div>
              <h3
                data-design-text-token="body-md"
                className="font-body font-bold text-body-md text-deep-chocolate"
              >
                Celebration Cakes
              </h3>
              <p
                data-design-text-token="body-sm"
                className="font-body text-body-sm text-chocolate-muted"
              >
                Tiered centerpieces
              </p>
            </div>
            <button
              type="button"
              data-add-to-cart
              data-product-id="celebration-cakes"
              data-product-name="Celebration Cakes"
              data-product-price="1450"
              data-product-image="/images/cat_celebration.jpg"
              onClick={() =>
                handleAdd(
                  'celebration-cakes',
                  'Celebration Cakes',
                  1450,
                  '/images/cat_celebration.jpg'
                )
              }
              className="w-full inline-flex items-center justify-center gap-gutter-xs min-h-10 px-gutter-sm py-gutter-xs rounded-sm bg-deep-chocolate text-warm-ivory font-label text-label-sm uppercase tracking-wider transition-colors duration-state-change hover:bg-cherry-burgundy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-chocolate whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                shopping_bag
              </span>
              <span data-design-text-token="label-sm">+ ADD TO CART</span>
            </button>
          </div>

          {/* Item 2: Pastries */}
          <div
            data-component-id="craving-tile"
            data-component-type="card"
            data-component-variant="interactive"
            className="reveal-item group flex flex-col justify-between gap-gutter-sm h-full"
          >
            <div className="flex flex-col gap-gutter-xs">
              <div className="overflow-hidden rounded-sm border-b-2 border-soft-caramel bg-warm-ivory">
                <ResponsiveImage
                  baseName="cat_pastries"
                  widths={[400, 640, 800, 1200]}
                  sizes="(max-width: 767px) calc(84vw - 54px), (max-width: 1024px) 42vw, 390px"
                  fallbackSrc="/images/cat_pastries.jpg"
                  alt="Flaky artisanal pastries and tarts"
                  width={1200}
                  height={896}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-card-hover ease-card-hover group-hover:scale-105"
                />
              </div>
              <h3
                data-design-text-token="title-md"
                className="font-title text-title-md text-deep-chocolate"
              >
                Pastries
              </h3>
              <p
                data-design-text-token="body-sm"
                className="font-body text-body-sm text-chocolate-muted"
              >
                Flaky &amp; glazed
              </p>
            </div>
            <button
              type="button"
              data-add-to-cart
              data-product-id="pastries"
              data-product-name="Pastries"
              data-product-price="180"
              data-product-image="/images/cat_pastries.jpg"
              onClick={() =>
                handleAdd(
                  'pastries',
                  'Pastries',
                  180,
                  '/images/cat_pastries.jpg'
                )
              }
              className="w-full inline-flex items-center justify-center gap-gutter-xs min-h-10 px-gutter-sm py-gutter-xs rounded-sm bg-deep-chocolate text-warm-ivory font-label text-label-sm uppercase tracking-wider transition-colors duration-state-change hover:bg-cherry-burgundy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-chocolate whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                shopping_bag
              </span>
              <span data-design-text-token="label-sm">+ ADD TO CART</span>
            </button>
          </div>

          {/* Item 3: Cupcakes */}
          <div
            data-component-id="craving-tile"
            data-component-type="card"
            data-component-variant="interactive"
            className="reveal-item group flex flex-col justify-between gap-gutter-sm h-full"
          >
            <div className="flex flex-col gap-gutter-xs">
              <div className="overflow-hidden rounded-sm border-b-2 border-deep-chocolate bg-warm-ivory">
                <ResponsiveImage
                  baseName="cat_cupcakes"
                  widths={[400, 640, 800, 1200]}
                  sizes="(max-width: 767px) calc(84vw - 54px), (max-width: 1024px) 42vw, 390px"
                  fallbackSrc="/images/cat_cupcakes.jpg"
                  alt="Gourmet frosted cupcakes"
                  width={1200}
                  height={896}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-card-hover ease-card-hover group-hover:scale-105"
                />
              </div>
              <h3
                data-design-text-token="title-md"
                className="font-title text-title-md text-deep-chocolate"
              >
                Cupcakes
              </h3>
              <p
                data-design-text-token="body-sm"
                className="font-body text-body-sm text-chocolate-muted"
              >
                Swirled buttercream
              </p>
            </div>
            <button
              type="button"
              data-add-to-cart
              data-product-id="cupcakes"
              data-product-name="Cupcakes"
              data-product-price="140"
              data-product-image="/images/cat_cupcakes.jpg"
              onClick={() =>
                handleAdd(
                  'cupcakes',
                  'Cupcakes',
                  140,
                  '/images/cat_cupcakes.jpg'
                )
              }
              className="w-full inline-flex items-center justify-center gap-gutter-xs min-h-10 px-gutter-sm py-gutter-xs rounded-sm bg-deep-chocolate text-warm-ivory font-label text-label-sm uppercase tracking-wider transition-colors duration-state-change hover:bg-cherry-burgundy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-chocolate whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                shopping_bag
              </span>
              <span data-design-text-token="label-sm">+ ADD TO CART</span>
            </button>
          </div>

          {/* Item 4: Desserts */}
          <div
            data-component-id="craving-tile"
            data-component-type="card"
            data-component-variant="interactive"
            className="reveal-item group flex flex-col justify-between gap-gutter-sm h-full"
          >
            <div className="flex flex-col gap-gutter-xs">
              <div className="overflow-hidden rounded-sm border-b-2 border-cherry-burgundy bg-warm-ivory">
                <ResponsiveImage
                  baseName="cat_desserts"
                  widths={[400, 640, 800, 1200]}
                  sizes="(max-width: 767px) calc(84vw - 54px), (max-width: 1024px) 42vw, 390px"
                  fallbackSrc="/images/cat_desserts.jpg"
                  alt="Plated mousse jars, verrines, and petit fours"
                  width={1200}
                  height={896}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-card-hover ease-card-hover group-hover:scale-105"
                />
              </div>
              <h3
                data-design-text-token="title-md"
                className="font-title text-title-md text-deep-chocolate"
              >
                Desserts
              </h3>
              <p
                data-design-text-token="body-sm"
                className="font-body text-body-sm text-chocolate-muted"
              >
                Jars &amp; mousses
              </p>
            </div>
            <button
              type="button"
              data-add-to-cart
              data-product-id="desserts"
              data-product-name="Desserts"
              data-product-price="220"
              data-product-image="/images/cat_desserts.jpg"
              onClick={() =>
                handleAdd(
                  'desserts',
                  'Desserts',
                  220,
                  '/images/cat_desserts.jpg'
                )
              }
              className="w-full inline-flex items-center justify-center gap-gutter-xs min-h-10 px-gutter-sm py-gutter-xs rounded-sm bg-deep-chocolate text-warm-ivory font-label text-label-sm uppercase tracking-wider transition-colors duration-state-change hover:bg-cherry-burgundy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-chocolate whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                shopping_bag
              </span>
              <span data-design-text-token="label-sm">+ ADD TO CART</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ExploreCravings;
