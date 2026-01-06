import React from 'react';
import { BrandCardProps } from './types';
import { Card } from '../../stories/atoms/Card';
import { Tag } from '../../stories/atoms/Tag';
import { EchoMUIButton } from '../../stories/atoms/EchoMUIButton';
import { Icon } from '../../stories/foundations/Icons/Icon';
import styles from './BrandCard.module.css';

/**
 * BrandCard Component
 *
 * Displays a brand's design system information including:
 * - Logo (with optional border)
 * - Client name and year tag
 * - Color palette swatches (Primary, Secondary, Tertiary, Quaternary)
 * - Typography information
 * - NPM command to generate tokens
 * - View button for detailed information
 *
 * Reusable for multiple brands (Echo/Bruce Power, CNL, etc.)
 *
 * Features:
 * - Data-driven with props
 * - Flexible color configuration
 * - Optional logo border variant
 * - Full token compliance
 * - Responsive design
 */
export const BrandCard: React.FC<BrandCardProps> = ({
  logoSrc,
  logoAltText,
  clientName,
  year,
  colors,
  typography,
  npmCommand,
  showLogoBorder = false,
  onViewClick,
}) => {
  return (
    <Card
      size="small"
      type="simple"
      align="vertical"
      dropShadow={false}
      showButtonGroup={false}
      className={styles.brandCard}
    >
      <div className={styles.cardContent}>
        {/* Header Section: Logo, Client Name, Year Tag */}
        <div className={styles.cardHeader}>
          <img
            src={logoSrc}
            alt={logoAltText}
            className={`${styles.logo} ${showLogoBorder ? styles.logoWithBorder : ''}`}
          />
          <h3 className={styles.clientName}>{clientName}</h3>
          <Tag
            label={year}
            size="small"
            variant="light-gray"
            shape="pill"
            leadingIcon={<Icon name="star" size="sm" opacity="full" />}
          />
        </div>

        {/* Color Palette Section */}
        <div className={styles.colorSection}>
          <div className={styles.colorRow}>
            <div className={styles.colorSwatch}>
              <p className={styles.colorLabel}>Primary</p>
              <div
                className={styles.colorBox}
                style={{ backgroundColor: colors.primary }}
              />
            </div>
            <div className={styles.colorSwatch}>
              <p className={styles.colorLabel}>Secondary</p>
              <div
                className={styles.colorBox}
                style={{ backgroundColor: colors.secondary }}
              />
            </div>
          </div>
          <div className={styles.colorRow}>
            <div className={styles.colorSwatch}>
              <p className={styles.colorLabel}>Tertiary</p>
              <div
                className={styles.colorBox}
                style={{ backgroundColor: colors.tertiary }}
              />
            </div>
            <div className={styles.colorSwatch}>
              <p className={styles.colorLabel}>Quaternary</p>
              <div
                className={styles.colorBox}
                style={{ backgroundColor: colors.quaternary }}
              />
            </div>
          </div>
        </div>

        {/* Typography Section */}
        <div className={styles.typographySection}>
          <div className={styles.typographyRow}>
            <p className={styles.typographyLabel}>Primary</p>
            <p className={styles.typographyValue}>{typography.primary}</p>
          </div>
          <div className={styles.typographyRow}>
            <p className={styles.typographyLabel}>Secondary</p>
            <p className={styles.typographyValue}>{typography.secondary}</p>
          </div>
        </div>

        {/* NPM Command Box */}
        <div className={styles.npmBox}>
          <p className={styles.npmText}>{npmCommand}</p>
        </div>
      </div>

      {/* View Button */}
      <div className={styles.buttonWrapper}>
        <EchoMUIButton
          variant="tertiary"
          size="small"
          fullWidth
          leadingIcon={<Icon name="visibility" size="sm" opacity="full" />}
          onClick={onViewClick}
        >
          View
        </EchoMUIButton>
      </div>
    </Card>
  );
};

export default BrandCard;
