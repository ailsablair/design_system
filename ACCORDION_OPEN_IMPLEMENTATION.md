# Open Accordion Components - Figma Implementation

## Overview

This implementation adds open accordion components designed for creating stacked/grouped accordions based on Figma design specifications. The components support four positioning types that enable seamless accordion groups.

## Files Created

### 1. `accordionOpenFigma.css`
**Location:** `src/stories/atoms/accordion/accordionOpenFigma.css`

Complete CSS styling for open accordion positioning types:
- **Contained**: Standalone accordion with full border radius
- **Top**: First accordion in a stack (radius on top only)
- **Middle**: Middle accordion in a stack (no radius, connects above and below)
- **Bottom**: Last accordion in a stack (radius on bottom only)

Key features:
- Exact Figma design tokens for borders, radius, and spacing
- Three size variants: small (12px radius), default (16px radius), large (20px radius)
- Proper border handling for seamless stacking
- Status icons with dashed circles
- Bell notification icons
- Chevron up indicators (always up for open state)
- Fully responsive with mobile-first approach
- Accessibility support (reduced motion, high contrast, print styles)

### 2. `AccordionOpen.tsx`
**Location:** `src/stories/atoms/accordion/AccordionOpen.tsx`

React component for open accordion with the following props:

```typescript
interface AccordionOpenProps {
  type?: 'contained' | 'top' | 'middle' | 'bottom';
  size?: 'small' | 'default' | 'large';
  title?: string;
  content?: string;
  showStatusIcon?: boolean;
  showBellIcon?: boolean;
  className?: string;
  children?: React.ReactNode;
}
```

### 3. `AccordionOpen.stories.tsx`
**Location:** `src/stories/atoms/accordion/AccordionOpen.stories.tsx`

Storybook stories showcasing:
- 12 individual stories (4 types × 3 sizes)
- Stacked accordion group examples
- Multiple sizes demonstration
- Custom content examples
- Icon toggle examples

## Position Types

### 1. Contained (Standalone)
- Full border on all sides
- Rounded corners on all corners
- Use for: Single, standalone accordions

### 2. Top (First in Stack)
- Full border on all sides
- Rounded corners on top only
- Use for: First accordion in a group

### 3. Middle (Middle of Stack)
- Left and right borders only (no top border)
- No rounded corners
- Use for: Middle accordions in a group

### 4. Bottom (Last in Stack)
- Right, bottom, and left borders (no top border)
- Rounded corners on bottom only
- Use for: Last accordion in a group

## Size Variants

### Small
- Border radius: 12px
- Header padding: 16px 32px
- Body padding: 24px 32px
- Title: 18px Archivo
- Body: 14px Roboto Flex
- Icon sizes: 18px

### Default
- Border radius: 16px
- Header padding: 20px 32px 16px (top) or 16px 32px (middle/bottom)
- Body padding: 24px 32px
- Title: 19px Archivo
- Body: 16px Roboto Flex
- Icon sizes: 22px

### Large
- Border radius: 20px
- Header padding: 20px 32px 16px (top) or 16px 32px (middle/bottom)
- Body padding: 24px 32px
- Title: 24px Archivo
- Body: 18px Roboto Flex
- Icon sizes: 26px (bell), 32px (chevron)

## Usage Examples

### Standalone Accordion
```tsx
import { AccordionOpen } from './AccordionOpen';

<AccordionOpen 
  type="contained" 
  size="default"
  title="Standalone Accordion"
  content="This is a standalone accordion."
/>
```

### Stacked Accordion Group
```tsx
<div style={{ display: 'flex', flexDirection: 'column' }}>
  <AccordionOpen 
    type="top" 
    size="default"
    title="First Item"
    content="First accordion in the stack"
  />
  
  <AccordionOpen 
    type="middle" 
    size="default"
    title="Middle Item"
    content="Middle accordion in the stack"
  />
  
  <AccordionOpen 
    type="bottom" 
    size="default"
    title="Last Item"
    content="Last accordion in the stack"
  />
</div>
```

### Custom Content
```tsx
<AccordionOpen 
  type="contained" 
  size="default"
  title="Custom Content Example"
>
  <div>
    <p>Any React content can go here</p>
    <ul>
      <li>Custom lists</li>
      <li>Formatted text</li>
      <li>Images or components</li>
    </ul>
  </div>
</AccordionOpen>
```

### Without Icons
```tsx
<AccordionOpen 
  type="contained" 
  size="default"
  title="No Icons"
  content="Accordion without status or bell icons"
  showStatusIcon={false}
  showBellIcon={false}
/>
```

