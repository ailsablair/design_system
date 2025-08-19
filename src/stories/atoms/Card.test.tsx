import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card Component', () => {
  it('renders a simple card with default props', () => {
    render(<Card />);
    
    expect(screen.getByText('This is a heading')).toBeInTheDocument();
    expect(screen.getByText('This is a subheading')).toBeInTheDocument();
  });

  it('renders different card types', () => {
    const { rerender } = render(<Card type="simple" />);
    expect(screen.getByText('This is a heading')).toBeInTheDocument();

    rerender(<Card type="icon" />);
    expect(screen.getByText('This is simple text')).toBeInTheDocument();

    rerender(<Card type="stat" statValue="42%" statLabel="completion" />);
    expect(screen.getByText('42%')).toBeInTheDocument();
    expect(screen.getByText('completion')).toBeInTheDocument();
  });

  it('handles custom children correctly', () => {
    render(
      <Card>
        <div data-testid="custom-content">Custom content</div>
      </Card>
    );
    
    expect(screen.getByTestId('custom-content')).toBeInTheDocument();
    expect(screen.getByText('Custom content')).toBeInTheDocument();
  });

  it('applies correct CSS classes for different props', () => {
    const { container } = render(
      <Card 
        size="large" 
        type="simple" 
        align="vertical" 
        dropShadow={false}
        className="custom-class"
      />
    );
    
    const cardElement = container.firstChild as HTMLElement;
    expect(cardElement).toHaveClass('card');
    expect(cardElement).toHaveClass('card-size-large');
    expect(cardElement).toHaveClass('card-type-simple');
    expect(cardElement).toHaveClass('card-align-vertical');
    expect(cardElement).toHaveClass('card-no-shadow');
    expect(cardElement).toHaveClass('custom-class');
  });

  it('handles disabled state correctly', () => {
    const mockClick = jest.fn();
    const { container } = render(
      <Card disabled onClick={mockClick} />
    );
    
    const cardElement = container.firstChild as HTMLElement;
    expect(cardElement).toHaveClass('card-disabled');
    expect(cardElement).toHaveAttribute('aria-disabled', 'true');
  });
});
