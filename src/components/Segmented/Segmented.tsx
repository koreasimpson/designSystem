import React from 'react';
import styles from './Segmented.module.css';

export interface SegmentedOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface SegmentedProps {
  value?: string;
  onChange?: (value: string) => void;
  options: SegmentedOption[];
  className?: string;
}

export const Segmented: React.FC<SegmentedProps> = ({ value, onChange, options, className }) => {
  return (
    <div className={[styles.root, className].filter(Boolean).join(' ')} role="group">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          disabled={o.disabled}
          onClick={() => !o.disabled && onChange?.(o.value)}
          className={[styles.item, value === o.value ? styles.active : ''].filter(Boolean).join(' ')}
          aria-pressed={value === o.value}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
};

Segmented.displayName = 'Segmented';
