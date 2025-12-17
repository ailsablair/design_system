import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import { Icon, type IconName, type IconSize } from '../foundations/Icon';
import './button.css';

export type ButtonSize = 'extra-small' | 'small' | 'default' | 'large';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'error' | 'warning' | 'info' | 'success';
export type ButtonState = 'default' | 'hover' | 'clicked' | 'focused' | 'loading' | 'disabled';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick' | 'children'> {
  children?: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  /** @deprecated Use `variant` instead. */
  type?: ButtonVariant;
  state?: ButtonState;
  /** Alt style */
  alt?: boolean;
  loading?: boolean;
  disabled?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  iconOnly?: boolean;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  htmlType?: 'button' | 'submit' | 'reset';
  width?: 'auto' | 'full';
}

type LegacyIconProps = {
  size?: number;
  className?: string;
};

const mapPixelsToIconSize = (pixels?: number): IconSize => {
  if (!pixels || pixels <= 14) {
    return 'sm';
  }
  if (pixels <= 18) {
    return 'md';
  }
  if (pixels <= 20) {
    return 'lg';
  }
  if (pixels <= 24) {
    return 'xl';
  }
  return '2xl';
};

const createButtonIcon = (iconName: IconName) => {
  const IconComponent = ({ size, className }: LegacyIconProps) => (
    <Icon
      name={iconName}
      size={mapPixelsToIconSize(size)}
      opacity="medium"
      className={className}
    />
  );

  IconComponent.displayName = `${iconName}-button-icon`;
  return IconComponent;
};

const LoadingIcon = ({ size, className }: LegacyIconProps) => (
  <Icon
    name="refresh"
    size={mapPixelsToIconSize(size)}
    opacity="medium"
    className={['button-loading-icon', className].filter(Boolean).join(' ')}
  />
);

export const AlarmIcon = createButtonIcon('alarm');
export const ArrowDownIcon = createButtonIcon('expand-more');
export const AlertIcon = createButtonIcon('warning');
export const CloseCircleIcon = createButtonIcon('close');
export const ChevronUpIcon = createButtonIcon('expand-less');
export const InformationIcon = createButtonIcon('info');

export const Button = ({
  children,
  size = 'default',
  variant,
  type: deprecatedType,
  state = 'default',
  alt = false,
  loading = false,
  disabled = false,
  leadingIcon,
  trailingIcon,
  iconOnly = false,
  icon,
  onClick,
  className = '',
  htmlType = 'button',
  width = 'auto',
  ...rest
}: ButtonProps): JSX.Element => {
  const actualState: ButtonState = disabled ? 'disabled' : loading ? 'loading' : state;
  const resolvedVariant: ButtonVariant = variant ?? deprecatedType ?? 'primary';
  const isAlt = alt;

  const getIconSize = () => {
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

  const iconSize = getIconSize();

  const { ['aria-label']: ariaLabel, ...restButtonProps } = rest;

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (disabled || loading) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };

  const isLoadingState = loading || actualState === 'loading';
  const iconOnlyContent = icon || leadingIcon;

  const buttonClasses = [
    'button',
    size,
    resolvedVariant,
    actualState,
    isAlt ? 'alt' : '',
    iconOnly ? 'icon-only' : '',
    width === 'full' ? 'full-width' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={htmlType}
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled || loading}
      aria-label={isLoadingState ? 'Loading...' : ariaLabel}
      {...restButtonProps}
    >
      {isLoadingState ? (
        <div className="button-loading-content">
          <LoadingIcon size={iconSize} />
        </div>
      ) : iconOnly ? (
        <div className="button-icon-only-content">
          {iconOnlyContent && <span className="button-icon">{iconOnlyContent}</span>}
        </div>
      ) : (
        <div className="button-content">
          {leadingIcon && <span className="button-icon button-leading-icon">{leadingIcon}</span>}
          {children && <span className="button-text">{children}</span>}
          {trailingIcon && <span className="button-icon button-trailing-icon">{trailingIcon}</span>}
        </div>
      )}
    </button>
  );
};

export { LoadingIcon };
