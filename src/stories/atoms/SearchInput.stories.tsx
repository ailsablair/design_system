import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from './SearchInput';
import { useState } from 'react';

const meta: Meta<typeof SearchInput> = {
  title: 'Atoms/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A search input component with search icon, clear button, and search action button. Supports different sizes and states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'default', 'large'],
      description: 'Size variant',
    },
    value: {
      control: 'text',
      description: 'Search value',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    label: {
      control: 'text',
      description: 'Label text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    onSearch: {
      action: 'searched',
      description: 'Callback fired when search button is clicked or Enter is pressed',
    },
    onChange: {
      action: 'changed',
      description: 'Callback fired when input value changes',
    },
    onClear: {
      action: 'cleared',
      description: 'Callback fired when clear button is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    size: 'default',
    label: 'Search',
    placeholder: 'Search Echo',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Search',
    placeholder: 'Search Echo',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Search',
    placeholder: 'Search Echo',
  },
};

export const WithValue: Story = {
  args: {
    size: 'default',
    label: 'Search',
    placeholder: 'Search Echo',
    value: 'React components',
  },
};

export const Disabled: Story = {
  args: {
    size: 'default',
    label: 'Search',
    placeholder: 'Search Echo',
    disabled: true,
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    const [searchResults, setSearchResults] = useState<string | null>(null);

    const handleSearch = (searchValue: string) => {
      setSearchResults(`Searching for: "${searchValue}"`);
      setTimeout(() => setSearchResults(null), 2000);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <SearchInput
          {...args}
          value={value}
          onChange={setValue}
          onSearch={handleSearch}
          onClear={() => setValue('')}
        />
        {searchResults && (
          <div style={{ 
            padding: '8px 12px', 
            background: '#e3f2fd', 
            borderRadius: '4px',
            color: '#1976d2',
            fontSize: '14px'
          }}>
            {searchResults}
          </div>
        )}
      </div>
    );
  },
  args: {
    size: 'default',
    label: 'Search',
    placeholder: 'Search Echo',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'flex-start' }}>
      <div style={{ width: '100%' }}>
        <p style={{ marginBottom: '8px', fontWeight: 500 }}>Small</p>
        <SearchInput size="small" label="Search" placeholder="Search Echo" />
      </div>
      <div style={{ width: '100%' }}>
        <p style={{ marginBottom: '8px', fontWeight: 500 }}>Default</p>
        <SearchInput size="default" label="Search" placeholder="Search Echo" />
      </div>
      <div style={{ width: '100%' }}>
        <p style={{ marginBottom: '8px', fontWeight: 500 }}>Large</p>
        <SearchInput size="large" label="Search" placeholder="Search Echo" />
      </div>
    </div>
  ),
};

export const WithoutLabel: Story = {
  args: {
    size: 'default',
    placeholder: 'Search Echo',
    label: '',
  },
};

export const CustomPlaceholder: Story = {
  args: {
    size: 'default',
    label: 'Search',
    placeholder: 'Type to search components...',
  },
};

export const SearchDemo: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [results, setResults] = useState<string[]>([]);

    const mockData = [
      'Button Component',
      'Input Component',
      'Counter Component',
      'Search Component',
      'Toggle Component',
      'Card Component',
      'Avatar Component',
    ];

    const handleSearch = (searchValue: string) => {
      if (!searchValue.trim()) {
        setResults([]);
        return;
      }
      const filtered = mockData.filter(item =>
        item.toLowerCase().includes(searchValue.toLowerCase())
      );
      setResults(filtered);
    };

    const handleChange = (newValue: string) => {
      setValue(newValue);
      if (!newValue.trim()) {
        setResults([]);
      }
    };

    return (
      <div style={{ width: '400px' }}>
        <SearchInput
          size="default"
          label="Search Components"
          placeholder="Type to search..."
          value={value}
          onChange={handleChange}
          onSearch={handleSearch}
          onClear={() => {
            setValue('');
            setResults([]);
          }}
        />
        {results.length > 0 && (
          <div style={{ 
            marginTop: '16px', 
            border: '1px solid #e0e0e0', 
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            {results.map((result, index) => (
              <div
                key={index}
                style={{
                  padding: '12px 16px',
                  borderBottom: index < results.length - 1 ? '1px solid #e0e0e0' : 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                {result}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  },
};
