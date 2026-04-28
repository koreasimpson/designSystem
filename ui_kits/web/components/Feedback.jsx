// Feedback.jsx — Modal, Drawer, Alert, Message, Notification, Progress, Skeleton, Result, Spin
const FB = {
  primary: 'var(--primary-500)', primary600: 'var(--primary-600)', primary50: 'var(--primary-50)',
  fg1: 'var(--fg-1)', fg2: 'var(--fg-2)', fg3: 'var(--fg-3)',
  bg1: 'var(--bg-1)', bg2: 'var(--bg-2)',
  border1: 'var(--border-1)',
};

// ---------- Spin ----------
function Spin({ size=24, color }) {
  const c = color || FB.primary;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ animation: 'fb-spin 0.7s linear infinite', display: 'inline-block' }}>
      <style>{`@keyframes fb-spin { to { transform: rotate(360deg) } }`}</style>
      <circle cx="12" cy="12" r="9" fill="none" stroke={c} strokeWidth="2.5" strokeDasharray="42" strokeDashoffset="14" strokeLinecap="round"/>
    </svg>
  );
}

// ---------- Skeleton ----------
function Skeleton({ width='100%', height=16, radius=6, animate=true }) {
  return (
    <div style={{
      width, height, borderRadius: radius,
      background: 'linear-gradient(90deg, var(--gray-100) 25%, var(--gray-200) 50%, var(--gray-100) 75%)',
      backgroundSize: '200% 100%',
      animation: animate ? 'fb-shimmer 1.5s ease-in-out infinite' : 'none',
    }}>
      <style>{`@keyframes fb-shimmer { 0% { background-position: 200% 0 } 100% { background-position: -200% 0 } }`}</style>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div style={{ border: `1px solid ${FB.border1}`, borderRadius: 12, padding: 18, background: FB.bg1, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 4 }}>
        <Skeleton width={40} height={40} radius={999}/>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Skeleton width="60%" height={14}/>
          <Skeleton width="40%" height={12}/>
        </div>
      </div>
      <Skeleton width="100%" height={12}/>
      <Skeleton width="90%" height={12}/>
      <Skeleton width="70%" height={12}/>
    </div>
  );
}

// ---------- Progress ----------
function Progress({ value=0, status, size='md', showInfo=true }) {
  const colors = { default: FB.primary, success: '#10B981', error: '#EF4444', warning: '#F59E0B' };
  const color = colors[status] || colors.default;
  const h = size === 'sm' ? 4 : size === 'lg' ? 10 : 6;
  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ flex: 1, background: 'var(--gray-100)', borderRadius: 999, overflow: 'hidden', height: h }}>
          <div style={{ width: `${Math.min(100, Math.max(0, value))}%`, height: '100%', background: color, borderRadius: 999, transition: 'width 400ms cubic-bezier(.22,1,.36,1)' }}/>
        </div>
        {showInfo && (
          <span style={{ fontFamily: 'Inter', fontSize: 12, color: FB.fg3, fontFeatureSettings: '"tnum" 1', minWidth: 32, textAlign: 'right' }}>
            {status === 'success' ? '✓' : status === 'error' ? '✕' : `${value}%`}
          </span>
        )}
      </div>
    </div>
  );
}

function CircleProgress({ value=0, size=72, status }) {
  const colors = { default: FB.primary, success: '#10B981', error: '#EF4444' };
  const color = colors[status] || colors.default;
  const r = 28, c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <svg width={size} height={size} viewBox="0 0 72 72">
      <circle cx="36" cy="36" r={r} fill="none" stroke="var(--gray-100)" strokeWidth="6"/>
      <circle cx="36" cy="36" r={r} fill="none" stroke={color} strokeWidth="6"
        strokeDasharray={c} strokeDashoffset={offset} strokeLinecap="round"
        transform="rotate(-90 36 36)" style={{ transition: 'stroke-dashoffset 400ms cubic-bezier(.22,1,.36,1)' }}/>
      <text x="36" y="41" textAnchor="middle" fontFamily="Inter" fontSize="13" fontWeight="700" fill={FB.fg1}>{value}%</text>
    </svg>
  );
}

