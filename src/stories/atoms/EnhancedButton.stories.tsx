import type { Meta, StoryObj } from '@storybook/react';
import { EnhancedButton } from './EnhancedButton';
import { EchoMUIThemeProvider } from '../foundations/MUIThemeProvider';
import { Button } from './Button'; // Original Echo button for comparison

// Import MUI icons for examples
import {
  DownloadIcon,
  SaveIcon,
  DeleteIcon,
  ShareIcon,
  FavoriteIcon,
  AddIcon,
  SearchIcon,
  NotificationsIcon,
  ArrowForwardIcon,
  PlayArrowIcon,
  PauseIcon,
} from '../foundations/MaterialUIIcons';

const meta = {
  title: 'Atoms/Enhanced Button (MUI + Echo)',
  component: EnhancedButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
**Enhanced Button with MUI Interactions + Echo Design**

This enhanced button component combines the best of both worlds:
- **MUI 6/7 interaction capabilities**: Ripple effects, better accessibility, touch interactions, keyboard navigation
- **Echo design tokens**: All visual styling (colors, typography, spacing) comes from Echo design system
- **Progressive enhancement**: Can be used alongside existing Echo buttons

### Key Features:
- 🎯 **Echo Visual Design**: Uses Echo design tokens for all styling
- ⚡ **MUI Interactions**: Ripple effects, enhanced focus states, better touch support
- ♿ **Enhanced Accessibility**: Better keyboard navigation, ARIA support, tooltips
- 🎨 **MUI Icons**: Supports MUI icon library alongside custom icons
- 🔄 **Loading States**: Smooth loading animations with MUI CircularProgress
- 📱 **Touch Optimized**: Better mobile/touch interactions

### Integration Strategy:
1. Wrap with \`EchoMUIThemeProvider\` to ensure MUI uses Echo tokens
2. All visual design comes from Echo design system
3. Only use MUI tokens when Echo equivalent doesn't exist
4. Maintain complete design consistency with existing Echo components
        `,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <EchoMUIThemeProvider>
        <Story />
      </EchoMUIThemeProvider>
    ),
  ],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['extra-small', 'small', 'default', 'large'],
      description: 'Size of the button',
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'ghost', 'error', 'warning', 'info', 'success'],
      description: 'Visual style variant',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'clicked', 'focused', 'loading', 'disabled'],
      description: 'Visual state (for controlled states)',
    },
    outline: {
      control: { type: 'boolean' },
      description: 'Outline variant',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Loading state with spinner',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
    iconOnly: {
      control: { type: 'boolean' },
      description: 'Icon-only variant',
    },
    width: {
      control: { type: 'select' },
      options: ['auto', 'full'],
      description: 'Width behavior',
    },
    enhancedInteractions: {
      control: { type: 'boolean' },
      description: 'Enable MUI interaction enhancements (ripple, etc.)',
    },
    tooltip: {
      control: { type: 'text' },
      description: 'Tooltip text for accessibility',
    },
  },
} satisfies Meta<typeof EnhancedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    type: 'primary',
    enhancedInteractions: true,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    type: 'secondary',
    enhancedInteractions: true,
  },
};

export const WithMUIIcons: Story = {
  args: {
    children: 'Download File',
    type: 'primary',
    leadingIcon: <DownloadIcon />,
    trailingIcon: <ArrowForwardIcon />,
    enhancedInteractions: true,
    tooltip: 'Click to download the file',
  },
};

export const IconOnly: Story = {
  args: {
    iconOnly: true,
    icon: <FavoriteIcon />,
    type: 'primary',
    size: 'default',
    enhancedInteractions: true,
    tooltip: 'Add to favorites',
  },
};

export const Loading: Story = {
  args: {
    children: 'Saving Changes...',
    type: 'primary',
    loading: true,
    leadingIcon: <SaveIcon />,
    enhancedInteractions: true,
  },
};

// Size Comparison
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <EnhancedButton size="extra-small" type="primary" enhancedInteractions>
        Extra Small
      </EnhancedButton>
      <EnhancedButton size="small" type="primary" enhancedInteractions>
        Small
      </EnhancedButton>
      <EnhancedButton size="default" type="primary" enhancedInteractions>
        Default
      </EnhancedButton>
      <EnhancedButton size="large" type="primary" enhancedInteractions>
        Large
      </EnhancedButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button sizes using Echo design tokens for consistent sizing.',
      },
    },
  },
};

