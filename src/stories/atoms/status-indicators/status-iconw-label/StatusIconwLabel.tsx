import React, useMemo from 'react';
import { statusIconPaths } from '../status-icons/statusIcon.assets';
import { STATUS_ICON_MAP, getSizeConfig, getStepTheme, TOKENS } from './statusIconwLabel.styles';
import type {
  StatusIconwLabelProps,
  StatusIconwLabelStatus,
  StatusIconwLabelStep,
  StatusIconwLabelSize,
} from './statusIconwLabel.types';
import './statusIconwLabel.css';

/**
 * StatusIconwLabel Component
 * 
 * A flexible status indicator component that displays an icon with a label.
 * Supports 8 status types, 3 sizes, and 3 process steps (past, future, current).
 * 
 * Features:
 * - Token-driven inline SVG rendering
 * - Dynamic theming based on status and step
 * - Full disabled state support
 * - Accessibility: WCAG AA compliant contrast ratios
 * - Responsive sizing: small (22px), default (36px), large (48px)
 * 
 * @example
 * <StatusIconwLabel
 *   status="warning"
 *   step="current"
 *   size="default"
 *   label="Review Required"
 * />
 */
export const StatusIconwLabel: React.FC<StatusIconwLabelProps> = ({
  status = 'warning',
  step = 'current',
  size = 'default',
  label,
  disabled = false,
  className = '',
  'aria-label': ariaLabel,
}) => {
  // Get size configuration
  const sizeConfig = useMemo(() => getSizeConfig(size), [size]);

  // Get icon type for the status
  const iconType = useMemo(() => STATUS_ICON_MAP[status], [status]);

  // Get the icon SVG path
  const iconPath = useMemo(() => statusIconPaths[iconType], [iconType]);

  // Get theme configuration for current step and status
  const theme = useMemo(() => getStepTheme(status, step, size, disabled), [status, step, size, disabled]);

  // Container classes
  const containerClasses = [
    'status-iconwlabel',
    `status-iconwlabel--${size}`,
    `status-iconwlabel--status-${status}`,
    `status-iconwlabel--step-${step}`,
    disabled && 'status-iconwlabel--disabled',
    className,
  ].filter(Boolean).join(' ');

  // Icon container inline styles
  const iconContainerStyle: React.CSSProperties = {
    width: sizeConfig.circleDiameter,
    height: sizeConfig.circleDiameter,
    borderColor: theme.borderColor,
    borderWidth: theme.borderWidth,
    borderStyle: theme.borderStyle,
    backgroundColor: theme.backgroundColor,
  };

  // SVG inline styles
  const svgStyle: React.CSSProperties = {
    width: sizeConfig.iconSize,
    height: sizeConfig.iconSize,
    color: theme.iconColor,
    opacity: theme.iconOpacity,
  };

  // Label inline styles
  const labelStyle: React.CSSProperties = {
    fontSize: sizeConfig.fontSizeToken,
    lineHeight: sizeConfig.lineHeightToken,
    letterSpacing: sizeConfig.letterSpacingToken,
    color: theme.textColor,
    fontWeight: theme.fontWeight,
    fontFamily: TOKENS.type.archivo,
  };

  return (
    <div
      className={containerClasses}
      role="group"
      aria-label={ariaLabel || `${label} ${step} status: ${status}`}
    >
      {/* Icon Container */}
      <div
        className="status-iconwlabel__icon-container"
        style={iconContainerStyle}
      >
        {/* SVG Icon */}
        <svg
          className="status-iconwlabel__icon"
          viewBox="0 0 24 24"
          style={svgStyle}
          aria-hidden="true"
        >
          {iconPath}
        </svg>
      </div>

      {/* Label */}
      <span className="status-iconwlabel__label" style={labelStyle}>
        {label}
      </span>
    </div>
  );
};

// Display name for debugging
StatusIconwLabel.displayName = 'StatusIconwLabel';

export default StatusIconwLabel;