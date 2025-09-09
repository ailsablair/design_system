import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import { AccordionHeader } from './AccordionHeader';

const meta: Meta<typeof Accordion> = {
  title: 'Atoms/Accordion/Remaining States',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Accordion Remaining States

This showcase demonstrates all the remaining accordion states from the Figma design, including:

- **Hover States**: All sizes and icon styles with exact \`#F9F9FE\` background
- **Position Variants**: Top, middle, and bottom positions with exact border-radius and padding
- **Open/Closed States**: With proper icon changes (chevron-up/down, plus/minus)
- **Combined States**: Various combinations of hover, open, and position variants

All implementations match the exact Figma specifications for colors, spacing, and typography.
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
    },
    openIcon: {
      control: { type: 'select' },
      options: ['chevron', 'plus'],
    },
    position: {
      control: { type: 'select' },
      options: ['default', 'top', 'bottom'],
    },
    interactionState: {
      control: { type: 'select' },
      options: ['default', 'hover', 'selected'],
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'open'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// Hover States - Chevron Icons
export const HoverStatesChevron: Story = {
  name: 'Hover States - Chevron Icons',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <h3>Hover States - Chevron Icons (Closed)</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Accordion
          size="default"
          openIcon="chevron"
          position="default"
          interactionState="hover"
          state="default"
          title="This is an accordion section title"
        />
        <Accordion
          size="large"
          openIcon="chevron"
          position="default"
          interactionState="hover"
          state="default"
          title="This is an accordion section title"
        />
        <Accordion
          size="small"
          openIcon="chevron"
          position="default"
          interactionState="hover"
          state="default"
          title="This is an accordion section title"
        />
      </div>
    </div>
  ),
};

// Hover States - Plus Icons
export const HoverStatesPlus: Story = {
  name: 'Hover States - Plus Icons',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <h3>Hover States - Plus Icons (Closed)</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Accordion
          size="default"
          openIcon="plus"
          position="default"
          interactionState="hover"
          state="default"
          title="This is an accordion section title"
        />
        <Accordion
          size="large"
          openIcon="plus"
          position="default"
          interactionState="hover"
          state="default"
          title="This is an accordion section title"
        />
        <Accordion
          size="small"
          openIcon="plus"
          position="default"
          interactionState="hover"
          state="default"
          title="This is an accordion section title"
        />
      </div>
    </div>
  ),
};

// Open States with Hover
export const OpenStatesWithHover: Story = {
  name: 'Open States with Hover',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <h3>Open States with Hover - Chevron Icons</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Accordion
          size="default"
          openIcon="chevron"
          position="default"
          interactionState="hover"
          state="open"
          title="This is an accordion section title"
          content="This accordion is open and in hover state, showing chevron-up icon."
        />
        <Accordion
          size="large"
          openIcon="chevron"
          position="default"
          interactionState="hover"
          state="open"
          title="This is an accordion section title"
          content="This accordion is open and in hover state, showing chevron-up icon."
        />
        <Accordion
          size="small"
          openIcon="chevron"
          position="default"
          interactionState="hover"
          state="open"
          title="This is an accordion section title"
          content="This accordion is open and in hover state, showing chevron-up icon."
        />
      </div>
      
      <h3>Open States with Hover - Plus Icons (showing minus)</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Accordion
          size="default"
          openIcon="plus"
          position="default"
          interactionState="hover"
          state="open"
          title="This is an accordion section title"
          content="This accordion is open and in hover state, showing minus icon."
        />
        <Accordion
          size="large"
          openIcon="plus"
          position="default"
          interactionState="hover"
          state="open"
          title="This is an accordion section title"
          content="This accordion is open and in hover state, showing minus icon."
        />
        <Accordion
          size="small"
          openIcon="plus"
          position="default"
          interactionState="hover"
          state="open"
          title="This is an accordion section title"
          content="This accordion is open and in hover state, showing minus icon."
        />
      </div>
    </div>
  ),
};

// Position Variants with Hover
export const PositionVariantsWithHover: Story = {
  name: 'Position Variants with Hover',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <h3>Top Position with Hover States</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Accordion
          size="default"
          openIcon="chevron"
          position="top"
          interactionState="hover"
          state="default"
          title="This is an accordion section title"
        />
        <Accordion
          size="large"
          openIcon="chevron"
          position="top"
          interactionState="hover"
          state="default"
          title="This is an accordion section title"
        />
        <Accordion
          size="small"
          openIcon="chevron"
          position="top"
          interactionState="hover"
          state="default"
          title="This is an accordion section title"
        />
      </div>
      
      <h3>Top Position with Hover - Plus Icons</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Accordion
          size="default"
          openIcon="plus"
          position="top"
          interactionState="hover"
          state="default"
          title="This is an accordion section title"
        />
        <Accordion
          size="large"
          openIcon="plus"
          position="top"
          interactionState="hover"
          state="default"
          title="This is an accordion section title"
        />
        <Accordion
          size="small"
          openIcon="plus"
          position="top"
          interactionState="hover"
          state="default"
          title="This is an accordion section title"
        />
      </div>
    </div>
  ),
};

// Top Position Open States with Hover
export const TopPositionOpenWithHover: Story = {
  name: 'Top Position Open with Hover',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <h3>Top Position Open with Hover - Chevron Icons</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Accordion
          size="default"
          openIcon="chevron"
          position="top"
          interactionState="hover"
          state="open"
          title="This is an accordion section title"
          content="This is a top position accordion that's open and in hover state."
        />
        <Accordion
          size="large"
          openIcon="chevron"
          position="top"
          interactionState="hover"
          state="open"
          title="This is an accordion section title"
          content="This is a top position accordion that's open and in hover state."
        />
        <Accordion
          size="small"
          openIcon="chevron"
          position="top"
          interactionState="hover"
          state="open"
          title="This is an accordion section title"
          content="This is a top position accordion that's open and in hover state."
        />
      </div>
      
      <h3>Top Position Open with Hover - Plus Icons (showing minus)</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Accordion
          size="default"
          openIcon="plus"
          position="top"
          interactionState="hover"
          state="open"
          title="This is an accordion section title"
          content="This is a top position accordion that's open and in hover state."
        />
        <Accordion
          size="large"
          openIcon="plus"
          position="top"
          interactionState="hover"
          state="open"
          title="This is an accordion section title"
          content="This is a top position accordion that's open and in hover state."
        />
        <Accordion
          size="small"
          openIcon="plus"
          position="top"
          interactionState="hover"
          state="open"
          title="This is an accordion section title"
          content="This is a top position accordion that's open and in hover state."
        />
      </div>
    </div>
  ),
};

// Bottom Position with Hover
export const BottomPositionWithHover: Story = {
  name: 'Bottom Position with Hover',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <h3>Bottom Position with Hover States</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Accordion
          size="default"
          openIcon="chevron"
          position="bottom"
          interactionState="hover"
          state="default"
          title="This is an accordion section title"
        />
        <Accordion
          size="large"
          openIcon="chevron"
          position="bottom"
          interactionState="hover"
          state="default"
          title="This is an accordion section title"
        />
        <Accordion
          size="small"
          openIcon="chevron"
          position="bottom"
          interactionState="hover"
          state="default"
          title="This is an accordion section title"
        />
      </div>
      
      <h3>Bottom Position with Hover - Plus Icons</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Accordion
          size="default"
          openIcon="plus"
          position="bottom"
          interactionState="hover"
          state="default"
          title="This is an accordion section title"
        />
        <Accordion
          size="large"
          openIcon="plus"
          position="bottom"
          interactionState="hover"
          state="default"
          title="This is an accordion section title"
        />
        <Accordion
          size="small"
          openIcon="plus"
          position="bottom"
          interactionState="hover"
          state="default"
          title="This is an accordion section title"
        />
      </div>
    </div>
  ),
};

// Bottom Position Open States with Hover
export const BottomPositionOpenWithHover: Story = {
  name: 'Bottom Position Open with Hover',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <h3>Bottom Position Open with Hover - Chevron Icons</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Accordion
          size="default"
          openIcon="chevron"
          position="bottom"
          interactionState="hover"
          state="open"
          title="This is an accordion section title"
          content="This is a bottom position accordion that's open and in hover state."
        />
        <Accordion
          size="large"
          openIcon="chevron"
          position="bottom"
          interactionState="hover"
          state="open"
          title="This is an accordion section title"
          content="This is a bottom position accordion that's open and in hover state."
        />
        <Accordion
          size="small"
          openIcon="chevron"
          position="bottom"
          interactionState="hover"
          state="open"
          title="This is an accordion section title"
          content="This is a bottom position accordion that's open and in hover state."
        />
      </div>
      
      <h3>Bottom Position Open with Hover - Plus Icons (showing minus)</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Accordion
          size="default"
          openIcon="plus"
          position="bottom"
          interactionState="hover"
          state="open"
          title="This is an accordion section title"
          content="This is a bottom position accordion that's open and in hover state."
        />
        <Accordion
          size="large"
          openIcon="plus"
          position="bottom"
          interactionState="hover"
          state="open"
          title="This is an accordion section title"
          content="This is a bottom position accordion that's open and in hover state."
        />
        <Accordion
          size="small"
          openIcon="plus"
          position="bottom"
          interactionState="hover"
          state="open"
          title="This is an accordion section title"
          content="This is a bottom position accordion that's open and in hover state."
        />
      </div>
    </div>
  ),
};

// AccordionHeader Remaining States
export const AccordionHeaderStates: Story = {
  name: 'AccordionHeader Remaining States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <h3>AccordionHeader Hover States - Chevron Icons</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <AccordionHeader
          size="default"
          iconStyle="default (chevron)"
          position="default (middle)"
          open={false}
          state="hover"
          title="This is an accordion section title"
        />
        <AccordionHeader
          size="large"
          iconStyle="default (chevron)"
          position="default (middle)"
          open={false}
          state="hover"
          title="This is an accordion section title"
        />
        <AccordionHeader
          size="small"
          iconStyle="default (chevron)"
          position="default (middle)"
          open={false}
          state="hover"
          title="This is an accordion section title"
        />
      </div>
      
      <h3>AccordionHeader Hover States - Plus Icons</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <AccordionHeader
          size="default"
          iconStyle="plus"
          position="default (middle)"
          open={false}
          state="hover"
          title="This is an accordion section title"
        />
        <AccordionHeader
          size="large"
          iconStyle="plus"
          position="default (middle)"
          open={false}
          state="hover"
          title="This is an accordion section title"
        />
        <AccordionHeader
          size="small"
          iconStyle="plus"
          position="default (middle)"
          open={false}
          state="hover"
          title="This is an accordion section title"
        />
      </div>
      
      <h3>AccordionHeader Open + Hover States</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <AccordionHeader
          size="default"
          iconStyle="default (chevron)"
          position="default (middle)"
          open={true}
          state="hover"
          title="This is an accordion section title"
        />
        <AccordionHeader
          size="default"
          iconStyle="plus"
          position="default (middle)"
          open={true}
          state="hover"
          title="This is an accordion section title"
        />
      </div>
      
      <h3>AccordionHeader Position Variants with Hover</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <AccordionHeader
          size="default"
          iconStyle="default (chevron)"
          position="top"
          open={false}
          state="hover"
          title="This is an accordion section title"
        />
        <AccordionHeader
          size="default"
          iconStyle="default (chevron)"
          position="bottom"
          open={false}
          state="hover"
          title="This is an accordion section title"
        />
        <AccordionHeader
          size="default"
          iconStyle="plus"
          position="top"
          open={false}
          state="hover"
          title="This is an accordion section title"
        />
        <AccordionHeader
          size="default"
          iconStyle="plus"
          position="bottom"
          open={false}
          state="hover"
          title="This is an accordion section title"
        />
      </div>
    </div>
  ),
};

// Interactive Playground
export const InteractivePlayground: Story = {
  name: 'Interactive Playground',
  render: (args) => (
    <div style={{ padding: '20px' }}>
      <h3>Interactive Accordion with All States</h3>
      <p>Use the controls to test different combinations of states:</p>
      <Accordion {...args} />
    </div>
  ),
  args: {
    size: 'default',
    openIcon: 'chevron',
    position: 'default',
    interactionState: 'hover',
    state: 'default',
    title: 'This is an accordion section title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Use the controls to test different state combinations.',
  },
};

// Complete State Matrix
export const CompleteStateMatrix: Story = {
  name: 'Complete State Matrix',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px', padding: '20px' }}>
      <div>
        <h4>Default + Hover</h4>
        <Accordion size="default" openIcon="chevron" interactionState="hover" state="default" title="Chevron Hover" />
        <br />
        <Accordion size="default" openIcon="plus" interactionState="hover" state="default" title="Plus Hover" />
      </div>
      
      <div>
        <h4>Open + Hover</h4>
        <Accordion size="default" openIcon="chevron" interactionState="hover" state="open" title="Chevron Open + Hover" content="Content here" />
        <br />
        <Accordion size="default" openIcon="plus" interactionState="hover" state="open" title="Plus Open + Hover" content="Content here" />
      </div>
      
      <div>
        <h4>Top Position + Hover</h4>
        <Accordion size="default" openIcon="chevron" position="top" interactionState="hover" state="default" title="Top Chevron Hover" />
        <br />
        <Accordion size="default" openIcon="plus" position="top" interactionState="hover" state="default" title="Top Plus Hover" />
      </div>
      
      <div>
        <h4>Bottom Position + Hover</h4>
        <Accordion size="default" openIcon="chevron" position="bottom" interactionState="hover" state="default" title="Bottom Chevron Hover" />
        <br />
        <Accordion size="default" openIcon="plus" position="bottom" interactionState="hover" state="default" title="Bottom Plus Hover" />
      </div>
      
      <div>
        <h4>Top Position Open + Hover</h4>
        <Accordion size="default" openIcon="chevron" position="top" interactionState="hover" state="open" title="Top Open + Hover" content="Content" />
      </div>
      
      <div>
        <h4>Bottom Position Open + Hover</h4>
        <Accordion size="default" openIcon="chevron" position="bottom" interactionState="hover" state="open" title="Bottom Open + Hover" content="Content" />
      </div>
    </div>
  ),
};
