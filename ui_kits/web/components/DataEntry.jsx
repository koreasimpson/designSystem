// DataEntry.jsx — all data-entry components, restyled for 코리안심슨

const C = {
  primary: 'var(--primary-500)',
  primaryHover: 'var(--primary-600)',
  fg1: 'var(--fg-1)', fg2: 'var(--fg-2)', fg3: 'var(--fg-3)', fg4: 'var(--fg-4)',
  bg1: 'var(--bg-1)', bg2: 'var(--bg-2)', bg3: 'var(--bg-3)',
  border1: 'var(--border-1)', border2: 'var(--border-2)',
  error: '#EF4444', success: '#10B981',
  ring: '0 0 0 3px rgba(245,158,11,.25)',
};

// ---------- Input ----------
function Input({ value, onChange, placeholder, disabled, error, prefix, suffix, type='text', size='md' }) {
  const [focus, setFocus] = React.useState(false);
  const heights = { sm: 36, md: 44, lg: 52 };
  const fontSizes = { sm: 13, md: 15, lg: 16 };
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8,
      height: heights[size], padding: '0 14px',
      background: disabled ? C.bg2 : C.bg1,
      border: `1px solid ${error ? C.error : focus ? C.primary : C.border2}`,
      borderRadius: 12,
      boxShadow: focus && !error ? C.ring : error && focus ? '0 0 0 3px rgba(239,68,68,.18)' : 'none',
      transition: 'all 150ms', opacity: disabled ? 0.6 : 1,
    }}>
      {prefix && <span style={{ color: C.fg3, display: 'inline-flex' }}>{prefix}</span>}
      <input type={type} value={value ?? ''} onChange={e => onChange?.(e.target.value)} placeholder={placeholder} disabled={disabled}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          flex: 1, border: 'none', outline: 'none', background: 'transparent',
          fontFamily: 'var(--font-sans)', fontSize: fontSizes[size], color: C.fg1, minWidth: 0,
        }}/>
      {suffix && <span style={{ color: C.fg3, display: 'inline-flex' }}>{suffix}</span>}
    </div>
  );
}

// ---------- TextArea ----------
function TextArea({ value, onChange, placeholder, rows=4 }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <textarea value={value ?? ''} onChange={e => onChange?.(e.target.value)} placeholder={placeholder} rows={rows}
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
      style={{
        width: '100%', boxSizing: 'border-box', padding: '12px 14px',
        background: C.bg1, color: C.fg1,
        border: `1px solid ${focus ? C.primary : C.border2}`, borderRadius: 12,
        boxShadow: focus ? C.ring : 'none',
        fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.6,
        outline: 'none', resize: 'vertical', transition: 'all 150ms',
      }}/>
  );
}

// ---------- Select ----------
function Select({ value, onChange, options, placeholder='선택해 주세요', disabled }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  const selected = options.find(o => o.value === value);
  return (
    <div ref={ref} style={{ position: 'relative', minWidth: 200 }}>
      <button disabled={disabled} onClick={() => setOpen(!open)} style={{
        width: '100%', height: 44, padding: '0 14px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8,
        background: disabled ? C.bg2 : C.bg1, color: selected ? C.fg1 : C.fg3,
        border: `1px solid ${open ? C.primary : C.border2}`, borderRadius: 12,
        boxShadow: open ? C.ring : 'none',
        fontFamily: 'var(--font-sans)', fontSize: 15, cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 150ms', textAlign: 'left',
      }}>
        <span>{selected ? selected.label : placeholder}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{
          color: C.fg3, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 200ms',
        }}><path d="m6 9 6 6 6-6"/></svg>
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0, zIndex: 10,
          background: C.bg1, border: `1px solid ${C.border1}`, borderRadius: 12,
          boxShadow: '0 4px 12px rgba(9,9,11,.06)', padding: 4, maxHeight: 240, overflowY: 'auto',
        }}>
          {options.map(o => (
            <button key={o.value} onClick={() => { onChange?.(o.value); setOpen(false); }}
              onMouseEnter={e => e.currentTarget.style.background = C.bg2}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              style={{
                width: '100%', padding: '10px 12px', textAlign: 'left',
                background: 'transparent', border: 'none', borderRadius: 8,
                fontFamily: 'var(--font-sans)', fontSize: 14, color: C.fg1, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
              <span>{o.label}</span>
              {o.value === value && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary-600)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ---------- Checkbox ----------
function Checkbox({ checked, onChange, children, disabled }) {
  return (
    <label style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)', fontSize: 14, color: C.fg1, userSelect: 'none',
    }}>
      <span style={{
        width: 18, height: 18, borderRadius: 6,
        border: `1.5px solid ${checked ? C.primary : C.border2}`,
        background: checked ? C.primary : C.bg1,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 150ms',
      }}>
        {checked && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>}
      </span>
      <input type="checkbox" checked={!!checked} onChange={e => onChange?.(e.target.checked)} disabled={disabled} style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}/>
      {children}
    </label>
  );
}

// ---------- Radio ----------
function Radio({ checked, onChange, children, name, value, disabled }) {
  return (
    <label style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)', fontSize: 14, color: C.fg1, userSelect: 'none',
    }}>
      <span style={{
        width: 18, height: 18, borderRadius: '50%',
        border: `1.5px solid ${checked ? C.primary : C.border2}`,
        background: C.bg1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 150ms',
      }}>
        {checked && <span style={{ width: 9, height: 9, borderRadius: '50%', background: C.primary }}/>}
      </span>
      <input type="radio" name={name} value={value} checked={!!checked} onChange={e => e.target.checked && onChange?.(value)} disabled={disabled} style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}/>
      {children}
    </label>
  );
}

