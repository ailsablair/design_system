import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { AutoSaveWithTag } from './AutoSaveWithTag';

const meta: Meta<typeof AutoSaveWithTag> = {
  title: 'Atoms/AutoSaveWithTag',
  component: AutoSaveWithTag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'AutoSaveWithTag component combines the AutoSave button with a timestamp tag. It displays the current state of auto-save functionality along with a timestamp indicating when the last save occurred. Matches the Figma design specifications for button/auto-save/w-tag.',
      },
    },
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['default', 'disabled', 'hover', 'saving', 'auto-saving', 'saved', 'error-saving'],
      description: 'Current status of the auto-save functionality',
    },
    timestamp: {
      control: 'text',
      description: 'Timestamp to display in the tag',
    },
    timestampLabel: {
      control: 'text',
      description: 'Custom timestamp label prefix (defaults to "Saved")',
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
type Story = StoryObj<typeof AutoSaveWithTag>;

// Basic states
export const Default: Story = {
  args: {
    status: 'default',
    timestamp: '00:00 AM on 00 JAN 2001',
    onClick: () => console.log('Save draft clicked'),
  },
};

export const AutoSaving: Story = {
  args: {
    status: 'auto-saving',
    timestamp: '00:00 AM on 00 JAN 2001',
  },
};

export const ErrorSaving: Story = {
  args: {
    status: 'error-saving',
    timestamp: '00:00 AM on 00 JAN 2001',
  },
};

export const Saved: Story = {
  args: {
    status: 'saved',
    timestamp: '00:00 AM on 00 JAN 2001',
  },
};

export const Saving: Story = {
  args: {
    status: 'saving',
    timestamp: '00:00 AM on 00 JAN 2001',
  },
};

export const Disabled: Story = {
  args: {
    status: 'disabled',
    timestamp: '00:00 AM on 00 JAN 2001',
  },
};

// Custom timestamp examples
export const CustomTimestamp: Story = {
  args: {
    status: 'saved',
    timestamp: '2:30 PM on 15 MAR 2024',
    timestampLabel: 'Last saved',
    onClick: () => console.log('Save draft clicked'),
  },
};

export const RecentSave: Story = {
  args: {
    status: 'saved',
    timestamp: 'Just now',
    timestampLabel: 'Saved',
    onClick: () => console.log('Save draft clicked'),
  },
};

// Figma Design Showcase
export const FigmaShowcase: Story = {
  render: () => {
    const currentTime = new Date();
    const timestamp = currentTime.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).replace(',', ' on').toUpperCase();

    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '32px', 
        padding: '32px',
        background: '#f8f9fa',
        borderRadius: '12px',
        minWidth: '320px'
      }}>
        <div>
          <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
            AutoSave with Tag - Figma Implementation
          </h4>
          <p style={{ margin: 0, fontSize: '14px', color: '#666', marginBottom: '32px' }}>
            Complete implementation of button/auto-save/w-tag from Figma designs
          </p>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <h5 style={{ margin: 0, fontSize: '12px', fontWeight: '600', color: '#888', textTransform: 'uppercase', marginBottom: '16px' }}>
              Default State
            </h5>
            <AutoSaveWithTag
              status="default"
              timestamp={timestamp}
              onClick={() => console.log('Default save clicked')}
            />
          </div>
          
          <div>
            <h5 style={{ margin: 0, fontSize: '12px', fontWeight: '600', color: '#888', textTransform: 'uppercase', marginBottom: '16px' }}>
              Auto-saving State
            </h5>
            <AutoSaveWithTag
              status="auto-saving"
              timestamp={timestamp}
            />
          </div>
          
          <div>
            <h5 style={{ margin: 0, fontSize: '12px', fontWeight: '600', color: '#888', textTransform: 'uppercase', marginBottom: '16px' }}>
              Error State
            </h5>
            <AutoSaveWithTag
              status="error-saving"
              timestamp={timestamp}
            />
          </div>
          
          <div>
            <h5 style={{ margin: 0, fontSize: '12px', fontWeight: '600', color: '#888', textTransform: 'uppercase', marginBottom: '16px' }}>
              Saved State
            </h5>
            <AutoSaveWithTag
              status="saved"
              timestamp={timestamp}
            />
          </div>
          
          <div>
            <h5 style={{ margin: 0, fontSize: '12px', fontWeight: '600', color: '#888', textTransform: 'uppercase', marginBottom: '16px' }}>
              Saving State
            </h5>
            <AutoSaveWithTag
              status="saving"
              timestamp={timestamp}
            />
          </div>
          
          <div>
            <h5 style={{ margin: 0, fontSize: '12px', fontWeight: '600', color: '#888', textTransform: 'uppercase', marginBottom: '16px' }}>
              Disabled State
            </h5>
            <AutoSaveWithTag
              status="disabled"
              timestamp={timestamp}
            />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of the AutoSaveWithTag component matching the Figma design specifications with all states, proper styling, and timestamp formatting.',
      },
    },
  },
};

