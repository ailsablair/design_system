import type { Meta, StoryObj } from '@storybook/react-vite';
import { DateTimeInput } from '../../atoms/DateTimeInput';

const meta: Meta<typeof DateTimeInput> = {
  title: 'Design System/Figma Showcase Files/DateTimeInput Extended Figma Showcase',
  component: DateTimeInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Comprehensive DateTimeInput component showcase matching Figma design specifications. Features complete validation states, interactive elements, and modern design patterns consistent with the Input component.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ComprehensiveShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px', maxWidth: '800px' }}>
      <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ margin: '0 0 16px 0', fontSize: '24px', fontWeight: '600' }}>DateTimeInput - Figma Implementation</h2>
        <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: '#666' }}>
          Updated DateTimeInput component with comprehensive validation states, interactive features, 
          and consistency with the Input component design patterns.
        </p>
      </div>

      {/* Size Variants */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Size Variants</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <DateTimeInput
            label="Small Date Input"
            type="date"
            size="small"
            value="15 / Mar / 2024"
          />
          
          <DateTimeInput
            label="Default Date Input"
            type="date"
            size="default"
            value="15 / Mar / 2024"
          />
          
          <DateTimeInput
            label="Large Date Input"
            type="date"
            size="large"
            value="15 / Mar / 2024"
          />
        </div>
      </div>

      {/* Date vs Time Types */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Input Types</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <DateTimeInput
            label="Date Input"
            type="date"
            value="15 / Mar / 2024"
          />
          
          <DateTimeInput
            label="Time Input"
            type="time"
            value="2:30:00 PM"
          />
        </div>
      </div>

      {/* Validation States Grid */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Validation States</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          <DateTimeInput
            label="Default State"
            type="date"
            state="default"
            message="Please select a date"
          />
          
          <DateTimeInput
            label="Error State"
            type="date"
            state="error"
            value="32 / Feb / 2024"
            message="Please enter a valid date"
          />
          
          <DateTimeInput
            label="Warning State"
            type="date"
            state="warning"
            value="29 / Feb / 2023"
            message="Date is in a non-leap year"
          />
          
          <DateTimeInput
            label="Success State"
            type="date"
            state="success"
            value="15 / Mar / 2024"
            message="Date validated successfully"
          />
        </div>
      </div>

      {/* Interactive States */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Interactive States</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          <DateTimeInput
            label="Focus State"
            type="date"
            state="focus"
          />
          
          <DateTimeInput
            label="Typing State"
            type="date"
            state="typing"
            value="15 / M|"
          />
          
          <DateTimeInput
            label="Filled with Close"
            type="time"
            state="filled"
            value="2:30:00 PM"
            showClose={true}
          />
          
          <DateTimeInput
            label="Disabled State"
            type="date"
            value="15 / Mar / 2024"
            disabled={true}
          />
        </div>
      </div>

      {/* Feature Comparison */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Feature Comparison</h3>
        <div style={{ 
          background: '#f8f9fa', 
          padding: '16px', 
          borderRadius: '8px', 
          fontSize: '14px'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontWeight: '600' }}>✅ New Features Added:</h4>
              <ul style={{ margin: 0, paddingLeft: '16px' }}>
                <li>Error validation state</li>
                <li>Warning validation state</li>
                <li>Success validation state</li>
                <li>Validation message support</li>
                <li>Close/clear button</li>
                <li>Consistent with Input component</li>
              </ul>
            </div>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontWeight: '600' }}>🎯 Design Consistency:</h4>
              <ul style={{ margin: 0, paddingLeft: '16px' }}>
                <li>Matches Input component patterns</li>
                <li>Uses design system tokens</li>
                <li>Responsive behavior</li>
                <li>Accessibility support</li>
                <li>Keyboard navigation</li>
                <li>Modern interaction states</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Technical Specifications</h3>
        <div style={{ 
          background: '#f8f9fa', 
          padding: '16px', 
          borderRadius: '8px', 
          fontSize: '14px',
          fontFamily: 'monospace'
        }}>
          <div style={{ marginBottom: '8px' }}><strong>Validation States:</strong> default | error | warning | success | focus | typing | filled</div>
          <div style={{ marginBottom: '8px' }}><strong>Sizes:</strong> small (32px) | default (44px) | large (54px)</div>
          <div style={{ marginBottom: '8px' }}><strong>Types:</strong> date | time</div>
          <div style={{ marginBottom: '8px' }}><strong>Icons:</strong> Calendar (date) | Clock (time) | Close Circle (clear)</div>
          <div style={{ marginBottom: '8px' }}><strong>Message Support:</strong> Contextual validation messages</div>
          <div><strong>Interactive:</strong> Close button, focus states, typing animation</div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of the updated DateTimeInput component demonstrating all features, validation states, and design consistency with the modern Input component patterns.',
      },
    },
  },
};

