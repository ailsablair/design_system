import type { Meta, StoryObj } from '@storybook/react';
import { StatusIconwLabel } from './StatusIconwLabel';
import type { StatusIconwLabelSize } from './statusIconwLabel.assets';

const meta: Meta<typeof StatusIconwLabel> = {
  title: 'Atoms/Status Indicators/StatusIconwLabel',
  component: StatusIconwLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['warning'],
    },
    state: {
      control: 'select',
      options: ['empty', 'future'],
    },
    size: {
      control: 'select',
      options: [8, 16, 24, 32, 40, 48, 56, 64, 80, 88],
    },
    orientation: {
      control: 'inline-radio',
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof StatusIconwLabel>;

type WarningState = 'empty' | 'future';

const createStory = (state: WarningState, size: StatusIconwLabelSize): Story => ({
  args: {
    status: 'warning',
    state,
    size,
    label: state === 'empty' ? 'Warning (Pending)' : 'Warning (Upcoming)',
    description: state === 'empty' ? 'No actions are scheduled yet.' : 'Action items pending scheduling.',
  },
});

export const Playground: Story = {
  args: {
    status: 'warning',
    state: 'future',
    size: 40,
    label: 'Warning (Upcoming)',
    description: 'Action items pending scheduling.',
  },
};

export const WarningEmpty8 = createStory('empty', 8);
export const WarningEmpty16 = createStory('empty', 16);
export const WarningEmpty24 = createStory('empty', 24);
export const WarningEmpty32 = createStory('empty', 32);
export const WarningEmpty40 = createStory('empty', 40);
export const WarningEmpty48 = createStory('empty', 48);
export const WarningEmpty56 = createStory('empty', 56);
export const WarningEmpty64 = createStory('empty', 64);
export const WarningEmpty80 = createStory('empty', 80);
export const WarningEmpty88 = createStory('empty', 88);

export const WarningFuture8 = createStory('future', 8);
export const WarningFuture16 = createStory('future', 16);
export const WarningFuture24 = createStory('future', 24);
export const WarningFuture32 = createStory('future', 32);
export const WarningFuture40 = createStory('future', 40);
export const WarningFuture48 = createStory('future', 48);
export const WarningFuture56 = createStory('future', 56);
export const WarningFuture64 = createStory('future', 64);
export const WarningFuture80 = createStory('future', 80);
export const WarningFuture88 = createStory('future', 88);
