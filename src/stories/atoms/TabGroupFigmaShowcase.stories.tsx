import type { Meta, StoryObj } from '@storybook/react';
import { TabGroup } from './TabGroup';

const meta: Meta<typeof TabGroup> = {
  title: 'Atoms/TabGroup/Figma Showcase',
  component: TabGroup,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete showcase of all TabGroup variants matching Figma design specifications. This includes all combinations of sizes, types, and directions.',
      },
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

export const AllVariants: Story = {
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '64px',
      padding: '40px',
      background: '#F9FAFB',
      minHeight: '100vh',
    }}>
      {/* SMALL SIZE VARIANTS */}
      <section>
        <h2 style={{
          fontFamily: 'Archivo, sans-serif',
          fontSize: '24px',
          fontWeight: 700,
          marginBottom: '32px',
          color: '#1C1C1C',
        }}>
          Small Size Variants
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '48px',
        }}>
          {/* Default Type - Horizontal Narrow */}
          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Default / Horizontal Narrow
            </h3>
            <TabGroup
              direction="horizontal-narrow"
              size="small"
              type="default"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          {/* Default Type - Horizontal Wide */}
          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Default / Horizontal Wide
            </h3>
            <TabGroup
              direction="horizontal-wide"
              size="small"
              type="default"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          {/* Default Type - Vertical */}
          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Default / Vertical
            </h3>
            <TabGroup
              direction="vertical"
              size="small"
              type="default"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          {/* Secondary Type - Horizontal Narrow */}
          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Secondary / Horizontal Narrow
            </h3>
            <TabGroup
              direction="horizontal-narrow"
              size="small"
              type="secondary"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          {/* Secondary Type - Horizontal Wide */}
          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Secondary / Horizontal Wide
            </h3>
            <TabGroup
              direction="horizontal-wide"
              size="small"
              type="secondary"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          {/* Secondary Type - Vertical */}
          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Secondary / Vertical
            </h3>
            <TabGroup
              direction="vertical"
              size="small"
              type="secondary"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          {/* Contained Type - Horizontal Narrow */}
          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Contained / Horizontal Narrow
            </h3>
            <TabGroup
              direction="horizontal-narrow"
              size="small"
              type="contained"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          {/* Contained Type - Horizontal Wide */}
          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Contained / Horizontal Wide
            </h3>
            <TabGroup
              direction="horizontal-wide"
              size="small"
              type="contained"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          {/* Contained Type - Vertical */}
          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Contained / Vertical
            </h3>
            <TabGroup
              direction="vertical"
              size="small"
              type="contained"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          {/* Dark Contained Type - Horizontal Narrow */}
          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Dark Contained / Horizontal Narrow
            </h3>
            <TabGroup
              direction="horizontal-narrow"
              size="small"
              type="dark-contained"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          {/* Dark Contained Type - Horizontal Wide */}
          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Dark Contained / Horizontal Wide
            </h3>
            <TabGroup
              direction="horizontal-wide"
              size="small"
              type="dark-contained"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          {/* Dark Contained Type - Vertical */}
          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Dark Contained / Vertical
            </h3>
            <TabGroup
              direction="vertical"
              size="small"
              type="dark-contained"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>
        </div>
      </section>

      {/* DEFAULT SIZE VARIANTS */}
      <section>
        <h2 style={{
          fontFamily: 'Archivo, sans-serif',
          fontSize: '24px',
          fontWeight: 700,
          marginBottom: '32px',
          color: '#1C1C1C',
        }}>
          Default Size Variants
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '48px',
        }}>
          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Default / Horizontal Narrow
            </h3>
            <TabGroup
              direction="horizontal-narrow"
              size="default"
              type="default"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Default / Horizontal Wide
            </h3>
            <TabGroup
              direction="horizontal-wide"
              size="default"
              type="default"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Default / Vertical
            </h3>
            <TabGroup
              direction="vertical"
              size="default"
              type="default"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Secondary / Horizontal Narrow
            </h3>
            <TabGroup
              direction="horizontal-narrow"
              size="default"
              type="secondary"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Contained / Horizontal Narrow
            </h3>
            <TabGroup
              direction="horizontal-narrow"
              size="default"
              type="contained"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Contained / Vertical
            </h3>
            <TabGroup
              direction="vertical"
              size="default"
              type="contained"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Dark Contained / Horizontal Narrow
            </h3>
            <TabGroup
              direction="horizontal-narrow"
              size="default"
              type="dark-contained"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Dark Contained / Horizontal Wide
            </h3>
            <TabGroup
              direction="horizontal-wide"
              size="default"
              type="dark-contained"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Dark Contained / Vertical
            </h3>
            <TabGroup
              direction="vertical"
              size="default"
              type="dark-contained"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>
        </div>
      </section>

      {/* LARGE SIZE VARIANTS */}
      <section>
        <h2 style={{
          fontFamily: 'Archivo, sans-serif',
          fontSize: '24px',
          fontWeight: 700,
          marginBottom: '32px',
          color: '#1C1C1C',
        }}>
          Large Size Variants
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '48px',
        }}>
          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Default / Horizontal Narrow
            </h3>
            <TabGroup
              direction="horizontal-narrow"
              size="large"
              type="default"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Default / Horizontal Wide
            </h3>
            <TabGroup
              direction="horizontal-wide"
              size="large"
              type="default"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Default / Vertical
            </h3>
            <TabGroup
              direction="vertical"
              size="large"
              type="default"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Secondary / Horizontal Narrow
            </h3>
            <TabGroup
              direction="horizontal-narrow"
              size="large"
              type="secondary"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Secondary / Horizontal Wide
            </h3>
            <TabGroup
              direction="horizontal-wide"
              size="large"
              type="secondary"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Secondary / Vertical
            </h3>
            <TabGroup
              direction="vertical"
              size="large"
              type="secondary"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Contained / Horizontal Narrow
            </h3>
            <TabGroup
              direction="horizontal-narrow"
              size="large"
              type="contained"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Contained / Horizontal Wide
            </h3>
            <TabGroup
              direction="horizontal-wide"
              size="large"
              type="contained"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Contained / Vertical
            </h3>
            <TabGroup
              direction="vertical"
              size="large"
              type="contained"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Dark Contained / Horizontal Narrow
            </h3>
            <TabGroup
              direction="horizontal-narrow"
              size="large"
              type="dark-contained"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Dark Contained / Horizontal Wide
            </h3>
            <TabGroup
              direction="horizontal-wide"
              size="large"
              type="dark-contained"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>

          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#374151',
            }}>
              Dark Contained / Vertical
            </h3>
            <TabGroup
              direction="vertical"
              size="large"
              type="dark-contained"
              tabs={defaultTabs}
              activeTab={0}
            />
          </div>
        </div>
      </section>
    </div>
  ),
};
