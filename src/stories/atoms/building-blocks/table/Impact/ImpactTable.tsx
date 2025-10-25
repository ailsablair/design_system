import React from 'react';
import { ImpactTableCell, type ImpactTableCellProps } from './ImpactTableCell';
import './impactTable.css';

export interface ImpactTableColumnHeader {
  /** Column identifier */
  id: string;
  /** Year label */
  yearLabel?: string;
  /** Unit label */
  unitLabel?: string;
  /** Width variant */
  width?: 'sm' | 'lg';
  /** Whether this is a special column (cell-0 role) */
  isSpecial?: boolean;
}

export interface ImpactTableRowHeader {
  /** Row identifier */
  id: string;
  /** Title text */
  title: string;
  /** Subtext (optional) */
  subtext?: string;
  /** Row type */
  type?: 'header' | 'header-subtext' | 'bolded' | 'bolded-w-subtext';
  /** Whether to show lock icon */
  showLock?: boolean;
  /** Disabled state */
  disabled?: boolean;
}

export interface ImpactTableCellData {
  /** Cell type */
  type?: 'dropdown' | 'input' | 'total';
  /** Cell state */
  state?: 'default' | 'filled' | 'empty' | 'disabled' | 'disabled-empty' | 'decimal' | 'text' | 'scale';
  /** Cell value */
  value?: string | number;
  /** Placeholder */
  placeholder?: string;
  /** Read only */
  readOnly?: boolean;
  /** Dropdown options */
  options?: Array<{ label: string; value: string | number }>;
}

export interface ImpactTableProps {
  /** Table title */
  title?: string;
  /** Column headers */
  columns: ImpactTableColumnHeader[];
  /** Row headers */
  rows: ImpactTableRowHeader[];
  /** Cell data (row x column matrix) */
  data: Record<string, Record<string, ImpactTableCellData>>;
  /** Show category header row */
  showCategoryHeader?: boolean;
  /** Category header data */
  categoryHeaders?: Array<{
    id: string;
    title: string;
    subtext?: string;
    showLock?: boolean;
    colspan?: number;
  }>;
  /** Additional CSS classes */
  className?: string;
  /** Cell change handler */
  onCellChange?: (rowId: string, columnId: string, value: string | number) => void;
}

/**
 * Impact Table component for displaying and editing impact assessment data
 * 
 * Features:
 * - Multi-column layout with year/unit headers
 * - Row headers with titles and subtexts
 * - Support for dropdown, input, and total cells
 * - Responsive design
 * - Accessible keyboard navigation
 */
export const ImpactTable: React.FC<ImpactTableProps> = ({
  title,
  columns,
  rows,
  data,
  showCategoryHeader = false,
  categoryHeaders = [],
  className = '',
  onCellChange,
}) => {
  const tableClasses = [
    'impact-table',
    className
  ].filter(Boolean).join(' ');

  const handleCellChange = (rowId: string, columnId: string, value: string | number) => {
    onCellChange?.(rowId, columnId, value);
  };

  return (
    <div className={tableClasses}>
      {title && (
        <div className="impact-table__title-section">
          <h2 className="impact-table__title">{title}</h2>
        </div>
      )}
      
      <div className="impact-table__container">
        <table className="impact-table__table">
          {/* Category Header Row (if enabled) */}
          {showCategoryHeader && categoryHeaders.length > 0 && (
            <thead className="impact-table__category-header">
              <tr>
                <th className="impact-table__corner-cell"></th>
                {categoryHeaders.map((category) => (
                  <th
                    key={category.id}
                    colSpan={category.colspan || 1}
                    className="impact-table__category-cell"
                  >
                    <ImpactTableCell
                      role="cell"
                      type={category.subtext ? 'header-w-subtext' : 'header'}
                      width="lg"
                      title={category.title}
                      subtext={category.subtext}
                      showLock={category.showLock}
                    />
                  </th>
                ))}
              </tr>
            </thead>
          )}

          {/* Column Header Row */}
          <thead className="impact-table__header">
            <tr>
              <th className="impact-table__corner-cell"></th>
              {columns.map((column) => (
                <th 
                  key={column.id}
                  className={`impact-table__column-header ${
                    column.isSpecial ? 'impact-table__column-header--special' : ''
                  }`}
                >
                  <ImpactTableCell
                    role={column.isSpecial ? 'cell-0' : 'cell'}
                    type="header"
                    width={column.width || 'sm'}
                    yearLabel={column.yearLabel}
                    unitLabel={column.unitLabel}
                  />
                </th>
              ))}
            </tr>
          </thead>

          {/* Data Rows */}
          <tbody className="impact-table__body">
            {rows.map((row) => (
              <tr key={row.id} className="impact-table__row">
                {/* Row Header Cell */}
                <th className="impact-table__row-header">
                  <ImpactTableCell
                    role="row"
                    type={row.type || 'header'}
                    title={row.title}
                    subtext={row.subtext}
                    showLock={row.showLock}
                    disabled={row.disabled}
                  />
                </th>

                {/* Data Cells */}
                {columns.map((column) => {
                  const cellData = data[row.id]?.[column.id] || {};
                  const cellProps: ImpactTableCellProps = {
                    role: column.isSpecial ? 'cell-0' : 'cell',
                    type: cellData.type || 'input',
                    width: column.width || 'sm',
                    state: cellData.state || 'default',
                    value: cellData.value,
                    placeholder: cellData.placeholder,
                    readOnly: cellData.readOnly,
                    disabled: row.disabled,
                    options: cellData.options,
                    onChange: (value) => handleCellChange(row.id, column.id, value),
                  };

                  return (
                    <td 
                      key={`${row.id}-${column.id}`}
                      className="impact-table__data-cell"
                    >
                      <ImpactTableCell {...cellProps} />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ImpactTable;
