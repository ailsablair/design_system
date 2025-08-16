import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Design System/Toggle with Label',
  component: Toggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Toggle components with labels as shown in the Figma design. Showcasing the building-blocks toggle in all sizes with proper labeling.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

// Individual toggle with label component
const ToggleWithLabel = ({ 
  size, 
  enabled = true 
}: { 
  size: 'small' | 'default' | 'large'; 
  enabled?: boolean;
}) => {
  const getFontSize = (size: string) => {
    switch (size) {
      case 'small': return '14px';
      case 'large': return '18px';
      default: return '16px';
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '12px',
      fontFamily: 'var(--type-typeface-archivo)',
      fontSize: getFontSize(size),
      fontWeight: '300',
      lineHeight: size === 'small' ? '17px' : size === 'large' ? '24px' : '22px',
      letterSpacing: '0.15px',
      color: 'var(--base-black)'
    }}>
      <Toggle 
        size={size} 
        enabled={enabled} 
        icon={true} 
        state="default"
      />
      <span>This is the toggle label</span>
    </div>
  );
};

export const SmallToggleWithLabel: Story = {
  render: () => <ToggleWithLabel size="small" enabled={true} />,
  parameters: {
    docs: {
      description: {
        story: 'Small toggle with label as shown in Figma design.',
      },
    },
  },
};

export const DefaultToggleWithLabel: Story = {
  render: () => <ToggleWithLabel size="default" enabled={true} />,
  parameters: {
    docs: {
      description: {
        story: 'Default toggle with label as shown in Figma design.',
      },
    },
  },
};

export const LargeToggleWithLabel: Story = {
  render: () => <ToggleWithLabel size="large" enabled={true} />,
  parameters: {
    docs: {
      description: {
        story: 'Large toggle with label as shown in Figma design.',
      },
    },
  },
};

export const FigmaDesignShowcase: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '32px',
      padding: '40px',
      border: '2px dashed #8B5CF6',
      borderRadius: '8px',
      backgroundColor: '#F8FAFC',
      minWidth: '400px'
    }}>
      <div style={{
        fontSize: '18px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '8px',
        color: '#1E293B'
      }}>
        Figma Design - Toggle with Labels
      </div>
      
      <ToggleWithLabel size="default" enabled={true} />
      <ToggleWithLabel size="large" enabled={true} />
      <ToggleWithLabel size="small" enabled={true} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase matching the Figma design with all toggle sizes and their labels.',
      },
    },
  },
};
