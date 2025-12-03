import type { Meta, StoryObj } from '@storybook/react';
import AccordionSimple from './AccordionSimple';
import './accordionSimple.css';

const meta: Meta<typeof AccordionSimple> = {
  title: 'Atoms/🧱 Building Blocks/Accordion Simple',
  component: AccordionSimple,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Accordion component with status indicators, supporting multiple variants, sizes, and states. Built with design tokens for consistency across the design system.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['simple', 'no-stroke'],
      description: 'Accordion type - simple (with status icon) or no-stroke (title only)',
    },
    state: {
      control: 'select',
      options: ['default', 'open'],
      description: 'State of the accordion',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size variant',
    },
    openIcon: {
      control: 'select',
      options: ['chevron', 'plus'],
      description: 'Open icon type',
    },
    statusType: {
      control: 'select',
      options: ['warning', 'complete', 'locked', 'comments', 'notifications', 'error', 'note'],
      description: 'Status type for simple variant',
    },
    showNotificationIcon: {
      control: 'boolean',
      description: 'Show notification icon',
    },
    title: {
      control: 'text',
      description: 'Title text',
    },
    description: {
      control: 'text',
      description: 'Description text',
    },
    content: {
      control: 'text',
      description: 'Content text for open state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AccordionSimple>;

export const Default: Story = {
  args: {
    type: 'simple',
    state: 'default',
    size: 'default',
    openIcon: 'chevron',
    statusType: 'complete',
    showNotificationIcon: true,
  },
};

export const SimpleTypeDefaultSize: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '1000px' }}>
      <AccordionSimple
        type="simple"
        state="default"
        size="default"
        openIcon="chevron"
        statusType="complete"
      />
      <AccordionSimple
        type="simple"
        state="open"
        size="default"
        openIcon="chevron"
        statusType="complete"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Simple accordion type with chevron icon in default size, showing both collapsed and expanded states.',
      },
    },
  },
};

export const SimpleTypeLargeSize: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '1000px' }}>
      <AccordionSimple
        type="simple"
        state="default"
        size="large"
        openIcon="chevron"
        statusType="complete"
      />
      <AccordionSimple
        type="simple"
        state="open"
        size="large"
        openIcon="chevron"
        statusType="complete"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Simple accordion type with chevron icon in large size.',
      },
    },
  },
};

export const SimpleTypeSmallSize: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '1000px' }}>
      <AccordionSimple
        type="simple"
        state="default"
        size="small"
        openIcon="chevron"
        statusType="complete"
      />
      <AccordionSimple
        type="simple"
        state="open"
        size="small"
        openIcon="chevron"
        statusType="complete"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Simple accordion type with chevron icon in small size.',
      },
    },
  },
};

export const SimpleTypePlusIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '1000px' }}>
      <h3 style={{ marginBottom: '16px' }}>Default Size</h3>
      <AccordionSimple
        type="simple"
        state="default"
        size="default"
        openIcon="plus"
        statusType="complete"
      />
      <AccordionSimple
        type="simple"
        state="open"
        size="default"
        openIcon="plus"
        statusType="complete"
      />
      
      <h3 style={{ marginTop: '32px', marginBottom: '16px' }}>Large Size</h3>
      <AccordionSimple
        type="simple"
        state="default"
        size="large"
        openIcon="plus"
        statusType="complete"
      />
      <AccordionSimple
        type="simple"
        state="open"
        size="large"
        openIcon="plus"
        statusType="complete"
      />
      
      <h3 style={{ marginTop: '32px', marginBottom: '16px' }}>Small Size</h3>
      <AccordionSimple
        type="simple"
        state="default"
        size="small"
        openIcon="plus"
        statusType="complete"
      />
      <AccordionSimple
        type="simple"
        state="open"
        size="small"
        openIcon="plus"
        statusType="complete"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Simple accordion type with plus/minus icon in all sizes.',
      },
    },
  },
};

export const NoStrokeTypeDefaultSize: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '1000px' }}>
      <AccordionSimple
        type="no-stroke"
        state="default"
        size="default"
        openIcon="chevron"
        title="This is a section title or a long question taking up a lot of space..."
      />
      <AccordionSimple
        type="no-stroke"
        state="open"
        size="default"
        openIcon="chevron"
        title="This is a section title or a long question taking up a lot of space..."
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'No-stroke accordion type (without status icon) with chevron icon in default size.',
      },
    },
  },
};

export const NoStrokeTypeLargeSize: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '1000px' }}>
      <AccordionSimple
        type="no-stroke"
        state="default"
        size="large"
        openIcon="chevron"
        title="This is a section title or a long question taking up a lot of space..."
      />
      <AccordionSimple
        type="no-stroke"
        state="open"
        size="large"
        openIcon="chevron"
        title="This is a section title or a long question taking up a lot of space..."
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'No-stroke accordion type in large size.',
      },
    },
  },
};

