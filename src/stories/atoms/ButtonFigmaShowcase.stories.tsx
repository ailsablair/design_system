import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, AlarmIcon, ArrowDownIcon, AlertIcon, InformationIcon } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button/Figma Showcase',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Figma-accurate button showcase matching the exact design specifications from the latest Figma designs. Features updated secondary, tertiary, warning, info, and success buttons with precise colors, backgrounds, borders, shadows, and interactive states.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Button size variant',
    },
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'warning', 'info', 'success'],
      description: 'Button type/variant',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'clicked', 'focused', 'loading', 'disabled'],
      description: 'Visual state (for controlled states)',
    },
    outline: {
      control: 'boolean',
      description: 'Outline variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Primary outline buttons (updated)
export const PrimaryOutlineSmall: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'primary',
    outline: true,
    leadingIcon: <AlarmIcon size={14} />,
    trailingIcon: <ArrowDownIcon size={14} />,
  },
};

export const PrimaryOutlineDefault: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'primary',
    outline: true,
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const PrimaryOutlineLarge: Story = {
  args: {
    children: 'Label',
    size: 'large',
    type: 'primary',
    outline: true,
    leadingIcon: <AlarmIcon size={20} />,
    trailingIcon: <ArrowDownIcon size={20} />,
  },
};

export const PrimaryOutlineHover: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'primary',
    outline: true,
    state: 'hover',
    className: 'force-hover',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const PrimaryOutlineClicked: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'primary',
    outline: true,
    state: 'clicked',
    className: 'force-clicked',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const PrimaryOutlineFocused: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'primary',
    outline: true,
    state: 'focused',
    className: 'force-focused',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const PrimaryOutlineLoading: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'primary',
    outline: true,
    loading: true,
  },
};

export const PrimaryOutlineDisabled: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'primary',
    outline: true,
    disabled: true,
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

// Secondary buttons (updated Figma styling)
export const SecondaryButtonSmall: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'secondary',
    leadingIcon: <AlarmIcon size={14} />,
    trailingIcon: <ArrowDownIcon size={14} />,
  },
};

export const SecondaryButtonDefault: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'secondary',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const SecondaryButtonLarge: Story = {
  args: {
    children: 'Label',
    size: 'large',
    type: 'secondary',
    leadingIcon: <AlarmIcon size={20} />,
    trailingIcon: <ArrowDownIcon size={20} />,
  },
};

// Warning buttons (updated Figma styling)
export const WarningButtonSmall: Story = {
  args: {
    children: 'Warning button',
    size: 'small',
    type: 'warning',
    leadingIcon: <AlertIcon size={14} />,
  },
};

export const WarningButtonDefault: Story = {
  args: {
    children: 'Warning button',
    size: 'default',
    type: 'warning',
    leadingIcon: <AlertIcon size={18} />,
  },
};

export const WarningButtonLarge: Story = {
  args: {
    children: 'Warning button',
    size: 'large',
    type: 'warning',
    leadingIcon: <AlertIcon size={20} />,
  },
};

export const WarningButtonHover: Story = {
  args: {
    children: 'Warning button',
    size: 'default',
    type: 'warning',
    state: 'hover',
    className: 'force-hover',
    leadingIcon: <AlertIcon size={18} />,
  },
};

export const WarningButtonClicked: Story = {
  args: {
    children: 'Warning button',
    size: 'default',
    type: 'warning',
    state: 'clicked',
    className: 'force-clicked',
    leadingIcon: <AlertIcon size={18} />,
  },
};

export const WarningButtonFocused: Story = {
  args: {
    children: 'Warning button',
    size: 'default',
    type: 'warning',
    state: 'focused',
    className: 'force-focused',
    leadingIcon: <AlertIcon size={18} />,
  },
};

export const WarningButtonLoading: Story = {
  args: {
    children: 'Warning button',
    size: 'default',
    type: 'warning',
    loading: true,
  },
};

export const WarningButtonDisabled: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'warning',
    disabled: true,
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

// Info buttons (updated Figma styling)
export const InfoButtonSmall: Story = {
  args: {
    children: 'Info button',
    size: 'small',
    type: 'info',
    leadingIcon: <InformationIcon size={14} />,
  },
};

export const InfoButtonDefault: Story = {
  args: {
    children: 'Info button',
    size: 'default',
    type: 'info',
    leadingIcon: <InformationIcon size={18} />,
  },
};

