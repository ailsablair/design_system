# Impact Table Components

A comprehensive set of table components designed for impact assessment and data-intensive applications in the Echo Design System for the nuclear power industry.

## Overview

The Impact Table components provide a flexible and accessible solution for displaying and editing complex data matrices. Built with React and TypeScript, these components follow the Echo Design System guidelines and use only custom design tokens from Figma.

## Components

### ImpactTable

The main table component that orchestrates the entire impact assessment interface.

**Features:**
- Multi-column layout with year/unit headers
- Row headers with titles and optional subtexts
- Category headers with colspan support
- Mixed cell types (dropdown, input, total)
- Responsive design
- Keyboard navigation and accessibility
- Event handling for cell changes

**Props:**
```typescript
interface ImpactTableProps {
  title?: string;
  columns: ImpactTableColumnHeader[];
  rows: ImpactTableRowHeader[];
  data: Record<string, Record<string, ImpactTableCellData>>;
  showCategoryHeader?: boolean;
  categoryHeaders?: Array<{
    id: string;
    title: string;
    subtext?: string;
    showLock?: boolean;
    colspan?: number;
  }>;
  className?: string;
  onCellChange?: (rowId: string, columnId: string, value: string | number) => void;
}
```

**Example:**
```tsx
import { ImpactTable } from './Impact';

<ImpactTable
  title="Environmental Impact Assessment"
  columns={[
    { id: 'q1', yearLabel: '2025', unitLabel: 'Q1', width: 'sm', isSpecial: true },
    { id: 'q2', unitLabel: 'Q2', width: 'sm' },
  ]}
  rows={[
    { id: 'emissions', title: 'Carbon Emissions', type: 'header' },
    { id: 'total', title: 'Total', type: 'bolded' },
  ]}
  data={{
    emissions: {
      q1: { type: 'input', state: 'filled', value: '125.5' },
      q2: { type: 'input', state: 'default', placeholder: '0.00' },
    },
    total: {
      q1: { type: 'total', state: 'decimal', value: '125.5', readOnly: true },
      q2: { type: 'total', state: 'decimal', value: '0.0', readOnly: true },
    },
  }}
  onCellChange={(rowId, columnId, value) => {
    console.log(`Updated: ${rowId}, ${columnId}, ${value}`);
  }}
/>
```

### ImpactTableCell

Individual cell component supporting various types and states.

**Cell Types:**
- **dropdown**: Selection from predefined options with chevron icon
- **input**: Free-text or numeric input field
- **header**: Category names with optional lock icons
- **header-w-subtext**: Category with subtitle
- **header-subtext**: Row header with subtitle
- **bolded**: Bold row header (for totals)
- **bolded-w-subtext**: Bold row header with subtitle
- **total**: Read-only calculated values

**Cell Roles:**
- **cell**: Standard data cell
- **cell-0**: Special column (highlighted in seafoam)
- **row**: Row header cell

**Cell States:**
- **default**: Initial state with placeholder
- **filled**: Contains user data
- **empty**: Minimal UI, no value
- **disabled**: Non-interactive
- **disabled-empty**: Disabled and empty
- **hover**: Visual feedback
- **decimal**: Decimal number display (total cells)
- **text**: Text display (total cells)
- **scale**: Integer scale display (total cells)

**Props:**
```typescript
interface ImpactTableCellProps {
  role?: 'cell' | 'cell-0' | 'row';
  type?: 'dropdown' | 'input' | 'header' | 'header-w-subtext' | 'header-subtext' | 'bolded' | 'bolded-w-subtext' | 'total';
  width?: 'sm' | 'lg';
  state?: 'default' | 'filled' | 'empty' | 'disabled' | 'disabled-empty' | 'hover' | 'decimal' | 'text' | 'scale';
  hover?: boolean;
  value?: string | number;
  placeholder?: string;
  title?: string;
  subtext?: string;
  showLock?: boolean;
  yearLabel?: string;
  unitLabel?: string;
  disabled?: boolean;
  readOnly?: boolean;
  options?: Array<{ label: string; value: string | number }>;
  className?: string;
  onChange?: (value: string | number) => void;
  onClick?: () => void;
}
```

**Examples:**

Dropdown Cell:
```tsx
<ImpactTableCell
  role="cell"
  type="dropdown"
  width="lg"
  state="filled"
  value="3 - Significant"
  options={[
    { label: '1 - Negligible', value: '1' },
    { label: '2 - Minor', value: '2' },
    { label: '3 - Significant', value: '3' },
  ]}
  onChange={(value) => console.log(value)}
/>
```

