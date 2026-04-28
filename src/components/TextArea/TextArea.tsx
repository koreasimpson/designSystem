import React from 'react';
import styles from './TextArea.module.css';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={[styles.root, error ? styles.error : '', className].filter(Boolean).join(' ')}
        {...props}
      />
    );
  }
);

TextArea.displayName = 'TextArea';
