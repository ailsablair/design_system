import React from 'react';
import { Button, type ButtonProps } from './Button';
import { Icon } from '../foundations/Icon';

export type OrganizationalButtonType = 'filter' | 'sort' | 'more-actions';
export type OrganizationalButtonSize = 'extra-small' | 'small' | 'default' | 'large';
export type OrganizationalButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost';

export interface OrganizationalButtonProps extends Omit<ButtonProps, 'children' | 'leadingIcon' | 'trailingIcon' | 'size' | 'variant'> {
  /** Type of organizational button */
  buttonType: OrganizationalButtonType;
  /** Button size variant */
  size?: OrganizationalButtonSize;
  /** Button variant/type */
  variant?: OrganizationalButtonVariant;
}

const getIconName = (buttonType: OrganizationalButtonType) => {
  switch (buttonType) {
    case 'filter':
      return 'filter-list';
    case 'sort':
      return 'sort';
    case 'more-actions':
      return 'more-vert';
    default:
      return 'filter-list';
  }
};

const getButtonLabel = (buttonType: OrganizationalButtonType) => {
  switch (buttonType) {
    case 'filter':
      return 'Filter';
    case 'sort':
      return 'Sort';
    case 'more-actions':
      return 'More actions';
    default:
      return 'Filter';
  }
};

const getIconSize = (size: OrganizationalButtonSize) => {
  switch (size) {
    case 'extra-small':
      return 14;
    case 'small':
      return 14;
    case 'default':
      return 18;
    case 'large':
      return 20;
    default:
      return 18;
  }
};

/**
 * Organizational Buttons are specialized button components for common data management actions.
 * They include Filter, Sort, and More Actions buttons with proper icons and consistent styling
 * across different sizes and variants.
 * 
 * Available button types:
 * - **Filter**: For filtering data sets and lists
 * - **Sort**: For sorting data in ascending/descending order
 * - **More Actions**: For additional actions in a dropdown or overflow menu
 * 
 * All buttons support the standard size and variant options (primary, secondary, tertiary, ghost)
 * and include appropriate icons with proper sizing for each button size.
 */
export const OrganizationalButton: React.FC<OrganizationalButtonProps> = ({
  buttonType,
  size = 'default',
  variant = 'primary',
  ...rest
}) => {
  const iconName = getIconName(buttonType);
  const label = getButtonLabel(buttonType);
  const iconSize = getIconSize(size);

  return (
    <Button
      size={size}
      variant={variant}
      leadingIcon={<Icon name={iconName} size="sm" />}
      {...rest}
    >
      {label}
    </Button>
  );
};

// Individual button components for easier usage
export const FilterButton: React.FC<Omit<OrganizationalButtonProps, 'buttonType'>> = (props) => (
  <OrganizationalButton buttonType="filter" {...props} />
);

export const SortButton: React.FC<Omit<OrganizationalButtonProps, 'buttonType'>> = (props) => (
  <OrganizationalButton buttonType="sort" {...props} />
);

export const MoreActionsButton: React.FC<Omit<OrganizationalButtonProps, 'buttonType'>> = (props) => (
  <OrganizationalButton buttonType="more-actions" {...props} />
);

export default OrganizationalButton;
