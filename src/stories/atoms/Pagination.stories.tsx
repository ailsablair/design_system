import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Atoms/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Pagination component provides navigation controls for paginated data.
Perfect for tables, lists, and any paginated content.

## Features
- **2 Sizes**: Small and Default variants
- **Smart Truncation**: Shows dots for large page ranges
- **Keyboard Navigation**: Full keyboard support
- **Customizable**: Configurable visible page count
- **Accessible**: ARIA compliant with proper labels

## Usage
Commonly used at the bottom of tables or content lists to allow users to navigate through multiple pages of data.
        `
      }
    }
  },
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1 },
      description: 'Current page number (1-based)'
    },
    totalPages: {
      control: { type: 'number', min: 1 },
      description: 'Total number of pages'
    },
    size: {
      control: 'select',
      options: ['small', 'default'],
      description: 'Size variant'
    },
    showDots: {
      control: 'boolean',
      description: 'Show dots for truncated pages'
    },
    maxVisible: {
      control: { type: 'number', min: 3, max: 15 },
      description: 'Maximum number of page buttons to show'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    onPageChange: { action: 'page changed' }
  },
  args: {
    currentPage: 1,
    totalPages: 10,
    size: 'default',
    showDots: true,
    maxVisible: 7,
    disabled: false
  }
};

export default meta;
type Story = StoryObj<typeof Pagination>;

// Basic Examples
export const Default: Story = {
  args: {}
};

export const CurrentPageMiddle: Story = {
  args: {
    currentPage: 5
  }
};

export const CurrentPageLast: Story = {
  args: {
    currentPage: 10
  }
};

export const SmallSize: Story = {
  args: {
    size: 'small'
  }
};

// Size Variants
export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
          Pagination Size Variants
        </h3>
        <p style={{ margin: '0 0 32px 0', fontSize: '14px', color: '#666' }}>
          Two sizes available with consistent proportions
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <Pagination 
            size="default"
            currentPage={5}
            totalPages={10}
          />
          <div style={{ marginTop: '12px', fontSize: '12px', color: '#666' }}>Default Size</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Pagination 
            size="small"
            currentPage={5}
            totalPages={10}
          />
          <div style={{ marginTop: '12px', fontSize: '12px', color: '#666' }}>Small Size</div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of both size variants showing proportional scaling.'
      }
    }
  }
};

// Different Page Configurations
export const PageConfigurations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
          Page Configurations
        </h3>
        <p style={{ margin: '0 0 32px 0', fontSize: '14px', color: '#666' }}>
          Different page ranges and current positions
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <Pagination currentPage={1} totalPages={5} />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Few Pages (5 total)</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Pagination currentPage={1} totalPages={10} />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>First Page (10 total)</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Pagination currentPage={5} totalPages={10} />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Middle Page (10 total)</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Pagination currentPage={10} totalPages={10} />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Last Page (10 total)</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Pagination currentPage={15} totalPages={50} />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Many Pages (50 total)</div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows how pagination adapts to different page counts and current positions.'
      }
    }
  }
};

// Figma Design Layout
export const FigmaLayout: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
          Figma Design Layout
        </h3>
        <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: '#666' }}>
          Shows 1, 2, 3, ..., 8, 9, 10 pattern as in Figma
        </p>
      </div>
      
      <Pagination 
        currentPage={2}
        totalPages={10}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Specific layout matching the Figma design pattern: 1, 2, 3, ..., 8, 9, 10'
      }
    }
  }
};

// Without Dots
export const WithoutDots: Story = {
  args: {
    showDots: false,
    totalPages: 15,
    currentPage: 8
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination without truncation dots, showing only consecutive pages.'
      }
    }
  }
};

// Different Max Visible
export const MaxVisibleVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
          Max Visible Pages
        </h3>
        <p style={{ margin: '0 0 32px 0', fontSize: '14px', color: '#666' }}>
          Different maximum visible page configurations
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <Pagination currentPage={5} totalPages={20} maxVisible={5} />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Max 5 Visible</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Pagination currentPage={5} totalPages={20} maxVisible={7} />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Max 7 Visible (Default)</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Pagination currentPage={5} totalPages={20} maxVisible={9} />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Max 9 Visible</div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows how different maxVisible values affect the pagination display.'
      }
    }
  }
};

// Interactive Example
export const Interactive: Story = {
  args: {
    currentPage: 5,
    totalPages: 20,
    onPageChange: (page: number) => console.log(`Navigating to page ${page}`)
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive pagination with page change handlers. Check console for navigation events.'
      }
    }
  }
};

// Disabled State
export const Disabled: Story = {
  args: {
    disabled: true,
    currentPage: 5,
    totalPages: 10,
    onPageChange: () => console.log('This should not trigger')
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled pagination that prevents all interactions.'
      }
    }
  }
};

// Single Page
export const SinglePage: Story = {
  args: {
    currentPage: 1,
    totalPages: 1
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination with only one page - minimal display.'
      }
    }
  }
};

// Edge Cases
export const EdgeCases: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
          Edge Cases
        </h3>
        <p style={{ margin: '0 0 32px 0', fontSize: '14px', color: '#666' }}>
          Pagination behavior in edge scenarios
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <Pagination currentPage={1} totalPages={1} />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Single Page</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Pagination currentPage={1} totalPages={2} />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Two Pages</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Pagination currentPage={2} totalPages={3} />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Three Pages</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Pagination currentPage={1} totalPages={100} />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Many Pages (100)</div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Edge cases showing pagination behavior with minimal and maximum page counts.'
      }
    }
  }
};
