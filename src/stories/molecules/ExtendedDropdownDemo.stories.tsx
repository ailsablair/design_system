import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DropdownMenu } from './DropdownMenu';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Examples/Extended Dropdown Menus',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Extended dropdown menus with section headers and sub-section navigation, exactly matching the Figma designs.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Figma Design Implementation - Small Size
export const SmallGroupedMenus: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
      {/* Regular menu with section header */}
      <DropdownMenu 
        items={[
          { label: 'Section name', type: 'section', showLeadingIcon: false },
          { label: 'Menu item', showLeadingIcon: true, showTrailingIcon: true },
          { label: 'Menu item', showLeadingIcon: true, showTrailingIcon: true },
          { label: 'Menu item', showLeadingIcon: true },
        ]} 
        size="small" 
        type="sectioned" 
      />
      
      {/* Sub-section menu with contextual back */}
      <DropdownMenu 
        items={[
          { label: 'Back', sectionName: 'Section name', type: 'sub-section', showLeadingIcon: true },
          { label: 'Submenu item', showLeadingIcon: true, state: 'hover' },
          { label: 'Submenu item', showLeadingIcon: true },
          { label: 'Submenu item', showLeadingIcon: true },
        ]} 
        size="small" 
        type="sectioned-submenu" 
      />
    </div>
  ),
};

// Figma Design Implementation - Default Size
export const DefaultGroupedMenus: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
      {/* Regular menu with section header */}
      <DropdownMenu 
        items={[
          { label: 'Section name', type: 'section', showLeadingIcon: false },
          { label: 'Menu item', showLeadingIcon: true, showTrailingIcon: true },
          { label: 'Menu item', showLeadingIcon: true, showTrailingIcon: true },
          { label: 'Menu item', showLeadingIcon: true },
        ]} 
        size="default" 
        type="sectioned" 
      />
      
      {/* Sub-section menu with contextual back */}
      <DropdownMenu 
        items={[
          { label: 'Back', sectionName: 'Section name', type: 'sub-section', showLeadingIcon: true },
          { label: 'Submenu item', showLeadingIcon: true, state: 'hover' },
          { label: 'Submenu item', showLeadingIcon: true },
          { label: 'Submenu item', showLeadingIcon: true },
        ]} 
        size="default" 
        type="sectioned-submenu" 
      />
    </div>
  ),
};

// Figma Design Implementation - Large Size
export const LargeGroupedMenus: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
      {/* Regular menu with section header */}
      <DropdownMenu 
        items={[
          { label: 'Section name', type: 'section', showLeadingIcon: false },
          { label: 'Menu item', showLeadingIcon: true, showTrailingIcon: true },
          { label: 'Menu item', showLeadingIcon: true, showTrailingIcon: true },
          { label: 'Menu item', showLeadingIcon: true },
        ]} 
        size="large" 
        type="sectioned" 
      />
      
      {/* Sub-section menu with contextual back */}
      <DropdownMenu 
        items={[
          { label: 'Back', sectionName: 'Section name', type: 'sub-section', showLeadingIcon: true },
          { label: 'Submenu item', showLeadingIcon: true, state: 'hover' },
          { label: 'Submenu item', showLeadingIcon: true },
          { label: 'Submenu item', showLeadingIcon: true },
        ]} 
        size="large" 
        type="sectioned-submenu" 
      />
    </div>
  ),
};

