import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { AutoSave } from './AutoSave';

const meta: Meta<typeof AutoSave> = {
  title: 'Design System/Figma Showcase Files/Auto-Save Buttons Figma Showcase',
  component: AutoSave,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Complete implementation of the button/auto-save component set from Figma designs. This showcase displays all 7 states: default, disabled, hover, saving, auto-saving, saved, and error-saving. Matches pixel-perfect Figma specifications including colors, typography, icons, and spacing.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AutoSave>;

/**
 * Complete Figma Design Implementation
 * 
 * This showcase displays all auto-save button states exactly as designed in Figma:
 * 
 * **Interactive States:**
 * - Default: "Save draft" with floppy disk icon (#04435E)
 * - Disabled: "Save draft" grayed out (#D2D5DA)  
 * - Hover: "Save draft" with floppy disk icon (#04435E)
 * 
 * **Processing States:**
 * - Auto-saving: "Auto-saving" with loading spinner, 1px border (#04435E)
 * - Saving: "Saving draft" with loading spinner, 2px border + shadow (#04435E)
 * 
 * **Result States:**
 * - Saved: "Draft saved" with green check icon (#227F1A)
 * - Error: "Unable to save" with red X icon (#CE2031)
 * 
 * **Design Specifications:**
 * - Font: Archivo 16px, weight 400
 * - Line height: 20px (125%)
 * - Letter spacing: 0.15px
 * - Icon size: 18x18px
 * - Icon opacity: 0.6
 * - Layout: Flexbox with 4px inner padding, 8px/24px outer padding, 6px gap
 */
export const FigmaCompleteShowcase: Story = {
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '40px',
      padding: '40px',
      background: '#ffffff',
      minHeight: '100vh',
      fontFamily: 'Archivo, -apple-system, sans-serif',
    }}>
      {/* Header */}
      <div style={{ marginBottom: '16px' }}>
        <h1 style={{
          margin: 0,
          fontSize: '32px',
          fontWeight: '600',
          color: '#1C1C1C',
          marginBottom: '12px',
          fontFamily: 'Archivo, -apple-system, sans-serif',
        }}>
          Auto-Save Button Component
        </h1>
        <p style={{
          margin: 0,
          fontSize: '16px',
          color: '#6D7280',
          lineHeight: '24px',
        }}>
          Complete Figma design implementation of the button/auto-save component with all 7 states
        </p>
      </div>

      {/* All States Display */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        padding: '32px',
        background: '#F9FAFB',
        borderRadius: '12px',
        border: '1px solid #E5E7EB',
      }}>
        <h2 style={{
          margin: 0,
          fontSize: '20px',
          fontWeight: '600',
          color: '#1F2937',
          fontFamily: 'Archivo, -apple-system, sans-serif',
        }}>
          All Button States
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px',
        }}>
          {/* Default */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            padding: '20px',
            background: '#FFFFFF',
            borderRadius: '8px',
            border: '1px solid #E5E7EB',
          }}>
            <div style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#6B7280',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Default
            </div>
            <AutoSave 
              status="default"
              onClick={() => console.log('Save clicked')}
            />
            <div style={{
              fontSize: '11px',
              color: '#9CA3AF',
              marginTop: '4px',
            }}>
              #04435E • Clickable
            </div>
          </div>

          {/* Disabled */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            padding: '20px',
            background: '#FFFFFF',
            borderRadius: '8px',
            border: '1px solid #E5E7EB',
          }}>
            <div style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#6B7280',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Disabled
            </div>
            <AutoSave status="disabled" />
            <div style={{
              fontSize: '11px',
              color: '#9CA3AF',
              marginTop: '4px',
            }}>
              #D2D5DA • Not clickable
            </div>
          </div>

          {/* Hover */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            padding: '20px',
            background: '#FFFFFF',
            borderRadius: '8px',
            border: '1px solid #E5E7EB',
          }}>
            <div style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#6B7280',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Hover
            </div>
            <AutoSave 
              status="hover"
              onClick={() => console.log('Save clicked (hover)')}
            />
            <div style={{
              fontSize: '11px',
              color: '#9CA3AF',
              marginTop: '4px',
            }}>
              #04435E • Interactive
            </div>
          </div>

          {/* Saving */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            padding: '20px',
            background: '#FFFFFF',
            borderRadius: '8px',
            border: '1px solid #E5E7EB',
          }}>
            <div style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#6B7280',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Saving
            </div>
            <AutoSave status="saving" />
            <div style={{
              fontSize: '11px',
              color: '#9CA3AF',
              marginTop: '4px',
            }}>
              #04435E • Loading
            </div>
          </div>

          {/* Auto-saving */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            padding: '20px',
            background: '#FFFFFF',
            borderRadius: '8px',
            border: '1px solid #E5E7EB',
          }}>
            <div style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#6B7280',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Auto-saving
            </div>
            <AutoSave status="auto-saving" />
            <div style={{
              fontSize: '11px',
              color: '#9CA3AF',
              marginTop: '4px',
            }}>
              #04435E • Automatic
            </div>
          </div>

          {/* Saved */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            padding: '20px',
            background: '#FFFFFF',
            borderRadius: '8px',
            border: '1px solid #E5E7EB',
          }}>
            <div style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#6B7280',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Saved
            </div>
            <AutoSave status="saved" />
            <div style={{
              fontSize: '11px',
              color: '#9CA3AF',
              marginTop: '4px',
            }}>
              #227F1A • Success
            </div>
          </div>

          {/* Error-saving */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            padding: '20px',
            background: '#FFFFFF',
            borderRadius: '8px',
            border: '1px solid #E5E7EB',
          }}>
            <div style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#6B7280',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Error Saving
            </div>
            <AutoSave status="error-saving" />
            <div style={{
              fontSize: '11px',
              color: '#9CA3AF',
              marginTop: '4px',
            }}>
              #CE2031 • Error
            </div>
          </div>
        </div>
      </div>

      {/* Design Specifications */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '32px',
        background: '#F9FAFB',
        borderRadius: '12px',
        border: '1px solid #E5E7EB',
      }}>
        <h2 style={{
          margin: 0,
          fontSize: '20px',
          fontWeight: '600',
          color: '#1F2937',
          fontFamily: 'Archivo, -apple-system, sans-serif',
        }}>
          Design Specifications
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
        }}>
          <div>
            <h3 style={{
              margin: 0,
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '12px',
              fontFamily: 'Archivo, -apple-system, sans-serif',
            }}>
              Typography
            </h3>
            <ul style={{
              margin: 0,
              padding: 0,
              listStyle: 'none',
              fontSize: '14px',
              color: '#6B7280',
              lineHeight: '24px',
            }}>
              <li>• Font: Archivo</li>
              <li>• Size: 16px</li>
              <li>• Weight: 400</li>
              <li>• Line height: 20px (125%)</li>
              <li>• Letter spacing: 0.15px</li>
            </ul>
          </div>

          <div>
            <h3 style={{
              margin: 0,
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '12px',
              fontFamily: 'Archivo, -apple-system, sans-serif',
            }}>
              Layout
            </h3>
            <ul style={{
              margin: 0,
              padding: 0,
              listStyle: 'none',
              fontSize: '14px',
              color: '#6B7280',
              lineHeight: '24px',
            }}>
              <li>• Display: flex</li>
              <li>• Padding: 4px</li>
              <li>• Gap: 6px</li>
              <li>• Align: center</li>
              <li>• Justify: center</li>
            </ul>
          </div>

          <div>
            <h3 style={{
              margin: 0,
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '12px',
              fontFamily: 'Archivo, -apple-system, sans-serif',
            }}>
              Icons
            </h3>
            <ul style={{
              margin: 0,
              padding: 0,
              listStyle: 'none',
              fontSize: '14px',
              color: '#6B7280',
              lineHeight: '24px',
            }}>
              <li>• Size: 18x18px</li>
              <li>• Opacity: 0.6</li>
              <li>• Floppy disk (save)</li>
              <li>• Loading spinner</li>
              <li>• Check (success)</li>
              <li>• X close (error)</li>
            </ul>
          </div>

          <div>
            <h3 style={{
              margin: 0,
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '12px',
              fontFamily: 'Archivo, -apple-system, sans-serif',
            }}>
              Colors
            </h3>
            <ul style={{
              margin: 0,
              padding: 0,
              listStyle: 'none',
              fontSize: '14px',
              color: '#6B7280',
              lineHeight: '24px',
            }}>
              <li>• Default: #04435E</li>
              <li>• Disabled: #D2D5DA</li>
              <li>• Success: #227F1A</li>
              <li>• Error: #CE2031</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Interactive Demo */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '32px',
        background: '#F9FAFB',
        borderRadius: '12px',
        border: '1px solid #E5E7EB',
      }}>
        <h2 style={{
          margin: 0,
          fontSize: '20px',
          fontWeight: '600',
          color: '#1F2937',
          fontFamily: 'Archivo, -apple-system, sans-serif',
        }}>
          Interactive Demo
        </h2>

        <InteractiveDemoComponent />
      </div>

      {/* State Comparison */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '32px',
        background: '#FFFFFF',
        borderRadius: '12px',
        border: '1px solid #E5E7EB',
      }}>
        <h2 style={{
          margin: 0,
          fontSize: '20px',
          fontWeight: '600',
          color: '#1F2937',
          fontFamily: 'Archivo, -apple-system, sans-serif',
        }}>
          State Comparison
        </h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'flex-start',
        }}>
          <AutoSave status="default" onClick={() => {}} />
          <AutoSave status="auto-saving" />
          <AutoSave status="disabled" />
          <AutoSave status="error-saving" />
          <AutoSave status="hover" onClick={() => {}} />
          <AutoSave status="saved" />
          <AutoSave status="saving" />
        </div>
      </div>
    </div>
  ),
};

