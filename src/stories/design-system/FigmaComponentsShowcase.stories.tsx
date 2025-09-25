import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AutoSave } from '../atoms/AutoSave';
import { AutoSaveWithTag } from '../atoms/AutoSaveWithTag';
import { MenuItem } from '../atoms/building-blocks/MenuItem';
import { ButtonGroup } from '../atoms/ButtonGroup';
import { Button } from '../atoms/Button';
import { SplitButton } from '../atoms/button/SplitButton';
import { StepIndicator } from '../atoms/building-blocks/StepIndicator';

// Mock component to serve as the container for the showcase
const FigmaComponentsShowcase: React.FC = () => <div />;

const meta: Meta<typeof FigmaComponentsShowcase> = {
  title: 'Design System/Figma Components Showcase',
  component: FigmaComponentsShowcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Comprehensive showcase of all components updated to match the latest Figma design specifications. This includes AutoSave buttons, AutoSaveWithTag, updated MenuItem components, ButtonGroup layouts, and enhanced SplitButton styling.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FigmaComponentsShowcase>;

// Import alarm icon for examples
const AlarmIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6">
      <path d="M4.5 5.175L2.9025 3.585L3.96 2.5275L5.55 4.125L4.5 5.175ZM9.75 0.75V3H8.25V0.75H9.75ZM15.0975 3.585L13.5 5.175L12.45 4.125L14.04 2.5275L15.0975 3.585ZM3.375 7.875V9.375H1.125V7.875H3.375ZM14.625 7.875H16.875V9.375H14.625V7.875ZM4.5 15H13.5C13.8978 15 14.2794 15.158 14.5607 15.4393C14.842 15.7206 15 16.1022 15 16.5H3C3 16.1022 3.15804 15.7206 3.43934 15.4393C3.72064 15.158 4.10218 15 4.5 15ZM9 3.75C10.1935 3.75 11.3381 4.22411 12.182 5.06802C13.0259 5.91193 13.5 7.05653 13.5 8.25V14.25H4.5V8.25C4.5 7.05653 4.97411 5.91193 5.81802 5.06802C6.66193 4.22411 7.80653 3.75 9 3.75Z" fill="currentColor"/>
    </g>
  </svg>
);

// Menu items for examples
const menuItems = [
  { id: 'top', label: 'This is the top', onClick: () => console.log('Top clicked') },
  { id: 'middle1', label: 'This is the middle', onClick: () => console.log('Middle 1 clicked') },
  { id: 'middle2', label: 'This is the middle', onClick: () => console.log('Middle 2 clicked') },
  { id: 'bottom', label: 'This is the bottom', onClick: () => console.log('Bottom clicked') },
];

