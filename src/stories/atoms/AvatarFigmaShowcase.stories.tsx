import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Design System/Avatar Figma Showcase',
  component: Avatar,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Complete Avatar component showcase matching Figma design specifications with all 64 variants.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div style={{ padding: '24px', backgroundColor: '#f9fafb' }}>
      <h2 style={{ marginBottom: '32px', fontSize: '24px', fontWeight: '500' }}>Avatar Component - All Figma Variants</h2>
      
      {/* Large Size Variants */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '500' }}>Large Size (62px)</h3>
        
        {/* Empty State - Large */}
        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '500', color: '#6D7280' }}>Empty State</h4>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Avatar 
                size="large" 
                type="empty-state" 
                shape="square" 
                border={false}
                src="https://api.builder.io/api/v1/image/assets/TEMP/3d1e266d78e8e192b5ac1fe27f5265c3e8355f24?width=124"
                statusIcon={{ status: 'do-not-disturb', visible: true }}
              />
              <span style={{ fontSize: '12px', color: '#6D7280' }}>Square, No Border</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Avatar 
                size="large" 
                type="empty-state" 
                shape="square" 
                border={true}
                src="https://api.builder.io/api/v1/image/assets/TEMP/3d1e266d78e8e192b5ac1fe27f5265c3e8355f24?width=124"
                statusIcon={{ status: 'do-not-disturb', visible: true }}
              />
              <span style={{ fontSize: '12px', color: '#6D7280' }}>Square, Border</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Avatar 
                size="large" 
                type="empty-state" 
                shape="default" 
                border={false}
                src="https://api.builder.io/api/v1/image/assets/TEMP/3d1e266d78e8e192b5ac1fe27f5265c3e8355f24?width=124"
                statusIcon={{ status: 'do-not-disturb', visible: true }}
              />
              <span style={{ fontSize: '12px', color: '#6D7280' }}>Round, No Border</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Avatar 
                size="large" 
                type="empty-state" 
                shape="default" 
                border={true}
                src="https://api.builder.io/api/v1/image/assets/TEMP/3d1e266d78e8e192b5ac1fe27f5265c3e8355f24?width=124"
                statusIcon={{ status: 'do-not-disturb', visible: true }}
              />
              <span style={{ fontSize: '12px', color: '#6D7280' }}>Round, Border</span>
            </div>
          </div>
        </div>

        {/* Profile Photo - Large */}
        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '500', color: '#6D7280' }}>Profile Photo</h4>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Avatar 
              size="large" 
              type="profile-photo" 
              shape="square" 
              border={false}
              src="https://api.builder.io/api/v1/image/assets/TEMP/a8e1b547082b4c5d35c56beb0df98ba95f88b3ba?width=124"
              statusIcon={{ status: 'do-not-disturb', visible: true }}
            />
            <Avatar 
              size="large" 
              type="profile-photo" 
              shape="square" 
              border={true}
              src="https://api.builder.io/api/v1/image/assets/TEMP/a8e1b547082b4c5d35c56beb0df98ba95f88b3ba?width=124"
              statusIcon={{ status: 'do-not-disturb', visible: true }}
            />
            <Avatar 
              size="large" 
              type="profile-photo" 
              shape="default" 
              border={false}
              src="https://api.builder.io/api/v1/image/assets/TEMP/a8e1b547082b4c5d35c56beb0df98ba95f88b3ba?width=124"
              statusIcon={{ status: 'do-not-disturb', visible: true }}
            />
            <Avatar 
              size="large" 
              type="profile-photo" 
              shape="default" 
              border={true}
              src="https://api.builder.io/api/v1/image/assets/TEMP/a8e1b547082b4c5d35c56beb0df98ba95f88b3ba?width=124"
              statusIcon={{ status: 'do-not-disturb', visible: true }}
            />
          </div>
        </div>

        {/* Initial Dark - Large */}
        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '500', color: '#6D7280' }}>Initial Dark</h4>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Avatar 
              size="large" 
              type="initial-dark" 
              shape="square" 
              border={false}
              initial="A"
              statusIcon={{ status: 'do-not-disturb', visible: true }}
            />
            <Avatar 
              size="large" 
              type="initial-dark" 
              shape="square" 
              border={true}
              initial="A"
              statusIcon={{ status: 'do-not-disturb', visible: true }}
            />
            <Avatar 
              size="large" 
              type="initial-dark" 
              shape="default" 
              border={false}
              initial="A"
              statusIcon={{ status: 'do-not-disturb', visible: true }}
            />
            <Avatar 
              size="large" 
              type="initial-dark" 
              shape="default" 
              border={true}
              initial="A"
              statusIcon={{ status: 'do-not-disturb', visible: true }}
            />
          </div>
        </div>

        {/* Initial Light - Large */}
        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '500', color: '#6D7280' }}>Initial Light</h4>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Avatar 
              size="large" 
              type="initial-light" 
              shape="square" 
              border={false}
              initial="A"
              statusIcon={{ status: 'do-not-disturb', visible: true }}
            />
            <Avatar 
              size="large" 
              type="initial-light" 
              shape="square" 
              border={true}
              initial="A"
              statusIcon={{ status: 'do-not-disturb', visible: true }}
            />
            <Avatar 
              size="large" 
              type="initial-light" 
              shape="default" 
              border={false}
              initial="A"
              statusIcon={{ status: 'do-not-disturb', visible: true }}
            />
            <Avatar 
              size="large" 
              type="initial-light" 
              shape="default" 
              border={true}
              initial="A"
              statusIcon={{ status: 'do-not-disturb', visible: true }}
            />
          </div>
        </div>
      </div>

      {/* Default Size Variants */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '500' }}>Default Size (46px)</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
          {/* Default Size - All Types */}
          <div>
            <h4 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '500', color: '#6D7280' }}>All Types</h4>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Avatar 
                size="default" 
                type="empty-state" 
                shape="square" 
                border={false}
                src="https://api.builder.io/api/v1/image/assets/TEMP/1f331da45b7b94d1d18237a969ee67084db219d7?width=92"
                statusIcon={{ status: 'do-not-disturb', visible: true }}
              />
              <Avatar 
                size="default" 
                type="profile-photo" 
                shape="default" 
                border={false}
                src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
                statusIcon={{ status: 'do-not-disturb', visible: true }}
              />
              <Avatar 
                size="default" 
                type="initial-dark" 
                shape="square" 
                border={false}
                initial="A"
                statusIcon={{ status: 'do-not-disturb', visible: true }}
              />
              <Avatar 
                size="default" 
                type="initial-light" 
                shape="default" 
                border={false}
                initial="A"
                statusIcon={{ status: 'do-not-disturb', visible: true }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Small Size Variants */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '500' }}>Small Size (38px)</h3>
        
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Avatar 
            size="small" 
            type="empty-state" 
            shape="square" 
            border={false}
            src="https://api.builder.io/api/v1/image/assets/TEMP/aa8094d85eb8053e8f8e05deb119d1b23e51c24d?width=76"
            statusIcon={{ status: 'do-not-disturb', visible: true }}
          />
          <Avatar 
            size="small" 
            type="profile-photo" 
            shape="default" 
            border={false}
            src="https://api.builder.io/api/v1/image/assets/TEMP/0ce133a5dd752fbae38ac314700e3abfbdf1724d?width=76"
            statusIcon={{ status: 'do-not-disturb', visible: true }}
          />
          <Avatar 
            size="small" 
            type="initial-dark" 
            shape="square" 
            border={false}
            initial="A"
            statusIcon={{ status: 'do-not-disturb', visible: true }}
          />
          <Avatar 
            size="small" 
            type="initial-light" 
            shape="default" 
            border={false}
            initial="A"
            statusIcon={{ status: 'do-not-disturb', visible: true }}
          />
        </div>
      </div>

      {/* X-Small Size Variants */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '500' }}>X-Small Size (26px)</h3>
        
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Avatar 
            size="x-small" 
            type="empty-state" 
            shape="square" 
            border={false}
            src="https://api.builder.io/api/v1/image/assets/TEMP/56ba2396973e8280f53d4e71bddcd1aba3c8aa61?width=52"
            statusIcon={{ status: 'do-not-disturb', visible: true }}
          />
          <Avatar 
            size="x-small" 
            type="profile-photo" 
            shape="default" 
            border={false}
            src="https://api.builder.io/api/v1/image/assets/TEMP/1a9559e97411422744e82bda6641db2441df2632?width=52"
            statusIcon={{ status: 'do-not-disturb', visible: true }}
          />
          <Avatar 
            size="x-small" 
            type="initial-dark" 
            shape="square" 
            border={false}
            initial="A"
            statusIcon={{ status: 'do-not-disturb', visible: true }}
          />
          <Avatar 
            size="x-small" 
            type="initial-light" 
            shape="default" 
            border={false}
            initial="A"
            statusIcon={{ status: 'do-not-disturb', visible: true }}
          />
        </div>
      </div>

      {/* Status Icon Showcase */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '500' }}>Status Icon Variations</h3>
        
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar 
              size="default" 
              type="profile-photo" 
              src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
              statusIcon={{ status: 'verified', visible: true }}
            />
            <span style={{ fontSize: '12px', color: '#6D7280' }}>Verified</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar 
              size="default" 
              type="profile-photo" 
              src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
              statusIcon={{ status: 'online', visible: true }}
            />
            <span style={{ fontSize: '12px', color: '#6D7280' }}>Online</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar 
              size="default" 
              type="profile-photo" 
              src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
              statusIcon={{ status: 'offline', visible: true }}
            />
            <span style={{ fontSize: '12px', color: '#6D7280' }}>Offline</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar 
              size="default" 
              type="profile-photo" 
              src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
              statusIcon={{ status: 'away', visible: true }}
            />
            <span style={{ fontSize: '12px', color: '#6D7280' }}>Away</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar 
              size="default" 
              type="profile-photo" 
              src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
              statusIcon={{ status: 'do-not-disturb', visible: true }}
            />
            <span style={{ fontSize: '12px', color: '#6D7280' }}>Do Not Disturb</span>
          </div>
        </div>
      </div>

      {/* Interactive Examples */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '500' }}>Interactive Examples</h3>
        
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Avatar 
            size="default" 
            type="profile-photo" 
            src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
            statusIcon={{ status: 'online', visible: true }}
            onClick={() => alert('Avatar clicked!')}
          />
          <Avatar 
            size="large" 
            type="initial-dark" 
            initial="JD"
            statusIcon={{ status: 'verified', visible: true }}
            onClick={() => alert('Profile clicked!')}
          />
        </div>
        <p style={{ fontSize: '14px', color: '#6D7280', marginTop: '8px' }}>
          Click the avatars above to see interaction behavior
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all Avatar component variants as specified in the Figma design, including all combinations of size, type, shape, border, and status icon options.',
      },
    },
  },
};

