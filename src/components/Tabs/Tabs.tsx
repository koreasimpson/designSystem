import React from 'react';
import styles from './Tabs.module.css';

export type TabsVariant = 'line' | 'pill';

export interface TabItem {
  key: string;
  label: React.ReactNode;
  content?: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  value: string;
  onChange?: (key: string) => void;
  items: TabItem[];
  variant?: TabsVariant;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  value,
  onChange,
  items,
  variant = 'line',
  className,
}) => {
  const active = items.find((i) => i.key === value);

  return (
    <div className={[styles.root, className].filter(Boolean).join(' ')}>
      <div
        className={[styles.nav, variant === 'line' ? styles.line : styles.pill].join(' ')}
        role="tablist"
      >
        {items.map((it) => (
          <button
            key={it.key}
            role="tab"
            aria-selected={value === it.key}
            disabled={it.disabled}
            onClick={() => !it.disabled && onChange?.(it.key)}
            className={[
              styles.tab,
              variant === 'line' ? styles.lineTab : styles.pillTab,
              value === it.key ? styles.active : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {it.label}
            {variant === 'line' && value === it.key && (
              <span className={styles.indicator} aria-hidden="true" />
            )}
          </button>
        ))}
      </div>
      {active?.content && (
        <div role="tabpanel" className={styles.panel}>
          {active.content}
        </div>
      )}
    </div>
  );
};

Tabs.displayName = 'Tabs';
