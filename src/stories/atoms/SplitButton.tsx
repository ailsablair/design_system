import React, { useState, useRef } from 'react';
import {
  ButtonGroup,
  Button,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  CircularProgress
} from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

export interface SplitButtonMenuItem {
  id: string;
  label: string;
  onClick: () => void;
}

export interface SplitButtonProps {
  /** Button variant */
  type?: 'primary' | 'secondary' | 'ghost';
  /** Button size */
  size?: 'extra-small' | 'small' | 'default' | 'large';
  /** Menu items */
  menuItems: SplitButtonMenuItem[];
  /** Loading state */
  loading?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Initial open state */
  isOpen?: boolean;
  /** Button content */
  children: React.ReactNode;
}

const StyledButtonGroup = styled(ButtonGroup)(() => ({
  boxShadow: 'none',
  '& .MuiButton-root': {
    textTransform: 'none',
    fontFamily: 'var(--type-typeface-archivo)',
    fontWeight: 500,
    borderRadius: 'var(--spacing-radius-4px)',
  }
}));

export const SplitButton: React.FC<SplitButtonProps> = ({
  type = 'primary',
  size = 'default',
  menuItems,
  loading = false,
  disabled = false,
  isOpen = false,
  children,
}) => {
  const [open, setOpen] = useState(isOpen);
  const anchorRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }
    setOpen(false);
  };

  const variant = type === 'primary' ? 'contained' : type === 'secondary' ? 'outlined' : 'text';
  
  // Mapping sizes to MUI sizes
  const muiSize = size === 'extra-small' ? 'small' : size === 'small' ? 'small' : size === 'large' ? 'large' : 'medium';

  return (
    <>
      <StyledButtonGroup
        variant={variant}
        disabled={disabled || loading}
        ref={anchorRef}
        aria-label="split button"
        size={muiSize}
      >
        <Button onClick={() => console.log('Main action clicked')}>
          {loading ? <CircularProgress size={20} color="inherit" /> : children}
        </Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDown />
        </Button>
      </StyledButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {menuItems.map((item) => (
                    <MenuItem
                      key={item.id}
                      onClick={(event) => {
                        item.onClick();
                        handleClose(event as any);
                      }}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default SplitButton;
