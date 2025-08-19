import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Atoms/Card/Image Figma Showcase',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Image card components that exactly match the provided Figma designs. These cards display images with appropriate layouts, text content, and button styling.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FigmaImageCards: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '32px', 
      padding: '32px',
      maxWidth: '1400px',
      margin: '0 auto'
    }}>
      {/* Small Image Card - With Shadow */}
      <Card
        type="image"
        size="small"
        dropShadow={true}
        showCloseIcon={true}
        title="This is a heading"
        bodyText="This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card."
        imageSrc="/api/placeholder/300/200"
        onCloseClick={() => console.log('Small image card closed')}
      />
      
      {/* Default Image Card - With Shadow */}
      <Card
        type="image"
        size="default"
        dropShadow={true}
        showCloseIcon={true}
        title="This is a heading"
        bodyText="This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card."
        imageSrc="/api/placeholder/400/200"
        onCloseClick={() => console.log('Default image card closed')}
      />
      
      {/* Large Image Card - With Shadow */}
      <Card
        type="image"
        size="large"
        dropShadow={true}
        showCloseIcon={true}
        title="This is a heading"
        bodyText="This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card."
        imageSrc="/api/placeholder/500/283"
        onCloseClick={() => console.log('Large image card closed')}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'These image cards exactly match the Figma designs provided by the user. Each card features a full-width image at the top, blue heading text, body text, and action buttons with close icon functionality.',
      },
    },
  },
};

export const FigmaContainedImageCards: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '32px', 
      padding: '32px',
      maxWidth: '1400px',
      margin: '0 auto'
    }}>
      {/* Small Contained Image Card */}
      <Card
        type="contained-image"
        size="small"
        dropShadow={true}
        showCloseIcon={false}
        title="This is a heading"
        bodyText="This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card."
        imageSrc="/api/placeholder/300/200"
      />
      
      {/* Default Contained Image Card */}
      <Card
        type="contained-image"
        size="default"
        dropShadow={true}
        showCloseIcon={false}
        title="This is a heading"
        bodyText="This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card."
        imageSrc="/api/placeholder/400/200"
      />
      
      {/* Large Contained Image Card */}
      <Card
        type="contained-image"
        size="large"
        dropShadow={true}
        showCloseIcon={false}
        title="This is a heading"
        bodyText="This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card."
        imageSrc="/api/placeholder/500/280"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Contained image cards with bordered/contained images and centered layout - exactly matching the Figma designs.',
      },
    },
  },
};

export const SmallImageCardFigma: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <Card
        type="image"
        size="small"
        dropShadow={true}
        showCloseIcon={true}
        title="This is a heading"
        bodyText="This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card."
        imageSrc="/api/placeholder/300/200"
        onCloseClick={() => console.log('Small image card closed')}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Small image card with full-width image, blue heading, and close icon - exactly matching the Figma design.',
      },
    },
  },
};

export const DefaultImageCardFigma: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <Card
        type="image"
        size="default"
        dropShadow={true}
        showCloseIcon={true}
        title="This is a heading"
        bodyText="This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card."
        imageSrc="/api/placeholder/400/200"
        onCloseClick={() => console.log('Default image card closed')}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Default image card with full-width image, blue heading, and close icon - exactly matching the Figma design.',
      },
    },
  },
};

export const LargeImageCardFigma: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <Card
        type="image"
        size="large"
        dropShadow={true}
        showCloseIcon={true}
        title="This is a heading"
        bodyText="This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card."
        imageSrc="/api/placeholder/500/283"
        onCloseClick={() => console.log('Large image card closed')}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Large image card with full-width image, blue heading, and close icon - exactly matching the Figma design.',
      },
    },
  },
};

export const ImageCardsComparison: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <h3 style={{ marginBottom: '24px', fontSize: '18px', fontWeight: 600 }}>
        Image Cards - Figma Implementation
      </h3>
      
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '32px' 
      }}>
        {/* Image Cards Row */}
        <div>
          <h4 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 500, color: '#666' }}>
            Full-Width Image Cards
          </h4>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Card
              type="image"
              size="small"
              dropShadow={true}
              showCloseIcon={true}
              title="Small Image"
              bodyText="This is body text for a small image card."
              imageSrc="/api/placeholder/300/200"
              onCloseClick={() => console.log('Small image closed')}
            />
            <Card
              type="image"
              size="default"
              dropShadow={true}
              showCloseIcon={true}
              title="Default Image"
              bodyText="This is body text for a default image card."
              imageSrc="/api/placeholder/400/200"
              onCloseClick={() => console.log('Default image closed')}
            />
            <Card
              type="image"
              size="large"
              dropShadow={true}
              showCloseIcon={true}
              title="Large Image"
              bodyText="This is body text for a large image card."
              imageSrc="/api/placeholder/500/283"
              onCloseClick={() => console.log('Large image closed')}
            />
          </div>
        </div>
        
        {/* Contained Image Cards Row */}
        <div>
          <h4 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 500, color: '#666' }}>
            Contained Image Cards
          </h4>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Card
              type="contained-image"
              size="small"
              dropShadow={true}
              title="Small Contained"
              bodyText="This is body text for a small contained image card."
              imageSrc="/api/placeholder/300/200"
            />
            <Card
              type="contained-image"
              size="default"
              dropShadow={true}
              title="Default Contained"
              bodyText="This is body text for a default contained image card."
              imageSrc="/api/placeholder/400/200"
            />
            <Card
              type="contained-image"
              size="large"
              dropShadow={true}
              title="Large Contained"
              bodyText="This is body text for a large contained image card."
              imageSrc="/api/placeholder/500/280"
            />
          </div>
        </div>
        
        {/* Shadow Comparison */}
        <div>
          <h4 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 500, color: '#666' }}>
            Shadow Variations
          </h4>
          <div style={{ display: 'flex', gap: '32px', alignItems: 'start' }}>
            <div style={{ textAlign: 'center' }}>
              <h5 style={{ margin: '0 0 12px 0', fontSize: '14px' }}>With Shadow</h5>
              <Card
                type="image"
                size="small"
                dropShadow={true}
                showCloseIcon={true}
                title="With Shadow"
                bodyText="Card with drop shadow effect."
                imageSrc="/api/placeholder/300/200"
                onCloseClick={() => console.log('Shadow card closed')}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <h5 style={{ margin: '0 0 12px 0', fontSize: '14px' }}>Without Shadow</h5>
              <Card
                type="image"
                size="small"
                dropShadow={false}
                showCloseIcon={true}
                title="No Shadow"
                bodyText="Card without drop shadow effect."
                imageSrc="/api/placeholder/300/200"
                onCloseClick={() => console.log('No shadow card closed')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete comparison of all image card types (image, contained-image) across all available sizes and shadow variations, showing the consistent design system implementation matching Figma.',
      },
    },
  },
};
