import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MASTERPIECES_CONTENT } from '@/lib/content';

/**
 * Masterpieces Component
 * Two-column layout with featured image and navigation
 * Design: Large image on left, text and controls on right
 * Optimized with Framer Motion for smooth animations
 */
export default function Masterpieces() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
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
      <motion.div
        variants={leftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          position: 'relative',
          aspectRatio: '3/4',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
      >
        <motion.img
          src={MASTERPIECES_CONTENT.imageUrl}
          alt="Featured masterpiece"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            height: '100%',
          }}
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
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
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
        </motion.div>
      </motion.div>

      {/* Right: Content */}
      <motion.div
        variants={rightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
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
          <motion.button
            onClick={handlePrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
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
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              background: 'transparent',
            }}
            onHoverStart={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'var(--cream-muted)';
              el.style.color = 'var(--cream)';
            }}
            onHoverEnd={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'var(--border)';
              el.style.color = 'var(--cream-muted)';
            }}
          >
            ←
          </motion.button>
          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
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
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              background: 'transparent',
            }}
            onHoverStart={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'var(--cream-muted)';
              el.style.color = 'var(--cream)';
            }}
            onHoverEnd={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'var(--border)';
              el.style.color = 'var(--cream-muted)';
            }}
          >
            →
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
