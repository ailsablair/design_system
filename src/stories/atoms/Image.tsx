import React from 'react';
import './image.css';

export type ImageSize = 'small' | 'default' | 'large' | 'extra-large';
export type ImageShape = 'default' | 'square';

export interface ImageProps {
  /** Size of the image container */
  size?: ImageSize;
  /** Shape of the image container */
  shape?: ImageShape;
  /** Source URL for the image */
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** Whether to show the placeholder icon when no image is provided */
  showIcon?: boolean;
  /** Whether the image should fill the container */
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none';
  /** Additional CSS class name */
  className?: string;
  /** Click handler */
  onClick?: () => void;
  /** Loading state */
  loading?: 'lazy' | 'eager';
  /** Placeholder content when no image is provided */
  placeholder?: React.ReactNode;
}

/**
 * Image component with multiple sizes and shapes, including placeholder states
 */
export const Image: React.FC<ImageProps> = ({
  size = 'default',
  shape = 'default',
  src,
  alt = 'Image',
  showIcon = true,
  objectFit = 'cover',
  className = '',
  onClick,
  loading = 'lazy',
  placeholder
}) => {
  const [hasError, setHasError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(!!src);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const imageClassName = [
    'image',
    `image--${size}`,
    `image--${shape}`,
    onClick && 'image--clickable',
    (hasError || !src) && 'image--placeholder',
    isLoading && 'image--loading',
    className
  ].filter(Boolean).join(' ');

  const renderPlaceholderIcon = () => {
    if (!showIcon) return null;
    
    return (
      <svg 
        className="image__icon" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M4 16L8.586 11.414C9.367 10.633 10.633 10.633 11.414 11.414L16 16M14 14L15.586 12.414C16.367 11.633 17.633 11.633 18.414 12.414L20 14M14 8H14.01M6 20H18C19.105 20 20 19.105 20 18V6C20 4.895 19.105 4 18 4H6C4.895 4 4 4.895 4 6V18C4 19.105 4.895 20 6 20Z" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const renderContent = () => {
    if (src && !hasError) {
      return (
        <>
          <img
            className="image__img"
            src={src}
            alt={alt}
            onError={handleError}
            onLoad={handleLoad}
            loading={loading}
            style={{ objectFit }}
          />
          {isLoading && (
            <div className="image__loading">
              <div className="image__spinner" />
            </div>
          )}
        </>
      );
    }

    return (
      <div className="image__placeholder">
        {placeholder || renderPlaceholderIcon()}
      </div>
    );
  };

  return (
    <div
      className={imageClassName}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {renderContent()}
    </div>
  );
};

export default Image;
