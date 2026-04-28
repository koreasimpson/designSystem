import React from 'react';
import styles from './Header.module.css';

export interface NavItem {
  id: string;
  label: string;
}

export interface HeaderProps {
  logo?: React.ReactNode;
  title?: string;
  items?: NavItem[];
  activeId?: string;
  onNav?: (id: string) => void;
  maxWidth?: number | string;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  logo,
  title = '코리안심슨',
  items = [],
  activeId,
  onNav,
  maxWidth = 1100,
  className,
}) => {
  return (
    <header className={[styles.root, className].filter(Boolean).join(' ')}>
      <div className={styles.inner} style={{ maxWidth }}>
        <button type="button" className={styles.brand} onClick={() => onNav?.('home')}>
          {logo}
          {title && <span className={styles.brandTitle}>{title}</span>}
        </button>
        {items.length > 0 && (
          <nav className={styles.nav} aria-label="메인 네비게이션">
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onNav?.(item.id)}
                className={[styles.navItem, activeId === item.id ? styles.navActive : '']
                  .filter(Boolean)
                  .join(' ')}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

Header.displayName = 'Header';
