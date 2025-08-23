import type { Meta, StoryObj } from '@storybook/react';
import { Tab, HomeIcon, ChevronDownIcon } from './Tab';
import React, { useState } from 'react';

const meta: Meta<typeof Tab> = {
  title: 'Design System/Tab Fixed Showcase',
  component: Tab,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Fixed and improved Tab component with enhanced layout, badge positioning, icon alignment, and responsive behavior.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component for sections
const TabSection = ({ title, children, background }: { 
  title: string; 
  children: React.ReactNode; 
  background?: string;
}) => (
  <div style={{ marginBottom: '32px' }}>
    <h3 style={{ 
      margin: '0 0 16px 0', 
      fontSize: '16px', 
      fontWeight: '600', 
      color: '#1F2937',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      {title}
    </h3>
    <div style={{ 
      display: 'flex', 
      gap: '16px', 
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      background,
      padding: background ? '16px' : '0',
      borderRadius: background ? '8px' : '0'
    }}>
      {children}
    </div>
  </div>
);

export const FixedTabShowcase: Story = {
  render: () => (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '24px',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '24px', 
          fontWeight: '700',
          color: '#111827'
        }}>
          Fixed Tab Component
        </h2>
        <p style={{ 
          margin: '0', 
          fontSize: '16px', 
          color: '#6B7280',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Comprehensive showcase of the improved Tab component with fixed badge positioning, 
          better icon alignment, responsive layout, and enhanced visual consistency.
        </p>
      </div>

      {/* Size Comparison */}
      <TabSection title="Size Variants - All Fixed">
        <Tab size="small" type="default" badge="7">Small Tab</Tab>
        <Tab size="default" type="default" badge="7">Default Tab</Tab>
        <Tab size="large" type="default" badge="7">Large Tab</Tab>
      </TabSection>

      {/* Type Variants */}
      <TabSection title="Type Variants - Improved Layout">
        <Tab size="default" type="default" badge="7">Default</Tab>
        <Tab size="default" type="secondary" badge="7">Secondary</Tab>
      </TabSection>

      {/* Contained Variants */}
      <TabSection title="Contained Variants - Enhanced Styling" background="#2F42BD">
        <Tab size="small" type="contained" badge="7">Small</Tab>
        <Tab size="default" type="contained" badge="7">Default</Tab>
        <Tab size="large" type="contained" badge="7">Large</Tab>
        <Tab size="default" type="contained" state="active" badge="12">Active</Tab>
      </TabSection>

      {/* Dark Contained Variants */}
      <TabSection title="Dark Contained Variants - Fixed Alignment" background="#191E3C">
        <Tab size="small" type="dark-contained" badge="7">Small</Tab>
        <Tab size="default" type="dark-contained" badge="7">Default</Tab>
        <Tab size="large" type="dark-contained" badge="7">Large</Tab>
        <Tab size="default" type="dark-contained" state="active" badge="5">Active</Tab>
      </TabSection>

      {/* State Demonstrations */}
      <TabSection title="Interactive States - Improved Responsiveness">
        <Tab size="default" type="default" badge="7">Default State</Tab>
        <Tab size="default" type="default" state="active" badge="3">Active State</Tab>
        <Tab size="default" type="default" disabled badge="0">Disabled State</Tab>
      </TabSection>

      {/* Badge Positioning Tests */}
      <TabSection title="Badge Positioning - Fixed Layout Issues">
        <Tab size="small" type="default" badge="9">Small Badge</Tab>
        <Tab size="default" type="default" badge="99">Large Number</Tab>
        <Tab size="large" type="default" badge="999">Very Large</Tab>
        <Tab size="default" type="secondary" badge="A">Letter Badge</Tab>
      </TabSection>

      {/* Without Badges */}
      <TabSection title="Without Badges - Clean Layout">
        <Tab size="small" type="default" showBadge={false}>Small</Tab>
        <Tab size="default" type="default" showBadge={false}>Default</Tab>
        <Tab size="large" type="default" showBadge={false}>Large</Tab>
        <Tab size="default" type="secondary" showBadge={false}>Secondary</Tab>
      </TabSection>

      {/* Custom Icons */}
      <TabSection title="Custom Icons - Improved Sizing">
        <Tab 
          size="default" 
          type="default" 
          badge="7"
          leadingIcon={<HomeIcon size={16} />}
          trailingIcon={<ChevronDownIcon size={16} />}
        >
          Custom Icons
        </Tab>
        <Tab 
          size="large" 
          type="secondary" 
          badge="12"
          leadingIcon={<HomeIcon size={20} />}
          trailingIcon={<ChevronDownIcon size={20} />}
        >
          Large Custom
        </Tab>
      </TabSection>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of the fixed Tab component demonstrating all improvements made to layout, badge positioning, icon alignment, and responsive behavior.',
      },
    },
  },
};

export const InteractiveTabGroup: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState(0);
    const [secondaryActiveTab, setSecondaryActiveTab] = useState(0);

    return (
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '24px',
        fontFamily: 'Inter, system-ui, sans-serif'
      }}>
        
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>
            Interactive Tab Groups - Fixed Layout
          </h3>
          
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '600' }}>
              Default Tab Group
            </h4>
            <div style={{ display: 'flex', gap: '0', alignItems: 'flex-end', marginBottom: '16px' }}>
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
            
            <div style={{ 
              padding: '16px', 
              background: '#f8f9fa', 
              borderRadius: '8px',
              border: '1px solid #e9ecef'
            }}>
              <p style={{ margin: '0', fontSize: '14px' }}>
                <strong>Active:</strong> {['Dashboard', 'Analytics', 'Reports'][activeTab]} 
                {' '}({['7', '3', '12'][activeTab]} notifications)
              </p>
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '600' }}>
              Secondary Tab Group
            </h4>
            <div style={{ display: 'flex', gap: '0', alignItems: 'flex-end', marginBottom: '16px' }}>
              <Tab
                size="default"
                type="secondary"
                active={secondaryActiveTab === 0}
                onClick={() => setSecondaryActiveTab(0)}
                badge="5"
              >
                Projects
              </Tab>
              <Tab
                size="default"
                type="secondary"
                active={secondaryActiveTab === 1}
                onClick={() => setSecondaryActiveTab(1)}
                badge="8"
              >
                Team
              </Tab>
              <Tab
                size="default"
                type="secondary"
                active={secondaryActiveTab === 2}
                onClick={() => setSecondaryActiveTab(2)}
                badge="2"
              >
                Tasks
              </Tab>
            </div>
            
            <div style={{ 
              padding: '16px', 
              background: '#f0f9ff', 
              borderRadius: '8px',
              border: '1px solid #bae6fd'
            }}>
              <p style={{ margin: '0', fontSize: '14px' }}>
                <strong>Active:</strong> {['Projects', 'Team', 'Tasks'][secondaryActiveTab]}
                {' '}({['5', '8', '2'][secondaryActiveTab]} items)
              </p>
            </div>
          </div>
        </div>

        <div style={{ 
          background: '#f8f9fa', 
          padding: '20px', 
          borderRadius: '8px',
          border: '1px solid #e9ecef'
        }}>
          <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600' }}>
            🎉 UI Improvements Made
          </h4>
          <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6' }}>
            <li><strong>Badge Positioning:</strong> Fixed absolute positioning issues, now uses flexbox</li>
            <li><strong>Icon Alignment:</strong> Improved icon sizing and spacing consistency</li>
            <li><strong>Responsive Layout:</strong> Removed hardcoded widths, now fully responsive</li>
            <li><strong>Text Overflow:</strong> Added proper text truncation for long labels</li>
            <li><strong>Spacing:</strong> Enhanced padding and gap consistency across all sizes</li>
            <li><strong>Line Positioning:</strong> Fixed tab line to properly align with content</li>
            <li><strong>Border Radius:</strong> Added subtle rounding to contained variants</li>
          </ul>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demonstration of the fixed tab groups with detailed breakdown of improvements made.',
      },
    },
  },
};

