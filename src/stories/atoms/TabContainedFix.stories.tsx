import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from './Tab';

const meta: Meta<typeof Tab> = {
  title: 'Design System/Tab Contained Fix Showcase',
  component: Tab,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Fixed contained tabs with proper background styling and visibility on colored backgrounds.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ContainedTabsFixed: Story = {
  render: () => (
    <div style={{ 
      maxWidth: '1000px', 
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
          ✅ Fixed Contained Tabs
        </h2>
        <p style={{ 
          margin: '0', 
          fontSize: '16px', 
          color: '#6B7280',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Contained tabs now have proper background styling and are fully visible 
          against colored backgrounds with correct hover and active states.
        </p>
      </div>

      {/* Contained Tabs on Blue Background */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '18px', 
          fontWeight: '600',
          color: '#374151'
        }}>
          Contained Tabs - Blue Background
        </h3>
        <div style={{ 
          display: 'flex', 
          gap: '16px', 
          alignItems: 'flex-end', 
          flexWrap: 'wrap', 
          background: '#2F42BD', 
          padding: '24px', 
          borderRadius: '12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
          <Tab size="small" type="contained" badge="7">Small Tab</Tab>
          <Tab size="default" type="contained" badge="12">Default Tab</Tab>
          <Tab size="large" type="contained" badge="5">Large Tab</Tab>
          <Tab size="default" type="contained" state="active" badge="3">Active Tab</Tab>
          <Tab size="default" type="contained" disabled badge="0">Disabled</Tab>
        </div>
      </div>

      {/* Dark Contained Tabs on Dark Background */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '18px', 
          fontWeight: '600',
          color: '#374151'
        }}>
          Dark Contained Tabs - Dark Background
        </h3>
        <div style={{ 
          display: 'flex', 
          gap: '16px', 
          alignItems: 'flex-end', 
          flexWrap: 'wrap', 
          background: '#191E3C', 
          padding: '24px', 
          borderRadius: '12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
          <Tab size="small" type="dark-contained" badge="7">Small Tab</Tab>
          <Tab size="default" type="dark-contained" badge="12">Default Tab</Tab>
          <Tab size="large" type="dark-contained" badge="5">Large Tab</Tab>
          <Tab size="default" type="dark-contained" state="active" badge="8">Active Tab</Tab>
          <Tab size="default" type="dark-contained" disabled badge="0">Disabled</Tab>
        </div>
      </div>

      {/* Contained Tabs on Different Colored Backgrounds */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '18px', 
          fontWeight: '600',
          color: '#374151'
        }}>
          Contained Tabs - Various Backgrounds
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {/* Purple Background */}
          <div style={{ 
            background: '#7C3AED', 
            padding: '20px', 
            borderRadius: '8px',
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-end'
          }}>
            <Tab size="default" type="contained" badge="5">Purple BG</Tab>
            <Tab size="default" type="contained" state="active" badge="2">Active</Tab>
          </div>

          {/* Green Background */}
          <div style={{ 
            background: '#059669', 
            padding: '20px', 
            borderRadius: '8px',
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-end'
          }}>
            <Tab size="default" type="contained" badge="8">Green BG</Tab>
            <Tab size="default" type="contained" state="active" badge="4">Active</Tab>
          </div>

          {/* Red Background */}
          <div style={{ 
            background: '#DC2626', 
            padding: '20px', 
            borderRadius: '8px',
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-end'
          }}>
            <Tab size="default" type="contained" badge="3">Red BG</Tab>
            <Tab size="default" type="contained" state="active" badge="1">Active</Tab>
          </div>

          {/* Orange Background */}
          <div style={{ 
            background: '#EA580C', 
            padding: '20px', 
            borderRadius: '8px',
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-end'
          }}>
            <Tab size="default" type="contained" badge="6">Orange BG</Tab>
            <Tab size="default" type="contained" state="active" badge="9">Active</Tab>
          </div>
        </div>
      </div>

      {/* State Demonstrations */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '18px', 
          fontWeight: '600',
          color: '#374151'
        }}>
          All States Demonstration
        </h3>
        <div style={{ 
          background: '#1E40AF', 
          padding: '24px', 
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <Tab size="default" type="contained" badge="7">Default State</Tab>
              <p style={{ color: 'white', fontSize: '12px', margin: '8px 0 0 0' }}>Default</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <Tab size="default" type="contained" state="active" badge="3">Active State</Tab>
              <p style={{ color: 'white', fontSize: '12px', margin: '8px 0 0 0' }}>Active</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <Tab size="default" type="contained" disabled badge="0">Disabled State</Tab>
              <p style={{ color: 'white', fontSize: '12px', margin: '8px 0 0 0' }}>Disabled</p>
            </div>
          </div>
        </div>
      </div>

      {/* What Was Fixed */}
      <div style={{ 
        background: '#D1FAE5',
        border: '1px solid #A7F3D0',
        borderRadius: '12px',
        padding: '24px'
      }}>
        <h3 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '18px', 
          fontWeight: '600',
          color: '#065F46'
        }}>
          🎉 What Was Fixed
        </h3>
        <ul style={{ 
          margin: '0', 
          paddingLeft: '20px', 
          fontSize: '14px', 
          lineHeight: '1.6',
          color: '#047857'
        }}>
          <li><strong>Background Visibility:</strong> Added proper semi-transparent backgrounds for contained tabs</li>
          <li><strong>Active State:</strong> White background with blue text for active contained tabs</li>
          <li><strong>Hover State:</strong> Enhanced hover effects with increased opacity</li>
          <li><strong>Disabled State:</strong> Proper disabled styling with reduced opacity</li>
          <li><strong>Border Styling:</strong> Added subtle borders for better definition</li>
          <li><strong>Badge Visibility:</strong> Fixed badge colors for better contrast</li>
          <li><strong>Icon Opacity:</strong> Adjusted icon opacity for better visual hierarchy</li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive demonstration of the fixed contained tabs with proper styling and visibility across different colored backgrounds and states.',
      },
    },
  },
};

export const BeforeAfterComparison: Story = {
  render: () => (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '24px',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h2 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '24px', 
          fontWeight: '700',
          color: '#111827'
        }}>
          Before vs After: Contained Tabs Fix
        </h2>
        <p style={{ 
          margin: '0', 
          fontSize: '16px', 
          color: '#6B7280'
        }}>
          Comparison showing the improvement in contained tab visibility and styling.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        
        {/* After (Fixed) */}
        <div>
          <h3 style={{ 
            margin: '0 0 16px 0', 
            fontSize: '18px', 
            fontWeight: '600',
            color: '#059669'
          }}>
            ✅ After (Fixed)
          </h3>
          <div style={{ 
            background: '#2F42BD', 
            padding: '20px', 
            borderRadius: '8px',
            display: 'flex',
            gap: '16px',
            alignItems: 'flex-end',
            flexWrap: 'wrap'
          }}>
            <Tab size="default" type="contained" badge="7">Visible Tab</Tab>
            <Tab size="default" type="contained" state="active" badge="3">Active Tab</Tab>
            <Tab size="default" type="contained" disabled badge="0">Disabled</Tab>
          </div>
          <p style={{ 
            fontSize: '14px', 
            color: '#059669', 
            margin: '8px 0 0 0',
            fontWeight: '500'
          }}>
            ✓ Proper background opacity and visibility<br/>
            ✓ Clear active state with white background<br/>
            ✓ Proper disabled state styling
          </p>
        </div>

        {/* Explanation */}
        <div style={{ 
          background: '#F3F4F6',
          padding: '20px',
          borderRadius: '8px',
          border: '1px solid #E5E7EB'
        }}>
          <h4 style={{ 
            margin: '0 0 12px 0', 
            fontSize: '16px', 
            fontWeight: '600',
            color: '#374151'
          }}>
            Key Improvements Made:
          </h4>
          <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#4B5563' }}>
            <p style={{ margin: '0 0 8px 0' }}>
              <strong>1. Background Styling:</strong> Changed from transparent to semi-transparent white with proper opacity
            </p>
            <p style={{ margin: '0 0 8px 0' }}>
              <strong>2. Active State:</strong> Added solid white background for active tabs with blue text
            </p>
            <p style={{ margin: '0 0 8px 0' }}>
              <strong>3. Hover Effects:</strong> Enhanced hover states with increased background opacity
            </p>
            <p style={{ margin: '0 0 8px 0' }}>
              <strong>4. Border Definition:</strong> Added subtle borders for better visual separation
            </p>
            <p style={{ margin: '0' }}>
              <strong>5. Accessibility:</strong> Improved contrast and visibility for better usability
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Before and after comparison showing the improvements made to contained tab visibility and styling.',
      },
    },
  },
};
