import React from 'react';
import styles from './Steps.module.css';

export interface StepItem {
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
}

export type StepsDirection = 'horizontal' | 'vertical';

export interface StepsProps {
  current: number;
  items: StepItem[];
  direction?: StepsDirection;
  className?: string;
}

export const Steps: React.FC<StepsProps> = ({
  current,
  items,
  direction = 'horizontal',
  className,
}) => {
  return (
    <div
      className={[
        styles.root,
        direction === 'vertical' ? styles.vertical : styles.horizontal,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {items.map((it, i) => {
        const done = i < current;
        const active = i === current;

        return (
          <div
            key={i}
            className={[
              styles.step,
              done ? styles.done : '',
              active ? styles.active : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <div className={styles.marker}>
              <div className={styles.dot}>
                {done ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                ) : (
                  <span className={styles.number}>{i + 1}</span>
                )}
              </div>
              {i < items.length - 1 && <div className={styles.connector} />}
            </div>
            <div className={styles.content}>
              <div className={styles.title}>{it.title}</div>
              {it.description && <div className={styles.description}>{it.description}</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

Steps.displayName = 'Steps';
