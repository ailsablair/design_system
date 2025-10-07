import React from 'react';
import './accordionBodyFigma.css';

export interface AccordionBodyProps {
  /** Content type variant */
  contentType?: 'text' | 'list' | 'text-img' | 'metrics';
  /** Size variant to match accordion */
  size?: 'small' | 'default' | 'large';
  /** Position variant to match accordion */
  position?: 'default (middle)' | 'bottom';
  /** Text content */
  text?: string;
  /** List items (array of strings) */
  listItems?: string[];
  /** Image source for text-img type */
  imageSrc?: string;
  /** Image alt text */
  imageAlt?: string;
  /** Metrics data for metrics type */
  metrics?: Array<{
    value: string;
    label: string;
  }>;
  /** Additional CSS classes */
  className?: string;
  /** Children content (alternative to props) */
  children?: React.ReactNode;
}

/**
 * AccordionBody component matching Figma accordion body specifications
 * 
 * Supports all Figma content type variants:
 * - text: Simple paragraph text
 * - list: Bulleted list with checkmark icons
 * - text-img: Text with image placeholder
 * - metrics: Statistics display with multiple metrics
 * 
 * Features:
 * - Exact Figma typography and spacing
 * - Responsive design with modern CSS
 * - Full accessibility support
 * - Size variants (small, default, large)
 * - Position variants (default, bottom)
 */
export const AccordionBody: React.FC<AccordionBodyProps> = ({
  contentType = 'text',
  size = 'default',
  position = 'default (middle)',
  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.',
  listItems = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien.',
  ],
  imageSrc,
  imageAlt = 'Accordion content image',
  metrics = [
    { value: '235,000', label: 'Projects completed' },
    { value: 'On time', label: 'Project status' },
    { value: '3,500', label: 'Unique Users' },
  ],
  className = '',
  children,
}) => {
  // Generate CSS classes
  const wrapperClasses = [
    `accordion--size-${size}`,
    `accordion--position-${position === 'default (middle)' ? 'default' : 'bottom'}`,
    className
  ].filter(Boolean).join(' ');

  // Check icon SVG - exact from Figma
  const CheckIcon = ({ width, height }: { width: number; height: number }) => (
    <svg 
      className="accordion__body-list-icon"
      width={width} 
      height={height} 
      viewBox={`0 0 ${width} ${height + 1}`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5">
        <path 
          d={width === 18
            ? "M6.75027 15.815L2.09277 11.1575L4.21527 9.03503L6.75027 11.5775L14.1603 4.16003L16.2828 6.28253L6.75027 15.815Z"
            : width === 22
            ? "M8.25012 19.2184L2.55762 13.5259L5.15178 10.9317L8.25012 14.0392L17.3068 4.97339L19.9009 7.56756L8.25012 19.2184Z"
            : "M9.74996 22.6216L3.02246 15.8941L6.08829 12.8283L9.74996 16.5008L20.4533 5.78662L23.5191 8.85245L9.74996 22.6216Z"
          }
          fill="#227F1A" 
        />
      </g>
    </svg>
  );

  // Image placeholder icon
  const ImagePlaceholderIcon = () => (
    <svg 
      className="accordion__body-image-icon"
      width="48" 
      height="48" 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M38 6H10C7.79086 6 6 7.79086 6 10V38C6 40.2091 7.79086 42 10 42H38C40.2091 42 42 40.2091 42 38V10C42 7.79086 40.2091 6 38 6Z" 
        fill="#D2D5DA"
      />
      <path 
        d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z" 
        fill="#9CA3AF"
      />
      <path 
        d="M6 34L14 26L20 32L30 22L42 34V38C42 40.2091 40.2091 42 38 42H10C7.79086 42 6 40.2091 6 38V34Z" 
        fill="#9CA3AF"
      />
    </svg>
  );

  // Get check icon size based on accordion size
  const getCheckIconSize = () => {
    switch (size) {
      case 'small': return { width: 18, height: 18 };
      case 'large': return { width: 26, height: 26 };
      default: return { width: 22, height: 22 };
    }
  };

  // Render content based on type
  const renderContent = () => {
    if (children) {
      return children;
    }

    switch (contentType) {
      case 'text':
        return (
          <div className="accordion__body-text">
            {text}
          </div>
        );

      case 'list':
        const iconSize = getCheckIconSize();
        return (
          <div className="accordion__body-list">
            {listItems.map((item, index) => (
              <div key={index} className="accordion__body-list-item">
                <CheckIcon width={iconSize.width} height={iconSize.height} />
                <div className="accordion__body-list-text">
                  {item}
                </div>
              </div>
            ))}
          </div>
        );

      case 'text-img':
        return (
          <div className="accordion__body-text-img">
            <div className="accordion__body-text-img-text">
              {text}
            </div>
            <div className="accordion__body-image">
              {imageSrc ? (
                <img src={imageSrc} alt={imageAlt} />
              ) : (
                <ImagePlaceholderIcon />
              )}
            </div>
          </div>
        );

      case 'metrics':
        return (
          <div className="accordion__body-metrics">
            {metrics.map((metric, index) => (
              <div key={index} className="accordion__body-stat">
                <div className="accordion__body-stat-value">
                  {metric.value}
                </div>
                <div className="accordion__body-stat-label">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return (
          <div className="accordion__body-text">
            {text}
          </div>
        );
    }
  };

  return (
    <div className={wrapperClasses}>
      <div className="accordion__content-body">
        {renderContent()}
      </div>
    </div>
  );
};

export default AccordionBody;
