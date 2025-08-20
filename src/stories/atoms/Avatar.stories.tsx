import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile avatar component supporting images, initials, and status indicators with multiple sizes and styles.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['x-small', 'small', 'default', 'large'],
      description: 'Size of the avatar',
    },
    type: {
      control: { type: 'select' },
      options: ['empty-state', 'profile-photo', 'initial-light', 'initial-dark'],
      description: 'Type/style of the avatar',
    },
    shape: {
      control: { type: 'select' },
      options: ['default', 'square'],
      description: 'Shape of the avatar',
    },
    border: {
      control: { type: 'boolean' },
      description: 'Whether to show a border around the avatar',
    },
    src: {
      control: { type: 'text' },
      description: 'Source URL for avatar image',
    },
    alt: {
      control: { type: 'text' },
      description: 'Alt text for avatar image',
    },
    initial: {
      control: { type: 'text' },
      description: 'Initial letter to display',
    },
    statusIcon: {
      control: { type: 'object' },
      description: 'Status icon configuration',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler for interactive avatars',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default avatar
export const Default: Story = {
  args: {
    type: 'empty-state',
    size: 'default',
    shape: 'default',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/1f331da45b7b94d1d18237a969ee67084db219d7?width=92',
  },
};

// Profile photo avatars
export const ProfilePhoto: Story = {
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'default',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92',
  },
};

// Initial avatars
export const InitialLight: Story = {
  args: {
    type: 'initial-light',
    size: 'default',
    shape: 'default',
    initial: 'A',
  },
};

export const InitialDark: Story = {
  args: {
    type: 'initial-dark',
    size: 'default',
    shape: 'default',
    initial: 'A',
  },
};

// With status icons
export const WithOnlineStatus: Story = {
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'default',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92',
    statusIcon: {
      status: 'online',
      visible: true,
    },
  },
};

export const WithOfflineStatus: Story = {
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'default',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92',
    statusIcon: {
      status: 'offline',
      visible: true,
    },
  },
};

export const WithAwayStatus: Story = {
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'default',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92',
    statusIcon: {
      status: 'away',
      visible: true,
    },
  },
};

export const WithDoNotDisturbStatus: Story = {
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'default',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92',
    statusIcon: {
      status: 'do-not-disturb',
      visible: true,
    },
  },
};

export const WithVerifiedStatus: Story = {
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'default',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92',
    statusIcon: {
      status: 'verified',
      visible: true,
    },
  },
};

// Size variations
export const SizeVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Avatar 
        size="x-small" 
        type="profile-photo" 
        src="https://api.builder.io/api/v1/image/assets/TEMP/0ce133a5dd752fbae38ac314700e3abfbdf1724d?width=76"
        statusIcon={{ status: 'online', visible: true }}
      />
      <Avatar 
        size="small" 
        type="profile-photo" 
        src="https://api.builder.io/api/v1/image/assets/TEMP/0ce133a5dd752fbae38ac314700e3abfbdf1724d?width=76"
        statusIcon={{ status: 'online', visible: true }}
      />
      <Avatar 
        size="default" 
        type="profile-photo" 
        src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
        statusIcon={{ status: 'online', visible: true }}
      />
      <Avatar 
        size="large" 
        type="profile-photo" 
        src="https://api.builder.io/api/v1/image/assets/TEMP/a8e1b547082b4c5d35c56beb0df98ba95f88b3ba?width=124"
        statusIcon={{ status: 'online', visible: true }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatars come in four sizes: x-small (26px), small (38px), default (46px), and large (62px).',
      },
    },
  },
};

// Shape variations
export const ShapeVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Avatar 
          type="profile-photo" 
          shape="default"
          src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
          statusIcon={{ status: 'online', visible: true }}
        />
        <span style={{ fontSize: '12px', color: '#6D7280' }}>Round</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Avatar 
          type="profile-photo" 
          shape="square"
          src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
          statusIcon={{ status: 'online', visible: true }}
        />
        <span style={{ fontSize: '12px', color: '#6D7280' }}>Square</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatars can be either round (default) or square shaped.',
      },
    },
  },
};

