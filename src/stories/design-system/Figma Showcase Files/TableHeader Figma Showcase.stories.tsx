import type { Meta, StoryObj } from '@storybook/react';
import { TableHeader } from '../../atoms/building-blocks/TableHeader';

const meta: Meta<typeof TableHeader> = {
  title: 'Design System/Figma Showcase Files/TableHeader Figma Showcase',
  component: TableHeader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# TableHeader - Figma Design Implementation

This showcase demonstrates the exact implementation of all table header variants 
from the Figma designs. Each variant matches the specifications pixel-perfectly.

## Design Variants Included

### Small Size - Light Gray Background
- **Default**: Basic header with title and count tag
- **With Subtext**: Header + subtitle description  
- **With Buttons**: Header + action button group
- **With Subtext and Buttons**: Header + subtitle + actions

### Default Size - Blue-50 Background  
- **Default**: Larger header variant
- **With Subtext**: Header with description (Roboto Flex font)
- **With Buttons**: Header with larger action buttons
- **With Subtext and Buttons**: Full featured header

### Small Size - Blue-50 Background
- All variants in blue background with white tags

## Key Features
- **Pixel Perfect**: Matches Figma designs exactly
- **Typography**: Uses Archivo and Roboto Flex fonts as specified
- **Colors**: Proper background and tag color combinations
- **Spacing**: Exact padding, margins, and gaps from design
- **Icons**: Custom alarm and arrow icons matching design
- **Responsive**: Adapts to different container sizes
        `
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof TableHeader>;

export const FigmaDesignExact: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '20px', 
      padding: '40px',
      backgroundColor: '#ffffff',
      minHeight: '100vh'
    }}>
      {/* Title Section */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '40px',
        borderBottom: '2px solid #E5E7EB',
        paddingBottom: '20px'
      }}>
        <h1 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '32px', 
          fontWeight: '700',
          color: '#1C1C1C',
          fontFamily: 'Archivo, -apple-system, sans-serif'
        }}>
          Table Header - Figma Design Implementation
        </h1>
        <p style={{ 
          margin: '0', 
          fontSize: '18px', 
          color: '#6D7280',
          lineHeight: '1.6',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Exact pixel-perfect implementation of all table header variants from Figma designs.
          Each component matches the original specifications including typography, spacing, colors, and interactions.
        </p>
      </div>

      {/* Small Size - Light Gray Background */}
      <section>
        <h2 style={{ 
          margin: '0 0 24px 0', 
          fontSize: '24px', 
          fontWeight: '600',
          color: '#1C1C1C',
          fontFamily: 'Archivo, -apple-system, sans-serif'
        }}>
          Small Size - Light Gray Background
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
          {/* Small - Default */}
          <div>
            <TableHeader
              title="Team members"
              count={100}
              countLabel="items"
              size="small"
              background="light-gray"
              type="default"
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=default, size=small, bg=light-gray
            </p>
          </div>
          
          {/* Small - With Subtext */}
          <div>
            <TableHeader
              title="Customers"
              subtitle="These companies have purchased in the last 12 months"
              count={100}
              countLabel="items"
              size="small"
              background="light-gray"
              type="default-w-subtext"
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=default-w-subtext, size=small, bg=light-gray
            </p>
          </div>
          
          {/* Small - With Buttons */}
          <div>
            <TableHeader
              title="Team members"
              count={100}
              countLabel="items"
              size="small"
              background="light-gray"
              type="default-w-buttons"
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=default-w-buttons, size=small, bg=light-gray
            </p>
          </div>
          
          {/* Small - With Subtext and Buttons */}
          <div>
            <TableHeader
              title="Customers"
              subtitle="These companies have purchased in the last 12 months"
              count={100}
              countLabel="items"
              size="small"
              background="light-gray"
              type="default-w-subtext-and-buttons"
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=default-w-subtext-and-buttons, size=small, bg=light-gray
            </p>
          </div>
        </div>
      </section>

      {/* Default Size - Blue-50 Background */}
      <section>
        <h2 style={{ 
          margin: '0 0 24px 0', 
          fontSize: '24px', 
          fontWeight: '600',
          color: '#1C1C1C',
          fontFamily: 'Archivo, -apple-system, sans-serif'
        }}>
          Default Size - Blue-50 Background
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
          {/* Default - Default */}
          <div>
            <TableHeader
              title="Team members"
              count={100}
              countLabel="items"
              size="default"
              background="blue-50"
              type="default"
              buttonGroupProps={{ size: 'default' }}
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=default, size=default, bg=blue-50
            </p>
          </div>
          
          {/* Default - With Subtext */}
          <div>
            <TableHeader
              title="Customers"
              subtitle="These companies have purchased in the last 12 months"
              count={100}
              countLabel="items"
              size="default"
              background="blue-50"
              type="default-w-subtext"
              buttonGroupProps={{ size: 'default' }}
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=default-w-subtext, size=default, bg=blue-50
            </p>
          </div>
          
          {/* Default - With Buttons */}
          <div>
            <TableHeader
              title="Team members"
              count={100}
              countLabel="items"
              size="default"
              background="blue-50"
              type="default-w-buttons"
              buttonGroupProps={{ size: 'default' }}
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=default-w-buttons, size=default, bg=blue-50
            </p>
          </div>
          
          {/* Default - With Subtext and Buttons */}
          <div>
            <TableHeader
              title="Customers"
              subtitle="These companies have purchased in the last 12 months"
              count={100}
              countLabel="items"
              size="default"
              background="blue-50"
              type="default-w-subtext-and-buttons"
              buttonGroupProps={{ size: 'default' }}
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=default-w-subtext-and-buttons, size=default, bg=blue-50
            </p>
          </div>
        </div>
      </section>

      {/* Small Size - Blue-50 Background */}
      <section>
        <h2 style={{
          margin: '0 0 24px 0',
          fontSize: '24px',
          fontWeight: '600',
          color: '#1C1C1C',
          fontFamily: 'Archivo, -apple-system, sans-serif'
        }}>
          Small Size - Blue-50 Background
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
          {/* Small Blue - Default */}
          <div>
            <TableHeader
              title="Team members"
              count={100}
              countLabel="items"
              size="small"
              background="blue-50"
              type="default"
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=default, size=small, bg=blue-50
            </p>
          </div>

          {/* Small Blue - With Subtext */}
          <div>
            <TableHeader
              title="Customers"
              subtitle="These companies have purchased in the last 12 months"
              count={100}
              countLabel="items"
              size="small"
              background="blue-50"
              type="default-w-subtext"
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=default-w-subtext, size=small, bg=blue-50
            </p>
          </div>

          {/* Small Blue - With Buttons */}
          <div>
            <TableHeader
              title="Team members"
              count={100}
              countLabel="items"
              size="small"
              background="blue-50"
              type="default-w-buttons"
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=default-w-buttons, size=small, bg=blue-50
            </p>
          </div>

          {/* Small Blue - With Subtext and Buttons */}
          <div>
            <TableHeader
              title="Customers"
              subtitle="These companies have purchased in the last 12 months"
              count={100}
              countLabel="items"
              size="small"
              background="blue-50"
              type="default-w-subtext-and-buttons"
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=default-w-subtext-and-buttons, size=small, bg=blue-50
            </p>
          </div>
        </div>
      </section>

      {/* Black Background Variants */}
      <section>
        <h2 style={{
          margin: '0 0 24px 0',
          fontSize: '24px',
          fontWeight: '600',
          color: '#1C1C1C',
          fontFamily: 'Archivo, -apple-system, sans-serif'
        }}>
          Black Background Variants
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
          {/* Default Size - Black */}
          <div>
            <TableHeader
              title="Team members"
              count={100}
              countLabel="items"
              size="default"
              background="black"
              type="default"
              buttonGroupProps={{ size: 'default' }}
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=default, size=default, bg=black
            </p>
          </div>

          {/* Default Size - Black with Subtext */}
          <div>
            <TableHeader
              title="Customers"
              subtitle="These companies have purchased in the last 12 months"
              count={100}
              countLabel="items"
              size="default"
              background="black"
              type="default-w-subtext"
              buttonGroupProps={{ size: 'default' }}
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=default-w-subtext, size=default, bg=black
            </p>
          </div>

          {/* Default Size - Black with Buttons */}
          <div>
            <TableHeader
              title="Team members"
              count={100}
              countLabel="items"
              size="default"
              background="black"
              type="default-w-buttons"
              buttonGroupProps={{ size: 'default' }}
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=default-w-buttons, size=default, bg=black
            </p>
          </div>

          {/* Default Size - Black with Subtext and Buttons */}
          <div>
            <TableHeader
              title="Customers"
              subtitle="These companies have purchased in the last 12 months"
              count={100}
              countLabel="items"
              size="default"
              background="black"
              type="default-w-subtext-and-buttons"
              buttonGroupProps={{ size: 'default' }}
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=default-w-subtext-and-buttons, size=default, bg=black
            </p>
          </div>

          {/* Small Size - Black */}
          <div>
            <TableHeader
              title="Team members"
              count={100}
              countLabel="items"
              size="small"
              background="black"
              type="default"
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=default, size=small, bg=black
            </p>
          </div>

          {/* Small Size - Black with Subtext */}
          <div>
            <TableHeader
              title="Customers"
              subtitle="These companies have purchased in the last 12 months"
              count={100}
              countLabel="items"
              size="small"
              background="black"
              type="default-w-subtext"
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=default-w-subtext, size=small, bg=black
            </p>
          </div>

          {/* Small Size - Black with Buttons */}
          <div>
            <TableHeader
              title="Team members"
              count={100}
              countLabel="items"
              size="small"
              background="black"
              type="default-w-buttons"
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=default-w-buttons, size=small, bg=black
            </p>
          </div>

          {/* Small Size - Black with Subtext and Buttons */}
          <div>
            <TableHeader
              title="Customers"
              subtitle="These companies have purchased in the last 12 months"
              count={100}
              countLabel="items"
              size="small"
              background="black"
              type="default-w-subtext-and-buttons"
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=default-w-subtext-and-buttons, size=small, bg=black
            </p>
          </div>
        </div>
      </section>

      {/* Implementation Notes */}
      <section style={{ 
        marginTop: '60px',
        padding: '32px',
        backgroundColor: '#F9FAFB',
        borderRadius: '12px',
        border: '1px solid #E5E7EB'
      }}>
        <h3 style={{ 
          margin: '0 0 20px 0', 
          fontSize: '20px', 
          fontWeight: '600',
          color: '#1C1C1C'
        }}>
          Implementation Details
        </h3>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '24px',
          fontSize: '14px',
          lineHeight: '1.6'
        }}>
          <div>
            <h4 style={{ margin: '0 0 12px 0', fontWeight: '600', color: '#374151' }}>Typography</h4>
            <ul style={{ margin: '0', paddingLeft: '20px', color: '#6B7280' }}>
              <li>Title: Archivo font family</li>
              <li>Small size: 19px, line-height 24px</li>
              <li>Default size: 24px, line-height 24px</li>
              <li>Subtitle: Archivo (small) / Roboto Flex (default)</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ margin: '0 0 12px 0', fontWeight: '600', color: '#374151' }}>Colors & Backgrounds</h4>
            <ul style={{ margin: '0', paddingLeft: '20px', color: '#6B7280' }}>
              <li>Light Gray: #F9FAFB background</li>
              <li>Blue-50: #F9F9FE background</li>
              <li>Tag variants adjust per background</li>
              <li>Border: #E5E7EB</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ margin: '0 0 12px 0', fontWeight: '600', color: '#374151' }}>Spacing & Layout</h4>
            <ul style={{ margin: '0', paddingLeft: '20px', color: '#6B7280' }}>
              <li>Small: 12px vertical, 24px horizontal padding</li>
              <li>Default: 20px vertical, 24px horizontal padding</li>
              <li>12px border radius (top only)</li>
              <li>Responsive breakpoints at 768px, 640px, 480px</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ margin: '0 0 12px 0', fontWeight: '600', color: '#374151' }}>Interactive Elements</h4>
            <ul style={{ margin: '0', paddingLeft: '20px', color: '#6B7280' }}>
              <li>Action menu with dots-vertical icon</li>
              <li>Filter buttons with alarm + arrow icons</li>
              <li>Proper focus states and accessibility</li>
              <li>Touch-friendly 44px minimum targets</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: `
**Perfect Figma Implementation**

This story showcases the exact pixel-perfect implementation of all table header variants 
from the Figma designs. Every detail has been carefully matched including:

- Typography (Archivo and Roboto Flex fonts)
- Colors and backgrounds
- Spacing and padding
- Icon styles and sizes
- Interactive states
- Responsive behavior

The implementation supports all combinations of:
- **Sizes**: Small (54-65px height) and Default (70-90px height)
- **Backgrounds**: Light gray (#F9FAFB) and Blue-50 (#F9F9FE)
- **Types**: Default, with subtext, with buttons, with subtext and buttons
- **Content**: Customizable titles, subtitles, counts, and action buttons
        `
      }
    }
  }
};

// Interactive Demo
export const InteractiveDemo: Story = {
  render: () => {
    const handleActionMenu = () => {
      alert('Action menu clicked! In a real app, this would open a dropdown menu.');
    };

    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '40px', 
        padding: '40px',
        backgroundColor: '#ffffff'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2 style={{ 
            margin: '0 0 16px 0', 
            fontSize: '28px', 
            fontWeight: '600',
            color: '#1C1C1C'
          }}>
            Interactive Table Headers
          </h2>
          <p style={{ 
            margin: '0', 
            fontSize: '16px', 
            color: '#6D7280',
            lineHeight: '1.6'
          }}>
            Click the action menu buttons to see interactions in action
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <TableHeader
            title="Interactive Demo"
            subtitle="Click the action menu to see interaction"
            count={42}
            countLabel="interactive items"
            size="default"
            background="blue-50"
            type="default-w-subtext-and-buttons"
            onActionMenuClick={handleActionMenu}
            buttonGroupProps={{ size: 'default' }}
          />
          
          <TableHeader
            title="Another Example"
            count={25}
            countLabel="examples"
            size="small"
            background="light-gray"
            type="default-w-buttons"
            onActionMenuClick={handleActionMenu}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo showing click handlers and real-world usage patterns.'
      }
    }
  }
};
