import type { Meta, StoryObj } from '@storybook/react';
import { Tab, HomeIcon, ChevronDownIcon } from './Tab';
import React, { useState } from 'react';

const meta: Meta<typeof Tab> = {
  title: 'Atoms/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Comprehensive Tab component with traditional tabs (with bottom line) and contained tabs (button-style). Features multiple sizes, states, and interactive badges.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Tab size variant',
    },
    type: {
      control: 'select',
      options: ['default', 'secondary', 'contained', 'dark-contained'],
      description: 'Tab type/variant',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'active', 'disabled'],
      description: 'Visual state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    active: {
      control: 'boolean',
      description: 'Active state (controlled)',
    },
    showBadge: {
      control: 'boolean',
      description: 'Show badge/notification',
    },
    badge: {
      control: 'text',
      description: 'Badge content (number or text)',
    },
    children: {
      control: 'text',
      description: 'Tab text content',
    },
  },
  args: {
    children: 'Tab label',
    showBadge: true,
    badge: '7',
    size: 'default',
    type: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

// Basic examples
export const Default: Story = {
  args: {
    children: 'Tab label',
    size: 'default',
    type: 'default',
    badge: '7',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Tab label',
    size: 'default',
    type: 'secondary',
    badge: '7',
  },
};

export const Contained: Story = {
  args: {
    children: 'Tab label',
    size: 'default',
    type: 'contained',
    badge: '7',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#2F42BD' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
};

export const DarkContained: Story = {
  args: {
    children: 'Tab label',
    size: 'default',
    type: 'dark-contained',
    badge: '7',
  },
  parameters: {
    backgrounds: {
      default: 'darker',
      values: [
        { name: 'darker', value: '#191E3C' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
};

// Size variants
export const Small: Story = {
  args: {
    children: 'Tab label',
    size: 'small',
    type: 'default',
    badge: '7',
  },
};

export const Large: Story = {
  args: {
    children: 'Tab label',
    size: 'large',
    type: 'default',
    badge: '7',
  },
};

// State variants
export const Active: Story = {
  args: {
    children: 'Tab label',
    size: 'default',
    type: 'default',
    state: 'active',
    badge: '7',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Tab label',
    size: 'default',
    type: 'default',
    disabled: true,
    badge: '7',
  },
};

// Contained variants
export const ContainedActive: Story = {
  args: {
    children: 'Active Tab',
    size: 'default',
    type: 'contained',
    state: 'active',
    badge: '12',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#2F42BD' },
      ],
    },
  },
};

export const ContainedDisabled: Story = {
  args: {
    children: 'Disabled Tab',
    size: 'default',
    type: 'contained',
    disabled: true,
    badge: '0',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#2F42BD' },
      ],
    },
  },
};

export const DarkContainedActive: Story = {
  args: {
    children: 'Active Tab',
    size: 'default',
    type: 'dark-contained',
    state: 'active',
    badge: '5',
  },
  parameters: {
    backgrounds: {
      default: 'darker',
      values: [
        { name: 'darker', value: '#191E3C' },
      ],
    },
  },
};

// Without badges
export const WithoutBadge: Story = {
  args: {
    children: 'Tab label',
    size: 'default',
    type: 'default',
    showBadge: false,
  },
};

export const ContainedWithoutBadge: Story = {
  args: {
    children: 'Tab label',
    size: 'default',
    type: 'contained',
    showBadge: false,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#2F42BD' },
      ],
    },
  },
};

