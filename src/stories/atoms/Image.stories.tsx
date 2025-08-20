import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';

const meta: Meta<typeof Image> = {
  title: 'Atoms/Image',
  component: Image,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile image component with multiple sizes, shapes, and placeholder states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large', 'extra-large'],
      description: 'Size of the image container',
    },
    shape: {
      control: { type: 'select' },
      options: ['default', 'square'],
      description: 'Shape of the image container',
    },
    src: {
      control: { type: 'text' },
      description: 'Source URL for the image',
    },
    alt: {
      control: { type: 'text' },
      description: 'Alt text for the image',
    },
    showIcon: {
      control: { type: 'boolean' },
      description: 'Whether to show the placeholder icon when no image is provided',
    },
    objectFit: {
      control: { type: 'select' },
      options: ['cover', 'contain', 'fill', 'scale-down', 'none'],
      description: 'How the image should fit within the container',
    },
    loading: {
      control: { type: 'select' },
      options: ['lazy', 'eager'],
      description: 'Loading behavior for the image',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler for interactive images',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample image URLs for testing
const sampleImages = {
  landscape: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
  portrait: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=400&fit=crop',
  square: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop',
  small: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=200&h=200&fit=crop',
};

// Default placeholder (no image)
export const Placeholder: Story = {
  args: {
    size: 'default',
    shape: 'default',
    showIcon: true,
  },
};

// With image
export const WithImage: Story = {
  args: {
    size: 'default',
    shape: 'default',
    src: sampleImages.landscape,
    alt: 'Beautiful landscape',
  },
};

// Size variations
export const Small: Story = {
  args: {
    size: 'small',
    src: sampleImages.small,
    alt: 'Small image',
  },
};

export const Default: Story = {
  args: {
    size: 'default',
    src: sampleImages.square,
    alt: 'Default size image',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    src: sampleImages.landscape,
    alt: 'Large image',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'extra-large',
    src: sampleImages.landscape,
    alt: 'Extra large image',
  },
};

// Shape variations
export const RoundedShape: Story = {
  args: {
    size: 'default',
    shape: 'default',
    src: sampleImages.square,
    alt: 'Rounded image',
  },
};

export const SquareShape: Story = {
  args: {
    size: 'default',
    shape: 'square',
    src: sampleImages.square,
    alt: 'Square image',
  },
};

// Object fit variations
export const ObjectCover: Story = {
  args: {
    size: 'default',
    src: sampleImages.landscape,
    objectFit: 'cover',
    alt: 'Cover fit image',
  },
};

export const ObjectContain: Story = {
  args: {
    size: 'default',
    src: sampleImages.landscape,
    objectFit: 'contain',
    alt: 'Contain fit image',
  },
};

// Interactive
export const Interactive: Story = {
  args: {
    size: 'default',
    src: sampleImages.square,
    alt: 'Interactive image',
    onClick: () => console.log('Image clicked!'),
  },
};

// Without icon placeholder
export const PlaceholderNoIcon: Story = {
  args: {
    size: 'default',
    showIcon: false,
  },
};

// All sizes showcase
export const SizeShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'end', gap: '16px', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Image size="small" src={sampleImages.small} alt="Small" />
        <span style={{ fontSize: '12px', color: '#6D7280' }}>Small</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Image size="default" src={sampleImages.square} alt="Default" />
        <span style={{ fontSize: '12px', color: '#6D7280' }}>Default</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Image size="large" src={sampleImages.landscape} alt="Large" />
        <span style={{ fontSize: '12px', color: '#6D7280' }}>Large</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Image size="extra-large" src={sampleImages.landscape} alt="Extra Large" />
        <span style={{ fontSize: '12px', color: '#6D7280' }}>Extra Large</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all available image sizes.',
      },
    },
  },
};

// Shape comparison
export const ShapeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Image size="default" shape="default" src={sampleImages.square} alt="Rounded" />
        <span style={{ fontSize: '12px', color: '#6D7280' }}>Rounded</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Image size="default" shape="square" src={sampleImages.square} alt="Square" />
        <span style={{ fontSize: '12px', color: '#6D7280' }}>Square</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of rounded vs square shapes.',
      },
    },
  },
};

// Placeholder variations
export const PlaceholderVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Image size="default" showIcon={true} />
        <span style={{ fontSize: '12px', color: '#6D7280' }}>With Icon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Image size="default" showIcon={false} />
        <span style={{ fontSize: '12px', color: '#6D7280' }}>Without Icon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Image 
          size="default" 
          placeholder={<div style={{ color: '#6D7280', fontSize: '14px' }}>Custom</div>} 
        />
        <span style={{ fontSize: '12px', color: '#6D7280' }}>Custom Placeholder</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different placeholder states when no image is provided.',
      },
    },
  },
};

// Object fit showcase
export const ObjectFitShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      {(['cover', 'contain', 'fill', 'scale-down'] as const).map((fit) => (
        <div key={fit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Image 
            size="default" 
            src={sampleImages.landscape} 
            objectFit={fit}
            alt={`Object fit: ${fit}`}
          />
          <span style={{ fontSize: '12px', color: '#6D7280' }}>{fit}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of different object-fit values.',
      },
    },
  },
};

// Error state (broken image)
export const ErrorState: Story = {
  args: {
    size: 'default',
    src: 'https://invalid-url-that-will-fail.jpg',
    alt: 'Broken image',
  },
  parameters: {
    docs: {
      description: {
        story: 'How the component handles broken or invalid image URLs.',
      },
    },
  },
};

// Loading state simulation
export const LoadingState: Story = {
  render: () => {
    const [showImage, setShowImage] = React.useState(false);
    
    React.useEffect(() => {
      const timer = setTimeout(() => setShowImage(true), 2000);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <Image 
          size="default" 
          src={showImage ? sampleImages.landscape : undefined}
          alt="Loading simulation"
        />
        <button 
          onClick={() => setShowImage(!showImage)}
          style={{ 
            padding: '8px 16px', 
            border: '1px solid #ccc', 
            borderRadius: '4px',
            background: 'white',
            cursor: 'pointer'
          }}
        >
          Toggle Image
        </button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Simulation of loading state transition.',
      },
    },
  },
};

// Grid layout example
export const GridLayout: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
      gap: '16px',
      maxWidth: '600px'
    }}>
      {Array.from({ length: 8 }, (_, i) => (
        <Image 
          key={i}
          size="default" 
          src={i % 2 === 0 ? sampleImages.square : undefined}
          alt={`Grid item ${i + 1}`}
          onClick={() => console.log(`Clicked image ${i + 1}`)}
        />
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of images in a responsive grid layout.',
      },
    },
  },
};