// ---------- Alert ----------
function Alert({ type='info', title, description, closable, onClose }) {
  const [visible, setVisible] = React.useState(true);
  if (!visible) return null;
  const configs = {
    success: { bg: '#ECFDF5', border: '#BBF7D0', icon: '#10B981', fg: '#047857', },
    warning: { bg: '#FFFBEB', border: '#FDE68A', icon: '#F59E0B', fg: '#92400E' },
    error:   { bg: '#FEF2F2', border: '#FECACA', icon: '#EF4444', fg: '#B91C1C' },
    info:    { bg: '#EEF2FF', border: '#C7D2FE', icon: '#6366F1', fg: '#3730A3' },
  };
  const cfg = configs[type];
  const icons = {
    success: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>,
    warning: <><path d="m10.29 3.86-8.26 14.31A1 1 0 0 0 2.94 20h18.12a1 1 0 0 0 .87-1.5L13.73 4.14a1 1 0 0 0-1.74 0v-.28Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></>,
    error:   <><circle cx="12" cy="12" r="10"/><line x1="15" x2="9" y1="9" y2="15"/><line x1="9" x2="15" y1="9" y2="15"/></>,
    info:    <><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></>,
  };
  return (
    <div style={{ background: cfg.bg, border: `1px solid ${cfg.border}`, borderRadius: 12, padding: '12px 16px', display: 'flex', gap: 10, alignItems: description ? 'flex-start' : 'center' }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={cfg.icon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: description ? 1 : 0 }}>{icons[type]}</svg>
      <div style={{ flex: 1 }}>
        {title && <div style={{ fontSize: 14, fontWeight: 600, color: cfg.fg }}>{title}</div>}
        {description && <div style={{ fontSize: 13, color: cfg.fg, marginTop: 2, lineHeight: 1.5, opacity: 0.85 }}>{description}</div>}
      </div>
      {closable && (
        <button onClick={() => { setVisible(false); onClose?.(); }} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: cfg.fg, opacity: 0.6, display: 'flex', padding: 2 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      )}
    </div>
  );
}

// ---------- Message (global toast-style) ----------
function useMessage() {
  const [msgs, setMsgs] = React.useState([]);
  const show = (content, type='info', duration=2800) => {
    const id = Date.now();
    setMsgs(m => [...m, { id, content, type }]);
    setTimeout(() => setMsgs(m => m.filter(x => x.id !== id)), duration);
  };
  const api = {
    success: (c) => show(c, 'success'),
    error: (c) => show(c, 'error'),
    warning: (c) => show(c, 'warning'),
    info: (c) => show(c, 'info'),
    loading: (c) => show(c, 'loading'),
  };
  const colors = { success: '#10B981', error: '#EF4444', warning: '#F59E0B', info: '#6366F1', loading: FB.primary };
  const MessageContainer = () => (
    <div style={{ position: 'fixed', top: 16, left: '50%', transform: 'translateX(-50%)', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, pointerEvents: 'none' }}>
      {msgs.map(msg => (
        <div key={msg.id} style={{
          background: 'var(--gray-900)', color: '#fff', borderRadius: 10,
          padding: '10px 16px', fontSize: 13, fontWeight: 500,
          boxShadow: '0 4px 12px rgba(9,9,11,.15)',
          display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap',
          animation: 'fb-fadein 150ms ease-out',
        }}>
          <style>{`@keyframes fb-fadein { from { opacity:0; transform: translateY(-6px) } to { opacity:1; transform: none } }`}</style>
          {msg.type === 'loading'
            ? <Spin size={14} color="#fff"/>
            : <span style={{ color: colors[msg.type], display: 'inline-flex' }}>●</span>}
          {msg.content}
        </div>
      ))}
    </div>
  );
  return [api, MessageContainer];
}

