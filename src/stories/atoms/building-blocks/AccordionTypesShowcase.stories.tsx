import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import { AccordionGroup } from './AccordionGroup';

const meta: Meta<typeof Accordion> = {
  title: 'Atoms/Accordion/Types Showcase',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Accordion Types - Complete Showcase

This showcase demonstrates all accordion types with their various configurations:

## Types Available
- **Simple**: Basic accordion with status icon and bell icon
- **Decorative**: Icon with decorative circular frame
- **Number**: Numbered accordion items for sequential content
- **Label**: Accordion with label/tag components
- **No-stroke**: Clean accordion without visual borders

## Features Showcased
- All size variants (small, default, large)
- Both icon styles (chevron, plus)
- All interactive states (default, hover, selected)
- Responsive design with exact Figma specifications
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const SimpleTypeShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
      <h2 style={{ fontFamily: 'Archivo, sans-serif', fontSize: '24px', fontWeight: 500, color: '#191E3C' }}>
        Simple Type Accordions
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Accordion 
          type="simple" 
          size="small" 
          title="Small Simple Accordion" 
          description="Small size with 18px typography"
          showStatusIcon 
          showIcon 
        />
        <Accordion 
          type="simple" 
          size="default" 
          title="Default Simple Accordion" 
          description="Default size with 19px typography"
          showStatusIcon 
          showIcon 
        />
        <Accordion 
          type="simple" 
          size="large" 
          title="Large Simple Accordion" 
          description="Large size with 24px typography"
          showStatusIcon 
          showIcon 
        />
      </div>
    </div>
  ),
};

export const DecorativeTypeShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
      <h2 style={{ fontFamily: 'Archivo, sans-serif', fontSize: '24px', fontWeight: 500, color: '#191E3C' }}>
        Decorative Type Accordions
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Accordion 
          type="decorative" 
          size="small" 
          title="Small Decorative Accordion" 
        />
        <Accordion 
          type="decorative" 
          size="default" 
          title="Default Decorative Accordion" 
        />
        <Accordion 
          type="decorative" 
          size="large" 
          title="Large Decorative Accordion" 
        />
      </div>
    </div>
  ),
};

export const NumberTypeShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
      <h2 style={{ fontFamily: 'Archivo, sans-serif', fontSize: '24px', fontWeight: 500, color: '#191E3C' }}>
        Number Type Accordions
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Accordion 
          type="number" 
          size="small" 
          title="Small Number Accordion" 
          number="01"
        />
        <Accordion 
          type="number" 
          size="default" 
          title="Default Number Accordion" 
          number="02"
        />
        <Accordion 
          type="number" 
          size="large" 
          title="Large Number Accordion" 
          number="03"
        />
      </div>
    </div>
  ),
};

export const LabelTypeShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
      <h2 style={{ fontFamily: 'Archivo, sans-serif', fontSize: '24px', fontWeight: 500, color: '#191E3C' }}>
        Label Type Accordions
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Accordion 
          type="label" 
          size="small" 
          title="Small Label Accordion" 
          label={<span style={{ padding: '4px 8px', backgroundColor: '#F4FCFF', color: '#0BA7EA', borderRadius: '4px', fontSize: '12px' }}>New</span>}
        />
        <Accordion 
          type="label" 
          size="default" 
          title="Default Label Accordion" 
          label={<span style={{ padding: '4px 8px', backgroundColor: '#F4FCFF', color: '#0BA7EA', borderRadius: '4px', fontSize: '14px' }}>Featured</span>}
        />
        <Accordion 
          type="label" 
          size="large" 
          title="Large Label Accordion" 
          label={<span style={{ padding: '6px 12px', backgroundColor: '#F4FCFF', color: '#0BA7EA', borderRadius: '4px', fontSize: '16px' }}>Premium</span>}
        />
      </div>
    </div>
  ),
};

export const NoStrokeTypeShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
      <h2 style={{ fontFamily: 'Archivo, sans-serif', fontSize: '24px', fontWeight: 500, color: '#191E3C' }}>
        No-Stroke Type Accordions
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Accordion 
          type="no-stroke" 
          size="small" 
          title="Small No-Stroke Accordion" 
          showIcon 
        />
        <Accordion 
          type="no-stroke" 
          size="default" 
          title="Default No-Stroke Accordion" 
          showIcon 
        />
        <Accordion 
          type="no-stroke" 
          size="large" 
          title="Large No-Stroke Accordion" 
          showIcon 
        />
      </div>
    </div>
  ),
};

