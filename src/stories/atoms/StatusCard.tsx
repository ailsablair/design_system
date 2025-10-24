import React from 'react';
import './statusCard.css';

export type StatusKind = 'warning' | 'error' | 'info' | 'success';
export type StatusCardSize = 'small' | 'default' | 'large';

export interface StatusCardProps {
  status?: StatusKind;
  size?: StatusCardSize;
  title?: string;
  description?: string;
  /** Optional action area (buttons, links, etc) */
  actions?: React.ReactNode;
  /** Optional close icon click */
  onClose?: () => void;
  className?: string;
  'aria-label'?: string;
}

const WarningIcon = () => (
  <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <path d="M36.8333 39.667H31.1666V25.5003H36.8333M36.8333 51.0003H31.1666V45.3337H36.8333M2.83325 59.5003H65.1666L33.9999 5.66699L2.83325 59.5003Z" fill="#F4A403"/>
  </svg>
);

const ErrorIcon = () => (
  <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <path d="M34.0001 5.66699C49.6684 5.66699 62.3334 18.332 62.3334 34.0003C62.3334 49.6687 49.6684 62.3337 34.0001 62.3337C18.3317 62.3337 5.66675 49.6687 5.66675 34.0003C5.66675 18.332 18.3317 5.66699 34.0001 5.66699ZM44.1717 19.8337L34.0001 30.0053L23.8284 19.8337L19.8334 23.8287L30.0051 34.0003L19.8334 44.172L23.8284 48.167L34.0001 37.9953L44.1717 48.167L48.1667 44.172L37.9951 34.0003L48.1667 23.8287L44.1717 19.8337Z" fill="#CE2031"/>
  </svg>
);

const InfoIcon = () => (
  <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <path d="M36.8334 25.5003H31.1667V19.8337H36.8334M36.8334 48.167H31.1667V31.167H36.8334M34.0001 5.66699C30.2793 5.66699 26.5949 6.39986 23.1574 7.82374C19.7198 9.24762 16.5964 11.3346 13.9654 13.9656C8.65186 19.2792 5.66675 26.4859 5.66675 34.0003C5.66675 41.5148 8.65186 48.7215 13.9654 54.035C16.5964 56.666 19.7198 58.753 23.1574 60.1769C26.5949 61.6008 30.2793 62.3337 34.0001 62.3337C41.5145 62.3337 48.7212 59.3485 54.0348 54.035C59.3483 48.7215 62.3334 41.5148 62.3334 34.0003C62.3334 30.2795 61.6006 26.5952 60.1767 23.1576C58.7528 19.7201 56.6658 16.5966 54.0348 13.9656C51.4038 11.3346 48.2803 9.24762 44.8428 7.82374C41.4052 6.39986 37.7209 5.66699 34.0001 5.66699Z" fill="#366F97"/>
  </svg>
);

const SuccessIcon = () => (
  <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <path d="M34.0001 5.66699C18.4167 5.66699 5.66675 18.417 5.66675 34.0003C5.66675 49.5837 18.4167 62.3337 34.0001 62.3337C49.5834 62.3337 62.3334 49.5837 62.3334 34.0003C62.3334 18.417 49.5834 5.66699 34.0001 5.66699ZM28.3334 48.167L14.1667 34.0003L18.1617 30.0053L28.3334 40.1487L49.8384 18.6437L53.8334 22.667L28.3334 48.167Z" fill="#70CC67"/>
  </svg>
);

const STATUS_TO_ICON: Record<StatusKind, React.ReactElement> = {
  warning: <WarningIcon />,
  error: <ErrorIcon />,
  info: <InfoIcon />,
  success: <SuccessIcon />,
};

export const StatusCard: React.FC<StatusCardProps> = ({
  status = 'info',
  size = 'default',
  title = 'Status title',
  description = 'This is body text that can span multiple lines within the card.',
  actions,
  onClose,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const classes = [
    'status-card',
    `status-card--${status}`,
    `status-card--${size}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} aria-label={ariaLabel}>
      <div className="status-card__content">
        <div className="status-card__icon" aria-hidden>
          {STATUS_TO_ICON[status]}
        </div>
        <div className="status-card__text">
          <h3 className="status-card__title">{title}</h3>
          <p className="status-card__description">{description}</p>
        </div>
        {onClose && (
          <button className="status-card__close" type="button" aria-label="Close" onClick={onClose}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L4 12M4 4L12 12" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>
      {actions && (
        <div className="status-card__actions" role="group">
          {actions}
        </div>
      )}
    </div>
  );
};

export default StatusCard;
