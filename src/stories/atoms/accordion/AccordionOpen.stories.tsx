import type { Meta, StoryObj } from '@storybook/react';
import { AccordionOpen } from './AccordionOpen';

const meta = {
  title: 'Atoms/Accordion/Open',
  component: AccordionOpen,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Open accordion components with different positioning types for creating stacked accordion groups.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['contained', 'top', 'middle', 'bottom'],
      description: 'Position type for stacking accordions',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size variant',
    },
    title: {
      control: 'text',
      description: 'Accordion title',
    },
    content: {
      control: 'text',
      description: 'Body content',
    },
    showStatusIcon: {
      control: 'boolean',
      description: 'Show status icon',
    },
    showBellIcon: {
      control: 'boolean',
      description: 'Show bell icon',
    },
  },
} satisfies Meta<typeof AccordionOpen>;

export default meta;
type Story = StoryObj<typeof meta>;

// ===== CONTAINED TYPE (Standalone) =====

export const ContainedDefault: Story = {
  args: {
    type: 'contained',
    size: 'default',
    title: 'This is an accordion section title',
  },
};

export const ContainedSmall: Story = {
  args: {
    type: 'contained',
    size: 'small',
    title: 'This is an accordion section title',
  },
};

export const ContainedLarge: Story = {
  args: {
    type: 'contained',
    size: 'large',
    title: 'This is an accordion section title',
  },
};

// ===== TOP TYPE (First in stack) =====

export const TopDefault: Story = {
  args: {
    type: 'top',
    size: 'default',
    title: 'This is an accordion section title',
  },
};

export const TopSmall: Story = {
  args: {
    type: 'top',
    size: 'small',
    title: 'This is an accordion section title',
  },
};

export const TopLarge: Story = {
  args: {
    type: 'top',
    size: 'large',
    title: 'This is an accordion section title',
  },
};

// ===== MIDDLE TYPE (Middle of stack) =====

export const MiddleDefault: Story = {
  args: {
    type: 'middle',
    size: 'default',
    title: 'This is an accordion section title',
  },
};

export const MiddleSmall: Story = {
  args: {
    type: 'middle',
    size: 'small',
    title: 'This is an accordion section title',
  },
};

export const MiddleLarge: Story = {
  args: {
    type: 'middle',
    size: 'large',
    title: 'This is an accordion section title',
  },
};

// ===== BOTTOM TYPE (Last in stack) =====

export const BottomDefault: Story = {
  args: {
    type: 'bottom',
    size: 'default',
    title: 'This is an accordion section title',
  },
};

export const BottomSmall: Story = {
  args: {
    type: 'bottom',
    size: 'small',
    title: 'This is an accordion section title',
  },
};

export const BottomLarge: Story = {
  args: {
    type: 'bottom',
    size: 'large',
    title: 'This is an accordion section title',
  },
};

// ===== STACKED ACCORDION GROUPS =====

export const StackedGroup: Story = {
  name: '🎨 Stacked Accordion Group',
  render: () => (
    <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column' }}>
      <AccordionOpen 
        type="top" 
        size="default" 
        title="First Accordion"
        content="This is the first accordion in a stacked group. Notice how it has rounded corners on top only."
      />
      <AccordionOpen 
        type="middle" 
        size="default" 
        title="Middle Accordion"
        content="This is a middle accordion in the stack. It has no rounded corners and connects seamlessly above and below."
      />
      <AccordionOpen 
        type="middle" 
        size="default" 
        title="Another Middle Accordion"
        content="You can have multiple middle accordions in a stack to create longer groups."
      />
      <AccordionOpen 
        type="bottom" 
        size="default" 
        title="Last Accordion"
        content="This is the last accordion in the stack. It has rounded corners on the bottom only."
      />
    </div>
  ),
};

