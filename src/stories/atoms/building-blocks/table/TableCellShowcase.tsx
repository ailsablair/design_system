import { useMemo, useState } from 'react';
import { Checkbox } from '../../Checkbox';
import { Avatar } from '../../Avatar';
import { AvatarGroup } from '../../AvatarGroup';
import { ProgressBar } from '../ProgressBar';
import { EchoMUIButton as Button } from '../../EchoMUIButton';
import { Tag } from '../../Tag';
import { Star } from '../Star';
import { FileIcon } from '../FileIcon';
import { Icon } from '../../../foundations/Icon';
import './tableCellShowcase.css';

export type TableCellShowcaseStatus = 'online' | 'offline';

export interface TableCellShowcaseRow {
  id: string;
  user: {
    name: string;
    email: string;
    avatarInitials?: string;
    status: TableCellShowcaseStatus;
  };
  badge: {
    label: string;
    tone: 'neutral' | 'success' | 'error' | 'warning' | 'primary';
    dot?: boolean;
  };
  amount: {
    value: string;
    change?: number;
  };
  progress: number;
  rating: number;
  file: {
    name: string;
    size: string;
    type: string;
  };
  payment: {
    method: string;
    lastFour: string;
    expiry: string;
  };
}

export interface TableCellShowcaseProps {
  /** Rows to render within the showcase table */
  rows?: TableCellShowcaseRow[];
  /** Optional class name */
  className?: string;
  /** Row IDs that should be selected initially */
  defaultSelectedRows?: string[];
}

const defaultRows: TableCellShowcaseRow[] = [
  {
    id: 'row-1',
    user: {
      name: 'Olivia Rhye',
      email: 'olivia@email.com',
      avatarInitials: 'OR',
      status: 'online',
    },
    badge: {
      label: 'Label',
      tone: 'neutral',
    },
    amount: {
      value: '2,000.00',
      change: 20,
    },
    progress: 30,
    rating: 4,
    file: {
      name: 'thisisafilename.pdf',
      size: '200 MB',
      type: 'PDF',
    },
    payment: {
      method: 'Visa',
      lastFour: '1234',
      expiry: '01/2001',
    },
  },
  {
    id: 'row-2',
    user: {
      name: 'Phoenix Baker',
      email: 'phoenix@email.com',
      avatarInitials: 'PB',
      status: 'offline',
    },
    badge: {
      label: 'Active',
      tone: 'success',
      dot: true,
    },
    amount: {
      value: '1,500.00',
      change: -5,
    },
    progress: 75,
    rating: 5,
    file: {
      name: 'document.pdf',
      size: '150 MB',
      type: 'PDF',
    },
    payment: {
      method: 'Mastercard',
      lastFour: '5678',
      expiry: '03/2023',
    },
  },
  {
    id: 'row-3',
    user: {
      name: 'Lana Steiner',
      email: 'lana@email.com',
      avatarInitials: 'LS',
      status: 'online',
    },
    badge: {
      label: 'Inactive',
      tone: 'error',
      dot: true,
    },
    amount: {
      value: '3,200.00',
      change: 15,
    },
    progress: 45,
    rating: 3,
    file: {
      name: 'report.pdf',
      size: '80 MB',
      type: 'PDF',
    },
    payment: {
      method: 'Visa',
      lastFour: '9012',
      expiry: '12/2024',
    },
  },
];

const badgeToneToClass: Record<TableCellShowcaseRow['badge']['tone'], string> = {
  neutral: 'table-cell-showcase__badge--neutral',
  success: 'table-cell-showcase__badge--success',
  error: 'table-cell-showcase__badge--error',
  warning: 'table-cell-showcase__badge--warning',
  primary: 'table-cell-showcase__badge--primary',
};

const ratingRange = Array.from({ length: 5 });

