import type { Meta, StoryObj } from '@storybook/react';
import { ImpactTable } from './ImpactTable';
import { ImpactTableCell } from './ImpactTableCell';

const meta: Meta = {
  title: 'Tables/Impact/Showcase',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Impact Table Components - Comprehensive Showcase

This showcase demonstrates all variants and states of the Impact Table components based on the Figma design system.

## Components Overview

### ImpactTable
The main table component that orchestrates the entire impact assessment interface with support for:
- Multiple columns with year/unit headers
- Row headers with titles and subtexts  
- Category headers with colspan support
- Mixed cell types (dropdown, input, total)
- Responsive design and accessibility

### ImpactTableCell
Individual cell component supporting various types:
- **Dropdown cells**: Selection from predefined options
- **Input cells**: Free-text or numeric input
- **Header cells**: Category names with optional lock icons
- **Row headers**: Row titles with optional subtexts
- **Column headers**: Year and unit labels
- **Total cells**: Read-only calculated values

## Design Tokens

All components use custom Echo Design System tokens:
- Typography: Archivo and Roboto Flex font families
- Colors: Primary Blue, Seafoam, and neutral grays
- Spacing: Consistent sizing tokens (4px, 8px, 12px, 24px)
- Effects: Hover shadows and transitions

## States

- **Default**: Initial state with placeholder text
- **Filled**: Contains user-entered data
- **Empty**: No value, minimal UI
- **Disabled**: Non-interactive, grayed out
- **Hover**: Visual feedback on interaction
- **Focus**: Accessibility outline for keyboard navigation
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
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Filled (Large)</p>
            <ImpactTableCell
              role="cell"
              type="dropdown"
              width="lg"
              state="filled"
              value="3 - Significant"
              options={impactScaleOptions}
            />
          </div>
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
              disabled
              options={impactScaleOptions}
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Filled (Small)</p>
            <ImpactTableCell
              role="cell"
              type="dropdown"
              width="sm"
              state="filled"
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
              state="filled"
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
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Filled (Large)</p>
            <ImpactTableCell
              role="cell"
              type="input"
              width="lg"
              state="filled"
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
              disabled
              placeholder="Enter initial value"
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Filled (Small)</p>
            <ImpactTableCell
              role="cell-0"
              type="input"
              width="sm"
              state="filled"
              value="5.67"
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Hover State</p>
            <ImpactTableCell
              role="cell-0"
              type="input"
              width="sm"
              state="filled"
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
          Total Cells (Read-Only)
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Decimal</p>
            <ImpactTableCell
              role="cell"
              type="total"
              width="sm"
              state="decimal"
              value="5.67"
              readOnly
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Text</p>
            <ImpactTableCell
              role="cell"
              type="total"
              width="sm"
              state="text"
              value="Text"
              readOnly
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Scale</p>
            <ImpactTableCell
              role="cell"
              type="total"
              width="sm"
              state="scale"
              value="3"
              readOnly
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Currency</p>
            <ImpactTableCell
              role="cell"
              type="total"
              width="sm"
              state="default"
              value="$0.00 M"
              readOnly
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Category Header</p>
            <ImpactTableCell
              role="cell"
              type="header"
              width="lg"
              title="Category name"
              showLock
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Category with Subtext</p>
            <ImpactTableCell
              role="cell"
              type="header-w-subtext"
              width="lg"
              title="Category name"
              subtext="This is a subtitle"
              showLock
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Column Header</p>
            <ImpactTableCell
              role="cell"
              type="header"
              width="sm"
              unitLabel="U1"
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Column with Year</p>
            <ImpactTableCell
              role="cell-0"
              type="header"
              width="sm"
              yearLabel="2025"
              unitLabel="0A"
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
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Standard Row</p>
            <ImpactTableCell
              role="row"
              type="header"
              title="Row title goes here"
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Row with Subtext</p>
            <ImpactTableCell
              role="row"
              type="header-subtext"
              title="Row title goes here"
              subtext="This is subtext"
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Bolded Row</p>
            <ImpactTableCell
              role="row"
              type="bolded"
              title="Total amount ($M)"
            />
          </div>
          <div>
            <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>Bolded with Subtext</p>
            <ImpactTableCell
              role="row"
              type="bolded-w-subtext"
              title="Total amount ($M)"
              subtext="This is subtext"
            />
          </div>
        </div>
      </section>
    </div>
  ),
};

