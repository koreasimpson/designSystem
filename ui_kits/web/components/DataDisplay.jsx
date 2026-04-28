// DataDisplay.jsx — Avatar, Badge, Card, Carousel, Collapse, List, Table, Tag, Tooltip, Statistic, Empty, Tree
const DC = {
  primary: 'var(--primary-500)', primary600: 'var(--primary-600)', primary50: 'var(--primary-50)',
  fg1: 'var(--fg-1)', fg2: 'var(--fg-2)', fg3: 'var(--fg-3)',
  bg1: 'var(--bg-1)', bg2: 'var(--bg-2)',
  border1: 'var(--border-1)', border2: 'var(--border-2)',
};

// ---------- Avatar ----------
function Avatar({ src, name, size=40, color }) {
  const fontSize = Math.round(size * 0.4);
  const initial = (name || '?').slice(0, 1).toUpperCase();
  const bg = color || hash(name);
  if (src) return <img src={src} alt={name} style={{ width: size, height: size, borderRadius: '50%', objectFit: 'cover', display: 'block' }}/>;
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', background: bg, color: '#fff',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'Inter', fontSize, fontWeight: 600, flexShrink: 0,
    }}>{initial}</div>
  );
}
function hash(s='') {
  const palette = ['#F59E0B','#10B981','#6366F1','#EC4899','#06B6D4','#84CC16','#F43F5E'];
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return palette[h % palette.length];
}
function AvatarGroup({ avatars, max=3, size=32 }) {
  const visible = avatars.slice(0, max);
  const rest = avatars.length - max;
  return (
    <div style={{ display: 'inline-flex' }}>
      {visible.map((a, i) => (
        <div key={i} style={{ marginLeft: i === 0 ? 0 : -8, border: '2px solid var(--bg-1)', borderRadius: '50%', display: 'inline-flex' }}>
          <Avatar {...a} size={size}/>
        </div>
      ))}
      {rest > 0 && (
        <div style={{
          marginLeft: -8, width: size, height: size, borderRadius: '50%',
          background: 'var(--gray-100)', color: DC.fg2, border: '2px solid var(--bg-1)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          fontSize: Math.round(size * 0.35), fontWeight: 600, fontFamily: 'Inter',
        }}>+{rest}</div>
      )}
    </div>
  );
}

// ---------- Badge ----------
function Badge({ count, dot, status, children, color }) {
  if (status) {
    const colors = { success: '#10B981', error: '#EF4444', warning: '#F59E0B', info: '#6366F1', default: '#A1A1AA', processing: DC.primary };
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13 }}>
        <span style={{
          width: 8, height: 8, borderRadius: '50%', background: colors[status] || colors.default,
          animation: status === 'processing' ? 'ks-pulse 1.4s ease-in-out infinite' : 'none',
        }}/>
        <style>{`@keyframes ks-pulse { 0%,100% { opacity: 1 } 50% { opacity: 0.4 } }`}</style>
        {children}
      </span>
    );
  }
  return (
    <span style={{ position: 'relative', display: 'inline-flex' }}>
      {children}
      {(count > 0 || dot) && (
        <span style={{
          position: 'absolute', top: -4, right: -4,
          minWidth: dot ? 8 : 18, height: dot ? 8 : 18,
          padding: dot ? 0 : '0 5px', borderRadius: 999,
          background: color || '#EF4444', color: '#fff',
          fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          border: '2px solid var(--bg-1)', boxSizing: 'content-box',
        }}>{!dot && (count > 99 ? '99+' : count)}</span>
      )}
    </span>
  );
}