export const InfoButtonLarge: Story = {
  args: {
    children: 'Info button',
    size: 'large',
    type: 'info',
    leadingIcon: <InformationIcon size={20} />,
  },
};

export const InfoButtonHover: Story = {
  args: {
    children: 'Info button',
    size: 'default',
    type: 'info',
    state: 'hover',
    className: 'force-hover',
    leadingIcon: <InformationIcon size={18} />,
  },
};

export const InfoButtonClicked: Story = {
  args: {
    children: 'Info button',
    size: 'default',
    type: 'info',
    state: 'clicked',
    className: 'force-clicked',
    leadingIcon: <InformationIcon size={18} />,
  },
};

export const InfoButtonFocused: Story = {
  args: {
    children: 'Info button',
    size: 'default',
    type: 'info',
    state: 'focused',
    className: 'force-focused',
    leadingIcon: <InformationIcon size={18} />,
  },
};

export const InfoButtonLoading: Story = {
  args: {
    children: 'Info button',
    size: 'default',
    type: 'info',
    loading: true,
  },
};

export const InfoButtonDisabled: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'info',
    disabled: true,
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

// Success buttons (updated Figma styling)
export const SuccessButtonSmall: Story = {
  args: {
    children: 'Success button',
    size: 'small',
    type: 'success',
    leadingIcon: <InformationIcon size={14} />,
  },
};

export const SuccessButtonDefault: Story = {
  args: {
    children: 'Success button',
    size: 'default',
    type: 'success',
    leadingIcon: <InformationIcon size={18} />,
  },
};

export const SuccessButtonLarge: Story = {
  args: {
    children: 'Success button',
    size: 'large',
    type: 'success',
    leadingIcon: <InformationIcon size={20} />,
  },
};

export const SuccessButtonHover: Story = {
  args: {
    children: 'Success button',
    size: 'default',
    type: 'success',
    state: 'hover',
    className: 'force-hover',
    leadingIcon: <InformationIcon size={18} />,
  },
};

export const SuccessButtonClicked: Story = {
  args: {
    children: 'Success button',
    size: 'default',
    type: 'success',
    state: 'clicked',
    className: 'force-clicked',
    leadingIcon: <InformationIcon size={18} />,
  },
};

export const SuccessButtonFocused: Story = {
  args: {
    children: 'Success button',
    size: 'default',
    type: 'success',
    state: 'focused',
    className: 'force-focused',
    leadingIcon: <InformationIcon size={18} />,
  },
};

export const SuccessButtonLoading: Story = {
  args: {
    children: 'Success button',
    size: 'default',
    type: 'success',
    loading: true,
  },
};

export const SuccessButtonDisabled: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'success',
    disabled: true,
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

// Tertiary outline buttons (updated Figma styling)
export const TertiaryOutlineSmall: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'tertiary',
    outline: true,
    leadingIcon: <AlarmIcon size={14} />,
    trailingIcon: <ArrowDownIcon size={14} />,
  },
};

export const TertiaryOutlineDefault: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'tertiary',
    outline: true,
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const TertiaryOutlineLarge: Story = {
  args: {
    children: 'Label',
    size: 'large',
    type: 'tertiary',
    outline: true,
    leadingIcon: <AlarmIcon size={20} />,
    trailingIcon: <ArrowDownIcon size={20} />,
  },
};

export const TertiaryOutlineHover: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'tertiary',
    outline: true,
    state: 'hover',
    className: 'force-hover',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const TertiaryOutlineClicked: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'tertiary',
    outline: true,
    state: 'clicked',
    className: 'force-clicked',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const TertiaryOutlineFocused: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'tertiary',
    outline: true,
    state: 'focused',
    className: 'force-focused',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const TertiaryOutlineLoading: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'tertiary',
    outline: true,
    loading: true,
  },
};

export const TertiaryOutlineDisabled: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'tertiary',
    outline: true,
    disabled: true,
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

