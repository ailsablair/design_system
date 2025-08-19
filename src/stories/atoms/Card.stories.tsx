import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Atoms/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive card component that matches the Figma design specifications. Supports multiple types: simple cards with headers and buttons, icon cards, text-only cards, empty state cards, and stat cards. Each type supports different sizes, alignments, and styling options.',
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
      options: ['simple', 'icon', 'text-only', 'empty-state', 'stat'],
      description: 'Type of card content',
    },
    bg: {
      control: { type: 'select' },
      options: ['default'],
      description: 'Background color variant',
    },
    align: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Content alignment',
    },
    dropShadow: {
      control: { type: 'boolean' },
      description: 'Whether to show drop shadow',
    },
    showCloseIcon: {
      control: { type: 'boolean' },
      description: 'Show close icon (for simple and text-only types)',
    },
    onCloseClick: {
      action: 'close clicked',
      description: 'Close icon click handler',
    },
    showButtonGroup: {
      control: { type: 'boolean' },
      description: 'Show button group (for simple type)',
    },
    showIcon: {
      control: { type: 'boolean' },
      description: 'Show icon (for icon types)',
    },
    title: {
      control: { type: 'text' },
      description: 'Card title text',
    },
    subtitle: {
      control: { type: 'text' },
      description: 'Card subtitle text',
    },
    bodyText: {
      control: { type: 'text' },
      description: 'Card body text',
    },
    statValue: {
      control: { type: 'text' },
      description: 'Stat value (for stat type)',
    },
    statLabel: {
      control: { type: 'text' },
      description: 'Stat label (for stat type)',
    },
    font: {
      control: { type: 'select' },
      options: ['default', 'roboto-flex', 'archivo'],
      description: 'Font type for stat cards',
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

// === SIMPLE CARD EXAMPLES === //

export const SimpleHorizontalSmall: Story = {
  args: {
    type: 'simple',
    size: 'small',
    align: 'horizontal',
    dropShadow: true,
  },
};

export const SimpleHorizontalDefault: Story = {
  args: {
    type: 'simple',
    size: 'default',
    align: 'horizontal',
    dropShadow: true,
  },
};

export const SimpleHorizontalLarge: Story = {
  args: {
    type: 'simple',
    size: 'large',
    align: 'horizontal',
    dropShadow: true,
  },
};

export const SimpleVerticalSmall: Story = {
  args: {
    type: 'simple',
    size: 'small',
    align: 'vertical',
    dropShadow: true,
  },
};

export const SimpleVerticalDefault: Story = {
  args: {
    type: 'simple',
    size: 'default',
    align: 'vertical',
    dropShadow: true,
  },
};

export const SimpleVerticalLarge: Story = {
  args: {
    type: 'simple',
    size: 'large',
    align: 'vertical',
    dropShadow: true,
  },
};

// No shadow variants
export const SimpleNoShadow: Story = {
  args: {
    type: 'simple',
    size: 'default',
    align: 'horizontal',
    dropShadow: false,
  },
};

// === ICON CARD EXAMPLES === //

export const IconCardSmall: Story = {
  args: {
    type: 'icon',
    size: 'small',
    align: 'vertical',
    dropShadow: true,
  },
};

export const IconCardDefault: Story = {
  args: {
    type: 'icon',
    size: 'default',
    align: 'vertical',
    dropShadow: true,
  },
};

export const IconCardLarge: Story = {
  args: {
    type: 'icon',
    size: 'large',
    align: 'vertical',
    dropShadow: true,
  },
};

// === EMPTY STATE EXAMPLES === //

export const EmptyStateDefault: Story = {
  args: {
    type: 'empty-state',
    size: 'default',
    align: 'vertical',
    dropShadow: true,
  },
};

export const EmptyStateLarge: Story = {
  args: {
    type: 'empty-state',
    size: 'large',
    align: 'vertical',
    dropShadow: true,
  },
};

// === TEXT-ONLY EXAMPLES === //

export const TextOnlyDefault: Story = {
  args: {
    type: 'text-only',
    size: 'default',
    align: 'vertical',
    dropShadow: true,
    showCloseIcon: true,
    onCloseClick: () => console.log('Text-only card close clicked!'),
  },
};

export const TextOnlyLarge: Story = {
  args: {
    type: 'text-only',
    size: 'large',
    align: 'vertical',
    dropShadow: true,
    showCloseIcon: true,
    onCloseClick: () => console.log('Text-only card close clicked!'),
  },
};

// === STAT CARD EXAMPLES === //

export const StatCardSmallRoboto: Story = {
  args: {
    type: 'stat',
    size: 'small',
    align: 'vertical',
    dropShadow: true,
    font: 'roboto-flex',
    statValue: '23%',
    statLabel: 'awesomeness',
  },
};

export const StatCardDefaultRoboto: Story = {
  args: {
    type: 'stat',
    size: 'default',
    align: 'vertical',
    dropShadow: true,
    font: 'roboto-flex',
    statValue: '23%',
    statLabel: 'awesomeness',
  },
};

export const StatCardLargeRoboto: Story = {
  args: {
    type: 'stat',
    size: 'large',
    align: 'vertical',
    dropShadow: true,
    font: 'roboto-flex',
    statValue: '23%',
    statLabel: 'awesomeness',
  },
};

export const StatCardLargeArchivo: Story = {
  args: {
    type: 'stat',
    size: 'large',
    align: 'vertical',
    dropShadow: true,
    font: 'archivo',
    statValue: '23%',
    statLabel: 'awesomeness',
  },
};

// === INTERACTIVE EXAMPLES === //

export const ClickableCard: Story = {
  args: {
    type: 'simple',
    size: 'default',
    align: 'horizontal',
    dropShadow: true,
    title: 'Clickable Card',
    subtitle: 'Click me to interact',
    showCloseIcon: true,
    onClick: () => console.log('Card clicked!'),
    onCloseClick: () => console.log('Close clicked!'),
  },
};

export const DisabledCard: Story = {
  args: {
    type: 'simple',
    size: 'default',
    align: 'horizontal',
    dropShadow: true,
    title: 'Disabled Card',
    subtitle: 'This card is disabled',
    disabled: true,
    showCloseIcon: true,
    onClick: () => console.log('This should not fire'),
    onCloseClick: () => console.log('Close clicked!'),
  },
};

// === CUSTOMIZATION EXAMPLES === //

export const CustomContent: Story = {
  args: {
    type: 'simple',
    size: 'default',
    align: 'horizontal',
    dropShadow: true,
    showCloseIcon: true,
    showButtonGroup: false,
    title: 'Custom Title',
    subtitle: 'Custom subtitle text',
    bodyText: 'This is a custom body text that demonstrates the flexibility of the card component.',
    onCloseClick: () => console.log('Close clicked!'),
  },
};

export const NoCloseButton: Story = {
  args: {
    type: 'simple',
    size: 'default',
    align: 'vertical',
    dropShadow: true,
    showCloseIcon: false,
  },
};

export const NoButtonGroup: Story = {
  args: {
    type: 'simple',
    size: 'default',
    align: 'vertical',
    dropShadow: true,
    showButtonGroup: false,
    showCloseIcon: true,
    onCloseClick: () => console.log('Close clicked!'),
  },
};

// === COMPREHENSIVE SHOWCASES === //

export const AllSimpleVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <h3 style={{ margin: '0', fontSize: '18px', fontWeight: 600 }}>Simple Cards - Horizontal</h3>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'start', flexWrap: 'wrap' }}>
        <Card type="simple" size="small" align="horizontal" dropShadow={true} showCloseIcon={true} onCloseClick={() => console.log('Small card closed')} />
        <Card type="simple" size="default" align="horizontal" dropShadow={true} showCloseIcon={true} onCloseClick={() => console.log('Default card closed')} />
        <Card type="simple" size="large" align="horizontal" dropShadow={true} showCloseIcon={true} onCloseClick={() => console.log('Large card closed')} />
      </div>
      
      <h3 style={{ margin: '0', fontSize: '18px', fontWeight: 600 }}>Simple Cards - Vertical</h3>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'start', flexWrap: 'wrap' }}>
        <Card type="simple" size="small" align="vertical" dropShadow={true} showCloseIcon={true} onCloseClick={() => console.log('Small vertical card closed')} />
        <Card type="simple" size="default" align="vertical" dropShadow={true} showCloseIcon={true} onCloseClick={() => console.log('Default vertical card closed')} />
        <Card type="simple" size="large" align="vertical" dropShadow={true} showCloseIcon={true} onCloseClick={() => console.log('Large vertical card closed')} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All simple card variants with both horizontal and vertical alignments.',
      },
    },
  },
};

