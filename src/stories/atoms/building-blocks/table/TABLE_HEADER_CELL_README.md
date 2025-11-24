# TableHeaderCell Component

A fully-featured table header cell component for the Echo Design System, providing selection, sorting, and bulk action capabilities.

## Overview

The TableHeaderCell component is designed to be used in table headers with support for:
- **Checkbox selection** (none, selected, some-selected with indeterminate state)
- **Sortable columns** with visual indicators (up/down arrows)
- **Bulk actions** (Edit/Delete buttons when items are selected)
- **Multiple background variants** for visual hierarchy
- **Responsive design** for all screen sizes

## Usage

```tsx
import { TableHeaderCell } from '@/atoms/building-blocks/table/TableHeaderCell';

// Basic lead column with checkbox and sorting
<TableHeaderCell
  type="lead"
  label="Contact Name"
  arrowDirection="down"
  selectType="none"
  onLabelClick={handleSort}
/>

// Selected state with actions
<TableHeaderCell
  type="lead"
  selectType="selected"
  selectedCount={20}
  showActions={true}
  onEditClick={handleEdit}
  onDeleteClick={handleDelete}
/>

// Regular sortable column
<TableHeaderCell
  type="default"
  label="Company"
  arrowDirection="up"
  showHelpIcon={true}
  onLabelClick={handleSort}
/>
```

## Props

### Type
- `type`: 'empty' | 'select-only' | 'default' | 'lead'
  - **empty**: No content (placeholder for alignment)
  - **select-only**: Only checkbox (no label)
  - **default**: Label on left, optional checkbox on right
  - **lead**: Checkbox on left, label in middle, actions on right

### States
- `state`: 'default' | 'selected' | 'hover'
- `selectType`: 'none' | 'selected' | 'some-selected'
  - **none**: Unchecked checkbox
  - **selected**: Checked checkbox (all items selected)
  - **some-selected**: Indeterminate checkbox (partial selection)

### Backgrounds
- `background`: 'default' | 'blue-100' | 'yellow-50' | 'gray-600' | 'dark-seafoam'
  - **default**: Gray-100 background
  - **blue-100**: Light blue background
  - **yellow-50**: Light yellow/cream background
  - **gray-600**: Dark gray background (white text)
  - **dark-seafoam**: Dark green background (white text)

### Label & Sorting
- `label`: Column header text
- `arrowDirection`: 'up' | 'down' | 'none' - Sort indicator
- `showArrowIcon`: boolean - Show/hide sort arrow
- `showHelpIcon`: boolean - Show/hide help icon

### Selection & Actions
- `selectedCount`: number - Count for "{X} selected" label
- `showActions`: boolean - Show Edit/Delete buttons
- `onCheckboxChange`: (e) => void - Checkbox change handler
- `onLabelClick`: () => void - Sort/click handler
- `onHelpClick`: (e) => void - Help icon handler
- `onEditClick`: () => void - Edit button handler
- `onDeleteClick`: () => void - Delete button handler

## Examples

### Complete Table Header

```tsx
<table>
  <thead>
    <tr>
      {/* Lead column with selection */}
      <TableHeaderCell
        type="lead"
        background="default"
        selectType={allSelected ? 'selected' : someSelected ? 'some-selected' : 'none'}
        label="Contact Name"
        arrowDirection={sortColumn === 'name' ? sortDirection : 'none'}
        selectedCount={selectedCount}
        showActions={selectedCount > 0}
        onCheckboxChange={handleSelectAll}
        onLabelClick={() => handleSort('name')}
        onEditClick={handleBulkEdit}
        onDeleteClick={handleBulkDelete}
      />
      
      {/* Regular sortable columns */}
      <TableHeaderCell
        type="default"
        label="Company"
        arrowDirection={sortColumn === 'company' ? sortDirection : 'none'}
        showHelpIcon={true}
        onLabelClick={() => handleSort('company')}
        onHelpClick={showCompanyHelp}
      />
      
      <TableHeaderCell
        type="default"
        label="Email"
        arrowDirection={sortColumn === 'email' ? sortDirection : 'none'}
        onLabelClick={() => handleSort('email')}
      />
      
      {/* Empty cell for actions column */}
      <TableHeaderCell type="empty" />
    </tr>
  </thead>
</table>
```

### With State Management

