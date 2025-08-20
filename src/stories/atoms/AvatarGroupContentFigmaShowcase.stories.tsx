import type { Meta, StoryObj } from '@storybook/react';
import { AvatarGroup } from './AvatarGroup';
import { AvatarContent } from './AvatarContent';

const meta: Meta = {
  title: 'Design System/Avatar Group & Content Figma Showcase',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Complete Avatar Group and Avatar Content showcase matching Figma design specifications.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample avatar data for groups
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

const smallAvatars = [
  {
    id: '1',
    name: 'User 1',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/1a9559e97411422744e82bda6641db2441df2632?width=52',
    type: 'profile-photo'
  },
  {
    id: '2',
    name: 'User 2',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/1a9559e97411422744e82bda6641db2441df2632?width=52',
    type: 'profile-photo'
  },
  {
    id: '3',
    name: 'User 3',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/1a9559e97411422744e82bda6641db2441df2632?width=52',
    type: 'profile-photo'
  },
  {
    id: '4',
    name: 'User 4',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/1a9559e97411422744e82bda6641db2441df2632?width=52',
    type: 'profile-photo'
  },
  {
    id: '5',
    name: 'User 5',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/1a9559e97411422744e82bda6641db2441df2632?width=52',
    type: 'profile-photo'
  }
];

export const AvatarGroupShowcase: Story = {
  render: () => (
    <div style={{ padding: '24px', backgroundColor: '#f9fafb' }}>
      <h2 style={{ marginBottom: '32px', fontSize: '24px', fontWeight: '500' }}>Avatar Group Component - All Figma Variants</h2>
      
      {/* Default Layout Groups */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '500' }}>Default Overlapping Layout</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '500', color: '#6D7280', margin: 0 }}>Default Size</h4>
            <AvatarGroup 
              type="default" 
              stroke="default" 
              size="default" 
              avatars={profileAvatars} 
            />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '500', color: '#6D7280', margin: 0 }}>Small Size</h4>
            <AvatarGroup 
              type="default" 
              stroke="default" 
              size="small" 
              avatars={smallAvatars} 
            />
          </div>
        </div>
      </div>

      {/* Bordered Layout Groups */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '500' }}>Bordered Layout</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '500', color: '#6D7280', margin: 0 }}>Default Size - Bordered</h4>
            <AvatarGroup 
              type="default" 
              stroke="bordered" 
              size="default" 
              avatars={profileAvatars.slice(0, 5)} 
            />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '500', color: '#6D7280', margin: 0 }}>Small Size - Bordered</h4>
            <AvatarGroup 
              type="default" 
              stroke="bordered" 
              size="small" 
              avatars={smallAvatars.slice(0, 5)} 
            />
          </div>
        </div>
      </div>

      {/* Initial Theme Groups */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '500' }}>Initial Theme Groups</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '500', color: '#6D7280', margin: 0 }}>Light Initials - Default</h4>
            <AvatarGroup 
              type="initials-light" 
              stroke="default" 
              size="default" 
              avatars={[
                { id: '1', name: 'Alice', initial: 'A' },
                { id: '2', name: 'Bob', initial: 'A' },
                { id: '3', name: 'Charlie', initial: 'A' },
                { id: '4', name: 'Diana', initial: 'A' },
                { id: '5', name: 'Eve', initial: 'A' }
              ]} 
            />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '500', color: '#6D7280', margin: 0 }}>Light Initials - Small</h4>
            <AvatarGroup 
              type="initials-light" 
              stroke="default" 
              size="small" 
              avatars={[
                { id: '1', name: 'Alice', initial: 'A' },
                { id: '2', name: 'Bob', initial: 'A' },
                { id: '3', name: 'Charlie', initial: 'A' },
                { id: '4', name: 'Diana', initial: 'A' },
                { id: '5', name: 'Eve', initial: 'A' }
              ]} 
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '500', color: '#6D7280', margin: 0 }}>Light Initials - Bordered</h4>
            <AvatarGroup 
              type="initials-light" 
              stroke="bordered" 
              size="default" 
              avatars={[
                { id: '1', name: 'Alice', initial: 'A' },
                { id: '2', name: 'Bob', initial: 'A' },
                { id: '3', name: 'Charlie', initial: 'A' },
                { id: '4', name: 'Diana', initial: 'A' },
                { id: '5', name: 'Eve', initial: 'A' }
              ]} 
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '500', color: '#6D7280', margin: 0 }}>Dark Initials - Default</h4>
            <AvatarGroup 
              type="initials-dark" 
              stroke="default" 
              size="default" 
              avatars={[
                { id: '1', name: 'Alice', initial: 'A' },
                { id: '2', name: 'Bob', initial: 'A' },
                { id: '3', name: 'Charlie', initial: 'A' },
                { id: '4', name: 'Diana', initial: 'A' },
                { id: '5', name: 'Eve', initial: 'A' }
              ]} 
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '500', color: '#6D7280', margin: 0 }}>Dark Initials - Bordered</h4>
            <AvatarGroup 
              type="initials-dark" 
              stroke="bordered" 
              size="default" 
              avatars={[
                { id: '1', name: 'Alice', initial: 'A' },
                { id: '2', name: 'Bob', initial: 'A' },
                { id: '3', name: 'Charlie', initial: 'A' },
                { id: '4', name: 'Diana', initial: 'A' },
                { id: '5', name: 'Eve', initial: 'A' }
              ]} 
            />
          </div>
        </div>
      </div>

      {/* Grid Layout Groups */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '500' }}>Grid Layout</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '500', color: '#6D7280', margin: 0 }}>Grid - Default Size</h4>
            <AvatarGroup 
              type="grid" 
              stroke="default" 
              size="default" 
              avatars={[
                { id: '1', name: 'Alice', initial: 'A', type: 'initial-dark' },
                { id: '2', name: 'Bob', src: 'https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92' },
                { id: '3', name: 'Charlie', src: 'https://api.builder.io/api/v1/image/assets/TEMP/a5975c4dc9ade3964ba3097a44dfa072ad4be35e?width=92' },
                { id: '4', name: 'Diana', initial: 'A', type: 'initial-light' },
                { id: '5', name: 'Eve', src: 'https://api.builder.io/api/v1/image/assets/TEMP/d9502ef5e965a1bc07d3cb17e4f07cb40eebe894?width=92' },
                { id: '6', name: 'Frank', initial: 'A', type: 'initial-light' },
                { id: '7', name: 'Grace', src: 'https://api.builder.io/api/v1/image/assets/TEMP/43761e3459c08202b86ad8d0b862a0bc0e2262c5?width=92' },
                { id: '8', name: 'Henry', src: 'https://api.builder.io/api/v1/image/assets/TEMP/1cf4c6f6382a2595446167d417407bedb3856466?width=92' }
              ]} 
            />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '500', color: '#6D7280', margin: 0 }}>Grid - Small Size</h4>
            <AvatarGroup 
              type="grid" 
              stroke="default" 
              size="small" 
              avatars={[
                { id: '1', name: 'Alice', initial: 'A', type: 'initial-dark' },
                { id: '2', name: 'Bob', src: 'https://api.builder.io/api/v1/image/assets/TEMP/1a9559e97411422744e82bda6641db2441df2632?width=52' },
                { id: '3', name: 'Charlie', src: 'https://api.builder.io/api/v1/image/assets/TEMP/1a9559e97411422744e82bda6641db2441df2632?width=52' },
                { id: '4', name: 'Diana', initial: 'A', type: 'initial-light' },
                { id: '5', name: 'Eve', src: 'https://api.builder.io/api/v1/image/assets/TEMP/1a9559e97411422744e82bda6641db2441df2632?width=52' },
                { id: '6', name: 'Frank', initial: 'A', type: 'initial-light' },
                { id: '7', name: 'Grace', src: 'https://api.builder.io/api/v1/image/assets/TEMP/1a9559e97411422744e82bda6641db2441df2632?width=52' },
                { id: '8', name: 'Henry', src: 'https://api.builder.io/api/v1/image/assets/TEMP/1a9559e97411422744e82bda6641db2441df2632?width=52' }
              ]} 
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '500', color: '#6D7280', margin: 0 }}>Grid - Bordered</h4>
            <AvatarGroup 
              type="grid" 
              stroke="bordered" 
              size="default" 
              avatars={[
                { id: '1', name: 'Alice', initial: 'A', type: 'initial-dark' },
                { id: '2', name: 'Bob', src: 'https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92' },
                { id: '3', name: 'Charlie', src: 'https://api.builder.io/api/v1/image/assets/TEMP/a5975c4dc9ade3964ba3097a44dfa072ad4be35e?width=92' },
                { id: '4', name: 'Diana', initial: 'A', type: 'initial-light' },
                { id: '5', name: 'Eve', src: 'https://api.builder.io/api/v1/image/assets/TEMP/d9502ef5e965a1bc07d3cb17e4f07cb40eebe894?width=92' },
                { id: '6', name: 'Frank', initial: 'A', type: 'initial-light' },
                { id: '7', name: 'Grace', src: 'https://api.builder.io/api/v1/image/assets/TEMP/43761e3459c08202b86ad8d0b862a0bc0e2262c5?width=92' },
                { id: '8', name: 'Henry', src: 'https://api.builder.io/api/v1/image/assets/TEMP/1cf4c6f6382a2595446167d417407bedb3856466?width=92' }
              ]} 
            />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all Avatar Group variants as specified in the Figma design.',
      },
    },
  },
};

