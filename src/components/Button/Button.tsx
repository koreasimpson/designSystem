import React from 'react';
import { Spin } from '../Spin/Spin';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  block?: boolean;
  shape?: 'default' | 'circle' | 'square';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      icon,
      iconRight,
      block = false,
      shape = 'default',
      children,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const cls = [
      styles.root,
      styles[variant],
      styles[size],
      block ? styles.block : '',
      shape !== 'default' ? styles[shape] : '',
      loading ? styles.loading : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const spinSize = size === 'sm' ? 14 : size === 'lg' ? 18 : 16;

    return (
      <button ref={ref} disabled={disabled || loading} className={cls} {...props}>
        {loading ? (
          <span className={styles.iconSlot}>
            <Spin size={spinSize} color={variant === 'primary' ? '#fff' : undefined} />
          </span>
        ) : icon ? (
          <span className={styles.iconSlot}>{icon}</span>
        ) : null}
        {children}
        {iconRight && <span className={styles.iconSlot}>{iconRight}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
