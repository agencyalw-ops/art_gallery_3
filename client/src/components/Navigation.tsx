import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_CONTENT, SITE_CONFIG } from '@/lib/content';

/**
 * Navigation Component
 * Premium sticky navigation with scroll effects
 * Design: Dark green background with cream text, minimal styling
 * Optimized with wouter Link and Framer Motion
 */
export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'shadow-xl' : ''
      }`}
      style={{
        background: isScrolled ? 'rgba(28, 43, 31, 0.92)' : 'rgba(28, 43, 31, 0.8)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(237, 229, 212, 0.08)',
        padding: '0 28px',
        height: '54px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '10px',
        fontWeight: '400',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
      }}
    >
      {/* Left: Brand */}
      <Link href="/">
        <motion.div 
          whileHover={{ opacity: 0.7 }}
          style={{ fontSize: '9px', color: 'var(--cream)', letterSpacing: '0.14em', cursor: 'pointer' }}
        >
          {NAV_CONTENT.leftLabel}
        </motion.div>
      </Link>

      {/* Center: Links (hidden on mobile) */}
      <div
        style={{
          display: 'flex',
          gap: '32px',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        className="hidden md:flex"
      >
        {NAV_CONTENT.links.map((link) => (
          <Link key={link.label} href={link.href}>
            <motion.a
              style={{
                fontSize: '10px',
                color: location === link.href ? 'var(--cream)' : 'rgba(237, 229, 212, 0.5)',
                letterSpacing: '0.1em',
                transition: 'color 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
              }}
              whileHover={{ color: 'var(--cream)' }}
            >
              {link.label}
              {location === link.href && (
                <motion.div
                  layoutId="nav-underline"
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: 'var(--cream)',
                  }}
                />
              )}
            </motion.a>
          </Link>
        ))}
      </div>

      {/* Right: Cart + Menu */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <motion.a
          href={SITE_CONFIG.ctaUrl}
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(237, 229, 212, 0.05)', color: 'var(--cream)' }}
          whileTap={{ scale: 0.95 }}
          style={{
            fontSize: '9px',
            color: 'rgba(237, 229, 212, 0.6)',
            letterSpacing: '0.08em',
            border: '1px solid rgba(237, 229, 212, 0.15)',
            padding: '6px 16px',
            borderRadius: '2px',
            transition: 'all 0.3s ease',
          }}
        >
          {NAV_CONTENT.cartLabel}
        </motion.a>

        {/* Menu Icon */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          whileHover={{ opacity: 0.8 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            cursor: 'pointer',
            padding: '4px',
            background: 'none',
            border: 'none',
          }}
        >
          {[1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{
                rotate: menuOpen ? (i === 1 ? 45 : -45) : 0,
                y: menuOpen ? (i === 1 ? 2.5 : -2.5) : 0,
                width: menuOpen ? '20px' : (i === 1 ? '18px' : '12px'),
              }}
              style={{
                height: '1px',
                background: 'var(--cream)',
                display: 'block',
                alignSelf: 'flex-end',
              }}
            />
          ))}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: '54px',
              left: 0,
              right: 0,
              background: 'var(--bg)',
              padding: '40px 28px',
              borderBottom: '1px solid var(--border)',
              zIndex: 40,
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {NAV_CONTENT.links.map((link) => (
              <Link key={link.label} href={link.href}>
                <motion.a
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontSize: '18px',
                    fontFamily: 'var(--font-display)',
                    color: location === link.href ? 'var(--cream)' : 'rgba(237, 229, 212, 0.5)',
                    letterSpacing: '0.05em',
                  }}
                  whileHover={{ x: 10, color: 'var(--cream)' }}
                >
                  {link.label}
                </motion.a>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
