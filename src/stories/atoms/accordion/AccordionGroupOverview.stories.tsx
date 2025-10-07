import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AccordionGroup } from './AccordionGroup';

const meta = {
  title: 'Atoms/Accordion/AccordionGroup/Overview',
  component: AccordionGroup,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete overview of all AccordionGroup variants matching the exact Figma design layout.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AccordionGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// Items for attached type (5 items)
const attachedItems = [
  { id: '1', title: 'This is an accordion section title' },
  { id: '2', title: 'This is an accordion section title' },
  { id: '3', title: 'This is an accordion section title' },
  { id: '4', title: 'This is an accordion section title' },
  { id: '5', title: 'This is an accordion section title' },
];

// Items for gap type (6 items)
const gapItems = [
  { id: '1', title: 'This is an accordion section title' },
  { id: '2', title: 'This is an accordion section title' },
  { id: '3', title: 'This is an accordion section title' },
  { id: '4', title: 'This is an accordion section title' },
  { id: '5', title: 'This is an accordion section title' },
  { id: '6', title: 'This is an accordion section title' },
];

// Label component matching Figma design
const Label: React.FC<{ children: React.ReactNode; type?: 'group' | 'row' }> = ({ 
  children, 
  type = 'group' 
}) => (
  <div style={{ 
    display: '-webkit-box',
    width: '100px',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 1,
    overflow: 'hidden',
    color: '#72747D',
    textOverflow: 'ellipsis',
    fontFamily: 'Inter, sans-serif',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '32px',
    height: '32px'
  }}>
    {children}
  </div>
);

// ===== FIGMA LAYOUT OVERVIEW =====

export const FigmaLayout: Story = {
  render: () => (
    <div style={{ 
      position: 'relative',
      width: '1456px',
      minHeight: '3193px',
      background: '#FFF',
      padding: '40px',
      boxSizing: 'border-box'
    }}>
      {/* DEFAULT SIZE GROUP */}
      <div style={{ position: 'absolute', left: '252px', top: '120px' }}>
        <Label type="group">default</Label>
      </div>
      
      {/* DEFAULT - ATTACHED */}
      <div style={{ position: 'absolute', left: '120px', top: '320px' }}>
        <Label type="row">attached</Label>
      </div>
      <div style={{ position: 'absolute', left: '252px', top: '165px', maxWidth: '1280px' }}>
        <AccordionGroup size="default" type="attached" items={attachedItems} />
      </div>

      {/* DEFAULT - GAP */}
      <div style={{ position: 'absolute', left: '120px', top: '727px' }}>
        <Label type="row">gap</Label>
      </div>
      <div style={{ position: 'absolute', left: '252px', top: '576px', maxWidth: '1280px' }}>
        <AccordionGroup size="default" type="gap" items={gapItems} />
      </div>

      {/* LARGE SIZE GROUP */}
      <div style={{ position: 'absolute', left: '252px', top: '997px' }}>
        <Label type="group">large</Label>
      </div>

      {/* LARGE - ATTACHED */}
      <div style={{ position: 'absolute', left: '120px', top: '1268px' }}>
        <Label type="row">attached</Label>
      </div>
      <div style={{ position: 'absolute', left: '252px', top: '1042px', maxWidth: '1280px' }}>
        <AccordionGroup size="large" type="attached" items={attachedItems} />
      </div>

      {/* LARGE - GAP */}
      <div style={{ position: 'absolute', left: '120px', top: '1757px' }}>
        <Label type="row">gap</Label>
      </div>
      <div style={{ position: 'absolute', left: '252px', top: '1531px', maxWidth: '1280px' }}>
        <AccordionGroup size="large" type="gap" items={gapItems} />
      </div>

      {/* SMALL SIZE GROUP */}
      <div style={{ position: 'absolute', left: '252px', top: '2039px' }}>
        <Label type="group">small</Label>
      </div>

      {/* SMALL - ATTACHED */}
      <div style={{ position: 'absolute', left: '120px', top: '2322px' }}>
        <Label type="row">attached</Label>
      </div>
      <div style={{ position: 'absolute', left: '252px', top: '2084px', maxWidth: '1280px' }}>
        <AccordionGroup size="small" type="attached" items={attachedItems} />
      </div>

      {/* SMALL - GAP */}
      <div style={{ position: 'absolute', left: '120px', top: '2823px' }}>
        <Label type="row">gap</Label>
      </div>
      <div style={{ position: 'absolute', left: '252px', top: '2587px', maxWidth: '1280px' }}>
        <AccordionGroup size="small" type="gap" items={gapItems} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete Figma layout overview with all size and type variants, exactly matching the design specifications.',
      },
    },
  },
};

