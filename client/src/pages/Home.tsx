import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Editorial from '@/components/Editorial';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Masterpieces from '@/components/Masterpieces';
import Artworks from '@/components/Artworks';
import GalleryCTA from '@/components/GalleryCTA';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

/**
 * Home Page
 * Premium multi-section landing page for Wonosobo Art Gallery
 * Design: Dark green theme with cream accents, serif typography
 * Optimized with smooth animations and transitions
 */
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      style={{ background: 'var(--bg)', minHeight: '100vh', overflow: 'hidden' }}
    >
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 12px' }}>
        {/* Editorial Pre-Hero */}
        <Editorial />

        {/* Hero Section */}
        <Hero />

        {/* Features */}
        <Features />

        {/* Masterpieces */}
        <Masterpieces />

        {/* All Artworks */}
        <Artworks />

        {/* Gallery CTA */}
        <GalleryCTA />

        {/* FAQ */}
        <FAQ />

        {/* Footer */}
        <Footer />
      </main>
    </motion.div>
  );
}
