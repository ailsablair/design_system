import { Icon, type IconName } from '../../foundations/Icon';
import './accordionStatusBadge.css';

export type AccordionStatusBadgeTone =
  | 'warning'
  | 'complete'
  | 'locked'
  | 'comments'
  | 'notifications'
  | 'error'
  | 'note';

export type AccordionStatusBadgeVariant = 'default' | 'active' | 'filled';
export type AccordionStatusBadgeSize = 'small' | 'default' | 'large';

export interface AccordionStatusBadgeProps {
  /** Visual tone of the badge */
  tone: AccordionStatusBadgeTone;
  /** Size variant */
  size?: AccordionStatusBadgeSize;
  /** Visual treatment variant */
  variant?: AccordionStatusBadgeVariant;
  /** Disabled state */
  disabled?: boolean;
  /** Accessible label */
  'aria-label'?: string;
  /** Additional class name */
  className?: string;
}

const toneToIcon: Record<AccordionStatusBadgeTone, IconName> = {
  warning: 'warning',
  complete: 'check',
  locked: 'lock',
  comments: 'chat',
  notifications: 'notifications',
  error: 'close',
  note: 'description',
};

const sizeToIconDimension: Record<AccordionStatusBadgeSize, string> = {
  small: 'var(--icon-size-md)',
  default: 'calc(var(--icon-size-xl) + var(--spacing-sizing-4px))',
  large: 'calc(var(--icon-size-2xl) + var(--spacing-sizing-4px))',
};

export const AccordionStatusBadge: React.FC<AccordionStatusBadgeProps> = ({
  tone,
  size = 'default',
  variant = 'default',
  disabled = false,
  className,
  'aria-label': ariaLabel,
}) => {
  const iconDimension = sizeToIconDimension[size];

  const badgeClassName = [
    'accordion-status-badge',
    `accordion-status-badge--tone-${tone}`,
    `accordion-status-badge--size-${size}`,
    `accordion-status-badge--variant-${variant}`,
    disabled ? 'accordion-status-badge--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span
      className={badgeClassName}
      role="img"
      aria-label={ariaLabel ?? `${tone} status`}
    >
      <Icon
        name={toneToIcon[tone]}
        size="xl"
        opacity="full"
        className="accordion-status-badge__icon"
        style={{ width: iconDimension, height: iconDimension }}
      />
    </span>
  );
};

export default AccordionStatusBadge;
