// General.jsx — Button (extended), Icon system, Typography
const GN = {
  fg1: 'var(--fg-1)', fg2: 'var(--fg-2)', fg3: 'var(--fg-3)',
  bg1: 'var(--bg-1)', bg2: 'var(--bg-2)',
  border1: 'var(--border-1)', border2: 'var(--border-2)',
  primary: 'var(--primary-500)', primary600: 'var(--primary-600)',
};

// ---- Icon primitives (inline SVG paths, no CDN) ----
const ICON_PATHS = {
  home:        <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
  search:      <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>,
  settings:    <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></>,
  user:        <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
  bell:        <><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></>,
  mail:        <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,
  heart:       <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>,
  star:        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>,
  'arrow-right': <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>,
  check:       <polyline points="20 6 9 17 4 12"/>,
  x:           <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
  plus:        <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
  minus:       <line x1="5" y1="12" x2="19" y2="12"/>,
  edit:        <><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></>,
  trash:       <><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></>,
  download:    <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></>,
  upload:      <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></>,
  share:       <><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></>,
  link:        <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></>,
  copy:        <><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></>,
  eye:         <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>,
  'eye-off':   <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></>,
  calendar:    <><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>,
  clock:       <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
  filter:      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>,
  'sort-asc':  <><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="15" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></>,
  'chevron-down': <polyline points="6 9 12 15 18 9"/>,
  'chevron-right': <polyline points="9 18 15 12 9 6"/>,
  'more-horizontal': <><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></>,
  'more-vertical': <><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></>,
  'log-out':   <><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></>,
  github:      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>,
};

function Icon({ name, size=24, color, strokeWidth=1.75 }) {
  const d = ICON_PATHS[name];
  if (!d) return <span style={{ display: 'inline-block', width: size, height: size, background: 'var(--gray-200)', borderRadius: 4 }}/>;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color || 'currentColor'} strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
      {d}
    </svg>
  );
}

// ---- Button (full-featured) ----
function Btn({
  variant='primary', size='md', children, onClick, disabled,
  loading=false, icon, iconRight, block, shape,
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const sizeMap = {
    xs: { h: 28, px: 10, fs: 12, radius: 8, iconSz: 13 },
    sm: { h: 36, px: 14, fs: 13, radius: 10, iconSz: 15 },
    md: { h: 44, px: 18, fs: 15, radius: 12, iconSz: 17 },
    lg: { h: 52, px: 24, fs: 16, radius: 14, iconSz: 20 },
  };
  const sz = sizeMap[size] || sizeMap.md;

  const variantStyles = {
    primary:   { bg: '#F59E0B', hbg: '#D97706', color: '#fff', border: 'transparent' },
    secondary: { bg: '#fff', hbg: '#F4F4F5', color: 'var(--fg-1)', border: 'var(--border-2)' },
    ghost:     { bg: 'transparent', hbg: '#F4F4F5', color: 'var(--fg-1)', border: 'transparent' },
    danger:    { bg: '#fff', hbg: '#FEF2F2', color: '#EF4444', border: '#FCA5A5' },
    link:      { bg: 'transparent', hbg: 'transparent', color: '#D97706', border: 'transparent' },
  };
  const vs = variantStyles[variant] || variantStyles.primary;

  const isIconOnly = !children && (icon || loading);
  const filterInvert = (variant === 'primary') ? 'brightness(0) invert(1)' : undefined;

  return (
    <button
      onClick={onClick} disabled={disabled || loading}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)} onMouseUp={() => setActive(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        gap: sz.iconSz * 0.4,
        height: sz.h,
        width: isIconOnly ? sz.h : (block ? '100%' : 'auto'),
        padding: isIconOnly ? 0 : `0 ${sz.px}px`,
        borderRadius: shape === 'circle' ? 999 : sz.radius,
        border: `1px solid ${vs.border}`,
        background: hover ? vs.hbg : vs.bg,
        color: vs.color,
        fontFamily: 'var(--font-sans)', fontSize: sz.fs, fontWeight: 600,
        cursor: (disabled || loading) ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transform: active && !disabled ? 'scale(0.98)' : 'none',
        transition: 'all 150ms cubic-bezier(.22,1,.36,1)',
        textDecoration: variant === 'link' ? (hover ? 'underline' : 'none') : 'none',
        userSelect: 'none', whiteSpace: 'nowrap',
      }}>
      {loading
        ? <svg width={sz.iconSz} height={sz.iconSz} viewBox="0 0 24 24" style={{ animation: 'gn-spin .7s linear infinite', flexShrink: 0 }}>
            <style>{`@keyframes gn-spin{to{transform:rotate(360deg)}}`}</style>
            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="42" strokeDashoffset="14" strokeLinecap="round"/>
          </svg>
        : icon && <Icon name={icon} size={sz.iconSz} color={vs.color}/>}
      {children && <span>{children}</span>}
      {iconRight && !loading && <Icon name={iconRight} size={sz.iconSz} color={vs.color}/>}
    </button>
  );
}