export const AllIconVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <h3 style={{ margin: '0', fontSize: '18px', fontWeight: 600 }}>Icon Cards</h3>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'start', flexWrap: 'wrap' }}>
        <Card type="icon" size="small" align="vertical" dropShadow={true} />
        <Card type="icon" size="default" align="vertical" dropShadow={true} />
        <Card type="icon" size="large" align="vertical" dropShadow={true} />
      </div>
      
      <h3 style={{ margin: '0', fontSize: '18px', fontWeight: 600 }}>Empty State Cards</h3>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'start', flexWrap: 'wrap' }}>
        <Card type="empty-state" size="small" align="vertical" dropShadow={true} />
        <Card type="empty-state" size="default" align="vertical" dropShadow={true} />
        <Card type="empty-state" size="large" align="vertical" dropShadow={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icon and empty state card variants.',
      },
    },
  },
};

export const AllTextVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <h3 style={{ margin: '0', fontSize: '18px', fontWeight: 600 }}>Text-Only Cards</h3>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'start', flexWrap: 'wrap' }}>
        <Card type="text-only" size="small" align="vertical" dropShadow={true} showCloseIcon={true} onCloseClick={() => console.log('Small text-only card closed')} />
        <Card type="text-only" size="default" align="vertical" dropShadow={true} showCloseIcon={true} onCloseClick={() => console.log('Default text-only card closed')} />
        <Card type="text-only" size="large" align="vertical" dropShadow={true} showCloseIcon={true} onCloseClick={() => console.log('Large text-only card closed')} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Text-only card variants.',
      },
    },
  },
};

