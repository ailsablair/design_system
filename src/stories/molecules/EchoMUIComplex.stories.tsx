import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { EchoMUIThemeProvider } from '../foundations/EchoMUITheme';
import { EchoMUITable } from '../atoms/EchoMUITable';
import { EchoMUIPagination } from '../atoms/EchoMUIPagination';
import { EchoMUIDataTable } from './EchoMUIDataTable';
import { EchoMUITag } from '../atoms/EchoMUITag';

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Stack,
  Avatar,
  Chip,
  Rating,
  LinearProgress,
} from '@mui/material';

import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as ViewIcon,
  Download as DownloadIcon,
  PersonAdd as PersonAddIcon,
  GetApp as ExportIcon,
} from '@mui/icons-material';

const meta = {
  title: 'Echo + MUI/Complex Components',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Echo + MUI Complex Components

Advanced data display and interaction components using MUI foundation with Echo design tokens.

## ✅ Enhanced Components:

### **EchoMUITable**
- Advanced sorting and filtering
- Row selection with bulk actions
- Responsive design
- Custom cell renderers

### **EchoMUIPagination**
- Smooth page transitions
- Keyboard navigation
- Customizable page counts
- First/last page navigation

### **EchoMUIDataTable**
- Complete data management solution
- Search and filtering
- Bulk operations
- Export functionality
- Real-time updates

All components maintain 100% Echo visual design while providing enterprise-grade functionality.
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Sample data for demonstrations
const generateSampleUsers = (count: number) => {
  const departments = ['Engineering', 'Design', 'Marketing', 'Sales', 'Operations'];
  const statuses = ['Active', 'Inactive', 'Pending'];
  const roles = ['Admin', 'User', 'Manager', 'Viewer'];
  
  return Array.from({ length: count }, (_, i) => ({
    id: `user-${i + 1}`,
    name: `User ${i + 1}`,
    email: `user${i + 1}@company.com`,
    department: departments[i % departments.length],
    role: roles[i % roles.length],
    status: statuses[i % statuses.length],
    lastActive: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    projects: Math.floor(Math.random() * 10) + 1,
    completion: Math.floor(Math.random() * 100),
    rating: Math.random() * 5,
    avatar: `https://api.dicebear.com/7.x/initials/svg?seed=User${i + 1}`,
  }));
};

const generateSampleProjects = (count: number) => {
  const statuses = ['Planning', 'In Progress', 'Review', 'Completed', 'On Hold'];
  const priorities = ['Low', 'Medium', 'High', 'Critical'];
  const types = ['Web App', 'Mobile App', 'API', 'Design System', 'Marketing'];
  
  return Array.from({ length: count }, (_, i) => ({
    id: `project-${i + 1}`,
    name: `Project ${i + 1}`,
    description: `Description for project ${i + 1}`,
    status: statuses[i % statuses.length],
    priority: priorities[i % priorities.length],
    type: types[i % types.length],
    progress: Math.floor(Math.random() * 100),
    dueDate: new Date(Date.now() + Math.random() * 90 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    teamSize: Math.floor(Math.random() * 8) + 2,
    budget: Math.floor(Math.random() * 100000) + 10000,
  }));
};

// Complex Components Showcase
export const ComplexShowcase: Story = {
  render: () => {
    const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);
    const [userPage, setUserPage] = useState(0);
    const [userSearch, setUserSearch] = useState('');
    const [sortConfig, setSortConfig] = useState<{ column: string; direction: 'asc' | 'desc' }>({
      column: 'name',
      direction: 'asc',
    });

    const [paginationPage, setPaginationPage] = useState(1);
    
    const users = generateSampleUsers(50);
    const projects = generateSampleProjects(25);

    // User table columns
    const userColumns = [
      {
        id: 'name',
        label: 'Name',
        sortable: true,
        render: (value: string, row: any) => (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar src={row.avatar} sx={{ width: 32, height: 32 }}>
              {value.charAt(0)}
            </Avatar>
            <Box>
              <Typography variant="body2" fontWeight="medium">
                {value}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {row.email}
              </Typography>
            </Box>
          </Box>
        ),
      },
      {
        id: 'department',
        label: 'Department',
        sortable: true,
        render: (value: string) => (
          <EchoMUITag 
            label={value} 
            variant={
              value === 'Engineering' ? 'blue' : 
              value === 'Design' ? 'purple' : 
              value === 'Marketing' ? 'orange' : 
              value === 'Sales' ? 'green' : 'gray'
            }
            size="small"
          />
        ),
      },
      {
        id: 'role',
        label: 'Role',
        sortable: true,
      },
      {
        id: 'status',
        label: 'Status',
        sortable: true,
        render: (value: string) => (
          <Chip
            label={value}
            size="small"
            color={
              value === 'Active' ? 'success' : 
              value === 'Inactive' ? 'error' : 'warning'
            }
            sx={{
              fontFamily: 'var(--type-typeface-roboto-flex)',
              fontSize: 'var(--type-size-xs)',
            }}
          />
        ),
      },
      {
        id: 'projects',
        label: 'Projects',
        align: 'center' as const,
        sortable: true,
      },
      {
        id: 'completion',
        label: 'Completion',
        align: 'center' as const,
        sortable: true,
        render: (value: number) => (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LinearProgress
              variant="determinate"
              value={value}
              sx={{
                width: 60,
                height: 6,
                backgroundColor: 'var(--neutral-gray-gray-200)',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: value > 75 ? 'var(--status-green)' : 
                                 value > 50 ? 'var(--status-orange)' : 'var(--status-red)',
                },
              }}
            />
            <Typography variant="caption">
              {value}%
            </Typography>
          </Box>
        ),
      },
    ];

    // User table actions
    const userActions = [
      {
        icon: <ViewIcon />,
        label: 'View',
        onClick: (row: any) => console.log('View user:', row),
        color: 'primary' as const,
      },
      {
        icon: <EditIcon />,
        label: 'Edit',
        onClick: (row: any) => console.log('Edit user:', row),
        color: 'secondary' as const,
      },
      {
        icon: <DeleteIcon />,
        label: 'Delete',
        onClick: (row: any) => console.log('Delete user:', row),
        color: 'error' as const,
      },
    ];

    // Project table columns
    const projectColumns = [
      {
        id: 'name',
        label: 'Project',
        sortable: true,
        render: (value: string, row: any) => (
          <Box>
            <Typography variant="body2" fontWeight="medium">
              {value}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {row.description}
            </Typography>
          </Box>
        ),
      },
      {
        id: 'status',
        label: 'Status',
        sortable: true,
        render: (value: string) => (
          <EchoMUITag 
            label={value} 
            variant={
              value === 'Completed' ? 'green' : 
              value === 'In Progress' ? 'blue' : 
              value === 'On Hold' ? 'red' : 'outline-blue'
            }
            size="small"
          />
        ),
      },
      {
        id: 'priority',
        label: 'Priority',
        sortable: true,
        render: (value: string) => (
          <EchoMUITag 
            label={value} 
            variant={
              value === 'Critical' ? 'red' : 
              value === 'High' ? 'orange' : 
              value === 'Medium' ? 'yellow' : 'gray'
            }
            size="small"
          />
        ),
      },
      {
        id: 'progress',
        label: 'Progress',
        align: 'center' as const,
        sortable: true,
        render: (value: number) => (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LinearProgress
              variant="determinate"
              value={value}
              sx={{
                width: 80,
                height: 6,
                backgroundColor: 'var(--neutral-gray-gray-200)',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: 'var(--primary-blue-blue)',
                },
              }}
            />
            <Typography variant="caption">
              {value}%
            </Typography>
          </Box>
        ),
      },
      {
        id: 'teamSize',
        label: 'Team',
        align: 'center' as const,
        sortable: true,
        render: (value: number) => `${value} members`,
      },
      {
        id: 'dueDate',
        label: 'Due Date',
        sortable: true,
      },
    ];

    const handleUserSort = (column: string, direction: 'asc' | 'desc') => {
      setSortConfig({ column, direction });
    };

    const bulkActions = [
      {
        label: 'Add to Project',
        icon: <PersonAddIcon />,
        onClick: (ids: string[]) => console.log('Add users to project:', ids),
        color: 'primary' as const,
      },
      {
        label: 'Export Selected',
        icon: <ExportIcon />,
        onClick: (ids: string[]) => console.log('Export users:', ids),
        color: 'secondary' as const,
      },
      {
        label: 'Delete Selected',
        icon: <DeleteIcon />,
        onClick: (ids: string[]) => console.log('Delete users:', ids),
        color: 'error' as const,
      },
    ];

    return (
      <EchoMUIThemeProvider>
        <Box sx={{ p: 4, maxWidth: 1400, mx: 'auto' }}>
          <Typography variant="h3" gutterBottom>
            Complex Components Showcase
          </Typography>
          
          <Stack spacing={4}>
            {/* Data Table Example */}
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom color="primary">
                  Enhanced DataTable
                </Typography>
                <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                  Complete data management with search, filtering, bulk actions, and pagination
                </Typography>

                <EchoMUIDataTable
                  title="Team Members"
                  columns={userColumns}
                  data={users}
                  searchable
                  searchPlaceholder="Search team members..."
                  selectable
                  selectedIds={selectedUserIds}
                  onSelectionChange={setSelectedUserIds}
                  sortable
                  sortBy={sortConfig.column}
                  sortDirection={sortConfig.direction}
                  onSortChange={handleUserSort}
                  actions={userActions}
                  bulkActions={bulkActions}
                  pagination
                  page={userPage}
                  rowsPerPage={10}
                  onPageChange={setUserPage}
                  exportable
                  onExport={() => console.log('Export all users')}
                />
              </CardContent>
            </Card>

            {/* Basic Table Example */}
            <Grid container spacing={4}>
              <Grid item xs={12} lg={8}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" gutterBottom color="primary">
                      Enhanced Table
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                      Basic table with sorting, selection, and actions
                    </Typography>

                    <EchoMUITable
                      columns={projectColumns}
                      data={projects.slice(0, 8)}
                      selectable
                      sortable
                      actions={[
                        {
                          icon: <ViewIcon />,
                          label: 'View Project',
                          onClick: (row) => console.log('View project:', row),
                          color: 'primary',
                        },
                        {
                          icon: <EditIcon />,
                          label: 'Edit Project',
                          onClick: (row) => console.log('Edit project:', row),
                          color: 'secondary',
                        },
                      ]}
                      hover
                    />
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} lg={4}>
                <Stack spacing={3}>
                  {/* Pagination Example */}
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom color="primary">
                        Enhanced Pagination
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                        Smooth navigation with keyboard support
                      </Typography>

                      <Stack spacing={3} alignItems="center">
                        <EchoMUIPagination
                          page={paginationPage}
                          count={20}
                          onChange={(_, page) => setPaginationPage(page)}
                          showFirstLast
                        />
                        
                        <Typography variant="caption" color="text.secondary">
                          Page {paginationPage} of 20
                        </Typography>
                        
                        <Box>
                          <Typography variant="subtitle2" gutterBottom>
                            Different Sizes:
                          </Typography>
                          <Stack spacing={2} alignItems="center">
                            <EchoMUIPagination
                              page={3}
                              count={10}
                              size="small"
                            />
                            <EchoMUIPagination
                              page={3}
                              count={10}
                              size="default"
                            />
                            <EchoMUIPagination
                              page={3}
                              count={10}
                              size="large"
                            />
                          </Stack>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>

                  {/* Statistics */}
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Demo Statistics
                      </Typography>
                      <Stack spacing={2}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2">Total Users:</Typography>
                          <Typography variant="body2" fontWeight="bold">
                            {users.length}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2">Selected Users:</Typography>
                          <Typography variant="body2" fontWeight="bold">
                            {selectedUserIds.length}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2">Total Projects:</Typography>
                          <Typography variant="body2" fontWeight="bold">
                            {projects.length}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2">Current Page:</Typography>
                          <Typography variant="body2" fontWeight="bold">
                            {paginationPage}
                          </Typography>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
            </Grid>

            {/* Features Summary */}
            <Card sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  🎯 Enhanced Complex Components
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                      Advanced Tables
                    </Typography>
                    <ul style={{ paddingLeft: '20px', lineHeight: 1.6 }}>
                      <li>Sortable columns with visual indicators</li>
                      <li>Row selection with bulk operations</li>
                      <li>Custom cell renderers</li>
                      <li>Responsive design</li>
                      <li>Loading and empty states</li>
                    </ul>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                      Smart Pagination
                    </Typography>
                    <ul style={{ paddingLeft: '20px', lineHeight: 1.6 }}>
                      <li>Keyboard navigation support</li>
                      <li>First/last page controls</li>
                      <li>Configurable page counts</li>
                      <li>Smooth transitions</li>
                      <li>Responsive design</li>
                    </ul>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                      Complete DataTable
                    </Typography>
                    <ul style={{ paddingLeft: '20px', lineHeight: 1.6 }}>
                      <li>Real-time search and filtering</li>
                      <li>Export functionality</li>
                      <li>Bulk operations</li>
                      <li>Server-side pagination support</li>
                      <li>Customizable toolbars</li>
                    </ul>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Stack>
        </Box>
      </EchoMUIThemeProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
**Complex Components Implementation**

This showcase demonstrates enterprise-grade data components using Echo + MUI:

### 🎯 Key Features:
- **Advanced Data Tables**: Sorting, filtering, selection, and custom renderers
- **Smart Pagination**: Keyboard navigation and responsive design
- **Complete DataTable**: Search, bulk actions, export, and real-time updates
- **Echo Design**: 100% Echo tokens for consistent visual design
- **Enhanced UX**: Better interactions and accessibility

### 📋 Components:
1. **EchoMUITable**: Basic table with sorting and actions
2. **EchoMUIPagination**: Advanced pagination with keyboard support  
3. **EchoMUIDataTable**: Complete data management solution

### 🚀 Benefits:
- Enterprise-grade functionality
- Consistent Echo visual design
- Enhanced accessibility and interactions
- Scalable for large datasets
- Customizable and extensible
        `,
      },
    },
  },
};
