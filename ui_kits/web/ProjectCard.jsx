// ProjectCard.jsx
function ProjectCard({ kicker, title, description, tags, year }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        border: '1px solid var(--border-1)', borderRadius: 12,
        padding: 22, background: 'var(--bg-1)',
        cursor: 'pointer',
        boxShadow: hover ? '0 4px 12px rgba(9,9,11,.06)' : 'none',
        transform: hover ? 'translateY(-1px)' : 'none',
        transition: 'all 200ms cubic-bezier(.22,1,.36,1)',
      }}>
      <div style={{
        fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase',
        color: 'var(--fg-3)',
      }}>{kicker}</div>
      <h3 style={{
        fontSize: 20, fontWeight: 600, letterSpacing: '-0.01em',
        margin: '6px 0 0',
      }}>{title}</h3>
      <p style={{
        fontSize: 14, lineHeight: 1.6, color: 'var(--fg-2)',
        margin: '8px 0 0',
      }}>{description}</p>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        marginTop: 16, justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {tags.map(t => <Tag key={t}>{t}</Tag>)}
        </div>
        <span style={{
          fontSize: 12, color: 'var(--fg-3)',
          fontFamily: 'Inter', fontFeatureSettings: '"tnum" 1',
        }}>{year}</span>
      </div>
    </article>
  );
}
window.ProjectCard = ProjectCard;
