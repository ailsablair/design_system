import type { Meta, StoryObj } from '@storybook/react';
import { UserCell } from './UserCell';

const meta: Meta<typeof UserCell> = {
  title: 'Atoms/Building Blocks/UserCell',
  component: UserCell,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
User Cell component for displaying user profile information in lists and tables.

Based on Figma designs, supports multiple variants:
- **name-only**: Avatar + name
- **name-email**: Avatar + name + email  
- **name-toggle**: Avatar + name + toggle switch
- **name-email-toggle**: Avatar + name + email + toggle switch

Features responsive design, avatar support (with placeholder fallback), and multiple background states.
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'default'],
      description: 'Cell size variant',
    },
    variant: {
      control: { type: 'select' },
      options: ['name-only', 'name-email', 'name-toggle', 'name-email-toggle'],
      description: 'Cell variant determines layout and content',
    },
    background: {
      control: { type: 'select' },
      options: ['white', 'gray-50', 'seafoam-25', 'hover', 'disabled'],
      description: 'Background variant',
    },
    name: {
      control: { type: 'text' },
      description: 'User name',
    },
    email: {
      control: { type: 'text' },
      description: 'User email',
    },
    avatarSrc: {
      control: { type: 'text' },
      description: 'Avatar image source URL',
    },
    avatarAlt: {
      control: { type: 'text' },
      description: 'Avatar image alt text',
    },
    showPlaceholder: {
      control: { type: 'boolean' },
      description: 'Show placeholder avatar when no image',
    },
    toggleEnabled: {
      control: { type: 'boolean' },
      description: 'Toggle switch enabled state',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
    width: {
      control: { type: 'text' },
      description: 'Cell width',
    },
  },
  args: {
    size: 'default',
    variant: 'name-only',
    background: 'white',
    name: 'Olivia Rhye',
    email: 'olivia@email.com',
    avatarSrc: '',
    avatarAlt: '',
    showPlaceholder: true,
    toggleEnabled: true,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof UserCell>;

// Sample avatar image for stories
const sampleAvatarUrl = 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80';

// Basic Variants
export const NameOnly: Story = {
  args: {
    variant: 'name-only',
    background: 'white',
  },
};

export const NameEmail: Story = {
  args: {
    variant: 'name-email',
    background: 'white',
  },
};

export const NameToggle: Story = {
  args: {
    variant: 'name-toggle',
    background: 'white',
    toggleEnabled: true,
  },
};

export const NameEmailToggle: Story = {
  args: {
    variant: 'name-email-toggle',
    background: 'white',
    toggleEnabled: true,
  },
};

// With Avatar Image
export const WithAvatarImage: Story = {
  args: {
    variant: 'name-email',
    background: 'white',
    avatarSrc: sampleAvatarUrl,
    avatarAlt: 'Olivia Rhye profile picture',
  },
};

export const WithAvatarImageAndToggle: Story = {
  args: {
    variant: 'name-email-toggle',
    background: 'white',
    avatarSrc: sampleAvatarUrl,
    avatarAlt: 'Olivia Rhye profile picture',
    toggleEnabled: true,
  },
};

// Size Variants
export const SmallSize: Story = {
  args: {
    size: 'small',
    variant: 'name-email',
    background: 'white',
    avatarSrc: sampleAvatarUrl,
  },
};

export const SmallSizeWithToggle: Story = {
  args: {
    size: 'small',
    variant: 'name-email-toggle',
    background: 'white',
    avatarSrc: sampleAvatarUrl,
    toggleEnabled: true,
  },
};

// Background Variants
export const GrayBackground: Story = {
  args: {
    variant: 'name-email',
    background: 'gray-50',
    avatarSrc: sampleAvatarUrl,
  },
};

export const SeafoamBackground: Story = {
  args: {
    variant: 'name-email',
    background: 'seafoam-25',
    avatarSrc: sampleAvatarUrl,
  },
};

export const HoverState: Story = {
  args: {
    variant: 'name-email-toggle',
    background: 'hover',
    avatarSrc: sampleAvatarUrl,
    toggleEnabled: true,
  },
};

export const DisabledState: Story = {
  args: {
    variant: 'name-email-toggle',
    background: 'disabled',
    avatarSrc: sampleAvatarUrl,
    toggleEnabled: false,
    disabled: true,
  },
};

// Without Avatar (Placeholder Only)
export const PlaceholderAvatar: Story = {
  args: {
    variant: 'name-email',
    background: 'white',
    avatarSrc: '',
    showPlaceholder: true,
  },
};

export const NoAvatar: Story = {
  args: {
    variant: 'name-email',
    background: 'white',
    avatarSrc: '',
    showPlaceholder: false,
  },
};

// Figma Design Showcase
export const FigmaDesignShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>User Cell Variants - Figma Implementation</h3>
        <p style={{ margin: '0 0 24px 0', color: '#6D7280', fontSize: '14px' }}>
          Pixel-perfect implementation matching the Figma designs
        </p>
      </div>

      {/* Original Figma Designs */}
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '500' }}>Default Size - White Background</h4>
        <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', maxWidth: '400px' }}>
          <UserCell
            size="default"
            variant="name-only"
            background="white"
            name="Olivia Rhye"
            showPlaceholder={true}
          />
          <UserCell
            size="default"
            variant="name-email"
            background="white"
            name="Olivia Rhye"
            email="olivia@email.com"
            avatarSrc={sampleAvatarUrl}
          />
          <UserCell
            size="default"
            variant="name-only"
            background="white"
            name="Olivia Rhye"
            showPlaceholder={true}
          />
          <UserCell
            size="default"
            variant="name-email"
            background="white"
            name="Olivia Rhye"
            email="olivia@email.com"
            avatarSrc={sampleAvatarUrl}
          />
          <UserCell
            size="default"
            variant="name-toggle"
            background="white"
            name="Olivia Rhye"
            avatarSrc={sampleAvatarUrl}
            toggleEnabled={true}
          />
        </div>
      </div>

      {/* Additional Variants */}
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '500' }}>All Variants Showcase</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, 400px)', gap: '24px' }}>
          
          <div>
            <h5 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#6D7280' }}>Default Size - Gray Background</h5>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <UserCell size="default" variant="name-only" background="gray-50" showPlaceholder={true} />
              <UserCell size="default" variant="name-email" background="gray-50" avatarSrc={sampleAvatarUrl} />
              <UserCell size="default" variant="name-toggle" background="gray-50" avatarSrc={sampleAvatarUrl} toggleEnabled={true} />
              <UserCell size="default" variant="name-email-toggle" background="gray-50" avatarSrc={sampleAvatarUrl} toggleEnabled={true} />
            </div>
          </div>

          <div>
            <h5 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#6D7280' }}>Default Size - Seafoam Background</h5>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <UserCell size="default" variant="name-only" background="seafoam-25" showPlaceholder={true} />
              <UserCell size="default" variant="name-email" background="seafoam-25" avatarSrc={sampleAvatarUrl} />
              <UserCell size="default" variant="name-toggle" background="seafoam-25" avatarSrc={sampleAvatarUrl} toggleEnabled={true} />
              <UserCell size="default" variant="name-email-toggle" background="seafoam-25" avatarSrc={sampleAvatarUrl} toggleEnabled={true} />
            </div>
          </div>

          <div>
            <h5 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#6D7280' }}>Small Size - White Background</h5>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <UserCell size="small" variant="name-only" background="white" showPlaceholder={true} />
              <UserCell size="small" variant="name-email" background="white" avatarSrc={sampleAvatarUrl} />
              <UserCell size="small" variant="name-toggle" background="white" avatarSrc={sampleAvatarUrl} toggleEnabled={true} />
              <UserCell size="small" variant="name-email-toggle" background="white" avatarSrc={sampleAvatarUrl} toggleEnabled={true} />
            </div>
          </div>

          <div>
            <h5 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#6D7280' }}>Hover & Disabled States</h5>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <UserCell size="default" variant="name-email" background="hover" avatarSrc={sampleAvatarUrl} />
              <UserCell size="default" variant="name-email-toggle" background="hover" avatarSrc={sampleAvatarUrl} toggleEnabled={true} />
              <UserCell size="default" variant="name-email" background="disabled" avatarSrc={sampleAvatarUrl} disabled={true} />
              <UserCell size="default" variant="name-email-toggle" background="disabled" avatarSrc={sampleAvatarUrl} toggleEnabled={false} disabled={true} />
            </div>
          </div>

          <div>
            <h5 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#6D7280' }}>Placeholder vs Image Avatars</h5>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <UserCell size="default" variant="name-email" background="white" showPlaceholder={true} name="User Placeholder" />
              <UserCell size="default" variant="name-email" background="white" avatarSrc={sampleAvatarUrl} name="User with Image" />
              <UserCell size="default" variant="name-email" background="white" showPlaceholder={false} avatarSrc="" name="No Avatar" />
              <UserCell size="small" variant="name-email" background="gray-50" showPlaceholder={true} name="Small Placeholder" />
            </div>
          </div>

          <div>
            <h5 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#6D7280' }}>Different Users</h5>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <UserCell size="default" variant="name-email" background="white" name="Olivia Rhye" email="olivia@email.com" avatarSrc={sampleAvatarUrl} />
              <UserCell size="default" variant="name-email" background="white" name="John Smith" email="john.smith@company.com" showPlaceholder={true} />
              <UserCell size="default" variant="name-email-toggle" background="white" name="Sarah Connor" email="s.connor@tech.io" avatarSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" toggleEnabled={false} />
              <UserCell size="default" variant="name-toggle" background="white" name="Michael Brown" showPlaceholder={true} toggleEnabled={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all UserCell variants matching the Figma designs, including different sizes, backgrounds, states, and avatar types.',
      },
    },
  },
};

