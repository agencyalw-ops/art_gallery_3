import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { PORTFOLIO_PAGE, ARTWORKS_CONTENT } from '@/lib/content';

/**
 * Portfolio Page
 * Showcases complete collection of artworks
 * Design: Dark green theme with smooth animations
 */
export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <div style={{ background: 'var(--bg)', minHeight: '100vh', overflow: 'hidden' }}>
      <Navigation />

      <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 12px' }}>
        {/* Hero Section */}
        <motion.section
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            padding: '80px 28px 60px',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 6vw, 56px)',
              fontWeight: '400',
              color: 'var(--cream)',
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}
          >
            {PORTFOLIO_PAGE.title}
          </h1>
          <p
            style={{
              fontSize: 'clamp(14px, 2vw, 16px)',
              color: 'var(--cream-muted)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.8',
            }}
          >
            {PORTFOLIO_PAGE.description}
          </p>
        </motion.section>

        {/* Portfolio Grid */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            padding: '0 28px 80px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {ARTWORKS_CONTENT.artworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              variants={itemVariants}
              className="group"
              style={{
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '4px',
                  aspectRatio: '1',
                  marginBottom: '12px',
                  background: 'var(--bg3)',
                }}
              >
                <motion.img
                  src={artwork.imageUrl}
                  alt={artwork.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
                {artwork.featured && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: 'rgba(139, 115, 85, 0.9)',
                      color: 'var(--cream)',
                      padding: '4px 12px',
                      fontSize: '10px',
                      fontWeight: '500',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      borderRadius: '2px',
                    }}
                  >
                    Featured
                  </div>
                )}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '16px',
                    fontWeight: '400',
                    color: 'var(--cream)',
                    marginBottom: '4px',
                  }}
                >
                  {artwork.name}
                </h3>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      color: 'var(--cream-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {artwork.category}
                  </span>
                  <span
                    style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      color: 'var(--cream)',
                    }}
                  >
                    {artwork.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            padding: '60px 28px',
            textAlign: 'center',
            borderTop: '1px solid var(--border)',
            marginBottom: '60px',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: '400',
              color: 'var(--cream)',
              marginBottom: '16px',
            }}
          >
            Interested in a piece?
          </h2>
          <p
            style={{
              fontSize: '14px',
              color: 'var(--cream-muted)',
              marginBottom: '28px',
            }}
          >
            Contact us for inquiries, commissions, or to schedule a viewing
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-block',
              padding: '12px 32px',
              border: '1px solid var(--cream)',
              color: 'var(--cream)',
              fontSize: '12px',
              fontWeight: '500',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
            onHoverStart={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'rgba(237, 229, 212, 0.1)';
            }}
            onHoverEnd={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'transparent';
            }}
          >
            Get in Touch
          </motion.a>
        </motion.section>

        <Footer />
      </main>
    </div>
  );
}
