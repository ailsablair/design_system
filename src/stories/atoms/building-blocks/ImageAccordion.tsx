import React, { useState, useId } from 'react';
import { useId, useMemo, useState } from 'react';
import type { CSSProperties } from 'react';
import './imageAccordion.css';

export interface ImageAccordionProps {
  /** Status variant - controls open/closed state */
  status?: 'open' | 'closed';
  /** Type variant - matches Figma type property */
  type?: 'image';
  /** Content variant - controls if text overlay is shown */
  content?: 'none' | 'text-img';
  /** Whether to show the toggle icon */
  icon?: boolean;
  /** Title for the text content overlay */
  title?: string;
  /** Body text for the text content overlay */
  body?: string;
  /** Background image URL */
  backgroundImage?: string;
  /** Alt text for background image */
  imageAlt?: string;
  /** Custom CSS classes */
  className?: string;
  /** Controlled open state */
  isOpen?: boolean;
  /** Callback when accordion state changes */
  onToggle?: (isOpen: boolean) => void;
  /** Width of the component */
  width?: number;
  /** Height of the component */
  height?: number;
}

/**
 * ImageAccordion component matching Figma design specifications
 *
 * A specialized accordion designed for image overlays with floating toggle icons.
 *
 * Features:
 * - Floating plus/minus circle toggle icon with drop shadow
 * - Optional gradient text overlay when open (text-img content type)
 * - Image type specification matching Figma design
 * - Responsive design with customizable dimensions
 * - Smooth animations and transitions
 * - Accessibility support
 */
