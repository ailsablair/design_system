import React from 'react';
import './dateTimeInput.css';

export interface DateTimeInputProps {
  /** Input label text */
  label?: string;
  /** Input placeholder text */
  placeholder?: string;
  /** Input value */
  value?: string;
  /** Input state */
  state?: 'default' | 'focus' | 'typing' | 'filled';
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Input type - date or time */
  type?: 'date' | 'time';
  /** Disabled state */
  disabled?: boolean;
  /** Input ID */
  id?: string;
  /** Additional CSS classes */
  className?: string;
  /** onChange event handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** onFocus event handler */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** onBlur event handler */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const CalendarIcon = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  const iconSize = size === 'small' ? '14' : size === 'large' ? '20' : '16';
  
  return (
    <svg width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6">
        {size === 'small' ? (
          <path d="M11.0833 11.0835H2.91667V4.66683H11.0833M9.33333 0.583496V1.75016H4.66667V0.583496H3.5V1.75016H2.91667C2.26917 1.75016 1.75 2.26933 1.75 2.91683V11.0835C1.75 11.3929 1.87292 11.6897 2.09171 11.9085C2.3105 12.1272 2.60725 12.2502 2.91667 12.2502H11.0833C11.3928 12.2502 11.6895 12.1272 11.9083 11.9085C12.1271 11.6897 12.25 11.3929 12.25 11.0835V2.91683C12.25 2.26933 11.725 1.75016 11.0833 1.75016H10.5V0.583496M9.91667 7.00016H7V9.91683H9.91667V7.00016Z" fill="#61607C"/>
        ) : size === 'large' ? (
          <path d="M15.8333 15.8335H4.16667V6.66683H15.8333M13.3333 0.833496V2.50016H6.66667V0.833496H5V2.50016H4.16667C3.24167 2.50016 2.5 3.24183 2.5 4.16683V15.8335C2.5 16.2755 2.67559 16.6994 2.98816 17.012C3.30072 17.3246 3.72464 17.5002 4.16667 17.5002H15.8333C16.2754 17.5002 16.6993 17.3246 17.0118 17.012C17.3244 16.6994 17.5 16.2755 17.5 15.8335V4.16683C17.5 3.24183 16.75 2.50016 15.8333 2.50016H15V0.833496M14.1667 10.0002H10V14.1668H14.1667V10.0002Z" fill="#61607C"/>
        ) : (
          <path d="M12.6667 12.6665H3.33333V5.33317H12.6667M10.6667 0.666504V1.99984H5.33333V0.666504H4V1.99984H3.33333C2.59333 1.99984 2 2.59317 2 3.33317V12.6665C2 13.0201 2.14048 13.3593 2.39052 13.6093C2.64057 13.8594 2.97971 13.9998 3.33333 13.9998H12.6667C13.0203 13.9998 13.3594 13.8594 13.6095 13.6093C13.8595 13.3593 14 13.0201 14 12.6665V3.33317C14 2.59317 13.4 1.99984 12.6667 1.99984H12V0.666504M11.3333 7.99984H8V11.3332H11.3333V7.99984Z" fill="#61607C"/>
        )}
      </g>
    </svg>
  );
};