export const CompleteTableExample: Story = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <ImpactTable
        title="Complete Impact Assessment Table"
        showCategoryHeader
        categoryHeaders={[
          { id: 'cat1', title: 'Environmental', showLock: false, colspan: 2 },
          { id: 'cat2', title: 'Social Impact', subtext: 'Community & Workforce', showLock: true, colspan: 2 },
        ]}
        columns={[
          { id: 'col1', yearLabel: '2025', unitLabel: 'Q1', width: 'sm', isSpecial: true },
          { id: 'col2', unitLabel: 'Q2', width: 'sm' },
          { id: 'col3', yearLabel: '2025', unitLabel: 'Q3', width: 'sm', isSpecial: true },
          { id: 'col4', unitLabel: 'Q4', width: 'sm' },
        ]}
        rows={[
          { id: 'row1', title: 'Carbon Emissions', type: 'header' },
          { id: 'row2', title: 'Water Usage', subtext: 'Megaliters', type: 'header-subtext' },
          { id: 'row3', title: 'Employment Impact', type: 'header' },
          { id: 'row4', title: 'Community Investment', type: 'header' },
          { id: 'row5', title: 'Total Impact Score', type: 'bolded' },
          { id: 'row6', title: 'Weighted Average', subtext: 'Calculated', type: 'bolded-w-subtext' },
        ]}
        data={{
          row1: {
            col1: { type: 'input', state: 'filled', value: '125.5' },
            col2: { type: 'input', state: 'filled', value: '130.2' },
            col3: { type: 'input', state: 'filled', value: '128.7' },
            col4: { type: 'input', state: 'default', placeholder: '0.00' },
          },
          row2: {
            col1: { type: 'input', state: 'filled', value: '45.2' },
            col2: { type: 'input', state: 'filled', value: '47.8' },
            col3: { type: 'input', state: 'filled', value: '46.5' },
            col4: { type: 'input', state: 'default', placeholder: '0.00' },
          },
          row3: {
            col1: { type: 'dropdown', state: 'filled', value: '3 - Significant', options: impactScaleOptions },
            col2: { type: 'dropdown', state: 'filled', value: '3 - Significant', options: impactScaleOptions },
            col3: { type: 'dropdown', state: 'filled', value: '4 - Major', options: impactScaleOptions },
            col4: { type: 'dropdown', state: 'default', options: impactScaleOptions },
          },
          row4: {
            col1: { type: 'input', state: 'filled', value: '2.5' },
            col2: { type: 'input', state: 'filled', value: '2.8' },
            col3: { type: 'input', state: 'filled', value: '3.1' },
            col4: { type: 'input', state: 'default', placeholder: '0.00' },
          },
          row5: {
            col1: { type: 'total', state: 'scale', value: '3', readOnly: true },
            col2: { type: 'total', state: 'scale', value: '3', readOnly: true },
            col3: { type: 'total', state: 'scale', value: '4', readOnly: true },
            col4: { type: 'total', state: 'scale', value: '0', readOnly: true },
          },
          row6: {
            col1: { type: 'total', state: 'decimal', value: '3.2', readOnly: true },
            col2: { type: 'total', state: 'decimal', value: '3.3', readOnly: true },
            col3: { type: 'total', state: 'decimal', value: '3.7', readOnly: true },
            col4: { type: 'total', state: 'decimal', value: '0.0', readOnly: true },
          },
        }}
        onCellChange={(rowId, columnId, value) => {
          console.log(`Cell changed: Row ${rowId}, Column ${columnId}, Value: ${value}`);
        }}
      />
    </div>
  ),
};

export const ResponsiveExample: Story = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <div style={{ marginBottom: '16px', padding: '12px', background: '#F9FAFB', borderRadius: '4px' }}>
        <p style={{ fontSize: '14px', color: '#6D7280', margin: 0 }}>
          💡 <strong>Tip:</strong> Resize your browser window to see how the table adapts to different screen sizes.
          The table maintains usability on mobile, tablet, and desktop viewports.
        </p>
      </div>
      
      <ImpactTable
        title="Responsive Impact Table"
        columns={[
          { id: 'col1', yearLabel: '2025', unitLabel: 'Q1', width: 'sm', isSpecial: true },
          { id: 'col2', unitLabel: 'Q2', width: 'sm' },
          { id: 'col3', unitLabel: 'Q3', width: 'sm' },
          { id: 'col4', unitLabel: 'Q4', width: 'sm' },
          { id: 'col5', yearLabel: '2026', unitLabel: 'Q1', width: 'sm', isSpecial: true },
        ]}
        rows={[
          { id: 'row1', title: 'Environmental Impact', type: 'header' },
          { id: 'row2', title: 'Social Impact', type: 'header' },
          { id: 'row3', title: 'Economic Impact', type: 'header' },
          { id: 'row4', title: 'Total', type: 'bolded' },
        ]}
        data={{
          row1: {
            col1: { type: 'dropdown', state: 'filled', value: '3', options: impactScaleOptions },
            col2: { type: 'dropdown', state: 'filled', value: '3', options: impactScaleOptions },
            col3: { type: 'dropdown', state: 'filled', value: '4', options: impactScaleOptions },
            col4: { type: 'dropdown', state: 'filled', value: '4', options: impactScaleOptions },
            col5: { type: 'dropdown', state: 'default', options: impactScaleOptions },
          },
          row2: {
            col1: { type: 'dropdown', state: 'filled', value: '2', options: impactScaleOptions },
            col2: { type: 'dropdown', state: 'filled', value: '3', options: impactScaleOptions },
            col3: { type: 'dropdown', state: 'filled', value: '3', options: impactScaleOptions },
            col4: { type: 'dropdown', state: 'filled', value: '3', options: impactScaleOptions },
            col5: { type: 'dropdown', state: 'default', options: impactScaleOptions },
          },
          row3: {
            col1: { type: 'input', state: 'filled', value: '15.5' },
            col2: { type: 'input', state: 'filled', value: '16.2' },
            col3: { type: 'input', state: 'filled', value: '15.8' },
            col4: { type: 'input', state: 'filled', value: '16.5' },
            col5: { type: 'input', state: 'default', placeholder: '0.00' },
          },
          row4: {
            col1: { type: 'total', state: 'decimal', value: '11.2', readOnly: true },
            col2: { type: 'total', state: 'decimal', value: '12.1', readOnly: true },
            col3: { type: 'total', state: 'decimal', value: '12.3', readOnly: true },
            col4: { type: 'total', state: 'decimal', value: '12.5', readOnly: true },
            col5: { type: 'total', state: 'decimal', value: '0.0', readOnly: true },
          },
        }}
      />
    </div>
  ),
};
