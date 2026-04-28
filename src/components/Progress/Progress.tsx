import React from 'react';
import styles from './Progress.module.css';

export type ProgressStatus = 'default' | 'success' | 'error' | 'warning';
export type ProgressSize = 'sm' | 'md' | 'lg';

export interface ProgressProps {
  value?: number;
  status?: ProgressStatus;
  size?: ProgressSize;
  showInfo?: boolean;
  className?: string;
}

export const Progress: React.FC<ProgressProps> = ({
  value = 0,
  status = 'default',
  size = 'md',
  showInfo = true,
  className,
}) => {
  const pct = Math.min(100, Math.max(0, value));

  return (
    <div className={[styles.root, className].filter(Boolean).join(' ')}>
      <div className={styles.track}>
        <div
          className={[styles.bar, styles[size], styles[`status-${status}`]].join(' ')}
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      {showInfo && (
        <span className={styles.info}>
          {status === 'success' ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          ) : status === 'error' ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--error)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          ) : (
            `${pct}%`
          )}
        </span>
      )}
    </div>
  );
};

Progress.displayName = 'Progress';
