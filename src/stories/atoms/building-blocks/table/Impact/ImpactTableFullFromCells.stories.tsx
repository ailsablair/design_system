import type { Meta, StoryObj } from '@storybook/react';
import { ImpactTableCell } from './ImpactTableCell';
import './impactTable.css';

const meta: Meta = {
  title: 'Atoms/🧱 Building Blocks/Tables/Impact/Full Table (from Cells)',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'An example of a complete Impact Table assembled directly from ImpactTableCell components (no container component). Demonstrates headers, rows, and totals with correct spacing, tokens, and behaviors (nowrap currency, min column widths, etc.).',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Example: Story = {
  render: () => (
    <div className="impact-table-wrapper">
      <div className="table-impact">
        {/* Header Row */}
        <div className="row-header">
          <ImpactTableCell role="cell" type="header-w-subtext" width="lg" category="Category name" subtitle="This is a subtitle" />
          <ImpactTableCell role="cell" type="header-w-subtext" width="lg" category="Impact values" subtitle="This is a subtitle" showLock />
          <ImpactTableCell role="cell-0" type="header" width="sm">0A</ImpactTableCell>
          <ImpactTableCell role="cell" type="header" width="sm">U1</ImpactTableCell>
          <ImpactTableCell role="cell" type="header" width="sm">U2</ImpactTableCell>
          <ImpactTableCell role="cell" type="header" width="sm">U3</ImpactTableCell>
          <ImpactTableCell role="cell" type="header" width="sm">U4</ImpactTableCell>
        </div>

        {/* Body */}
        <div className="body">
          {/* Column: Row Headers */}
          <div className="column-row-header">
            <ImpactTableCell role="row" type="header-w-subtext" width="lg" title="Row title goes here" subtitle="This is subtext" />
            <ImpactTableCell role="row" type="header-w-subtext" width="lg" title="Row title goes here" subtitle="This is subtext" />
            <ImpactTableCell role="row" type="header-w-subtext" width="lg" title="Row title goes here" subtitle="This is subtext" />
            <ImpactTableCell role="row" type="header-w-subtext" width="lg" title="Row title goes here" subtitle="This is subtext" />
          </div>

          {/* Impact values (blue column) */}
          <div className="column-special">
            <ImpactTableCell role="cell" type="populated" width="lg" state="decimal">2.65</ImpactTableCell>
            <ImpactTableCell role="cell" type="populated" width="lg" state="decimal">2.65</ImpactTableCell>
            <ImpactTableCell role="cell" type="dropdown" width="lg" state="default">Select an option</ImpactTableCell>
            <ImpactTableCell role="cell" type="input" width="lg" state="default">Enter initial value</ImpactTableCell>
          </div>

          {/* 0A seafoam column */}
          <div className="column-cell-0">
            <ImpactTableCell role="cell-0" type="populated" width="sm" state="decimal">5.67</ImpactTableCell>
            <ImpactTableCell role="cell-0" type="populated" width="sm" state="decimal">5.67</ImpactTableCell>
            <ImpactTableCell role="cell-0" type="populated" width="sm" state="decimal">5.67</ImpactTableCell>
            <ImpactTableCell role="cell-0" type="populated" width="sm" state="decimal">5.67</ImpactTableCell>
          </div>

          {/* U1 */}
          <div className="column-1">
            <ImpactTableCell role="cell" type="populated" width="sm" state="scale">3</ImpactTableCell>
            <ImpactTableCell role="cell" type="populated" width="sm" state="scale">3</ImpactTableCell>
            <ImpactTableCell role="cell" type="populated" width="sm" state="scale">3</ImpactTableCell>
            <ImpactTableCell role="cell" type="populated" width="sm" state="scale">3</ImpactTableCell>
          </div>

          {/* U2 */}
          <div className="column-2">
            <ImpactTableCell role="cell" type="populated" width="sm" state="decimal">5.67</ImpactTableCell>
            <ImpactTableCell role="cell" type="populated" width="sm" state="decimal">5.67</ImpactTableCell>
            <ImpactTableCell role="cell" type="populated" width="sm" state="decimal">5.67</ImpactTableCell>
            <ImpactTableCell role="cell" type="populated" width="sm" state="decimal">5.67</ImpactTableCell>
          </div>

          {/* U3 */}
          <div className="column-3">
            <ImpactTableCell role="cell" type="populated" width="sm" state="decimal">5.67</ImpactTableCell>
            <ImpactTableCell role="cell" type="populated" width="sm" state="decimal">5.67</ImpactTableCell>
            <ImpactTableCell role="cell" type="populated" width="sm" state="decimal">5.67</ImpactTableCell>
            <ImpactTableCell role="cell" type="populated" width="sm" state="decimal">5.67</ImpactTableCell>
          </div>

          {/* U4 */}
          <div className="column-4">
            <ImpactTableCell role="cell" type="populated" width="sm" state="decimal">5.67</ImpactTableCell>
            <ImpactTableCell role="cell" type="populated" width="sm" state="decimal">5.67</ImpactTableCell>
            <ImpactTableCell role="cell" type="populated" width="sm" state="decimal">5.67</ImpactTableCell>
            <ImpactTableCell role="cell" type="populated" width="sm" state="decimal">5.67</ImpactTableCell>
          </div>
        </div>

        {/* Totals */}
        <div className="row-total">
          <ImpactTableCell role="row" type="total" width="lg" title="Total amount ($M)" subtitle="This is subtext" />
          <ImpactTableCell role="cell" type="total" width="lg" state="decimal">$ 2.65 M</ImpactTableCell>
          <ImpactTableCell role="cell-0" type="total" width="sm" state="decimal">$ 2.65 M</ImpactTableCell>
          <ImpactTableCell role="cell-0" type="total" width="sm" state="scale">3</ImpactTableCell>
          <ImpactTableCell role="cell-0" type="total" width="sm" state="text">$ 2.65 M</ImpactTableCell>
          <ImpactTableCell role="cell-0" type="total" width="sm" state="text">$ 2.65 M</ImpactTableCell>
          <ImpactTableCell role="cell-0" type="total" width="sm" state="text">$ 2.65 M</ImpactTableCell>
        </div>
      </div>
    </div>
  ),
};
