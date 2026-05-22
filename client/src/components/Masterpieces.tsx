import { useEffect, useRef, useState } from 'react';
import { MASTERPIECES_CONTENT } from '@/lib/content';

/**
 * Masterpieces Component
 * Two-column layout with featured image and navigation
 * Design: Large image on left, text and controls on right
 */
export default function Masterpieces() {
  const imgRef = useRef<HTMLImageElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

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
      {/* Left: Image */}
      <div
        ref={leftRef}
        className="reveal-left"
        style={{
          position: 'relative',
          aspectRatio: '3/4',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
      >
        <img
          ref={imgRef}
          src={MASTERPIECES_CONTENT.imageUrl}
          alt="Featured masterpiece"
          style={{
            width: '100%',
            height: '100%',
            transition: 'transform 0.6s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '14px',
            fontSize: '9px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--cream-muted)',
          }}
        >
          ↳ {MASTERPIECES_CONTENT.label}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '26px',
            left: '14px',
            fontFamily: 'var(--font-display)',
            fontSize: '16px',
            fontWeight: '400',
            fontStyle: 'italic',
            color: 'var(--cream)',
          }}
        >
          Masterpiece {currentSlide + 1}
        </div>
      </div>

      {/* Right: Content */}
      <div
        ref={rightRef}
        className="reveal-right"
      >
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(18px, 3.5vw, 28px)',
            fontWeight: '300',
            fontStyle: 'italic',
            color: 'var(--cream2)',
            lineHeight: '1.3',
            marginBottom: '28px',
          }}
        >
          {MASTERPIECES_CONTENT.title}
        </h3>

        {/* Navigation */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={handlePrev}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              color: 'var(--cream-muted)',
              transition: 'all 0.2s',
              cursor: 'pointer',
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
            ←
          </button>
          <button
            onClick={handleNext}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              color: 'var(--cream-muted)',
              transition: 'all 0.2s',
              cursor: 'pointer',
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
            →
          </button>
        </div>
      </div>
    </div>
  );
}