export const CompleteFigmaShowcase: Story = {
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
        padding: '32px',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        minHeight: '100vh'
      }}>
        {/* Header */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '48px',
          padding: '32px',
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
        }}>
          <h1 style={{ 
            margin: 0, 
            fontSize: '32px', 
            fontWeight: '700', 
            marginBottom: '12px',
            background: 'linear-gradient(135deg, #2F42BD 0%, #0BA7EA 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Figma Design System Components
          </h1>
          <p style={{ 
            margin: 0, 
            fontSize: '18px', 
            color: '#666',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.6'
          }}>
            Comprehensive showcase of all components updated to match the latest Figma design specifications.
            This includes AutoSave functionality, MenuItem components, ButtonGroup layouts, and enhanced styling throughout.
          </p>
        </div>

        {/* AutoSave Components Section */}
        <div style={{ 
          marginBottom: '48px',
          padding: '32px',
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
        }}>
          <h2 style={{ 
            margin: 0, 
            fontSize: '24px', 
            fontWeight: '600', 
            marginBottom: '8px',
            color: '#2F42BD'
          }}>
            AutoSave Components
          </h2>
          <p style={{ 
            margin: 0, 
            fontSize: '16px', 
            color: '#666', 
            marginBottom: '32px'
          }}>
            button/auto-save and button/auto-save/w-tag components from Figma
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            {/* AutoSave standalone */}
            <div>
              <h3 style={{ 
                margin: 0, 
                fontSize: '18px', 
                fontWeight: '600', 
                marginBottom: '16px',
                color: '#333'
              }}>
                AutoSave States
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <AutoSave status="default" onClick={() => console.log('Save clicked')} />
                <AutoSave status="saving" />
                <AutoSave status="auto-saving" />
                <AutoSave status="saved" />
                <AutoSave status="error-saving" />
                <AutoSave status="disabled" />
              </div>
            </div>
            
            {/* AutoSaveWithTag */}
            <div>
              <h3 style={{ 
                margin: 0, 
                fontSize: '18px', 
                fontWeight: '600', 
                marginBottom: '16px',
                color: '#333'
              }}>
                AutoSave with Timestamp Tags
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <AutoSaveWithTag status="default" timestamp={timestamp} />
                <AutoSaveWithTag status="saving" timestamp={timestamp} />
                <AutoSaveWithTag status="saved" timestamp={timestamp} />
                <AutoSaveWithTag status="error-saving" timestamp={timestamp} />
              </div>
            </div>
          </div>
        </div>

        {/* MenuItem Components Section */}
        <div style={{ 
          marginBottom: '48px',
          padding: '32px',
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
        }}>
          <h2 style={{ 
            margin: 0, 
            fontSize: '24px', 
            fontWeight: '600', 
            marginBottom: '8px',
            color: '#2F42BD'
          }}>
            Menu Components
          </h2>
          <p style={{ 
            margin: 0, 
            fontSize: '16px', 
            color: '#666', 
            marginBottom: '32px'
          }}>
            building-blocks/split-button/menu and menu/parts components from Figma
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            {/* Default size menu */}
            <div>
              <h4 style={{ 
                margin: 0, 
                fontSize: '14px', 
                fontWeight: '600', 
                marginBottom: '12px',
                color: '#888',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Default Size
              </h4>
              <div style={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                minWidth: '140px',
                maxWidth: '200px',
                background: 'var(--base-white)',
                borderRadius: 'var(--spacing-radius-6px)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}>
                <MenuItem type="top" size="default">This is the top</MenuItem>
                <MenuItem type="default" size="default">This is the middle</MenuItem>
                <MenuItem type="default" size="default">This is the middle</MenuItem>
                <MenuItem type="bottom" size="default">This is the bottom</MenuItem>
              </div>
            </div>

            {/* Small size menu */}
            <div>
              <h4 style={{ 
                margin: 0, 
                fontSize: '14px', 
                fontWeight: '600', 
                marginBottom: '12px',
                color: '#888',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Small Size
              </h4>
              <div style={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                minWidth: '140px',
                maxWidth: '200px',
                background: 'var(--base-white)',
                borderRadius: 'var(--spacing-radius-6px)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}>
                <MenuItem type="top" size="small">This is the top</MenuItem>
                <MenuItem type="default" size="small">This is the middle</MenuItem>
                <MenuItem type="default" size="small">This is the middle</MenuItem>
                <MenuItem type="bottom" size="small">This is the bottom</MenuItem>
              </div>
            </div>

            {/* Large size menu */}
            <div>
              <h4 style={{ 
                margin: 0, 
                fontSize: '14px', 
                fontWeight: '600', 
                marginBottom: '12px',
                color: '#888',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Large Size
              </h4>
              <div style={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                minWidth: '140px',
                maxWidth: '200px',
                background: 'var(--base-white)',
                borderRadius: 'var(--spacing-radius-6px)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}>
                <MenuItem type="top" size="large">This is the top</MenuItem>
                <MenuItem type="default" size="large">This is the middle</MenuItem>
                <MenuItem type="default" size="large">This is the middle</MenuItem>
                <MenuItem type="bottom" size="large">This is the bottom</MenuItem>
              </div>
            </div>
          </div>
        </div>

        {/* ButtonGroup Components Section */}
        <div style={{ 
          marginBottom: '48px',
          padding: '32px',
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
        }}>
          <h2 style={{ 
            margin: 0, 
            fontSize: '24px', 
            fontWeight: '600', 
            marginBottom: '8px',
            color: '#2F42BD'
          }}>
            Button Groups
          </h2>
          <p style={{ 
            margin: 0, 
            fontSize: '16px', 
            color: '#666', 
            marginBottom: '32px'
          }}>
            button/group component layouts from Figma designs
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {/* Default type groups */}
            <div>
              <h3 style={{ 
                margin: 0, 
                fontSize: '18px', 
                fontWeight: '600', 
                marginBottom: '16px',
                color: '#333'
              }}>
                Default Button Groups
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <h5 style={{ margin: 0, fontSize: '12px', color: '#888', marginBottom: '8px' }}>Small</h5>
                  <ButtonGroup size="small" type="default">
                    <Button type="primary" size="small" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<AlarmIcon size={14} />}>
                      Label
                    </Button>
                    <Button type="ghost" size="small" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<AlarmIcon size={14} />}>
                      Label
                    </Button>
                  </ButtonGroup>
                </div>
                
                <div>
                  <h5 style={{ margin: 0, fontSize: '12px', color: '#888', marginBottom: '8px' }}>Default</h5>
                  <ButtonGroup size="default" type="default">
                    <Button type="primary" leadingIcon={<AlarmIcon />} trailingIcon={<AlarmIcon />}>
                      Label
                    </Button>
                    <Button type="ghost" leadingIcon={<AlarmIcon />} trailingIcon={<AlarmIcon />}>
                      Label
                    </Button>
                  </ButtonGroup>
                </div>
                
                <div>
                  <h5 style={{ margin: 0, fontSize: '12px', color: '#888', marginBottom: '8px' }}>Large</h5>
                  <ButtonGroup size="large" type="default">
                    <Button type="primary" size="large" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<AlarmIcon size={20} />}>
                      Label
                    </Button>
                    <Button type="ghost" size="large" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<AlarmIcon size={20} />}>
                      Label
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>

            {/* Split type groups */}
            <div>
              <h3 style={{ 
                margin: 0, 
                fontSize: '18px', 
                fontWeight: '600', 
                marginBottom: '16px',
                color: '#333'
              }}>
                Split Button Groups
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <h5 style={{ margin: 0, fontSize: '12px', color: '#888', marginBottom: '8px' }}>Small</h5>
                  <ButtonGroup size="small" type="split">
                    <SplitButton type="primary" size="small" menuItems={menuItems}>
                      Label
                    </SplitButton>
                    <Button type="ghost" size="small">
                      Label
                    </Button>
                  </ButtonGroup>
                </div>
                
                <div>
                  <h5 style={{ margin: 0, fontSize: '12px', color: '#888', marginBottom: '8px' }}>Default</h5>
                  <ButtonGroup size="default" type="split">
                    <SplitButton type="primary" menuItems={menuItems}>
                      Label
                    </SplitButton>
                    <Button type="ghost">
                      Label
                    </Button>
                  </ButtonGroup>
                </div>
                
                <div>
                  <h5 style={{ margin: 0, fontSize: '12px', color: '#888', marginBottom: '8px' }}>Large</h5>
                  <ButtonGroup size="large" type="split">
                    <SplitButton type="primary" size="large" menuItems={menuItems}>
                      Label
                    </SplitButton>
                    <Button type="ghost" size="large">
                      Label
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>

            {/* Icon-only type groups */}
            <div>
              <h3 style={{ 
                margin: 0, 
                fontSize: '18px', 
                fontWeight: '600', 
                marginBottom: '16px',
                color: '#333'
              }}>
                Icon-Only Groups
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <h5 style={{ margin: 0, fontSize: '12px', color: '#888', marginBottom: '8px' }}>Small</h5>
                  <ButtonGroup size="small" type="icon-only">
                    <Button type="primary" size="small" iconOnly icon={<AlarmIcon size={14} />} />
                    <Button type="ghost" size="small" iconOnly icon={<AlarmIcon size={14} />} />
                  </ButtonGroup>
                </div>
                
                <div>
                  <h5 style={{ margin: 0, fontSize: '12px', color: '#888', marginBottom: '8px' }}>Default</h5>
                  <ButtonGroup size="default" type="icon-only">
                    <Button type="primary" iconOnly icon={<AlarmIcon />} />
                    <Button type="ghost" iconOnly icon={<AlarmIcon />} />
                  </ButtonGroup>
                </div>
                
                <div>
                  <h5 style={{ margin: 0, fontSize: '12px', color: '#888', marginBottom: '8px' }}>Large</h5>
                  <ButtonGroup size="large" type="icon-only">
                    <Button type="primary" size="large" iconOnly icon={<AlarmIcon size={20} />} />
                    <Button type="ghost" size="large" iconOnly icon={<AlarmIcon size={20} />} />
                  </ButtonGroup>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* StepIndicator Components Section */}
        <div style={{
          marginBottom: '48px',
          padding: '32px',
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
        }}>
          <h2 style={{
            margin: 0,
            fontSize: '24px',
            fontWeight: '600',
            marginBottom: '8px',
            color: '#2F42BD'
          }}>
            Step Indicators
          </h2>
          <p style={{
            margin: 0,
            fontSize: '16px',
            color: '#666',
            marginBottom: '32px'
          }}>
            building-blocks/accordion component indicators for workflow statuses
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {/* All types showcase */}
            <div>
              <h3 style={{
                margin: 0,
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '16px',
                color: '#333'
              }}>
                All Types - Default Size
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
                gap: '16px',
                alignItems: 'center',
                justifyItems: 'center'
              }}>
                {['warning', 'locked', 'comments', 'complete', 'notifications', 'error', 'note'].map((type) => (
                  <div key={type} style={{ textAlign: 'center' }}>
                    <StepIndicator type={type as any} size="default" />
                    <div style={{
                      marginTop: '8px',
                      fontSize: '12px',
                      fontWeight: '500',
                      color: '#666',
                      textTransform: 'capitalize'
                    }}>
                      {type}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Size variations */}
            <div>
              <h3 style={{
                margin: 0,
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '16px',
                color: '#333'
              }}>
                Size Variations
              </h3>
              <div style={{
                display: 'flex',
                gap: '32px',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {['small', 'default', 'large'].map((size) => (
                  <div key={size} style={{ textAlign: 'center' }}>
                    <StepIndicator type="warning" size={size as any} />
                    <div style={{
                      marginTop: '12px',
                      fontSize: '12px',
                      fontWeight: '500',
                      color: '#666',
                      textTransform: 'capitalize'
                    }}>
                      {size}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* State variations */}
            <div>
              <h3 style={{
                margin: 0,
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '16px',
                color: '#333'
              }}>
                State Variations
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px',
                alignItems: 'center',
                justifyItems: 'center'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <StepIndicator type="warning" size="default" />
                  <div style={{
                    marginTop: '8px',
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#666'
                  }}>
                    Default
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <StepIndicator type="warning" size="default" current={true} />
                  <div style={{
                    marginTop: '8px',
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#2F42BD'
                  }}>
                    Current
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <StepIndicator type="warning" size="default" complete={true} />
                  <div style={{
                    marginTop: '8px',
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#22C55E'
                  }}>
                    Complete
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <StepIndicator type="warning" size="default" disabled={true} />
                  <div style={{
                    marginTop: '8px',
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#9CA3AF'
                  }}>
                    Disabled
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nuclear workflow example */}
          <div style={{
            marginTop: '32px',
            padding: '24px',
            background: '#f8f9fa',
            borderRadius: '12px',
            border: '1px solid #e9ecef'
          }}>
            <h4 style={{
              margin: 0,
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '16px',
              color: '#333'
            }}>
              Nuclear Safety Workflow Example
            </h4>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <div style={{ textAlign: 'center' }}>
                <StepIndicator type="complete" size="default" complete={true} />
                <div style={{ marginTop: '8px', fontSize: '12px', fontWeight: '500', color: '#22C55E' }}>
                  Safety Check
                </div>
              </div>

              <div style={{ width: '24px', height: '2px', background: '#e9ecef', flexShrink: 0 }}></div>

              <div style={{ textAlign: 'center' }}>
                <StepIndicator type="notifications" size="default" current={true} />
                <div style={{ marginTop: '8px', fontSize: '12px', fontWeight: '500', color: '#2F42BD' }}>
                  Review
                </div>
              </div>

              <div style={{ width: '24px', height: '2px', background: '#e9ecef', flexShrink: 0 }}></div>

              <div style={{ textAlign: 'center' }}>
                <StepIndicator type="locked" size="default" disabled={true} />
                <div style={{ marginTop: '8px', fontSize: '12px', fontWeight: '500', color: '#9CA3AF' }}>
                  Approval
                </div>
              </div>

              <div style={{ width: '24px', height: '2px', background: '#e9ecef', flexShrink: 0 }}></div>

              <div style={{ textAlign: 'center' }}>
                <StepIndicator type="warning" size="default" disabled={true} />
                <div style={{ marginTop: '8px', fontSize: '12px', fontWeight: '500', color: '#9CA3AF' }}>
                  Deploy
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ 
          textAlign: 'center',
          padding: '32px',
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
        }}>
          <h3 style={{ 
            margin: 0, 
            fontSize: '20px', 
            fontWeight: '600', 
            marginBottom: '12px',
            color: '#2F42BD'
          }}>
            Implementation Complete
          </h3>
          <p style={{ 
            margin: 0, 
            fontSize: '16px', 
            color: '#666',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.6'
          }}>
            All components have been successfully updated to match the latest Figma design specifications. 
            This includes pixel-perfect styling, proper interaction states, accessibility features, and responsive behavior.
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all components updated to match the Figma design specifications. This demonstrates the AutoSave components, MenuItem updates, ButtonGroup layouts, and enhanced styling across all button variants.',
      },
    },
  },
};

export const ComponentOverview: Story = {
  render: () => (
    <div style={{ 
      padding: '24px',
      background: '#f8f9fa',
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '28px', 
          fontWeight: '700', 
          marginBottom: '24px',
          textAlign: 'center',
          color: '#2F42BD'
        }}>
          Updated Components Overview
        </h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {/* AutoSave Card */}
          <div style={{ 
            padding: '24px',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
              AutoSave Components
            </h3>
            <p style={{ margin: 0, fontSize: '14px', color: '#666', marginBottom: '16px' }}>
              New components for save functionality with status indicators and timestamp tracking.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <AutoSave status="default" />
              <AutoSave status="saved" />
            </div>
          </div>

          {/* MenuItem Card */}
          <div style={{ 
            padding: '24px',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
              Menu Components
            </h3>
            <p style={{ margin: 0, fontSize: '14px', color: '#666', marginBottom: '16px' }}>
              Updated MenuItem with Figma-accurate borders, padding, and interaction states.
            </p>
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              minWidth: '140px',
              maxWidth: '200px',
              background: 'var(--base-white)',
              borderRadius: 'var(--spacing-radius-6px)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <MenuItem type="top" size="default">Top item</MenuItem>
              <MenuItem type="default" size="default">Middle item</MenuItem>
              <MenuItem type="bottom" size="default">Bottom item</MenuItem>
            </div>
          </div>

          {/* ButtonGroup Card */}
          <div style={{ 
            padding: '24px',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
              Button Groups
            </h3>
            <p style={{ margin: 0, fontSize: '14px', color: '#666', marginBottom: '16px' }}>
              Flexible layout system for organizing multiple buttons with consistent spacing and alignment.
            </p>
            <ButtonGroup size="default" type="default">
              <Button type="primary">Primary</Button>
              <Button type="ghost">Ghost</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Quick overview of the main component updates with simple examples.',
      },
    },
  },
};