// Comprehensive showcases
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
      {/* Traditional Tabs */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Traditional Tabs</h4>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: '500' }}>Small</span>
            <Tab size="small" type="default" badge="7">Small Tab</Tab>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: '500' }}>Default</span>
            <Tab size="default" type="default" badge="7">Default Tab</Tab>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: '500' }}>Large</span>
            <Tab size="large" type="default" badge="7">Large Tab</Tab>
          </div>
        </div>
      </div>

      {/* Contained Tabs */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '16px', 
        alignItems: 'center',
        background: '#2F42BD',
        padding: '24px',
        borderRadius: '12px'
      }}>
        <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: 'white' }}>Contained Tabs</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: '500', color: 'white' }}>Small</span>
            <Tab size="small" type="contained" badge="7">Small</Tab>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: '500', color: 'white' }}>Default</span>
            <Tab size="default" type="contained" badge="7">Default</Tab>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: '500', color: 'white' }}>Large</span>
            <Tab size="large" type="contained" badge="7">Large</Tab>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available tab sizes for both traditional and contained variants.',
      },
    },
  },
};

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
      {/* Traditional Types */}
      <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-end' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Default</h4>
          <Tab size="default" type="default" badge="7">Default Type</Tab>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Secondary</h4>
          <Tab size="default" type="secondary" badge="7">Secondary Type</Tab>
        </div>
      </div>

      {/* Contained Types */}
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '8px', 
          alignItems: 'center',
          background: '#2F42BD',
          padding: '16px',
          borderRadius: '8px'
        }}>
          <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: 'white' }}>Contained</h4>
          <Tab size="default" type="contained" badge="7">Contained</Tab>
        </div>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '8px', 
          alignItems: 'center',
          background: '#191E3C',
          padding: '16px',
          borderRadius: '8px'
        }}>
          <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: 'white' }}>Dark Contained</h4>
          <Tab size="default" type="dark-contained" badge="7">Dark Contained</Tab>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available tab types with proper backgrounds.',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      {/* Traditional Tab States */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Traditional Tab States</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end' }}>
          <div style={{ textAlign: 'center' }}>
            <Tab size="default" type="default" badge="7">Default</Tab>
            <p style={{ fontSize: '12px', margin: '8px 0 0 0' }}>Default</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Tab size="default" type="default" state="active" badge="3">Active</Tab>
            <p style={{ fontSize: '12px', margin: '8px 0 0 0' }}>Active</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Tab size="default" type="default" disabled badge="0">Disabled</Tab>
            <p style={{ fontSize: '12px', margin: '8px 0 0 0' }}>Disabled</p>
          </div>
        </div>
      </div>

      {/* Contained Tab States */}
      <div style={{ 
        background: '#2F42BD', 
        padding: '24px', 
        borderRadius: '12px' 
      }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600', color: 'white' }}>
          Contained Tab States
        </h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <Tab size="default" type="contained" badge="7">Default</Tab>
            <p style={{ fontSize: '12px', margin: '8px 0 0 0', color: 'white' }}>Default</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Tab size="default" type="contained" state="active" badge="12">Active</Tab>
            <p style={{ fontSize: '12px', margin: '8px 0 0 0', color: 'white' }}>Active</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Tab size="default" type="contained" disabled badge="0">Disabled</Tab>
            <p style={{ fontSize: '12px', margin: '8px 0 0 0', color: 'white' }}>Disabled</p>
          </div>
        </div>
      </div>

      {/* Dark Contained Tab States */}
      <div style={{ 
        background: '#191E3C', 
        padding: '24px', 
        borderRadius: '12px' 
      }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600', color: 'white' }}>
          Dark Contained Tab States
        </h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <Tab size="default" type="dark-contained" badge="5">Default</Tab>
            <p style={{ fontSize: '12px', margin: '8px 0 0 0', color: 'white' }}>Default</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Tab size="default" type="dark-contained" state="active" badge="8">Active</Tab>
            <p style={{ fontSize: '12px', margin: '8px 0 0 0', color: 'white' }}>Active</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Tab size="default" type="dark-contained" disabled badge="0">Disabled</Tab>
            <p style={{ fontSize: '12px', margin: '8px 0 0 0', color: 'white' }}>Disabled</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all tab states across different types.',
      },
    },
  },
};

// Interactive examples
export const InteractiveTabGroup: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Traditional Tab Group</h3>
        <div style={{ display: 'flex', gap: '0', alignItems: 'flex-end' }}>
          <Tab
            size="default"
            type="default"
            active={activeTab === 0}
            onClick={() => setActiveTab(0)}
            badge="7"
          >
            Dashboard
          </Tab>
          <Tab
            size="default"
            type="default"
            active={activeTab === 1}
            onClick={() => setActiveTab(1)}
            badge="3"
          >
            Analytics
          </Tab>
          <Tab
            size="default"
            type="default"
            active={activeTab === 2}
            onClick={() => setActiveTab(2)}
            badge="12"
          >
            Reports
          </Tab>
          <Tab
            size="default"
            type="default"
            disabled
            badge="0"
          >
            Settings
          </Tab>
        </div>
        
        <div style={{ padding: '16px', background: '#f8f9fa', borderRadius: '4px' }}>
          <p style={{ margin: 0 }}>
            Current active tab: <strong>{['Dashboard', 'Analytics', 'Reports'][activeTab]}</strong>
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive traditional tab group with click handlers.',
      },
    },
  },
};

export const InteractiveContainedTabGroup: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
      <div style={{ 
        background: '#2F42BD', 
        padding: '24px', 
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: 'white' }}>
          Contained Tab Group
        </h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Tab
            size="default"
            type="contained"
            active={activeTab === 0}
            onClick={() => setActiveTab(0)}
            badge="5"
          >
            Projects
          </Tab>
          <Tab
            size="default"
            type="contained"
            active={activeTab === 1}
            onClick={() => setActiveTab(1)}
            badge="8"
          >
            Team
          </Tab>
          <Tab
            size="default"
            type="contained"
            active={activeTab === 2}
            onClick={() => setActiveTab(2)}
            badge="2"
          >
            Tasks
          </Tab>
          <Tab
            size="default"
            type="contained"
            disabled
            badge="0"
          >
            Archive
          </Tab>
        </div>
        
        <div style={{ padding: '16px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}>
          <p style={{ margin: 0, color: 'white' }}>
            Current active tab: <strong>{['Projects', 'Team', 'Tasks'][activeTab]}</strong>
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive contained tab group demonstrating the button-like behavior.',
      },
    },
  },
};

