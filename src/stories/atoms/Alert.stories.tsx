import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Atoms/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Alert component based on the Echo design system. Fully tokenized for white-label support, adopting brand-specific colors, typography, and spacing from design tokens.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
      description: 'Size variant of the alert',
    },
    colour: {
      control: { type: 'select' },
      options: ['default', 'warning', 'light-gray', 'navy', 'error', 'success', 'purple', 'white'],
      description: 'Color theme of the alert',
    },
    border: {
      control: { type: 'boolean' },
      description: 'Whether to show border around the alert',
    },
    leadingIcon: {
      control: { type: 'boolean' },
      description: 'Whether to show leading icon',
    },
    trailingIcon: {
      control: { type: 'boolean' },
      description: 'Whether to show trailing close icon',
    },
    subtext: {
      control: { type: 'boolean' },
      description: 'Whether to show description text',
    },
    title: {
      control: { type: 'text' },
      description: 'Main alert message',
    },
    description: {
      control: { type: 'text' },
      description: 'Optional description text',
    },
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    size: 'default',
    colour: 'default',
    border: true,
    leadingIcon: true,
    trailingIcon: true,
    subtext: true,
    title: 'This is an alert banner for the Echo app',
    description: 'This is a description for an alert banner in the Echo app',
  },
};

export const Warning: Story = {
  args: {
    size: 'default',
    colour: 'warning',
    border: true,
    leadingIcon: true,
    trailingIcon: true,
    subtext: true,
    title: 'This is an alert banner for the Echo app',
    description: 'This is a description for an alert banner in the Echo app',
  },
};

export const Error: Story = {
  args: {
    size: 'default',
    colour: 'error',
    border: true,
    leadingIcon: true,
    trailingIcon: true,
    subtext: true,
    title: 'This is an alert banner for the Echo app',
    description: 'This is a description for an alert banner in the Echo app',
  },
};

export const Success: Story = {
  args: {
    size: 'default',
    colour: 'success',
    border: true,
    leadingIcon: true,
    trailingIcon: true,
    subtext: true,
    title: 'This is an alert banner for the Echo app',
    description: 'This is a description for an alert banner in the Echo app',
  },
};

export const WithoutBorder: Story = {
  args: {
    size: 'default',
    colour: 'default',
    border: false,
    leadingIcon: true,
    trailingIcon: true,
    subtext: true,
    title: 'This is an alert banner for the Echo app',
    description: 'This is a description for an alert banner in the Echo app',
  },
};

export const WithoutIcons: Story = {
  args: {
    size: 'default',
    colour: 'default',
    border: true,
    leadingIcon: false,
    trailingIcon: false,
    subtext: true,
    title: 'This is an alert banner for the Echo app',
    description: 'This is a description for an alert banner in the Echo app',
  },
};

