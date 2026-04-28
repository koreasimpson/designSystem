import React from 'react';
import styles from './Skeleton.module.css';

export interface SkeletonProps {
  width?: string | number;
  height?: number;
  radius?: number;
  animate?: boolean;
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = 16,
  radius = 6,
  animate = true,
  className,
}) => {
  return (
    <div
      className={[styles.root, animate ? styles.animate : '', className].filter(Boolean).join(' ')}
      style={{ width, height, borderRadius: radius }}
    />
  );
};

Skeleton.displayName = 'Skeleton';

export const SkeletonCard: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={[styles.card, className].filter(Boolean).join(' ')}>
      <div className={styles.cardHeader}>
        <Skeleton width={40} height={40} radius={999} />
        <div className={styles.cardMeta}>
          <Skeleton width="60%" height={14} />
          <Skeleton width="40%" height={12} />
        </div>
      </div>
      <Skeleton height={12} />
      <Skeleton width="90%" height={12} />
      <Skeleton width="70%" height={12} />
    </div>
  );
};

SkeletonCard.displayName = 'SkeletonCard';
