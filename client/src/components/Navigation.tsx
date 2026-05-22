import { useState, useEffect } from 'react';
import { NAV_CONTENT, SITE_CONFIG } from '@/lib/content';

/**
 * Navigation Component
 * Premium sticky navigation with scroll effects
 * Design: Dark green background with cream text, minimal styling
 */
export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-100 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
      style={{
        background: 'rgba(28, 43, 31, 0.88)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(237, 229, 212, 0.12)',
        padding: '0 28px',
        height: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '10.5px',
        fontWeight: '400',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
      }}
    >
      {/* Left: Brand */}
      <div style={{ fontSize: '9px', color: 'rgba(237, 229, 212, 0.55)', letterSpacing: '0.14em' }}>
        {NAV_CONTENT.leftLabel}
      </div>

      {/* Center: Links (hidden on mobile) */}
      <div
        style={{
          display: 'flex',
          gap: '28px',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        className="hidden md:flex"
      >
        {NAV_CONTENT.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              fontSize: '10px',
              color: 'rgba(237, 229, 212, 0.55)',
              letterSpacing: '0.1em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#EDE5D4')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(237, 229, 212, 0.55)')}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Right: Cart + Menu */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <a
          href={SITE_CONFIG.ctaUrl}
          style={{
            fontSize: '10px',
            color: 'rgba(237, 229, 212, 0.55)',
            letterSpacing: '0.08em',
            border: '1px solid rgba(237, 229, 212, 0.12)',
            padding: '5px 14px',
            borderRadius: '2px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(237, 229, 212, 0.55)';
            e.currentTarget.style.color = '#EDE5D4';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(237, 229, 212, 0.12)';
            e.currentTarget.style.color = 'rgba(237, 229, 212, 0.55)';
          }}
        >
          {NAV_CONTENT.cartLabel}
        </a>

        {/* Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3.5px',
            cursor: 'pointer',
            padding: '4px',
          }}
        >
          {[1, 2, 3].map((i) => (
            <span
              key={i}
              style={{
                width: '18px',
                height: '1px',
                background: 'rgba(237, 229, 212, 0.55)',
                display: 'block',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#EDE5D4')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(237, 229, 212, 0.55)')}
            />
          ))}
        </button>
      </div>
    </nav>
  );
}
