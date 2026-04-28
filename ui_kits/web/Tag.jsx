// Tag.jsx
function Tag({ children, selected }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', height: 26,
      padding: '0 12px', borderRadius: 999, fontSize: 12, fontWeight: 500,
      border: '1px solid',
      borderColor: selected ? 'var(--gray-900)' : 'var(--border-2)',
      background: selected ? 'var(--gray-900)' : 'var(--bg-1)',
      color: selected ? '#fff' : 'var(--fg-2)',
      fontFamily: 'var(--font-sans)',
    }}>{children}</span>
  );
}
window.Tag = Tag;
