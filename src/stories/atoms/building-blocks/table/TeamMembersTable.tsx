import React, { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { Button } from '../../Button';
import { Tag, type TagVariant } from '../../Tag';
import { Checkbox } from '../../Checkbox';
import { AvatarGroup } from '../../AvatarGroup';
import { Star } from '../Star';
import { ProgressBar } from '../../ProgressBar';
import { Icon } from '../../../foundations/Icon';
import './teamMembersTable.css';

export interface TeamMember {
  /** Unique identifier */
  id: string;
  /** Contact name */
  contactName: string;
  /** Company name */
  company: string;
  /** Preferences tags */
  preferences: {
    label: string;
    icon?: string;
    closable?: boolean;
  }[];
  /** Rating (1-5 stars) */
  rating: number;
  /** Status avatars */
  status: {
    avatars: Array<{ src: string; name: string }>;
    additionalCount: number;
  };
  /** Progress percentage */
  progress: number;
  /** Whether row is selected */
  selected?: boolean;
}

export type TableSurfaceTone = 'base' | 'neutral' | 'primary';
export type TableDensity = 'spacious' | 'comfortable' | 'compact';

export interface TeamMembersTableProps {
  /** Table title */
  title?: string;
  /** Optional supporting copy shown beneath the title */
  headerDescription?: string;
  /** Item count for badge */
  itemCount?: number;
  /** Custom label for the tag shown beside the title */
  headerTagLabel?: string;
  /** Controls the colour system applied to the header */
  headerTone?: TableSurfaceTone;
  /** Controls header padding and typography density */
  headerDensity?: TableDensity;
  /** Overrides the tag variant when supplied */
  headerTagVariant?: TagVariant;
  /** Slot for custom header actions */
  headerActionsSlot?: ReactNode;
  /** Team member data */
  data: TeamMember[];
  /** Size variant */
  size?: 'default' | 'small';
  /** Current page number */
  currentPage?: number;
  /** Total number of pages */
  totalPages?: number;
  /** Additional CSS classes */
  className?: string;
  /** Row selection handler */
  onRowSelect?: (rowId: string, selected: boolean) => void;
  /** Select all handler */
  onSelectAll?: (selected: boolean) => void;
  /** Page change handler */
  onPageChange?: (page: number) => void;
  /** Edit action handler */
  onEdit?: (rowId: string) => void;
  /** Delete action handler */
  onDelete?: (rowId: string) => void;
  /** More actions handler */
  onMoreActions?: () => void;
  /** Controls the footer surface tone */
  footerTone?: TableSurfaceTone;
  /** Controls footer density */
  footerDensity?: TableDensity;
  /** Slot for custom footer content (replaces pagination when provided) */
  footerContentSlot?: ReactNode;
  /** Default sort configuration applied on mount */
  defaultSort?: {
    key: string;
    direction: 'asc' | 'desc';
  };
}

const headerToneToTagVariant = (tone: TableSurfaceTone): TagVariant => {
  switch (tone) {
    case 'neutral':
      return 'outline-info-blue';
    case 'primary':
      return 'outline-black';
    default:
      return 'outline-blue';
  }
};

/**
 * TeamMembersTable component that exactly matches the Figma design specifications
 *
 * Features:
 * - Header with configurable tones, densities, description, and action slots
 * - Multiple cell types: contact name, company, multi-tag preferences, actions, rating, status avatars, progress
 * - Checkbox selection with indeterminate states
 * - Alternating row backgrounds (seafoam-25)
 * - Pagination footer with tone + density controls and custom slot support
 * - Responsive design matching Figma specifications
 */
export const TeamMembersTable: React.FC<TeamMembersTableProps> = ({
  title = 'Team members',
  headerDescription,
  itemCount = 100,
  headerTagLabel,
  headerTone = 'base',
  headerDensity,
  headerTagVariant,
  headerActionsSlot,
  data,
  size = 'small',
  currentPage = 1,
  totalPages = 10,
  className = '',
  onRowSelect,
  onSelectAll,
  onPageChange,
  onEdit,
  onDelete,
  onMoreActions,
  footerTone = 'base',
  footerDensity,
  footerContentSlot,
  defaultSort,
}) => {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [sortConfig, setSortConfig] = useState<{
    key: string | null;
    direction: 'asc' | 'desc' | null;
  }>(() => ({
    key: defaultSort?.key ?? null,
    direction: defaultSort?.direction ?? null,
  }));

  useEffect(() => {
    if (!defaultSort) {
      return;
    }

    setSortConfig((current) => {
      if (current.key === defaultSort.key && current.direction === defaultSort.direction) {
        return current;
      }

      return {
        key: defaultSort.key,
        direction: defaultSort.direction,
      };
    });
  }, [defaultSort?.key, defaultSort?.direction]);

  const resolvedHeaderDensity: TableDensity = headerDensity ?? (size === 'small' ? 'compact' : 'comfortable');
  const resolvedFooterDensity: TableDensity = footerDensity ?? (size === 'small' ? 'compact' : 'comfortable');
  const derivedTagVariant = headerTagVariant ?? headerToneToTagVariant(headerTone);
  const tagLabel = headerTagLabel ?? `${itemCount} items`;

  const containerClasses = [
    'team-members-table',
    `team-members-table--${size}`,
    className,
  ].filter(Boolean).join(' ');

  const headerClasses = [
    'team-members-table__header',
    `team-members-table__header--tone-${headerTone}`,
    `team-members-table__header--density-${resolvedHeaderDensity}`,
  ].join(' ');

  const titleSectionClasses = [
    'team-members-table__title-section',
    headerDescription ? 'team-members-table__title-section--with-description' : '',
    `team-members-table__title-section--density-${resolvedHeaderDensity}`,
  ].filter(Boolean).join(' ');

  const titleClasses = [
    'team-members-table__title',
    `team-members-table__title--density-${resolvedHeaderDensity}`,
  ].join(' ');

  const footerClasses = [
    'team-members-table__footer',
    `team-members-table__footer--tone-${footerTone}`,
    `team-members-table__footer--density-${resolvedFooterDensity}`,
  ].join(' ');

  const selectedCount = selectedRows.size;
  const totalCount = data.length;
  const isAllSelected = selectedCount > 0 && selectedCount === totalCount;
  const isIndeterminate = selectedCount > 0 && selectedCount < totalCount;

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(new Set(data.map(row => row.id)));
    } else {
      setSelectedRows(new Set());
    }
    onSelectAll?.(checked);
  };

  const handleRowSelect = (rowId: string, selected: boolean) => {
    const newSelectedRows = new Set(selectedRows);
    if (selected) {
      newSelectedRows.add(rowId);
    } else {
      newSelectedRows.delete(rowId);
    }
    setSelectedRows(newSelectedRows);
    onRowSelect?.(rowId, selected);
  };

  const handleSort = (columnKey: string) => {
    const newDirection = sortConfig.key === columnKey && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key: columnKey, direction: newDirection });
  };

  const renderColumnHeader = ({
    columnKey,
    label,
    sortable = false,
    leadingAccessory,
    trailingAccessory,
    align = 'left',
  }: {
    columnKey: string;
    label: string;
    sortable?: boolean;
    leadingAccessory?: ReactNode;
    trailingAccessory?: ReactNode;
    align?: 'left' | 'center' | 'right';
  }) => {
    const isSorted = sortConfig.key === columnKey && sortConfig.direction !== null;
    const direction = isSorted ? (sortConfig.direction ?? 'asc') : 'asc';
    const ariaSort = sortable ? (isSorted ? (direction === 'asc' ? 'ascending' : 'descending') : 'none') : undefined;
    const nextDirectionLabel = sortable
      ? sortConfig.key === columnKey && sortConfig.direction === 'asc'
        ? 'descending'
        : 'ascending'
      : undefined;

    const headerClasses = [
      'team-members-table__column-header',
      sortable ? 'team-members-table__column-header--sortable' : '',
      isSorted ? 'team-members-table__column-header--sorted' : '',
      `team-members-table__column-header--align-${align}`,
      leadingAccessory ? 'team-members-table__column-header--with-leading-control' : '',
    ].filter(Boolean).join(' ');

    return (
      <div className={headerClasses} role="columnheader" aria-sort={ariaSort} data-column-key={columnKey}>
        {leadingAccessory ? (
          <div className="team-members-table__column-leading-control">
            {leadingAccessory}
          </div>
        ) : null}

        {sortable ? (
          <button
            type="button"
            className="team-members-table__column-trigger"
            onClick={() => handleSort(columnKey)}
            aria-pressed={isSorted}
            aria-label={nextDirectionLabel ? `${label}, sort ${nextDirectionLabel}` : undefined}
            title={nextDirectionLabel ? `Sort ${nextDirectionLabel}` : undefined}
          >
            <span className="team-members-table__column-title">{label}</span>
            <Icon
              name="arrow-down-thick"
              size="sm"
              className={`team-members-table__column-sort-icon team-members-table__column-sort-icon--${isSorted ? direction : 'inactive'}`}
              aria-hidden
            />
          </button>
        ) : (
          <div className="team-members-table__column-content">
            <span className="team-members-table__column-title">{label}</span>
            {trailingAccessory ? (
              <span className="team-members-table__column-trailing-accessory">
                {trailingAccessory}
              </span>
            ) : null}
          </div>
        )}
      </div>
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        fill={index < rating ? '100%' : '0%'}
        size="small"
      />
    ));
  };

  const renderPaginationNumbers = () => {
    const pages: Array<number | '...'> = [];
    pages.push(1);

    if (currentPage > 4) {
      pages.push('...');
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i += 1) {
      if (i !== 1 && i !== totalPages) {
        pages.push(i);
      }
    }

    if (currentPage < totalPages - 3) {
      pages.push('...');
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages.map((page, index) => {
      if (page === '...') {
        return (
          <Icon
            key={`ellipsis-${index}`}
            name="dots-horizontal"
            size="sm"
          />
        );
      }

      const pageNumber = page as number;
      const isActive = pageNumber === currentPage;

      return (
        <button
          key={pageNumber}
          className={`team-members-table__page-number ${isActive ? 'team-members-table__page-number--active' : ''}`}
          onClick={() => onPageChange?.(pageNumber)}
          type="button"
        >
          {pageNumber}
        </button>
      );
    });
  };

  const headerActions = headerActionsSlot ?? (
    onMoreActions ? (
      <Button
        size={size === 'small' ? 'small' : 'default'}
        variant="ghost"
        state="default"
        special="icon-only"
        onClick={onMoreActions}
        aria-label="Show table actions"
      >
        <Icon name="dots-vertical" size={size === 'small' ? 'sm' : 'md'} />
      </Button>
    ) : null
  );

  return (
    <div className={containerClasses}>
      {/* Header */}
      <div className={headerClasses}>
        <div className="team-members-table__header-content">
          <div className={titleSectionClasses}>
            <div className="team-members-table__title-row">
              <h2 className={titleClasses}>{title}</h2>
              <Tag
                label={tagLabel}
                size="small"
                variant={derivedTagVariant}
                shape="rounded"
                showClose={false}
              />
            </div>
            {headerDescription && (
              <p className={`team-members-table__header-description team-members-table__header-description--density-${resolvedHeaderDensity}`}>
                {headerDescription}
              </p>
            )}
          </div>
          {headerActions}
        </div>
      </div>

      {/* Table Body */}
      <div className="team-members-table__body">
        <div className="team-members-table__columns">
          {/* Contact Name Column */}
          <div
            className={[
              'team-members-table__column',
              'team-members-table__column--contact-name',
              sortConfig.key === 'contactName' ? 'team-members-table__column--is-sorted' : '',
            ].filter(Boolean).join(' ')}
          >
            {renderColumnHeader({
              columnKey: 'contactName',
              label: 'Contact name',
              sortable: true,
              leadingAccessory: (
                <Checkbox
                  size="small"
                  checked={isAllSelected}
                  indeterminate={isIndeterminate}
                  onChange={(event) => handleSelectAll(event.target.checked)}
                  variant="default"
                  shape="square"
                />
              ),
            })}

            {data.map((member, index) => {
              const isSelected = selectedRows.has(member.id);
              const isAlternate = index % 2 === 1;

              return (
                <div
                  key={member.id}
                  className={`team-members-table__cell team-members-table__cell--lead ${isAlternate ? 'team-members-table__cell--alternate' : ''}`}
                >
                  <Checkbox
                    size="small"
                    checked={isSelected}
                    onChange={(event) => handleRowSelect(member.id, event.target.checked)}
                    variant="default"
                    shape="square"
                  />
                  <div className="team-members-table__cell-title">{member.contactName}</div>
                </div>
              );
            })}
          </div>

          {/* Company Column */}
          <div className="team-members-table__column team-members-table__column--company">
            <div className="team-members-table__header-cell">
              <div className="team-members-table__header-label">
                <span className="team-members-table__header-text">Company</span>
                <Icon name="help-circle" size="sm" aria-hidden />
              </div>
            </div>

            {data.map((member, index) => {
              const isAlternate = index % 2 === 1;

              return (
                <div
                  key={member.id}
                  className={`team-members-table__cell ${isAlternate ? 'team-members-table__cell--alternate' : ''}`}
                >
                  <div className="team-members-table__cell-text">{member.company}</div>
                </div>
              );
            })}
          </div>

          {/* Preferences Column */}
          <div className="team-members-table__column team-members-table__column--preferences">
            <div className="team-members-table__header-cell">
              <div className="team-members-table__header-label">
                <span className="team-members-table__header-text">Preferences</span>
              </div>
            </div>

            {data.map((member, index) => {
              const isAlternate = index % 2 === 1;

              return (
                <div
                  key={member.id}
                  className={`team-members-table__cell ${isAlternate ? 'team-members-table__cell--alternate' : ''}`}
                >
                  <div className="team-members-table__cell-multi-tag">
                    <Tag
                      label="Label"
                      size="small"
                      variant="outline-black"
                      shape="rounded"
                      showClose={false}
                      leadingIcon={<Icon name="alarm-light" size="sm" />}
                      trailingIcon={<Icon name="close" size="sm" />}
                    />
                    <Tag
                      label="+4"
                      size="small"
                      variant="light-gray"
                      shape="rounded"
                      showClose={false}
                      leadingIcon={<Icon name="plus" size="sm" />}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Actions Column */}
          <div className="team-members-table__column team-members-table__column--actions">
            <div className="team-members-table__header-cell">
              <div className="team-members-table__header-label">
                <span className="team-members-table__header-text">Actions</span>
              </div>
            </div>

            {data.map((member, index) => {
              const isAlternate = index % 2 === 1;

              return (
                <div
                  key={member.id}
                  className={`team-members-table__cell ${isAlternate ? 'team-members-table__cell--alternate' : ''}`}
                >
                  <div className="team-members-table__cell-links">
                    <button
                      className="team-members-table__link"
                      type="button"
                      onClick={() => onEdit?.(member.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="team-members-table__link"
                      type="button"
                      onClick={() => onDelete?.(member.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Rating Column */}
          <div className="team-members-table__column team-members-table__column--rating">
            <div className="team-members-table__header-cell">
              <div className="team-members-table__header-label">
                <span className="team-members-table__header-text">Rating</span>
              </div>
            </div>

            {data.map((member, index) => {
              const isAlternate = index % 2 === 1;

              return (
                <div
                  key={member.id}
                  className={`team-members-table__cell ${isAlternate ? 'team-members-table__cell--alternate' : ''}`}
                >
                  <div className="team-members-table__cell-rating">
                    {renderStars(member.rating)}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Status Column */}
          <div className="team-members-table__column team-members-table__column--status">
            <div className="team-members-table__header-cell">
              <div className="team-members-table__header-label">
                <span className="team-members-table__header-text">Status</span>
              </div>
            </div>

            {data.map((member, index) => {
              const isAlternate = index % 2 === 1;

              return (
                <div
                  key={member.id}
                  className={`team-members-table__cell ${isAlternate ? 'team-members-table__cell--alternate' : ''}`}
                >
                  <div className="team-members-table__cell-group-avatars">
                    <AvatarGroup
                      type="default"
                      stroke="default"
                      size="small"
                      avatars={member.status.avatars}
                      maxCount={5}
                      showOverflow
                    />
                    <Tag
                      label={`+${member.status.additionalCount}`}
                      size="small"
                      variant="light-gray"
                      shape="rounded"
                      showClose={false}
                      leadingIcon={<Icon name="plus" size="sm" />}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress Column */}
          <div className="team-members-table__column team-members-table__column--progress">
            <div className="team-members-table__header-cell">
              <div className="team-members-table__header-label">
                <span className="team-members-table__header-text">Progress</span>
              </div>
            </div>

            {data.map((member, index) => {
              const isAlternate = index % 2 === 1;

              return (
                <div
                  key={member.id}
                  className={`team-members-table__cell ${isAlternate ? 'team-members-table__cell--alternate' : ''}`}
                >
                  <div className="team-members-table__cell-progress-bar">
                    <ProgressBar
                      value={member.progress}
                      size="small"
                      variant="default"
                      showPercentage
                      labelPosition="outside"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty Actions Column */}
          <div className="team-members-table__column team-members-table__column--button-group">
            <div className="team-members-table__header-cell team-members-table__header-cell--empty" aria-hidden />

            {data.map((member, index) => {
              const isAlternate = index % 2 === 1;

              return (
                <div
                  key={member.id}
                  className={`team-members-table__cell ${isAlternate ? 'team-members-table__cell--alternate' : ''}`}
                >
                  <div className="team-members-table__cell-button-group">
                    <Button
                      size="extra-small"
                      variant="ghost"
                      state="default"
                      leadingIcon={<Icon name="pencil" size="sm" />}
                      onClick={() => onEdit?.(member.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      size="extra-small"
                      variant="ghost"
                      state="default"
                      leadingIcon={<Icon name="trash-can" size="sm" />}
                      onClick={() => onDelete?.(member.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={footerClasses}>
        {footerContentSlot ?? (
          <div className="team-members-table__footer-content">
            <div className="team-members-table__footer-left">
              <Button
                size={size === 'small' ? 'small' : 'default'}
                variant="ghost"
                state="default"
                leadingIcon={<Icon name="arrow-left" size="sm" />}
                onClick={() => currentPage > 1 && onPageChange?.(currentPage - 1)}
                disabled={currentPage <= 1}
              >
                Previous
              </Button>
            </div>

            <div className="team-members-table__pagination">
              {renderPaginationNumbers()}
            </div>

            <div className="team-members-table__footer-right">
              <Button
                size={size === 'small' ? 'small' : 'default'}
                variant="ghost"
                state="default"
                trailingIcon={<Icon name="arrow-right" size="sm" />}
                onClick={() => currentPage < totalPages && onPageChange?.(currentPage + 1)}
                disabled={currentPage >= totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMembersTable;
