import { useEffect, useRef } from 'react';
import { FEATURES_CONTENT } from '@/lib/content';

/**
 * Features Component
 * Three-column grid showcasing gallery features
 * Design: Numbered items with images and descriptions
 */
export default function Features() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '48px 28px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '32px',
      }}
    >
      {FEATURES_CONTENT.map((feature, index) => (
        <div
          key={index}
          ref={(el) => {
            refs.current[index] = el;
          }}
          className="reveal"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            transitionDelay: `${index * 0.12}s`,
          }}
        >
          {/* Number */}
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '28px',
              fontWeight: '300',
              fontStyle: 'italic',
              color: 'var(--cream-muted)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span style={{ flex: 1, height: '1px', background: 'var(--border)', marginRight: '10px' }} />
            {feature.number}
          </div>

          {/* Image */}
          <div
            style={{
              width: '100%',
              aspectRatio: '4/3',
              borderRadius: '3px',
              overflow: 'hidden',
            }}
          >
            <img
              src={feature.imageUrl}
              alt={feature.title}
              style={{
                width: '100%',
                height: '100%',
                transition: 'transform 0.5s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(14px, 2vw, 17px)',
              fontWeight: '400',
              color: 'var(--cream2)',
            }}
          >
            {feature.title}
          </h3>

          {/* Description */}
          <p
            style={{
              fontSize: '11px',
              color: 'var(--cream-muted)',
              lineHeight: '1.65',
              maxWidth: '200px',
            }}
          >
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