export const TitleOnly: Story = {
  args: {
    size: 'default',
    colour: 'default',
    border: true,
    leadingIcon: true,
    trailingIcon: true,
    subtext: false,
    title: 'This is an alert banner for the Echo app',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    colour: 'default',
    border: true,
    leadingIcon: true,
    trailingIcon: true,
    subtext: true,
    title: 'This is an alert banner for the Echo app',
    description: 'This is a description for an alert banner in the Echo app',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    colour: 'default',
    border: true,
    leadingIcon: true,
    trailingIcon: true,
    subtext: true,
    title: 'This is an alert banner for the Echo app',
    description: 'This is a description for an alert banner in the Echo app',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '600px' }}>
      <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Small</div>
      <Alert
        size="small"
        colour="default"
        border={true}
        leadingIcon={true}
        trailingIcon={true}
        subtext={true}
        title="This is an alert banner for the Echo app"
        description="This is a description for an alert banner in the Echo app"
      />
      
      <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', marginTop: '16px' }}>Default</div>
      <Alert
        size="default"
        colour="default"
        border={true}
        leadingIcon={true}
        trailingIcon={true}
        subtext={true}
        title="This is an alert banner for the Echo app"
        description="This is a description for an alert banner in the Echo app"
      />
      
      <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', marginTop: '16px' }}>Large</div>
      <Alert
        size="large"
        colour="default"
        border={true}
        leadingIcon={true}
        trailingIcon={true}
        subtext={true}
        title="This is an alert banner for the Echo app"
        description="This is a description for an alert banner in the Echo app"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Overview of all alert sizes.',
      },
    },
  },
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '600px' }}>
      <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Default</div>
      <Alert
        size="default"
        colour="default"
        border={true}
        leadingIcon={true}
        trailingIcon={true}
        subtext={true}
        title="This is an alert banner for the Echo app"
        description="This is a description for an alert banner in the Echo app"
      />
      
      <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', marginTop: '16px' }}>Warning</div>
      <Alert
        size="default"
        colour="warning"
        border={true}
        leadingIcon={true}
        trailingIcon={true}
        subtext={true}
        title="This is an alert banner for the Echo app"
        description="This is a description for an alert banner in the Echo app"
      />
      
      <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', marginTop: '16px' }}>Light Gray</div>
      <Alert
        size="default"
        colour="light-gray"
        border={true}
        leadingIcon={true}
        trailingIcon={true}
        subtext={true}
        title="This is an alert banner for the Echo app"
        description="This is a description for an alert banner in the Echo app"
      />
      
      <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', marginTop: '16px' }}>Navy</div>
      <Alert
        size="default"
        colour="navy"
        border={true}
        leadingIcon={true}
        trailingIcon={true}
        subtext={true}
        title="This is an alert banner for the Echo app"
        description="This is a description for an alert banner in the Echo app"
      />
      
      <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', marginTop: '16px' }}>Error</div>
      <Alert
        size="default"
        colour="error"
        border={true}
        leadingIcon={true}
        trailingIcon={true}
        subtext={true}
        title="This is an alert banner for the Echo app"
        description="This is a description for an alert banner in the Echo app"
      />
      
      <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', marginTop: '16px' }}>Success</div>
      <Alert
        size="default"
        colour="success"
        border={true}
        leadingIcon={true}
        trailingIcon={true}
        subtext={true}
        title="This is an alert banner for the Echo app"
        description="This is a description for an alert banner in the Echo app"
      />
      
      <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', marginTop: '16px' }}>Purple</div>
      <Alert
        size="default"
        colour="purple"
        border={true}
        leadingIcon={true}
        trailingIcon={true}
        subtext={true}
        title="This is an alert banner for the Echo app"
        description="This is a description for an alert banner in the Echo app"
      />
      
      <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', marginTop: '16px' }}>White</div>
      <Alert
        size="default"
        colour="white"
        border={true}
        leadingIcon={true}
        trailingIcon={true}
        subtext={true}
        title="This is an alert banner for the Echo app"
        description="This is a description for an alert banner in the Echo app"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Overview of all alert colors.',
      },
    },
  },
};

export const BorderComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '600px' }}>
      <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>With Border</div>
      <Alert
        size="default"
        colour="default"
        border={true}
        leadingIcon={true}
        trailingIcon={true}
        subtext={true}
        title="This is an alert banner for the Echo app"
        description="This is a description for an alert banner in the Echo app"
      />
      
      <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', marginTop: '16px' }}>Without Border</div>
      <Alert
        size="default"
        colour="default"
        border={false}
        leadingIcon={true}
        trailingIcon={true}
        subtext={true}
        title="This is an alert banner for the Echo app"
        description="This is a description for an alert banner in the Echo app"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of alerts with and without borders.',
      },
    },
  },
};