function RadioGroup({ value, onChange, options, name='radio-group' }) {
  return (
    <div style={{ display: 'inline-flex', gap: 16, flexWrap: 'wrap' }}>
      {options.map(o => (
        <Radio key={o.value} checked={value === o.value} onChange={onChange} value={o.value} name={name}>{o.label}</Radio>
      ))}
    </div>
  );
}

// ---------- Segmented (radio-button group) ----------
function Segmented({ value, onChange, options }) {
  return (
    <div style={{
      display: 'inline-flex', padding: 3, gap: 2,
      background: C.bg2, border: `1px solid ${C.border1}`, borderRadius: 10,
    }}>
      {options.map(o => (
        <button key={o.value} onClick={() => onChange?.(o.value)} style={{
          height: 32, padding: '0 14px', border: 'none', borderRadius: 7,
          background: value === o.value ? C.bg1 : 'transparent',
          color: value === o.value ? C.fg1 : C.fg2,
          fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: value === o.value ? 600 : 500,
          boxShadow: value === o.value ? '0 1px 2px rgba(9,9,11,.06)' : 'none',
          cursor: 'pointer', transition: 'all 150ms',
        }}>{o.label}</button>
      ))}
    </div>
  );
}

// ---------- Switch ----------
function Switch({ checked, onChange, disabled, size='md' }) {
  const w = size === 'sm' ? 36 : 44;
  const h = size === 'sm' ? 20 : 24;
  const knob = size === 'sm' ? 16 : 20;
  return (
    <button role="switch" aria-checked={checked} disabled={disabled} onClick={() => onChange?.(!checked)} style={{
      position: 'relative', width: w, height: h, borderRadius: 999, border: 'none',
      background: checked ? C.primary : C.border2,
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
      transition: 'background 200ms', padding: 0,
    }}>
      <span style={{
        position: 'absolute', top: 2, left: checked ? w - knob - 2 : 2,
        width: knob, height: knob, borderRadius: '50%', background: '#fff',
        boxShadow: '0 1px 3px rgba(9,9,11,.18)',
        transition: 'left 200ms cubic-bezier(.22,1,.36,1)',
      }}/>
    </button>
  );
}

// ---------- Slider ----------
function Slider({ value, onChange, min=0, max=100, step=1 }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%' }}>
      <div style={{ position: 'relative', flex: 1, height: 24, display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', left: 0, right: 0, height: 4, background: C.bg3, borderRadius: 999 }}/>
        <div style={{ position: 'absolute', left: 0, width: `${pct}%`, height: 4, background: C.primary, borderRadius: 999 }}/>
        <div style={{
          position: 'absolute', left: `calc(${pct}% - 9px)`,
          width: 18, height: 18, borderRadius: '50%', background: '#fff',
          border: `2px solid ${C.primary}`, boxShadow: '0 1px 3px rgba(9,9,11,.15)',
        }}/>
        <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange?.(+e.target.value)}
          style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%' }}/>
      </div>
      <span style={{ fontFamily: 'Inter', fontFeatureSettings: '"tnum" 1', fontSize: 13, color: C.fg2, minWidth: 36, textAlign: 'right' }}>{value}</span>
    </div>
  );
}

