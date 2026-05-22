import { useEffect, useRef } from 'react';
import { EDITORIAL_CONTENT } from '@/lib/content';

/**
 * Editorial Component
 * Premium pre-hero block with italic text and image
 * Design: Minimal grid layout with serif typography
 */
export default function Editorial() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        background: 'var(--bg)',
        padding: '48px 40px 40px',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '28px',
        alignItems: 'start',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {/* Text */}
      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(17px, 2.8vw, 24px)',
          fontWeight: '300',
          fontStyle: 'italic',
          lineHeight: '1.45',
          color: 'var(--cream2)',
          maxWidth: '340px',
        }}
      >
        {EDITORIAL_CONTENT.text}
      </p>

      {/* Image */}
      <div
        style={{
          width: 'clamp(100px, 18vw, 160px)',
          aspectRatio: '3/4',
          borderRadius: '3px',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        <img
          src={EDITORIAL_CONTENT.imageUrl}
          alt="Gallery preview"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
}