// Type Variants
export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <EnhancedButton type="primary" enhancedInteractions>Primary</EnhancedButton>
      <EnhancedButton type="secondary" enhancedInteractions>Secondary</EnhancedButton>
      <EnhancedButton type="tertiary" enhancedInteractions>Tertiary</EnhancedButton>
      <EnhancedButton type="ghost" enhancedInteractions>Ghost</EnhancedButton>
      <EnhancedButton type="error" enhancedInteractions>Error</EnhancedButton>
      <EnhancedButton type="warning" enhancedInteractions>Warning</EnhancedButton>
      <EnhancedButton type="info" enhancedInteractions>Info</EnhancedButton>
      <EnhancedButton type="success" enhancedInteractions>Success</EnhancedButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button types with their respective semantic colors from Echo design tokens.',
      },
    },
  },
};

// Outline Variants
export const OutlineVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <EnhancedButton type="primary" outline enhancedInteractions>Primary Outline</EnhancedButton>
      <EnhancedButton type="error" outline enhancedInteractions>Error Outline</EnhancedButton>
      <EnhancedButton type="warning" outline enhancedInteractions>Warning Outline</EnhancedButton>
      <EnhancedButton type="success" outline enhancedInteractions>Success Outline</EnhancedButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Outline variants with transparent backgrounds and colored borders.',
      },
    },
  },
};

// Icon Examples
export const IconExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <EnhancedButton leadingIcon={<SaveIcon />} type="primary" enhancedInteractions>
        Save
      </EnhancedButton>
      <EnhancedButton leadingIcon={<DeleteIcon />} type="error" enhancedInteractions>
        Delete
      </EnhancedButton>
      <EnhancedButton trailingIcon={<ShareIcon />} type="secondary" enhancedInteractions>
        Share
      </EnhancedButton>
      <EnhancedButton 
        leadingIcon={<SearchIcon />} 
        trailingIcon={<ArrowForwardIcon />} 
        type="tertiary" 
        enhancedInteractions
      >
        Search
      </EnhancedButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons with MUI icons in leading and trailing positions.',
      },
    },
  },
};

// Icon-Only Variants
export const IconOnlyVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <EnhancedButton 
        iconOnly 
        icon={<PlayArrowIcon />} 
        type="primary" 
        size="small"
        tooltip="Play"
        enhancedInteractions
      />
      <EnhancedButton 
        iconOnly 
        icon={<PauseIcon />} 
        type="secondary" 
        size="default"
        tooltip="Pause"
        enhancedInteractions
      />
      <EnhancedButton 
        iconOnly 
        icon={<FavoriteIcon />} 
        type="error" 
        size="large"
        tooltip="Favorite"
        enhancedInteractions
      />
      <EnhancedButton 
        iconOnly 
        icon={<AddIcon />} 
        type="success" 
        size="default"
        tooltip="Add new item"
        enhancedInteractions
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icon-only buttons with tooltips for accessibility. Try hovering over them!',
      },
    },
  },
};

// Loading States
export const LoadingStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <EnhancedButton loading type="primary" enhancedInteractions>
        Saving...
      </EnhancedButton>
      <EnhancedButton loading leadingIcon={<DownloadIcon />} type="secondary" enhancedInteractions>
        Downloading...
      </EnhancedButton>
      <EnhancedButton 
        loading 
        iconOnly 
        icon={<SaveIcon />} 
        type="tertiary"
        tooltip="Saving changes"
        enhancedInteractions
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Loading states with MUI CircularProgress component for smooth animations.',
      },
    },
  },
};