// ---------- Notification ----------
function useNotification() {
  const [notes, setNotes] = React.useState([]);
  const show = (opts) => {
    const id = Date.now();
    setNotes(n => [...n, { id, ...opts }]);
    setTimeout(() => setNotes(n => n.filter(x => x.id !== id)), opts.duration || 4000);
  };
  const close = (id) => setNotes(n => n.filter(x => x.id !== id));
  const configs = { success: '#10B981', error: '#EF4444', warning: '#F59E0B', info: '#6366F1' };
  const NotificationContainer = () => (
    <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 9999, display: 'flex', flexDirection: 'column', gap: 8, width: 320 }}>
      {notes.map(n => (
        <div key={n.id} style={{
          background: FB.bg1, border: `1px solid ${FB.border1}`, borderRadius: 12, padding: 16,
          boxShadow: '0 4px 12px rgba(9,9,11,.08)',
          animation: 'fb-slidein 200ms cubic-bezier(.22,1,.36,1)',
        }}>
          <style>{`@keyframes fb-slidein { from { opacity:0; transform: translateX(12px) } to { opacity:1; transform:none } }`}</style>
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            {n.type && <span style={{ color: configs[n.type], marginTop: 1, fontSize: 16 }}>●</span>}
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: FB.fg1 }}>{n.title}</div>
              {n.description && <div style={{ fontSize: 13, color: FB.fg2, marginTop: 4, lineHeight: 1.5 }}>{n.description}</div>}
            </div>
            <button onClick={() => close(n.id)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: FB.fg3, display: 'flex', padding: 2 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
  return [show, NotificationContainer];
}

// ---------- Modal ----------
function Modal({ open, onClose, title, children, footer, width=480, danger }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'rgba(9,9,11,0.45)', backdropFilter: 'blur(4px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={{
        background: FB.bg1, borderRadius: 16, width, maxWidth: 'calc(100vw - 32px)',
        boxShadow: '0 8px 32px rgba(9,9,11,.12)',
        animation: 'fb-scalein 200ms cubic-bezier(.22,1,.36,1)',
      }}>
        <style>{`@keyframes fb-scalein { from { opacity:0; transform:scale(.96) } to { opacity:1; transform:none } }`}</style>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px', borderBottom: `1px solid ${FB.border1}` }}>
          <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.01em', color: danger ? '#EF4444' : FB.fg1 }}>{title}</div>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: FB.fg3, display: 'flex' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
        <div style={{ padding: 20, fontSize: 14, lineHeight: 1.6, color: FB.fg2 }}>{children}</div>
        {footer && <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, padding: '14px 20px', borderTop: `1px solid ${FB.border1}` }}>{footer}</div>}
      </div>
    </div>
  );
}

// ---------- Drawer ----------
function Drawer({ open, onClose, title, children, placement='right', width=360 }) {
  const placements = {
    right:  { top: 0, right: 0, bottom: 0, width, transform: open ? 'none' : 'translateX(100%)' },
    left:   { top: 0, left: 0, bottom: 0, width, transform: open ? 'none' : 'translateX(-100%)' },
    bottom: { left: 0, right: 0, bottom: 0, height: 360, transform: open ? 'none' : 'translateY(100%)' },
  };
  return (
    <>
      {open && (
        <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 999, background: 'rgba(9,9,11,0.35)', backdropFilter: 'blur(2px)', animation: 'fb-fadein 200ms' }}/>
      )}
      <div style={{
        position: 'fixed', zIndex: 1000, background: FB.bg1,
        boxShadow: '-4px 0 24px rgba(9,9,11,.08)',
        transition: 'transform 300ms cubic-bezier(.22,1,.36,1)',
        display: 'flex', flexDirection: 'column',
        ...placements[placement],
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px', borderBottom: `1px solid ${FB.border1}` }}>
          <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.01em' }}>{title}</div>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: FB.fg3, display: 'flex' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
        <div style={{ flex: 1, padding: 20, overflowY: 'auto', fontSize: 14, lineHeight: 1.6, color: FB.fg2 }}>{children}</div>
      </div>
    </>
  );
}

// ---------- Result ----------
function Result({ status='success', title, description, extra }) {
  const configs = {
    success: { icon: '#10B981', bg: '#ECFDF5', d: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></> },
    error:   { icon: '#EF4444', bg: '#FEF2F2', d: <><circle cx="12" cy="12" r="10"/><line x1="15" x2="9" y1="9" y2="15"/><line x1="9" x2="15" y1="9" y2="15"/></> },
    warning: { icon: '#F59E0B', bg: '#FFFBEB', d: <><path d="m10.29 3.86-8.26 14.31A1 1 0 0 0 2.94 20h18.12a1 1 0 0 0 .87-1.5L13.73 4.14a1 1 0 0 0-1.74 0v-.28Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></> },
    info:    { icon: '#6366F1', bg: '#EEF2FF', d: <><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></> },
  };
  const cfg = configs[status];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '32px 24px', textAlign: 'center' }}>
      <div style={{ width: 72, height: 72, borderRadius: '50%', background: cfg.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={cfg.icon} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">{cfg.d}</svg>
      </div>
      <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.01em', color: FB.fg1 }}>{title}</div>
      {description && <div style={{ fontSize: 14, color: FB.fg2, marginTop: 8, maxWidth: 320, lineHeight: 1.6 }}>{description}</div>}
      {extra && <div style={{ marginTop: 20, display: 'flex', gap: 8 }}>{extra}</div>}
    </div>
  );
}

Object.assign(window, {
  FSpin: Spin, FSkeleton: Skeleton, FSkeletonCard: SkeletonCard,
  FProgress: Progress, FCircleProgress: CircleProgress,
  FAlert: Alert, FModal: Modal, FDrawer: Drawer, FResult: Result,
  useMessage, useNotification,
});
