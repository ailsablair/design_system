import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AccordionGroup } from './AccordionGroup';

const meta = {
  title: 'Atoms/Accordion/AccordionGroup/Showcase',
  component: AccordionGroup,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Comprehensive showcase of all AccordionGroup variants based on Figma designs.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AccordionGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default items (5 items for attached type)
const attachedItems = [
  { id: '1', title: 'This is an accordion section title' },
  { id: '2', title: 'This is an accordion section title' },
  { id: '3', title: 'This is an accordion section title' },
  { id: '4', title: 'This is an accordion section title' },
  { id: '5', title: 'This is an accordion section title' },
];

// Gap items (6 items for gap type)
const gapItems = [
  { id: '1', title: 'This is an accordion section title' },
  { id: '2', title: 'This is an accordion section title' },
  { id: '3', title: 'This is an accordion section title' },
  { id: '4', title: 'This is an accordion section title' },
  { id: '5', title: 'This is an accordion section title' },
  { id: '6', title: 'This is an accordion section title' },
];

// ===== ALL VARIANTS SHOWCASE =====

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '64px', maxWidth: '1280px' }}>
      {/* DEFAULT SIZE */}
      <section>
        <h2 style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '32px', 
          fontWeight: 600,
          marginBottom: '32px',
          color: '#1C1C1C'
        }}>
          Default Size
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {/* Attached */}
          <div>
            <h3 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '24px', 
              fontWeight: 500,
              marginBottom: '16px',
              color: '#72747D'
            }}>
              Attached
            </h3>
            <AccordionGroup size="default" type="attached" items={attachedItems} />
          </div>

          {/* Gap */}
          <div>
            <h3 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '24px', 
              fontWeight: 500,
              marginBottom: '16px',
              color: '#72747D'
            }}>
              Gap
            </h3>
            <AccordionGroup size="default" type="gap" items={gapItems} />
          </div>
        </div>
      </section>

      {/* LARGE SIZE */}
      <section>
        <h2 style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '32px', 
          fontWeight: 600,
          marginBottom: '32px',
          color: '#1C1C1C'
        }}>
          Large Size
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {/* Attached */}
          <div>
            <h3 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '24px', 
              fontWeight: 500,
              marginBottom: '16px',
              color: '#72747D'
            }}>
              Attached
            </h3>
            <AccordionGroup size="large" type="attached" items={attachedItems} />
          </div>

          {/* Gap */}
          <div>
            <h3 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '24px', 
              fontWeight: 500,
              marginBottom: '16px',
              color: '#72747D'
            }}>
              Gap
            </h3>
            <AccordionGroup size="large" type="gap" items={gapItems} />
          </div>
        </div>
      </section>

      {/* SMALL SIZE */}
      <section>
        <h2 style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '32px', 
          fontWeight: 600,
          marginBottom: '32px',
          color: '#1C1C1C'
        }}>
          Small Size
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {/* Attached */}
          <div>
            <h3 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '24px', 
              fontWeight: 500,
              marginBottom: '16px',
              color: '#72747D'
            }}>
              Attached
            </h3>
            <AccordionGroup size="small" type="attached" items={attachedItems} />
          </div>

          {/* Gap */}
          <div>
            <h3 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '24px', 
              fontWeight: 500,
              marginBottom: '16px',
              color: '#72747D'
            }}>
              Gap
            </h3>
            <AccordionGroup size="small" type="gap" items={gapItems} />
          </div>
        </div>
      </section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all accordion group variants matching the Figma design specifications.',
      },
    },
  },
};

// ===== RESPONSIVE SHOWCASE =====

export const ResponsiveLayout: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px',
      maxWidth: '1280px'
    }}>
      <div>
        <h3 style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '20px', 
          fontWeight: 500,
          marginBottom: '16px',
          color: '#1C1C1C'
        }}>
          Small - Attached
        </h3>
        <AccordionGroup size="small" type="attached" items={attachedItems.slice(0, 3)} />
      </div>

      <div>
        <h3 style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '20px', 
          fontWeight: 500,
          marginBottom: '16px',
          color: '#1C1C1C'
        }}>
          Default - Attached
        </h3>
        <AccordionGroup size="default" type="attached" items={attachedItems.slice(0, 3)} />
      </div>

      <div>
        <h3 style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '20px', 
          fontWeight: 500,
          marginBottom: '16px',
          color: '#1C1C1C'
        }}>
          Large - Attached
        </h3>
        <AccordionGroup size="large" type="attached" items={attachedItems.slice(0, 3)} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Responsive grid layout demonstrating how accordion groups adapt to different container sizes.',
      },
    },
  },
};

// ===== COMPARISON VIEW =====

