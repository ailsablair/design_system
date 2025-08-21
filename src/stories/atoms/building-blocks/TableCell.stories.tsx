import type { Meta, StoryObj } from '@storybook/react';
import { TableCell } from './TableCell';

const meta: Meta<typeof TableCell> = {
  title: 'Atoms/Building Blocks/TableCell',
  component: TableCell,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Table Cell component based on Figma designs supporting multiple variants:

- **Checkbox with title only** - Basic cell with selection checkbox and title
- **Checkbox with title and subtext** - Extended cell with selection checkbox, title, and supporting text
- **Toggle switch only** - Compact cell with just a toggle switch
- **Toggle switch with title and subtext** - Full cell with toggle switch, title, and supporting text

Features different background states (seafoam, white, gray, disabled, hover) and sizes (default, small) matching the design system.
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'default'],
      description: 'Cell size variant',
    },
    type: {
      control: { type: 'select' },
      options: ['title', 'title-subtext', 'toggle', 'toggle-w-subtext'],
      description: 'Cell type determines layout and content',
    },
    background: {
      control: { type: 'select' },
      options: ['alt-seafoam-25', 'default', 'alt-gray-50', 'disabled', 'hover'],
      description: 'Background variant',
    },
    leadCell: {
      control: { type: 'boolean' },
      description: 'Indicates this is a primary/leading cell in the row',
    },
    title: {
      control: { type: 'text' },
      description: 'Title text',
    },
    subtext: {
      control: { type: 'text' },
      description: 'Supporting/subtitle text',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Checkbox checked state',
    },
    enabled: {
      control: { type: 'boolean' },
      description: 'Toggle enabled state',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
    width: {
      control: { type: 'text' },
      description: 'Width of the cell',
    },
  },
  args: {
    size: 'default',
    type: 'title',
    background: 'default',
    leadCell: true,
    title: 'Olivia Rhye',
    subtext: 'olivia@email.com',
    checked: false,
    enabled: true,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof TableCell>;

// Basic Examples
export const Default: Story = {
  args: {
    type: 'title',
    background: 'default',
  },
};

export const WithSubtext: Story = {
  args: {
    type: 'title-subtext',
    background: 'default',
  },
};

export const ToggleOnly: Story = {
  args: {
    type: 'toggle',
    background: 'default',
  },
};

export const ToggleWithSubtext: Story = {
  args: {
    type: 'toggle-w-subtext',
    background: 'default',
  },
};

// Size Variants
export const SmallSize: Story = {
  args: {
    size: 'small',
    type: 'title-subtext',
    background: 'default',
  },
};

export const SmallToggle: Story = {
  args: {
    size: 'small',
    type: 'toggle-w-subtext',
    background: 'default',
  },
};

// Background Variants
export const SeafoamBackground: Story = {
  args: {
    type: 'title-subtext',
    background: 'alt-seafoam-25',
  },
};

export const GrayBackground: Story = {
  args: {
    type: 'title-subtext',
    background: 'alt-gray-50',
  },
};

export const DisabledState: Story = {
  args: {
    type: 'title-subtext',
    background: 'disabled',
    disabled: true,
  },
};

export const HoverState: Story = {
  args: {
    type: 'title-subtext',
    background: 'hover',
  },
};

// Interactive States
export const CheckedCheckbox: Story = {
  args: {
    type: 'title-subtext',
    background: 'hover',
    checked: true,
  },
};

export const EnabledToggle: Story = {
  args: {
    type: 'toggle-w-subtext',
    background: 'default',
    enabled: true,
  },
};

// Comprehensive Showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Default Size - Seafoam Background</h3>
      <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
        <TableCell
          size="default"
          type="title"
          background="alt-seafoam-25"
          title="Olivia Rhye"
        />
        <TableCell
          size="default"
          type="title-subtext"
          background="alt-seafoam-25"
          title="Olivia Rhye"
          subtext="olivia@email.com"
        />
        <TableCell
          size="default"
          type="toggle"
          background="alt-seafoam-25"
          enabled={true}
        />
        <TableCell
          size="default"
          type="toggle-w-subtext"
          background="alt-seafoam-25"
          title="Olivia Rhye"
          subtext="olivia@email.com"
          enabled={true}
        />
      </div>

      <h3 style={{ margin: '24px 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Default Size - White Background</h3>
      <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
        <TableCell
          size="default"
          type="title"
          background="default"
          title="Olivia Rhye"
        />
        <TableCell
          size="default"
          type="title-subtext"
          background="default"
          title="Olivia Rhye"
          subtext="olivia@email.com"
        />
        <TableCell
          size="default"
          type="toggle"
          background="default"
          enabled={true}
        />
        <TableCell
          size="default"
          type="toggle-w-subtext"
          background="default"
          title="Olivia Rhye"
          subtext="olivia@email.com"
          enabled={true}
        />
      </div>

      <h3 style={{ margin: '24px 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Small Size - Gray Background</h3>
      <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
        <TableCell
          size="small"
          type="title"
          background="alt-gray-50"
          title="Olivia Rhye"
        />
        <TableCell
          size="small"
          type="title-subtext"
          background="alt-gray-50"
          title="Olivia Rhye"
          subtext="olivia@email.com"
        />
        <TableCell
          size="small"
          type="toggle"
          background="alt-gray-50"
          enabled={true}
        />
        <TableCell
          size="small"
          type="toggle-w-subtext"
          background="alt-gray-50"
          title="Olivia Rhye"
          subtext="olivia@email.com"
          enabled={true}
        />
      </div>

      <h3 style={{ margin: '24px 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Disabled State</h3>
      <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
        <TableCell
          size="default"
          type="title"
          background="disabled"
          title="Olivia Rhye"
          disabled={true}
        />
        <TableCell
          size="default"
          type="title-subtext"
          background="disabled"
          title="Olivia Rhye"
          subtext="olivia@email.com"
          disabled={true}
        />
        <TableCell
          size="default"
          type="toggle"
          background="disabled"
          enabled={true}
          disabled={true}
        />
        <TableCell
          size="default"
          type="toggle-w-subtext"
          background="disabled"
          title="Olivia Rhye"
          subtext="olivia@email.com"
          enabled={true}
          disabled={true}
        />
      </div>

      <h3 style={{ margin: '24px 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Hover State</h3>
      <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
        <TableCell
          size="default"
          type="title"
          background="hover"
          title="Olivia Rhye"
          checked={true}
        />
        <TableCell
          size="default"
          type="title-subtext"
          background="hover"
          title="Olivia Rhye"
          subtext="olivia@email.com"
          checked={true}
        />
        <TableCell
          size="default"
          type="toggle"
          background="hover"
          enabled={true}
        />
        <TableCell
          size="default"
          type="toggle-w-subtext"
          background="hover"
          title="Olivia Rhye"
          subtext="olivia@email.com"
          enabled={true}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all table cell variants including different sizes, backgrounds, and states.',
      },
    },
  },
};

// Figma Design Showcase
export const FigmaDesignShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Figma Design Implementation</h3>
        <p style={{ margin: '0 0 16px 0', color: '#6D7280', fontSize: '14px' }}>
          Pixel-perfect implementation of the table cell designs from Figma
        </p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, 320px)', gap: '24px' }}>
        {/* Default Size - Seafoam */}
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Default Size - Seafoam</h4>
          <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
            <TableCell size="default" type="title" background="alt-seafoam-25" />
            <TableCell size="default" type="title-subtext" background="alt-seafoam-25" />
            <TableCell size="default" type="toggle-w-subtext" background="alt-seafoam-25" enabled={true} />
          </div>
        </div>

        {/* Small Size - Seafoam */}
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Small Size - Seafoam</h4>
          <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
            <TableCell size="small" type="title" background="alt-seafoam-25" />
            <TableCell size="small" type="title-subtext" background="alt-seafoam-25" />
            <TableCell size="small" type="toggle-w-subtext" background="alt-seafoam-25" enabled={true} />
          </div>
        </div>

        {/* Default Size - White */}
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Default Size - White</h4>
          <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
            <TableCell size="default" type="title" background="default" />
            <TableCell size="default" type="title-subtext" background="default" />
            <TableCell size="default" type="toggle-w-subtext" background="default" enabled={true} />
          </div>
        </div>

        {/* Small Size - White */}
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Small Size - White</h4>
          <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
            <TableCell size="small" type="title" background="default" />
            <TableCell size="small" type="title-subtext" background="default" />
            <TableCell size="small" type="toggle-w-subtext" background="default" enabled={true} />
          </div>
        </div>

        {/* Gray Background */}
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Gray Background</h4>
          <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
            <TableCell size="default" type="title" background="alt-gray-50" />
            <TableCell size="default" type="title-subtext" background="alt-gray-50" />
            <TableCell size="default" type="toggle-w-subtext" background="alt-gray-50" enabled={true} />
          </div>
        </div>

        {/* Disabled State */}
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Disabled State</h4>
          <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
            <TableCell size="default" type="title" background="disabled" disabled={true} />
            <TableCell size="default" type="title-subtext" background="disabled" disabled={true} />
            <TableCell size="default" type="toggle-w-subtext" background="disabled" enabled={true} disabled={true} />
          </div>
        </div>

        {/* Hover State */}
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Hover State</h4>
          <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
            <TableCell size="default" type="title" background="hover" checked={true} />
            <TableCell size="default" type="title-subtext" background="hover" checked={true} />
            <TableCell size="default" type="toggle-w-subtext" background="hover" enabled={true} />
          </div>
        </div>

        {/* Toggle Only Cells */}
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Toggle Only</h4>
          <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
            <TableCell size="default" type="toggle" background="alt-seafoam-25" enabled={true} />
            <TableCell size="small" type="toggle" background="alt-seafoam-25" enabled={true} />
            <TableCell size="default" type="toggle" background="default" enabled={true} />
            <TableCell size="small" type="toggle" background="default" enabled={true} />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase matching the exact Figma designs with all variants, sizes, and states.',
      },
    },
  },
};
