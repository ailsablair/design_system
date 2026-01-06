import React from 'react';
import { BrandPortalProps } from './types';
import { PortalHeader } from './PortalHeader';
import { BrandCard } from './BrandCard';
import { TemplateCard } from './TemplateCard';
import { AddSystemCard } from './AddSystemCard';
import styles from './BrandPortal.module.css';

/**
 * BrandPortal Component
 *
 * Main page-level composition component that displays the Design System Portal.
 * Arranges brand cards and template information in a responsive 3-column grid layout.
 *
 * Layout Structure:
 * - Row 1: FixedNav (sticky header)
 * - Row 2: 3-column grid
 *   - Column 1: First brand card (Echo/Bruce Power)
 *   - Column 2: Second brand card (CNL)
 *   - Column 3: Template card (top) + Add System card (bottom)
 *
 * Features:
 * - Fully responsive (3 columns → 2 columns → 1 column)
 * - Data-driven with props
 * - Fixed header with content offset
 * - 100% token-based styling
 * - Accessibility-first design
 *
 * @component
 */
export const BrandPortal: React.FC<BrandPortalProps> = ({
  brands = [],
  templateCard = {
    title: 'Template',
    subtitle: 'White-label design system',
    bodyText: `A white-label design system is a flexible, reusable framework that enables rapid customization of digital products to align with various brand identities while maintaining design consistency and user experience quality across all design and development work.

All brand assets are customizable, including:
• Logo
• Brand colours
• Typeface(s)
• Icons`,
  },
  onAddSystemClick,
  onCreateDesignSystemClick,
}) => {
  // Extract first two brands (Echo and CNL)
  const [brandOne, brandTwo] = brands.slice(0, 2);

  return (
    <div className={styles.brandPortal}>
      {/* Fixed Header */}
      <PortalHeader
        logoSrc="https://cdn.builder.io/api/v1/image/assets%2Faf2bc788bfa84b7e872eaeeb48723cea%2F058942b012f7461b83e345169733ca03?format=webp&width=800"
        logoAltText="NPX Cube logo"
        title="Design System Portal"
        ctaText="Create design system"
        onCtaClick={onCreateDesignSystemClick}
      />

      {/* Main Content Grid */}
      <main className={styles.portalContent}>
        <div className={styles.grid}>
          {/* Column 1: First Brand Card (Echo) */}
          {brandOne && (
            <div className={styles.column}>
              <BrandCard {...brandOne} />
            </div>
          )}

          {/* Column 2: Second Brand Card (CNL) */}
          {brandTwo && (
            <div className={styles.column}>
              <BrandCard {...brandTwo} />
            </div>
          )}

          {/* Column 3: Template Card + Add System Card (stacked vertically) */}
          <div className={styles.column}>
            <div className={styles.columnStack}>
              <TemplateCard {...templateCard} />
              <AddSystemCard onAddClick={onAddSystemClick} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BrandPortal;
