import React from 'react';
import styles from './Spin.module.css';

export interface SpinProps {
  size?: number;
  color?: string;
  className?: string;
}

export const Spin: React.FC<SpinProps> = ({ size = 24, color, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={[styles.spin, className].filter(Boolean).join(' ')}
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke={color ?? 'var(--primary-500)'}
        strokeWidth="2.5"
        strokeDasharray="42"
        strokeDashoffset="14"
        strokeLinecap="round"
      />
    </svg>
  );
};

Spin.displayName = 'Spin';
