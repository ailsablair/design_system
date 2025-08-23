import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from '../../atoms/Tab';
import React, { useState } from 'react';

const meta: Meta<typeof Tab> = {
  title: 'Design System/Figma Showcase Files/Tab Complete Redesign Showcase',
  component: Tab,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Completely redesigned Tab component with proper traditional tabs and button-style contained tabs.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CompleteRedesignShowcase: Story = {
  render: () => (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '32px',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h1 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '32px', 
          fontWeight: '800',
          color: '#111827',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          ✨ Complete Tab Redesign
        </h1>
        <p style={{ 
          margin: '0', 
          fontSize: '18px', 
          color: '#6B7280',
          maxWidth: '700px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Completely rebuilt from scratch with two distinct implementations: 
          traditional tabs with bottom lines and modern contained tabs with button-style design.
        </p>
      </div>

      {/* Key Improvements Section */}
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '32px',
        borderRadius: '16px',
        marginBottom: '48px',
        color: 'white'
      }}>
        <h2 style={{ 
          margin: '0 0 24px 0', 
          fontSize: '24px', 
          fontWeight: '700',
          textAlign: 'center'
        }}>
          🎯 Key Improvements
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '24px' 
        }}>
          <div style={{ 
            background: 'rgba(255,255,255,0.1)', 
            padding: '20px', 
            borderRadius: '12px',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600' }}>
              🏗️ Complete Architecture Rebuild
            </h3>
            <p style={{ margin: '0', fontSize: '14px', opacity: '0.9', lineHeight: '1.5' }}>
              Separate implementations for traditional tabs (with lines) and contained tabs (button-style)
            </p>
          </div>
          <div style={{ 
            background: 'rgba(255,255,255,0.1)', 
            padding: '20px', 
            borderRadius: '12px',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600' }}>
              🎨 Proper Contained Styling
            </h3>
            <p style={{ margin: '0', fontSize: '14px', opacity: '0.9', lineHeight: '1.5' }}>
              Contained tabs now render as proper button-like pills with full background colors
            </p>
          </div>
          <div style={{ 
            background: 'rgba(255,255,255,0.1)', 
            padding: '20px', 
            borderRadius: '12px',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600' }}>
              ⚡ Enhanced Interactions
            </h3>
            <p style={{ margin: '0', fontSize: '14px', opacity: '0.9', lineHeight: '1.5' }}>
              Proper hover, active, and disabled states with smooth transitions
            </p>
          </div>
        </div>
      </div>

      {/* Traditional Tabs Section */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          margin: '0 0 24px 0', 
          fontSize: '24px', 
          fontWeight: '700',
          color: '#111827'
        }}>
          📋 Traditional Tabs (with bottom lines)
        </h2>
        
        <div style={{ 
          background: '#F8FAFC', 
          padding: '24px', 
          borderRadius: '12px',
          border: '1px solid #E2E8F0',
          marginBottom: '24px'
        }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>
            Default Type - All Sizes & States
          </h3>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <Tab size="small" type="default" badge="7">Small</Tab>
              <p style={{ fontSize: '12px', margin: '8px 0 0 0', color: '#6B7280' }}>Small</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Tab size="default" type="default" badge="12">Default</Tab>
              <p style={{ fontSize: '12px', margin: '8px 0 0 0', color: '#6B7280' }}>Default</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Tab size="large" type="default" badge="5">Large</Tab>
              <p style={{ fontSize: '12px', margin: '8px 0 0 0', color: '#6B7280' }}>Large</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Tab size="default" type="default" state="active" badge="3">Active</Tab>
              <p style={{ fontSize: '12px', margin: '8px 0 0 0', color: '#6B7280' }}>Active</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Tab size="default" type="default" disabled badge="0">Disabled</Tab>
              <p style={{ fontSize: '12px', margin: '8px 0 0 0', color: '#6B7280' }}>Disabled</p>
            </div>
          </div>
        </div>

        <div style={{ 
          background: '#F0F9FF', 
          padding: '24px', 
          borderRadius: '12px',
          border: '1px solid #0EA5E9'
        }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>
            Secondary Type - All Sizes & States
          </h3>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <Tab size="small" type="secondary" badge="7">Small</Tab>
              <p style={{ fontSize: '12px', margin: '8px 0 0 0', color: '#6B7280' }}>Small</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Tab size="default" type="secondary" badge="12">Default</Tab>
              <p style={{ fontSize: '12px', margin: '8px 0 0 0', color: '#6B7280' }}>Default</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Tab size="large" type="secondary" badge="5">Large</Tab>
              <p style={{ fontSize: '12px', margin: '8px 0 0 0', color: '#6B7280' }}>Large</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Tab size="default" type="secondary" state="active" badge="8">Active</Tab>
              <p style={{ fontSize: '12px', margin: '8px 0 0 0', color: '#6B7280' }}>Active</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Tab size="default" type="secondary" disabled badge="0">Disabled</Tab>
              <p style={{ fontSize: '12px', margin: '8px 0 0 0', color: '#6B7280' }}>Disabled</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contained Tabs Section */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          margin: '0 0 24px 0', 
          fontSize: '24px', 
          fontWeight: '700',
          color: '#111827'
        }}>
          🔘 Contained Tabs (button-style)
        </h2>
        
        <div style={{ 
          background: 'linear-gradient(135deg, #2F42BD 0%, #1E3A8A 100%)', 
          padding: '32px', 
          borderRadius: '16px',
          marginBottom: '24px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}>
          <h3 style={{ 
            margin: '0 0 20px 0', 
            fontSize: '20px', 
            fontWeight: '600',
            color: 'white',
            textAlign: 'center'
          }}>
            Contained Type - All Sizes & States
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
            gap: '16px',
            alignItems: 'center'
          }}>
            <div style={{ textAlign: 'center' }}>
              <Tab size="small" type="contained" badge="7">Small</Tab>
              <p style={{ fontSize: '12px', margin: '8px 0 0 0', color: 'rgba(255,255,255,0.8)' }}>Small</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Tab size="default" type="contained" badge="12">Default</Tab>
              <p style={{ fontSize: '12px', margin: '8px 0 0 0', color: 'rgba(255,255,255,0.8)' }}>Default</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Tab size="large" type="contained" badge="5">Large</Tab>
              <p style={{ fontSize: '12px', margin: '8px 0 0 0', color: 'rgba(255,255,255,0.8)' }}>Large</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Tab size="default" type="contained" state="active" badge="3">Active</Tab>
              <p style={{ fontSize: '12px', margin: '8px 0 0 0', color: 'rgba(255,255,255,0.8)' }}>Active</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Tab size="default" type="contained" disabled badge="0">Disabled</Tab>
              <p style={{ fontSize: '12px', margin: '8px 0 0 0', color: 'rgba(255,255,255,0.8)' }}>Disabled</p>
            </div>
          </div>
        </div>

        <div style={{ 
          background: 'linear-gradient(135deg, #191E3C 0%, #0F172A 100%)', 
          padding: '32px', 
          borderRadius: '16px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ 
            margin: '0 0 20px 0', 
            fontSize: '20px', 
            fontWeight: '600',
            color: 'white',
            textAlign: 'center'
          }}>
            Dark Contained Type - All Sizes & States
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
            gap: '16px',
            alignItems: 'center'
          }}>
            <div style={{ textAlign: 'center' }}>
              <Tab size="small" type="dark-contained" badge="7">Small</Tab>
              <p style={{ fontSize: '12px', margin: '8px 0 0 0', color: 'rgba(255,255,255,0.8)' }}>Small</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Tab size="default" type="dark-contained" badge="12">Default</Tab>
              <p style={{ fontSize: '12px', margin: '8px 0 0 0', color: 'rgba(255,255,255,0.8)' }}>Default</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Tab size="large" type="dark-contained" badge="5">Large</Tab>
              <p style={{ fontSize: '12px', margin: '8px 0 0 0', color: 'rgba(255,255,255,0.8)' }}>Large</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Tab size="default" type="dark-contained" state="active" badge="8">Active</Tab>
              <p style={{ fontSize: '12px', margin: '8px 0 0 0', color: 'rgba(255,255,255,0.8)' }}>Active</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Tab size="default" type="dark-contained" disabled badge="0">Disabled</Tab>
              <p style={{ fontSize: '12px', margin: '8px 0 0 0', color: 'rgba(255,255,255,0.8)' }}>Disabled</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Examples */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          margin: '0 0 24px 0', 
          fontSize: '24px', 
          fontWeight: '700',
          color: '#111827'
        }}>
          🎮 Interactive Examples
        </h2>
        
        <InteractiveTabDemo />
        <InteractiveContainedTabDemo />
      </div>

      {/* Technical Details */}
      <div style={{ 
        background: '#F8FAFC', 
        padding: '32px', 
        borderRadius: '16px',
        border: '1px solid #E2E8F0'
      }}>
        <h2 style={{ 
          margin: '0 0 24px 0', 
          fontSize: '24px', 
          fontWeight: '700',
          color: '#111827'
        }}>
          🔧 Technical Implementation
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '24px' 
        }}>
          <div>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600', color: '#374151' }}>
              Traditional Tabs
            </h3>
            <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6', color: '#6B7280' }}>
              <li>Renders as tab-container with bottom line</li>
              <li>Uses semantic button element</li>
              <li>Bottom line changes color on active state</li>
              <li>Proper ARIA attributes for accessibility</li>
            </ul>
          </div>
          <div>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600', color: '#374151' }}>
              Contained Tabs
            </h3>
            <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6', color: '#6B7280' }}>
              <li>Renders as standalone button element</li>
              <li>Pill-shaped with full background colors</li>
              <li>Semi-transparent backgrounds for layering</li>
              <li>Active state gets solid background</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of the redesigned Tab component with traditional and contained variants.',
      },
    },
  },
};

