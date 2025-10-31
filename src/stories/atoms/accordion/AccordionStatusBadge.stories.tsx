import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  AccordionStatusBadge,
  type AccordionStatusBadgeTone,
  type AccordionStatusBadgeSize,
} from './AccordionStatusBadge';

const meta: Meta<typeof AccordionStatusBadge> = {
  id: 'atoms-building-blocks-accordion-status-badge',
  title: 'Atoms/🧱 Building Blocks/Accordion Status Badge',
  component: AccordionStatusBadge,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Accordion status badges built with Echo design tokens. Supports multiple tones (warning, complete, locked, comments, notifications, error, note), three size variants (small, default, large), and disabled states. Each badge features a dashed circular border with an icon inside, pixel-perfect to Figma specifications.',
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
    disabled: {
      control: 'boolean',
      description: 'Disabled state with muted colors',
    },
  },
  args: {
    tone: 'warning',
    size: 'default',
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

export const AllStates: Story = {
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
              fontWeight: 400,
              color: 'var(--neutral-gray-gray-600)',
              textTransform: 'lowercase',
              margin: 0,
              lineHeight: '32px',
            }}
          >
            {tone}
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '100px 104px 104px',
              gap: 'var(--spacing-sizing-80px)',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                fontSize: '24px',
                color: 'var(--neutral-gray-gray-600)',
                fontWeight: 400,
                gridColumn: '1',
              }}
            ></div>
            <div
              style={{
                fontSize: '24px',
                color: 'var(--neutral-gray-gray-600)',
                fontWeight: 400,
              }}
            >
              default
            </div>
            <div
              style={{
                fontSize: '24px',
                color: 'var(--neutral-gray-gray-600)',
                fontWeight: 400,
              }}
            >
              disabled True
            </div>
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
              <div
                style={{
                  fontSize: '24px',
                  color: 'var(--neutral-gray-gray-600)',
                  fontWeight: 400,
                }}
              >
                {size}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <AccordionStatusBadge tone={tone} size={size} disabled={false} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <AccordionStatusBadge tone={tone} size={size} disabled={true} />
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
          <AccordionStatusBadge tone="warning" size={size} />
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

export const DisabledComparison: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-sizing-32px)',
        padding: 'var(--spacing-sizing-24px)',
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
          <div
            style={{
              display: 'flex',
              gap: 'var(--spacing-sizing-24px)',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
              <span
                style={{
                  fontSize: '12px',
                  color: 'var(--neutral-gray-gray-500)',
                }}
              >
                Default
              </span>
              <AccordionStatusBadge tone={tone} size="default" disabled={false} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
              <span
                style={{
                  fontSize: '12px',
                  color: 'var(--neutral-gray-gray-500)',
                }}
              >
                Disabled
              </span>
              <AccordionStatusBadge tone={tone} size="default" disabled={true} />
            </div>
          </div>
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

export const AllTonesSmall: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: 'var(--spacing-sizing-24px)',
        flexWrap: 'wrap',
        padding: 'var(--spacing-sizing-24px)',
      }}
    >
      {allTones.map((tone) => (
        <div
          key={tone}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-sizing-12px)',
            alignItems: 'center',
          }}
        >
          <AccordionStatusBadge tone={tone} size="small" />
          <span
            style={{
              fontSize: '12px',
              color: 'var(--neutral-gray-gray-600)',
              textTransform: 'capitalize',
            }}
          >
            {tone}
          </span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All badge tones displayed at small size.',
      },
    },
  },
};

export const AllTonesDefault: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: 'var(--spacing-sizing-32px)',
        flexWrap: 'wrap',
        padding: 'var(--spacing-sizing-24px)',
      }}
    >
      {allTones.map((tone) => (
        <div
          key={tone}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-sizing-16px)',
            alignItems: 'center',
          }}
        >
          <AccordionStatusBadge tone={tone} size="default" />
          <span
            style={{
              fontSize: '14px',
              color: 'var(--neutral-gray-gray-600)',
              textTransform: 'capitalize',
            }}
          >
            {tone}
          </span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All badge tones displayed at default size.',
      },
    },
  },
};

export const AllTonesLarge: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: 'var(--spacing-sizing-40px)',
        flexWrap: 'wrap',
        padding: 'var(--spacing-sizing-32px)',
      }}
    >
      {allTones.map((tone) => (
        <div
          key={tone}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-sizing-20px)',
            alignItems: 'center',
          }}
        >
          <AccordionStatusBadge tone={tone} size="large" />
          <span
            style={{
              fontSize: '16px',
              color: 'var(--neutral-gray-gray-600)',
              textTransform: 'capitalize',
            }}
          >
            {tone}
          </span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All badge tones displayed at large size.',
      },
    },
  },
};
