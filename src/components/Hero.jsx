import React, { memo, useEffect, useRef } from 'react';
import ResponsiveImage from './ResponsiveImage';

const Hero = memo(function Hero() {
  const heroImgRef = useRef(null);

  useEffect(() => {
    const heroImg = heroImgRef.current;
    const prefersReduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (heroImg && !prefersReduced) {
      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const y = window.scrollY || 0;
            if (y < window.innerHeight && heroImgRef.current) {
              heroImgRef.current.style.transform = `translateY(${y * 0.12}px) scale(1.02)`;
            }
            ticking = false;
          });
          ticking = true;
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[751px] w-full flex flex-col overflow-hidden bg-[#936A41] px-page-margin pt-gutter-lg pb-gutter-2xl"
      data-stitch-vh="min-h-[751px]===min-h-[85svh]"
    >
      <ResponsiveImage
        id="hero-bg-img"
        ref={heroImgRef}
        baseName="hero_bg"
        widths={[480, 640, 768]}
        sizes="(max-width: 640px) 480px, (max-width: 1024px) 768px, 1200px"
        fallbackSrc="/images/hero_bg.jpg"
        alt="SHRI BLACK FOREST Black Forest layer cake with fresh whipped cream, chocolate shavings, and cherries on an ivory stand"
        width={768}
        height={1376}
        priority={true}
        className="absolute inset-0 w-full h-full object-cover object-bottom sm:object-[54%_bottom] md:w-[125%] md:max-w-none md:-left-[17%] md:object-[50%_47%] transition-[object-position,transform] duration-300"
      />
      {/* Subtle top warm-chocolate gradient only behind upper typography so the cake remains bright and dominant */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(59, 33, 28, 0.34) 0%, rgba(59, 33, 28, 0.22) 38%, rgba(59, 33, 28, 0) 60%)',
        }}
      />

      {/* Transparent Brand Header */}
      <header className="relative z-10 w-full max-w-5xl mx-auto flex items-start justify-between gap-gutter-md">
        <div className="flex flex-col">
          <span
            data-design-text-token="title-md"
            className="font-headline text-title-md uppercase tracking-wider text-warm-ivory"
          >
            SHRI BLACK FOREST
          </span>
          <span
            data-design-text-token="label-sm"
            className="font-label text-label-sm uppercase tracking-widest text-warm-ivory"
          >
            CHIDAMBARAM
          </span>
        </div>

        <a
          href="#final-cta"
          data-component-id="button-admin-link"
          data-component-type="button"
          data-component-variant="tertiary"
          className="inline-flex items-center px-gutter-md py-gutter-xs rounded-full border border-warm-ivory/80 font-label text-label-sm uppercase tracking-widest text-warm-ivory hover:bg-warm-ivory hover:text-deep-chocolate transition-colors duration-state-change whitespace-nowrap"
        >
          <span data-design-text-token="label-sm">ADMIN ↗</span>
        </a>
      </header>

      {/* Centered Hero Content matching reference vertical hierarchy */}
      <div className="relative z-10 w-full max-w-sm md:max-w-lg mx-auto mt-gutter-xl flex flex-col items-center text-center gap-gutter-md">
        <span
          data-design-text-token="label-sm"
          className="inline-flex items-center px-gutter-md py-gutter-xs rounded-full bg-warm-ivory text-deep-chocolate font-label text-label-sm uppercase tracking-wide whitespace-nowrap"
        >
          FRESHLY BAKED · IMPOSSIBLY TEMPTING
        </span>

        <h1
          data-component-id="typography-display"
          data-component-type="typography"
          data-component-variant="display"
          data-design-text-token="headline-lg-mobile"
          className="font-headline text-headline-lg-mobile md:text-headline-lg text-warm-ivory uppercase tracking-wide"
        >
          DON'T BLAME US<br />FOR YOUR CRAVINGS.
        </h1>

        <p
          data-component-id="typography-body"
          data-component-type="typography"
          data-component-variant="body"
          data-design-text-token="body-sm"
          className="font-body text-body-sm text-warm-ivory max-w-xs text-pretty"
        >
          Discover handcrafted cakes, delicate pastries and little moments of pure indulgence.
        </p>

        <div className="pt-gutter-xs flex flex-col items-center gap-gutter-sm">
          <a
            href="#signature-cakes"
            data-component-id="button-hero-cta"
            data-component-type="button"
            data-component-variant="primary"
            className="inline-flex items-center justify-center min-h-[40px] px-gutter-lg py-gutter-sm rounded-full bg-warm-ivory text-deep-chocolate font-label text-label-sm uppercase tracking-wider transition-transform duration-state-change ease-state-change hover:-translate-y-0.5 hover:bg-ivory-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warm-ivory active:translate-y-0"
          >
            <span data-design-text-token="label-sm" className="whitespace-nowrap">
              GIVE IN TO YOUR CRAVINGS ↗
            </span>
          </a>

          <a
            href="#testimonials"
            aria-label="Google Rating 4.0 out of 5 from 500 Google reviews"
            className="inline-flex items-center gap-gutter-xs px-gutter-md py-1.5 rounded-full bg-warm-ivory/95 border border-warm-beige text-deep-chocolate shadow-sm transition-colors duration-state-change hover:bg-white whitespace-nowrap"
          >
            <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="font-body text-xs font-semibold text-deep-chocolate tabular-nums">4.0</span>
            <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 20 20" aria-hidden="true">
              <path
                fill="#FBBC04"
                d="M10 1.5l2.58 5.23 5.77.84-4.17 4.07.98 5.75L10 14.68l-5.16 2.71.98-5.75L1.65 7.57l5.77-.84L10 1.5z"
              />
            </svg>
            <span className="font-body text-xs font-medium text-chocolate-muted">· 500 Google reviews</span>
          </a>
        </div>
      </div>
    </section>
  );
});

export default Hero;