```tsx
const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
const [sortColumn, setSortColumn] = useState('name');
const [sortDirection, setSortDirection] = useState<'up' | 'down'>('down');

const allSelected = selectedRows.size === totalRows;
const someSelected = selectedRows.size > 0 && selectedRows.size < totalRows;
const selectType = allSelected ? 'selected' : someSelected ? 'some-selected' : 'none';

const handleSelectAll = () => {
  if (allSelected) {
    setSelectedRows(new Set());
  } else {
    setSelectedRows(new Set(allRowIds));
  }
};

const handleSort = (column: string) => {
  if (sortColumn === column) {
    setSortDirection(sortDirection === 'up' ? 'down' : 'up');
  } else {
    setSortColumn(column);
    setSortDirection('down');
  }
};

<TableHeaderCell
  type="lead"
  selectType={selectType}
  selectedCount={selectedRows.size}
  showActions={selectedRows.size > 0}
  onCheckboxChange={handleSelectAll}
  onLabelClick={() => handleSort('name')}
/>
```

### Different Background Variants

```tsx
{/* Highlighted row (blue) */}
<TableHeaderCell
  type="lead"
  background="blue-100"
  label="Priority Items"
/>

{/* Warning row (yellow) */}
<TableHeaderCell
  type="lead"
  background="yellow-50"
  label="Pending Review"
/>

{/* Dark themed section (gray) */}
<TableHeaderCell
  type="lead"
  background="gray-600"
  label="Archived"
/>

{/* Success/completed section (seafoam) */}
<TableHeaderCell
  type="lead"
  background="dark-seafoam"
  label="Completed"
/>
```

## Design Tokens

The component uses Echo design system tokens:

### Colors
- `--base-white`, `--base-black`
- `--neutral-gray-gray-*` (100-900)
- `--primary-blue-blue-*` (100-400)
- `--primary-yellow-yellow-*` (50-400)
- `--primary-seafoam-*`
- `--primary-sky-blue-sky-blue`

### Typography
- `--label-label-light-*` (default text)
- `--label-label-medium-*` (medium weight)
- `--label-label-bold-*` (selected/hover)
- `--footnote-archivo-footnote-light-*` (action buttons)

### Spacing
- `--spacing-sizing-*` (2px, 4px, 6px, 8px, 12px, 24px)
- `--spacing-radius-4px`

## Accessibility

- Proper ARIA labels for checkboxes and interactive elements
- Keyboard navigation support (Enter/Space for actions)
- Focus visible states with outline indicators
- Screen reader friendly selection counts
- Semantic HTML structure

## Responsive Design

The component adapts to different screen sizes:

### Desktop (> 768px)
- Full spacing and sizing
- All labels visible on action buttons

### Tablet (≤ 768px)
- Reduced padding and gaps
- Action button labels hidden (icons only)

### Mobile (≤ 480px)
- Minimal spacing
- Reduced font sizes
- Icon-only action buttons

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- CSS custom properties (CSS variables) required

## Related Components

- **TableHeaderLabel**: Label with sort arrows (used internally)
- **Checkbox**: Selection control (used internally)
- **TableCell**: Companion component for table body cells
- **Table**: Complete table component

## Best Practices

1. **Use consistent types** across header cells in the same table
2. **Provide handlers** for interactive features (sort, select, actions)
3. **Show action buttons** only when items are selected (`showActions={selectedCount > 0}`)
4. **Use semantic HTML** - wrap in `<thead>` and `<tr>` tags
5. **Match background colors** with table row backgrounds for visual consistency
6. **Include empty cells** for alignment with action column in table body

## Migration from Previous Components

If migrating from older table header implementations:

```tsx
// Old
<th>
  <input type="checkbox" />
  <span onClick={handleSort}>Company</span>
  <ArrowIcon />
</th>

// New
<TableHeaderCell
  type="lead"
  label="Company"
  arrowDirection="down"
  selectType="none"
  onCheckboxChange={handleSelect}
  onLabelClick={handleSort}
/>
```

## Notes

- Component is fully controlled - you manage selection and sorting state
- Action buttons appear automatically when `showActions={true}` and `selectType` is not 'none'
- Dark backgrounds (gray-600, dark-seafoam) automatically use white text
- Sort arrows change color based on background variant
- Checkbox uses the Echo design system Checkbox component internally
