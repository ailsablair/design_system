import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Design System/Molecules/Building Blocks/Accordion/Content Types',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Accordion Content Types

This showcase demonstrates all accordion content types from the Figma design:

- **Text**: Simple text content with exact typography for each size
- **List**: Items with checkmark icons and proper spacing
- **Text-Image**: Text content combined with image components
- **Metrics**: Multi-stat display with project statistics

All content types support three sizes (small, default, large) with exact Figma typography specifications and responsive design.
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
    },
    contentType: {
      control: { type: 'select' },
      options: ['text', 'list', 'text-img', 'metrics'],
    },
    position: {
      control: { type: 'select' },
      options: ['default', 'top', 'bottom'],
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'open'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// Default sample content
const sampleContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.";

const sampleListItems = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien."
];

// Text Content Type
export const TextContent: Story = {
  name: 'Text Content - All Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}>
      <h3>Text Content Type</h3>
      
      <h4>Small Size</h4>
      <Accordion
        size="small"
        contentType="text"
        state="open"
        title="This is an accordion section title"
        content={sampleContent}
      />
      
      <h4>Default Size</h4>
      <Accordion
        size="default"
        contentType="text"
        state="open"
        title="This is an accordion section title"
        content={sampleContent}
      />
      
      <h4>Large Size</h4>
      <Accordion
        size="large"
        contentType="text"
        state="open"
        title="This is an accordion section title"
        content={sampleContent}
      />
    </div>
  ),
};

// List Content Type
export const ListContent: Story = {
  name: 'List Content - All Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}>
      <h3>List Content Type</h3>
      
      <h4>Small Size</h4>
      <Accordion
        size="small"
        contentType="list"
        state="open"
        title="This is an accordion section title"
        listItems={sampleListItems}
      />
      
      <h4>Default Size</h4>
      <Accordion
        size="default"
        contentType="list"
        state="open"
        title="This is an accordion section title"
        listItems={sampleListItems}
      />
      
      <h4>Large Size</h4>
      <Accordion
        size="large"
        contentType="list"
        state="open"
        title="This is an accordion section title"
        listItems={sampleListItems}
      />
    </div>
  ),
};

// Text-Image Content Type
export const TextImageContent: Story = {
  name: 'Text-Image Content - All Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}>
      <h3>Text-Image Content Type</h3>
      
      <h4>Small Size</h4>
      <Accordion
        size="small"
        contentType="text-img"
        state="open"
        title="This is an accordion section title"
        content={sampleContent}
      />
      
      <h4>Default Size</h4>
      <Accordion
        size="default"
        contentType="text-img"
        state="open"
        title="This is an accordion section title"
        content={sampleContent}
      />
      
      <h4>Large Size</h4>
      <Accordion
        size="large"
        contentType="text-img"
        state="open"
        title="This is an accordion section title"
        content={sampleContent}
      />
    </div>
  ),
};

// Metrics Content Type
export const MetricsContent: Story = {
  name: 'Metrics Content - All Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}>
      <h3>Metrics Content Type</h3>
      
      <h4>Small Size</h4>
      <Accordion
        size="small"
        contentType="metrics"
        state="open"
        title="This is an accordion section title"
        metrics={{
          projectsCompleted: '235,000',
          status: 'On time',
          users: '3,500'
        }}
      />
      
      <h4>Default Size</h4>
      <Accordion
        size="default"
        contentType="metrics"
        state="open"
        title="This is an accordion section title"
        metrics={{
          projectsCompleted: '235,000',
          status: 'On time',
          users: '3,500'
        }}
      />
      
      <h4>Large Size</h4>
      <Accordion
        size="large"
        contentType="metrics"
        state="open"
        title="This is an accordion section title"
        metrics={{
          projectsCompleted: '235,000',
          status: 'On time',
          users: '3,500'
        }}
      />
    </div>
  ),
};

// Position Variants with Different Content Types
export const PositionVariants: Story = {
  name: 'Position Variants - Different Content Types',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <h3>Position Variants with Content Types</h3>
      
      <h4>Text Content - Bottom Position</h4>
      <Accordion
        size="default"
        position="bottom"
        contentType="text"
        state="open"
        title="This is an accordion section title"
        content={sampleContent}
      />
      
      <h4>List Content - Bottom Position</h4>
      <Accordion
        size="small"
        position="bottom"
        contentType="list"
        state="open"
        title="This is an accordion section title"
        listItems={sampleListItems}
      />
      
      <h4>Metrics Content - Bottom Position</h4>
      <Accordion
        size="default"
        position="bottom"
        contentType="metrics"
        state="open"
        title="This is an accordion section title"
        metrics={{
          projectsCompleted: '235,000',
          status: 'On time',
          users: '3,500'
        }}
      />
      
      <h4>Text-Image Content - Bottom Position</h4>
      <Accordion
        size="default"
        position="bottom"
        contentType="text-img"
        state="open"
        title="This is an accordion section title"
        content={sampleContent}
      />
    </div>
  ),
};

