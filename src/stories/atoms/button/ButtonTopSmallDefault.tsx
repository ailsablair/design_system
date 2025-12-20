import React from 'react';
import { Button } from './Button';

export interface IButtonTopSmallDefaultProps {
  className?: string;
  onClick?: () => void;
}

export const ButtonTopSmallDefault: React.FC<IButtonTopSmallDefaultProps> = ({
  className,
  onClick,
}) => {
  return (
    <Button 
      position="top" 
      size="small" 
      variant="primary" 
      className={className}
      onClick={onClick}
    >
      This is the top
    </Button>
  );
};
