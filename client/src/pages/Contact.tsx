import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CONTACT_PAGE } from '@/lib/content';

/**
 * Contact Page
 * Contact form and gallery information
 * Design: Dark green theme with smooth animations
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

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
            {CONTACT_PAGE.title}
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
            {CONTACT_PAGE.description}
          </p>
        </motion.section>

        {/* Contact Info & Form */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            padding: '60px 28px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '60px',
          }}
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '24px',
                fontWeight: '400',
                color: 'var(--cream)',
                marginBottom: '32px',
              }}
            >
              Contact Information
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {/* Email */}
              <div>
                <h3
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'var(--cream-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '8px',
                  }}
                >
                  Email
                </h3>
                <a
                  href={`mailto:${CONTACT_PAGE.email}`}
                  style={{
                    fontSize: '16px',
                    color: 'var(--cream)',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cream-muted)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--cream)')}
                >
                  {CONTACT_PAGE.email}
                </a>
              </div>

              {/* Phone */}
              <div>
                <h3
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'var(--cream-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '8px',
                  }}
                >
                  Phone
                </h3>
                <p
                  style={{
                    fontSize: '16px',
                    color: 'var(--cream)',
                  }}
                >
                  {CONTACT_PAGE.phone}
                </p>
              </div>

              {/* Address */}
              <div>
                <h3
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'var(--cream-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '8px',
                  }}
                >
                  Address
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--cream)',
                    lineHeight: '1.8',
                  }}
                >
                  {CONTACT_PAGE.address}
                </p>
              </div>

              {/* Hours */}
              <div>
                <h3
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'var(--cream-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '8px',
                  }}
                >
                  Hours
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--cream)',
                    lineHeight: '1.8',
                  }}
                >
                  Open by Appointment
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '24px',
                fontWeight: '400',
                color: 'var(--cream)',
                marginBottom: '32px',
              }}
            >
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <label
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'var(--cream-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '8px',
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(237, 229, 212, 0.03)',
                    border: '1px solid var(--border)',
                    borderRadius: '4px',
                    color: 'var(--cream)',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--cream)';
                    e.currentTarget.style.background = 'rgba(237, 229, 212, 0.05)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.background = 'rgba(237, 229, 212, 0.03)';
                  }}
                />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <label
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'var(--cream-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '8px',
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(237, 229, 212, 0.03)',
                    border: '1px solid var(--border)',
                    borderRadius: '4px',
                    color: 'var(--cream)',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--cream)';
                    e.currentTarget.style.background = 'rgba(237, 229, 212, 0.05)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.background = 'rgba(237, 229, 212, 0.03)';
                  }}
                />
              </motion.div>

              {/* Subject */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'var(--cream-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '8px',
                  }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(237, 229, 212, 0.03)',
                    border: '1px solid var(--border)',
                    borderRadius: '4px',
                    color: 'var(--cream)',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--cream)';
                    e.currentTarget.style.background = 'rgba(237, 229, 212, 0.05)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.background = 'rgba(237, 229, 212, 0.03)';
                  }}
                />
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <label
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'var(--cream-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '8px',
                  }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(237, 229, 212, 0.03)',
                    border: '1px solid var(--border)',
                    borderRadius: '4px',
                    color: 'var(--cream)',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--cream)';
                    e.currentTarget.style.background = 'rgba(237, 229, 212, 0.05)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.background = 'rgba(237, 229, 212, 0.03)';
                  }}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '14px 32px',
                  background: submitted ? 'rgba(139, 115, 85, 0.5)' : 'rgba(237, 229, 212, 0.1)',
                  border: '1px solid var(--cream)',
                  color: 'var(--cream)',
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  borderRadius: '2px',
                  cursor: submitted ? 'default' : 'pointer',
                  transition: 'all 0.3s ease',
                  marginTop: '8px',
                }}
                disabled={submitted}
              >
                {submitted ? '✓ Message Sent' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </motion.section>

        <Footer />
      </main>
    </div>
  );
}
