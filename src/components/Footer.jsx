import React, { memo } from 'react';

const Footer = memo(function Footer() {
  return (
    <footer id="final-cta" className="w-full bg-deep-chocolate text-warm-ivory py-gutter-2xl md:py-section">
      <div className="max-w-5xl mx-auto px-page-margin flex flex-col gap-gutter-xl">
        <div className="flex flex-col items-start md:items-center md:text-center gap-gutter-md">
          <span
            data-design-text-token="label-sm"
            className="font-label text-label-sm uppercase tracking-widest text-soft-caramel"
          >
            SHRI BLACK FOREST · CHIDAMBARAM, TAMIL NADU
          </span>

          <h2
            data-design-text-token="display-lg-mobile"
            className="font-display text-display-lg-mobile md:text-display-lg text-warm-ivory uppercase text-balance"
          >
            YOUR CRAVINGS CALLED. ANSWER THEM.
          </h2>

          <div className="flex flex-wrap items-center gap-gutter-md pt-gutter-xs">
            <a
              href="#final-cta"
              data-component-id="button-whatsapp-primary"
              data-component-type="button"
              data-component-variant="with-icon"
              className="inline-flex items-center justify-center gap-gutter-xs px-gutter-lg py-gutter-sm rounded-full bg-warm-ivory text-deep-chocolate font-label text-label-lg uppercase tracking-wider transition-transform duration-state-change ease-state-change hover:-translate-y-0.5 hover:bg-soft-caramel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warm-ivory"
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                chat
              </span>
              <span data-design-text-token="label-lg">Order on WhatsApp</span>
            </a>

            <a
              href="#final-cta"
              data-component-id="button-secondary-link"
              data-component-type="button"
              data-component-variant="tertiary"
              className="inline-flex items-center gap-gutter-xs px-gutter-md py-gutter-sm rounded-full border border-soft-caramel text-warm-ivory font-label text-label-lg uppercase tracking-wider hover:bg-soft-caramel hover:text-deep-chocolate transition-colors duration-state-change"
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                call
              </span>
              <span data-design-text-token="label-lg">Call</span>
            </a>

            <a
              href="#final-cta"
              data-component-id="button-secondary-link"
              data-component-type="button"
              data-component-variant="tertiary"
              className="inline-flex items-center gap-gutter-xs px-gutter-md py-gutter-sm rounded-full border border-soft-caramel text-warm-ivory font-label text-label-lg uppercase tracking-wider hover:bg-soft-caramel hover:text-deep-chocolate transition-colors duration-state-change"
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                photo_camera
              </span>
              <span data-design-text-token="label-lg">Instagram</span>
            </a>
          </div>
        </div>

        {/* Compact placeholder contact metadata strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter-md border-t border-chocolate-muted pt-gutter-lg">
          <div className="flex flex-col gap-gutter-xs">
            <span data-design-text-token="label-sm" className="font-label text-label-sm uppercase text-soft-caramel">
              WhatsApp / Phone
            </span>
            <p data-design-text-token="body-sm" className="font-body text-body-sm text-warm-ivory">
              [+91 00000 00000 · Placeholder]
            </p>
          </div>
          <div className="flex flex-col gap-gutter-xs">
            <span data-design-text-token="label-sm" className="font-label text-label-sm uppercase text-soft-caramel">
              Instagram
            </span>
            <p data-design-text-token="body-sm" className="font-body text-body-sm text-warm-ivory">
              [@shriblackforest · Placeholder]
            </p>
          </div>
          <div className="flex flex-col gap-gutter-xs">
            <span data-design-text-token="label-sm" className="font-label text-label-sm uppercase text-soft-caramel">
              Location
            </span>
            <p data-design-text-token="body-sm" className="font-body text-body-sm text-warm-ivory">
              [Address, Chidambaram · Placeholder]
            </p>
          </div>
          <div className="flex flex-col gap-gutter-xs">
            <span data-design-text-token="label-sm" className="font-label text-label-sm uppercase text-soft-caramel">
              Hours
            </span>
            <p data-design-text-token="body-sm" className="font-body text-body-sm text-warm-ivory">
              [Daily Hours · Placeholder]
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
