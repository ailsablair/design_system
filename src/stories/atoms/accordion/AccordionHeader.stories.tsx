import type { Meta, StoryObj } from '@storybook/react';
import { AccordionHeader } from './AccordionHeader';

const meta = {
  title: 'Atoms/Accordion/Accordion Headers',
  component: AccordionHeader,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Accordion Headers - Figma Design System

Comprehensive accordion header component matching exact Figma specifications.

## Sizes
- **Small**: 18px Archivo title
- **Default**: 19px Archivo title  
- **Large**: 24px Archivo title

## Icon Styles
- **Plus**: Shows +/- icons for toggle
- **Chevron**: Shows up/down chevrons for toggle

## Positions
- **Default (Middle)**: Content aligned to center
- **Top**: Content aligned to top
- **Bottom**: Content aligned to bottom

## States
- **Default**: Normal state
- **Hover**: Hover interaction
- **Selected**: Open/active state
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Header size variant',
    },
    iconStyle: {
      control: 'select',
      options: ['plus', 'default (chevron)'],
      description: 'Toggle icon style',
    },
    position: {
      control: 'select',
      options: ['default (middle)', 'top', 'bottom'],
      description: 'Content alignment position',
    },
    contentType: {
      control: 'select',
      options: ['N/A', 'header'],
      description: 'Content type variant',
    },
    open: {
      control: 'boolean',
      description: 'Open/closed state',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'selected'],
      description: 'Interactive state',
    },
    title: {
      control: 'text',
      description: 'Header title text',
    },
    showStatus: {
      control: 'boolean',
      description: 'Show status icon',
    },
    showIcon: {
      control: 'boolean',
      description: 'Show bell ring icon',
    },
  },
} satisfies Meta<typeof AccordionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// ===== SMALL SIZE VARIANTS =====

export const SmallPlusDefaultClosed: Story = {
  args: {
    size: 'small',
    iconStyle: 'plus',
    position: 'default (middle)',
    contentType: 'N/A',
    open: false,
    state: 'default',
    title: 'This is an accordion section title',
    showStatus: true,
    showIcon: true,
  },
};

export const SmallPlusDefaultClosedHover: Story = {
  args: {
    ...SmallPlusDefaultClosed.args,
    state: 'hover',
  },
};

export const SmallPlusDefaultOpen: Story = {
  args: {
    ...SmallPlusDefaultClosed.args,
    open: true,
    state: 'selected',
  },
};

export const SmallPlusDefaultOpenHover: Story = {
  args: {
    ...SmallPlusDefaultOpen.args,
    state: 'hover',
  },
};

export const SmallPlusBottomClosed: Story = {
  args: {
    ...SmallPlusDefaultClosed.args,
    position: 'bottom',
  },
};

export const SmallPlusBottomOpen: Story = {
  args: {
    ...SmallPlusBottomClosed.args,
    open: true,
    state: 'selected',
  },
};

export const SmallPlusTopClosed: Story = {
  args: {
    ...SmallPlusDefaultClosed.args,
    position: 'top',
  },
};

export const SmallPlusTopOpen: Story = {
  args: {
    ...SmallPlusTopClosed.args,
    open: true,
    state: 'selected',
  },
};

export const SmallChevronDefaultClosed: Story = {
  args: {
    ...SmallPlusDefaultClosed.args,
    iconStyle: 'default (chevron)',
  },
};

export const SmallChevronDefaultOpen: Story = {
  args: {
    ...SmallChevronDefaultClosed.args,
    open: true,
    state: 'selected',
  },
};

export const SmallChevronBottomClosed: Story = {
  args: {
    ...SmallChevronDefaultClosed.args,
    position: 'bottom',
  },
};

export const SmallChevronBottomOpen: Story = {
  args: {
    ...SmallChevronBottomClosed.args,
    open: true,
    state: 'selected',
  },
};

export const SmallChevronTopClosed: Story = {
  args: {
    ...SmallChevronDefaultClosed.args,
    position: 'top',
  },
};

export const SmallChevronTopOpen: Story = {
  args: {
    ...SmallChevronTopClosed.args,
    open: true,
    state: 'selected',
  },
};

// ===== DEFAULT SIZE VARIANTS =====

export const DefaultPlusDefaultClosed: Story = {
  args: {
    size: 'default',
    iconStyle: 'plus',
    position: 'default (middle)',
    contentType: 'N/A',
    open: false,
    state: 'default',
    title: 'This is an accordion section title',
    showStatus: true,
    showIcon: true,
  },
};

export const DefaultPlusDefaultOpen: Story = {
  args: {
    ...DefaultPlusDefaultClosed.args,
    open: true,
    state: 'selected',
  },
};

export const DefaultPlusBottomClosed: Story = {
  args: {
    ...DefaultPlusDefaultClosed.args,
    position: 'bottom',
  },
};

export const DefaultPlusBottomOpen: Story = {
  args: {
    ...DefaultPlusBottomClosed.args,
    open: true,
    state: 'selected',
  },
};

export const DefaultPlusTopClosed: Story = {
  args: {
    ...DefaultPlusDefaultClosed.args,
    position: 'top',
  },
};

export const DefaultPlusTopOpen: Story = {
  args: {
    ...DefaultPlusTopClosed.args,
    open: true,
    state: 'selected',
  },
};

export const DefaultChevronDefaultClosed: Story = {
  args: {
    ...DefaultPlusDefaultClosed.args,
    iconStyle: 'default (chevron)',
  },
};

export const DefaultChevronDefaultOpen: Story = {
  args: {
    ...DefaultChevronDefaultClosed.args,
    open: true,
    state: 'selected',
  },
};

