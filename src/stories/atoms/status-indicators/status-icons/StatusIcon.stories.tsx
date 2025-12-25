import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StatusIcon } from './StatusIcon';
import type { StatusIconType } from './statusIcon.assets';
import type { StatusIconState, StatusIconSize } from './statusIcon.styles';

const meta: Meta<typeof StatusIcon> = {
  title: 'Atoms/Status Indicators/Status Icon',
  component: StatusIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['alert', 'complete', 'locked', 'comment', 'notification', 'error', 'note'],
    },
    state: {
      control: 'select',
      options: ['empty', 'current', 'complete', 'error'],
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'medium', 'large', 'xlarge'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatusIcon>;

export const Playground: Story = {
  args: {
    type: 'notification',
    state: 'current',
    size: 'default',
    disabled: false,
  },
};

const types: StatusIconType[] = ['alert', 'complete', 'locked', 'comment', 'notification', 'error', 'note'];
const states: StatusIconState[] = ['empty', 'current', 'complete', 'error'];
const sizes: StatusIconSize[] = ['small', 'default', 'medium', 'large', 'xlarge'];

export const AllCombinations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      {sizes.map((size) => (
        <div key={size}>
          <h3 style={{ marginBottom: '20px', textTransform: 'capitalize' }}>Size: {size}</h3>
          <table style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ padding: '8px', textAlign: 'left' }}>Type \ State</th>
                {states.map((state) => (
                  <th key={state} style={{ padding: '8px', textTransform: 'capitalize' }}>{state}</th>
                ))}
                <th style={{ padding: '8px' }}>Disabled (Current)</th>
              </tr>
            </thead>
            <tbody>
              {types.map((type) => (
                <tr key={type}>
                  <td style={{ padding: '8px', textTransform: 'capitalize', fontWeight: 'bold' }}>{type}</td>
                  {states.map((state) => (
                    <td key={state} style={{ padding: '16px', textAlign: 'center' }}>
                      <StatusIcon type={type} state={state} size={size} />
                    </td>
                  ))}
                  <td style={{ padding: '16px', textAlign: 'center' }}>
                    <StatusIcon type={type} state="current" size={size} disabled />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <StatusIcon type="notification" state="current" size="small" />
      <StatusIcon type="notification" state="current" size="default" />
      <StatusIcon type="notification" state="current" size="large" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <StatusIcon type="alert" state="current" size="default" />
        <StatusIcon type="alert" state="current" size="default" disabled />
        <StatusIcon type="locked" state="current" size="default" />
        <StatusIcon type="locked" state="current" size="default" disabled />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <StatusIcon type="comment" state="empty" size="default" />
        <StatusIcon type="comment" state="empty" size="default" disabled />
        <StatusIcon type="comment" state="current" size="default" />
        <StatusIcon type="comment" state="current" size="default" disabled />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <StatusIcon type="comment" state="complete" size="default" />
        <StatusIcon type="comment" state="complete" size="default" disabled />
        <StatusIcon type="comment" state="error" size="default" />
        <StatusIcon type="comment" state="error" size="default" disabled />
      </div>
    </div>
  ),
};
