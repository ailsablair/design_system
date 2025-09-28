import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, AlarmIcon, ArrowDownIcon, CloseCircleIcon } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button/Figma Updated Showcase',
  component: Button,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Complete showcase of all button variants updated to match the latest Figma designs with exact specifications for colors, states, and interactions.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CompleteFigmaShowcase: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '32px', 
      padding: '24px', 
      background: '#f8f9fa', 
      minHeight: '100vh' 
    }}>
      
      {/* Primary Buttons Section */}
      <section>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          marginBottom: '24px', 
          color: '#1a1a1a' 
        }}>
          Primary Buttons (Updated Figma Design)
        </h2>
        
        {/* Small Primary Buttons */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '16px', color: '#4a4a4a' }}>
            Small Size
          </h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button 
              size="small" 
              type="primary" 
              leadingIcon={<AlarmIcon size={14} />}
              trailingIcon={<ArrowDownIcon size={14} />}
            >
              Label
            </Button>
            <Button 
              size="small" 
              type="primary" 
              state="hover"
              leadingIcon={<AlarmIcon size={14} />}
              trailingIcon={<ArrowDownIcon size={14} />}
            >
              Label
            </Button>
            <Button 
              size="small" 
              type="primary" 
              state="clicked"
              leadingIcon={<AlarmIcon size={14} />}
              trailingIcon={<ArrowDownIcon size={14} />}
            >
              Label
            </Button>
            <Button 
              size="small" 
              type="primary" 
              state="focused"
              leadingIcon={<AlarmIcon size={14} />}
              trailingIcon={<ArrowDownIcon size={14} />}
            >
              Label
            </Button>
            <Button 
              size="small" 
              type="primary" 
              state="loading"
            />
            <Button 
              size="small" 
              type="primary" 
              state="disabled"
              leadingIcon={<AlarmIcon size={14} />}
              trailingIcon={<ArrowDownIcon size={14} />}
            >
              Label
            </Button>
          </div>
        </div>

        {/* Default Primary Buttons */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '16px', color: '#4a4a4a' }}>
            Default Size
          </h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button 
              size="default" 
              type="primary" 
              leadingIcon={<AlarmIcon size={18} />}
              trailingIcon={<ArrowDownIcon size={18} />}
            >
              Label
            </Button>
            <Button 
              size="default" 
              type="primary" 
              state="hover"
              leadingIcon={<AlarmIcon size={18} />}
              trailingIcon={<ArrowDownIcon size={18} />}
            >
              Label
            </Button>
            <Button 
              size="default" 
              type="primary" 
              state="clicked"
              leadingIcon={<AlarmIcon size={18} />}
              trailingIcon={<ArrowDownIcon size={18} />}
            >
              Label
            </Button>
            <Button 
              size="default" 
              type="primary" 
              state="focused"
              leadingIcon={<AlarmIcon size={18} />}
              trailingIcon={<ArrowDownIcon size={18} />}
            >
              Label
            </Button>
            <Button 
              size="default" 
              type="primary" 
              state="loading"
            />
            <Button 
              size="default" 
              type="primary" 
              state="disabled"
              leadingIcon={<AlarmIcon size={18} />}
              trailingIcon={<ArrowDownIcon size={18} />}
            >
              Label
            </Button>
          </div>
        </div>

        {/* Large Primary Buttons */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '16px', color: '#4a4a4a' }}>
            Large Size
          </h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button 
              size="large" 
              type="primary" 
              leadingIcon={<AlarmIcon size={20} />}
              trailingIcon={<ArrowDownIcon size={20} />}
            >
              Label
            </Button>
            <Button 
              size="large" 
              type="primary" 
              state="hover"
              leadingIcon={<AlarmIcon size={20} />}
              trailingIcon={<ArrowDownIcon size={20} />}
            >
              Label
            </Button>
            <Button 
              size="large" 
              type="primary" 
              state="clicked"
              leadingIcon={<AlarmIcon size={20} />}
              trailingIcon={<ArrowDownIcon size={20} />}
            >
              Label
            </Button>
            <Button 
              size="large" 
              type="primary" 
              state="focused"
              leadingIcon={<AlarmIcon size={20} />}
              trailingIcon={<ArrowDownIcon size={20} />}
            >
              Label
            </Button>
            <Button 
              size="large" 
              type="primary" 
              state="loading"
            />
            <Button 
              size="large" 
              type="primary" 
              state="disabled"
              leadingIcon={<AlarmIcon size={20} />}
              trailingIcon={<ArrowDownIcon size={20} />}
            >
              Label
            </Button>
          </div>
        </div>
      </section>

      {/* Secondary Buttons Section */}
      <section>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          marginBottom: '24px', 
          color: '#1a1a1a' 
        }}>
          Secondary Buttons (Updated Figma Design)
        </h2>
        
        {/* Small Secondary Buttons */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '16px', color: '#4a4a4a' }}>
            Small Size
          </h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button 
              size="small" 
              type="secondary" 
              leadingIcon={<AlarmIcon size={14} />}
              trailingIcon={<ArrowDownIcon size={14} />}
            >
              Label
            </Button>
            <Button 
              size="small" 
              type="secondary" 
              state="hover"
              leadingIcon={<AlarmIcon size={14} />}
              trailingIcon={<ArrowDownIcon size={14} />}
            >
              Label
            </Button>
            <Button 
              size="small" 
              type="secondary" 
              state="clicked"
              leadingIcon={<AlarmIcon size={14} />}
              trailingIcon={<ArrowDownIcon size={14} />}
            >
              Label
            </Button>
            <Button 
              size="small" 
              type="secondary" 
              state="focused"
              leadingIcon={<AlarmIcon size={14} />}
              trailingIcon={<ArrowDownIcon size={14} />}
            >
              Label
            </Button>
            <Button 
              size="small" 
              type="secondary" 
              state="loading"
            />
            <Button 
              size="small" 
              type="secondary" 
              state="disabled"
              leadingIcon={<AlarmIcon size={14} />}
              trailingIcon={<ArrowDownIcon size={14} />}
            >
              Label
            </Button>
          </div>
        </div>

        {/* Default Secondary Buttons */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '16px', color: '#4a4a4a' }}>
            Default Size
          </h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button 
              size="default" 
              type="secondary" 
              leadingIcon={<AlarmIcon size={18} />}
              trailingIcon={<ArrowDownIcon size={18} />}
            >
              Label
            </Button>
            <Button 
              size="default" 
              type="secondary" 
              state="hover"
              leadingIcon={<AlarmIcon size={18} />}
              trailingIcon={<ArrowDownIcon size={18} />}
            >
              Label
            </Button>
            <Button 
              size="default" 
              type="secondary" 
              state="clicked"
              leadingIcon={<AlarmIcon size={18} />}
              trailingIcon={<ArrowDownIcon size={18} />}
            >
              Label
            </Button>
            <Button 
              size="default" 
              type="secondary" 
              state="focused"
              leadingIcon={<AlarmIcon size={18} />}
              trailingIcon={<ArrowDownIcon size={18} />}
            >
              Label
            </Button>
            <Button 
              size="default" 
              type="secondary" 
              state="loading"
            />
            <Button 
              size="default" 
              type="secondary" 
              state="disabled"
              leadingIcon={<AlarmIcon size={18} />}
              trailingIcon={<ArrowDownIcon size={18} />}
            >
              Label
            </Button>
          </div>
        </div>

        {/* Large Secondary Buttons */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '16px', color: '#4a4a4a' }}>
            Large Size
          </h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button 
              size="large" 
              type="secondary" 
              leadingIcon={<AlarmIcon size={20} />}
              trailingIcon={<ArrowDownIcon size={20} />}
            >
              Label
            </Button>
            <Button 
              size="large" 
              type="secondary" 
              state="hover"
              leadingIcon={<AlarmIcon size={20} />}
              trailingIcon={<ArrowDownIcon size={20} />}
            >
              Label
            </Button>
            <Button 
              size="large" 
              type="secondary" 
              state="clicked"
              leadingIcon={<AlarmIcon size={20} />}
              trailingIcon={<ArrowDownIcon size={20} />}
            >
              Label
            </Button>
            <Button 
              size="large" 
              type="secondary" 
              state="focused"
              leadingIcon={<AlarmIcon size={20} />}
              trailingIcon={<ArrowDownIcon size={20} />}
            >
              Label
            </Button>
            <Button 
              size="large" 
              type="secondary" 
              state="loading"
            />
            <Button 
              size="large" 
              type="secondary" 
              state="disabled"
              leadingIcon={<AlarmIcon size={20} />}
              trailingIcon={<ArrowDownIcon size={20} />}
            >
              Label
            </Button>
          </div>
        </div>
      </section>

      {/* Ghost Buttons Section */}
      <section>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          marginBottom: '24px', 
          color: '#1a1a1a' 
        }}>
          Ghost Buttons (Updated Figma Design)
        </h2>
        
        {/* Small Ghost Buttons */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '16px', color: '#4a4a4a' }}>
            Small Size
          </h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button 
              size="small" 
              type="ghost" 
              leadingIcon={<AlarmIcon size={14} />}
              trailingIcon={<ArrowDownIcon size={14} />}
            >
              Label
            </Button>
            <Button 
              size="small" 
              type="ghost" 
              state="hover"
              leadingIcon={<AlarmIcon size={14} />}
              trailingIcon={<ArrowDownIcon size={14} />}
            >
              Label
            </Button>
            <Button 
              size="small" 
              type="ghost" 
              state="clicked"
              leadingIcon={<AlarmIcon size={14} />}
              trailingIcon={<ArrowDownIcon size={14} />}
            >
              Label
            </Button>
            <Button 
              size="small" 
              type="ghost" 
              state="focused"
              leadingIcon={<AlarmIcon size={14} />}
              trailingIcon={<ArrowDownIcon size={14} />}
            >
              Label
            </Button>
            <Button 
              size="small" 
              type="ghost" 
              state="loading"
            />
            <Button 
              size="small" 
              type="ghost" 
              state="disabled"
              leadingIcon={<AlarmIcon size={14} />}
              trailingIcon={<ArrowDownIcon size={14} />}
            >
              Label
            </Button>
          </div>
        </div>

        {/* Default Ghost Buttons */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '16px', color: '#4a4a4a' }}>
            Default Size
          </h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button 
              size="default" 
              type="ghost" 
              leadingIcon={<AlarmIcon size={18} />}
              trailingIcon={<ArrowDownIcon size={18} />}
            >
              Label
            </Button>
            <Button 
              size="default" 
              type="ghost" 
              state="hover"
              leadingIcon={<AlarmIcon size={18} />}
              trailingIcon={<ArrowDownIcon size={18} />}
            >
              Label
            </Button>
            <Button 
              size="default" 
              type="ghost" 
              state="clicked"
              leadingIcon={<AlarmIcon size={18} />}
              trailingIcon={<ArrowDownIcon size={18} />}
            >
              Label
            </Button>
            <Button 
              size="default" 
              type="ghost" 
              state="focused"
              leadingIcon={<AlarmIcon size={18} />}
              trailingIcon={<ArrowDownIcon size={18} />}
            >
              Label
            </Button>
            <Button 
              size="default" 
              type="ghost" 
              state="loading"
            />
            <Button 
              size="default" 
              type="ghost" 
              state="disabled"
              leadingIcon={<AlarmIcon size={18} />}
              trailingIcon={<ArrowDownIcon size={18} />}
            >
              Label
            </Button>
          </div>
        </div>

        {/* Large Ghost Buttons */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '16px', color: '#4a4a4a' }}>
            Large Size
          </h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button 
              size="large" 
              type="ghost" 
              leadingIcon={<AlarmIcon size={20} />}
              trailingIcon={<ArrowDownIcon size={20} />}
            >
              Label
            </Button>
            <Button 
              size="large" 
              type="ghost" 
              state="hover"
              leadingIcon={<AlarmIcon size={20} />}
              trailingIcon={<ArrowDownIcon size={20} />}
            >
              Label
            </Button>
            <Button 
              size="large" 
              type="ghost" 
              state="clicked"
              leadingIcon={<AlarmIcon size={20} />}
              trailingIcon={<ArrowDownIcon size={20} />}
            >
              Label
            </Button>
            <Button 
              size="large" 
              type="ghost" 
              state="focused"
              leadingIcon={<AlarmIcon size={20} />}
              trailingIcon={<ArrowDownIcon size={20} />}
            >
              Label
            </Button>
            <Button 
              size="large" 
              type="ghost" 
              state="loading"
            />
            <Button 
              size="large" 
              type="ghost" 
              state="disabled"
              leadingIcon={<AlarmIcon size={20} />}
              trailingIcon={<ArrowDownIcon size={20} />}
            >
              Label
            </Button>
          </div>
        </div>
      </section>

      {/* Error Buttons Section */}
      <section>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          marginBottom: '24px', 
          color: '#1a1a1a' 
        }}>
          Error Buttons (Updated Figma Design)
        </h2>
        
        {/* Small Error Buttons */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '16px', color: '#4a4a4a' }}>
            Small Size
          </h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button 
              size="small" 
              type="error" 
              leadingIcon={<CloseCircleIcon size={14} />}
            >
              Error button
            </Button>
            <Button 
              size="small" 
              type="error" 
              state="hover"
              leadingIcon={<CloseCircleIcon size={14} />}
            >
              Error button
            </Button>
            <Button 
              size="small" 
              type="error" 
              state="clicked"
              leadingIcon={<CloseCircleIcon size={14} />}
            >
              Error button
            </Button>
            <Button 
              size="small" 
              type="error" 
              state="focused"
              leadingIcon={<CloseCircleIcon size={14} />}
            >
              Error button
            </Button>
            <Button 
              size="small" 
              type="error" 
              state="loading"
            />
            <Button 
              size="small" 
              type="error" 
              state="disabled"
              leadingIcon={<AlarmIcon size={14} />}
              trailingIcon={<ArrowDownIcon size={14} />}
            >
              Label
            </Button>
          </div>
        </div>

        {/* Default Error Buttons */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '16px', color: '#4a4a4a' }}>
            Default Size
          </h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button 
              size="default" 
              type="error" 
              leadingIcon={<CloseCircleIcon size={18} />}
            >
              Error button
            </Button>
            <Button 
              size="default" 
              type="error" 
              state="hover"
              leadingIcon={<CloseCircleIcon size={18} />}
            >
              Error button
            </Button>
            <Button 
              size="default" 
              type="error" 
              state="clicked"
              leadingIcon={<CloseCircleIcon size={18} />}
            >
              Error button
            </Button>
            <Button 
              size="default" 
              type="error" 
              state="focused"
              leadingIcon={<CloseCircleIcon size={18} />}
            >
              Error button
            </Button>
            <Button 
              size="default" 
              type="error" 
              state="loading"
            />
            <Button 
              size="default" 
              type="error" 
              state="disabled"
              leadingIcon={<AlarmIcon size={18} />}
              trailingIcon={<ArrowDownIcon size={18} />}
            >
              Label
            </Button>
          </div>
        </div>

        {/* Large Error Buttons */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '16px', color: '#4a4a4a' }}>
            Large Size
          </h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button 
              size="large" 
              type="error" 
              leadingIcon={<CloseCircleIcon size={20} />}
            >
              Error button
            </Button>
            <Button 
              size="large" 
              type="error" 
              state="hover"
              leadingIcon={<CloseCircleIcon size={20} />}
            >
              Error button
            </Button>
            <Button 
              size="large" 
              type="error" 
              state="clicked"
              leadingIcon={<CloseCircleIcon size={20} />}
            >
              Error button
            </Button>
            <Button 
              size="large" 
              type="error" 
              state="focused"
              leadingIcon={<CloseCircleIcon size={20} />}
            >
              Error button
            </Button>
            <Button 
              size="large" 
              type="error" 
              state="loading"
            />
            <Button 
              size="large" 
              type="error" 
              state="disabled"
              leadingIcon={<AlarmIcon size={20} />}
              trailingIcon={<ArrowDownIcon size={20} />}
            >
              Label
            </Button>
          </div>
        </div>
      </section>

      {/* Extra Small Buttons Section */}
      <section>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          marginBottom: '24px', 
          color: '#1a1a1a' 
        }}>
          Extra Small Buttons (Updated Figma Design)
        </h2>
        
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '16px', color: '#4a4a4a' }}>
            All Types - Extra Small Size
          </h3>
          
          {/* Primary Extra Small */}
          <div style={{ marginBottom: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '400', marginBottom: '8px', color: '#6a6a6a' }}>
              Primary
            </h4>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Button 
                size="extra-small" 
                type="primary" 
                leadingIcon={<AlarmIcon size={14} />}
              >
                Button w/ leading icon
              </Button>
              <Button 
                size="extra-small" 
                type="primary" 
                state="hover"
                leadingIcon={<AlarmIcon size={14} />}
              >
                Button w/ leading icon
              </Button>
              <Button 
                size="extra-small" 
                type="primary" 
                state="clicked"
                leadingIcon={<AlarmIcon size={14} />}
              >
                Button w/ leading icon
              </Button>
              <Button 
                size="extra-small" 
                type="primary" 
                state="focused"
                leadingIcon={<AlarmIcon size={14} />}
              >
                Button w/ leading icon
              </Button>
              <Button 
                size="extra-small" 
                type="primary" 
                state="loading"
              />
              <Button 
                size="extra-small" 
                type="primary" 
                state="disabled"
                leadingIcon={<AlarmIcon size={14} />}
              >
                Button w/ leading icon
              </Button>
            </div>
          </div>

          {/* Secondary Extra Small */}
          <div style={{ marginBottom: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '400', marginBottom: '8px', color: '#6a6a6a' }}>
              Secondary
            </h4>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Button 
                size="extra-small" 
                type="secondary" 
                leadingIcon={<AlarmIcon size={14} />}
              >
                Button w/ leading icon
              </Button>
              <Button 
                size="extra-small" 
                type="secondary" 
                state="hover"
                leadingIcon={<AlarmIcon size={14} />}
              >
                Button w/ leading icon
              </Button>
              <Button 
                size="extra-small" 
                type="secondary" 
                state="clicked"
                leadingIcon={<AlarmIcon size={14} />}
              >
                Button w/ leading icon
              </Button>
              <Button 
                size="extra-small" 
                type="secondary" 
                state="focused"
                leadingIcon={<AlarmIcon size={14} />}
              >
                Button w/ leading icon
              </Button>
              <Button 
                size="extra-small" 
                type="secondary" 
                state="loading"
              />
              <Button 
                size="extra-small" 
                type="secondary" 
                state="disabled"
                leadingIcon={<AlarmIcon size={14} />}
              >
                Button w/ leading icon
              </Button>
            </div>
          </div>

          {/* Ghost Extra Small */}
          <div style={{ marginBottom: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '400', marginBottom: '8px', color: '#6a6a6a' }}>
              Ghost
            </h4>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Button 
                size="extra-small" 
                type="ghost" 
                leadingIcon={<AlarmIcon size={14} />}
              >
                Button w/ leading icon
              </Button>
              <Button 
                size="extra-small" 
                type="ghost" 
                state="hover"
                leadingIcon={<AlarmIcon size={14} />}
              >
                Button w/ leading icon
              </Button>
              <Button 
                size="extra-small" 
                type="ghost" 
                state="clicked"
                leadingIcon={<AlarmIcon size={14} />}
              >
                Button w/ leading icon
              </Button>
              <Button 
                size="extra-small" 
                type="ghost" 
                state="focused"
                leadingIcon={<AlarmIcon size={14} />}
              >
                Button w/ leading icon
              </Button>
              <Button 
                size="extra-small" 
                type="ghost" 
                state="loading"
              />
              <Button 
                size="extra-small" 
                type="ghost" 
                state="disabled"
                leadingIcon={<AlarmIcon size={14} />}
              >
                Button w/ leading icon
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all updated Figma-accurate button designs with exact specifications for colors, backgrounds, borders, shadows, states, and typography. This showcase demonstrates all button variants in their correct sizes and states as specified in the latest Figma design system.',
      },
    },
  },
};

export const InteractiveButtonStates: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '24px', 
      padding: '24px' 
    }}>
      <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>
        Interactive Button States
      </h2>
      <p style={{ fontSize: '16px', color: '#6a6a6a', marginBottom: '24px' }}>
        Hover, click, and interact with these buttons to see the updated state transitions
      </p>
      
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <Button 
          type="primary" 
          leadingIcon={<AlarmIcon size={18} />}
          onClick={() => alert('Primary button clicked!')}
        >
          Primary Button
        </Button>
        <Button 
          type="secondary" 
          leadingIcon={<AlarmIcon size={18} />}
          onClick={() => alert('Secondary button clicked!')}
        >
          Secondary Button
        </Button>
        <Button 
          type="ghost" 
          leadingIcon={<AlarmIcon size={18} />}
          onClick={() => alert('Ghost button clicked!')}
        >
          Ghost Button
        </Button>
        <Button 
          type="error" 
          leadingIcon={<CloseCircleIcon size={18} />}
          onClick={() => alert('Error button clicked!')}
        >
          Error Button
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive examples of all button types showing the updated hover, focus, and click states with proper transitions and feedback.',
      },
    },
  },
};
