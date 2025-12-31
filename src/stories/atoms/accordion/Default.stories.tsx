import type { Meta, StoryObj } from '@storybook/react';
import { Default } from './Default';
import React from 'react';

const meta: Meta<typeof Default> = {
  title: 'Atoms/Accordion/Default',
  component: Default,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Default Accordion Component

A flexible, accessible accordion component for the simple accordion type with status indicators and notification icons.

## Features
- **Three Sizes**: Small (compact), Default (standard), Large (prominent)
- **Status Icons**: Visual completion/progress indicators
- **Notification Bells**: Optional alert/notification icon
- **Toggle Variants**: Chevron or plus/minus icons
- **Fully Responsive**: Adapts to all screen sizes
- **Token-Driven**: Uses design system tokens exclusively
- **Accessible**: WCAG AA compliant with full keyboard support

## Size Specifications

| Size | Status Circle | Toggle Icon | Title Font | Padding |
|------|---------------|-------------|------------|---------|
| Small | 22px | 20px | 14px Label SM | 16px 20px 16px 16px |
| Default | 36px | 28px | 18px Label LG | 20px 24px 20px 20px |
| Large | 48px | 32px | 24px H4 Archivo | 24px 24px 24px 20px |
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['simple', 'no-stroke'],
      description: 'Accordion type variant',
    },
    open: {
      control: 'boolean',
      description: 'Accordion open state (controlled)',
    },
    size: {
      control: 'radio',
      options: ['small', 'default', 'large'],
      description: 'Size variant',
    },
    openIconType: {
      control: 'radio',
      options: ['chevron', 'plus'],
      description: 'Toggle icon type',
    },
    showStatusIcon: {
      control: 'boolean',
      description: 'Show status completion icon',
    },
    statusIconType: {
      control: 'radio',
      options: ['complete', 'future', 'current'],
      description: 'Status icon variant',
    },
    showBellIcon: {
      control: 'boolean',
      description: 'Show notification bell icon',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Default>;

// ========================================
// PLAYGROUND
// ========================================

export const Playground: Story = {
  args: {
    type: 'simple',
    open: false,
    size: 'default',
    openIconType: 'chevron',
    showStatusIcon: true,
    statusIconType: 'complete',
    showBellIcon: true,
    title: 'This is a section title taking up a lot of space...',
    description: 'This is supporting text to help describe the content within the accordion',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.',
  },
};

// ========================================
// SIZE COMPARISON
// ========================================

export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3
          style={{
            marginBottom: '12px',
            fontFamily: 'Archivo',
            fontSize: '16px',
            fontWeight: 500,
          }}
        >
          Small Size (14px title, 20px toggle)
        </h3>
        <Default size="small" />
      </div>
      <div>
        <h3
          style={{
            marginBottom: '12px',
            fontFamily: 'Archivo',
            fontSize: '16px',
            fontWeight: 500,
          }}
        >
          Default Size (18px title, 28px toggle)
        </h3>
        <Default size="default" />
      </div>
      <div>
        <h3
          style={{
            marginBottom: '12px',
            fontFamily: 'Archivo',
            fontSize: '16px',
            fontWeight: 500,
          }}
        >
          Large Size (24px title, 32px toggle)
        </h3>
        <Default size="large" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Visual comparison of all three size variants side-by-side with accurate specifications.',
      },
    },
  },
};

// ========================================
// SMALL SIZE STORIES
// ========================================

export const SmallClosed: Story = {
  args: {
    size: 'small',
    open: false,
    openIconType: 'chevron',
  },
  parameters: {
    docs: {
      description: {
        story: 'Small accordion (54px min height, 14px title, 20px toggle icon) in closed state.',
      },
    },
  },
};

export const SmallOpen: Story = {
  args: {
    size: 'small',
    open: true,
    openIconType: 'chevron',
  },
  parameters: {
    docs: {
      description: {
        story: 'Small accordion in open state showing 13px footnote content.',
      },
    },
  },
};