// Interactive Examples
export const InteractiveExample: Story = {
  render: () => {
    const [toggleStates, setToggleStates] = React.useState({
      user1: true,
      user2: false,
      user3: true,
      user4: false,
    });

    const handleToggleChange = (userId: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setToggleStates(prev => ({
        ...prev,
        [userId]: event.target.checked,
      }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Interactive User List</h3>
        <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', maxWidth: '500px' }}>
          <UserCell
            size="default"
            variant="name-email-toggle"
            background="white"
            name="Olivia Rhye"
            email="olivia@email.com"
            avatarSrc={sampleAvatarUrl}
            toggleEnabled={toggleStates.user1}
            onToggleChange={handleToggleChange('user1')}
          />
          <UserCell
            size="default"
            variant="name-email-toggle"
            background="gray-50"
            name="John Smith"
            email="john.smith@company.com"
            showPlaceholder={true}
            toggleEnabled={toggleStates.user2}
            onToggleChange={handleToggleChange('user2')}
          />
          <UserCell
            size="default"
            variant="name-email-toggle"
            background="white"
            name="Sarah Connor"
            email="s.connor@tech.io"
            avatarSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            toggleEnabled={toggleStates.user3}
            onToggleChange={handleToggleChange('user3')}
          />
          <UserCell
            size="default"
            variant="name-email-toggle"
            background="gray-50"
            name="Michael Brown"
            email="m.brown@startup.dev"
            showPlaceholder={true}
            toggleEnabled={toggleStates.user4}
            onToggleChange={handleToggleChange('user4')}
          />
        </div>
        <p style={{ fontSize: '14px', color: '#6D7280', margin: '8px 0 0 0' }}>
          Toggle switches are interactive - click them to see state changes!
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example demonstrating functional toggle switches and user interactions.',
      },
    },
  },
};

// Responsive Demo
export const ResponsiveDemo: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Responsive Behavior</h3>
        <p style={{ margin: '0 0 16px 0', color: '#6D7280', fontSize: '14px' }}>
          Resize your browser window to see how the cells adapt to different screen sizes.
        </p>
      </div>
      
      <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
        <UserCell
          size="default"
          variant="name-email-toggle"
          background="white"
          name="Olivia Rhye"
          email="olivia@email.com"
          avatarSrc={sampleAvatarUrl}
          toggleEnabled={true}
        />
        <UserCell
          size="default"
          variant="name-email-toggle"
          background="gray-50"
          name="John Smith with a Very Long Name"
          email="john.smith.with.very.long.email@company.com"
          showPlaceholder={true}
          toggleEnabled={false}
        />
        <UserCell
          size="small"
          variant="name-email-toggle"
          background="white"
          name="Sarah Connor"
          email="s.connor@tech.io"
          avatarSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          toggleEnabled={true}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates responsive behavior and text truncation with long names and emails.',
      },
    },
  },
};
