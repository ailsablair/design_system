import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar/Figma Showcase',
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

/**
 * Complete Figma showcase displaying all 64 Avatar variants with status icons
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
          Large Size Avatars (62px)
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Large - Empty State */}
          <div>
            <h3 style={{ fontSize: '18px', marginBottom: '16px', color: 'var(--neutral-gray-gray-600)' }}>
              Empty State - Large
            </h3>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <Avatar size="large" type="empty-state" shape="square" border={false} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/3d1e266d78e8e192b5ac1fe27f5265c3e8355f24?width=124"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="large" type="empty-state" shape="square" border={true} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/3d1e266d78e8e192b5ac1fe27f5265c3e8355f24?width=124"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="large" type="empty-state" shape="default" border={false} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/3d1e266d78e8e192b5ac1fe27f5265c3e8355f24?width=124"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="large" type="empty-state" shape="default" border={true} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/3d1e266d78e8e192b5ac1fe27f5265c3e8355f24?width=124"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
            </div>
          </div>

          {/* Large - Profile Photo */}
          <div>
            <h3 style={{ fontSize: '18px', marginBottom: '16px', color: 'var(--neutral-gray-gray-600)' }}>
              Profile Photo - Large
            </h3>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <Avatar size="large" type="profile-photo" shape="square" border={false} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/a8e1b547082b4c5d35c56beb0df98ba95f88b3ba?width=124"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="large" type="profile-photo" shape="square" border={true} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/a8e1b547082b4c5d35c56beb0df98ba95f88b3ba?width=124"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="large" type="profile-photo" shape="default" border={false} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/a8e1b547082b4c5d35c56beb0df98ba95f88b3ba?width=124"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="large" type="profile-photo" shape="default" border={true} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/a8e1b547082b4c5d35c56beb0df98ba95f88b3ba?width=124"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
            </div>
          </div>

          {/* Large - Initial Light */}
          <div>
            <h3 style={{ fontSize: '18px', marginBottom: '16px', color: 'var(--neutral-gray-gray-600)' }}>
              Initial Light - Large
            </h3>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <Avatar size="large" type="initial-light" shape="square" border={false} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="large" type="initial-light" shape="square" border={true} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="large" type="initial-light" shape="default" border={false} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="large" type="initial-light" shape="default" border={true} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
            </div>
          </div>

          {/* Large - Initial Dark */}
          <div>
            <h3 style={{ fontSize: '18px', marginBottom: '16px', color: 'var(--neutral-gray-gray-600)' }}>
              Initial Dark - Large
            </h3>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <Avatar size="large" type="initial-dark" shape="square" border={false} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="large" type="initial-dark" shape="square" border={true} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="large" type="initial-dark" shape="default" border={false} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="large" type="initial-dark" shape="default" border={true} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
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
          Default Size Avatars (46px)
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Default - Empty State */}
          <div>
            <h3 style={{ fontSize: '18px', marginBottom: '16px', color: 'var(--neutral-gray-gray-600)' }}>
              Empty State - Default
            </h3>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <Avatar size="default" type="empty-state" shape="square" border={false} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/1f331da45b7b94d1d18237a969ee67084db219d7?width=92"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="default" type="empty-state" shape="square" border={true} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/1f331da45b7b94d1d18237a969ee67084db219d7?width=92"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="default" type="empty-state" shape="default" border={false} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/1f331da45b7b94d1d18237a969ee67084db219d7?width=92"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="default" type="empty-state" shape="default" border={true} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/1f331da45b7b94d1d18237a969ee67084db219d7?width=92"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
            </div>
          </div>

          {/* Default - Profile Photo */}
          <div>
            <h3 style={{ fontSize: '18px', marginBottom: '16px', color: 'var(--neutral-gray-gray-600)' }}>
              Profile Photo - Default
            </h3>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <Avatar size="default" type="profile-photo" shape="square" border={false} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="default" type="profile-photo" shape="square" border={true} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="default" type="profile-photo" shape="default" border={false} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="default" type="profile-photo" shape="default" border={true} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
            </div>
          </div>

          {/* Default - Initial Light */}
          <div>
            <h3 style={{ fontSize: '18px', marginBottom: '16px', color: 'var(--neutral-gray-gray-600)' }}>
              Initial Light - Default
            </h3>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <Avatar size="default" type="initial-light" shape="square" border={false} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="default" type="initial-light" shape="square" border={true} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="default" type="initial-light" shape="default" border={false} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="default" type="initial-light" shape="default" border={true} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
            </div>
          </div>

          {/* Default - Initial Dark */}
          <div>
            <h3 style={{ fontSize: '18px', marginBottom: '16px', color: 'var(--neutral-gray-gray-600)' }}>
              Initial Dark - Default
            </h3>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <Avatar size="default" type="initial-dark" shape="square" border={false} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="default" type="initial-dark" shape="square" border={true} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="default" type="initial-dark" shape="default" border={false} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="default" type="initial-dark" shape="default" border={true} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ 
          fontFamily: 'var(--type-typeface-archivo)', 
          fontSize: 'var(--type-arquivo-heading-4)', 
          fontWeight: 'var(--type-weight-semibold)',
          color: 'var(--base-black)',
          marginBottom: '24px'
        }}>
          Small Size Avatars (38px)
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Small - Empty State */}
          <div>
            <h3 style={{ fontSize: '18px', marginBottom: '16px', color: 'var(--neutral-gray-gray-600)' }}>
              Empty State - Small
            </h3>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <Avatar size="small" type="empty-state" shape="square" border={false} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/aa8094d85eb8053e8f8e05deb119d1b23e51c24d?width=76"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="small" type="empty-state" shape="square" border={true} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/aa8094d85eb8053e8f8e05deb119d1b23e51c24d?width=76"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="small" type="empty-state" shape="default" border={false} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/aa8094d85eb8053e8f8e05deb119d1b23e51c24d?width=76"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="small" type="empty-state" shape="default" border={true} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/aa8094d85eb8053e8f8e05deb119d1b23e51c24d?width=76"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
            </div>
          </div>

          {/* Small - Profile Photo */}
          <div>
            <h3 style={{ fontSize: '18px', marginBottom: '16px', color: 'var(--neutral-gray-gray-600)' }}>
              Profile Photo - Small
            </h3>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <Avatar size="small" type="profile-photo" shape="square" border={false} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/0ce133a5dd752fbae38ac314700e3abfbdf1724d?width=76"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="small" type="profile-photo" shape="square" border={true} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/0ce133a5dd752fbae38ac314700e3abfbdf1724d?width=76"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="small" type="profile-photo" shape="default" border={false} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/0ce133a5dd752fbae38ac314700e3abfbdf1724d?width=76"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="small" type="profile-photo" shape="default" border={true} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/0ce133a5dd752fbae38ac314700e3abfbdf1724d?width=76"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
            </div>
          </div>

          {/* Small - Initial Light */}
          <div>
            <h3 style={{ fontSize: '18px', marginBottom: '16px', color: 'var(--neutral-gray-gray-600)' }}>
              Initial Light - Small
            </h3>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <Avatar size="small" type="initial-light" shape="square" border={false} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="small" type="initial-light" shape="square" border={true} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="small" type="initial-light" shape="default" border={false} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="small" type="initial-light" shape="default" border={true} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
            </div>
          </div>

          {/* Small - Initial Dark */}
          <div>
            <h3 style={{ fontSize: '18px', marginBottom: '16px', color: 'var(--neutral-gray-gray-600)' }}>
              Initial Dark - Small
            </h3>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <Avatar size="small" type="initial-dark" shape="square" border={false} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="small" type="initial-dark" shape="square" border={true} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="small" type="initial-dark" shape="default" border={false} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="small" type="initial-dark" shape="default" border={true} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
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
          X-Small Size Avatars (26px)
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* X-Small - Empty State */}
          <div>
            <h3 style={{ fontSize: '18px', marginBottom: '16px', color: 'var(--neutral-gray-gray-600)' }}>
              Empty State - X-Small
            </h3>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <Avatar size="x-small" type="empty-state" shape="square" border={false} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/56ba2396973e8280f53d4e71bddcd1aba3c8aa61?width=52"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="x-small" type="empty-state" shape="square" border={true} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/56ba2396973e8280f53d4e71bddcd1aba3c8aa61?width=52"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="x-small" type="empty-state" shape="default" border={false} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/56ba2396973e8280f53d4e71bddcd1aba3c8aa61?width=52"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="x-small" type="empty-state" shape="default" border={true} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/56ba2396973e8280f53d4e71bddcd1aba3c8aa61?width=52"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
            </div>
          </div>

          {/* X-Small - Profile Photo */}
          <div>
            <h3 style={{ fontSize: '18px', marginBottom: '16px', color: 'var(--neutral-gray-gray-600)' }}>
              Profile Photo - X-Small
            </h3>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <Avatar size="x-small" type="profile-photo" shape="square" border={false} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/583a5a11dc88f126ef5bfb1cf14d35db7d34b81e?width=52"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="x-small" type="profile-photo" shape="square" border={true} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/583a5a11dc88f126ef5bfb1cf14d35db7d34b81e?width=52"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="x-small" type="profile-photo" shape="default" border={false} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/1a9559e97411422744e82bda6641db2441df2632?width=52"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="x-small" type="profile-photo" shape="default" border={true} 
                     src="https://api.builder.io/api/v1/image/assets/TEMP/1a9559e97411422744e82bda6641db2441df2632?width=52"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
            </div>
          </div>

          {/* X-Small - Initial Light */}
          <div>
            <h3 style={{ fontSize: '18px', marginBottom: '16px', color: 'var(--neutral-gray-gray-600)' }}>
              Initial Light - X-Small
            </h3>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <Avatar size="x-small" type="initial-light" shape="square" border={false} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="x-small" type="initial-light" shape="square" border={true} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="x-small" type="initial-light" shape="default" border={false} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="x-small" type="initial-light" shape="default" border={true} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
            </div>
          </div>

          {/* X-Small - Initial Dark */}
          <div>
            <h3 style={{ fontSize: '18px', marginBottom: '16px', color: 'var(--neutral-gray-gray-600)' }}>
              Initial Dark - X-Small
            </h3>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <Avatar size="x-small" type="initial-dark" shape="square" border={false} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="x-small" type="initial-dark" shape="square" border={true} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="x-small" type="initial-dark" shape="default" border={false} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
              <Avatar size="x-small" type="initial-dark" shape="default" border={true} initial="A"
                     statusIcon={{ status: 'do-not-disturb', visible: true }} />
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
          Status Icon Variations
        </h2>
        
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar type="profile-photo" src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
                   statusIcon={{ status: 'verified', visible: true }} />
            <span style={{ fontSize: '12px', color: 'var(--neutral-gray-gray-600)' }}>Verified</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar type="profile-photo" src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
                   statusIcon={{ status: 'online', visible: true }} />
            <span style={{ fontSize: '12px', color: 'var(--neutral-gray-gray-600)' }}>Online</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar type="profile-photo" src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
                   statusIcon={{ status: 'offline', visible: true }} />
            <span style={{ fontSize: '12px', color: 'var(--neutral-gray-gray-600)' }}>Offline</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar type="profile-photo" src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
                   statusIcon={{ status: 'away', visible: true }} />
            <span style={{ fontSize: '12px', color: 'var(--neutral-gray-gray-600)' }}>Away</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar type="profile-photo" src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
                   statusIcon={{ status: 'do-not-disturb', visible: true }} />
            <span style={{ fontSize: '12px', color: 'var(--neutral-gray-gray-600)' }}>Do Not Disturb</span>
          </div>
        </div>
      </div>
    </div>
  )
};

