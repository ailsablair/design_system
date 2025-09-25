import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Atoms/Accordion/Figma Showcase',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Accordion Component - Figma Design Showcase

This showcase demonstrates all accordion variants from the Figma design exactly as specified:

## Type Variants
- **Simple**: Basic accordion with optional status icon and bell icon
- **Decorative**: Icon with decorative frame
- **Number**: Numbered accordion items  
- **Label**: Accordion with label/tag component
- **No-stroke**: Clean accordion without visual borders

## Size Variants
- **Small**: Compact accordion with 18px title typography
- **Default**: Standard accordion with 19px title typography  
- **Large**: Spacious accordion with 24px title typography

## Icon Variants
- **Default (Chevron)**: Up/down chevron icons
- **Plus**: Plus/minus icons

## States
- **Default**: Closed state
- **Open**: Expanded state

All components use exact Figma typography, spacing, and design tokens for pixel-perfect accuracy.
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['simple', 'decorative', 'number', 'label', 'no-stroke'],
      description: 'Type variant - matches Figma design exactly',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'open'],
      description: 'Open/closed state',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
      description: 'Size variant',
    },
    openIcon: {
      control: { type: 'select' },
      options: ['default (chevron)', 'plus'],
      description: 'Icon type for open/close',
    },
    showStatusIcon: {
      control: { type: 'boolean' },
      description: 'Whether to show status icon (dashed circle)',
    },
    showIcon: {
      control: { type: 'boolean' },
      description: 'Whether to show bell icon',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ===== SIMPLE TYPE VARIANTS =====

export const SimpleDefault: Story = {
  name: 'Simple - Default State',
  args: {
    type: 'simple',
    state: 'default',
    size: 'default',
    openIcon: 'default (chevron)',
    title: 'This is a section title taking up a lot of space...',
    description: 'This is supporting text to help describe the content within the accordion',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.',
    showStatusIcon: true,
    showIcon: true,
  },
};

export const SimpleOpen: Story = {
  name: 'Simple - Open State',
  args: {
    ...SimpleDefault.args,
    state: 'open',
  },
};

export const SimpleChevronSmall: Story = {
  name: 'Simple - Small Size (Chevron)',
  args: {
    type: 'simple',
    state: 'default',
    size: 'small',
    openIcon: 'default (chevron)',
    title: 'This is a section title taking up a lot of space...',
    description: 'This is supporting text to help describe the content within the accordion',
    showStatusIcon: true,
    showIcon: true,
  },
};

export const SimpleChevronLarge: Story = {
  name: 'Simple - Large Size (Chevron)',
  args: {
    type: 'simple',
    state: 'default',
    size: 'large',
    openIcon: 'default (chevron)',
    title: 'This is a section title taking up a lot of space...',
    description: 'This is supporting text to help describe the content within the accordion',
    showStatusIcon: true,
    showIcon: true,
  },
};

export const SimplePlusDefault: Story = {
  name: 'Simple - Plus Icon (Default)',
  args: {
    type: 'simple',
    state: 'default',
    size: 'default',
    openIcon: 'plus',
    title: 'This is a section title taking up a lot of space...',
    description: 'This is supporting text to help describe the content within the accordion',
    showStatusIcon: true,
    showIcon: true,
  },
};

export const SimplePlusOpen: Story = {
  name: 'Simple - Plus Icon (Open)',
  args: {
    ...SimplePlusDefault.args,
    state: 'open',
  },
};

// ===== NO-STROKE TYPE VARIANTS =====

export const NoStrokeDefault: Story = {
  name: 'No-Stroke - Default State',
  args: {
    type: 'no-stroke',
    state: 'default',
    size: 'default',
    openIcon: 'default (chevron)',
    title: 'This is a section title or a long question taking up a lot of space...',
    showIcon: true,
  },
};

export const NoStrokeOpen: Story = {
  name: 'No-Stroke - Open State',
  args: {
    ...NoStrokeDefault.args,
    state: 'open',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.',
  },
};

export const NoStrokeSmall: Story = {
  name: 'No-Stroke - Small Size',
  args: {
    type: 'no-stroke',
    state: 'default',
    size: 'small',
    openIcon: 'default (chevron)',
    title: 'This is a section title or a long question taking up a lot of space...',
    showIcon: true,
  },
};

export const NoStrokeLarge: Story = {
  name: 'No-Stroke - Large Size',
  args: {
    type: 'no-stroke',
    state: 'default',
    size: 'large',
    openIcon: 'default (chevron)',
    title: 'This is a section title or a long question taking up a lot of space...',
    showIcon: true,
  },
};

export const NoStrokePlus: Story = {
  name: 'No-Stroke - Plus Icon',
  args: {
    type: 'no-stroke',
    state: 'default',
    size: 'default',
    openIcon: 'plus',
    title: 'This is a section title or a long question taking up a lot of space...',
    showIcon: true,
  },
};

// ===== DECORATIVE TYPE VARIANTS =====

export const DecorativeDefault: Story = {
  name: 'Decorative - Default State',
  args: {
    type: 'decorative',
    state: 'default',
    size: 'default',
    openIcon: 'default (chevron)',
    title: 'This is a decorative accordion...',
  },
};

export const DecorativeOpen: Story = {
  name: 'Decorative - Open State',
  args: {
    ...DecorativeDefault.args,
    state: 'open',
    content: 'This is the text under an accordion heading. It can span for as long as needed, but I would suggest not exceeding a height of 400px for this width. If you need something taller, try our default sized accordions.',
  },
};

export const DecorativeSmall: Story = {
  name: 'Decorative - Small Size',
  args: {
    type: 'decorative',
    state: 'default',
    size: 'small',
    openIcon: 'default (chevron)',
    title: 'This is a decorative accordion...',
  },
};

export const DecorativeLarge: Story = {
  name: 'Decorative - Large Size',
  args: {
    type: 'decorative',
    state: 'default',
    size: 'large',
    openIcon: 'default (chevron)',
    title: 'This is a decorative accordion...',
  },
};

export const DecorativePlus: Story = {
  name: 'Decorative - Plus Icon',
  args: {
    type: 'decorative',
    state: 'default',
    size: 'default',
    openIcon: 'plus',
    title: 'This is a decorative accordion...',
  },
};

export const DecorativePlusOpen: Story = {
  name: 'Decorative - Plus Icon (Open)',
  args: {
    ...DecorativePlus.args,
    state: 'open',
    content: 'This is the text under an accordion heading. It can span for as long as needed, but I would suggest not exceeding a height of 400px for this width. If you need something taller, try our default sized accordions.',
  },
};

// ===== NUMBER TYPE VARIANTS =====

export const NumberDefault: Story = {
  name: 'Number - Default State',
  args: {
    type: 'number',
    state: 'default',
    size: 'default',
    openIcon: 'default (chevron)',
    title: 'This is a numbered accordion list...',
    number: '01',
  },
};

export const NumberOpen: Story = {
  name: 'Number - Open State',
  args: {
    ...NumberDefault.args,
    state: 'open',
    content: 'This is the text under an accordion heading. It can span for as long as needed, but I would suggest not exceeding a height of 600px for this width. If you need something taller, try our default sized accordions.',
  },
};

export const NumberSmall: Story = {
  name: 'Number - Small Size',
  args: {
    type: 'number',
    state: 'default',
    size: 'small',
    openIcon: 'default (chevron)',
    title: 'This is a numbered accordion list...',
    number: '01',
  },
};

export const NumberLarge: Story = {
  name: 'Number - Large Size',
  args: {
    type: 'number',
    state: 'default',
    size: 'large',
    openIcon: 'default (chevron)',
    title: 'This is a numbered accordion list...',
    number: '01',
  },
};

export const NumberPlus: Story = {
  name: 'Number - Plus Icon',
  args: {
    type: 'number',
    state: 'default',
    size: 'default',
    openIcon: 'plus',
    title: 'This is a numbered accordion list...',
    number: '01',
  },
};

export const NumberPlusOpen: Story = {
  name: 'Number - Plus Icon (Open)',
  args: {
    ...NumberPlus.args,
    state: 'open',
    content: 'This is the text under an accordion heading. It can span for as long as needed, but I would suggest not exceeding a height of 600px for this width. If you need something taller, try our default sized accordions.',
  },
};

// ===== LABEL TYPE VARIANTS =====

const SampleLabel = () => (
  <div style={{
    display: 'flex',
    padding: '2px 6px',
    alignItems: 'center',
    gap: '4px',
    borderRadius: '99999px',
    border: '1px solid #54C1F0',
    background: '#0BA7EA',
    color: '#FFF',
    fontSize: '14px',
    fontFamily: 'Archivo',
    fontWeight: 500,
    lineHeight: '17px',
    letterSpacing: '0.15px',
  }}>
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6">
        <path d="M3.5 4.02504L2.2575 2.78837L3.08 1.96587L4.31667 3.20837L3.5 4.02504ZM7.58333 0.583374V2.33337H6.41667V0.583374H7.58333ZM11.7425 2.78837L10.5 4.02504L9.68333 3.20837L10.92 1.96587L11.7425 2.78837ZM2.625 6.12504V7.29171H0.875V6.12504H2.625ZM11.375 6.12504H13.125V7.29171H11.375V6.12504ZM3.5 11.6667H10.5C10.8094 11.6667 11.1062 11.7896 11.325 12.0084C11.5437 12.2272 11.6667 12.524 11.6667 12.8334H2.33333C2.33333 12.524 2.45625 12.2272 2.67504 12.0084C2.89383 11.7896 3.19058 11.6667 3.5 11.6667ZM7 2.91671C7.92826 2.91671 8.8185 3.28546 9.47487 3.94183C10.1313 4.59821 10.5 5.48845 10.5 6.41671V11.0834H3.5V6.41671C3.5 5.48845 3.86875 4.59821 4.52513 3.94183C5.1815 3.28546 6.07174 2.91671 7 2.91671Z" fill="white"/>
      </g>
    </svg>
    Label
  </div>
);

export const LabelDefault: Story = {
  name: 'Label - Default State',
  args: {
    type: 'label',
    state: 'default',
    size: 'default',
    openIcon: 'default (chevron)',
    title: 'This is a label accordion list...',
    label: <SampleLabel />,
  },
};

export const LabelOpen: Story = {
  name: 'Label - Open State',
  args: {
    ...LabelDefault.args,
    state: 'open',
    content: 'This is the text under an accordion heading. It can span for as long as needed, but I would suggest not exceeding a height of 600px for this width. If you need something taller, try our default sized accordions.',
  },
};

export const LabelSmall: Story = {
  name: 'Label - Small Size',
  args: {
    type: 'label',
    state: 'default',
    size: 'small',
    openIcon: 'default (chevron)',
    title: 'This is a label accordion list...',
    label: <SampleLabel />,
  },
};

export const LabelLarge: Story = {
  args: {
    type: 'label',
    state: 'default',
    size: 'large',
    openIcon: 'default (chevron)',
    title: 'This is a label accordion list...',
    label: <SampleLabel />,
  },
};

export const LabelPlus: Story = {
  args: {
    type: 'label',
    state: 'default',
    size: 'default',
    openIcon: 'plus',
    title: 'This is a label accordion list...',
    label: <SampleLabel />,
  },
};

export const LabelPlusOpen: Story = {
  args: {
    ...LabelPlus.args,
    state: 'open',
    content: 'This is the text under an accordion heading. It can span for as long as needed, but I would suggest not exceeding a height of 600px for this width. If you need something taller, try our default sized accordions.',
  },
};

// ===== COMPREHENSIVE SHOWCASE =====

export const AllVariantsComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px' }}>
      <h2 style={{ margin: 0, fontSize: '24px', fontFamily: 'Archivo' }}>Accordion Variants Showcase</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '19px', fontFamily: 'Archivo' }}>Simple Type</h3>
        <Accordion 
          type="simple" 
          state="default" 
          title="Simple Accordion - Default State"
          description="Supporting text for simple accordion"
          showStatusIcon={true}
          showIcon={true}
        />
        <Accordion 
          type="simple" 
          state="open" 
          title="Simple Accordion - Open State"
          description="Supporting text for simple accordion"
          content="Content for simple accordion type"
          showStatusIcon={true}
          showIcon={true}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '19px', fontFamily: 'Archivo' }}>Decorative Type</h3>
        <Accordion 
          type="decorative" 
          state="default" 
          title="Decorative Accordion"
        />
        <Accordion 
          type="decorative" 
          state="open" 
          title="Decorative Accordion"
          content="Content for decorative accordion type"
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '19px', fontFamily: 'Archivo' }}>Number Type</h3>
        <Accordion 
          type="number" 
          state="default" 
          title="Number Accordion"
          number="01"
        />
        <Accordion 
          type="number" 
          state="open" 
          title="Number Accordion"
          number="02"
          content="Content for number accordion type"
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '19px', fontFamily: 'Archivo' }}>Label Type</h3>
        <Accordion 
          type="label" 
          state="default" 
          title="Label Accordion"
          label={<SampleLabel />}
        />
        <Accordion 
          type="label" 
          state="open" 
          title="Label Accordion"
          label={<SampleLabel />}
          content="Content for label accordion type"
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '19px', fontFamily: 'Archivo' }}>No-Stroke Type</h3>
        <Accordion 
          type="no-stroke" 
          state="default" 
          title="No-Stroke Accordion"
          showIcon={true}
        />
        <Accordion 
          type="no-stroke" 
          state="open" 
          title="No-Stroke Accordion"
          content="Content for no-stroke accordion type"
          showIcon={true}
        />
      </div>
    </div>
  ),
};

