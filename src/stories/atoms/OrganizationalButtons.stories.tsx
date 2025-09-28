import type { Meta, StoryObj } from '@storybook/react';
import { OrganizationalButton, FilterButton, SortButton, MoreActionsButton } from './OrganizationalButtons';

const meta: Meta<typeof OrganizationalButton> = {
  title: 'Atoms/OrganizationalButtons',
  component: OrganizationalButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Organizational buttons for common data management actions: Filter, Sort, and More Actions. These buttons provide consistent styling and appropriate icons for data filtering, sorting, and additional action menus. Available in all standard sizes and variants (primary, secondary, tertiary, ghost) to match the Figma design specifications.',
      },
    },
  },
  argTypes: {
    buttonType: {
      control: 'select',
      options: ['filter', 'sort', 'more-actions'],
      description: 'Type of organizational button',
    },
    size: {
      control: 'select',
      options: ['extra-small', 'small', 'default', 'large'],
      description: 'Button size variant',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'ghost'],
      description: 'Button variant/type',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof OrganizationalButton>;

// Basic examples
export const FilterDefault: Story = {
  args: {
    buttonType: 'filter',
    size: 'default',
    variant: 'primary',
  },
};

export const SortDefault: Story = {
  args: {
    buttonType: 'sort',
    size: 'default',
    variant: 'primary',
  },
};

export const MoreActionsDefault: Story = {
  args: {
    buttonType: 'more-actions',
    size: 'default',
    variant: 'primary',
  },
};

// Complete Figma Design Showcase - All Variants and Sizes
export const FigmaDesignShowcase: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '32px', 
      padding: '24px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h1 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '24px', 
          fontWeight: '600',
          fontFamily: 'var(--type-typeface-archivo)'
        }}>
          Organizational Buttons - Figma Design System
        </h1>
        <p style={{ 
          margin: '0', 
          fontSize: '16px', 
          color: 'var(--neutral-gray-gray-600)',
          fontFamily: 'var(--type-typeface-archivo)'
        }}>
          Complete showcase of Filter, Sort, and More Actions buttons in all sizes and variants
        </p>
      </div>

      {/* Primary Buttons */}
      <section>
        <h2 style={{ 
          margin: '0 0 24px 0', 
          fontSize: '20px', 
          fontWeight: '600',
          fontFamily: 'var(--type-typeface-archivo)'
        }}>
          Primary Buttons
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Size</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Filter</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Sort</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>More Actions</div>

          {/* Extra Small */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Extra Small</div>
          <FilterButton size="extra-small" variant="primary" />
          <SortButton size="extra-small" variant="primary" />
          <MoreActionsButton size="extra-small" variant="primary" />

          {/* Small */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Small</div>
          <FilterButton size="small" variant="primary" />
          <SortButton size="small" variant="primary" />
          <MoreActionsButton size="small" variant="primary" />

          {/* Default */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Default</div>
          <FilterButton size="default" variant="primary" />
          <SortButton size="default" variant="primary" />
          <MoreActionsButton size="default" variant="primary" />

          {/* Large */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Large</div>
          <FilterButton size="large" variant="primary" />
          <SortButton size="large" variant="primary" />
          <MoreActionsButton size="large" variant="primary" />
        </div>
      </section>

      {/* Secondary Buttons */}
      <section>
        <h2 style={{ 
          margin: '0 0 24px 0', 
          fontSize: '20px', 
          fontWeight: '600',
          fontFamily: 'var(--type-typeface-archivo)'
        }}>
          Secondary Buttons
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Size</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Filter</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Sort</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>More Actions</div>

          {/* Extra Small */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Extra Small</div>
          <FilterButton size="extra-small" variant="secondary" />
          <SortButton size="extra-small" variant="secondary" />
          <MoreActionsButton size="extra-small" variant="secondary" />

          {/* Small */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Small</div>
          <FilterButton size="small" variant="secondary" />
          <SortButton size="small" variant="secondary" />
          <MoreActionsButton size="small" variant="secondary" />

          {/* Default */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Default</div>
          <FilterButton size="default" variant="secondary" />
          <SortButton size="default" variant="secondary" />
          <MoreActionsButton size="default" variant="secondary" />

          {/* Large */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Large</div>
          <FilterButton size="large" variant="secondary" />
          <SortButton size="large" variant="secondary" />
          <MoreActionsButton size="large" variant="secondary" />
        </div>
      </section>

      {/* Tertiary Buttons */}
      <section>
        <h2 style={{ 
          margin: '0 0 24px 0', 
          fontSize: '20px', 
          fontWeight: '600',
          fontFamily: 'var(--type-typeface-archivo)'
        }}>
          Tertiary Buttons
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Size</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Filter</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Sort</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>More Actions</div>

          {/* Extra Small */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Extra Small</div>
          <FilterButton size="extra-small" variant="tertiary" />
          <SortButton size="extra-small" variant="tertiary" />
          <MoreActionsButton size="extra-small" variant="tertiary" />

          {/* Small */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Small</div>
          <FilterButton size="small" variant="tertiary" />
          <SortButton size="small" variant="tertiary" />
          <MoreActionsButton size="small" variant="tertiary" />

          {/* Default */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Default</div>
          <FilterButton size="default" variant="tertiary" />
          <SortButton size="default" variant="tertiary" />
          <MoreActionsButton size="default" variant="tertiary" />

          {/* Large */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Large</div>
          <FilterButton size="large" variant="tertiary" />
          <SortButton size="large" variant="tertiary" />
          <MoreActionsButton size="large" variant="tertiary" />
        </div>
      </section>

      {/* Ghost Buttons */}
      <section>
        <h2 style={{ 
          margin: '0 0 24px 0', 
          fontSize: '20px', 
          fontWeight: '600',
          fontFamily: 'var(--type-typeface-archivo)'
        }}>
          Ghost Buttons
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Size</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Filter</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Sort</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>More Actions</div>

          {/* Extra Small */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Extra Small</div>
          <FilterButton size="extra-small" variant="ghost" />
          <SortButton size="extra-small" variant="ghost" />
          <MoreActionsButton size="extra-small" variant="ghost" />

          {/* Small */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Small</div>
          <FilterButton size="small" variant="ghost" />
          <SortButton size="small" variant="ghost" />
          <MoreActionsButton size="small" variant="ghost" />

          {/* Default */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Default</div>
          <FilterButton size="default" variant="ghost" />
          <SortButton size="default" variant="ghost" />
          <MoreActionsButton size="default" variant="ghost" />

          {/* Large */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Large</div>
          <FilterButton size="large" variant="ghost" />
          <SortButton size="large" variant="ghost" />
          <MoreActionsButton size="large" variant="ghost" />
        </div>
      </section>

      {/* Design Specifications */}
      <section>
        <h2 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '20px', 
          fontWeight: '600',
          fontFamily: 'var(--type-typeface-archivo)'
        }}>
          Design Specifications
        </h2>
        <div style={{
          background: 'var(--neutral-gray-gray-50)',
          padding: '16px',
          borderRadius: '8px',
          fontSize: '14px',
          fontFamily: 'monospace'
        }}>
          <div style={{ marginBottom: '8px' }}><strong>Icons Used:</strong></div>
          <div style={{ marginBottom: '4px' }}>• Filter buttons: filter-list icon</div>
          <div style={{ marginBottom: '4px' }}>• Sort buttons: sort icon (sort-ascending)</div>
          <div style={{ marginBottom: '8px' }}>• More Actions buttons: more-vert icon (dots-vertical)</div>
          
          <div style={{ marginBottom: '8px' }}><strong>Icon Sizes:</strong></div>
          <div style={{ marginBottom: '4px' }}>• Extra Small & Small: 14px</div>
          <div style={{ marginBottom: '4px' }}>• Default: 18px</div>
          <div style={{ marginBottom: '8px' }}>• Large: 20px</div>
          
          <div style={{ marginBottom: '8px' }}><strong>Typography:</strong></div>
          <div style={{ marginBottom: '4px' }}>• Font Family: Archivo</div>
          <div style={{ marginBottom: '4px' }}>• Font Weight: Light (300) default</div>
          <div>• Icon Opacity: 0.6 for visual hierarchy</div>
        </div>
      </section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all organizational button variants matching the exact Figma design specifications. Includes Filter, Sort, and More Actions buttons in all sizes (extra-small, small, default, large) and variants (primary, secondary, tertiary, ghost).',
      },
    },
  },
};

// Interactive States Showcase
export const InteractiveStatesShowcase: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '32px', 
      padding: '24px'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h2 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '20px', 
          fontWeight: '600',
          fontFamily: 'var(--type-typeface-archivo)'
        }}>
          Interactive States
        </h2>
        <p style={{ 
          margin: '0', 
          fontSize: '14px', 
          color: 'var(--neutral-gray-gray-600)',
          fontFamily: 'var(--type-typeface-archivo)'
        }}>
          Button states: Default, Hover, Loading, and Disabled
        </p>
      </div>

      {/* States Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', alignItems: 'center' }}>
        <div style={{ fontWeight: '600', fontSize: '14px' }}>Button</div>
        <div style={{ fontWeight: '600', fontSize: '14px' }}>Default</div>
        <div style={{ fontWeight: '600', fontSize: '14px' }}>Hover</div>
        <div style={{ fontWeight: '600', fontSize: '14px' }}>Loading</div>
        <div style={{ fontWeight: '600', fontSize: '14px' }}>Disabled</div>

        {/* Filter Button States */}
        <div style={{ fontSize: '14px', fontWeight: '500' }}>Filter</div>
        <FilterButton size="default" variant="primary" />
        <FilterButton size="default" variant="primary" state="hover" className="force-hover" />
        <FilterButton size="default" variant="primary" loading />
        <FilterButton size="default" variant="primary" disabled />

        {/* Sort Button States */}
        <div style={{ fontSize: '14px', fontWeight: '500' }}>Sort</div>
        <SortButton size="default" variant="secondary" />
        <SortButton size="default" variant="secondary" state="hover" className="force-hover" />
        <SortButton size="default" variant="secondary" loading />
        <SortButton size="default" variant="secondary" disabled />

        {/* More Actions Button States */}
        <div style={{ fontSize: '14px', fontWeight: '500' }}>More Actions</div>
        <MoreActionsButton size="default" variant="tertiary" />
        <MoreActionsButton size="default" variant="tertiary" state="hover" className="force-hover" />
        <MoreActionsButton size="default" variant="tertiary" loading />
        <MoreActionsButton size="default" variant="tertiary" disabled />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive states showcase demonstrating how organizational buttons behave in different states including hover, loading, and disabled states.',
      },
    },
  },
};

// Usage Examples
export const UsageExamples: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '32px', 
      padding: '24px'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h2 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '20px', 
          fontWeight: '600',
          fontFamily: 'var(--type-typeface-archivo)'
        }}>
          Usage Examples
        </h2>
        <p style={{ 
          margin: '0', 
          fontSize: '14px', 
          color: 'var(--neutral-gray-gray-600)',
          fontFamily: 'var(--type-typeface-archivo)'
        }}>
          Common patterns and layouts using organizational buttons
        </p>
      </div>

      {/* Data Table Header */}
      <section>
        <h3 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '16px', 
          fontWeight: '600',
          fontFamily: 'var(--type-typeface-archivo)'
        }}>
          Data Table Header
        </h3>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '16px',
          background: 'var(--base-white)',
          border: '1px solid var(--neutral-gray-gray-200)',
          borderRadius: '8px'
        }}>
          <div>
            <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '600' }}>Team Members</h4>
            <p style={{ margin: '0', fontSize: '14px', color: 'var(--neutral-gray-gray-600)' }}>
              Manage your team and permissions
            </p>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <FilterButton size="small" variant="ghost" />
            <SortButton size="small" variant="ghost" />
            <MoreActionsButton size="small" variant="ghost" />
          </div>
        </div>
      </section>

      {/* Toolbar Layout */}
      <section>
        <h3 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '16px', 
          fontWeight: '600',
          fontFamily: 'var(--type-typeface-archivo)'
        }}>
          Toolbar Layout
        </h3>
        <div style={{ 
          display: 'flex', 
          gap: '12px',
          padding: '12px',
          background: 'var(--neutral-gray-gray-50)',
          borderRadius: '6px',
          alignItems: 'center'
        }}>
          <FilterButton size="default" variant="secondary" />
          <SortButton size="default" variant="secondary" />
          <div style={{ flex: 1 }} />
          <MoreActionsButton size="default" variant="ghost" />
        </div>
      </section>

      {/* Compact Row Actions */}
      <section>
        <h3 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '16px', 
          fontWeight: '600',
          fontFamily: 'var(--type-typeface-archivo)'
        }}>
          Compact Row Actions
        </h3>
        <div style={{ 
          display: 'flex', 
          gap: '6px',
          padding: '8px',
          background: 'var(--base-white)',
          border: '1px solid var(--neutral-gray-gray-200)',
          borderRadius: '4px',
          width: 'fit-content'
        }}>
          <FilterButton size="extra-small" variant="tertiary" />
          <SortButton size="extra-small" variant="tertiary" />
          <MoreActionsButton size="extra-small" variant="tertiary" />
        </div>
      </section>

      {/* Primary Action Group */}
      <section>
        <h3 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '16px', 
          fontWeight: '600',
          fontFamily: 'var(--type-typeface-archivo)'
        }}>
          Primary Action Group
        </h3>
        <div style={{ 
          display: 'flex', 
          gap: '16px',
          padding: '16px',
          alignItems: 'center'
        }}>
          <FilterButton size="large" variant="primary" />
          <SortButton size="large" variant="primary" />
          <MoreActionsButton size="large" variant="primary" />
        </div>
      </section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world usage examples showing how organizational buttons are typically used in data tables, toolbars, and other interface patterns.',
      },
    },
  },
};