export const ImageAccordion: React.FC<ImageAccordionProps> = ({
  status = 'closed',
  type = 'image',
  content = 'none',
  icon = true,
  title = 'This is a title for an image card',
  body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Nulla rutrum ac tortor et lacinia.',
  backgroundImage,
  imageAlt = 'Image accordion background',
  className = '',
  isOpen: controlledIsOpen,
  onToggle,
  width = 600,
  height = 500,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(status === 'open');
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const uniqueId = useId();

  const resolvedWidth = typeof width === 'number' ? `${width}px` : width || '600px';
  const resolvedHeight = typeof height === 'number' ? `${height}px` : height || '500px';

  const accordionStyle = useMemo(() => ({
    '--image-accordion-width': resolvedWidth,
    '--image-accordion-height': resolvedHeight,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
  }) as CSSProperties, [backgroundImage, resolvedHeight, resolvedWidth]);

  const handleToggle = () => {
    const newIsOpen = !isOpen;
    if (controlledIsOpen === undefined) {
      setInternalIsOpen(newIsOpen);
    }
    onToggle?.(newIsOpen);
  };

  // Generate CSS classes matching Figma structure
  const accordionClasses = [
    'image-accordion',
    `image-accordion--status-${isOpen ? 'open' : 'closed'}`,
    `image-accordion--type-${type}`,
    `image-accordion--content-${content}`,
    isOpen && content === 'text-img' ? 'image-accordion--content-visible' : '',
    className
  ].filter(Boolean).join(' ');

  // Plus Circle Icon - exact from Figma with proper sizing and filter
  const PlusCircleIcon = () => {
    const plusFilterId = `filter_plus_${uniqueId}`;
    return (
      <svg
        className="image-accordion__icon"
        width="40"
        height="40"
        viewBox="0 0 70 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter={`url(#${plusFilterId})`}>
          <path
            d="M43.3333 24.6663H36.6666V31.333H33.3333V24.6663H26.6666V21.333H33.3333V14.6663H36.6666V21.333H43.3333M34.9999 6.33301C32.8112 6.33301 30.644 6.7641 28.6219 7.60168C26.5998 8.43926 24.7624 9.66692 23.2148 11.2146C20.0892 14.3402 18.3333 18.5794 18.3333 22.9997C18.3333 27.42 20.0892 31.6592 23.2148 34.7848C24.7624 36.3324 26.5998 37.5601 28.6219 38.3977C30.644 39.2352 32.8112 39.6663 34.9999 39.6663C39.4202 39.6663 43.6594 37.9104 46.785 34.7848C49.9106 31.6592 51.6666 27.42 51.6666 22.9997C51.6666 20.811 51.2355 18.6437 50.3979 16.6216C49.5603 14.5995 48.3327 12.7622 46.785 11.2146C45.2374 9.66692 43.4001 8.43926 41.378 7.60168C39.3559 6.7641 37.1886 6.33301 34.9999 6.33301Z"
            fill="white"
          />
        </g>
        <defs>
          <filter id={plusFilterId} x="-3" y="-3" width="76" height="76" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_plus"/>
            <feOffset dy="12"/>
            <feGaussianBlur stdDeviation="10"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.152941 0 0 0 0 0.152941 0 0 0 0 0.152941 0 0 0 0.15 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_plus"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_plus" result="shape"/>
          </filter>
        </defs>
      </svg>
    );
  };

  // Minus Circle Icon - exact from Figma with proper sizing and filter
  const MinusCircleIcon = () => {
    const minusFilterId = `filter_minus_${uniqueId}`;
    return (
      <svg
        className="image-accordion__icon image-accordion__icon--open"
        width="40"
        height="40"
        viewBox="0 0 70 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter={`url(#${minusFilterId})`}>
          <path
            d="M43.3333 24.6663H26.6666V21.333H43.3333M34.9999 6.33301C32.8112 6.33301 30.644 6.7641 28.6219 7.60168C26.5998 8.43926 24.7624 9.66692 23.2148 11.2146C20.0892 14.3402 18.3333 18.5794 18.3333 22.9997C18.3333 27.42 20.0892 31.6592 23.2148 34.7848C24.7624 36.3324 26.5998 37.5601 28.6219 38.3977C30.644 39.2352 32.8112 39.6663 34.9999 39.6663C39.4202 39.6663 43.6594 37.9104 46.785 34.7848C49.9106 31.6592 51.6666 27.42 51.6666 22.9997C51.6666 20.811 51.2355 18.6437 50.3979 16.6216C49.5603 14.5995 48.3327 12.7622 46.785 11.2146C45.2374 9.66692 43.4001 8.43926 41.378 7.60168C39.3559 6.7641 37.1886 6.33301 34.9999 6.33301Z"
            fill="#2F42BD"
          />
        </g>
        <defs>
          <filter id={minusFilterId} x="-3" y="-3" width="76" height="76" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_minus"/>
            <feOffset dy="12"/>
            <feGaussianBlur stdDeviation="10"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.152941 0 0 0 0 0.152941 0 0 0 0 0.152941 0 0 0 0.15 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_minus"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_minus" result="shape"/>
          </filter>
        </defs>
      </svg>
    );
  };

  return (
    <div
      className={accordionClasses}
      style={accordionStyle}
      role="button"
      tabIndex={0}
      onClick={handleToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleToggle();
        }
      }}
      aria-expanded={isOpen}
      aria-label={`Image accordion: ${title}${isOpen ? ' (expanded)' : ' (collapsed)'}`}
    >
      {/* Background image - if no URL provided, show placeholder */}
      {!backgroundImage && (
        <div className="image-accordion__placeholder">
          <span>Image Placeholder</span>
        </div>
      )}

      {/* Floating toggle icon */}
      {icon && (
        <div className="image-accordion__toggle">
          {isOpen ? <MinusCircleIcon /> : <PlusCircleIcon />}
        </div>
      )}

      {/* Content overlay - only shown when open and content is 'text-img' */}
      {isOpen && content === 'text-img' && (
        <div className="image-accordion__content-overlay">
          <div className="image-accordion__text-content">
            <div className="image-accordion__title">
              {title}
            </div>
            <div className="image-accordion__body">
              {body}
            </div>
          </div>
        </div>
      )}

      {/* Hidden image for accessibility */}
      {backgroundImage && (
        <img 
          src={backgroundImage} 
          alt={imageAlt} 
          className="image-accordion__sr-only"
        />
      )}
    </div>
  );
};

export default ImageAccordion;