// Interaction Comparison
export const InteractionComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 600 }}>
          MUI Enhanced (with ripple effects)
        </h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <EnhancedButton type="primary" enhancedInteractions>
            Click Me (Enhanced)
          </EnhancedButton>
          <EnhancedButton type="secondary" enhancedInteractions leadingIcon={<SaveIcon />}>
            With Icon (Enhanced)
          </EnhancedButton>
          <EnhancedButton 
            type="tertiary" 
            enhancedInteractions 
            iconOnly 
            icon={<FavoriteIcon />}
            tooltip="Enhanced icon button"
          />
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 600 }}>
          Standard (no ripple effects)
        </h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <EnhancedButton type="primary" enhancedInteractions={false}>
            Click Me (Standard)
          </EnhancedButton>
          <EnhancedButton type="secondary" enhancedInteractions={false} leadingIcon={<SaveIcon />}>
            With Icon (Standard)
          </EnhancedButton>
          <EnhancedButton 
            type="tertiary" 
            enhancedInteractions={false} 
            iconOnly 
            icon={<FavoriteIcon />}
            tooltip="Standard icon button"
          />
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 600 }}>
          Original Echo Button (for comparison)
        </h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button type="primary">
            Original Echo Button
          </Button>
          <Button type="secondary" leadingIcon={<SaveIcon />}>
            Original with Icon
          </Button>
          <Button iconOnly icon={<FavoriteIcon />} type="tertiary" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
**Interaction Comparison**

This story demonstrates the difference between:
1. **MUI Enhanced**: Buttons with ripple effects, better touch interactions, enhanced focus states
2. **Standard**: Same visual design but without MUI interaction enhancements  
3. **Original Echo**: The existing Echo button component for comparison

**Try clicking each button to feel the interaction differences!**

All buttons maintain identical visual design using Echo design tokens.
        `,
      },
    },
  },
};

// Accessibility Features
export const AccessibilityFeatures: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
      <div>
        <h3 style={{ margin: '0 0 12px 0', fontSize: '16px' }}>Enhanced Focus States</h3>
        <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>
          Try using Tab key to navigate through these buttons. Notice the enhanced focus indicators.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <EnhancedButton type="primary" enhancedInteractions>
            Focus Target 1
          </EnhancedButton>
          <EnhancedButton type="secondary" enhancedInteractions>
            Focus Target 2
          </EnhancedButton>
          <EnhancedButton type="tertiary" enhancedInteractions>
            Focus Target 3
          </EnhancedButton>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 12px 0', fontSize: '16px' }}>Tooltips for Context</h3>
        <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>
          Hover over these buttons to see helpful tooltips.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <EnhancedButton 
            type="error" 
            leadingIcon={<DeleteIcon />}
            tooltip="This action cannot be undone"
            enhancedInteractions
          >
            Delete Item
          </EnhancedButton>
          <EnhancedButton 
            iconOnly 
            icon={<NotificationsIcon />}
            tooltip="View all notifications (5 unread)"
            type="primary"
            enhancedInteractions
          />
          <EnhancedButton 
            type="success"
            leadingIcon={<SaveIcon />}
            tooltip="Save all changes (Ctrl+S)"
            enhancedInteractions
          >
            Save
          </EnhancedButton>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 12px 0', fontSize: '16px' }}>Keyboard Navigation</h3>
        <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>
          Use Tab to focus, Enter or Space to activate.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <EnhancedButton type="primary" enhancedInteractions>
            Press Enter/Space
          </EnhancedButton>
          <EnhancedButton type="secondary" enhancedInteractions disabled>
            Disabled (skipped)
          </EnhancedButton>
          <EnhancedButton type="tertiary" enhancedInteractions>
            Next Focus Target
          </EnhancedButton>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
**Enhanced Accessibility Features**

The MUI-enhanced buttons provide superior accessibility:
- **Enhanced Focus States**: Clear focus indicators with Echo design tokens
- **Tooltips**: Contextual information for better UX
- **Keyboard Navigation**: Full keyboard support with proper focus management
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Touch Optimization**: Better touch targets and interactions

Try navigating with Tab key and activating with Enter/Space!
        `,
      },
    },
  },
};

// Full Width Example
export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <EnhancedButton type="primary" width="full" enhancedInteractions>
        Full Width Primary
      </EnhancedButton>
      <EnhancedButton type="secondary" width="full" leadingIcon={<SaveIcon />} enhancedInteractions>
        Full Width with Icon
      </EnhancedButton>
      <EnhancedButton type="tertiary" width="full" loading enhancedInteractions>
        Full Width Loading
      </EnhancedButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Full-width buttons for forms and mobile layouts.',
      },
    },
  },
};
