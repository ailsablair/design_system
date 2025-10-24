import type { Meta, StoryObj } from '@storybook/react-vite';
import { Search } from './Search';
import { useState } from 'react';

const meta: Meta<typeof Search> = {
  title: 'Atoms/Search/Figma Showcase',
  component: Search,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Figma-accurate Search component implementation with all three size variants (small, default, large). This showcase demonstrates pixel-perfect alignment with the Figma design specifications.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FigmaAllSizes: Story = {
  render: () => {
    const [smallValue, setSmallValue] = useState('');
    const [defaultValue, setDefaultValue] = useState('');
    const [largeValue, setLargeValue] = useState('');

    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '48px', 
        padding: '24px',
        backgroundColor: '#ffffff',
        minHeight: '100vh'
      }}>
        <div>
          <h2 style={{ 
            fontFamily: 'var(--type-typeface-archivo)',
            fontSize: '24px',
            fontWeight: '500',
            marginBottom: '24px',
            color: 'var(--base-black)'
          }}>
            Search Component - Figma Design Showcase
          </h2>
          <p style={{
            fontFamily: 'var(--type-typeface-roboto-flex)',
            fontSize: '16px',
            lineHeight: '24px',
            color: 'var(--neutral-gray-gray-700)',
            marginBottom: '32px',
            maxWidth: '600px'
          }}>
            This showcase presents all three size variants of the Search component, 
            precisely matching the Figma design specifications. Each variant includes 
            a label, search input field with magnifying glass icon, optional clear button, 
            and integrated search action button.
          </p>
        </div>

        {/* Small Size */}
        <div style={{ 
          padding: '24px',
          border: '1px solid var(--neutral-gray-gray-200)',
          borderRadius: 'var(--spacing-radius-4px)',
          backgroundColor: '#fafbfc'
        }}>
          <div style={{ marginBottom: '16px' }}>
            <h3 style={{ 
              fontFamily: 'var(--type-typeface-archivo)',
              fontSize: '18px',
              fontWeight: '500',
              marginBottom: '8px',
              color: 'var(--base-black)'
            }}>
              Small Size
            </h3>
            <p style={{
              fontFamily: 'var(--type-typeface-roboto-flex)',
              fontSize: '14px',
              lineHeight: '20px',
              color: 'var(--neutral-gray-gray-600)',
              margin: '0'
            }}>
              Compact variant with 14px font size, 30px min-height button, and 8px input padding.
            </p>
          </div>
          <Search
            label="Search"
            placeholder="Search Echo"
            value={smallValue}
            onChange={(e) => setSmallValue(e.target.value)}
            onSearch={(value) => console.log('Small search:', value)}
            onClear={() => setSmallValue('')}
            size="small"
            showClear={true}
          />
          <div style={{ 
            marginTop: '12px',
            padding: '12px',
            backgroundColor: 'var(--base-white)',
            borderRadius: '4px',
            fontFamily: 'var(--type-typeface-roboto-flex)',
            fontSize: '13px',
            color: 'var(--neutral-gray-gray-600)'
          }}>
            <strong>Specs:</strong> Label: 14px Archivo Medium | Input: 14px Roboto Flex | Button: 30px height
          </div>
        </div>

        {/* Default Size */}
        <div style={{ 
          padding: '24px',
          border: '1px solid var(--neutral-gray-gray-200)',
          borderRadius: 'var(--spacing-radius-4px)',
          backgroundColor: '#fafbfc'
        }}>
          <div style={{ marginBottom: '16px' }}>
            <h3 style={{ 
              fontFamily: 'var(--type-typeface-archivo)',
              fontSize: '18px',
              fontWeight: '500',
              marginBottom: '8px',
              color: 'var(--base-black)'
            }}>
              Default Size
            </h3>
            <p style={{
              fontFamily: 'var(--type-typeface-roboto-flex)',
              fontSize: '14px',
              lineHeight: '20px',
              color: 'var(--neutral-gray-gray-600)',
              margin: '0'
            }}>
              Standard variant with 16px font size, 44px input height, and 42px button height.
            </p>
          </div>
          <Search
            label="Search"
            placeholder="Search Echo"
            value={defaultValue}
            onChange={(e) => setDefaultValue(e.target.value)}
            onSearch={(value) => console.log('Default search:', value)}
            onClear={() => setDefaultValue('')}
            size="default"
            showClear={true}
          />
          <div style={{ 
            marginTop: '12px',
            padding: '12px',
            backgroundColor: 'var(--base-white)',
            borderRadius: '4px',
            fontFamily: 'var(--type-typeface-roboto-flex)',
            fontSize: '13px',
            color: 'var(--neutral-gray-gray-600)'
          }}>
            <strong>Specs:</strong> Label: 16px Archivo Medium | Input: 16px Roboto Flex | Button: 42px height
          </div>
        </div>

        {/* Large Size */}
        <div style={{ 
          padding: '24px',
          border: '1px solid var(--neutral-gray-gray-200)',
          borderRadius: 'var(--spacing-radius-4px)',
          backgroundColor: '#fafbfc'
        }}>
          <div style={{ marginBottom: '16px' }}>
            <h3 style={{ 
              fontFamily: 'var(--type-typeface-archivo)',
              fontSize: '18px',
              fontWeight: '500',
              marginBottom: '8px',
              color: 'var(--base-black)'
            }}>
              Large Size
            </h3>
            <p style={{
              fontFamily: 'var(--type-typeface-roboto-flex)',
              fontSize: '14px',
              lineHeight: '20px',
              color: 'var(--neutral-gray-gray-600)',
              margin: '0'
            }}>
              Prominent variant with 18px font size, 54px input height, and 52px button height.
            </p>
          </div>
          <Search
            label="Search"
            placeholder="Search Echo"
            value={largeValue}
            onChange={(e) => setLargeValue(e.target.value)}
            onSearch={(value) => console.log('Large search:', value)}
            onClear={() => setLargeValue('')}
            size="large"
            showClear={true}
          />
          <div style={{ 
            marginTop: '12px',
            padding: '12px',
            backgroundColor: 'var(--base-white)',
            borderRadius: '4px',
            fontFamily: 'var(--type-typeface-roboto-flex)',
            fontSize: '13px',
            color: 'var(--neutral-gray-gray-600)'
          }}>
            <strong>Specs:</strong> Label: 18px Archivo Medium | Input: 18px Roboto Flex | Button: 52px height
          </div>
        </div>

        {/* Design Tokens Reference */}
        <div style={{ 
          padding: '24px',
          border: '2px dashed var(--neutral-gray-gray-300)',
          borderRadius: 'var(--spacing-radius-4px)',
          backgroundColor: 'var(--base-white)'
        }}>
          <h3 style={{ 
            fontFamily: 'var(--type-typeface-archivo)',
            fontSize: '18px',
            fontWeight: '500',
            marginBottom: '16px',
            color: 'var(--base-black)'
          }}>
            Design Tokens Used
          </h3>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px',
            fontFamily: 'var(--type-typeface-roboto-flex)',
            fontSize: '14px',
            lineHeight: '20px'
          }}>
            <div>
              <strong style={{ color: 'var(--base-black)' }}>Colors:</strong>
              <ul style={{ margin: '8px 0 0 0', padding: '0 0 0 20px', color: 'var(--neutral-gray-gray-700)' }}>
                <li>Primary Blue: #2F42BD</li>
                <li>Dark Blue: #191E3C</li>
                <li>Blue-Gray: #61607C</li>
                <li>Gray 300: #D2D5DA</li>
              </ul>
            </div>
            <div>
              <strong style={{ color: 'var(--base-black)' }}>Typography:</strong>
              <ul style={{ margin: '8px 0 0 0', padding: '0 0 0 20px', color: 'var(--neutral-gray-gray-700)' }}>
                <li>Labels: Archivo (300-500)</li>
                <li>Body: Roboto Flex (400)</li>
                <li>Sizes: 14px, 16px, 18px</li>
              </ul>
            </div>
            <div>
              <strong style={{ color: 'var(--base-black)' }}>Spacing:</strong>
              <ul style={{ margin: '8px 0 0 0', padding: '0 0 0 20px', color: 'var(--neutral-gray-gray-700)' }}>
                <li>Padding: 4px, 8px, 12px, 16px</li>
                <li>Border Radius: 2px, 4px</li>
                <li>Border Width: 0.5px</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all Search component size variants matching the Figma design specifications exactly. Demonstrates proper spacing, typography, colors, and interactive states.',
      },
    },
  },
};

