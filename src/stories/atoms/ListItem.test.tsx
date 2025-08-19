import { render, screen, fireEvent } from '@testing-library/react';
import { ListItem } from './ListItem';

describe('ListItem Component', () => {
  const defaultProps = {
    workOrder: 'WO 123456',
    workRequest: 'WR 789012',
    description: 'Test description for the list item component',
  };

  it('renders a search-result type list item with default props', () => {
    render(<ListItem {...defaultProps} />);
    
    expect(screen.getByText('WO 123456')).toBeInTheDocument();
    expect(screen.getByText('WR 789012')).toBeInTheDocument();
    expect(screen.getByText('Test description for the list item component')).toBeInTheDocument();
  });

  it('renders a simple type list item', () => {
    render(
      <ListItem 
        {...defaultProps}
        type="simple"
        icon={false}
        tags={false}
        timeStamp={false}
      />
    );
    
    expect(screen.getByText('WR 789012')).toBeInTheDocument();
    expect(screen.getByText('Test description for the list item component')).toBeInTheDocument();
    expect(screen.queryByText('WO 123456')).not.toBeInTheDocument();
  });

  it('renders different sizes correctly', () => {
    const { rerender, container } = render(<ListItem {...defaultProps} size="small" />);
    let listItem = container.firstChild as HTMLElement;
    expect(listItem).toHaveClass('small');

    rerender(<ListItem {...defaultProps} size="default" />);
    listItem = container.firstChild as HTMLElement;
    expect(listItem).toHaveClass('default');

    rerender(<ListItem {...defaultProps} size="large" />);
    listItem = container.firstChild as HTMLElement;
    expect(listItem).toHaveClass('large');
  });

  it('renders different states correctly', () => {
    const { rerender, container } = render(<ListItem {...defaultProps} state="default" />);
    let listItem = container.firstChild as HTMLElement;
    expect(listItem).toHaveClass('default');

    rerender(<ListItem {...defaultProps} state="hover" />);
    listItem = container.firstChild as HTMLElement;
    expect(listItem).toHaveClass('hover');

    rerender(<ListItem {...defaultProps} state="selected" />);
    listItem = container.firstChild as HTMLElement;
    expect(listItem).toHaveClass('selected');

    rerender(<ListItem {...defaultProps} state="disabled" />);
    listItem = container.firstChild as HTMLElement;
    expect(listItem).toHaveClass('disabled');
  });

  it('handles disabled state correctly', () => {
    const mockClick = jest.fn();
    const { container } = render(
      <ListItem 
        {...defaultProps}
        state="disabled"
        onClick={mockClick}
      />
    );
    
    const listItem = container.firstChild as HTMLElement;
    expect(listItem).toHaveClass('disabled');
    expect(listItem).toHaveAttribute('aria-disabled', 'true');
    
    fireEvent.click(listItem);
    expect(mockClick).not.toHaveBeenCalled();
  });

  it('handles click events when interactive', () => {
    const mockClick = jest.fn();
    const { container } = render(
      <ListItem 
        {...defaultProps}
        onClick={mockClick}
      />
    );
    
    const listItem = container.firstChild as HTMLElement;
    expect(listItem).toHaveClass('interactive');
    expect(listItem).toHaveAttribute('role', 'button');
    expect(listItem).toHaveAttribute('tabIndex', '0');
    
    fireEvent.click(listItem);
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it('handles keyboard events when interactive', () => {
    const mockClick = jest.fn();
    const { container } = render(
      <ListItem 
        {...defaultProps}
        onClick={mockClick}
      />
    );
    
    const listItem = container.firstChild as HTMLElement;
    
    fireEvent.keyDown(listItem, { key: 'Enter' });
    expect(mockClick).toHaveBeenCalledTimes(1);
    
    fireEvent.keyDown(listItem, { key: ' ' });
    expect(mockClick).toHaveBeenCalledTimes(2);
    
    fireEvent.keyDown(listItem, { key: 'Tab' });
    expect(mockClick).toHaveBeenCalledTimes(2); // Should not trigger
  });

  it('shows and hides icon based on props', () => {
    const { rerender } = render(<ListItem {...defaultProps} icon={true} />);
    expect(document.querySelector('.list-item-icon')).toBeInTheDocument();

    rerender(<ListItem {...defaultProps} icon={false} />);
    expect(document.querySelector('.list-item-icon')).not.toBeInTheDocument();
  });

  it('shows correct icon for disabled state', () => {
    const { rerender } = render(<ListItem {...defaultProps} state="default" />);
    let icon = document.querySelector('.list-item-icon');
    expect(icon).not.toHaveClass('disabled');

    rerender(<ListItem {...defaultProps} state="disabled" />);
    icon = document.querySelector('.list-item-icon');
    expect(icon).toHaveClass('disabled');
  });

  it('shows and hides tags based on props', () => {
    const { rerender } = render(<ListItem {...defaultProps} tags={true} />);
    expect(document.querySelector('.list-item-tags')).toBeInTheDocument();

    rerender(<ListItem {...defaultProps} tags={false} />);
    expect(document.querySelector('.list-item-tags')).not.toBeInTheDocument();
  });

  it('shows and hides individual tags based on props', () => {
    render(
      <ListItem 
        {...defaultProps}
        showAppliedTag={true}
        showEvaluatedTag={false}
        appliedTagLabel="Applied"
        evaluatedTagLabel="Evaluated"
      />
    );
    
    expect(screen.getByText('Applied')).toBeInTheDocument();
    expect(screen.queryByText('Evaluated')).not.toBeInTheDocument();
  });

  it('shows and hides timestamp based on props', () => {
    const { rerender } = render(
      <ListItem 
        {...defaultProps}
        timeStamp={true}
        lastUpdated="Last updated 5 mins ago"
      />
    );
    expect(screen.getByText('Last updated 5 mins ago')).toBeInTheDocument();

    rerender(<ListItem {...defaultProps} timeStamp={false} />);
    expect(screen.queryByText('Last updated 5 mins ago')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <ListItem 
        {...defaultProps}
        className="custom-class"
      />
    );
    
    const listItem = container.firstChild as HTMLElement;
    expect(listItem).toHaveClass('custom-class');
  });

  it('applies correct CSS classes for different combinations', () => {
    const { container } = render(
      <ListItem 
        {...defaultProps}
        type="search-result"
        size="large"
        state="hover"
        className="custom-class"
      />
    );
    
    const listItem = container.firstChild as HTMLElement;
    expect(listItem).toHaveClass('list-item');
    expect(listItem).toHaveClass('search-result');
    expect(listItem).toHaveClass('large');
    expect(listItem).toHaveClass('hover');
    expect(listItem).toHaveClass('custom-class');
  });

  it('renders custom tag labels', () => {
    render(
      <ListItem 
        {...defaultProps}
        appliedTagLabel="Custom Applied"
        evaluatedTagLabel="Custom Evaluated"
      />
    );
    
    expect(screen.getByText('Custom Applied')).toBeInTheDocument();
    expect(screen.getByText('Custom Evaluated')).toBeInTheDocument();
  });

  it('does not render bottom section for simple type', () => {
    render(
      <ListItem 
        {...defaultProps}
        type="simple"
        icon={false}
        tags={false}
        timeStamp={false}
      />
    );
    
    expect(document.querySelector('.list-item-bottom')).not.toBeInTheDocument();
  });

  it('handles all prop combinations correctly', () => {
    render(
      <ListItem 
        type="search-result"
        size="small"
        state="selected"
        icon={true}
        workOrder="WO 999999"
        workRequest="WR 888888"
        description="Full prop test description"
        tags={true}
        timeStamp={true}
        lastUpdated="Updated recently"
        appliedTagLabel="Approved"
        evaluatedTagLabel="Reviewed"
        showAppliedTag={true}
        showEvaluatedTag={true}
        className="test-class"
        onClick={() => {}}
      />
    );
    
    expect(screen.getByText('WO 999999')).toBeInTheDocument();
    expect(screen.getByText('WR 888888')).toBeInTheDocument();
    expect(screen.getByText('Full prop test description')).toBeInTheDocument();
    expect(screen.getByText('Approved')).toBeInTheDocument();
    expect(screen.getByText('Reviewed')).toBeInTheDocument();
    expect(screen.getByText('Updated recently')).toBeInTheDocument();
  });
});
