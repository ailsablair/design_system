import React from 'react';
import './buttonGroup.css';

export interface ButtonGroupProps {
  /** Size variant for all buttons in the group */
  size?: 'extra-small' | 'small' | 'default' | 'large';
  /** Group layout type */
  type?: 'default' | 'split' | 'icon-only';
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
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  size = 'default',
  type = 'default',
  children,
  className = '',
  orientation = 'horizontal',
  gap = 'default',
  fullWidth = false,
}) => {
  return (
    <div
      className={`button-group ${size} ${type} ${orientation} gap-${gap} ${fullWidth ? 'full-width' : ''} ${className}`}
      role="group"
      aria-label="Button group"
    >
      {children}
    </div>
  );
};

// Example button group layouts based on Figma designs
export const ButtonGroupLayouts = {
  // Small size groups
  SmallDefault: ({ children }: { children: React.ReactNode }) => (
    <ButtonGroup size="small" type="default">
      {children}
    </ButtonGroup>
  ),
  
  SmallSplit: ({ children }: { children: React.ReactNode }) => (
    <ButtonGroup size="small" type="split">
      {children}
    </ButtonGroup>
  ),
  
  SmallIconOnly: ({ children }: { children: React.ReactNode }) => (
    <ButtonGroup size="small" type="icon-only">
      {children}
    </ButtonGroup>
  ),
  
  // Default size groups
  DefaultDefault: ({ children }: { children: React.ReactNode }) => (
    <ButtonGroup size="default" type="default">
      {children}
    </ButtonGroup>
  ),
  
  DefaultSplit: ({ children }: { children: React.ReactNode }) => (
    <ButtonGroup size="default" type="split">
      {children}
    </ButtonGroup>
  ),
  
  DefaultIconOnly: ({ children }: { children: React.ReactNode }) => (
    <ButtonGroup size="default" type="icon-only">
      {children}
    </ButtonGroup>
  ),
  
  // Large size groups
  LargeDefault: ({ children }: { children: React.ReactNode }) => (
    <ButtonGroup size="large" type="default">
      {children}
    </ButtonGroup>
  ),
  
  LargeSplit: ({ children }: { children: React.ReactNode }) => (
    <ButtonGroup size="large" type="split">
      {children}
    </ButtonGroup>
  ),
  
  LargeIconOnly: ({ children }: { children: React.ReactNode }) => (
    <ButtonGroup size="large" type="icon-only">
      {children}
    </ButtonGroup>
  ),
  
  // Extra small size groups
  ExtraSmallDefault: ({ children }: { children: React.ReactNode }) => (
    <ButtonGroup size="extra-small" type="default">
      {children}
    </ButtonGroup>
  ),
  
  ExtraSmallSplit: ({ children }: { children: React.ReactNode }) => (
    <ButtonGroup size="extra-small" type="split">
      {children}
    </ButtonGroup>
  ),
  
  ExtraSmallIconOnly: ({ children }: { children: React.ReactNode }) => (
    <ButtonGroup size="extra-small" type="icon-only">
      {children}
    </ButtonGroup>
  ),
};
