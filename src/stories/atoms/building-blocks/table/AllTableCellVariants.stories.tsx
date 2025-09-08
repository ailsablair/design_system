import type { Meta, StoryObj } from '@storybook/react';
import { TableCell } from './TableCell';

const meta: Meta<typeof TableCell> = {
  title: 'Atoms/ZZ 🧱 Building Blocks/Table/All Table Cell Variants',
  component: TableCell,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Complete Table Cell Implementation - All Variants

This comprehensive showcase demonstrates every table cell variant implemented from the Figma designs:

## Avatar-Based Cells
- **Avatar with Title**: Checkbox/Toggle + Avatar + Name
- **Avatar with Subtext**: Checkbox/Toggle + Avatar + Name + Email

## Payment Method Cells  
- **Payment with Select**: Checkbox + Payment Icon + Card Info
- **Payment with Expiry**: Checkbox + Payment Icon + Card Info + Expiry
- **Payment with Toggle**: Toggle + Payment Icon + Card Info
- **Payment with Toggle + Expiry**: Toggle + Payment Icon + Card Info + Expiry

## File Cells
- **File with Select**: Checkbox + File Icon + Filename
- **File with Size**: Checkbox + File Icon + Filename + File Size
- **File with Toggle**: Toggle + File Icon + Filename  
- **File with Toggle + Size**: Toggle + File Icon + Filename + File Size

## States & Sizes
- **Sizes**: Default (72px) and Small (52px)
- **States**: Default, Disabled, and Hover backgrounds
- **Controls**: Checkbox and Toggle variants with proper state handling

All variants are pixel-perfect implementations matching the provided Figma designs.
        `
      }
    }
  },
};

export default meta;
type Story = StoryObj<typeof TableCell>;

export const AllVariantsOverview: Story = {
  render: () => (
    <div style={{ 
      padding: '32px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#fafafa',
      minHeight: '100vh'
    }}>
      <h1 style={{ 
        fontSize: '32px', 
        fontWeight: '700', 
        margin: '0 0 16px 0',
        color: '#1a1a1a',
        textAlign: 'center'
      }}>
        Complete Table Cell Variants - Figma Implementation
      </h1>
      
      <p style={{ 
        fontSize: '18px', 
        color: '#666',
        margin: '0 0 48px 0',
        lineHeight: '1.6',
        textAlign: 'center',
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        Comprehensive implementation of all table cell variants from the Figma designs, 
        including avatar-based cells, payment method cells, and file cells with both 
        checkbox and toggle controls.
      </p>

      {/* Avatar Cells Section */}
      <div style={{ marginBottom: '64px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          margin: '0 0 32px 0',
          color: '#1a1a1a'
        }}>
          Avatar-Based Table Cells
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          marginBottom: '32px'
        }}>
          {/* Disabled State */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '500', margin: '0 0 16px 0', color: '#333' }}>
              Disabled State
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <TableCell size="default" type="avatar-w-title" background="disabled" title="Olivia Rhye" checked={false} disabled={true} />
              <TableCell size="default" type="avatar-w-subtext" background="disabled" title="Olivia Rhye" subtext="olivia@email.com" checked={false} disabled={true} />
              <TableCell size="default" type="toggle-avatar-w-title" background="disabled" title="Olivia Rhye" enabled={true} disabled={true} />
              <TableCell size="default" type="toggle-avatar-w-subtext" background="disabled" title="Olivia Rhye" subtext="olivia@email.com" enabled={true} disabled={true} />
            </div>
          </div>

          {/* Hover State */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '500', margin: '0 0 16px 0', color: '#333' }}>
              Hover State (Active)
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <TableCell size="default" type="avatar-w-title" background="hover" title="Olivia Rhye" checked={true} />
              <TableCell size="default" type="avatar-w-subtext" background="hover" title="Olivia Rhye" subtext="olivia@email.com" checked={true} />
              <TableCell size="default" type="toggle-avatar-w-title" background="hover" title="Olivia Rhye" enabled={true} />
              <TableCell size="default" type="toggle-avatar-w-subtext" background="hover" title="Olivia Rhye" subtext="olivia@email.com" enabled={true} />
            </div>
          </div>

          {/* Small Size */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '500', margin: '0 0 16px 0', color: '#333' }}>
              Small Size (52px)
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <TableCell size="small" type="avatar-w-title" background="hover" title="Olivia Rhye" checked={true} />
              <TableCell size="small" type="avatar-w-subtext" background="hover" title="Olivia Rhye" subtext="olivia@email.com" checked={true} />
              <TableCell size="small" type="toggle-avatar-w-title" background="hover" title="Olivia Rhye" enabled={true} />
              <TableCell size="small" type="toggle-avatar-w-subtext" background="hover" title="Olivia Rhye" subtext="olivia@email.com" enabled={true} />
            </div>
          </div>
        </div>
      </div>

      {/* Payment Cells Section */}
      <div style={{ marginBottom: '64px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          margin: '0 0 32px 0',
          color: '#1a1a1a'
        }}>
          Payment Method Table Cells
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          marginBottom: '32px'
        }}>
          {/* Checkbox Variants */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '500', margin: '0 0 16px 0', color: '#333' }}>
              Checkbox Variants
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <TableCell size="default" type="payment-w-select" background="hover" paymentMethod="visa" checked={true} />
              <TableCell size="default" type="payment-w-select-and-expiry" background="hover" paymentMethod="visa" paymentExpiry="Expiry 01/2001" checked={true} />
              <TableCell size="small" type="payment-w-select" background="hover" paymentMethod="visa" checked={true} />
              <TableCell size="small" type="payment-w-select-and-expiry" background="hover" paymentMethod="visa" paymentExpiry="Expiry 01/2001" checked={true} />
            </div>
          </div>

          {/* Toggle Variants */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '500', margin: '0 0 16px 0', color: '#333' }}>
              Toggle Variants
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <TableCell size="default" type="payment-w-toggle" background="hover" paymentMethod="visa" enabled={true} />
              <TableCell size="default" type="payment-w-toggle-and-expiry" background="hover" paymentMethod="visa" paymentExpiry="Expiry 01/2001" enabled={true} />
              <TableCell size="small" type="payment-w-toggle" background="hover" paymentMethod="visa" enabled={true} />
              <TableCell size="small" type="payment-w-toggle-and-expiry" background="hover" paymentMethod="visa" paymentExpiry="Expiry 01/2001" enabled={true} />
            </div>
          </div>

          {/* Disabled State */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '500', margin: '0 0 16px 0', color: '#333' }}>
              Disabled State
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <TableCell size="default" type="payment-w-select" background="disabled" paymentMethod="visa" checked={false} disabled={true} />
              <TableCell size="default" type="payment-w-select-and-expiry" background="disabled" paymentMethod="visa" paymentExpiry="Expiry 01/2001" checked={false} disabled={true} />
              <TableCell size="default" type="payment-w-toggle" background="disabled" paymentMethod="visa" enabled={true} disabled={true} />
              <TableCell size="default" type="payment-w-toggle-and-expiry" background="disabled" paymentMethod="visa" paymentExpiry="Expiry 01/2001" enabled={true} disabled={true} />
            </div>
          </div>
        </div>
      </div>

      {/* File Cells Section */}
      <div style={{ marginBottom: '64px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          margin: '0 0 32px 0',
          color: '#1a1a1a'
        }}>
          File Table Cells
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          marginBottom: '32px'
        }}>
          {/* Checkbox Variants */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '500', margin: '0 0 16px 0', color: '#333' }}>
              Checkbox Variants
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <TableCell size="default" type="file-w-select" background="hover" fileType="pdf" fileName="thisisafilename.pdf" checked={true} />
              <TableCell size="default" type="file-w-select-and-expiry" background="hover" fileType="pdf" fileName="thisisafilename.pdf" fileSize="200 MB" checked={true} />
              <TableCell size="small" type="file-w-select" background="hover" fileType="pdf" fileName="thisisafilename.pdf" checked={true} />
              <TableCell size="small" type="file-w-select-and-expiry" background="hover" fileType="pdf" fileName="thisisafilename.pdf" fileSize="200 MB" checked={true} />
            </div>
          </div>

          {/* Toggle Variants */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '500', margin: '0 0 16px 0', color: '#333' }}>
              Toggle Variants
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <TableCell size="default" type="file-w-toggle" background="hover" fileType="pdf" fileName="thisisafilename.pdf" enabled={true} />
              <TableCell size="default" type="file-w-toggle-and-expiry" background="hover" fileType="pdf" fileName="thisisafilename.pdf" fileSize="200 MB" enabled={true} />
              <TableCell size="small" type="file-w-toggle" background="hover" fileType="pdf" fileName="thisisafilename.pdf" enabled={true} />
              <TableCell size="small" type="file-w-toggle-and-expiry" background="hover" fileType="pdf" fileName="thisisafilename.pdf" fileSize="200 MB" enabled={true} />
            </div>
          </div>

          {/* Disabled State */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '500', margin: '0 0 16px 0', color: '#333' }}>
              Disabled State
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <TableCell size="default" type="file-w-select" background="disabled" fileType="pdf" fileName="thisisafilename.pdf" checked={false} disabled={true} />
              <TableCell size="default" type="file-w-select-and-expiry" background="disabled" fileType="pdf" fileName="thisisafilename.pdf" fileSize="200 MB" checked={false} disabled={true} />
              <TableCell size="default" type="file-w-toggle" background="disabled" fileType="pdf" fileName="thisisafilename.pdf" enabled={true} disabled={true} />
              <TableCell size="default" type="file-w-toggle-and-expiry" background="disabled" fileType="pdf" fileName="thisisafilename.pdf" fileSize="200 MB" enabled={true} disabled={true} />
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Notes */}
      <div style={{ 
        backgroundColor: 'white', 
        padding: '32px', 
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        border: '1px solid #e5e7eb'
      }}>
        <h2 style={{ 
          fontSize: '20px', 
          fontWeight: '600', 
          margin: '0 0 16px 0',
          color: '#1a1a1a'
        }}>
          Implementation Features
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          fontSize: '14px',
          lineHeight: '1.6'
        }}>
          <div>
            <h4 style={{ fontWeight: '600', margin: '0 0 8px 0', color: '#333' }}>Design Fidelity</h4>
            <ul style={{ margin: 0, paddingLeft: '18px', color: '#666' }}>
              <li>Pixel-perfect Figma implementation</li>
              <li>Exact spacing and typography</li>
              <li>Matching color schemes and states</li>
              <li>Proper control sizes and positioning</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ fontWeight: '600', margin: '0 0 8px 0', color: '#333' }}>Accessibility</h4>
            <ul style={{ margin: 0, paddingLeft: '18px', color: '#666' }}>
              <li>Keyboard navigation support</li>
              <li>Focus indicators and states</li>
              <li>Screen reader compatibility</li>
              <li>ARIA labels and roles</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ fontWeight: '600', margin: '0 0 8px 0', color: '#333' }}>Responsiveness</h4>
            <ul style={{ margin: 0, paddingLeft: '18px', color: '#666' }}>
              <li>Mobile-friendly design</li>
              <li>Flexible layout system</li>
              <li>Adaptive spacing and sizing</li>
              <li>Touch-friendly interactions</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ fontWeight: '600', margin: '0 0 8px 0', color: '#333' }}>Developer Experience</h4>
            <ul style={{ margin: 0, paddingLeft: '18px', color: '#666' }}>
              <li>TypeScript support</li>
              <li>Comprehensive prop validation</li>
              <li>Event handlers for all controls</li>
              <li>Consistent API across variants</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
This comprehensive overview showcases every table cell variant implemented from the Figma designs. 
The implementation includes:

- **12 different cell types** across avatar, payment, and file categories
- **Multiple sizes** (default 72px and small 52px heights)
- **Background states** (default, disabled, hover)
- **Control types** (checkbox and toggle variants)
- **Pixel-perfect styling** matching Figma specifications
- **Full accessibility support** with keyboard navigation
- **Responsive design** for all screen sizes
- **TypeScript integration** with comprehensive prop types

Each cell variant is ready for production use in data tables, lists, and selection interfaces.
        `
      }
    }
  }
};
