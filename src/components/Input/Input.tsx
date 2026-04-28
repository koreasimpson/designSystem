import React from 'react';
import styles from './Input.module.css';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  size?: InputSize;
  error?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ size = 'md', error, prefix, suffix, disabled, className, ...props }, ref) => {
    return (
      <div
        className={[
          styles.wrapper,
          styles[size],
          error ? styles.error : '',
          disabled ? styles.disabled : '',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {prefix && <span className={styles.affix}>{prefix}</span>}
        <input ref={ref} disabled={disabled} className={styles.input} {...props} />
        {suffix && <span className={styles.affix}>{suffix}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