export const IconStyleComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
      <h2 style={{ fontFamily: 'Archivo, sans-serif', fontSize: '24px', fontWeight: 500, color: '#191E3C' }}>
        Icon Style Comparison
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <h3 style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', fontWeight: 500, color: '#6D7280', marginBottom: '8px' }}>
            Chevron Icons
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Accordion 
              type="simple" 
              size="default" 
              title="Chevron Closed" 
              openIcon="default (chevron)"
              isOpen={false}
              showStatusIcon 
              showIcon 
            />
            <Accordion 
              type="simple" 
              size="default" 
              title="Chevron Open" 
              openIcon="default (chevron)"
              isOpen={true}
              showStatusIcon 
              showIcon 
            />
          </div>
        </div>
        
        <div>
          <h3 style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', fontWeight: 500, color: '#6D7280', marginBottom: '8px' }}>
            Plus/Minus Icons
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Accordion 
              type="simple" 
              size="default" 
              title="Plus Closed" 
              openIcon="plus"
              isOpen={false}
              showStatusIcon 
              showIcon 
            />
            <Accordion 
              type="simple" 
              size="default" 
              title="Minus Open" 
              openIcon="plus"
              isOpen={true}
              showStatusIcon 
              showIcon 
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const InteractiveStatesShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
      <h2 style={{ fontFamily: 'Archivo, sans-serif', fontSize: '24px', fontWeight: 500, color: '#191E3C' }}>
        Interactive States
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Accordion 
          type="simple" 
          size="default" 
          title="Default State" 
          description="Standard appearance"
          interactiveState="default"
          showStatusIcon 
          showIcon 
        />
        <Accordion 
          type="simple" 
          size="default" 
          title="Hover State" 
          description="Appears as if being hovered"
          interactiveState="hover"
          showStatusIcon 
          showIcon 
        />
        <Accordion 
          type="simple" 
          size="default" 
          title="Selected State" 
          description="Active/selected appearance"
          interactiveState="selected"
          showStatusIcon 
          showIcon 
        />
      </div>
    </div>
  ),
};

export const CompleteGroupShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '800px' }}>
      <h2 style={{ fontFamily: 'Archivo, sans-serif', fontSize: '24px', fontWeight: 500, color: '#191E3C' }}>
        Complete Accordion Group Examples
      </h2>
      
      {/* Mixed Types Group */}
      <div>
        <h3 style={{ fontFamily: 'Archivo, sans-serif', fontSize: '19px', fontWeight: 500, color: '#191E3C', marginBottom: '16px' }}>
          Mixed Types Group
        </h3>
        <AccordionGroup
          accordions={[
            {
              type: 'number',
              size: 'default',
              title: 'Step 1: Personal Information',
              number: '01',
              content: 'Enter your personal details and contact information.',
            },
            {
              type: 'number',
              size: 'default',
              title: 'Step 2: Company Details',
              number: '02',
              content: 'Provide information about your company and business.',
            },
            {
              type: 'number',
              size: 'default',
              title: 'Step 3: Preferences',
              number: '03',
              content: 'Set your preferences and notification settings.',
            },
          ]}
          allowMultiple={false}
          defaultOpenIndices={[0]}
          spacing="medium"
        />
      </div>

      {/* Simple Types Group */}
      <div>
        <h3 style={{ fontFamily: 'Archivo, sans-serif', fontSize: '19px', fontWeight: 500, color: '#191E3C', marginBottom: '16px' }}>
          Simple Types Group
        </h3>
        <AccordionGroup
          accordions={[
            {
              type: 'simple',
              size: 'default',
              title: 'General Settings',
              description: 'Basic configuration options',
              content: 'Configure general application settings and preferences.',
              showStatusIcon: true,
              statusIconType: 'complete',
            },
            {
              type: 'simple',
              size: 'default',
              title: 'Advanced Settings',
              description: 'Advanced configuration options',
              content: 'Configure advanced features and developer options.',
              showStatusIcon: true,
              statusIconType: 'empty',
            },
            {
              type: 'simple',
              size: 'default',
              title: 'Security Settings',
              description: 'Security and privacy options',
              content: 'Manage your security settings and privacy preferences.',
              showStatusIcon: true,
              statusIconType: 'current',
            },
          ]}
          allowMultiple={true}
          spacing="medium"
          showBorders={true}
        />
      </div>
    </div>
  ),
};
