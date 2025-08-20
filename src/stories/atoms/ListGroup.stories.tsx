import type { Meta, StoryObj } from '@storybook/react';
import { ListGroup } from './ListGroup';

const meta: Meta<typeof ListGroup> = {
  title: 'Atoms/ListGroup',
  component: ListGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible list group component that displays multiple list items with various styles including discs, numbers, icons, and dividers.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['disc', 'numbers', 'static-icon', 'icons', 'horizontal-dividers', 'vertical-dividers'],
      description: 'Type of list group styling',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large', 'x-large'],
      description: 'Size variant of the list group',
    },
    items: {
      control: 'object',
      description: 'Array of list items to display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for stories
const sampleItems = [
  { id: '1', label: 'List Item 1' },
  { id: '2', label: 'List Item 2' },
  { id: '3', label: 'List Item 3' },
  { id: '4', label: 'List Item 4' },
];

export const Default: Story = {
  args: {
    type: 'disc',
    size: 'default',
    items: sampleItems,
  },
};

export const DiscType: Story = {
  args: {
    type: 'disc',
    size: 'default',
    items: sampleItems,
  },
};

export const NumbersType: Story = {
  args: {
    type: 'numbers',
    size: 'default',
    items: sampleItems,
  },
};

export const StaticIconType: Story = {
  args: {
    type: 'static-icon',
    size: 'default',
    items: sampleItems,
  },
};

export const IconsType: Story = {
  args: {
    type: 'icons',
    size: 'default',
    items: sampleItems,
  },
};

export const HorizontalDividersType: Story = {
  args: {
    type: 'horizontal-dividers',
    size: 'default',
    items: sampleItems,
  },
};

export const VerticalDividersType: Story = {
  args: {
    type: 'vertical-dividers',
    size: 'default',
    items: sampleItems,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '400px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>Small</h4>
        <ListGroup type="disc" size="small" items={sampleItems} />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>Default</h4>
        <ListGroup type="disc" size="default" items={sampleItems} />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>Large</h4>
        <ListGroup type="disc" size="large" items={sampleItems} />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>X-Large</h4>
        <ListGroup type="disc" size="x-large" items={sampleItems} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All size variants of the list group component displayed together.',
      },
    },
  },
};

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '400px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>Disc</h4>
        <ListGroup type="disc" size="default" items={sampleItems} />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>Numbers</h4>
        <ListGroup type="numbers" size="default" items={sampleItems} />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>Static Icon</h4>
        <ListGroup type="static-icon" size="default" items={sampleItems} />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>Icons</h4>
        <ListGroup type="icons" size="default" items={sampleItems} />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>Horizontal Dividers</h4>
        <ListGroup type="horizontal-dividers" size="default" items={sampleItems} />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>Vertical Dividers</h4>
        <ListGroup type="vertical-dividers" size="default" items={sampleItems} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All type variants of the list group component displayed together.',
      },
    },
  },
};

export const Interactive: Story = {
  render: () => {
    const handleItemClick = (itemId: string) => {
      alert(`Clicked item: ${itemId}`);
    };

    const interactiveItems = sampleItems.map(item => ({
      ...item,
      onClick: () => handleItemClick(item.id),
    }));

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>Interactive Numbers List</h4>
          <ListGroup type="numbers" size="default" items={interactiveItems} />
        </div>
        
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>Interactive Icons List</h4>
          <ListGroup type="icons" size="default" items={interactiveItems} />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive list groups that respond to clicks on individual items.',
      },
    },
  },
};

export const CustomContent: Story = {
  render: () => {
    const customItems = [
      { id: '1', label: 'Dashboard Overview' },
      { id: '2', label: 'User Management' },
      { id: '3', label: 'Settings & Configuration' },
      { id: '4', label: 'Reports & Analytics' },
      { id: '5', label: 'Help & Documentation' },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '500px' }}>
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>Navigation Menu</h4>
          <ListGroup type="static-icon" size="default" items={customItems} />
        </div>
        
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>Step-by-Step Guide</h4>
          <ListGroup type="numbers" size="default" items={customItems} />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'List groups with custom content for real-world use cases.',
      },
    },
  },
};

export const FigmaShowcase: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(4, 1fr)', 
      gap: '32px', 
      width: '100%',
      maxWidth: '1200px',
      backgroundColor: '#f8f9fa',
      padding: '24px',
      borderRadius: '8px',
      border: '2px dashed #6171DF'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
          Small Size
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <ListGroup type="disc" size="small" items={sampleItems} />
          <ListGroup type="numbers" size="small" items={sampleItems} />
          <ListGroup type="static-icon" size="small" items={sampleItems} />
          <ListGroup type="icons" size="small" items={sampleItems} />
          <ListGroup type="horizontal-dividers" size="small" items={sampleItems} />
          <ListGroup type="vertical-dividers" size="small" items={sampleItems} />
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
          Default Size
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <ListGroup type="disc" size="default" items={sampleItems} />
          <ListGroup type="numbers" size="default" items={sampleItems} />
          <ListGroup type="static-icon" size="default" items={sampleItems} />
          <ListGroup type="icons" size="default" items={sampleItems} />
          <ListGroup type="horizontal-dividers" size="default" items={sampleItems} />
          <ListGroup type="vertical-dividers" size="default" items={sampleItems} />
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
          Large Size
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <ListGroup type="disc" size="large" items={sampleItems} />
          <ListGroup type="numbers" size="large" items={sampleItems} />
          <ListGroup type="static-icon" size="large" items={sampleItems} />
          <ListGroup type="icons" size="large" items={sampleItems} />
          <ListGroup type="horizontal-dividers" size="large" items={sampleItems} />
          <ListGroup type="vertical-dividers" size="large" items={sampleItems} />
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
          X-Large Size
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <ListGroup type="disc" size="x-large" items={sampleItems} />
          <ListGroup type="numbers" size="x-large" items={sampleItems} />
          <ListGroup type="static-icon" size="x-large" items={sampleItems} />
          <ListGroup type="icons" size="x-large" items={sampleItems} />
          <ListGroup type="horizontal-dividers" size="x-large" items={sampleItems} />
          <ListGroup type="vertical-dividers" size="x-large" items={sampleItems} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase matching the Figma design with all types and sizes.',
      },
    },
  },
};
