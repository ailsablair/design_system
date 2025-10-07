# AccordionGroup Component Implementation

## Overview

The `AccordionGroup` component has been successfully implemented based on exact Figma design specifications for grouped accordions. This component provides a structured way to display multiple accordion items with two distinct grouping styles.

## Component Files

### Core Component Files
- **`AccordionGroup.tsx`** - Main React component with TypeScript interfaces
- **`accordionGroupFigma.css`** - Figma-exact styling with all variants
- **`AccordionGroup.stories.tsx`** - Primary Storybook stories
- **`AccordionGroupShowcase.stories.tsx`** - Comprehensive showcase stories
- **`AccordionGroupOverview.stories.tsx`** - Complete overview matching Figma layout

## Features

### Group Types

#### 1. Attached Type
Accordions seamlessly connected with shared borders:
- **First item**: Top border radius only, full border
- **Middle items**: No radius, shared top border (no top border on middle items)
- **Last item**: Bottom border radius only, no top border

**Use cases:**
- Settings menus
- Navigation panels
- Grouped options that belong together

#### 2. Gap Type
Accordions with visual separation:
- Each item is standalone with full border and radius
- Visual spacing creates distinct sections
- Better for unrelated items

**Use cases:**
- FAQ sections
- Independent feature lists
- Content that needs visual separation

### Size Variants

#### Small (18px font)
- Font: 18px Archivo Label LG
- Chevron: 20px
- Bell icon: 18px
- Border radius: 12px
- Compact for dense layouts

#### Default (19px font)
- Font: 19px Archivo Heading 5
- Chevron: 28px
- Bell icon: 22px
- Border radius: 16px
- Standard size for most use cases

#### Large (24px font)
- Font: 24px Archivo Heading 4
- Chevron: 32px
- Bell icon: 26px
- Border radius: 20px
- Prominent for important sections

## Usage Examples

### Basic Usage

```tsx
import { AccordionGroup } from './AccordionGroup';

// Attached type (default)
<AccordionGroup 
  size="default"
  type="attached"
  items={[
    { id: '1', title: 'Settings' },
    { id: '2', title: 'Privacy' },
    { id: '3', title: 'Security' },
  ]}
/>

// Gap type with spacing
<AccordionGroup 
  size="large"
  type="gap"
  items={[
    { id: '1', title: 'FAQ Item 1' },
    { id: '2', title: 'FAQ Item 2' },
    { id: '3', title: 'FAQ Item 3' },
  ]}
/>
```

### Custom Items with Click Handlers

```tsx
<AccordionGroup 
  size="default"
  type="attached"
  items={[
    { 
      id: '1', 
      title: 'General Settings',
      onClick: () => handleSettingsClick('general')
    },
    { 
      id: '2', 
      title: 'Privacy Settings',
      showBellIcon: false, // Hide bell icon
      onClick: () => handleSettingsClick('privacy')
    },
    { 
      id: '3', 
      title: 'Advanced',
      showStatusIcon: false, // Hide status icon
      onClick: () => handleSettingsClick('advanced')
    },
  ]}
/>
```

## Design Tokens Used

### Spacing
- `--spacing-sizing-20px: 20px` - Header padding top
- `--spacing-sizing-32px: 32px` - Horizontal padding
- `--spacing-sizing-16px: 16px` - Standard padding
- `--spacing-sizing-12px: 12px` - Gap between elements

### Border Radius
- `--spacing-radius-12px: 12px` - Small size radius
- `--spacing-radius-16px: 16px` - Default size radius
- `--spacing-radius-20px: 20px` - Large size radius

### Colors
- `--neutral-gray-gray-300: #D2D5DA` - Border color
- `--base-white: #FFF` - Background
- `--secondary-blue-gray: #61607C` - Status icon
- `--primary-blue-dark-blue: #191E3C` - Title text

### Typography
- `--type-typeface-archivo: Archivo` - Title font
- `--type-archivo-label-lg: 18px` - Small size font
- `--type-archivo-heading-5: 19px` - Default size font
- `--type-archivo-heading-4: 24px` - Large size font
- `--type-weight-medium: 500` - Title weight

## Responsive Behavior

### Tablet (≤768px)
- Reduced horizontal padding: 24px
- Slightly smaller fonts for large/default sizes
- Maintained readability

### Mobile (≤480px)
- Further reduced padding: 16px
- Smaller gap between elements: 8px
- Optimized font sizes for mobile screens
- Maintained touch-friendly targets

## Accessibility Features

### Keyboard Navigation
- Tab key navigates between accordion items
- Enter key activates/expands items
- Focus indicators visible for keyboard users

