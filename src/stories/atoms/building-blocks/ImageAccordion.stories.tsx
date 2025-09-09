import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ImageAccordion } from './ImageAccordion';

const meta: Meta<typeof ImageAccordion> = {
  title: 'Design System/Atoms/Building Blocks/Image Accordion',
  component: ImageAccordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Image Accordion - Figma Implementation

A specialized accordion component designed for image overlays with floating toggle icons.

## Features

- **Floating Toggle Icon**: Plus/minus circle icon with drop shadow positioned at bottom left
- **Gradient Text Overlay**: Optional text content with gradient background when expanded  
- **Background Image Support**: Responsive background images with placeholder fallback
- **Accessibility**: Full keyboard navigation and screen reader support
- **Responsive Design**: Adapts gracefully across all screen sizes

## Variants

- **Status**: Controls open/closed state (\`open\` | \`closed\`)
- **Type**: Component type specification (\`image\`)
- **Content**: Controls text overlay visibility (\`none\` | \`text-img\`)
- **Icon**: Toggle icon visibility (boolean)

All implementations match the Figma specifications pixel-perfectly with proper responsive behavior.
        `,
      },
    },
  },
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['open', 'closed'],
      description: 'Controls the open/closed state of the accordion',
    },
    type: {
      control: { type: 'select' },
      options: ['image'],
      description: 'Type variant - matches Figma type property',
    },
    content: {
      control: { type: 'select' },
      options: ['none', 'text-img'],
      description: 'Controls whether text overlay is shown when open',
    },
    icon: {
      control: { type: 'boolean' },
      description: 'Whether to show the floating toggle icon',
    },
    title: {
      control: { type: 'text' },
      description: 'Title text for the overlay content',
    },
    body: {
      control: { type: 'text' },
      description: 'Body text for the overlay content',
    },
    backgroundImage: {
      control: { type: 'text' },
      description: 'URL for the background image',
    },
    width: {
      control: { type: 'number', min: 200, max: 1200, step: 50 },
      description: 'Width of the component in pixels',
    },
    height: {
      control: { type: 'number', min: 150, max: 800, step: 50 },
      description: 'Height of the component in pixels',
    },
  },
  args: {
    onToggle: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof ImageAccordion>;

// Sample image URL for demos - using data URL for Chromatic reliability
const sampleImageUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNGY0NmU1IiBzdG9wLW9wYWNpdHk9IjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM3YzNhZWQiIHN0b3Atb3BhY2l0eT0iMSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSJ1cmwoI2dyYWQpIi8+PHRleHQgeD0iMzAwIiB5PSIyMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIj5TYW1wbGUgSW1hZ2U8L3RleHQ+PC9zdmc+';

// Default props for consistency
const defaultProps = {
  width: 600,
  height: 500,
  backgroundImage: sampleImageUrl,
  title: 'This is a title for an image card',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Nulla rutrum ac tortor et lacinia.',
};

// ===== FIGMA EXACT VARIANTS ===== 

export const ClosedNoContent: Story = {
  args: {
    ...defaultProps,
    status: 'closed',
    type: 'image',
    content: 'none',
    icon: true,
  },
};

export const OpenNoContent: Story = {
  args: {
    ...defaultProps,
    status: 'open',
    type: 'image',
    content: 'none',
    icon: true,
  },
};

export const OpenWithTextImg: Story = {
  args: {
    ...defaultProps,
    status: 'open',
    type: 'image',
    content: 'text-img',
    icon: true,
  },
};

// ===== INTERACTIVE EXAMPLES =====

export const InteractiveDefault: Story = {
  args: {
    ...defaultProps,
    status: 'closed',
    type: 'image',
    content: 'text-img',
    icon: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example - click to toggle between closed and open states with text-img overlay.',
      },
    },
  },
};

export const InteractiveNoText: Story = {
  args: {
    ...defaultProps,
    status: 'closed',
    type: 'image',
    content: 'none',
    icon: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example without text overlay - shows only the toggle icon behavior.',
      },
    },
  },
};

// ===== SIZE VARIANTS =====

export const SmallSize: Story = {
  args: {
    ...defaultProps,
    width: 300,
    height: 200,
    status: 'open',
    type: 'image',
    content: 'text-img',
    title: 'Small Image Card',
    body: 'Compact version with responsive text sizing.',
  },
};

