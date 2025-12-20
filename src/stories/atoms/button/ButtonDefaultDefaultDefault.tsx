import React from 'react';
import { Button } from './Button';

export interface IButtonDefaultDefaultDefaultProps {
  className?: string;
  onClick?: () => void;
}

export const ButtonDefaultDefaultDefault: React.FC<IButtonDefaultDefaultDefaultProps> = ({
  className,
  onClick,
}) => {
  return (
    <Button 
      position="middle" 
      size="default" 
      variant="primary" 
      className={className}
      onClick={onClick}
    >
      This is the middle
    </Button>
  );
};
