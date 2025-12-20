import React from 'react';
import { Button } from './Button';

export interface IButtonBottomDefaultDefaultProps {
  className?: string;
  onClick?: () => void;
}

export const ButtonBottomDefaultDefault: React.FC<IButtonBottomDefaultDefaultProps> = ({
  className,
  onClick,
}) => {
  return (
    <Button 
      position="bottom" 
      size="default" 
      variant="primary" 
      className={className}
      onClick={onClick}
    >
      This is the bottom
    </Button>
  );
};
