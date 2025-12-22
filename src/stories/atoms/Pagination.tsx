import React from 'react';
import EchoMUIPagination from './EchoMUIPagination';

export interface PaginationProps {
  /** Current page number (1-based) */
  currentPage: number;
  /** Total number of pages */
  totalPages: number;
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Page change handler */
  onPageChange?: (page: number) => void;
}

/**
 * Pagination wrapper for EchoMUIPagination to provide a simplified API
 * compatible with the pixel-perfect Table component.
 */
export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  size = 'default',
  onPageChange,
}) => {
  return (
    <EchoMUIPagination
      page={currentPage}
      count={totalPages}
      size={size as 'small' | 'default' | 'large'}
      onChange={(_, page) => onPageChange?.(page)}
    />
  );
};

export default Pagination;
