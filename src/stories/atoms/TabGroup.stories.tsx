import type { Meta, StoryObj } from '@storybook/react';
import { TabGroup } from './TabGroup';

const meta: Meta<typeof TabGroup> = {
  title: 'Atoms/TabGroup',
  component: TabGroup,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A container component for organizing multiple tabs in various layouts and directions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal-narrow', 'horizontal-wide', 'vertical'],
      description: 'Layout direction of the tab group',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size variant applied to all tabs',
    },
    type: {
      control: 'select',
      options: ['default', 'secondary', 'contained', 'dark-contained'],
      description: 'Type variant applied to all tabs',
    },
    activeTab: {
      control: 'number',
      description: 'Index of the currently active tab',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TabGroup>;

// Sample tabs data
const defaultTabs = [
  { children: 'Tab label' },
  { children: 'Tab label' },
  { children: 'Tab label' },
  { children: 'Tab label' },
];

export const HorizontalNarrowSmall: Story = {
  args: {
    direction: 'horizontal-narrow',
    size: 'small',
    type: 'default',
    tabs: defaultTabs,
    activeTab: 0,
  },
};

export const HorizontalWideSmall: Story = {
  args: {
    direction: 'horizontal-wide',
    size: 'small',
    type: 'default',
    tabs: defaultTabs,
    activeTab: 0,
  },
};

export const VerticalSmall: Story = {
  args: {
    direction: 'vertical',
    size: 'small',
    type: 'default',
    tabs: defaultTabs,
    activeTab: 0,
  },
};

export const HorizontalNarrowDefault: Story = {
  args: {
    direction: 'horizontal-narrow',
    size: 'default',
    type: 'default',
    tabs: defaultTabs,
    activeTab: 0,
  },
};

export const HorizontalWideDefault: Story = {
  args: {
    direction: 'horizontal-wide',
    size: 'default',
    type: 'default',
    tabs: defaultTabs,
    activeTab: 0,
  },
};

export const VerticalDefault: Story = {
  args: {
    direction: 'vertical',
    size: 'default',
    type: 'default',
    tabs: defaultTabs,
    activeTab: 0,
  },
};

export const HorizontalNarrowLarge: Story = {
  args: {
    direction: 'horizontal-narrow',
    size: 'large',
    type: 'default',
    tabs: defaultTabs,
    activeTab: 0,
  },
};

export const HorizontalWideLarge: Story = {
  args: {
    direction: 'horizontal-wide',
    size: 'large',
    type: 'default',
    tabs: defaultTabs,
    activeTab: 0,
  },
};

export const VerticalLarge: Story = {
  args: {
    direction: 'vertical',
    size: 'large',
    type: 'default',
    tabs: defaultTabs,
    activeTab: 0,
  },
};

export const SecondaryHorizontal: Story = {
  args: {
    direction: 'horizontal-narrow',
    size: 'small',
    type: 'secondary',
    tabs: defaultTabs,
    activeTab: 0,
  },
};

export const ContainedHorizontal: Story = {
  args: {
    direction: 'horizontal-narrow',
    size: 'small',
    type: 'contained',
    tabs: defaultTabs,
    activeTab: 0,
  },
};

export const ContainedVertical: Story = {
  args: {
    direction: 'vertical',
    size: 'small',
    type: 'contained',
    tabs: defaultTabs,
    activeTab: 0,
  },
};

export const DarkContainedHorizontal: Story = {
  args: {
    direction: 'horizontal-narrow',
    size: 'small',
    type: 'dark-contained',
    tabs: defaultTabs,
    activeTab: 0,
  },
};

export const DarkContainedVertical: Story = {
  args: {
    direction: 'vertical',
    size: 'small',
    type: 'dark-contained',
    tabs: defaultTabs,
    activeTab: 0,
  },
};
