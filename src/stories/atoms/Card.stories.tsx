import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Atoms/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile card component that serves as a container for content. Cards can be used for displaying information, grouping related content, or as interactive elements. They support multiple sizes, background colors, light/dark modes, and optional drop shadows.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
      description: 'Size of the card',
    },
    type: {
      control: { type: 'select' },
      options: ['plain'],
      description: 'Card type (currently only plain supported)',
    },
    bg: {
      control: { type: 'select' },
      options: ['default', 'sky-blue', 'error', 'success', 'warning', 'info-blue', 'note-purple', 'light-gray', 'black', 'blue', 'dark-gray'],
      description: 'Background color variant',
    },
    mode: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: 'Color mode',
    },
    dropShadow: {
      control: { type: 'boolean' },
      description: 'Whether to show drop shadow',
    },
    children: {
      control: { type: 'text' },
      description: 'Card content',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample content for cards
const SampleContent = () => (
  <div style={{ padding: '8px' }}>
    <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>Card Title</h3>
    <p style={{ margin: '0', fontSize: '14px', lineHeight: 1.4 }}>
      This is sample content inside a card component.
    </p>
  </div>
);

// Basic Examples
export const Default: Story = {
  args: {
    children: <SampleContent />,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: (
      <div style={{ padding: '4px' }}>
        <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: 600 }}>Small Card</h4>
        <p style={{ margin: '0', fontSize: '12px' }}>Compact content</p>
      </div>
    ),
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: (
      <div style={{ padding: '12px' }}>
        <h2 style={{ margin: '0 0 12px 0', fontSize: '18px', fontWeight: 600 }}>Large Card</h2>
        <p style={{ margin: '0', fontSize: '16px', lineHeight: 1.5 }}>
          This is a larger card with more content space. Perfect for detailed information or complex layouts.
        </p>
      </div>
    ),
  },
};

// Background Color Variants
export const SkyBlue: Story = {
  args: {
    bg: 'sky-blue',
    children: <SampleContent />,
  },
};

export const Error: Story = {
  args: {
    bg: 'error',
    children: (
      <div style={{ padding: '8px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>Error Card</h3>
        <p style={{ margin: '0', fontSize: '14px' }}>Something went wrong. Please try again.</p>
      </div>
    ),
  },
};

export const Success: Story = {
  args: {
    bg: 'success',
    children: (
      <div style={{ padding: '8px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>Success Card</h3>
        <p style={{ margin: '0', fontSize: '14px' }}>Operation completed successfully!</p>
      </div>
    ),
  },
};

export const Warning: Story = {
  args: {
    bg: 'warning',
    children: (
      <div style={{ padding: '8px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>Warning Card</h3>
        <p style={{ margin: '0', fontSize: '14px' }}>Please review this information carefully.</p>
      </div>
    ),
  },
};

export const InfoBlue: Story = {
  args: {
    bg: 'info-blue',
    children: (
      <div style={{ padding: '8px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>Info Card</h3>
        <p style={{ margin: '0', fontSize: '14px' }}>Here's some important information for you.</p>
      </div>
    ),
  },
};

export const NotePurple: Story = {
  args: {
    bg: 'note-purple',
    children: (
      <div style={{ padding: '8px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>Note Card</h3>
        <p style={{ margin: '0', fontSize: '14px' }}>Take note of this important detail.</p>
      </div>
    ),
  },
};

// Mode Variants
export const DarkMode: Story = {
  args: {
    mode: 'dark',
    children: <SampleContent />,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const DarkModeBlue: Story = {
  args: {
    bg: 'blue',
    mode: 'dark',
    children: <SampleContent />,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// Shadow Variants
export const NoShadow: Story = {
  args: {
    dropShadow: false,
    children: <SampleContent />,
  },
};

// Interactive States
export const Clickable: Story = {
  args: {
    children: (
      <div style={{ padding: '8px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>Clickable Card</h3>
        <p style={{ margin: '0', fontSize: '14px' }}>Click me to see the interaction!</p>
      </div>
    ),
    onClick: () => console.log('Card clicked!'),
  },
};

export const Disabled: Story = {
  args: {
    children: (
      <div style={{ padding: '8px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>Disabled Card</h3>
        <p style={{ margin: '0', fontSize: '14px' }}>This card is disabled and cannot be interacted with.</p>
      </div>
    ),
    disabled: true,
    onClick: () => console.log('This should not fire'),
  },
};

// Comprehensive Showcases
export const AllSizesShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'start', flexWrap: 'wrap' }}>
      <Card size="small">
        <div style={{ padding: '4px' }}>
          <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: 600 }}>Small</h4>
          <p style={{ margin: '0', fontSize: '12px' }}>Compact</p>
        </div>
      </Card>
      <Card size="default">
        <div style={{ padding: '8px' }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>Default</h3>
          <p style={{ margin: '0', fontSize: '14px' }}>Standard size</p>
        </div>
      </Card>
      <Card size="large">
        <div style={{ padding: '12px' }}>
          <h2 style={{ margin: '0 0 12px 0', fontSize: '18px', fontWeight: 600 }}>Large</h2>
          <p style={{ margin: '0', fontSize: '16px' }}>Spacious layout</p>
        </div>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all card sizes.',
      },
    },
  },
};

export const AllBackgroundsShowcase: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', maxWidth: '1000px' }}>
      {['default', 'sky-blue', 'error', 'success', 'warning', 'info-blue', 'note-purple', 'light-gray', 'black', 'blue', 'dark-gray'].map(bg => (
        <Card key={bg} bg={bg as any}>
          <div style={{ padding: '8px' }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600, textTransform: 'capitalize' }}>
              {bg.replace('-', ' ')}
            </h4>
            <p style={{ margin: '0', fontSize: '12px' }}>Background variant</p>
          </div>
        </Card>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available background color variants.',
      },
    },
  },
};

export const LightDarkComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>Light Mode</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Card mode="light" bg="default"><SampleContent /></Card>
          <Card mode="light" bg="blue"><SampleContent /></Card>
          <Card mode="light" bg="success"><SampleContent /></Card>
        </div>
      </div>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>Dark Mode</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Card mode="dark" bg="default"><SampleContent /></Card>
          <Card mode="dark" bg="blue"><SampleContent /></Card>
          <Card mode="dark" bg="success"><SampleContent /></Card>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of light and dark modes for different background colors.',
      },
    },
  },
};

export const ShadowComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 500 }}>With Shadow</h4>
        <Card dropShadow={true}><SampleContent /></Card>
      </div>
      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 500 }}>No Shadow</h4>
        <Card dropShadow={false}><SampleContent /></Card>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of cards with and without drop shadows.',
      },
    },
  },
};
