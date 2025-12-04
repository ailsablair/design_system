import type { Meta, StoryObj } from '@storybook/react-vite';
import { Other } from './Other';
import './other.css';

const meta: Meta<typeof Other> = {
  title: 'Atoms/Accordion/Other',
  component: Other,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Other accordion component supporting decorative, numbered, and labeled variants with multiple sizes and icon options. Built with design tokens for consistency across the design system.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['decorative', 'number', 'label'],
      description: 'Accordion type - decorative (with icon), number (with number prefix), or label (with tag)',
    },
    open: {
      control: 'boolean',
      description: 'Accordion open state',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size variant',
    },
    openIconType: {
      control: 'select',
      options: ['chevron', 'plus'],
      description: 'Open/close icon type',
    },
    number: {
      control: 'text',
      description: 'Number prefix for number type',
    },
    title: {
      control: 'text',
      description: 'Title text',
    },
    tagLabel: {
      control: 'text',
      description: 'Tag label text for label type',
    },
    content: {
      control: 'text',
      description: 'Content text for open state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Other>;

export const Default: Story = {
  args: {
    type: 'decorative',
    open: false,
    size: 'default',
    openIconType: 'chevron',
  },
};

// Decorative Type Stories
export const DecorativeDefaultChevron: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Other
        type="decorative"
        open={false}
        size="default"
        openIconType="chevron"
      />
      <Other
        type="decorative"
        open={true}
        size="default"
        openIconType="chevron"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Decorative accordion with chevron icon in default size, showing both collapsed and expanded states.',
      },
    },
  },
};

export const DecorativeDefaultPlus: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Other
        type="decorative"
        open={false}
        size="default"
        openIconType="plus"
      />
      <Other
        type="decorative"
        open={true}
        size="default"
        openIconType="plus"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Decorative accordion with plus/minus icon in default size.',
      },
    },
  },
};

export const DecorativeSmallChevron: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Other
        type="decorative"
        open={false}
        size="small"
        openIconType="chevron"
      />
      <Other
        type="decorative"
        open={true}
        size="small"
        openIconType="chevron"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Decorative accordion with chevron icon in small size.',
      },
    },
  },
};

export const DecorativeSmallPlus: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Other
        type="decorative"
        open={false}
        size="small"
        openIconType="plus"
      />
      <Other
        type="decorative"
        open={true}
        size="small"
        openIconType="plus"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Decorative accordion with plus/minus icon in small size.',
      },
    },
  },
};

export const DecorativeLargeChevron: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Other
        type="decorative"
        open={false}
        size="large"
        openIconType="chevron"
      />
      <Other
        type="decorative"
        open={true}
        size="large"
        openIconType="chevron"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Decorative accordion with chevron icon in large size.',
      },
    },
  },
};

export const DecorativeLargePlus: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Other
        type="decorative"
        open={false}
        size="large"
        openIconType="plus"
      />
      <Other
        type="decorative"
        open={true}
        size="large"
        openIconType="plus"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Decorative accordion with plus/minus icon in large size.',
      },
    },
  },
};

// Number Type Stories
export const NumberDefaultChevron: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Other
        type="number"
        open={false}
        size="default"
        openIconType="chevron"
        number="01"
      />
      <Other
        type="number"
        open={true}
        size="default"
        openIconType="chevron"
        number="01"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Numbered accordion with chevron icon in default size.',
      },
    },
  },
};

export const NumberDefaultPlus: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Other
        type="number"
        open={false}
        size="default"
        openIconType="plus"
        number="01"
      />
      <Other
        type="number"
        open={true}
        size="default"
        openIconType="plus"
        number="01"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Numbered accordion with plus/minus icon in default size.',
      },
    },
  },
};

export const NumberSmallChevron: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Other
        type="number"
        open={false}
        size="small"
        openIconType="chevron"
        number="01"
      />
      <Other
        type="number"
        open={true}
        size="small"
        openIconType="chevron"
        number="01"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Numbered accordion with chevron icon in small size.',
      },
    },
  },
};

export const NumberSmallPlus: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Other
        type="number"
        open={false}
        size="small"
        openIconType="plus"
        number="01"
      />
      <Other
        type="number"
        open={true}
        size="small"
        openIconType="plus"
        number="01"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Numbered accordion with plus/minus icon in small size.',
      },
    },
  },
};

export const NumberLargeChevron: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Other
        type="number"
        open={false}
        size="large"
        openIconType="chevron"
        number="01"
      />
      <Other
        type="number"
        open={true}
        size="large"
        openIconType="chevron"
        number="01"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Numbered accordion with chevron icon in large size.',
      },
    },
  },
};

export const NumberLargePlus: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Other
        type="number"
        open={false}
        size="large"
        openIconType="plus"
        number="01"
      />
      <Other
        type="number"
        open={true}
        size="large"
        openIconType="plus"
        number="01"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Numbered accordion with plus/minus icon in large size.',
      },
    },
  },
};

