import React from 'react';
import './card.css';

export type CardBlockSize = 'small' | 'default' | 'large';

export interface CardBlockProps {
  size?: CardBlockSize;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  dropShadow?: boolean;
  className?: string;
}

/**
 * Building Blocks / Card
 * A minimal, composable card block used as a primitive for assembling layouts.
 * Uses design tokens and mirrors the sizing/spacing used by atoms/Card.
 */
export const CardBlock: React.FC<CardBlockProps> = ({
  size = 'default',
  title,
  subtitle,
  children,
  footer,
  dropShadow = true,
  className = '',
}) => {
  const classes = [
    'bb-card',
    `bb-card--${size}`,
    dropShadow ? 'bb-card--shadow' : 'bb-card--flat',
    className,
  ].filter(Boolean).join(' ');

  return (
    <section className={classes} role="region" aria-label={title || subtitle || 'Card'}>
      {(title || subtitle) && (
        <header className="bb-card__header">
          {title && <h3 className="bb-card__title">{title}</h3>}
          {subtitle && <p className="bb-card__subtitle">{subtitle}</p>}
        </header>
      )}
      {children && <div className="bb-card__body">{children}</div>}
      {footer && <footer className="bb-card__footer">{footer}</footer>}
    </section>
  );
};

export default CardBlock;