export const FigmaShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '800px' }}>
      <div style={{ 
        fontSize: '20px', 
        fontWeight: '600', 
        textAlign: 'center',
        fontFamily: 'var(--type-typeface-archivo)',
        color: 'var(--base-black)',
        marginBottom: '16px'
      }}>
        Alert Component Showcase
      </div>
      
      {/* Small size variants */}
      <div>
        <h3 style={{ 
          fontSize: '16px', 
          fontWeight: '600', 
          marginBottom: '16px',
          fontFamily: 'var(--type-typeface-archivo)',
          color: 'var(--base-black)'
        }}>Small Size</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Alert size="small" colour="default" border={true} leadingIcon={true} trailingIcon={true} subtext={true} title="This is an alert banner for the Echo app" description="This is a description for an alert banner in the Echo app" />
          <Alert size="small" colour="warning" border={true} leadingIcon={true} trailingIcon={true} subtext={true} title="This is an alert banner for the Echo app" description="This is a description for an alert banner in the Echo app" />
          <Alert size="small" colour="error" border={true} leadingIcon={true} trailingIcon={true} subtext={true} title="This is an alert banner for the Echo app" description="This is a description for an alert banner in the Echo app" />
          <Alert size="small" colour="success" border={true} leadingIcon={true} trailingIcon={true} subtext={true} title="This is an alert banner for the Echo app" description="This is a description for an alert banner in the Echo app" />
        </div>
      </div>
      
      {/* Default size variants */}
      <div>
        <h3 style={{ 
          fontSize: '16px', 
          fontWeight: '600', 
          marginBottom: '16px',
          fontFamily: 'var(--type-typeface-archivo)',
          color: 'var(--base-black)'
        }}>Default Size</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Alert size="default" colour="default" border={true} leadingIcon={true} trailingIcon={true} subtext={true} title="This is an alert banner for the Echo app" description="This is a description for an alert banner in the Echo app" />
          <Alert size="default" colour="warning" border={true} leadingIcon={true} trailingIcon={true} subtext={true} title="This is an alert banner for the Echo app" description="This is a description for an alert banner in the Echo app" />
          <Alert size="default" colour="light-gray" border={true} leadingIcon={true} trailingIcon={true} subtext={true} title="This is an alert banner for the Echo app" description="This is a description for an alert banner in the Echo app" />
          <Alert size="default" colour="navy" border={true} leadingIcon={true} trailingIcon={true} subtext={true} title="This is an alert banner for the Echo app" description="This is a description for an alert banner in the Echo app" />
          <Alert size="default" colour="error" border={true} leadingIcon={true} trailingIcon={true} subtext={true} title="This is an alert banner for the Echo app" description="This is a description for an alert banner in the Echo app" />
          <Alert size="default" colour="success" border={true} leadingIcon={true} trailingIcon={true} subtext={true} title="This is an alert banner for the Echo app" description="This is a description for an alert banner in the Echo app" />
          <Alert size="default" colour="purple" border={true} leadingIcon={true} trailingIcon={true} subtext={true} title="This is an alert banner for the Echo app" description="This is a description for an alert banner in the Echo app" />
          <Alert size="default" colour="white" border={true} leadingIcon={true} trailingIcon={true} subtext={true} title="This is an alert banner for the Echo app" description="This is a description for an alert banner in the Echo app" />
        </div>
      </div>
      
      {/* Large size variants */}
      <div>
        <h3 style={{ 
          fontSize: '16px', 
          fontWeight: '600', 
          marginBottom: '16px',
          fontFamily: 'var(--type-typeface-archivo)',
          color: 'var(--base-black)'
        }}>Large Size</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Alert size="large" colour="default" border={true} leadingIcon={true} trailingIcon={true} subtext={true} title="This is an alert banner for the Echo app" description="This is a description for an alert banner in the Echo app" />
          <Alert size="large" colour="warning" border={true} leadingIcon={true} trailingIcon={true} subtext={true} title="This is an alert banner for the Echo app" description="This is a description for an alert banner in the Echo app" />
          <Alert size="large" colour="light-gray" border={true} leadingIcon={true} trailingIcon={true} subtext={true} title="This is an alert banner for the Echo app" description="This is a description for an alert banner in the Echo app" />
          <Alert size="large" colour="navy" border={true} leadingIcon={true} trailingIcon={true} subtext={true} title="This is an alert banner for the Echo app" description="This is a description for an alert banner in the Echo app" />
          <Alert size="large" colour="error" border={true} leadingIcon={true} trailingIcon={true} subtext={true} title="This is an alert banner for the Echo app" description="This is a description for an alert banner in the Echo app" />
          <Alert size="large" colour="success" border={true} leadingIcon={true} trailingIcon={true} subtext={true} title="This is an alert banner for the Echo app" description="This is a description for an alert banner in the Echo app" />
          <Alert size="large" colour="purple" border={true} leadingIcon={true} trailingIcon={true} subtext={true} title="This is an alert banner for the Echo app" description="This is a description for an alert banner in the Echo app" />
          <Alert size="large" colour="white" border={true} leadingIcon={true} trailingIcon={true} subtext={true} title="This is an alert banner for the Echo app" description="This is a description for an alert banner in the Echo app" />
        </div>
      </div>
      
      {/* Border variants */}
      <div>
        <h3 style={{ 
          fontSize: '16px', 
          fontWeight: '600', 
          marginBottom: '16px',
          fontFamily: 'var(--type-typeface-archivo)',
          color: 'var(--base-black)'
        }}>Border Variants</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Alert size="default" colour="default" border={false} leadingIcon={true} trailingIcon={true} subtext={true} title="This is an alert banner for the Echo app" description="This is a description for an alert banner in the Echo app" />
          <Alert size="default" colour="warning" border={false} leadingIcon={true} trailingIcon={true} subtext={true} title="This is an alert banner for the Echo app" description="This is a description for an alert banner in the Echo app" />
          <Alert size="default" colour="error" border={false} leadingIcon={true} trailingIcon={true} subtext={true} title="This is an alert banner for the Echo app" description="This is a description for an alert banner in the Echo app" />
          <Alert size="default" colour="success" border={false} leadingIcon={true} trailingIcon={true} subtext={true} title="This is an alert banner for the Echo app" description="This is a description for an alert banner in the Echo app" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase matching the Figma design with all alert variants organized by size and color.',
      },
    },
  },
};
