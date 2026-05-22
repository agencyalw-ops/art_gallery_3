import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SHOP_PAGE, ARTWORKS_CONTENT } from '@/lib/content';

/**
 * Shop Page
 * Interactive shop with search, filtering, and sorting
 * Design: Dark green theme with smooth animations
 */
export default function Shop() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Default');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredArtworks = ARTWORKS_CONTENT.artworks.filter((artwork) => {
    const matchesSearch = artwork.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'All' || artwork.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

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
    hidden: { opacity: 0, y: 20 },
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
            {SHOP_PAGE.title}
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
            {SHOP_PAGE.description}
          </p>
        </motion.section>

        {/* Search & Filters */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            padding: '0 28px 40px',
          }}
        >
          {/* Search Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              padding: '12px 16px',
              marginBottom: '24px',
              background: 'rgba(237, 229, 212, 0.03)',
              gap: '12px',
            }}
          >
            <span style={{ fontSize: '14px', color: 'var(--cream-muted)' }}>🔍</span>
            <input
              type="text"
              placeholder={ARTWORKS_CONTENT.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                color: 'var(--cream)',
                fontSize: '14px',
                outline: 'none',
              }}
            />
          </div>

          {/* Filters & Sort */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            {/* Category Filters */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {ARTWORKS_CONTENT.filters.map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: '8px 16px',
                    fontSize: '12px',
                    fontWeight: '500',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    borderRadius: '2px',
                    border: activeFilter === filter ? '1px solid var(--cream)' : '1px solid var(--border)',
                    background: activeFilter === filter ? 'rgba(237, 229, 212, 0.1)' : 'transparent',
                    color: activeFilter === filter ? 'var(--cream)' : 'var(--cream-muted)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                >
                  {filter}
                </motion.button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                marginLeft: 'auto',
                padding: '8px 12px',
                fontSize: '12px',
                background: 'rgba(237, 229, 212, 0.03)',
                border: '1px solid var(--border)',
                color: 'var(--cream)',
                borderRadius: '2px',
                cursor: 'pointer',
              }}
            >
              {ARTWORKS_CONTENT.sortOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </motion.section>

        {/* Products Grid */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            padding: '0 28px 80px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '28px',
          }}
        >
          {filteredArtworks.map((artwork) => (
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
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
                {artwork.featured && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: 'rgba(139, 115, 85, 0.95)',
                      color: 'var(--cream)',
                      padding: '6px 14px',
                      fontSize: '10px',
                      fontWeight: '500',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      borderRadius: '2px',
                    }}
                  >
                    Featured
                  </motion.div>
                )}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '8px 24px',
                    background: 'rgba(237, 229, 212, 0.95)',
                    color: 'var(--bg)',
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    border: 'none',
                  }}
                >
                  Add to Cart
                </motion.button>
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
                      fontWeight: '600',
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

        {filteredArtworks.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              padding: '60px 28px',
              textAlign: 'center',
            }}
          >
            <p style={{ color: 'var(--cream-muted)', fontSize: '14px' }}>
              No artworks found matching your criteria
            </p>
          </motion.div>
        )}

        <Footer />
      </main>
    </div>
  );
}
