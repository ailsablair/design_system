import type { Meta, StoryObj } from '@storybook/react-vite';
import { AvatarGroup } from './AvatarGroup';

const meta: Meta<typeof AvatarGroup> = {
  title: 'Atoms/AvatarGroup',
  component: AvatarGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component for displaying multiple avatars in various layouts including overlapping and grid arrangements.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['default', 'grid', 'initials-light', 'initials-dark'],
      description: 'Type/layout of the avatar group',
    },
    stroke: {
      control: { type: 'select' },
      options: ['default', 'bordered'],
      description: 'Stroke/border style for avatars',
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'small'],
      description: 'Size of the avatar group',
    },
    maxCount: {
      control: { type: 'number' },
      description: 'Maximum number of avatars to display before showing overflow',
    },
    showOverflow: {
      control: { type: 'boolean' },
      description: 'Show count indicator for overflow',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler for the group',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample avatar data
const sampleAvatars = [
  {
    id: '1',
    name: 'John Doe',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92',
    type: 'profile-photo'
  },
  {
    id: '2',
    name: 'Jane Smith',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/a5975c4dc9ade3964ba3097a44dfa072ad4be35e?width=92',
    type: 'profile-photo'
  },
  {
    id: '3',
    name: 'Mike Johnson',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/3aaa02fc8ac0429aea67c3f98697ef8e579f1bfe?width=92',
    type: 'profile-photo'
  },
  {
    id: '4',
    name: 'Sarah Wilson',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/5c96e7afa9992dc07f1bb041b78d133a545bf33c?width=92',
    type: 'profile-photo'
  },
  {
    id: '5',
    name: 'Tom Brown',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/1cf4c6f6382a2595446167d417407bedb3856466?width=92',
    type: 'profile-photo'
  }
];

// Default overlapping layout
export const Default: Story = {
  args: {
    type: 'default',
    stroke: 'default',
    size: 'default',
    avatars: sampleAvatars.slice(0, 5),
  },
};

// Grid layout
export const Grid: Story = {
  args: {
    type: 'grid',
    stroke: 'default',
    size: 'default',
    avatars: [
      { id: '1', name: 'Alice', initial: 'A', type: 'initial-dark' },
      { id: '2', name: 'Bob', src: 'https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92' },
      { id: '3', name: 'Charlie', src: 'https://api.builder.io/api/v1/image/assets/TEMP/a5975c4dc9ade3964ba3097a44dfa072ad4be35e?width=92' },
      { id: '4', name: 'Diana', initial: 'D', type: 'initial-light' },
      { id: '5', name: 'Eve', src: 'https://api.builder.io/api/v1/image/assets/TEMP/d9502ef5e965a1bc07d3cb17e4f07cb40eebe894?width=92' },
      { id: '6', name: 'Frank', initial: 'F', type: 'initial-light' },
      { id: '7', name: 'Grace', src: 'https://api.builder.io/api/v1/image/assets/TEMP/43761e3459c08202b86ad8d0b862a0bc0e2262c5?width=92' },
      { id: '8', name: 'Henry', src: 'https://api.builder.io/api/v1/image/assets/TEMP/1cf4c6f6382a2595446167d417407bedb3856466?width=92' }
    ],
  },
};

// Initial light theme
export const InitialsLight: Story = {
  args: {
    type: 'initials-light',
    stroke: 'default',
    size: 'default',
    avatars: [
      { id: '1', name: 'Alice', initial: 'A' },
      { id: '2', name: 'Bob', initial: 'B' },
      { id: '3', name: 'Charlie', initial: 'C' },
      { id: '4', name: 'Diana', initial: 'D' },
      { id: '5', name: 'Eve', initial: 'E' }
    ],
  },
};

// Initial dark theme
export const InitialsDark: Story = {
  args: {
    type: 'initials-dark',
    stroke: 'default',
    size: 'default',
    avatars: [
      { id: '1', name: 'Alice', initial: 'A' },
      { id: '2', name: 'Bob', initial: 'B' },
      { id: '3', name: 'Charlie', initial: 'C' },
      { id: '4', name: 'Diana', initial: 'D' },
      { id: '5', name: 'Eve', initial: 'E' }
    ],
  },
};

// Bordered style
export const Bordered: Story = {
  args: {
    type: 'default',
    stroke: 'bordered',
    size: 'default',
    avatars: sampleAvatars.slice(0, 5),
  },
};

// Small size
export const Small: Story = {
  args: {
    type: 'default',
    stroke: 'default',
    size: 'small',
    avatars: sampleAvatars.slice(0, 5),
  },
};

// With overflow
export const WithOverflow: Story = {
  args: {
    type: 'default',
    stroke: 'default',
    size: 'default',
    avatars: sampleAvatars.concat([
      { id: '6', name: 'User 6', initial: 'U6' },
      { id: '7', name: 'User 7', initial: 'U7' },
      { id: '8', name: 'User 8', initial: 'U8' }
    ]),
    maxCount: 4,
    showOverflow: true,
  },
};

// Interactive
export const Interactive: Story = {
  args: {
    type: 'default',
    stroke: 'default',
    size: 'default',
    avatars: sampleAvatars.slice(0, 4),
    onClick: () => console.log('Avatar group clicked!'),
  },
};

// Size variations
export const SizeVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4>Default Size</h4>
        <AvatarGroup 
          type="default" 
          size="default" 
          avatars={sampleAvatars.slice(0, 4)} 
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4>Small Size</h4>
        <AvatarGroup 
          type="default" 
          size="small" 
          avatars={sampleAvatars.slice(0, 4)} 
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatar groups come in two sizes: default and small.',
      },
    },
  },
};

