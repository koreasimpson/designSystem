// Button.jsx — 4 variants matching design system
function Button({ variant = 'primary', children, onClick, disabled, icon, ...rest }) {
  const styles = {
    primary: { background: 'var(--primary-500)', color: '#fff', borderColor: 'transparent' },
    secondary: { background: 'var(--bg-1)', color: 'var(--fg-1)', borderColor: 'var(--border-2)' },
    ghost: { background: 'transparent', color: 'var(--fg-1)', borderColor: 'transparent' },
    danger: { background: 'var(--bg-1)', color: '#EF4444', borderColor: '#FCA5A5' },
  }[variant];
  return (
    <button onClick={onClick} disabled={disabled} {...rest} style={{
      ...styles, height: 44, padding: '0 18px', borderRadius: 12,
      border: '1px solid', display: 'inline-flex', alignItems: 'center', gap: 8,
      fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600,
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1,
      transition: 'all 200ms cubic-bezier(.22,1,.36,1)',
    }}
    onMouseEnter={e => {
      if (disabled) return;
      if (variant === 'primary') e.currentTarget.style.background = 'var(--primary-600)';
      else if (variant === 'secondary' || variant === 'ghost') e.currentTarget.style.background = 'var(--gray-100)';
      else if (variant === 'danger') e.currentTarget.style.background = '#FEF2F2';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.background = styles.background;
    }}>
      {icon && <img src={icon} width="18" height="18" alt="" style={{ filter: variant === 'primary' ? 'invert(1) brightness(2)' : 'none' }} />}
      {children}
    </button>
  );
}

window.Button = Button;