export const AllStatVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <h3 style={{ margin: '0', fontSize: '18px', fontWeight: 600 }}>Stat Cards - Roboto Flex</h3>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'start', flexWrap: 'wrap' }}>
        <Card type="stat" size="small" align="vertical" dropShadow={true} font="roboto-flex" />
        <Card type="stat" size="default" align="vertical" dropShadow={true} font="roboto-flex" />
        <Card type="stat" size="large" align="vertical" dropShadow={true} font="roboto-flex" />
      </div>
      
      <h3 style={{ margin: '0', fontSize: '18px', fontWeight: 600 }}>Stat Cards - Archivo</h3>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'start', flexWrap: 'wrap' }}>
        <Card type="stat" size="small" align="vertical" dropShadow={true} font="archivo" />
        <Card type="stat" size="default" align="vertical" dropShadow={true} font="archivo" />
        <Card type="stat" size="large" align="vertical" dropShadow={true} font="archivo" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Stat card variants with different font types.',
      },
    },
  },
};

export const ShadowComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <h3 style={{ margin: '0', fontSize: '18px', fontWeight: 600 }}>Shadow Comparison</h3>
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        <div>
          <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 500 }}>With Shadow</h4>
          <Card type="simple" size="default" align="horizontal" dropShadow={true} />
        </div>
        <div>
          <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 500 }}>No Shadow</h4>
          <Card type="simple" size="default" align="horizontal" dropShadow={false} />
        </div>
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

