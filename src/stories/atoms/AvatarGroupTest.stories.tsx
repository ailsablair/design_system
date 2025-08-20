import type { Meta, StoryObj } from '@storybook/react';
import { AvatarGroup } from './AvatarGroup';

const meta: Meta<typeof AvatarGroup> = {
  title: 'Atoms/AvatarGroup/Test',
  component: AvatarGroup,
  parameters: {
    layout: 'centered',
  }
};

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

const testAvatars = [
  {
    id: '1',
    name: 'User 1',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92',
  },
  {
    id: '2',
    name: 'User 2', 
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/a5975c4dc9ade3964ba3097a44dfa072ad4be35e?width=92',
  },
  {
    id: '3',
    name: 'User 3',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/3aaa02fc8ac0429aea67c3f98697ef8e579f1bfe?width=92',
  },
  {
    id: '4',
    name: 'User 4',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/5c96e7afa9992dc07f1bb041b78d133a545bf33c?width=92',
  }
];

/**
 * Test the overlapping functionality with negative spacing tokens
 */
export const OverlapTest: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '32px', 
      padding: '40px',
      background: '#f8f9fa'
    }}>
      <div>
        <h3 style={{ marginBottom: '16px' }}>Default Overlapping (-12px)</h3>
        <AvatarGroup 
          type="default" 
          stroke="default" 
          size="default"
          avatars={testAvatars}
        />
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px' }}>Small Overlapping (-8px)</h3>
        <AvatarGroup 
          type="default" 
          stroke="default" 
          size="small"
          avatars={testAvatars}
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '16px' }}>Bordered Overlapping (-16px)</h3>
        <AvatarGroup 
          type="default" 
          stroke="bordered" 
          size="default"
          avatars={testAvatars}
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '16px' }}>Initials Light Overlapping</h3>
        <AvatarGroup 
          type="initials-light" 
          stroke="default" 
          size="default"
          avatars={[
            { id: '1', name: 'Alice', initial: 'A' },
            { id: '2', name: 'Bob', initial: 'B' },
            { id: '3', name: 'Charlie', initial: 'C' },
            { id: '4', name: 'Diana', initial: 'D' }
          ]}
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '16px' }}>Initials Dark Overlapping</h3>
        <AvatarGroup 
          type="initials-dark" 
          stroke="default" 
          size="default"
          avatars={[
            { id: '1', name: 'Alice', initial: 'A' },
            { id: '2', name: 'Bob', initial: 'B' },
            { id: '3', name: 'Charlie', initial: 'C' },
            { id: '4', name: 'Diana', initial: 'D' }
          ]}
        />
      </div>
    </div>
  )
};
