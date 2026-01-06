import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { BrandPortal } from '../components/BrandPortal';
import type { BrandCardData } from '../components/BrandPortal';

const meta: Meta = {
  title: 'Design System/Brand Portal',
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
  },
  tags: ['autodocs'],
};

/**
 * # Brand Portal
 *
 * The Brand Portal is a showcase of white-label design systems built with the Echo design system.
 * It displays active brand implementations and provides options for adding new design systems.
 *
 * ## Design System Integration
 * This page uses:
 * - **Modular Components:** Reusable BrandCard, TemplateCard, AddSystemCard, PortalHeader
 * - **Typography Tokens:** 100% token-based text styling
 * - **Spacing Tokens:** All padding/gap using `--spacing-sizing-*` tokens
 * - **Border Radius Tokens:** All border-radius using `--spacing-radius-*` tokens
 * - **Color Tokens:** All colors using design system color variables
 *
 * ## Layout Structure
 * **3-Column Grid Layout:**
 * - Column 1: Echo/Bruce Power Brand Card
 * - Column 2: Canadian Nuclear Labs Brand Card
 * - Column 3: Template Card (top) + Add System Card (bottom) - vertically stacked
 *
 * ## Responsiveness
 * The layout is fully responsive:
 * - **Desktop (≥1400px)**: Fixed header (140px), 3-column grid
 * - **Tablet (768-1399px)**: Fixed header, 2-column wrapping grid, then 1 column
 * - **Mobile (<768px)**: Dynamic header, single column vertical stack
 *
 * ## Accessibility
 * - Proper semantic HTML (header, main, article elements)
 * - ARIA labels for icon elements
 * - Keyboard navigation support for all interactive elements
 * - WCAG AA color contrast compliance
 */

export default meta;
type Story = StoryObj;

// Mock brand data
const ECHO_BRAND: BrandCardData = {
  logoSrc: 'https://api.builder.io/api/v1/image/assets/TEMP/c2e3b24a29f74b726925ca9c7086ae7eda8d30dd?width=434',
  logoAltText: 'ECHO logo',
  clientName: 'Bruce Power',
  year: '2025',
  colors: {
    primary: '#2F42BD',
    secondary: '#0BA7EA',
    tertiary: '#8BBF9F',
    quaternary: '#F9C846',
  },
  typography: {
    primary: 'Archivo',
    secondary: 'Roboto Flex',
  },
  npmCommand: 'npm run tokens.echo',
  showLogoBorder: false,
  onViewClick: () => console.log('View Echo brand'),
};

const CNL_BRAND: BrandCardData = {
  logoSrc: 'https://api.builder.io/api/v1/image/assets/TEMP/222aa5bc80e2376f48253def222dcec8ca1d1db2?width=434',
  logoAltText: 'Canadian Nuclear Labs logo',
  clientName: 'Canadian Nuclear Labs',
  year: '2026',
  colors: {
    primary: '#304047',
    secondary: '#4780D6',
    tertiary: '#00B2EB',
    quaternary: '#9EC738',
  },
  typography: {
    primary: 'Ginger Pro',
    secondary: 'Calibri',
  },
  npmCommand: 'npm run tokens.<tbd>',
  showLogoBorder: true,
  onViewClick: () => console.log('View CNL brand'),
};

export const BrandPortalStory: Story = {
  render: () => {
    return (
      <BrandPortal
        brands={[ECHO_BRAND, CNL_BRAND]}
        templateCard={{
          title: 'Template',
          subtitle: 'White-label design system',
          bodyText: `A white-label design system is a flexible, reusable framework that enables rapid customization of digital products to align with various brand identities while maintaining design consistency and user experience quality across all design and development work.

All brand assets are customizable, including:
• Logo
• Brand colours
• Typeface(s)
• Icons`,
          onViewClick: () => console.log('View template'),
        }}
        onAddSystemClick={() => console.log('Add new system')}
        onCreateDesignSystemClick={() => console.log('Create new design system')}
      />
    );
  },
};
