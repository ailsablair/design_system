import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Alert } from './Alert';

describe('Alert Component', () => {
  it('renders with default props', () => {
    render(<Alert />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText('This is an alert banner for the Echo app')).toBeInTheDocument();
  });

  it('renders custom title and description', () => {
    render(
      <Alert 
        title="Custom Title" 
        description="Custom Description" 
        subtext={true}
      />
    );
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.getByText('Custom Description')).toBeInTheDocument();
  });

  it('hides description when subtext is false', () => {
    render(
      <Alert 
        title="Custom Title" 
        description="Custom Description" 
        subtext={false}
      />
    );
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.queryByText('Custom Description')).not.toBeInTheDocument();
  });

  it('hides leading icon when leadingIcon is false', () => {
    render(<Alert leadingIcon={false} />);
    const alert = screen.getByRole('alert');
    expect(alert.querySelector('.alert__leading-icon')).not.toBeInTheDocument();
  });

  it('hides trailing icon when trailingIcon is false', () => {
    render(<Alert trailingIcon={false} />);
    const alert = screen.getByRole('alert');
    expect(alert.querySelector('.alert__close-button')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    render(<Alert onClose={onClose} trailingIcon={true} />);
    
    const closeButton = screen.getByRole('button', { name: 'Close alert' });
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('applies correct CSS classes for size variants', () => {
    const { rerender } = render(<Alert size="small" />);
    expect(screen.getByRole('alert')).toHaveClass('alert--small');

    rerender(<Alert size="default" />);
    expect(screen.getByRole('alert')).toHaveClass('alert--default');

    rerender(<Alert size="large" />);
    expect(screen.getByRole('alert')).toHaveClass('alert--large');
  });

  it('applies correct CSS classes for color variants', () => {
    const { rerender } = render(<Alert colour="warning" />);
    expect(screen.getByRole('alert')).toHaveClass('alert--warning');

    rerender(<Alert colour="error" />);
    expect(screen.getByRole('alert')).toHaveClass('alert--error');

    rerender(<Alert colour="success" />);
    expect(screen.getByRole('alert')).toHaveClass('alert--success');
  });

  it('applies border class when border is true', () => {
    render(<Alert border={true} />);
    expect(screen.getByRole('alert')).toHaveClass('alert--border');
  });

  it('applies no-border class when border is false', () => {
    render(<Alert border={false} />);
    expect(screen.getByRole('alert')).toHaveClass('alert--no-border');
  });

  it('sets aria-label when provided', () => {
    render(<Alert aria-label="Custom alert message" />);
    expect(screen.getByRole('alert')).toHaveAttribute('aria-label', 'Custom alert message');
  });

  it('applies custom className', () => {
    render(<Alert className="custom-class" />);
    expect(screen.getByRole('alert')).toHaveClass('custom-class');
  });
});
