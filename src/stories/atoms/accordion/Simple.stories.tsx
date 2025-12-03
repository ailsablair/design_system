import type { Meta, StoryObj } from '@storybook/react-vite';
import Simple from './Simple';
import './simple.css';
import './simple.stories.css';

const meta: Meta<typeof Simple> = {
  title: 'Atoms/Accordion/Simple',
  component: Simple,
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
type Story = StoryObj<typeof Simple>;

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
    <div className="accordion-simple-story-vertical-group">
      <Simple
        type="simple"
        state="default"
        size="default"
        openIcon="chevron"
        statusType="complete"
      />
      <Simple
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
    <div className="accordion-simple-story-vertical-group">
      <Simple
        type="simple"
        state="default"
        size="large"
        openIcon="chevron"
        statusType="complete"
      />
      <Simple
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
    <div className="accordion-simple-story-vertical-group">
      <Simple
        type="simple"
        state="default"
        size="small"
        openIcon="chevron"
        statusType="complete"
      />
      <Simple
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
    <div className="accordion-simple-story-vertical-group">
      <h3 className="accordion-simple-story-size-heading">Default Size</h3>
      <Simple
        type="simple"
        state="default"
        size="default"
        openIcon="plus"
        statusType="complete"
      />
      <Simple
        type="simple"
        state="open"
        size="default"
        openIcon="plus"
        statusType="complete"
      />
      
      <h3 className="accordion-simple-story-size-heading-with-margin">Large Size</h3>
      <Simple
        type="simple"
        state="default"
        size="large"
        openIcon="plus"
        statusType="complete"
      />
      <Simple
        type="simple"
        state="open"
        size="large"
        openIcon="plus"
        statusType="complete"
      />
      
      <h3 className="accordion-simple-story-size-heading-with-margin">Small Size</h3>
      <Simple
        type="simple"
        state="default"
        size="small"
        openIcon="plus"
        statusType="complete"
      />
      <Simple
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
    <div className="accordion-simple-story-vertical-group">
      <Simple
        type="no-stroke"
        state="default"
        size="default"
        openIcon="chevron"
        title="This is a section title or a long question taking up a lot of space..."
      />
      <Simple
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
    <div className="accordion-simple-story-vertical-group">
      <Simple
        type="no-stroke"
        state="default"
        size="large"
        openIcon="chevron"
        title="This is a section title or a long question taking up a lot of space..."
      />
      <Simple
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
    <div className="accordion-simple-story-vertical-group">
      <Simple
        type="no-stroke"
        state="default"
        size="small"
        openIcon="chevron"
        title="This is a section title or a long question taking up a lot of space..."
      />
      <Simple
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
    <div className="accordion-simple-story-vertical-group">
      <h3 className="accordion-simple-story-size-heading">Default Size</h3>
      <Simple
        type="no-stroke"
        state="default"
        size="default"
        openIcon="plus"
        title="This is a section title or a long question taking up a lot of space..."
      />
      <Simple
        type="no-stroke"
        state="open"
        size="default"
        openIcon="plus"
        title="This is a section title or a long question taking up a lot of space..."
      />
      
      <h3 className="accordion-simple-story-size-heading-with-margin">Large Size</h3>
      <Simple
        type="no-stroke"
        state="default"
        size="large"
        openIcon="plus"
        title="This is a section title or a long question taking up a lot of space..."
      />
      <Simple
        type="no-stroke"
        state="open"
        size="large"
        openIcon="plus"
        title="This is a section title or a long question taking up a lot of space..."
      />
      
      <h3 className="accordion-simple-story-size-heading-with-margin">Small Size</h3>
      <Simple
        type="no-stroke"
        state="default"
        size="small"
        openIcon="plus"
        title="This is a section title or a long question taking up a lot of space..."
      />
      <Simple
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
    <div className="accordion-simple-story-variant-sections">
      <div>
        <h2 className="accordion-simple-story-variant-heading">Simple Type - Default Size - Chevron</h2>
        <div className="accordion-simple-story-variant-column">
          <Simple type="simple" state="default" size="default" openIcon="chevron" statusType="complete" />
          <Simple type="simple" state="open" size="default" openIcon="chevron" statusType="complete" />
        </div>
      </div>
      
      <div>
        <h2 className="accordion-simple-story-variant-heading">Simple Type - Large Size - Chevron</h2>
        <div className="accordion-simple-story-variant-column">
          <Simple type="simple" state="default" size="large" openIcon="chevron" statusType="complete" />
          <Simple type="simple" state="open" size="large" openIcon="chevron" statusType="complete" />
        </div>
      </div>
      
      <div>
        <h2 className="accordion-simple-story-variant-heading">Simple Type - Small Size - Chevron</h2>
        <div className="accordion-simple-story-variant-column">
          <Simple type="simple" state="default" size="small" openIcon="chevron" statusType="complete" />
          <Simple type="simple" state="open" size="small" openIcon="chevron" statusType="complete" />
        </div>
      </div>
      
      <div>
        <h2 className="accordion-simple-story-variant-heading">Simple Type - Plus Icon</h2>
        <div className="accordion-simple-story-variant-column">
          <Simple type="simple" state="default" size="default" openIcon="plus" statusType="complete" />
          <Simple type="simple" state="open" size="default" openIcon="plus" statusType="complete" />
        </div>
      </div>
      
      <div>
        <h2 className="accordion-simple-story-variant-heading">No-Stroke Type - Default Size</h2>
        <div className="accordion-simple-story-variant-column">
          <Simple type="no-stroke" state="default" size="default" openIcon="chevron" title="This is a section title or a long question taking up a lot of space..." />
          <Simple type="no-stroke" state="open" size="default" openIcon="chevron" title="This is a section title or a long question taking up a lot of space..." />
        </div>
      </div>
      
      <div>
        <h2 className="accordion-simple-story-variant-heading">No-Stroke Type - Plus Icon</h2>
        <div className="accordion-simple-story-variant-column">
          <Simple type="no-stroke" state="default" size="default" openIcon="plus" title="This is a section title or a long question taking up a lot of space..." />
          <Simple type="no-stroke" state="open" size="default" openIcon="plus" title="This is a section title or a long question taking up a lot of space..." />
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
