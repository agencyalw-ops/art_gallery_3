import { useEffect, useRef } from 'react';
import { HERO_CONTENT } from '@/lib/content';

/**
 * Hero Component
 * Premium full-width hero section with overlay and animated title
 * Design: Large serif title with metadata, gradient overlay
 */
export default function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imgRef.current) {
        const rect = imgRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        if (x > 0.3 && x < 0.7 && y > 0.3 && y < 0.7) {
          imgRef.current.classList.add('zoomed');
        } else {
          imgRef.current.classList.remove('zoomed');
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '10px 0 0',
      }}
    >
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '8px',
          height: 'clamp(420px, 65vw, 600px)',
        }}
      >
        {/* Background Image */}
        <img
          ref={imgRef}
          src={HERO_CONTENT.imageUrl}
          alt={HERO_CONTENT.title}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            transition: 'transform 8s ease',
          }}
          className="hero-img"
        />

        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(
              135deg,
              rgba(22, 32, 25, 0.65) 0%,
              rgba(22, 32, 25, 0.3) 50%,
              rgba(22, 32, 25, 0.15) 100%
            )`,
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 2,
            padding: '28px 32px',
          }}
        >
          {/* Title */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(60px, 14vw, 120px)',
              fontWeight: '600',
              fontStyle: 'italic',
              lineHeight: '0.88',
              letterSpacing: '-0.02em',
              color: 'var(--cream)',
              animation: 'titleIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both',
            }}
          >
            {HERO_CONTENT.title}
            <br />
            {HERO_CONTENT.subtitle}
          </h1>

          {/* Meta */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginTop: '14px',
              animation: 'titleIn 0.9s ease 0.6s both',
            }}
          >
            <span
              style={{
                fontSize: '10px',
                letterSpacing: '0.14em',
                color: 'var(--cream-muted)',
                textTransform: 'uppercase',
              }}
            >
              {HERO_CONTENT.year}
            </span>
            <p
              style={{
                fontSize: '11px',
                color: 'var(--cream-muted)',
                maxWidth: '200px',
                lineHeight: '1.55',
              }}
            >
              {HERO_CONTENT.description}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes titleIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-img.zoomed {
          transform: scale(1.04);
        }
      `}</style>
    </div>
  );
}