/**
 * Interactive playground for testing Avatar variants
 */
export const Playground: Story = {
  args: {
    size: 'default',
    type: 'profile-photo',
    shape: 'default',
    border: false,
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92',
    initial: 'A',
    statusIcon: {
      status: 'online',
      visible: true
    }
  }
};

/**
 * Positioning demonstration for status icons
 */
export const StatusIconPositioning: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>
          Status Icon Positioning
        </h3>
        <p style={{ marginBottom: '24px', color: 'var(--neutral-gray-gray-600)' }}>
          Status icons are precisely positioned according to Figma specifications for each size and shape combination.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar size="large" shape="default" type="profile-photo" 
                   src="https://api.builder.io/api/v1/image/assets/TEMP/a8e1b547082b4c5d35c56beb0df98ba95f88b3ba?width=124"
                   statusIcon={{ status: 'online', visible: true }} />
            <span style={{ fontSize: '12px', textAlign: 'center' }}>Large + Round</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar size="large" shape="square" type="profile-photo" 
                   src="https://api.builder.io/api/v1/image/assets/TEMP/a8e1b547082b4c5d35c56beb0df98ba95f88b3ba?width=124"
                   statusIcon={{ status: 'online', visible: true }} />
            <span style={{ fontSize: '12px', textAlign: 'center' }}>Large + Square</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar size="default" shape="default" type="profile-photo" 
                   src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
                   statusIcon={{ status: 'online', visible: true }} />
            <span style={{ fontSize: '12px', textAlign: 'center' }}>Default + Round</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar size="default" shape="square" type="profile-photo" 
                   src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
                   statusIcon={{ status: 'online', visible: true }} />
            <span style={{ fontSize: '12px', textAlign: 'center' }}>Default + Square</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar size="small" shape="default" type="profile-photo" 
                   src="https://api.builder.io/api/v1/image/assets/TEMP/0ce133a5dd752fbae38ac314700e3abfbdf1724d?width=76"
                   statusIcon={{ status: 'online', visible: true }} />
            <span style={{ fontSize: '12px', textAlign: 'center' }}>Small + Round</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar size="small" shape="square" type="profile-photo" 
                   src="https://api.builder.io/api/v1/image/assets/TEMP/0ce133a5dd752fbae38ac314700e3abfbdf1724d?width=76"
                   statusIcon={{ status: 'online', visible: true }} />
            <span style={{ fontSize: '12px', textAlign: 'center' }}>Small + Square</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar size="x-small" shape="default" type="profile-photo" 
                   src="https://api.builder.io/api/v1/image/assets/TEMP/1a9559e97411422744e82bda6641db2441df2632?width=52"
                   statusIcon={{ status: 'online', visible: true }} />
            <span style={{ fontSize: '12px', textAlign: 'center' }}>X-Small + Round</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar size="x-small" shape="square" type="profile-photo" 
                   src="https://api.builder.io/api/v1/image/assets/TEMP/583a5a11dc88f126ef5bfb1cf14d35db7d34b81e?width=52"
                   statusIcon={{ status: 'online', visible: true }} />
            <span style={{ fontSize: '12px', textAlign: 'center' }}>X-Small + Square</span>
          </div>
        </div>
      </div>
    </div>
  )
};
