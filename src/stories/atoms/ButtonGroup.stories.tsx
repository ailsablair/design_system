import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ButtonGroup, AlignRightIcon, AlignCenterIcon, AlignDistributeIcon, AlignLeftIcon, FilterIcon, SortIcon, MoreActionsIcon } from './ButtonGroup';
import { Button } from './Button';
import { SplitButton } from './button/SplitButton';

// Import the alarm icon for examples
const AlarmIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6">
      <path d="M4.5 5.175L2.9025 3.585L3.96 2.5275L5.55 4.125L4.5 5.175ZM9.75 0.75V3H8.25V0.75H9.75ZM15.0975 3.585L13.5 5.175L12.45 4.125L14.04 2.5275L15.0975 3.585ZM3.375 7.875V9.375H1.125V7.875H3.375ZM14.625 7.875H16.875V9.375H14.625V7.875ZM4.5 15H13.5C13.8978 15 14.2794 15.158 14.5607 15.4393C14.842 15.7206 15 16.1022 15 16.5H3C3 16.1022 3.15804 15.7206 3.43934 15.4393C3.72064 15.158 4.10218 15 4.5 15ZM9 3.75C10.1935 3.75 11.3381 4.22411 12.182 5.06802C13.0259 5.91193 13.5 7.05653 13.5 8.25V14.25H4.5V8.25C4.5 7.05653 4.97411 5.91193 5.81802 5.06802C6.66193 4.22411 7.80653 3.75 9 3.75Z" fill="currentColor"/>
    </g>
  </svg>
);

const ArrowDownIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6">
      <path d="M8.25 4.5V10.5L5.625 7.875L4.56 8.94L9 13.38L13.44 8.94L12.375 7.875L9.75 10.5V4.5H8.25ZM9 16.5C8.01509 16.5 7.03982 16.306 6.12987 15.9291C5.21993 15.5522 4.39314 14.9997 3.6967 14.3033C2.29018 12.8968 1.5 10.9891 1.5 9C1.5 7.01088 2.29018 5.10322 3.6967 3.6967C5.10322 2.29018 7.01088 1.5 9 1.5C9.98491 1.5 10.9602 1.69399 11.8701 2.0709C12.7801 2.44781 13.6069 3.00026 14.3033 3.6967C14.9997 4.39314 15.5522 5.21993 15.9291 6.12987C16.306 7.03982 16.5 8.01509 16.5 9C16.5 10.9891 15.7098 12.8968 14.3033 14.3033C12.8968 15.7098 10.9891 16.5 9 16.5Z" fill="currentColor"/>
    </g>
  </svg>
);

