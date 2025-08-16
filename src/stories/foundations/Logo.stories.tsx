import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Foundations/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The Echo logo is available in multiple variants and color schemes. Use the appropriate variant based on your layout needs and ensure proper contrast for accessibility.',
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
      options: ['brand', 'dark-blue', 'sky-blue', 'white', 'black'],
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
    width: 500,
    height: 200,
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom width and height override the size presets',
      },
    },
  },
};

// ✅ RESTORED STORIES - Previously rejected, now improved for better visual testing

export const AllVariants: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem',
      padding: '2rem',
      fontFamily: 'var(--font-family-base, sans-serif)'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{
          marginBottom: '1rem',
          fontSize: '1rem',
          fontWeight: '600',
          color: 'var(--neutral-gray-gray-900, #1f2937)'
        }}>
          Full Logo
        </h3>
        <Logo variant="full" color="brand" size="medium" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{
          marginBottom: '1rem',
          fontSize: '1rem',
          fontWeight: '600',
          color: 'var(--neutral-gray-gray-900, #1f2937)'
        }}>
          Logomark Only
        </h3>
        <Logo variant="logomark" color="brand" size="medium" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{
          marginBottom: '1rem',
          fontSize: '1rem',
          fontWeight: '600',
          color: 'var(--neutral-gray-gray-900, #1f2937)'
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

export const ColorVariations: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: '1.5rem',
      padding: '2rem',
      fontFamily: 'var(--font-family-base, sans-serif)'
    }}>
      {['brand', 'dark-blue', 'sky-blue', 'black'].map((colorScheme) => (
        <div key={colorScheme} style={{ textAlign: 'center' }}>
          <h4 style={{
            marginBottom: '1rem',
            fontSize: '0.875rem',
            fontWeight: '500',
            color: 'var(--neutral-gray-gray-700, #374151)',
            textTransform: 'capitalize'
          }}>
            {colorScheme.replace('-', ' ')}
          </h4>
          <Logo variant="full" color={colorScheme as any} size="small" />
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Logo in different color schemes: brand colors, dark blue, sky blue, and black.',
      },
    },
  },
};

export const OnDarkBackground: Story = {
  render: () => (
    <div style={{
      backgroundColor: 'var(--primary-blue-dark-blue, #191E3C)',
      padding: '3rem',
      borderRadius: 'var(--spacing-radius-8px, 8px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2rem'
    }}>
      <h3 style={{
        color: 'white',
        marginBottom: '1rem',
        fontSize: '1.25rem',
        fontWeight: '600',
        fontFamily: 'var(--font-family-base, sans-serif)'
      }}>
        Logo on Dark Background
      </h3>
      <Logo variant="full" color="white" size="medium" />
      <p style={{
        color: 'rgba(255, 255, 255, 0.8)',
        textAlign: 'center',
        fontSize: '0.875rem',
        fontFamily: 'var(--font-family-base, sans-serif)',
        margin: 0
      }}>
        White logo variant for use on dark backgrounds
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'White logo variant designed for use on dark backgrounds to ensure proper contrast and visibility.',
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
      fontFamily: 'var(--font-family-base, sans-serif)'
    }}>
      {['small', 'medium', 'large'].map((logoSize) => (
        <div key={logoSize} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          padding: '1rem',
          borderRadius: 'var(--spacing-radius-6px, 6px)',
          backgroundColor: 'var(--base-white, #ffffff)',
          border: '1px solid var(--neutral-gray-gray-200, #e5e7eb)'
        }}>
          <div style={{ minWidth: '80px' }}>
            <span style={{
              fontSize: '0.875rem',
              fontWeight: '500',
              color: 'var(--neutral-gray-gray-700, #374151)',
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
        story: 'Comparison of logo sizes: small, medium, and large. Use appropriate sizes based on your layout needs.',
      },
    },
  },
};

export const LogomarkVariations: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '2rem',
      padding: '2rem',
      fontFamily: 'var(--font-family-base, sans-serif)'
    }}>
      {['brand', 'dark-blue', 'sky-blue', 'black'].map((colorScheme) => (
        <div key={colorScheme} style={{ textAlign: 'center' }}>
          <Logo variant="logomark" color={colorScheme as any} size="medium" />
          <p style={{
            marginTop: '1rem',
            fontSize: '0.75rem',
            color: 'var(--neutral-gray-gray-600, #4b5563)',
            textTransform: 'capitalize',
            margin: '1rem 0 0 0'
          }}>
            {colorScheme.replace('-', ' ')}
          </p>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Logomark variations in different colors. The logomark can be used independently when space is limited.',
      },
    },
  },
};
