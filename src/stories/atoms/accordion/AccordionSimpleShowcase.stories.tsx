import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AccordionSimple } from './AccordionSimple';

const meta = {
  title: 'Atoms/Accordion/AccordionSimple/Showcase',
  component: AccordionSimple,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Comprehensive showcase of all AccordionSimple variants matching the Figma design.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AccordionSimple>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleContent = (
  <div style={{
    color: 'var(--neutral-gray-gray-700, #374151)',
    fontFamily: 'var(--body-body-light-font-family, "RobotoFlex-Light", sans-serif)',
    fontSize: '16px',
    lineHeight: '20px',
    letterSpacing: '0.05px',
    fontWeight: 300,
  }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.
  </div>
);

// ===== ALL VARIANTS SHOWCASE =====
export const AllVariants: Story = {
  render: () => (
    <div style={{ padding: '40px', background: '#f9fafb' }}>
      <h1 style={{ fontFamily: 'Archivo', fontSize: '32px', fontWeight: 700, marginBottom: '32px' }}>
        AccordionSimple - All Variants
      </h1>

      {/* SIMPLE TYPE */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'Archivo', fontSize: '24px', fontWeight: 600, marginBottom: '24px' }}>
          Simple Type
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Default - Default Size - Chevron</h3>
            <AccordionSimple
              type="simple"
              state="default"
              size="default"
              openIcon="default (chevron)"
              title="This is a section title taking up a lot of space..."
              description="This is supporting text to help describe the content within the accordion"
            />
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Open - Default Size - Chevron</h3>
            <AccordionSimple
              type="simple"
              state="open"
              size="default"
              openIcon="default (chevron)"
              title="This is a section title taking up a lot of space..."
              description="This is supporting text to help describe the content within the accordion"
            >
              {sampleContent}
            </AccordionSimple>
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Default - Small Size - Chevron</h3>
            <AccordionSimple
              type="simple"
              state="default"
              size="small"
              openIcon="default (chevron)"
              title="This is a section title taking up a lot of space..."
              description="This is supporting text to help describe the content within the accordion"
            />
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Open - Small Size - Chevron</h3>
            <AccordionSimple
              type="simple"
              state="open"
              size="small"
              openIcon="default (chevron)"
              title="This is a section title taking up a lot of space..."
              description="This is supporting text to help describe the content within the accordion"
            >
              {sampleContent}
            </AccordionSimple>
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Default - Large Size - Chevron</h3>
            <AccordionSimple
              type="simple"
              state="default"
              size="large"
              openIcon="default (chevron)"
              title="This is a section title taking up a lot of space..."
              description="This is supporting text to help describe the content within the accordion"
            />
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Open - Large Size - Chevron</h3>
            <AccordionSimple
              type="simple"
              state="open"
              size="large"
              openIcon="default (chevron)"
              title="This is a section title taking up a lot of space..."
              description="This is supporting text to help describe the content within the accordion"
            >
              {sampleContent}
            </AccordionSimple>
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Default - Default Size - Plus</h3>
            <AccordionSimple
              type="simple"
              state="default"
              size="default"
              openIcon="plus"
              title="This is a section title taking up a lot of space..."
              description="This is supporting text to help describe the content within the accordion"
            />
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Open - Default Size - Plus</h3>
            <AccordionSimple
              type="simple"
              state="open"
              size="default"
              openIcon="plus"
              title="This is a section title taking up a lot of space..."
              description="This is supporting text to help describe the content within the accordion"
            >
              {sampleContent}
            </AccordionSimple>
          </div>
        </div>
      </section>

      {/* NO-STROKE TYPE */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'Archivo', fontSize: '24px', fontWeight: 600, marginBottom: '24px' }}>
          No-Stroke Type
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Default - Default Size</h3>
            <AccordionSimple
              type="no-stroke"
              state="default"
              size="default"
              openIcon="default (chevron)"
              title="This is a section title or a long question taking up a lot of space..."
            />
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Open - Default Size</h3>
            <AccordionSimple
              type="no-stroke"
              state="open"
              size="default"
              openIcon="default (chevron)"
              title="This is a section title or a long question taking up a lot of space..."
            >
              {sampleContent}
            </AccordionSimple>
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Open - Default Size - Plus</h3>
            <AccordionSimple
              type="no-stroke"
              state="open"
              size="default"
              openIcon="plus"
              title="This is a section title or a long question taking up a lot of space..."
            >
              {sampleContent}
            </AccordionSimple>
          </div>
        </div>
      </section>

      {/* DECORATIVE TYPE */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'Archivo', fontSize: '24px', fontWeight: 600, marginBottom: '24px' }}>
          Decorative Type
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Default - Default Size</h3>
            <AccordionSimple
              type="decorative"
              state="default"
              size="default"
              openIcon="default (chevron)"
              title="This is a decorative accordion..."
            />
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Open - Default Size</h3>
            <AccordionSimple
              type="decorative"
              state="open"
              size="default"
              openIcon="default (chevron)"
              title="This is a decorative accordion..."
            >
              {sampleContent}
            </AccordionSimple>
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Default - Small Size</h3>
            <AccordionSimple
              type="decorative"
              state="default"
              size="small"
              openIcon="default (chevron)"
              title="This is a decorative accordion..."
            />
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Open - Small Size</h3>
            <AccordionSimple
              type="decorative"
              state="open"
              size="small"
              openIcon="default (chevron)"
              title="This is a decorative accordion..."
            >
              {sampleContent}
            </AccordionSimple>
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Default - Large Size</h3>
            <AccordionSimple
              type="decorative"
              state="default"
              size="large"
              openIcon="default (chevron)"
              title="This is a decorative accordion..."
            />
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Open - Large Size</h3>
            <AccordionSimple
              type="decorative"
              state="open"
              size="large"
              openIcon="default (chevron)"
              title="This is a decorative accordion..."
            >
              {sampleContent}
            </AccordionSimple>
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Open - Plus Icon</h3>
            <AccordionSimple
              type="decorative"
              state="open"
              size="default"
              openIcon="plus"
              title="This is a decorative accordion..."
            >
              {sampleContent}
            </AccordionSimple>
          </div>
        </div>
      </section>

      {/* NUMBER TYPE */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'Archivo', fontSize: '24px', fontWeight: 600, marginBottom: '24px' }}>
          Number Type
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Default - Default Size</h3>
            <AccordionSimple
              type="number"
              state="default"
              size="default"
              openIcon="default (chevron)"
              number="01"
              title="This is a numbered accordion list..."
            />
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Open - Default Size</h3>
            <AccordionSimple
              type="number"
              state="open"
              size="default"
              openIcon="default (chevron)"
              number="01"
              title="This is a numbered accordion list..."
            >
              {sampleContent}
            </AccordionSimple>
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Default - Small Size</h3>
            <AccordionSimple
              type="number"
              state="default"
              size="small"
              openIcon="default (chevron)"
              number="01"
              title="This is a numbered accordion list..."
            />
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Open - Small Size</h3>
            <AccordionSimple
              type="number"
              state="open"
              size="small"
              openIcon="default (chevron)"
              number="01"
              title="This is a numbered accordion list..."
            >
              {sampleContent}
            </AccordionSimple>
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Default - Large Size</h3>
            <AccordionSimple
              type="number"
              state="default"
              size="large"
              openIcon="default (chevron)"
              number="01"
              title="This is a numbered accordion list..."
            />
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Open - Large Size</h3>
            <AccordionSimple
              type="number"
              state="open"
              size="large"
              openIcon="default (chevron)"
              number="01"
              title="This is a numbered accordion list..."
            >
              {sampleContent}
            </AccordionSimple>
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Open - Plus Icon</h3>
            <AccordionSimple
              type="number"
              state="open"
              size="default"
              openIcon="plus"
              number="01"
              title="This is a numbered accordion list..."
            >
              {sampleContent}
            </AccordionSimple>
          </div>
        </div>
      </section>

      {/* LABEL TYPE */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'Archivo', fontSize: '24px', fontWeight: 600, marginBottom: '24px' }}>
          Label Type
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Default - Default Size</h3>
            <AccordionSimple
              type="label"
              state="default"
              size="default"
              openIcon="default (chevron)"
              title="This is a label accordion list..."
              labelText="Label"
              labelLeadingIcon={true}
            />
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Open - Default Size</h3>
            <AccordionSimple
              type="label"
              state="open"
              size="default"
              openIcon="default (chevron)"
              title="This is a label accordion ..."
              labelText="Label"
              labelLeadingIcon={true}
            >
              {sampleContent}
            </AccordionSimple>
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Default - Small Size</h3>
            <AccordionSimple
              type="label"
              state="default"
              size="small"
              openIcon="default (chevron)"
              title="This is a label accordion list..."
              labelText="Label"
              labelLeadingIcon={true}
            />
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Open - Small Size</h3>
            <AccordionSimple
              type="label"
              state="open"
              size="small"
              openIcon="default (chevron)"
              title="This is a label accordion ..."
              labelText="Label"
              labelLeadingIcon={true}
            >
              {sampleContent}
            </AccordionSimple>
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Default - Large Size</h3>
            <AccordionSimple
              type="label"
              state="default"
              size="large"
              openIcon="default (chevron)"
              title="This is a label accordion list..."
              labelText="Label"
              labelLeadingIcon={true}
            />
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Open - Large Size</h3>
            <AccordionSimple
              type="label"
              state="open"
              size="large"
              openIcon="default (chevron)"
              title="This is a label accordion ..."
              labelText="Label"
              labelLeadingIcon={true}
            >
              {sampleContent}
            </AccordionSimple>
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Open - Plus Icon</h3>
            <AccordionSimple
              type="label"
              state="open"
              size="default"
              openIcon="plus"
              title="This is a label accordion ..."
              labelText="Label"
              labelLeadingIcon={true}
            >
              {sampleContent}
            </AccordionSimple>
          </div>
        </div>
      </section>
    </div>
  ),
};

