import React from 'react';
import styles from './PostListItem.module.css';

export interface PostListItemProps {
  title: string;
  excerpt?: string;
  date?: string;
  readTime?: number;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const PostListItem: React.FC<PostListItemProps> = ({
  title,
  excerpt,
  date,
  readTime,
  href = '#',
  onClick,
  className,
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={[styles.root, className].filter(Boolean).join(' ')}
    >
      <div className={styles.inner}>
        <h3 className={styles.title}>{title}</h3>
        {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
        {(date || readTime !== undefined) && (
          <div className={styles.meta}>
            {date}
            {date && readTime !== undefined && ' · '}
            {readTime !== undefined && `${readTime}분`}
          </div>
        )}
      </div>
    </a>
  );
};

PostListItem.displayName = 'PostListItem';
