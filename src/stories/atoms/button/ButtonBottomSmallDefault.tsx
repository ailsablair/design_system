import React from 'react';
import { Button } from './Button';

export interface IButtonBottomSmallDefaultProps {
  className?: string;
  onClick?: () => void;
}

export const ButtonBottomSmallDefault: React.FC<IButtonBottomSmallDefaultProps> = ({
  className,
  onClick,
}) => {
  return (
    <Button 
      position="bottom" 
      size="small" 
      variant="primary" 
      className={className}
      onClick={onClick}
    >
      This is the bottom
    </Button>
  );
};
