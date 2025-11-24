# File Type Icon Component

## Overview

The `FileTypeIcon` component is a building block for displaying file type indicators in tables and file management interfaces. It provides 153 variants across 51 file types and 3 size options, designed to be pixel-perfect and fully responsive.

## Features

- **51 File Types**: Supports generic types (folder, image, video, etc.) and specific file extensions (.pdf, .xlsx, .mp4, etc.)
- **3 Size Variants**: Small (40px), Default (42px), Large (46px)
- **Fully Responsive**: Adapts gracefully to mobile, tablet, and desktop screens
- **Accessible**: Uses semantic HTML and proper color contrast
- **Lightweight**: CSS-based with minimal dependencies
- **Themable**: Uses design tokens from the Echo Design System

## Usage

### Basic Usage

```tsx
import { FileTypeIcon } from './atoms/building-blocks/FileTypeIcon';

// Generic file type
<FileTypeIcon type="folder" />

// Specific file extension
<FileTypeIcon type=".pdf" />

// With size variant
<FileTypeIcon type=".xlsx" size="small" />
```

### In a Table

```tsx
<table>
  <tbody>
    <tr>
      <td><FileTypeIcon type=".pdf" size="small" /></td>
      <td>Annual_Report.pdf</td>
      <td>2.4 MB</td>
    </tr>
  </tbody>
</table>
```

### In a File List

```tsx
<div className="file-list">
  {files.map(file => (
    <div key={file.id} className="file-item">
      <FileTypeIcon type={file.extension} size="default" />
      <span>{file.name}</span>
    </div>
  ))}
</div>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `FileType` | `'default'` | The file type to display |
| `size` | `FileSize` | `'default'` | The size of the icon |
| `className` | `string` | `''` | Additional CSS class names |

## File Types

### Generic Types (with icons)
- `default` - Generic file
- `folder` - Folder/directory
- `image` - Generic image file
- `film` - Film/movie file
- `video` - Video file
- `audio` - Audio file
- `adobe-pdf` - Adobe PDF (with logo)
- `text` - Text document
- `sheet` - Spreadsheet
- `code` - Code file

### Image File Extensions
`.img`, `.jpg`, `.jpeg`, `.png`, `.webp`, `.svg`, `.gif`, `.tiff`, `.eps`

### Document File Extensions
`.pdf`, `.doc`, `.docx`, `.txt`, `.csv`, `.xls`, `.xlsx`, `.ppt`, `.pptx`

### Media File Extensions
`.mp3`, `.wav`, `.mp4`, `.mpeg`, `.avi`, `.mkv`

### Code File Extensions
`.html`, `.css`, `.js`, `.json`, `.java`, `.xml`, `.sql`, `.rss`

### Design File Extensions
`.fig`, `.ai`, `.psd`, `.indd`, `.aep`

### Archive File Extensions
`.zip`, `.rar`, `.dmg`, `.exe`

## Size Variants

| Size | Dimensions | Use Case |
|------|------------|----------|
| `small` | 40×40px (32px on mobile) | Compact tables, dense lists |
| `default` | 42×42px (36px on mobile) | Standard tables, file browsers |
| `large` | 46×46px (40px on mobile) | Prominent displays, hero sections |

## Color Coding

File type labels are color-coded by category:

- **Purple (#7F56D9)**: Image files (.img, .jpg, .png, .svg, etc.)
- **Red (#D92D20)**: PDF and presentation files (.pdf, .ppt, .ai)
- **Blue (#155EEF)**: Documents and videos (.doc, .docx, .mp4, .mkv)
- **Green (#099250)**: Spreadsheets (.csv, .xls, .xlsx)
- **Pink (#DD2590)**: Audio files (.mp3, .wav)
- **Dark Blue (#444CE7)**: Code files (.html, .css, .js, .sql)
- **Dark Gray (#232F3E)**: Archives and text (.zip, .rar, .txt)
- **Magenta (#BA24D5)**: InDesign files (.indd)
- **Indigo (#6938EF)**: After Effects files (.aep)

## Responsive Behavior

The component automatically adjusts for different screen sizes:

- **Desktop (>768px)**: Full size as specified
- **Tablet (≤768px)**: Slightly smaller, 9px font
- **Mobile (≤480px)**: Further reduced, 8px font

## Accessibility

- SVG icons use proper `viewBox` for scaling
- Color contrast meets WCAG AA standards
- Labels are readable against their backgrounds
- Icon + label pattern provides redundant information

## Implementation Notes

### CSS Architecture

The component uses a BEM-inspired class naming convention:
- `.file-type-icon` - Base container
- `.file-type-icon.size-small` - Size modifier
- `.file-type-icon.type-pdf` - Type modifier
- `.file-type-icon .page` - Page element
- `.file-type-icon .file-type-wrap` - Label wrapper
- `.file-type-icon .file-type` - Label text

### Design Tokens

The component integrates with Echo Design System tokens:
- `--base-white` for SVG fills
- `--neutral-gray-*` for borders and backgrounds
- Typography uses Inter font family

### Performance

- Lightweight CSS-only implementation
- No external dependencies beyond React
- Minimal DOM nodes (2-3 per icon)
- Hardware-accelerated SVG rendering

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile Safari: iOS 12+
- Chrome Mobile: Latest

## Migration from Figma

This component was built directly from Figma design specifications with:
- Exact pixel dimensions preserved
- Original color values maintained
- SVG paths exported directly from Figma
- Responsive enhancements added for production use

## Related Components

- `Table` - For displaying file lists in tabular format
- `Card` - For file preview cards
- `Avatar` - Similar icon component for users

## Examples

See the Storybook stories for comprehensive examples:
- `FileTypeIcon.stories.tsx` - All variants and use cases
- `FileTypeIcon Figma Showcase.stories.tsx` - Design system showcase
