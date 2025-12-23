import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SplitButton } from '../../atoms/SplitButton';
import type { SplitButtonMenuItem } from '../../atoms/SplitButton';
import { Alarm as AlarmIcon } from '@mui/icons-material';

const meta: Meta<typeof SplitButton> = {
  title: 'Design System/Figma Showcase Files/Design System Showcase',
  component: SplitButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Complete design system showcase with all split button variants, sizes, and states, matching the Figma specifications.',
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

// Complete design system showcase
export const DesignSystemShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Primary Split Buttons - All Sizes</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <SplitButton size="extra-small" type="primary" menuItems={defaultMenuItems}>
            Extra Small
          </SplitButton>
          <SplitButton size="small" type="primary" menuItems={defaultMenuItems}>
            Small
          </SplitButton>
          <SplitButton size="default" type="primary" menuItems={defaultMenuItems}>
            Default
          </SplitButton>
          <SplitButton size="large" type="primary" menuItems={defaultMenuItems}>
            Large
          </SplitButton>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Secondary Split Buttons - All Sizes</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <SplitButton size="extra-small" type="secondary" menuItems={defaultMenuItems}>
            Extra Small
          </SplitButton>
          <SplitButton size="small" type="secondary" menuItems={defaultMenuItems}>
            Small
          </SplitButton>
          <SplitButton size="default" type="secondary" menuItems={defaultMenuItems}>
            Default
          </SplitButton>
          <SplitButton size="large" type="secondary" menuItems={defaultMenuItems}>
            Large
          </SplitButton>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Ghost Split Buttons - All Sizes</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <SplitButton size="extra-small" type="ghost" menuItems={defaultMenuItems}>
            Extra Small
          </SplitButton>
          <SplitButton size="small" type="ghost" menuItems={defaultMenuItems}>
            Small
          </SplitButton>
          <SplitButton size="default" type="ghost" menuItems={defaultMenuItems}>
            Default
          </SplitButton>
          <SplitButton size="large" type="ghost" menuItems={defaultMenuItems}>
            Large
          </SplitButton>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Split Button States</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ minWidth: '80px', fontSize: '14px', fontWeight: '500' }}>Primary:</span>
            <SplitButton size="default" type="primary" menuItems={defaultMenuItems}>
              Default
            </SplitButton>
            <SplitButton size="default" type="primary" loading menuItems={defaultMenuItems}>
              Loading
            </SplitButton>
            <SplitButton size="default" type="primary" disabled menuItems={defaultMenuItems}>
              Disabled
            </SplitButton>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ minWidth: '80px', fontSize: '14px', fontWeight: '500' }}>Secondary:</span>
            <SplitButton size="default" type="secondary" menuItems={defaultMenuItems}>
              Default
            </SplitButton>
            <SplitButton size="default" type="secondary" loading menuItems={defaultMenuItems}>
              Loading
            </SplitButton>
            <SplitButton size="default" type="secondary" disabled menuItems={defaultMenuItems}>
              Disabled
            </SplitButton>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ minWidth: '80px', fontSize: '14px', fontWeight: '500' }}>Ghost:</span>
            <SplitButton size="default" type="ghost" menuItems={defaultMenuItems}>
              Default
            </SplitButton>
            <SplitButton size="default" type="ghost" loading menuItems={defaultMenuItems}>
              Loading
            </SplitButton>
            <SplitButton size="default" type="ghost" disabled menuItems={defaultMenuItems}>
              Disabled
            </SplitButton>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Open Dropdown States</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <SplitButton size="small" type="primary" isOpen menuItems={defaultMenuItems}>
            Small Open
          </SplitButton>
          <SplitButton size="default" type="secondary" isOpen menuItems={defaultMenuItems}>
            Default Open
          </SplitButton>
          <SplitButton size="large" type="ghost" isOpen menuItems={defaultMenuItems}>
            Large Open
          </SplitButton>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>With Leading Icons</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <SplitButton size="default" type="primary" leadingIcon={<AlarmIcon sx={{ fontSize: 18 }} />} menuItems={defaultMenuItems}>
            Primary
          </SplitButton>
          <SplitButton size="default" type="secondary" leadingIcon={<AlarmIcon sx={{ fontSize: 18 }} />} menuItems={defaultMenuItems}>
            Secondary
          </SplitButton>
          <SplitButton size="default" type="ghost" leadingIcon={<AlarmIcon sx={{ fontSize: 18 }} />} menuItems={defaultMenuItems}>
            Ghost
          </SplitButton>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete design system showcase with all split button variants, sizes, and states, matching the Figma specifications.',
      },
    },
  },
};
