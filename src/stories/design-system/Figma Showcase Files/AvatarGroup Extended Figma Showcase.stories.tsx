import type { Meta, StoryObj } from '@storybook/react-vite';
import { AvatarGroup } from '../../atoms/AvatarGroup';

const meta: Meta<typeof AvatarGroup> = {
  title: 'Design System/Figma Showcase Files/AvatarGroup Extended Figma Showcase',
  component: AvatarGroup,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Avatar Group - Figma Showcase

This showcase demonstrates all Avatar Group variants as specified in the Figma designs, using correct design tokens including negative margins for overlapping layouts.

## Features
- **Multiple Layout Types**: Default overlapping, grid layout, initials-light, initials-dark
- **Stroke Variants**: Default and bordered with proper box-shadows
- **Size Variants**: Default (46px) and small (26px) 
- **Correct Spacing**: Uses design tokens with negative margins for overlapping
- **Z-index Stacking**: Proper layering for overlapping avatars
- **Responsive Design**: Maintains proportions across screen sizes

## Design Tokens Used
- \`--avatar-group-overlap-default: -12px\`
- \`--avatar-group-overlap-small: -8px\`
- \`--avatar-group-overlap-bordered-default: -16px\`
- \`--avatar-group-overlap-bordered-small: -12px\`
- \`--avatar-group-spacing-default: 15px\`
- \`--avatar-group-spacing-small: 6px\`
        `
      }
    }
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['default', 'grid', 'initials-light', 'initials-dark']
    },
    stroke: {
      control: { type: 'select' },
      options: ['default', 'bordered']
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'small']
    }
  }
};

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

// Sample avatar data
const sampleAvatars = [
  { id: '1', name: 'John Doe', src: 'https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92' },
  { id: '2', name: 'Jane Smith', src: 'https://api.builder.io/api/v1/image/assets/TEMP/a5975c4dc9ade3964ba3097a44dfa072ad4be35e?width=92' },
  { id: '3', name: 'Bob Johnson', src: 'https://api.builder.io/api/v1/image/assets/TEMP/3aaa02fc8ac0429aea67c3f98697ef8e579f1bfe?width=92' },
  { id: '4', name: 'Alice Brown', src: 'https://api.builder.io/api/v1/image/assets/TEMP/5c96e7afa9992dc07f1bb041b78d133a545bf33c?width=92' },
  { id: '5', name: 'Charlie Wilson', src: 'https://api.builder.io/api/v1/image/assets/TEMP/1cf4c6f6382a2595446167d417407bedb3856466?width=92' }
];

const initialAvatars = [
  { id: '1', initial: 'A' },
  { id: '2', initial: 'A' },
  { id: '3', initial: 'A' },
  { id: '4', initial: 'A' },
  { id: '5', initial: 'A' }
];

