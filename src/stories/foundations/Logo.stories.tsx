import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Foundations/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The ECHO logo is available in multiple variants and color schemes. The logomark features a distinctive circular design with geometric elements representing growth and innovation. Use the appropriate variant based on your layout needs and ensure proper contrast for accessibility.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['logomark', 'wordmark', 'full'],
      description: 'Choose between logomark (icon only), wordmark (text only), or full logo',
    },
    color: {
      control: 'select',
      options: ['brand', 'brand-dark', 'dark-blue', 'sky-blue', 'white', 'black'],
      description: 'Color scheme for the logo',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Predefined size options',
    },
    width: {
      control: 'number',
      description: 'Custom width (overrides size preset)',
    },
    height: {
      control: 'number',
      description: 'Custom height (overrides size preset)',
    },
  },
  args: {
    variant: 'full',
    color: 'brand',
    size: 'medium',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'full',
    color: 'brand',
    size: 'medium',
  },
};

export const Logomark: Story = {
  args: {
    variant: 'logomark',
    color: 'brand',
    size: 'medium',
  },
};

export const Wordmark: Story = {
  args: {
    variant: 'wordmark',
    color: 'dark-blue',
    size: 'medium',
  },
};

export const CustomSize: Story = {
  args: {
    variant: 'full',
    color: 'brand',
    width: 600,
    height: 220,
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom width and height override the size presets for specific layout requirements.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '3rem',
      padding: '2rem',
      fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{
          marginBottom: '1.5rem',
          fontSize: '1.125rem',
          fontWeight: '600',
          color: 'var(--base-black, #1c1c1c)'
        }}>
          Full Logo
        </h3>
        <Logo variant="full" color="brand" size="medium" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{
          marginBottom: '1.5rem',
          fontSize: '1.125rem',
          fontWeight: '600',
          color: 'var(--base-black, #1c1c1c)'
        }}>
          Logomark Only
        </h3>
        <Logo variant="logomark" color="brand" size="medium" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{
          marginBottom: '1.5rem',
          fontSize: '1.125rem',
          fontWeight: '600',
          color: 'var(--base-black, #1c1c1c)'
        }}>
          Wordmark Only
        </h3>
        <Logo variant="wordmark" color="dark-blue" size="medium" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available logo variants: full logo (logomark + wordmark), logomark only, and wordmark only.',
      },
    },
  },
};

export const LogomarkVariations: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: '2rem',
      padding: '2rem',
      fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)'
    }}>
      {[
        { color: 'brand', label: 'Brand' },
        { color: 'dark-blue', label: 'Dark Blue' },
        { color: 'sky-blue', label: 'Sky Blue' },
        { color: 'black', label: 'Black' }
      ].map(({ color, label }) => (
        <div key={color} style={{ textAlign: 'center' }}>
          <div style={{
            padding: '2rem 1rem',
            backgroundColor: color === 'white' ? 'var(--neutral-gray-gray-100)' : 'var(--base-white)',
            borderRadius: 'var(--spacing-radius-8px)',
            border: '1px solid var(--neutral-gray-gray-200)',
            marginBottom: '1rem'
          }}>
            <Logo variant="logomark" color={color as any} size="medium" />
          </div>
          <p style={{
            fontSize: '0.875rem',
            color: 'var(--neutral-gray-gray-600)',
            fontWeight: '500',
            margin: 0
          }}>
            {label}
          </p>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Logomark variations in different colors from the Figma designs. The logomark features overlapping circular elements in the brand color scheme.',
      },
    },
  },
};

export const WordmarkVariations: Story = {
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      padding: '2rem',
      fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)'
    }}>
      {[
        { color: 'dark-blue', bg: 'var(--base-white)', border: true },
        { color: 'sky-blue', bg: 'var(--base-white)', border: true },
        { color: 'black', bg: 'var(--base-white)', border: true },
        { color: 'white', bg: 'var(--primary-blue-dark-blue)', border: false }
      ].map(({ color, bg, border }) => (
        <div key={color} style={{
          textAlign: 'center',
          padding: '3rem 2rem',
          backgroundColor: bg,
          borderRadius: 'var(--spacing-radius-8px)',
          border: border ? '1px solid var(--neutral-gray-gray-200)' : 'none'
        }}>
          <Logo variant="wordmark" color={color as any} size="large" />
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'ECHO wordmark in different color variations as shown in the Figma designs.',
      },
    },
  },
};

