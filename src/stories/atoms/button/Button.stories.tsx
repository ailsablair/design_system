import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Button } from './Button';
import './button.css';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['extra-small', 'small', 'default', 'large'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'ghost', 'error', 'warning', 'info', 'success'],
    },
    position: {
      control: 'select',
      options: ['single', 'top', 'middle', 'bottom'],
    },
    width: {
      control: 'select',
      options: ['auto', 'full'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * ## 1. Overview
 * 
 * The `Button` component is the primary interaction element in the Echo Design System. 
 * It comes in several variants and sizes to accommodate different context and importance.
 * 
 * ### Variants & Tokens
 * - **Primary**: Used for the main action on a page.
 *   - `background-color`: `var(--primary-blue-blue)`
 *   - `color`: `var(--base-white)`
 *   - `hover-shadow`: `var(--hover-shadow-blue-box-shadow)`
 * - **Secondary**: Used for secondary actions.
 *   - `background-color`: `var(--base-white)`
 *   - `color`: `var(--primary-blue-blue)`
 *   - `border`: `1px solid var(--primary-blue-blue)`
 * 
 * ### Spacing & Sizing
 * - `padding`: Varies by size (`var(--spacing-sizing-8px)` to `var(--spacing-sizing-24px)`)
 * - `border-radius`: `var(--spacing-radius-8px)` (Adjusted for position groups)
 */
export const Overview: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ marginBottom: '12px' }}>Variants</h4>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button {...args} variant="primary">Primary</Button>
          <Button {...args} variant="secondary">Secondary</Button>
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: '12px' }}>Position Grouping (Stackable)</h4>
        <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
          <Button {...args} position="top">Top Button</Button>
          <Button {...args} position="middle">Middle Button</Button>
          <Button {...args} position="bottom">Bottom Button</Button>
        </div>
      </div>
    </div>
  )
};

/**
 * ## 2. Interactive Playground
 * 
 * Use the controls below to interact with the button and see how it behaves with different props.
 */
export const Playground: Story = {
  args: {
    children: 'Interactive Button',
    variant: 'primary',
    size: 'default',
    position: 'single',
    width: 'auto',
  },
};

/**
 * ## 3. Size Comparison
 * 
 * Below is a comparison of all button sizes with their target dimensions.
 * 
 * | Size | Height | Min Width | H-Padding |
 * |------|--------|-----------|-----------|
 * | Extra Small | 27px | 48px | 8px |
 * | Small | 32px | 80px | 12px |
 * | Default | 44px | 80px | 16px |
 * | Large | 56px | 80px | 24px |
 */
export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ width: '100px', fontWeight: 'bold' }}>Large (56px)</span>
        <Button size="large">Large Button</Button>
        <div style={{ fontSize: '12px', color: '#666' }}>H: 56px | P: 24px</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ width: '100px', fontWeight: 'bold' }}>Default (44px)</span>
        <Button size="default">Default Button</Button>
        <div style={{ fontSize: '12px', color: '#666' }}>H: 44px | P: 16px</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ width: '100px', fontWeight: 'bold' }}>Small (32px)</span>
        <Button size="small">Small Button</Button>
        <div style={{ fontSize: '12px', color: '#666' }}>H: 32px | P: 12px</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ width: '100px', fontWeight: 'bold' }}>Extra Small (27px)</span>
        <Button size="extra-small">XS Button</Button>
        <div style={{ fontSize: '12px', color: '#666' }}>H: 27px | P: 8px</div>
      </div>
    </div>
  )
};

/**
 * ## 4. Function Blurb
 * 
 * **How does a button function?**
 * A button is a fundamental UI component that triggers an immediate action or a navigation event when clicked or tapped. 
 * It serves as a clear call-to-action (CTA) for users.
 * 
 * **What is its purpose?**
 * The purpose of a button is to bridge the gap between user intent and system response. 
 * It provides a visual affordance that suggests "clickability" and "interactivity".
 * 
 * **Where and Why might we use the app?**
 * Buttons are used throughout the application in forms, modals, toolbars, and navigation headers. 
 * We use different variants (Primary vs Secondary) to establish a visual hierarchy, guiding the user toward the most important task while offering alternative paths.
 */
export const Documentation: Story = {
  render: () => <div style={{ maxWidth: '600px' }}>The documentation sections above provide full details on button usage.</div>
};

/**
 * ### Primary Buttons (As per attachments)
 * 
 * These examples show the "Primary" buttons in their stacked configuration as provided in the design files.
 */
export const PrimaryStacked: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', width: '250px' }}>
      <Button position="top" size="small">Small Top</Button>
      <Button position="middle" size="default">Default Middle</Button>
      <Button position="bottom" size="large">Large Bottom</Button>
    </div>
  )
};
