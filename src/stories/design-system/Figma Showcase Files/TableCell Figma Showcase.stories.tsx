import type { Meta, StoryObj } from '@storybook/react';
import { TableCell } from '../../atoms/building-blocks/table/TableCell';

const meta: Meta<typeof TableCell> = {
  title: 'Design System/Figma Showcase Files/TableCell Figma Showcase',
  component: TableCell,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# TableCell Components - Figma Design Implementation

This showcase demonstrates the exact implementation of table cell components based on the provided Figma designs. The components support multiple variants including checkbox cells, toggle cells, and different background states.

## Design Features

- **Multiple Types**: Title only, title with subtext, toggle only, toggle with subtext
- **Size Variants**: Default (72px height) and Small (52px height)
- **Background States**: Seafoam, white, gray, disabled, and hover states
- **Interactive Elements**: Checkboxes and toggle switches with proper sizing
- **Typography**: Using design system tokens for consistent text styling
- **Responsive**: Adapts to different screen sizes while maintaining design integrity

## Implementation Notes

All components are built using the existing Checkbox and Toggle components from the design system, ensuring consistency and reusability across the application.
        `,
      },
    },
  },
  argTypes: {
    // Hide controls for this showcase
    size: { table: { disable: true } },
    type: { table: { disable: true } },
    background: { table: { disable: true } },
    leadCell: { table: { disable: true } },
    title: { table: { disable: true } },
    subtext: { table: { disable: true } },
    checked: { table: { disable: true } },
    enabled: { table: { disable: true } },
    disabled: { table: { disable: true } },
    width: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof TableCell>;

export const FigmaDesignImplementation: Story = {
  render: () => (
    <div style={{ 
      padding: '24px', 
      backgroundColor: '#F8F9FA',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ 
        marginBottom: '32px',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          margin: '0 0 8px 0', 
          fontSize: '24px', 
          fontWeight: '600',
          color: '#1C1C1C'
        }}>
          Table Cell Components - Figma Implementation
        </h1>
        <p style={{ 
          margin: '0', 
          color: '#6D7280', 
          fontSize: '16px'
        }}>
          Pixel-perfect implementation of the table cell designs from Figma
        </p>
      </div>

      {/* Seafoam Background - Default Size */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '18px', 
          fontWeight: '600',
          color: '#1C1C1C'
        }}>
          Default Size - Seafoam Background (#F9FCFA)
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, 320px)', 
          gap: '0',
          border: '1px solid #E5E7EB',
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: 'white'
        }}>
          <TableCell
            size="default"
            type="title"
            background="alt-seafoam-25"
            title="Olivia Rhye"
            checked={false}
          />
          <TableCell
            size="default"
            type="title-subtext"
            background="alt-seafoam-25"
            title="Olivia Rhye"
            subtext="olivia@email.com"
            checked={false}
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
      </div>

      {/* Small Size - Seafoam Background */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '18px', 
          fontWeight: '600',
          color: '#1C1C1C'
        }}>
          Small Size - Seafoam Background (#F9FCFA)
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, 320px)', 
          gap: '0',
          border: '1px solid #E5E7EB',
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: 'white'
        }}>
          <TableCell
            size="small"
            type="title"
            background="alt-seafoam-25"
            title="Olivia Rhye"
            checked={false}
          />
          <TableCell
            size="small"
            type="title-subtext"
            background="alt-seafoam-25"
            title="Olivia Rhye"
            subtext="olivia@email.com"
            checked={false}
          />
          <TableCell
            size="small"
            type="toggle"
            background="alt-seafoam-25"
            enabled={true}
          />
          <TableCell
            size="small"
            type="toggle-w-subtext"
            background="alt-seafoam-25"
            title="Olivia Rhye"
            subtext="olivia@email.com"
            enabled={true}
          />
        </div>
      </div>

      {/* Default Background - Default Size */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '18px', 
          fontWeight: '600',
          color: '#1C1C1C'
        }}>
          Default Size - White Background (#FFF)
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, 320px)', 
          gap: '0',
          border: '1px solid #E5E7EB',
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: 'white'
        }}>
          <TableCell
            size="default"
            type="title"
            background="default"
            title="Olivia Rhye"
            checked={false}
          />
          <TableCell
            size="default"
            type="title-subtext"
            background="default"
            title="Olivia Rhye"
            subtext="olivia@email.com"
            checked={false}
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
      </div>

      {/* Small Size - Default Background */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '18px', 
          fontWeight: '600',
          color: '#1C1C1C'
        }}>
          Small Size - White Background (#FFF)
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, 320px)', 
          gap: '0',
          border: '1px solid #E5E7EB',
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: 'white'
        }}>
          <TableCell
            size="small"
            type="title"
            background="default"
            title="Olivia Rhye"
            checked={false}
          />
          <TableCell
            size="small"
            type="title-subtext"
            background="default"
            title="Olivia Rhye"
            subtext="olivia@email.com"
            checked={false}
          />
          <TableCell
            size="small"
            type="toggle"
            background="default"
            enabled={true}
          />
          <TableCell
            size="small"
            type="toggle-w-subtext"
            background="default"
            title="Olivia Rhye"
            subtext="olivia@email.com"
            enabled={true}
          />
        </div>
      </div>

      {/* Gray Background */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '18px', 
          fontWeight: '600',
          color: '#1C1C1C'
        }}>
          Gray Background (#F9FAFB)
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, 320px)', 
          gap: '0',
          border: '1px solid #E5E7EB',
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: 'white'
        }}>
          <TableCell
            size="default"
            type="title"
            background="alt-gray-50"
            title="Olivia Rhye"
            checked={false}
          />
          <TableCell
            size="default"
            type="title-subtext"
            background="alt-gray-50"
            title="Olivia Rhye"
            subtext="olivia@email.com"
            checked={false}
          />
          <TableCell
            size="default"
            type="toggle"
            background="alt-gray-50"
            enabled={true}
          />
          <TableCell
            size="default"
            type="toggle-w-subtext"
            background="alt-gray-50"
            title="Olivia Rhye"
            subtext="olivia@email.com"
            enabled={true}
          />
        </div>
      </div>

      {/* Disabled State */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '18px', 
          fontWeight: '600',
          color: '#1C1C1C'
        }}>
          Disabled State (#F3F4F6)
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, 320px)', 
          gap: '0',
          border: '1px solid #E5E7EB',
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: 'white'
        }}>
          <TableCell
            size="default"
            type="title"
            background="disabled"
            title="Olivia Rhye"
            disabled={true}
            checked={false}
          />
          <TableCell
            size="default"
            type="title-subtext"
            background="disabled"
            title="Olivia Rhye"
            subtext="olivia@email.com"
            disabled={true}
            checked={false}
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
      </div>

      {/* Hover State */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '18px', 
          fontWeight: '600',
          color: '#1C1C1C'
        }}>
          Hover State (#F2FBFF)
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, 320px)', 
          gap: '0',
          border: '1px solid #E5E7EB',
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: 'white'
        }}>
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

      {/* Design Specifications */}
      <div style={{ 
        marginTop: '64px',
        padding: '24px',
        backgroundColor: 'white',
        border: '1px solid #E5E7EB',
        borderRadius: '12px'
      }}>
        <h2 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '18px', 
          fontWeight: '600',
          color: '#1C1C1C'
        }}>
          Design Specifications
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '24px'
        }}>
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600', color: '#374151' }}>Dimensions</h3>
            <ul style={{ margin: '0', paddingLeft: '16px', color: '#6B7280', fontSize: '14px' }}>
              <li>Default height: 72px</li>
              <li>Small height: 52px</li>
              <li>Width: 320px (content cells), 98px/88px (toggle only)</li>
              <li>Padding: 12px 24px 8px 24px</li>
              <li>Gap: 16px between elements</li>
            </ul>
          </div>
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600', color: '#374151' }}>Typography</h3>
            <ul style={{ margin: '0', paddingLeft: '16px', color: '#6B7280', fontSize: '14px' }}>
              <li>Title: Archivo Medium 16px/14px</li>
              <li>Subtext: Roboto Flex Regular 16px/14px</li>
              <li>Line heights: 22px/17px (default/small)</li>
              <li>Colors: #1C1C1C (title), #6D7280 (subtext)</li>
            </ul>
          </div>
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600', color: '#374151' }}>Backgrounds</h3>
            <ul style={{ margin: '0', paddingLeft: '16px', color: '#6B7280', fontSize: '14px' }}>
              <li>Seafoam: #F9FCFA</li>
              <li>White: #FFF</li>
              <li>Gray: #F9FAFB</li>
              <li>Disabled: #F3F4F6</li>
              <li>Hover: #F2FBFF</li>
            </ul>
          </div>
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600', color: '#374151' }}>Interactive Elements</h3>
            <ul style={{ margin: '0', paddingLeft: '16px', color: '#6B7280', fontSize: '14px' }}>
              <li>Checkboxes: 22px/18px (default/small)</li>
              <li>Toggles: 50x28px/40x22px (default/small)</li>
              <li>Border: 1px solid #E5E7EB</li>
              <li>Hover effects: Background color change</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
This story demonstrates the complete implementation of table cell components exactly as designed in Figma. 

Key features:
- Pixel-perfect sizing and spacing
- Accurate color implementation using design tokens
- Proper typography with Archivo and Roboto Flex fonts
- Interactive elements (checkboxes and toggles) sized correctly
- All background states and variations

The implementation uses the existing Checkbox and Toggle components from the design system, ensuring consistency and maintainability across the application.
        `,
      },
    },
  },
};
