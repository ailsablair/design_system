import type { Meta, StoryObj } from '@storybook/react';
import { TableCell } from './TableCell';

const meta: Meta<typeof TableCell> = {
  title: 'Atoms/Building Blocks/Comprehensive Table Cells',
  component: TableCell,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Comprehensive Table Cell Components - Complete Implementation

This showcase demonstrates the complete implementation of all table cell variants based on the Figma designs. The components support:

- **Avatar-based cells** with checkbox or toggle controls
- **Payment method cells** with checkbox or toggle controls  
- **File cells** with checkbox or toggle controls
- **Multiple sizes**: Default (72px) and Small (52px)
- **Background states**: Default, Disabled, and Hover
- **Responsive design** and accessibility features

## Features

- Pixel-perfect implementation matching Figma designs
- Full TypeScript support with comprehensive props
- Accessible keyboard navigation and focus states
- Smooth hover transitions and state changes
- Mobile-responsive design
- Design token integration
        `
      }
    }
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'default'],
    },
    type: {
      control: { type: 'select' },
      options: [
        'avatar-w-title',
        'avatar-w-subtext', 
        'toggle-avatar-w-title',
        'toggle-avatar-w-subtext',
        'payment-w-select',
        'payment-w-select-and-expiry',
        'payment-w-toggle',
        'payment-w-toggle-and-expiry',
        'file-w-select',
        'file-w-select-and-expiry',
        'file-w-toggle', 
        'file-w-toggle-and-expiry'
      ],
    },
    background: {
      control: { type: 'select' },
      options: ['default', 'disabled', 'hover'],
    },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    enabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TableCell>;

export const AvatarCellsDisabled: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '0',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ 
        fontSize: '28px', 
        fontWeight: '600', 
        margin: '0 0 24px 0',
        color: '#1a1a1a'
      }}>
        Avatar Table Cells - Disabled State
      </h1>
      
      <p style={{ 
        fontSize: '16px', 
        color: '#666',
        margin: '0 0 32px 0',
        lineHeight: '1.5'
      }}>
        Avatar-based table cells with disabled background state from Figma designs
      </p>

      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        {/* Default Size Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '500', margin: '0 0 16px 0' }}>
            Default Size (72px)
          </h3>
          
          <TableCell
            size="default"
            type="avatar-w-title"
            background="disabled"
            title="Olivia Rhye"
            checked={false}
            disabled={true}
          />
          <TableCell
            size="default"
            type="avatar-w-subtext"
            background="disabled"
            title="Olivia Rhye"
            subtext="olivia@email.com"
            checked={false}
            disabled={true}
          />
          <TableCell
            size="default"
            type="toggle-avatar-w-title"
            background="disabled"
            title="Olivia Rhye"
            enabled={true}
            disabled={true}
          />
          <TableCell
            size="default"
            type="toggle-avatar-w-subtext"
            background="disabled"
            title="Olivia Rhye"
            subtext="olivia@email.com"
            enabled={true}
            disabled={true}
          />
        </div>

        {/* Small Size Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '500', margin: '0 0 16px 0' }}>
            Small Size (52px)
          </h3>
          
          <TableCell
            size="small"
            type="avatar-w-title"
            background="disabled"
            title="Olivia Rhye"
            checked={false}
            disabled={true}
          />
          <TableCell
            size="small"
            type="avatar-w-subtext"
            background="disabled"
            title="Olivia Rhye"
            subtext="olivia@email.com"
            checked={false}
            disabled={true}
          />
          <TableCell
            size="small"
            type="toggle-avatar-w-title"
            background="disabled"
            title="Olivia Rhye"
            enabled={true}
            disabled={true}
          />
          <TableCell
            size="small"
            type="toggle-avatar-w-subtext"
            background="disabled"
            title="Olivia Rhye"
            subtext="olivia@email.com"
            enabled={true}
            disabled={true}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatar-based table cells showing disabled state with grayed out text and controls.'
      }
    }
  }
};

export const AvatarCellsHover: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '0',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ 
        fontSize: '28px', 
        fontWeight: '600', 
        margin: '0 0 24px 0',
        color: '#1a1a1a'
      }}>
        Avatar Table Cells - Hover State
      </h1>
      
      <p style={{ 
        fontSize: '16px', 
        color: '#666',
        margin: '0 0 32px 0',
        lineHeight: '1.5'
      }}>
        Avatar-based table cells with hover background state and selected controls
      </p>

      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        {/* Default Size Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '500', margin: '0 0 16px 0' }}>
            Default Size (72px)
          </h3>
          
          <TableCell
            size="default"
            type="avatar-w-title"
            background="hover"
            title="Olivia Rhye"
            checked={true}
          />
          <TableCell
            size="default"
            type="avatar-w-subtext"
            background="hover"
            title="Olivia Rhye"
            subtext="olivia@email.com"
            checked={true}
          />
          <TableCell
            size="default"
            type="toggle-avatar-w-title"
            background="hover"
            title="Olivia Rhye"
            enabled={true}
          />
          <TableCell
            size="default"
            type="toggle-avatar-w-subtext"
            background="hover"
            title="Olivia Rhye"
            subtext="olivia@email.com"
            enabled={true}
          />
        </div>

        {/* Small Size Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '500', margin: '0 0 16px 0' }}>
            Small Size (52px)
          </h3>
          
          <TableCell
            size="small"
            type="avatar-w-title"
            background="hover"
            title="Olivia Rhye"
            checked={true}
          />
          <TableCell
            size="small"
            type="avatar-w-subtext"
            background="hover"
            title="Olivia Rhye"
            subtext="olivia@email.com"
            checked={true}
          />
          <TableCell
            size="small"
            type="toggle-avatar-w-title"
            background="hover"
            title="Olivia Rhye"
            enabled={true}
          />
          <TableCell
            size="small"
            type="toggle-avatar-w-subtext"
            background="hover"
            title="Olivia Rhye"
            subtext="olivia@email.com"
            enabled={true}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatar-based table cells showing hover state with blue background and active controls.'
      }
    }
  }
};

export const PaymentCellsDisabled: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '0',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ 
        fontSize: '28px', 
        fontWeight: '600', 
        margin: '0 0 24px 0',
        color: '#1a1a1a'
      }}>
        Payment Table Cells - All Variants
      </h1>
      
      <p style={{ 
        fontSize: '16px', 
        color: '#666',
        margin: '0 0 32px 0',
        lineHeight: '1.5'
      }}>
        Payment method cells with both checkbox and toggle variants, including expiry information
      </p>

      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        {/* Default Size Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '500', margin: '0 0 16px 0' }}>
            Default Size (72px)
          </h3>
          
          <TableCell
            size="default"
            type="payment-w-select"
            background="disabled"
            paymentMethod="visa"
            checked={false}
            disabled={true}
          />
          <TableCell
            size="default"
            type="payment-w-select-and-expiry"
            background="disabled"
            paymentMethod="visa"
            paymentExpiry="Expiry 01/2001"
            checked={false}
            disabled={true}
          />
          <TableCell
            size="default"
            type="payment-w-toggle"
            background="disabled"
            paymentMethod="visa"
            enabled={true}
            disabled={true}
          />
          <TableCell
            size="default"
            type="payment-w-toggle-and-expiry"
            background="disabled"
            paymentMethod="visa"
            paymentExpiry="Expiry 01/2001"
            enabled={true}
            disabled={true}
          />
        </div>

        {/* Small Size Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '500', margin: '0 0 16px 0' }}>
            Small Size (52px)
          </h3>
          
          <TableCell
            size="small"
            type="payment-w-select"
            background="disabled"
            paymentMethod="visa"
            checked={false}
            disabled={true}
          />
          <TableCell
            size="small"
            type="payment-w-select-and-expiry"
            background="disabled"
            paymentMethod="visa"
            paymentExpiry="Expiry 01/2001"
            checked={false}
            disabled={true}
          />
          <TableCell
            size="small"
            type="payment-w-toggle"
            background="disabled"
            paymentMethod="visa"
            enabled={true}
            disabled={true}
          />
          <TableCell
            size="small"
            type="payment-w-toggle-and-expiry"
            background="disabled"
            paymentMethod="visa"
            paymentExpiry="Expiry 01/2001"
            enabled={true}
            disabled={true}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Payment method cells showing all variants including the new checkbox options with expiry information.'
      }
    }
  }
};

export const PaymentCellsHover: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '0',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ 
        fontSize: '28px', 
        fontWeight: '600', 
        margin: '0 0 24px 0',
        color: '#1a1a1a'
      }}>
        Payment Table Cells - Hover State
      </h1>
      
      <p style={{ 
        fontSize: '16px', 
        color: '#666',
        margin: '0 0 32px 0',
        lineHeight: '1.5'
      }}>
        Payment method cells with hover background and active controls
      </p>

      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        {/* Default Size Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '500', margin: '0 0 16px 0' }}>
            Default Size (72px)
          </h3>
          
          <TableCell
            size="default"
            type="payment-w-select"
            background="hover"
            paymentMethod="visa"
            checked={true}
          />
          <TableCell
            size="default"
            type="payment-w-select-and-expiry"
            background="hover"
            paymentMethod="visa"
            paymentExpiry="Expiry 01/2001"
            checked={true}
          />
          <TableCell
            size="default"
            type="payment-w-toggle"
            background="hover"
            paymentMethod="visa"
            enabled={true}
          />
          <TableCell
            size="default"
            type="payment-w-toggle-and-expiry"
            background="hover"
            paymentMethod="visa"
            paymentExpiry="Expiry 01/2001"
            enabled={true}
          />
        </div>

        {/* Small Size Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '500', margin: '0 0 16px 0' }}>
            Small Size (52px)
          </h3>
          
          <TableCell
            size="small"
            type="payment-w-select"
            background="hover"
            paymentMethod="visa"
            checked={true}
          />
          <TableCell
            size="small"
            type="payment-w-select-and-expiry"
            background="hover"
            paymentMethod="visa"
            paymentExpiry="Expiry 01/2001"
            checked={true}
          />
          <TableCell
            size="small"
            type="payment-w-toggle"
            background="hover"
            paymentMethod="visa"
            enabled={true}
          />
          <TableCell
            size="small"
            type="payment-w-toggle-and-expiry"
            background="hover"
            paymentMethod="visa"
            paymentExpiry="Expiry 01/2001"
            enabled={true}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Payment method cells with hover background state and active/selected controls.'
      }
    }
  }
};

export const FileCellsDisabled: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '0',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ 
        fontSize: '28px', 
        fontWeight: '600', 
        margin: '0 0 24px 0',
        color: '#1a1a1a'
      }}>
        File Table Cells - All Variants
      </h1>
      
      <p style={{ 
        fontSize: '16px', 
        color: '#666',
        margin: '0 0 32px 0',
        lineHeight: '1.5'
      }}>
        File cells with checkbox and toggle variants, including file size information
      </p>

      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        {/* Default Size Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '500', margin: '0 0 16px 0' }}>
            Default Size (72px)
          </h3>
          
          <TableCell
            size="default"
            type="file-w-select"
            background="disabled"
            fileType="pdf"
            fileName="thisisafilename.pdf"
            checked={false}
            disabled={true}
          />
          <TableCell
            size="default"
            type="file-w-select-and-expiry"
            background="disabled"
            fileType="pdf"
            fileName="thisisafilename.pdf"
            fileSize="200 MB"
            checked={false}
            disabled={true}
          />
          <TableCell
            size="default"
            type="file-w-toggle"
            background="disabled"
            fileType="pdf"
            fileName="thisisafilename.pdf"
            enabled={true}
            disabled={true}
          />
          <TableCell
            size="default"
            type="file-w-toggle-and-expiry"
            background="disabled"
            fileType="pdf"
            fileName="thisisafilename.pdf"
            fileSize="200 MB"
            enabled={true}
            disabled={true}
          />
        </div>

        {/* Small Size Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '500', margin: '0 0 16px 0' }}>
            Small Size (52px)
          </h3>
          
          <TableCell
            size="small"
            type="file-w-select"
            background="disabled"
            fileType="pdf"
            fileName="thisisafilename.pdf"
            checked={false}
            disabled={true}
          />
          <TableCell
            size="small"
            type="file-w-select-and-expiry"
            background="disabled"
            fileType="pdf"
            fileName="thisisafilename.pdf"
            fileSize="200 MB"
            checked={false}
            disabled={true}
          />
          <TableCell
            size="small"
            type="file-w-toggle"
            background="disabled"
            fileType="pdf"
            fileName="thisisafilename.pdf"
            enabled={true}
            disabled={true}
          />
          <TableCell
            size="small"
            type="file-w-toggle-and-expiry"
            background="disabled"
            fileType="pdf"
            fileName="thisisafilename.pdf"
            fileSize="200 MB"
            enabled={true}
            disabled={true}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'File cells showing all variants with PDF icons, filenames, and optional file size information.'
      }
    }
  }
};

export const FileCellsHover: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '0',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ 
        fontSize: '28px', 
        fontWeight: '600', 
        margin: '0 0 24px 0',
        color: '#1a1a1a'
      }}>
        File Table Cells - Hover State
      </h1>
      
      <p style={{ 
        fontSize: '16px', 
        color: '#666',
        margin: '0 0 32px 0',
        lineHeight: '1.5'
      }}>
        File cells with hover background and active controls
      </p>

      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        {/* Default Size Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '500', margin: '0 0 16px 0' }}>
            Default Size (72px)
          </h3>
          
          <TableCell
            size="default"
            type="file-w-select"
            background="hover"
            fileType="pdf"
            fileName="thisisafilename.pdf"
            checked={true}
          />
          <TableCell
            size="default"
            type="file-w-select-and-expiry"
            background="hover"
            fileType="pdf"
            fileName="thisisafilename.pdf"
            fileSize="200 MB"
            checked={true}
          />
          <TableCell
            size="default"
            type="file-w-toggle"
            background="hover"
            fileType="pdf"
            fileName="thisisafilename.pdf"
            enabled={true}
          />
          <TableCell
            size="default"
            type="file-w-toggle-and-expiry"
            background="hover"
            fileType="pdf"
            fileName="thisisafilename.pdf"
            fileSize="200 MB"
            enabled={true}
          />
        </div>

        {/* Small Size Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '500', margin: '0 0 16px 0' }}>
            Small Size (52px)
          </h3>
          
          <TableCell
            size="small"
            type="file-w-select"
            background="hover"
            fileType="pdf"
            fileName="thisisafilename.pdf"
            checked={true}
          />
          <TableCell
            size="small"
            type="file-w-select-and-expiry"
            background="hover"
            fileType="pdf"
            fileName="thisisafilename.pdf"
            fileSize="200 MB"
            checked={true}
          />
          <TableCell
            size="small"
            type="file-w-toggle"
            background="hover"
            fileType="pdf"
            fileName="thisisafilename.pdf"
            enabled={true}
          />
          <TableCell
            size="small"
            type="file-w-toggle-and-expiry"
            background="hover"
            fileType="pdf"
            fileName="thisisafilename.pdf"
            fileSize="200 MB"
            enabled={true}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'File cells with hover background state showing selected/active controls.'
      }
    }
  }
};

// Interactive playground
export const Interactive: Story = {
  args: {
    size: 'default',
    type: 'avatar-w-title',
    background: 'default',
    title: 'Olivia Rhye',
    subtext: 'olivia@email.com',
    checked: false,
    enabled: true,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground for testing all table cell variants and their properties.'
      }
    }
  }
};