// ---------- Tag ----------
function Tag({ children, color, closable, onClose }) {
  const palettes = {
    marigold: { bg: '#FFFBEB', fg: '#B45309' },
    success: { bg: '#ECFDF5', fg: '#047857' },
    error: { bg: '#FEF2F2', fg: '#B91C1C' },
    info: { bg: '#EEF2FF', fg: '#4338CA' },
    pink: { bg: '#FDF2F8', fg: '#9D174D' },
    cyan: { bg: '#ECFEFF', fg: '#155E75' },
  };
  const p = palettes[color] || { bg: 'var(--gray-100)', fg: DC.fg2 };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '3px 8px', borderRadius: 6, fontSize: 12, fontWeight: 500,
      background: p.bg, color: p.fg, fontFamily: 'var(--font-sans)',
    }}>
      {children}
      {closable && (
        <button onClick={onClose} style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', display: 'inline-flex', color: 'currentColor' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      )}
    </span>
  );
}

// ---------- Tooltip ----------
function Tooltip({ children, title, placement='top' }) {
  const [show, setShow] = React.useState(false);
  const positions = {
    top: { bottom: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)' },
    bottom: { top: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)' },
    left: { right: 'calc(100% + 8px)', top: '50%', transform: 'translateY(-50%)' },
    right: { left: 'calc(100% + 8px)', top: '50%', transform: 'translateY(-50%)' },
  };
  return (
    <span style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <span style={{
          position: 'absolute', ...positions[placement], zIndex: 100, whiteSpace: 'nowrap',
          padding: '6px 10px', borderRadius: 8, background: 'var(--gray-900)', color: '#fff',
          fontSize: 12, fontWeight: 500, pointerEvents: 'none',
          boxShadow: '0 4px 12px rgba(9,9,11,.1)',
        }}>{title}</span>
      )}
    </span>
  );
}

// ---------- Card ----------
function Card({ title, extra, cover, children, footer, hoverable }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      background: DC.bg1, border: `1px solid ${DC.border1}`, borderRadius: 12, overflow: 'hidden',
      boxShadow: hoverable && hover ? '0 4px 12px rgba(9,9,11,.06)' : 'none',
      transform: hoverable && hover ? 'translateY(-1px)' : 'none',
      transition: 'all 200ms cubic-bezier(.22,1,.36,1)',
    }}>
      {cover && <div style={{ borderBottom: `1px solid ${DC.border1}` }}>{cover}</div>}
      {(title || extra) && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: children ? `1px solid ${DC.border1}` : 'none' }}>
          <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: '-0.01em' }}>{title}</div>
          {extra && <div style={{ fontSize: 13 }}>{extra}</div>}
        </div>
      )}
      {children && <div style={{ padding: 18 }}>{children}</div>}
      {footer && <div style={{ padding: '12px 18px', borderTop: `1px solid ${DC.border1}`, background: DC.bg2 }}>{footer}</div>}
    </div>
  );
}

// ---------- Statistic ----------
function Statistic({ title, value, prefix, suffix, delta }) {
  return (
    <div>
      <div style={{ fontSize: 13, color: DC.fg3, marginBottom: 6 }}>{title}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
        {prefix && <span style={{ fontSize: 18, color: DC.fg2 }}>{prefix}</span>}
        <span style={{ fontFamily: 'Inter', fontFeatureSettings: '"tnum" 1', fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em', color: DC.fg1 }}>{value}</span>
        {suffix && <span style={{ fontSize: 14, color: DC.fg3 }}>{suffix}</span>}
      </div>
      {delta != null && (
        <div style={{ fontSize: 12, color: delta >= 0 ? '#047857' : '#B91C1C', marginTop: 4, fontFamily: 'Inter', fontFeatureSettings: '"tnum" 1' }}>
          {delta >= 0 ? '↑' : '↓'} {Math.abs(delta)}%
        </div>
      )}
    </div>
  );
}

// ---------- Collapse / Accordion ----------
function Collapse({ items, defaultOpen=[] }) {
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = (k) => {
    const next = new Set(open);
    if (next.has(k)) next.delete(k); else next.add(k);
    setOpen(next);
  };
  return (
    <div style={{ border: `1px solid ${DC.border1}`, borderRadius: 12, overflow: 'hidden', background: DC.bg1 }}>
      {items.map((it, i) => {
        const isOpen = open.has(it.key);
        return (
          <div key={it.key} style={{ borderBottom: i === items.length - 1 ? 'none' : `1px solid ${DC.border1}` }}>
            <button onClick={() => toggle(it.key)} style={{
              width: '100%', padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              background: 'transparent', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600, color: DC.fg1, textAlign: 'left',
            }}>
              {it.title}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: DC.fg3, transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }}><path d="m6 9 6 6 6-6"/></svg>
            </button>
            {isOpen && <div style={{ padding: '0 18px 18px', fontSize: 14, color: DC.fg2, lineHeight: 1.6 }}>{it.content}</div>}
          </div>
        );
      })}
    </div>
  );
}

