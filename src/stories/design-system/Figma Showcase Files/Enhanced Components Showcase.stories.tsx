import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { EchoMUIThemeProvider } from '../../foundations/MUIThemeProvider';
import { EnhancedButton } from '../../atoms/EnhancedButton';
import { EnhancedInput } from '../../atoms/EnhancedInput';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import { Card } from '../../atoms/Card';

// Import MUI icons for demonstration
import {
  SaveIcon,
  EditIcon,
  DeleteIcon,
  ShareIcon,
  FavoriteIcon,
  DownloadIcon,
  SearchIcon,
  NotificationsIcon,
} from '../../foundations/MaterialUIIcons';

const meta: Meta = {
  title: 'Design System/Figma Showcase Files/Enhanced Components Showcase',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Enhanced Components Showcase (v4.0.0)

This showcase demonstrates the new enhanced components that combine Material UI 6/7 interaction capabilities 
with complete Echo design system visual consistency. All enhancements maintain Figma design specifications 
while providing superior user interactions.

## Key Features:
- **Material UI Interactions**: Ripple effects, enhanced focus states, touch optimization
- **Echo Visual Design**: 100% Echo design token usage for colors, typography, spacing
- **Progressive Enhancement**: Existing components unchanged, enhanced versions available
- **Accessibility Improvements**: Better keyboard navigation, tooltips, ARIA support
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <EchoMUIThemeProvider>
        <Story />
      </EchoMUIThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj;

export const EnhancedVsOriginalComparison: Story = {
  name: '⚡ Enhanced vs Original Components',
  render: () => {
    const [inputValue, setInputValue] = useState('');
    const [tags, setTags] = useState([
      { id: '1', label: 'Design' },
      { id: '2', label: 'React' },
    ]);

    return (
      <div style={{ 
        padding: 'var(--spacing-sizing-40px)', 
        fontFamily: 'var(--font-family-base)',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <h1 style={{ 
          fontSize: 'var(--type-size-4xl)', 
          fontWeight: 'var(--type-weight-bold)', 
          marginBottom: 'var(--spacing-sizing-32px)',
          color: 'var(--base-black)',
          fontFamily: 'var(--font-family-heading)',
          textAlign: 'center'
        }}>
          Enhanced Components Showcase
        </h1>
        
        <p style={{ 
          fontSize: 'var(--type-size-lg)', 
          color: 'var(--neutral-gray-gray-600)',
          marginBottom: 'var(--spacing-sizing-40px)',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto var(--spacing-sizing-40px)'
        }}>
          Experience the difference between original Echo components and enhanced versions with Material UI 6/7 interactions. 
          Click components to feel the enhanced ripple effects and interactions while maintaining identical visual design.
        </p>

        {/* Button Comparison */}
        <div style={{ 
          marginBottom: 'var(--spacing-sizing-48px)',
          padding: 'var(--spacing-sizing-24px)',
          background: 'var(--neutral-gray-gray-50)',
          borderRadius: 'var(--spacing-radius-8px)',
          border: '1px solid var(--neutral-gray-gray-200)'
        }}>
          <h2 style={{ 
            fontSize: 'var(--type-size-2xl)', 
            fontWeight: 'var(--type-weight-semibold)', 
            marginBottom: 'var(--spacing-sizing-24px)',
            fontFamily: 'var(--font-family-heading)'
          }}>
            Button Components Comparison
          </h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--spacing-sizing-32px)',
            alignItems: 'start'
          }}>
            {/* Enhanced Buttons */}
            <div>
              <h3 style={{ 
                fontSize: 'var(--type-size-xl)', 
                fontWeight: 'var(--type-weight-medium)', 
                marginBottom: 'var(--spacing-sizing-16px)',
                color: 'var(--primary-blue-blue)',
                fontFamily: 'var(--font-family-heading)'
              }}>
                ⚡ Enhanced (with MUI interactions)
              </h3>
              <p style={{ 
                fontSize: 'var(--type-size-sm)', 
                color: 'var(--neutral-gray-gray-600)',
                marginBottom: 'var(--spacing-sizing-16px)'
              }}>
                Click these buttons to experience ripple effects, enhanced focus states, and better accessibility
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sizing-12px)' }}>
                <EnhancedButton type="primary" enhancedInteractions leadingIcon={<SaveIcon />}>
                  Save Document
                </EnhancedButton>
                <EnhancedButton type="secondary" enhancedInteractions leadingIcon={<EditIcon />}>
                  Edit Content
                </EnhancedButton>
                <EnhancedButton type="error" enhancedInteractions leadingIcon={<DeleteIcon />}>
                  Delete Item
                </EnhancedButton>
                
                <div style={{ display: 'flex', gap: 'var(--spacing-sizing-8px)', marginTop: 'var(--spacing-sizing-8px)' }}>
                  <EnhancedButton 
                    iconOnly 
                    icon={<FavoriteIcon />} 
                    type="error" 
                    enhancedInteractions
                    tooltip="Add to favorites"
                  />
                  <EnhancedButton 
                    iconOnly 
                    icon={<ShareIcon />} 
                    type="secondary" 
                    enhancedInteractions
                    tooltip="Share content"
                  />
                  <EnhancedButton 
                    iconOnly 
                    icon={<DownloadIcon />} 
                    type="tertiary" 
                    enhancedInteractions
                    tooltip="Download file"
                  />
                </div>
              </div>
            </div>

            {/* Original Buttons */}
            <div>
              <h3 style={{ 
                fontSize: 'var(--type-size-xl)', 
                fontWeight: 'var(--type-weight-medium)', 
                marginBottom: 'var(--spacing-sizing-16px)',
                color: 'var(--neutral-gray-gray-700)',
                fontFamily: 'var(--font-family-heading)'
              }}>
                📝 Original Echo Components
              </h3>
              <p style={{ 
                fontSize: 'var(--type-size-sm)', 
                color: 'var(--neutral-gray-gray-600)',
                marginBottom: 'var(--spacing-sizing-16px)'
              }}>
                Your existing Echo components with standard hover states
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sizing-12px)' }}>
                <Button type="primary" leadingIcon={<SaveIcon />}>
                  Save Document
                </Button>
                <Button type="secondary" leadingIcon={<EditIcon />}>
                  Edit Content
                </Button>
                <Button type="error" leadingIcon={<DeleteIcon />}>
                  Delete Item
                </Button>
                
                <div style={{ display: 'flex', gap: 'var(--spacing-sizing-8px)', marginTop: 'var(--spacing-sizing-8px)' }}>
                  <Button iconOnly icon={<FavoriteIcon />} type="error" />
                  <Button iconOnly icon={<ShareIcon />} type="secondary" />
                  <Button iconOnly icon={<DownloadIcon />} type="tertiary" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Input Comparison */}
        <div style={{ 
          marginBottom: 'var(--spacing-sizing-48px)',
          padding: 'var(--spacing-sizing-24px)',
          background: 'var(--primary-blue-blue-50)',
          borderRadius: 'var(--spacing-radius-8px)',
          border: '1px solid var(--primary-blue-blue-200)'
        }}>
          <h2 style={{ 
            fontSize: 'var(--type-size-2xl)', 
            fontWeight: 'var(--type-weight-semibold)', 
            marginBottom: 'var(--spacing-sizing-24px)',
            fontFamily: 'var(--font-family-heading)'
          }}>
            Input Components Comparison
          </h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--spacing-sizing-32px)',
            alignItems: 'start'
          }}>
            {/* Enhanced Inputs */}
            <div>
              <h3 style={{ 
                fontSize: 'var(--type-size-xl)', 
                fontWeight: 'var(--type-weight-medium)', 
                marginBottom: 'var(--spacing-sizing-16px)',
                color: 'var(--primary-blue-blue)',
                fontFamily: 'var(--font-family-heading)'
              }}>
                ⚡ Enhanced Input Features
              </h3>
              <p style={{ 
                fontSize: 'var(--type-size-sm)', 
                color: 'var(--neutral-gray-gray-600)',
                marginBottom: 'var(--spacing-sizing-16px)'
              }}>
                Try typing and interacting with these enhanced inputs
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sizing-16px)' }}>
                <EnhancedInput
                  label="Search"
                  placeholder="Search for anything..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  showLeadingIcon
                  leadingIcon={<SearchIcon />}
                  enhancedInteractions
                />
                
                <EnhancedInput
                  label="Password"
                  variant="password"
                  placeholder="Enter your password"
                  enhancedInteractions
                />
                
                <EnhancedInput
                  label="Tags"
                  variant="tags"
                  placeholder="Add tags..."
                  tags={tags}
                  enhancedInteractions
                  onTagRemove={(tagId) => {
                    setTags(tags.filter(tag => tag.id !== tagId));
                  }}
                />
                
                <EnhancedInput
                  label="Options"
                  variant="autocomplete"
                  options={['Option 1', 'Option 2', 'Option 3', 'React', 'TypeScript', 'Design System']}
                  enhancedInteractions
                />
              </div>
            </div>

            {/* Original Inputs */}
            <div>
              <h3 style={{ 
                fontSize: 'var(--type-size-xl)', 
                fontWeight: 'var(--type-weight-medium)', 
                marginBottom: 'var(--spacing-sizing-16px)',
                color: 'var(--neutral-gray-gray-700)',
                fontFamily: 'var(--font-family-heading)'
              }}>
                📝 Original Echo Inputs
              </h3>
              <p style={{ 
                fontSize: 'var(--type-size-sm)', 
                color: 'var(--neutral-gray-gray-600)',
                marginBottom: 'var(--spacing-sizing-16px)'
              }}>
                Your existing Echo input components
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sizing-16px)' }}>
                <Input
                  label="Search"
                  placeholder="Search for anything..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  showLeadingIcon
                />
                
                <Input
                  label="Tags"
                  variant="tags"
                  placeholder="Add tags..."
                  tags={tags}
                  onTagRemove={(tagId) => {
                    setTags(tags.filter(tag => tag.id !== tagId));
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card Improvements */}
        <div style={{ 
          marginBottom: 'var(--spacing-sizing-48px)',
          padding: 'var(--spacing-sizing-24px)',
          background: 'var(--status-green-light)',
          borderRadius: 'var(--spacing-radius-8px)',
          border: '1px solid var(--status-green)'
        }}>
          <h2 style={{ 
            fontSize: 'var(--type-size-2xl)', 
            fontWeight: 'var(--type-weight-semibold)', 
            marginBottom: 'var(--spacing-sizing-24px)',
            fontFamily: 'var(--font-family-heading)'
          }}>
            ✅ Card Component Improvements
          </h2>
          
          <p style={{ 
            fontSize: 'var(--type-size-base)', 
            color: 'var(--neutral-gray-gray-700)',
            marginBottom: 'var(--spacing-sizing-24px)'
          }}>
            All card components now have consistent bottom padding under button groups, fixing spacing issues across the design system.
          </p>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-sizing-16px)'
          }}>
            <Card 
              type="simple" 
              size="default" 
              align="vertical" 
              dropShadow={true}
              showCloseIcon={true}
              title="Improved Card"
              subtitle="Consistent spacing"
              bodyText="All cards now have proper bottom padding under button groups for consistent visual spacing."
            />
            
            <Card 
              type="warning" 
              size="default" 
              dropShadow={true}
              showCloseIcon={true}
              title="Enhanced Spacing"
              bodyText="Button groups now have consistent 16px bottom padding across all card types."
            />
            
            <Card 
              type="success" 
              size="default" 
              dropShadow={true}
              showCloseIcon={true}
              title="Design Consistency"
              bodyText="Fixed spacing ensures better visual hierarchy and Figma design alignment."
            />
          </div>
        </div>

        {/* Features Summary */}
        <div style={{ 
          padding: 'var(--spacing-sizing-32px)',
          background: 'var(--primary-seafoam-50)',
          borderRadius: 'var(--spacing-radius-12px)',
          border: '1px solid var(--primary-seafoam-200)',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            fontSize: 'var(--type-size-2xl)', 
            fontWeight: 'var(--type-weight-semibold)', 
            marginBottom: 'var(--spacing-sizing-24px)',
            fontFamily: 'var(--font-family-heading)'
          }}>
            🎯 Integration Benefits
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--spacing-sizing-20px)',
            marginBottom: 'var(--spacing-sizing-24px)'
          }}>
            <div style={{ 
              padding: 'var(--spacing-sizing-16px)',
              background: 'var(--base-white)',
              borderRadius: 'var(--spacing-radius-8px)',
              border: '1px solid var(--primary-seafoam-300)'
            }}>
              <div style={{ fontSize: 'var(--type-size-2xl)', marginBottom: 'var(--spacing-sizing-8px)' }}>🎨</div>
              <h3 style={{ 
                fontSize: 'var(--type-size-base)', 
                fontWeight: 'var(--type-weight-semibold)', 
                marginBottom: 'var(--spacing-sizing-4px)',
                fontFamily: 'var(--font-family-heading)'
              }}>
                100% Echo Design
              </h3>
              <p style={{ fontSize: 'var(--type-size-sm)', color: 'var(--neutral-gray-gray-600)', margin: 0 }}>
                All visual design maintained exactly as in Figma specifications
              </p>
            </div>
            
            <div style={{ 
              padding: 'var(--spacing-sizing-16px)',
              background: 'var(--base-white)',
              borderRadius: 'var(--spacing-radius-8px)',
              border: '1px solid var(--primary-seafoam-300)'
            }}>
              <div style={{ fontSize: 'var(--type-size-2xl)', marginBottom: 'var(--spacing-sizing-8px)' }}>⚡</div>
              <h3 style={{ 
                fontSize: 'var(--type-size-base)', 
                fontWeight: 'var(--type-weight-semibold)', 
                marginBottom: 'var(--spacing-sizing-4px)',
                fontFamily: 'var(--font-family-heading)'
              }}>
                Enhanced Interactions
              </h3>
              <p style={{ fontSize: 'var(--type-size-sm)', color: 'var(--neutral-gray-gray-600)', margin: 0 }}>
                Ripple effects, better focus states, touch optimization
              </p>
            </div>
            
            <div style={{ 
              padding: 'var(--spacing-sizing-16px)',
              background: 'var(--base-white)',
              borderRadius: 'var(--spacing-radius-8px)',
              border: '1px solid var(--primary-seafoam-300)'
            }}>
              <div style={{ fontSize: 'var(--type-size-2xl)', marginBottom: 'var(--spacing-sizing-8px)' }}>♿</div>
              <h3 style={{ 
                fontSize: 'var(--type-size-base)', 
                fontWeight: 'var(--type-weight-semibold)', 
                marginBottom: 'var(--spacing-sizing-4px)',
                fontFamily: 'var(--font-family-heading)'
              }}>
                Better Accessibility
              </h3>
              <p style={{ fontSize: 'var(--type-size-sm)', color: 'var(--neutral-gray-gray-600)', margin: 0 }}>
                Enhanced keyboard navigation, tooltips, ARIA support
              </p>
            </div>
            
            <div style={{ 
              padding: 'var(--spacing-sizing-16px)',
              background: 'var(--base-white)',
              borderRadius: 'var(--spacing-radius-8px)',
              border: '1px solid var(--primary-seafoam-300)'
            }}>
              <div style={{ fontSize: 'var(--type-size-2xl)', marginBottom: 'var(--spacing-sizing-8px)' }}>🔄</div>
              <h3 style={{ 
                fontSize: 'var(--type-size-base)', 
                fontWeight: 'var(--type-weight-semibold)', 
                marginBottom: 'var(--spacing-sizing-4px)',
                fontFamily: 'var(--font-family-heading)'
              }}>
                Progressive Enhancement
              </h3>
              <p style={{ fontSize: 'var(--type-size-sm)', color: 'var(--neutral-gray-gray-600)', margin: 0 }}>
                Adopt gradually with zero breaking changes to existing code
              </p>
            </div>
          </div>
          
          <p style={{ 
            fontSize: 'var(--type-size-base)', 
            color: 'var(--neutral-gray-gray-700)',
            margin: 0
          }}>
            <strong>Ready to enhance your components?</strong> Wrap your app with EchoMUIThemeProvider and start using enhanced components for superior user interactions.
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
**Complete Enhanced Components Showcase**

This comprehensive showcase demonstrates the new Material UI 6/7 integration features:

### Enhanced vs Original Comparison:
- **Side-by-side comparison** of enhanced and original components
- **Interactive demonstrations** showing ripple effects and enhanced states
- **Identical visual design** with superior interactions

### Key Improvements:
- **Card Components**: Fixed bottom padding consistency under button groups
- **Enhanced Buttons**: Ripple effects, tooltips, better accessibility
- **Enhanced Inputs**: MUI capabilities with Echo styling (password, tags, autocomplete)
- **Progressive Enhancement**: Existing components unchanged, enhanced versions available

### Try It Out:
Click the enhanced components to experience the improved interactions while 
comparing them to the original Echo components that maintain the same visual design.
        `,
      },
    },
  },
};