export const AvatarContentShowcase: Story = {
  render: () => (
    <div style={{ padding: '24px', backgroundColor: '#f9fafb' }}>
      <h2 style={{ marginBottom: '32px', fontSize: '24px', fontWeight: '500' }}>Avatar Content Component - All Figma Variants</h2>
      
      {/* With Subtext Variants */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '500' }}>With Subtext Variants</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '500', color: '#6D7280', margin: 0 }}>Large Size</h4>
            <AvatarContent 
              type="w-subtext"
              size="large"
              name="Damon Underwood"
              email="damon@emaildomain.com"
              subtext="Additional subtext (e.g role)"
              avatar={{
                src: 'https://api.builder.io/api/v1/image/assets/TEMP/70e9d2d73723cf853b41691c70fb8162340b3636?width=124',
                type: 'profile-photo',
                statusIcon: {
                  status: 'online',
                  visible: true
                }
              }}
            />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '500', color: '#6D7280', margin: 0 }}>Default Size</h4>
            <AvatarContent 
              type="w-subtext"
              size="default"
              name="Damon Underwood"
              email="damon@emaildomain.com"
              subtext="Additional subtext (e.g role)"
              avatar={{
                src: 'https://api.builder.io/api/v1/image/assets/TEMP/7dde526cb3a6e61a8030226b159789aea7d8a310?width=92',
                type: 'profile-photo',
                statusIcon: {
                  status: 'online',
                  visible: true
                }
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '500', color: '#6D7280', margin: 0 }}>Small Size</h4>
            <AvatarContent 
              type="w-subtext"
              size="small"
              name="Damon Underwood"
              subtext="Additional subtext (e.g role)"
              avatar={{
                src: 'https://api.builder.io/api/v1/image/assets/TEMP/f748f77b962338c360bd59f90f53ff9e48eb32da?width=76',
                type: 'profile-photo',
                statusIcon: {
                  status: 'online',
                  visible: true
                }
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '500', color: '#6D7280', margin: 0 }}>X-Small Size</h4>
            <AvatarContent 
              type="w-subtext"
              size="x-small"
              name="Damon Underwood"
              subtext="Additional subtext (e.g role)"
              avatar={{
                src: 'https://api.builder.io/api/v1/image/assets/TEMP/7f3477e34bf3de3e713eafb879c751de5a7f11a8?width=52',
                type: 'profile-photo',
                statusIcon: {
                  status: 'online',
                  visible: true
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* Default Type Variants */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '500' }}>Default Type (Name + Email)</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '500', color: '#6D7280', margin: 0 }}>Default Size</h4>
            <AvatarContent 
              type="default"
              size="default"
              name="Willow Quinn"
              email="willowquin@email.com"
              emailFont="roboto-flex"
              avatar={{
                src: 'https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92',
                type: 'profile-photo'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '500', color: '#6D7280', margin: 0 }}>Large Size</h4>
            <AvatarContent 
              type="default"
              size="large"
              name="Willow Quinn"
              email="willowquin@email.com"
              avatar={{
                src: 'https://api.builder.io/api/v1/image/assets/TEMP/a8e1b547082b4c5d35c56beb0df98ba95f88b3ba?width=124',
                type: 'profile-photo'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '500', color: '#6D7280', margin: 0 }}>Small Size</h4>
            <AvatarContent 
              type="default"
              size="small"
              name="Willow Quinn"
              email="willowquin@email.com"
              emailFont="roboto-flex"
              avatar={{
                src: 'https://api.builder.io/api/v1/image/assets/TEMP/0ce133a5dd752fbae38ac314700e3abfbdf1724d?width=76',
                type: 'profile-photo'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '500', color: '#6D7280', margin: 0 }}>X-Small Size</h4>
            <AvatarContent 
              type="default"
              size="x-small"
              name="Willow Quinn"
              email="willowquin@email.com"
              nameFont="roboto-flex"
              emailFont="roboto-flex"
              avatar={{
                src: 'https://api.builder.io/api/v1/image/assets/TEMP/1a9559e97411422744e82bda6641db2441df2632?width=52',
                type: 'profile-photo'
              }}
            />
          </div>
        </div>
      </div>

      {/* Name Only Variants */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '500' }}>Name Only Type</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '500', color: '#6D7280', margin: 0 }}>Default Size</h4>
            <AvatarContent 
              type="name-only"
              size="default"
              name="Willow Quinn"
              avatar={{
                src: 'https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92',
                type: 'profile-photo'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '500', color: '#6D7280', margin: 0 }}>Large Size</h4>
            <AvatarContent 
              type="name-only"
              size="large"
              name="Willow Quinn"
              avatar={{
                src: 'https://api.builder.io/api/v1/image/assets/TEMP/a8e1b547082b4c5d35c56beb0df98ba95f88b3ba?width=124',
                type: 'profile-photo'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '500', color: '#6D7280', margin: 0 }}>Small Size</h4>
            <AvatarContent 
              type="name-only"
              size="small"
              name="Willow Quinn"
              avatar={{
                src: 'https://api.builder.io/api/v1/image/assets/TEMP/0ce133a5dd752fbae38ac314700e3abfbdf1724d?width=76',
                type: 'profile-photo'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '500', color: '#6D7280', margin: 0 }}>X-Small Size</h4>
            <AvatarContent 
              type="name-only"
              size="x-small"
              name="Willow Quinn"
              avatar={{
                src: 'https://api.builder.io/api/v1/image/assets/TEMP/1a9559e97411422744e82bda6641db2441df2632?width=52',
                type: 'profile-photo'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all Avatar Content variants as specified in the Figma design.',
      },
    },
  },
};

