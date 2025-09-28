import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { AutoSave } from './AutoSave';

const meta: Meta<typeof AutoSave> = {
  title: 'Atoms/AutoSave',
  component: AutoSave,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'AutoSave component displays the current state of auto-save functionality. Includes various states like saving, auto-saving, saved, and error states with appropriate icons and text. Matches the Figma design specifications.',
      },
    },
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['default', 'disabled', 'hover', 'saving', 'auto-saving', 'saved', 'error-saving'],
      description: 'Current status of the auto-save functionality',
    },
    size: {
      control: 'select',
      options: ['default'],
      description: 'Size variant',
    },
    saveText: {
      control: 'text',
      description: 'Custom save text (defaults to "Save draft")',
    },
    savingText: {
      control: 'text',
      description: 'Custom saving text (defaults to "Saving draft")',
    },
    autoSavingText: {
      control: 'text',
      description: 'Custom auto-saving text (defaults to "Auto-saving")',
    },
    savedText: {
      control: 'text',
      description: 'Custom saved text (defaults to "Draft saved")',
    },
    errorText: {
      control: 'text',
      description: 'Custom error text (defaults to "Unable to save")',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AutoSave>;

// Basic states
export const Default: Story = {
  args: {
    status: 'default',
    onClick: () => console.log('Save draft clicked'),
  },
};

export const Disabled: Story = {
  args: {
    status: 'disabled',
  },
};

export const Hover: Story = {
  args: {
    status: 'hover',
    onClick: () => console.log('Save draft clicked'),
  },
};

export const Saving: Story = {
  args: {
    status: 'saving',
  },
};

export const AutoSaving: Story = {
  args: {
    status: 'auto-saving',
  },
};

export const Saved: Story = {
  args: {
    status: 'saved',
  },
};

export const ErrorSaving: Story = {
  args: {
    status: 'error-saving',
  },
};

// Custom text examples
export const CustomTexts: Story = {
  args: {
    status: 'default',
    saveText: 'Custom Save',
    savingText: 'Custom Saving...',
    autoSavingText: 'Custom Auto-saving...',
    savedText: 'Custom Saved!',
    errorText: 'Custom Error',
    onClick: () => console.log('Custom save clicked'),
  },
};

// Interactive showcase
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div style={{ marginBottom: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600', marginBottom: '16px' }}>
          All AutoSave States
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
          <AutoSave 
            status="default" 
            onClick={() => console.log('Default clicked')} 
          />
          <AutoSave status="disabled" />
          <AutoSave 
            status="hover" 
            onClick={() => console.log('Hover clicked')} 
          />
          <AutoSave status="saving" />
          <AutoSave status="auto-saving" />
          <AutoSave status="saved" />
          <AutoSave status="error-saving" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all AutoSave component states with their default styling and icons.',
      },
    },
  },
};

// Interactive state cycle demo
export const InteractiveDemo: Story = {
  render: () => {
    const [currentStatus, setCurrentStatus] = React.useState<'default' | 'saving' | 'saved' | 'error-saving'>('default');
    
    const handleSaveClick = () => {
      if (currentStatus === 'default') {
        setCurrentStatus('saving');
        
        // Simulate save process
        setTimeout(() => {
          // 80% chance of success, 20% chance of error for demo
          const success = Math.random() > 0.2;
          setCurrentStatus(success ? 'saved' : 'error-saving');
          
          // Reset after 3 seconds
          setTimeout(() => {
            setCurrentStatus('default');
          }, 3000);
        }, 2000);
      }
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <AutoSave 
          status={currentStatus}
          onClick={handleSaveClick}
        />
        <p style={{ 
          margin: 0, 
          fontSize: '12px', 
          color: '#666',
          textAlign: 'center',
          maxWidth: '200px' 
        }}>
          Click to simulate save process. Will randomly succeed or fail for demo purposes.
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo showing the AutoSave component cycling through different states when clicked.',
      },
    },
  },
};

// Figma Design Showcase
export const FigmaShowcase: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '24px', 
      padding: '24px',
      background: '#f8f9fa',
      borderRadius: '8px'
    }}>
      <div style={{ marginBottom: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
          AutoSave Component - Figma Design Implementation
        </h4>
        <p style={{ margin: 0, fontSize: '14px', color: '#666', marginBottom: '24px' }}>
          Complete implementation of the button/auto-save component from Figma designs
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h5 style={{ margin: 0, fontSize: '12px', fontWeight: '600', color: '#888', textTransform: 'uppercase' }}>
              Interactive States
            </h5>
            <AutoSave 
              status="default" 
              onClick={() => console.log('Save draft')} 
            />
            <AutoSave 
              status="hover" 
              onClick={() => console.log('Save draft hover')} 
            />
            <AutoSave status="disabled" />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h5 style={{ margin: 0, fontSize: '12px', fontWeight: '600', color: '#888', textTransform: 'uppercase' }}>
              Processing States
            </h5>
            <AutoSave status="saving" />
            <AutoSave status="auto-saving" />
            <AutoSave status="saved" />
            <AutoSave status="error-saving" />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of the AutoSave component matching the Figma design specifications with proper colors, icons, and states.',
      },
    },
  },
};
