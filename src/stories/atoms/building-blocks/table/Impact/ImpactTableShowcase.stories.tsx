import type { Meta, StoryObj } from '@storybook/react';
import { ImpactTable } from './ImpactTable';
import { ImpactTableCell } from './ImpactTableCell';
import './impactStories.css';

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
    <div className="impact-showcase-root">
      <section className="impact-section">
        <h2 className="impact-section-title">Dropdown Cells</h2>
        <div className="impact-grid">
          <div>
            <p className="impact-label">Default (Large)</p>
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
            <p className="impact-label">Scale (Large)</p>
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
            <p className="impact-label">Empty (Large)</p>
            <ImpactTableCell
              role="cell"
              type="dropdown"
              width="lg"
              state="empty"
              options={impactScaleOptions}
            />
          </div>
          <div>
            <p className="impact-label">Disabled (Large)</p>
            <ImpactTableCell
              role="cell"
              type="dropdown"
              width="lg"
              state="disabled"
              options={impactScaleOptions}
            />
          </div>
          <div>
            <p className="impact-label">Scale (Small)</p>
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
            <p className="impact-label">Hover State</p>
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

      <section className="impact-section">
        <h2 className="impact-section-title">Input Cells</h2>
        <div className="impact-grid">
          <div>
            <p className="impact-label">Decimal (Large)</p>
            <ImpactTableCell
              role="cell"
              type="input"
              width="lg"
              state="decimal"
              value="2.65"
            />
          </div>
          <div>
            <p className="impact-label">Default (Large)</p>
            <ImpactTableCell
              role="cell"
              type="input"
              width="lg"
              state="default"
              placeholder="Enter initial value"
            />
          </div>
          <div>
            <p className="impact-label">Empty (Large)</p>
            <ImpactTableCell
              role="cell"
              type="input"
              width="lg"
              state="empty"
            />
          </div>
          <div>
            <p className="impact-label">Disabled (Large)</p>
            <ImpactTableCell
              role="cell"
              type="input"
              width="lg"
              state="disabled"
              placeholder="Enter initial value"
            />
          </div>
          <div>
            <p className="impact-label">Decimal (Small)</p>
            <ImpactTableCell
              role="cell-0"
              type="input"
              width="sm"
              state="decimal"
              value="5.67"
            />
          </div>
          <div>
            <p className="impact-label">Hover State</p>
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

      <section className="impact-section">
        <h2 className="impact-section-title">Populated Cells (Read-Only)</h2>
        <div className="impact-grid">
          <div>
            <p className="impact-label">Decimal (Large)</p>
            <ImpactTableCell
              role="cell"
              type="populated"
              width="lg"
              state="decimal"
              value="2.65"
            />
          </div>
          <div>
            <p className="impact-label">Decimal (Small)</p>
            <ImpactTableCell
              role="cell-0"
              type="populated"
              width="sm"
              state="decimal"
              value="5.67"
            />
          </div>
          <div>
            <p className="impact-label">Scale (Small)</p>
            <ImpactTableCell
              role="cell"
              type="populated"
              width="sm"
              state="scale"
              value="3"
            />
          </div>
          <div>
            <p className="impact-label">Text (Small)</p>
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

      <section className="impact-section">
        <h2 className="impact-section-title">Total Cells (Bold, Read-Only)</h2>
        <div className="impact-grid">
          <div>
            <p className="impact-label">Decimal (Large)</p>
            <ImpactTableCell
              role="cell"
              type="total"
              width="lg"
              state="decimal"
              value="$ 2.65 M"
            />
          </div>
          <div>
            <p className="impact-label">Decimal (Small)</p>
            <ImpactTableCell
              role="cell-0"
              type="total"
              width="sm"
              state="decimal"
              value="$ 2.65 M"
            />
          </div>
          <div>
            <p className="impact-label">Scale (Small)</p>
            <ImpactTableCell
              role="cell-0"
              type="total"
              width="sm"
              state="scale"
              value="3"
            />
          </div>
          <div>
            <p className="impact-label">Text (Small)</p>
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

      <section className="impact-section">
        <h2 className="impact-section-title">Header Cells</h2>
        <div className="impact-grid">
          <div>
            <p className="impact-label">Category Header</p>
            <ImpactTableCell
              role="cell"
              type="header-w-subtext"
              width="lg"
              title="Category name"
              subtext="This is a subtitle"
            />
          </div>
          <div>
            <p className="impact-label">Impact Header with Lock</p>
            <ImpactTableCell
              role="cell"
              type="impact"
              width="lg"
              title="Impact values"
              subtext="This is a subtitle"
            />
          </div>
          <div>
            <p className="impact-label">Column Header (0A)</p>
            <ImpactTableCell
              role="cell-0"
              type="header"
              width="sm"
              unitLabel="0A"
            />
          </div>
          <div>
            <p className="impact-label">Column Header (U1)</p>
            <ImpactTableCell
              role="cell"
              type="header"
              width="sm"
              unitLabel="U1"
            />
          </div>
        </div>
      </section>

      <section className="impact-section">
        <h2 className="impact-section-title">Row Headers</h2>
        <div className="impact-grid">
          <div>
            <p className="impact-label">Row with Subtext</p>
            <ImpactTableCell
              role="row"
              type="header-w-subtext"
              width="lg"
              title="Row title goes here"
              subtext="This is subtext"
            />
          </div>
          <div>
            <p className="impact-label">Total Row with Subtext</p>
            <ImpactTableCell
              role="row"
              type="total"
              width="lg"
              title="Total amount ($M)"
              subtext="This is subtext"
            />
          </div>
          <div>
            <p className="impact-label">Impact Row</p>
            <ImpactTableCell
              role="row"
              type="impact"
              width="lg"
              title="Total amount ($M)"
            />
          </div>
        </div>
      </section>

      <section className="impact-section">
        <h2 className="impact-section-title">Locked Cells</h2>
        <div className="impact-grid">
          <div>
            <p className="impact-label">Locked Decimal</p>
            <ImpactTableCell
              role="cell"
              type="locked"
              width="lg"
              state="decimal"
              value="2.65"
            />
          </div>
          <div>
            <p className="impact-label">Locked Scale</p>
            <ImpactTableCell
              role="cell"
              type="locked"
              width="sm"
              state="scale"
              value="3"
            />
          </div>
          <div>
            <p className="impact-label">Locked Text</p>
            <ImpactTableCell
              role="cell"
              type="locked"
              width="lg"
              state="text"
              value="2001"
            />
          </div>
          <div>
            <p className="impact-label">Locked Disabled</p>
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
    <div className="impact-showcase-root impact-showcase-tight">
      <div>
        <h2 className="impact-section-title" style={{ marginBottom: 'var(--spacing-sizing-8px, 8px)' }}>Complete Impact Table</h2>
        <p className="impact-subtitle">
          This is the fully assembled Impact Table component matching the exact Figma design.
          It demonstrates all cell types, states, and the complete table structure.
        </p>
      </div>

      <ImpactTable />

      <div className="impact-highlight-card">
        <h3 className="impact-highlight-title">Design Highlights</h3>
        <ul className="impact-highlight-list">
          <li><strong>Header Row:</strong> Category headers with optional lock icons and subtexts</li>
          <li><strong>Special Column:</strong> "Impact values" column with green border separator</li>
          <li><strong>0A Column:</strong> Light green background for visual distinction</li>
          <li><strong>Body Rows:</strong> Mix of populated decimals (2.65, 5.67), scale values (3), dropdown, and input cells</li>
          <li><strong>Total Row:</strong> Bold values with light blue backgrounds</li>
          <li><strong>Borders:</strong> Dark seafoam for header and total rows, gray for cells</li>
        </ul>
      </div>
    </div>
  ),
};

export const ResponsiveExample: Story = {
  render: () => (
    <div className="impact-showcase-root">
      <div className="impact-tip-panel">
        <p className="impact-subtitle" style={{ margin: 0 }}>
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
    <div className="impact-showcase-root">
      <section className="impact-section">
        <h3 className="impact-multi-table-section-title">Environmental Impact Assessment</h3>
        <ImpactTable />
      </section>

      <section className="impact-section">
        <h3 className="impact-multi-table-section-title">Social Impact Assessment</h3>
        <ImpactTable />
      </section>

      <section className="impact-section">
        <h3 className="impact-multi-table-section-title">Economic Impact Assessment</h3>
        <ImpactTable />
      </section>
    </div>
  ),
};
