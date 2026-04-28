// Navigation.jsx — Anchor, Breadcrumb, Dropdown, Menu, Pagination, Steps, Tabs
const NC = {
  primary: 'var(--primary-500)', primary600: 'var(--primary-600)', primary50: 'var(--primary-50)',
  fg1: 'var(--fg-1)', fg2: 'var(--fg-2)', fg3: 'var(--fg-3)',
  bg1: 'var(--bg-1)', bg2: 'var(--bg-2)',
  border1: 'var(--border-1)', border2: 'var(--border-2)',
  ring: '0 0 0 3px rgba(245,158,11,.25)',
};

// ---------- Tabs ----------
function Tabs({ value, onChange, items, variant = 'line' }) {
  const isLine = variant === 'line';
  return (
    <div>
      <div style={{
        display: 'flex', gap: isLine ? 4 : 6,
        borderBottom: isLine ? `1px solid ${NC.border1}` : 'none',
        padding: isLine ? 0 : 3,
        background: isLine ? 'transparent' : NC.bg2,
        border: isLine ? 'none' : `1px solid ${NC.border1}`,
        borderRadius: isLine ? 0 : 10, width: isLine ? 'auto' : 'fit-content',
      }}>
        {items.map(it => {
          const active = value === it.key;
          return (
            <button key={it.key} onClick={() => onChange?.(it.key)} style={{
              position: 'relative', padding: isLine ? '10px 14px' : '7px 14px',
              border: 'none', background: isLine ? 'transparent' : (active ? NC.bg1 : 'transparent'),
              color: active ? NC.fg1 : NC.fg2,
              fontFamily: 'var(--font-sans)', fontSize: 14,
              fontWeight: active ? 600 : 500, cursor: 'pointer',
              borderRadius: isLine ? 0 : 7,
              boxShadow: !isLine && active ? '0 1px 2px rgba(9,9,11,.06)' : 'none',
              transition: 'all 150ms',
            }}>
              {it.label}
              {isLine && active && (
                <span style={{ position: 'absolute', left: 0, right: 0, bottom: -1, height: 2, background: NC.primary, borderRadius: 999 }}/>
              )}
            </button>
          );
        })}
      </div>
      <div style={{ padding: '20px 4px', fontSize: 14, color: NC.fg2 }}>
        {items.find(i => i.key === value)?.content}
      </div>
    </div>
  );
}

