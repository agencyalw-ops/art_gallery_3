import { motion } from 'framer-motion';
import { GALLERY_CTA_CONTENT } from '@/lib/content';

/**
 * Gallery CTA Component
 * Two-column layout with image and call-to-action
 * Design: Image on left with arrow overlay, text on right
 * Optimized with Framer Motion for smooth animations
 */
export default function GalleryCTA() {
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
      {/* Image */}
      <motion.div
        variants={leftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          position: 'relative',
          aspectRatio: '4/3',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
      >
        <motion.img
          src={GALLERY_CTA_CONTENT.imageUrl}
          alt="Gallery visit"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            height: '100%',
          }}
        />

        {/* Arrow Button */}
        <motion.div
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
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
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
          onHoverStart={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = 'var(--cream)';
            el.style.background = 'rgba(28, 43, 31, 0.8)';
          }}
          onHoverEnd={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = 'rgba(237, 229, 212, 0.35)';
            el.style.background = 'rgba(28, 43, 31, 0.5)';
          }}
        >
          →
        </motion.div>
      </motion.div>

      {/* Text */}
      <motion.div
        variants={rightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
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
        <motion.a
          href={GALLERY_CTA_CONTENT.ctaUrl}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'inline-block',
            fontSize: '10px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--cream-muted)',
            border: '1px solid var(--border)',
            padding: '10px 32px',
            borderRadius: '2px',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
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
          {GALLERY_CTA_CONTENT.ctaText}
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
