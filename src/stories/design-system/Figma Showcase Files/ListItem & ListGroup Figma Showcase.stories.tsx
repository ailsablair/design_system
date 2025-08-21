import type { Meta, StoryObj } from '@storybook/react';
import { ListItem } from '../../atoms/ListItem';
import { ListGroup } from '../../atoms/ListGroup';

const meta = {
  title: 'Design System/Figma Showcase Files/ListItem & ListGroup Figma Showcase',
  component: ListItem,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Figma showcase demonstrating all ListItem and ListGroup variants matching the original Figma designs exactly. This includes all size variants (large, default, small) and states (default, selected) as specified in the design system.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// Figma showcase for Large size variants
export const FigmaLargeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0', width: '100%', maxWidth: '600px' }}>
      <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: '600' }}>Large Size Variants</h2>
      
      {/* Large Default */}
      <ListItem
        size="large"
        state="default"
        woNumber="000000"
        wrNumber="000000"
        description="This is a description or piece of text to help identify the search result to the user. This can be up to three lines of body or H5 text for the user to get enough context."
        timestamp="Last updated 3 mins ago"
      />
      
      {/* Large Default (second item) */}
      <ListItem
        size="large"
        state="default"
        woNumber="000000"
        wrNumber="000000"
        description="This is a description or piece of text to help identify the search result to the user. This can be up to three lines of body or H5 text for the user to get enough context."
        timestamp="Last updated 3 mins ago"
      />
      
      {/* Large Selected */}
      <ListItem
        size="large"
        state="selected"
        woNumber="000000"
        wrNumber="000000"
        description="This is a description or piece of text to help identify the search result to the user. This can be up to three lines of body or H5 text for the user to get enough context."
        timestamp="Last updated 3 mins ago"
      />
      
      {/* Large Default (fourth item) */}
      <ListItem
        size="large"
        state="default"
        woNumber="000000"
        wrNumber="000000"
        description="This is a description or piece of text to help identify the search result to the user. This can be up to three lines of body or H5 text for the user to get enough context."
        timestamp="Last updated 3 mins ago"
      />
    </div>
  )
};

// Figma showcase for Default size variants
export const FigmaDefaultVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0', width: '100%', maxWidth: '500px' }}>
      <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: '600' }}>Default Size Variants</h2>
      
      {/* Default Default */}
      <ListItem
        size="default"
        state="default"
        woNumber="000000"
        wrNumber="000000"
        description="This is a description or piece of text to help identify the search result to the user. This can be up to three lines of body or H5 text for the user to get enough context."
        timestamp="Last updated 3 mins ago"
      />
      
      {/* Default Default (second item) */}
      <ListItem
        size="default"
        state="default"
        woNumber="000000"
        wrNumber="000000"
        description="This is a description or piece of text to help identify the search result to the user. This can be up to three lines of body or H5 text for the user to get enough context."
        timestamp="Last updated 3 mins ago"
      />
      
      {/* Default Selected */}
      <ListItem
        size="default"
        state="selected"
        woNumber="000000"
        wrNumber="000000"
        description="This is a description or piece of text to help identify the search result to the user. This can be up to three lines of body or H5 text for the user to get enough context."
        timestamp="Last updated 3 mins ago"
      />
      
      {/* Default Default (fourth item) */}
      <ListItem
        size="default"
        state="default"
        woNumber="000000"
        wrNumber="000000"
        description="This is a description or piece of text to help identify the search result to the user. This can be up to three lines of body or H5 text for the user to get enough context."
        timestamp="Last updated 3 mins ago"
      />
    </div>
  )
};

// Figma showcase for Small size variants
export const FigmaSmallVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0', width: '100%', maxWidth: '500px' }}>
      <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: '600' }}>Small Size Variants</h2>
      
      {/* Small Default */}
      <ListItem
        size="small"
        state="default"
        woNumber="000000"
        wrNumber="000000"
        description="This is a description or piece of text to help identify the search result to the user. This can be up to three lines of body or H5 text for the user to get enough context."
        timestamp="Last updated 3 mins ago"
      />
      
      {/* Small Default (second item) */}
      <ListItem
        size="small"
        state="default"
        woNumber="000000"
        wrNumber="000000"
        description="This is a description or piece of text to help identify the search result to the user. This can be up to three lines of body or H5 text for the user to get enough context."
        timestamp="Last updated 3 mins ago"
      />
      
      {/* Small Selected */}
      <ListItem
        size="small"
        state="selected"
        woNumber="000000"
        wrNumber="000000"
        description="This is a description or piece of text to help identify the search result to the user. This can be up to three lines of body or H5 text for the user to get enough context."
        timestamp="Last updated 3 mins ago"
      />
      
      {/* Small Default (fourth item) */}
      <ListItem
        size="small"
        state="default"
        woNumber="000000"
        wrNumber="000000"
        description="This is a description or piece of text to help identify the search result to the user. This can be up to three lines of body or H5 text for the user to get enough context."
        timestamp="Last updated 3 mins ago"
      />
    </div>
  )
};

