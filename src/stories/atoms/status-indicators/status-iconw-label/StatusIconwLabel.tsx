import {
  STATUS_ICON_W_LABEL_ASSETS,
  getStatusIconwLabelAsset,
  type StatusIconwLabelAssetMap,
  type StatusIconwLabelSize,
  type StatusIconwLabelState,
  type StatusIconwLabelStatus,
} from './statusIconwLabel.assets';
import './statusIconwLabel.css';

export interface StatusIconwLabelProps {
  status?: StatusIconwLabelStatus;
  state?: StatusIconwLabelState;
  size?: StatusIconwLabelSize;
  label: string;
  description?: string;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  assets?: StatusIconwLabelAssetMap;
  'aria-label'?: string;
}

const sizeClassName = (size: StatusIconwLabelSize): string => `status-iconwlabel__icon--size-${size}`;

export const StatusIconwLabel: React.FC<StatusIconwLabelProps> = ({
  status = 'warning',
  state = 'empty',
  size = 24,
  label,
  description,
  orientation = 'horizontal',
  className = '',
  assets = STATUS_ICON_W_LABEL_ASSETS,
  'aria-label': ariaLabel,
}) => {
  const iconSource = getStatusIconwLabelAsset(status, state, size, assets);

  const containerClasses = [
    'status-iconwlabel',
    orientation === 'vertical' && 'status-iconwlabel--vertical',
    className,
  ].filter(Boolean).join(' ');

  const iconClasses = [
    'status-iconwlabel__icon',
    sizeClassName(size),
  ].filter(Boolean).join(' ');

  return (
    <div
      className={containerClasses}
      role="group"
      aria-label={ariaLabel || `${label} ${state} ${status} status icon`}
    >
      <span className={iconClasses} aria-hidden="true">
        <img src={iconSource} alt="" loading="lazy" aria-hidden="true" />
      </span>
      <span className="status-iconwlabel__text">
        <span className="status-iconwlabel__label">{label}</span>
        {description && (
          <span className="status-iconwlabel__description">{description}</span>
        )}
      </span>
    </div>
  );
};
