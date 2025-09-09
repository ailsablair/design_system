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

// Sample image URL for demos
const sampleImageUrl = 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80';

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
        story: 'Interactive example - click to toggle between closed and open states with text overlay.',
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
    backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
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
        backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        status="open"
        content="text"
        title="Tablet Size"
        body="Perfect for tablet devices with balanced proportions."
      />
      <ImageAccordion
        width={500}
        height={350}
        backgroundImage="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        status="open"
        content="text"
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
          content="text"
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
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
          title: 'Mountain Peaks',
          body: 'Experience breathtaking views from the highest mountain summits.',
          status: 'open' as const
        },
        {
          image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
          title: 'Ocean Waves',
          body: 'Feel the power and tranquility of endless ocean horizons.',
          status: 'closed' as const
        },
        {
          image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1574&q=80',
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
          content="text"
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
