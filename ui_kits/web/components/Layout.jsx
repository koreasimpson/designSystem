// Layout.jsx — Divider, Space, Grid, Flex, Splitter
const LY = {
  fg1: 'var(--fg-1)', fg2: 'var(--fg-2)', fg3: 'var(--fg-3)',
  bg1: 'var(--bg-1)', bg2: 'var(--bg-2)',
  border1: 'var(--border-1)',
};

// ---- Divider ----
function Divider({ vertical, label, align='center', dashed }) {
  const style = dashed
    ? { borderStyle: 'dashed', borderColor: LY.border1 }
    : { borderColor: LY.border1 };
  if (vertical) return (
    <div style={{ display: 'inline-block', width: 1, height: '1em', background: LY.border1, margin: '0 12px', verticalAlign: 'middle' }}/>
  );
  if (label) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '0' }}>
        {align !== 'left' && <div style={{ flex: align === 'center' ? 1 : 'none', width: align === 'right' ? 24 : undefined, height: 1, background: LY.border1 }}/>}
        <span style={{ fontSize: 12, color: LY.fg3, whiteSpace: 'nowrap' }}>{label}</span>
        {align !== 'right' && <div style={{ flex: 1, height: 1, background: LY.border1 }}/>}
      </div>
    );
  }
  return <hr style={{ border: 'none', borderTop: `1px ${dashed ? 'dashed' : 'solid'} ${LY.border1}`, margin: '0' }}/>;
}

// ---- Space ----
function Space({ children, direction='horizontal', size=8, wrap, align='center' }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: direction === 'vertical' ? 'column' : 'row',
      gap: typeof size === 'number' ? size : { xs: 4, sm: 8, md: 12, lg: 16, xl: 24 }[size] || 8,
      flexWrap: wrap ? 'wrap' : 'nowrap',
      alignItems: align,
    }}>
      {children}
    </div>
  );
}

// ---- Grid ----
function Row({ children, gutter=16, align='stretch', justify='flex-start' }) {
  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap',
      margin: `0 -${gutter / 2}px`,
      alignItems: align, justifyContent: justify,
    }}>
      {React.Children.map(children, child =>
        child ? React.cloneElement(child, { _gutter: gutter }) : null
      )}
    </div>
  );
}
function Col({ children, span=12, _gutter=16, offset=0, style }) {
  const pct = (span / 12) * 100;
  const offsetPct = (offset / 12) * 100;
  return (
    <div style={{
      width: `${pct}%`, marginLeft: `${offsetPct}%`,
      padding: `0 ${_gutter / 2}px`, boxSizing: 'border-box',
      ...style,
    }}>
      {children}
    </div>
  );
}

// ---- Flex ----
function Flex({ children, gap=8, align='center', justify='flex-start', wrap, direction='row', style }) {
  return (
    <div style={{
      display: 'flex', flexDirection: direction,
      gap, alignItems: align, justifyContent: justify,
      flexWrap: wrap ? 'wrap' : 'nowrap',
      ...style,
    }}>
      {children}
    </div>
  );
}

// ---- Splitter ----
function Splitter({ left, right, initialSplit=50, min=20, max=80 }) {
  const [split, setSplit] = React.useState(initialSplit);
  const ref = React.useRef(null);
  const dragging = React.useRef(false);

  const onMouseDown = () => { dragging.current = true; };
  React.useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const pct = Math.min(max, Math.max(min, (x / rect.width) * 100));
      setSplit(pct);
    };
    const onUp = () => { dragging.current = false; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); };
  }, [min, max]);

  return (
    <div ref={ref} style={{ display: 'flex', width: '100%', height: '100%', userSelect: 'none' }}>
      <div style={{ width: `${split}%`, overflow: 'auto', minWidth: 0 }}>{left}</div>
      <div
        onMouseDown={onMouseDown}
        style={{
          width: 4, flexShrink: 0, background: LY.border1, cursor: 'col-resize',
          transition: 'background 150ms', position: 'relative',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'var(--primary-400)'}
        onMouseLeave={e => e.currentTarget.style.background = LY.border1}
      />
      <div style={{ flex: 1, overflow: 'auto', minWidth: 0 }}>{right}</div>
    </div>
  );
}

Object.assign(window, { LDivider: Divider, LSpace: Space, LRow: Row, LCol: Col, LFlex: Flex, LSplitter: Splitter });
