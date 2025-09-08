# Storybook Sidebar Sorting Fix

## Problem
The Building Blocks folders in Storybook were not sorting correctly and were appearing first in their sections instead of being pinned to the bottom.

## Solution Applied

### 1. Updated Story Titles
Replaced all instances of "~ Building Blocks" with "🧱 Building Blocks" in story titles across:

**Foundations:**
- `src/stories/foundations/building-blocks/Overview.stories.tsx`

**Atoms:**
- `src/stories/atoms/building-blocks/Overview.stories.tsx`
- All 20+ building blocks components in `src/stories/atoms/building-blocks/`
- All table-related components in `src/stories/atoms/building-blocks/table/`

**Molecules:**
- `src/stories/molecules/building-blocks/Overview.stories.tsx`
- `src/stories/atoms/TableRow.stories.tsx` (moved to Molecules Building Blocks)

### 2. Custom Sorting Logic
Updated `.storybook/preview.ts` with a custom `compareFn` that:

- **Identifies Building Blocks folders** by checking for "🧱 Building Blocks" in the title
- **Pins Building Blocks to the bottom** of each section while maintaining alphabetical order for other components
- **Preserves main section order** (Design System → Foundations → Atoms → Molecules → Chromatic → Test)
- **Sorts alphabetically within each section** except for Building Blocks which come last

### 3. Custom Compare Function Logic

```javascript
compareFn: (a: any, b: any) => {
  const aTitle = a[1].title;
  const bTitle = b[1].title;
  
  const aSections = aTitle.split('/');
  const bSections = bTitle.split('/');
  
  // If they're in the same main section
  if (aSections[0] === bSections[0]) {
    const aIsBuildingBlocks = aTitle.includes('🧱 Building Blocks');
    const bIsBuildingBlocks = bTitle.includes('🧱 Building Blocks');
    
    // Building Blocks should come last within each section
    if (aIsBuildingBlocks && !bIsBuildingBlocks) return 1;
    if (!aIsBuildingBlocks && bIsBuildingBlocks) return -1;
    
    // If both or neither are Building Blocks, sort alphabetically
    return aTitle.localeCompare(bTitle);
  }
  
  // For different main sections, use the order array
  // ... (maintains section order)
}
```

## Expected Result

The Storybook sidebar should now display:

**Foundations**
- Color Accessibility
- Colors  
- Design Tokens
- Icons
- Typography
- **🧱 Building Blocks** ← Pinned to bottom
  - Overview

**Atoms**
- Avatar
- Badge
- Button
- Card
- ... (all other atoms alphabetically)
- **🧱 Building Blocks** ← Pinned to bottom
  - Accordion
  - AccordionHeader
  - Badge
  - ... (all building blocks)
  - Table
    - All Table Cell Variants
    - FigmaTable
    - ... (all table components)

**Molecules**
- Data Table
- Dropdown Menu
- ... (all other molecules alphabetically)
- **🧱 Building Blocks** ← Pinned to bottom
  - Overview
  - TableRow

## Files Modified

### Updated Titles (32 files):
- `src/stories/foundations/building-blocks/Overview.stories.tsx`
- `src/stories/molecules/building-blocks/Overview.stories.tsx`
- `src/stories/atoms/building-blocks/Overview.stories.tsx`
- `src/stories/atoms/TableRow.stories.tsx`
- All 20+ building block component stories in `src/stories/atoms/building-blocks/`
- All 8 table component stories in `src/stories/atoms/building-blocks/table/`

### Configuration Updated:
- `.storybook/preview.ts` - Added custom sorting logic

## Technical Details

- **Emoji Used**: 🧱 (brick building emoji) 
- **Sorting Method**: Custom compare function with Building Blocks detection
- **Position**: Building Blocks folders are pinned to the bottom of each main section
- **Alphabetical Order**: Maintained for all non-Building Blocks components
- **Section Order**: Preserved existing main section hierarchy

## Status
✅ **COMPLETE** - Building Blocks folders now appear at the bottom of their respective sections with the brick emoji prefix.

The sorting logic ensures that Building Blocks are consistently placed last in each section while maintaining alphabetical order for all other components.