// ---------- List ----------
function List({ items, renderItem, header, footer }) {
  return (
    <div style={{ border: `1px solid ${DC.border1}`, borderRadius: 12, overflow: 'hidden', background: DC.bg1 }}>
      {header && <div style={{ padding: '12px 18px', background: DC.bg2, borderBottom: `1px solid ${DC.border1}`, fontSize: 13, color: DC.fg2, fontWeight: 500 }}>{header}</div>}
      {items.map((it, i) => (
        <div key={i} style={{ padding: '14px 18px', borderBottom: i === items.length - 1 ? 'none' : `1px solid ${DC.border1}` }}>
          {renderItem(it, i)}
        </div>
      ))}
      {footer && <div style={{ padding: '12px 18px', background: DC.bg2, borderTop: `1px solid ${DC.border1}`, fontSize: 13, color: DC.fg3 }}>{footer}</div>}
    </div>
  );
}

// ---------- Table ----------
function Table({ columns, dataSource, sortable }) {
  const [sort, setSort] = React.useState({ key: null, order: null });
  let rows = [...dataSource];
  if (sort.key && sort.order) {
    rows.sort((a, b) => {
      const va = a[sort.key], vb = b[sort.key];
      if (va === vb) return 0;
      const cmp = va > vb ? 1 : -1;
      return sort.order === 'asc' ? cmp : -cmp;
    });
  }
  const onSort = (key) => {
    if (!sortable) return;
    if (sort.key !== key) setSort({ key, order: 'asc' });
    else if (sort.order === 'asc') setSort({ key, order: 'desc' });
    else setSort({ key: null, order: null });
  };
  return (
    <div style={{ border: `1px solid ${DC.border1}`, borderRadius: 12, overflow: 'hidden', background: DC.bg1 }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-sans)' }}>
        <thead>
          <tr style={{ background: DC.bg2 }}>
            {columns.map(c => (
              <th key={c.key} onClick={() => onSort(c.key)} style={{
                padding: '10px 16px', textAlign: c.align || 'left',
                fontSize: 12, fontWeight: 600, color: DC.fg2,
                letterSpacing: '0.04em', textTransform: 'uppercase',
                borderBottom: `1px solid ${DC.border1}`,
                cursor: sortable ? 'pointer' : 'default', userSelect: 'none', whiteSpace: 'nowrap',
              }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  {c.title}
                  {sortable && (
                    <span style={{ fontSize: 9, opacity: sort.key === c.key ? 1 : 0.3, color: sort.key === c.key ? DC.primary600 : 'currentColor' }}>
                      {sort.key === c.key && sort.order === 'desc' ? '▼' : '▲'}
                    </span>
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 1 ? DC.bg2 : 'transparent' }}>
              {columns.map(c => (
                <td key={c.key} style={{
                  padding: '12px 16px', fontSize: 14, color: DC.fg1,
                  borderBottom: i === rows.length - 1 ? 'none' : `1px solid ${DC.border1}`,
                  textAlign: c.align || 'left',
                  fontFamily: c.numeric ? 'Inter' : 'var(--font-sans)',
                  fontFeatureSettings: c.numeric ? '"tnum" 1' : 'normal',
                }}>{c.render ? c.render(row[c.key], row) : row[c.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ---------- Carousel ----------
function Carousel({ items, autoplay=false }) {
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    if (!autoplay) return;
    const t = setInterval(() => setIdx(i => (i + 1) % items.length), 3500);
    return () => clearInterval(t);
  }, [autoplay, items.length]);
  return (
    <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', border: `1px solid ${DC.border1}` }}>
      <div style={{ display: 'flex', width: `${items.length * 100}%`, transform: `translateX(-${idx * (100 / items.length)}%)`, transition: 'transform 400ms cubic-bezier(.22,1,.36,1)' }}>
        {items.map((it, i) => (
          <div key={i} style={{ width: `${100 / items.length}%`, flexShrink: 0, padding: '40px 32px', background: it.bg || DC.bg2, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 180 }}>
            <div style={{ fontSize: 11, color: DC.fg3, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>{it.kicker}</div>
            <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.01em', color: DC.fg1 }}>{it.title}</div>
            <div style={{ fontSize: 14, color: DC.fg2, marginTop: 6 }}>{it.desc}</div>
          </div>
        ))}
      </div>
      <div style={{ position: 'absolute', bottom: 12, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 6 }}>
        {items.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} style={{
            width: i === idx ? 20 : 6, height: 6, borderRadius: 999,
            background: i === idx ? DC.primary : 'var(--gray-300)', border: 'none', padding: 0, cursor: 'pointer',
            transition: 'all 200ms',
          }}/>
        ))}
      </div>
    </div>
  );
}

// ---------- Empty ----------
function Empty({ title='아직 비어 있어요', desc, action }) {
  return (
    <div style={{ padding: '40px 20px', textAlign: 'center' }}>
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={DC.fg3} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto 12px' }}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
      </svg>
      <div style={{ fontSize: 15, fontWeight: 600, color: DC.fg1 }}>{title}</div>
      {desc && <div style={{ fontSize: 13, color: DC.fg3, marginTop: 4 }}>{desc}</div>}
      {action && <div style={{ marginTop: 16 }}>{action}</div>}
    </div>
  );
}

// ---------- Tree ----------
function Tree({ data, defaultExpanded=[] }) {
  const [exp, setExp] = React.useState(new Set(defaultExpanded));
  const [sel, setSel] = React.useState(null);
  const toggle = (k) => {
    const next = new Set(exp);
    if (next.has(k)) next.delete(k); else next.add(k);
    setExp(next);
  };
  const renderNode = (node, depth=0) => (
    <div key={node.key}>
      <button onClick={() => { if (node.children) toggle(node.key); setSel(node.key); }} style={{
        width: '100%', display: 'flex', alignItems: 'center', gap: 6,
        padding: `6px ${8 + depth * 18}px`,
        background: sel === node.key ? DC.primary50 : 'transparent', border: 'none',
        borderRadius: 6, color: sel === node.key ? DC.primary600 : DC.fg1,
        fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: sel === node.key ? 600 : 500,
        cursor: 'pointer', textAlign: 'left',
      }}>
        {node.children ? (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: exp.has(node.key) ? 'rotate(90deg)' : 'none', transition: 'transform 150ms', color: DC.fg3 }}><path d="m9 18 6-6-6-6"/></svg>
        ) : <span style={{ width: 12 }}/>}
        <span style={{ color: node.children ? DC.fg2 : DC.fg3, display: 'inline-flex' }}>
          {node.children ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/></svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          )}
        </span>
        {node.title}
      </button>
      {node.children && exp.has(node.key) && node.children.map(c => renderNode(c, depth + 1))}
    </div>
  );
  return <div style={{ padding: 8, border: `1px solid ${DC.border1}`, borderRadius: 12, background: DC.bg1, minWidth: 240 }}>{data.map(n => renderNode(n))}</div>;
}

Object.assign(window, {
  DAvatar: Avatar, DAvatarGroup: AvatarGroup, DBadge: Badge, DTag: Tag, DTooltip: Tooltip,
  DCard: Card, DStatistic: Statistic, DCollapse: Collapse, DList: List, DTable: Table,
  DCarousel: Carousel, DEmpty: Empty, DTree: Tree,
});
