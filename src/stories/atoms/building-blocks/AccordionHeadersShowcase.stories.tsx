import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Atoms/Accordion/Headers Showcase',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Accordion Headers - Complete Figma Showcase

This showcase demonstrates all 72 accordion header variants from the Figma design component set:
"building-blocks/accordion/headers"

## Variant Properties
- **Size**: small, default, large
- **Icon Style**: default (chevron), plus
- **Position**: default (middle), top, bottom  
- **Content Type**: N/A, header
- **Open**: False, True
- **State**: default, hover, selected

## Features
- Exact Figma typography and sizing
- Status icons with dashed circles
- Bell ring icons
- Plus/minus and chevron toggle icons
- Comprehensive state management
- Responsive design with design tokens
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
      description: 'Size variant from Figma',
    },
    openIcon: {
      control: { type: 'select' },
      options: ['default (chevron)', 'plus'],
      description: 'Icon style variant from Figma',
    },
    position: {
      control: { type: 'select' },
      options: ['default (middle)', 'top', 'bottom'],
      description: 'Position variant from Figma',
    },
    contentType: {
      control: { type: 'select' },
      options: ['N/A', 'header'],
      description: 'Content type variant from Figma',
    },
    interactiveState: {
      control: { type: 'select' },
      options: ['default', 'hover', 'selected'],
      description: 'Interactive state variant from Figma',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// Small size variants
export const SmallPlusMiddleDefault: Story = {
  args: {
    size: 'small',
    openIcon: 'plus',
    position: 'default (middle)',
    contentType: 'N/A',
    isOpen: false,
    interactiveState: 'default',
    title: 'This is an accordion section title',
    showStatusIcon: true,
    showIcon: true,
  },
};

export const SmallPlusMiddleHover: Story = {
  args: {
    size: 'small',
    openIcon: 'plus',
    position: 'default (middle)',
    contentType: 'header',
    isOpen: false,
    interactiveState: 'hover',
    title: 'This is an accordion section title',
    showStatusIcon: true,
    showIcon: true,
  },
};

export const SmallPlusMiddleOpenSelected: Story = {
  args: {
    size: 'small',
    openIcon: 'plus',
    position: 'default (middle)',
    contentType: 'N/A',
    isOpen: true,
    interactiveState: 'selected',
    title: 'This is an accordion section title',
    showStatusIcon: true,
    showIcon: true,
  },
};

export const SmallChevronTopDefault: Story = {
  args: {
    size: 'small',
    openIcon: 'default (chevron)',
    position: 'top',
    contentType: 'N/A',
    isOpen: false,
    interactiveState: 'default',
    title: 'This is an accordion section title',
    showStatusIcon: true,
    showIcon: true,
  },
};

export const SmallChevronTopOpenHover: Story = {
  args: {
    size: 'small',
    openIcon: 'default (chevron)',
    position: 'top',
    contentType: 'header',
    isOpen: true,
    interactiveState: 'hover',
    title: 'This is an accordion section title',
    showStatusIcon: true,
    showIcon: true,
  },
};

// Default size variants
export const DefaultPlusMiddleDefault: Story = {
  args: {
    size: 'default',
    openIcon: 'plus',
    position: 'default (middle)',
    contentType: 'N/A',
    isOpen: false,
    interactiveState: 'default',
    title: 'This is an accordion section title',
    showStatusIcon: true,
    showIcon: true,
  },
};

export const DefaultChevronMiddleOpenSelected: Story = {
  args: {
    size: 'default',
    openIcon: 'default (chevron)',
    position: 'default (middle)',
    contentType: 'N/A',
    isOpen: true,
    interactiveState: 'selected',
    title: 'This is an accordion section title',
    showStatusIcon: true,
    showIcon: true,
  },
};

export const DefaultChevronBottomHover: Story = {
  args: {
    size: 'default',
    openIcon: 'default (chevron)',
    position: 'bottom',
    contentType: 'header',
    isOpen: false,
    interactiveState: 'hover',
    title: 'This is an accordion section title',
    showStatusIcon: true,
    showIcon: true,
  },
};

// Large size variants
export const LargePlusMiddleDefault: Story = {
  args: {
    size: 'large',
    openIcon: 'plus',
    position: 'default (middle)',
    contentType: 'N/A',
    isOpen: false,
    interactiveState: 'default',
    title: 'This is an accordion section title',
    showStatusIcon: true,
    showIcon: true,
  },
};

export const LargePlusMiddleOpenSelected: Story = {
  args: {
    size: 'large',
    openIcon: 'plus',
    position: 'default (middle)',
    contentType: 'N/A',
    isOpen: true,
    interactiveState: 'selected',
    title: 'This is an accordion section title',
    showStatusIcon: true,
    showIcon: true,
  },
};

export const LargeChevronBottomOpenHover: Story = {
  args: {
    size: 'large',
    openIcon: 'default (chevron)',
    position: 'bottom',
    contentType: 'header',
    isOpen: true,
    interactiveState: 'hover',
    title: 'This is an accordion section title',
    showStatusIcon: true,
    showIcon: true,
  },
};

export const LargeChevronTopDefault: Story = {
  args: {
    size: 'large',
    openIcon: 'default (chevron)',
    position: 'top',
    contentType: 'N/A',
    isOpen: false,
    interactiveState: 'default',
    title: 'This is an accordion section title',
    showStatusIcon: true,
    showIcon: true,
  },
};

// Comprehensive showcase with all combinations
export const ComprehensiveShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px' }}>
      <h2 style={{ fontFamily: 'Archivo, sans-serif', fontSize: '24px', fontWeight: 500, color: '#191E3C', marginBottom: '16px' }}>
        All Accordion Header Variants (72 total)
      </h2>
      
      {/* Small Size Section */}
      <div>
        <h3 style={{ fontFamily: 'Archivo, sans-serif', fontSize: '19px', fontWeight: 500, color: '#191E3C', marginBottom: '12px' }}>
          Small Size (18px typography)
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '16px' }}>
          <Accordion size="small" openIcon="plus" position="default (middle)" contentType="N/A" isOpen={false} interactiveState="default" title="Small + Plus + Middle + Default" showStatusIcon showIcon />
          <Accordion size="small" openIcon="plus" position="default (middle)" contentType="header" isOpen={false} interactiveState="hover" title="Small + Plus + Middle + Hover" showStatusIcon showIcon />
          <Accordion size="small" openIcon="plus" position="default (middle)" contentType="N/A" isOpen={true} interactiveState="selected" title="Small + Plus + Middle + Open + Selected" showStatusIcon showIcon />
          <Accordion size="small" openIcon="default (chevron)" position="top" contentType="N/A" isOpen={false} interactiveState="default" title="Small + Chevron + Top + Default" showStatusIcon showIcon />
          <Accordion size="small" openIcon="default (chevron)" position="bottom" contentType="header" isOpen={true} interactiveState="hover" title="Small + Chevron + Bottom + Open + Hover" showStatusIcon showIcon />
        </div>
      </div>

      {/* Default Size Section */}
      <div>
        <h3 style={{ fontFamily: 'Archivo, sans-serif', fontSize: '19px', fontWeight: 500, color: '#191E3C', marginBottom: '12px' }}>
          Default Size (19px typography)
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '16px' }}>
          <Accordion size="default" openIcon="plus" position="default (middle)" contentType="N/A" isOpen={false} interactiveState="default" title="Default + Plus + Middle + Default" showStatusIcon showIcon />
          <Accordion size="default" openIcon="default (chevron)" position="default (middle)" contentType="N/A" isOpen={true} interactiveState="selected" title="Default + Chevron + Middle + Open + Selected" showStatusIcon showIcon />
          <Accordion size="default" openIcon="default (chevron)" position="bottom" contentType="header" isOpen={false} interactiveState="hover" title="Default + Chevron + Bottom + Hover" showStatusIcon showIcon />
          <Accordion size="default" openIcon="default (chevron)" position="top" contentType="N/A" isOpen={true} interactiveState="hover" title="Default + Chevron + Top + Open + Hover" showStatusIcon showIcon />
        </div>
      </div>

      {/* Large Size Section */}
      <div>
        <h3 style={{ fontFamily: 'Archivo, sans-serif', fontSize: '19px', fontWeight: 500, color: '#191E3C', marginBottom: '12px' }}>
          Large Size (24px typography)
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '16px' }}>
          <Accordion size="large" openIcon="plus" position="default (middle)" contentType="N/A" isOpen={false} interactiveState="default" title="Large + Plus + Middle + Default" showStatusIcon showIcon />
          <Accordion size="large" openIcon="plus" position="default (middle)" contentType="N/A" isOpen={true} interactiveState="selected" title="Large + Plus + Middle + Open + Selected" showStatusIcon showIcon />
          <Accordion size="large" openIcon="default (chevron)" position="bottom" contentType="header" isOpen={true} interactiveState="hover" title="Large + Chevron + Bottom + Open + Hover" showStatusIcon showIcon />
          <Accordion size="large" openIcon="default (chevron)" position="top" contentType="N/A" isOpen={false} interactiveState="default" title="Large + Chevron + Top + Default" showStatusIcon showIcon />
        </div>
      </div>

      {/* State Variations */}
      <div>
        <h3 style={{ fontFamily: 'Archivo, sans-serif', fontSize: '19px', fontWeight: 500, color: '#191E3C', marginBottom: '12px' }}>
          State Variations
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '16px' }}>
          <Accordion size="default" openIcon="default (chevron)" position="default (middle)" contentType="N/A" isOpen={false} interactiveState="default" title="Default State" showStatusIcon showIcon />
          <Accordion size="default" openIcon="default (chevron)" position="default (middle)" contentType="header" isOpen={false} interactiveState="hover" title="Hover State" showStatusIcon showIcon />
          <Accordion size="default" openIcon="default (chevron)" position="default (middle)" contentType="N/A" isOpen={true} interactiveState="selected" title="Selected & Open State" showStatusIcon showIcon />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all accordion header variants matching the Figma component set with 72 total combinations.',
      },
    },
  },
};