// Interactive demo components
const InteractiveTabDemo = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div style={{ 
      marginBottom: '32px',
      padding: '24px',
      background: '#FFFFFF',
      borderRadius: '12px',
      border: '1px solid #E5E7EB',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    }}>
      <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>
        Traditional Tab Navigation
      </h3>
      <div style={{ display: 'flex', gap: '0', alignItems: 'flex-end', marginBottom: '16px' }}>
        <Tab
          size="default"
          type="default"
          active={activeTab === 0}
          onClick={() => setActiveTab(0)}
          badge="12"
        >
          Dashboard
        </Tab>
        <Tab
          size="default"
          type="default"
          active={activeTab === 1}
          onClick={() => setActiveTab(1)}
          badge="7"
        >
          Analytics
        </Tab>
        <Tab
          size="default"
          type="default"
          active={activeTab === 2}
          onClick={() => setActiveTab(2)}
          badge="3"
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
      <div style={{ 
        padding: '16px', 
        background: '#F9FAFB', 
        borderRadius: '8px',
        border: '1px solid #F3F4F6'
      }}>
        <p style={{ margin: '0', fontSize: '14px', color: '#374151' }}>
          <strong>Active Content:</strong> {['Dashboard Overview', 'Analytics Data', 'Report Generation'][activeTab]}
        </p>
      </div>
    </div>
  );
};

