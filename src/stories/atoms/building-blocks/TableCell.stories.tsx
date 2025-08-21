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
      options: [
        'avatar-w-title',
        'avatar-w-subtext',
        'toggle-avatar-w-title',
        'toggle-avatar-w-subtext',
        'payment-w-select',
        'payment-w-select-and-expiry',
        'payment-w-toggle',
        'payment-w-toggle-and-expiry',
        'file-w-select',
        'file-w-select-and-expiry',
        'file-w-toggle',
        'file-w-toggle-and-expiry',
        'links',
        'rating',
        'more-actions',
        'icon-only',
        'icon-group',
        'cta-button',
        'button-group'
      ],
      description: 'Cell type determines layout and content',
    },
    background: {
      control: { type: 'select' },
      options: ['default', 'alt-seafoam-25', 'alt-gray-50', 'disabled', 'hover'],
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
    type: 'avatar-w-title',
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
    type: 'avatar-w-title',
    background: 'default',
  },
};

export const WithSubtext: Story = {
  args: {
    type: 'avatar-w-subtext',
    background: 'default',
  },
};

export const ToggleOnly: Story = {
  args: {
    type: 'toggle-avatar-w-title',
    background: 'default',
  },
};

export const ToggleWithSubtext: Story = {
  args: {
    type: 'toggle-avatar-w-subtext',
    background: 'default',
  },
};

// New Cell Types
export const IconGroup: Story = {
  args: {
    type: 'icon-group',
    background: 'default',
  },
};

export const CTAButton: Story = {
  args: {
    type: 'cta-button',
    background: 'default',
  },
};

export const ButtonGroup: Story = {
  args: {
    type: 'button-group',
    background: 'default',
  },
};

// Size Variants
export const SmallSize: Story = {
  args: {
    size: 'small',
    type: 'avatar-w-subtext',
    background: 'default',
  },
};

export const SmallToggle: Story = {
  args: {
    size: 'small',
    type: 'toggle-avatar-w-subtext',
    background: 'default',
  },
};

export const SmallIconGroup: Story = {
  args: {
    size: 'small',
    type: 'icon-group',
    background: 'alt-seafoam-25',
  },
};

export const SmallCTAButton: Story = {
  args: {
    size: 'small',
    type: 'cta-button',
    background: 'alt-seafoam-25',
  },
};

export const SmallButtonGroup: Story = {
  args: {
    size: 'small',
    type: 'button-group',
    background: 'alt-seafoam-25',
  },
};

// Background Variants
export const SeafoamBackground: Story = {
  args: {
    type: 'avatar-w-subtext',
    background: 'alt-seafoam-25',
  },
};

export const GrayBackground: Story = {
  args: {
    type: 'avatar-w-subtext',
    background: 'alt-gray-50',
  },
};

export const DisabledState: Story = {
  args: {
    type: 'avatar-w-subtext',
    background: 'disabled',
    disabled: true,
  },
};

export const HoverState: Story = {
  args: {
    type: 'avatar-w-subtext',
    background: 'hover',
  },
};

// New Cell Types - Background Variants
export const IconGroupSeafoam: Story = {
  args: {
    type: 'icon-group',
    background: 'alt-seafoam-25',
  },
};

export const IconGroupGray: Story = {
  args: {
    type: 'icon-group',
    background: 'alt-gray-50',
  },
};

export const IconGroupDisabled: Story = {
  args: {
    type: 'icon-group',
    background: 'disabled',
    disabled: true,
  },
};

export const IconGroupHover: Story = {
  args: {
    type: 'icon-group',
    background: 'hover',
  },
};

export const CTAButtonSeafoam: Story = {
  args: {
    type: 'cta-button',
    background: 'alt-seafoam-25',
  },
};

export const CTAButtonGray: Story = {
  args: {
    type: 'cta-button',
    background: 'alt-gray-50',
  },
};

export const CTAButtonDisabled: Story = {
  args: {
    type: 'cta-button',
    background: 'disabled',
    disabled: true,
  },
};

export const CTAButtonHover: Story = {
  args: {
    type: 'cta-button',
    background: 'hover',
  },
};

export const ButtonGroupSeafoam: Story = {
  args: {
    type: 'button-group',
    background: 'alt-seafoam-25',
  },
};

export const ButtonGroupGray: Story = {
  args: {
    type: 'button-group',
    background: 'alt-gray-50',
  },
};

export const ButtonGroupDisabled: Story = {
  args: {
    type: 'button-group',
    background: 'disabled',
    disabled: true,
  },
};

export const ButtonGroupHover: Story = {
  args: {
    type: 'button-group',
    background: 'hover',
  },
};

// Interactive States
export const CheckedCheckbox: Story = {
  args: {
    type: 'avatar-w-subtext',
    background: 'hover',
    checked: true,
  },
};

export const EnabledToggle: Story = {
  args: {
    type: 'toggle-avatar-w-subtext',
    background: 'default',
    enabled: true,
  },
};