export const LargeSize: Story = {
  args: {
    ...defaultProps,
    width: 800,
    height: 600,
    status: 'open',
    type: 'image',
    content: 'text-img',
    title: 'Large Image Card Display',
    body: 'Expanded version showcasing the component at larger dimensions with more detailed content and enhanced visual impact.',
  },
};

// ===== CONTENT VARIATIONS =====

export const LongContent: Story = {
  args: {
    ...defaultProps,
    status: 'open',
    type: 'image',
    content: 'text-img',
    title: 'This is a much longer title that demonstrates text wrapping behavior in the overlay',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. This text demonstrates how longer content is handled with proper overflow and text truncation.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with longer text content to show overflow handling and text truncation.',
      },
    },
  },
};

export const ShortContent: Story = {
  args: {
    ...defaultProps,
    status: 'open',
    type: 'image',
    content: 'text-img',
    title: 'Brief Title',
    body: 'Short and concise description.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with minimal text content.',
      },
    },
  },
};

// ===== IMAGE VARIATIONS =====

export const NoBackgroundImage: Story = {
  args: {
    ...defaultProps,
    backgroundImage: undefined,
    status: 'open',
    type: 'image',
    content: 'text-img',
    title: 'Placeholder Example',
    body: 'This shows the component behavior when no background image is provided.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing the placeholder state when no background image is provided.',
      },
    },
  },
};

export const DifferentImage: Story = {
  args: {
    ...defaultProps,
    backgroundImage: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJtb3VudGFpbiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzMzNDE1NSIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNjY3ZWFhIiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0idXJsKCNtb3VudGFpbikiLz48cGF0aCBkPSJNMCwyMDBMMTAwLDE1MEwyMDAsMTAwTDMwMCwxMjBMNDAwLDgwTDUwMCwxMDBMNjAwLDEyMFY0MDBIMFY0MDBaIiBmaWxsPSIjMmQzNzQ4IiBvcGFjaXR5PSIwLjciLz48dGV4dCB4PSIzMDAiIHk9IjMyMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjIwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TW91bnRhaW4gTGFuZHNjYXBlPC90ZXh0Pjwvc3ZnPg==',
    status: 'open',
    type: 'image',
    content: 'text-img',
    title: 'Mountain Landscape',
    body: 'Beautiful mountain scenery with dramatic lighting and atmospheric conditions.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with a different background image showing landscape photography.',
      },
    },
  },
};

// ===== STATES AND ACCESSIBILITY =====

export const WithoutIcon: Story = {
  args: {
    ...defaultProps,
    status: 'open',
    type: 'image',
    content: 'text-img',
    icon: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with the toggle icon disabled - useful for display-only scenarios.',
      },
    },
  },
};

export const AccessibilityExample: Story = {
  args: {
    ...defaultProps,
    status: 'closed',
    type: 'image',
    content: 'text-img',
    imageAlt: 'Mountain forest landscape with morning mist and sunlight filtering through trees',
    title: 'Accessible Image Card Example',
    body: 'This example demonstrates proper accessibility features including alt text, keyboard navigation, and screen reader support.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Example highlighting accessibility features - includes proper alt text, keyboard navigation (Tab, Enter, Space), and ARIA attributes.',
      },
    },
  },
};

// ===== RESPONSIVE SHOWCASE =====

export const ResponsiveShowcase: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px',
      width: '100%',
      padding: '16px'
    }}>
      <ImageAccordion
        width={300}
        height={200}
        backgroundImage={sampleImageUrl}
        status="open"
        type="image"
        content="text-img"
        title="Mobile Size"
        body="Optimized for mobile screens with responsive text."
      />
      <ImageAccordion
        width={400}
        height={300}
        backgroundImage="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJ0YWJsZXQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNlZDY0NGMiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2YzOWMxMiIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjdGFibGV0KSIvPjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCI+VGFibGV0IFNpemU8L3RleHQ+PC9zdmc+"
        status="open"
        type="image"
        content="text-img"
        title="Tablet Size"
        body="Perfect for tablet devices with balanced proportions."
      />
      <ImageAccordion
        width={500}
        height={350}
        backgroundImage="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjM1MCIgdmlld0JveD0iMCAwIDUwMCAzNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJkZXNrdG9wIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDZiNmQ0IiBzdG9wLW9wYWNpdHk9IjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwODkxYWMiIHN0b3Atb3BhY2l0eT0iMSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iMzUwIiBmaWxsPSJ1cmwoI2Rlc2t0b3ApIi8+PHRleHQgeD0iMjUwIiB5PSIxNzUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIj5EZXNrdG9wIFNpemU8L3RleHQ+PC9zdmc+"
        status="open"
        type="image"
        content="text-img"
        title="Desktop Size"
        body="Ideal for desktop displays with full detail visibility."
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Responsive showcase demonstrating the component at different sizes, simulating mobile, tablet, and desktop layouts.',
      },
    },
  },
};

