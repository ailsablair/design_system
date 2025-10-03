import type { Meta, StoryObj } from '@storybook/react-vite';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from '../building-blocks/Accordion';
import './figmaUpdates.css';

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

const variantColumnClass = 'accordion-variant-showcase';
const decorativeColumnClass = 'accordion-decorative-showcase';
const headingClass = 'accordion-variant-heading';

// Simple accordions with exact Figma specifications
export const SimpleAccordions: Story = {
  render: () => (
    <div className={variantColumnClass}>
      <h3 className={headingClass}>Simple Accordions - Default Size</h3>
      <Accordion
        type="simple"
        size="default"
        openIcon="default (chevron)"
        state="open"
        title="This is a section title taking up a lot of space..."
        description="This is supporting text to help describe the content within the accordion"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc."
      />

      <h3 className={headingClass}>Simple Accordions - Large Size</h3>
      <Accordion
        type="simple"
        size="large"
        openIcon="default (chevron)"
        state="open"
        title="This is a section title taking up a lot of space..."
        description="This is supporting text to help describe the content within the accordion"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc."
      />

      <h3 className={headingClass}>Simple Accordions - Small Size</h3>
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
    <div className={variantColumnClass}>
      <h3 className={headingClass}>Simple Accordions with Plus Icons</h3>
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