const meta: Meta<typeof ButtonGroup> = {
  title: 'Atoms/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'ButtonGroup component for organizing multiple buttons in cohesive layouts. Supports different sizes, types, states, orientations, and gap configurations. Matches the comprehensive Figma design specifications for button/group layouts.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['extra-small', 'small', 'default', 'large'],
      description: 'Size variant for all buttons in the group',
    },
    type: {
      control: 'select',
      options: ['default', 'split', 'icon-only', 'many-icons', 'table-actions'],
      description: 'Group layout type',
    },
    state: {
      control: 'select',
      options: ['default', 'secondary', 'tertiary', 'ghost', 'multi'],
      description: 'Button group state/variant',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the button group',
    },
    gap: {
      control: 'select',
      options: ['none', 'small', 'default', 'large'],
      description: 'Gap between buttons',
    },
    connected: {
      control: 'boolean',
      description: 'Whether buttons should be connected with shared borders',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width styling',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

// Menu items for split button examples
const menuItems = [
  { id: 'option1', label: 'Option 1', onClick: () => console.log('Option 1') },
  { id: 'option2', label: 'Option 2', onClick: () => console.log('Option 2') },
  { id: 'option3', label: 'Option 3', onClick: () => console.log('Option 3') },
];

// Basic button group examples
export const Default: Story = {
  render: () => (
    <ButtonGroup size="default" type="default">
      <Button variant="primary" leadingIcon={<AlarmIcon />} trailingIcon={<ArrowDownIcon />}>
        Label
      </Button>
      <Button variant="ghost" leadingIcon={<AlarmIcon />} trailingIcon={<ArrowDownIcon />}>
        Label
      </Button>
    </ButtonGroup>
  ),
};

export const SplitButtonGroup: Story = {
  render: () => (
    <ButtonGroup size="default" type="split">
      <SplitButton type="primary" menuItems={menuItems}>
        Label
      </SplitButton>
      <Button variant="ghost">
        Label
      </Button>
    </ButtonGroup>
  ),
};

export const IconOnlyGroup: Story = {
  render: () => (
    <ButtonGroup size="default" type="icon-only">
      <Button variant="primary" iconOnly icon={<AlarmIcon />} />
      <Button variant="ghost" iconOnly icon={<AlarmIcon />} />
    </ButtonGroup>
  ),
};

export const ManyIconsGroup: Story = {
  render: () => (
    <ButtonGroup size="small" type="many-icons" state="default" connected>
      <Button variant="primary" iconOnly icon={<AlignRightIcon />} />
      <Button variant="primary" iconOnly icon={<AlignCenterIcon />} />
      <Button variant="primary" iconOnly icon={<AlignDistributeIcon />} />
      <Button variant="primary" iconOnly icon={<AlignLeftIcon />} />
    </ButtonGroup>
  ),
};

export const TableActionsGroup: Story = {
  render: () => (
    <ButtonGroup size="small" type="table-actions" state="default">
      <Button variant="primary" leadingIcon={<FilterIcon />}>
        Filter
      </Button>
      <Button variant="primary" leadingIcon={<SortIcon />}>
        Sort
      </Button>
      <Button variant="primary" leadingIcon={<MoreActionsIcon />}>
        More actions
      </Button>
    </ButtonGroup>
  ),
};

// Complete Figma Design Implementation
export const FigmaCompleteShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', padding: '24px', background: '#f8f9fa' }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '24px', fontWeight: '600', marginBottom: '8px' }}>
          Button Groups - Complete Figma Implementation
        </h2>
        <p style={{ margin: 0, fontSize: '16px', color: '#666', marginBottom: '32px' }}>
          Comprehensive implementation of all button/group variants from Figma designs
        </p>
      </div>

      {/* Default & Split & Icon-Only Groups - All Sizes */}
      <section>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600', marginBottom: '24px' }}>
          Standard Button Groups
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          
          {/* Small Size */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#555' }}>Small Size</h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Default</span>
                <ButtonGroup size="small" type="default">
                  <Button variant="primary" size="small" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
                    Label
                  </Button>
                  <Button variant="ghost" size="small" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
                    Label
                  </Button>
                </ButtonGroup>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Split</span>
                <ButtonGroup size="small" type="split">
                  <SplitButton type="primary" size="small" menuItems={menuItems}>
                    Label
                  </SplitButton>
                  <Button variant="ghost" size="small">
                    Label
                  </Button>
                </ButtonGroup>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Icon Only</span>
                <ButtonGroup size="small" type="icon-only">
                  <Button variant="primary" size="small" iconOnly icon={<AlarmIcon size={14} />} />
                  <Button variant="ghost" size="small" iconOnly icon={<AlarmIcon size={14} />} />
                </ButtonGroup>
              </div>
            </div>
          </div>

          {/* Default Size */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#555' }}>Default Size</h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Default</span>
                <ButtonGroup size="default" type="default">
                  <Button variant="primary" leadingIcon={<AlarmIcon />} trailingIcon={<ArrowDownIcon />}>
                    Label
                  </Button>
                  <Button variant="ghost" leadingIcon={<AlarmIcon />} trailingIcon={<ArrowDownIcon />}>
                    Label
                  </Button>
                </ButtonGroup>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Split</span>
                <ButtonGroup size="default" type="split">
                  <SplitButton type="primary" menuItems={menuItems}>
                    Label
                  </SplitButton>
                  <Button variant="ghost">
                    Label
                  </Button>
                </ButtonGroup>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Icon Only</span>
                <ButtonGroup size="default" type="icon-only">
                  <Button variant="primary" iconOnly icon={<AlarmIcon />} />
                  <Button variant="ghost" iconOnly icon={<AlarmIcon />} />
                </ButtonGroup>
              </div>
            </div>
          </div>

          {/* Large Size */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#555' }}>Large Size</h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Default</span>
                <ButtonGroup size="large" type="default">
                  <Button variant="primary" size="large" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>
                    Label
                  </Button>
                  <Button variant="ghost" size="large" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>
                    Label
                  </Button>
                </ButtonGroup>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Split</span>
                <ButtonGroup size="large" type="split">
                  <SplitButton type="primary" size="large" menuItems={menuItems}>
                    Label
                  </SplitButton>
                  <Button variant="ghost" size="large">
                    Label
                  </Button>
                </ButtonGroup>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Icon Only</span>
                <ButtonGroup size="large" type="icon-only">
                  <Button variant="primary" size="large" iconOnly icon={<AlarmIcon size={20} />} />
                  <Button variant="ghost" size="large" iconOnly icon={<AlarmIcon size={20} />} />
                </ButtonGroup>
              </div>
            </div>
          </div>

          {/* Extra Small Size */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#555' }}>Extra Small Size</h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Default</span>
                <ButtonGroup size="extra-small" type="default">
                  <Button variant="primary" size="extra-small" leadingIcon={<AlarmIcon size={14} />}>
                    Button w/ leading icon
                  </Button>
                  <Button variant="ghost" size="extra-small" leadingIcon={<AlarmIcon size={14} />}>
                    Button w/ leading icon
                  </Button>
                </ButtonGroup>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Split</span>
                <ButtonGroup size="extra-small" type="split">
                  <SplitButton type="primary" size="extra-small" menuItems={menuItems}>
                    Label
                  </SplitButton>
                  <Button variant="ghost" size="extra-small">
                    Label
                  </Button>
                </ButtonGroup>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Icon Only</span>
                <ButtonGroup size="extra-small" type="icon-only">
                  <Button variant="primary" size="extra-small" iconOnly icon={<AlarmIcon size={14} />} />
                  <Button variant="ghost" size="extra-small" iconOnly icon={<AlarmIcon size={14} />} />
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Many-Icons Groups (Toolbar Style) */}
      <section>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600', marginBottom: '24px' }}>
          Many-Icons Groups (Toolbar Style)
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          
          {/* Small Many-Icons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#555' }}>Small Size</h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Default</span>
                <ButtonGroup size="small" type="many-icons" state="default" connected>
                  <Button variant="primary" size="small" iconOnly icon={<AlignRightIcon />} />
                  <Button variant="primary" size="small" iconOnly icon={<AlignCenterIcon />} />
                  <Button variant="primary" size="small" iconOnly icon={<AlignDistributeIcon />} />
                  <Button variant="primary" size="small" iconOnly icon={<AlignLeftIcon />} />
                </ButtonGroup>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Secondary</span>
                <ButtonGroup size="small" type="many-icons" state="secondary" connected>
                  <Button variant="secondary" size="small" iconOnly icon={<AlignRightIcon />} />
                  <Button variant="secondary" size="small" iconOnly icon={<AlignCenterIcon />} />
                  <Button variant="secondary" size="small" iconOnly icon={<AlignDistributeIcon />} />
                  <Button variant="secondary" size="small" iconOnly icon={<AlignLeftIcon />} />
                </ButtonGroup>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Tertiary</span>
                <ButtonGroup size="small" type="many-icons" state="tertiary" connected>
                  <Button variant="tertiary" size="small" iconOnly icon={<AlignRightIcon />} />
                  <Button variant="tertiary" size="small" iconOnly icon={<AlignCenterIcon />} />
                  <Button variant="tertiary" size="small" iconOnly icon={<AlignDistributeIcon />} />
                  <Button variant="tertiary" size="small" iconOnly icon={<AlignLeftIcon />} />
                </ButtonGroup>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Ghost</span>
                <ButtonGroup size="small" type="many-icons" state="ghost" connected>
                  <Button variant="ghost" size="small" iconOnly icon={<AlignRightIcon />} />
                  <Button variant="ghost" size="small" iconOnly icon={<AlignCenterIcon />} />
                  <Button variant="ghost" size="small" iconOnly icon={<AlignDistributeIcon />} />
                  <Button variant="ghost" size="small" iconOnly icon={<AlignLeftIcon />} />
                </ButtonGroup>
              </div>
            </div>
          </div>

          {/* Extra Small Many-Icons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#555' }}>Extra Small Size</h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Default</span>
                <ButtonGroup size="extra-small" type="many-icons" state="default" connected>
                  <Button variant="primary" size="extra-small" iconOnly icon={<AlignRightIcon size={14} />} />
                  <Button variant="primary" size="extra-small" iconOnly icon={<AlignCenterIcon size={14} />} />
                  <Button variant="primary" size="extra-small" iconOnly icon={<AlignDistributeIcon size={14} />} />
                  <Button variant="primary" size="extra-small" iconOnly icon={<AlignLeftIcon size={14} />} />
                </ButtonGroup>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Secondary</span>
                <ButtonGroup size="extra-small" type="many-icons" state="secondary" connected>
                  <Button variant="secondary" size="extra-small" iconOnly icon={<AlignRightIcon size={14} />} />
                  <Button variant="secondary" size="extra-small" iconOnly icon={<AlignCenterIcon size={14} />} />
                  <Button variant="secondary" size="extra-small" iconOnly icon={<AlignDistributeIcon size={14} />} />
                  <Button variant="secondary" size="extra-small" iconOnly icon={<AlignLeftIcon size={14} />} />
                </ButtonGroup>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Tertiary</span>
                <ButtonGroup size="extra-small" type="many-icons" state="tertiary" connected>
                  <Button variant="tertiary" size="extra-small" iconOnly icon={<AlignRightIcon size={14} />} />
                  <Button variant="tertiary" size="extra-small" iconOnly icon={<AlignCenterIcon size={14} />} />
                  <Button variant="tertiary" size="extra-small" iconOnly icon={<AlignDistributeIcon size={14} />} />
                  <Button variant="tertiary" size="extra-small" iconOnly icon={<AlignLeftIcon size={14} />} />
                </ButtonGroup>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Ghost</span>
                <ButtonGroup size="extra-small" type="many-icons" state="ghost" connected>
                  <Button variant="ghost" size="extra-small" iconOnly icon={<AlignRightIcon size={14} />} />
                  <Button variant="ghost" size="extra-small" iconOnly icon={<AlignCenterIcon size={14} />} />
                  <Button variant="ghost" size="extra-small" iconOnly icon={<AlignDistributeIcon size={14} />} />
                  <Button variant="ghost" size="extra-small" iconOnly icon={<AlignLeftIcon size={14} />} />
                </ButtonGroup>
              </div>
            </div>
          </div>

          {/* Large Many-Icons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#555' }}>Large Size</h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Default</span>
                <ButtonGroup size="large" type="many-icons" state="default" connected>
                  <Button variant="primary" size="large" iconOnly icon={<AlignRightIcon size={20} />} />
                  <Button variant="primary" size="large" iconOnly icon={<AlignCenterIcon size={20} />} />
                  <Button variant="primary" size="large" iconOnly icon={<AlignDistributeIcon size={20} />} />
                  <Button variant="primary" size="large" iconOnly icon={<AlignLeftIcon size={20} />} />
                </ButtonGroup>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Tertiary</span>
                <ButtonGroup size="large" type="many-icons" state="tertiary" connected>
                  <Button variant="tertiary" size="large" iconOnly icon={<AlignRightIcon size={20} />} />
                  <Button variant="tertiary" size="large" iconOnly icon={<AlignCenterIcon size={20} />} />
                  <Button variant="tertiary" size="large" iconOnly icon={<AlignDistributeIcon size={20} />} />
                  <Button variant="tertiary" size="large" iconOnly icon={<AlignLeftIcon size={20} />} />
                </ButtonGroup>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Ghost</span>
                <ButtonGroup size="large" type="many-icons" state="ghost" connected>
                  <Button variant="ghost" size="large" iconOnly icon={<AlignRightIcon size={20} />} />
                  <Button variant="ghost" size="large" iconOnly icon={<AlignCenterIcon size={20} />} />
                  <Button variant="ghost" size="large" iconOnly icon={<AlignDistributeIcon size={20} />} />
                  <Button variant="ghost" size="large" iconOnly icon={<AlignLeftIcon size={20} />} />
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table Actions Groups */}
      <section>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600', marginBottom: '24px' }}>
          Table Actions Groups
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          
          {/* Small Table Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#555' }}>Small Size</h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Default</span>
                <ButtonGroup size="small" type="table-actions" state="default">
                  <Button variant="primary" size="small" leadingIcon={<FilterIcon />}>Filter</Button>
                  <Button variant="primary" size="small" leadingIcon={<SortIcon />}>Sort</Button>
                  <Button variant="primary" size="small" leadingIcon={<MoreActionsIcon />}>More actions</Button>
                </ButtonGroup>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Ghost</span>
                <ButtonGroup size="small" type="table-actions" state="ghost">
                  <Button variant="ghost" size="small" leadingIcon={<FilterIcon />}>Filter</Button>
                  <Button variant="ghost" size="small" leadingIcon={<SortIcon />}>Sort</Button>
                  <Button variant="ghost" size="small" leadingIcon={<MoreActionsIcon />}>More actions</Button>
                </ButtonGroup>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Multi</span>
                <ButtonGroup size="small" type="table-actions" state="multi">
                  <Button variant="ghost" size="small" leadingIcon={<FilterIcon />}>Filter</Button>
                  <Button variant="ghost" size="small" leadingIcon={<SortIcon />}>Sort</Button>
                  <Button variant="primary" size="small" leadingIcon={<MoreActionsIcon />}>More actions</Button>
                </ButtonGroup>
              </div>
            </div>
          </div>

          {/* Default Table Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#555' }}>Default Size</h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Default</span>
                <ButtonGroup size="default" type="table-actions" state="default">
                  <Button variant="primary" leadingIcon={<FilterIcon size={18} />}>Filter</Button>
                  <Button variant="primary" leadingIcon={<SortIcon size={18} />}>Sort</Button>
                  <Button variant="primary" leadingIcon={<MoreActionsIcon size={18} />}>More actions</Button>
                </ButtonGroup>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Ghost</span>
                <ButtonGroup size="default" type="table-actions" state="ghost">
                  <Button variant="ghost" leadingIcon={<FilterIcon size={18} />}>Filter</Button>
                  <Button variant="ghost" leadingIcon={<SortIcon size={18} />}>Sort</Button>
                  <Button variant="ghost" leadingIcon={<MoreActionsIcon size={18} />}>More actions</Button>
                </ButtonGroup>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Multi</span>
                <ButtonGroup size="default" type="table-actions" state="multi">
                  <Button variant="ghost" leadingIcon={<FilterIcon size={18} />}>Filter</Button>
                  <Button variant="ghost" leadingIcon={<SortIcon size={18} />}>Sort</Button>
                  <Button variant="primary" leadingIcon={<MoreActionsIcon size={18} />}>More actions</Button>
                </ButtonGroup>
              </div>
            </div>
          </div>

          {/* Large Table Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#555' }}>Large Size</h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Default</span>
                <ButtonGroup size="large" type="table-actions" state="default">
                  <Button variant="primary" size="large" leadingIcon={<FilterIcon size={20} />}>Filter</Button>
                  <Button variant="primary" size="large" leadingIcon={<SortIcon size={20} />}>Sort</Button>
                  <Button variant="primary" size="large" leadingIcon={<MoreActionsIcon size={20} />}>More actions</Button>
                </ButtonGroup>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Ghost</span>
                <ButtonGroup size="large" type="table-actions" state="ghost">
                  <Button variant="ghost" size="large" leadingIcon={<FilterIcon size={20} />}>Filter</Button>
                  <Button variant="ghost" size="large" leadingIcon={<SortIcon size={20} />}>Sort</Button>
                  <Button variant="ghost" size="large" leadingIcon={<MoreActionsIcon size={20} />}>More actions</Button>
                </ButtonGroup>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Multi</span>
                <ButtonGroup size="large" type="table-actions" state="multi">
                  <Button variant="ghost" size="large" leadingIcon={<FilterIcon size={20} />}>Filter</Button>
                  <Button variant="ghost" size="large" leadingIcon={<SortIcon size={20} />}>Sort</Button>
                  <Button variant="primary" size="large" leadingIcon={<MoreActionsIcon size={20} />}>More actions</Button>
                </ButtonGroup>
              </div>
            </div>
          </div>

          {/* Extra Small Table Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#555' }}>Extra Small Size</h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Default</span>
                <ButtonGroup size="extra-small" type="table-actions" state="default">
                  <Button variant="primary" size="extra-small" leadingIcon={<FilterIcon size={14} />}>Filter</Button>
                  <Button variant="primary" size="extra-small" leadingIcon={<SortIcon size={14} />}>Sort</Button>
                  <Button variant="primary" size="extra-small" leadingIcon={<MoreActionsIcon size={14} />}>More actions</Button>
                </ButtonGroup>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Ghost</span>
                <ButtonGroup size="extra-small" type="table-actions" state="ghost">
                  <Button variant="ghost" size="extra-small" leadingIcon={<FilterIcon size={14} />}>Filter</Button>
                  <Button variant="ghost" size="extra-small" leadingIcon={<SortIcon size={14} />}>Sort</Button>
                  <Button variant="ghost" size="extra-small" leadingIcon={<MoreActionsIcon size={14} />}>More actions</Button>
                </ButtonGroup>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Multi</span>
                <ButtonGroup size="extra-small" type="table-actions" state="multi">
                  <Button variant="ghost" size="extra-small" leadingIcon={<FilterIcon size={14} />}>Filter</Button>
                  <Button variant="ghost" size="extra-small" leadingIcon={<SortIcon size={14} />}>Sort</Button>
                  <Button variant="primary" size="extra-small" leadingIcon={<MoreActionsIcon size={14} />}>More actions</Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete implementation of all button group variations from the Figma design, including standard groups, many-icons toolbar groups, and table actions groups across all sizes and states.',
      },
    },
  },
};

// Interactive examples
export const Interactive: Story = {
  render: () => {
    const [selectedAction, setSelectedAction] = React.useState<string>('');
    
    const handleAction = (action: string) => {
      setSelectedAction(action);
      setTimeout(() => setSelectedAction(''), 2000);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
            Interactive Button Groups
          </h4>
          <p style={{ margin: 0, fontSize: '14px', color: '#666', marginBottom: '16px' }}>
            Click any button to see the interaction
          </p>
          {selectedAction && (
            <p style={{ 
              margin: 0, 
              fontSize: '12px', 
              color: '#28a745',
              fontWeight: '600',
              padding: '8px 16px',
              background: '#d4edda',
              borderRadius: '4px',
              border: '1px solid #c3e6cb'
            }}>
              Action: {selectedAction}
            </p>
          )}
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
          <ButtonGroup size="default" type="default">
            <Button variant="primary" onClick={() => handleAction('Primary Action')}>
              Primary
            </Button>
            <Button variant="secondary" onClick={() => handleAction('Secondary Action')}>
              Secondary
            </Button>
            <Button variant="ghost" onClick={() => handleAction('Ghost Action')}>
              Ghost
            </Button>
          </ButtonGroup>
          
          <ButtonGroup size="small" type="many-icons" state="default" connected>
            <Button variant="primary" size="small" iconOnly icon={<AlignRightIcon />} onClick={() => handleAction('Align Right')} />
            <Button variant="primary" size="small" iconOnly icon={<AlignCenterIcon />} onClick={() => handleAction('Align Center')} />
            <Button variant="primary" size="small" iconOnly icon={<AlignDistributeIcon />} onClick={() => handleAction('Distribute')} />
            <Button variant="primary" size="small" iconOnly icon={<AlignLeftIcon />} onClick={() => handleAction('Align Left')} />
          </ButtonGroup>

          <ButtonGroup size="small" type="table-actions" state="multi">
            <Button variant="ghost" size="small" leadingIcon={<FilterIcon />} onClick={() => handleAction('Filter')}>Filter</Button>
            <Button variant="ghost" size="small" leadingIcon={<SortIcon />} onClick={() => handleAction('Sort')}>Sort</Button>
            <Button variant="primary" size="small" leadingIcon={<MoreActionsIcon />} onClick={() => handleAction('More Actions')}>More actions</Button>
          </ButtonGroup>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive button groups with working click handlers and visual feedback.',
      },
    },
  },
};