// Complete Content Type Matrix
export const ContentTypeMatrix: Story = {
  name: 'Complete Content Type Matrix',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px', padding: '20px' }}>
      <div>
        <h4>Text Content (Small)</h4>
        <Accordion
          size="small"
          contentType="text"
          state="open"
          title="Text Content"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia."
        />
      </div>
      
      <div>
        <h4>List Content (Default)</h4>
        <Accordion
          size="default"
          contentType="list"
          state="open"
          title="List Content"
          listItems={[
            "First item with checkmark icon",
            "Second item with checkmark icon",
            "Third item with checkmark icon"
          ]}
        />
      </div>
      
      <div>
        <h4>Metrics Content (Large)</h4>
        <Accordion
          size="large"
          contentType="metrics"
          state="open"
          title="Metrics Content"
          metrics={{
            projectsCompleted: '235,000',
            status: 'On time',
            users: '3,500'
          }}
        />
      </div>
      
      <div>
        <h4>Text-Image Content (Default)</h4>
        <Accordion
          size="default"
          contentType="text-img"
          state="open"
          title="Text-Image Content"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia."
        />
      </div>
      
      <div>
        <h4>Text Content - Bottom Position</h4>
        <Accordion
          size="default"
          position="bottom"
          contentType="text"
          state="open"
          title="Bottom Position"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
      
      <div>
        <h4>Metrics Content - Small Size</h4>
        <Accordion
          size="small"
          contentType="metrics"
          state="open"
          title="Small Metrics"
          metrics={{
            projectsCompleted: '150K',
            status: 'Active',
            users: '2.1K'
          }}
        />
      </div>
    </div>
  ),
};

// Interactive Content Types
export const InteractiveContentTypes: Story = {
  name: 'Interactive Content Types',
  render: (args) => (
    <div style={{ padding: '20px' }}>
      <h3>Interactive Accordion with Content Types</h3>
      <p>Use the controls to test different content types and configurations:</p>
      <Accordion {...args} />
    </div>
  ),
  args: {
    size: 'default',
    contentType: 'text',
    position: 'default',
    state: 'open',
    title: 'This is an accordion section title',
    content: sampleContent,
    listItems: sampleListItems,
    metrics: {
      projectsCompleted: '235,000',
      status: 'On time',
      users: '3,500'
    },
  },
};

// Closed State Examples
export const ClosedStateExamples: Story = {
  name: 'Closed State - All Content Types',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}>
      <h3>Closed State - All Content Types</h3>
      <p>Click any accordion to see the content type when opened:</p>
      
      <Accordion
        size="default"
        contentType="text"
        state="default"
        title="Text Content - Click to Open"
        content={sampleContent}
      />
      
      <Accordion
        size="default"
        contentType="list"
        state="default"
        title="List Content - Click to Open"
        listItems={sampleListItems}
      />
      
      <Accordion
        size="default"
        contentType="text-img"
        state="default"
        title="Text-Image Content - Click to Open"
        content={sampleContent}
      />
      
      <Accordion
        size="default"
        contentType="metrics"
        state="default"
        title="Metrics Content - Click to Open"
        metrics={{
          projectsCompleted: '235,000',
          status: 'On time',
          users: '3,500'
        }}
      />
    </div>
  ),
};

// Custom Metrics Examples
export const CustomMetricsExamples: Story = {
  name: 'Custom Metrics Examples',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}>
      <h3>Custom Metrics Examples</h3>
      
      <Accordion
        size="default"
        contentType="metrics"
        state="open"
        title="Project Performance Metrics"
        metrics={{
          projectsCompleted: '500+',
          status: 'Ahead of schedule',
          users: '10K+'
        }}
      />
      
      <Accordion
        size="large"
        contentType="metrics"
        state="open"
        title="Annual Statistics"
        metrics={{
          projectsCompleted: '1.2M',
          status: 'On track',
          users: '50K'
        }}
      />
      
      <Accordion
        size="small"
        contentType="metrics"
        state="open"
        title="Weekly Summary"
        metrics={{
          projectsCompleted: '127',
          status: 'Complete',
          users: '890'
        }}
      />
    </div>
  ),
};
