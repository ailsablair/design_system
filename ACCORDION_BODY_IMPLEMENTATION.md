# Accordion Body Components - Figma Implementation

## Overview

This implementation adds comprehensive accordion body content types based on the Figma design specifications. The accordion body components support multiple content types with exact Figma styling for typography, spacing, and visual elements.

## Files Created

### 1. `accordionBodyFigma.css`
**Location:** `src/stories/atoms/accordion/accordionBodyFigma.css`

Complete CSS styling for all accordion body content types:
- **Text content**: Simple paragraph text with proper typography
- **List content**: Bulleted lists with checkmark icons
- **Text-image content**: Text with image placeholder
- **Metrics content**: Statistics display with multiple metrics

Key features:
- Exact Figma design tokens for colors, typography, and spacing
- Three size variants: small (14px), default (16px), large (18px)
- Two position variants: default (middle), bottom
- Fully responsive with mobile-first approach
- Accessibility support (reduced motion, high contrast, print styles)

### 2. `AccordionBody.tsx`
**Location:** `src/stories/atoms/accordion/AccordionBody.tsx`

React component for accordion body content with the following props:

```typescript
interface AccordionBodyProps {
  contentType?: 'text' | 'list' | 'text-img' | 'metrics';
  size?: 'small' | 'default' | 'large';
  position?: 'default (middle)' | 'bottom';
  text?: string;
  listItems?: string[];
  imageSrc?: string;
  imageAlt?: string;
  metrics?: Array<{ value: string; label: string }>;
  className?: string;
  children?: React.ReactNode;
}
```

### 3. `AccordionBody.stories.tsx`
**Location:** `src/stories/atoms/accordion/AccordionBody.stories.tsx`

Storybook stories showcasing all accordion body variants:
- 24 individual stories (4 content types × 3 sizes × 2 positions)
- Showcase stories for all content types and sizes
- Custom content example

### 4. `AccordionBodyShowcase.stories.tsx`
**Location:** `src/stories/atoms/accordion/AccordionBodyShowcase.stories.tsx`

Comprehensive showcase demonstrating:
- Complete accordion components with different body types
- All size variants (small, default, large)
- Interactive examples with state management
- Complete Figma showcase with all variants

## Content Types

### 1. Text Content
Simple paragraph text with:
- Roboto Flex font family
- Gray-700 color (#374151)
- Size-specific typography (14px/16px/18px)
- Proper line height and letter spacing

### 2. List Content
Bulleted list with:
- Green checkmark icons (#227F1A with 0.5 opacity)
- 12px gap between icon and text
- 16px or 20px gap between items (based on size)
- Same typography as text content

### 3. Text-Image Content
Text with image placeholder:
- Text content at the top
- Image placeholder below
- Border and background styling
- Size-specific image dimensions:
  - Small: 280px wide, 120px tall
  - Default: 280px wide, 240px tall
  - Large: 308px square (300px min)

### 4. Metrics Content
Statistics display with:
- Multiple stat cards (value + label)
- Seafoam color for values (#8BBF9F)
- Archivo font, bold weight, centered text
- Gray-600 labels (#4B5563)
- Flexible layout (responsive on mobile)

## Size Variants

### Small
- Font size: 14px
- Line height: 16px
- Letter spacing: -0.15px
- Padding: 0 32px 16px 24px
- Icon size: 18px × 18px
- Metric value: 32px font

### Default
- Font size: 16px
- Line height: 20px
- Letter spacing: 0.05px
- Padding: 0 32px 24px 24px
- Icon size: 22px × 22px
- Metric value: 48px font

### Large
- Font size: 18px
- Line height: 22px
- Letter spacing: -0.15px
- Padding: 0 32px 28px 24px
- Icon size: 26px × 26px
- Metric value: 40px font

## Usage Examples

### Basic Text Content
```tsx
import { AccordionBody } from './AccordionBody';

<AccordionBody 
  contentType="text" 
  size="default"
  text="Your text content here"
/>
```

### List Content
```tsx
<AccordionBody 
  contentType="list" 
  size="default"
  listItems={[
    'First item',
    'Second item',
    'Third item',
  ]}
/>
```

### Text with Image
```tsx
<AccordionBody 
  contentType="text-img" 
  size="default"
  text="Your text content here"
  imageSrc="/path/to/image.jpg"
  imageAlt="Description"
/>
```

### Metrics Display
```tsx
<AccordionBody 
  contentType="metrics" 
  size="default"
  metrics={[
    { value: '235,000', label: 'Projects completed' },
    { value: 'On time', label: 'Project status' },
    { value: '3,500', label: 'Unique Users' },
  ]}
/>
```

### With Full Accordion
```tsx
import { Accordion } from '../building-blocks/Accordion';
import { AccordionBody } from './AccordionBody';

const [isOpen, setIsOpen] = useState(false);

<Accordion
  type="simple"
  size="default"
  title="Accordion Title"
  description="Supporting text"
  isOpen={isOpen}
  onToggle={setIsOpen}
>
  <div className="accordion--size-default">
    <AccordionBody 
      contentType="metrics" 
      size="default"
      metrics={[...]}
    />
  </div>
</Accordion>
```

## Design Tokens Used

### Colors
- `--neutral-gray-gray-700: #374151` - Body text
- `--neutral-gray-gray-600: #4B5563` - Metric labels
- `--primary-seafoam-seafoam: #8BBF9F` - Metric values
- `--neutral-gray-gray-300: #D2D5DA` - Image borders
- `#227F1A` - Checkmark icons (green)

### Typography
- `--type-typeface-roboto-flex: "Roboto Flex"` - Body text
- `--type-typeface-archivo: Archivo` - Metric labels
- `--type-weight-bold: 700` - Metric values

### Spacing
- `--spacing-sizing-12px: 12px` - Icon-text gap
- `--spacing-sizing-16px: 16px` - List item gap (small/default)
- `--spacing-sizing-20px: 20px` - List item gap (large)
- `--spacing-sizing-24px: 24px` - Padding
- `--spacing-sizing-32px: 32px` - Padding
- `--spacing-radius-6px: 6px` - Border radius

## Responsive Behavior

### Tablet (≤768px)
- Reduced padding
- Metrics stack vertically
- Image scales to 100% width

### Mobile (≤480px)
- Further reduced padding
- Smaller metric font sizes
- Compressed spacing

## Accessibility Features

- Semantic HTML structure
- Proper ARIA attributes when used with Accordion
- High contrast mode support
- Reduced motion support
- Print-friendly styles
- Keyboard navigation support

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- CSS custom properties (variables) support required

## Integration with Existing Accordion

The body components are designed to work seamlessly with the existing Accordion component:

1. Wrap AccordionBody in a div with size class:
   ```tsx
   <div className="accordion--size-{size}">
     <AccordionBody contentType="..." size="{size}" />
   </div>
   ```

2. Match the size prop between Accordion and AccordionBody

3. Use the onToggle callback to manage open/closed state

## Testing in Storybook

Navigate to:
- **Atoms → Accordion → Body** - Individual component stories
- **Atoms → Accordion → Body Showcase** - Complete integration examples

All 24 variants are demonstrated with interactive controls.

## Future Enhancements

Potential additions:
- Custom list icon support
- Additional content type variants
- Animation options for expand/collapse
- Dark mode support
- Custom color schemes
