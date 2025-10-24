import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from './Tab';
import React from 'react';

const meta: Meta<typeof Tab> = {
  title: 'Atoms/Tab/Figma Showcase',
  component: Tab,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Comprehensive showcase of all Tab variants matching the Figma design specifications. This includes all combinations of sizes (small, default, large), types (default, secondary, contained, dark-contained), and states (default, hover, active, disabled).',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tab>;

/**
 * Complete showcase of all tab variants in a grid layout matching the Figma design.
 * This displays every combination of size, type, and state.
 */
export const AllVariantsGrid: Story = {
  render: () => (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(4, auto)',
      gap: '32px 48px',
      padding: '40px',
      background: '#F9FAFB'
    }}>
      {/* Row 1: Default type - Small size */}
      <Tab size="small" type="default" state="default" badge="7" />
      <Tab size="small" type="default" state="hover" badge="7" />
      <Tab size="small" type="default" state="active" badge="7" />
      <Tab size="small" type="default" state="disabled" badge="7" />

      {/* Row 2: Default type - Default size */}
      <Tab size="default" type="default" state="default" badge="7" />
      <Tab size="default" type="default" state="hover" badge="7" />
      <Tab size="default" type="default" state="active" badge="7" />
      <Tab size="default" type="default" state="disabled" badge="7" />

      {/* Row 3: Default type - Large size */}
      <Tab size="large" type="default" state="default" badge="7" />
      <Tab size="large" type="default" state="hover" badge="7" />
      <Tab size="large" type="default" state="active" badge="7" />
      <Tab size="large" type="default" state="disabled" badge="7" />

      {/* Row 4: Secondary type - Small size */}
      <Tab size="small" type="secondary" state="default" badge="7" />
      <Tab size="small" type="secondary" state="hover" badge="7" />
      <Tab size="small" type="secondary" state="active" badge="7" />
      <Tab size="small" type="secondary" state="disabled" badge="7" />

      {/* Row 5: Secondary type - Default size */}
      <Tab size="default" type="secondary" state="default" badge="7" />
      <Tab size="default" type="secondary" state="hover" badge="7" />
      <Tab size="default" type="secondary" state="active" badge="7" />
      <Tab size="default" type="secondary" state="disabled" badge="7" />

      {/* Row 6: Secondary type - Large size */}
      <Tab size="large" type="secondary" state="default" badge="7" />
      <Tab size="large" type="secondary" state="hover" badge="7" />
      <Tab size="large" type="secondary" state="active" badge="7" />
      <Tab size="large" type="secondary" state="disabled" badge="7" />
    </div>
  ),
};

/**
 * Showcase of contained tabs on a blue background (matching Figma).
 * These are button-style tabs with filled backgrounds.
 */
export const ContainedVariantsGrid: Story = {
  render: () => (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(4, auto)',
      gap: '32px 48px',
      padding: '40px',
      background: '#2F42BD'
    }}>
      {/* Row 1: Contained - Small size */}
      <Tab size="small" type="contained" state="default" badge="7" />
      <Tab size="small" type="contained" state="hover" badge="7" />
      <Tab size="small" type="contained" state="active" badge="7" />
      <Tab size="small" type="contained" state="disabled" badge="7" />

      {/* Row 2: Contained - Default size */}
      <Tab size="default" type="contained" state="default" badge="7" />
      <Tab size="default" type="contained" state="hover" badge="7" />
      <Tab size="default" type="contained" state="active" badge="7" />
      <Tab size="default" type="contained" state="disabled" badge="7" />

      {/* Row 3: Contained - Large size */}
      <Tab size="large" type="contained" state="default" badge="7" />
      <Tab size="large" type="contained" state="hover" badge="7" />
      <Tab size="large" type="contained" state="active" badge="7" />
      <Tab size="large" type="contained" state="disabled" badge="7" />
    </div>
  ),
};

/**
 * Showcase of dark-contained tabs on a seafoam background (matching Figma).
 * These are button-style tabs optimized for dark backgrounds.
 */
