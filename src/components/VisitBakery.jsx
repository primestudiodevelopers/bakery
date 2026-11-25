import React, { memo } from 'react';

const VisitBakery = memo(function VisitBakery() {
  return (
    <section
      id="visit-bakery"
      className="w-full bg-ivory-soft py-gutter-2xl md:py-section border-t border-warm-beige"
    >
      <div className="max-w-5xl mx-auto px-page-margin grid grid-cols-1 md:grid-cols-12 gap-gutter-lg md:gap-gutter-xl items-center">
        <div className="reveal-item md:col-span-5 flex flex-col gap-gutter-md">
          <div className="flex flex-col gap-gutter-xs">
            <span
              data-design-text-token="label-sm"
              className="font-label text-label-sm uppercase tracking-widest text-soft-caramel"
            >
              COME VISIT US
            </span>
            <h2
              data-design-text-token="headline-lg-mobile"
              className="font-headline text-headline-lg-mobile md:text-headline-lg text-deep-chocolate uppercase text-balance"
            >
              FIND YOUR WAY TO SOMETHING DELICIOUS.
            </h2>
          </div>

          <p
            data-design-text-token="body-md"
            className="font-body text-body-md text-chocolate-muted text-pretty"
          >
            Your favourite cakes, freshly baked delights and sweet moments are waiting for you. Visit us at our bakery in Chidambaram.
          </p>

          <div className="border-t border-warm-beige pt-gutter-md flex flex-col gap-gutter-xs">
            <span
              data-design-text-token="label-sm"
              className="font-label text-label-sm uppercase tracking-widest text-cherry-burgundy"
            >
              SHRI BLACK FOREST
            </span>
            <p
              data-design-text-token="body-sm"
              className="font-body text-body-sm text-deep-chocolate text-pretty"
            >
              Krishna Plaza, 103, S Car St, Chidambaram, Tamil Nadu 608001.
            </p>
          </div>

          <div className="pt-gutter-xs">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Shri+Black+Forest%2C+Krishna+Plaza%2C+103%2C+S+Car+St%2C+Chidambaram%2C+Tamil+Nadu+608001"
              target="_blank"
              rel="noopener noreferrer"
              data-component-id="button-get-directions"
              data-component-type="button"
              data-component-variant="primary"
              className="inline-flex items-center justify-center gap-gutter-xs min-h-10 px-gutter-lg py-gutter-sm rounded-sm bg-deep-chocolate text-warm-ivory font-label text-label-sm uppercase tracking-wider transition-colors duration-state-change hover:bg-cherry-burgundy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-chocolate"
            >
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                location_on
              </span>
              <span data-design-text-token="label-sm">GET DIRECTIONS ↗</span>
            </a>
          </div>
        </div>

        <div className="reveal-item md:col-span-7 flex flex-col gap-gutter-xs">
          <div className="relative w-full overflow-hidden rounded-md border border-warm-beige bg-warm-ivory shadow-sm">
            <iframe
              title="SHRI BLACK FOREST — Krishna Plaza, 103, S Car St, Chidambaram, Tamil Nadu 608001"
              src="https://maps.google.com/maps?q=Shri+Black+Forest,+Krishna+Plaza,+103,+S+Car+St,+Chidambaram,+Tamil+Nadu+608001,+India&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="600"
              height="320"
              className="w-full h-72 md:h-80 border-0 block"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="flex items-center justify-between gap-gutter-sm pt-gutter-xs">
            <span
              data-design-text-token="label-sm"
              className="font-label text-label-sm uppercase tracking-wider text-chocolate-muted"
            >
              Krishna Plaza · Chidambaram
            </span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Shri+Black+Forest%2C+Krishna+Plaza%2C+103%2C+S+Car+St%2C+Chidambaram%2C+Tamil+Nadu+608001"
              target="_blank"
              rel="noopener noreferrer"
              data-design-text-token="label-sm"
              className="font-label text-label-sm uppercase tracking-wider text-cherry-burgundy hover:text-deep-chocolate underline underline-offset-4 whitespace-nowrap"
            >
              Google Maps ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export default VisitBakery;