export const ResponsiveDemo: Story = {
  render: () => (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '24px',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      
      <h3 style={{ marginBottom: '24px', fontSize: '18px', fontWeight: '600' }}>
        Responsive Behavior - Fixed Layout
      </h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        <div style={{ 
          border: '2px dashed #e5e7eb', 
          borderRadius: '8px', 
          padding: '16px',
          background: '#fafafa'
        }}>
          <p style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>
            Wide Container (Desktop)
          </p>
          <div style={{ display: 'flex', gap: '0', alignItems: 'flex-end', flexWrap: 'wrap' }}>
            <Tab size="default" type="default" badge="7">Home Dashboard</Tab>
            <Tab size="default" type="default" badge="15">User Analytics</Tab>
            <Tab size="default" type="default" badge="3">System Reports</Tab>
            <Tab size="default" type="default" badge="22">Configuration Settings</Tab>
            <Tab size="default" type="default" state="active" badge="8">Active Page</Tab>
          </div>
        </div>

        <div style={{ 
          border: '2px dashed #e5e7eb', 
          borderRadius: '8px', 
          padding: '16px',
          background: '#fafafa',
          maxWidth: '500px'
        }}>
          <p style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>
            Medium Container (Tablet)
          </p>
          <div style={{ display: 'flex', gap: '0', alignItems: 'flex-end', flexWrap: 'wrap' }}>
            <Tab size="default" type="default" badge="7">Dashboard</Tab>
            <Tab size="default" type="default" badge="15">Analytics</Tab>
            <Tab size="default" type="default" badge="3">Reports</Tab>
            <Tab size="default" type="default" state="active" badge="8">Settings</Tab>
          </div>
        </div>

        <div style={{ 
          border: '2px dashed #e5e7eb', 
          borderRadius: '8px', 
          padding: '16px',
          background: '#fafafa',
          maxWidth: '300px'
        }}>
          <p style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>
            Narrow Container (Mobile)
          </p>
          <div style={{ display: 'flex', gap: '0', alignItems: 'flex-end', flexWrap: 'wrap' }}>
            <Tab size="small" type="default" badge="7">Home</Tab>
            <Tab size="small" type="default" badge="15">Stats</Tab>
            <Tab size="small" type="default" state="active" badge="3">Active</Tab>
          </div>
        </div>
      </div>

      <div style={{ 
        marginTop: '32px',
        padding: '20px',
        background: '#eff6ff',
        borderRadius: '8px',
        border: '1px solid #bfdbfe'
      }}>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600' }}>
          ✨ Responsive Improvements
        </h4>
        <p style={{ margin: '0', fontSize: '14px', lineHeight: '1.6' }}>
          The fixed Tab component now properly adapts to different container sizes with flexible layouts,
          proper text overflow handling, and consistent badge positioning across all screen sizes.
          No more hardcoded widths or broken layouts on mobile devices!
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of the improved responsive behavior of the fixed Tab component across different container sizes.',
      },
    },
  },
};