export const CustomChildren: Story = {
  args: {
    showCloseIcon: true,
    onCloseClick: () => console.log('Custom card close clicked!'),
    children: (
      <div style={{ padding: '16px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>Custom Content</h3>
        <p style={{ margin: '0', fontSize: '14px', lineHeight: 1.4 }}>
          This card uses custom children instead of the predefined structure.
        </p>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of using custom children to override the default card structure with an optional close icon.',
      },
    },
  },
};

// === CLOSE ICON EXAMPLES === //

export const CloseIconShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '20px' }}>
      <h3 style={{ margin: '0', fontSize: '18px', fontWeight: 600 }}>Close Icon Examples</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h4 style={{ margin: '0', fontSize: '16px', fontWeight: 500 }}>Simple Cards with Close Icon</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'start', flexWrap: 'wrap' }}>
          <Card
            type="simple"
            size="small"
            align="vertical"
            dropShadow={true}
            showCloseIcon={true}
            title="Small Card"
            subtitle="With close icon"
            onCloseClick={() => alert('Small card closed!')}
          />
          <Card
            type="simple"
            size="default"
            align="vertical"
            dropShadow={true}
            showCloseIcon={true}
            title="Default Card"
            subtitle="With close icon"
            onCloseClick={() => alert('Default card closed!')}
          />
          <Card
            type="simple"
            size="large"
            align="vertical"
            dropShadow={true}
            showCloseIcon={true}
            title="Large Card"
            subtitle="With close icon"
            onCloseClick={() => alert('Large card closed!')}
          />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h4 style={{ margin: '0', fontSize: '16px', fontWeight: 500 }}>Text-Only Cards with Close Icon</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'start', flexWrap: 'wrap' }}>
          <Card
            type="text-only"
            size="small"
            align="vertical"
            dropShadow={true}
            showCloseIcon={true}
            onCloseClick={() => alert('Small text-only card closed!')}
          />
          <Card
            type="text-only"
            size="default"
            align="vertical"
            dropShadow={true}
            showCloseIcon={true}
            onCloseClick={() => alert('Default text-only card closed!')}
          />
          <Card
            type="text-only"
            size="large"
            align="vertical"
            dropShadow={true}
            showCloseIcon={true}
            onCloseClick={() => alert('Large text-only card closed!')}
          />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h4 style={{ margin: '0', fontSize: '16px', fontWeight: 500 }}>Custom Content Card with Close Icon</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'start', flexWrap: 'wrap' }}>
          <Card
            showCloseIcon={true}
            dropShadow={true}
            onCloseClick={() => alert('Custom content card closed!')}
          >
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h3 style={{ margin: '0 0 12px 0', color: '#1C1C1C', fontSize: '18px' }}>
                Custom Card with Close
              </h3>
              <p style={{ margin: '0 0 16px 0', color: '#6B7280', fontSize: '14px' }}>
                This demonstrates the close icon positioned at the top-right corner.
              </p>
              <button
                style={{
                  background: '#2F42BD',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
                onClick={() => alert('Action button clicked!')}
              >
                Action Button
              </button>
            </div>
          </Card>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h4 style={{ margin: '0', fontSize: '16px', fontWeight: 500 }}>Comparison: With vs Without Close Icon</h4>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'start' }}>
          <div style={{ textAlign: 'center' }}>
            <h5 style={{ margin: '0 0 12px 0', fontSize: '14px' }}>Without Close Icon</h5>
            <Card
              type="simple"
              size="default"
              align="vertical"
              dropShadow={true}
              showCloseIcon={false}
              title="Regular Card"
              subtitle="No close icon"
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <h5 style={{ margin: '0 0 12px 0', fontSize: '14px' }}>With Close Icon</h5>
            <Card
              type="simple"
              size="default"
              align="vertical"
              dropShadow={true}
              showCloseIcon={true}
              title="Closable Card"
              subtitle="With close icon"
              onCloseClick={() => alert('Card closed!')}
            />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of the close icon functionality across different card types and sizes. The close icon is positioned at the top-right corner and is optional for simple and text-only cards.',
      },
    },
  },
};
