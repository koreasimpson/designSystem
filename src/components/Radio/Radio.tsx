import React from 'react';
import styles from './Radio.module.css';

export interface RadioProps {
  checked?: boolean;
  onChange?: (value: string) => void;
  value?: string;
  name?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const Radio: React.FC<RadioProps> = ({
  checked,
  onChange,
  value,
  name,
  disabled,
  children,
  className,
}) => {
  return (
    <label className={[styles.root, disabled ? styles.disabled : '', className].filter(Boolean).join(' ')}>
      <span className={[styles.dot, checked ? styles.checked : ''].filter(Boolean).join(' ')}>
        {checked && <span className={styles.inner} />}
      </span>
      <input
        type="radio"
        name={name}
        value={value}
        checked={!!checked}
        onChange={(e) => e.target.checked && onChange?.(value ?? '')}
        disabled={disabled}
        className={styles.input}
      />
      {children && <span className={styles.label}>{children}</span>}
    </label>
  );
};

Radio.displayName = 'Radio';

export interface RadioGroupOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  value?: string;
  onChange?: (value: string) => void;
  options: RadioGroupOption[];
  name?: string;
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  value,
  onChange,
  options,
  name = 'radio-group',
  direction = 'horizontal',
  className,
}) => {
  return (
    <div
      className={[styles.group, direction === 'vertical' ? styles.vertical : '', className]
        .filter(Boolean)
        .join(' ')}
    >
      {options.map((o) => (
        <Radio
          key={o.value}
          checked={value === o.value}
          onChange={onChange}
          value={o.value}
          name={name}
          disabled={o.disabled}
        >
          {o.label}
        </Radio>
      ))}
    </div>
  );
};

RadioGroup.displayName = 'RadioGroup';