export const DarkContainedVariantsGrid: Story = {
  render: () => (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(4, auto)',
      gap: '32px 48px',
      padding: '40px',
      background: '#8BBF9F'
    }}>
      {/* Row 1: Dark Contained - Small size */}
      <Tab size="small" type="dark-contained" state="default" badge="7" />
      <Tab size="small" type="dark-contained" state="hover" badge="7" />
      <Tab size="small" type="dark-contained" state="active" badge="7" />
      <Tab size="small" type="dark-contained" state="disabled" badge="7" />

      {/* Row 2: Dark Contained - Default size */}
      <Tab size="default" type="dark-contained" state="default" badge="7" />
      <Tab size="default" type="dark-contained" state="hover" badge="7" />
      <Tab size="default" type="dark-contained" state="active" badge="7" />
      <Tab size="default" type="dark-contained" state="disabled" badge="7" />

      {/* Row 3: Dark Contained - Large size */}
      <Tab size="large" type="dark-contained" state="default" badge="7" />
      <Tab size="large" type="dark-contained" state="hover" badge="7" />
      <Tab size="large" type="dark-contained" state="active" badge="7" />
      <Tab size="large" type="dark-contained" state="disabled" badge="7" />
    </div>
  ),
};

/**
 * Complete showcase matching the exact Figma screenshot layout.
 * This combines all variants in one comprehensive view.
 */
export const CompleteFigmaShowcase: Story = {
  render: () => (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      gap: '48px',
      padding: '40px',
      background: '#FFFFFF'
    }}>
      {/* Traditional Tabs Section */}
      <div>
        <h2 style={{ 
          fontFamily: 'Archivo',
          fontSize: '24px',
          fontWeight: '700',
          marginBottom: '24px',
          color: '#1C1C1C'
        }}>
          Traditional Tabs
        </h2>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(4, auto)',
          gap: '24px 32px',
          padding: '32px',
          background: '#F9FAFB',
          borderRadius: '8px'
        }}>
          {/* Default type - All sizes and states */}
          <Tab size="small" type="default" state="default" badge="7" />
          <Tab size="small" type="default" state="hover" badge="7" />
          <Tab size="small" type="default" state="active" badge="7" />
          <Tab size="small" type="default" state="disabled" badge="7" />
          
          <Tab size="default" type="default" state="default" badge="7" />
          <Tab size="default" type="default" state="hover" badge="7" />
          <Tab size="default" type="default" state="active" badge="7" />
          <Tab size="default" type="default" state="disabled" badge="7" />
          
          <Tab size="large" type="default" state="default" badge="7" />
          <Tab size="large" type="default" state="hover" badge="7" />
          <Tab size="large" type="default" state="active" badge="7" />
          <Tab size="large" type="default" state="disabled" badge="7" />
          
          {/* Secondary type - All sizes and states */}
          <Tab size="small" type="secondary" state="default" badge="7" />
          <Tab size="small" type="secondary" state="hover" badge="7" />
          <Tab size="small" type="secondary" state="active" badge="7" />
          <Tab size="small" type="secondary" state="disabled" badge="7" />
          
          <Tab size="default" type="secondary" state="default" badge="7" />
          <Tab size="default" type="secondary" state="hover" badge="7" />
          <Tab size="default" type="secondary" state="active" badge="7" />
          <Tab size="default" type="secondary" state="disabled" badge="7" />
          
          <Tab size="large" type="secondary" state="default" badge="7" />
          <Tab size="large" type="secondary" state="hover" badge="7" />
          <Tab size="large" type="secondary" state="active" badge="7" />
          <Tab size="large" type="secondary" state="disabled" badge="7" />
        </div>
      </div>

      {/* Contained Tabs Section */}
      <div>
        <h2 style={{ 
          fontFamily: 'Archivo',
          fontSize: '24px',
          fontWeight: '700',
          marginBottom: '24px',
          color: '#1C1C1C'
        }}>
          Contained Tabs
        </h2>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(4, auto)',
          gap: '24px 32px',
          padding: '32px',
          background: '#2F42BD',
          borderRadius: '8px'
        }}>
          <Tab size="small" type="contained" state="default" badge="7" />
          <Tab size="small" type="contained" state="hover" badge="7" />
          <Tab size="small" type="contained" state="active" badge="7" />
          <Tab size="small" type="contained" state="disabled" badge="7" />
          
          <Tab size="default" type="contained" state="default" badge="7" />
          <Tab size="default" type="contained" state="hover" badge="7" />
          <Tab size="default" type="contained" state="active" badge="7" />
          <Tab size="default" type="contained" state="disabled" badge="7" />
          
          <Tab size="large" type="contained" state="default" badge="7" />
          <Tab size="large" type="contained" state="hover" badge="7" />
          <Tab size="large" type="contained" state="active" badge="7" />
          <Tab size="large" type="contained" state="disabled" badge="7" />
        </div>
      </div>

      {/* Dark Contained Tabs Section */}
      <div>
        <h2 style={{ 
          fontFamily: 'Archivo',
          fontSize: '24px',
          fontWeight: '700',
          marginBottom: '24px',
          color: '#1C1C1C'
        }}>
          Dark Contained Tabs
        </h2>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(4, auto)',
          gap: '24px 32px',
          padding: '32px',
          background: '#8BBF9F',
          borderRadius: '8px'
        }}>
          <Tab size="small" type="dark-contained" state="default" badge="7" />
          <Tab size="small" type="dark-contained" state="hover" badge="7" />
          <Tab size="small" type="dark-contained" state="active" badge="7" />
          <Tab size="small" type="dark-contained" state="disabled" badge="7" />
          
          <Tab size="default" type="dark-contained" state="default" badge="7" />
          <Tab size="default" type="dark-contained" state="hover" badge="7" />
          <Tab size="default" type="dark-contained" state="active" badge="7" />
          <Tab size="default" type="dark-contained" state="disabled" badge="7" />
          
          <Tab size="large" type="dark-contained" state="default" badge="7" />
          <Tab size="large" type="dark-contained" state="hover" badge="7" />
          <Tab size="large" type="dark-contained" state="active" badge="7" />
          <Tab size="large" type="dark-contained" state="disabled" badge="7" />
        </div>
      </div>
    </div>
  ),
};

