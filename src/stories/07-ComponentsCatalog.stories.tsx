import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const meta: Meta = {
  title: 'Design System/Components Catalog',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Components Catalog

Quick index of core components in Echo, grouped by Atoms and Molecules. Use this as a starting point to discover what exists and where to find examples.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const Section: React.FC<{ title: string; items: { name: string; path: string; note?: string }[] }> = ({ title, items }) => (
  <section style={{ marginBottom: '24px' }}>
    <h2 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 12px 0' }}>{title}</h2>
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
      <thead>
        <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
          <th style={{ textAlign: 'left', padding: '8px' }}>Component</th>
          <th style={{ textAlign: 'left', padding: '8px' }}>Story Path</th>
          <th style={{ textAlign: 'left', padding: '8px' }}>Notes</th>
        </tr>
      </thead>
      <tbody>
        {items.map((it) => (
          <tr key={it.name} style={{ borderBottom: '1px solid #f3f4f6' }}>
            <td style={{ padding: '8px', fontWeight: 600 }}>{it.name}</td>
            <td style={{ padding: '8px', fontFamily: 'monospace' }}>{it.path}</td>
            <td style={{ padding: '8px' }}>{it.note ?? ''}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

export const ComponentsCatalog: Story = {
  render: () => (
    <main style={{ padding: '40px', maxWidth: 1200, margin: '0 auto', lineHeight: 1.6 }}>
      <h1 style={{ fontSize: '32px', fontWeight: 700, margin: '0 0 24px 0' }}>Components Catalog</h1>
      <p style={{ margin: '0 0 24px 0', color: '#4b5563' }}>
        This index highlights newly added components and where to find their stories. It complements the Foundations docs.
      </p>

      <Section
        title="Atoms"
        items={[
          { name: 'AccordionStatusBadge', path: 'Atoms/Building Blocks/Accordion Status Badge', note: 'Status indicator badge; tones and sizes documented' },
          { name: 'SplitButton', path: 'Atoms/Button/Split Button', note: 'Primary + menu actions' },
          { name: 'Avatar', path: 'Design System/Figma Showcase Files/Avatar Figma Showcase', note: 'Variants and sizing' },
          { name: 'AvatarGroup', path: 'Design System/Figma Showcase Files/Avatar Group & Content Figma Showcase', note: 'Grouping behavior' },
          { name: 'DataTable (atoms building blocks)', path: 'Atoms/Building Blocks/Table', note: 'Cells, headers, and variants' },
          { name: 'Tag', path: 'Atoms/Tag', note: 'Interactive tags and variants' },
          { name: 'Button', path: 'Atoms/Button', note: 'Primary/secondary, states, and accessibility' },
        ]}
      />

      <Section
        title="Molecules"
        items={[
          { name: 'DataTable', path: 'Molecules/DataTable', note: 'Paginated table with sorting and actions' },
          { name: 'ActionBar', path: 'Molecules/Action Bar', note: 'Actions toolbar patterns' },
          { name: 'EchoMUI Components', path: 'Design System/Echo MUI Guide', note: 'Using MUI 7 with Echo tokens' },
        ]}
      />

      <section style={{ padding: '16px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8 }}>
        <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Contributing</h3>
        <p style={{ margin: '8px 0 0 0' }}>
          When you add a new Atom or Molecule, include a dedicated story and update this catalog with the title and folder path so others can discover it.
        </p>
      </section>
    </main>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Central index of components with pointers to their stories. Keep this list updated as new components land.',
      },
    },
  },
};