// Border variations
export const BorderVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Avatar 
          type="profile-photo" 
          border={false}
          src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
          statusIcon={{ status: 'online', visible: true }}
        />
        <span style={{ fontSize: '12px', color: '#6D7280' }}>No Border</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Avatar 
          type="profile-photo" 
          border={true}
          src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
          statusIcon={{ status: 'online', visible: true }}
        />
        <span style={{ fontSize: '12px', color: '#6D7280' }}>With Border</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatars can optionally include a white border with drop shadow for enhanced visual separation.',
      },
    },
  },
};

// Status variations
export const StatusVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Avatar 
          type="profile-photo" 
          src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
          statusIcon={{ status: 'online', visible: true }}
        />
        <span style={{ fontSize: '12px', color: '#6D7280' }}>Online</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Avatar 
          type="profile-photo" 
          src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
          statusIcon={{ status: 'offline', visible: true }}
        />
        <span style={{ fontSize: '12px', color: '#6D7280' }}>Offline</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Avatar 
          type="profile-photo" 
          src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
          statusIcon={{ status: 'away', visible: true }}
        />
        <span style={{ fontSize: '12px', color: '#6D7280' }}>Away</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Avatar 
          type="profile-photo" 
          src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
          statusIcon={{ status: 'do-not-disturb', visible: true }}
        />
        <span style={{ fontSize: '12px', color: '#6D7280' }}>Do Not Disturb</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Avatar 
          type="profile-photo" 
          src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
          statusIcon={{ status: 'verified', visible: true }}
        />
        <span style={{ fontSize: '12px', color: '#6D7280' }}>Verified</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatars support various status indicators: online (green), offline (gray), away (yellow), do-not-disturb (red), and verified (blue checkmark).',
      },
    },
  },
};

// Type variations
export const TypeVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Avatar 
          type="empty-state" 
          src="https://api.builder.io/api/v1/image/assets/TEMP/1f331da45b7b94d1d18237a969ee67084db219d7?width=92"
        />
        <span style={{ fontSize: '12px', color: '#6D7280' }}>Empty State</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Avatar 
          type="profile-photo" 
          src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
        />
        <span style={{ fontSize: '12px', color: '#6D7280' }}>Profile Photo</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Avatar 
          type="initial-light" 
          initial="A"
        />
        <span style={{ fontSize: '12px', color: '#6D7280' }}>Initial Light</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Avatar 
          type="initial-dark" 
          initial="A"
        />
        <span style={{ fontSize: '12px', color: '#6D7280' }}>Initial Dark</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatars support four types: empty-state (placeholder image), profile-photo (user image), initial-light (letter on light background), and initial-dark (letter on dark background).',
      },
    },
  },
};

// Interactive avatar
export const Interactive: Story = {
  args: {
    type: 'profile-photo',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92',
    statusIcon: {
      status: 'online',
      visible: true,
    },
    onClick: () => console.log('Avatar clicked!'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Avatars can be made interactive by providing an onClick handler. Interactive avatars show hover effects and proper focus states.',
      },
    },
  },
};

// Initial variations
export const InitialVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
      <Avatar type="initial-light" initial="A" size="x-small" />
      <Avatar type="initial-light" initial="B" size="small" />
      <Avatar type="initial-light" initial="C" size="default" />
      <Avatar type="initial-light" initial="D" size="large" />
      <Avatar type="initial-dark" initial="E" size="x-small" />
      <Avatar type="initial-dark" initial="F" size="small" />
      <Avatar type="initial-dark" initial="G" size="default" />
      <Avatar type="initial-dark" initial="H" size="large" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Initial avatars display a single letter with appropriate typography scaling for each size.',
      },
    },
  },
};