/**
 * Size comparison showcase - displays all three sizes side by side
 */
export const SizeComparison: Story = {
  render: () => (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      padding: '40px'
    }}>
      <div>
        <h3 style={{ fontFamily: 'Archivo', fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
          Small (16px icon, 14px text)
        </h3>
        <Tab size="small" type="default" badge="7" />
      </div>
      <div>
        <h3 style={{ fontFamily: 'Archivo', fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
          Default (18px icon, 16px text)
        </h3>
        <Tab size="default" type="default" badge="7" />
      </div>
      <div>
        <h3 style={{ fontFamily: 'Archivo', fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
          Large (22px icon, 18px text)
        </h3>
        <Tab size="large" type="default" badge="7" />
      </div>
    </div>
  ),
};

/**
 * State comparison showcase - displays all states for a single variant
 */
export const StateComparison: Story = {
  render: () => (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      padding: '40px',
      background: '#F9FAFB'
    }}>
      <div>
        <h3 style={{ fontFamily: 'Archivo', fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: '#1C1C1C' }}>
          Default State
        </h3>
        <Tab size="default" type="default" state="default" badge="7" />
      </div>
      <div>
        <h3 style={{ fontFamily: 'Archivo', fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: '#1C1C1C' }}>
          Hover State
        </h3>
        <Tab size="default" type="default" state="hover" badge="7" />
      </div>
      <div>
        <h3 style={{ fontFamily: 'Archivo', fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: '#1C1C1C' }}>
          Active State
        </h3>
        <Tab size="default" type="default" state="active" badge="7" />
      </div>
      <div>
        <h3 style={{ fontFamily: 'Archivo', fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: '#1C1C1C' }}>
          Disabled State
        </h3>
        <Tab size="default" type="default" state="disabled" badge="7" />
      </div>
    </div>
  ),
};
