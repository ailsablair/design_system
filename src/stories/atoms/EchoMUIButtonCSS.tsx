import React from 'react';
import { Button as MUIButton } from '@mui/material';
import './button.css'; // We'll need to make sure this exists or use the one from atoms/button/ if I didn't delete the css

/**
 * EchoMUIButtonCSS Props
 */
export interface EchoMUIButtonCSSProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'default' | 'large';
  leadingIcon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const EchoMUIButtonCSS: React.FC<EchoMUIButtonCSSProps> = ({
  variant = 'primary',
  size = 'default',
  leadingIcon,
  children,
  onClick,
  className = '',
}) => {
  return (
    <MUIButton
      className={`echo-button-css echo-button-css--${variant} echo-button-css--${size} ${className}`}
      onClick={onClick}
      startIcon={leadingIcon}
      sx={{
        // Minimal MUI overrides to let CSS take over
        textTransform: 'none',
        minWidth: 0,
        p: 0,
        '&:hover': { bgcolor: 'transparent' }
      }}
    >
      <span className="echo-button-css__content">
        {children}
      </span>
    </MUIButton>
  );
};
