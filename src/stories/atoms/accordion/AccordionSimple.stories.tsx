import type { Meta, StoryObj } from '@storybook/react';
import { AccordionSimple } from './AccordionSimple';

const meta = {
  title: 'Atoms/Accordion/AccordionSimple',
  component: AccordionSimple,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# AccordionSimple - Pixel-Perfect Figma Implementation

A comprehensive accordion component matching the exact Figma design specifications.

## Features
- **5 Type Variants**: simple, no-stroke, decorative, number, label
- **2 States**: default (closed), open
- **3 Sizes**: small (compact), default (standard), large (spacious)
- **2 Icon Styles**: chevron (default), plus/minus
- **60+ Design Variants** supported
- Fully responsive and accessible
- Design token integration
- Controlled and uncontrolled modes

## Usage

\`\`\`tsx
import { AccordionSimple } from './AccordionSimple';

// Simple accordion
<AccordionSimple
  type="simple"
  title="Section title"
  description="Supporting text"
>
  <div>Content goes here</div>
</AccordionSimple>

// Decorative accordion with icon
<AccordionSimple
  type="decorative"
  title="Decorative accordion"
  showIcon={true}
>
  <div>Content text</div>
</AccordionSimple>

// Numbered accordion
<AccordionSimple
  type="number"
  number="01"
  title="Numbered accordion list"
>
  <div>Content text</div>
</AccordionSimple>

// Label accordion with tag
<AccordionSimple
  type="label"
  title="Label accordion"
  labelText="Label"
  labelLeadingIcon={true}
>
  <div>Content text</div>
</AccordionSimple>
\`\`\`

## Type Variants

### Simple
Standard accordion with status icon, bell icon, title, description, and chevron/plus toggle.

### No-Stroke
Clean variant without border, ideal for minimal designs.

### Decorative
Includes decorative icon frame with background gradient when open.

### Number
Numbered list style with large number indicator.

### Label
Accordion with tag label, perfect for categorized content.

## Accessibility
- Full keyboard navigation (Enter/Space to toggle)
- ARIA expanded state
- Semantic button element
- Focus visible indicators
- Reduced motion support
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['simple', 'no-stroke', 'decorative', 'number', 'label'],
      description: 'Visual style variant',
    },
    state: {
      control: 'select',
      options: ['default', 'open'],
      description: 'Open/closed state',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size variant',
    },
    openIcon: {
      control: 'select',
      options: ['default (chevron)', 'plus'],
      description: 'Toggle icon style',
    },
    showStatusIcon: {
      control: 'boolean',
      description: 'Show status indicator (dashed circle)',
    },
    showIcon: {
      control: 'boolean',
      description: 'Show bell ring icon',
    },
    title: {
      control: 'text',
      description: 'Title text',
    },
    description: {
      control: 'text',
      description: 'Description/subtitle text',
    },
    number: {
      control: 'text',
      description: 'Number for numbered type',
    },
    labelText: {
      control: 'text',
      description: 'Label tag text',
    },
    labelLeadingIcon: {
      control: 'boolean',
      description: 'Show icon in label tag',
    },
  },
} satisfies Meta<typeof AccordionSimple>;

export default meta;
type Story = StoryObj<typeof meta>;

// ===== DEFAULT STORY =====
export const Default: Story = {
  args: {
    type: 'simple',
    state: 'default',
    size: 'default',
    openIcon: 'default (chevron)',
    showStatusIcon: true,
    showIcon: true,
    title: 'This is a section title taking up a lot of space...',
    description: 'This is supporting text to help describe the content within the accordion',
  },
};

// ===== SIMPLE TYPE VARIANTS =====
export const SimpleDefault: Story = {
  args: {
    type: 'simple',
    state: 'default',
    size: 'default',
    openIcon: 'default (chevron)',
    title: 'This is a section title taking up a lot of space...',
    description: 'This is supporting text to help describe the content within the accordion',
  },
};

export const SimpleOpen: Story = {
  args: {
    type: 'simple',
    state: 'open',
    size: 'default',
    openIcon: 'default (chevron)',
    title: 'This is a section title taking up a lot of space...',
    description: 'This is supporting text to help describe the content within the accordion',
    children: (
      <div style={{
        color: 'var(--neutral-gray-gray-900, #111827)',
        fontFamily: 'var(--body-body-light-font-family, "RobotoFlex-Light", sans-serif)',
        fontSize: '16px',
        lineHeight: '20px',
        letterSpacing: '0.05px',
        fontWeight: 300,
      }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.
      </div>
    ),
  },
};

export const SimpleSmall: Story = {
  args: {
    type: 'simple',
    state: 'open',
    size: 'small',
    openIcon: 'default (chevron)',
    title: 'This is a section title taking up a lot of space...',
    description: 'This is supporting text to help describe the content within the accordion',
    children: (
      <div style={{
        color: 'var(--neutral-gray-gray-900, #111827)',
        fontFamily: 'var(--body-body-sm-light-font-family, "RobotoFlex-Light", sans-serif)',
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '-0.15px',
        fontWeight: 300,
      }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui.
      </div>
    ),
  },
};

export const SimpleLarge: Story = {
  args: {
    type: 'simple',
    state: 'open',
    size: 'large',
    openIcon: 'default (chevron)',
    title: 'This is a section title taking up a lot of space...',
    description: 'This is supporting text to help describe the content within the accordion',
    children: (
      <div style={{
        color: 'var(--neutral-gray-gray-900, #111827)',
        fontFamily: 'var(--body-body-lg-light-font-family, "RobotoFlex-Light", sans-serif)',
        fontSize: '18px',
        lineHeight: '22px',
        letterSpacing: '-0.15px',
        fontWeight: 300,
      }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.
      </div>
    ),
  },
};

export const SimplePlusIcon: Story = {
  args: {
    type: 'simple',
    state: 'open',
    size: 'default',
    openIcon: 'plus',
    title: 'This is a section title taking up a lot of space...',
    description: 'This is supporting text to help describe the content within the accordion',
    children: (
      <div style={{
        color: 'var(--neutral-gray-gray-900, #111827)',
        fontFamily: 'var(--body-body-light-font-family, "RobotoFlex-Light", sans-serif)',
        fontSize: '16px',
        lineHeight: '20px',
        letterSpacing: '0.05px',
        fontWeight: 300,
      }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.
      </div>
    ),
  },
};

// ===== NO-STROKE TYPE VARIANTS =====
export const NoStrokeDefault: Story = {
  args: {
    type: 'no-stroke',
    state: 'default',
    size: 'default',
    openIcon: 'default (chevron)',
    title: 'This is a section title or a long question taking up a lot of space...',
  },
};

export const NoStrokeOpen: Story = {
  args: {
    type: 'no-stroke',
    state: 'open',
    size: 'default',
    openIcon: 'default (chevron)',
    title: 'This is a section title or a long question taking up a lot of space...',
    children: (
      <div style={{
        color: 'var(--neutral-gray-gray-700, #374151)',
        fontFamily: 'var(--body-body-light-font-family, "RobotoFlex-Light", sans-serif)',
        fontSize: '16px',
        lineHeight: '20px',
        letterSpacing: '0.05px',
        fontWeight: 300,
      }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.
      </div>
    ),
  },
};

export const NoStrokePlusIcon: Story = {
  args: {
    type: 'no-stroke',
    state: 'open',
    size: 'default',
    openIcon: 'plus',
    title: 'This is a section title or a long question taking up a lot of space...',
    children: (
      <div style={{
        color: 'var(--neutral-gray-gray-700, #374151)',
        fontFamily: 'var(--body-body-light-font-family, "RobotoFlex-Light", sans-serif)',
        fontSize: '16px',
        lineHeight: '20px',
        letterSpacing: '0.05px',
        fontWeight: 300,
      }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.
      </div>
    ),
  },
};

// ===== DECORATIVE TYPE VARIANTS =====
export const DecorativeDefault: Story = {
  args: {
    type: 'decorative',
    state: 'default',
    size: 'default',
    openIcon: 'default (chevron)',
    title: 'This is a decorative accordion...',
  },
};

export const DecorativeOpen: Story = {
  args: {
    type: 'decorative',
    state: 'open',
    size: 'default',
    openIcon: 'default (chevron)',
    title: 'This is a decorative accordion...',
    children: (
      <div style={{
        color: 'var(--neutral-gray-gray-700, #374151)',
        fontFamily: 'var(--body-body-light-font-family, "RobotoFlex-Light", sans-serif)',
        fontSize: '16px',
        lineHeight: '20px',
        letterSpacing: '0.05px',
        fontWeight: 300,
      }}>
        This is the text under an accordion heading. It can span for as long as needed, but I would suggest not exceeding a height of 400px for this width. If you need something taller, try our default sized accordions.
      </div>
    ),
  },
};

export const DecorativeSmall: Story = {
  args: {
    type: 'decorative',
    state: 'open',
    size: 'small',
    openIcon: 'default (chevron)',
    title: 'This is a decorative accordion...',
    children: (
      <div style={{
        color: 'var(--neutral-gray-gray-700, #374151)',
        fontFamily: 'var(--body-body-sm-light-font-family, "RobotoFlex-Light", sans-serif)',
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '-0.15px',
        fontWeight: 300,
      }}>
        This is the text under an accordion heading. It can span for as long as needed, but I would suggest not exceeding a height of 400px for this width.
      </div>
    ),
  },
};

export const DecorativeLarge: Story = {
  args: {
    type: 'decorative',
    state: 'open',
    size: 'large',
    openIcon: 'default (chevron)',
    title: 'This is a decorative accordion...',
    children: (
      <div style={{
        color: 'var(--neutral-gray-gray-700, #374151)',
        fontFamily: 'var(--body-body-lg-light-font-family, "RobotoFlex-Light", sans-serif)',
        fontSize: '18px',
        lineHeight: '22px',
        letterSpacing: '-0.15px',
        fontWeight: 300,
      }}>
        This is the text under an accordion heading. It can span for as long as needed, but I would suggest not exceeding a height of 400px for this width. If you need something taller, try our default sized accordions.
      </div>
    ),
  },
};

export const DecorativePlusIcon: Story = {
  args: {
    type: 'decorative',
    state: 'open',
    size: 'default',
    openIcon: 'plus',
    title: 'This is a decorative accordion...',
    children: (
      <div style={{
        color: 'var(--neutral-gray-gray-700, #374151)',
        fontFamily: 'var(--body-body-light-font-family, "RobotoFlex-Light", sans-serif)',
        fontSize: '16px',
        lineHeight: '20px',
        letterSpacing: '0.05px',
        fontWeight: 300,
      }}>
        This is the text under an accordion heading. It can span for as long as needed, but I would suggest not exceeding a height of 400px for this width. If you need something taller, try our default sized accordions.
      </div>
    ),
  },
};

// ===== NUMBER TYPE VARIANTS =====
export const NumberDefault: Story = {
  args: {
    type: 'number',
    state: 'default',
    size: 'default',
    openIcon: 'default (chevron)',
    number: '01',
    title: 'This is a numbered accordion list...',
  },
};

export const NumberOpen: Story = {
  args: {
    type: 'number',
    state: 'open',
    size: 'default',
    openIcon: 'default (chevron)',
    number: '01',
    title: 'This is a numbered accordion list...',
    children: (
      <div style={{
        color: 'var(--neutral-gray-gray-700, #374151)',
        fontFamily: 'var(--body-body-light-font-family, "RobotoFlex-Light", sans-serif)',
        fontSize: '16px',
        lineHeight: '20px',
        letterSpacing: '0.05px',
        fontWeight: 300,
      }}>
        This is the text under an accordion heading. It can span for as long as needed, but I would suggest not exceeding a height of 600px for this width. If you need something taller, try our default sized accordions.
      </div>
    ),
  },
};

export const NumberSmall: Story = {
  args: {
    type: 'number',
    state: 'open',
    size: 'small',
    openIcon: 'default (chevron)',
    number: '01',
    title: 'This is a numbered accordion list...',
    children: (
      <div style={{
        color: 'var(--neutral-gray-gray-700, #374151)',
        fontFamily: 'var(--body-body-sm-light-font-family, "RobotoFlex-Light", sans-serif)',
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '-0.15px',
        fontWeight: 300,
      }}>
        This is the text under an accordion heading. It can span for as long as needed, but I would suggest not exceeding a height of 600px for this width.
      </div>
    ),
  },
};

export const NumberLarge: Story = {
  args: {
    type: 'number',
    state: 'open',
    size: 'large',
    openIcon: 'default (chevron)',
    number: '01',
    title: 'This is a numbered accordion list...',
    children: (
      <div style={{
        color: 'var(--neutral-gray-gray-700, #374151)',
        fontFamily: 'var(--body-body-lg-light-font-family, "RobotoFlex-Light", sans-serif)',
        fontSize: '18px',
        lineHeight: '22px',
        letterSpacing: '-0.15px',
        fontWeight: 300,
      }}>
        This is the text under an accordion heading. It can span for as long as needed, but I would suggest not exceeding a height of 600px for this width. If you need something taller, try our default sized accordions.
      </div>
    ),
  },
};

export const NumberPlusIcon: Story = {
  args: {
    type: 'number',
    state: 'open',
    size: 'default',
    openIcon: 'plus',
    number: '01',
    title: 'This is a numbered accordion list...',
    children: (
      <div style={{
        color: 'var(--neutral-gray-gray-700, #374151)',
        fontFamily: 'var(--body-body-light-font-family, "RobotoFlex-Light", sans-serif)',
        fontSize: '16px',
        lineHeight: '20px',
        letterSpacing: '0.05px',
        fontWeight: 300,
      }}>
        This is the text under an accordion heading. It can span for as long as needed, but I would suggest not exceeding a height of 600px for this width. If you need something taller, try our default sized accordions.
      </div>
    ),
  },
};

// ===== LABEL TYPE VARIANTS =====
export const LabelDefault: Story = {
  args: {
    type: 'label',
    state: 'default',
    size: 'default',
    openIcon: 'default (chevron)',
    title: 'This is a label accordion list...',
    labelText: 'Label',
    labelLeadingIcon: true,
  },
};

export const LabelOpen: Story = {
  args: {
    type: 'label',
    state: 'open',
    size: 'default',
    openIcon: 'default (chevron)',
    title: 'This is a label accordion ...',
    labelText: 'Label',
    labelLeadingIcon: true,
    children: (
      <div style={{
        color: 'var(--neutral-gray-gray-700, #374151)',
        fontFamily: 'var(--body-body-light-font-family, "RobotoFlex-Light", sans-serif)',
        fontSize: '16px',
        lineHeight: '20px',
        letterSpacing: '0.05px',
        fontWeight: 300,
      }}>
        This is the text under an accordion heading. It can span for as long as needed, but I would suggest not exceeding a height of 600px for this width. If you need something taller, try our default sized accordions.
      </div>
    ),
  },
};

export const LabelSmall: Story = {
  args: {
    type: 'label',
    state: 'open',
    size: 'small',
    openIcon: 'default (chevron)',
    title: 'This is a label accordion ...',
    labelText: 'Label',
    labelLeadingIcon: true,
    children: (
      <div style={{
        color: 'var(--neutral-gray-gray-700, #374151)',
        fontFamily: 'var(--body-body-sm-light-font-family, "RobotoFlex-Light", sans-serif)',
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '-0.15px',
        fontWeight: 300,
      }}>
        This is the text under an accordion heading. It can span for as long as needed, but I would suggest not exceeding a height of 600px for this width.
      </div>
    ),
  },
};

export const LabelLarge: Story = {
  args: {
    type: 'label',
    state: 'open',
    size: 'large',
    openIcon: 'default (chevron)',
    title: 'This is a label accordion ...',
    labelText: 'Label',
    labelLeadingIcon: true,
    children: (
      <div style={{
        color: 'var(--neutral-gray-gray-700, #374151)',
        fontFamily: 'var(--body-body-lg-light-font-family, "RobotoFlex-Light", sans-serif)',
        fontSize: '18px',
        lineHeight: '22px',
        letterSpacing: '-0.15px',
        fontWeight: 300,
      }}>
        This is the text under an accordion heading. It can span for as long as needed, but I would suggest not exceeding a height of 600px for this width. If you need something taller, try our default sized accordions.
      </div>
    ),
  },
};

export const LabelPlusIcon: Story = {
  args: {
    type: 'label',
    state: 'open',
    size: 'default',
    openIcon: 'plus',
    title: 'This is a label accordion ...',
    labelText: 'Label',
    labelLeadingIcon: true,
    children: (
      <div style={{
        color: 'var(--neutral-gray-gray-700, #374151)',
        fontFamily: 'var(--body-body-light-font-family, "RobotoFlex-Light", sans-serif)',
        fontSize: '16px',
        lineHeight: '20px',
        letterSpacing: '0.05px',
        fontWeight: 300,
      }}>
        This is the text under an accordion heading. It can span for as long as needed, but I would suggest not exceeding a height of 600px for this width. If you need something taller, try our default sized accordions.
      </div>
    ),
  },
};

// ===== INTERACTIVE DEMO =====
export const InteractiveDemo: Story = {
  name: '🎨 Interactive Demo',
  render: (args) => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    const accordions = [
      { type: 'simple', title: 'Simple accordion', description: 'With description' },
      { type: 'no-stroke', title: 'No-stroke accordion', description: '' },
      { type: 'decorative', title: 'Decorative accordion', description: '' },
      { type: 'number', title: 'Numbered accordion', description: '' },
      { type: 'label', title: 'Label accordion', description: '' },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '800px' }}>
        {accordions.map((acc, index) => (
          <AccordionSimple
            key={index}
            type={acc.type as any}
            title={acc.title}
            description={acc.description}
            number="01"
            labelText="Label"
            labelLeadingIcon={true}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            {...args}
          >
            <div style={{
              color: 'var(--neutral-gray-gray-700, #374151)',
              fontFamily: 'var(--body-body-light-font-family, "RobotoFlex-Light", sans-serif)',
              fontSize: '16px',
              lineHeight: '20px',
              fontWeight: 300,
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui.
            </div>
          </AccordionSimple>
        ))}
      </div>
    );
  },
  args: {
    size: 'default',
    openIcon: 'default (chevron)',
  },
};