// Comprehensive Figma showcase
export const FigmaDesignShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '24px' }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 16px 0', fontSize: '24px', fontWeight: '700' }}>
          Complete Tab Component Showcase
        </h2>
        <p style={{ margin: '0 0 32px 0', fontSize: '16px', color: '#666', maxWidth: '600px', margin: '0 auto 32px auto' }}>
          Comprehensive implementation of both traditional tabs (with bottom lines) and contained tabs (button-style).
          Matches Figma design specifications with proper states and interactions.
        </p>
      </div>

      {/* Traditional Tabs */}
      <div>
        <h3 style={{ margin: '0 0 20px 0', fontSize: '20px', fontWeight: '600' }}>Traditional Tabs</h3>
        
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600' }}>Default Type - All Sizes</h4>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-end' }}>
            <Tab size="small" type="default" badge="7">Small Default</Tab>
            <Tab size="default" type="default" badge="12">Default</Tab>
            <Tab size="large" type="default" badge="5">Large Default</Tab>
            <Tab size="default" type="default" state="active" badge="3">Active</Tab>
          </div>
        </div>

        <div>
          <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600' }}>Secondary Type - All Sizes</h4>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-end' }}>
            <Tab size="small" type="secondary" badge="7">Small Secondary</Tab>
            <Tab size="default" type="secondary" badge="12">Secondary</Tab>
            <Tab size="large" type="secondary" badge="5">Large Secondary</Tab>
            <Tab size="default" type="secondary" state="active" badge="8">Active</Tab>
          </div>
        </div>
      </div>

      {/* Contained Tabs */}
      <div style={{ 
        background: '#2F42BD', 
        padding: '32px', 
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ margin: '0 0 20px 0', fontSize: '20px', fontWeight: '600', color: 'white' }}>
          Contained Tabs
        </h3>
        
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600', color: 'white' }}>
            All Sizes
          </h4>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Tab size="small" type="contained" badge="7">Small</Tab>
            <Tab size="default" type="contained" badge="12">Default</Tab>
            <Tab size="large" type="contained" badge="5">Large</Tab>
            <Tab size="default" type="contained" state="active" badge="3">Active</Tab>
            <Tab size="default" type="contained" disabled badge="0">Disabled</Tab>
          </div>
        </div>

        <div>
          <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600', color: 'white' }}>
            Without Badges
          </h4>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Tab size="small" type="contained" showBadge={false}>Small</Tab>
            <Tab size="default" type="contained" showBadge={false}>Default</Tab>
            <Tab size="large" type="contained" showBadge={false}>Large</Tab>
            <Tab size="default" type="contained" state="active" showBadge={false}>Active</Tab>
          </div>
        </div>
      </div>

      {/* Dark Contained Tabs */}
      <div style={{ 
        background: '#191E3C', 
        padding: '32px', 
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
      }}>
        <h3 style={{ margin: '0 0 20px 0', fontSize: '20px', fontWeight: '600', color: 'white' }}>
          Dark Contained Tabs
        </h3>
        
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Tab size="small" type="dark-contained" badge="7">Small</Tab>
          <Tab size="default" type="dark-contained" badge="12">Default</Tab>
          <Tab size="large" type="dark-contained" badge="5">Large</Tab>
          <Tab size="default" type="dark-contained" state="active" badge="8">Active</Tab>
          <Tab size="default" type="dark-contained" disabled badge="0">Disabled</Tab>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div style={{ 
        background: '#F8FAFC', 
        padding: '24px', 
        borderRadius: '12px',
        border: '1px solid #E2E8F0'
      }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600', color: '#1E293B' }}>
          Usage Guidelines
        </h3>
        <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
          <p style={{ margin: '0 0 12px 0' }}>
            <strong>Traditional Tabs:</strong> Use for navigation within a container or page section. 
            They work well with content that changes based on selection.
          </p>
          <p style={{ margin: '0 0 12px 0' }}>
            <strong>Contained Tabs:</strong> Use as filter buttons or action buttons on colored backgrounds. 
            They work well for toggles and selections within colored interface areas.
          </p>
          <p style={{ margin: '0' }}>
            <strong>Dark Contained Tabs:</strong> Specialized version for very dark backgrounds and themes.
          </p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all tab variants matching Figma design specifications.',
      },
    },
  },
};
