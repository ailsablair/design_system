import type { Meta, StoryObj } from '@storybook/react';
import { AvatarGroup } from '../../atoms/AvatarGroup';

const meta: Meta<typeof AvatarGroup> = {
  title: 'Design System/Figma Showcase Files/Avatar Group & Content Figma Showcase',
  component: AvatarGroup,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# AvatarGroup - Figma Showcase

This showcase demonstrates all 16 AvatarGroup variants exactly as specified in the Figma designs, including overlapping layouts with negative spacing tokens.

## Features
- **Multiple Layout Types**: default overlapping, grid, initials-light, initials-dark
- **Stroke Variants**: default borders, bordered with drop shadows
- **Size Options**: default (46px avatars), small (26px avatars) 
- **Overlapping Effect**: Uses negative spacing tokens for proper overlap
- **Z-index Stacking**: Proper layering for hover effects
- **Grid Layouts**: Organized rows and columns for larger groups

## Design Specifications
All avatar groups match the exact Figma specifications including:
- Negative margins for overlapping (-12px default, -8px small, -16px bordered)
- Proper spacing in grid layouts (15px default, 6px small)
- Consistent avatar styling and borders
- Drop shadow effects for bordered variants
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

// Sample avatar data matching Figma
const profileAvatars = [
  {
    id: '1',
    name: 'User 1',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92',
    type: 'profile-photo'
  },
  {
    id: '2', 
    name: 'User 2',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/a5975c4dc9ade3964ba3097a44dfa072ad4be35e?width=92',
    type: 'profile-photo'
  },
  {
    id: '3',
    name: 'User 3', 
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/3aaa02fc8ac0429aea67c3f98697ef8e579f1bfe?width=92',
    type: 'profile-photo'
  },
  {
    id: '4',
    name: 'User 4',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/5c96e7afa9992dc07f1bb041b78d133a545bf33c?width=92',
    type: 'profile-photo'
  },
  {
    id: '5',
    name: 'User 5',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/1cf4c6f6382a2595446167d417407bedb3856466?width=92',
    type: 'profile-photo'
  }
];

const initialAvatars = [
  { id: '1', name: 'Alice', initial: 'A' },
  { id: '2', name: 'Bob', initial: 'A' },
  { id: '3', name: 'Charlie', initial: 'A' },
  { id: '4', name: 'Diana', initial: 'A' },
  { id: '5', name: 'Eve', initial: 'A' }
];

const gridAvatars = [
  { id: '1', name: 'Alice', initial: 'A', type: 'initial-dark' },
  { id: '2', name: 'Bob', src: 'https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92' },
  { id: '3', name: 'Charlie', src: 'https://api.builder.io/api/v1/image/assets/TEMP/a5975c4dc9ade3964ba3097a44dfa072ad4be35e?width=92' },
  { id: '4', name: 'Diana', initial: 'A', type: 'initial-light' },
  { id: '5', name: 'Eve', src: 'https://api.builder.io/api/v1/image/assets/TEMP/d9502ef5e965a1bc07d3cb17e4f07cb40eebe894?width=92' },
  { id: '6', name: 'Frank', initial: 'A', type: 'initial-light' },
  { id: '7', name: 'Grace', src: 'https://api.builder.io/api/v1/image/assets/TEMP/43761e3459c08202b86ad8d0b862a0bc0e2262c5?width=92' },
  { id: '8', name: 'Henry', src: 'https://api.builder.io/api/v1/image/assets/TEMP/1cf4c6f6382a2595446167d417407bedb3856466?width=92' }
];

/**
 * Complete showcase of all 16 avatar group variants as shown in Figma
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(2, 1fr)', 
      gap: '48px', 
      padding: '24px',
      background: '#f9fafb'
    }}>
      {/* Default Type - Default Stroke - Default Size */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Default - Default Stroke - Default Size</h3>
        <AvatarGroup 
          type="default" 
          stroke="default" 
          size="default"
          avatars={profileAvatars}
        />
      </div>

      {/* Default Type - Default Stroke - Small Size */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Default - Default Stroke - Small Size</h3>
        <AvatarGroup 
          type="default" 
          stroke="default" 
          size="small"
          avatars={profileAvatars}
        />
      </div>

      {/* Default Type - Bordered Stroke - Default Size */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Default - Bordered Stroke - Default Size</h3>
        <AvatarGroup 
          type="default" 
          stroke="bordered" 
          size="default"
          avatars={profileAvatars}
        />
      </div>

      {/* Default Type - Bordered Stroke - Small Size */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Default - Bordered Stroke - Small Size</h3>
        <AvatarGroup 
          type="default" 
          stroke="bordered" 
          size="small"
          avatars={profileAvatars}
        />
      </div>

      {/* Initials Light Type - Default Stroke - Default Size */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Initials Light - Default Stroke - Default Size</h3>
        <AvatarGroup 
          type="initials-light" 
          stroke="default" 
          size="default"
          avatars={initialAvatars}
        />
      </div>

      {/* Initials Light Type - Default Stroke - Small Size */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Initials Light - Default Stroke - Small Size</h3>
        <AvatarGroup 
          type="initials-light" 
          stroke="default" 
          size="small"
          avatars={initialAvatars}
        />
      </div>

      {/* Initials Light Type - Bordered Stroke - Default Size */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Initials Light - Bordered Stroke - Default Size</h3>
        <AvatarGroup 
          type="initials-light" 
          stroke="bordered" 
          size="default"
          avatars={initialAvatars}
        />
      </div>

      {/* Initials Light Type - Bordered Stroke - Small Size */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Initials Light - Bordered Stroke - Small Size</h3>
        <AvatarGroup 
          type="initials-light" 
          stroke="bordered" 
          size="small"
          avatars={initialAvatars}
        />
      </div>

      {/* Initials Dark Type - Default Stroke - Default Size */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Initials Dark - Default Stroke - Default Size</h3>
        <AvatarGroup 
          type="initials-dark" 
          stroke="default" 
          size="default"
          avatars={initialAvatars}
        />
      </div>

      {/* Initials Dark Type - Default Stroke - Small Size */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Initials Dark - Default Stroke - Small Size</h3>
        <AvatarGroup 
          type="initials-dark" 
          stroke="default" 
          size="small"
          avatars={initialAvatars}
        />
      </div>

      {/* Initials Dark Type - Bordered Stroke - Default Size */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Initials Dark - Bordered Stroke - Default Size</h3>
        <AvatarGroup 
          type="initials-dark" 
          stroke="bordered" 
          size="default"
          avatars={initialAvatars}
        />
      </div>

      {/* Initials Dark Type - Bordered Stroke - Small Size */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Initials Dark - Bordered Stroke - Small Size</h3>
        <AvatarGroup 
          type="initials-dark" 
          stroke="bordered" 
          size="small"
          avatars={initialAvatars}
        />
      </div>

      {/* Grid Type - Default Stroke - Default Size */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Grid - Default Stroke - Default Size</h3>
        <AvatarGroup 
          type="grid" 
          stroke="default" 
          size="default"
          avatars={gridAvatars}
        />
      </div>

      {/* Grid Type - Default Stroke - Small Size */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Grid - Default Stroke - Small Size</h3>
        <AvatarGroup 
          type="grid" 
          stroke="default" 
          size="small"
          avatars={gridAvatars}
        />
      </div>

      {/* Grid Type - Bordered Stroke - Default Size */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Grid - Bordered Stroke - Default Size</h3>
        <AvatarGroup 
          type="grid" 
          stroke="bordered" 
          size="default"
          avatars={gridAvatars}
        />
      </div>

      {/* Grid Type - Bordered Stroke - Small Size */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Grid - Bordered Stroke - Small Size</h3>
        <AvatarGroup 
          type="grid" 
          stroke="bordered" 
          size="small"
          avatars={gridAvatars}
        />
      </div>
    </div>
  )
};

/**
 * Overlapping Effect Demonstration
 */
export const OverlappingEffect: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(2, 1fr)', 
      gap: '32px', 
      padding: '24px',
      background: '#f9fafb'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Default Size Overlapping (-12px)</h3>
        <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>Uses --avatar-group-overlap-default: -12px</p>
        <AvatarGroup 
          type="default" 
          stroke="default" 
          size="default"
          avatars={profileAvatars}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Small Size Overlapping (-8px)</h3>
        <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>Uses --avatar-group-overlap-small: -8px</p>
        <AvatarGroup 
          type="default" 
          stroke="default" 
          size="small"
          avatars={profileAvatars}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Bordered Default (-16px)</h3>
        <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>Uses --avatar-group-overlap-bordered-default: -16px</p>
        <AvatarGroup 
          type="default" 
          stroke="bordered" 
          size="default"
          avatars={profileAvatars}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Bordered Small (-12px)</h3>
        <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>Uses --avatar-group-overlap-bordered-small: -12px</p>
        <AvatarGroup 
          type="default" 
          stroke="bordered" 
          size="small"
          avatars={profileAvatars}
        />
      </div>
    </div>
  )
};

/**
 * Grid Layout Demonstration
 */
export const GridLayouts: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(2, 1fr)', 
      gap: '32px', 
      padding: '24px',
      background: '#f9fafb'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Grid Default Size (15px spacing)</h3>
        <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>Uses --avatar-group-spacing-default: 15px</p>
        <AvatarGroup 
          type="grid" 
          stroke="default" 
          size="default"
          avatars={gridAvatars}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Grid Small Size (6px spacing)</h3>
        <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>Uses --avatar-group-spacing-small: 6px</p>
        <AvatarGroup 
          type="grid" 
          stroke="default" 
          size="small"
          avatars={gridAvatars}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Grid Bordered Default</h3>
        <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>15px spacing with bordered avatars</p>
        <AvatarGroup 
          type="grid" 
          stroke="bordered" 
          size="default"
          avatars={gridAvatars}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Grid Bordered Small</h3>
        <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>6px spacing with bordered avatars</p>
        <AvatarGroup 
          type="grid" 
          stroke="bordered" 
          size="small"
          avatars={gridAvatars}
        />
      </div>
    </div>
  )
};

/**
 * Avatar Type Variations within Groups
 */
export const AvatarTypeVariations: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '32px', 
      padding: '24px',
      background: '#f9fafb'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Profile Photos</h3>
        <AvatarGroup 
          type="default" 
          stroke="default" 
          size="default"
          avatars={profileAvatars}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Light Initials</h3>
        <AvatarGroup 
          type="initials-light" 
          stroke="default" 
          size="default"
          avatars={initialAvatars}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Dark Initials</h3>
        <AvatarGroup 
          type="initials-dark" 
          stroke="default" 
          size="default"
          avatars={initialAvatars}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Mixed Types (Grid Layout)</h3>
        <AvatarGroup 
          type="grid" 
          stroke="default" 
          size="default"
          avatars={gridAvatars}
        />
      </div>
    </div>
  )
};

/**
 * Spacing Token Documentation
 */
export const SpacingTokens: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '24px', 
      padding: '24px',
      background: '#f9fafb'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 700 }}>Avatar Group Spacing Tokens</h2>
        <p style={{ margin: 0, fontSize: '16px', color: '#6b7280' }}>
          These CSS custom properties control the overlapping and spacing behavior of avatar groups:
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
        <div style={{ padding: '16px', border: '1px solid #e5e7eb', borderRadius: '8px', backgroundColor: 'white' }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>Overlap Tokens (Negative)</h4>
          <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '14px', lineHeight: '1.5' }}>
            <li><code>--avatar-group-overlap-default: -12px</code></li>
            <li><code>--avatar-group-overlap-small: -8px</code></li>
            <li><code>--avatar-group-overlap-bordered-default: -16px</code></li>
            <li><code>--avatar-group-overlap-bordered-small: -12px</code></li>
          </ul>
        </div>

        <div style={{ padding: '16px', border: '1px solid #e5e7eb', borderRadius: '8px', backgroundColor: 'white' }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>Spacing Tokens (Positive)</h4>
          <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '14px', lineHeight: '1.5' }}>
            <li><code>--avatar-group-spacing-default: 15px</code></li>
            <li><code>--avatar-group-spacing-small: 6px</code></li>
          </ul>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Visual Examples</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', padding: '12px', border: '1px solid #e5e7eb', borderRadius: '6px', backgroundColor: 'white' }}>
            <p style={{ margin: 0, fontSize: '12px', fontWeight: 500, textAlign: 'center' }}>Default Overlap<br/>(-12px)</p>
            <AvatarGroup 
              type="default" 
              stroke="default" 
              size="default"
              avatars={profileAvatars.slice(0, 3)}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', padding: '12px', border: '1px solid #e5e7eb', borderRadius: '6px', backgroundColor: 'white' }}>
            <p style={{ margin: 0, fontSize: '12px', fontWeight: 500, textAlign: 'center' }}>Small Overlap<br/>(-8px)</p>
            <AvatarGroup 
              type="default" 
              stroke="default" 
              size="small"
              avatars={profileAvatars.slice(0, 3)}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', padding: '12px', border: '1px solid #e5e7eb', borderRadius: '6px', backgroundColor: 'white' }}>
            <p style={{ margin: 0, fontSize: '12px', fontWeight: 500, textAlign: 'center' }}>Grid Default<br/>(15px)</p>
            <AvatarGroup 
              type="grid" 
              stroke="default" 
              size="default"
              avatars={gridAvatars.slice(0, 4)}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', padding: '12px', border: '1px solid #e5e7eb', borderRadius: '6px', backgroundColor: 'white' }}>
            <p style={{ margin: 0, fontSize: '12px', fontWeight: 500, textAlign: 'center' }}>Grid Small<br/>(6px)</p>
            <AvatarGroup 
              type="grid" 
              stroke="default" 
              size="small"
              avatars={gridAvatars.slice(0, 4)}
            />
          </div>
        </div>
      </div>
    </div>
  )
};