export const SmallPlusClosed: Story = {
  args: {
    size: 'small',
    open: false,
    openIconType: 'plus',
  },
  parameters: {
    docs: {
      description: {
        story: 'Small accordion with plus icon (20px) in closed state.',
      },
    },
  },
};

export const SmallPlusOpen: Story = {
  args: {
    size: 'small',
    open: true,
    openIconType: 'plus',
  },
  parameters: {
    docs: {
      description: {
        story: 'Small accordion with minus icon (toggled from plus) in open state.',
      },
    },
  },
};

// ========================================
// DEFAULT SIZE STORIES
// ========================================

export const DefaultSizeClosed: Story = {
  args: {
    size: 'default',
    open: false,
    openIconType: 'chevron',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default accordion (70px min height, 18px title, 28px toggle icon) in closed state.',
      },
    },
  },
};

export const DefaultSizeOpen: Story = {
  args: {
    size: 'default',
    open: true,
    openIconType: 'chevron',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default accordion in open state showing 16px body content.',
      },
    },
  },
};

export const DefaultPlusClosed: Story = {
  args: {
    size: 'default',
    open: false,
    openIconType: 'plus',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default accordion with plus icon (28px) in closed state.',
      },
    },
  },
};

export const DefaultPlusOpen: Story = {
  args: {
    size: 'default',
    open: true,
    openIconType: 'plus',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default accordion with minus icon (toggled from plus) in open state.',
      },
    },
  },
};

// ========================================
// LARGE SIZE STORIES
// ========================================

export const LargeClosed: Story = {
  args: {
    size: 'large',
    open: false,
    openIconType: 'chevron',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large accordion (80px min height, 24px H4 title, 32px toggle icon) in closed state.',
      },
    },
  },
};

export const LargeOpen: Story = {
  args: {
    size: 'large',
    open: true,
    openIconType: 'chevron',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large accordion in open state showing 19px H5 content.',
      },
    },
  },
};

export const LargePlusClosed: Story = {
  args: {
    size: 'large',
    open: false,
    openIconType: 'plus',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large accordion with plus icon (32px) in closed state.',
      },
    },
  },
};

export const LargePlusOpen: Story = {
  args: {
    size: 'large',
    open: true,
    openIconType: 'plus',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large accordion with minus icon (toggled from plus) in open state.',
      },
    },
  },
};

// ========================================
// INTERACTIVE SHOWCASE
// ========================================

export const InteractiveShowcase: Story = {
  render: () => {
    const [openStates, setOpenStates] = React.useState({
      small: false,
      default: false,
      large: false,
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Default
          size="small"
          open={openStates.small}
          onToggle={(isOpen) => setOpenStates((prev) => ({ ...prev, small: isOpen }))}
        />
        <Default
          size="default"
          open={openStates.default}
          onToggle={(isOpen) => setOpenStates((prev) => ({ ...prev, default: isOpen }))}
        />
        <Default
          size="large"
          open={openStates.large}
          onToggle={(isOpen) => setOpenStates((prev) => ({ ...prev, large: isOpen }))}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo showing all three sizes with independent toggle states.',
      },
    },
  },
};

// ========================================
// NO STROKE VARIANT
// ========================================

export const NoStroke: Story = {
  args: {
    type: 'no-stroke',
    size: 'default',
    open: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Accordion without border (no-stroke type).',
      },
    },
  },
};

// ========================================
// WITHOUT OPTIONAL ELEMENTS
// ========================================

export const WithoutStatusIcon: Story = {
  args: {
    showStatusIcon: false,
    size: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Accordion without status icon.',
      },
    },
  },
};

export const WithoutBellIcon: Story = {
  args: {
    showBellIcon: false,
    size: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Accordion without notification bell icon.',
      },
    },
  },
};

export const MinimalAccordion: Story = {
  args: {
    showStatusIcon: false,
    showBellIcon: false,
    size: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal accordion with only title, description, and toggle.',
      },
    },
  },
};
