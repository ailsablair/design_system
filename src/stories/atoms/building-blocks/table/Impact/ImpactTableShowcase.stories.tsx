import type { Meta, StoryObj } from '@storybook/react';
import { ImpactTable } from './ImpactTable';
import { ImpactTableCell } from './ImpactTableCell';

const meta: Meta = {
  title: 'Atoms/🧱 Building Blocks/Tables/Impact/Showcase',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Impact Table Components - Comprehensive Showcase

This showcase demonstrates all variants and states of the Impact Table components based on the Figma design system.

## Components Overview

### ImpactTable
The main table component that displays the complete impact assessment interface:
- Pre-assembled with header row, body rows, and total row
- Category headers with lock icons
- Row headers with titles and subtexts
- Multiple column types (0A special column, U1-U4 regular columns)
- Mixed cell types (populated, dropdown, input, total)
- Pixel-perfect match to Figma design

### ImpactTableCell
Individual cell component supporting various types:
- **Dropdown cells**: Selection from predefined options
- **Input cells**: Free-text or numeric input
- **Header cells**: Category names with optional lock icons
- **Row headers**: Row titles with optional subtexts
- **Column headers**: Year and unit labels
- **Total cells**: Read-only calculated values
- **Populated cells**: Display finalized data

## Design Tokens

All components use custom Echo Design System tokens:
- Typography: Archivo and Roboto Flex font families
- Colors: Primary Blue, Seafoam, and neutral grays
- Spacing: Consistent sizing tokens (2px, 4px, 8px, 12px, 16px, 24px, 60px)
- Effects: Borders, backgrounds, and hover states

## States

- **Default**: Initial state with placeholder text
- **Decimal**: Numeric values with decimal points
- **Scale**: Integer scale values (1-5)
- **Text**: Text-based values
- **Empty**: No value, minimal UI
- **Disabled**: Non-interactive, grayed out
- **Hover**: Visual feedback on interaction
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

const impactScaleOptions = [
  { label: '1 - Negligible', value: '1' },
  { label: '2 - Minor', value: '2' },
  { label: '3 - Significant', value: '3' },
  { label: '4 - Major', value: '4' },
  { label: '5 - Critical', value: '5' },
];

export const AllCellVariants: Story = {
  render: () => (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <section>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 700, 
          marginBottom: '24px',
          fontFamily: 'Archivo',
          color: '#3A3282'
        }}>
          Dropdown Cells
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Default (Large)</p>
            <ImpactTableCell
              role="cell"
              type="dropdown"
              width="lg"
              state="default"
              placeholder="Select an option"
              options={impactScaleOptions}
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Scale (Large)</p>
            <ImpactTableCell
              role="cell"
              type="dropdown"
              width="lg"
              state="scale"
              value="3 - Significant"
              options={impactScaleOptions}
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Empty (Large)</p>
            <ImpactTableCell
              role="cell"
              type="dropdown"
              width="lg"
              state="empty"
              options={impactScaleOptions}
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Disabled (Large)</p>
            <ImpactTableCell
              role="cell"
              type="dropdown"
              width="lg"
              state="disabled"
              options={impactScaleOptions}
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Scale (Small)</p>
            <ImpactTableCell
              role="cell"
              type="dropdown"
              width="sm"
              state="scale"
              value="3"
              options={impactScaleOptions}
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Hover State</p>
            <ImpactTableCell
              role="cell"
              type="dropdown"
              width="lg"
              state="scale"
              value="3 - Significant"
              hover
              options={impactScaleOptions}
            />
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 700, 
          marginBottom: '24px',
          fontFamily: 'Archivo',
          color: '#3A3282'
        }}>
          Input Cells
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Decimal (Large)</p>
            <ImpactTableCell
              role="cell"
              type="input"
              width="lg"
              state="decimal"
              value="2.65"
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Default (Large)</p>
            <ImpactTableCell
              role="cell"
              type="input"
              width="lg"
              state="default"
              placeholder="Enter initial value"
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Empty (Large)</p>
            <ImpactTableCell
              role="cell"
              type="input"
              width="lg"
              state="empty"
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Disabled (Large)</p>
            <ImpactTableCell
              role="cell"
              type="input"
              width="lg"
              state="disabled"
              placeholder="Enter initial value"
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Decimal (Small)</p>
            <ImpactTableCell
              role="cell-0"
              type="input"
              width="sm"
              state="decimal"
              value="5.67"
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Hover State</p>
            <ImpactTableCell
              role="cell-0"
              type="input"
              width="sm"
              state="decimal"
              value="5.67"
              hover
            />
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 700, 
          marginBottom: '24px',
          fontFamily: 'Archivo',
          color: '#3A3282'
        }}>
          Populated Cells (Read-Only)
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Decimal (Large)</p>
            <ImpactTableCell
              role="cell"
              type="populated"
              width="lg"
              state="decimal"
              value="2.65"
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Decimal (Small)</p>
            <ImpactTableCell
              role="cell-0"
              type="populated"
              width="sm"
              state="decimal"
              value="5.67"
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Scale (Small)</p>
            <ImpactTableCell
              role="cell"
              type="populated"
              width="sm"
              state="scale"
              value="3"
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Text (Small)</p>
            <ImpactTableCell
              role="cell"
              type="populated"
              width="sm"
              state="text"
              value="Populated response here"
            />
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 700, 
          marginBottom: '24px',
          fontFamily: 'Archivo',
          color: '#3A3282'
        }}>
          Total Cells (Bold, Read-Only)
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Decimal (Large)</p>
            <ImpactTableCell
              role="cell"
              type="total"
              width="lg"
              state="decimal"
              value="$ 2.65 M"
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Decimal (Small)</p>
            <ImpactTableCell
              role="cell-0"
              type="total"
              width="sm"
              state="decimal"
              value="$ 2.65 M"
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Scale (Small)</p>
            <ImpactTableCell
              role="cell-0"
              type="total"
              width="sm"
              state="scale"
              value="3"
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Text (Small)</p>
            <ImpactTableCell
              role="cell-0"
              type="total"
              width="sm"
              state="text"
              value="$ 2.65 M"
            />
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 700, 
          marginBottom: '24px',
          fontFamily: 'Archivo',
          color: '#3A3282'
        }}>
          Header Cells
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmin(200px, 1fr))', gap: '16px' }}>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Category Header</p>
            <ImpactTableCell
              role="cell"
              type="header-w-subtext"
              width="lg"
              title="Category name"
              subtext="This is a subtitle"
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Impact Header with Lock</p>
            <ImpactTableCell
              role="cell"
              type="impact"
              width="lg"
              title="Impact values"
              subtext="This is a subtitle"
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Column Header (0A)</p>
            <ImpactTableCell
              role="cell-0"
              type="header"
              width="sm"
              unitLabel="0A"
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Column Header (U1)</p>
            <ImpactTableCell
              role="cell"
              type="header"
              width="sm"
              unitLabel="U1"
            />
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 700, 
          marginBottom: '24px',
          fontFamily: 'Archivo',
          color: '#3A3282'
        }}>
          Row Headers
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Row with Subtext</p>
            <ImpactTableCell
              role="row"
              type="header-w-subtext"
              width="lg"
              title="Row title goes here"
              subtext="This is subtext"
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Total Row with Subtext</p>
            <ImpactTableCell
              role="row"
              type="total"
              width="lg"
              title="Total amount ($M)"
              subtext="This is subtext"
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Impact Row</p>
            <ImpactTableCell
              role="row"
              type="impact"
              width="lg"
              title="Total amount ($M)"
            />
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 700, 
          marginBottom: '24px',
          fontFamily: 'Archivo',
          color: '#3A3282'
        }}>
          Locked Cells
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Locked Decimal</p>
            <ImpactTableCell
              role="cell"
              type="locked"
              width="lg"
              state="decimal"
              value="2.65"
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Locked Scale</p>
            <ImpactTableCell
              role="cell"
              type="locked"
              width="sm"
              state="scale"
              value="3"
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Locked Text</p>
            <ImpactTableCell
              role="cell"
              type="locked"
              width="lg"
              state="text"
              value="2001"
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Locked Disabled</p>
            <ImpactTableCell
              role="cell"
              type="locked"
              width="lg"
              state="disabled"
              value="2.65"
            />
          </div>
        </div>
      </section>
    </div>
  ),
};