/**
 * Complete Figma showcase displaying all Avatar Group variants with correct spacing and design tokens
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '48px', 
      padding: '32px',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
    }}>
      <div>
        <h2 style={{ 
          fontFamily: 'var(--type-typeface-archivo)', 
          fontSize: 'var(--type-archivo-heading-4)', 
          fontWeight: 'var(--type-weight-semibold)',
          color: 'var(--base-black)',
          marginBottom: '24px'
        }}>
          Default Profile Photo Groups (Overlapping)
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <div>
              <h4 style={{ fontSize: '14px', marginBottom: '8px', color: 'var(--neutral-gray-gray-600)' }}>
                Default - Default Size
              </h4>
              <AvatarGroup
                type="default"
                stroke="default"
                size="default"
                avatars={sampleAvatars}
              />
            </div>
            
            <div>
              <h4 style={{ fontSize: '14px', marginBottom: '8px', color: 'var(--neutral-gray-gray-600)' }}>
                Default - Small Size
              </h4>
              <AvatarGroup
                type="default"
                stroke="default"
                size="small"
                avatars={sampleAvatars}
              />
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <div>
              <h4 style={{ fontSize: '14px', marginBottom: '8px', color: 'var(--neutral-gray-gray-600)' }}>
                Bordered - Default Size
              </h4>
              <AvatarGroup
                type="default"
                stroke="bordered"
                size="default"
                avatars={sampleAvatars}
              />
            </div>
            
            <div>
              <h4 style={{ fontSize: '14px', marginBottom: '8px', color: 'var(--neutral-gray-gray-600)' }}>
                Bordered - Small Size
              </h4>
              <AvatarGroup
                type="default"
                stroke="bordered"
                size="small"
                avatars={sampleAvatars}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ 
          fontFamily: 'var(--type-typeface-archivo)', 
          fontSize: 'var(--type-archivo-heading-4)', 
          fontWeight: 'var(--type-weight-semibold)',
          color: 'var(--base-black)',
          marginBottom: '24px'
        }}>
          Initial Light Groups (Overlapping)
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <div>
              <h4 style={{ fontSize: '14px', marginBottom: '8px', color: 'var(--neutral-gray-gray-600)' }}>
                Default - Default Size
              </h4>
              <AvatarGroup
                type="initials-light"
                stroke="default"
                size="default"
                avatars={initialAvatars}
              />
            </div>
            
            <div>
              <h4 style={{ fontSize: '14px', marginBottom: '8px', color: 'var(--neutral-gray-gray-600)' }}>
                Default - Small Size
              </h4>
              <AvatarGroup
                type="initials-light"
                stroke="default"
                size="small"
                avatars={initialAvatars}
              />
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <div>
              <h4 style={{ fontSize: '14px', marginBottom: '8px', color: 'var(--neutral-gray-gray-600)' }}>
                Bordered - Default Size
              </h4>
              <AvatarGroup
                type="initials-light"
                stroke="bordered"
                size="default"
                avatars={initialAvatars}
              />
            </div>
            
            <div>
              <h4 style={{ fontSize: '14px', marginBottom: '8px', color: 'var(--neutral-gray-gray-600)' }}>
                Bordered - Small Size
              </h4>
              <AvatarGroup
                type="initials-light"
                stroke="bordered"
                size="small"
                avatars={initialAvatars}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ 
          fontFamily: 'var(--type-typeface-archivo)', 
          fontSize: 'var(--type-archivo-heading-4)', 
          fontWeight: 'var(--type-weight-semibold)',
          color: 'var(--base-black)',
          marginBottom: '24px'
        }}>
          Initial Dark Groups (Overlapping)
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <div>
              <h4 style={{ fontSize: '14px', marginBottom: '8px', color: 'var(--neutral-gray-gray-600)' }}>
                Default - Default Size
              </h4>
              <AvatarGroup
                type="initials-dark"
                stroke="default"
                size="default"
                avatars={initialAvatars}
              />
            </div>
            
            <div>
              <h4 style={{ fontSize: '14px', marginBottom: '8px', color: 'var(--neutral-gray-gray-600)' }}>
                Default - Small Size
              </h4>
              <AvatarGroup
                type="initials-dark"
                stroke="default"
                size="small"
                avatars={initialAvatars}
              />
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <div>
              <h4 style={{ fontSize: '14px', marginBottom: '8px', color: 'var(--neutral-gray-gray-600)' }}>
                Bordered - Default Size
              </h4>
              <AvatarGroup
                type="initials-dark"
                stroke="bordered"
                size="default"
                avatars={initialAvatars}
              />
            </div>
            
            <div>
              <h4 style={{ fontSize: '14px', marginBottom: '8px', color: 'var(--neutral-gray-gray-600)' }}>
                Bordered - Small Size
              </h4>
              <AvatarGroup
                type="initials-dark"
                stroke="bordered"
                size="small"
                avatars={initialAvatars}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ 
          fontFamily: 'var(--type-typeface-archivo)', 
          fontSize: 'var(--type-archivo-heading-4)', 
          fontWeight: 'var(--type-weight-semibold)',
          color: 'var(--base-black)',
          marginBottom: '24px'
        }}>
          Grid Layout Groups
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '32px' }}>
            <div>
              <h4 style={{ fontSize: '14px', marginBottom: '8px', color: 'var(--neutral-gray-gray-600)' }}>
                Grid - Default Size
              </h4>
              <AvatarGroup
                type="grid"
                stroke="default"
                size="default"
                avatars={[
                  { id: '1', initial: 'A', type: 'initial-dark' },
                  { id: '2', name: 'User 1', src: 'https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92' },
                  { id: '3', name: 'User 2', src: 'https://api.builder.io/api/v1/image/assets/TEMP/a5975c4dc9ade3964ba3097a44dfa072ad4be35e?width=92' },
                  { id: '4', initial: 'A', type: 'initial-light' },
                  { id: '5', name: 'User 3', src: 'https://api.builder.io/api/v1/image/assets/TEMP/d9502ef5e965a1bc07d3cb17e4f07cb40eebe894?width=92' },
                  { id: '6', initial: 'A', type: 'initial-light' },
                  { id: '7', name: 'User 4', src: 'https://api.builder.io/api/v1/image/assets/TEMP/43761e3459c08202b86ad8d0b862a0bc0e2262c5?width=92' },
                  { id: '8', name: 'User 5', src: 'https://api.builder.io/api/v1/image/assets/TEMP/1cf4c6f6382a2595446167d417407bedb3856466?width=92' }
                ]}
              />
            </div>
            
            <div>
              <h4 style={{ fontSize: '14px', marginBottom: '8px', color: 'var(--neutral-gray-gray-600)' }}>
                Grid - Small Size
              </h4>
              <AvatarGroup
                type="grid"
                stroke="default"
                size="small"
                avatars={[
                  { id: '1', initial: 'A', type: 'initial-dark' },
                  { id: '2', name: 'User 1', src: 'https://api.builder.io/api/v1/image/assets/TEMP/1a9559e97411422744e82bda6641db2441df2632?width=52' },
                  { id: '3', name: 'User 2', src: 'https://api.builder.io/api/v1/image/assets/TEMP/1a9559e97411422744e82bda6641db2441df2632?width=52' },
                  { id: '4', initial: 'A', type: 'initial-light' },
                  { id: '5', name: 'User 3', src: 'https://api.builder.io/api/v1/image/assets/TEMP/1a9559e97411422744e82bda6641db2441df2632?width=52' },
                  { id: '6', initial: 'A', type: 'initial-light' },
                  { id: '7', name: 'User 4', src: 'https://api.builder.io/api/v1/image/assets/TEMP/1a9559e97411422744e82bda6641db2441df2632?width=52' },
                  { id: '8', name: 'User 5', src: 'https://api.builder.io/api/v1/image/assets/TEMP/1a9559e97411422744e82bda6641db2441df2632?width=52' }
                ]}
              />
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '32px' }}>
            <div>
              <h4 style={{ fontSize: '14px', marginBottom: '8px', color: 'var(--neutral-gray-gray-600)' }}>
                Grid Bordered - Default Size
              </h4>
              <AvatarGroup
                type="grid"
                stroke="bordered"
                size="default"
                avatars={[
                  { id: '1', initial: 'A', type: 'initial-dark' },
                  { id: '2', name: 'User 1', src: 'https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92' },
                  { id: '3', name: 'User 2', src: 'https://api.builder.io/api/v1/image/assets/TEMP/a5975c4dc9ade3964ba3097a44dfa072ad4be35e?width=92' },
                  { id: '4', initial: 'A', type: 'initial-light' },
                  { id: '5', name: 'User 3', src: 'https://api.builder.io/api/v1/image/assets/TEMP/d9502ef5e965a1bc07d3cb17e4f07cb40eebe894?width=92' },
                  { id: '6', initial: 'A', type: 'initial-light' },
                  { id: '7', name: 'User 4', src: 'https://api.builder.io/api/v1/image/assets/TEMP/43761e3459c08202b86ad8d0b862a0bc0e2262c5?width=92' },
                  { id: '8', name: 'User 5', src: 'https://api.builder.io/api/v1/image/assets/TEMP/1cf4c6f6382a2595446167d417407bedb3856466?width=92' }
                ]}
              />
            </div>
            
            <div>
              <h4 style={{ fontSize: '14px', marginBottom: '8px', color: 'var(--neutral-gray-gray-600)' }}>
                Grid Bordered - Small Size
              </h4>
              <AvatarGroup
                type="grid"
                stroke="bordered"
                size="small"
                avatars={[
                  { id: '1', initial: 'A', type: 'initial-dark' },
                  { id: '2', name: 'User 1', src: 'https://api.builder.io/api/v1/image/assets/TEMP/1a9559e97411422744e82bda6641db2441df2632?width=52' },
                  { id: '3', name: 'User 2', src: 'https://api.builder.io/api/v1/image/assets/TEMP/1a9559e97411422744e82bda6641db2441df2632?width=52' },
                  { id: '4', initial: 'A', type: 'initial-light' },
                  { id: '5', name: 'User 3', src: 'https://api.builder.io/api/v1/image/assets/TEMP/1a9559e97411422744e82bda6641db2441df2632?width=52' },
                  { id: '6', initial: 'A', type: 'initial-light' },
                  { id: '7', name: 'User 4', src: 'https://api.builder.io/api/v1/image/assets/TEMP/1a9559e97411422744e82bda6641db2441df2632?width=52' },
                  { id: '8', name: 'User 5', src: 'https://api.builder.io/api/v1/image/assets/TEMP/1a9559e97411422744e82bda6641db2441df2632?width=52' }
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ 
        padding: '24px', 
        backgroundColor: 'var(--base-white)', 
        borderRadius: 'var(--spacing-radius-8px)',
        border: '1px solid var(--neutral-gray-gray-200)',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <h3 style={{ 
          fontSize: 'var(--type-archivo-heading-5)', 
          fontWeight: 'var(--type-weight-medium)',
          color: 'var(--base-black)',
          marginBottom: '16px'
        }}>
          Design Token Values Used
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '12px',
          fontSize: '14px',
          fontFamily: 'monospace',
          color: 'var(--neutral-gray-gray-600)'
        }}>
          <div>--avatar-group-overlap-default: -12px</div>
          <div>--avatar-group-overlap-small: -8px</div>
          <div>--avatar-group-overlap-bordered-default: -16px</div>
          <div>--avatar-group-overlap-bordered-small: -12px</div>
          <div>--avatar-group-spacing-default: 15px</div>
          <div>--avatar-group-spacing-small: 6px</div>
        </div>
      </div>
    </div>
  )
};

/**
 * Interactive playground for testing Avatar Group variants
 */
