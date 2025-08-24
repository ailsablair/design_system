import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SplitButton } from '../../atoms/button/SplitButton';
import type { SplitButtonMenuItem } from '../../atoms/button/SplitButton';

const meta: Meta<typeof SplitButton> = {
  title: 'Design System/Figma Showcase Files/Effects Showcase',
  component: SplitButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Showcase of the improved effects tokens implementation and visual feedback for different split button states. All hover effects now use proper design system shadow tokens (--shadow-lg, --shadow-xl, --shadow-dropdown) instead of hardcoded values.',
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

// Effects and Hover States Showcase
export const EffectsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Split Button Effects & Hover States</h3>
        <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: '#666' }}>
          Hover over the buttons to see the enhanced shadow effects using proper design tokens.
          Click main button areas to see auto-open functionality with visual feedback.
        </p>
      </div>

      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Hover Effects Comparison</h4>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: '500' }}>Primary</span>
            <SplitButton size="default" type="primary" menuItems={defaultMenuItems}>
              Hover Me
            </SplitButton>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: '500' }}>Secondary</span>
            <SplitButton size="default" type="secondary" menuItems={defaultMenuItems}>
              Hover Me
            </SplitButton>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: '500' }}>Ghost</span>
            <SplitButton size="default" type="ghost" menuItems={defaultMenuItems}>
              Hover Me
            </SplitButton>
          </div>
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Open State Visual Feedback</h4>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: '500' }}>Primary Open</span>
            <SplitButton size="default" type="primary" isOpen menuItems={defaultMenuItems}>
              Open State
            </SplitButton>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: '500' }}>Secondary Open</span>
            <SplitButton size="default" type="secondary" isOpen menuItems={defaultMenuItems}>
              Open State
            </SplitButton>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: '500' }}>Ghost Open</span>
            <SplitButton size="default" type="ghost" isOpen menuItems={defaultMenuItems}>
              Open State
            </SplitButton>
          </div>
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>All Sizes with Effects</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <SplitButton size="extra-small" type="primary" menuItems={defaultMenuItems}>
            XS
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
        <p style={{ fontSize: '12px', color: '#666', margin: '8px 0 0 0' }}>
          All sizes use consistent --shadow-lg token for hover effects
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of the improved effects tokens implementation and visual feedback for different split button states. All hover effects now use proper design system shadow tokens (--shadow-lg, --shadow-xl, --shadow-dropdown) instead of hardcoded values.',
      },
    },
  },
};
