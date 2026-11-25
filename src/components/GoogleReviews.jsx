import React, { memo } from 'react';

const GoogleIcon = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
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
);

const SmallGoogleIcon = () => (
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
);

const GoogleReviews = memo(function GoogleReviews() {
  return (
    <section id="testimonials" className="w-full bg-warm-ivory py-gutter-2xl md:py-section border-t border-warm-beige">
      <div className="max-w-5xl mx-auto px-page-margin flex flex-col gap-gutter-xl">
        <header className="reveal-item flex flex-col md:flex-row md:items-end justify-between gap-gutter-md border-b border-warm-beige pb-gutter-lg">
          <div className="flex flex-col gap-gutter-xs max-w-xl">
            <span
              data-design-text-token="label-sm"
              className="font-label text-label-sm uppercase tracking-widest text-cherry-burgundy"
            >
              Google Reviews
            </span>
            <h2
              data-design-text-token="headline-lg-mobile"
              className="font-headline text-headline-lg-mobile md:text-headline-lg text-deep-chocolate uppercase text-balance"
            >
              REAL STORIES. REAL SWEET MOMENTS.
            </h2>
            <p
              data-design-text-token="body-sm"
              className="font-body text-body-sm text-chocolate-muted text-pretty"
            >
              Don't just take our word for it. Discover what our customers say about their experiences at Shri Black Forest.
            </p>
          </div>

          <div className="shrink-0 flex flex-col items-start gap-gutter-xs px-gutter-lg py-gutter-md rounded-md bg-white border border-warm-beige shadow-sm">
            <div className="flex items-center gap-gutter-xs">
              <GoogleIcon />
              <span className="font-body text-sm font-semibold text-deep-chocolate">Google Reviews</span>
            </div>
            <div className="flex items-center gap-gutter-sm">
              <span className="font-body text-xl font-bold text-deep-chocolate tabular-nums">4.0/5</span>
              <span className="inline-flex items-center gap-0.5" aria-label="4.0 out of 5 stars">
                <svg className="w-4 h-4" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    fill="#FBBC04"
                    d="M10 1.5l2.58 5.23 5.77.84-4.17 4.07.98 5.75L10 14.68l-5.16 2.71.98-5.75L1.65 7.57l5.77-.84L10 1.5z"
                  />
                </svg>
                <svg className="w-4 h-4" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    fill="#FBBC04"
                    d="M10 1.5l2.58 5.23 5.77.84-4.17 4.07.98 5.75L10 14.68l-5.16 2.71.98-5.75L1.65 7.57l5.77-.84L10 1.5z"
                  />
                </svg>
                <svg className="w-4 h-4" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    fill="#FBBC04"
                    d="M10 1.5l2.58 5.23 5.77.84-4.17 4.07.98 5.75L10 14.68l-5.16 2.71.98-5.75L1.65 7.57l5.77-.84L10 1.5z"
                  />
                </svg>
                <svg className="w-4 h-4" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    fill="#FBBC04"
                    d="M10 1.5l2.58 5.23 5.77.84-4.17 4.07.98 5.75L10 14.68l-5.16 2.71.98-5.75L1.65 7.57l5.77-.84L10 1.5z"
                  />
                </svg>
                <svg className="w-4 h-4" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    fill="#DADCE0"
                    d="M10 1.5l2.58 5.23 5.77.84-4.17 4.07.98 5.75L10 14.68l-5.16 2.71.98-5.75L1.65 7.57l5.77-.84L10 1.5z"
                  />
                </svg>
              </span>
              <span className="font-body text-sm font-medium text-chocolate-muted tabular-nums">(500)</span>
            </div>
            <span className="font-body text-xs font-medium text-chocolate-muted">
              500 Google reviews · Aggregate rating
            </span>
          </div>
        </header>

        {/* Responsive Horizontal Carousel on Mobile, 3-Column Editorial Grid on Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-gutter-md pb-gutter-sm -mx-page-margin px-page-margin md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-3 md:gap-gutter-lg md:overflow-visible">
          {/* Review 1: Ajveen K */}
          <article
            data-component-id="google-review-card"
            data-component-type="card"
            data-component-variant="outlined"
            className="reveal-item shrink-0 w-72 md:w-auto snap-start flex flex-col justify-between gap-gutter-md p-gutter-lg rounded-sm bg-warm-ivory border border-warm-beige border-t-2 border-t-cherry-burgundy"
          >
            <div className="flex flex-col gap-gutter-sm">
              <div className="flex items-center justify-between gap-gutter-xs">
                <span className="inline-flex items-center gap-1.5 font-body text-xs font-medium text-chocolate-muted">
                  <SmallGoogleIcon />
                  Google Review
                </span>
              </div>
              <p
                data-design-text-token="body-sm"
                className="font-body text-body-sm text-deep-chocolate text-pretty"
              >
                “Awesome food quality.. perfect service... Specially staff mr. Deepak good contact to customers.”
              </p>
            </div>
            <footer className="pt-gutter-sm border-t border-warm-beige">
              <span
                data-design-text-token="label-sm"
                className="font-label text-label-sm uppercase tracking-wider text-deep-chocolate"
              >
                AJVEEN K
              </span>
            </footer>
          </article>

          {/* Review 2: Vaishnavi Kumar */}
          <article
            data-component-id="google-review-card"
            data-component-type="card"
            data-component-variant="outlined"
            className="reveal-item shrink-0 w-72 md:w-auto snap-start flex flex-col justify-between gap-gutter-md p-gutter-lg rounded-sm bg-warm-ivory border border-warm-beige border-t-2 border-t-soft-caramel"
          >
            <div className="flex flex-col gap-gutter-sm">
              <div className="flex items-center justify-between gap-gutter-xs">
                <span className="inline-flex items-center gap-1.5 font-body text-xs font-medium text-chocolate-muted">
                  <SmallGoogleIcon />
                  Google Review
                </span>
              </div>
              <p
                data-design-text-token="body-sm"
                className="font-body text-body-sm text-deep-chocolate text-pretty"
              >
                “My favourite cake shop is black forest Best service and package is very good.”
              </p>
            </div>
            <footer className="pt-gutter-sm border-t border-warm-beige">
              <span
                data-design-text-token="label-sm"
                className="font-label text-label-sm uppercase tracking-wider text-deep-chocolate"
              >
                VAISHNAVI KUMAR
              </span>
            </footer>
          </article>

          {/* Review 3: Dhinesh Dhinesh */}
          <article
            data-component-id="google-review-card"
            data-component-type="card"
            data-component-variant="outlined"
            className="reveal-item shrink-0 w-72 md:w-auto snap-start flex flex-col justify-between gap-gutter-md p-gutter-lg rounded-sm bg-warm-ivory border border-warm-beige border-t-2 border-t-deep-chocolate"
          >
            <div className="flex flex-col gap-gutter-sm">
              <div className="flex items-center justify-between gap-gutter-xs">
                <span className="inline-flex items-center gap-1.5 font-body text-xs font-medium text-chocolate-muted">
                  <SmallGoogleIcon />
                  Google Review
                </span>
              </div>
              <p
                data-design-text-token="body-sm"
                className="font-body text-body-sm text-deep-chocolate text-pretty"
              >
                “Good food quality and quantity, good service, reasonable price.”
              </p>
            </div>
            <footer className="pt-gutter-sm border-t border-warm-beige">
              <span
                data-design-text-token="label-sm"
                className="font-label text-label-sm uppercase tracking-wider text-deep-chocolate"
              >
                DHINESH DHINESH
              </span>
            </footer>
          </article>

          {/* Review 4: Akamedhu Meeran R */}
          <article
            data-component-id="google-review-card"
            data-component-type="card"
            data-component-variant="outlined"
            className="reveal-item shrink-0 w-72 md:w-auto snap-start flex flex-col justify-between gap-gutter-md p-gutter-lg rounded-sm bg-warm-ivory border border-warm-beige border-t-2 border-t-cherry-burgundy"
          >
            <div className="flex flex-col gap-gutter-sm">
              <div className="flex items-center justify-between gap-gutter-xs">
                <span className="inline-flex items-center gap-1.5 font-body text-xs font-medium text-chocolate-muted">
                  <SmallGoogleIcon />
                  Google Review
                </span>
              </div>
              <p
                data-design-text-token="body-sm"
                className="font-body text-body-sm text-deep-chocolate text-pretty"
              >
                “Lovely service ❤️ Low price tasty food.”
              </p>
            </div>
            <footer className="pt-gutter-sm border-t border-warm-beige">
              <span
                data-design-text-token="label-sm"
                className="font-label text-label-sm uppercase tracking-wider text-deep-chocolate"
              >
                AKAMEDHU MEERAN R
              </span>
            </footer>
          </article>

          {/* Review 5: Senthamizhan A */}
          <article
            data-component-id="google-review-card"
            data-component-type="card"
            data-component-variant="outlined"
            className="reveal-item shrink-0 w-72 md:w-auto snap-start flex flex-col justify-between gap-gutter-md p-gutter-lg rounded-sm bg-warm-ivory border border-warm-beige border-t-2 border-t-soft-caramel"
          >
            <div className="flex flex-col gap-gutter-sm">
              <div className="flex items-center justify-between gap-gutter-xs">
                <span className="inline-flex items-center gap-1.5 font-body text-xs font-medium text-chocolate-muted">
                  <SmallGoogleIcon />
                  Google Review
                </span>
              </div>
              <p
                data-design-text-token="body-sm"
                className="font-body text-body-sm text-deep-chocolate text-pretty"
              >
                Appreciated the bakery's prime city location and variety of pastries, while mentioning that the ambience can be busy and noisy.
              </p>
            </div>
            <footer className="pt-gutter-sm border-t border-warm-beige">
              <span
                data-design-text-token="label-sm"
                className="font-label text-label-sm uppercase tracking-wider text-deep-chocolate"
              >
                SENTHAMIZHAN A
              </span>
            </footer>
          </article>

          {/* Review 6: S.K.V. Parthiban */}
          <article
            data-component-id="google-review-card"
            data-component-type="card"
            data-component-variant="outlined"
            className="reveal-item shrink-0 w-72 md:w-auto snap-start flex flex-col justify-between gap-gutter-md p-gutter-lg rounded-sm bg-warm-ivory border border-warm-beige border-t-2 border-t-deep-chocolate"
          >
            <div className="flex flex-col gap-gutter-sm">
              <div className="flex items-center justify-between gap-gutter-xs">
                <span className="inline-flex items-center gap-1.5 font-body text-xs font-medium text-chocolate-muted">
                  <SmallGoogleIcon />
                  Google Review
                </span>
                <span
                  data-design-text-token="label-sm"
                  className="font-label text-label-sm uppercase tracking-wider text-chocolate-muted"
                >
                  Service: 1/5
                </span>
              </div>
              <p
                data-design-text-token="body-sm"
                className="font-body text-body-sm text-deep-chocolate text-pretty"
              >
                “Am birthday cake order - Very very worst service..not responding.”
              </p>
              <p
                data-design-text-token="label-sm"
                className="font-label text-label-sm text-chocolate-muted"
              >
                Mentions a waiting time of over one hour.
              </p>
            </div>
            <footer className="pt-gutter-sm border-t border-warm-beige">
              <span
                data-design-text-token="label-sm"
                className="font-label text-label-sm uppercase tracking-wider text-deep-chocolate"
              >
                S.K.V. PARTHIBAN
              </span>
            </footer>
          </article>
        </div>

        <div className="reveal-item flex flex-col sm:flex-row sm:items-center justify-between gap-gutter-md pt-gutter-xs">
          <span
            data-design-text-token="label-sm"
            className="font-label text-label-sm uppercase tracking-wider text-chocolate-muted"
          >
            Swipe for more on mobile · Showing 6 customer excerpts
          </span>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Shri+Black+Forest%2C+Krishna+Plaza%2C+103%2C+S+Car+St%2C+Chidambaram%2C+Tamil+Nadu+608001"
            target="_blank"
            rel="noopener noreferrer"
            data-component-id="button-google-reviews"
            data-component-type="button"
            data-component-variant="primary"
            className="inline-flex items-center justify-center gap-gutter-xs min-h-10 px-gutter-lg py-gutter-sm rounded-sm bg-deep-chocolate text-warm-ivory font-label text-label-sm uppercase tracking-wider transition-colors duration-state-change hover:bg-cherry-burgundy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-chocolate whitespace-nowrap"
          >
            <span data-design-text-token="label-sm">READ ALL GOOGLE REVIEWS ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
});

export default GoogleReviews;