export const StackedGroupSmall: Story = {
  name: '📦 Stacked Group - Small Size',
  render: () => (
    <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column' }}>
      <AccordionOpen 
        type="top" 
        size="small" 
        title="Configuration Settings"
        content="Manage your application configuration and settings here."
      />
      <AccordionOpen 
        type="middle" 
        size="small" 
        title="User Preferences"
        content="Customize your user preferences and profile settings."
      />
      <AccordionOpen 
        type="bottom" 
        size="small" 
        title="Advanced Options"
        content="Access advanced configuration options and features."
      />
    </div>
  ),
};

export const StackedGroupLarge: Story = {
  name: '📦 Stacked Group - Large Size',
  render: () => (
    <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column' }}>
      <AccordionOpen 
        type="top" 
        size="large" 
        title="Project Overview"
        content="View comprehensive details about your project including timeline, milestones, and key metrics."
      />
      <AccordionOpen 
        type="middle" 
        size="large" 
        title="Team Members"
        content="Manage team member access, roles, and permissions for this project."
      />
      <AccordionOpen 
        type="bottom" 
        size="large" 
        title="Resources & Documentation"
        content="Access project resources, documentation, and related materials."
      />
    </div>
  ),
};

export const MultipleStackedGroups: Story = {
  name: '🎨 Multiple Accordion Groups',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '20px', color: '#191E3C' }}>
          Account Settings
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <AccordionOpen 
            type="top" 
            size="default" 
            title="Profile Information"
            content="Update your profile details, contact information, and personal preferences."
          />
          <AccordionOpen 
            type="middle" 
            size="default" 
            title="Security & Privacy"
            content="Manage your password, two-factor authentication, and privacy settings."
          />
          <AccordionOpen 
            type="bottom" 
            size="default" 
            title="Notification Preferences"
            content="Configure how and when you receive notifications from the system."
          />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '20px', color: '#191E3C' }}>
          Billing & Subscription
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <AccordionOpen 
            type="top" 
            size="default" 
            title="Current Plan"
            content="View your current subscription plan, features, and usage limits."
          />
          <AccordionOpen 
            type="bottom" 
            size="default" 
            title="Payment Methods"
            content="Manage your payment methods and billing information."
          />
        </div>
      </div>

      <AccordionOpen 
        type="contained" 
        size="default" 
        title="Standalone Item"
        content="This is a standalone accordion that's not part of any group."
      />
    </div>
  ),
};

export const AllSizesComparison: Story = {
  name: '📊 All Sizes Comparison',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '800px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo' }}>Small Size</h3>
        <AccordionOpen type="contained" size="small" />
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo' }}>Default Size</h3>
        <AccordionOpen type="contained" size="default" />
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo' }}>Large Size</h3>
        <AccordionOpen type="contained" size="large" />
      </div>
    </div>
  ),
};

export const WithoutIcons: Story = {
  name: 'Without Icons',
  render: () => (
    <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column' }}>
      <AccordionOpen 
        type="top" 
        size="default" 
        title="No Status or Bell Icons"
        content="This accordion has both icons disabled."
        showStatusIcon={false}
        showBellIcon={false}
      />
      <AccordionOpen 
        type="middle" 
        size="default" 
        title="Only Bell Icon"
        content="This accordion shows only the bell icon."
        showStatusIcon={false}
        showBellIcon={true}
      />
      <AccordionOpen 
        type="bottom" 
        size="default" 
        title="Only Status Icon"
        content="This accordion shows only the status icon."
        showStatusIcon={true}
        showBellIcon={false}
      />
    </div>
  ),
};

export const CustomContent: Story = {
  name: 'Custom Content',
  render: () => (
    <AccordionOpen type="contained" size="default" title="Accordion with Custom Content">
      <div>
        <p style={{ marginBottom: '12px', color: '#374151', fontFamily: 'Roboto Flex' }}>
          You can provide custom React content as children instead of plain text.
        </p>
        <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#6D7280' }}>
          <li>Custom bullet points</li>
          <li>Formatted text</li>
          <li>Any React components</li>
        </ul>
      </div>
    </AccordionOpen>
  ),
};
