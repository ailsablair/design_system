import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Atoms/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Accordion Component

A comprehensive accordion component implementing the exact Figma design specifications with multiple variants and states.

## Features

### Types
- **Contained**: Complete accordion with full border radius (standalone use)
- **Top**: Top section of accordion group with top rounded corners only
- **Middle**: Middle section of accordion group with no border radius
- **Bottom**: Bottom section of accordion group with bottom rounded corners only
- **Simple**: Basic accordion with optional icon
- **Decorative**: Icon with decorative frame and rounded background
- **Decorative Plus**: Same as decorative but uses plus/minus icons instead of chevrons
- **Number**: Numbered accordion items with large colored numbers
- **Label**: Accordion with label/tag component above title

### States & Variants
- **Contained**: Has border and background (default)
- **Uncontained**: No border, minimal styling
- **Sizes**: Small, Default, Large with appropriate scaling
- **Icons**: Chevron (default) or Plus/Minus
- **Open/Closed**: Expandable content with smooth animations

### Responsive Design
- Fully responsive across all screen sizes
- Touch-friendly interactive areas
- Optimized typography scaling

### Accessibility
- Keyboard navigation support
- Screen reader compatible
- Focus management
- ARIA attributes for accordion semantics

## Usage

Perfect for FAQs, product information, settings panels, help documentation, and any interface requiring collapsible content sections.
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['contained', 'top', 'middle', 'bottom', 'simple', 'decorative', 'decorative-plus', 'number', 'label'],
      description: 'Type of accordion - includes Figma position variants (contained, top, middle, bottom)',
    },
    state: {
      control: 'select',
      options: ['default', 'open'],
      description: 'Initial open/closed state',
    },
    contained: {
      control: 'boolean',
      description: 'Whether accordion has contained styling with borders',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size variant',
    },
    openIcon: {
      control: 'select',
      options: ['chevron', 'plus'],
      description: 'Icon type for open/close indicator',
    },
    contentType: {
      control: 'select',
      options: ['text', 'list', 'text-img', 'metrics'],
      description: 'Content type determining layout and styling of accordion content',
    },
    title: {
      control: 'text',
      description: 'Title text',
    },
    content: {
      control: 'text',
      description: 'Content text when expanded (for text and text-img types)',
    },
    showIcon: {
      control: 'boolean',
      description: 'Whether to show icon (for simple type)',
    },
    number: {
      control: 'text',
      description: 'Number to display (for number type)',
    },
  },
  args: {
    onToggle: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// Default label component for label type
const SampleLabel = () => (
  <div style={{
    display: 'flex',
    padding: '2px 6px',
    borderRadius: '99999px',
    border: '1px solid #54C1F0',
    background: '#0BA7EA',
    alignItems: 'center',
    gap: '4px',
    width: 'fit-content'
  }}>
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6">
        <path d="M3.5 4.02504L2.2575 2.78837L3.08 1.96587L4.31667 3.20837L3.5 4.02504ZM7.58333 0.583374V2.33337H6.41667V0.583374H7.58333ZM11.7425 2.78837L10.5 4.02504L9.68333 3.20837L10.92 1.96587L11.7425 2.78837ZM2.625 6.12504V7.29171H0.875V6.12504H2.625ZM11.375 6.12504H13.125V7.29171H11.375V6.12504ZM3.5 11.6667H10.5C10.8094 11.6667 11.1062 11.7896 11.325 12.0084C11.5437 12.2272 11.6667 12.524 11.6667 12.8334H2.33333C2.33333 12.524 2.45625 12.2272 2.67504 12.0084C2.89383 11.7896 3.19058 11.6667 3.5 11.6667ZM7 2.91671C7.92826 2.91671 8.8185 3.28546 9.47487 3.94183C10.1313 4.59821 10.5 5.48845 10.5 6.41671V11.0834H3.5V6.41671C3.5 5.48845 3.86875 4.59821 4.52513 3.94183C5.1815 3.28546 6.07174 2.91671 7 2.91671Z" fill="white"/>
      </g>
    </svg>
    <span style={{ color: 'white', fontSize: '14px', fontWeight: 500 }}>Label</span>
  </div>
);

// ===== SIMPLE TYPE STORIES =====

export const SimpleDefault: Story = {
  args: {
    type: 'simple',
    state: 'default',
    contained: true,
    size: 'default',
    openIcon: 'chevron',
    showIcon: true,
  },
};

export const SimpleOpen: Story = {
  args: {
    type: 'simple',
    state: 'open',
    contained: true,
    size: 'default',
    openIcon: 'chevron',
    showIcon: true,
  },
};

export const SimpleUncontained: Story = {
  args: {
    type: 'simple',
    state: 'default',
    contained: false,
    size: 'default',
    openIcon: 'chevron',
    showIcon: true,
  },
};

export const SimpleWithPlus: Story = {
  args: {
    type: 'simple',
    state: 'default',
    contained: true,
    size: 'default',
    openIcon: 'plus',
    showIcon: true,
  },
};

// ===== DECORATIVE TYPE STORIES =====

export const DecorativeDefault: Story = {
  args: {
    type: 'decorative',
    state: 'default',
    contained: true,
    size: 'default',
    openIcon: 'chevron',
  },
};

export const DecorativeOpen: Story = {
  args: {
    type: 'decorative',
    state: 'open',
    contained: true,
    size: 'default',
    openIcon: 'chevron',
  },
};

export const DecorativePlusDefault: Story = {
  args: {
    type: 'decorative-plus',
    state: 'default',
    contained: true,
    size: 'default',
    openIcon: 'plus',
  },
};

export const DecorativePlusOpen: Story = {
  args: {
    type: 'decorative-plus',
    state: 'open',
    contained: true,
    size: 'default',
    openIcon: 'plus',
  },
};

// ===== NUMBER TYPE STORIES =====

export const NumberDefault: Story = {
  args: {
    type: 'number',
    state: 'default',
    contained: true,
    size: 'default',
    openIcon: 'chevron',
    number: '01',
  },
};

export const NumberOpen: Story = {
  args: {
    type: 'number',
    state: 'open',
    contained: true,
    size: 'default',
    openIcon: 'chevron',
    number: '01',
  },
};

export const NumberWithPlus: Story = {
  args: {
    type: 'number',
    state: 'default',
    contained: true,
    size: 'default',
    openIcon: 'plus',
    number: '01',
  },
};

// ===== LABEL TYPE STORIES =====

export const LabelDefault: Story = {
  args: {
    type: 'label',
    state: 'default',
    contained: true,
    size: 'default',
    openIcon: 'chevron',
    label: <SampleLabel />,
  },
};

export const LabelWithPlus: Story = {
  args: {
    type: 'label',
    state: 'default',
    contained: true,
    size: 'default',
    openIcon: 'plus',
    label: <SampleLabel />,
  },
};

// ===== SIZE VARIANTS =====

export const SmallSize: Story = {
  args: {
    type: 'simple',
    state: 'open',
    contained: true,
    size: 'small',
    openIcon: 'chevron',
    showIcon: true,
  },
};

export const LargeSize: Story = {
  args: {
    type: 'simple',
    state: 'open',
    contained: true,
    size: 'large',
    openIcon: 'chevron',
    showIcon: true,
  },
};

// ===== COMPREHENSIVE SHOWCASE =====

export const AllVariants: Story = {
  name: 'All Variants Showcase',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
      <h2>Simple Type</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Accordion type="simple" state="default" contained={true} size="default" openIcon="chevron" showIcon={true} />
        <Accordion type="simple" state="open" contained={true} size="default" openIcon="chevron" showIcon={true} />
        <Accordion type="simple" state="default" contained={false} size="default" openIcon="chevron" showIcon={true} />
        <Accordion type="simple" state="default" contained={true} size="default" openIcon="plus" showIcon={true} />
      </div>

      <h2>Decorative Type</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Accordion type="decorative" state="default" contained={true} size="default" openIcon="chevron" />
        <Accordion type="decorative" state="open" contained={true} size="default" openIcon="chevron" />
        <Accordion type="decorative-plus" state="default" contained={true} size="default" openIcon="plus" />
        <Accordion type="decorative-plus" state="open" contained={true} size="default" openIcon="plus" />
      </div>

      <h2>Number Type</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Accordion type="number" state="default" contained={true} size="default" openIcon="chevron" number="01" />
        <Accordion type="number" state="open" contained={true} size="default" openIcon="chevron" number="02" />
        <Accordion type="number" state="default" contained={true} size="default" openIcon="plus" number="03" />
      </div>

      <h2>Label Type</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Accordion type="label" state="default" contained={true} size="default" openIcon="chevron" label={<SampleLabel />} />
        <Accordion type="label" state="default" contained={true} size="default" openIcon="plus" label={<SampleLabel />} />
      </div>

      <h2>Size Variants</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Accordion type="decorative" state="open" contained={true} size="small" openIcon="chevron" title="Small Size" />
        <Accordion type="decorative" state="open" contained={true} size="default" openIcon="chevron" title="Default Size" />
        <Accordion type="decorative" state="open" contained={true} size="large" openIcon="chevron" title="Large Size" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all accordion variants matching the Figma design specifications.',
      },
    },
  },
};

