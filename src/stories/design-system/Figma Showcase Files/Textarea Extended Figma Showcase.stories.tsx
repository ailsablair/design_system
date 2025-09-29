import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from '../../atoms/Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Design System/Figma Showcase Files/Textarea Extended Figma Showcase',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Comprehensive Textarea component showcase matching Figma design specifications. Features complete validation states, character counting, required field indicators, and modern design patterns consistent with the Input component.',
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
        <h2 style={{ margin: '0 0 16px 0', fontSize: '24px', fontWeight: '600' }}>Textarea - Figma Implementation</h2>
        <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: '#666' }}>
          Updated Textarea component with comprehensive validation states, character counting, 
          required field indicators, and consistency with the Input component design patterns.
        </p>
      </div>

      {/* Size Variants */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Size Variants</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Textarea
            label="Small Textarea"
            size="small"
            placeholder="Enter your message here..."
            value="This is a small textarea with some sample content."
            rows={3}
          />
          
          <Textarea
            label="Default Textarea"
            size="default"
            placeholder="Enter your message here..."
            value="This is a default textarea with some sample content that demonstrates the component's functionality."
            rows={4}
          />
          
          <Textarea
            label="Large Textarea"
            size="large"
            placeholder="Enter your message here..."
            value="This is a large textarea with some sample content that demonstrates the component's functionality and shows how it handles larger text areas."
            rows={5}
          />
        </div>
      </div>

      {/* Validation States Grid */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Validation States</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          <Textarea
            label="Default State"
            state="default"
            placeholder="Enter your feedback..."
            message="Please provide your feedback"
          />
          
          <Textarea
            label="Error State"
            state="error"
            value="This message is too short."
            message="Message must be at least 50 characters long"
          />
          
          <Textarea
            label="Warning State"
            state="warning"
            value="This message contains special characters: @#$%"
            message="Special characters may cause formatting issues"
          />
          
          <Textarea
            label="Success State"
            state="success"
            value="Thank you for your detailed feedback. We appreciate you taking the time to share your thoughts with us."
            message="Feedback submitted successfully"
          />
        </div>
      </div>

      {/* Character Count Features */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Character Count Features</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          <Textarea
            label="With Character Count"
            value="This textarea shows character count at the bottom right."
            showCharacterCount={true}
            placeholder="Start typing to see character count..."
          />
          
          <Textarea
            label="With Max Length"
            value="This textarea has a maximum length limit of 100 characters. Try typing more to see the validation."
            maxLength={100}
            showCharacterCount={true}
            state="warning"
            message="Approaching character limit"
          />
          
          <Textarea
            label="Over Limit Example"
            value="This textarea demonstrates what happens when you exceed the character limit. The count turns red and shows an error state."
            maxLength={80}
            showCharacterCount={true}
            state="error"
            message="Character limit exceeded"
          />
          
          <Textarea
            label="Required Field"
            required={true}
            placeholder="This field is required..."
            showCharacterCount={true}
            message="Please fill in this required field"
          />
        </div>
      </div>

      {/* Interactive States */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Interactive States</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          <Textarea
            label="Focus State"
            state="focus"
            placeholder="This textarea is focused"
          />
          
          <Textarea
            label="Typing State"
            state="typing"
            value="I am typing right now|"
          />
          
          <Textarea
            label="With Close Button"
            value="This textarea has a close button for clearing content."
            showClose={true}
          />
          
          <Textarea
            label="Disabled State"
            value="This textarea is disabled and cannot be edited."
            disabled={true}
          />
        </div>
      </div>

      {/* Advanced Features */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Advanced Features</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Textarea
            label="Full Featured Example"
            required={true}
            value="This textarea demonstrates all features: required field, character count, validation, and close button."
            maxLength={200}
            showCharacterCount={true}
            showClose={true}
            state="success"
            message="All features working correctly"
            rows={4}
          />
          
          <Textarea
            label="Resizable Textarea"
            placeholder="This textarea can be resized vertically..."
            resize="vertical"
            minHeight={80}
            maxHeight={200}
            message="You can resize this textarea by dragging the bottom-right corner"
            rows={3}
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
                <li>Character count display</li>
                <li>Character limit enforcement</li>
                <li>Required field indicator (*)</li>
                <li>Enhanced close button</li>
                <li>Improved accessibility</li>
              </ul>
            </div>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontWeight: '600' }}>🎯 Design Consistency:</h4>
              <ul style={{ margin: 0, paddingLeft: '16px' }}>
                <li>Matches Input component patterns</li>
                <li>Uses design system tokens</li>
                <li>Responsive behavior</li>
                <li>ARIA attributes for screen readers</li>
                <li>Keyboard navigation support</li>
                <li>Modern validation patterns</li>
                <li>Consistent message positioning</li>
                <li>Footer layout for meta information</li>
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
          <div style={{ marginBottom: '8px' }}><strong>Sizes:</strong> small | default | large</div>
          <div style={{ marginBottom: '8px' }}><strong>Character Count:</strong> Optional display with limit enforcement</div>
          <div style={{ marginBottom: '8px' }}><strong>Required Fields:</strong> Visual indicator with asterisk (*)</div>
          <div style={{ marginBottom: '8px' }}><strong>Resize Options:</strong> none | vertical | horizontal | both</div>
          <div style={{ marginBottom: '8px' }}><strong>Accessibility:</strong> ARIA labels, screen reader support</div>
          <div><strong>Footer Layout:</strong> Message + character count side-by-side</div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of the updated Textarea component demonstrating all features, validation states, character counting, and design consistency with modern Input component patterns.',
      },
    },
  },
};

