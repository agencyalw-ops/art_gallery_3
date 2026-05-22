import { FOOTER_CONTENT } from '@/lib/content';

/**
 * Footer Component
 * Premium footer with location, socials, and branding
 * Design: Minimal layout with serif typography
 */
export default function Footer() {
  return (
    <footer
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '28px 28px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTop: '1px solid var(--border)',
        flexWrap: 'wrap',
        gap: '20px',
      }}
    >
      {/* Left: Location */}
      <div>
        <h4
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '16px',
            fontWeight: '300',
            color: 'var(--cream2)',
            marginBottom: '4px',
          }}
        >
          {FOOTER_CONTENT.city}
        </h4>
        <p
          style={{
            fontSize: '10px',
            color: 'var(--cream-muted)',
            lineHeight: '1.6',
            maxWidth: '180px',
            whiteSpace: 'pre-line',
          }}
        >
          {FOOTER_CONTENT.address}
        </p>
      </div>

      {/* Center: Socials */}
      <div style={{ display: 'flex', gap: '8px' }}>
        {FOOTER_CONTENT.socials.map((social) => (
          <a
            key={social.label}
            href={social.url}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '9px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--cream-muted)',
              transition: 'all 0.2s',
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
            {social.label}
          </a>
        ))}
      </div>

      {/* Right: Brand */}
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '11px',
          fontWeight: '300',
          fontStyle: 'italic',
          color: 'var(--cream-muted)',
        }}
      >
        {FOOTER_CONTENT.brand}
      </div>
    </footer>
  );
}