export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Size Comparison - Date vs Time</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
        <div>
          <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Date Inputs</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <DateTimeInput
              label="Small"
              type="date"
              size="small"
              value="15 / Mar / 2024"
            />
            <DateTimeInput
              label="Default"
              type="date"
              size="default"
              value="15 / Mar / 2024"
            />
            <DateTimeInput
              label="Large"
              type="date"
              size="large"
              value="15 / Mar / 2024"
            />
          </div>
        </div>
        
        <div>
          <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Time Inputs</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <DateTimeInput
              label="Small"
              type="time"
              size="small"
              value="2:30:00 PM"
            />
            <DateTimeInput
              label="Default"
              type="time"
              size="default"
              value="2:30:00 PM"
            />
            <DateTimeInput
              label="Large"
              type="time"
              size="large"
              value="2:30:00 PM"
            />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Side-by-side comparison of all size variants for both date and time input types.',
      },
    },
  },
};

export const ValidationShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Validation States Matrix</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        {/* Header row */}
        <div style={{ fontWeight: '600', fontSize: '14px', padding: '8px 0' }}>State</div>
        <div style={{ fontWeight: '600', fontSize: '14px', padding: '8px 0' }}>Date Example</div>
        <div style={{ fontWeight: '600', fontSize: '14px', padding: '8px 0' }}>Time Example</div>
        <div style={{ fontWeight: '600', fontSize: '14px', padding: '8px 0' }}>Message</div>
        
        {/* Default */}
        <div style={{ fontSize: '14px', fontWeight: '500', padding: '8px 0' }}>Default</div>
        <DateTimeInput type="date" state="default" />
        <DateTimeInput type="time" state="default" />
        <div style={{ fontSize: '12px', color: '#666', padding: '8px 0' }}>No validation message</div>
        
        {/* Error */}
        <div style={{ fontSize: '14px', fontWeight: '500', padding: '8px 0' }}>Error</div>
        <DateTimeInput type="date" state="error" value="32 / Feb / 2024" />
        <DateTimeInput type="time" state="error" value="25:61:00 PM" />
        <div style={{ fontSize: '12px', color: '#CE2031', padding: '8px 0' }}>Invalid input format</div>
        
        {/* Warning */}
        <div style={{ fontSize: '14px', fontWeight: '500', padding: '8px 0' }}>Warning</div>
        <DateTimeInput type="date" state="warning" value="29 / Feb / 2023" />
        <DateTimeInput type="time" state="warning" value="11:59:59 PM" />
        <div style={{ fontSize: '12px', color: '#F4A403', padding: '8px 0' }}>Please verify input</div>
        
        {/* Success */}
        <div style={{ fontSize: '14px', fontWeight: '500', padding: '8px 0' }}>Success</div>
        <DateTimeInput type="date" state="success" value="15 / Mar / 2024" />
        <DateTimeInput type="time" state="success" value="2:30:00 PM" />
        <div style={{ fontSize: '12px', color: '#227F1A', padding: '8px 0' }}>Input validated</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Matrix view of all validation states showing the consistent behavior across date and time input types.',
      },
    },
  },
};
