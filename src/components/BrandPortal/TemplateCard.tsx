import React from 'react';
import { TemplateCardProps } from './types';
import { Card } from '../../stories/atoms/Card';
import { EchoMUIButton } from '../../stories/atoms/EchoMUIButton';
import { Icon } from '../../stories/foundations/Icons/Icon';
import styles from './TemplateCard.module.css';

/**
 * TemplateCard Component
 *
 * Displays information about the white-label design system template,
 * explaining the concept and benefits with a call-to-action button.
 *
 * Features:
 * - Large card with light blue background (#F4FCFF)
 * - Heading, subheading, and multi-line body text
 * - View button for detailed information
 * - Fully responsive
 * - 100% token-based styling
 */
export const TemplateCard: React.FC<TemplateCardProps> = ({
  title,
  subtitle,
  bodyText,
  onViewClick,
}) => {
  return (
    <Card
      size="large"
      type="simple"
      align="vertical"
      dropShadow={false}
      showButtonGroup={false}
      className={styles.templateCard}
    >
      <div className={styles.cardContent}>
        {/* Heading Section */}
        <div className={styles.headingSection}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        {/* Body Text */}
        <p className={styles.bodyText}>{bodyText}</p>

        {/* View Button */}
        <EchoMUIButton
          variant="tertiary"
          size="large"
          fullWidth
          leadingIcon={<Icon name="visibility" size="lg" opacity="full" />}
          onClick={onViewClick}
        >
          View
        </EchoMUIButton>
      </div>
    </Card>
  );
};

export default TemplateCard;