export const ComponentGrid: Story = {
  render: () => (
    <div style={{ 
      padding: '24px', 
      display: 'grid', 
      gridTemplateColumns: 'repeat(8, 1fr)', 
      gap: '16px',
      maxWidth: '800px'
    }}>
      {/* Create a comprehensive grid showing all 64 variants */}
      {['large', 'default', 'small', 'x-small'].map(size => (
        ['empty-state', 'profile-photo', 'initial-dark', 'initial-light'].map(type => (
          ['default', 'square'].map(shape => (
            [false, true].map(border => {
              const key = `${size}-${type}-${shape}-${border}`;
              const srcMap: Record<string, string> = {
                'large': 'https://api.builder.io/api/v1/image/assets/TEMP/a8e1b547082b4c5d35c56beb0df98ba95f88b3ba?width=124',
                'default': 'https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92',
                'small': 'https://api.builder.io/api/v1/image/assets/TEMP/0ce133a5dd752fbae38ac314700e3abfbdf1724d?width=76',
                'x-small': 'https://api.builder.io/api/v1/image/assets/TEMP/1a9559e97411422744e82bda6641db2441df2632?width=52'
              };
              
              return (
                <Avatar 
                  key={key}
                  size={size as any}
                  type={type as any}
                  shape={shape as any}
                  border={border}
                  src={type.includes('initial') ? undefined : srcMap[size]}
                  initial={type.includes('initial') ? 'A' : undefined}
                  statusIcon={{ status: 'do-not-disturb', visible: true }}
                />
              );
            })
          )).flat()
        )).flat()
      )).flat()}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete grid view of all 64 Avatar variants, systematically showing every combination of properties.',
      },
    },
  },
};