// ---------- InputNumber ----------
function InputNumber({ value, onChange, min, max, step=1 }) {
  const [focus, setFocus] = React.useState(false);
  const dec = () => { const v = (value ?? 0) - step; if (min == null || v >= min) onChange?.(v); };
  const inc = () => { const v = (value ?? 0) + step; if (max == null || v <= max) onChange?.(v); };
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center',
      height: 44, background: C.bg1,
      border: `1px solid ${focus ? C.primary : C.border2}`, borderRadius: 12,
      boxShadow: focus ? C.ring : 'none', transition: 'all 150ms',
    }}>
      <button onClick={dec} style={{ width: 36, height: '100%', background: 'transparent', border: 'none', cursor: 'pointer', color: C.fg2, fontSize: 18 }}>−</button>
      <input value={value ?? ''} onChange={e => onChange?.(e.target.value === '' ? null : +e.target.value)}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          width: 56, border: 'none', outline: 'none', background: 'transparent',
          fontFamily: 'Inter', fontFeatureSettings: '"tnum" 1', fontSize: 15, textAlign: 'center', color: C.fg1,
        }}/>
      <button onClick={inc} style={{ width: 36, height: '100%', background: 'transparent', border: 'none', cursor: 'pointer', color: C.fg2, fontSize: 18 }}>+</button>
    </div>
  );
}

