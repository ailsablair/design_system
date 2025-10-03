import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import { AccordionFigma } from './AccordionFigma';

const meta: Meta<typeof Accordion> = {
  title: 'Atoms/Accordion/Figma Updates',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Updated accordions to match exact Figma specifications with pixel-perfect implementation.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Simple accordions with exact Figma specifications
export const SimpleAccordions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '900px' }}>
      <h3>Simple Accordions - Default Size</h3>
      <Accordion 
        type="simple" 
        size="default" 
        openIcon="default (chevron)"
        state="open"
        title="This is a section title taking up a lot of space..."
        description="This is supporting text to help describe the content within the accordion"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc."
      />
      
      <h3>Simple Accordions - Large Size</h3>
      <Accordion 
        type="simple" 
        size="large" 
        openIcon="default (chevron)"
        state="open"
        title="This is a section title taking up a lot of space..."
        description="This is supporting text to help describe the content within the accordion"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc."
      />
      
      <h3>Simple Accordions - Small Size</h3>
      <Accordion 
        type="simple" 
        size="small" 
        openIcon="default (chevron)"
        state="open"
        title="This is a section title taking up a lot of space..."
        description="This is supporting text to help describe the content within the accordion"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc."
      />
    </div>
  ),
};

// Plus icon variants
export const PlusIconAccordions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '900px' }}>
      <h3>Simple Accordions with Plus Icons</h3>
      <Accordion 
        type="simple" 
        size="default" 
        openIcon="plus"
        state="open"
        title="This is a section title taking up a lot of space..."
        description="This is supporting text to help describe the content within the accordion"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc."
      />
      
      <Accordion 
        type="simple" 
        size="large" 
        openIcon="plus"
        state="open"
        title="This is a section title taking up a lot of space..."
        description="This is supporting text to help describe the content within the accordion"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc."
      />
      
      <Accordion 
        type="simple" 
        size="small" 
        openIcon="plus"
        state="open"
        title="This is a section title taking up a lot of space..."
        description="This is supporting text to help describe the content within the accordion"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc."
      />
    </div>
  ),
};

// No-stroke accordions
export const NoStrokeAccordions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '900px' }}>
      <h3>No-Stroke Accordions</h3>
      <Accordion 
        type="no-stroke" 
        size="default" 
        openIcon="default (chevron)"
        state="open"
        title="This is a section title or a long question taking up a lot of space..."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc."
      />
      
      <Accordion 
        type="no-stroke" 
        size="large" 
        openIcon="default (chevron)"
        state="open"
        title="This is a section title or a long question taking up a lot of space..."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc."
      />
      
      <Accordion 
        type="no-stroke" 
        size="small" 
        openIcon="default (chevron)"
        state="open"
        title="This is a section title or a long question taking up a lot of space..."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc."
      />
    </div>
  ),
};

// Decorative accordions
export const DecorativeAccordions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '500px' }}>
      <h3>Decorative Accordions</h3>
      <Accordion 
        type="decorative" 
        size="default" 
        openIcon="default (chevron)"
        state="open"
        title="This is a decorative accordion..."
        content="This is the text under an accordion heading. It can span for as long as needed, but I would suggest not exceeding a height of 400px for this width. If you need something taller, try our default sized accordions."
      />
      
      <Accordion 
        type="decorative" 
        size="large" 
        openIcon="default (chevron)"
        state="open"
        title="This is a decorative accordion..."
        content="This is the text under an accordion heading. It can span for as long as needed, but I would suggest not exceeding a height of 400px for this width. If you need something taller, try our default sized accordions."
      />
      
      <Accordion 
        type="decorative" 
        size="small" 
        openIcon="default (chevron)"
        state="open"
        title="This is a decorative accordion..."
        content="This is the text under an accordion heading. It can span for as long as needed, but I would suggest not exceeding a height of 400px for this width. If you need something taller, try our default sized accordions."
      />
    </div>
  ),
};

// Number accordions
export const NumberAccordions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '500px' }}>
      <h3>Number Accordions</h3>
      <Accordion 
        type="number" 
        size="default" 
        openIcon="default (chevron)"
        state="open"
        number="01"
        title="This is a numbered accordion list..."
        content="This is the text under an accordion heading. It can span for as long as needed, but I would suggest not exceeding a height of 600px for this width. If you need something taller, try our default sized accordions."
      />
      
      <Accordion 
        type="number" 
        size="large" 
        openIcon="default (chevron)"
        state="open"
        number="01"
        title="This is a numbered accordion list..."
        content="This is the text under an accordion heading. It can span for as long as needed, but I would suggest not exceeding a height of 600px for this width. If you need something taller, try our default sized accordions."
      />
      
      <Accordion 
        type="number" 
        size="small" 
        openIcon="default (chevron)"
        state="open"
        number="01"
        title="This is a numbered accordion list..."
        content="This is the text under an accordion heading. It can span for as long as needed, but I would suggest not exceeding a height of 600px for this width. If you need something taller, try our default sized accordions."
      />
    </div>
  ),
};

// Label accordions (placeholder for the tag component)
export const LabelAccordions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '500px' }}>
      <h3>Label Accordions</h3>
      <Accordion 
        type="label" 
        size="default" 
        openIcon="default (chevron)"
        state="open"
        title="This is a label accordion list..."
        label={<div style={{ 
          display: 'inline-flex', 
          padding: '2px 6px', 
          borderRadius: '99999px', 
          border: '1px solid #54C1F0', 
          background: '#0BA7EA', 
          color: 'white', 
          fontSize: '14px',
          alignItems: 'center',
          gap: '4px'
        }}>
          <span>⚡</span>
          Label
        </div>}
        content="This is the text under an accordion heading. It can span for as long as needed, but I would suggest not exceeding a height of 600px for this width. If you need something taller, try our default sized accordions."
      />
    </div>
  ),
};
