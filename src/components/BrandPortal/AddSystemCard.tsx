import React from 'react';
import type { AddSystemCardProps } from './types';
import { Card } from '../../stories/atoms/Card';
import styles from './AddSystemCard.module.css';

/**
 * AddSystemCard Component
 *
 * Empty-state card with a plus icon and "Add new brand" link.
 * Provides a visual affordance for users to add a new design system brand.
 *
 * Features:
 * - Large centered plus icon (180px)
 * - Underlined "Add new brand" link
 * - Accessible button semantics
 * - Fully responsive
 * - 100% token-based styling
 */
export const AddSystemCard: React.FC<AddSystemCardProps> = ({ onAddClick }) => {
  return (
    <Card
      size="small"
      type="empty-state"
      align="vertical"
      dropShadow={false}
      showButtonGroup={false}
      className={styles.addSystemCard}
    >
      <div className={styles.cardContent}>
        {/* Plus Icon */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 180 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.plusIcon}
          aria-hidden="true"
        >
          <path
            d="M142.5 97.5H97.5V142.5H82.5V97.5H37.5V82.5H82.5V37.5H97.5V82.5H142.5V97.5Z"
            fill="var(--color-primary-blue-blue-200)"
          />
        </svg>

        {/* Add New Brand Link */}
        <button
          className={styles.addLink}
          onClick={onAddClick}
          aria-label="Add new brand - Opens form to create a new design system brand"
        >
          Add new brand
        </button>
      </div>
    </Card>
  );
};

export default AddSystemCard;