// Interactive demo
export const InteractiveDemo: Story = {
  render: () => {
    const [currentStatus, setCurrentStatus] = React.useState<'default' | 'saving' | 'saved' | 'error-saving'>('default');
    const [lastSaveTime, setLastSaveTime] = React.useState('00:00 AM on 00 JAN 2001');
    
    const handleSaveClick = () => {
      if (currentStatus === 'default') {
        setCurrentStatus('saving');
        
        // Simulate save process
        setTimeout(() => {
          const now = new Date();
          const timestamp = now.toLocaleString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            day: '2-digit',
            month: 'short',
            year: 'numeric'
          }).replace(',', ' on').toUpperCase();
          
          setLastSaveTime(timestamp);
          
          // 85% chance of success, 15% chance of error for demo
          const success = Math.random() > 0.15;
          setCurrentStatus(success ? 'saved' : 'error-saving');
          
          // Reset to default after 4 seconds
          setTimeout(() => {
            setCurrentStatus('default');
          }, 4000);
        }, 1500);
      }
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <AutoSaveWithTag
          status={currentStatus}
          timestamp={lastSaveTime}
          onClick={handleSaveClick}
        />
        <p style={{ 
          margin: 0, 
          fontSize: '12px', 
          color: '#666',
          textAlign: 'center',
          maxWidth: '250px' 
        }}>
          Click the save button to simulate the save process. The timestamp will update to show the current time.
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo showing the AutoSaveWithTag component with real-time timestamp updates and state transitions.',
      },
    },
  },
};

// All states comparison
export const AllStates: Story = {
  render: () => {
    const timestamp = '2:30 PM on 15 MAR 2024';
    
    return (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '24px', 
        padding: '24px',
        background: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <h6 style={{ margin: 0, fontSize: '12px', fontWeight: '600', color: '#888' }}>Default</h6>
          <AutoSaveWithTag
            status="default"
            timestamp={timestamp}
            onClick={() => console.log('Default clicked')}
          />
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <h6 style={{ margin: 0, fontSize: '12px', fontWeight: '600', color: '#888' }}>Auto-saving</h6>
          <AutoSaveWithTag
            status="auto-saving"
            timestamp={timestamp}
          />
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <h6 style={{ margin: 0, fontSize: '12px', fontWeight: '600', color: '#888' }}>Error</h6>
          <AutoSaveWithTag
            status="error-saving"
            timestamp={timestamp}
          />
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <h6 style={{ margin: 0, fontSize: '12px', fontWeight: '600', color: '#888' }}>Saved</h6>
          <AutoSaveWithTag
            status="saved"
            timestamp={timestamp}
          />
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <h6 style={{ margin: 0, fontSize: '12px', fontWeight: '600', color: '#888' }}>Saving</h6>
          <AutoSaveWithTag
            status="saving"
            timestamp={timestamp}
          />
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <h6 style={{ margin: 0, fontSize: '12px', fontWeight: '600', color: '#888' }}>Disabled</h6>
          <AutoSaveWithTag
            status="disabled"
            timestamp={timestamp}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Comparison view of all AutoSaveWithTag component states side by side.',
      },
    },
  },
};
