import type { Meta, StoryObj } from '@storybook/react';
import { TableHeaderLabel } from './TableHeaderLabel';

const meta: Meta<typeof TableHeaderLabel> = {
  title: 'Atoms/ZZ 🧱 Building Blocks/TableHeaderLabel',
  component: TableHeaderLabel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The TableHeaderLabel component displays sortable column headers with help icons and sort arrows.
Perfect for data tables requiring sorting functionality and contextual help.

## Features
- **3 Sizes**: Small, Default, and Large variants
- **2 States**: Default and Hover interactions
- **Sort Directions**: Up, Down, or None
- **Help Integration**: Optional help icons with click handlers
- **Accessible**: Full keyboard navigation and ARIA compliance
- **Interactive**: Click handlers for sorting and help actions

## Usage
Commonly used in table headers where columns need sorting capabilities or require additional context through help icons.
        `
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Header label text'
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size variant'
    },
    state: {
      control: 'select',
      options: ['default', 'hover'],
      description: 'Interaction state'
    },
    sortDirection: {
      control: 'select',
      options: [null, 'up', 'down'],
      description: 'Sort direction'
    },
    showHelpIcon: {
      control: 'boolean',
      description: 'Show help icon'
    },
    showSortArrow: {
      control: 'boolean',
      description: 'Show sort arrow'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    }
  },
  args: {
    label: 'Company',
    size: 'default',
    state: 'default',
    sortDirection: null,
    showHelpIcon: true,
    showSortArrow: true,
    disabled: false
  }
};

export default meta;
type Story = StoryObj<typeof TableHeaderLabel>;

// Basic Examples
export const Default: Story = {
  args: {}
};

export const WithSortUp: Story = {
  args: {
    sortDirection: 'up'
  }
};

export const WithSortDown: Story = {
  args: {
    sortDirection: 'down'
  }
};

export const Hover: Story = {
  args: {
    state: 'hover',
    sortDirection: 'up'
  }
};

// Size Variants
export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
          Table Header Label Size Variants
        </h3>
        <p style={{ margin: '0 0 32px 0', fontSize: '14px', color: '#666' }}>
          Three sizes available with consistent icon scaling
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <TableHeaderLabel 
            size="small" 
            sortDirection="up"
          />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Small</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <TableHeaderLabel 
            size="default" 
            sortDirection="up"
          />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Default</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <TableHeaderLabel 
            size="large" 
            sortDirection="up"
          />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Large</div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All three size variants showing consistent proportions and typography scaling.'
      }
    }
  }
};

// All States Showcase
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
          Table Header States
        </h3>
        <p style={{ margin: '0 0 32px 0', fontSize: '14px', color: '#666' }}>
          All interaction states and sort directions
        </p>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '24px',
        alignItems: 'center'
      }}>
        {/* Default States */}
        <div style={{ textAlign: 'center' }}>
          <TableHeaderLabel state="default" />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Default</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <TableHeaderLabel state="default" sortDirection="up" />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Sort Up</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <TableHeaderLabel state="default" sortDirection="down" />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Sort Down</div>
        </div>
        
        {/* Hover States */}
        <div style={{ textAlign: 'center' }}>
          <TableHeaderLabel state="hover" />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Hover</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <TableHeaderLabel state="hover" sortDirection="up" />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Hover + Sort Up</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <TableHeaderLabel state="hover" sortDirection="down" />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Hover + Sort Down</div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all interaction states and sort directions.'
      }
    }
  }
};

// Size and State Matrix
export const SizeAndStateMatrix: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
          Size and State Matrix
        </h3>
        <p style={{ margin: '0 0 32px 0', fontSize: '14px', color: '#666' }}>
          All combinations of sizes and states
        </p>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'auto repeat(2, 1fr)', 
        gap: '16px',
        alignItems: 'center'
      }}>
        {/* Header row */}
        <div></div>
        <div style={{ textAlign: 'center', fontWeight: '600', fontSize: '14px' }}>Default</div>
        <div style={{ textAlign: 'center', fontWeight: '600', fontSize: '14px' }}>Hover</div>
        
        {/* Small size row */}
        <div style={{ fontWeight: '600', fontSize: '14px' }}>Small</div>
        <div style={{ textAlign: 'center' }}>
          <TableHeaderLabel size="small" state="default" sortDirection="up" />
        </div>
        <div style={{ textAlign: 'center' }}>
          <TableHeaderLabel size="small" state="hover" sortDirection="up" />
        </div>
        
        {/* Default size row */}
        <div style={{ fontWeight: '600', fontSize: '14px' }}>Default</div>
        <div style={{ textAlign: 'center' }}>
          <TableHeaderLabel size="default" state="default" sortDirection="up" />
        </div>
        <div style={{ textAlign: 'center' }}>
          <TableHeaderLabel size="default" state="hover" sortDirection="up" />
        </div>
        
        {/* Large size row */}
        <div style={{ fontWeight: '600', fontSize: '14px' }}>Large</div>
        <div style={{ textAlign: 'center' }}>
          <TableHeaderLabel size="large" state="default" sortDirection="up" />
        </div>
        <div style={{ textAlign: 'center' }}>
          <TableHeaderLabel size="large" state="hover" sortDirection="up" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Matrix showing all size and state combinations with sort arrows.'
      }
    }
  }
};

// Without Icons
export const WithoutIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
      <TableHeaderLabel 
        label="Name"
        showHelpIcon={false}
        showSortArrow={false}
      />
      <TableHeaderLabel 
        label="Status"
        showHelpIcon={false}
        sortDirection="up"
      />
      <TableHeaderLabel 
        label="Actions"
        showSortArrow={false}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Headers with different icon configurations.'
      }
    }
  }
};

// Interactive Example
export const Interactive: Story = {
  args: {
    onClick: () => console.log('Header clicked for sorting'),
    onHelpClick: () => console.log('Help icon clicked'),
    sortDirection: 'up'
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive header with click handlers. Check console for event logs.'
      }
    }
  }
};

// Disabled State
export const Disabled: Story = {
  args: {
    disabled: true,
    sortDirection: 'up',
    onClick: () => console.log('This should not trigger'),
    onHelpClick: () => console.log('This should not trigger')
  }
};

// Custom Labels
export const CustomLabels: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
      <TableHeaderLabel label="Name" sortDirection="up" />
      <TableHeaderLabel label="Email Address" sortDirection="down" />
      <TableHeaderLabel label="Created Date" />
      <TableHeaderLabel label="Status" sortDirection="up" />
      <TableHeaderLabel label="Actions" showSortArrow={false} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples with different labels and sort states as would appear in a real table.'
      }
    }
  }
};
