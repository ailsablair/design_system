import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SearchBar } from './SearchBar';
import { FormField } from './FormField';
import { FilterGroup } from './FilterGroup';
import { ActionBar } from './ActionBar';
import { DataDisplay } from './DataDisplay';
import { UserCard } from './UserCard';

const meta = {
  title: 'Molecules/Overview',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Echo Molecules Collection

Molecule components built from Echo atomic components, providing common UI patterns and interactions.

## ✅ Available Molecules:

### **Form & Input Molecules:**
- **SearchBar** - Input + Button with search functionality
- **FormField** - Label + Input + validation messages
- **FilterGroup** - Multiple checkboxes/radio buttons for filtering

### **Layout & Navigation Molecules:**
- **ActionBar** - Multiple buttons with flexible alignment
- **DataDisplay** - Table + Pagination + Search + Filters

### **Content & Display Molecules:**
- **UserCard** - Avatar + User info + Actions in card format

## 🎯 Design Principles:

- **Composable**: Built from Echo atomic components
- **Flexible**: Configurable layouts and behaviors  
- **Accessible**: Full keyboard navigation and ARIA support
- **Responsive**: Mobile-first responsive design
- **Consistent**: Uses Echo design tokens throughout
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Sample data for demonstrations
const sampleUsers = [
  {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    role: 'Senior Product Designer',
    company: 'TechFlow Inc.',
    avatar: undefined,
    status: 'online' as const,
    location: 'San Francisco, CA',
    skills: ['UI Design', 'Prototyping', 'User Research', 'Figma', 'Design Systems'],
    lastSeen: '2 minutes ago',
  },
  {
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
    role: 'Frontend Developer',
    company: 'Digital Solutions',
    avatar: undefined,
    status: 'away' as const,
    location: 'New York, NY',
    skills: ['React', 'TypeScript', 'CSS', 'JavaScript'],
    lastSeen: '1 hour ago',
  },
  {
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@example.com',
    role: 'UX Researcher',
    company: 'Innovation Labs',
    avatar: undefined,
    status: 'busy' as const,
    location: 'Austin, TX',
    skills: ['User Research', 'Data Analysis', 'Survey Design'],
    lastSeen: '3 hours ago',
  },
];

const sampleTableData = [
  {
    id: '1',
    name: 'Project Alpha',
    status: 'In Progress',
    priority: 'High',
    assignee: 'Sarah Johnson',
    dueDate: '2024-01-15',
    progress: 75,
  },
  {
    id: '2',
    name: 'Project Beta',
    status: 'Completed',
    priority: 'Medium',
    assignee: 'Michael Chen',
    dueDate: '2024-01-10',
    progress: 100,
  },
  {
    id: '3',
    name: 'Project Gamma',
    status: 'Planning',
    priority: 'Low',
    assignee: 'Emily Rodriguez',
    dueDate: '2024-01-20',
    progress: 25,
  },
];

const sampleTableColumns = [
  { key: 'name', label: 'Project Name', sortable: true },
  { key: 'status', label: 'Status', sortable: true, type: 'status' as const },
  { key: 'priority', label: 'Priority', sortable: true },
  { key: 'assignee', label: 'Assignee', sortable: true },
  { key: 'dueDate', label: 'Due Date', sortable: true },
  { key: 'progress', label: 'Progress', sortable: true },
];

// Molecules Showcase Story
export const MoleculesShowcase: Story = {
  render: () => {
    const [searchValue, setSearchValue] = React.useState('');
    const [formData, setFormData] = React.useState({
      username: '',
      email: '',
      password: '',
    });
    const [selectedFilters, setSelectedFilters] = React.useState<string[]>([]);
    const [selectedPriority, setSelectedPriority] = React.useState<string>('');

    return (
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {/* Header */}
        <div>
          <h1 style={{ margin: '0 0 8px 0', fontFamily: 'var(--type-typeface-archivo)', fontSize: '36px', fontWeight: 600 }}>
            Echo Molecules
          </h1>
          <p style={{ margin: 0, color: 'var(--neutral-gray-gray-600)', fontSize: '18px' }}>
            Composed components built from Echo atomic components
          </p>
        </div>

        {/* SearchBar */}
        <section>
          <h2 style={{ margin: '0 0 16px 0', fontFamily: 'var(--type-typeface-archivo)', fontSize: '24px', fontWeight: 600 }}>
            SearchBar
          </h2>
          <p style={{ margin: '0 0 16px 0', color: 'var(--neutral-gray-gray-600)' }}>
            Input + Button combination for search functionality
          </p>
          <div style={{ maxWidth: '500px' }}>
            <SearchBar
              placeholder="Search projects, users, or documents..."
              value={searchValue}
              onChange={setSearchValue}
              onSearch={(value) => console.log('Searching for:', value)}
              onClear={() => setSearchValue('')}
            />
          </div>
        </section>

        {/* FormField */}
        <section>
          <h2 style={{ margin: '0 0 16px 0', fontFamily: 'var(--type-typeface-archivo)', fontSize: '24px', fontWeight: 600 }}>
            FormField
          </h2>
          <p style={{ margin: '0 0 16px 0', color: 'var(--neutral-gray-gray-600)' }}>
            Label + Input + validation in a structured field component
          </p>
          <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <FormField
              label="Username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              required
              description="Must be at least 3 characters long"
            />
            <FormField
              label="Email Address"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              successMessage={formData.email.includes('@') ? 'Valid email format' : undefined}
              errorMessage={formData.email && !formData.email.includes('@') ? 'Please enter a valid email' : undefined}
            />
            <FormField
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              description="Password must be at least 8 characters"
              errorMessage={formData.password && formData.password.length < 8 ? 'Password too short' : undefined}
            />
          </div>
        </section>

        {/* FilterGroup */}
        <section>
          <h2 style={{ margin: '0 0 16px 0', fontFamily: 'var(--type-typeface-archivo)', fontSize: '24px', fontWeight: 600 }}>
            FilterGroup
          </h2>
          <p style={{ margin: '0 0 16px 0', color: 'var(--neutral-gray-gray-600)' }}>
            Grouped checkboxes or radio buttons for filtering and selection
          </p>
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            <FilterGroup
              title="Project Status"
              type="checkbox"
              layout="vertical"
              showSelectAll
              options={[
                { value: 'planning', label: 'Planning' },
                { value: 'in-progress', label: 'In Progress' },
                { value: 'review', label: 'Under Review' },
                { value: 'completed', label: 'Completed' },
                { value: 'on-hold', label: 'On Hold' },
              ]}
              selectedValues={selectedFilters}
              onSelectionChange={setSelectedFilters}
            />
            <FilterGroup
              title="Priority Level"
              type="radio"
              layout="vertical"
              options={[
                { value: 'low', label: 'Low Priority' },
                { value: 'medium', label: 'Medium Priority' },
                { value: 'high', label: 'High Priority' },
                { value: 'urgent', label: 'Urgent' },
              ]}
              selectedValue={selectedPriority}
              onValueChange={setSelectedPriority}
            />
          </div>
        </section>

        {/* ActionBar */}
        <section>
          <h2 style={{ margin: '0 0 16px 0', fontFamily: 'var(--type-typeface-archivo)', fontSize: '24px', fontWeight: 600 }}>
            ActionBar
          </h2>
          <p style={{ margin: '0 0 16px 0', color: 'var(--neutral-gray-gray-600)' }}>
            Flexible button groupings with various alignments and layouts
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>Left Aligned</h4>
              <ActionBar
                actions={[
                  { id: 'save', label: 'Save', type: 'primary' },
                  { id: 'cancel', label: 'Cancel', type: 'secondary' },
                  { id: 'delete', label: 'Delete', type: 'error' },
                ]}
                alignment="left"
                spacing="default"
              />
            </div>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>Space Between</h4>
              <ActionBar
                actions={[
                  { id: 'back', label: 'Back', type: 'ghost' },
                  { id: 'continue', label: 'Continue', type: 'primary' },
                ]}
                alignment="space-between"
                spacing="default"
              />
            </div>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>Right Aligned</h4>
              <ActionBar
                actions={[
                  { id: 'export', label: 'Export', type: 'secondary' },
                  { id: 'share', label: 'Share', type: 'secondary' },
                  { id: 'publish', label: 'Publish', type: 'primary' },
                ]}
                alignment="right"
                spacing="compact"
              />
            </div>
          </div>
        </section>

        {/* UserCard */}
        <section>
          <h2 style={{ margin: '0 0 16px 0', fontFamily: 'var(--type-typeface-archivo)', fontSize: '24px', fontWeight: 600 }}>
            UserCard
          </h2>
          <p style={{ margin: '0 0 16px 0', color: 'var(--neutral-gray-gray-600)' }}>
            Avatar + User information + Actions combined in card format
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', maxWidth: '1000px' }}>
            {sampleUsers.map((user, index) => (
              <UserCard
                key={index}
                user={user}
                layout="vertical"
                showActions
                showSkills
                showStatus
                showContact
                onMessage={(user) => console.log('Message:', user.name)}
                onConnect={(user) => console.log('Connect:', user.name)}
              />
            ))}
          </div>
        </section>

        {/* DataDisplay */}
        <section>
          <h2 style={{ margin: '0 0 16px 0', fontFamily: 'var(--type-typeface-archivo)', fontSize: '24px', fontWeight: 600 }}>
            DataDisplay
          </h2>
          <p style={{ margin: '0 0 16px 0', color: 'var(--neutral-gray-gray-600)' }}>
            Table + Search + Filters + Pagination combined for data management
          </p>
          <DataDisplay
            title="Project Management"
            subtitle="Track and manage your projects with advanced filtering and search"
            data={sampleTableData}
            columns={sampleTableColumns}
            showSearch
            searchPlaceholder="Search projects..."
            showFilters
            filterGroups={[
              {
                title: 'Status',
                key: 'status',
                type: 'checkbox',
                options: [
                  { value: 'Planning', label: 'Planning' },
                  { value: 'In Progress', label: 'In Progress' },
                  { value: 'Completed', label: 'Completed' },
                ],
              },
              {
                title: 'Priority',
                key: 'priority',
                type: 'radio',
                options: [
                  { value: 'Low', label: 'Low' },
                  { value: 'Medium', label: 'Medium' },
                  { value: 'High', label: 'High' },
                ],
              },
            ]}
            showActions
            actions={[
              { id: 'add', label: 'Add Project', type: 'primary' },
              { id: 'import', label: 'Import', type: 'secondary' },
            ]}
            showExport
            searchFields={['name', 'assignee']}
            itemsPerPage={5}
            onSearch={(term) => console.log('Search:', term)}
            onFilterChange={(filters) => console.log('Filters:', filters)}
            onExport={(data) => console.log('Export:', data)}
          />
        </section>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
**Complete Molecules Showcase**

This showcase demonstrates all available molecule components:

### 🧩 Components Demonstrated:
1. **SearchBar**: Input + Button for search functionality
2. **FormField**: Label + Input + validation for form fields
3. **FilterGroup**: Grouped checkboxes/radios for filtering
4. **ActionBar**: Multiple buttons with flexible layouts
5. **UserCard**: Avatar + User info + Actions in card format
6. **DataDisplay**: Table + Search + Filters + Pagination

### 🚀 Key Features:
- **Composable**: Built from Echo atomic components
- **Accessible**: Full ARIA support and keyboard navigation
- **Responsive**: Mobile-first responsive design
- **Flexible**: Highly configurable layouts and behaviors
- **Consistent**: Uses Echo design tokens throughout

### 📋 Usage Patterns:
- Form interfaces with validation
- Data tables with filtering and search
- User directory and team pages
- Dashboard interfaces
- Content management systems
        `,
      },
    },
  },
};

// Individual component stories for focused testing
export const SearchBarVariants: Story = {
  render: () => (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
      <SearchBar placeholder="Default search bar" />
      <SearchBar placeholder="Without button" showButton={false} />
      <SearchBar placeholder="Small size" size="small" />
      <SearchBar placeholder="Large size" size="large" />
    </div>
  ),
};

export const UserCardVariants: Story = {
  render: () => (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
        {sampleUsers.map((user, index) => (
          <UserCard
            key={`vertical-${index}`}
            user={user}
            layout="vertical"
          />
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {sampleUsers.map((user, index) => (
          <UserCard
            key={`horizontal-${index}`}
            user={user}
            layout="horizontal"
          />
        ))}
      </div>
    </div>
  ),
};
