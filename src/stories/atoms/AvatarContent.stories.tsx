import type { Meta, StoryObj } from '@storybook/react';
import { AvatarContent } from './AvatarContent';

const meta: Meta<typeof AvatarContent> = {
  title: 'Atoms/AvatarContent',
  component: AvatarContent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component for displaying an avatar with associated text content including name, email, and optional subtext.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['default', 'w-subtext', 'name-only'],
      description: 'Type of content layout',
    },
    size: {
      control: { type: 'select' },
      options: ['x-small', 'small', 'default', 'large'],
      description: 'Size of the avatar and content',
    },
    name: {
      control: { type: 'text' },
      description: 'Primary name/title text',
    },
    email: {
      control: { type: 'text' },
      description: 'Email or secondary text',
    },
    subtext: {
      control: { type: 'text' },
      description: 'Additional subtext (e.g., role, department)',
    },
    showSubtext: {
      control: { type: 'boolean' },
      description: 'Whether to show the subtext',
    },
    nameFont: {
      control: { type: 'select' },
      options: ['archivo', 'roboto-flex'],
      description: 'Font family for the name',
    },
    emailFont: {
      control: { type: 'select' },
      options: ['archivo', 'roboto-flex'],
      description: 'Font family for the email',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler for the content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default with name and email
export const Default: Story = {
  args: {
    type: 'default',
    size: 'default',
    name: 'Willow Quinn',
    email: 'willowquin@email.com',
    avatar: {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92',
      type: 'profile-photo'
    }
  },
};

// With subtext
export const WithSubtext: Story = {
  args: {
    type: 'w-subtext',
    size: 'large',
    name: 'Damon Underwood',
    email: 'damon@emaildomain.com',
    subtext: 'Additional subtext (e.g role)',
    showSubtext: true,
    avatar: {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/70e9d2d73723cf853b41691c70fb8162340b3636?width=124',
      type: 'profile-photo',
      statusIcon: {
        status: 'online',
        visible: true
      }
    }
  },
};

// Name only
export const NameOnly: Story = {
  args: {
    type: 'name-only',
    size: 'default',
    name: 'Willow Quinn',
    avatar: {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92',
      type: 'profile-photo'
    }
  },
};

// Large size
export const Large: Story = {
  args: {
    type: 'default',
    size: 'large',
    name: 'Willow Quinn',
    email: 'willowquin@email.com',
    avatar: {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/a8e1b547082b4c5d35c56beb0df98ba95f88b3ba?width=124',
      type: 'profile-photo'
    }
  },
};

// Small size
export const Small: Story = {
  args: {
    type: 'default',
    size: 'small',
    name: 'Willow Quinn',
    email: 'willowquin@email.com',
    emailFont: 'roboto-flex',
    avatar: {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/0ce133a5dd752fbae38ac314700e3abfbdf1724d?width=76',
      type: 'profile-photo'
    }
  },
};

// X-Small size
export const XSmall: Story = {
  args: {
    type: 'default',
    size: 'x-small',
    name: 'Willow Quinn',
    email: 'willowquin@email.com',
    nameFont: 'roboto-flex',
    emailFont: 'roboto-flex',
    avatar: {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/1a9559e97411422744e82bda6641db2441df2632?width=52',
      type: 'profile-photo'
    }
  },
};

// Interactive
export const Interactive: Story = {
  args: {
    type: 'w-subtext',
    size: 'default',
    name: 'Damon Underwood',
    email: 'damon@emaildomain.com',
    subtext: 'Additional subtext (e.g role)',
    avatar: {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/7dde526cb3a6e61a8030226b159789aea7d8a310?width=92',
      type: 'profile-photo',
      statusIcon: {
        status: 'online',
        visible: true
      }
    },
    onClick: () => console.log('Avatar content clicked!'),
  },
};

// Size variations
export const SizeVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4>Large</h4>
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4>Default</h4>
        <AvatarContent 
          type="default"
          size="default"
          name="Willow Quinn"
          email="willowquin@email.com"
          avatar={{
            src: 'https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92',
            type: 'profile-photo'
          }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4>Small</h4>
        <AvatarContent 
          type="default"
          size="small"
          name="Willow Quinn"
          email="willowquin@email.com"
          avatar={{
            src: 'https://api.builder.io/api/v1/image/assets/TEMP/0ce133a5dd752fbae38ac314700e3abfbdf1724d?width=76',
            type: 'profile-photo'
          }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4>X-Small</h4>
        <AvatarContent 
          type="default"
          size="x-small"
          name="Willow Quinn"
          email="willowquin@email.com"
          avatar={{
            src: 'https://api.builder.io/api/v1/image/assets/TEMP/1a9559e97411422744e82bda6641db2441df2632?width=52',
            type: 'profile-photo'
          }}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatar content comes in four sizes: large, default, small, and x-small.',
      },
    },
  },
};

// Type variations
export const TypeVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4>Default (Name + Email)</h4>
        <AvatarContent 
          type="default"
          size="default"
          name="Willow Quinn"
          email="willowquin@email.com"
          avatar={{
            src: 'https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92',
            type: 'profile-photo'
          }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4>With Subtext</h4>
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4>Name Only</h4>
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
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatar content supports three types: default (name + email), w-subtext (with additional subtext), and name-only.',
      },
    },
  },
};

// Font variations
export const FontVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4>Archivo Font (Default)</h4>
        <AvatarContent 
          type="default"
          size="default"
          name="Willow Quinn"
          email="willowquin@email.com"
          nameFont="archivo"
          emailFont="archivo"
          avatar={{
            src: 'https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92',
            type: 'profile-photo'
          }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4>Roboto Flex Font</h4>
        <AvatarContent 
          type="default"
          size="default"
          name="Willow Quinn"
          email="willowquin@email.com"
          nameFont="roboto-flex"
          emailFont="roboto-flex"
          avatar={{
            src: 'https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92',
            type: 'profile-photo'
          }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4>Mixed Fonts</h4>
        <AvatarContent 
          type="default"
          size="default"
          name="Willow Quinn"
          email="willowquin@email.com"
          nameFont="archivo"
          emailFont="roboto-flex"
          avatar={{
            src: 'https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92',
            type: 'profile-photo'
          }}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatar content supports different font families for name and email text.',
      },
    },
  },
};

// With status indicators
export const WithStatusIndicators: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
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
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatar content can include status indicators showing user presence or verification status.',
      },
    },
  },
};