// ===== CLEAN GRID LAYOUT =====

export const CleanGridLayout: Story = {
  render: () => (
    <div style={{ 
      padding: '40px',
      background: '#FAFAFA',
      minHeight: '100vh'
    }}>
      <h1 style={{ 
        fontFamily: 'Archivo, sans-serif', 
        fontSize: '48px', 
        fontWeight: 700,
        marginBottom: '48px',
        color: '#191E3C',
        textAlign: 'center'
      }}>
        Accordion Group Variants
      </h1>

      <div style={{ 
        display: 'grid',
        gap: '80px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* DEFAULT SIZE */}
        <section>
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            marginBottom: '32px'
          }}>
            <div style={{
              background: '#191E3C',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '8px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '24px',
              fontWeight: 600
            }}>
              Default
            </div>
          </div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '48px'
          }}>
            <div>
              <h3 style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '18px', 
                fontWeight: 600,
                marginBottom: '16px',
                color: '#72747D',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Attached
              </h3>
              <AccordionGroup size="default" type="attached" items={attachedItems} />
            </div>
            <div>
              <h3 style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '18px', 
                fontWeight: 600,
                marginBottom: '16px',
                color: '#72747D',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Gap
              </h3>
              <AccordionGroup size="default" type="gap" items={gapItems} />
            </div>
          </div>
        </section>

        {/* LARGE SIZE */}
        <section>
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            marginBottom: '32px'
          }}>
            <div style={{
              background: '#191E3C',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '8px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '24px',
              fontWeight: 600
            }}>
              Large
            </div>
          </div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '48px'
          }}>
            <div>
              <h3 style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '18px', 
                fontWeight: 600,
                marginBottom: '16px',
                color: '#72747D',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Attached
              </h3>
              <AccordionGroup size="large" type="attached" items={attachedItems} />
            </div>
            <div>
              <h3 style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '18px', 
                fontWeight: 600,
                marginBottom: '16px',
                color: '#72747D',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Gap
              </h3>
              <AccordionGroup size="large" type="gap" items={gapItems} />
            </div>
          </div>
        </section>

        {/* SMALL SIZE */}
        <section>
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            marginBottom: '32px'
          }}>
            <div style={{
              background: '#191E3C',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '8px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '24px',
              fontWeight: 600
            }}>
              Small
            </div>
          </div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '48px'
          }}>
            <div>
              <h3 style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '18px', 
                fontWeight: 600,
                marginBottom: '16px',
                color: '#72747D',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Attached
              </h3>
              <AccordionGroup size="small" type="attached" items={attachedItems} />
            </div>
            <div>
              <h3 style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '18px', 
                fontWeight: 600,
                marginBottom: '16px',
                color: '#72747D',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Gap
              </h3>
              <AccordionGroup size="small" type="gap" items={gapItems} />
            </div>
          </div>
        </section>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Clean grid layout showcasing all variants in an organized, easy-to-compare format.',
      },
    },
  },
};

// ===== SIZE COMPARISON =====

export const SizeComparison: Story = {
  render: () => (
    <div style={{ 
      padding: '40px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h2 style={{ 
        fontFamily: 'Archivo, sans-serif', 
        fontSize: '36px', 
        fontWeight: 700,
        marginBottom: '48px',
        color: '#191E3C',
        textAlign: 'center'
      }}>
        Size Comparison - Attached Type
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
        <div>
          <div style={{
            display: 'inline-block',
            background: '#EEF2FF',
            color: '#191E3C',
            padding: '8px 20px',
            borderRadius: '20px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            marginBottom: '16px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Small (18px font)
          </div>
          <AccordionGroup size="small" type="attached" items={attachedItems.slice(0, 3)} />
        </div>

        <div>
          <div style={{
            display: 'inline-block',
            background: '#DBEAFE',
            color: '#191E3C',
            padding: '8px 20px',
            borderRadius: '20px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            marginBottom: '16px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Default (19px font)
          </div>
          <AccordionGroup size="default" type="attached" items={attachedItems.slice(0, 3)} />
        </div>

        <div>
          <div style={{
            display: 'inline-block',
            background: '#BFDBFE',
            color: '#191E3C',
            padding: '8px 20px',
            borderRadius: '20px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            marginBottom: '16px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Large (24px font)
          </div>
          <AccordionGroup size="large" type="attached" items={attachedItems.slice(0, 3)} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Direct size comparison to visualize the differences between small, default, and large sizes.',
      },
    },
  },
};