export const AllVariantsGrid: Story = {
  render: () => (
    <div style={{ padding: '24px', backgroundColor: '#f9fafb' }}>
      <h2 style={{ marginBottom: '32px', fontSize: '24px', fontWeight: '500' }}>Complete Avatar System Overview</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
        {/* Avatar Groups Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '500', margin: 0 }}>Avatar Groups</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ padding: '12px', backgroundColor: 'white', borderRadius: '8px' }}>
              <p style={{ fontSize: '14px', margin: '0 0 8px 0', color: '#6D7280' }}>Default</p>
              <AvatarGroup type="default" avatars={profileAvatars.slice(0, 4)} />
            </div>
            
            <div style={{ padding: '12px', backgroundColor: 'white', borderRadius: '8px' }}>
              <p style={{ fontSize: '14px', margin: '0 0 8px 0', color: '#6D7280' }}>Bordered</p>
              <AvatarGroup type="default" stroke="bordered" avatars={profileAvatars.slice(0, 4)} />
            </div>
            
            <div style={{ padding: '12px', backgroundColor: 'white', borderRadius: '8px' }}>
              <p style={{ fontSize: '14px', margin: '0 0 8px 0', color: '#6D7280' }}>Initials Light</p>
              <AvatarGroup 
                type="initials-light" 
                avatars={[
                  { id: '1', name: 'A', initial: 'A' },
                  { id: '2', name: 'B', initial: 'A' },
                  { id: '3', name: 'C', initial: 'A' },
                  { id: '4', name: 'D', initial: 'A' }
                ]} 
              />
            </div>
            
            <div style={{ padding: '12px', backgroundColor: 'white', borderRadius: '8px' }}>
              <p style={{ fontSize: '14px', margin: '0 0 8px 0', color: '#6D7280' }}>Initials Dark</p>
              <AvatarGroup 
                type="initials-dark" 
                avatars={[
                  { id: '1', name: 'A', initial: 'A' },
                  { id: '2', name: 'B', initial: 'A' },
                  { id: '3', name: 'C', initial: 'A' },
                  { id: '4', name: 'D', initial: 'A' }
                ]} 
              />
            </div>
          </div>
        </div>

        {/* Avatar Content Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '500', margin: 0 }}>Avatar Content</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ padding: '12px', backgroundColor: 'white', borderRadius: '8px' }}>
              <p style={{ fontSize: '14px', margin: '0 0 8px 0', color: '#6D7280' }}>Default</p>
              <AvatarContent 
                type="default"
                name="Willow Quinn"
                email="willowquin@email.com"
                avatar={{ src: profileAvatars[0].src }}
              />
            </div>
            
            <div style={{ padding: '12px', backgroundColor: 'white', borderRadius: '8px' }}>
              <p style={{ fontSize: '14px', margin: '0 0 8px 0', color: '#6D7280' }}>With Subtext</p>
              <AvatarContent 
                type="w-subtext"
                name="Damon Underwood"
                email="damon@emaildomain.com"
                subtext="Additional subtext (e.g role)"
                avatar={{ 
                  src: profileAvatars[1].src,
                  statusIcon: { status: 'online', visible: true }
                }}
              />
            </div>
            
            <div style={{ padding: '12px', backgroundColor: 'white', borderRadius: '8px' }}>
              <p style={{ fontSize: '14px', margin: '0 0 8px 0', color: '#6D7280' }}>Name Only</p>
              <AvatarContent 
                type="name-only"
                name="Willow Quinn"
                avatar={{ src: profileAvatars[0].src }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete overview of the Avatar system including groups and content variants.',
      },
    },
  },
};
