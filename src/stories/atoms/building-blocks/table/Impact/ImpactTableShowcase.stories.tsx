import type { Meta, StoryObj } from '@storybook/react';
import { ImpactTableCell } from './ImpactTableCell';
import './impactStories.css';

/**
 * Comprehensive showcase of all ImpactTableCell variants
 */
const meta: Meta = {
  title: 'Atoms/🧱 Building Blocks/Tables/Impact/Showcase',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Complete showcase of all Impact Table Cell variants and states.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

/**
 * All Cell Variants
 * 
 * Displays every variant of the ImpactTableCell organized by type.
 */
export const AllCellVariants: Story = {
  render: () => (
    <div className="impact-showcase-root">
      <section className="impact-section">
        <h2 className="impact-section-title">Dropdown Cells</h2>
        <div className="impact-grid">
          <div>
            <h3 className="impact-variant-label">Scale - Large</h3>
            <ImpactTableCell type="dropdown" width="lg" state="scale">
              3 - Significant
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Scale - Small</h3>
            <ImpactTableCell type="dropdown" width="sm" state="scale">
              3
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Default - Large</h3>
            <ImpactTableCell type="dropdown" width="lg" state="default">
              Select an option
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Default - Small</h3>
            <ImpactTableCell type="dropdown" width="sm" state="default">
              0.00
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Empty - Large</h3>
            <ImpactTableCell type="dropdown" width="lg" state="empty" />
          </div>
          <div>
            <h3 className="impact-variant-label">Empty - Small</h3>
            <ImpactTableCell type="dropdown" width="sm" state="empty" />
          </div>
          <div>
            <h3 className="impact-variant-label">Filled</h3>
            <ImpactTableCell type="dropdown" width="lg" state="filled">
              3 - Significant
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Disabled</h3>
            <ImpactTableCell type="dropdown" width="lg" state="default" disabled={true}>
              Select an option
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Disabled Filled</h3>
            <ImpactTableCell type="dropdown" width="lg" state="filled" disabled={true}>
              3 - Significant
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Hover</h3>
            <ImpactTableCell type="dropdown" width="lg" state="scale" hover={true}>
              3 - Significant
            </ImpactTableCell>
          </div>
        </div>
      </section>

      <section className="impact-section">
        <h2 className="impact-section-title">Input Cells</h2>
        <div className="impact-grid">
          <div>
            <h3 className="impact-variant-label">Decimal - Small</h3>
            <ImpactTableCell type="input" width="sm" state="decimal">
              5.67
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Decimal - Large</h3>
            <ImpactTableCell type="input" width="lg" state="decimal">
              2.65
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Default - Small</h3>
            <ImpactTableCell type="input" width="sm" state="default">
              0.00
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Default - Large</h3>
            <ImpactTableCell type="input" width="lg" state="default">
              Enter initial value
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Empty - Small</h3>
            <ImpactTableCell type="input" width="sm" state="empty" />
          </div>
          <div>
            <h3 className="impact-variant-label">Empty - Large</h3>
            <ImpactTableCell type="input" width="lg" state="empty" />
          </div>
          <div>
            <h3 className="impact-variant-label">Disabled - Small</h3>
            <ImpactTableCell type="input" width="sm" state="default" disabled={true}>
              0.00
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Disabled - Large</h3>
            <ImpactTableCell type="input" width="lg" state="default" disabled={true}>
              Enter initial value
            </ImpactTableCell>
          </div>
        </div>
      </section>

      <section className="impact-section">
        <h2 className="impact-section-title">Impact Cells</h2>
        <div className="impact-grid">
          <div>
            <h3 className="impact-variant-label">Impact Row</h3>
            <ImpactTableCell role="row" type="impact" width="lg" state="default" title="Total Impact ($M)" subtitle="This is subtext" />
          </div>
          <div>
            <h3 className="impact-variant-label">Impact Cell - Decimal</h3>
            <ImpactTableCell type="impact" width="sm" state="decimal">
              5.67
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Impact Cell - Text</h3>
            <ImpactTableCell type="impact" width="sm" state="text">
              Text
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Impact Cell - Scale</h3>
            <ImpactTableCell type="impact" width="sm" state="scale">
              3
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Impact Cell - Currency</h3>
            <ImpactTableCell type="impact" width="lg" state="default">
              $0.00 M
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Disabled Impact</h3>
            <ImpactTableCell role="row" type="impact" width="lg" state="default" disabled={true} title="Total Impact ($M)" />
          </div>
        </div>
      </section>

      <section className="impact-section">
        <h2 className="impact-section-title">Total Cells</h2>
        <div className="impact-grid">
          <div>
            <h3 className="impact-variant-label">Decimal - Small</h3>
            <ImpactTableCell type="total" width="sm" state="decimal">
              5.67
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Decimal - Large</h3>
            <ImpactTableCell type="total" width="lg" state="decimal">
              5.67
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Text - Small</h3>
            <ImpactTableCell type="total" width="sm" state="text">
              Text
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Scale - Small</h3>
            <ImpactTableCell type="total" width="sm" state="scale">
              3
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Currency - Small</h3>
            <ImpactTableCell type="total" width="sm" state="default">
              $0.00 M
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Currency - Large</h3>
            <ImpactTableCell type="total" width="lg" state="default">
              $0.00 M
            </ImpactTableCell>
          </div>
        </div>
      </section>

      <section className="impact-section">
        <h2 className="impact-section-title">Populated Cells</h2>
        <div className="impact-grid">
          <div>
            <h3 className="impact-variant-label">Decimal - Small</h3>
            <ImpactTableCell type="populated" width="sm" state="decimal">
              5.67
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Decimal - Large</h3>
            <ImpactTableCell type="populated" width="lg" state="decimal">
              2.65
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Text - Small</h3>
            <ImpactTableCell type="populated" width="sm" state="text">
              Text
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Text - Large</h3>
            <ImpactTableCell type="populated" width="lg" state="text">
              Populated response here
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Scale - Small</h3>
            <ImpactTableCell type="populated" width="sm" state="scale">
              3
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Scale - Large</h3>
            <ImpactTableCell type="populated" width="lg" state="scale">
              3 - Significant
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Currency - Small</h3>
            <ImpactTableCell type="populated" width="sm" state="default">
              $0.00 M
            </ImpactTableCell>
          </div>
        </div>
      </section>

      <section className="impact-section">
        <h2 className="impact-section-title">Locked Cells</h2>
        <div className="impact-grid">
          <div>
            <h3 className="impact-variant-label">Default - Small</h3>
            <ImpactTableCell type="locked" width="sm" state="default">
              2001
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Scale - Small</h3>
            <ImpactTableCell type="locked" width="sm" state="scale">
              3
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Decimal - Small</h3>
            <ImpactTableCell type="locked" width="sm" state="decimal">
              5.67
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Decimal - Large</h3>
            <ImpactTableCell type="locked" width="lg" state="decimal">
              2.65
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Empty - Large</h3>
            <ImpactTableCell type="locked" width="lg" state="empty" />
          </div>
          <div>
            <h3 className="impact-variant-label">Empty - Small</h3>
            <ImpactTableCell type="locked" width="sm" state="empty" />
          </div>
          <div>
            <h3 className="impact-variant-label">Disabled - Small</h3>
            <ImpactTableCell type="locked" width="sm" state="default" disabled={true}>
              5.67
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Disabled - Decimal</h3>
            <ImpactTableCell type="locked" width="sm" state="decimal" disabled={true}>
              5.67
            </ImpactTableCell>
          </div>
        </div>
      </section>

      <section className="impact-section">
        <h2 className="impact-section-title">Header Cells</h2>
        <div className="impact-grid">
          <div>
            <h3 className="impact-variant-label">Header - Small</h3>
            <ImpactTableCell type="header" width="sm" state="default">
              U1
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Header - Large</h3>
            <ImpactTableCell type="header" width="lg" state="default" category="Category name" showLock={true} />
          </div>
          <div>
            <h3 className="impact-variant-label">With Subtext - Small</h3>
            <ImpactTableCell type="header-w-subtext" width="sm" state="default" subtitle="0A">
              2025
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">With Subtext - Large</h3>
            <ImpactTableCell role="row" type="header-w-subtext" width="lg" state="default" title="Category 1" subtitle="This is subtext" />
          </div>
          <div>
            <h3 className="impact-variant-label">Disabled - Small</h3>
            <ImpactTableCell type="header" width="sm" state="default" disabled={true}>
              U1
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Disabled w/ Subtext - Small</h3>
            <ImpactTableCell type="header-w-subtext" width="sm" state="default" disabled={true} subtitle="2025" category="0A" />
          </div>
          <div>
            <h3 className="impact-variant-label">Cell-0 Header w/ Subtext</h3>
            <ImpactTableCell role="cell-0" type="header-w-subtext" width="sm" state="default" subtitle="2025" category="0A" />
          </div>
          <div>
            <h3 className="impact-variant-label">Disabled Cell-0 Header</h3>
            <ImpactTableCell role="cell-0" type="header-w-subtext" width="sm" state="default" disabled={true} subtitle="2025" category="0A" />
          </div>
        </div>
      </section>

      <section className="impact-section">
        <h2 className="impact-section-title">Row Cells</h2>
        <div className="impact-grid">
          <div>
            <h3 className="impact-variant-label">Row Header</h3>
            <ImpactTableCell role="row" type="header" width="lg" state="default" title="Row title goes here" />
          </div>
          <div>
            <h3 className="impact-variant-label">Row Total</h3>
            <ImpactTableCell role="row" type="total" width="lg" state="default" title="Total amount ($M)" subtitle="This is subtext" />
          </div>
          <div>
            <h3 className="impact-variant-label">Disabled Row</h3>
            <ImpactTableCell role="row" type="header" width="lg" state="default" disabled={true} title="Row title goes here" />
          </div>
        </div>
      </section>

      <section className="impact-section">
        <h2 className="impact-section-title">First Column Cells (role: cell-0)</h2>
        <div className="impact-grid">
          <div>
            <h3 className="impact-variant-label">Dropdown Scale</h3>
            <ImpactTableCell role="cell-0" type="dropdown" width="sm" state="scale">
              3
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Input Decimal</h3>
            <ImpactTableCell role="cell-0" type="input" width="sm" state="decimal">
              5.67
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Populated Decimal</h3>
            <ImpactTableCell role="cell-0" type="populated" width="sm" state="decimal">
              5.67
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Total Decimal</h3>
            <ImpactTableCell role="cell-0" type="total" width="sm" state="decimal">
              5.67
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Locked Default</h3>
            <ImpactTableCell role="cell-0" type="locked" width="sm" state="default">
              2001
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Header</h3>
            <ImpactTableCell role="cell-0" type="header" width="sm" state="default">
              U1
            </ImpactTableCell>
          </div>
        </div>
      </section>
    </div>
  ),
};

/**
 * Comparison Grid
 * 
 * Side-by-side comparison of similar variants.
 */
export const ComparisonGrid: Story = {
  render: () => (
    <div className="impact-showcase-root">
      <section className="impact-section">
        <h2 className="impact-section-title">Width Comparison</h2>
        <div className="impact-comparison-grid">
          <div>
            <h3 className="impact-variant-label">Small (94px)</h3>
            <ImpactTableCell type="dropdown" width="sm" state="scale">
              3
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Large (202px)</h3>
            <ImpactTableCell type="dropdown" width="lg" state="scale">
              3 - Significant
            </ImpactTableCell>
          </div>
        </div>
      </section>

      <section className="impact-section">
        <h2 className="impact-section-title">State Comparison</h2>
        <div className="impact-comparison-grid">
          <div>
            <h3 className="impact-variant-label">Default</h3>
            <ImpactTableCell type="input" width="sm" state="default">
              0.00
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Decimal</h3>
            <ImpactTableCell type="input" width="sm" state="decimal">
              5.67
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Empty</h3>
            <ImpactTableCell type="input" width="sm" state="empty" />
          </div>
          <div>
            <h3 className="impact-variant-label">Disabled</h3>
            <ImpactTableCell type="input" width="sm" state="default" disabled={true}>
              0.00
            </ImpactTableCell>
          </div>
        </div>
      </section>

      <section className="impact-section">
        <h2 className="impact-section-title">Role Comparison</h2>
        <div className="impact-comparison-grid">
          <div>
            <h3 className="impact-variant-label">Cell (regular)</h3>
            <ImpactTableCell role="cell" type="dropdown" width="sm" state="scale">
              3
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Cell-0 (first column)</h3>
            <ImpactTableCell role="cell-0" type="dropdown" width="sm" state="scale">
              3
            </ImpactTableCell>
          </div>
          <div>
            <h3 className="impact-variant-label">Row (header/total)</h3>
            <ImpactTableCell role="row" type="header" width="lg" state="default" title="Row title" />
          </div>
        </div>
      </section>
    </div>
  ),
};