// Comprehensive Showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>New Table Cell Variants - Default Size</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
          {/* Icon Group Cells */}
          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Icon Group - Seafoam</h4>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <TableCell size="default" type="icon-group" background="alt-seafoam-25" />
            </div>
          </div>

          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Icon Group - Default</h4>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <TableCell size="default" type="icon-group" background="default" />
            </div>
          </div>

          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Icon Group - Gray</h4>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <TableCell size="default" type="icon-group" background="alt-gray-50" />
            </div>
          </div>

          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Icon Group - Disabled</h4>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <TableCell size="default" type="icon-group" background="disabled" disabled={true} />
            </div>
          </div>

          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Icon Group - Hover</h4>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <TableCell size="default" type="icon-group" background="hover" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>CTA Button Cells - Default Size</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>CTA Button - Seafoam</h4>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <TableCell size="default" type="cta-button" background="alt-seafoam-25" />
            </div>
          </div>

          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>CTA Button - Default</h4>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <TableCell size="default" type="cta-button" background="default" />
            </div>
          </div>

          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>CTA Button - Gray</h4>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <TableCell size="default" type="cta-button" background="alt-gray-50" />
            </div>
          </div>

          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>CTA Button - Disabled</h4>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <TableCell size="default" type="cta-button" background="disabled" disabled={true} />
            </div>
          </div>

          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>CTA Button - Hover</h4>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <TableCell size="default" type="cta-button" background="hover" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Button Group Cells - Default Size</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Button Group - Seafoam</h4>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <TableCell size="default" type="button-group" background="alt-seafoam-25" />
            </div>
          </div>

          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Button Group - Default</h4>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <TableCell size="default" type="button-group" background="default" />
            </div>
          </div>

          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Button Group - Gray</h4>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <TableCell size="default" type="button-group" background="alt-gray-50" />
            </div>
          </div>

          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Button Group - Disabled</h4>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <TableCell size="default" type="button-group" background="disabled" disabled={true} />
            </div>
          </div>

          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Button Group - Hover</h4>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <TableCell size="default" type="button-group" background="hover" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Small Size Variants</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Small Icon Group</h4>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <TableCell size="small" type="icon-group" background="alt-seafoam-25" />
              <TableCell size="small" type="icon-group" background="default" />
            </div>
          </div>

          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Small CTA Button</h4>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <TableCell size="small" type="cta-button" background="alt-seafoam-25" />
              <TableCell size="small" type="cta-button" background="default" />
            </div>
          </div>

          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Small Button Group</h4>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <TableCell size="small" type="button-group" background="alt-seafoam-25" />
              <TableCell size="small" type="button-group" background="default" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all new table cell variants including icon groups, CTA buttons, and button groups with different sizes, backgrounds, and states.',
      },
    },
  },
};

// Figma Design Showcase
export const FigmaDesignShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Complete Figma Design Implementation</h3>
        <p style={{ margin: '0 0 16px 0', color: '#6D7280', fontSize: '14px' }}>
          Pixel-perfect implementation of all table cell designs from Figma, including the new icon group, CTA button, and button group variants
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Complete Design Matrix */}
        <div>
          <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '500' }}>Complete Design Matrix - All Variants</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            {/* Default Size Row */}
            <div>
              <h5 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#374151' }}>Default Size (72px height)</h5>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="default" type="icon-group" background="alt-seafoam-25" />
                </div>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="default" type="icon-group" background="default" />
                </div>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="default" type="cta-button" background="alt-seafoam-25" />
                </div>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="default" type="cta-button" background="default" />
                </div>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="default" type="button-group" background="alt-seafoam-25" />
                </div>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="default" type="button-group" background="default" />
                </div>
              </div>
            </div>

            {/* Small Size Row */}
            <div>
              <h5 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#374151' }}>Small Size (52px height)</h5>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="small" type="icon-group" background="alt-seafoam-25" />
                </div>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="small" type="icon-group" background="default" />
                </div>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="small" type="cta-button" background="alt-seafoam-25" />
                </div>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="small" type="cta-button" background="default" />
                </div>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="small" type="button-group" background="alt-seafoam-25" />
                </div>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="small" type="button-group" background="default" />
                </div>
              </div>
            </div>

            {/* Gray Background Row */}
            <div>
              <h5 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#374151' }}>Gray Background Variants</h5>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="default" type="icon-group" background="alt-gray-50" />
                </div>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="small" type="icon-group" background="alt-gray-50" />
                </div>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="default" type="cta-button" background="alt-gray-50" />
                </div>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="small" type="cta-button" background="alt-gray-50" />
                </div>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="default" type="button-group" background="alt-gray-50" />
                </div>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="small" type="button-group" background="alt-gray-50" />
                </div>
              </div>
            </div>

            {/* Disabled State Row */}
            <div>
              <h5 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#9CA3AF' }}>Disabled State</h5>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="default" type="icon-group" background="disabled" disabled={true} />
                </div>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="small" type="icon-group" background="disabled" disabled={true} />
                </div>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="default" type="cta-button" background="disabled" disabled={true} />
                </div>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="small" type="cta-button" background="disabled" disabled={true} />
                </div>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="default" type="button-group" background="disabled" disabled={true} />
                </div>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="small" type="button-group" background="disabled" disabled={true} />
                </div>
              </div>
            </div>

            {/* Hover State Row */}
            <div>
              <h5 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#0BA7EA' }}>Hover State</h5>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="default" type="icon-group" background="hover" />
                </div>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="small" type="icon-group" background="hover" />
                </div>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="default" type="cta-button" background="hover" />
                </div>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="small" type="cta-button" background="hover" />
                </div>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="default" type="button-group" background="hover" />
                </div>
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '4px' }}>
                  <TableCell size="small" type="button-group" background="hover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete pixel-perfect implementation matching the exact Figma designs with all variants, sizes, backgrounds, and states. This includes the new icon group cells (with email, edit, link, and share icons), CTA button cells (with single Edit button), and button group cells (with Edit and Delete buttons).',
      },
    },
  },
};
