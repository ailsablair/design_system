import type { Meta, StoryObj } from '@storybook/react';
import { Icon, IconName, IconSize } from './Icon';
import { MaterialDesignIconName } from './MaterialDesignIcons';
import { MaterialIconFilledName, MaterialIconOutlinedName, MaterialIconTwoToneName } from './MaterialUIIcons';
import './tokens.css';

const meta: Meta<typeof Icon> = {
  title: 'Foundations/Icons',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Echo Design System icon library provides a comprehensive collection of **295+ UI icons** from
the complete Material UI Icons library and Material Design Icons. All icons use standardized sizing, colors, and
opacity levels through design tokens.

## Icon Libraries (295+ Total Icons)

### Material UI Filled Icons (100+ icons)
Standard solid Material Design icons:
- **Navigation**: home, search, dashboard, menu, arrow-back, arrow-forward, directions, map, place
- **Actions**: add, remove, edit, delete, save, refresh, download, upload, share, print, build, settings
- **Communication**: email, phone, notifications, chat, comment, forum, send, inbox, drafts
- **Content**: star, favorite, bookmark, trending-up, history, assignment, description, list, view-list
- **Files & Media**: folder, insert-drive-file, image, photo, photo-library, video-library, music-note
- **User & Account**: person, account-circle, account-box, group, work, exit-to-app, lock, visibility
- **System & Status**: info, warning, error, check-circle, help, bug-report, code, security, verified
- **Time & Analytics**: calendar-today, schedule, bar-chart, pie-chart, timeline
- **Commerce**: shopping-cart, payment
- **Network**: language, public, wifi, bluetooth, battery-full, signal-cellular-alt
- **Media Controls**: play-arrow, pause, stop, skip-next, volume-up, mic, videocam, camera-alt
- **Design**: color-lens, palette, brush, format-paint

### Material UI Outlined Icons (100+ icons)
Outlined variant of all Material Design icons:
- Same categories as Filled, but with -outlined suffix
- Examples: home-outlined, search-outlined, settings-outlined, star-outlined
- Clean, modern appearance with outline styling

### Material UI TwoTone Icons (100+ icons)
Two-color variant of all Material Design icons:
- Same categories as Filled, but with -two-tone suffix
- Examples: home-two-tone, search-two-tone, settings-two-tone, star-two-tone
- Enhanced visual depth with dual-color treatment

### Material Design Icons (18+ icons)
High-quality outline icons extracted from Figma Material Design collection:
- **Advanced Actions**: rocket-outline, chat-plus-outline, star-plus-outline
- **File Operations**: file-export-outline, folder-search-outline, clipboard-list-outline
- **User Management**: account-settings-outline, account-cog-outline, handshake-outline
- **UI Elements**: tooltip-text-outline, view-gallery-outline, emoticon-cool-outline
- **Navigation**: arrow-bottom-right-bold-outline, map-marker-star-outline
- **Media**: movie-cog-outline, coffee-outline, message-badge-outline
- **Shapes**: pentagon-outline

## Design Tokens

### Sizes
- **xs**: 12px - Very small icons for compact interfaces
- **sm**: 14px - Small icons for dense layouts  
- **md**: 16px - Default size for most use cases
- **lg**: 20px - Large icons for prominence
- **xl**: 24px - Extra large for headers and emphasis
- **2xl**: 32px - Maximum size for hero elements

### Opacity Levels
- **subtle**: 40% opacity for background elements
- **medium**: 60% opacity for secondary content (default)
- **strong**: 70% opacity for primary interactive elements
- **full**: 100% opacity for maximum visibility

## Usage Guidelines

### Material UI Best Practices
- Use **kebab-case** naming (arrow-back, check-circle, location-on)
- Default opacity is **medium** (60%) for interface elements
- Use **strong** opacity (70%) for primary actions
- Icons inherit color via \`currentColor\` by default
- Always provide \`aria-label\` for accessibility

### Custom vs Material UI
- **Custom icons**: Use for brand-specific or unique design needs
- **Material UI icons**: Use for standard interface patterns and familiarity
- Both types follow the same sizing and styling conventions

## Icon Detection
The component automatically detects icon type:
\`\`\`tsx
<Icon name="alarm" />        // Custom icon
<Icon name="home" />         // Material UI icon  
<Icon name="close-custom" /> // Custom icon (explicit)
<Icon name="close" />        // Material UI icon
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: [
        // Material UI Filled icons (100+)
        'home', 'search', 'dashboard', 'menu', 'arrow-back', 'arrow-forward', 'arrow-upward', 'arrow-downward',
        'expand-more', 'expand-less', 'directions', 'map', 'place', 'location-on', 'add', 'remove', 'edit',
        'delete', 'save', 'refresh', 'download', 'upload', 'share', 'print', 'build', 'settings', 'check',
        'close', 'more-vert', 'more-horiz', 'filter-list', 'sort', 'email', 'phone', 'notifications', 'chat',
        'comment', 'forum', 'send', 'inbox', 'drafts', 'mark-email-read', 'unsubscribe', 'thumb-up', 'thumb-down',
        'star', 'favorite', 'bookmark', 'trending-up', 'history', 'assignment', 'description', 'list', 'view-list',
        'view-module', 'grid-view', 'table-chart', 'folder', 'insert-drive-file', 'image', 'photo', 'photo-library',
        'collections', 'video-library', 'music-note', 'attach-file', 'cloud-upload', 'cloud-download', 'person',
        'account-circle', 'account-box', 'group', 'work', 'exit-to-app', 'lock', 'lock-open', 'visibility',
        'visibility-off', 'security', 'shield', 'verified', 'info', 'warning', 'error', 'check-circle', 'help',
        'bug-report', 'code', 'calendar-today', 'schedule', 'bar-chart', 'pie-chart', 'timeline', 'shopping-cart',
        'payment', 'language', 'public', 'wifi', 'bluetooth', 'battery-full', 'signal-cellular-alt', 'play-arrow',
        'pause', 'stop', 'skip-next', 'skip-previous', 'volume-up', 'volume-off', 'mic', 'mic-off', 'videocam',
        'videocam-off', 'camera-alt', 'color-lens', 'palette', 'brush', 'format-paint',

        // Material UI Outlined icons (100+)
        'home-outlined', 'search-outlined', 'dashboard-outlined', 'menu-outlined', 'arrow-back-outlined',
        'arrow-forward-outlined', 'arrow-upward-outlined', 'arrow-downward-outlined', 'expand-more-outlined',
        'expand-less-outlined', 'directions-outlined', 'map-outlined', 'place-outlined', 'location-on-outlined',
        'add-outlined', 'remove-outlined', 'edit-outlined', 'delete-outlined', 'save-outlined', 'refresh-outlined',
        'download-outlined', 'upload-outlined', 'share-outlined', 'print-outlined', 'build-outlined', 'settings-outlined',
        'check-outlined', 'close-outlined', 'more-vert-outlined', 'more-horiz-outlined', 'filter-list-outlined',
        'sort-outlined', 'email-outlined', 'phone-outlined', 'notifications-outlined', 'chat-outlined', 'comment-outlined',
        'forum-outlined', 'send-outlined', 'inbox-outlined', 'drafts-outlined', 'mark-email-read-outlined',
        'unsubscribe-outlined', 'thumb-up-outlined', 'thumb-down-outlined', 'star-outlined', 'favorite-outlined',
        'bookmark-outlined', 'trending-up-outlined', 'history-outlined', 'assignment-outlined', 'description-outlined',
        'list-outlined', 'view-list-outlined', 'view-module-outlined', 'grid-view-outlined', 'table-chart-outlined',
        'folder-outlined', 'insert-drive-file-outlined', 'image-outlined', 'photo-outlined', 'photo-library-outlined',
        'collections-outlined', 'video-library-outlined', 'music-note-outlined', 'attach-file-outlined',
        'cloud-upload-outlined', 'cloud-download-outlined', 'person-outlined', 'account-circle-outlined',
        'account-box-outlined', 'group-outlined', 'work-outlined', 'exit-to-app-outlined', 'lock-outlined',
        'lock-open-outlined', 'visibility-outlined', 'visibility-off-outlined', 'security-outlined', 'shield-outlined',
        'verified-outlined', 'info-outlined', 'warning-outlined', 'error-outlined', 'check-circle-outlined',
        'help-outlined', 'bug-report-outlined', 'code-outlined', 'calendar-today-outlined', 'schedule-outlined',
        'bar-chart-outlined', 'pie-chart-outlined', 'timeline-outlined', 'shopping-cart-outlined', 'payment-outlined',
        'language-outlined', 'public-outlined', 'wifi-outlined', 'bluetooth-outlined', 'battery-full-outlined',
        'signal-cellular-alt-outlined', 'play-arrow-outlined', 'pause-outlined', 'stop-outlined', 'skip-next-outlined',
        'skip-previous-outlined', 'volume-up-outlined', 'volume-off-outlined', 'mic-outlined', 'mic-off-outlined',
        'videocam-outlined', 'videocam-off-outlined', 'camera-alt-outlined', 'color-lens-outlined', 'palette-outlined',
        'brush-outlined', 'format-paint-outlined',

        // Material UI TwoTone icons (100+)
        'home-two-tone', 'search-two-tone', 'dashboard-two-tone', 'menu-two-tone', 'arrow-back-two-tone',
        'arrow-forward-two-tone', 'arrow-upward-two-tone', 'arrow-downward-two-tone', 'expand-more-two-tone',
        'expand-less-two-tone', 'directions-two-tone', 'map-two-tone', 'place-two-tone', 'location-on-two-tone',
        'add-two-tone', 'remove-two-tone', 'edit-two-tone', 'delete-two-tone', 'save-two-tone', 'refresh-two-tone',
        'download-two-tone', 'upload-two-tone', 'share-two-tone', 'print-two-tone', 'build-two-tone', 'settings-two-tone',
        'check-two-tone', 'close-two-tone', 'more-vert-two-tone', 'more-horiz-two-tone', 'filter-list-two-tone',
        'sort-two-tone', 'email-two-tone', 'phone-two-tone', 'notifications-two-tone', 'chat-two-tone', 'comment-two-tone',
        'forum-two-tone', 'send-two-tone', 'inbox-two-tone', 'drafts-two-tone', 'mark-email-read-two-tone',
        'unsubscribe-two-tone', 'thumb-up-two-tone', 'thumb-down-two-tone', 'star-two-tone', 'favorite-two-tone',
        'bookmark-two-tone', 'trending-up-two-tone', 'history-two-tone', 'assignment-two-tone', 'description-two-tone',
        'list-two-tone', 'view-list-two-tone', 'view-module-two-tone', 'grid-view-two-tone', 'table-chart-two-tone',
        'folder-two-tone', 'insert-drive-file-two-tone', 'image-two-tone', 'photo-two-tone', 'photo-library-two-tone',
        'collections-two-tone', 'video-library-two-tone', 'music-note-two-tone', 'attach-file-two-tone',
        'cloud-upload-two-tone', 'cloud-download-two-tone', 'person-two-tone', 'account-circle-two-tone',
        'account-box-two-tone', 'group-two-tone', 'work-two-tone', 'exit-to-app-two-tone', 'lock-two-tone',
        'lock-open-two-tone', 'visibility-two-tone', 'visibility-off-two-tone', 'security-two-tone', 'shield-two-tone',
        'verified-two-tone', 'info-two-tone', 'warning-two-tone', 'error-two-tone', 'check-circle-two-tone',
        'help-two-tone', 'bug-report-two-tone', 'code-two-tone', 'calendar-today-two-tone', 'schedule-two-tone',
        'bar-chart-two-tone', 'pie-chart-two-tone', 'timeline-two-tone', 'shopping-cart-two-tone', 'payment-two-tone',
        'language-two-tone', 'public-two-tone', 'wifi-two-tone', 'bluetooth-two-tone', 'battery-full-two-tone',
        'signal-cellular-alt-two-tone', 'play-arrow-two-tone', 'pause-two-tone', 'stop-two-tone', 'skip-next-two-tone',
        'skip-previous-two-tone', 'volume-up-two-tone', 'volume-off-two-tone', 'mic-two-tone', 'mic-off-two-tone',
        'videocam-two-tone', 'videocam-off-two-tone', 'camera-alt-two-tone', 'color-lens-two-tone', 'palette-two-tone',
        'brush-two-tone', 'format-paint-two-tone',

        // Material Design icons from Figma (18+)
        'emoticon-cool-outline', 'message-badge-outline', 'map-marker-star-outline', 'movie-cog-outline',
        'star-plus-outline', 'pentagon-outline', 'file-export-outline', 'account-settings-outline',
        'arrow-bottom-right-bold-outline', 'account-cog-outline', 'rocket-outline', 'coffee-outline',
        'view-gallery-outline', 'chat-plus-outline', 'folder-search-outline', 'tooltip-text-outline',
        'handshake-outline', 'clipboard-list-outline'
      ],
      description: 'Icon name (Material UI filled/outlined/two-tone, or Material Design)',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Size using design tokens',
    },
    color: {
      control: { type: 'text' },
      description: 'Color (CSS color or design token)',
    },
    opacity: {
      control: { type: 'select' },
      options: ['subtle', 'medium', 'strong', 'full'],
      description: 'Opacity level using design tokens',
    },
    'aria-label': {
      control: { type: 'text' },
      description: 'Accessibility label for screen readers',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

// Default story with Material UI icon
export const Default: Story = {
  args: {
    name: 'home',
    size: 'md',
    opacity: 'medium',
    'aria-label': 'Home',
  },
};

// Custom icons showcase
export const CustomIcons: Story = {
  render: () => {
    const customIcons: CustomIconName[] = ['alarm', 'close-circle', 'close-custom', 'chevron-up-custom', 'chevron-down-custom'];
    
    return (
      <div style={{ padding: '24px' }}>
        <h3 style={{ 
          marginBottom: '20px', 
          color: 'var(--neutral-gray-gray-900)',
          fontFamily: 'var(--font-family-base)'
        }}>
          Custom Icons (5)
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', 
          gap: '20px',
          fontFamily: 'var(--font-family-base)'
        }}>
          {customIcons.map((iconName) => (
            <div 
              key={iconName}
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                textAlign: 'center',
                padding: '16px',
                border: '1px solid var(--neutral-gray-gray-300)',
                borderRadius: 'var(--spacing-radius-8px)',
                backgroundColor: 'var(--base-white)'
              }}
            >
              <Icon 
                name={iconName} 
                size="xl" 
                opacity="strong"
                aria-label={`${iconName} icon`}
                style={{ marginBottom: '12px', color: 'var(--primary-blue-blue-500)' }}
              />
              <h4 style={{ 
                margin: '0 0 6px 0', 
                fontSize: '13px', 
                fontWeight: '600',
                color: 'var(--neutral-gray-gray-900)'
              }}>
                {iconName}
              </h4>
              <span style={{ 
                fontSize: '11px', 
                color: 'var(--neutral-gray-gray-500)',
                fontStyle: 'italic'
              }}>
                Custom SVG
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Hand-crafted SVG icons designed specifically for the Echo Design System.',
      },
    },
  },
};

// Material UI icons showcase 
export const MaterialUIIcons: Story = {
  render: () => {
    const materialIcons: { name: MaterialIconName; category: string }[] = [
      // Navigation
      { name: 'home', category: 'Navigation' },
      { name: 'menu', category: 'Navigation' },
      { name: 'dashboard', category: 'Navigation' },
      { name: 'arrow-back', category: 'Navigation' },
      { name: 'arrow-forward', category: 'Navigation' },
      
      // Actions
      { name: 'search', category: 'Actions' },
      { name: 'edit', category: 'Actions' },
      { name: 'delete', category: 'Actions' },
      { name: 'add', category: 'Actions' },
      { name: 'close', category: 'Actions' },
      { name: 'refresh', category: 'Actions' },
      { name: 'save', category: 'Actions' },
      
      // Communication
      { name: 'email', category: 'Communication' },
      { name: 'phone', category: 'Communication' },
      { name: 'notifications', category: 'Communication' },
      { name: 'share', category: 'Communication' },
      
      // Content
      { name: 'star', category: 'Content' },
      { name: 'favorite', category: 'Content' },
      { name: 'download', category: 'Content' },
      { name: 'upload', category: 'Content' },
      
      // Files
      { name: 'folder', category: 'Files' },
      { name: 'insert-drive-file', category: 'Files' },
      { name: 'image', category: 'Files' },
      { name: 'attach-file', category: 'Files' },
      
      // User
      { name: 'person', category: 'User' },
      { name: 'account-circle', category: 'User' },
      { name: 'lock', category: 'User' },
      { name: 'visibility', category: 'User' },
      
      // System
      { name: 'settings', category: 'System' },
      { name: 'help', category: 'System' },
      { name: 'info', category: 'System' },
      { name: 'warning', category: 'System' },
      { name: 'error', category: 'System' },
      { name: 'check-circle', category: 'System' },
    ];

    const categories = [...new Set(materialIcons.map(icon => icon.category))];
    
    return (
      <div style={{ padding: '24px', fontFamily: 'var(--font-family-base)' }}>
        <h3 style={{ 
          marginBottom: '24px', 
          color: 'var(--neutral-gray-gray-900)'
        }}>
          Material UI Icons (36 shown)
        </h3>
        
        {categories.map(category => (
          <div key={category} style={{ marginBottom: '32px' }}>
            <h4 style={{ 
              marginBottom: '16px', 
              color: 'var(--neutral-gray-gray-700)',
              fontSize: '14px',
              fontWeight: '600'
            }}>
              {category}
            </h4>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
              gap: '16px'
            }}>
              {materialIcons
                .filter(icon => icon.category === category)
                .map(({ name }) => (
                  <div 
                    key={name}
                    style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      textAlign: 'center',
                      padding: '12px 8px',
                      border: '1px solid var(--neutral-gray-gray-200)',
                      borderRadius: 'var(--spacing-radius-6px)',
                      backgroundColor: 'var(--base-white)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <Icon 
                      name={name} 
                      size="lg" 
                      opacity="strong"
                      aria-label={`${name} icon`}
                      style={{ marginBottom: '8px', color: 'var(--primary-blue-blue-500)' }}
                    />
                    <span style={{ 
                      fontSize: '11px', 
                      color: 'var(--neutral-gray-gray-600)',
                      fontWeight: '500',
                      lineHeight: '1.2'
                    }}>
                      {name}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Material Design icons organized by category. These follow Google\'s Material Design guidelines.',
      },
    },
  },
};

// Size comparison
export const Sizes: Story = {
  render: () => {
    const sizes: IconSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
    
    return (
      <div style={{ padding: '24px' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '32px',
          fontFamily: 'var(--font-family-base)',
          marginBottom: '32px'
        }}>
          <h4 style={{ margin: 0, color: 'var(--neutral-gray-gray-900)' }}>Custom Icon</h4>
          {sizes.map((size) => (
            <div 
              key={size}
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: '8px'
              }}
            >
              <Icon 
                name="alarm" 
                size={size} 
                color="var(--primary-blue-blue-500)"
                aria-label={`Alarm icon ${size} size`}
              />
              <span style={{ 
                fontSize: '12px', 
                color: 'var(--neutral-gray-gray-600)',
                fontWeight: '500'
              }}>
                {size}
              </span>
            </div>
          ))}
        </div>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '32px',
          fontFamily: 'var(--font-family-base)'
        }}>
          <h4 style={{ margin: 0, color: 'var(--neutral-gray-gray-900)' }}>Material UI Icon</h4>
          {sizes.map((size) => (
            <div 
              key={size}
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: '8px'
              }}
            >
              <Icon 
                name="home" 
                size={size} 
                color="var(--primary-blue-blue-500)"
                aria-label={`Home icon ${size} size`}
              />
              <span style={{ 
                fontSize: '12px', 
                color: 'var(--neutral-gray-gray-600)',
                fontWeight: '500'
              }}>
                {size}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Size comparison between custom and Material UI icons across all available sizes.',
      },
    },
  },
};

// Practical usage examples
export const UsageExamples: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '32px',
      padding: '24px',
      fontFamily: 'var(--font-family-base)'
    }}>
      {/* Navigation Button */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h4 style={{ margin: 0, color: 'var(--neutral-gray-gray-900)' }}>Navigation Button</h4>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 16px',
          backgroundColor: 'var(--primary-blue-blue-500)',
          color: 'white',
          border: 'none',
          borderRadius: 'var(--spacing-radius-6px)',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          width: 'fit-content'
        }}>
          <Icon name="home" size="sm" opacity="full" aria-label="Home" />
          Go Home
        </button>
      </div>

      {/* Search Input */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h4 style={{ margin: 0, color: 'var(--neutral-gray-gray-900)' }}>Search Input</h4>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '12px 16px',
          border: '1px solid var(--neutral-gray-gray-300)',
          borderRadius: 'var(--spacing-radius-6px)',
          width: '280px'
        }}>
          <Icon 
            name="search" 
            size="md" 
            color="var(--neutral-gray-gray-600)" 
            opacity="medium"
            aria-label="Search"
          />
          <input 
            type="text" 
            placeholder="Search anything..." 
            style={{
              border: 'none',
              outline: 'none',
              flex: 1,
              fontSize: '14px',
              color: 'var(--neutral-gray-gray-900)'
            }}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h4 style={{ margin: 0, color: 'var(--neutral-gray-gray-900)' }}>Action Buttons</h4>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '36px',
            height: '36px',
            backgroundColor: 'var(--semantic-success-500)',
            border: 'none',
            borderRadius: 'var(--spacing-radius-6px)',
            cursor: 'pointer',
            color: 'white'
          }}>
            <Icon name="check" size="md" opacity="full" aria-label="Confirm" />
          </button>
          
          <button style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '36px',
            height: '36px',
            backgroundColor: 'var(--semantic-error-500)',
            border: 'none',
            borderRadius: 'var(--spacing-radius-6px)',
            cursor: 'pointer',
            color: 'white'
          }}>
            <Icon name="close" size="md" opacity="full" aria-label="Cancel" />
          </button>
          
          <button style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '36px',
            height: '36px',
            backgroundColor: 'var(--primary-blue-blue-500)',
            border: 'none',
            borderRadius: 'var(--spacing-radius-6px)',
            cursor: 'pointer',
            color: 'white'
          }}>
            <Icon name="edit" size="md" opacity="full" aria-label="Edit" />
          </button>
        </div>
      </div>

      {/* Notification with custom icon */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h4 style={{ margin: 0, color: 'var(--neutral-gray-gray-900)' }}>Notification Card</h4>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          padding: '16px',
          backgroundColor: 'var(--primary-blue-blue-100)',
          border: '1px solid var(--primary-blue-blue-300)',
          borderRadius: 'var(--spacing-radius-8px)',
          width: 'fit-content'
        }}>
          <Icon 
            name="alarm" 
            size="lg" 
            color="var(--primary-blue-blue-500)" 
            opacity="strong"
            aria-label="Notification"
          />
          <div>
            <h5 style={{ 
              margin: '0 0 4px 0', 
              fontSize: '14px', 
              fontWeight: '600',
              color: 'var(--primary-blue-blue-700)'
            }}>
              New Notification
            </h5>
            <p style={{ 
              margin: 0, 
              fontSize: '13px', 
              color: 'var(--primary-blue-blue-600)'
            }}>
              You have 3 unread messages
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world usage examples showing both custom and Material UI icons in context.',
      },
    },
  },
};

// Color and opacity showcase
export const ColorAndOpacity: Story = {
  render: () => {
    const colors = [
      { name: 'Primary Blue', value: 'var(--primary-blue-blue-500)' },
      { name: 'Success', value: 'var(--semantic-success-500)' },
      { name: 'Error', value: 'var(--semantic-error-500)' },
      { name: 'Warning', value: 'var(--semantic-warning-500)' },
      { name: 'Neutral', value: 'var(--neutral-gray-gray-600)' },
    ];
    
    const opacities: Array<'subtle' | 'medium' | 'strong' | 'full'> = ['subtle', 'medium', 'strong', 'full'];
    
    return (
      <div style={{ padding: '24px', fontFamily: 'var(--font-family-base)' }}>
        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ 
            marginBottom: '16px', 
            color: 'var(--neutral-gray-gray-900)'
          }}>
            Semantic Colors
          </h4>
          <div style={{ 
            display: 'flex', 
            gap: '24px',
            flexWrap: 'wrap'
          }}>
            {colors.map((color) => (
              <div 
                key={color.name}
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: '8px'
                }}
              >
                <Icon 
                  name="star" 
                  size="lg" 
                  color={color.value}
                  opacity="strong"
                  aria-label={`Star icon in ${color.name}`}
                />
                <span style={{ 
                  fontSize: '12px', 
                  color: 'var(--neutral-gray-gray-600)',
                  fontWeight: '500',
                  textAlign: 'center'
                }}>
                  {color.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h4 style={{ 
            marginBottom: '16px', 
            color: 'var(--neutral-gray-gray-900)'
          }}>
            Opacity Levels
          </h4>
          <div style={{ 
            display: 'flex', 
            gap: '24px'
          }}>
            {opacities.map((opacity) => (
              <div 
                key={opacity}
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: '8px'
                }}
              >
                <Icon 
                  name="favorite" 
                  size="lg" 
                  opacity={opacity}
                  color="var(--semantic-error-500)"
                  aria-label={`Heart icon with ${opacity} opacity`}
                />
                <span style={{ 
                  fontSize: '12px', 
                  color: 'var(--neutral-gray-gray-600)',
                  fontWeight: '500'
                }}>
                  {opacity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Color and opacity variations using design system tokens.',
      },
    },
  },
};
