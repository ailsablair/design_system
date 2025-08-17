import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Atoms/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Tag component with multiple sizes, variants, and interactive elements based on Echo design system.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
      description: 'Size variant of the tag',
    },
    variant: {
      control: { type: 'select' },
      options: ['light-gray', 'primary', 'secondary', 'blue', 'cyan', 'orange', 'gray', 'purple', 'green', 'red', 'yellow', 'black'],
      description: 'Color variant of the tag',
    },
    showClose: {
      control: { type: 'boolean' },
      description: 'Show close/remove button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
  },
  args: {
    label: 'Label',
    showClose: true,
    disabled: false,
    size: 'default',
    variant: 'light-gray',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label',
    size: 'default',
    variant: 'light-gray',
  },
};

export const Small: Story = {
  args: {
    label: 'Label',
    size: 'small',
    variant: 'light-gray',
  },
};

export const Large: Story = {
  args: {
    label: 'Label',
    size: 'large',
    variant: 'light-gray',
  },
};

export const Primary: Story = {
  args: {
    label: 'Label',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Label',
    variant: 'secondary',
  },
};

export const WithoutClose: Story = {
  args: {
    label: 'Label',
    showClose: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Label',
    disabled: true,
  },
};

export const Clickable: Story = {
  args: {
    label: 'Clickable Label',
    onClick: () => alert('Tag clicked!'),
  },
};

export const LongLabel: Story = {
  args: {
    label: 'This is a longer label text',
  },
};

export const SmallPrimary: Story = {
  args: {
    label: 'Small',
    size: 'small',
    variant: 'primary',
  },
};

export const LargeSecondary: Story = {
  args: {
    label: 'Large',
    size: 'large',
    variant: 'secondary',
  },
};

// New color variants from Figma
export const Blue: Story = {
  args: {
    label: 'Blue Tag',
    variant: 'blue',
  },
};

export const Cyan: Story = {
  args: {
    label: 'Cyan Tag',
    variant: 'cyan',
  },
};

export const Orange: Story = {
  args: {
    label: 'Orange Tag',
    variant: 'orange',
  },
};

export const Gray: Story = {
  args: {
    label: 'Gray Tag',
    variant: 'gray',
  },
};

export const Purple: Story = {
  args: {
    label: 'Purple Tag',
    variant: 'purple',
  },
};

export const Green: Story = {
  args: {
    label: 'Green Tag',
    variant: 'green',
  },
};

export const Red: Story = {
  args: {
    label: 'Red Tag',
    variant: 'red',
  },
};

export const Yellow: Story = {
  args: {
    label: 'Yellow Tag',
    variant: 'yellow',
  },
};

export const Black: Story = {
  args: {
    label: 'Black Tag',
    variant: 'black',
  },
};

// Color showcase
export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Tag label="Light Gray" variant="light-gray" />
      <Tag label="Primary" variant="primary" />
      <Tag label="Secondary" variant="secondary" />
      <Tag label="Blue" variant="blue" />
      <Tag label="Cyan" variant="cyan" />
      <Tag label="Orange" variant="orange" />
      <Tag label="Gray" variant="gray" />
      <Tag label="Purple" variant="purple" />
      <Tag label="Green" variant="green" />
      <Tag label="Red" variant="red" />
      <Tag label="Yellow" variant="yellow" />
      <Tag label="Black" variant="black" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available color variants for tags in default size.',
      },
    },
  },
};

// Color variants without close button
export const AllColorsNoClose: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Tag label="Light Gray" variant="light-gray" showClose={false} />
      <Tag label="Primary" variant="primary" showClose={false} />
      <Tag label="Secondary" variant="secondary" showClose={false} />
      <Tag label="Blue" variant="blue" showClose={false} />
      <Tag label="Cyan" variant="cyan" showClose={false} />
      <Tag label="Orange" variant="orange" showClose={false} />
      <Tag label="Gray" variant="gray" showClose={false} />
      <Tag label="Purple" variant="purple" showClose={false} />
      <Tag label="Green" variant="green" showClose={false} />
      <Tag label="Red" variant="red" showClose={false} />
      <Tag label="Yellow" variant="yellow" showClose={false} />
      <Tag label="Black" variant="black" showClose={false} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All color variants without close buttons, matching the Figma design.',
      },
    },
  },
};

// Size variations for all new colors
export const ColorSizeMatrix: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {['small', 'default', 'large'].map(size => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600', textTransform: 'capitalize' }}>{size}</h4>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {['blue', 'cyan', 'orange', 'gray', 'purple', 'green', 'red', 'yellow', 'black'].map(color => (
              <Tag
                key={color}
                label={color.charAt(0).toUpperCase() + color.slice(1)}
                variant={color as any}
                size={size as any}
                showClose={size !== 'small'}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Matrix showing all new color variants in different sizes, replicating the Figma design system.',
      },
    },
  },
};
