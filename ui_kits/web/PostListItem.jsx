// PostListItem.jsx
function PostListItem({ title, excerpt, date, readTime }) {
  return (
    <a href="#" style={{
      display: 'block', textDecoration: 'none', color: 'inherit',
      padding: '20px 0', borderBottom: '1px solid var(--border-1)',
    }}
    onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-2)'}
    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
      <div style={{ padding: '0 8px' }}>
        <h3 style={{
          fontSize: 18, fontWeight: 600, letterSpacing: '-0.01em',
          margin: 0,
        }}>{title}</h3>
        <p style={{
          fontSize: 14, lineHeight: 1.6, color: 'var(--fg-2)',
          margin: '6px 0 0',
        }}>{excerpt}</p>
        <div style={{
          fontSize: 12, color: 'var(--fg-3)', marginTop: 10,
          fontFamily: 'Inter', fontFeatureSettings: '"tnum" 1',
        }}>{date} · {readTime}분</div>
      </div>
    </a>
  );
}
window.PostListItem = PostListItem;
