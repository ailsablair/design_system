import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  AccordionStatusBadge,
  type AccordionStatusBadgeTone,
  type AccordionStatusBadgeVariant,
  type AccordionStatusBadgeSize,
} from './AccordionStatusBadge';

const meta: Meta<typeof AccordionStatusBadge> = {
  title: 'Atoms/Accordion/StatusBadge',
  component: AccordionStatusBadge,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Accordion status badges built with Echo design tokens. Supports multiple tones, three size variants, default/active/filled states, and disabled styling consistent with the Figma specification.',
      },
    },
  },
  argTypes: {
    tone: {
      control: 'select',
      options: ['warning', 'complete', 'locked', 'comments', 'notifications', 'error', 'note'],
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
    variant: {
      control: 'select',
      options: ['default', 'active', 'filled'],
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    tone: 'warning',
    size: 'default',
    variant: 'default',
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof AccordionStatusBadge>;

export const Playground: Story = {
  args: {},
};

type BadgeExample = {
  tone: AccordionStatusBadgeTone;
  label: string;
  examples: Array<{
    label: string;
    variant: AccordionStatusBadgeVariant;
    disabled?: boolean;
  }>;
};

const badgeExamples: BadgeExample[] = [
  {
    tone: 'warning',
    label: 'warning',
    examples: [
      { label: 'default', variant: 'default' },
      { label: 'disabled true', variant: 'default', disabled: true },
    ],
  },
  {
    tone: 'complete',
    label: 'complete',
    examples: [
      { label: 'active', variant: 'active' },
      { label: 'filled', variant: 'filled' },
      { label: 'disabled true', variant: 'default', disabled: true },
    ],
  },
  {
    tone: 'locked',
    label: 'locked',
    examples: [
      { label: 'default', variant: 'default' },
      { label: 'disabled true', variant: 'default', disabled: true },
    ],
  },
  {
    tone: 'comments',
    label: 'comments',
    examples: [
      { label: 'default', variant: 'default' },
      { label: 'active', variant: 'active' },
      { label: 'filled', variant: 'filled' },
      { label: 'disabled true', variant: 'default', disabled: true },
    ],
  },
  {
    tone: 'notifications',
    label: 'notifications',
    examples: [
      { label: 'default', variant: 'default' },
      { label: 'active', variant: 'active' },
      { label: 'filled', variant: 'filled' },
      { label: 'disabled true', variant: 'default', disabled: true },
    ],
  },
  {
    tone: 'error',
    label: 'error',
    examples: [
      { label: 'default', variant: 'default' },
      { label: 'active', variant: 'active' },
      { label: 'filled', variant: 'filled' },
      { label: 'disabled true', variant: 'default', disabled: true },
    ],
  },
  {
    tone: 'note',
    label: 'note',
    examples: [
      { label: 'default', variant: 'default' },
      { label: 'active', variant: 'active' },
      { label: 'filled', variant: 'filled' },
      { label: 'disabled true', variant: 'default', disabled: true },
    ],
  },
];

const sizes: AccordionStatusBadgeSize[] = ['small', 'default', 'large'];

export const AllStatuses: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-sizing-48px)',
      }}
    >
      {badgeExamples.map((badge) => (
        <section key={badge.tone} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sizing-24px)' }}>
          <h2
            style={{
              fontFamily: 'var(--type-typeface-archivo)',
              fontSize: 'var(--type-archivo-heading-3)',
              fontWeight: 'var(--type-weight-medium)',
              color: 'var(--neutral-gray-gray-700)',
              textTransform: 'capitalize',
              margin: 0,
            }}
          >
            {badge.label}
          </h2>

          {sizes.map((size) => (
            <div key={`${badge.tone}-${size}`} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sizing-16px)' }}>
              <div
                style={{
                  fontFamily: 'var(--type-typeface-archivo)',
                  fontSize: 'var(--type-archivo-label)',
                  fontWeight: 'var(--type-weight-medium)',
                  color: 'var(--neutral-gray-gray-600)',
                  textTransform: 'lowercase',
                }}
              >
                {size}
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: 'var(--spacing-sizing-40px)',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                }}
              >
                {badge.examples.map((example) => (
                  <div key={`${badge.tone}-${size}-${example.label}`} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sizing-12px)' }}>
                    <span
                      style={{
                        fontFamily: 'var(--type-typeface-archivo)',
                        fontSize: 'var(--type-archivo-label)',
                        fontWeight: 'var(--type-weight-medium)',
                        color: 'var(--neutral-gray-gray-500)',
                        textTransform: 'capitalize',
                      }}
                    >
                      {example.label}
                    </span>
                    <AccordionStatusBadge
                      tone={badge.tone}
                      size={size}
                      variant={example.variant}
                      disabled={example.disabled}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      ))}
    </div>
  ),
};
