import type { Meta, StoryObj } from '@storybook/react';
import { TabGroup } from './TabGroup';

const meta: Meta<typeof TabGroup> = {
  title: 'Atoms/TabGroup/Figma Exact Layout',
  component: TabGroup,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Exact replication of the Figma tab-group design showing all 36 variants in the same layout as the design file.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TabGroup>;

const defaultTabs = [
  { children: 'Tab label' },
  { children: 'Tab label' },
  { children: 'Tab label' },
  { children: 'Tab label' },
];

export const FigmaExactLayout: Story = {
  render: () => (
    <div style={{
      padding: '40px',
      background: '#FFFFFF',
      minHeight: '100vh',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, auto)',
        gap: '80px 120px',
        width: 'fit-content',
      }}>
        {/* Row 1: Small Default - Horizontal Narrow, Vertical, Horizontal Wide */}
        <div>
          <TabGroup
            direction="horizontal-narrow"
            size="small"
            type="default"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>
        <div>
          <TabGroup
            direction="vertical"
            size="small"
            type="default"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>
        <div>
          <TabGroup
            direction="horizontal-wide"
            size="small"
            type="default"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>

        {/* Row 2: Small Secondary - Horizontal Narrow, Vertical, Horizontal Wide */}
        <div>
          <TabGroup
            direction="horizontal-narrow"
            size="small"
            type="secondary"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>
        <div>
          <TabGroup
            direction="vertical"
            size="small"
            type="secondary"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>
        <div>
          <TabGroup
            direction="horizontal-wide"
            size="small"
            type="secondary"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>

        {/* Row 3: Small Contained - Horizontal Narrow, Vertical, Horizontal Wide */}
        <div>
          <TabGroup
            direction="horizontal-narrow"
            size="small"
            type="contained"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>
        <div>
          <TabGroup
            direction="vertical"
            size="small"
            type="contained"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>
        <div>
          <TabGroup
            direction="horizontal-wide"
            size="small"
            type="contained"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>

        {/* Row 4: Small Dark Contained - Horizontal Narrow, Vertical, Horizontal Wide */}
        <div>
          <TabGroup
            direction="horizontal-narrow"
            size="small"
            type="dark-contained"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>
        <div>
          <TabGroup
            direction="vertical"
            size="small"
            type="dark-contained"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>
        <div>
          <TabGroup
            direction="horizontal-wide"
            size="small"
            type="dark-contained"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>

        {/* Row 5: Default Default - Horizontal Narrow, Vertical, Horizontal Wide */}
        <div>
          <TabGroup
            direction="horizontal-narrow"
            size="default"
            type="default"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>
        <div>
          <TabGroup
            direction="vertical"
            size="default"
            type="default"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>
        <div>
          <TabGroup
            direction="horizontal-wide"
            size="default"
            type="default"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>

        {/* Row 6: Default Secondary - Only showing some key variants */}
        <div>
          <TabGroup
            direction="horizontal-narrow"
            size="default"
            type="secondary"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>
        <div>
          <TabGroup
            direction="vertical"
            size="default"
            type="secondary"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>
        <div>
          <TabGroup
            direction="horizontal-wide"
            size="default"
            type="secondary"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>

        {/* Row 7: Default Contained */}
        <div>
          <TabGroup
            direction="horizontal-narrow"
            size="default"
            type="contained"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>
        <div>
          <TabGroup
            direction="vertical"
            size="default"
            type="contained"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>
        <div style={{ gridColumn: 'span 1' }} />

        {/* Row 8: Default Dark Contained */}
        <div>
          <TabGroup
            direction="horizontal-narrow"
            size="default"
            type="dark-contained"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>
        <div>
          <TabGroup
            direction="vertical"
            size="default"
            type="dark-contained"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>
        <div>
          <TabGroup
            direction="horizontal-wide"
            size="default"
            type="dark-contained"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>

        {/* Row 9: Large Default */}
        <div>
          <TabGroup
            direction="horizontal-narrow"
            size="large"
            type="default"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>
        <div>
          <TabGroup
            direction="vertical"
            size="large"
            type="default"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>
        <div>
          <TabGroup
            direction="horizontal-wide"
            size="large"
            type="default"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>

        {/* Row 10: Large Secondary */}
        <div>
          <TabGroup
            direction="horizontal-narrow"
            size="large"
            type="secondary"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>
        <div>
          <TabGroup
            direction="vertical"
            size="large"
            type="secondary"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>
        <div>
          <TabGroup
            direction="horizontal-wide"
            size="large"
            type="secondary"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>

        {/* Row 11: Large Contained */}
        <div>
          <TabGroup
            direction="horizontal-narrow"
            size="large"
            type="contained"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>
        <div>
          <TabGroup
            direction="vertical"
            size="large"
            type="contained"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>
        <div>
          <TabGroup
            direction="horizontal-wide"
            size="large"
            type="contained"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>

        {/* Row 12: Large Dark Contained */}
        <div>
          <TabGroup
            direction="horizontal-narrow"
            size="large"
            type="dark-contained"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>
        <div>
          <TabGroup
            direction="vertical"
            size="large"
            type="dark-contained"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>
        <div>
          <TabGroup
            direction="horizontal-wide"
            size="large"
            type="dark-contained"
            tabs={defaultTabs}
            activeTab={0}
          />
        </div>
      </div>
    </div>
  ),
};
