import type { Meta, StoryObj } from '@storybook/react-vite';
import { TableCellShowcase } from './TableCellShowcase';

const meta: Meta<typeof TableCellShowcase> = {
  title: 'Atoms/🧱 Building Blocks/Table/TableCellShowcase',
  component: TableCellShowcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Comprehensive table layout composed entirely from Echo design system primitives. Demonstrates selectable rows, status indicators, badges, progress bars, ratings, and supporting component variations matching the Figma specification.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TableCellShowcase>;

export const Default: Story = {
  args: {},
};
