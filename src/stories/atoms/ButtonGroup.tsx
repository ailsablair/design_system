import React from 'react';
import './buttonGroup.css';

export interface ButtonGroupProps {
  /** Size variant for all buttons in the group */
  size?: 'extra-small' | 'small' | 'default' | 'large';
  /** Group layout type */
  type?: 'default' | 'split' | 'icon-only' | 'many-icons' | 'table-actions';
  /** Button group state/variant */
  state?: 'default' | 'secondary' | 'tertiary' | 'ghost' | 'multi';
  /** Button group content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Orientation of the button group */
  orientation?: 'horizontal' | 'vertical';
  /** Gap between buttons */
  gap?: 'none' | 'small' | 'default' | 'large';
  /** Full width styling */
  fullWidth?: boolean;
  /** Whether buttons should be connected with shared borders */
  connected?: boolean;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  size = 'default',
  type = 'default',
  state = 'default',
  children,
  className = '',
  orientation = 'horizontal',
  gap = 'default',
  fullWidth = false,
  connected = false,
}) => {
  const groupClasses = [
    'button-group',
    `button-group--size-${size}`,
    `button-group--type-${type}`,
    `button-group--state-${state}`,
    `button-group--orientation-${orientation}`,
    `button-group--gap-${gap}`,
    connected ? 'button-group--connected' : '',
    fullWidth ? 'button-group--full-width' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      className={groupClasses}
      role="group"
      aria-label="Button group"
    >
      {children}
    </div>
  );
};

// Example button group layouts based on Figma designs
export const ButtonGroupLayouts = {
  // Default groups
  DefaultGroup: ({ children }: { children: React.ReactNode }) => (
    <ButtonGroup size="default" type="default">
      {children}
    </ButtonGroup>
  ),

  SplitGroup: ({ children }: { children: React.ReactNode }) => (
    <ButtonGroup size="default" type="split">
      {children}
    </ButtonGroup>
  ),

  IconOnlyGroup: ({ children }: { children: React.ReactNode }) => (
    <ButtonGroup size="default" type="icon-only">
      {children}
    </ButtonGroup>
  ),

  // Many-icons groups (toolbar style)
  ManyIconsDefault: ({ children }: { children: React.ReactNode }) => (
    <ButtonGroup size="small" type="many-icons" state="default" connected>
      {children}
    </ButtonGroup>
  ),

  ManyIconsSecondary: ({ children }: { children: React.ReactNode }) => (
    <ButtonGroup size="small" type="many-icons" state="secondary" connected>
      {children}
    </ButtonGroup>
  ),

  ManyIconsTertiary: ({ children }: { children: React.ReactNode }) => (
    <ButtonGroup size="small" type="many-icons" state="tertiary" connected>
      {children}
    </ButtonGroup>
  ),

  ManyIconsGhost: ({ children }: { children: React.ReactNode }) => (
    <ButtonGroup size="small" type="many-icons" state="ghost" connected>
      {children}
    </ButtonGroup>
  ),

  // Table actions groups
  TableActionsDefault: ({ children }: { children: React.ReactNode }) => (
    <ButtonGroup size="small" type="table-actions" state="default">
      {children}
    </ButtonGroup>
  ),

  TableActionsGhost: ({ children }: { children: React.ReactNode }) => (
    <ButtonGroup size="small" type="table-actions" state="ghost">
      {children}
    </ButtonGroup>
  ),

  TableActionsMulti: ({ children }: { children: React.ReactNode }) => (
    <ButtonGroup size="small" type="table-actions" state="multi">
      {children}
    </ButtonGroup>
  ),
};

