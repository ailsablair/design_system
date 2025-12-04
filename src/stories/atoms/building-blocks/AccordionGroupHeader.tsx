import type { FC, ReactNode } from 'react';
import './accordionGroupHeader.css';

export interface AccordionGroupHeaderProps {
  /** Header title text */
  title?: string;
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Position of the header within a grouped accordion */
  position?: 'top' | 'middle' | 'bottom';
  /** Content type - header vs standard row */
  contentType?: 'default' | 'header';
  /** Whether this header represents a selected/active group */
  isSelected?: boolean;
  /** Open state used for styling chevron color */
  isOpen?: boolean;
  /** Icon style for the trailing toggle icon */
  iconStyle?: 'chevron' | 'none';
  /** Optional leading status or icon content */
  leadingIcon?: ReactNode;
  /** Optional trailing icon (overrides default chevron when provided) */
  trailingIcon?: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export const AccordionGroupHeader: FC<AccordionGroupHeaderProps> = ({
  title = 'Group accordion header',
  size = 'default',
  position = 'top',
  contentType = 'header',
  isSelected = false,
  isOpen = false,
  iconStyle = 'chevron',
  leadingIcon,
  trailingIcon,
  className = '',
}) => {
  const headerClasses = [
    'accordion-group-header',
    `accordion-group-header--size-${size}`,
    position !== 'middle' ? `accordion-group-header--position-${position}` : '',
    contentType === 'header' ? 'accordion-group-header--content-header' : '',
    isSelected ? 'accordion-group-header--state-selected' : '',
    iconStyle === 'chevron' ? 'accordion-group-header--icon-style-chevron' : '',
    isOpen ? 'accordion-group-header--open' : 'accordion-group-header--closed',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const renderDefaultChevron = () => {
    if (iconStyle !== 'chevron') {
      return null;
    }

    const getIconSize = () => {
      switch (size) {
        case 'small':
          return { width: 20, height: 20 };
        case 'large':
          return { width: 32, height: 32 };
        default:
          return { width: 28, height: 28 };
      }
    };

    const { width, height } = getIconSize();

    const pathD = (() => {
      if (width === 20) {
        return isOpen
          ? 'M6.175 12.8417L10 9.02508L13.825 12.8417L15 11.6667L10 6.66675L5 11.6667L6.175 12.8417Z'
          : 'M6.175 7.15002L10 10.975L13.825 7.15002L15 8.33336L10 13.3334L5 8.33336L6.175 7.15002Z';
      }

      if (width === 32) {
        return isOpen
          ? 'M9.88 20.5467L16 14.4401L22.12 20.5467L24 18.6667L16 10.6667L8 18.6667L9.88 20.5467Z'
          : 'M9.88 11.4399L16 17.5599L22.12 11.4399L24 13.3333L16 21.3333L8 13.3333L9.88 11.4399Z';
      }

      return isOpen
        ? 'M8.645 17.9783L14 12.6349L19.355 17.9783L21 16.3333L14 9.33325L7 16.3333L8.645 17.9783Z'
        : 'M8.645 10.01L14 15.365L19.355 10.01L21 11.6667L14 18.6667L7 11.6667L8.645 10.01Z';
    })();

    return (
      <svg
        className="accordion-group-header__chevron-icon"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <path d={pathD} fill="currentColor" />
      </svg>
    );
  };

  return (
    <div className={headerClasses} role="heading" aria-level={2}>
      {leadingIcon && (
        <div className="accordion-group-header__leading-icons">
          <div className="accordion-group-header__status-icon">{leadingIcon}</div>
        </div>
      )}

      <div className="accordion-group-header__title" title={title}>
        {title}
      </div>

      {(trailingIcon || iconStyle === 'chevron') && (
        <div className="accordion-group-header__trailing-icon">
          {trailingIcon || renderDefaultChevron()}
        </div>
      )}
    </div>
  );
};

export default AccordionGroupHeader;
