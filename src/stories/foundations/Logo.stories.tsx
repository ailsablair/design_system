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

export const AllVariants: Story = {
  render: () => (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '2rem',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <div>
        <Logo variant="logomark" color="brand" size="medium" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>Logomark</p>
      </div>
      <div>
        <Logo variant="wordmark" color="dark-blue" size="medium" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>Wordmark</p>
      </div>
      <div>
        <Logo variant="full" color="brand" size="medium" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>Full Logo</p>
      </div>
    </div>
  ),
};

export const ColorVariations: Story = {
  render: () => (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '2rem',
      alignItems: 'center'
    }}>
      <div style={{ textAlign: 'center' }}>
        <Logo variant="full" color="brand" size="medium" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>Brand (Multi-color)</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Logo variant="full" color="dark-blue" size="medium" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>Dark Blue</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Logo variant="full" color="sky-blue" size="medium" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>Sky Blue</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Logo variant="full" color="black" size="medium" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>Black</p>
      </div>
    </div>
  ),
};

export const OnDarkBackground: Story = {
  render: () => (
    <div style={{ 
      backgroundColor: '#1f2937',
      padding: '2rem',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Logo variant="full" color="white" size="large" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'White logo variant for use on dark backgrounds',
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
      alignItems: 'center'
    }}>
      <div style={{ textAlign: 'center' }}>
        <Logo variant="full" color="brand" size="small" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>Small</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Logo variant="full" color="brand" size="medium" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>Medium</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Logo variant="full" color="brand" size="large" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>Large</p>
      </div>
    </div>
  ),
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

export const LogomarkVariations: Story = {
  render: () => (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '1.5rem',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <div>
        <Logo variant="logomark" color="brand" size="medium" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#6b7280' }}>Brand</p>
      </div>
      <div>
        <Logo variant="logomark" color="dark-blue" size="medium" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#6b7280' }}>Dark Blue</p>
      </div>
      <div>
        <Logo variant="logomark" color="sky-blue" size="medium" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#6b7280' }}>Sky Blue</p>
      </div>
      <div>
        <Logo variant="logomark" color="black" size="medium" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#6b7280' }}>Black</p>
      </div>
      <div style={{ backgroundColor: '#1f2937', padding: '1rem', borderRadius: '6px' }}>
        <Logo variant="logomark" color="white" size="medium" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#d1d5db' }}>White</p>
      </div>
    </div>
  ),
};
