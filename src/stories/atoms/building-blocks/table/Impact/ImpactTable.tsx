import React from 'react';
import { ImpactTableCell } from './ImpactTableCell';
import './impactTable.css';

export interface ImpactTableProps {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Impact Table component based on Figma designs
 * 
 * A comprehensive table for displaying and editing impact assessment data
 * with category headers, row headers, and various cell types.
 */
export const ImpactTable: React.FC<ImpactTableProps> = ({
  className = '',
}) => {
  const tableClasses = [
    'table-impact',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={tableClasses}>
      {/* Header Row */}
      <div className="row-header">
        <ImpactTableCell
          role="cell"
          type="header-w-subtext"
          width="lg"
          title="Category name"
          subtext="This is a subtitle"
        />
        <ImpactTableCell
          role="cell"
          type="impact"
          width="lg"
          title="Impact values"
          subtext="This is a subtitle"
        />
        <ImpactTableCell
          role="cell-0"
          type="header"
          width="sm"
          unitLabel="0A"
        />
        <ImpactTableCell
          role="cell"
          type="header"
          width="sm"
          unitLabel="U1"
        />
        <ImpactTableCell
          role="cell"
          type="header"
          width="sm"
          unitLabel="U2"
        />
        <ImpactTableCell
          role="cell"
          type="header"
          width="sm"
          unitLabel="U3"
        />
        <ImpactTableCell
          role="cell"
          type="header"
          width="sm"
          unitLabel="U4"
        />
      </div>

      {/* Body */}
      <div className="body">
        {/* Column: Row Headers */}
        <div className="column-row-header">
          <ImpactTableCell
            role="row"
            type="header-w-subtext"
            width="lg"
            title="Row title goes here"
            subtext="This is subtext"
          />
          <ImpactTableCell
            role="row"
            type="header-w-subtext"
            width="lg"
            title="Row title goes here"
            subtext="This is subtext"
          />
          <ImpactTableCell
            role="row"
            type="header-w-subtext"
            width="lg"
            title="Row title goes here"
            subtext="This is subtext"
          />
          <ImpactTableCell
            role="row"
            type="header-w-subtext"
            width="lg"
            title="Row title goes here"
            subtext="This is subtext"
          />
        </div>

        {/* Column: Impact Values (Special) */}
        <div className="column-special">
          <ImpactTableCell
            role="cell"
            type="populated"
            width="lg"
            state="decimal"
            value="2.65"
          />
          <ImpactTableCell
            role="cell"
            type="populated"
            width="lg"
            state="decimal"
            value="2.65"
          />
          <ImpactTableCell
            role="cell"
            type="dropdown"
            width="lg"
            state="default"
            placeholder="Select an option"
          />
          <ImpactTableCell
            role="cell"
            type="input"
            width="lg"
            state="default"
            placeholder="Enter initial value"
          />
        </div>

        {/* Column: 0A */}
        <div className="column-cell-0">
          <ImpactTableCell
            role="cell-0"
            type="populated"
            width="sm"
            state="decimal"
            value="5.67"
          />
          <ImpactTableCell
            role="cell-0"
            type="populated"
            width="sm"
            state="decimal"
            value="5.67"
          />
          <ImpactTableCell
            role="cell-0"
            type="populated"
            width="sm"
            state="decimal"
            value="5.67"
          />
          <ImpactTableCell
            role="cell-0"
            type="populated"
            width="sm"
            state="decimal"
            value="5.67"
          />
        </div>

        {/* Column: U1 */}
        <div className="column-1">
          <ImpactTableCell
            role="cell"
            type="populated"
            width="sm"
            state="scale"
            value="3"
          />
          <ImpactTableCell
            role="cell"
            type="populated"
            width="sm"
            state="scale"
            value="3"
          />
          <ImpactTableCell
            role="cell"
            type="populated"
            width="sm"
            state="scale"
            value="3"
          />
          <ImpactTableCell
            role="cell"
            type="populated"
            width="sm"
            state="scale"
            value="3"
          />
        </div>

        {/* Column: U2 */}
        <div className="column-2">
          <ImpactTableCell
            role="cell"
            type="populated"
            width="sm"
            state="decimal"
            value="5.67"
          />
          <ImpactTableCell
            role="cell"
            type="populated"
            width="sm"
            state="decimal"
            value="5.67"
          />
          <ImpactTableCell
            role="cell"
            type="populated"
            width="sm"
            state="decimal"
            value="5.67"
          />
          <ImpactTableCell
            role="cell"
            type="populated"
            width="sm"
            state="decimal"
            value="5.67"
          />
        </div>

        {/* Column: U3 */}
        <div className="column-3">
          <ImpactTableCell
            role="cell"
            type="populated"
            width="sm"
            state="decimal"
            value="5.67"
          />
          <ImpactTableCell
            role="cell"
            type="populated"
            width="sm"
            state="decimal"
            value="5.67"
          />
          <ImpactTableCell
            role="cell"
            type="populated"
            width="sm"
            state="decimal"
            value="5.67"
          />
          <ImpactTableCell
            role="cell"
            type="populated"
            width="sm"
            state="decimal"
            value="5.67"
          />
        </div>

        {/* Column: U4 */}
        <div className="column-4">
          <ImpactTableCell
            role="cell"
            type="populated"
            width="sm"
            state="decimal"
            value="5.67"
          />
          <ImpactTableCell
            role="cell"
            type="populated"
            width="sm"
            state="decimal"
            value="5.67"
          />
          <ImpactTableCell
            role="cell"
            type="populated"
            width="sm"
            state="decimal"
            value="5.67"
          />
          <ImpactTableCell
            role="cell"
            type="populated"
            width="sm"
            state="decimal"
            value="5.67"
          />
        </div>
      </div>

      {/* Total Row */}
      <div className="row-total">
        <ImpactTableCell
          role="row"
          type="total"
          width="lg"
          title="Total amount ($M)"
          subtext="This is subtext"
        />
        <ImpactTableCell
          role="cell"
          type="total"
          width="lg"
          state="decimal"
          value="$ 2.65 M"
        />
        <ImpactTableCell
          role="cell-0"
          type="total"
          width="sm"
          state="decimal"
          value="$ 2.65 M"
        />
        <ImpactTableCell
          role="cell-0"
          type="total"
          width="sm"
          state="scale"
          value="3"
        />
        <ImpactTableCell
          role="cell-0"
          type="total"
          width="sm"
          state="text"
          value="$ 2.65 M"
        />
        <ImpactTableCell
          role="cell-0"
          type="total"
          width="sm"
          state="text"
          value="$ 2.65 M"
        />
        <ImpactTableCell
          role="cell-0"
          type="total"
          width="sm"
          state="text"
          value="$ 2.65 M"
        />
      </div>
    </div>
  );
};

export default ImpactTable;
