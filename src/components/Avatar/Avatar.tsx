import React from 'react';
import styles from './Avatar.module.css';

const PALETTE = ['#F59E0B', '#10B981', '#6366F1', '#EC4899', '#06B6D4', '#84CC16', '#F43F5E'];

function hashColor(s = ''): string {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return PALETTE[h % PALETTE.length];
}

export interface AvatarProps {
  src?: string;
  name?: string;
  size?: number;
  color?: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, name, size = 40, color, className }) => {
  const fontSize = Math.round(size * 0.4);
  const initial = (name ?? '?').slice(0, 1).toUpperCase();
  const bg = color ?? hashColor(name);

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        width={size}
        height={size}
        className={[styles.img, className].filter(Boolean).join(' ')}
      />
    );
  }

  return (
    <div
      className={[styles.fallback, className].filter(Boolean).join(' ')}
      style={{ width: size, height: size, background: bg, fontSize }}
    >
      {initial}
    </div>
  );
};

Avatar.displayName = 'Avatar';

export interface AvatarGroupProps {
  avatars: AvatarProps[];
  max?: number;
  size?: number;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ avatars, max = 3, size = 32 }) => {
  const visible = avatars.slice(0, max);
  const rest = avatars.length - max;

  return (
    <div className={styles.group}>
      {visible.map((a, i) => (
        <div key={i} className={styles.groupItem} style={{ marginLeft: i === 0 ? 0 : -8 }}>
          <Avatar {...a} size={size} />
        </div>
      ))}
      {rest > 0 && (
        <div
          className={styles.rest}
          style={{
            marginLeft: -8,
            width: size,
            height: size,
            fontSize: Math.round(size * 0.35),
          }}
        >
          +{rest}
        </div>
      )}
    </div>
  );
};

AvatarGroup.displayName = 'AvatarGroup';
