import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { GALLERY_PAGE, GALLERY_CTA_CONTENT } from '@/lib/content';

/**
 * Gallery Page
 * Information about physical gallery location and visiting
 * Design: Dark green theme with smooth animations
 */
export default function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
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
            {GALLERY_PAGE.title}
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
            {GALLERY_PAGE.description}
          </p>
        </motion.section>

        {/* Gallery Info Grid */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            padding: '60px 28px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
          }}
        >
          {/* Hours */}
          <motion.div
            variants={itemVariants}
            style={{
              padding: '40px',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              background: 'rgba(237, 229, 212, 0.02)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '20px',
                fontWeight: '400',
                color: 'var(--cream)',
                marginBottom: '16px',
              }}
            >
              Hours
            </h3>
            <p
              style={{
                fontSize: '14px',
                color: 'var(--cream-muted)',
                lineHeight: '1.8',
              }}
            >
              {GALLERY_PAGE.hours}
            </p>
            <p
              style={{
                fontSize: '12px',
                color: 'var(--cream-muted)',
                marginTop: '12px',
                fontStyle: 'italic',
              }}
            >
              Please contact us to schedule your visit
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            style={{
              padding: '40px',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              background: 'rgba(237, 229, 212, 0.02)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '20px',
                fontWeight: '400',
                color: 'var(--cream)',
                marginBottom: '16px',
              }}
            >
              Location
            </h3>
            <p
              style={{
                fontSize: '14px',
                color: 'var(--cream-muted)',
                lineHeight: '1.8',
              }}
            >
              {GALLERY_PAGE.address}
            </p>
          </motion.div>

          {/* Experience */}
          <motion.div
            variants={itemVariants}
            style={{
              padding: '40px',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              background: 'rgba(237, 229, 212, 0.02)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '20px',
                fontWeight: '400',
                color: 'var(--cream)',
                marginBottom: '16px',
              }}
            >
              Experience
            </h3>
            <p
              style={{
                fontSize: '14px',
                color: 'var(--cream-muted)',
                lineHeight: '1.8',
              }}
            >
              Visit our gallery to experience the art in person. Our curated collection showcases contemporary and traditional Indonesian art in an intimate setting.
            </p>
          </motion.div>
        </motion.section>

        {/* Featured Image Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            padding: '60px 28px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          {/* Image */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              overflow: 'hidden',
              borderRadius: '4px',
              aspectRatio: '4/3',
            }}
          >
            <img
              src={GALLERY_CTA_CONTENT.imageUrl}
              alt="Gallery"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(24px, 4vw, 36px)',
                fontWeight: '400',
                color: 'var(--cream)',
                marginBottom: '16px',
                letterSpacing: '-0.01em',
              }}
            >
              {GALLERY_CTA_CONTENT.title}
            </h2>
            <p
              style={{
                fontSize: '14px',
                color: 'var(--cream-muted)',
                lineHeight: '1.8',
                marginBottom: '28px',
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
              {GALLERY_CTA_CONTENT.ctaText}
            </motion.a>
          </motion.div>
        </motion.section>

        {/* Virtual Tour CTA */}
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
            Can't visit in person?
          </h2>
          <p
            style={{
              fontSize: '14px',
              color: 'var(--cream-muted)',
              marginBottom: '28px',
              maxWidth: '600px',
              margin: '0 auto 28px',
            }}
          >
            Explore our complete collection online or schedule a virtual tour with our team
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a
              href="/portfolio"
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
              View Portfolio
            </motion.a>
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
              Schedule Virtual Tour
            </motion.a>
          </div>
        </motion.section>

        <Footer />
      </main>
    </div>
  );
}