// ===== FIGMA EXACT DESIGN =====

export const FigmaExactDesign: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
      gap: '32px',
      padding: '24px',
      maxWidth: '1200px'
    }}>
      {/* Simple Type - Contained */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>Simple (Contained)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
          <Accordion type="simple" state="default" contained={true} size="default" openIcon="chevron" showIcon={true} />
          <Accordion type="simple" state="open" contained={true} size="default" openIcon="chevron" showIcon={true} />
          <Accordion type="simple" state="open" contained={true} size="default" openIcon="plus" showIcon={true} />
          <Accordion type="simple" state="default" contained={true} size="default" openIcon="plus" showIcon={true} />
        </div>
      </div>

      {/* Simple Type - Uncontained */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>Simple (Uncontained)</h3>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Accordion type="simple" state="default" contained={false} size="default" openIcon="chevron" showIcon={true} />
          <Accordion type="simple" state="open" contained={false} size="default" openIcon="chevron" showIcon={true} />
          <Accordion type="simple" state="open" contained={false} size="default" openIcon="plus" showIcon={true} />
          <Accordion type="simple" state="default" contained={false} size="default" openIcon="plus" showIcon={true} />
        </div>
      </div>

      {/* Decorative Types */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>Decorative</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Accordion type="decorative" state="default" contained={true} size="default" openIcon="chevron" />
          <Accordion type="decorative" state="open" contained={true} size="default" openIcon="chevron" />
          <Accordion type="decorative-plus" state="open" contained={true} size="default" openIcon="plus" />
          <Accordion type="decorative" state="default" contained={true} size="default" openIcon="plus" />
        </div>
      </div>

      {/* Number & Label Types */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>Number & Label</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Accordion type="number" state="default" contained={true} size="default" openIcon="chevron" number="01" />
          <Accordion type="number" state="open" contained={true} size="default" openIcon="chevron" number="02" />
          <Accordion type="number" state="open" contained={true} size="default" openIcon="plus" number="03" />
          <Accordion type="label" state="default" contained={true} size="default" openIcon="chevron" label={<SampleLabel />} />
          <Accordion type="label" state="default" contained={true} size="default" openIcon="plus" label={<SampleLabel />} />
        </div>
      </div>

      {/* Size Variants */}
      <div style={{ gridColumn: '1 / -1' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>Size Variants</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 500 }}>Small</h4>
            <Accordion type="decorative" state="open" contained={true} size="small" openIcon="chevron" 
              title="Small accordion example" 
              content="This is content in a small accordion with reduced padding and font sizes." />
          </div>
          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 500 }}>Default</h4>
            <Accordion type="decorative" state="open" contained={true} size="default" openIcon="chevron" 
              title="Default accordion example" />
          </div>
          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 500 }}>Large</h4>
            <Accordion type="decorative" state="open" contained={true} size="large" openIcon="chevron" 
              title="Large accordion example" 
              content="This is content in a large accordion with increased padding and font sizes for better visibility and touch targets." />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exact implementation of the Figma accordion design with all variants, states, and sizes.',
      },
    },
  },
};

