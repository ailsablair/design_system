import type { Meta, StoryObj } from '@storybook/react';
import { TableFooter } from './TableFooter';

const meta: Meta<typeof TableFooter> = {
  title: 'Atoms/TableFooter',
  component: TableFooter,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The TableFooter component provides comprehensive table footer layouts with pagination support.
Perfect for data tables, lists, and collection views that need navigation and pagination controls.

## Features
- **4 Layout Types**: Default with navigation, view-more, pagination-only, and no-content
- **2 Sizes**: Small and Default with proper proportional scaling
- **3 Backgrounds**: Light gray, blue-50, and black variants
- **Smart Pagination**: Automatic page range calculation with ellipsis
- **Navigation Controls**: Previous/Next buttons with proper states
- **Responsive**: Adapts gracefully to different screen sizes
- **Accessible**: Proper ARIA labels and keyboard navigation

## Layout Types
- **default**: Full pagination with Previous/Next navigation buttons
- **view-more**: Simple "View more" button for progressive loading
- **pagination-only**: Just page numbers without navigation buttons
- **no-content**: Empty footer for minimal layouts

## Usage
Commonly used for table footers, paginated lists, and data collection views
that need navigation controls and page indicators.
        `
      }
    }
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'view-more', 'pagination-only', 'no-content'],
      description: 'Footer layout type'
    },
    size: {
      control: 'select',
      options: ['small', 'default'],
      description: 'Size variant'
    },
    background: {
      control: 'select',
      options: ['light-gray', 'blue-50', 'black'],
      description: 'Background variant'
    },
    currentPage: {
      control: 'number',
      description: 'Current active page (1-based)'
    },
    totalPages: {
      control: 'number',
      description: 'Total number of pages'
    },
    siblingCount: {
      control: 'number',
      description: 'Pages to show before/after current page'
    },
    showNavigation: {
      control: 'boolean',
      description: 'Show Previous/Next buttons'
    },
    previousText: {
      control: 'text',
      description: 'Previous button text'
    },
    nextText: {
      control: 'text',
      description: 'Next button text'
    },
    viewMoreText: {
      control: 'text',
      description: 'View more button text'
    }
  },
  args: {
    type: 'default',
    size: 'default',
    background: 'black',
    currentPage: 1,
    totalPages: 10,
    siblingCount: 1,
    showNavigation: true,
    previousText: 'Previous',
    nextText: 'Next',
    viewMoreText: 'View more'
  }
};

export default meta;
type Story = StoryObj<typeof TableFooter>;

// Basic Examples
export const Default: Story = {
  args: {}
};

export const ViewMore: Story = {
  args: {
    type: 'view-more'
  }
};

export const PaginationOnly: Story = {
  args: {
    type: 'pagination-only'
  }
};

export const NoContent: Story = {
  args: {
    type: 'no-content'
  }
};

// Figma Design Showcase - All Variants
export const FigmaDesignShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%', maxWidth: '1216px' }}>
      <div style={{ textAlign: 'left' }}>
        <h2 style={{ margin: '0 0 24px 0', fontSize: '24px', fontWeight: '600' }}>
          Table Footer - Figma Design Implementation
        </h2>
        <p style={{ margin: '0 0 32px 0', fontSize: '16px', color: '#666', lineHeight: '1.5' }}>
          Complete implementation of all table footer variants from Figma designs.
          Includes pagination, navigation, and different background colors.
        </p>
      </div>

      {/* Default Size - Black Background */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Default Size - Black Background</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <TableFooter
            type="default"
            size="default"
            background="black"
            currentPage={1}
            totalPages={10}
            onPreviousClick={() => console.log('Previous clicked')}
            onNextClick={() => console.log('Next clicked')}
            onPageClick={(page) => console.log('Page clicked:', page)}
          />
          
          <TableFooter
            type="view-more"
            size="default"
            background="black"
            onViewMoreClick={() => console.log('View more clicked')}
          />
          
          <TableFooter
            type="pagination-only"
            size="default"
            background="black"
            currentPage={1}
            totalPages={10}
            onPageClick={(page) => console.log('Page clicked:', page)}
          />
          
          <TableFooter
            type="no-content"
            size="default"
            background="black"
          />
        </div>
      </div>

      {/* Small Size - Black Background */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Small Size - Black Background</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <TableFooter
            type="default"
            size="small"
            background="black"
            currentPage={1}
            totalPages={10}
            onPreviousClick={() => console.log('Previous clicked')}
            onNextClick={() => console.log('Next clicked')}
            onPageClick={(page) => console.log('Page clicked:', page)}
          />
          
          <TableFooter
            type="view-more"
            size="small"
            background="black"
            onViewMoreClick={() => console.log('View more clicked')}
          />
          
          <TableFooter
            type="pagination-only"
            size="small"
            background="black"
            currentPage={1}
            totalPages={10}
            onPageClick={(page) => console.log('Page clicked:', page)}
          />
          
          <TableFooter
            type="no-content"
            size="small"
            background="black"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all table footer variants matching the Figma designs exactly.'
      }
    }
  }
};

// Different Background Variants
export const BackgroundVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '800px' }}>
      <div style={{ textAlign: 'left' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>
          Background Variants
        </h3>
        <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: '#666' }}>
          Different background colors with appropriate text contrast
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <TableFooter
          type="default"
          background="black"
          currentPage={1}
          totalPages={5}
        />
        
        <TableFooter
          type="default"
          background="light-gray"
          currentPage={1}
          totalPages={5}
        />
        
        <TableFooter
          type="default"
          background="blue-50"
          currentPage={1}
          totalPages={5}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of background variants with appropriate text contrast adjustments.'
      }
    }
  }
};

// Size Comparison
export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '800px' }}>
      <div style={{ textAlign: 'left' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>
          Size Comparison
        </h3>
        <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: '#666' }}>
          Small vs Default size with proportional scaling
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <TableFooter
          type="default"
          size="small"
          background="black"
          currentPage={3}
          totalPages={10}
        />
        
        <TableFooter
          type="default"
          size="default"
          background="black"
          currentPage={3}
          totalPages={10}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Direct comparison between small and default sizes showing proportional scaling.'
      }
    }
  }
};

// Different Page States
export const PageStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '800px' }}>
      <div style={{ textAlign: 'left' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>
          Different Page States
        </h3>
        <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: '#666' }}>
          Examples showing different active pages and pagination states
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>First page (Page 1 of 10)</p>
          <TableFooter
            type="default"
            background="black"
            currentPage={1}
            totalPages={10}
          />
        </div>
        
        <div>
          <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>Middle page (Page 5 of 10)</p>
          <TableFooter
            type="default"
            background="black"
            currentPage={5}
            totalPages={10}
          />
        </div>
        
        <div>
          <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>Last page (Page 10 of 10)</p>
          <TableFooter
            type="default"
            background="black"
            currentPage={10}
            totalPages={10}
          />
        </div>
        
        <div>
          <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>Few pages (Page 2 of 3)</p>
          <TableFooter
            type="default"
            background="black"
            currentPage={2}
            totalPages={3}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples showing different pagination states and active page positions.'
      }
    }
  }
};

// Interactive Example
export const Interactive: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = 10;

    const handlePreviousClick = () => {
      setCurrentPage(prev => Math.max(1, prev - 1));
      console.log('Previous clicked, new page:', Math.max(1, currentPage - 1));
    };

    const handleNextClick = () => {
      setCurrentPage(prev => Math.min(totalPages, prev + 1));
      console.log('Next clicked, new page:', Math.min(totalPages, currentPage + 1));
    };

    const handlePageClick = (page: number) => {
      setCurrentPage(page);
      console.log('Page clicked:', page);
    };

    const handleViewMoreClick = () => {
      console.log('View more clicked!');
      alert('Loading more content...');
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '800px' }}>
        <div style={{ textAlign: 'left' }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>
            Interactive Examples
          </h3>
          <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: '#666' }}>
            Functional pagination with state management. Check console for event logs.
          </p>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <p style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>
              Interactive Pagination (Current page: {currentPage})
            </p>
            <TableFooter
              type="default"
              background="black"
              currentPage={currentPage}
              totalPages={totalPages}
              onPreviousClick={handlePreviousClick}
              onNextClick={handleNextClick}
              onPageClick={handlePageClick}
            />
          </div>
          
          <div>
            <p style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>
              Interactive View More
            </p>
            <TableFooter
              type="view-more"
              background="black"
              onViewMoreClick={handleViewMoreClick}
            />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive examples with working state management and event handlers.'
      }
    }
  }
};

// Large Datasets
export const LargeDatasets: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '800px' }}>
      <div style={{ textAlign: 'left' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>
          Large Datasets
        </h3>
        <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: '#666' }}>
          Examples with many pages showing smart pagination truncation
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>100 pages - Page 50</p>
          <TableFooter
            type="default"
            background="black"
            currentPage={50}
            totalPages={100}
          />
        </div>
        
        <div>
          <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>1000 pages - Page 1</p>
          <TableFooter
            type="default"
            background="black"
            currentPage={1}
            totalPages={1000}
          />
        </div>
        
        <div>
          <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>500 pages - Page 250</p>
          <TableFooter
            type="default"
            background="black"
            currentPage={250}
            totalPages={500}
            siblingCount={2}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples with large datasets showing how pagination handles many pages with ellipsis.'
      }
    }
  }
};

// Responsive Showcase
export const ResponsiveShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
      <div style={{ textAlign: 'left' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>
          Responsive Behavior
        </h3>
        <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: '#666' }}>
          How the component adapts to different container widths
        </p>
      </div>
      
      {/* Wide container */}
      <div style={{ width: '100%', maxWidth: '1000px', border: '1px dashed #ccc', padding: '16px' }}>
        <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>Wide container</p>
        <TableFooter
          type="default"
          background="black"
          currentPage={5}
          totalPages={20}
        />
      </div>
      
      {/* Medium container */}
      <div style={{ width: '100%', maxWidth: '600px', border: '1px dashed #ccc', padding: '16px' }}>
        <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>Medium container</p>
        <TableFooter
          type="default"
          background="black"
          currentPage={5}
          totalPages={20}
        />
      </div>
      
      {/* Narrow container */}
      <div style={{ width: '100%', maxWidth: '400px', border: '1px dashed #ccc', padding: '16px' }}>
        <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>Narrow container</p>
        <TableFooter
          type="default"
          background="black"
          currentPage={5}
          totalPages={20}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates responsive behavior in containers of different widths.'
      }
    }
  }
};