export const ValidationMatrix: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Validation States Matrix</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {/* Header row */}
        <div style={{ fontWeight: '600', fontSize: '14px', padding: '8px 0' }}>State</div>
        <div style={{ fontWeight: '600', fontSize: '14px', padding: '8px 0' }}>Example</div>
        <div style={{ fontWeight: '600', fontSize: '14px', padding: '8px 0' }}>Use Case</div>
        
        {/* Default */}
        <div style={{ fontSize: '14px', fontWeight: '500', padding: '8px 0' }}>Default</div>
        <Textarea 
          label="Default" 
          state="default" 
          placeholder="Enter text..."
          message="Please provide input"
          size="small"
        />
        <div style={{ fontSize: '12px', color: '#666', padding: '8px 0' }}>Initial state, no validation</div>
        
        {/* Error */}
        <div style={{ fontSize: '14px', fontWeight: '500', padding: '8px 0' }}>Error</div>
        <Textarea 
          label="Error" 
          state="error" 
          value="Invalid input"
          message="This field contains errors"
          size="small"
        />
        <div style={{ fontSize: '12px', color: '#CE2031', padding: '8px 0' }}>Validation failed, input invalid</div>
        
        {/* Warning */}
        <div style={{ fontSize: '14px', fontWeight: '500', padding: '8px 0' }}>Warning</div>
        <Textarea 
          label="Warning" 
          state="warning" 
          value="Potentially problematic content"
          message="Please review this input"
          size="small"
        />
        <div style={{ fontSize: '12px', color: '#F4A403', padding: '8px 0' }}>Needs attention, but not invalid</div>
        
        {/* Success */}
        <div style={{ fontSize: '14px', fontWeight: '500', padding: '8px 0' }}>Success</div>
        <Textarea 
          label="Success" 
          state="success" 
          value="Perfect input content"
          message="Input validated successfully"
          size="small"
        />
        <div style={{ fontSize: '12px', color: '#227F1A', padding: '8px 0' }}>Validation passed, input valid</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Matrix view of all validation states showing consistent behavior and appropriate use cases for each state.',
      },
    },
  },
};

export const CharacterCountShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Character Count Features</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        <Textarea
          label="Basic Character Count"
          value="Basic character counting without limits."
          showCharacterCount={true}
          placeholder="Type to see character count..."
        />
        
        <Textarea
          label="With 50 Character Limit"
          value="This text is approaching the character limit."
          maxLength={50}
          showCharacterCount={true}
          state="warning"
          message="Approaching character limit"
        />
        
        <Textarea
          label="Over Limit (100 chars)"
          value="This text deliberately exceeds the character limit to demonstrate the error state and red character count display when users type too much content."
          maxLength={100}
          showCharacterCount={true}
          state="error"
          message="Character limit exceeded"
        />
        
        <Textarea
          label="Required + Character Count"
          required={true}
          value=""
          maxLength={200}
          showCharacterCount={true}
          placeholder="Required field with character count..."
          message="This field is required"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of character count features including basic counting, limits, over-limit handling, and integration with required fields.',
      },
    },
  },
};