// Layout variations
export const LayoutVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4>Default (Overlapping)</h4>
        <AvatarGroup 
          type="default" 
          avatars={sampleAvatars.slice(0, 5)} 
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4>Grid Layout</h4>
        <AvatarGroup 
          type="grid" 
          avatars={[
            { id: '1', name: 'Alice', initial: 'A', type: 'initial-dark' },
            { id: '2', name: 'Bob', src: sampleAvatars[0].src },
            { id: '3', name: 'Charlie', src: sampleAvatars[1].src },
            { id: '4', name: 'Diana', initial: 'D', type: 'initial-light' },
            { id: '5', name: 'Eve', src: sampleAvatars[2].src },
            { id: '6', name: 'Frank', initial: 'F', type: 'initial-light' }
          ]} 
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4>Initials Light</h4>
        <AvatarGroup 
          type="initials-light" 
          avatars={[
            { id: '1', name: 'Alice', initial: 'A' },
            { id: '2', name: 'Bob', initial: 'B' },
            { id: '3', name: 'Charlie', initial: 'C' },
            { id: '4', name: 'Diana', initial: 'D' }
          ]} 
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4>Initials Dark</h4>
        <AvatarGroup 
          type="initials-dark" 
          avatars={[
            { id: '1', name: 'Alice', initial: 'A' },
            { id: '2', name: 'Bob', initial: 'B' },
            { id: '3', name: 'Charlie', initial: 'C' },
            { id: '4', name: 'Diana', initial: 'D' }
          ]} 
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatar groups support multiple layout types: overlapping (default), grid, and initial-based themes.',
      },
    },
  },
};

// Stroke variations
export const StrokeVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4>Default Stroke</h4>
        <AvatarGroup 
          type="default" 
          stroke="default" 
          avatars={sampleAvatars.slice(0, 4)} 
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4>Bordered Stroke</h4>
        <AvatarGroup 
          type="default" 
          stroke="bordered" 
          avatars={sampleAvatars.slice(0, 4)} 
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatar groups can have default or bordered stroke styles. Bordered adds white borders and drop shadows.',
      },
    },
  },
};