const ClockIcon = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  const iconSize = size === 'small' ? '14' : size === 'large' ? '20' : '16';
  
  return (
    <svg width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6">
        {size === 'small' ? (
          <path d="M7.00008 11.6666C5.91711 11.6666 4.8785 11.2364 4.11273 10.4706C3.34696 9.70487 2.91675 8.66626 2.91675 7.58329C2.91675 6.50033 3.34696 5.46172 4.11273 4.69594C4.8785 3.93017 5.91711 3.49996 7.00008 3.49996C8.08305 3.49996 9.12166 3.93017 9.88743 4.69594C10.6532 5.46172 11.0834 6.50033 11.0834 7.58329C11.0834 8.66626 10.6532 9.70487 9.88743 10.4706C9.12166 11.2364 8.08305 11.6666 7.00008 11.6666ZM7.00008 2.33329C5.60769 2.33329 4.27234 2.88642 3.28777 3.87098C2.3032 4.85555 1.75008 6.19091 1.75008 7.58329C1.75008 8.97568 2.3032 10.311 3.28777 11.2956C4.27234 12.2802 5.60769 12.8333 7.00008 12.8333C8.39247 12.8333 9.72783 12.2802 10.7124 11.2956C11.697 10.311 12.2501 8.97568 12.2501 7.58329C12.2501 6.19091 11.697 4.85555 10.7124 3.87098C9.72783 2.88642 8.39247 2.33329 7.00008 2.33329ZM7.29175 4.66663H6.41675V8.16663L9.18758 9.82913L9.62508 9.11163L7.29175 7.72913V4.66663ZM4.59675 1.97746L3.85008 1.08496L1.16675 3.33079L1.91925 4.22329L4.59675 1.97746ZM12.8334 3.33663L10.1501 1.08496L9.39758 1.97746L12.0809 4.22913L12.8334 3.33663Z" fill="#61607C"/>
        ) : size === 'large' ? (
          <path d="M10.0001 16.6665C8.45299 16.6665 6.96925 16.0519 5.87529 14.9579C4.78133 13.864 4.16675 12.3802 4.16675 10.8331C4.16675 9.28604 4.78133 7.80231 5.87529 6.70835C6.96925 5.61439 8.45299 4.9998 10.0001 4.9998C11.5472 4.9998 13.0309 5.61439 14.1249 6.70835C15.2188 7.80231 15.8334 9.28604 15.8334 10.8331C15.8334 12.3802 15.2188 13.864 14.1249 14.9579C13.0309 16.0519 11.5472 16.6665 10.0001 16.6665ZM10.0001 3.33314C8.01096 3.33314 6.1033 4.12331 4.69678 5.52984C3.29026 6.93636 2.50008 8.84401 2.50008 10.8331C2.50008 12.8223 3.29026 14.7299 4.69678 16.1364C6.1033 17.543 8.01096 18.3331 10.0001 18.3331C11.9892 18.3331 13.8969 17.543 15.3034 16.1364C16.7099 14.7299 17.5001 12.8223 17.5001 10.8331C17.5001 8.84401 16.7099 6.93636 15.3034 5.52984C13.8969 4.12331 11.9892 3.33314 10.0001 3.33314ZM10.4167 6.66647H9.16675V11.6665L13.1251 14.0415L13.7501 13.0165L10.4167 11.0415V6.66647ZM6.56675 2.8248L5.50008 1.5498L1.66675 4.75814L2.74175 6.03314L6.56675 2.8248ZM18.3334 4.76647L14.5001 1.5498L13.4251 2.8248L17.2584 6.04147L18.3334 4.76647Z" fill="#61607C"/>
        ) : (
          <path d="M8.00016 13.3336C6.76249 13.3336 5.5755 12.8419 4.70033 11.9667C3.82516 11.0916 3.3335 9.90458 3.3335 8.6669C3.3335 7.42922 3.82516 6.24224 4.70033 5.36707C5.5755 4.4919 6.76249 4.00023 8.00016 4.00023C9.23784 4.00023 10.4248 4.4919 11.3 5.36707C12.1752 6.24224 12.6668 7.42922 12.6668 8.6669C12.6668 9.90458 12.1752 11.0916 11.3 11.9667C10.4248 12.8419 9.23784 13.3336 8.00016 13.3336ZM8.00016 2.6669C6.40886 2.6669 4.88274 3.29904 3.75752 4.42426C2.6323 5.54948 2.00016 7.0756 2.00016 8.6669C2.00016 10.2582 2.6323 11.7843 3.75752 12.9095C4.88274 14.0348 6.40886 14.6669 8.00016 14.6669C9.59146 14.6669 11.1176 14.0348 12.2428 12.9095C13.368 11.7843 14.0002 10.2582 14.0002 8.6669C14.0002 7.0756 13.368 5.54948 12.2428 4.42426C11.1176 3.29904 9.59146 2.6669 8.00016 2.6669ZM8.3335 5.33357H7.3335V9.33357L10.5002 11.2336L11.0002 10.4136L8.3335 8.83357V5.33357ZM5.2535 2.26023L4.40016 1.24023L1.3335 3.8069L2.1935 4.8269L5.2535 2.26023ZM14.6668 3.81357L11.6002 1.24023L10.7402 2.26023L13.8068 4.83357L14.6668 3.81357Z" fill="#61607C"/>
        )}
      </g>
    </svg>
  );
};

export const DateTimeInput: React.FC<DateTimeInputProps> = ({
  label,
  placeholder,
  value,
  state = 'default',
  size = 'default',
  type = 'date',
  disabled = false,
  id,
  className = '',
  onChange,
  onFocus,
  onBlur,
}) => {
  const inputId = id || `datetime-input-${Math.random().toString(36).substring(2, 11)}`;
  const isFocused = state === 'focus' || state === 'typing';
  const isTyping = state === 'typing';
  const isFilled = state === 'filled';

  const getDefaultPlaceholder = () => {
    return type === 'date' ? 'DD / MMM / YYYY' : '00 : 00 : 00 PM';
  };

  const renderValue = () => {
    if (isTyping && value?.includes('|')) {
      const parts = value.split('|');
      return (
        <>
          <span className="datetime-input-text">{parts[0]}</span>
          <span className="datetime-input-cursor">|</span>
          {parts[1] && <span className="datetime-input-text">{parts[1]}</span>}
        </>
      );
    }
    
    if (isFocused && !value) {
      return <span className="datetime-input-cursor">|</span>;
    }

    return value || getDefaultPlaceholder();
  };

  const getTextColor = () => {
    if (isFilled && value) return 'var(--base-black)';
    if (isTyping && value?.includes('|')) return 'var(--base-black)';
    if (isFocused && !value) return 'var(--neutral-gray-gray-400)';
    return 'var(--secondary-blue-gray)';
  };

  return (
    <div className={`datetime-input-wrapper ${size} ${className}`}>
      {label && (
        <label htmlFor={inputId} className={`datetime-input-label ${size}`}>
          {label}
        </label>
      )}

      <div className={`datetime-input-container ${state} ${size} ${disabled ? 'disabled' : ''}`}>
        <div className={`datetime-input-content ${size}`}>
          <div 
            className={`datetime-input-text-content ${size}`}
            style={{ color: getTextColor() }}
          >
            {renderValue()}
          </div>
        </div>

        <div className={`datetime-input-icon ${size}`}>
          {type === 'date' ? <CalendarIcon size={size} /> : <ClockIcon size={size} />}
        </div>
      </div>
    </div>
  );
};
