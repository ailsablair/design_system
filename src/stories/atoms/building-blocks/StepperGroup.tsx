import React from 'react';
import { Stepper, StepperProps } from './Stepper';
import { StepperLine } from './StepperLine';
import './stepperGroup.css';

export interface StepperGroupStep {
  /** Step number or identifier */
  stepNumber: string | number;
  /** Label text below the step */
  label: string;
  /** Visual state of the step */
  state?: 'default' | 'active' | 'completed';
  /** Custom step props override */
  stepProps?: Partial<StepperProps>;
}

export interface StepperGroupProps {
  /** Array of steps to display */
  steps: StepperGroupStep[];
  /** Size variant for all steps */
  size?: 'default' | 'large';
  /** Overall state of the stepper */
  state?: 'default' | 'in progress' | 'complete';
  /** Current active step index (0-based) */
  currentStep?: number;
  /** Custom className */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** Click handler for step interactions */
  onStepClick?: (stepIndex: number, step: StepperGroupStep) => void;
  /** Accessibility label */
  'aria-label'?: string;
  /** Show step labels */
  showLabels?: boolean;
  /** Custom line props */
  lineProps?: {
    type?: 'solid' | 'dashed' | 'dotted';
    stroke?: '1px' | '2px' | '3px';
    color?: string;
  };
}

export const StepperGroup: React.FC<StepperGroupProps> = ({
  steps = [],
  size = 'default',
  state = 'default',
  currentStep,
  className = '',
  style = {},
  onStepClick,
  'aria-label': ariaLabel,
  showLabels = true,
  lineProps = { type: 'solid', stroke: '2px' },
}) => {
  const stepperGroupClasses = [
    'stepper-group',
    `stepper-group-size-${size}`,
    `stepper-group-state-${state.replace(' ', '-')}`,
    `stepper-group-steps-${getStepCountName(steps.length)}`,
    className
  ].filter(Boolean).join(' ');

  // Determine the step states based on current step and overall state
  const getStepState = (stepIndex: number): 'default' | 'active' | 'completed' => {
    if (state === 'complete') {
      return 'completed';
    }
    
    if (currentStep !== undefined) {
      if (stepIndex < currentStep) {
        return 'completed';
      } else if (stepIndex === currentStep) {
        return 'active';
      }
    }
    
    // Use the step's individual state if provided
    return steps[stepIndex]?.state || 'default';
  };

  // Get the line width based on step count and size
  const getLineWidth = (): string => {
    const stepCount = steps.length;
    if (size === 'large') {
      switch (stepCount) {
        case 4: return '196px';
        case 5: return '125px';
        case 6: return '68px';
        case 7: return '30px';
        case 8: return '25.714px';
        default: return '196px';
      }
    } else {
      switch (stepCount) {
        case 4: return '249.333px';
        case 5: return '167px';
        case 6: return '108px';
        case 7: return '68.667px';
        case 8: return '40.571px';
        default: return '249.333px';
      }
    }
  };

  const handleStepClick = (stepIndex: number) => {
    if (onStepClick) {
      onStepClick(stepIndex, steps[stepIndex]);
    }
  };

  return (
    <div
      className={stepperGroupClasses}
      style={style}
      role="progressbar"
      aria-label={ariaLabel || `Stepper with ${steps.length} steps${currentStep !== undefined ? `, currently on step ${currentStep + 1}` : ''}`}
      aria-valuemin={1}
      aria-valuemax={steps.length}
      aria-valuenow={currentStep !== undefined ? currentStep + 1 : undefined}
    >
      {steps.map((step, index) => {
        const stepState = getStepState(index);
        const isLast = index === steps.length - 1;
        
        return (
          <React.Fragment key={`step-${index}`}>
            <Stepper
              size={size}
              stepNumber={step.stepNumber}
              label={step.label}
              state={stepState}
              current={stepState === 'active'}
              text={showLabels}
              onClick={onStepClick ? () => handleStepClick(index) : undefined}
              {...step.stepProps}
            />
            
            {!isLast && (
              <StepperLine
                type={lineProps.type}
                stroke={lineProps.stroke}
                color={lineProps.color}
                width={getLineWidth()}
                className="stepper-group-line"
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

// Helper function to get step count name for CSS classes
function getStepCountName(count: number): string {
  switch (count) {
    case 4: return 'four';
    case 5: return 'five';
    case 6: return 'six';
    case 7: return 'seven';
    case 8: return 'eight';
    default: return 'default';
  }
}

export default StepperGroup;
