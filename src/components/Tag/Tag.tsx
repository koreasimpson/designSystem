import React from 'react';
import styles from './Tag.module.css';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  selected?: boolean;
  onClose?: () => void;
}

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ selected, onClose, children, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={[styles.root, selected ? styles.selected : '', className].filter(Boolean).join(' ')}
        {...props}
      >
        {children}
        {onClose && (
          <button type="button" className={styles.close} onClick={onClose} aria-label="닫기">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </span>
    );
  }
);

Tag.displayName = 'Tag';