// ---------- Steps ----------
function Steps({ current, items, direction = 'horizontal' }) {
  if (direction === 'vertical') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {items.map((it, i) => {
          const done = i < current, active = i === current;
          return (
            <div key={i} style={{ display: 'flex', gap: 14, paddingBottom: i === items.length - 1 ? 0 : 20, position: 'relative' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: done ? NC.primary : active ? NC.bg1 : NC.bg1,
                  border: `1.5px solid ${done || active ? NC.primary : NC.border2}`,
                  color: done ? '#fff' : active ? NC.primary600 : NC.fg3,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 600, fontFamily: 'Inter', flexShrink: 0,
                }}>
                  {done ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg> : i + 1}
                </div>
                {i < items.length - 1 && (
                  <div style={{ width: 1.5, flex: 1, background: done ? NC.primary : NC.border1, marginTop: 4, minHeight: 24 }}/>
                )}
              </div>
              <div style={{ paddingTop: 3, paddingBottom: 8 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: active || done ? NC.fg1 : NC.fg3 }}>{it.title}</div>
                {it.desc && <div style={{ fontSize: 12, color: NC.fg3, marginTop: 2 }}>{it.desc}</div>}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0, width: '100%' }}>
      {items.map((it, i) => {
        const done = i < current, active = i === current;
        return (
          <React.Fragment key={i}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, flex: 'none', minWidth: 80 }}>
              <div style={{
                width: 28, height: 28, borderRadius: '50%',
                background: done ? NC.primary : NC.bg1,
                border: `1.5px solid ${done || active ? NC.primary : NC.border2}`,
                color: done ? '#fff' : active ? NC.primary600 : NC.fg3,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, fontWeight: 600, fontFamily: 'Inter',
              }}>
                {done ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg> : i + 1}
              </div>
              <div style={{ fontSize: 13, fontWeight: active || done ? 600 : 500, color: active || done ? NC.fg1 : NC.fg3, textAlign: 'center' }}>{it.title}</div>
            </div>
            {i < items.length - 1 && (
              <div style={{ flex: 1, height: 1.5, background: done ? NC.primary : NC.border1, marginTop: 14, minWidth: 30 }}/>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// ---------- Pagination ----------
function Pagination({ current, total, pageSize = 10, onChange }) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const pages = [];
  const add = (p) => pages.push(p);
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) add(i);
  } else {
    add(1);
    if (current > 3) add('…');
    const start = Math.max(2, current - 1), end = Math.min(totalPages - 1, current + 1);
    for (let i = start; i <= end; i++) add(i);
    if (current < totalPages - 2) add('…');
    add(totalPages);
  }
  const btn = (active, disabled) => ({
    minWidth: 36, height: 36, padding: '0 10px',
    border: `1px solid ${active ? NC.primary : NC.border2}`,
    borderRadius: 10, background: active ? NC.primary : NC.bg1,
    color: active ? '#fff' : disabled ? NC.fg3 : NC.fg1,
    fontFamily: 'Inter', fontFeatureSettings: '"tnum" 1', fontSize: 13, fontWeight: active ? 600 : 500,
    cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
    transition: 'all 150ms', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  });
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
      <button disabled={current === 1} onClick={() => onChange?.(current - 1)} style={btn(false, current === 1)}>‹</button>
      {pages.map((p, i) => p === '…' ?
        <span key={i} style={{ color: NC.fg3, padding: '0 4px' }}>…</span> :
        <button key={i} onClick={() => onChange?.(p)} style={btn(p === current, false)}>{p}</button>
      )}
      <button disabled={current === totalPages} onClick={() => onChange?.(current + 1)} style={btn(false, current === totalPages)}>›</button>
      <span style={{ marginLeft: 12, fontSize: 13, color: NC.fg3, fontFamily: 'Inter', fontFeatureSettings: '"tnum" 1' }}>
        총 {total}개 중 {(current - 1) * pageSize + 1}–{Math.min(current * pageSize, total)}
      </span>
    </div>
  );
}

// ---------- Breadcrumb ----------
function Breadcrumb({ items }) {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontFamily: 'var(--font-sans)' }}>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span style={{ color: NC.fg3 }}>/</span>}
          {i === items.length - 1 ? (
            <span style={{ color: NC.fg1, fontWeight: 500 }}>{it.label}</span>
          ) : (
            <a href="#" onClick={e => e.preventDefault()} style={{ color: NC.fg2, textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.color = NC.primary600}
              onMouseLeave={e => e.currentTarget.style.color = NC.fg2}>{it.label}</a>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

// ---------- Dropdown ----------
function Dropdown({ trigger, items, onSelect }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
      <button onClick={() => setOpen(!open)} style={{
        height: 40, padding: '0 14px', display: 'inline-flex', alignItems: 'center', gap: 8,
        background: NC.bg1, color: NC.fg1, border: `1px solid ${NC.border2}`, borderRadius: 10,
        fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, cursor: 'pointer',
      }}>
        {trigger}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: NC.fg3, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }}><path d="m6 9 6 6 6-6"/></svg>
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 4px)', left: 0, zIndex: 10, minWidth: 180,
          background: NC.bg1, border: `1px solid ${NC.border1}`, borderRadius: 12,
          boxShadow: '0 4px 12px rgba(9,9,11,.06)', padding: 4,
        }}>
          {items.map((it, i) => it.divider ? (
            <div key={i} style={{ height: 1, background: NC.border1, margin: '4px 0' }}/>
          ) : (
            <button key={i} onClick={() => { onSelect?.(it.key); setOpen(false); }}
              onMouseEnter={e => e.currentTarget.style.background = NC.bg2}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              disabled={it.disabled}
              style={{
                width: '100%', padding: '9px 12px', textAlign: 'left',
                background: 'transparent', border: 'none', borderRadius: 8,
                fontFamily: 'var(--font-sans)', fontSize: 14,
                color: it.danger ? '#EF4444' : it.disabled ? NC.fg3 : NC.fg1,
                cursor: it.disabled ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
              {it.icon && <span style={{ display: 'inline-flex', color: it.danger ? '#EF4444' : NC.fg2 }}>{it.icon}</span>}
              {it.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ---------- Menu (sidebar, with submenus) ----------
function Menu({ value, onChange, items }) {
  const [openKeys, setOpenKeys] = React.useState({});
  const toggle = (k) => setOpenKeys({ ...openKeys, [k]: !openKeys[k] });

  const renderItem = (it, depth = 0) => {
    if (it.children) {
      const open = !!openKeys[it.key];
      return (
        <div key={it.key}>
          <button onClick={() => toggle(it.key)} style={{
            width: '100%', display: 'flex', alignItems: 'center', gap: 10,
            padding: `9px ${12 + depth * 16}px`, background: 'transparent', border: 'none',
            borderRadius: 8, color: NC.fg1, fontFamily: 'var(--font-sans)',
            fontSize: 14, fontWeight: 500, cursor: 'pointer',
          }}
          onMouseEnter={e => e.currentTarget.style.background = NC.bg2}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
            {it.icon && <span style={{ display: 'inline-flex', color: NC.fg2 }}>{it.icon}</span>}
            <span style={{ flex: 1, textAlign: 'left' }}>{it.label}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: NC.fg3, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }}><path d="m6 9 6 6 6-6"/></svg>
          </button>
          {open && <div>{it.children.map(c => renderItem(c, depth + 1))}</div>}
        </div>
      );
    }
    const active = value === it.key;
    return (
      <button key={it.key} onClick={() => onChange?.(it.key)} style={{
        width: '100%', display: 'flex', alignItems: 'center', gap: 10,
        padding: `9px ${12 + depth * 16}px`,
        background: active ? NC.primary50 : 'transparent', border: 'none',
        borderRadius: 8, color: active ? NC.primary600 : NC.fg1,
        fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: active ? 600 : 500,
        cursor: 'pointer', textAlign: 'left', position: 'relative',
      }}
      onMouseEnter={e => { if (!active) e.currentTarget.style.background = NC.bg2; }}
      onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent'; }}>
        {it.icon && <span style={{ display: 'inline-flex', color: active ? NC.primary600 : NC.fg2 }}>{it.icon}</span>}
        <span style={{ flex: 1 }}>{it.label}</span>
        {it.badge && (
          <span style={{ fontSize: 11, padding: '1px 7px', borderRadius: 999, background: it.badgeColor || NC.primary, color: '#fff', fontWeight: 600 }}>{it.badge}</span>
        )}
      </button>
    );
  };

  return (
    <nav style={{
      width: 240, padding: 8, background: NC.bg1,
      border: `1px solid ${NC.border1}`, borderRadius: 12,
      display: 'flex', flexDirection: 'column', gap: 2,
    }}>
      {items.map(it => renderItem(it))}
    </nav>
  );
}

// ---------- Anchor (in-page nav) ----------
function Anchor({ items, active, onChange }) {
  return (
    <nav style={{ display: 'flex', flexDirection: 'column', gap: 2, borderLeft: `1.5px solid ${NC.border1}`, paddingLeft: 0 }}>
      {items.map(it => {
        const isActive = active === it.key;
        return (
          <a key={it.key} href={`#${it.key}`} onClick={(e) => { e.preventDefault(); onChange?.(it.key); }}
            style={{
              padding: '6px 14px', fontSize: 13, textDecoration: 'none',
              color: isActive ? NC.primary600 : NC.fg2,
              fontWeight: isActive ? 600 : 500,
              borderLeft: `2px solid ${isActive ? NC.primary : 'transparent'}`,
              marginLeft: -1.5, transition: 'all 150ms',
            }}>
            {it.label}
          </a>
        );
      })}
    </nav>
  );
}

Object.assign(window, {
  KsTabs: Tabs, KsSteps: Steps, KsPagination: Pagination,
  KsBreadcrumb: Breadcrumb, KsDropdown: Dropdown, KsMenu: Menu, KsAnchor: Anchor,
});
