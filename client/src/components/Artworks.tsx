import { useEffect, useRef, useState } from 'react';
import { ARTWORKS_CONTENT, SITE_CONFIG } from '@/lib/content';

/**
 * Artworks Component
 * Masonry grid layout with search and filter functionality
 * Design: Variable-sized cards with hover effects
 */
export default function Artworks() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [displayCount, setDisplayCount] = useState(6);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredArtworks = ARTWORKS_CONTENT.artworks.filter((artwork) => {
    const matchesSearch = artwork.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'All' || artwork.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 28px 60px',
      }}
    >
      {/* Header */}
      <div
        ref={headerRef}
        className="reveal"
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
      </div>

      {/* Search & Filter Bar */}
      <div
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
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                fontSize: '9px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: activeFilter === filter ? 'var(--cream)' : 'var(--cream-muted)',
                padding: '4px 10px',
                border: `1px solid ${activeFilter === filter ? 'var(--cream-muted)' : 'var(--border)'}`,
                borderRadius: '20px',
                transition: 'all 0.2s',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--cream-muted)';
                e.currentTarget.style.color = 'var(--cream)';
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== filter) {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--cream-muted)';
                }
              }}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '12px',
        }}
        className="md:grid-cols-4 sm:grid-cols-2"
      >
        {filteredArtworks.slice(0, displayCount).map((artwork, index) => (
          <div
            key={artwork.id}
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
            <img
              src={artwork.imageUrl}
              alt={artwork.name}
              style={{
                width: '100%',
                height: '100%',
                minHeight: '140px',
                transition: 'transform 0.5s ease, filter 0.3s',
                filter: 'brightness(0.88) saturate(0.95)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.04)';
                e.currentTarget.style.filter = 'brightness(0.95) saturate(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.filter = 'brightness(0.88) saturate(0.95)';
              }}
            />

            {/* Hover Info */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '28px 10px 10px',
                background: 'linear-gradient(transparent, rgba(18, 26, 20, 0.75))',
                opacity: 0,
                transform: 'translateY(4px)',
                transition: 'opacity 0.3s, transform 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0';
                e.currentTarget.style.transform = 'translateY(4px)';
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
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {displayCount < filteredArtworks.length && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '28px' }}>
          <button
            onClick={() => setDisplayCount((prev) => prev + 3)}
            style={{
              fontSize: '10px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--cream-muted)',
              border: '1px solid var(--border)',
              padding: '10px 32px',
              borderRadius: '2px',
              transition: 'all 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--cream-muted)';
              e.currentTarget.style.color = 'var(--cream)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.color = 'var(--cream-muted)';
            }}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
