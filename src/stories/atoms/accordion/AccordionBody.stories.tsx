import type { Meta, StoryObj } from '@storybook/react';
import { AccordionBody } from './AccordionBody';

const meta = {
  title: 'Atoms/Accordion/Body',
  component: AccordionBody,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Accordion body content component with multiple content type variants based on Figma design specifications.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    contentType: {
      control: 'select',
      options: ['text', 'list', 'text-img', 'metrics'],
      description: 'Type of content to display',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size variant matching accordion header',
    },
    position: {
      control: 'select',
      options: ['default (middle)', 'bottom'],
      description: 'Position variant matching accordion header',
    },
    text: {
      control: 'text',
      description: 'Text content for text and text-img types',
    },
    listItems: {
      control: 'object',
      description: 'Array of strings for list type',
    },
    imageSrc: {
      control: 'text',
      description: 'Image source URL for text-img type',
    },
    imageAlt: {
      control: 'text',
      description: 'Image alt text',
    },
    metrics: {
      control: 'object',
      description: 'Array of metric objects with value and label',
    },
  },
} satisfies Meta<typeof AccordionBody>;

export default meta;
type Story = StoryObj<typeof meta>;

// ===== TEXT CONTENT TYPE =====

export const TextSmall: Story = {
  args: {
    contentType: 'text',
    size: 'small',
    position: 'default (middle)',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.',
  },
};

export const TextDefault: Story = {
  args: {
    contentType: 'text',
    size: 'default',
    position: 'default (middle)',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.',
  },
};

export const TextLarge: Story = {
  args: {
    contentType: 'text',
    size: 'large',
    position: 'default (middle)',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.',
  },
};

export const TextSmallBottom: Story = {
  args: {
    contentType: 'text',
    size: 'small',
    position: 'bottom',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.',
  },
};

export const TextDefaultBottom: Story = {
  args: {
    contentType: 'text',
    size: 'default',
    position: 'bottom',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.',
  },
};

export const TextLargeBottom: Story = {
  args: {
    contentType: 'text',
    size: 'large',
    position: 'bottom',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.',
  },
};

// ===== LIST CONTENT TYPE =====

export const ListSmall: Story = {
  args: {
    contentType: 'list',
    size: 'small',
    position: 'default (middle)',
    listItems: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien.',
    ],
  },
};

export const ListDefault: Story = {
  args: {
    contentType: 'list',
    size: 'default',
    position: 'default (middle)',
    listItems: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien.',
    ],
  },
};

export const ListLarge: Story = {
  args: {
    contentType: 'list',
    size: 'large',
    position: 'default (middle)',
    listItems: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien.',
    ],
  },
};

export const ListSmallBottom: Story = {
  args: {
    contentType: 'list',
    size: 'small',
    position: 'bottom',
    listItems: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien.',
    ],
  },
};

export const ListDefaultBottom: Story = {
  args: {
    contentType: 'list',
    size: 'default',
    position: 'bottom',
    listItems: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien.',
    ],
  },
};

export const ListLargeBottom: Story = {
  args: {
    contentType: 'list',
    size: 'large',
    position: 'bottom',
    listItems: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien.',
    ],
  },
};

// ===== TEXT-IMAGE CONTENT TYPE =====

export const TextImageSmall: Story = {
  args: {
    contentType: 'text-img',
    size: 'small',
    position: 'default (middle)',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.',
  },
};

export const TextImageDefault: Story = {
  args: {
    contentType: 'text-img',
    size: 'default',
    position: 'default (middle)',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.',
  },
};

export const TextImageLarge: Story = {
  args: {
    contentType: 'text-img',
    size: 'large',
    position: 'default (middle)',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.',
  },
};

export const TextImageSmallBottom: Story = {
  args: {
    contentType: 'text-img',
    size: 'small',
    position: 'bottom',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.',
  },
};

export const TextImageDefaultBottom: Story = {
  args: {
    contentType: 'text-img',
    size: 'default',
    position: 'bottom',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.',
  },
};

export const TextImageLargeBottom: Story = {
  args: {
    contentType: 'text-img',
    size: 'large',
    position: 'bottom',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.',
  },
};

// ===== METRICS CONTENT TYPE =====

export const MetricsSmall: Story = {
  args: {
    contentType: 'metrics',
    size: 'small',
    position: 'default (middle)',
    metrics: [
      { value: '235,000', label: 'Projects completed' },
      { value: 'On time', label: 'Project status' },
      { value: '3,500', label: 'Unique Users' },
    ],
  },
};

export const MetricsDefault: Story = {
  args: {
    contentType: 'metrics',
    size: 'default',
    position: 'default (middle)',
    metrics: [
      { value: '235,000', label: 'Projects completed' },
      { value: 'On time', label: 'Project status' },
      { value: '3,500', label: 'Unique Users' },
    ],
  },
};

export const MetricsLarge: Story = {
  args: {
    contentType: 'metrics',
    size: 'large',
    position: 'default (middle)',
    metrics: [
      { value: '235,000', label: 'Projects completed' },
      { value: 'On time', label: 'Project status' },
      { value: '3,500', label: 'Unique Users' },
    ],
  },
};

export const MetricsSmallBottom: Story = {
  args: {
    contentType: 'metrics',
    size: 'small',
    position: 'bottom',
    metrics: [
      { value: '235,000', label: 'Projects completed' },
      { value: 'On time', label: 'Project status' },
      { value: '3,500', label: 'Unique Users' },
    ],
  },
};

export const MetricsDefaultBottom: Story = {
  args: {
    contentType: 'metrics',
    size: 'default',
    position: 'bottom',
    metrics: [
      { value: '235,000', label: 'Projects completed' },
      { value: 'On time', label: 'Project status' },
      { value: '3,500', label: 'Unique Users' },
    ],
  },
};

export const MetricsLargeBottom: Story = {
  args: {
    contentType: 'metrics',
    size: 'large',
    position: 'bottom',
    metrics: [
      { value: '235,000', label: 'Projects completed' },
      { value: 'On time', label: 'Project status' },
      { value: '3,500', label: 'Unique Users' },
    ],
  },
};

// ===== SHOWCASE STORIES =====

export const AllContentTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '1000px' }}>
      <div>
        <h3 style={{ marginBottom: '16px' }}>Text Content</h3>
        <AccordionBody contentType="text" size="default" />
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px' }}>List Content</h3>
        <AccordionBody contentType="list" size="default" />
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px' }}>Text with Image</h3>
        <AccordionBody contentType="text-img" size="default" />
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px' }}>Metrics</h3>
        <AccordionBody contentType="metrics" size="default" />
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '1000px' }}>
      <div>
        <h3 style={{ marginBottom: '16px' }}>Small Size</h3>
        <AccordionBody contentType="text" size="small" />
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px' }}>Default Size</h3>
        <AccordionBody contentType="text" size="default" />
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px' }}>Large Size</h3>
        <AccordionBody contentType="text" size="large" />
      </div>
    </div>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <AccordionBody contentType="text" size="default">
      <div style={{ padding: '0 32px 24px 24px' }}>
        <p style={{ marginBottom: '16px', color: '#374151', fontFamily: 'Roboto Flex' }}>
          This is custom content rendered as children. You can include any React elements here.
        </p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '8px', color: '#4B5563' }}>✓ Custom bullet points</li>
          <li style={{ marginBottom: '8px', color: '#4B5563' }}>✓ Custom styling</li>
          <li style={{ color: '#4B5563' }}>✓ Any React components</li>
        </ul>
      </div>
    </AccordionBody>
  ),
};