// Label Type Stories
export const LabelDefaultChevron: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Other
        type="label"
        open={false}
        size="default"
        openIconType="chevron"
        tagLabel="Label"
      />
      <Other
        type="label"
        open={true}
        size="default"
        openIconType="chevron"
        tagLabel="Label"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Label accordion with tag and chevron icon in default size.',
      },
    },
  },
};

export const LabelDefaultPlus: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Other
        type="label"
        open={false}
        size="default"
        openIconType="plus"
        tagLabel="Label"
      />
      <Other
        type="label"
        open={true}
        size="default"
        openIconType="plus"
        tagLabel="Label"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Label accordion with tag and plus/minus icon in default size.',
      },
    },
  },
};

export const LabelSmallChevron: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Other
        type="label"
        open={false}
        size="small"
        openIconType="chevron"
        tagLabel="Label"
      />
      <Other
        type="label"
        open={true}
        size="small"
        openIconType="chevron"
        tagLabel="Label"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Label accordion with tag and chevron icon in small size.',
      },
    },
  },
};

export const LabelSmallPlus: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Other
        type="label"
        open={false}
        size="small"
        openIconType="plus"
        tagLabel="Label"
      />
      <Other
        type="label"
        open={true}
        size="small"
        openIconType="plus"
        tagLabel="Label"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Label accordion with tag and plus/minus icon in small size.',
      },
    },
  },
};

export const LabelLargeChevron: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Other
        type="label"
        open={false}
        size="large"
        openIconType="chevron"
        tagLabel="Label"
      />
      <Other
        type="label"
        open={true}
        size="large"
        openIconType="chevron"
        tagLabel="Label"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Label accordion with tag and chevron icon in large size.',
      },
    },
  },
};

export const LabelLargePlus: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Other
        type="label"
        open={false}
        size="large"
        openIconType="plus"
        tagLabel="Label"
      />
      <Other
        type="label"
        open={true}
        size="large"
        openIconType="plus"
        tagLabel="Label"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Label accordion with tag and plus/minus icon in large size.',
      },
    },
  },
};

// Comprehensive Showcase
export const AllVariantsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '20px' }}>
      <div>
        <h2 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: 600 }}>Decorative Type</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div>
            <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 500 }}>Default Size - Chevron</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Other type="decorative" open={false} size="default" openIconType="chevron" />
              <Other type="decorative" open={true} size="default" openIconType="chevron" />
            </div>
          </div>
          <div>
            <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 500 }}>Default Size - Plus</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Other type="decorative" open={false} size="default" openIconType="plus" />
              <Other type="decorative" open={true} size="default" openIconType="plus" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: 600 }}>Number Type</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div>
            <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 500 }}>Default Size - Chevron</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Other type="number" open={false} size="default" openIconType="chevron" number="01" />
              <Other type="number" open={true} size="default" openIconType="chevron" number="01" />
            </div>
          </div>
          <div>
            <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 500 }}>Default Size - Plus</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Other type="number" open={false} size="default" openIconType="plus" number="01" />
              <Other type="number" open={true} size="default" openIconType="plus" number="01" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: 600 }}>Label Type</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div>
            <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 500 }}>Default Size - Chevron</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Other type="label" open={false} size="default" openIconType="chevron" tagLabel="Label" />
              <Other type="label" open={true} size="default" openIconType="chevron" tagLabel="Label" />
            </div>
          </div>
          <div>
            <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 500 }}>Default Size - Plus</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Other type="label" open={false} size="default" openIconType="plus" tagLabel="Label" />
              <Other type="label" open={true} size="default" openIconType="plus" tagLabel="Label" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: 600 }}>All Sizes Comparison</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div>
            <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 500 }}>Small</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Other type="decorative" open={false} size="small" openIconType="chevron" />
              <Other type="number" open={false} size="small" openIconType="chevron" number="01" />
              <Other type="label" open={false} size="small" openIconType="chevron" tagLabel="Label" />
            </div>
          </div>
          <div>
            <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 500 }}>Default</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Other type="decorative" open={false} size="default" openIconType="chevron" />
              <Other type="number" open={false} size="default" openIconType="chevron" number="01" />
              <Other type="label" open={false} size="default" openIconType="chevron" tagLabel="Label" />
            </div>
          </div>
          <div>
            <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 500 }}>Large</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Other type="decorative" open={false} size="large" openIconType="chevron" />
              <Other type="number" open={false} size="large" openIconType="chevron" number="01" />
              <Other type="label" open={false} size="large" openIconType="chevron" tagLabel="Label" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all accordion variants including all types, sizes, and icon options.',
      },
    },
  },
};

export const InteractiveExample: Story = {
  args: {
    type: 'label',
    size: 'default',
    openIconType: 'chevron',
    tagLabel: 'Interactive',
    title: 'Click to expand/collapse',
    content: 'This is an interactive accordion that responds to clicks. Try toggling it open and closed!',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive accordion that you can click to expand and collapse. Try it out with different controls!',
      },
    },
  },
};