const InteractiveContainedTabDemo = () => {
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
      padding: '24px', 
      borderRadius: '12px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
    }}>
      <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600', color: 'white' }}>
        Contained Tab Filters
      </h3>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap' }}>
        <Tab
          size="default"
          type="contained"
          active={activeFilter === 0}
          onClick={() => setActiveFilter(0)}
          badge="24"
        >
          All Items
        </Tab>
        <Tab
          size="default"
          type="contained"
          active={activeFilter === 1}
          onClick={() => setActiveFilter(1)}
          badge="8"
        >
          Active
        </Tab>
        <Tab
          size="default"
          type="contained"
          active={activeFilter === 2}
          onClick={() => setActiveFilter(2)}
          badge="5"
        >
          Pending
        </Tab>
        <Tab
          size="default"
          type="contained"
          active={activeFilter === 3}
          onClick={() => setActiveFilter(3)}
          badge="11"
        >
          Completed
        </Tab>
      </div>
      <div style={{ 
        padding: '16px', 
        background: 'rgba(255,255,255,0.1)', 
        borderRadius: '8px',
        backdropFilter: 'blur(10px)'
      }}>
        <p style={{ margin: '0', fontSize: '14px', color: 'white' }}>
          <strong>Current Filter:</strong> {['All Items (24)', 'Active (8)', 'Pending (5)', 'Completed (11)'][activeFilter]}
        </p>
      </div>
    </div>
  );
};