// Complete Figma showcase matching the original design
export const CompleteFigmaShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', width: '100%' }}>
      <h1 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '0' }}>Search Results - Complete Figma Showcase</h1>
      
      {/* Large size group */}
      <div>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px', color: '#374151' }}>Large Size</h2>
        <ListGroup
          size="large"
          items={[
            {
              woNumber: "000000",
              wrNumber: "000000",
              description: "This is a description or piece of text to help identify the search result to the user. This can be up to three lines of body or H5 text for the user to get enough context.",
              timestamp: "Last updated 3 mins ago",
              state: "default"
            },
            {
              woNumber: "000000",
              wrNumber: "000000",
              description: "This is a description or piece of text to help identify the search result to the user. This can be up to three lines of body or H5 text for the user to get enough context.",
              timestamp: "Last updated 3 mins ago",
              state: "default"
            },
            {
              woNumber: "000000",
              wrNumber: "000000",
              description: "This is a description or piece of text to help identify the search result to the user. This can be up to three lines of body or H5 text for the user to get enough context.",
              timestamp: "Last updated 3 mins ago",
              state: "selected"
            },
            {
              woNumber: "000000",
              wrNumber: "000000",
              description: "This is a description or piece of text to help identify the search result to the user. This can be up to three lines of body or H5 text for the user to get enough context.",
              timestamp: "Last updated 3 mins ago",
              state: "default"
            }
          ]}
        />
      </div>
      
      {/* Default size group */}
      <div>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px', color: '#374151' }}>Default Size</h2>
        <ListGroup
          size="default"
          items={[
            {
              woNumber: "000000",
              wrNumber: "000000",
              description: "This is a description or piece of text to help identify the search result to the user. This can be up to three lines of body or H5 text for the user to get enough context.",
              timestamp: "Last updated 3 mins ago",
              state: "default"
            },
            {
              woNumber: "000000",
              wrNumber: "000000",
              description: "This is a description or piece of text to help identify the search result to the user. This can be up to three lines of body or H5 text for the user to get enough context.",
              timestamp: "Last updated 3 mins ago",
              state: "default"
            },
            {
              woNumber: "000000",
              wrNumber: "000000",
              description: "This is a description or piece of text to help identify the search result to the user. This can be up to three lines of body or H5 text for the user to get enough context.",
              timestamp: "Last updated 3 mins ago",
              state: "selected"
            },
            {
              woNumber: "000000",
              wrNumber: "000000",
              description: "This is a description or piece of text to help identify the search result to the user. This can be up to three lines of body or H5 text for the user to get enough context.",
              timestamp: "Last updated 3 mins ago",
              state: "default"
            }
          ]}
        />
      </div>
      
      {/* Small size group */}
      <div>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px', color: '#374151' }}>Small Size</h2>
        <ListGroup
          size="small"
          items={[
            {
              woNumber: "000000",
              wrNumber: "000000",
              description: "This is a description or piece of text to help identify the search result to the user. This can be up to three lines of body or H5 text for the user to get enough context.",
              timestamp: "Last updated 3 mins ago",
              state: "default"
            },
            {
              woNumber: "000000",
              wrNumber: "000000",
              description: "This is a description or piece of text to help identify the search result to the user. This can be up to three lines of body or H5 text for the user to get enough context.",
              timestamp: "Last updated 3 mins ago",
              state: "default"
            },
            {
              woNumber: "000000",
              wrNumber: "000000",
              description: "This is a description or piece of text to help identify the search result to the user. This can be up to three lines of body or H5 text for the user to get enough context.",
              timestamp: "Last updated 3 mins ago",
              state: "selected"
            },
            {
              woNumber: "000000",
              wrNumber: "000000",
              description: "This is a description or piece of text to help identify the search result to the user. This can be up to three lines of body or H5 text for the user to get enough context.",
              timestamp: "Last updated 3 mins ago",
              state: "default"
            }
          ]}
        />
      </div>
    </div>
  )
};

// Interactive states showcase
export const InteractiveStatesShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '0' }}>Interactive States</h2>
      
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '16px' }}>Default State (Hover to see effect)</h3>
        <ListItem
          size="default"
          state="default"
          woNumber="000000"
          wrNumber="000000"
          description="Hover over this item to see the hover state styling."
          timestamp="Last updated 3 mins ago"
        />
      </div>
      
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '16px' }}>Selected State</h3>
        <ListItem
          size="default"
          state="selected"
          woNumber="000000"
          wrNumber="000000"
          description="This item is in the selected state with blue border and background."
          timestamp="Last updated 3 mins ago"
        />
      </div>
    </div>
  )
};
