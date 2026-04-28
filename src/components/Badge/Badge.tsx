import React from 'react';
import styles from './Badge.module.css';

export type BadgeStatus = 'default' | 'success' | 'warning' | 'error' | 'info' | 'processing';

export interface BadgeProps {
  count?: number;
  dot?: boolean;
  status?: BadgeStatus;
  color?: string;
  children?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ count, dot, status, color, children, className }) => {
  if (status) {
    return (
      <span className={[styles.statusRoot, className].filter(Boolean).join(' ')}>
        <span
          className={[styles.statusDot, styles[`status-${status}`]].join(' ')}
        />
        {children}
      </span>
    );
  }

  return (
    <span className={[styles.root, className].filter(Boolean).join(' ')}>
      {children}
      {(count !== undefined && count > 0) || dot ? (
        <span
          className={[styles.badge, dot ? styles.dot : ''].filter(Boolean).join(' ')}
          style={color ? { background: color } : undefined}
        >
          {!dot && (count !== undefined ? (count > 99 ? '99+' : count) : null)}
        </span>
      ) : null}
    </span>
  );
};

Badge.displayName = 'Badge';