// ---- ButtonGroup ----
function ButtonGroup({ children }) {
  return (
    <div style={{ display: 'inline-flex' }}>
      {React.Children.map(children, (child, i) => {
        if (!child) return null;
        const first = i === 0, last = i === React.Children.count(children) - 1;
        return React.cloneElement(child, {
          style: {
            ...(child.props.style || {}),
            borderRadius: first ? '12px 0 0 12px' : last ? '0 12px 12px 0' : 0,
            marginLeft: first ? 0 : -1,
          }
        });
      })}
    </div>
  );
}

// ---- Typography ----
function Typo({ children }) { return children; }

Typo.Display = ({ children, style }) => (
  <div style={{ fontSize: 40, lineHeight: 1.25, fontWeight: 700, letterSpacing: '-0.02em', ...style }}>{children}</div>
);
Typo.H1 = ({ children, style }) => (
  <h1 style={{ fontSize: 32, lineHeight: 1.3, fontWeight: 700, letterSpacing: '-0.02em', margin: 0, ...style }}>{children}</h1>
);
Typo.H2 = ({ children, style }) => (
  <h2 style={{ fontSize: 24, lineHeight: 1.4, fontWeight: 600, letterSpacing: '-0.01em', margin: 0, ...style }}>{children}</h2>
);
Typo.H3 = ({ children, style }) => (
  <h3 style={{ fontSize: 20, lineHeight: 1.45, fontWeight: 600, letterSpacing: '-0.01em', margin: 0, ...style }}>{children}</h3>
);
Typo.Body = ({ children, style }) => (
  <p style={{ fontSize: 16, lineHeight: 1.6, fontWeight: 400, margin: 0, ...style }}>{children}</p>
);
Typo.Small = ({ children, style }) => (
  <span style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--fg-3)', ...style }}>{children}</span>
);
Typo.Code = ({ children, block, style }) => {
  const s = {
    fontFamily: 'var(--font-mono)', fontSize: block ? 13 : '0.9em',
    background: 'var(--gray-100)', color: 'var(--fg-1)',
    borderRadius: block ? 10 : 5,
    padding: block ? '14px 18px' : '2px 6px',
    display: block ? 'block' : 'inline',
    lineHeight: block ? 1.7 : 1.5,
    border: '1px solid var(--border-1)',
    ...style,
  };
  return block ? <pre style={s}>{children}</pre> : <code style={s}>{children}</code>;
};
Typo.Numeric = ({ children, style }) => (
  <span style={{ fontFamily: 'Inter', fontFeatureSettings: '"tnum" 1, "cv11" 1', ...style }}>{children}</span>
);
Typo.Mark = ({ children, color }) => (
  <mark style={{ background: color || 'var(--primary-200)', color: 'var(--primary-800)', borderRadius: 3, padding: '0 3px' }}>{children}</mark>
);

Object.assign(window, { GIcon: Icon, ICON_PATHS, GBtn: Btn, GButtonGroup: ButtonGroup, GTypo: Typo });
