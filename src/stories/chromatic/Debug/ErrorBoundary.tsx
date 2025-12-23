import React, { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

/**
 * Error boundary specifically designed for Chromatic testing
 * Catches JavaScript errors anywhere in the child component tree
 */
export class ChromaticErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('Chromatic Error Boundary caught an error:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo
    });
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div style={{
          padding: '24px',
          border: '2px solid #ef4444',
          borderRadius: '8px',
          backgroundColor: '#fef2f2',
          fontFamily: 'Arial, sans-serif'
        }}>
          <h2 style={{ 
            color: '#dc2626', 
            marginBottom: '16px',
            fontSize: '20px'
          }}>
            ⚠️ Component Error Caught
          </h2>
          
          <div style={{ marginBottom: '16px' }}>
            <strong>Error:</strong> {this.state.error?.message || 'Unknown error'}
          </div>
          
          {this.state.error?.stack && (
            <details style={{ marginBottom: '16px' }}>
              <summary style={{ cursor: 'pointer', marginBottom: '8px' }}>
                <strong>Stack Trace</strong>
              </summary>
              <pre style={{ 
                fontSize: '12px', 
                backgroundColor: '#fee2e2',
                padding: '12px',
                borderRadius: '4px',
                overflow: 'auto'
              }}>
                {this.state.error.stack}
              </pre>
            </details>
          )}
          
          {this.state.errorInfo?.componentStack && (
            <details>
              <summary style={{ cursor: 'pointer', marginBottom: '8px' }}>
                <strong>Component Stack</strong>
              </summary>
              <pre style={{ 
                fontSize: '12px', 
                backgroundColor: '#fee2e2',
                padding: '12px',
                borderRadius: '4px',
                overflow: 'auto'
              }}>
                {this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}
          
          <div style={{ 
            marginTop: '16px',
            fontSize: '14px',
            color: '#7f1d1d'
          }}>
            This error was caught by the Chromatic Error Boundary. 
            The component that failed to render has been replaced with this error message.
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Higher-order component to wrap stories with error boundary
 */
export const withErrorBoundary = (Story: () => ReactNode) => (
  <ChromaticErrorBoundary>
    <Story />
  </ChromaticErrorBoundary>
);

export default ChromaticErrorBoundary;
