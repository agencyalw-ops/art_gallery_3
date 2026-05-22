import { motion } from 'framer-motion';
import { EDITORIAL_CONTENT } from '@/lib/content';

/**
 * Editorial Component
 * Premium pre-hero block with italic text and image
 * Design: Minimal grid layout with serif typography
 * Optimized with Framer Motion for smooth animations
 */
export default function Editorial() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
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
      <motion.p
        variants={itemVariants}
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
      </motion.p>

      {/* Image */}
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: 'clamp(100px, 18vw, 160px)',
          aspectRatio: '3/4',
          borderRadius: '3px',
          overflow: 'hidden',
          flexShrink: 0,
          cursor: 'pointer',
        }}
      >
        <img
          src={EDITORIAL_CONTENT.imageUrl}
          alt="Gallery preview"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </motion.div>
    </motion.div>
  );
}
