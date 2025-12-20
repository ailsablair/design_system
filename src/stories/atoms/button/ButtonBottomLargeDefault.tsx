import React from 'react';
import { Button } from './Button';

export interface IButtonBottomLargeDefaultProps {
  className?: string;
  onClick?: () => void;
}

export const ButtonBottomLargeDefault: React.FC<IButtonBottomLargeDefaultProps> = ({
  className,
  onClick,
}) => {
  return (
    <Button 
      position="bottom" 
      size="large" 
      variant="primary" 
      className={className}
      onClick={onClick}
    >
      This is the bottom
    </Button>
  );
};
