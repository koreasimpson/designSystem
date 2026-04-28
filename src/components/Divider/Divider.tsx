import React from 'react';
import styles from './Divider.module.css';

export type DividerAlign = 'left' | 'center' | 'right';

export interface DividerProps extends React.HTMLAttributes<HTMLElement> {
  vertical?: boolean;
  label?: React.ReactNode;
  align?: DividerAlign;
  dashed?: boolean;
}

export const Divider: React.FC<DividerProps> = ({
  vertical,
  label,
  align = 'center',
  dashed,
  className,
  ...props
}) => {
  if (vertical) {
    return (
      <span
        className={[styles.vertical, className].filter(Boolean).join(' ')}
        role="separator"
        aria-orientation="vertical"
        {...props}
      />
    );
  }

  if (label) {
    return (
      <div
        className={[styles.labeled, className].filter(Boolean).join(' ')}
        role="separator"
        {...props}
      >
        {align !== 'left' && (
          <span
            className={[styles.line, dashed ? styles.dashed : ''].filter(Boolean).join(' ')}
            style={{ flex: align === 'center' ? 1 : undefined, width: align === 'right' ? 24 : undefined }}
          />
        )}
        <span className={styles.labelText}>{label}</span>
        {align !== 'right' && (
          <span className={[styles.line, styles.flex1, dashed ? styles.dashed : ''].filter(Boolean).join(' ')} />
        )}
      </div>
    );
  }

  return (
    <hr
      className={[styles.horizontal, dashed ? styles.dashed : '', className].filter(Boolean).join(' ')}
      {...props}
    />
  );
};

Divider.displayName = 'Divider';
