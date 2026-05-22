import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_CONTENT } from '@/lib/content';

/**
 * FAQ Component
 * Accordion-style frequently asked questions
 * Design: Minimal expandable items with smooth animations
 * Optimized with Framer Motion for smooth expand/collapse
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
        padding: '0 28px 60px',
        borderTop: '1px solid var(--border)',
      }}
    >
      {FAQ_CONTENT.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          style={{
            borderBottom: '1px solid var(--border)',
            overflow: 'hidden',
          }}
        >
          {/* Question */}
          <motion.button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            whileHover={{ color: 'var(--cream2)' }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '20px 0',
              cursor: 'pointer',
              gap: '16px',
              width: '100%',
              color: 'var(--cream)',
              background: 'transparent',
              border: 'none',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              transition: 'color 0.3s ease',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(18px, 3vw, 26px)',
                fontWeight: '300',
                color: 'inherit',
                textAlign: 'left',
                margin: 0,
              }}
            >
              {item.question}
            </h3>
            <motion.span
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: '18px',
                color: 'var(--cream-muted)',
                flexShrink: 0,
              }}
            >
              ↓
            </motion.span>
          </motion.button>

          {/* Answer */}
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  overflow: 'hidden',
                }}
              >
                <p
                  style={{
                    fontSize: '12px',
                    color: 'var(--cream-muted)',
                    lineHeight: '1.75',
                    maxWidth: '500px',
                    paddingBottom: '20px',
                    margin: 0,
                  }}
                >
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
}