export const ResponsiveDemo: Story = {
  render: () => (
    <div style={{ 
      maxWidth: '1000px', 
      margin: '0 auto', 
      padding: '24px',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      
      <h2 style={{ 
        margin: '0 0 32px 0', 
        fontSize: '24px', 
        fontWeight: '700',
        textAlign: 'center',
        color: '#111827'
      }}>
        📱 Responsive Behavior
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        
        <div style={{ 
          border: '2px dashed #E5E7EB', 
          borderRadius: '12px', 
          padding: '20px',
          background: '#FAFAFA'
        }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>
            Desktop Layout
          </h3>
          <div style={{ display: 'flex', gap: '0', alignItems: 'flex-end', marginBottom: '16px' }}>
            <Tab size="default" type="default" badge="7">Dashboard Overview</Tab>
            <Tab size="default" type="default" badge="12">Analytics & Reports</Tab>
            <Tab size="default" type="default" state="active" badge="3">User Management</Tab>
            <Tab size="default" type="default" badge="5">System Settings</Tab>
          </div>
          <div style={{ 
            background: '#2F42BD', 
            padding: '16px', 
            borderRadius: '8px',
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
            <Tab size="default" type="contained" badge="15">All Projects</Tab>
            <Tab size="default" type="contained" state="active" badge="8">Active Projects</Tab>
            <Tab size="default" type="contained" badge="7">Archived</Tab>
          </div>
        </div>

        <div style={{ 
          border: '2px dashed #E5E7EB', 
          borderRadius: '12px', 
          padding: '20px',
          background: '#FAFAFA',
          maxWidth: '500px'
        }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>
            Tablet Layout
          </h3>
          <div style={{ display: 'flex', gap: '0', alignItems: 'flex-end', marginBottom: '16px', flexWrap: 'wrap' }}>
            <Tab size="default" type="default" badge="7">Dashboard</Tab>
            <Tab size="default" type="default" badge="12">Analytics</Tab>
            <Tab size="default" type="default" state="active" badge="3">Users</Tab>
          </div>
          <div style={{ 
            background: '#2F42BD', 
            padding: '16px', 
            borderRadius: '8px',
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap'
          }}>
            <Tab size="small" type="contained" badge="15">All</Tab>
            <Tab size="small" type="contained" state="active" badge="8">Active</Tab>
            <Tab size="small" type="contained" badge="7">Archive</Tab>
          </div>
        </div>

        <div style={{ 
          border: '2px dashed #E5E7EB', 
          borderRadius: '12px', 
          padding: '20px',
          background: '#FAFAFA',
          maxWidth: '320px'
        }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>
            Mobile Layout
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
            <Tab size="small" type="default" badge="7">Dashboard</Tab>
            <Tab size="small" type="default" state="active" badge="3">Users</Tab>
          </div>
          <div style={{ 
            background: '#2F42BD', 
            padding: '12px', 
            borderRadius: '8px',
            display: 'flex',
            gap: '6px',
            flexWrap: 'wrap'
          }}>
            <Tab size="small" type="contained" badge="15">All</Tab>
            <Tab size="small" type="contained" state="active" badge="8">Active</Tab>
          </div>
        </div>
      </div>

      <div style={{ 
        marginTop: '32px',
        padding: '20px',
        background: '#EFF6FF',
        borderRadius: '12px',
        border: '1px solid #BFDBFE'
      }}>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600', color: '#1E40AF' }}>
          📏 Responsive Features
        </h4>
        <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6', color: '#1E3A8A' }}>
          <li>Automatic wrapping for contained tabs on smaller screens</li>
          <li>Size adjustments for mobile devices</li>
          <li>Flexible layouts that work across all device sizes</li>
          <li>Touch-friendly sizing and spacing</li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of responsive behavior across different screen sizes.',
      },
    },
  },
};
