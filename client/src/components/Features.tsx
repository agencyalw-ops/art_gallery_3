import { motion } from 'framer-motion';
import { FEATURES_CONTENT } from '@/lib/content';

/**
 * Features Component
 * Three-column grid showcasing gallery features
 * Design: Numbered items with images and descriptions
 * Optimized with Framer Motion for smooth staggered animations
 */
export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '48px 28px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '32px',
      }}
    >
      {FEATURES_CONTENT.map((feature, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
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
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: '100%',
              aspectRatio: '4/3',
              borderRadius: '3px',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
          >
            <img
              src={feature.imageUrl}
              alt={feature.title}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </motion.div>

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
        </motion.div>
      ))}
    </motion.div>
  );
}
