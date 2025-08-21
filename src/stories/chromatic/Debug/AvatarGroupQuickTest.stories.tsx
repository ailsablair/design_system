import type { Meta, StoryObj } from '@storybook/react';
import { AvatarGroup } from '../../atoms/AvatarGroup';

const meta: Meta<typeof AvatarGroup> = {
  title: 'Chromatic/Debug/Quick Test',
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
  }
];

export const QuickTest: Story = {
  render: () => (
    <div style={{ padding: '50px', background: '#f0f8ff' }}>
      <div style={{ marginBottom: '40px' }}>
        <h2>Avatar Group Overlap Test</h2>
        <p>Should see 3 overlapping avatars with -12px margin between them</p>
        
        <div style={{ 
          padding: '20px', 
          background: 'white',
          border: '2px solid #007acc',
          display: 'inline-block',
          borderRadius: '8px'
        }}>
          <AvatarGroup 
            type="default" 
            stroke="default" 
            size="default"
            avatars={testAvatars}
          />
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3>Inspection Guide</h3>
        <p>Right-click → Inspect Element and look for:</p>
        <ul>
          <li>CSS classes: <code>avatar-group--default</code></li>
          <li>Margin values: <code>margin-left: -12px</code> on 2nd and 3rd avatars</li>
          <li>CSS custom property: <code>var(--avatar-group-overlap-default)</code></li>
        </ul>
      </div>

      <div>
        <h3>Expected Behavior</h3>
        <p>✅ Avatars should overlap by 12px each</p>
        <p>✅ First avatar should have highest z-index</p>
        <p>✅ Each subsequent avatar should be layered behind</p>
      </div>
    </div>
  )
};
