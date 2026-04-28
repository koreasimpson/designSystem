import React from 'react';
import styles from './Typography.module.css';

type TypoChildren = { children?: React.ReactNode; className?: string };
type TypoWithStyle = TypoChildren & { style?: React.CSSProperties };

export const Display: React.FC<TypoWithStyle> = ({ children, className, style }) => (
  <div className={[styles.display, className].filter(Boolean).join(' ')} style={style}>{children}</div>
);

export const H1: React.FC<TypoWithStyle> = ({ children, className, style }) => (
  <h1 className={[styles.h1, className].filter(Boolean).join(' ')} style={style}>{children}</h1>
);

export const H2: React.FC<TypoWithStyle> = ({ children, className, style }) => (
  <h2 className={[styles.h2, className].filter(Boolean).join(' ')} style={style}>{children}</h2>
);

export const H3: React.FC<TypoWithStyle> = ({ children, className, style }) => (
  <h3 className={[styles.h3, className].filter(Boolean).join(' ')} style={style}>{children}</h3>
);

export const Body: React.FC<TypoWithStyle> = ({ children, className, style }) => (
  <p className={[styles.body, className].filter(Boolean).join(' ')} style={style}>{children}</p>
);

export const Caption: React.FC<TypoWithStyle> = ({ children, className, style }) => (
  <span className={[styles.caption, className].filter(Boolean).join(' ')} style={style}>{children}</span>
);

export interface CodeProps extends TypoWithStyle {
  block?: boolean;
}

export const Code: React.FC<CodeProps> = ({ children, block, className, style }) => {
  const cls = [block ? styles.codeBlock : styles.codeInline, className].filter(Boolean).join(' ');
  return block ? (
    <pre className={cls} style={style}>{children}</pre>
  ) : (
    <code className={cls} style={style}>{children}</code>
  );
};

export const Numeric: React.FC<TypoWithStyle> = ({ children, className, style }) => (
  <span className={[styles.numeric, className].filter(Boolean).join(' ')} style={style}>{children}</span>
);

export interface MarkProps extends TypoChildren {
  color?: string;
}

export const Mark: React.FC<MarkProps> = ({ children, color, className }) => (
  <mark
    className={[styles.mark, className].filter(Boolean).join(' ')}
    style={color ? { background: color } : undefined}
  >
    {children}
  </mark>
);

Display.displayName = 'Display';
H1.displayName = 'H1';
H2.displayName = 'H2';
H3.displayName = 'H3';
Body.displayName = 'Body';
Caption.displayName = 'Caption';
Code.displayName = 'Code';
Numeric.displayName = 'Numeric';
Mark.displayName = 'Mark';