### ARIA Support
- `role="group"` on container
- `aria-expanded` attribute on items
- Semantic button elements

### Visual Accessibility
- High contrast mode support (increased border width)
- Focus indicators with 2px outline
- Reduced motion support (removes transitions)
- Print-friendly styles

### Screen Readers
- Semantic HTML structure
- Clear button labels
- Status indicators properly labeled

## CSS Architecture

### Border Management
The component uses intelligent border management for the attached type:

```css
/* Top item - full border */
.accordion-group--type-attached .accordion-group__item--position-top {
  border: 1px solid var(--neutral-gray-gray-300);
}

/* Middle items - no top border (shared with previous) */
.accordion-group--type-attached .accordion-group__item--position-middle {
  border-right: 1px solid var(--neutral-gray-gray-300);
  border-bottom: 1px solid var(--neutral-gray-gray-300);
  border-left: 1px solid var(--neutral-gray-gray-300);
}

/* Bottom item - no top border, bottom radius */
.accordion-group--type-attached .accordion-group__item--position-bottom {
  border-right: 1px solid var(--neutral-gray-gray-300);
  border-bottom: 1px solid var(--neutral-gray-gray-300);
  border-left: 1px solid var(--neutral-gray-gray-300);
}
```

### Radius Control
Dynamic border radius based on position and size:

```css
/* Top item radius - size dependent */
.accordion-group--type-attached .accordion-group__item--position-top.accordion-group__item--size-small {
  border-radius: 12px 12px 0 0;
}

.accordion-group--type-attached .accordion-group__item--position-top.accordion-group__item--size-default {
  border-radius: 16px 16px 0 0;
}

.accordion-group--type-attached .accordion-group__item--position-top.accordion-group__item--size-large {
  border-radius: 20px 20px 0 0;
}
```

## Props Interface

```typescript
export interface AccordionGroupItem {
  id: string;                    // Unique identifier
  title?: string;                // Display title
  showStatusIcon?: boolean;      // Toggle status icon (default: true)
  showBellIcon?: boolean;        // Toggle bell icon (default: true)
  onClick?: () => void;          // Click handler
}

export interface AccordionGroupProps {
  size?: 'small' | 'default' | 'large';  // Size variant
  type?: 'attached' | 'gap';              // Grouping type
  items?: AccordionGroupItem[];           // Array of items
  className?: string;                     // Additional CSS classes
}
```

## Best Practices

### When to Use Attached Type
- Related settings or options
- Navigation menus
- Sequential steps or processes
- Compact, space-efficient layouts

### When to Use Gap Type
- Unrelated content sections
- FAQ pages
- Feature showcases
- Content that needs visual breathing room

### Size Selection
- **Small**: Dense layouts, sidebars, compact spaces
- **Default**: Most common use cases, balanced approach
- **Large**: Emphasis on important sections, hero areas

## Implementation Notes

1. **Automatic Position Management**: The component automatically determines item positions (top, middle, bottom) based on index
2. **Flexible Item Count**: Works with any number of items (1 to N)
3. **Single Item Handling**: Single items automatically get full border radius
4. **Icon Flexibility**: Status and bell icons can be toggled per item
5. **Responsive by Default**: No additional configuration needed for responsive behavior

## Testing in Storybook

View all variants in Storybook:

```bash
npm run storybook
```

Navigate to:
- `Atoms/Accordion/AccordionGroup` - Primary stories
- `Atoms/Accordion/AccordionGroup/Showcase` - Comprehensive showcases
- `Atoms/Accordion/AccordionGroup/Overview` - Complete Figma layout

## Future Enhancements

Potential improvements for future iterations:

1. **Expandable Content**: Add support for expandable accordion bodies
2. **Animation**: Smooth expand/collapse animations
3. **Custom Icons**: Support for custom status and content icons
4. **Theming**: Additional color themes beyond default
5. **Nesting**: Support for nested accordion groups
6. **Selection State**: Visual indication of selected items
7. **Drag & Drop**: Reorderable accordion items

## Related Components

- **AccordionOpen**: Individual open accordion with body content
- **AccordionHeader**: Standalone accordion headers
- **AccordionBody**: Accordion body content

## Figma Design Compliance

This implementation follows the exact Figma design specifications:
- ✅ All size variants (small, default, large)
- ✅ Both type variants (attached, gap)
- ✅ Exact spacing and padding values
- ✅ Correct border radius per size
- ✅ Proper icon sizing and positioning
- ✅ Accurate typography tokens
- ✅ Color token compliance
- ✅ Responsive behavior

## Support

For issues or questions:
- Check Storybook documentation
- Review the showcase stories for examples
- Refer to Echo Design System guidelines
- Contact the design system team
