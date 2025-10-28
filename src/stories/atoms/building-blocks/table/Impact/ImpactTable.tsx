import React from 'react';
import { ImpactTableCell } from './ImpactTableCell';
import './impactTable.css';

export interface ImpactTableProps {
  /** Additional CSS classes */
  className?: string;
  /** Data for the table */
  data?: any[];
  /** Column headers */
  headers?: string[];
}

/**
 * ImpactTable component - Complete table using ImpactTableCell components
 * Responsive and fully accessible table implementation
 */
export const ImpactTable: React.FC<ImpactTableProps> = ({
  className = '',
  data = [],
  headers = [],
}) => {
  const tableClasses = ['impact-table-wrapper', className].filter(Boolean).join(' ');

  return (
    <div className={tableClasses}>
      <div className="table-impact">
        {/* Header Row */}
        <div className="row-header">
          <div className="column-row-header">
            <ImpactTableCell 
              role="row" 
              type="header" 
              width="lg"
              title="Category name"
              showLock
            />
          </div>
          <div className="column-data">
            <ImpactTableCell 
              role="cell" 
              type="header" 
              width="sm"
              state="default"
            >
              U1
            </ImpactTableCell>
            <ImpactTableCell 
              role="cell" 
              type="header" 
              width="sm"
              state="default"
            >
              U2
            </ImpactTableCell>
            <ImpactTableCell 
              role="cell" 
              type="header" 
              width="sm"
              state="default"
            >
              U3
            </ImpactTableCell>
            <ImpactTableCell 
              role="cell" 
              type="header-w-subtext" 
              width="sm"
              state="default"
              subtitle="0A"
            >
              2025
            </ImpactTableCell>
          </div>
          <div className="column-total">
            <ImpactTableCell 
              role="row" 
              type="header" 
              width="lg"
              title="Row Purpose Goal"
            />
            <ImpactTableCell 
              role="row" 
              type="header" 
              width="lg"
              title="Row Purpose Goal"
            />
          </div>
        </div>

        {/* Body */}
        <div className="body">
          {/* Row Header Column */}
          <div className="column-row-header">
            <ImpactTableCell 
              role="row" 
              type="header-w-subtext" 
              width="lg"
              title="Category 1"
              subtitle="This is subtext"
            />
            <ImpactTableCell 
              role="row" 
              type="header-w-subtext" 
              width="lg"
              title="Category 2"
              subtitle="This is subtext"
            />
            <ImpactTableCell 
              role="row" 
              type="header-w-subtext" 
              width="lg"
              title="Category 3"
              subtitle="This is subtext"
            />
          </div>

          {/* Data Columns */}
          <div className="column-data">
            {/* Row 1 */}
            <ImpactTableCell 
              role="cell-0" 
              type="dropdown" 
              width="sm"
              state="scale"
            >
              3
            </ImpactTableCell>
            <ImpactTableCell 
              role="cell" 
              type="dropdown" 
              width="sm"
              state="scale"
            >
              3
            </ImpactTableCell>
            <ImpactTableCell 
              role="cell" 
              type="dropdown" 
              width="sm"
              state="empty"
            />
            <ImpactTableCell 
              role="cell" 
              type="dropdown" 
              width="sm"
              state="default"
            >
              Select an option
            </ImpactTableCell>

            {/* Row 2 */}
            <ImpactTableCell 
              role="cell-0" 
              type="input" 
              width="sm"
              state="decimal"
            >
              5.67
            </ImpactTableCell>
            <ImpactTableCell 
              role="cell" 
              type="input" 
              width="sm"
              state="default"
            >
              0.00
            </ImpactTableCell>
            <ImpactTableCell 
              role="cell" 
              type="input" 
              width="sm"
              state="empty"
            />
            <ImpactTableCell 
              role="cell" 
              type="locked" 
              width="sm"
              state="default"
            >
              2001
            </ImpactTableCell>

            {/* Row 3 */}
            <ImpactTableCell 
              role="cell-0" 
              type="populated" 
              width="sm"
              state="decimal"
            >
              5.67
            </ImpactTableCell>
            <ImpactTableCell 
              role="cell" 
              type="populated" 
              width="sm"
              state="text"
            >
              Text
            </ImpactTableCell>
            <ImpactTableCell 
              role="cell" 
              type="populated" 
              width="sm"
              state="scale"
            >
              3
            </ImpactTableCell>
            <ImpactTableCell 
              role="cell" 
              type="populated" 
              width="sm"
              state="default"
            >
              $0.00 M
            </ImpactTableCell>
          </div>

          {/* Total Columns */}
          <div className="column-total">
            {/* Row 1 Totals */}
            <ImpactTableCell 
              role="cell" 
              type="total" 
              width="lg"
              state="decimal"
            >
              5.67
            </ImpactTableCell>
            <ImpactTableCell 
              role="cell" 
              type="total" 
              width="lg"
              state="default"
            >
              $0.00 M
            </ImpactTableCell>

            {/* Row 2 Totals */}
            <ImpactTableCell 
              role="cell" 
              type="total" 
              width="lg"
              state="text"
            >
              Text
            </ImpactTableCell>
            <ImpactTableCell 
              role="cell" 
              type="total" 
              width="lg"
              state="scale"
            >
              3
            </ImpactTableCell>

            {/* Row 3 Totals */}
            <ImpactTableCell 
              role="cell" 
              type="locked" 
              width="lg"
              state="decimal"
            >
              2.65
            </ImpactTableCell>
            <ImpactTableCell 
              role="cell" 
              type="populated" 
              width="lg"
              state="scale"
            >
              3 - Significant
            </ImpactTableCell>
          </div>
        </div>

        {/* Total Row */}
        <div className="row-total">
          <div className="column-row-header">
            <ImpactTableCell 
              role="row" 
              type="total" 
              width="lg"
              title="Total amount ($M)"
              subtitle="This is subtext"
            />
          </div>
          <div className="column-data">
            <ImpactTableCell 
              role="cell-0" 
              type="total" 
              width="sm"
              state="decimal"
            >
              5.67
            </ImpactTableCell>
            <ImpactTableCell 
              role="cell" 
              type="total" 
              width="sm"
              state="text"
            >
              Text
            </ImpactTableCell>
            <ImpactTableCell 
              role="cell" 
              type="total" 
              width="sm"
              state="scale"
            >
              3
            </ImpactTableCell>
            <ImpactTableCell 
              role="cell" 
              type="total" 
              width="sm"
              state="default"
            >
              $0.00 M
            </ImpactTableCell>
          </div>
          <div className="column-total">
            <ImpactTableCell 
              role="cell" 
              type="total" 
              width="lg"
              state="decimal"
            >
              5.67
            </ImpactTableCell>
            <ImpactTableCell 
              role="cell" 
              type="total" 
              width="lg"
              state="default"
            >
              $0.00 M
            </ImpactTableCell>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactTable;
