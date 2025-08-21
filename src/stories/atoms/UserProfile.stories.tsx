import type { Meta, StoryObj } from '@storybook/react';
import { UserProfile } from './UserProfile';

const meta: Meta<typeof UserProfile> = {
  title: 'Atoms/User Profile',
  component: UserProfile,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'UserProfile component that combines an avatar with a user name, matching the Figma design specifications.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
      description: 'Size of the user profile',
    },
    name: {
      control: { type: 'text' },
      description: 'User display name',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler function',
    },
  },
};

export default meta;
type Story = StoryObj<typeof UserProfile>;

// Base avatar configuration for stories
const baseAvatar = {
  type: 'profile-photo' as const,
  src: 'https://images.unsplash.com/photo-1494790108755-2616b612e1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  alt: 'User avatar',
};

export const Default: Story = {
  args: {
    name: 'Olivia Rhye',
    avatar: baseAvatar,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    name: 'Olivia Rhye',
    avatar: baseAvatar,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    name: 'Olivia Rhye',
    avatar: baseAvatar,
  },
};

export const Clickable: Story = {
  args: {
    name: 'Olivia Rhye',
    avatar: baseAvatar,
    onClick: () => alert('User profile clicked!'),
  },
};

export const WithInitials: Story = {
  args: {
    name: 'John Smith',
    avatar: {
      type: 'initial-light',
      initial: 'JS',
    },
  },
};

export const WithStatusIcon: Story = {
  args: {
    name: 'Olivia Rhye',
    avatar: {
      ...baseAvatar,
      statusIcon: {
        status: 'online',
        visible: true,
      },
    },
  },
};

export const LongName: Story = {
  args: {
    name: 'This is a very long name that should truncate properly',
    avatar: baseAvatar,
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates text truncation behavior with long names.',
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <UserProfile
        size="small"
        name="Olivia Rhye"
        avatar={baseAvatar}
      />
      <UserProfile
        size="default"
        name="Olivia Rhye"
        avatar={baseAvatar}
      />
      <UserProfile
        size="large"
        name="Olivia Rhye"
        avatar={baseAvatar}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available sizes.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <UserProfile
        name="Olivia Rhye"
        avatar={baseAvatar}
      />
      <UserProfile
        name="John Smith"
        avatar={{
          type: 'initial-light',
          initial: 'JS',
        }}
      />
      <UserProfile
        name="Sarah Johnson"
        avatar={{
          type: 'initial-dark',
          initial: 'SJ',
        }}
      />
      <UserProfile
        name="Mike Wilson"
        avatar={{
          ...baseAvatar,
          statusIcon: {
            status: 'online',
            visible: true,
          },
        }}
      />
      <UserProfile
        name="Emma Davis"
        avatar={{
          ...baseAvatar,
          statusIcon: {
            status: 'away',
            visible: true,
          },
        }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of different avatar types and status indicators.',
      },
    },
  },
};

export const FigmaDesignShowcase: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '24px',
      padding: '40px',
      border: '2px dashed #8B5CF6',
      borderRadius: '8px',
      backgroundColor: '#F8FAFC',
      width: 'fit-content'
    }}>
      <div style={{
        fontSize: '18px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '16px',
        color: '#1E293B'
      }}>
        Figma Design - User Profile Variants
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '280px' }}>
        <div style={{
          fontSize: '14px',
          fontWeight: '600',
          color: '#64748B',
          marginBottom: '8px'
        }}>
          Default Size with Profile Photo
        </div>
        <UserProfile
          name="Olivia Rhye"
          avatar={baseAvatar}
        />
        
        <div style={{
          fontSize: '14px',
          fontWeight: '600',
          color: '#64748B',
          marginBottom: '8px',
          marginTop: '16px'
        }}>
          Small Size Variant
        </div>
        <UserProfile
          size="small"
          name="Olivia Rhye"
          avatar={baseAvatar}
        />
        
        <div style={{
          fontSize: '14px',
          fontWeight: '600',
          color: '#64748B',
          marginBottom: '8px',
          marginTop: '16px'
        }}>
          Large Size with Status
        </div>
        <UserProfile
          size="large"
          name="Olivia Rhye"
          avatar={{
            ...baseAvatar,
            statusIcon: {
              status: 'online',
              visible: true,
            },
          }}
        />
        
        <div style={{
          fontSize: '14px',
          fontWeight: '600',
          color: '#64748B',
          marginBottom: '8px',
          marginTop: '16px'
        }}>
          With Initials
        </div>
        <UserProfile
          name="John Smith"
          avatar={{
            type: 'initial-light',
            initial: 'JS',
          }}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase matching the Figma design specifications.',
      },
    },
  },
};
