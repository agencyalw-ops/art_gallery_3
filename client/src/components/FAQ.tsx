import { useState } from 'react';
import { FAQ_CONTENT } from '@/lib/content';

/**
 * FAQ Component
 * Accordion-style frequently asked questions
 * Design: Minimal expandable items with smooth animations
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 28px 60px',
        borderTop: '1px solid var(--border)',
      }}
    >
      {FAQ_CONTENT.map((item, index) => (
        <div
          key={index}
          style={{
            borderBottom: '1px solid var(--border)',
            overflow: 'hidden',
          }}
        >
          {/* Question */}
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '20px 0',
              cursor: 'pointer',
              gap: '16px',
              width: '100%',
              transition: 'color 0.2s',
              color: 'var(--cream)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cream2)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--cream)')}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(18px, 3vw, 26px)',
                fontWeight: '300',
                color: 'inherit',
                textAlign: 'left',
              }}
            >
              {item.question}
            </h3>
            <span
              style={{
                fontSize: '18px',
                color: 'var(--cream-muted)',
                transition: 'transform 0.3s, color 0.2s',
                flexShrink: 0,
                transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            >
              ↓
            </span>
          </button>

          {/* Answer */}
          <div
            style={{
              maxHeight: openIndex === index ? '200px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.4s ease, padding 0.3s',
              paddingBottom: openIndex === index ? '20px' : '0',
            }}
          >
            <p
              style={{
                fontSize: '12px',
                color: 'var(--cream-muted)',
                lineHeight: '1.75',
                maxWidth: '500px',
              }}
            >
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
