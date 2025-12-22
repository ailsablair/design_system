import React from 'react';
import './table/tableFooter.css';
import { EchoMUIButton as Button } from '../EchoMUIButton';

export interface TableFooterProps {
  /** Footer type/layout variant */
  type?: 'default' | 'view-more' | 'pagination-only' | 'no-content';
  /** Size variant */
  size?: 'small' | 'default';
  /** Background variant */
  background?: 'default' | 'light-gray' | 'blue-50' | 'black';
  /** Current page (1-based) */
  currentPage?: number;
  /** Total pages */
  totalPages?: number;
  /** Page numbers to show before/after current page */
  siblingCount?: number;
  /** Show previous/next buttons */
  showNavigation?: boolean;
  /** Previous button click handler */
  onPreviousClick?: () => void;
  /** Next button click handler */
  onNextClick?: () => void;
  /** Page click handler */
  onPageClick?: (page: number) => void;
  /** View more button click handler */
  onViewMoreClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Custom previous button text */
  previousText?: string;
  /** Custom next button text */
  nextText?: string;
  /** Custom view more button text */
  viewMoreText?: string;
}

// Left arrow icon
const ArrowLeftIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6">
      <path d="M15.0001 8.25006V9.75006H6.00012L10.1251 13.8751L9.06012 14.9401L3.12012 9.00006L9.06012 3.06006L10.1251 4.12506L6.00012 8.25006H15.0001Z" fill="#04435E"/>
    </g>
  </svg>
);

// Right arrow icon
const ArrowRightIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6">
      <path d="M3 8.25006V9.75006H12L7.875 13.8751L8.94 14.9401L14.88 9.00006L8.94 3.06006L7.875 4.12506L12 8.25006H3Z" fill="#04435E"/>
    </g>
  </svg>
);

// Triangle down icon for view more
const TriangleDownIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6">
      <path d="M6.5 6.75H12.5L9.5 12" fill="#04435E"/>
    </g>
  </svg>
);

// Horizontal dots icon - Small version (18x18)
const DotsHorizontalIconSmall: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.5">
      <path d="M12 9C12 8.60218 12.158 8.22064 12.4393 7.93934C12.7206 7.65804 13.1022 7.5 13.5 7.5C13.8978 7.5 14.2794 7.65804 14.5607 7.93934C14.842 8.22064 15 8.60218 15 9C15 9.39782 14.842 9.77936 14.5607 10.0607C14.2794 10.342 13.8978 10.5 13.5 10.5C13.1022 10.5 12.7206 10.342 12.4393 10.0607C12.158 9.77936 12 9.39782 12 9ZM7.5 9C7.5 8.60218 7.65804 8.22064 7.93934 7.93934C8.22064 7.65804 8.60218 7.5 9 7.5C9.39782 7.5 9.77936 7.65804 10.0607 7.93934C10.342 8.22064 10.5 8.60218 10.5 9C10.5 9.39782 10.342 9.77936 10.0607 10.0607C9.77936 10.342 9.39782 10.5 9 10.5C8.60218 10.5 8.22064 10.342 7.93934 10.0607C7.65804 9.77936 7.5 9.39782 7.5 9ZM3 9C3 8.60218 3.15804 8.22064 3.43934 7.93934C3.72064 7.65804 4.10218 7.5 4.5 7.5C4.89782 7.5 5.27936 7.65804 5.56066 7.93934C5.84196 8.22064 6 8.60218 6 9C6 9.39782 5.84196 9.77936 5.56066 10.0607C5.27936 10.342 4.89782 10.5 4.5 10.5C4.10218 10.5 3.72064 10.342 3.43934 10.0607C3.15804 9.77936 3 9.39782 3 9Z" fill="#6D7280"/>
    </g>
  </svg>
);

// Horizontal dots icon - Default version (24x24)
const DotsHorizontalIconDefault: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.5">
      <path d="M16 12C16 11.4696 16.2107 10.9609 16.5858 10.5858C16.9609 10.2107 17.4696 10 18 10C18.5304 10 19.0391 10.2107 19.4142 10.5858C19.7893 10.9609 20 11.4696 20 12C20 12.5304 19.7893 13.0391 19.4142 13.4142C19.0391 13.7893 18.5304 14 18 14C17.4696 14 16.9609 13.7893 16.5858 13.4142C16.2107 13.0391 16 12.5304 16 12ZM10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12ZM4 12C4 11.4696 4.21071 10.9609 4.58579 10.5858C4.96086 10.2107 5.46957 10 6 10C6.53043 10 7.03914 10.2107 7.41421 10.5858C7.78929 10.9609 8 11.4696 8 12C8 12.5304 7.78929 13.0391 7.41421 13.4142C7.03914 13.7893 6.53043 14 6 14C5.46957 14 4.96086 13.7893 4.58579 13.4142C4.21071 13.0391 4 12.5304 4 12Z" fill="#6D7280"/>
    </g>
  </svg>
);