// Icon components for button groups
export const AlignRightIcon: React.FC<{ size?: number; opacity?: number }> = ({ size = 14, opacity = 0.7 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity={opacity}>
      <path d="M11.6667 1.1665H12.8334V12.8332H11.6667V1.1665ZM1.16675 5.83317H10.5001V4.08317H1.16675V5.83317ZM4.66675 9.9165H10.5001V8.1665H4.66675V9.9165Z" fill="currentColor"/>
    </g>
  </svg>
);

export const AlignCenterIcon: React.FC<{ size?: number; opacity?: number }> = ({ size = 14, opacity = 0.7 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity={opacity}>
      <path d="M12.8334 6.41667H9.91672V3.5H8.16672V6.41667H5.83338V1.75H4.08338V6.41667H1.05005V7.58333H4.08338V12.25H5.83338V7.58333H8.16672V10.5H9.91672V7.58333H12.8334V6.41667Z" fill="currentColor"/>
    </g>
  </svg>
);

export const AlignDistributeIcon: React.FC<{ size?: number; opacity?: number }> = ({ size = 14, opacity = 0.7 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity={opacity}>
      <path d="M2.33341 12.8332H1.16675V1.1665H2.33341V12.8332ZM12.8334 1.1665H11.6667V12.8332H12.8334V1.1665ZM7.87508 4.08317H6.12508V9.9165H7.87508V4.08317Z" fill="currentColor"/>
    </g>
  </svg>
);

export const AlignLeftIcon: React.FC<{ size?: number; opacity?: number }> = ({ size = 14, opacity = 0.7 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity={opacity}>
      <path d="M2.33341 12.8332H1.16675V1.1665H2.33341V12.8332ZM12.8334 4.08317H3.50008V5.83317H12.8334V4.08317ZM9.33341 8.1665H3.50008V9.9165H9.33341V8.1665Z" fill="currentColor"/>
    </g>
  </svg>
);

export const FilterIcon: React.FC<{ size?: number; opacity?: number }> = ({ size = 14, opacity = 0.6 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity={opacity}>
      <path d="M8.16662 7V11.5967C8.18996 11.7717 8.13162 11.9583 7.99746 12.0808C7.76996 12.3083 7.40246 12.3083 7.17496 12.0808L6.00246 10.9083C5.86829 10.7742 5.80996 10.5933 5.83329 10.4242V7H5.81579L2.45579 2.695C2.25746 2.44417 2.30412 2.07667 2.55496 1.87833C2.66579 1.79667 2.78829 1.75 2.91662 1.75H11.0833C11.2116 1.75 11.3341 1.79667 11.445 1.87833C11.6958 2.07667 11.7425 2.44417 11.5441 2.695L8.18412 7H8.16662Z" fill="currentColor"/>
    </g>
  </svg>
);

export const SortIcon: React.FC<{ size?: number; opacity?: number }> = ({ size = 14, opacity = 0.6 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity={opacity}>
      <path d="M11.0832 9.91667H12.8332L10.4998 12.25L8.1665 9.91667H9.9165V1.75H11.0832M1.1665 9.91667H6.99984V11.0833H1.1665M3.49984 2.91667V4.08333H1.1665V2.91667M1.1665 6.41667H5.24984V7.58333H1.1665V6.41667Z" fill="currentColor"/>
    </g>
  </svg>
);

export const MoreActionsIcon: React.FC<{ size?: number; opacity?: number }> = ({ size = 14, opacity = 0.6 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity={opacity}>
      <path d="M7.00016 9.3335C7.30958 9.3335 7.60633 9.45641 7.82512 9.67521C8.04391 9.894 8.16683 10.1907 8.16683 10.5002C8.16683 10.8096 8.04391 11.1063 7.82512 11.3251C7.60633 11.5439 7.30958 11.6668 7.00016 11.6668C6.69074 11.6668 6.394 11.5439 6.17521 11.3251C5.95641 11.1063 5.8335 10.8096 5.8335 10.5002C5.8335 10.1907 5.95641 9.894 6.17521 9.67521C6.394 9.45641 6.69074 9.3335 7.00016 9.3335ZM7.00016 5.8335C7.30958 5.8335 7.60633 5.95641 7.82512 6.17521C8.04391 6.394 8.16683 6.69074 8.16683 7.00016C8.16683 7.30958 8.04391 7.60633 7.82512 7.82512C7.60633 8.04391 7.30958 8.16683 7.00016 8.16683C6.69074 8.16683 6.394 8.04391 6.17521 7.82512C5.95641 7.60633 5.8335 7.30958 5.8335 7.00016C5.8335 6.69074 5.95641 6.394 6.17521 6.17521C6.394 5.95641 6.69074 5.8335 7.00016 5.8335ZM7.00016 2.3335C7.30958 2.3335 7.60633 2.45641 7.82512 2.6752C8.04391 2.894 8.16683 3.19074 8.16683 3.50016C8.16683 3.80958 8.04391 4.10633 7.82512 4.32512C7.60633 4.54391 7.30958 4.66683 7.00016 4.66683C6.69074 4.66683 6.394 4.54391 6.17521 4.32512C5.95641 4.10633 5.8335 3.80958 5.8335 3.50016C5.8335 3.19074 5.95641 2.894 6.17521 2.6752C6.394 2.45641 6.69074 2.3335 7.00016 2.3335Z" fill="currentColor"/>
    </g>
  </svg>
);
