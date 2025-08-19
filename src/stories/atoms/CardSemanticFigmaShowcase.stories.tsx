import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Atoms/Card/Semantic Figma Showcase',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Semantic card components that exactly match the provided Figma designs. These cards display warning, error, and info states with appropriate icons, colors, and button styling.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FigmaSemanticCards: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '32px', 
      padding: '32px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {/* Warning Card - Exactly matching Figma */}
      <Card
        type="warning"
        size="default"
        dropShadow={true}
        showCloseIcon={true}
        title="This is a warning heading"
        bodyText="This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card."
        onCloseClick={() => console.log('Warning card closed')}
      />
      
      {/* Error Card - Exactly matching Figma */}
      <Card
        type="error"
        size="default"
        dropShadow={true}
        showCloseIcon={true}
        title="This is an error heading"
        bodyText="This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card."
        onCloseClick={() => console.log('Error card closed')}
      />
      
      {/* Info Card - Exactly matching Figma */}
      <Card
        type="info"
        size="default"
        dropShadow={true}
        showCloseIcon={true}
        title="This is an info heading"
        bodyText="This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card."
        onCloseClick={() => console.log('Info card closed')}
      />

      {/* Success Card - Exactly matching Figma */}
      <Card
        type="success"
        size="default"
        dropShadow={true}
        showCloseIcon={true}
        title="This is a success heading"
        bodyText="This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card."
        onCloseClick={() => console.log('Success card closed')}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'These semantic cards exactly match the Figma designs provided by the user. Each card features a semantic icon (warning triangle, error X in circle, info i in circle), colored heading text, body text, and semantic action buttons.',
      },
    },
  },
};

export const WarningCardFigma: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <Card
        type="warning"
        size="default"
        dropShadow={true}
        showCloseIcon={true}
        title="This is a warning heading"
        bodyText="This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card."
        onCloseClick={() => console.log('Warning card closed')}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Warning card with orange triangle icon, orange heading text, warning button, and close icon - exactly matching the Figma design.',
      },
    },
  },
};

export const ErrorCardFigma: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <Card
        type="error"
        size="default"
        dropShadow={true}
        showCloseIcon={true}
        title="This is an error heading"
        bodyText="This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card."
        onCloseClick={() => console.log('Error card closed')}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Error card with red circle X icon, red heading text, error button, and close icon - exactly matching the Figma design.',
      },
    },
  },
};

export const InfoCardFigma: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <Card
        type="info"
        size="default"
        dropShadow={true}
        showCloseIcon={true}
        title="This is an info heading"
        bodyText="This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card."
        onCloseClick={() => console.log('Info card closed')}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Info card with blue circle i icon, blue heading text, info button, and close icon - exactly matching the Figma design.',
      },
    },
  },
};

export const SuccessCardFigma: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <Card
        type="success"
        size="default"
        dropShadow={true}
        showCloseIcon={true}
        title="This is a success heading"
        bodyText="This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card."
        onCloseClick={() => console.log('Success card closed')}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Success card with green circle checkmark icon, green heading text, success button, and close icon - exactly matching the Figma design.',
      },
    },
  },
};

export const SemanticCardsComparison: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <h3 style={{ marginBottom: '24px', fontSize: '18px', fontWeight: 600 }}>
        Semantic Cards - Figma Implementation
      </h3>
      
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '32px' 
      }}>
        {/* Warning Cards Row */}
        <div>
          <h4 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 500, color: '#666' }}>
            Warning Cards
          </h4>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Card
              type="warning"
              size="small"
              dropShadow={true}
              showCloseIcon={true}
              title="Small Warning"
              bodyText="This is body text for a small warning card."
              onCloseClick={() => console.log('Small warning closed')}
            />
            <Card
              type="warning"
              size="default"
              dropShadow={true}
              showCloseIcon={true}
              title="This is a warning heading"
              bodyText="This is body text that can span multiple lines within the card."
              onCloseClick={() => console.log('Default warning closed')}
            />
            <Card
              type="warning"
              size="large"
              dropShadow={true}
              showCloseIcon={true}
              title="Large Warning"
              bodyText="This is body text for a large warning card with more space."
              onCloseClick={() => console.log('Large warning closed')}
            />
          </div>
        </div>
        
        {/* Error Cards Row */}
        <div>
          <h4 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 500, color: '#666' }}>
            Error Cards
          </h4>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Card
              type="error"
              size="small"
              dropShadow={true}
              showCloseIcon={true}
              title="Small Error"
              bodyText="This is body text for a small error card."
              onCloseClick={() => console.log('Small error closed')}
            />
            <Card
              type="error"
              size="default"
              dropShadow={true}
              showCloseIcon={true}
              title="This is an error heading"
              bodyText="This is body text that can span multiple lines within the card."
              onCloseClick={() => console.log('Default error closed')}
            />
            <Card
              type="error"
              size="large"
              dropShadow={true}
              showCloseIcon={true}
              title="Large Error"
              bodyText="This is body text for a large error card with more space."
              onCloseClick={() => console.log('Large error closed')}
            />
          </div>
        </div>
        
        {/* Info Cards Row */}
        <div>
          <h4 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 500, color: '#666' }}>
            Info Cards
          </h4>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Card
              type="info"
              size="small"
              dropShadow={true}
              showCloseIcon={true}
              title="Small Info"
              bodyText="This is body text for a small info card."
              onCloseClick={() => console.log('Small info closed')}
            />
            <Card
              type="info"
              size="default"
              dropShadow={true}
              showCloseIcon={true}
              title="This is an info heading"
              bodyText="This is body text that can span multiple lines within the card."
              onCloseClick={() => console.log('Default info closed')}
            />
            <Card
              type="info"
              size="large"
              dropShadow={true}
              showCloseIcon={true}
              title="Large Info"
              bodyText="This is body text for a large info card with more space."
              onCloseClick={() => console.log('Large info closed')}
            />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete comparison of all semantic card types across all available sizes, showing the consistent design system implementation.',
      },
    },
  },
};