// ===== INTERACTIVE EXAMPLES =====

export const InteractiveDemo: Story = {
  render: () => {
    const [openStates, setOpenStates] = React.useState<Record<string, boolean>>({});
    
    const handleToggle = (id: string) => (isOpen: boolean) => {
      setOpenStates(prev => ({ ...prev, [id]: isOpen }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
        <h2>FAQ Example</h2>
        <Accordion 
          type="number" 
          contained={true} 
          size="default" 
          openIcon="chevron" 
          number="01"
          title="What are the main features of this design system?"
          content="Our design system includes a comprehensive set of components, design tokens, typography scales, color palettes, and spacing systems. It's built with accessibility in mind and follows modern design principles."
          isOpen={openStates['faq1']}
          onToggle={handleToggle('faq1')}
        />
        <Accordion 
          type="number" 
          contained={true} 
          size="default" 
          openIcon="chevron" 
          number="02"
          title="How do I implement these components in my project?"
          content="You can install our design system as an npm package or copy the component code directly. Each component comes with TypeScript definitions, CSS styles, and comprehensive documentation."
          isOpen={openStates['faq2']}
          onToggle={handleToggle('faq2')}
        />
        <Accordion 
          type="number" 
          contained={true} 
          size="default" 
          openIcon="chevron" 
          number="03"
          title="Are these components accessible?"
          content="Yes! All components are built with accessibility in mind, including proper ARIA attributes, keyboard navigation, focus management, and screen reader support."
          isOpen={openStates['faq3']}
          onToggle={handleToggle('faq3')}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive accordion demo showing controlled state management for FAQ-style interfaces.',
      },
    },
  },
};

export const CustomContent: Story = {
  args: {
    type: 'decorative',
    state: 'open',
    contained: true,
    size: 'default',
    openIcon: 'chevron',
    title: 'Accordion with Custom Content',
    children: (
      <div style={{ padding: '16px 0' }}>
        <p style={{ margin: '0 0 16px 0' }}>This accordion contains custom JSX content instead of plain text.</p>
        <ul style={{ margin: '0 0 16px 0', paddingLeft: '20px' }}>
          <li>Interactive elements</li>
          <li>Rich formatting</li>
          <li>Images and media</li>
          <li>Other components</li>
        </ul>
        <button style={{
          padding: '8px 16px',
          background: '#0BA7EA',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Action Button
        </button>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Accordion with custom JSX content including interactive elements.',
      },
    },
  },
};

export const ContentTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px' }}>
      <h2>Accordion Content Types</h2>
      <p>Accordions support different content types with exact Figma typography and spacing:</p>

      <div>
        <h3>Text Content</h3>
        <Accordion
          size="default"
          contentType="text"
          state="open"
          title="Text Content Example"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien."
        />
      </div>

      <div>
        <h3>List Content</h3>
        <Accordion
          size="default"
          contentType="list"
          state="open"
          title="List Content Example"
          listItems={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia.",
            "Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros.",
            "Facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim."
          ]}
        />
      </div>

      <div>
        <h3>Text with Image Content</h3>
        <Accordion
          size="default"
          contentType="text-img"
          state="open"
          title="Text-Image Content Example"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien."
        />
      </div>

      <div>
        <h3>Metrics Content</h3>
        <Accordion
          size="default"
          contentType="metrics"
          state="open"
          title="Metrics Content Example"
          metrics={{
            projectsCompleted: '235,000',
            status: 'On time',
            users: '3,500'
          }}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all accordion content types: text, list, text-image, and metrics with exact Figma specifications.',
      },
    },
  },
};
