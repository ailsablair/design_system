import React, { useState } from 'react';
import { Button } from '../../Button';
import { Tag } from '../../Tag';
import { Checkbox } from '../../Checkbox';
import { AvatarGroup } from '../../AvatarGroup';
import { Star } from '../../Star';
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

export interface TeamMembersTableProps {
  /** Table title */
  title?: string;
  /** Item count for badge */
  itemCount?: number;
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
}

/**
 * TeamMembersTable component that exactly matches the Figma design specifications
 * 
 * Features:
 * - Header with title, count badge, and more actions button
 * - Multiple cell types: contact name, company, multi-tag preferences, actions, rating, status avatars, progress
 * - Checkbox selection with indeterminate states
 * - Alternating row backgrounds (seafoam-25)
 * - Pagination footer
 * - Responsive design matching Figma specifications
 */
export const TeamMembersTable: React.FC<TeamMembersTableProps> = ({
  title = 'Team members',
  itemCount = 100,
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
}) => {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [sortConfig, setSortConfig] = useState<{
    key: string | null;
    direction: 'asc' | 'desc' | null;
  }>({ key: null, direction: null });

  const containerClasses = [
    'team-members-table',
    `team-members-table--${size}`,
    className
  ].filter(Boolean).join(' ');

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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        fill={index < rating ? "100%" : "0%"}
        size="small"
      />
    ));
  };

  const renderPaginationNumbers = () => {
    const pages = [];
    
    // Always show page 1
    pages.push(1);
    
    // Show ellipsis if needed
    if (currentPage > 4) {
      pages.push('...');
    }
    
    // Show pages around current page
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    
    for (let i = start; i <= end; i++) {
      if (i !== 1 && i !== totalPages) {
        pages.push(i);
      }
    }
    
    // Show ellipsis if needed
    if (currentPage < totalPages - 3) {
      pages.push('...');
    }
    
    // Always show last page if more than 1 page
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
      
      const isActive = page === currentPage;
      return (
        <button
          key={page}
          className={`team-members-table__page-number ${isActive ? 'team-members-table__page-number--active' : ''}`}
          onClick={() => onPageChange?.(page as number)}
        >
          {page}
        </button>
      );
    });
  };

  return (
    <div className={containerClasses}>
      {/* Header */}
      <div className="team-members-table__header">
        <div className="team-members-table__header-content">
          <div className="team-members-table__title-section">
            <h2 className="team-members-table__title">{title}</h2>
            <Tag
              label={`${itemCount} items`}
              size="small"
              variant="white"
              shape="rounded"
            />
          </div>
          
          <Button
            size="small"
            type="ghost"
            state="default"
            special="icon-only"
            onClick={onMoreActions}
          >
            <Icon name="dots-vertical" size="sm" />
          </Button>
        </div>
      </div>

      {/* Table Body */}
      <div className="team-members-table__body">
        <div className="team-members-table__columns">
          {/* Contact Name Column */}
          <div className="team-members-table__column team-members-table__column--contact-name">
            <div className="team-members-table__header-cell team-members-table__header-cell--lead">
              <Checkbox
                size="small"
                checked={isAllSelected}
                indeterminate={isIndeterminate}
                onChange={(e) => handleSelectAll(e.target.checked)}
                variant="default"
                shape="square"
              />
              <div 
                className="team-members-table__header-label team-members-table__header-label--sortable"
                onClick={() => handleSort('contactName')}
              >
                <span className="team-members-table__header-text">Contact name</span>
                <Icon 
                  name="arrow-down-thick" 
                  size="sm" 
                  className="team-members-table__sort-icon"
                />
              </div>
            </div>
            
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
                    onChange={(e) => handleRowSelect(member.id, e.target.checked)}
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
                <Icon name="help-circle" size="sm" />
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
                      leadingIcon={<Icon name="alarm-light" size="sm" />}
                      trailingIcon={<Icon name="close" size="sm" />}
                    />
                    <Tag
                      label="+4"
                      size="small"
                      variant="light-gray"
                      shape="rounded"
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
                      onClick={() => onEdit?.(member.id)}
                    >
                      Edit
                    </button>
                    <button 
                      className="team-members-table__link"
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
                      showOverflow={true}
                    />
                    <Tag
                      label={`+${member.status.additionalCount}`}
                      size="small"
                      variant="light-gray"
                      shape="rounded"
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
                      showPercentage={true}
                      labelPosition="outside"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty Actions Column */}
          <div className="team-members-table__column team-members-table__column--button-group">
            <div className="team-members-table__header-cell team-members-table__header-cell--empty"></div>
            
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
                      type="ghost"
                      state="default"
                      leadingIcon={<Icon name="pencil" size="sm" />}
                      onClick={() => onEdit?.(member.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      size="extra-small"
                      type="ghost"
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
      <div className="team-members-table__footer">
        <div className="team-members-table__footer-content">
          <div className="team-members-table__footer-left">
            <Button
              size="small"
              type="ghost"
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
              size="small"
              type="ghost"
              state="default"
              trailingIcon={<Icon name="arrow-right" size="sm" />}
              onClick={() => currentPage < totalPages && onPageChange?.(currentPage + 1)}
              disabled={currentPage >= totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembersTable;