export const TableFooter: React.FC<TableFooterProps> = ({
  type = 'default',
  size = 'default',
  background = 'default',
  currentPage = 1,
  totalPages = 10,
  siblingCount = 1,
  showNavigation = true,
  onPreviousClick,
  onNextClick,
  onPageClick,
  onViewMoreClick,
  className = '',
  previousText = 'Previous',
  nextText = 'Next',
  viewMoreText = 'View more',
}) => {
  const footerClasses = [
    'table-footer',
    `table-footer--${size}`,
    `table-footer--${background}`,
    `table-footer--${type}`,
    className
  ].filter(Boolean).join(' ');

  // Generate page numbers to display
  const generatePageNumbers = () => {
    const pages: (number | 'dots')[] = [];
    
    // Always show first page
    pages.push(1);
    
    // Calculate range around current page
    const startPage = Math.max(2, currentPage - siblingCount);
    const endPage = Math.min(totalPages - 1, currentPage + siblingCount);
    
    // Add dots if there's a gap between 1 and start of range
    if (startPage > 2) {
      pages.push('dots');
    }
    
    // Add pages in range
    for (let i = startPage; i <= endPage; i++) {
      if (i !== 1 && i !== totalPages) {
        pages.push(i);
      }
    }
    
    // Add dots if there's a gap between end of range and last page
    if (endPage < totalPages - 1) {
      pages.push('dots');
    }
    
    // Always show last page (if more than 1 page)
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    
    return pages;
  };

  const handlePageClick = (page: number) => {
    if (onPageClick && page !== currentPage) {
      onPageClick(page);
    }
  };

  const handlePreviousClick = () => {
    if (onPreviousClick && currentPage > 1) {
      onPreviousClick();
    }
  };

  const handleNextClick = () => {
    if (onNextClick && currentPage < totalPages) {
      onNextClick();
    }
  };

  const handleViewMoreClick = () => {
    if (onViewMoreClick) {
      onViewMoreClick();
    }
  };

  const iconSize = size === 'default' ? 18 : 14;
  const pages = generatePageNumbers();

  // No content footer
  if (type === 'no-content') {
    return <div className={footerClasses}></div>;
  }

  // View more footer
  if (type === 'view-more') {
    return (
      <div className={footerClasses}>
        <Button
          size={size}
          variant="tertiary"
          trailingIcon={<TriangleDownIcon size={iconSize} />}
          onClick={handleViewMoreClick}
          className="table-footer__view-more"
        >
          {viewMoreText}
        </Button>
      </div>
    );
  }

  return (
    <div className={footerClasses}>
      {/* Previous button */}
      {showNavigation && type === 'default' && (
        <div className="table-footer__navigation table-footer__navigation--previous">
          <Button
            size={size}
            variant="tertiary"
            leadingIcon={<ArrowLeftIcon size={iconSize} />}
            onClick={handlePreviousClick}
            disabled={currentPage <= 1}
            className="table-footer__nav-button"
          >
            {previousText}
          </Button>
        </div>
      )}

      {/* Pagination */}
      <div className="table-footer__pagination">
        {pages.map((page, index) => {
          if (page === 'dots') {
            return (
              <div key={`dots-${index}`} className="table-footer__dots">
                {size === 'default' ? <DotsHorizontalIconDefault /> : <DotsHorizontalIconSmall />}
              </div>
            );
          }

          const isActive = page === currentPage;
          return (
            <button
              key={page}
              className={`table-footer__page-number ${isActive ? 'table-footer__page-number--active' : ''} table-footer__page-number--${size}`}
              onClick={() => handlePageClick(page)}
              disabled={isActive}
            >
              <div className={`table-footer__page-content table-footer__page-content--${size}`}>
                <span className={`table-footer__page-text table-footer__page-text--${size} ${isActive ? 'table-footer__page-text--active' : ''}`}>
                  {page}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Next button */}
      {showNavigation && type === 'default' && (
        <div className="table-footer__navigation table-footer__navigation--next">
          <Button
            size={size}
            variant="tertiary"
            trailingIcon={<ArrowRightIcon size={iconSize} />}
            onClick={handleNextClick}
            disabled={currentPage >= totalPages}
            className="table-footer__nav-button"
          >
            {nextText}
          </Button>
        </div>
      )}
    </div>
  );
};

export default TableFooter;
