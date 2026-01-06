import React from 'react';
import { PortalHeaderProps } from './types';
import { EchoMUIButton } from '../../stories/atoms/EchoMUIButton';
import { Icon } from '../../stories/foundations/Icons/Icon';
import styles from './PortalHeader.module.css';

/**
 * PortalHeader Component
 *
 * Fixed navigation header displaying the NPX logo, "Design System Portal" title,
 * and a "Create design system" CTA button.
 *
 * Features:
 * - Fixed positioning at top of page
 * - 140px height with asymmetric padding
 * - Fully responsive (stacks on mobile)
 * - 100% token-based styling
 */
export const PortalHeader: React.FC<PortalHeaderProps> = ({
  logoSrc,
  logoAltText = 'NPX Cube logo',
  title,
  ctaText,
  onCtaClick,
}) => {
  return (
    <header className={styles.portalHeader}>
      <div className={styles.navContent}>
        {/* Logo + Title Section */}
        <div className={styles.logoHeader}>
          <img
            src={logoSrc}
            alt={logoAltText}
            className={styles.logo}
          />
          <h1 className={styles.title}>{title}</h1>
        </div>

        {/* CTA Button */}
        <div className={styles.ctaSection}>
          <EchoMUIButton
            variant="primary"
            size="large"
            leadingIcon={<Icon name="star" size="lg" opacity="full" />}
            onClick={onCtaClick}
          >
            {ctaText}
          </EchoMUIButton>
        </div>
      </div>
    </header>
  );
};

export default PortalHeader;