// Individual button type examples
export const FilterButtonExample: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <FilterButton size="small" variant="primary" />
      <FilterButton size="default" variant="secondary" />
      <FilterButton size="large" variant="tertiary" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Filter buttons in different sizes and variants for data filtering functionality.',
      },
    },
  },
};

export const SortButtonExample: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <SortButton size="small" variant="primary" />
      <SortButton size="default" variant="secondary" />
      <SortButton size="large" variant="tertiary" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Sort buttons in different sizes and variants for data sorting functionality.',
      },
    },
  },
};

export const MoreActionsButtonExample: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <MoreActionsButton size="small" variant="primary" />
      <MoreActionsButton size="default" variant="secondary" />
      <MoreActionsButton size="large" variant="tertiary" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'More Actions buttons in different sizes and variants for additional action menus.',
      },
    },
  },
};

// Interactive example
export const Interactive: Story = {
  render: () => {
    const handleClick = (type: string, action: string) => {
      alert(`${type} ${action} clicked!`);
    };

    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '24px', 
        alignItems: 'center' 
      }}>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Interactive Organizational Buttons</h3>
        
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <FilterButton
            size="default"
            variant="primary"
            onClick={() => handleClick('Filter', 'action')}
          />
          <SortButton
            size="default"
            variant="secondary"
            onClick={() => handleClick('Sort', 'action')}
          />
          <MoreActionsButton
            size="default"
            variant="tertiary"
            onClick={() => handleClick('More Actions', 'menu')}
          />
        </div>

        <p style={{ 
          margin: 0, 
          fontSize: '14px', 
          color: 'var(--neutral-gray-gray-600)',
          textAlign: 'center'
        }}>
          Click any button to see the interaction
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive organizational buttons with click handlers to demonstrate functionality.',
      },
    },
  },
};