export const CompleteTableExample: Story = {
  render: () => (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h2 style={{ 
          fontSize: '32px', 
          fontWeight: 700, 
          marginBottom: '8px',
          fontFamily: 'Archivo',
          color: '#3A3282'
        }}>
          Complete Impact Table
        </h2>
        <p style={{ 
          fontSize: '16px', 
          color: '#6D7280', 
          marginBottom: '24px',
          fontFamily: 'Roboto Flex'
        }}>
          This is the fully assembled Impact Table component matching the exact Figma design.
          It demonstrates all cell types, states, and the complete table structure.
        </p>
      </div>
      
      <ImpactTable />
      
      <div style={{ 
        marginTop: '24px', 
        padding: '16px', 
        background: '#F3F9F5', 
        borderRadius: '4px',
        border: '1px solid #8BBF9F'
      }}>
        <h3 style={{ 
          fontSize: '16px', 
          fontWeight: 600, 
          marginBottom: '8px',
          fontFamily: 'Archivo',
          color: '#4B6D58'
        }}>
          Design Highlights
        </h3>
        <ul style={{ 
          fontSize: '14px', 
          color: '#374151', 
          marginLeft: '20px',
          fontFamily: 'Roboto Flex',
          lineHeight: '1.6'
        }}>
          <li><strong>Header Row:</strong> Category headers with optional lock icons and subtexts</li>
          <li><strong>Special Column:</strong> "Impact values" column with green border separator</li>
          <li><strong>0A Column:</strong> Light green background (#F3F9F5) for visual distinction</li>
          <li><strong>Body Rows:</strong> Mix of populated decimals (2.65, 5.67), scale values (3), dropdown, and input cells</li>
          <li><strong>Total Row:</strong> Bold values with light blue backgrounds (#F9F9FE)</li>
          <li><strong>Borders:</strong> Dark seafoam (#4B6D58) for header and total rows, gray (#D2D5DA) for cells</li>
        </ul>
      </div>
    </div>
  ),
};

export const ResponsiveExample: Story = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <div style={{ marginBottom: '24px', padding: '16px', background: '#F9FAFB', borderRadius: '4px' }}>
        <p style={{ fontSize: '14px', color: '#6D7280', margin: 0, fontFamily: 'Roboto Flex' }}>
          💡 <strong>Tip:</strong> Resize your browser window to see how the table adapts to different screen sizes.
          The table maintains usability on mobile, tablet, and desktop viewports.
        </p>
      </div>
      
      <ImpactTable />
    </div>
  ),
};

export const MultipleTablesExample: Story = {
  render: () => (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <section>
        <h3 style={{ 
          fontSize: '20px', 
          fontWeight: 600, 
          marginBottom: '16px',
          fontFamily: 'Archivo',
          color: '#3A3282'
        }}>
          Environmental Impact Assessment
        </h3>
        <ImpactTable />
      </section>
      
      <section>
        <h3 style={{ 
          fontSize: '20px', 
          fontWeight: 600, 
          marginBottom: '16px',
          fontFamily: 'Archivo',
          color: '#3A3282'
        }}>
          Social Impact Assessment
        </h3>
        <ImpactTable />
      </section>
      
      <section>
        <h3 style={{ 
          fontSize: '20px', 
          fontWeight: 600, 
          marginBottom: '16px',
          fontFamily: 'Archivo',
          color: '#3A3282'
        }}>
          Economic Impact Assessment
        </h3>
        <ImpactTable />
      </section>
    </div>
  ),
};
