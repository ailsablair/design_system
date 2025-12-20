import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { ComponentTree } from './design-system/ComponentTree';

const meta: Meta = {
  title: 'Design System/Component Tree',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# UI Component Tree

A hierarchical map of the entire Echo Design System. This tree shows all current components, foundations, and documentation pages, along with their variants and stories.

### 📋 Maintenance
When adding new components, variants, or stories to the design system, please ensure they are added to this tree to maintain an accurate map for all developers.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const treeData = [
  {
    name: 'Design System (Documentation)',
    type: 'category',
    children: [
      { name: 'Overview', type: 'story', link: './?path=/story/design-system-overview--overview' },
      { name: 'Design Principles', type: 'story', link: './?path=/story/design-system-design-principles--design-principles' },
      { name: 'Changelog', type: 'story', link: './?path=/story/design-system-changelog--changelog' },
      { name: 'Usage Guide', type: 'story', link: './?path=/story/design-system-usage-guide--usage-guide' },
      { name: 'Color Accessibility Guide', type: 'story', link: './?path=/story/design-system-color-accessibility-guide--color-accessibility-guide' },
      { name: 'Logo Usage Guide', type: 'story', link: './?path=/story/design-system-logo-usage-guide--logo-usage-guide' },
      { name: 'Components Catalog', type: 'story', link: './?path=/story/design-system-components-catalog--components-catalog' },
      { name: 'Component Tree', type: 'story', link: './?path=/story/design-system-component-tree--map' },
      { name: 'Echo MUI Guide', type: 'story', link: './?path=/story/design-system-echo-mui-guide--guide' },
    ]
  },
  {
    name: 'Foundations',
    type: 'category',
    children: [
      { name: 'Colors', type: 'story', link: './?path=/story/foundations-colors--colors' },
      { name: 'Design Tokens', type: 'story', link: './?path=/story/foundations-design-tokens--design-tokens' },
      { name: 'Icons', type: 'story', link: './?path=/story/foundations-icons--icons' },
      { name: 'Logo', type: 'story', link: './?path=/story/foundations-logo--logo' },
      { name: 'MUI Icon Guide', type: 'story', link: './?path=/story/foundations-mui-icon-guide--guide' },
      { name: 'Color Accessibility', type: 'story', link: './?path=/story/foundations-color-accessibility--color-accessibility' },
    ]
  },
  {
    name: 'Atoms',
    type: 'category',
    children: [
      { name: 'Counter', type: 'component', link: './?path=/story/atoms-counter--default' },
      { name: 'DateTime Input', type: 'component', link: './?path=/story/atoms-date-time-input--default' },
      { name: 'Divider', type: 'component', link: './?path=/story/atoms-divider--default' },
      { name: 'Image', type: 'component', link: './?path=/story/atoms-image--default' },
      { name: 'Input', type: 'component', link: './?path=/story/atoms-input--default' },
      { name: 'Input Numbers', type: 'component', link: './?path=/story/atoms-input-numbers--default' },
      { name: 'Textarea', type: 'component', link: './?path=/story/atoms-textarea--default' },
      { name: 'Tile', type: 'component', link: './?path=/story/atoms-tile--default' },
      {
        name: 'Accordion',
        type: 'component',
        children: [
          { name: 'Standard', type: 'story', link: './?path=/story/atoms-accordion--default' },
          { name: 'Figma Variants', type: 'story', link: './?path=/story/atoms-accordion-accordion-figma--default' },
          { name: 'Other Variants', type: 'story', link: './?path=/story/atoms-accordion-other--default' },
        ]
      },
    ]
  },
  {
    name: 'Building Blocks',
    type: 'category',
    children: [
      { name: 'Alert', type: 'component', link: './?path=/story/atoms-building-blocks-alert--default' },
      { name: 'Badge', type: 'component', link: './?path=/story/atoms-building-blocks-badge--default' },
      { name: 'File Type Icon', type: 'component', link: './?path=/story/atoms-building-blocks-file-type-icon--default' },
      { name: 'Progress Bar', type: 'component', link: './?path=/story/atoms-building-blocks-progress-bar--default' },
      { name: 'Progress Circle', type: 'component', link: './?path=/story/atoms-building-blocks-progress-circle--default' },
      { name: 'Slider', type: 'component', link: './?path=/story/atoms-building-blocks-slider--default' },
    ]
  },
  {
    name: 'Molecules',
    type: 'category',
    children: [
      { name: 'Action Bar', type: 'component', link: './?path=/story/molecules-action-bar--default' },
      { name: 'Menu', type: 'component', link: './?path=/story/molecules-menu--default' },
      { name: 'Data Table', type: 'component', link: './?path=/story/molecules-data-table--default' },
    ]
  },
  {
    name: 'Showcases & Showroom',
    type: 'category',
    children: [
      { name: 'Design System Showcase', type: 'story', link: './?path=/story/design-system-figma-showcase-files-design-system-showcase--all-components' },
      { name: 'Effects Showcase', type: 'story', link: './?path=/story/design-system-figma-showcase-files-effects-showcase--all-effects' },
      { name: 'Avatar Extended', type: 'story', link: './?path=/story/design-system-figma-showcase-files-avatar-extended-figma-showcase--default' },
      { name: 'Card Extended', type: 'story', link: './?path=/story/design-system-figma-showcase-files-card-extended-figma-showcase--default' },
      { name: 'DataTable Figma Showcase', type: 'story', link: './?path=/story/molecules-data-table-figma-showcase--default' },
    ]
  }
];

export const Map: Story = {
  render: () => (
    <main style={{ padding: '40px', background: 'var(--neutral-gray-gray-50)', minHeight: '100vh' }}>
      <ComponentTree data={treeData} />
      
      <div style={{ 
        maxWidth: '800px', 
        margin: '40px auto 0', 
        padding: '24px', 
        backgroundColor: 'var(--primary-blue-blue-50)', 
        borderRadius: '8px',
        border: '1px solid var(--primary-blue-blue-200)',
        fontFamily: 'var(--font-family-base)'
      }}>
        <h3 style={{ marginTop: 0, color: 'var(--primary-blue-blue-800)' }}>How to add new components</h3>
        <p style={{ color: 'var(--primary-blue-blue-700)', fontSize: '14px' }}>
          To keep this map up to date, please edit <code>src/stories/08-ComponentTree.stories.tsx</code> when you:
        </p>
        <ul style={{ color: 'var(--primary-blue-blue-700)', fontSize: '14px', paddingLeft: '20px' }}>
          <li>Create a new component (Atom, Molecule, etc.)</li>
          <li>Add a significant new variant or story to an existing component</li>
          <li>Create new documentation pages</li>
        </ul>
      </div>
    </main>
  )
};
