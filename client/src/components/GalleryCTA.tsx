import { useEffect, useRef } from 'react';
import { GALLERY_CTA_CONTENT } from '@/lib/content';

/**
 * Gallery CTA Component
 * Two-column layout with image and call-to-action
 * Design: Image on left with arrow overlay, text on right
 */
export default function GalleryCTA() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerLeft = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    const observerRight = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (leftRef.current) observerLeft.observe(leftRef.current);
    if (rightRef.current) observerRight.observe(rightRef.current);

    return () => {
      observerLeft.disconnect();
      observerRight.disconnect();
    };
  }, []);

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 28px 60px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '48px',
        alignItems: 'center',
      }}
    >
      {/* Image */}
      <div
        ref={leftRef}
        className="reveal-left"
        style={{
          position: 'relative',
          aspectRatio: '4/3',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
      >
        <img
          src={GALLERY_CTA_CONTENT.imageUrl}
          alt="Gallery visit"
          style={{
            width: '100%',
            height: '100%',
            transition: 'transform 0.6s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />

        {/* Arrow Button */}
        <div
          style={{
            position: 'absolute',
            bottom: '14px',
            right: '14px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: '1px solid rgba(237, 229, 212, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            color: 'var(--cream)',
            background: 'rgba(28, 43, 31, 0.5)',
            backdropFilter: 'blur(4px)',
            transition: 'all 0.2s',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--cream)';
            e.currentTarget.style.background = 'rgba(28, 43, 31, 0.8)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(237, 229, 212, 0.35)';
            e.currentTarget.style.background = 'rgba(28, 43, 31, 0.5)';
          }}
        >
          →
        </div>
      </div>

      {/* Text */}
      <div
        ref={rightRef}
        className="reveal-right"
      >
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(16px, 3vw, 24px)',
            fontWeight: '300',
            fontStyle: 'italic',
            color: 'var(--cream2)',
            lineHeight: '1.4',
            marginBottom: '20px',
          }}
        >
          {GALLERY_CTA_CONTENT.title}
        </h3>
        <p
          style={{
            fontSize: '12px',
            color: 'var(--cream-muted)',
            lineHeight: '1.75',
            marginBottom: '24px',
          }}
        >
          {GALLERY_CTA_CONTENT.description}
        </p>
        <a
          href={GALLERY_CTA_CONTENT.ctaUrl}
          style={{
            display: 'inline-block',
            fontSize: '10px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--cream-muted)',
            border: '1px solid var(--border)',
            padding: '10px 32px',
            borderRadius: '2px',
            transition: 'all 0.2s',
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--cream-muted)';
              e.currentTarget.style.color = 'var(--cream)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.color = 'var(--cream-muted)';
            }}
        >
          {GALLERY_CTA_CONTENT.ctaText}
        </a>
      </div>
    </div>
  );
}
