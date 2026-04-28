import React from 'react';
import styles from './Card.module.css';

export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: React.ReactNode;
  extra?: React.ReactNode;
  footer?: React.ReactNode;
  hoverable?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ title, extra, footer, hoverable, padding = 'md', children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          styles.root,
          hoverable ? styles.hoverable : '',
          styles[`padding-${padding}`],
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {(title || extra) && (
          <div className={styles.header}>
            {title && <div className={styles.title}>{title}</div>}
            {extra && <div className={styles.extra}>{extra}</div>}
          </div>
        )}
        <div className={styles.body}>{children}</div>
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    );
  }
);

Card.displayName = 'Card';