// ===== CONTROLLED VS UNCONTROLLED =====

export const ControlledExample: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#3B82F6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600'
            }}
          >
            {isOpen ? 'Close' : 'Open'} Accordion
          </button>
          <span style={{ fontSize: '14px', color: '#6B7280' }}>
            External control: {isOpen ? 'Open' : 'Closed'}
          </span>
        </div>
        
        <ImageAccordion
          {...defaultProps}
          isOpen={isOpen}
          onToggle={setIsOpen}
          type="image"
          content="text-img"
          title="Controlled Image Accordion"
          body="This accordion is controlled by external state and can be toggled using the button above or by clicking the accordion itself."
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing controlled component behavior with external state management.',
      },
    },
  },
};

// ===== GRID LAYOUT EXAMPLE =====

export const GridLayout: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '32px',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {[
        {
          image: sampleImageUrl,
          title: 'Forest Adventure',
          body: 'Explore pristine wilderness and discover hidden trails through ancient forests.',
          status: 'closed' as const
        },
        {
          image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDM1MCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJtb3VudGFpbnMiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM1NzU3ODMiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzg5N2FhNyIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjM1MCIgaGVpZ2h0PSIyNTAiIGZpbGw9InVybCgjbW91bnRhaW5zKSIvPjxwYXRoIGQ9Ik0wLDE1MEw3MCwxMDBMMTQwLDgwTDIxMCwxMTBMMjgwLDkwTDM1MCwxMjBWMjUwSDBWMjUwWiIgZmlsbD0iIzQ3NDc2NiIgb3BhY2l0eT0iMC44Ii8+PHRleHQgeD0iMTc1IiB5PSIyMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1vdW50YWluIFBlYWtzPC90ZXh0Pjwvc3ZnPg==',
          title: 'Mountain Peaks',
          body: 'Experience breathtaking views from the highest mountain summits.',
          status: 'open' as const
        },
        {
          image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDM1MCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJvY2VhbiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzA5NGE2OCIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTU2MDNiIiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMzUwIiBoZWlnaHQ9IjI1MCIgZmlsbD0idXJsKCNvY2VhbikiLz48cGF0aCBkPSJNMCwxODBDNzAsMTcwIDE0MCwxNjAgMjEwLDE3NUMyODAsMTkwIDM1MCwxODUgMzUwLDE4NVYyNTBIMFYxODBaIiBmaWxsPSIjMGQ0ZjVlIiBvcGFjaXR5PSIwLjciLz48dGV4dCB4PSIxNzUiIHk9IjEyNSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+T2NlYW4gV2F2ZXM8L3RleHQ+PC9zdmc+',
          title: 'Ocean Waves',
          body: 'Feel the power and tranquility of endless ocean horizons.',
          status: 'closed' as const
        },
        {
          image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDM1MCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJkZXNlcnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmNTllNDEiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2YzNzkxOSIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjM1MCIgaGVpZ2h0PSIyNTAiIGZpbGw9InVybCgjZGVzZXJ0KSIvPjxjaXJjbGUgY3g9IjI4MCIgY3k9IjcwIiByPSI0MCIgZmlsbD0iI2ZiYjk0NiIgb3BhY2l0eT0iMC44Ii8+PHBhdGggZD0iTTAsMTgwUTg3LDE3MiAxNzUsMTgwVDM1MCwxODBWMjUwSDBWMTgwWiIgZmlsbD0iI2VhNzMxNyIgb3BhY2l0eT0iMC42Ii8+PHRleHQgeD0iMTc1IiB5PSIyMTAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkRlc2VydCBTdW5zZXQ8L3RleHQ+PC9zdmc+',
          title: 'Desert Sunset',
          body: 'Witness the magical colors of sunset painting the desert landscape.',
          status: 'open' as const
        }
      ].map((item, index) => (
        <ImageAccordion
          key={index}
          width={350}
          height={250}
          backgroundImage={item.image}
          status={item.status}
          type="image"
          content="text-img"
          title={item.title}
          body={item.body}
        />
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Grid layout example showing multiple image accordions in a responsive gallery format.',
      },
    },
  },
};