export const Playground: Story = {
  args: {
    type: 'default',
    stroke: 'default',
    size: 'default',
    avatars: sampleAvatars,
    maxCount: 5,
    showOverflow: true
  }
};

/**
 * Demonstrates negative margin overlap behavior
 */
export const OverlapDemo: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>
          Negative Margin Overlap Demonstration
        </h3>
        <p style={{ marginBottom: '24px', color: 'var(--neutral-gray-gray-600)' }}>
          Each avatar overlaps the previous one using negative left margins defined by design tokens.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <span style={{ minWidth: '120px', fontSize: '14px', fontWeight: '500' }}>Default (-12px):</span>
            <AvatarGroup type="default" stroke="default" size="default" avatars={sampleAvatars.slice(0, 3)} />
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <span style={{ minWidth: '120px', fontSize: '14px', fontWeight: '500' }}>Small (-8px):</span>
            <AvatarGroup type="default" stroke="default" size="small" avatars={sampleAvatars.slice(0, 3)} />
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <span style={{ minWidth: '120px', fontSize: '14px', fontWeight: '500' }}>Bordered (-16px):</span>
            <AvatarGroup type="default" stroke="bordered" size="default" avatars={sampleAvatars.slice(0, 3)} />
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <span style={{ minWidth: '120px', fontSize: '14px', fontWeight: '500' }}>Bordered Small (-12px):</span>
            <AvatarGroup type="default" stroke="bordered" size="small" avatars={sampleAvatars.slice(0, 3)} />
          </div>
        </div>
      </div>
    </div>
  )
};