export const AttachedVsGap: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: '1fr 1fr',
      gap: '48px',
      maxWidth: '1280px'
    }}>
      <div>
        <h3 style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '24px', 
          fontWeight: 600,
          marginBottom: '24px',
          color: '#1C1C1C',
          textAlign: 'center'
        }}>
          Attached Type
        </h3>
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '16px', 
          marginBottom: '24px',
          color: '#72747D',
          textAlign: 'center'
        }}>
          Seamlessly connected borders
        </p>
        <AccordionGroup size="default" type="attached" items={attachedItems} />
      </div>

      <div>
        <h3 style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '24px', 
          fontWeight: 600,
          marginBottom: '24px',
          color: '#1C1C1C',
          textAlign: 'center'
        }}>
          Gap Type
        </h3>
        <p style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '16px', 
          marginBottom: '24px',
          color: '#72747D',
          textAlign: 'center'
        }}>
          Standalone with spacing
        </p>
        <AccordionGroup size="default" type="gap" items={gapItems} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Side-by-side comparison of attached vs gap types to highlight the visual differences.',
      },
    },
  },
};

// ===== PRACTICAL USE CASE: SETTINGS MENU =====

export const SettingsMenu: Story = {
  render: () => (
    <div style={{ maxWidth: '800px' }}>
      <h2 style={{ 
        fontFamily: 'Archivo, sans-serif', 
        fontSize: '32px', 
        fontWeight: 600,
        marginBottom: '8px',
        color: '#191E3C'
      }}>
        Application Settings
      </h2>
      <p style={{ 
        fontFamily: 'Roboto Flex, sans-serif', 
        fontSize: '16px', 
        marginBottom: '32px',
        color: '#72747D'
      }}>
        Configure your application preferences
      </p>
      
      <AccordionGroup 
        size="default" 
        type="attached" 
        items={[
          { id: '1', title: 'General Settings' },
          { id: '2', title: 'Privacy & Security' },
          { id: '3', title: 'Notifications' },
          { id: '4', title: 'Display & Accessibility' },
          { id: '5', title: 'Advanced Options' },
        ]} 
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Practical example: Settings menu using attached accordion group for a cohesive interface.',
      },
    },
  },
};

// ===== PRACTICAL USE CASE: FAQ SECTIONS =====

export const FAQSections: Story = {
  render: () => (
    <div style={{ maxWidth: '900px' }}>
      <h2 style={{ 
        fontFamily: 'Archivo, sans-serif', 
        fontSize: '32px', 
        fontWeight: 600,
        marginBottom: '8px',
        color: '#191E3C'
      }}>
        Frequently Asked Questions
      </h2>
      <p style={{ 
        fontFamily: 'Roboto Flex, sans-serif', 
        fontSize: '16px', 
        marginBottom: '32px',
        color: '#72747D'
      }}>
        Find answers to common questions
      </p>
      
      <AccordionGroup 
        size="large" 
        type="gap" 
        items={[
          { id: '1', title: 'How do I create a new project?' },
          { id: '2', title: 'What are the system requirements?' },
          { id: '3', title: 'How can I reset my password?' },
          { id: '4', title: 'Where can I find documentation?' },
          { id: '5', title: 'How do I contact support?' },
        ]} 
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Practical example: FAQ sections using gap accordion group for visual separation.',
      },
    },
  },
};

// ===== ACCESSIBILITY DEMONSTRATION =====

export const AccessibilityFeatures: Story = {
  render: () => (
    <div style={{ maxWidth: '800px' }}>
      <div style={{ 
        padding: '24px', 
        background: '#F3F4F6', 
        borderRadius: '12px',
        marginBottom: '32px'
      }}>
        <h3 style={{ 
          fontFamily: 'Archivo, sans-serif', 
          fontSize: '20px', 
          fontWeight: 600,
          marginBottom: '16px',
          color: '#191E3C'
        }}>
          ♿ Accessibility Features
        </h3>
        <ul style={{ 
          fontFamily: 'Roboto Flex, sans-serif', 
          fontSize: '16px',
          color: '#374151',
          lineHeight: '1.6',
          margin: 0,
          paddingLeft: '24px'
        }}>
          <li>Keyboard navigation with Tab and Enter</li>
          <li>Focus indicators for keyboard users</li>
          <li>ARIA expanded attributes</li>
          <li>Reduced motion support</li>
          <li>High contrast mode support</li>
          <li>Screen reader friendly</li>
        </ul>
      </div>

      <AccordionGroup 
        size="default" 
        type="attached" 
        items={attachedItems.slice(0, 4)} 
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of accessibility features built into the accordion group component.',
      },
    },
  },
};
