import React from 'react';
import { StarIcon } from './StarIcon';
import './starRating.css';

export interface StarRatingProps {
  /**
   * Rating value (0-5)
   */
  rating: number;
  /**
   * Maximum rating value (default: 5)
   */
  maxRating?: number;
  /**
   * Size of the stars
   */
  size?: 'small' | 'default' | 'large';
  /**
   * Whether to show the numeric rating
   */
  showValue?: boolean;
  /**
   * Whether to show the review count
   */
  reviewCount?: number;
  /**
   * Additional CSS class names
   */
  className?: string;
}

/**
 * StarRating component for displaying ratings in table cells
 * 
 * Automatically calculates partial fills based on the rating value.
 * Perfect for product ratings, reviews, and performance metrics in tables.
 */
export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  size = 'default',
  showValue = false,
  reviewCount,
  className = '',
}) => {
  const clampedRating = Math.max(0, Math.min(maxRating, rating));
  
  const getFillLevel = (starIndex: number): StarRatingProps['size'] extends 'small' | 'default' | 'large' ? any : never => {
    const starValue = starIndex + 1;
    const remainingRating = clampedRating - starIndex;
    
    if (remainingRating >= 1) return '100';
    if (remainingRating <= 0) return 'empty';
    
    const percentage = remainingRating * 100;
    if (percentage >= 97) return '100';
    if (percentage >= 92) return '95';
    if (percentage >= 82) return '85';
    if (percentage >= 72) return '75';
    if (percentage >= 57) return '60';
    if (percentage >= 47) return '50';
    if (percentage >= 37) return '40';
    if (percentage >= 22) return '25';
    if (percentage >= 12) return '15';
    if (percentage >= 3) return '5';
    
    return 'empty';
  };

  const classNames = [
    'star-rating',
    `star-rating-${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      <div className="star-rating-stars" role="img" aria-label={`Rating: ${rating} out of ${maxRating} stars`}>
        {Array.from({ length: maxRating }).map((_, index) => (
          <StarIcon
            key={index}
            fill={getFillLevel(index)}
            size={size}
            ariaLabel=""
          />
        ))}
      </div>
      
      {(showValue || reviewCount !== undefined) && (
        <div className="star-rating-info">
          {showValue && (
            <span className="star-rating-value">
              {rating.toFixed(1)}
            </span>
          )}
          {reviewCount !== undefined && (
            <span className="star-rating-count">
              ({reviewCount.toLocaleString()})
            </span>
          )}
        </div>
      )}
    </div>
  );
};