Input Cell:
```tsx
<ImpactTableCell
  role="cell-0"
  type="input"
  width="sm"
  state="filled"
  value="5.67"
  onChange={(value) => console.log(value)}
/>
```

Header Cell:
```tsx
<ImpactTableCell
  role="cell"
  type="header"
  width="lg"
  title="Environmental Impact"
  subtext="Carbon emissions and waste"
  showLock={true}
/>
```

Column Header:
```tsx
<ImpactTableCell
  role="cell-0"
  type="header"
  width="sm"
  yearLabel="2025"
  unitLabel="Q1"
/>
```

Total Cell:
```tsx
<ImpactTableCell
  role="cell"
  type="total"
  width="sm"
  state="decimal"
  value="125.5"
  readOnly
/>
```

## Design Tokens

All components use custom Echo Design System tokens:

### Typography
- **Archivo**: Headers, labels, and row titles
  - Font weights: 300 (Light), 500 (Medium), 700 (Bold)
  - Font sizes: 13px (footnote), 14px (label-sm), 16px (label), 19px (heading-5)
- **Roboto Flex**: Input fields and body text
  - Font weights: 400 (Regular)
  - Font sizes: 14px (body-sm)

### Colors

**Primary Colors:**
- Blue: `#2F42BD` (Primary), `#F9F9FE` (Blue-50), `#E7E9F4` (Blue-100), `#95A0E5` (Blue-300)
- Seafoam: `#8BBF9F` (Primary), `#F3F9F5` (Seafoam-50), `#DCECE2` (Seafoam-100), `#4B6D58` (Dark Seafoam)
- Sky Blue: `#0BA7EA` (Primary), `#F4FCFF` (Sky Blue-50)

**Neutral Colors:**
- Black: `#1C1C1C`
- White: `#FFF`
- Navy: `#3A3282` (Secondary)
- Blue Gray: `#61607C` (Secondary)
- Grays: `#F9FAFB` (50), `#F3F4F6` (100), `#E5E7EB` (200), `#D2D5DA` (300), `#9CA3AF` (400), `#6D7280` (500), `#4B5563` (600), `#374151` (700)

### Spacing
- `4px`: Small gaps and padding
- `6px`: Input field gaps
- `8px`: Standard padding
- `12px`: Medium padding
- `16px`: Large padding
- `24px`: Extra large padding

### Effects
- Hover shadows: Blue, Seafoam, Navy variants
- Border radius: 0 (sharp corners per design)
- Transitions: 0.2s ease-in-out

## Accessibility

### Keyboard Navigation
- Tab through cells in reading order
- Enter/Space to activate dropdowns
- Arrow keys for dropdown navigation
- Escape to close dropdowns

### Screen Readers
- Proper ARIA labels on interactive elements
- Table semantics (thead, tbody, th, td)
- Form labels for input fields
- Role attributes for custom controls

### Visual Accessibility
- High contrast ratios (WCAG AA compliant)
- Focus indicators on all interactive elements
- Disabled state clearly distinguished
- Hover states provide clear feedback

## Responsive Design

The table adapts to different screen sizes:

**Desktop (>1024px):**
- Full width cells (201px for lg, 94px for sm)
- Standard padding (10px horizontal)
- All features visible

**Tablet (768px - 1024px):**
- Reduced cell widths (160px/80px)
- Adjusted padding (8px horizontal)
- Horizontal scroll for overflow

**Mobile (<768px):**
- Minimum cell widths (140px/70px)
- Compact padding (6px horizontal)
- Full horizontal scroll
- Smaller font sizes (12px)

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Best Practices

1. **Data Structure**: Organize data in a consistent row x column matrix
2. **Performance**: Use React.memo for large tables with many cells
3. **Validation**: Implement cell-level validation before onChange callback
4. **Loading States**: Show loading indicators during data fetch
5. **Error Handling**: Provide clear error messages for invalid input
6. **Accessibility**: Test with keyboard only and screen readers
7. **Responsive**: Test on multiple device sizes
8. **State Management**: Use controlled components for complex forms

## Usage in Storybook

View component examples in Storybook:
- `Tables/Impact/ImpactTableCell` - Individual cell variants
- `Tables/Impact/ImpactTable` - Complete table examples
- `Tables/Impact/Showcase` - Comprehensive showcase

## Development

### Running Tests
```bash
npm test
```

### Building
```bash
npm run build
```

### Linting
```bash
npm run lint
```

## License

Internal use only - Echo Design System for nuclear power industry.

## Support

For questions or issues, contact the Echo Design System team.