export const FigmaSmallVariant: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div style={{ padding: '40px' }}>
        <Search
          label="Search"
          placeholder="Search Echo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onSearch={(value) => console.log('Search:', value)}
          onClear={() => setValue('')}
          size="small"
          showClear={true}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Small size variant - 14px font, 30px button height, compact spacing.',
      },
    },
  },
};

export const FigmaDefaultVariant: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div style={{ padding: '40px' }}>
        <Search
          label="Search"
          placeholder="Search Echo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onSearch={(value) => console.log('Search:', value)}
          onClear={() => setValue('')}
          size="default"
          showClear={true}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Default size variant - 16px font, 44px input height, 42px button height, standard spacing.',
      },
    },
  },
};

export const FigmaLargeVariant: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div style={{ padding: '40px' }}>
        <Search
          label="Search"
          placeholder="Search Echo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onSearch={(value) => console.log('Search:', value)}
          onClear={() => setValue('')}
          size="large"
          showClear={true}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Large size variant - 18px font, 54px input height, 52px button height, generous spacing.',
      },
    },
  },
};

export const FigmaInteractiveComparison: Story = {
  render: () => {
    const [searchTerms, setSearchTerms] = useState({
      small: '',
      default: '',
      large: ''
    });

    const updateSearch = (size: 'small' | 'default' | 'large', value: string) => {
      setSearchTerms(prev => ({ ...prev, [size]: value }));
    };

    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '32px', 
        padding: '40px',
        maxWidth: '600px'
      }}>
        <div>
          <h3 style={{ 
            fontFamily: 'var(--type-typeface-archivo)',
            fontSize: '20px',
            fontWeight: '500',
            marginBottom: '24px',
            color: 'var(--base-black)'
          }}>
            Interactive Size Comparison
          </h3>
        </div>

        <Search
          label="Search"
          placeholder="Search Echo"
          value={searchTerms.small}
          onChange={(e) => updateSearch('small', e.target.value)}
          onSearch={(value) => console.log('Small search:', value)}
          onClear={() => updateSearch('small', '')}
          size="small"
          showClear={true}
        />

        <Search
          label="Search"
          placeholder="Search Echo"
          value={searchTerms.default}
          onChange={(e) => updateSearch('default', e.target.value)}
          onSearch={(value) => console.log('Default search:', value)}
          onClear={() => updateSearch('default', '')}
          size="default"
          showClear={true}
        />

        <Search
          label="Search"
          placeholder="Search Echo"
          value={searchTerms.large}
          onChange={(e) => updateSearch('large', e.target.value)}
          onSearch={(value) => console.log('Large search:', value)}
          onClear={() => updateSearch('large', '')}
          size="large"
          showClear={true}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Side-by-side comparison of all three size variants with independent state management.',
      },
    },
  },
};

