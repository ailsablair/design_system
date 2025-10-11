import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  AccordionStatusBadge,
  type AccordionStatusBadgeTone,
  type AccordionStatusBadgeVariant,
  type AccordionStatusBadgeSize,
} from './AccordionStatusBadge';

const meta: Meta<typeof AccordionStatusBadge> = {
  title: 'Atoms/Building Blocks/Accordion Status',
  component: AccordionStatusBadge,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Accordion status badges built with Echo design tokens. Supports multiple tones (warning, complete, locked, comments, notifications, error, note), three size variants (small, default, large), and disabled states. Each badge features a dashed circular border with an icon inside, following the Figma design specifications precisely.',
      },
    },
  },
  argTypes: {
    tone: {
      control: 'select',
      options: ['warning', 'complete', 'locked', 'comments', 'notifications', 'error', 'note'],
      description: 'Visual tone/type of the status badge',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size variant of the badge',
    },
    variant: {
      control: 'select',
      options: ['default', 'active', 'filled'],
      description: 'Visual treatment variant',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state with muted colors',
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

const allTones: AccordionStatusBadgeTone[] = [
  'warning',
  'complete',
  'locked',
  'comments',
  'notifications',
  'error',
  'note',
];

const sizes: AccordionStatusBadgeSize[] = ['small', 'default', 'large'];

export const FigmaShowcase: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-sizing-60px)',
        maxWidth: '1456px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Roboto, sans-serif',
      }}
    >
      {allTones.map((tone) => (
        <section
          key={tone}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-sizing-24px)',
          }}
        >
          <h2
            style={{
              fontSize: '24px',
              fontWeight: 500,
              color: 'var(--neutral-gray-gray-700)',
              textTransform: 'lowercase',
              margin: 0,
              lineHeight: '32px',
              letterSpacing: '-0.4px',
            }}
          >
            {tone}
          </h2>

          {/* Column headers */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '100px 104px 104px',
              gap: 'var(--spacing-sizing-80px)',
              paddingLeft: '120px',
              fontSize: '24px',
              color: 'var(--neutral-gray-gray-600)',
              marginBottom: 'var(--spacing-sizing-8px)',
            }}
          >
            <div></div>
            <div>default</div>
            <div>disabled True</div>
          </div>

          {sizes.map((size) => (
            <div
              key={`${tone}-${size}`}
              style={{
                display: 'grid',
                gridTemplateColumns: '100px 104px 104px',
                gap: 'var(--spacing-sizing-80px)',
                alignItems: 'center',
              }}
            >
              {/* Size label */}
              <div
                style={{
                  fontSize: '24px',
                  color: 'var(--neutral-gray-gray-600)',
                  fontWeight: 400,
                }}
              >
                {size}
              </div>

              {/* Default state */}
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <AccordionStatusBadge tone={tone} size={size} variant="default" disabled={false} />
              </div>

              {/* Disabled state */}
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <AccordionStatusBadge tone={tone} size={size} variant="default" disabled={true} />
              </div>
            </div>
          ))}
        </section>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Complete showcase of all accordion status badges matching the Figma design specification. Each tone is displayed across all three sizes (small, default, large) in both default and disabled states.',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-sizing-48px)',
      }}
    >
      {allTones.map((tone) => (
        <section
          key={tone}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-sizing-24px)',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--type-typeface-archivo)',
              fontSize: 'var(--type-archivo-heading-3)',
              fontWeight: 'var(--type-weight-medium)',
              color: 'var(--neutral-gray-gray-700)',
              textTransform: 'capitalize',
              margin: 0,
            }}
          >
            {tone}
          </h3>

          {sizes.map((size) => (
            <div
              key={`${tone}-${size}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-sizing-16px)',
              }}
            >
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
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sizing-12px)' }}>
                  <span
                    style={{
                      fontFamily: 'var(--type-typeface-archivo)',
                      fontSize: 'var(--type-archivo-label)',
                      fontWeight: 'var(--type-weight-medium)',
                      color: 'var(--neutral-gray-gray-500)',
                    }}
                  >
                    default
                  </span>
                  <AccordionStatusBadge tone={tone} size={size} variant="default" disabled={false} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sizing-12px)' }}>
                  <span
                    style={{
                      fontFamily: 'var(--type-typeface-archivo)',
                      fontSize: 'var(--type-archivo-label)',
                      fontWeight: 'var(--type-weight-medium)',
                      color: 'var(--neutral-gray-gray-500)',
                    }}
                  >
                    active
                  </span>
                  <AccordionStatusBadge tone={tone} size={size} variant="active" disabled={false} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sizing-12px)' }}>
                  <span
                    style={{
                      fontFamily: 'var(--type-typeface-archivo)',
                      fontSize: 'var(--type-archivo-label)',
                      fontWeight: 'var(--type-weight-medium)',
                      color: 'var(--neutral-gray-gray-500)',
                    }}
                  >
                    filled
                  </span>
                  <AccordionStatusBadge tone={tone} size={size} variant="filled" disabled={false} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sizing-12px)' }}>
                  <span
                    style={{
                      fontFamily: 'var(--type-typeface-archivo)',
                      fontSize: 'var(--type-archivo-label)',
                      fontWeight: 'var(--type-weight-medium)',
                      color: 'var(--neutral-gray-gray-500)',
                    }}
                  >
                    disabled
                  </span>
                  <AccordionStatusBadge tone={tone} size={size} variant="default" disabled={true} />
                </div>
              </div>
            </div>
          ))}
        </section>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Comprehensive display of all status badge tones with all variants (default, active, filled) and disabled state across all sizes.',
      },
    },
  },
};

export const SizeComparison: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: 'var(--spacing-sizing-48px)',
        alignItems: 'center',
        padding: 'var(--spacing-sizing-32px)',
      }}
    >
      {sizes.map((size) => (
        <div
          key={size}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-sizing-16px)',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--type-typeface-archivo)',
              fontSize: 'var(--type-archivo-label)',
              fontWeight: 'var(--type-weight-medium)',
              color: 'var(--neutral-gray-gray-600)',
              textTransform: 'capitalize',
            }}
          >
            {size}
          </span>
          <AccordionStatusBadge tone="warning" size={size} variant="default" />
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Side-by-side comparison of all three size variants using the warning tone.',
      },
    },
  },
};

export const DisabledStates: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-sizing-32px)',
      }}
    >
      {allTones.map((tone) => (
        <div
          key={tone}
          style={{
            display: 'flex',
            gap: 'var(--spacing-sizing-24px)',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--type-typeface-archivo)',
              fontSize: 'var(--type-archivo-body)',
              fontWeight: 'var(--type-weight-medium)',
              color: 'var(--neutral-gray-gray-700)',
              textTransform: 'capitalize',
              width: '120px',
            }}
          >
            {tone}
          </span>
          <AccordionStatusBadge tone={tone} size="default" variant="default" disabled={false} />
          <AccordionStatusBadge tone={tone} size="default" variant="default" disabled={true} />
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of enabled and disabled states for all tones at default size.',
      },
    },
  },
};
