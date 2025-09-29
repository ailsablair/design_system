import type { Meta, StoryObj } from '@storybook/react-vite';
import { Search } from './Search';
import { useState } from 'react';

const meta: Meta<typeof Search> = {
  title: 'Atoms/Search',
  component: Search,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive search input component with integrated search button. Features include magnifying glass icon, optional clear button, multiple size variants, and responsive design. Based on Figma design specifications.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label text for the search input',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text shown in the input',
    },
    value: {
      control: { type: 'text' },
      description: 'Current value of the search input',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
      description: 'Size variant of the search component',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
    showClear: {
      control: { type: 'boolean' },
      description: 'Show the clear/close button when there is text',
    },
    onChange: { action: 'changed' },
    onSearch: { action: 'searched' },
    onClear: { action: 'cleared' },
    onFocus: { action: 'focused' },
    onBlur: { action: 'blurred' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search Echo',
    size: 'default',
  },
};

export const Small: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search Echo',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search Echo',
    size: 'large',
  },
};

// Interactive Examples
export const WithValue: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search Echo',
    value: 'nuclear power',
    size: 'default',
    showClear: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search Echo',
    value: 'disabled search',
    size: 'default',
    disabled: true,
  },
};

export const WithoutClearButton: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search Echo',
    value: 'some text',
    size: 'default',
    showClear: false,
  },
};

// Interactive Search Component
export const InteractiveSearch: Story = {
  render: () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState<string[]>([]);

    const handleSearch = (value: string) => {
      // Simulate search functionality
      const mockResults = [
        'Nuclear power plant safety',
        'Nuclear reactor design',
        'Nuclear waste management',
        'Nuclear energy benefits',
        'Nuclear power regulations',
      ].filter(item => 
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(mockResults);
    };

    const handleClear = () => {
      setSearchValue('');
      setSearchResults([]);
    };

    return (
      <div style={{ width: '400px' }}>
        <Search
          label="Interactive Search"
          placeholder="Search nuclear topics..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onSearch={handleSearch}
          onClear={handleClear}
          size="default"
        />
        
        {searchResults.length > 0 && (
          <div style={{ 
            marginTop: '16px',
            padding: '12px',
            border: '1px solid var(--neutral-gray-gray-300)',
            borderRadius: '4px',
            backgroundColor: 'var(--base-white)'
          }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Search Results:</h4>
            <ul style={{ margin: '0', padding: '0', listStyle: 'none' }}>
              {searchResults.map((result, index) => (
                <li key={index} style={{ 
                  padding: '4px 0',
                  fontSize: '14px',
                  color: 'var(--base-black)'
                }}>
                  {result}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'An interactive example showing the search component with simulated search functionality and results display.',
      },
    },
  },
};

// All Sizes Comparison
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '20px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Small Size</h3>
        <Search
          label="Search"
          placeholder="Search Echo"
          size="small"
          value="small search"
        />
      </div>
      
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Default Size</h3>
        <Search
          label="Search"
          placeholder="Search Echo"
          size="default"
          value="default search"
        />
      </div>
      
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Large Size</h3>
        <Search
          label="Search"
          placeholder="Search Echo"
          size="large"
          value="large search"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available size variants: small, default, and large.',
      },
    },
  },
};

// States Showcase
export const StatesShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Default State</h3>
        <Search
          label="Search"
          placeholder="Search Echo"
          size="default"
        />
      </div>
      
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>With Text</h3>
        <Search
          label="Search"
          placeholder="Search Echo"
          value="nuclear reactor"
          size="default"
        />
      </div>
      
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Without Clear Button</h3>
        <Search
          label="Search"
          placeholder="Search Echo"
          value="no clear button"
          size="default"
          showClear={false}
        />
      </div>
      
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Disabled State</h3>
        <Search
          label="Search"
          placeholder="Search Echo"
          value="disabled"
          size="default"
          disabled={true}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of different states: default, with text, without clear button, and disabled.',
      },
    },
  },
};

// Responsive Design Demo
export const ResponsiveDemo: Story = {
  render: () => (
    <div style={{ width: '100%', padding: '20px' }}>
      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>
        Responsive Search (Resize browser to see adaptation)
      </h3>
      <Search
        label="Responsive Search"
        placeholder="Try resizing the browser window"
        size="default"
        value="responsive"
      />
      <p style={{ 
        marginTop: '16px', 
        fontSize: '14px', 
        color: 'var(--neutral-gray-gray-600)',
        maxWidth: '400px'
      }}>
        This search component adapts to different screen sizes. On mobile devices, 
        the search button text becomes smaller and the input takes full width.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of the responsive behavior across different screen sizes.',
      },
    },
    viewport: {
      defaultViewport: 'responsive',
    },
  },
};

// Custom Styling Example
export const CustomStyling: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <Search
        label="Custom Styled Search"
        placeholder="Search with custom styling"
        size="default"
        className="custom-search"
        style={{
          '--search-max-width': '500px',
          '--search-input-width': '350px',
        } as React.CSSProperties}
      />
      <style>{`
        .custom-search {
          max-width: var(--search-max-width, 400px);
        }
        .custom-search .search-input-container {
          width: var(--search-input-width, 300px);
        }
      `}</style>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example showing how to customize the search component with additional CSS.',
      },
    },
  },
};

// Accessibility Demo
export const AccessibilityDemo: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>
          Accessibility Features
        </h3>
        <Search
          id="accessible-search"
          label="Accessible Search Input"
          placeholder="Try keyboard navigation"
          size="default"
          value="test accessibility"
        />
      </div>
      
      <div style={{ 
        padding: '16px',
        backgroundColor: 'var(--neutral-gray-gray-50)',
        borderRadius: '4px',
        fontSize: '14px',
        color: 'var(--neutral-gray-gray-700)'
      }}>
        <h4 style={{ margin: '0 0 8px 0' }}>Accessibility Features:</h4>
        <ul style={{ margin: '0', paddingLeft: '20px' }}>
          <li>Proper label association with htmlFor</li>
          <li>ARIA labels for buttons</li>
          <li>Keyboard navigation support (Tab, Enter)</li>
          <li>Focus visible indicators</li>
          <li>High contrast mode support</li>
          <li>Reduced motion preference respected</li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of accessibility features including keyboard navigation, ARIA labels, and focus management.',
      },
    },
  },
};
