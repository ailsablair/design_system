import React from 'react';
import { Button } from './Button';

export interface IButtonDefaultLargeDefaultProps {
  className?: string;
  onClick?: () => void;
}

export const ButtonDefaultLargeDefault: React.FC<IButtonDefaultLargeDefaultProps> = ({
  className,
  onClick,
}) => {
  return (
    <Button 
      position="middle" 
      size="large" 
      variant="primary" 
      className={className}
      onClick={onClick}
    >
      This is the middle
    </Button>
  );
};
