# Image Accordion Implementation - Figma Design Match ✅

## 🎯 Implementation Complete

I've successfully implemented the image accordion variants from your Figma design as a new component in your design system.

## 📁 **Files Created**

### 1. **ImageAccordion.tsx**
- **Location**: `src/stories/atoms/building-blocks/ImageAccordion.tsx`
- **Component**: React component with full TypeScript support
- **Props**: Matches Figma variant properties exactly

### 2. **imageAccordion.css**
- **Location**: `src/stories/atoms/building-blocks/imageAccordion.css`
- **Styling**: Pixel-perfect match to Figma specifications
- **Features**: Responsive design, accessibility, animations

### 3. **ImageAccordion.stories.tsx**
- **Location**: `src/stories/atoms/building-blocks/ImageAccordion.stories.tsx`
- **Stories**: Comprehensive showcase of all variants and use cases

### 4. **Design Tokens Updated**
- **Added**: `--spacing-radius-48px: 48px` to `tokens.css`
- **Added**: Component to `index.ts` exports

## 🎨 **Figma Variants Implemented**

### **Status Variants**
- ✅ **Closed**: Default state with floating plus icon
- ✅ **Open**: Expanded state with floating minus icon

### **Type Variants**
- ✅ **Image**: Image accordion type specification

### **Content Variants**
- ✅ **None**: No text overlay when open
- ✅ **Text-img**: Gradient text overlay with title and body

### **Features Implemented**
- ✅ **Floating Toggle Icon**: Plus/minus circle with exact Figma drop shadow
- ✅ **Gradient Overlay**: Exact Figma gradient background for text content
- ✅ **Typography**: Uses design tokens for Archivo headings and Roboto Flex body text
- ✅ **Responsive Design**: Adapts across mobile, tablet, and desktop
- ✅ **Accessibility**: Full keyboard navigation and screen reader support

## 🎛️ **Component API**

```typescript
interface ImageAccordionProps {
  status?: 'open' | 'closed';           // Controls open/closed state
  content?: 'none' | 'text';            // Controls text overlay
  icon?: boolean;                       // Show/hide toggle icon
  title?: string;                       // Overlay title text
  body?: string;                        // Overlay body text
  backgroundImage?: string;             // Background image URL
  imageAlt?: string;                    // Alt text for accessibility
  width?: number;                       // Component width (px)
  height?: number;                      // Component height (px)
  isOpen?: boolean;                     // Controlled state
  onToggle?: (isOpen: boolean) => void; // State change callback
  className?: string;                   // Custom CSS classes
}
```

## 📖 **Available Stories**

### **Exact Figma Variants**
- `ClosedNoContent` - Matches Figma closed state
- `OpenNoContent` - Matches Figma open state without text
- `OpenWithText` - Matches Figma open state with text overlay

### **Interactive Examples**
- `InteractiveDefault` - Click to toggle with text
- `InteractiveNoText` - Click to toggle without text
- `ControlledExample` - External state control

### **Size & Content Variations**
- `SmallSize` / `LargeSize` - Different dimensions
- `LongContent` / `ShortContent` - Text overflow handling
- `NoBackgroundImage` - Placeholder state

### **Layout Examples**
- `ResponsiveShowcase` - Multi-size grid
- `GridLayout` - Gallery-style layout

## 🎯 **Design System Integration**

### **Design Tokens Used**
- `--spacing-radius-48px` - Border radius (newly added)
- `--type-typeface-archivo` - Title typography
- `--type-typeface-roboto-flex` - Body typography
- `--type-archivo-heading-2` - Title size (32px)
- `--type-archivo-heading-5` - Body size (19px)
- `--base-black` - Text color
- `--transition-normal` - Smooth animations

### **Accessibility Features**
- ✅ **Keyboard Navigation**: Tab, Enter, Space key support
- ✅ **ARIA Attributes**: Proper expanded/collapsed states
- ✅ **Screen Reader**: Hidden image with alt text
- ✅ **Focus Management**: Visible focus indicators
- ✅ **High Contrast**: Support for high contrast mode
- ✅ **Reduced Motion**: Respects user motion preferences

### **Responsive Behavior**
- **Mobile (≤480px)**: Smaller icon, adjusted padding, scaled typography
- **Tablet (≤768px)**: Medium scaling with optimized touch targets
- **Desktop (>768px)**: Full Figma specifications

## 🚀 **Usage Examples**

### **Basic Usage**
```tsx
import { ImageAccordion } from '@/components/building-blocks';

<ImageAccordion
  backgroundImage="/path/to/image.jpg"
  status="closed"
  content="text"
  title="Beautiful Landscape"
  body="Discover amazing natural scenery and wildlife."
/>
```

### **Controlled State**
```tsx
const [isOpen, setIsOpen] = useState(false);

<ImageAccordion
  backgroundImage="/path/to/image.jpg"
  isOpen={isOpen}
  onToggle={setIsOpen}
  content="text"
  title="Interactive Card"
  body="Click to toggle this accordion."
/>
```

### **Custom Dimensions**
```tsx
<ImageAccordion
  backgroundImage="/path/to/image.jpg"
  width={800}
  height={600}
  status="open"
  content="text"
  title="Large Display"
  body="Perfect for hero sections and feature showcases."
/>
```

## 🎉 **Ready to Use**

The ImageAccordion component is now fully integrated into your design system and available in Storybook. You can:

1. **View in Storybook**: Navigate to "Design System > Atoms > Building Blocks > Image Accordion"
2. **Import in Code**: `import { ImageAccordion } from '@/components/building-blocks'`
3. **Customize**: Use the extensive props API for your specific needs
4. **Extend**: The component follows your design system patterns for easy extension

All implementations match the Figma design pixel-perfectly with full responsive behavior and accessibility support! 🎨✨
