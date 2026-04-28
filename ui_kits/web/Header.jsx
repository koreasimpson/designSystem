// Header.jsx — fixed top nav with backdrop blur
function Header({ route, onNav }) {
  const items = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'writing', label: 'Writing' },
    { id: 'about', label: 'About' },
  ];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 10,
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      background: 'rgba(255,255,255,0.8)',
      borderBottom: '1px solid var(--border-1)',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        padding: '0 24px', height: 60,
        display: 'flex', alignItems: 'center', gap: 24,
      }}>
        <button onClick={() => onNav('home')} style={{
          display: 'flex', alignItems: 'center', gap: 10,
          background: 'none', border: 'none', cursor: 'pointer', padding: 0,
        }}>
          <img src="../../assets/logo.svg" width="24" height="24" alt="" />
          <span style={{ fontWeight: 700, letterSpacing: '-0.01em', fontSize: 16 }}>코리안심슨</span>
        </button>
        <nav style={{ display: 'flex', gap: 4, marginLeft: 'auto' }}>
          {items.map(i => (
            <button key={i.id} onClick={() => onNav(i.id)} style={{
              height: 36, padding: '0 14px', border: 'none', borderRadius: 8,
              background: route === i.id ? 'var(--gray-100)' : 'transparent',
              color: route === i.id ? 'var(--fg-1)' : 'var(--fg-2)',
              fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500,
              cursor: 'pointer', transition: 'all 150ms',
            }}>{i.label}</button>
          ))}
        </nav>
      </div>
    </header>
  );
}

window.Header = Header;
