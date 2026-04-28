import React from 'react';
import { Tag } from '../Tag/Tag';
import styles from './ProjectCard.module.css';

export interface ProjectCardProps {
  kicker?: string;
  title: string;
  description?: string;
  tags?: string[];
  year?: string | number;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  kicker,
  title,
  description,
  tags = [],
  year,
  href,
  onClick,
  className,
}) => {
  const Tag_ = href ? 'a' : 'article';
  return (
    <Tag_
      href={href}
      onClick={onClick}
      className={[styles.root, className].filter(Boolean).join(' ')}
    >
      {kicker && <div className={styles.kicker}>{kicker}</div>}
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
      <div className={styles.footer}>
        <div className={styles.tags}>
          {tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
        {year && <span className={styles.year}>{year}</span>}
      </div>
    </Tag_>
  );
};

ProjectCard.displayName = 'ProjectCard';