export const NoStrokeTypeSmallSize: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '1000px' }}>
      <AccordionSimple
        type="no-stroke"
        state="default"
        size="small"
        openIcon="chevron"
        title="This is a section title or a long question taking up a lot of space..."
      />
      <AccordionSimple
        type="no-stroke"
        state="open"
        size="small"
        openIcon="chevron"
        title="This is a section title or a long question taking up a lot of space..."
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'No-stroke accordion type in small size.',
      },
    },
  },
};

export const NoStrokeTypePlusIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '1000px' }}>
      <h3 style={{ marginBottom: '16px' }}>Default Size</h3>
      <AccordionSimple
        type="no-stroke"
        state="default"
        size="default"
        openIcon="plus"
        title="This is a section title or a long question taking up a lot of space..."
      />
      <AccordionSimple
        type="no-stroke"
        state="open"
        size="default"
        openIcon="plus"
        title="This is a section title or a long question taking up a lot of space..."
      />
      
      <h3 style={{ marginTop: '32px', marginBottom: '16px' }}>Large Size</h3>
      <AccordionSimple
        type="no-stroke"
        state="default"
        size="large"
        openIcon="plus"
        title="This is a section title or a long question taking up a lot of space..."
      />
      <AccordionSimple
        type="no-stroke"
        state="open"
        size="large"
        openIcon="plus"
        title="This is a section title or a long question taking up a lot of space..."
      />
      
      <h3 style={{ marginTop: '32px', marginBottom: '16px' }}>Small Size</h3>
      <AccordionSimple
        type="no-stroke"
        state="default"
        size="small"
        openIcon="plus"
        title="This is a section title or a long question taking up a lot of space..."
      />
      <AccordionSimple
        type="no-stroke"
        state="open"
        size="small"
        openIcon="plus"
        title="This is a section title or a long question taking up a lot of space..."
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'No-stroke accordion type with plus/minus icon in all sizes.',
      },
    },
  },
};

export const AllVariantsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', maxWidth: '1000px' }}>
      <div>
        <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: 'bold' }}>Simple Type - Default Size - Chevron</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <AccordionSimple type="simple" state="default" size="default" openIcon="chevron" statusType="complete" />
          <AccordionSimple type="simple" state="open" size="default" openIcon="chevron" statusType="complete" />
        </div>
      </div>
      
      <div>
        <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: 'bold' }}>Simple Type - Large Size - Chevron</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <AccordionSimple type="simple" state="default" size="large" openIcon="chevron" statusType="complete" />
          <AccordionSimple type="simple" state="open" size="large" openIcon="chevron" statusType="complete" />
        </div>
      </div>
      
      <div>
        <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: 'bold' }}>Simple Type - Small Size - Chevron</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <AccordionSimple type="simple" state="default" size="small" openIcon="chevron" statusType="complete" />
          <AccordionSimple type="simple" state="open" size="small" openIcon="chevron" statusType="complete" />
        </div>
      </div>
      
      <div>
        <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: 'bold' }}>Simple Type - Plus Icon</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <AccordionSimple type="simple" state="default" size="default" openIcon="plus" statusType="complete" />
          <AccordionSimple type="simple" state="open" size="default" openIcon="plus" statusType="complete" />
        </div>
      </div>
      
      <div>
        <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: 'bold' }}>No-Stroke Type - Default Size</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <AccordionSimple type="no-stroke" state="default" size="default" openIcon="chevron" title="This is a section title or a long question taking up a lot of space..." />
          <AccordionSimple type="no-stroke" state="open" size="default" openIcon="chevron" title="This is a section title or a long question taking up a lot of space..." />
        </div>
      </div>
      
      <div>
        <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: 'bold' }}>No-Stroke Type - Plus Icon</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <AccordionSimple type="no-stroke" state="default" size="default" openIcon="plus" title="This is a section title or a long question taking up a lot of space..." />
          <AccordionSimple type="no-stroke" state="open" size="default" openIcon="plus" title="This is a section title or a long question taking up a lot of space..." />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all accordion variants with different types, sizes, and states.',
      },
    },
  },
};

export const InteractiveExample: Story = {
  args: {
    type: 'simple',
    size: 'default',
    openIcon: 'chevron',
    statusType: 'complete',
    showNotificationIcon: true,
    title: 'Click to expand/collapse this accordion',
    description: 'This is a fully interactive accordion component',
    content: 'This content appears when the accordion is expanded. You can click the chevron icon or anywhere in the header to toggle the accordion state.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive accordion that you can click to expand and collapse. Try it out!',
      },
    },
  },
};