// Complete Figma Implementation - All Sizes Side by Side
export const FigmaDesignImplementation: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Small</h4>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
          <DropdownMenu 
            items={[
              { label: 'Section name', type: 'section', showLeadingIcon: false },
              { label: 'Menu item', showLeadingIcon: true, showTrailingIcon: true },
              { label: 'Menu item', showLeadingIcon: true, showTrailingIcon: true },
              { label: 'Menu item', showLeadingIcon: true },
            ]} 
            size="small" 
            type="sectioned" 
          />
          <DropdownMenu 
            items={[
              { label: 'Back', sectionName: 'Section name', type: 'sub-section', showLeadingIcon: true },
              { label: 'Submenu item', showLeadingIcon: true, state: 'hover' },
              { label: 'Submenu item', showLeadingIcon: true },
              { label: 'Submenu item', showLeadingIcon: true },
            ]} 
            size="small" 
            type="sectioned-submenu" 
          />
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Default</h4>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
          <DropdownMenu 
            items={[
              { label: 'Section name', type: 'section', showLeadingIcon: false },
              { label: 'Menu item', showLeadingIcon: true, showTrailingIcon: true },
              { label: 'Menu item', showLeadingIcon: true, showTrailingIcon: true },
              { label: 'Menu item', showLeadingIcon: true },
            ]} 
            size="default" 
            type="sectioned" 
          />
          <DropdownMenu 
            items={[
              { label: 'Back', sectionName: 'Section name', type: 'sub-section', showLeadingIcon: true },
              { label: 'Submenu item', showLeadingIcon: true, state: 'hover' },
              { label: 'Submenu item', showLeadingIcon: true },
              { label: 'Submenu item', showLeadingIcon: true },
            ]} 
            size="default" 
            type="sectioned-submenu" 
          />
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Large</h4>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
          <DropdownMenu 
            items={[
              { label: 'Section name', type: 'section', showLeadingIcon: false },
              { label: 'Menu item', showLeadingIcon: true, showTrailingIcon: true },
              { label: 'Menu item', showLeadingIcon: true, showTrailingIcon: true },
              { label: 'Menu item', showLeadingIcon: true },
            ]} 
            size="large" 
            type="sectioned" 
          />
          <DropdownMenu 
            items={[
              { label: 'Back', sectionName: 'Section name', type: 'sub-section', showLeadingIcon: true },
              { label: 'Submenu item', showLeadingIcon: true, state: 'hover' },
              { label: 'Submenu item', showLeadingIcon: true },
              { label: 'Submenu item', showLeadingIcon: true },
            ]} 
            size="large" 
            type="sectioned-submenu" 
          />
        </div>
      </div>
    </div>
  ),
};

// Comparison: Before vs After
export const ComparisonWithOriginal: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Original Dropdown Menus</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '12px', color: '#6B7280' }}>Regular Menu</span>
            <DropdownMenu 
              items={[
                { label: 'Menu item', showLeadingIcon: true },
                { label: 'Menu item', showLeadingIcon: true, showTrailingIcon: true },
                { label: 'Menu item', showLeadingIcon: true, showTrailingIcon: true },
                { label: 'Menu item', showLeadingIcon: true },
              ]} 
              size="default" 
              type="default" 
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '12px', color: '#6B7280' }}>Submenu</span>
            <DropdownMenu 
              items={[
                { label: 'Back', type: 'back', showLeadingIcon: true },
                { label: 'Submenu item', showLeadingIcon: true, state: 'hover' },
                { label: 'Submenu item', showLeadingIcon: true },
                { label: 'Submenu item', showLeadingIcon: true },
              ]} 
              size="default" 
              type="submenu" 
            />
          </div>
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Extended Dropdown Menus</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '12px', color: '#6B7280' }}>Sectioned Menu</span>
            <DropdownMenu 
              items={[
                { label: 'Section name', type: 'section', showLeadingIcon: false },
                { label: 'Menu item', showLeadingIcon: true, showTrailingIcon: true },
                { label: 'Menu item', showLeadingIcon: true, showTrailingIcon: true },
                { label: 'Menu item', showLeadingIcon: true },
              ]} 
              size="default" 
              type="sectioned" 
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '12px', color: '#6B7280' }}>Sub-section Menu</span>
            <DropdownMenu 
              items={[
                { label: 'Back', sectionName: 'Section name', type: 'sub-section', showLeadingIcon: true },
                { label: 'Submenu item', showLeadingIcon: true, state: 'hover' },
                { label: 'Submenu item', showLeadingIcon: true },
                { label: 'Submenu item', showLeadingIcon: true },
              ]} 
              size="default" 
              type="sectioned-submenu" 
            />
          </div>
        </div>
      </div>
    </div>
  ),
};