// Interactive Demo Component
const InteractiveDemoComponent: React.FC = () => {
  const [currentStatus, setCurrentStatus] = React.useState<'default' | 'saving' | 'saved' | 'error-saving'>('default');
  
  const handleSaveClick = () => {
    if (currentStatus === 'default') {
      setCurrentStatus('saving');
      
      setTimeout(() => {
        const success = Math.random() > 0.2;
        setCurrentStatus(success ? 'saved' : 'error-saving');
        
        setTimeout(() => {
          setCurrentStatus('default');
        }, 3000);
      }, 2000);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      alignItems: 'center',
      padding: '24px',
      background: '#FFFFFF',
      borderRadius: '8px',
      border: '1px solid #E5E7EB',
    }}>
      <AutoSave 
        status={currentStatus}
        onClick={handleSaveClick}
      />
      <p style={{
        margin: 0,
        fontSize: '14px',
        color: '#6B7280',
        textAlign: 'center',
        maxWidth: '300px',
        lineHeight: '20px',
      }}>
        Click the button to simulate the save process. The demo will cycle through: 
        default → saving → (saved | error) → default
      </p>
    </div>
  );
};

/**
 * Minimal showcase of all states in a compact layout
 */
export const AllStatesCompact: Story = {
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '24px',
      alignItems: 'flex-start',
    }}>
      <AutoSave status="default" onClick={() => console.log('Save')} />
      <AutoSave status="disabled" />
      <AutoSave status="hover" onClick={() => console.log('Save')} />
      <AutoSave status="saving" />
      <AutoSave status="auto-saving" />
      <AutoSave status="saved" />
      <AutoSave status="error-saving" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Compact display of all auto-save button states',
      },
    },
  },
};