// ===== SIZE COMPARISON =====

export const SizeComparison: Story = {
  name: 'Size Variants Comparison',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px' }}>
      <h2 style={{ margin: 0, fontSize: '24px', fontFamily: 'Archivo' }}>Size Variants</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontFamily: 'Archivo' }}>Small Size (18px)</h3>
        <Accordion 
          type="simple" 
          size="small"
          state="default" 
          title="Small accordion title"
          description="Small supporting text"
          showStatusIcon={true}
          showIcon={true}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '19px', fontFamily: 'Archivo' }}>Default Size (19px)</h3>
        <Accordion 
          type="simple" 
          size="default"
          state="default" 
          title="Default accordion title"
          description="Default supporting text"
          showStatusIcon={true}
          showIcon={true}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '24px', fontFamily: 'Archivo' }}>Large Size (24px)</h3>
        <Accordion 
          type="simple" 
          size="large"
          state="default" 
          title="Large accordion title"
          description="Large supporting text"
          showStatusIcon={true}
          showIcon={true}
        />
      </div>
    </div>
  ),
};

// ===== ICON COMPARISON =====

export const IconComparison: Story = {
  name: 'Icon Types Comparison',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px' }}>
      <h2 style={{ margin: 0, fontSize: '24px', fontFamily: 'Archivo' }}>Icon Types</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '19px', fontFamily: 'Archivo' }}>Chevron Icons</h3>
        <Accordion 
          type="simple" 
          state="default" 
          openIcon="default (chevron)"
          title="Chevron closed state"
          description="Supporting text"
          showStatusIcon={true}
          showIcon={true}
        />
        <Accordion 
          type="simple" 
          state="open" 
          openIcon="default (chevron)"
          title="Chevron open state"
          description="Supporting text"
          content="Content with chevron icon"
          showStatusIcon={true}
          showIcon={true}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '19px', fontFamily: 'Archivo' }}>Plus/Minus Icons</h3>
        <Accordion 
          type="simple" 
          state="default" 
          openIcon="plus"
          title="Plus closed state"
          description="Supporting text"
          showStatusIcon={true}
          showIcon={true}
        />
        <Accordion 
          type="simple" 
          state="open" 
          openIcon="plus"
          title="Minus open state"
          description="Supporting text"
          content="Content with plus/minus icon"
          showStatusIcon={true}
          showIcon={true}
        />
      </div>
    </div>
  ),
};