// ---------- Rate ----------
function Rate({ value=0, onChange, count=5 }) {
  const [hover, setHover] = React.useState(0);
  return (
    <div style={{ display: 'inline-flex', gap: 6 }} onMouseLeave={() => setHover(0)}>
      {Array.from({ length: count }).map((_, i) => {
        const n = i + 1;
        const active = (hover || value) >= n;
        return (
          <button key={n} onClick={() => onChange?.(n)} onMouseEnter={() => setHover(n)} style={{
            background: 'transparent', border: 'none', padding: 2, cursor: 'pointer', display: 'inline-flex',
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? 'var(--primary-500)' : 'none'} stroke={active ? 'var(--primary-500)' : C.border2} strokeWidth="1.75" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </button>
        );
      })}
    </div>
  );
}

// ---------- DatePicker (lightweight calendar) ----------
function DatePicker({ value, onChange }) {
  const [open, setOpen] = React.useState(false);
  const [view, setView] = React.useState(() => value ? new Date(value) : new Date());
  const ref = React.useRef(null);
  React.useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  const fmt = (d) => d ? `${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,'0')}.${String(d.getDate()).padStart(2,'0')}` : '';
  const startDay = new Date(view.getFullYear(), view.getMonth(), 1).getDay();
  const daysInMonth = new Date(view.getFullYear(), view.getMonth()+1, 0).getDate();
  const today = new Date(); today.setHours(0,0,0,0);
  const isSame = (a, b) => a && b && a.getFullYear()===b.getFullYear() && a.getMonth()===b.getMonth() && a.getDate()===b.getDate();
  const sel = value ? new Date(value) : null;

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block', minWidth: 200 }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', height: 44, padding: '0 14px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8,
        background: C.bg1, color: sel ? C.fg1 : C.fg3,
        border: `1px solid ${open ? C.primary : C.border2}`, borderRadius: 12,
        boxShadow: open ? C.ring : 'none',
        fontFamily: 'Inter', fontFeatureSettings: '"tnum" 1', fontSize: 15, cursor: 'pointer',
        transition: 'all 150ms',
      }}>
        <span>{sel ? fmt(sel) : '날짜를 골라 주세요'}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.fg3} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 4px)', left: 0, zIndex: 10,
          background: C.bg1, border: `1px solid ${C.border1}`, borderRadius: 12,
          boxShadow: '0 4px 12px rgba(9,9,11,.06)', padding: 12, width: 280,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4px 10px' }}>
            <button onClick={() => setView(new Date(view.getFullYear(), view.getMonth()-1, 1))} style={{ background: 'transparent', border: 'none', width: 28, height: 28, borderRadius: 8, cursor: 'pointer', color: C.fg2 }}>‹</button>
            <span style={{ fontSize: 14, fontWeight: 600, fontFamily: 'Inter', fontFeatureSettings: '"tnum" 1' }}>{view.getFullYear()}.{String(view.getMonth()+1).padStart(2,'0')}</span>
            <button onClick={() => setView(new Date(view.getFullYear(), view.getMonth()+1, 1))} style={{ background: 'transparent', border: 'none', width: 28, height: 28, borderRadius: 8, cursor: 'pointer', color: C.fg2 }}>›</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 2, fontFamily: 'Inter' }}>
            {['일','월','화','수','목','금','토'].map(d => (
              <div key={d} style={{ textAlign: 'center', fontSize: 11, color: C.fg3, padding: '6px 0' }}>{d}</div>
            ))}
            {Array.from({ length: startDay }).map((_, i) => <div key={`b${i}`}/>)}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const d = new Date(view.getFullYear(), view.getMonth(), i+1);
              const selected = isSame(d, sel);
              const isToday = isSame(d, today);
              return (
                <button key={i} onClick={() => { onChange?.(d); setOpen(false); }} style={{
                  height: 32, border: 'none', borderRadius: 8, cursor: 'pointer',
                  background: selected ? C.primary : 'transparent',
                  color: selected ? '#fff' : isToday ? 'var(--primary-600)' : C.fg1,
                  fontWeight: selected || isToday ? 600 : 400,
                  fontSize: 13, fontFeatureSettings: '"tnum" 1',
                  transition: 'all 100ms',
                }}
                onMouseEnter={e => { if (!selected) e.currentTarget.style.background = C.bg2; }}
                onMouseLeave={e => { if (!selected) e.currentTarget.style.background = 'transparent'; }}>
                  {i+1}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ---------- TimePicker ----------
function TimePicker({ value, onChange }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  const [h, m] = (value || '09:00').split(':').map(x => +x);
  const setH = (nh) => onChange?.(`${String(nh).padStart(2,'0')}:${String(m).padStart(2,'0')}`);
  const setM = (nm) => onChange?.(`${String(h).padStart(2,'0')}:${String(nm).padStart(2,'0')}`);
  const colStyle = { flex: 1, height: 180, overflowY: 'auto', borderLeft: `1px solid ${C.border1}` };
  const itemStyle = (active) => ({
    padding: '6px 14px', cursor: 'pointer', textAlign: 'center',
    background: active ? 'var(--primary-50)' : 'transparent',
    color: active ? 'var(--primary-700)' : C.fg1,
    fontWeight: active ? 600 : 400, fontSize: 13,
    fontFamily: 'Inter', fontFeatureSettings: '"tnum" 1',
  });
  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block', minWidth: 140 }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', height: 44, padding: '0 14px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8,
        background: C.bg1, color: C.fg1,
        border: `1px solid ${open ? C.primary : C.border2}`, borderRadius: 12,
        boxShadow: open ? C.ring : 'none',
        fontFamily: 'Inter', fontFeatureSettings: '"tnum" 1', fontSize: 15, cursor: 'pointer',
        transition: 'all 150ms',
      }}>
        <span>{value || '09:00'}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.fg3} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 4px)', left: 0, zIndex: 10,
          background: C.bg1, border: `1px solid ${C.border1}`, borderRadius: 12,
          boxShadow: '0 4px 12px rgba(9,9,11,.06)', display: 'flex', overflow: 'hidden', width: 160,
        }}>
          <div style={{ ...colStyle, borderLeft: 'none' }}>
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} style={itemStyle(i === h)} onClick={() => setH(i)}>{String(i).padStart(2,'0')}</div>
            ))}
          </div>
          <div style={colStyle}>
            {Array.from({ length: 12 }).map((_, i) => {
              const mm = i * 5;
              return <div key={i} style={itemStyle(mm === m)} onClick={() => setM(mm)}>{String(mm).padStart(2,'0')}</div>;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ---------- Upload (drop zone) ----------
function Upload({ files=[], onAdd, onRemove }) {
  const [drag, setDrag] = React.useState(false);
  const inputRef = React.useRef(null);
  const handle = (fl) => {
    const arr = Array.from(fl).map(f => ({ name: f.name, size: f.size, id: Math.random().toString(36).slice(2) }));
    onAdd?.(arr);
  };
  return (
    <div>
      <div onDragOver={e => { e.preventDefault(); setDrag(true); }}
        onDragLeave={() => setDrag(false)}
        onDrop={e => { e.preventDefault(); setDrag(false); handle(e.dataTransfer.files); }}
        onClick={() => inputRef.current?.click()}
        style={{
          padding: '28px 20px', textAlign: 'center', cursor: 'pointer',
          background: drag ? 'var(--primary-50)' : C.bg2,
          border: `1.5px dashed ${drag ? C.primary : C.border2}`, borderRadius: 12,
          transition: 'all 150ms',
        }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={drag ? 'var(--primary-600)' : C.fg2} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto 8px' }}>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
        </svg>
        <div style={{ fontSize: 14, color: C.fg1, fontWeight: 500 }}>파일을 끌어다 놓거나 클릭해서 올려 주세요</div>
        <div style={{ fontSize: 12, color: C.fg3, marginTop: 4 }}>이미지·문서 모두 가능, 한 번에 여러 개도 돼요</div>
        <input ref={inputRef} type="file" multiple style={{ display: 'none' }} onChange={e => handle(e.target.files)}/>
      </div>
      {files.length > 0 && (
        <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {files.map(f => (
            <div key={f.id} style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px',
              background: C.bg1, border: `1px solid ${C.border1}`, borderRadius: 10, fontSize: 13,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.fg2} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              <span style={{ flex: 1, color: C.fg1 }}>{f.name}</span>
              <span style={{ fontFamily: 'Inter', fontFeatureSettings: '"tnum" 1', color: C.fg3, fontSize: 12 }}>{(f.size/1024).toFixed(1)} KB</span>
              <button onClick={() => onRemove?.(f.id)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 4, color: C.fg3 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ---------- AutoComplete ----------
function AutoComplete({ value, onChange, options=[], placeholder='검색해 주세요' }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  const filtered = (value || '').length === 0 ? options.slice(0, 6) : options.filter(o => o.toLowerCase().includes(value.toLowerCase())).slice(0, 6);
  return (
    <div ref={ref} style={{ position: 'relative', minWidth: 240 }}>
      <Input value={value} onChange={(v) => { onChange?.(v); setOpen(true); }} placeholder={placeholder}
        prefix={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>}
      />
      {open && filtered.length > 0 && (
        <div onMouseDown={e => e.preventDefault()} style={{
          position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0, zIndex: 10,
          background: C.bg1, border: `1px solid ${C.border1}`, borderRadius: 12,
          boxShadow: '0 4px 12px rgba(9,9,11,.06)', padding: 4,
        }}>
          {filtered.map(o => (
            <button key={o} onClick={() => { onChange?.(o); setOpen(false); }}
              onMouseEnter={e => e.currentTarget.style.background = C.bg2}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              style={{
                width: '100%', padding: '10px 12px', textAlign: 'left',
                background: 'transparent', border: 'none', borderRadius: 8,
                fontFamily: 'var(--font-sans)', fontSize: 14, color: C.fg1, cursor: 'pointer',
              }}>{o}</button>
          ))}
        </div>
      )}
    </div>
  );
}

// ---------- ColorPicker ----------
function ColorPicker({ value='#F59E0B', onChange }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const swatches = ['#F59E0B','#EF4444','#10B981','#6366F1','#EC4899','#06B6D4','#84CC16','#18181B','#71717A','#FFFFFF'];
  React.useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
      <button onClick={() => setOpen(!open)} style={{
        height: 44, padding: '0 12px', display: 'inline-flex', alignItems: 'center', gap: 10,
        background: C.bg1, border: `1px solid ${open ? C.primary : C.border2}`, borderRadius: 12,
        boxShadow: open ? C.ring : 'none', cursor: 'pointer',
      }}>
        <span style={{ width: 22, height: 22, borderRadius: 6, background: value, border: `1px solid ${C.border1}` }}/>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: C.fg2 }}>{value}</span>
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 4px)', left: 0, zIndex: 10,
          background: C.bg1, border: `1px solid ${C.border1}`, borderRadius: 12,
          boxShadow: '0 4px 12px rgba(9,9,11,.06)', padding: 12, width: 220,
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8 }}>
            {swatches.map(s => (
              <button key={s} onClick={() => { onChange?.(s); setOpen(false); }} style={{
                width: 32, height: 32, borderRadius: 8, cursor: 'pointer',
                background: s, border: value === s ? `2px solid ${C.primary}` : `1px solid ${C.border1}`,
              }}/>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ---------- Form layout helpers ----------
function FormItem({ label, help, error, required, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontSize: 13, fontWeight: 500, color: C.fg2 }}>
        {label}
        {required && <span style={{ color: C.error, marginLeft: 2 }}>*</span>}
      </label>
      {children}
      {(help || error) && (
        <span style={{ fontSize: 12, color: error ? C.error : C.fg3 }}>{error || help}</span>
      )}
    </div>
  );
}

Object.assign(window, {
  KsInput: Input, KsTextArea: TextArea, KsSelect: Select,
  KsCheckbox: Checkbox, KsRadio: Radio, KsRadioGroup: RadioGroup, KsSegmented: Segmented,
  KsSwitch: Switch, KsSlider: Slider, KsInputNumber: InputNumber, KsRate: Rate,
  KsDatePicker: DatePicker, KsTimePicker: TimePicker, KsUpload: Upload,
  KsAutoComplete: AutoComplete, KsColorPicker: ColorPicker, KsFormItem: FormItem,
});
