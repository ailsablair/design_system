import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, AlarmIcon, ArrowDownIcon, AlertIcon, InformationIcon } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button/New Figma Showcase',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Complete showcase of the latest Figma-accurate button designs with exact color specifications, backgrounds, borders, shadows, and interactive states. Features secondary, tertiary, warning, info, and success buttons matching the provided Figma designs.',
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
      options: ['secondary', 'tertiary', 'warning', 'info', 'success'],
      description: 'Button type/variant',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'clicked', 'focused', 'loading', 'disabled'],
      description: 'Visual state (for controlled states)',
    },
    alt: {
      control: 'boolean',
      description: 'Alt variant (previously called "outline")',
    },
    alt: {
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Complete Figma Design Showcase
export const CompleteFigmaShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px', background: '#f8f9fa', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ margin: '0 0 16px 0', fontSize: '32px', fontWeight: '700', color: '#2F42BD' }}>
          2024 Figma Button Design System
        </h1>
        <p style={{ margin: '0 0 24px 0', fontSize: '18px', color: '#666', lineHeight: '1.6' }}>
          Updated button components matching exact Figma specifications with precise colors, backgrounds, borders, shadows, and interactive states.
          All designs follow the latest Figma design tokens and nuclear industry design principles.
        </p>
      </div>

      {/* Secondary Buttons */}
      <div style={{ background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h2 style={{ margin: '0 0 24px 0', fontSize: '24px', fontWeight: '600', color: '#0BA7EA' }}>
          Secondary Buttons
        </h2>
        <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: '#666', lineHeight: '1.5' }}>
          Light blue background (#D6F0FB) with sky blue border (#0BA7EA). Features subtle shadows and medium font weight on hover.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '20px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Small Default</p>
            <Button size="small" type="secondary" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
              Label
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Small Hover</p>
            <Button size="small" type="secondary" className="force-hover" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
              Label
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Small Clicked</p>
            <Button size="small" type="secondary" className="force-clicked" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
              Label
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Small Focused</p>
            <Button size="small" type="secondary" className="force-focused" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
              Label
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Small Loading</p>
            <Button size="small" type="secondary" loading>
              Label
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Small Disabled</p>
            <Button size="small" type="secondary" disabled leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
              Label
            </Button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', alignItems: 'center', marginTop: '24px' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Default</p>
            <Button size="default" type="secondary" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
              Label
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Large</p>
            <Button size="large" type="secondary" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>
              Label
            </Button>
          </div>
        </div>
      </div>

      {/* Tertiary Buttons */}
      <div style={{ background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h2 style={{ margin: '0 0 24px 0', fontSize: '24px', fontWeight: '600', color: '#8BBF9F' }}>
          Tertiary Buttons
        </h2>
        <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: '#666', lineHeight: '1.5' }}>
          Seafoam background (#8BBF9F) with matching border. Features dark text with reduced icon opacity (0.4).
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '20px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Small Default</p>
            <Button size="small" type="tertiary" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
              Label
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Small Hover</p>
            <Button size="small" type="tertiary" className="force-hover" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
              Label
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Small Outline</p>
            <Button size="small" type="tertiary" alt leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
              Label
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Outline Hover</p>
            <Button size="small" type="tertiary" alt className="force-hover" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
              Label
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Loading</p>
            <Button size="small" type="tertiary" loading>
              Label
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Disabled</p>
            <Button size="small" type="tertiary" disabled leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
              Label
            </Button>
          </div>
        </div>
      </div>

      {/* Warning Buttons */}
      <div style={{ background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h2 style={{ margin: '0 0 24px 0', fontSize: '24px', fontWeight: '600', color: '#F4A403' }}>
          Warning Buttons
        </h2>
        <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: '#666', lineHeight: '1.5' }}>
          Orange background (#F4A403) with white text and bold font weight. Features darker orange border (#D07C06).
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '20px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Small Default</p>
            <Button size="small" type="warning" leadingIcon={<AlertIcon size={14} />}>
              Warning
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Small Hover</p>
            <Button size="small" type="warning" className="force-hover" leadingIcon={<AlertIcon size={14} />}>
              Warning
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Small Clicked</p>
            <Button size="small" type="warning" className="force-clicked" leadingIcon={<AlertIcon size={14} />}>
              Warning
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Small Focused</p>
            <Button size="small" type="warning" className="force-focused" leadingIcon={<AlertIcon size={14} />}>
              Warning
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Loading</p>
            <Button size="small" type="warning" loading>
              Warning
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Disabled</p>
            <Button size="small" type="warning" disabled leadingIcon={<AlertIcon size={14} />}>
              Warning
            </Button>
          </div>
        </div>
      </div>

      {/* Info Buttons */}
      <div style={{ background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h2 style={{ margin: '0 0 24px 0', fontSize: '24px', fontWeight: '600', color: '#366F97' }}>
          Info Buttons
        </h2>
        <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: '#666', lineHeight: '1.5' }}>
          Dark blue background (#366F97) with white text and medium font weight. Bold font weight on hover states.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '20px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Small Default</p>
            <Button size="small" type="info" leadingIcon={<InformationIcon size={14} />}>
              Info
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Small Hover</p>
            <Button size="small" type="info" className="force-hover" leadingIcon={<InformationIcon size={14} />}>
              Info
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Small Clicked</p>
            <Button size="small" type="info" className="force-clicked" leadingIcon={<InformationIcon size={14} />}>
              Info
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Small Focused</p>
            <Button size="small" type="info" className="force-focused" leadingIcon={<InformationIcon size={14} />}>
              Info
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Loading</p>
            <Button size="small" type="info" loading>
              Info
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Disabled</p>
            <Button size="small" type="info" disabled leadingIcon={<InformationIcon size={14} />}>
              Info
            </Button>
          </div>
        </div>
      </div>

      {/* Success Buttons */}
      <div style={{ background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h2 style={{ margin: '0 0 24px 0', fontSize: '24px', fontWeight: '600', color: '#227F1A' }}>
          Success Buttons
        </h2>
        <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: '#666', lineHeight: '1.5' }}>
          Light green background (#96F78D) with dark green border (#227F1A). Features dark text with medium font weight.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '20px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Small Default</p>
            <Button size="small" type="success" leadingIcon={<InformationIcon size={14} />}>
              Success
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Small Hover</p>
            <Button size="small" type="success" className="force-hover" leadingIcon={<InformationIcon size={14} />}>
              Success
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Small Clicked</p>
            <Button size="small" type="success" className="force-clicked" leadingIcon={<InformationIcon size={14} />}>
              Success
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Small Focused</p>
            <Button size="small" type="success" className="force-focused" leadingIcon={<InformationIcon size={14} />}>
              Success
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Loading</p>
            <Button size="small" type="success" loading>
              Success
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>Disabled</p>
            <Button size="small" type="success" disabled leadingIcon={<InformationIcon size={14} />}>
              Success
            </Button>
          </div>
        </div>
      </div>

      {/* Design Specifications */}
      <div style={{ background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h2 style={{ margin: '0 0 24px 0', fontSize: '24px', fontWeight: '600', color: '#333' }}>
          Figma Design Specifications
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '2px solid #D6F0FB' }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600', color: '#0BA7EA' }}>Secondary Buttons</h3>
            <div style={{ fontSize: '13px', fontFamily: 'monospace', lineHeight: '1.6' }}>
              <div>• Background: #D6F0FB (light blue)</div>
              <div>• Border: 0.5px solid #0BA7EA</div>
              <div>• Text Color: #1C1C1C (black)</div>
              <div>• Font Weight: 300 (light)</div>
              <div>• Hover: Shadow + Medium font</div>
              <div>• Box Shadow: 1px 1px 0 0 #6171DF</div>
            </div>
          </div>
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '2px solid #8BBF9F' }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600', color: '#8BBF9F' }}>Tertiary Buttons</h3>
            <div style={{ fontSize: '13px', fontFamily: 'monospace', lineHeight: '1.6' }}>
              <div>• Background: #8BBF9F (seafoam)</div>
              <div>• Border: 0.5px solid #8BBF9F</div>
              <div>• Text Color: #1C1C1C (black)</div>
              <div>• Font Weight: 300 (light)</div>
              <div>• Hover: Shadow + Medium font</div>
              <div>• Icon Opacity: 0.4</div>
            </div>
          </div>
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '2px solid #F4A403' }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600', color: '#F4A403' }}>Warning Buttons</h3>
            <div style={{ fontSize: '13px', fontFamily: 'monospace', lineHeight: '1.6' }}>
              <div>• Background: #F4A403 (orange)</div>
              <div>• Border: 0.5px solid #D07C06</div>
              <div>• Text Color: #FFFFFF (white)</div>
              <div>• Font Weight: 700 (bold)</div>
              <div>• Hover: Shadow + Bold font</div>
              <div>• Icon Opacity: 0.6</div>
            </div>
          </div>
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '2px solid #366F97' }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600', color: '#366F97' }}>Info Buttons</h3>
            <div style={{ fontSize: '13px', fontFamily: 'monospace', lineHeight: '1.6' }}>
              <div>• Background: #366F97 (dark blue)</div>
              <div>• Border: 0.5px solid #366F97</div>
              <div>• Text Color: #FFFFFF (white)</div>
              <div>• Font Weight: 500 (medium)</div>
              <div>• Hover: Shadow + Bold font</div>
              <div>• Icon Opacity: 0.6</div>
            </div>
          </div>
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '2px solid #96F78D' }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600', color: '#227F1A' }}>Success Buttons</h3>
            <div style={{ fontSize: '13px', fontFamily: 'monospace', lineHeight: '1.6' }}>
              <div>• Background: #96F78D (light green)</div>
              <div>• Border: 0.5px solid #227F1A</div>
              <div>• Text Color: #1C1C1C (black)</div>
              <div>• Font Weight: 500 (medium)</div>
              <div>• Hover: Shadow + Bold font</div>
              <div>• Icon Opacity: 0.6</div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Demo */}
      <div style={{ background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h2 style={{ margin: '0 0 24px 0', fontSize: '24px', fontWeight: '600', color: '#333' }}>
          Interactive Demo
        </h2>
        <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: '#666', lineHeight: '1.5' }}>
          Click any button below to test the interactive behavior. All buttons follow the exact Figma specifications.
        </p>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button
            size="default"
            type="secondary"
            onClick={() => alert('Secondary button clicked!')}
            leadingIcon={<AlarmIcon size={18} />}
            trailingIcon={<ArrowDownIcon size={18} />}
          >
            Secondary
          </Button>
          <Button
            size="default"
            type="tertiary"
            onClick={() => alert('Tertiary button clicked!')}
            leadingIcon={<AlarmIcon size={18} />}
            trailingIcon={<ArrowDownIcon size={18} />}
          >
            Tertiary
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
            alt
            onClick={() => alert('Tertiary alt button clicked!')}
            leadingIcon={<AlarmIcon size={18} />}
            trailingIcon={<ArrowDownIcon size={18} />}
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
        story: 'Complete showcase of all updated Figma-accurate button designs with exact specifications for colors, backgrounds, borders, shadows, states, and typography.',
      },
    },
  },
};

// Individual button type showcases
export const SecondaryButtonShowcase: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'secondary',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const TertiaryButtonShowcase: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'tertiary',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const WarningButtonShowcase: Story = {
  args: {
    children: 'Warning button',
    size: 'default',
    type: 'warning',
    leadingIcon: <AlertIcon size={18} />,
  },
};

export const InfoButtonShowcase: Story = {
  args: {
    children: 'Info button',
    size: 'default',
    type: 'info',
    leadingIcon: <InformationIcon size={18} />,
  },
};

export const SuccessButtonShowcase: Story = {
  args: {
    children: 'Success button',
    size: 'default',
    type: 'success',
    leadingIcon: <InformationIcon size={18} />,
  },
};

export const TertiaryOutlineShowcase: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'tertiary',
    alt: true,
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};
