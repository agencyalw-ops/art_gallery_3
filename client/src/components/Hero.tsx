import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HERO_CONTENT } from '@/lib/content';

/**
 * Hero Component
 * Premium full-width hero section with overlay and animated title
 * Design: Large serif title with metadata, gradient overlay
 * Optimized with Framer Motion for smooth animations
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

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const metaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
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
        <motion.img
          ref={imgRef}
          src={HERO_CONTENT.imageUrl}
          alt={HERO_CONTENT.title}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
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
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(60px, 14vw, 120px)',
              fontWeight: '600',
              fontStyle: 'italic',
              lineHeight: '0.88',
              letterSpacing: '-0.02em',
              color: 'var(--cream)',
            }}
          >
            {HERO_CONTENT.title}
            <br />
            {HERO_CONTENT.subtitle}
          </motion.h1>

          {/* Meta */}
          <motion.div
            variants={metaVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginTop: '14px',
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
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-img.zoomed {
          transform: scale(1.04);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </motion.div>
  );
}
