import React, { forwardRef, memo, useEffect, useRef, useState } from 'react';

const TRANSPARENT_SVG =
  'data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22%3E%3C/svg%3E';

// Shared singleton IntersectionObserver so all below-the-fold images share one observer
let sharedObserver = null;
const observerCallbacks = new WeakMap();

function getSharedObserver() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const cb = observerCallbacks.get(entry.target);
            if (cb) {
              observerCallbacks.delete(entry.target);
              sharedObserver.unobserve(entry.target);
              cb();
            }
          }
        });
      },
      {
        // Start loading images smoothly as the user approaches within 100px of the section
        rootMargin: '100px 0px',
        threshold: 0.01,
      }
    );
  }
  return sharedObserver;
}

const ResponsiveImage = memo(
  forwardRef(function ResponsiveImage(
    {
      id,
      baseName,
      widths,
      sizes,
      fallbackSrc,
      alt,
      width,
      height,
      className,
      priority = false,
    },
    forwardedRef
  ) {
    const localImgRef = useRef(null);
    const [shouldLoad, setShouldLoad] = useState(() => {
      if (priority) return true;
      if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
        return true;
      }
      return false;
    });
    const [useFallbackOnly, setUseFallbackOnly] = useState(false);

    // Sync forwardedRef and localImgRef
    const setRefs = (node) => {
      localImgRef.current = node;
      if (typeof forwardedRef === 'function') {
        forwardedRef(node);
      } else if (forwardedRef) {
        forwardedRef.current = node;
      }
    };

    useEffect(() => {
      if (priority || shouldLoad) return;
      const el = localImgRef.current;
      const observer = getSharedObserver();
      if (!el || !observer) {
        setShouldLoad(true);
        return;
      }

      observerCallbacks.set(el, () => setShouldLoad(true));
      observer.observe(el);

      return () => {
        observerCallbacks.delete(el);
        observer.unobserve(el);
      };
    }, [priority, shouldLoad]);

    const avifSrcSet = widths
      .map((w) => `/images/${baseName}-${w}w.avif ${w}w`)
      .join(', ');
    const webpSrcSet = widths
      .map((w) => `/images/${baseName}-${w}w.webp ${w}w`)
      .join(', ');

    const resolvedFallback = fallbackSrc || `/images/${baseName}.jpg`;

    return (
      <picture className="contents">
        {shouldLoad && !useFallbackOnly && (
          <>
            <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
            <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
          </>
        )}
        <img
          id={id}
          ref={setRefs}
          src={shouldLoad ? resolvedFallback : TRANSPARENT_SVG}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? undefined : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          {...(priority ? { fetchpriority: 'high' } : {})}
          onError={() => {
            if (!useFallbackOnly) {
              setUseFallbackOnly(true);
            }
          }}
          className={className}
        />
      </picture>
    );
  })
);

export default ResponsiveImage;
