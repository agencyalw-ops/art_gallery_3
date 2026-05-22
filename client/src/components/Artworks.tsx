import { useState } from 'react';
import { motion } from 'framer-motion';
import { ARTWORKS_CONTENT } from '@/lib/content';

/**
 * Artworks Component
 * Masonry grid layout with search and filter functionality
 * Design: Variable-sized cards with hover effects
 * Optimized with Framer Motion for smooth animations
 */
export default function Artworks() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [displayCount, setDisplayCount] = useState(6);

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
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 28px 60px',
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(22px, 4vw, 36px)',
            fontWeight: '400',
            color: 'var(--cream)',
          }}
        >
          {ARTWORKS_CONTENT.title}
        </h2>
      </motion.div>

      {/* Search & Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: '1px solid var(--border)',
          borderRadius: '4px',
          padding: '8px 14px',
          marginBottom: '24px',
          gap: '12px',
          background: 'rgba(237, 229, 212, 0.03)',
        }}
      >
        {/* Search */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1.2" />
            <path d="M8.5 8.5l2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder={ARTWORKS_CONTENT.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              background: 'none',
              border: 'none',
              outline: 'none',
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              fontWeight: '300',
              color: 'var(--cream)',
              width: '100%',
            }}
          />
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="hidden md:flex">
          {ARTWORKS_CONTENT.filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                fontSize: '9px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: activeFilter === filter ? 'var(--cream)' : 'var(--cream-muted)',
                padding: '4px 10px',
                border: `1px solid ${activeFilter === filter ? 'var(--cream-muted)' : 'var(--border)'}`,
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                background: 'transparent',
              }}
              onHoverStart={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'var(--cream-muted)';
                el.style.color = 'var(--cream)';
              }}
              onHoverEnd={(e) => {
                const el = e.currentTarget as HTMLElement;
                if (activeFilter !== filter) {
                  el.style.borderColor = 'var(--border)';
                  el.style.color = 'var(--cream-muted)';
                }
              }}
            >
              {filter}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Masonry Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '12px',
        }}
        className="md:grid-cols-4 sm:grid-cols-2"
      >
        {filteredArtworks.slice(0, displayCount).map((artwork, index) => (
          <motion.div
            key={artwork.id}
            variants={itemVariants}
            style={{
              position: 'relative',
              borderRadius: '3px',
              overflow: 'hidden',
              cursor: 'pointer',
              background: 'var(--bg3)',
              gridColumn: artwork.featured && index % 2 === 0 ? 'span 2' : 'span 1',
              gridRow: artwork.featured && index % 3 === 0 ? 'span 2' : 'span 1',
            }}
          >
            <motion.img
              src={artwork.imageUrl}
              alt={artwork.name}
              whileHover={{ scale: 1.04, filter: 'brightness(0.95) saturate(1.05)' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: '100%',
                height: '100%',
                minHeight: '140px',
                filter: 'brightness(0.88) saturate(0.95)',
              }}
            />

            {/* Hover Info */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '28px 10px 10px',
                background: 'linear-gradient(transparent, rgba(18, 26, 20, 0.75))',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '12px',
                  fontWeight: '400',
                  fontStyle: 'italic',
                  color: 'var(--cream)',
                  marginBottom: '2px',
                }}
              >
                {artwork.name}
              </div>
              <div
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.08em',
                  color: 'var(--cream-muted)',
                }}
              >
                {artwork.price}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Load More */}
      {displayCount < filteredArtworks.length && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: '28px' }}
        >
          <motion.button
            onClick={() => setDisplayCount((prev) => prev + 3)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              fontSize: '10px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--cream-muted)',
              border: '1px solid var(--border)',
              padding: '10px 32px',
              borderRadius: '2px',
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
            Load More
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