export const DefaultChevronBottomClosed: Story = {
  args: {
    ...DefaultChevronDefaultClosed.args,
    position: 'bottom',
  },
};

export const DefaultChevronBottomOpen: Story = {
  args: {
    ...DefaultChevronBottomClosed.args,
    open: true,
    state: 'selected',
  },
};

export const DefaultChevronTopClosed: Story = {
  args: {
    ...DefaultChevronDefaultClosed.args,
    position: 'top',
  },
};

export const DefaultChevronTopOpen: Story = {
  args: {
    ...DefaultChevronTopClosed.args,
    open: true,
    state: 'selected',
  },
};

// ===== LARGE SIZE VARIANTS =====

export const LargePlusDefaultClosed: Story = {
  args: {
    size: 'large',
    iconStyle: 'plus',
    position: 'default (middle)',
    contentType: 'N/A',
    open: false,
    state: 'default',
    title: 'This is an accordion section title',
    showStatus: true,
    showIcon: true,
  },
};

export const LargePlusDefaultOpen: Story = {
  args: {
    ...LargePlusDefaultClosed.args,
    open: true,
    state: 'selected',
  },
};

export const LargePlusBottomClosed: Story = {
  args: {
    ...LargePlusDefaultClosed.args,
    position: 'bottom',
  },
};

export const LargePlusBottomOpen: Story = {
  args: {
    ...LargePlusBottomClosed.args,
    open: true,
    state: 'selected',
  },
};

export const LargePlusTopClosed: Story = {
  args: {
    ...LargePlusDefaultClosed.args,
    position: 'top',
  },
};

export const LargePlusTopOpen: Story = {
  args: {
    ...LargePlusTopClosed.args,
    open: true,
    state: 'selected',
  },
};

export const LargeChevronDefaultClosed: Story = {
  args: {
    ...LargePlusDefaultClosed.args,
    iconStyle: 'default (chevron)',
  },
};

export const LargeChevronDefaultOpen: Story = {
  args: {
    ...LargeChevronDefaultClosed.args,
    open: true,
    state: 'selected',
  },
};

export const LargeChevronBottomClosed: Story = {
  args: {
    ...LargeChevronDefaultClosed.args,
    position: 'bottom',
  },
};

export const LargeChevronBottomOpen: Story = {
  args: {
    ...LargeChevronBottomClosed.args,
    open: true,
    state: 'selected',
  },
};

export const LargeChevronTopClosed: Story = {
  args: {
    ...LargeChevronDefaultClosed.args,
    position: 'top',
  },
};

export const LargeChevronTopOpen: Story = {
  args: {
    ...LargeChevronTopClosed.args,
    open: true,
    state: 'selected',
  },
};

// ===== SHOWCASE STORIES =====

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '600px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: 600 }}>Small Size</h3>
        <AccordionHeader size="small" iconStyle="plus" />
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: 600 }}>Default Size</h3>
        <AccordionHeader size="default" iconStyle="plus" />
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: 600 }}>Large Size</h3>
        <AccordionHeader size="large" iconStyle="plus" />
      </div>
    </div>
  ),
};

export const AllIconStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '600px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: 600 }}>Plus Icon (Closed)</h3>
        <AccordionHeader iconStyle="plus" open={false} />
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: 600 }}>Plus Icon (Open)</h3>
        <AccordionHeader iconStyle="plus" open={true} />
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: 600 }}>Chevron Icon (Closed)</h3>
        <AccordionHeader iconStyle="default (chevron)" open={false} />
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: 600 }}>Chevron Icon (Open)</h3>
        <AccordionHeader iconStyle="default (chevron)" open={true} />
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '600px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: 600 }}>Default State</h3>
        <AccordionHeader state="default" />
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: 600 }}>Hover State</h3>
        <AccordionHeader state="hover" />
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: 600 }}>Selected State (Open)</h3>
        <AccordionHeader state="selected" open={true} />
      </div>
    </div>
  ),
};

export const AllPositions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '600px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: 600 }}>Default Position (Middle)</h3>
        <AccordionHeader position="default (middle)" />
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: 600 }}>Top Position</h3>
        <AccordionHeader position="top" />
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: 600 }}>Bottom Position</h3>
        <AccordionHeader position="bottom" />
      </div>
    </div>
  ),
};

export const CompleteShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', width: '800px', padding: '24px' }}>
      <div>
        <h2 style={{ marginBottom: '24px', fontFamily: 'Archivo', fontSize: '24px', fontWeight: 700 }}>
          Accordion Headers - Complete Figma Design
        </h2>
        <p style={{ marginBottom: '32px', fontFamily: 'Roboto Flex', fontSize: '16px', color: '#6D7280' }}>
          All accordion header variants matching exact Figma specifications
        </p>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '18px', fontWeight: 600 }}>
          Small Size - Plus Icon
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <AccordionHeader size="small" iconStyle="plus" open={false} state="default" />
          <AccordionHeader size="small" iconStyle="plus" open={false} state="hover" />
          <AccordionHeader size="small" iconStyle="plus" open={true} state="selected" />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '18px', fontWeight: 600 }}>
          Default Size - Chevron Icon
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <AccordionHeader size="default" iconStyle="default (chevron)" open={false} state="default" />
          <AccordionHeader size="default" iconStyle="default (chevron)" open={false} state="hover" />
          <AccordionHeader size="default" iconStyle="default (chevron)" open={true} state="selected" />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '18px', fontWeight: 600 }}>
          Large Size - Plus Icon
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <AccordionHeader size="large" iconStyle="plus" open={false} state="default" />
          <AccordionHeader size="large" iconStyle="plus" open={false} state="hover" />
          <AccordionHeader size="large" iconStyle="plus" open={true} state="selected" />
        </div>
      </div>
    </div>
  ),
};