// Comprehensive Figma Design Showcase
export const FigmaDesignShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px', background: '#f8f9fa' }}>
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ margin: '0 0 16px 0', fontSize: '24px', fontWeight: '600', color: '#2F42BD' }}>
          Figma-Accurate Button Design System
        </h2>
        <p style={{ margin: '0 0 24px 0', fontSize: '16px', color: '#666', lineHeight: '1.5' }}>
          Updated button components matching exact Figma specifications with proper colors, shadows, states, and typography.
          Features white backgrounds, colored borders, specific hover effects, and bold font weights for interactive states.
        </p>
      </div>

      {/* Primary Outline Buttons */}
      <div style={{ background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: '600', color: '#2F42BD' }}>
          Primary Outline Buttons
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500', color: '#666' }}>Small</p>
            <Button size="small" type="primary" outline leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
              Label
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500', color: '#666' }}>Default</p>
            <Button size="default" type="primary" outline leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
              Label
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500', color: '#666' }}>Large</p>
            <Button size="large" type="primary" outline leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>
              Label
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500', color: '#666' }}>Hover</p>
            <Button size="default" type="primary" outline className="force-hover" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
              Label
            </Button>
          </div>
        </div>
      </div>

      {/* Warning Buttons */}
      <div style={{ background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: '600', color: '#F4A403' }}>
          Warning Buttons
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500', color: '#666' }}>Small</p>
            <Button size="small" type="warning" leadingIcon={<AlertIcon size={14} />}>
              Warning
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500', color: '#666' }}>Default</p>
            <Button size="default" type="warning" leadingIcon={<AlertIcon size={18} />}>
              Warning
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500', color: '#666' }}>Large</p>
            <Button size="large" type="warning" leadingIcon={<AlertIcon size={20} />}>
              Warning
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500', color: '#666' }}>Hover</p>
            <Button size="default" type="warning" className="force-hover" leadingIcon={<AlertIcon size={18} />}>
              Warning
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500', color: '#666' }}>Clicked</p>
            <Button size="default" type="warning" className="force-clicked" leadingIcon={<AlertIcon size={18} />}>
              Warning
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500', color: '#666' }}>Focused</p>
            <Button size="default" type="warning" className="force-focused" leadingIcon={<AlertIcon size={18} />}>
              Warning
            </Button>
          </div>
        </div>
      </div>

      {/* Info Buttons */}
      <div style={{ background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: '600', color: '#366F97' }}>
          Info Buttons
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500', color: '#666' }}>Small</p>
            <Button size="small" type="info" leadingIcon={<InformationIcon size={14} />}>
              Info
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500', color: '#666' }}>Default</p>
            <Button size="default" type="info" leadingIcon={<InformationIcon size={18} />}>
              Info
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500', color: '#666' }}>Large</p>
            <Button size="large" type="info" leadingIcon={<InformationIcon size={20} />}>
              Info
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500', color: '#666' }}>Hover</p>
            <Button size="default" type="info" className="force-hover" leadingIcon={<InformationIcon size={18} />}>
              Info
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500', color: '#666' }}>Clicked</p>
            <Button size="default" type="info" className="force-clicked" leadingIcon={<InformationIcon size={18} />}>
              Info
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500', color: '#666' }}>Focused</p>
            <Button size="default" type="info" className="force-focused" leadingIcon={<InformationIcon size={18} />}>
              Info
            </Button>
          </div>
        </div>
      </div>

      {/* Success Buttons */}
      <div style={{ background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: '600', color: '#227F1A' }}>
          Success Buttons
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500', color: '#666' }}>Small</p>
            <Button size="small" type="success" leadingIcon={<InformationIcon size={14} />}>
              Success
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500', color: '#666' }}>Default</p>
            <Button size="default" type="success" leadingIcon={<InformationIcon size={18} />}>
              Success
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500', color: '#666' }}>Large</p>
            <Button size="large" type="success" leadingIcon={<InformationIcon size={20} />}>
              Success
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500', color: '#666' }}>Hover</p>
            <Button size="default" type="success" className="force-hover" leadingIcon={<InformationIcon size={18} />}>
              Success
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500', color: '#666' }}>Clicked</p>
            <Button size="default" type="success" className="force-clicked" leadingIcon={<InformationIcon size={18} />}>
              Success
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500', color: '#666' }}>Focused</p>
            <Button size="default" type="success" className="force-focused" leadingIcon={<InformationIcon size={18} />}>
              Success
            </Button>
          </div>
        </div>
      </div>

      {/* Tertiary Outline Buttons */}
      <div style={{ background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: '600', color: '#4B6D58' }}>
          Tertiary Outline Buttons
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500', color: '#666' }}>Small</p>
            <Button size="small" type="tertiary" outline leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
              Label
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500', color: '#666' }}>Default</p>
            <Button size="default" type="tertiary" outline leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
              Label
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500', color: '#666' }}>Large</p>
            <Button size="large" type="tertiary" outline leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>
              Label
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500', color: '#666' }}>Hover</p>
            <Button size="default" type="tertiary" outline className="force-hover" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
              Label
            </Button>
          </div>
        </div>
      </div>

      {/* Design Specifications */}
      <div style={{ background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: '600', color: '#333' }}>
          Design Specifications
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
          <div>
            <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600', color: '#F4A403' }}>Warning Buttons</h4>
            <div style={{ fontSize: '12px', fontFamily: 'monospace', background: '#f8f9fa', padding: '12px', borderRadius: '4px' }}>
              <div>• Background: #FFFFFF (white)</div>
              <div>• Border: 1px solid #F4A403</div>
              <div>• Text Color: #D07C06 (dark orange)</div>
              <div>• Font Weight: 500 (medium)</div>
              <div>• Hover: Bold font (700)</div>
              <div>• Icon Opacity: 0.6</div>
            </div>
          </div>
          <div>
            <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600', color: '#366F97' }}>Info Buttons</h4>
            <div style={{ fontSize: '12px', fontFamily: 'monospace', background: '#f8f9fa', padding: '12px', borderRadius: '4px' }}>
              <div>• Background: #FFFFFF (white)</div>
              <div>• Border: 1px solid #366F97</div>
              <div>• Text Color: #366F97 (info blue)</div>
              <div>• Font Weight: 500 (medium)</div>
              <div>• Hover: Bold font (700)</div>
              <div>• Icon Opacity: 0.6</div>
            </div>
          </div>
          <div>
            <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600', color: '#227F1A' }}>Success Buttons</h4>
            <div style={{ fontSize: '12px', fontFamily: 'monospace', background: '#f8f9fa', padding: '12px', borderRadius: '4px' }}>
              <div>• Background: #FFFFFF (white)</div>
              <div>• Border: 1px solid #227F1A</div>
              <div>• Text Color: #227F1A (dark green)</div>
              <div>• Font Weight: 500 (medium)</div>
              <div>• Hover: Bold font (700)</div>
              <div>• Icon Opacity: 0.6</div>
            </div>
          </div>
          <div>
            <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600', color: '#4B6D58' }}>Tertiary Outline</h4>
            <div style={{ fontSize: '12px', fontFamily: 'monospace', background: '#f8f9fa', padding: '12px', borderRadius: '4px' }}>
              <div>• Background: #FFFFFF (white)</div>
              <div>• Border: 1px solid #4B6D58</div>
              <div>• Text Color: #1C1C1C (black)</div>
              <div>• Font Weight: 300 (light)</div>
              <div>• Hover: Medium font (500)</div>
              <div>• Icon Opacity: 0.7</div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Demo */}
      <div style={{ background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: '600', color: '#333' }}>
          Interactive Demo
        </h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button
            size="default"
            type="primary"
            outline
            onClick={() => alert('Primary outline button clicked!')}
            leadingIcon={<AlarmIcon size={18} />}
          >
            Primary Outline
          </Button>
          <Button
            size="default"
            type="warning"
            onClick={() => alert('Warning button clicked!')}
            leadingIcon={<AlertIcon size={18} />}
          >
            Warning
          </Button>
          <Button
            size="default"
            type="info"
            onClick={() => alert('Info button clicked!')}
            leadingIcon={<InformationIcon size={18} />}
          >
            Info
          </Button>
          <Button
            size="default"
            type="success"
            onClick={() => alert('Success button clicked!')}
            leadingIcon={<InformationIcon size={18} />}
          >
            Success
          </Button>
          <Button
            size="default"
            type="tertiary"
            outline
            onClick={() => alert('Tertiary outline button clicked!')}
            leadingIcon={<AlarmIcon size={18} />}
          >
            Tertiary Outline
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all updated Figma-accurate button designs with exact specifications for colors, shadows, states, and typography.',
      },
    },
  },
};