// ===== SIZE COMPARISON =====
export const SizeComparison: Story = {
  render: () => (
    <div style={{ padding: '40px', background: '#f9fafb' }}>
      <h1 style={{ fontFamily: 'Archivo', fontSize: '32px', fontWeight: 700, marginBottom: '32px' }}>
        Size Comparison
      </h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px' }}>
        <div>
          <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Small Size</h3>
          <AccordionSimple
            type="simple"
            size="small"
            title="This is a section title"
            description="Supporting text"
          />
        </div>
        <div>
          <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Default Size</h3>
          <AccordionSimple
            type="simple"
            size="default"
            title="This is a section title taking up a lot of space..."
            description="This is supporting text to help describe the content within the accordion"
          />
        </div>
        <div>
          <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Large Size</h3>
          <AccordionSimple
            type="simple"
            size="large"
            title="This is a section title taking up a lot of space..."
            description="This is supporting text to help describe the content within the accordion"
          />
        </div>
      </div>
    </div>
  ),
};

// ===== TYPE COMPARISON =====
export const TypeComparison: Story = {
  render: () => (
    <div style={{ padding: '40px', background: '#f9fafb' }}>
      <h1 style={{ fontFamily: 'Archivo', fontSize: '32px', fontWeight: 700, marginBottom: '32px' }}>
        Type Comparison
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
        <div>
          <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Simple</h3>
          <AccordionSimple
            type="simple"
            title="This is a section title"
            description="Supporting text"
          />
        </div>
        <div>
          <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>No-Stroke</h3>
          <AccordionSimple
            type="no-stroke"
            title="This is a section title"
          />
        </div>
        <div>
          <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Decorative</h3>
          <AccordionSimple
            type="decorative"
            title="Decorative accordion"
          />
        </div>
        <div>
          <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Number</h3>
          <AccordionSimple
            type="number"
            number="01"
            title="Numbered accordion"
          />
        </div>
        <div>
          <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px', color: '#6d7280' }}>Label</h3>
          <AccordionSimple
            type="label"
            title="Label accordion"
            labelText="Label"
            labelLeadingIcon={true}
          />
        </div>
      </div>
    </div>
  ),
};