export const FigmaStatesShowcase: Story = {
  render: () => {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '32px', 
        padding: '40px',
        maxWidth: '600px'
      }}>
        <div>
          <h3 style={{ 
            fontFamily: 'var(--type-typeface-archivo)',
            fontSize: '20px',
            fontWeight: '500',
            marginBottom: '8px',
            color: 'var(--base-black)'
          }}>
            Empty State
          </h3>
          <p style={{
            fontFamily: 'var(--type-typeface-roboto-flex)',
            fontSize: '14px',
            color: 'var(--neutral-gray-gray-600)',
            marginBottom: '16px'
          }}>
            Default appearance with placeholder text and no clear button
          </p>
          <Search
            label="Search"
            placeholder="Search Echo"
            value=""
            size="default"
            showClear={true}
          />
        </div>

        <div>
          <h3 style={{ 
            fontFamily: 'var(--type-typeface-archivo)',
            fontSize: '20px',
            fontWeight: '500',
            marginBottom: '8px',
            color: 'var(--base-black)'
          }}>
            With Text
          </h3>
          <p style={{
            fontFamily: 'var(--type-typeface-roboto-flex)',
            fontSize: '14px',
            color: 'var(--neutral-gray-gray-600)',
            marginBottom: '16px'
          }}>
            Active state with text entered and clear button visible
          </p>
          <Search
            label="Search"
            placeholder="Search Echo"
            value="nuclear power"
            size="default"
            showClear={true}
            onChange={() => {}}
          />
        </div>

        <div>
          <h3 style={{ 
            fontFamily: 'var(--type-typeface-archivo)',
            fontSize: '20px',
            fontWeight: '500',
            marginBottom: '8px',
            color: 'var(--base-black)'
          }}>
            Disabled State
          </h3>
          <p style={{
            fontFamily: 'var(--type-typeface-roboto-flex)',
            fontSize: '14px',
            color: 'var(--neutral-gray-gray-600)',
            marginBottom: '16px'
          }}>
            Non-interactive state with reduced opacity
          </p>
          <Search
            label="Search"
            placeholder="Search Echo"
            value="disabled search"
            size="default"
            disabled={true}
            showClear={true}
          />
        </div>

        <div>
          <h3 style={{ 
            fontFamily: 'var(--type-typeface-archivo)',
            fontSize: '20px',
            fontWeight: '500',
            marginBottom: '8px',
            color: 'var(--base-black)'
          }}>
            Without Clear Button
          </h3>
          <p style={{
            fontFamily: 'var(--type-typeface-roboto-flex)',
            fontSize: '14px',
            color: 'var(--neutral-gray-gray-600)',
            marginBottom: '16px'
          }}>
            Alternative configuration without the clear functionality
          </p>
          <Search
            label="Search"
            placeholder="Search Echo"
            value="permanent text"
            size="default"
            showClear={false}
            onChange={() => {}}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all possible states: empty, with text, disabled, and without clear button.',
      },
    },
  },
};