// State comparison grid
export const StateComparisonGrid: Story = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
        Button State Comparison - Figma Accurate
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'auto repeat(6, 1fr)', gap: '16px', alignItems: 'center' }}>
        {/* Header row */}
        <div style={{ fontWeight: '600', fontSize: '14px' }}>Type</div>
        <div style={{ fontWeight: '600', fontSize: '14px', textAlign: 'center' }}>Default</div>
        <div style={{ fontWeight: '600', fontSize: '14px', textAlign: 'center' }}>Hover</div>
        <div style={{ fontWeight: '600', fontSize: '14px', textAlign: 'center' }}>Clicked</div>
        <div style={{ fontWeight: '600', fontSize: '14px', textAlign: 'center' }}>Focused</div>
        <div style={{ fontWeight: '600', fontSize: '14px', textAlign: 'center' }}>Loading</div>
        <div style={{ fontWeight: '600', fontSize: '14px', textAlign: 'center' }}>Disabled</div>

        {/* Primary Outline row */}
        <div style={{ fontSize: '14px', fontWeight: '500' }}>Primary Outline</div>
        <Button size="small" type="primary" outline leadingIcon={<AlarmIcon size={14} />}>Label</Button>
        <Button size="small" type="primary" outline className="force-hover" leadingIcon={<AlarmIcon size={14} />}>Label</Button>
        <Button size="small" type="primary" outline className="force-clicked" leadingIcon={<AlarmIcon size={14} />}>Label</Button>
        <Button size="small" type="primary" outline className="force-focused" leadingIcon={<AlarmIcon size={14} />}>Label</Button>
        <Button size="small" type="primary" outline loading>Label</Button>
        <Button size="small" type="primary" outline disabled leadingIcon={<AlarmIcon size={14} />}>Label</Button>

        {/* Warning row */}
        <div style={{ fontSize: '14px', fontWeight: '500' }}>Warning</div>
        <Button size="small" type="warning" leadingIcon={<AlertIcon size={14} />}>Warning</Button>
        <Button size="small" type="warning" className="force-hover" leadingIcon={<AlertIcon size={14} />}>Warning</Button>
        <Button size="small" type="warning" className="force-clicked" leadingIcon={<AlertIcon size={14} />}>Warning</Button>
        <Button size="small" type="warning" className="force-focused" leadingIcon={<AlertIcon size={14} />}>Warning</Button>
        <Button size="small" type="warning" loading>Warning</Button>
        <Button size="small" type="warning" disabled leadingIcon={<AlertIcon size={14} />}>Warning</Button>

        {/* Info row */}
        <div style={{ fontSize: '14px', fontWeight: '500' }}>Info</div>
        <Button size="small" type="info" leadingIcon={<InformationIcon size={14} />}>Info</Button>
        <Button size="small" type="info" className="force-hover" leadingIcon={<InformationIcon size={14} />}>Info</Button>
        <Button size="small" type="info" className="force-clicked" leadingIcon={<InformationIcon size={14} />}>Info</Button>
        <Button size="small" type="info" className="force-focused" leadingIcon={<InformationIcon size={14} />}>Info</Button>
        <Button size="small" type="info" loading>Info</Button>
        <Button size="small" type="info" disabled leadingIcon={<InformationIcon size={14} />}>Info</Button>

        {/* Success row */}
        <div style={{ fontSize: '14px', fontWeight: '500' }}>Success</div>
        <Button size="small" type="success" leadingIcon={<InformationIcon size={14} />}>Success</Button>
        <Button size="small" type="success" className="force-hover" leadingIcon={<InformationIcon size={14} />}>Success</Button>
        <Button size="small" type="success" className="force-clicked" leadingIcon={<InformationIcon size={14} />}>Success</Button>
        <Button size="small" type="success" className="force-focused" leadingIcon={<InformationIcon size={14} />}>Success</Button>
        <Button size="small" type="success" loading>Success</Button>
        <Button size="small" type="success" disabled leadingIcon={<InformationIcon size={14} />}>Success</Button>

        {/* Tertiary Outline row */}
        <div style={{ fontSize: '14px', fontWeight: '500' }}>Tertiary Outline</div>
        <Button size="small" type="tertiary" outline leadingIcon={<AlarmIcon size={14} />}>Label</Button>
        <Button size="small" type="tertiary" outline className="force-hover" leadingIcon={<AlarmIcon size={14} />}>Label</Button>
        <Button size="small" type="tertiary" outline className="force-clicked" leadingIcon={<AlarmIcon size={14} />}>Label</Button>
        <Button size="small" type="tertiary" outline className="force-focused" leadingIcon={<AlarmIcon size={14} />}>Label</Button>
        <Button size="small" type="tertiary" outline loading>Label</Button>
        <Button size="small" type="tertiary" outline disabled leadingIcon={<AlarmIcon size={14} />}>Label</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete state comparison grid showing all button variants in different states, matching Figma specifications.',
      },
    },
  },
};
