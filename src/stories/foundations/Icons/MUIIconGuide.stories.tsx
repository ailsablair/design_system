import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import type { MaterialIconFilledName } from './MaterialUIIcons';

const meta: Meta = {
  title: 'Foundations/MUI Icon Guide',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Complete MUI Icons Integration Guide

This guide demonstrates the updated MUI Icons system with 400+ comprehensive icons organized into logical categories.

## What's New

✅ **130+ Material UI Filled Icons** - Complete set with all commonly used interface icons  
✅ **130+ Material UI Outlined Icons** - Clean outlined variants for modern interfaces  
✅ **130+ Material UI TwoTone Icons** - Enhanced depth with dual-color treatment  
✅ **Consistent Design Tokens** - Standardized sizing, opacity, and color management  
✅ **Accessibility First** - Proper ARIA labels and semantic usage  
✅ **Centralized Management** - All icons through unified Icon component  

## Migration Benefits

- **Consistency**: All icons use the same sizing and styling system
- **Performance**: Centralized imports reduce bundle size
- **Accessibility**: Built-in ARIA support and semantic structure
- **Maintainability**: Single source of truth for all icon usage
- **Extensibility**: Easy to add new icons and variants
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// Complete categories showcase
export const ComprehensiveGuide: Story = {
  render: () => {
    const iconCategories = [
      {
        title: 'Navigation & Layout',
        description: 'Essential navigation and layout control icons',
        icons: [
          'home', 'menu', 'dashboard', 'arrow-back', 'arrow-forward', 
          'arrow-upward', 'arrow-downward', 'expand-more', 'expand-less', 
          'directions', 'map', 'location-on'
        ] as MaterialIconFilledName[]
      },
      {
        title: 'Actions & Controls',
        description: 'Primary actions and interface controls',
        icons: [
          'search', 'edit', 'delete', 'add', 'remove', 'close', 'refresh', 
          'save', 'download', 'upload', 'share', 'print', 'build', 'settings', 
          'check', 'filter-list', 'sort', 'get-app', 'clear'
        ] as MaterialIconFilledName[]
      },
      {
        title: 'Communication',
        description: 'Messaging and communication features',
        icons: [
          'email', 'phone', 'notifications', 'chat', 'comment', 'forum', 
          'send', 'inbox', 'drafts', 'mark-email-read'
        ] as MaterialIconFilledName[]
      },
      {
        title: 'Content & Media',
        description: 'Content management and media handling',
        icons: [
          'history', 'assignment', 'description', 'list', 'view-list', 
          'view-module', 'grid-view', 'folder', 'insert-drive-file', 'image', 
          'photo', 'video-library', 'music-note', 'attach-file'
        ] as MaterialIconFilledName[]
      },
      {
        title: 'User & Account',
        description: 'User management and security features',
        icons: [
          'person', 'account-circle', 'account-box', 'group', 'work', 
          'exit-to-app', 'lock', 'lock-open', 'visibility', 'visibility-off', 
          'security', 'shield', 'verified'
        ] as MaterialIconFilledName[]
      },
      {
        title: 'System & Status',
        description: 'System feedback and status indicators',
        icons: [
          'info', 'warning', 'error', 'check-circle', 'help', 'bug-report', 'code'
        ] as MaterialIconFilledName[]
      },
      {
        title: 'Media Controls',
        description: 'Audio, video, and media playback controls',
        icons: [
          'play-arrow', 'pause', 'stop', 'skip-next', 'skip-previous', 
          'volume-up', 'volume-off', 'mic', 'mic-off', 'videocam', 
          'videocam-off', 'camera-alt'
        ] as MaterialIconFilledName[]
      }
    ];

    const variants = [
      { suffix: '', label: 'Filled', description: 'Solid filled icons (default)' },
      { suffix: '-outlined', label: 'Outlined', description: 'Clean outline style' },
      { suffix: '-two-tone', label: 'TwoTone', description: 'Dual-color treatment' }
    ];

    return (
      <div style={{ 
        padding: '32px', 
        fontFamily: 'var(--font-family-base)',
        backgroundColor: 'var(--base-white)',
        minHeight: '100vh'
      }}>
        {/* Header */}
        <div style={{ marginBottom: '48px', textAlign: 'center' }}>
          <h1 style={{ 
            color: 'var(--neutral-gray-gray-900)', 
            fontSize: '32px', 
            fontWeight: '700',
            marginBottom: '16px'
          }}>
            Complete MUI Icons Library
          </h1>
          <p style={{ 
            color: 'var(--neutral-gray-gray-600)', 
            fontSize: '18px',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            400+ professionally designed icons organized into logical categories with 
            consistent styling and accessibility features built-in.
          </p>
        </div>

        {/* Icon Variants Demo */}
        <div style={{ marginBottom: '64px' }}>
          <h2 style={{ 
            color: 'var(--neutral-gray-gray-900)', 
            fontSize: '24px', 
            fontWeight: '600',
            marginBottom: '24px'
          }}>
            Icon Variants
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '24px',
            marginBottom: '32px'
          }}>
            {variants.map((variant) => (
              <div 
                key={variant.suffix}
                style={{ 
                  padding: '24px',
                  border: '1px solid var(--neutral-gray-gray-200)',
                  borderRadius: 'var(--spacing-radius-8px)',
                  backgroundColor: 'var(--base-white)'
                }}
              >
                <h3 style={{ 
                  color: 'var(--neutral-gray-gray-900)', 
                  fontSize: '16px', 
                  fontWeight: '600',
                  marginBottom: '8px'
                }}>
                  {variant.label}
                </h3>
                <p style={{ 
                  color: 'var(--neutral-gray-gray-600)', 
                  fontSize: '14px',
                  marginBottom: '16px'
                }}>
                  {variant.description}
                </p>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <Icon 
                    name={`home${variant.suffix}` as MaterialIconFilledName} 
                    size="lg" 
                    color="var(--primary-blue-blue-500)"
                    aria-label={`Home ${variant.label} example`}
                  />
                  <Icon 
                    name={`star${variant.suffix}` as MaterialIconFilledName} 
                    size="lg" 
                    color="var(--semantic-warning)"
                    aria-label={`Star ${variant.label} example`}
                  />
                  <Icon 
                    name={`settings${variant.suffix}` as MaterialIconFilledName} 
                    size="lg" 
                    color="var(--neutral-gray-gray-600)"
                    aria-label={`Settings ${variant.label} example`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Showcase */}
        <div>
          <h2 style={{ 
            color: 'var(--neutral-gray-gray-900)', 
            fontSize: '24px', 
            fontWeight: '600',
            marginBottom: '24px'
          }}>
            Icon Categories
          </h2>
          
          {iconCategories.map((category, index) => (
            <div 
              key={category.title}
              style={{ 
                marginBottom: '48px',
                padding: '32px',
                backgroundColor: index % 2 === 0 ? 'var(--neutral-gray-gray-50)' : 'transparent',
                borderRadius: 'var(--spacing-radius-12px)'
              }}
            >
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ 
                  color: 'var(--neutral-gray-gray-900)', 
                  fontSize: '20px', 
                  fontWeight: '600',
                  marginBottom: '8px'
                }}>
                  {category.title}
                </h3>
                <p style={{ 
                  color: 'var(--neutral-gray-gray-600)', 
                  fontSize: '14px',
                  marginBottom: '24px'
                }}>
                  {category.description}
                </p>
              </div>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', 
                gap: '16px'
              }}>
                {category.icons.map((iconName) => (
                  <div 
                    key={iconName}
                    style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      padding: '16px 8px',
                      border: '1px solid var(--neutral-gray-gray-200)',
                      borderRadius: 'var(--spacing-radius-6px)',
                      backgroundColor: 'var(--base-white)',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary-blue-blue-300)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--neutral-gray-gray-200)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <Icon 
                      name={iconName} 
                      size="lg" 
                      color="var(--primary-blue-blue-500)"
                      opacity="strong"
                      aria-label={`${iconName} icon`}
                      style={{ marginBottom: '8px' }}
                    />
                    <span style={{ 
                      fontSize: '11px', 
                      color: 'var(--neutral-gray-gray-600)',
                      fontWeight: '500',
                      textAlign: 'center',
                      lineHeight: '1.2',
                      wordBreak: 'break-word'
                    }}>
                      {iconName}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Usage Examples */}
        <div style={{ 
          marginTop: '64px',
          padding: '32px',
          backgroundColor: 'var(--primary-blue-blue-50)',
          borderRadius: 'var(--spacing-radius-12px)'
        }}>
          <h2 style={{ 
            color: 'var(--neutral-gray-gray-900)', 
            fontSize: '24px', 
            fontWeight: '600',
            marginBottom: '24px'
          }}>
            Implementation Examples
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '24px'
          }}>
            {/* Basic Usage */}
            <div style={{ 
              padding: '20px',
              backgroundColor: 'var(--base-white)',
              borderRadius: 'var(--spacing-radius-8px)',
              border: '1px solid var(--primary-blue-blue-200)'
            }}>
              <h4 style={{ 
                color: 'var(--neutral-gray-gray-900)', 
                fontSize: '16px', 
                fontWeight: '600',
                marginBottom: '12px'
              }}>
                Basic Usage
              </h4>
              <pre style={{ 
                backgroundColor: 'var(--neutral-gray-gray-100)',
                padding: '12px',
                borderRadius: 'var(--spacing-radius-4px)',
                fontSize: '12px',
                color: 'var(--neutral-gray-gray-800)',
                overflow: 'auto',
                margin: 0
              }}>
{`<Icon name="search" />
<Icon name="edit-outlined" />
<Icon name="star-two-tone" />`}
              </pre>
            </div>

            {/* With Styling */}
            <div style={{ 
              padding: '20px',
              backgroundColor: 'var(--base-white)',
              borderRadius: 'var(--spacing-radius-8px)',
              border: '1px solid var(--primary-blue-blue-200)'
            }}>
              <h4 style={{ 
                color: 'var(--neutral-gray-gray-900)', 
                fontSize: '16px', 
                fontWeight: '600',
                marginBottom: '12px'
              }}>
                With Styling
              </h4>
              <pre style={{ 
                backgroundColor: 'var(--neutral-gray-gray-100)',
                padding: '12px',
                borderRadius: 'var(--spacing-radius-4px)',
                fontSize: '12px',
                color: 'var(--neutral-gray-gray-800)',
                overflow: 'auto',
                margin: 0
              }}>
{`<Icon 
  name="notifications" 
  size="lg"
  color="var(--semantic-error)"
  opacity="strong"
  aria-label="Notifications"
/>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of the updated MUI Icons system with all categories and variants.',
      },
    },
  },
};

// Migration guide
export const MigrationGuide: Story = {
  render: () => (
    <div style={{ 
      padding: '32px', 
      fontFamily: 'var(--font-family-base)',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1 style={{ 
        color: 'var(--neutral-gray-gray-900)', 
        fontSize: '28px', 
        fontWeight: '700',
        marginBottom: '24px'
      }}>
        Migration Guide
      </h1>

      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ 
          color: 'var(--neutral-gray-gray-900)', 
          fontSize: '20px', 
          fontWeight: '600',
          marginBottom: '16px'
        }}>
          ❌ Before (Direct MUI Imports)
        </h2>
        <pre style={{ 
          backgroundColor: 'var(--semantic-error-light)',
          padding: '16px',
          borderRadius: 'var(--spacing-radius-8px)',
          fontSize: '14px',
          color: 'var(--neutral-gray-gray-800)',
          overflow: 'auto',
          border: '1px solid var(--semantic-error)'
        }}>
{`import { Search, FilterList, Delete } from '@mui/icons-material';

// Inconsistent sizing and styling
<Search />
<FilterList style={{ fontSize: '20px' }} />
<Delete sx={{ color: 'red' }} />`}
        </pre>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ 
          color: 'var(--neutral-gray-gray-900)', 
          fontSize: '20px', 
          fontWeight: '600',
          marginBottom: '16px'
        }}>
          ✅ After (Centralized Icon Component)
        </h2>
        <pre style={{ 
          backgroundColor: 'var(--semantic-success-light)',
          padding: '16px',
          borderRadius: 'var(--spacing-radius-8px)',
          fontSize: '14px',
          color: 'var(--neutral-gray-gray-800)',
          overflow: 'auto',
          border: '1px solid var(--semantic-success)'
        }}>
{`import { Icon } from './foundations/Icons/Icon';

// Consistent sizing and styling with design tokens
<Icon name="search" />
<Icon name="filter-list" size="lg" />
<Icon name="delete" color="var(--semantic-error)" />`}
        </pre>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ 
          color: 'var(--neutral-gray-gray-900)', 
          fontSize: '20px', 
          fontWeight: '600',
          marginBottom: '16px'
        }}>
          Key Benefits
        </h2>
        <ul style={{ 
          color: 'var(--neutral-gray-gray-700)', 
          fontSize: '16px',
          lineHeight: '1.6',
          paddingLeft: '20px'
        }}>
          <li><strong>Consistency</strong>: All icons follow the same design tokens</li>
          <li><strong>Accessibility</strong>: Built-in ARIA support and semantic structure</li>
          <li><strong>Performance</strong>: Centralized imports reduce bundle size</li>
          <li><strong>Maintainability</strong>: Single source of truth for icon management</li>
          <li><strong>Flexibility</strong>: Easy variant switching (filled, outlined, two-tone)</li>
        </ul>
      </div>

      <div style={{ 
        padding: '24px',
        backgroundColor: 'var(--primary-blue-blue-50)',
        borderRadius: 'var(--spacing-radius-8px)',
        border: '1px solid var(--primary-blue-blue-200)'
      }}>
        <h3 style={{ 
          color: 'var(--primary-blue-blue-700)', 
          fontSize: '18px', 
          fontWeight: '600',
          marginBottom: '12px'
        }}>
          💡 Pro Tip
        </h3>
        <p style={{ 
          color: 'var(--primary-blue-blue-600)', 
          fontSize: '14px',
          margin: 0,
          lineHeight: '1.5'
        }}>
          Use the Storybook controls to explore all 400+ available icons and their variants. 
          Each icon supports three styles: filled (default), outlined, and two-tone.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Step-by-step guide for migrating from direct MUI icon imports to the centralized Icon component.',
      },
    },
  },
};
