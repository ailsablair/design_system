import React from 'react';
import './pagination.css';

export interface PaginationProps {
  /** Current page number (1-based) */
  currentPage?: number;
  /** Total number of pages */
  totalPages?: number;
  /** Size variant */
  size?: 'small' | 'default';
  /** Show dots for truncated pages */
  showDots?: boolean;
  /** Maximum number of page buttons to show */
  maxVisible?: number;
  /** Additional CSS classes */
  className?: string;
  /** Page change handler */
  onPageChange?: (page: number) => void;
  /** Disabled state */
  disabled?: boolean;
}

const DotsIcon = ({ size = 'default' }: { size?: string }) => {
  const iconSize = size === 'small' ? '18' : '24';
  
  return (
    <svg 
      width={iconSize} 
      height={iconSize} 
      viewBox={`0 0 ${iconSize} ${iconSize}`} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
      style={{ opacity: 0.5 }}
    >
      {size === 'small' ? (
        <g opacity="0.5">
          <path d="M12 9C12 8.60218 12.158 8.22064 12.4393 7.93934C12.7206 7.65804 13.1022 7.5 13.5 7.5C13.8978 7.5 14.2794 7.65804 14.5607 7.93934C14.842 8.22064 15 8.60218 15 9C15 9.39782 14.842 9.77936 14.5607 10.0607C14.2794 10.342 13.8978 10.5 13.5 10.5C13.1022 10.5 12.7206 10.342 12.4393 10.0607C12.158 9.77936 12 9.39782 12 9ZM7.5 9C7.5 8.60218 7.65804 8.22064 7.93934 7.93934C8.22064 7.65804 8.60218 7.5 9 7.5C9.39782 7.5 9.77936 7.65804 10.0607 7.93934C10.342 8.22064 10.5 8.60218 10.5 9C10.5 9.39782 10.342 9.77936 10.0607 10.0607C9.77936 10.342 9.39782 10.5 9 10.5C8.60218 10.5 8.22064 10.342 7.93934 10.0607C7.65804 9.77936 7.5 9.39782 7.5 9ZM3 9C3 8.60218 3.15804 8.22064 3.43934 7.93934C3.72064 7.65804 4.10218 7.5 4.5 7.5C4.89782 7.5 5.27936 7.65804 5.56066 7.93934C5.84196 8.22064 6 8.60218 6 9C6 9.39782 5.84196 9.77936 5.56066 10.0607C5.27936 10.342 4.89782 10.5 4.5 10.5C4.10218 10.5 3.72064 10.342 3.43934 10.0607C3.15804 9.77936 3 9.39782 3 9Z" fill="#6D7280" />
        </g>
      ) : (
        <g opacity="0.5">
          <path d="M16 12C16 11.4696 16.2107 10.9609 16.5858 10.5858C16.9609 10.2107 17.4696 10 18 10C18.5304 10 19.0391 10.2107 19.4142 10.5858C19.7893 10.9609 20 11.4696 20 12C20 12.5304 19.7893 13.0391 19.4142 13.4142C19.0391 13.7893 18.5304 14 18 14C17.4696 14 16.9609 13.7893 16.5858 13.4142C16.2107 13.0391 16 12.5304 16 12ZM10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12ZM4 12C4 11.4696 4.21071 10.9609 4.58579 10.5858C4.96086 10.2107 5.46957 10 6 10C6.53043 10 7.03914 10.2107 7.41421 10.5858C7.78929 10.9609 8 11.4696 8 12C8 12.5304 7.78929 13.0391 7.41421 13.4142C7.03914 13.7893 6.53043 14 6 14C5.46957 14 4.96086 13.7893 4.58579 13.4142C4.21071 13.0391 4 12.5304 4 12Z" fill="#6D7280" />
        </g>
      )}
    </svg>
  );
};

export const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  totalPages = 10,
  size = 'default',
  showDots = true,
  maxVisible = 7,
  className = '',
  onPageChange,
  disabled = false,
}) => {
  const paginationClasses = [
    'pagination',
    `pagination--${size}`,
    disabled ? 'pagination--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  const handlePageClick = (page: number) => {
    if (!disabled && onPageChange && page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, page: number) => {
    if ((event.key === 'Enter' || event.key === ' ') && !disabled) {
      event.preventDefault();
      handlePageClick(page);
    }
  };

  // Generate visible page numbers
  const getVisiblePages = (): (number | 'dots')[] => {
    if (totalPages <= maxVisible) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | 'dots')[] = [];
    const start = Math.max(1, Math.min(currentPage - Math.floor(maxVisible / 2), totalPages - maxVisible + 1));
    const end = Math.min(totalPages, start + maxVisible - 1);

    // Always show first page
    if (start > 1) {
      pages.push(1);
      if (start > 2 && showDots) {
        pages.push('dots');
      }
    }

    // Show pages in the current range
    for (let i = start; i <= end; i++) {
      if (i !== 1 && i !== totalPages) {
        pages.push(i);
      }
    }

    // Always show last page
    if (end < totalPages) {
      if (end < totalPages - 1 && showDots) {
        pages.push('dots');
      }
      pages.push(totalPages);
    }

    // Handle edge case where we need to include first/last page in main sequence
    if (start === 1 && !pages.includes(1)) {
      pages.unshift(1);
    }
    if (end === totalPages && !pages.includes(totalPages)) {
      pages.push(totalPages);
    }

    return pages.filter((page, index, arr) => 
      page !== 'dots' || (arr[index - 1] !== 'dots' && arr[index + 1] !== 'dots')
    );
  };

  const visiblePages = getVisiblePages();

  // Handle the specific layout from Figma: 1, 2, 3, ..., 8, 9, 10
  const getFigmaLayout = (): (number | 'dots')[] => {
    if (totalPages <= 6) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    
    // Show: 1, 2, 3, ..., 8, 9, 10 (as in Figma)
    return [1, 2, 3, 'dots', totalPages - 2, totalPages - 1, totalPages];
  };

  const figmaPages = getFigmaLayout();

  return (
    <div className={paginationClasses} role="navigation" aria-label="Pagination">
      {figmaPages.map((page, index) => {
        if (page === 'dots') {
          return (
            <div 
              key={`dots-${index}`} 
              className="pagination__dots"
              aria-hidden="true"
            >
              <DotsIcon size={size} />
            </div>
          );
        }

        const isActive = page === currentPage;
        const pageClasses = [
          'pagination__item',
          `pagination__item--${size}`,
          isActive ? 'pagination__item--active' : '',
          disabled ? 'pagination__item--disabled' : ''
        ].filter(Boolean).join(' ');

        return (
          <button
            key={page}
            type="button"
            className={pageClasses}
            onClick={() => handlePageClick(page)}
            onKeyDown={(e) => handleKeyDown(e, page)}
            disabled={disabled}
            aria-current={isActive ? 'page' : undefined}
            aria-label={`Go to page ${page}`}
          >
            <div className={`pagination__content pagination__content--${size}`}>
              <span className={`pagination__number pagination__number--${size}`}>
                {page}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
