import type { Meta, StoryObj } from '@storybook/react';
import { AvatarGroup } from '../../atoms/AvatarGroup';

const meta: Meta<typeof AvatarGroup> = {
  title: 'Chromatic/Debug/AvatarGroup Debug',
  component: AvatarGroup,
  parameters: {
    layout: 'centered',
  }
};

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

const debugAvatars = [
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

/**
 * Debug story to check CSS classes and overlapping
 */
export const DebugOverlapping: Story = {
  render: () => (
    <div style={{ padding: '40px', background: '#f0f0f0' }}>
      <div style={{ marginBottom: '32px' }}>
        <h3>Debug: Default AvatarGroup (should overlap with -12px)</h3>
        <p>Classes should be: avatar-group avatar-group--default avatar-group--default avatar-group--default</p>
        <div style={{ 
          border: '2px dashed red', 
          padding: '20px', 
          display: 'inline-block',
          background: 'white'
        }}>
          <AvatarGroup 
            type="default" 
            stroke="default" 
            size="default"
            avatars={debugAvatars}
          />
        </div>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h3>Debug: Manual HTML with inline styles (should definitely overlap)</h3>
        <div style={{ 
          border: '2px dashed blue', 
          padding: '20px', 
          display: 'inline-block',
          background: 'white'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div style={{ position: 'relative', zIndex: 3 }}>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
                style={{ 
                  width: '46px', 
                  height: '46px', 
                  borderRadius: '50%', 
                  border: '1px solid #374151'
                }}
                alt="Avatar 1"
              />
            </div>
            <div style={{ position: 'relative', marginLeft: '-12px', zIndex: 2 }}>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/a5975c4dc9ade3964ba3097a44dfa072ad4be35e?width=92"
                style={{ 
                  width: '46px', 
                  height: '46px', 
                  borderRadius: '50%', 
                  border: '1px solid #374151'
                }}
                alt="Avatar 2"
              />
            </div>
            <div style={{ position: 'relative', marginLeft: '-12px', zIndex: 1 }}>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/3aaa02fc8ac0429aea67c3f98697ef8e579f1bfe?width=92"
                style={{ 
                  width: '46px', 
                  height: '46px', 
                  borderRadius: '50%', 
                  border: '1px solid #374151'
                }}
                alt="Avatar 3"
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h3>Debug: Check CSS Custom Properties</h3>
        <div style={{ 
          padding: '20px', 
          background: 'white',
          border: '1px solid #ccc',
          fontFamily: 'monospace',
          fontSize: '14px'
        }}>
          <div>--avatar-group-overlap-default: <span style={{ color: 'red' }}>var(--avatar-group-overlap-default)</span></div>
          <div>--avatar-group-overlap-small: <span style={{ color: 'red' }}>var(--avatar-group-overlap-small)</span></div>
          <div>--avatar-group-spacing-default: <span style={{ color: 'red' }}>var(--avatar-group-spacing-default)</span></div>
        </div>
      </div>

      <div>
        <h3>Debug: Initials Version (should also overlap)</h3>
        <div style={{ 
          border: '2px dashed green', 
          padding: '20px', 
          display: 'inline-block',
          background: 'white'
        }}>
          <AvatarGroup 
            type="initials-dark" 
            stroke="default" 
            size="default"
            avatars={[
              { id: '1', name: 'Alice', initial: 'A' },
              { id: '2', name: 'Bob', initial: 'B' },
              { id: '3', name: 'Charlie', initial: 'C' }
            ]}
          />
        </div>
      </div>
    </div>
  )
};

/**
 * Test with CSS variables displayed in browser
 */
export const CSSVariableTest: Story = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <style>{`
        .debug-test .avatar-group__avatar:not(:first-child) {
          margin-left: -12px !important;
          border: 2px solid red !important;
        }
        .debug-test .avatar-group__avatar {
          position: relative !important;
          z-index: 10 !important;
        }
        .debug-test .avatar-group__avatar:nth-child(1) { z-index: 13 !important; }
        .debug-test .avatar-group__avatar:nth-child(2) { z-index: 12 !important; }
        .debug-test .avatar-group__avatar:nth-child(3) { z-index: 11 !important; }
      `}</style>
      
      <h3>Force Overlap with !important (should definitely work)</h3>
      <div className="debug-test">
        <AvatarGroup 
          type="default" 
          stroke="default" 
          size="default"
          avatars={debugAvatars}
        />
      </div>
    </div>
  )
};
