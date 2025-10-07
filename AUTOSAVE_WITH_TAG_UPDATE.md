# AutoSaveWithTag Component - Figma Design Update

## Overview

The `AutoSaveWithTag` component has been successfully updated to match the exact Figma design specifications for `button/auto-save/w-tag`. This component displays an auto-save button with various status states and a timestamp tag below.

## Updated Files

### Component Files
- **`AutoSaveWithTag.tsx`** - Updated component structure to match Figma variants
- **`autoSaveWithTag.css`** - Complete CSS rewrite for pixel-perfect Figma match
- **`AutoSaveWithTag.stories.tsx`** - Stories already in place

## Component States (Figma Variants)

### 1. Default State
- **Label**: "Save draft"
- **Icon**: Floppy disk (save icon)
- **Border**: 1px solid sky blue (#0BA7EA)
- **Background**: Sky blue 100 (#D6F0FB)
- **Width**: 155px
- **Padding**: 8px 16px

### 2. Auto-saving State
- **Label**: "Auto-saving"
- **Icon**: Loading spinner
- **Border**: 1px solid sky blue (#0BA7EA)
- **Background**: Sky blue 100 (#D6F0FB)
- **Width**: 155px
- **Padding**: 8px 24px

### 3. Error State
- **Label**: "Unable to save"
- **Icon**: X/close icon
- **Border**: 1px solid red (#CE2031)
- **Background**: Red light (#FBEBEB)
- **Width**: 155px
- **Padding**: 8px 24px

### 4. Saved State
- **Label**: "Draft saved"
- **Icon**: Check/checkmark icon
- **Border**: 1px solid green (#227F1A)
- **Background**: Green light (#F2FFF1)
- **Width**: 155px
- **Padding**: 8px 24px

### 5. Saving State
- **Label**: "Saving draft"
- **Icon**: Loading spinner
- **Border**: 2px solid sky blue (#0BA7EA)
- **Background**: Sky blue 100 (#D6F0FB)
- **Box Shadow**: 2px 2px 0 0 #6171DF
- **Width**: 155px
- **Padding**: 8px 24px

### 6. Disabled State
- **Label**: "Save draft"
- **Icon**: Floppy disk (save icon)
- **Border**: 1px solid gray 200 (#E5E7EB)
- **Background**: Gray 50 (#F9FAFB)
- **Width**: 155px
- **Padding**: 8px 24px

## Timestamp Tag

All states include a timestamp tag below the button:

### Tag Styling
- **Padding**: 4px 12px
- **Border**: 1px solid gray 300 (#D2D5DA)
- **Background**: Gray 100 (#F3F4F6)
- **Border Radius**: Full (99999px)

### Tag Content
- **Label**: "Saved" (bold, 14px Archivo, weight 700)
- **Timestamp**: "00:00 AM on 00 JAN 2001" (light, 14px Archivo, weight 300)
- **Color**: Gray 800 (#1F2937)

## Design Tokens Used

### Spacing & Sizing
```css
--spacing-sizing-4px: 4px
--spacing-sizing-8px: 8px
--spacing-sizing-12px: 12px
--spacing-sizing-16px: 16px
--spacing-sizing-24px: 24px
```

### Border Radius
```css
--spacing-radius-99999px: 99999px  /* Full rounded */
```

### Border Stroke
```css
--spacing-stroke-1px: 1px
--spacing-stroke-2px: 2px
```

### Colors

#### Sky Blue (Primary)
```css
--primary-sky-blue-sky-blue: #0BA7EA
--primary-sky-blue-light-alt: #D6F0FB
--primary-sky-blue-dark-sky-blue: #04435E
```

#### Status Colors
```css
--status-red: #CE2031
--status-red-light: #FBEBEB
--status-green-light: #F2FFF1
--status-dark-green: #227F1A
```

#### Blue Accent
```css
--primary-blue-blue-400: #6171DF
```

#### Neutral Grays
```css
--neutral-gray-gray-50: #F9FAFB
--neutral-gray-gray-100: #F3F4F6
--neutral-gray-gray-200: #E5E7EB
--neutral-gray-gray-300: #D2D5DA
--neutral-gray-gray-800: #1F2937
```

### Typography
```css
--type-typeface-archivo: Archivo
--type-archivo-label: 16px
--type-archivo-label-sm: 14px
--type-weight-light: 300
--type-weight-bold: 700
--type-line-height-label: 20px
--type-line-height-label-sm: 16px
--type-letter-spacing-archivo-label: 0.15px
--type-letter-spacing-archivo-label-sm: 0.15px
```

## Usage Examples

### Basic Usage

```tsx
import { AutoSaveWithTag } from './AutoSaveWithTag';

// Default state
<AutoSaveWithTag
  status="default"
  timestamp="00:00 AM on 00 JAN 2001"
  onClick={() => handleSave()}
/>

// Saving state
<AutoSaveWithTag
  status="saving"
  timestamp="2:30 PM on 15 MAR 2024"
/>

// Error state
<AutoSaveWithTag
  status="error-saving"
  timestamp="2:30 PM on 15 MAR 2024"
/>

// Saved state
<AutoSaveWithTag
  status="saved"
  timestamp="2:30 PM on 15 MAR 2024"
/>
```

### Real-Time Timestamp

```tsx
const [saveStatus, setSaveStatus] = useState('default');
const [lastSave, setLastSave] = useState('00:00 AM on 00 JAN 2001');

const handleSave = () => {
  setSaveStatus('saving');
  
  // Simulate save
  setTimeout(() => {
    const now = new Date();
    const timestamp = now.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).replace(',', ' on').toUpperCase();
    
    setLastSave(timestamp);
    setSaveStatus('saved');
    
    // Reset to default after 3 seconds
    setTimeout(() => setSaveStatus('default'), 3000);
  }, 1500);
};

<AutoSaveWithTag
  status={saveStatus}
  timestamp={lastSave}
  onClick={handleSave}
/>
```

### Custom Labels

```tsx
<AutoSaveWithTag
  status="saved"
  timestamp="Just now"
  timestampLabel="Last saved"
/>
```

## Key Differences from Previous Version

### Button Styling
1. **Width**: Changed from 160px to 155px (Figma exact)
2. **Padding**: Differentiated between default (8px 16px) and other states (8px 24px)
3. **Border**: Now properly handles 1px vs 2px based on state
4. **Shadow**: Added box-shadow to "saving" state only

### CSS Architecture
1. **BEM Methodology**: Updated to use proper BEM naming (`autosave-with-tag__button`, `autosave-with-tag__tag`)
2. **State Variants**: Each state now has dedicated CSS rules
3. **Token Usage**: All hardcoded values replaced with design tokens
4. **Button Wrapper**: Button styling moved to parent container for cleaner structure

### Responsive Behavior
- **Tablet (≤768px)**: Reduced width to 140px, adjusted padding
- **Mobile (≤480px)**: Further reduced to 120px, smaller fonts

## Accessibility Features

### Keyboard Navigation
- Full keyboard support via underlying AutoSave button
- Tab navigation between elements
- Enter/Space to trigger save

### Visual Accessibility
- High contrast mode support (increased border width)
- Clear focus indicators
- Proper color contrast ratios
- Reduced motion support

### Screen Readers
- Semantic HTML structure
- ARIA attributes from AutoSave component
- Clear label text
- Status updates announced

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support with responsive adjustments

## Testing

View all states in Storybook:

```bash
npm run storybook
```

Navigate to: `Atoms/AutoSaveWithTag`

### Available Stories
- **Default** - Basic default state
- **AutoSaving** - Auto-saving in progress
- **ErrorSaving** - Error occurred
- **Saved** - Successfully saved
- **Saving** - Active save with shadow
- **Disabled** - Disabled state
- **CustomTimestamp** - Custom timestamp format
- **RecentSave** - "Just now" timestamp
- **FigmaShowcase** - Complete Figma implementation
- **InteractiveDemo** - Interactive save simulation
- **AllStates** - Side-by-side comparison

## Implementation Notes

1. **Icon Handling**: Icons come from the AutoSave component, styled with 60% opacity
2. **Button Clicks**: Only "default" state is clickable, other states are display-only
3. **State Transitions**: Component is stateless, parent controls state changes
4. **Timestamp Format**: Customizable via props, default matches Figma
5. **Width Constraints**: Fixed width ensures consistent layout across all states

## Future Enhancements

Potential improvements:

1. **Animation**: Smooth transitions between states
2. **Tooltip**: Detailed save information on hover
3. **Progress**: Save progress indicator
4. **Retry**: Retry button on error state
5. **History**: View save history
6. **Undo**: Quick undo last save

## Related Components

- **AutoSave** - Base auto-save button (used internally)
- **Tag** - Generic tag component
- **Label** - Text label component

## Support

For issues or questions:
- Check Storybook documentation
- Review Figma design specs
- Refer to Echo Design System guidelines
- Contact design system team