export const FullLogoShowcase: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '2rem',
      padding: '2rem',
      fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)'
    }}>
      {[
        { color: 'brand', label: 'Brand', bg: 'var(--base-white)', textColor: 'var(--base-black)' },
        { color: 'brand-dark', label: 'Brand Dark', bg: 'var(--base-white)', textColor: 'var(--base-black)' },
        { color: 'dark-blue', label: 'Dark Blue', bg: 'var(--base-white)', textColor: 'var(--base-black)' },
        { color: 'sky-blue', label: 'Sky Blue', bg: 'var(--base-white)', textColor: 'var(--base-black)' },
        { color: 'white', label: 'White', bg: 'var(--primary-blue-dark-blue)', textColor: 'white' }
      ].map(({ color, label, bg, textColor }) => (
        <div key={color} style={{
          textAlign: 'center',
          padding: '2rem',
          backgroundColor: bg,
          borderRadius: 'var(--spacing-radius-12px)',
          border: bg === 'var(--base-white)' ? '1px solid var(--neutral-gray-gray-200)' : 'none'
        }}>
          <h4 style={{
            marginBottom: '2rem',
            fontSize: '1rem',
            fontWeight: '600',
            color: textColor,
            margin: '0 0 2rem 0'
          }}>
            {label}
          </h4>
          <Logo variant="full" color={color as any} size="medium" />
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Full logo combinations as represented in the Figma designs, showing logomark and wordmark together.',
      },
    },
  },
};

export const SizeComparison: Story = {
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      padding: '2rem',
      fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)'
    }}>
      {['small', 'medium', 'large'].map((logoSize) => (
        <div key={logoSize} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '3rem',
          padding: '2rem',
          borderRadius: 'var(--spacing-radius-8px)',
          backgroundColor: 'var(--base-white)',
          border: '1px solid var(--neutral-gray-gray-200)'
        }}>
          <div style={{ minWidth: '100px' }}>
            <span style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: 'var(--neutral-gray-gray-700)',
              textTransform: 'capitalize'
            }}>
              {logoSize}
            </span>
          </div>
          <Logo variant="full" color="brand" size={logoSize as any} />
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Logo size comparison: small, medium, and large. Choose appropriate sizes based on your layout and hierarchy needs.',
      },
    },
  },
};

export const ResponsiveUsage: Story = {
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      padding: '2rem',
      fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)'
    }}>
      <div style={{
        padding: '1.5rem 2rem',
        backgroundColor: 'var(--base-white)',
        borderRadius: 'var(--spacing-radius-8px)',
        border: '1px solid var(--neutral-gray-gray-200)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{ 
          fontSize: '0.875rem', 
          color: 'var(--neutral-gray-gray-600)',
          fontWeight: '500'
        }}>
          Desktop Header
        </span>
        <Logo variant="full" color="brand" size="small" />
      </div>
      
      <div style={{
        padding: '1rem',
        backgroundColor: 'var(--base-white)',
        borderRadius: 'var(--spacing-radius-8px)',
        border: '1px solid var(--neutral-gray-gray-200)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{ 
          fontSize: '0.875rem', 
          color: 'var(--neutral-gray-gray-600)',
          fontWeight: '500'
        }}>
          Mobile Header
        </span>
        <Logo variant="logomark" color="brand" size="small" />
      </div>
      
      <div style={{
        padding: '3rem 2rem',
        backgroundColor: 'var(--neutral-gray-gray-50)',
        borderRadius: 'var(--spacing-radius-8px)',
        textAlign: 'center'
      }}>
        <span style={{ 
          fontSize: '0.875rem', 
          color: 'var(--neutral-gray-gray-600)',
          fontWeight: '500',
          display: 'block',
          marginBottom: '2rem'
        }}>
          Hero Section
        </span>
        <Logo variant="full" color="brand" size="large" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Responsive logo usage examples showing how different variants work in various contexts and screen sizes.',
      },
    },
  },
};

export const OnDarkBackground: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      padding: '2rem'
    }}>
      <div style={{
        backgroundColor: 'var(--primary-blue-dark-blue)',
        padding: '3rem 2rem',
        borderRadius: 'var(--spacing-radius-12px)',
        textAlign: 'center'
      }}>
        <h3 style={{
          color: 'white',
          marginBottom: '2rem',
          fontSize: '1.125rem',
          fontWeight: '600',
          fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
          margin: '0 0 2rem 0'
        }}>
          Full Logo
        </h3>
        <Logo variant="full" color="white" size="medium" />
      </div>
      
      <div style={{
        backgroundColor: 'var(--neutral-gray-gray-900)',
        padding: '3rem 2rem',
        borderRadius: 'var(--spacing-radius-12px)',
        textAlign: 'center'
      }}>
        <h3 style={{
          color: 'white',
          marginBottom: '2rem',
          fontSize: '1.125rem',
          fontWeight: '600',
          fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
          margin: '0 0 2rem 0'
        }}>
          Logomark Only
        </h3>
        <Logo variant="logomark" color="white" size="medium" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'White logo variants designed for use on dark backgrounds to ensure proper contrast and accessibility.',
      },
    },
  },
};
