import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SplitButton } from '../../atoms/SplitButton';
import type { SplitButtonMenuItem } from '../../atoms/SplitButton';
import { AlarmIcon } from '../../atoms/Button';

const meta: Meta<typeof SplitButton> = {
  title: 'Design System/Figma Showcase Files/Comprehensive Split Buttons Showcase',
  component: SplitButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Comprehensive showcase of all split button variants in a grid format, matching the exact Figma design layout.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SplitButton>;

// Default menu items for stories
const defaultMenuItems: SplitButtonMenuItem[] = [
  {
    id: 'top',
    label: 'This is the top',
    onClick: () => console.log('Top item clicked'),
  },
  {
    id: 'middle1',
    label: 'This is the middle',
    onClick: () => console.log('Middle 1 item clicked'),
  },
  {
    id: 'middle2',
    label: 'This is the middle',
    onClick: () => console.log('Middle 2 item clicked'),
  },
  {
    id: 'bottom',
    label: 'This is the bottom',
    onClick: () => console.log('Bottom item clicked'),
  },
];

// Comprehensive states showcase that matches the Figma design grid
export const ComprehensiveSplitButtonsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Primary Split Buttons</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', alignItems: 'center' }}>
          {/* Header row */}
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Size</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Default</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Open</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Loading</div>

          {/* Extra Small row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Extra Small</div>
          <SplitButton size="extra-small" type="primary" menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="extra-small" type="primary" isOpen menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="extra-small" type="primary" loading menuItems={defaultMenuItems}>Label</SplitButton>

          {/* Small row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Small</div>
          <SplitButton size="small" type="primary" menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="small" type="primary" isOpen menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="small" type="primary" loading menuItems={defaultMenuItems}>Label</SplitButton>

          {/* Default row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Default</div>
          <SplitButton size="default" type="primary" menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="default" type="primary" isOpen menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="default" type="primary" loading menuItems={defaultMenuItems}>Label</SplitButton>

          {/* Large row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Large</div>
          <SplitButton size="large" type="primary" menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="large" type="primary" isOpen menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="large" type="primary" loading menuItems={defaultMenuItems}>Label</SplitButton>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Secondary Split Buttons</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', alignItems: 'center' }}>
          {/* Header row */}
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Size</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Default</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Open</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Loading</div>

          {/* Small row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Small</div>
          <SplitButton size="small" type="secondary" menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="small" type="secondary" isOpen menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="small" type="secondary" loading menuItems={defaultMenuItems}>Label</SplitButton>

          {/* Default row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Default</div>
          <SplitButton size="default" type="secondary" menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="default" type="secondary" isOpen menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="default" type="secondary" loading menuItems={defaultMenuItems}>Label</SplitButton>

          {/* Large row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Large</div>
          <SplitButton size="large" type="secondary" menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="large" type="secondary" isOpen menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="large" type="secondary" loading menuItems={defaultMenuItems}>Label</SplitButton>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Ghost Split Buttons</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', alignItems: 'center' }}>
          {/* Header row */}
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Size</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Default</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Open</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Loading</div>

          {/* Small row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Small</div>
          <SplitButton size="small" type="ghost" menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="small" type="ghost" isOpen menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="small" type="ghost" loading menuItems={defaultMenuItems}>Label</SplitButton>

          {/* Default row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Default</div>
          <SplitButton size="default" type="ghost" menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="default" type="ghost" isOpen menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="default" type="ghost" loading menuItems={defaultMenuItems}>Label</SplitButton>

          {/* Large row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Large</div>
          <SplitButton size="large" type="ghost" menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="large" type="ghost" isOpen menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="large" type="ghost" loading menuItems={defaultMenuItems}>Label</SplitButton>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all split button variants in a grid format, matching the exact Figma design layout.',
      },
    },
  },
};
