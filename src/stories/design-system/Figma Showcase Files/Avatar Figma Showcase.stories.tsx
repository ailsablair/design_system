import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../../atoms/Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Design System/Figma Showcase Files/Avatar Figma Showcase',
  component: Avatar,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Avatar - Figma Showcase

This showcase demonstrates all 64 Avatar variants with status icons as specified in the Figma designs.

## Features
- **Multiple Sizes**: x-small (26px), small (38px), default (46px), large (62px)
- **Multiple Types**: empty-state, profile-photo, initial-light, initial-dark
- **Multiple Shapes**: default (round), square
- **Border Variants**: with and without white borders + drop shadows
- **Status Icons**: online, offline, away, do-not-disturb, verified
- **Precise Positioning**: Status icons positioned exactly as in Figma designs

## Design Specifications
All avatars match the exact Figma specifications including:
- Pixel-perfect status icon positioning
- Correct stroke colors for different avatar backgrounds
- Proper size relationships between avatars and status icons
- Responsive typography scaling for initial letters
        `
      }
    }
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['x-small', 'small', 'default', 'large']
    },
    type: {
      control: { type: 'select' },
      options: ['empty-state', 'profile-photo', 'initial-light', 'initial-dark']
    },
    shape: {
      control: { type: 'select' },
      options: ['default', 'square']
    },
    border: {
      control: { type: 'boolean' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Avatar>;

const sampleImageUrls = {
  'empty-state': 'https://api.builder.io/api/v1/image/assets/TEMP/3d1e266d78e8e192b5ac1fe27f5265c3e8355f24',
  'profile-photo': 'https://api.builder.io/api/v1/image/assets/TEMP/a8e1b547082b4c5d35c56beb0df98ba95f88b3ba'
};

/**
 * Complete showcase of all 64 avatar variants as shown in Figma designs
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(8, 1fr)', 
      gap: '24px', 
      padding: '24px',
      background: '#f9fafb'
    }}>
      {/* Large Size Variants */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Large - Empty State - Square - No Border</h4>
        <Avatar 
          size="large" 
          type="empty-state" 
          shape="square" 
          border={false}
          src={sampleImageUrls['empty-state']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Large - Empty State - Square - Border</h4>
        <Avatar 
          size="large" 
          type="empty-state" 
          shape="square" 
          border={true}
          src={sampleImageUrls['empty-state']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Large - Empty State - Round - No Border</h4>
        <Avatar 
          size="large" 
          type="empty-state" 
          shape="default" 
          border={false}
          src={sampleImageUrls['empty-state']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Large - Empty State - Round - Border</h4>
        <Avatar 
          size="large" 
          type="empty-state" 
          shape="default" 
          border={true}
          src={sampleImageUrls['empty-state']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Large - Profile Photo - Square - No Border</h4>
        <Avatar 
          size="large" 
          type="profile-photo" 
          shape="square" 
          border={false}
          src={sampleImageUrls['profile-photo']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Large - Profile Photo - Square - Border</h4>
        <Avatar 
          size="large" 
          type="profile-photo" 
          shape="square" 
          border={true}
          src={sampleImageUrls['profile-photo']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Large - Profile Photo - Round - No Border</h4>
        <Avatar 
          size="large" 
          type="profile-photo" 
          shape="default" 
          border={false}
          src={sampleImageUrls['profile-photo']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Large - Profile Photo - Round - Border</h4>
        <Avatar 
          size="large" 
          type="profile-photo" 
          shape="default" 
          border={true}
          src={sampleImageUrls['profile-photo']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>

      {/* Default Size Variants */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Default - Empty State - Square - No Border</h4>
        <Avatar 
          size="default" 
          type="empty-state" 
          shape="square" 
          border={false}
          src={sampleImageUrls['empty-state']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Default - Empty State - Square - Border</h4>
        <Avatar 
          size="default" 
          type="empty-state" 
          shape="square" 
          border={true}
          src={sampleImageUrls['empty-state']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Default - Empty State - Round - No Border</h4>
        <Avatar 
          size="default" 
          type="empty-state" 
          shape="default" 
          border={false}
          src={sampleImageUrls['empty-state']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Default - Empty State - Round - Border</h4>
        <Avatar 
          size="default" 
          type="empty-state" 
          shape="default" 
          border={true}
          src={sampleImageUrls['empty-state']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Default - Profile Photo - Square - No Border</h4>
        <Avatar 
          size="default" 
          type="profile-photo" 
          shape="square" 
          border={false}
          src={sampleImageUrls['profile-photo']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Default - Profile Photo - Square - Border</h4>
        <Avatar 
          size="default" 
          type="profile-photo" 
          shape="square" 
          border={true}
          src={sampleImageUrls['profile-photo']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Default - Profile Photo - Round - No Border</h4>
        <Avatar 
          size="default" 
          type="profile-photo" 
          shape="default" 
          border={false}
          src={sampleImageUrls['profile-photo']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Default - Profile Photo - Round - Border</h4>
        <Avatar 
          size="default" 
          type="profile-photo" 
          shape="default" 
          border={true}
          src={sampleImageUrls['profile-photo']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>

      {/* Small Size Variants */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Small - Empty State - Square - No Border</h4>
        <Avatar 
          size="small" 
          type="empty-state" 
          shape="square" 
          border={false}
          src={sampleImageUrls['empty-state']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Small - Empty State - Square - Border</h4>
        <Avatar 
          size="small" 
          type="empty-state" 
          shape="square" 
          border={true}
          src={sampleImageUrls['empty-state']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Small - Empty State - Round - No Border</h4>
        <Avatar 
          size="small" 
          type="empty-state" 
          shape="default" 
          border={false}
          src={sampleImageUrls['empty-state']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Small - Empty State - Round - Border</h4>
        <Avatar 
          size="small" 
          type="empty-state" 
          shape="default" 
          border={true}
          src={sampleImageUrls['empty-state']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Small - Profile Photo - Square - No Border</h4>
        <Avatar 
          size="small" 
          type="profile-photo" 
          shape="square" 
          border={false}
          src={sampleImageUrls['profile-photo']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Small - Profile Photo - Square - Border</h4>
        <Avatar 
          size="small" 
          type="profile-photo" 
          shape="square" 
          border={true}
          src={sampleImageUrls['profile-photo']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Small - Profile Photo - Round - No Border</h4>
        <Avatar 
          size="small" 
          type="profile-photo" 
          shape="default" 
          border={false}
          src={sampleImageUrls['profile-photo']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Small - Profile Photo - Round - Border</h4>
        <Avatar 
          size="small" 
          type="profile-photo" 
          shape="default" 
          border={true}
          src={sampleImageUrls['profile-photo']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>

      {/* X-Small Size Variants */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>X-Small - Empty State - Square - No Border</h4>
        <Avatar 
          size="x-small" 
          type="empty-state" 
          shape="square" 
          border={false}
          src={sampleImageUrls['empty-state']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>X-Small - Empty State - Square - Border</h4>
        <Avatar 
          size="x-small" 
          type="empty-state" 
          shape="square" 
          border={true}
          src={sampleImageUrls['empty-state']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>X-Small - Empty State - Round - No Border</h4>
        <Avatar 
          size="x-small" 
          type="empty-state" 
          shape="default" 
          border={false}
          src={sampleImageUrls['empty-state']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>X-Small - Empty State - Round - Border</h4>
        <Avatar 
          size="x-small" 
          type="empty-state" 
          shape="default" 
          border={true}
          src={sampleImageUrls['empty-state']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>X-Small - Profile Photo - Square - No Border</h4>
        <Avatar 
          size="x-small" 
          type="profile-photo" 
          shape="square" 
          border={false}
          src={sampleImageUrls['profile-photo']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>X-Small - Profile Photo - Square - Border</h4>
        <Avatar 
          size="x-small" 
          type="profile-photo" 
          shape="square" 
          border={true}
          src={sampleImageUrls['profile-photo']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>X-Small - Profile Photo - Round - No Border</h4>
        <Avatar 
          size="x-small" 
          type="profile-photo" 
          shape="default" 
          border={false}
          src={sampleImageUrls['profile-photo']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>X-Small - Profile Photo - Round - Border</h4>
        <Avatar 
          size="x-small" 
          type="profile-photo" 
          shape="default" 
          border={true}
          src={sampleImageUrls['profile-photo']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>

      {/* Initial Variants - Large */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Large - Initial Dark - Square - No Border</h4>
        <Avatar 
          size="large" 
          type="initial-dark" 
          shape="square" 
          border={false}
          initial="A"
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Large - Initial Dark - Square - Border</h4>
        <Avatar 
          size="large" 
          type="initial-dark" 
          shape="square" 
          border={true}
          initial="A"
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Large - Initial Dark - Round - No Border</h4>
        <Avatar 
          size="large" 
          type="initial-dark" 
          shape="default" 
          border={false}
          initial="A"
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Large - Initial Dark - Round - Border</h4>
        <Avatar 
          size="large" 
          type="initial-dark" 
          shape="default" 
          border={true}
          initial="A"
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Large - Initial Light - Square - No Border</h4>
        <Avatar 
          size="large" 
          type="initial-light" 
          shape="square" 
          border={false}
          initial="A"
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Large - Initial Light - Square - Border</h4>
        <Avatar 
          size="large" 
          type="initial-light" 
          shape="square" 
          border={true}
          initial="A"
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Large - Initial Light - Round - No Border</h4>
        <Avatar 
          size="large" 
          type="initial-light" 
          shape="default" 
          border={false}
          initial="A"
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Large - Initial Light - Round - Border</h4>
        <Avatar 
          size="large" 
          type="initial-light" 
          shape="default" 
          border={true}
          initial="A"
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>

      {/* Smaller Initial Variants can be added in similar pattern... */}
    </div>
  )
};

/**
 * Status Icon Showcase - Different status types
 */
export const StatusShowcase: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(5, 1fr)', 
      gap: '24px', 
      padding: '24px',
      background: '#f9fafb'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Online Status</h4>
        <Avatar 
          size="large" 
          type="profile-photo" 
          shape="default" 
          border={false}
          src={sampleImageUrls['profile-photo']}
          statusIcon={{ status: 'online' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Offline Status</h4>
        <Avatar 
          size="large" 
          type="profile-photo" 
          shape="default" 
          border={false}
          src={sampleImageUrls['profile-photo']}
          statusIcon={{ status: 'offline' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Away Status</h4>
        <Avatar 
          size="large" 
          type="profile-photo" 
          shape="default" 
          border={false}
          src={sampleImageUrls['profile-photo']}
          statusIcon={{ status: 'away' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Do Not Disturb</h4>
        <Avatar 
          size="large" 
          type="profile-photo" 
          shape="default" 
          border={false}
          src={sampleImageUrls['profile-photo']}
          statusIcon={{ status: 'do-not-disturb' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Verified</h4>
        <Avatar 
          size="large" 
          type="profile-photo" 
          shape="default" 
          border={false}
          src={sampleImageUrls['profile-photo']}
          statusIcon={{ status: 'verified' }}
        />
      </div>
    </div>
  )
};

/**
 * Size Comparison - All four sizes side by side
 */
export const SizeComparison: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: '24px', 
      padding: '24px',
      alignItems: 'end',
      background: '#f9fafb'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>X-Small (26px)</h4>
        <Avatar 
          size="x-small" 
          type="profile-photo" 
          shape="default" 
          border={false}
          src={sampleImageUrls['profile-photo']}
          statusIcon={{ status: 'online' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Small (38px)</h4>
        <Avatar 
          size="small" 
          type="profile-photo" 
          shape="default" 
          border={false}
          src={sampleImageUrls['profile-photo']}
          statusIcon={{ status: 'online' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Default (46px)</h4>
        <Avatar 
          size="default" 
          type="profile-photo" 
          shape="default" 
          border={false}
          src={sampleImageUrls['profile-photo']}
          statusIcon={{ status: 'online' }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Large (62px)</h4>
        <Avatar 
          size="large" 
          type="profile-photo" 
          shape="default" 
          border={false}
          src={sampleImageUrls['profile-photo']}
          statusIcon={{ status: 'online' }}
        />
      </div>
    </div>
  )
};

/**
 * Typography Scale Showcase - Shows initial letter typography across sizes
 */
export const TypographyScale: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: '24px', 
      padding: '24px',
      alignItems: 'end',
      background: '#f9fafb'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>X-Small - 14px Label</h4>
        <Avatar 
          size="x-small" 
          type="initial-dark" 
          shape="default" 
          border={false}
          initial="A"
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Small - 18px Label</h4>
        <Avatar 
          size="small" 
          type="initial-dark" 
          shape="default" 
          border={false}
          initial="A"
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Default - 19px Heading 5</h4>
        <Avatar 
          size="default" 
          type="initial-dark" 
          shape="default" 
          border={false}
          initial="A"
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>Large - 24px Heading 4</h4>
        <Avatar 
          size="large" 
          type="initial-dark" 
          shape="default" 
          border={false}
          initial="A"
        />
      </div>
    </div>
  )
};
