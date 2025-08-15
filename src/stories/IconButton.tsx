import React from 'react';
import './icon-button.css';

export interface IconButtonProps {
  /** Button label */
  label?: string;
  /** Button state */
  state?: 'default' | 'hover' | 'pressed' | 'focused' | 'loading' | 'disabled';
  /** Optional click handler */
  onClick?: () => void;
  /** Is button disabled */
  disabled?: boolean;
  /** Is button in loading state */
  loading?: boolean;
}

const AlarmIcon = () => (
  <svg 
    width="18" 
    height="18" 
    viewBox="0 0 18 18" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="icon-button__leading-icon"
  >
    <g opacity="0.6">
      <path d="M4.5 5.175L2.9025 3.585L3.96 2.5275L5.55 4.125L4.5 5.175ZM9.75 0.75V3H8.25V0.75H9.75ZM15.0975 3.585L13.5 5.175L12.45 4.125L14.04 2.5275L15.0975 3.585ZM3.375 7.875V9.375H1.125V7.875H3.375ZM14.625 7.875H16.875V9.375H14.625V7.875ZM4.5 15H13.5C13.8978 15 14.2794 15.158 14.5607 15.4393C14.842 15.7206 15 16.1022 15 16.5H3C3 16.1022 3.15804 15.7206 3.43934 15.4393C3.72064 15.158 4.10218 15 4.5 15ZM9 3.75C10.1935 3.75 11.3381 4.22411 12.182 5.06802C13.0259 5.91193 13.5 7.05653 13.5 8.25V14.25H4.5V8.25C4.5 7.05653 4.97411 5.91193 5.81802 5.06802C6.66193 4.22411 7.80653 3.75 9 3.75Z" fill="currentColor"/>
    </g>
  </svg>
);

const ArrowDownIcon = () => (
  <svg 
    width="18" 
    height="18" 
    viewBox="0 0 18 18" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="icon-button__trailing-icon"
  >
    <g opacity="0.6">
      <path d="M8.25 4.5V10.5L5.625 7.875L4.56 8.94L9 13.38L13.44 8.94L12.375 7.875L9.75 10.5V4.5H8.25ZM9 16.5C8.01509 16.5 7.03982 16.306 6.12987 15.9291C5.21993 15.5522 4.39314 14.9997 3.6967 14.3033C2.29018 12.8968 1.5 10.9891 1.5 9C1.5 7.01088 2.29018 5.10322 3.6967 3.6967C5.10322 2.29018 7.01088 1.5 9 1.5C9.98491 1.5 10.9602 1.69399 11.8701 2.0709C12.7801 2.44781 13.6069 3.00026 14.3033 3.6967C14.9997 4.39314 15.5522 5.21993 15.9291 6.12987C16.306 7.03982 16.5 8.01509 16.5 9C16.5 10.9891 15.7098 12.8968 14.3033 14.3033C12.8968 15.7098 10.9891 16.5 9 16.5Z" fill="currentColor"/>
    </g>
  </svg>
);

const LoadingIcon = () => (
  <svg 
    width="22" 
    height="22" 
    viewBox="0 0 23 22" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="icon-button__loading-icon"
  >
    <path d="M11.4999 3.66671V1.83337C10.2961 1.83337 9.10414 2.07048 7.99199 2.53115C6.87984 2.99181 5.86931 3.66702 5.01811 4.51823C3.29902 6.23731 2.33325 8.56889 2.33325 11H4.16659C4.16659 9.05512 4.9392 7.18986 6.31447 5.81459C7.68974 4.43932 9.555 3.66671 11.4999 3.66671Z" fill="white"/>
  </svg>
);

export const IconButton = ({
  label = 'Label',
  state = 'default',
  disabled = false,
  loading = false,
  onClick,
  ...props
}: IconButtonProps) => {
  const buttonState = disabled ? 'disabled' : loading ? 'loading' : state;
  
  return (
    <button
      type="button"
      className={`icon-button icon-button--${buttonState}`}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <div className="icon-button__loading-container">
          <LoadingIcon />
        </div>
      ) : (
        <div className="icon-button__content">
          <AlarmIcon />
          <span className="icon-button__label">{label}</span>
          <ArrowDownIcon />
        </div>
      )}
    </button>
  );
};