### Multiple Groups
```tsx
<div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
  {/* First Group */}
  <div>
    <h3>Settings</h3>
    <AccordionOpen type="top" size="default" title="Profile" />
    <AccordionOpen type="middle" size="default" title="Security" />
    <AccordionOpen type="bottom" size="default" title="Privacy" />
  </div>

  {/* Second Group */}
  <div>
    <h3>Billing</h3>
    <AccordionOpen type="top" size="default" title="Plan" />
    <AccordionOpen type="bottom" size="default" title="Payment" />
  </div>

  {/* Standalone */}
  <AccordionOpen type="contained" size="default" title="Help" />
</div>
```

## Design Tokens Used

### Colors
- `--primary-blue-dark-blue: #191E3C` - Title (contained/top)
- `--base-black: #1C1C1C` - Title (middle/bottom)
- `--neutral-gray-gray-700: #374151` - Body text
- `--neutral-gray-gray-300: #D2D5DA` - Borders
- `#61607C` - Status circle stroke
- `#96F78D` - Status check fill
- `#2F42BD` - Bell and chevron icons

### Typography
- `--type-typeface-archivo: Archivo` - Titles
- `--type-typeface-roboto-flex: "Roboto Flex"` - Body text
- `--type-weight-medium: 500` - Title weight

### Spacing & Borders
- `--spacing-radius-12px: 12px` - Small radius
- `--spacing-radius-16px: 16px` - Default radius
- `--spacing-radius-20px: 20px` - Large radius
- `--spacing-sizing-12px: 12px` - Icon gap
- `--spacing-sizing-16px: 16px` - Padding
- `--spacing-sizing-20px: 20px` - Padding
- `--spacing-sizing-24px: 24px` - Padding
- `--spacing-sizing-32px: 32px` - Padding

## Border Logic

The border logic ensures seamless stacking:

| Type | Top Border | Right Border | Bottom Border | Left Border | Top Radius | Bottom Radius |
|------|-----------|--------------|---------------|-------------|------------|---------------|
| **contained** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **top** | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ |
| **middle** | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| **bottom** | ✗ | ✓ | ✓ | ✓ | ✗ | ✓ |

This creates perfect visual continuity when stacking accordions vertically.

## Icon Components

### Status Icon
- Dashed circle (22px) with stroke-dasharray "2 2"
- Green check mark (16px) with 0.5 opacity
- Centered using absolute positioning

### Bell Icon
- Size-specific variants (18px/22px/26px)
- Blue fill (#2F42BD) with 0.5 opacity
- Ring animation path for notification indicator

### Chevron Icon
- Size-specific variants (20px/28px/32px)
- Always pointing up (open state)
- Blue fill (#2F42BD)

## Responsive Behavior

### Tablet (≤768px)
- Reduced padding: 16px 24px 12px (header), 20px 24px (body)
- Smaller title fonts for large size

### Mobile (≤480px)
- Further reduced padding: 12px 16px (header), 16px (body)
- Smaller gaps (8px)
- Reduced font sizes

## Accessibility Features

- Semantic HTML structure
- High contrast mode support with increased border width
- Reduced motion support (no transitions/animations)
- Print-friendly styles with essential content only
- Keyboard navigation ready (can be enhanced with interactive handlers)

## Best Practices

1. **Grouping**: Always use top → middle(s) → bottom for stacked groups
2. **Spacing**: Add gap between separate groups using flexbox gap or margin
3. **Consistency**: Use the same size for all accordions in a group
4. **Icons**: Keep icon visibility consistent within a group
5. **Content**: Keep content concise for better user experience

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Flexbox support required
- CSS custom properties (variables) support required

## Testing in Storybook

Navigate to:
- **Atoms → Accordion → Open** - Individual component stories
- View stacked group examples
- Test all size and type combinations

All 12 variants plus demonstration stories are available with interactive controls.

## Integration Notes

### With Existing Accordion Components
This open accordion component complements the existing accordion components:
- Use `Accordion` for interactive expand/collapse behavior
- Use `AccordionOpen` for permanently open/expanded states in groups
- Use `AccordionBody` for complex body content types

### Styling Considerations
- The component uses dedicated CSS classes to avoid conflicts
- Can coexist with other accordion implementations
- Border radius values match Figma specifications exactly

## Future Enhancements

Potential additions:
- Interactive collapse/expand functionality
- Animation transitions between states
- Nested accordion support
- Drag and drop reordering
- Custom icon support
- Theme variants (dark mode)