export const TableCellShowcase: React.FC<TableCellShowcaseProps> = ({
  rows = defaultRows,
  className = '',
  defaultSelectedRows = [],
}) => {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set(defaultSelectedRows));

  const columns = useMemo(
    () => [
      { key: 'user', label: 'User' },
      { key: 'status', label: 'Status' },
      { key: 'badge', label: 'Label' },
      { key: 'amount', label: 'Amount' },
      { key: 'progress', label: 'Progress' },
      { key: 'rating', label: 'Rating' },
      { key: 'file', label: 'File' },
      { key: 'payment', label: 'Payment' },
      { key: 'actions', label: 'Actions' },
    ],
    []
  );

  const containerClassName = [
    'table-cell-showcase',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleSelectAll = (checked: boolean) => {
    setSelectedRows(() => {
      if (checked) {
        return new Set(rows.map((row) => row.id));
      }
      return new Set();
    });
  };

  const handleRowToggle = (rowId: string) => {
    setSelectedRows((previous) => {
      const next = new Set(previous);
      if (next.has(rowId)) {
        next.delete(rowId);
      } else {
        next.add(rowId);
      }
      return next;
    });
  };

  const allSelected = rows.length > 0 && selectedRows.size === rows.length;
  const someSelected = selectedRows.size > 0 && !allSelected;

  const avatarGroupData = useMemo(
    () => [
      { name: 'OR', initial: 'OR' },
      { name: 'PB', initial: 'PB' },
      { name: 'LS', initial: 'LS' },
      { name: 'JD', initial: 'JD' },
      { name: 'AS', initial: 'AS' },
      { name: 'MK', initial: 'MK' },
      { name: 'TW', initial: 'TW' },
      { name: 'RM', initial: 'RM' },
      { name: 'KL', initial: 'KL' },
    ],
    []
  );

  return (
    <div className={containerClassName}>
      <header className="table-cell-showcase__header">
        <h1 className="table-cell-showcase__title">Table Cell Component System</h1>
        <p className="table-cell-showcase__subtitle">
          Showcase demonstrating a comprehensive table layout with reusable design system primitives.
        </p>
      </header>

      <section className="table-cell-showcase__section">
        <div className="table-cell-showcase__table-card">
          <table className="table-cell-showcase__table" role="table">
            <thead className="table-cell-showcase__head">
              <tr className="table-cell-showcase__head-row">
                <th scope="col" className="table-cell-showcase__head-cell table-cell-showcase__head-cell--checkbox">
                  <Checkbox
                    size="default"
                    checked={allSelected}
                    indeterminate={someSelected}
                    onChange={(event) => handleSelectAll(event.target.checked)}
                    variant="default"
                    shape="square"
                  />
                </th>
                {columns.map((column) => (
                  <th key={column.key} scope="col" className="table-cell-showcase__head-cell">
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="table-cell-showcase__body">
              {rows.map((row) => {
                const isSelected = selectedRows.has(row.id);
                return (
                  <tr
                    key={row.id}
                    className={`table-cell-showcase__row ${isSelected ? 'table-cell-showcase__row--selected' : ''}`}
                  >
                    <td className="table-cell-showcase__cell table-cell-showcase__cell--checkbox">
                      <Checkbox
                        size="default"
                        checked={isSelected}
                        onChange={() => handleRowToggle(row.id)}
                        variant="default"
                        shape="square"
                      />
                    </td>
                    <td className="table-cell-showcase__cell">
                      <div className="table-cell-showcase__user">
                        <Avatar
                          size="default"
                          type="initial-light"
                          initial={row.user.avatarInitials || row.user.name.substring(0, 2).toUpperCase()}
                          statusIcon={{ status: row.user.status, visible: true }}
                        />
                        <div className="table-cell-showcase__user-text">
                          <span className="table-cell-showcase__user-name">{row.user.name}</span>
                          <span className="table-cell-showcase__user-email">{row.user.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="table-cell-showcase__cell">
                      <div className={`table-cell-showcase__status ${row.user.status === 'online' ? 'table-cell-showcase__status--online' : 'table-cell-showcase__status--offline'}`}>
                        <span className="table-cell-showcase__status-dot" aria-hidden />
                        <span className="table-cell-showcase__status-label">
                          {row.user.status === 'online' ? 'Online' : 'Offline'}
                        </span>
                      </div>
                    </td>
                    <td className="table-cell-showcase__cell">
                      <span className={`table-cell-showcase__badge ${badgeToneToClass[row.badge.tone]}`}>
                        {row.badge.dot && <span className="table-cell-showcase__badge-dot" aria-hidden />}
                        <span className="table-cell-showcase__badge-label">{row.badge.label}</span>
                      </span>
                    </td>
                    <td className="table-cell-showcase__cell">
                      <div className="table-cell-showcase__amount">
                        <span className="table-cell-showcase__amount-value">${row.amount.value}</span>
                        {typeof row.amount.change === 'number' && (
                          <span
                            className={`table-cell-showcase__amount-change ${row.amount.change >= 0 ? 'table-cell-showcase__amount-change--positive' : 'table-cell-showcase__amount-change--negative'}`}
                          >
                            <span aria-hidden>{row.amount.change >= 0 ? '↑' : '↓'}</span>
                            <span>{Math.abs(row.amount.change)}%</span>
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="table-cell-showcase__cell">
                      <div className="table-cell-showcase__progress">
                        <ProgressBar
                          progress={row.progress}
                          size="default"
                        />
                      </div>
                    </td>
                    <td className="table-cell-showcase__cell">
                      <div className="table-cell-showcase__rating" aria-label={`Rating ${row.rating} out of 5`}>
                        {ratingRange.map((_, index) => (
                          <Star
                            key={index}
                            fill={index < row.rating ? '100%' : 'empty'}
                            size="default"
                          />
                        ))}
                      </div>
                    </td>
                    <td className="table-cell-showcase__cell">
                      <div className="table-cell-showcase__file">
                        <FileIcon type="pdf" size="small" showLabel={false} />
                        <div className="table-cell-showcase__file-text">
                          <span className="table-cell-showcase__file-name">{row.file.name}</span>
                          <span className="table-cell-showcase__file-meta">{row.file.size} {row.file.type}</span>
                        </div>
                      </div>
                    </td>
                    <td className="table-cell-showcase__cell">
                      <div className="table-cell-showcase__payment">
                        <span className="table-cell-showcase__payment-method">
                          {row.payment.method} ending in {row.payment.lastFour}
                        </span>
                        <span className="table-cell-showcase__payment-expiry">
                          Expiry {row.payment.expiry}
                        </span>
                      </div>
                    </td>
                    <td className="table-cell-showcase__cell table-cell-showcase__cell--actions">
                      <div className="table-cell-showcase__actions">
                        <Button
                          size="small"
                          variant="tertiary"
                          leadingIcon={<Icon name="edit" size="sm" opacity={0.6} />}
                        >
                          Edit
                        </Button>
                        <Button
                          size="small"
                          variant="tertiary"
                          leadingIcon={<Icon name="delete" size="sm" opacity={0.6} />}
                        >
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="table-cell-showcase__section">
        <h2 className="table-cell-showcase__section-title">Component Variations</h2>
        <div className="table-cell-showcase__card-grid">
          <article className="table-cell-showcase__card">
            <div className="table-cell-showcase__card-header">
              <h3 className="table-cell-showcase__card-title">Avatar Group</h3>
              <span className="table-cell-showcase__card-supporting">Interactive overlapping avatars</span>
            </div>
            <div className="table-cell-showcase__card-content">
              <AvatarGroup
                avatars={avatarGroupData}
                maxCount={5}
                showOverflow
                stroke="bordered"
                size="default"
              />
              <span className="table-cell-showcase__card-footnote">{avatarGroupData.length} users</span>
            </div>
          </article>

          <article className="table-cell-showcase__card">
            <div className="table-cell-showcase__card-header">
              <h3 className="table-cell-showcase__card-title">Badge Variants</h3>
              <span className="table-cell-showcase__card-supporting">Status styles with dot indicators</span>
            </div>
            <div className="table-cell-showcase__badge-collection">
              <span className="table-cell-showcase__badge table-cell-showcase__badge--neutral">
                <span className="table-cell-showcase__badge-label">Default</span>
              </span>
              <span className="table-cell-showcase__badge table-cell-showcase__badge--primary">
                <span className="table-cell-showcase__badge-label">Label 4</span>
              </span>
              <span className="table-cell-showcase__badge table-cell-showcase__badge--success">
                <span className="table-cell-showcase__badge-dot" aria-hidden />
                <span className="table-cell-showcase__badge-label">Success</span>
              </span>
              <span className="table-cell-showcase__badge table-cell-showcase__badge--error">
                <span className="table-cell-showcase__badge-dot" aria-hidden />
                <span className="table-cell-showcase__badge-label">Error</span>
              </span>
              <span className="table-cell-showcase__badge table-cell-showcase__badge--warning">
                <span className="table-cell-showcase__badge-dot" aria-hidden />
                <span className="table-cell-showcase__badge-label">Warning</span>
              </span>
            </div>
          </article>

          <article className="table-cell-showcase__card">
            <div className="table-cell-showcase__card-header">
              <h3 className="table-cell-showcase__card-title">Status Indicators</h3>
              <span className="table-cell-showcase__card-supporting">User presence tokens</span>
            </div>
            <div className="table-cell-showcase__status-list">
              <div className="table-cell-showcase__status table-cell-showcase__status--online">
                <span className="table-cell-showcase__status-dot" aria-hidden />
                <span className="table-cell-showcase__status-label">Online Active</span>
              </div>
              <div className="table-cell-showcase__status table-cell-showcase__status--offline">
                <span className="table-cell-showcase__status-dot" aria-hidden />
                <span className="table-cell-showcase__status-label">Offline Inactive</span>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default TableCellShowcase;
