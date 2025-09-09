import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Atoms/Accordion/Open States',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Accordion Open States - Figma Implementation

This story showcases the exact open accordion states from the Figma design, demonstrating:

- **Type variants**: contained, top, middle, bottom
- **Size variants**: small, default, large  
- **All accordions shown in open state** with content visible
- **Exact border configurations** for each position
- **Proper content spacing** and alignment

All implementations match the Figma specifications pixel-perfectly.
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['contained', 'top', 'middle', 'bottom'],
      description: 'Type variant affecting border radius and positioning',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
      description: 'Size variant affecting typography and spacing',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'open'],
      description: 'Open/closed state of the accordion',
    },
    isOpen: {
      control: { type: 'boolean' },
      description: 'Controlled open state',
    },
    title: {
      control: { type: 'text' },
      description: 'Title text content',
    },
    content: {
      control: { type: 'text' },
      description: 'Body content text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// Default content for all stories
const defaultContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.";

// Individual type variants - Default size
export const ContainedDefault: Story = {
  args: {
    type: 'contained',
    size: 'default',
    isOpen: true,
    title: 'This is an accordion section title',
    content: defaultContent,
    showIcon: true,
  },
};

export const TopDefault: Story = {
  args: {
    type: 'top', 
    size: 'default',
    isOpen: true,
    title: 'This is an accordion section title',
    content: defaultContent,
    showIcon: true,
  },
};

export const MiddleDefault: Story = {
  args: {
    type: 'middle',
    size: 'default', 
    isOpen: true,
    title: 'This is an accordion section title',
    content: defaultContent,
    showIcon: true,
  },
};

export const BottomDefault: Story = {
  args: {
    type: 'bottom',
    size: 'default',
    isOpen: true,
    title: 'This is an accordion section title', 
    content: defaultContent,
    showIcon: true,
  },
};

// Large size variants
export const ContainedLarge: Story = {
  args: {
    type: 'contained',
    size: 'large',
    isOpen: true,
    title: 'This is an accordion section title',
    content: defaultContent,
    showIcon: true,
  },
};

export const TopLarge: Story = {
  args: {
    type: 'top',
    size: 'large', 
    isOpen: true,
    title: 'This is an accordion section title',
    content: defaultContent,
    showIcon: true,
  },
};

export const MiddleLarge: Story = {
  args: {
    type: 'middle',
    size: 'large',
    isOpen: true,
    title: 'This is an accordion section title',
    content: defaultContent,
    showIcon: true,
  },
};

export const BottomLarge: Story = {
  args: {
    type: 'bottom',
    size: 'large',
    isOpen: true,
    title: 'This is an accordion section title',
    content: defaultContent,
    showIcon: true,
  },
};

// Small size variants
export const ContainedSmall: Story = {
  args: {
    type: 'contained',
    size: 'small',
    isOpen: true,
    title: 'This is an accordion section title',
    content: defaultContent,
    showIcon: true,
  },
};

export const TopSmall: Story = {
  args: {
    type: 'top',
    size: 'small',
    isOpen: true,
    title: 'This is an accordion section title',
    content: defaultContent,
    showIcon: true,
  },
};

export const MiddleSmall: Story = {
  args: {
    type: 'middle',
    size: 'small',
    isOpen: true,
    title: 'This is an accordion section title',
    content: defaultContent,
    showIcon: true,
  },
};

export const BottomSmall: Story = {
  args: {
    type: 'bottom',
    size: 'small',
    isOpen: true,
    title: 'This is an accordion section title',
    content: defaultContent,
    showIcon: true,
  },
};

// Complete accordion group example (as shown in Figma)
export const AccordionGroup: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '0px', 
      width: '100%',
      maxWidth: '600px' 
    }}>
      <Accordion
        type="top"
        size="default"
        isOpen={true}
        title="First accordion section"
        content={defaultContent}
        showIcon={true}
      />
      <Accordion
        type="middle"
        size="default"
        isOpen={true}
        title="Second accordion section"
        content={defaultContent}
        showIcon={true}
      />
      <Accordion
        type="middle"
        size="default"
        isOpen={true}
        title="Third accordion section"
        content={defaultContent}
        showIcon={true}
      />
      <Accordion
        type="bottom"
        size="default"
        isOpen={true}
        title="Fourth accordion section"
        content={defaultContent}
        showIcon={true}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete accordion group showing how top, middle, and bottom types work together to create a seamless multi-panel interface.',
      },
    },
  },
};

// Size comparison - all types at different sizes
export const SizeComparison: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '24px',
      width: '100%'
    }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Small Size</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Accordion type="contained" size="small" isOpen={true} title="Contained Small" content={defaultContent} showIcon={true} />
          <Accordion type="top" size="small" isOpen={true} title="Top Small" content={defaultContent} showIcon={true} />
          <Accordion type="middle" size="small" isOpen={true} title="Middle Small" content={defaultContent} showIcon={true} />
          <Accordion type="bottom" size="small" isOpen={true} title="Bottom Small" content={defaultContent} showIcon={true} />
        </div>
      </div>
      
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Default Size</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Accordion type="contained" size="default" isOpen={true} title="Contained Default" content={defaultContent} showIcon={true} />
          <Accordion type="top" size="default" isOpen={true} title="Top Default" content={defaultContent} showIcon={true} />
          <Accordion type="middle" size="default" isOpen={true} title="Middle Default" content={defaultContent} showIcon={true} />
          <Accordion type="bottom" size="default" isOpen={true} title="Bottom Default" content={defaultContent} showIcon={true} />
        </div>
      </div>
      
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Large Size</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Accordion type="contained" size="large" isOpen={true} title="Contained Large" content={defaultContent} showIcon={true} />
          <Accordion type="top" size="large" isOpen={true} title="Top Large" content={defaultContent} showIcon={true} />
          <Accordion type="middle" size="large" isOpen={true} title="Middle Large" content={defaultContent} showIcon={true} />
          <Accordion type="bottom" size="large" isOpen={true} title="Bottom Large" content={defaultContent} showIcon={true} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all type variants across the three size options (small, default, large), demonstrating consistent scaling and typography.',
      },
    },
  },
};

// Interactive example - toggleable states
export const InteractiveExample: Story = {
  render: () => {
    const [openStates, setOpenStates] = React.useState({
      first: true,
      second: true, 
      third: false,
      fourth: false,
    });

    const handleToggle = (key: string) => {
      setOpenStates(prev => ({
        ...prev,
        [key]: !prev[key as keyof typeof prev]
      }));
    };

    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '0px', 
        width: '100%',
        maxWidth: '600px' 
      }}>
        <Accordion
          type="top"
          size="default"
          isOpen={openStates.first}
          onToggle={() => handleToggle('first')}
          title="First accordion section (click to toggle)"
          content={defaultContent}
          showIcon={true}
        />
        <Accordion
          type="middle"
          size="default"
          isOpen={openStates.second}
          onToggle={() => handleToggle('second')}
          title="Second accordion section (click to toggle)"
          content={defaultContent}
          showIcon={true}
        />
        <Accordion
          type="middle"
          size="default"
          isOpen={openStates.third}
          onToggle={() => handleToggle('third')}
          title="Third accordion section (click to toggle)"
          content={defaultContent}
          showIcon={true}
        />
        <Accordion
          type="bottom"
          size="default"
          isOpen={openStates.fourth}
          onToggle={() => handleToggle('fourth')}
          title="Fourth accordion section (click to toggle)"
          content={defaultContent}
          showIcon={true}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive accordion group where you can click to toggle individual sections. Demonstrates the proper border configurations and animations.',
      },
    },
  },
};
