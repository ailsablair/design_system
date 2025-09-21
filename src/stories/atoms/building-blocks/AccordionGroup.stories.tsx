import type { Meta, StoryObj } from '@storybook/react';
import { AccordionGroup } from './AccordionGroup';

const meta: Meta<typeof AccordionGroup> = {
  title: 'Atoms/AccordionGroup',
  component: AccordionGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# AccordionGroup Component

A group component that manages multiple accordion items with comprehensive state management and accessibility features.

## Features
- Single or multi-select behavior
- Controlled or uncontrolled state management
- Customizable spacing and borders
- Full accessibility support
- Responsive design
- Supports all accordion variants from Figma

## Use Cases
- FAQ sections
- Settings panels
- Navigation groups
- Content organization
- Step-by-step processes
        `,
      },
    },
  },
  argTypes: {
    allowMultiple: {
      control: { type: 'boolean' },
      description: 'Whether multiple accordions can be open at once',
    },
    allowAllClosed: {
      control: { type: 'boolean' },
      description: 'Whether to allow all accordions to be closed',
    },
    spacing: {
      control: { type: 'select' },
      options: ['none', 'small', 'medium', 'large'],
      description: 'Spacing between accordion items',
    },
    showBorders: {
      control: { type: 'boolean' },
      description: 'Whether to show borders between items',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AccordionGroup>;

// Sample accordion configurations
const sampleAccordions = [
  {
    type: 'simple' as const,
    size: 'default' as const,
    title: 'Account Settings',
    description: 'Manage your account information and preferences',
    content: 'Here you can update your personal information, change your password, and manage your account settings.',
    showStatusIcon: true,
    statusIconType: 'empty' as const,
  },
  {
    type: 'simple' as const,
    size: 'default' as const,
    title: 'Privacy & Security',
    description: 'Control your privacy settings and security options',
    content: 'Configure privacy settings, two-factor authentication, and manage your security preferences.',
    showStatusIcon: true,
    statusIconType: 'empty' as const,
  },
  {
    type: 'simple' as const,
    size: 'default' as const,
    title: 'Notifications',
    description: 'Customize your notification preferences',
    content: 'Choose which notifications you want to receive and how you want to be notified.',
    showStatusIcon: true,
    statusIconType: 'complete' as const,
  },
];

export const Default: Story = {
  args: {
    accordions: sampleAccordions,
    allowMultiple: false,
    allowAllClosed: true,
    spacing: 'medium',
    showBorders: false,
  },
};

export const MultipleOpen: Story = {
  args: {
    accordions: sampleAccordions,
    allowMultiple: true,
    allowAllClosed: true,
    spacing: 'medium',
    showBorders: false,
    defaultOpenIndices: [0, 2],
  },
};

export const BorderedGroup: Story = {
  args: {
    accordions: sampleAccordions,
    allowMultiple: false,
    allowAllClosed: true,
    spacing: 'none',
    showBorders: true,
  },
};

export const CompactSpacing: Story = {
  args: {
    accordions: sampleAccordions,
    allowMultiple: true,
    allowAllClosed: true,
    spacing: 'small',
    showBorders: false,
  },
};

export const LargeSpacing: Story = {
  args: {
    accordions: sampleAccordions,
    allowMultiple: false,
    allowAllClosed: true,
    spacing: 'large',
    showBorders: false,
  },
};

export const NumberedAccordions: Story = {
  args: {
    accordions: [
      {
        type: 'number' as const,
        size: 'default' as const,
        title: 'Personal Information',
        number: '01',
        content: 'Enter your personal details including name, email, and contact information.',
      },
      {
        type: 'number' as const,
        size: 'default' as const,
        title: 'Company Details',
        number: '02',
        content: 'Provide information about your company and business requirements.',
      },
      {
        type: 'number' as const,
        size: 'default' as const,
        title: 'Preferences',
        number: '03',
        content: 'Set your preferences and customize your experience.',
      },
    ],
    allowMultiple: false,
    allowAllClosed: false,
    spacing: 'medium',
    showBorders: false,
    defaultOpenIndices: [0],
  },
};

export const DecorativeAccordions: Story = {
  args: {
    accordions: [
      {
        type: 'decorative' as const,
        size: 'default' as const,
        title: 'Getting Started',
        content: 'Learn the basics of using our platform with this comprehensive guide.',
      },
      {
        type: 'decorative' as const,
        size: 'default' as const,
        title: 'Advanced Features',
        content: 'Explore advanced features and capabilities for power users.',
      },
      {
        type: 'decorative' as const,
        size: 'default' as const,
        title: 'Best Practices',
        content: 'Follow these best practices to get the most out of our platform.',
      },
    ],
    allowMultiple: true,
    allowAllClosed: true,
    spacing: 'medium',
    showBorders: false,
  },
};

export const MixedSizes: Story = {
  args: {
    accordions: [
      {
        type: 'simple' as const,
        size: 'large' as const,
        title: 'Important Notice',
        description: 'This is a high-priority item that requires attention',
        content: 'Please review this important information carefully.',
        showStatusIcon: true,
        statusIconType: 'current' as const,
      },
      {
        type: 'simple' as const,
        size: 'default' as const,
        title: 'Regular Item',
        description: 'This is a standard accordion item',
        content: 'Standard content for regular accordion items.',
        showStatusIcon: true,
        statusIconType: 'empty' as const,
      },
      {
        type: 'simple' as const,
        size: 'small' as const,
        title: 'Minor Details',
        description: 'Additional information',
        content: 'Less important details and supplementary information.',
        showStatusIcon: true,
        statusIconType: 'complete' as const,
      },
    ],
    allowMultiple: true,
    allowAllClosed: true,
    spacing: 'medium',
    showBorders: false,
  },
};

export const FAQSection: Story = {
  args: {
    accordions: [
      {
        type: 'simple' as const,
        size: 'default' as const,
        title: 'How do I reset my password?',
        content: 'To reset your password, click on the "Forgot Password" link on the login page and follow the instructions sent to your email.',
        showStatusIcon: false,
        showIcon: false,
        openIcon: 'plus' as const,
      },
      {
        type: 'simple' as const,
        size: 'default' as const,
        title: 'Can I change my subscription plan?',
        content: 'Yes, you can upgrade or downgrade your subscription plan at any time from your account settings. Changes will be reflected in your next billing cycle.',
        showStatusIcon: false,
        showIcon: false,
        openIcon: 'plus' as const,
      },
      {
        type: 'simple' as const,
        size: 'default' as const,
        title: 'How do I contact support?',
        content: 'You can contact our support team through the help center, live chat, or by emailing support@company.com. We typically respond within 24 hours.',
        showStatusIcon: false,
        showIcon: false,
        openIcon: 'plus' as const,
      },
      {
        type: 'simple' as const,
        size: 'default' as const,
        title: 'Is my data secure?',
        content: 'Yes, we use industry-standard encryption and security measures to protect your data. All data is encrypted in transit and at rest.',
        showStatusIcon: false,
        showIcon: false,
        openIcon: 'plus' as const,
      },
    ],
    allowMultiple: true,
    allowAllClosed: true,
    spacing: 'small',
    showBorders: true,
  },
};

export const ControlledExample: Story = {
  args: {
    accordions: sampleAccordions,
    allowMultiple: false,
    allowAllClosed: true,
    spacing: 'medium',
    showBorders: false,
    openIndices: [1],
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a controlled accordion group where the open state is managed externally.',
      },
    },
  },
};
