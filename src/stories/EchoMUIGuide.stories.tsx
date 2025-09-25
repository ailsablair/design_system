import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { EchoMUIThemeProvider } from './foundations/EchoMUITheme';
import { EchoMUIButton } from './atoms/EchoMUIButton';
import { EchoMUIInput } from './atoms/EchoMUIInput';
import { EchoMUISelect } from './atoms/EchoMUISelect';
import { EchoMUICheckbox } from './atoms/EchoMUICheckbox';
import { EchoMUIDataTable } from './molecules/EchoMUIDataTable';
import { EchoMUICard, EchoMUIStack, EchoMUIContainer } from './atoms/EchoMUILayout';

import {
  Typography,
  Box,
  Paper,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Alert,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tabs,
  Tab,
} from '@mui/material';

import {
  CheckCircle as CheckIcon,
  Code as CodeIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
  Accessibility as AccessibilityIcon,
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`guide-tabpanel-${index}`}
      aria-labelledby={`guide-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const meta = {
  title: 'Migration Guide/Complete Implementation Guide',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Complete Echo + MUI Implementation Guide

Comprehensive guide for implementing MUI components with Echo design tokens in your application.

## 🎯 What You'll Learn:

1. **Setup & Integration** - How to integrate the theme provider
2. **Component Migration** - Step-by-step migration strategies  
3. **Best Practices** - Recommended patterns and approaches
4. **Performance** - Optimization tips and considerations
5. **Troubleshooting** - Common issues and solutions

This guide provides everything you need to successfully implement Echo + MUI in your project.
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const ImplementationGuide: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState(0);
    const [activeTab, setActiveTab] = useState(0);

    const steps = [
      {
        label: 'Install Dependencies',
        description: 'Add required MUI packages to your project',
        code: `npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
# or
yarn add @mui/material @mui/icons-material @emotion/react @emotion/styled`,
      },
      {
        label: 'Setup Theme Provider',
        description: 'Integrate EchoMUIThemeProvider in your app',
        code: `import { EchoMUIThemeProvider } from './foundations/EchoMUITheme';

function App() {
  return (
    <EchoMUIThemeProvider>
      {/* Your app content */}
    </EchoMUIThemeProvider>
  );
}`,
      },
      {
        label: 'Import Components',
        description: 'Start using Echo+MUI components',
        code: `import { EchoMUIButton } from './atoms/EchoMUIButton';
import { EchoMUIInput } from './atoms/EchoMUIInput';
import { EchoMUIDataTable } from './molecules/EchoMUIDataTable';

// Use in your components
<EchoMUIButton variant="primary">
  Enhanced Button
</EchoMUIButton>`,
      },
      {
        label: 'Migrate Gradually',
        description: 'Replace components progressively',
        code: `// Keep existing components
<Button type="primary">Original</Button>

// Add enhanced versions where needed
<EchoMUIButton variant="primary" enhancedInteractions>
  Enhanced
</EchoMUIButton>`,
      },
      {
        label: 'Test & Optimize',
        description: 'Verify functionality and performance',
        code: `// Test accessibility
npm run test:a11y

// Run visual regression tests
npm run test:visual

// Check bundle size
npm run analyze`,
      },
    ];

    const componentMap = [
      {
        category: 'Forms',
        echo: 'Input',
        mui: 'EchoMUIInput',
        benefits: ['Enhanced focus states', 'Better validation', 'Accessibility'],
        migration: 'Replace <Input> with <EchoMUIInput>, update prop names',
      },
      {
        category: 'Forms',
        echo: 'Checkbox',
        mui: 'EchoMUICheckbox',
        benefits: ['Ripple effects', 'Better keyboard nav', 'Indeterminate state'],
        migration: 'Update props: state → variant, add enhanced interactions',
      },
      {
        category: 'Interactive',
        echo: 'Button',
        mui: 'EchoMUIButton',
        benefits: ['Ripple effects', 'Loading states', 'Better touch targets'],
        migration: 'Replace type prop with variant, add enhancedInteractions',
      },
      {
        category: 'Data',
        echo: 'Table',
        mui: 'EchoMUITable',
        benefits: ['Advanced sorting', 'Row selection', 'Better pagination'],
        migration: 'Restructure column configuration, add enhanced features',
      },
      {
        category: 'Layout',
        echo: 'Card',
        mui: 'EchoMUICard',
        benefits: ['Interactive states', 'Better shadows', 'Flexible padding'],
        migration: 'Replace with EchoMUICard, update padding props',
      },
    ];

    return (
      <EchoMUIThemeProvider>
        <EchoMUIContainer maxWidth="xl" padding="large">
          <EchoMUIStack spacing="large">
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography variant="h2" gutterBottom sx={{ fontFamily: 'var(--font-family-heading)' }}>
                Echo + MUI Implementation Guide
              </Typography>
              <Typography variant="h5" color="text.secondary" paragraph>
                Complete guide to integrating MUI with your Echo design system
              </Typography>
              
              <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                <Grid item>
                  <Chip 
                    icon={<CheckIcon />} 
                    label="Production Ready" 
                    color="success"
                    sx={{ fontFamily: 'var(--type-typeface-roboto-flex)' }}
                  />
                </Grid>
                <Grid item>
                  <Chip 
                    icon={<SpeedIcon />} 
                    label="Performance Optimized" 
                    color="primary"
                    sx={{ fontFamily: 'var(--type-typeface-roboto-flex)' }}
                  />
                </Grid>
                <Grid item>
                  <Chip 
                    icon={<AccessibilityIcon />} 
                    label="Accessibility Enhanced" 
                    color="secondary"
                    sx={{ fontFamily: 'var(--type-typeface-roboto-flex)' }}
                  />
                </Grid>
              </Grid>
            </Box>

            {/* Tab Navigation */}
            <Paper sx={{ width: '100%' }}>
              <Tabs
                value={activeTab}
                onChange={(e, newValue) => setActiveTab(newValue)}
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                  borderBottom: 1,
                  borderColor: 'divider',
                  '& .MuiTab-root': {
                    fontFamily: 'var(--type-typeface-archivo)',
                    textTransform: 'none',
                  },
                }}
              >
                <Tab label="Quick Start" />
                <Tab label="Step-by-Step Setup" />
                <Tab label="Component Migration" />
                <Tab label="Best Practices" />
                <Tab label="Troubleshooting" />
              </Tabs>

              {/* Quick Start Tab */}
              <TabPanel value={activeTab} index={0}>
                <Typography variant="h4" gutterBottom>
                  🚀 Quick Start
                </Typography>
                <Typography variant="body1" paragraph>
                  Get up and running with Echo + MUI in under 10 minutes.
                </Typography>

                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Alert severity="info" sx={{ mb: 3 }}>
                      <Typography variant="body2">
                        <strong>Prerequisites:</strong> Existing React app with Echo design system
                      </Typography>
                    </Alert>

                    <Paper sx={{ p: 3, bgcolor: 'grey.900', color: 'white' }}>
                      <Typography variant="h6" gutterBottom sx={{ color: 'success.light' }}>
                        1. Install MUI
                      </Typography>
                      <Typography variant="body2" sx={{ fontFamily: 'monospace', mb: 2 }}>
                        npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
                      </Typography>

                      <Typography variant="h6" gutterBottom sx={{ color: 'success.light' }}>
                        2. Add Theme Provider
                      </Typography>
                      <Typography variant="body2" sx={{ fontFamily: 'monospace', mb: 2 }}>
                        {`import { EchoMUIThemeProvider } from './foundations/EchoMUITheme';

function App() {
  return (
    <EchoMUIThemeProvider>
      {/* Your app */}
    </EchoMUIThemeProvider>
  );
}`}
                      </Typography>

                      <Typography variant="h6" gutterBottom sx={{ color: 'success.light' }}>
                        3. Use Components
                      </Typography>
                      <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
                        {`<EchoMUIButton variant="primary" enhancedInteractions>
  Enhanced Button
</EchoMUIButton>`}
                      </Typography>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                      Live Demo
                    </Typography>
                    <EchoMUICard padding="medium">
                      <EchoMUIStack spacing="medium">
                        <EchoMUIInput
                          label="Your Name"
                          placeholder="Enter your name"
                          showLeadingIcon
                        />
                        <EchoMUISelect
                          label="Department"
                          options={[
                            { value: 'eng', label: 'Engineering' },
                            { value: 'design', label: 'Design' },
                            { value: 'product', label: 'Product' },
                          ]}
                        />
                        <EchoMUICheckbox label="I agree to the terms" />
                        <EchoMUIButton variant="primary" fullWidth>
                          Submit Form
                        </EchoMUIButton>
                      </EchoMUIStack>
                    </EchoMUICard>
                    
                    <Alert severity="success" sx={{ mt: 2 }}>
                      This form uses 100% Echo design tokens with MUI functionality!
                    </Alert>
                  </Grid>
                </Grid>
              </TabPanel>

              {/* Step-by-Step Setup Tab */}
              <TabPanel value={activeTab} index={1}>
                <Typography variant="h4" gutterBottom>
                  📋 Step-by-Step Setup
                </Typography>
                <Typography variant="body1" paragraph>
                  Detailed implementation steps with code examples.
                </Typography>

                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((step, index) => (
                    <Step key={step.label}>
                      <StepLabel 
                        onClick={() => setActiveStep(index)}
                        sx={{ cursor: 'pointer' }}
                      >
                        <Typography variant="h6">{step.label}</Typography>
                      </StepLabel>
                      <StepContent>
                        <Typography variant="body1" paragraph>
                          {step.description}
                        </Typography>
                        <Paper sx={{ p: 2, bgcolor: 'grey.900', color: 'white', mb: 2 }}>
                          <Typography variant="body2" sx={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
                            {step.code}
                          </Typography>
                        </Paper>
                        <Box sx={{ mb: 2 }}>
                          <EchoMUIButton
                            variant="primary"
                            size="small"
                            onClick={() => setActiveStep(index + 1)}
                            disabled={index === steps.length - 1}
                          >
                            {index === steps.length - 1 ? 'Complete' : 'Next'}
                          </EchoMUIButton>
                          {index > 0 && (
                            <EchoMUIButton
                              variant="tertiary"
                              size="small"
                              onClick={() => setActiveStep(index - 1)}
                              sx={{ ml: 1 }}
                            >
                              Back
                            </EchoMUIButton>
                          )}
                        </Box>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
              </TabPanel>

              {/* Component Migration Tab */}
              <TabPanel value={activeTab} index={2}>
                <Typography variant="h4" gutterBottom>
                  🔄 Component Migration
                </Typography>
                <Typography variant="body1" paragraph>
                  Map your existing Echo components to enhanced Echo+MUI versions.
                </Typography>

                <EchoMUIDataTable
                  title="Component Migration Map"
                  columns={[
                    {
                      id: 'category',
                      label: 'Category',
                      sortable: true,
                      render: (value) => (
                        <Chip 
                          label={value} 
                          size="small"
                          color={
                            value === 'Forms' ? 'primary' :
                            value === 'Interactive' ? 'secondary' :
                            value === 'Data' ? 'success' : 'default'
                          }
                        />
                      ),
                    },
                    { id: 'echo', label: 'Echo Component', sortable: true },
                    { 
                      id: 'mui', 
                      label: 'Enhanced Version', 
                      sortable: true,
                      render: (value) => (
                        <Typography variant="body2" sx={{ fontFamily: 'monospace', color: 'primary.main' }}>
                          {value}
                        </Typography>
                      ),
                    },
                    {
                      id: 'benefits',
                      label: 'Key Benefits',
                      render: (benefits) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {benefits.map((benefit: string, index: number) => (
                            <Chip key={index} label={benefit} size="small" variant="outlined" />
                          ))}
                        </Box>
                      ),
                    },
                  ]}
                  data={componentMap}
                  searchable
                  pagination
                  rowsPerPage={5}
                />
              </TabPanel>

              {/* Best Practices Tab */}
              <TabPanel value={activeTab} index={3}>
                <Typography variant="h4" gutterBottom>
                  ⭐ Best Practices
                </Typography>
                <Typography variant="body1" paragraph>
                  Recommended patterns and approaches for optimal results.
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <EchoMUICard elevation="small" padding="medium">
                      <Typography variant="h6" gutterBottom color="success.main">
                        ✅ Do's
                      </Typography>
                      <List dense>
                        <ListItem>
                          <ListItemIcon><CheckIcon color="success" /></ListItemIcon>
                          <ListItemText primary="Use EchoMUIThemeProvider at app root" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon><CheckIcon color="success" /></ListItemIcon>
                          <ListItemText primary="Migrate components progressively" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon><CheckIcon color="success" /></ListItemIcon>
                          <ListItemText primary="Keep existing components during transition" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon><CheckIcon color="success" /></ListItemIcon>
                          <ListItemText primary="Test accessibility thoroughly" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon><CheckIcon color="success" /></ListItemIcon>
                          <ListItemText primary="Use enhancedInteractions for better UX" />
                        </ListItem>
                      </List>
                    </EchoMUICard>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <EchoMUICard elevation="small" padding="medium">
                      <Typography variant="h6" gutterBottom color="error.main">
                        ❌ Don'ts
                      </Typography>
                      <List dense>
                        <ListItem>
                          <ListItemText primary="Don't use MUI design tokens directly" />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="Don't migrate all components at once" />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="Don't override Echo token values" />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="Don't skip accessibility testing" />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="Don't customize MUI theme directly" />
                        </ListItem>
                      </List>
                    </EchoMUICard>
                  </Grid>
                </Grid>

                <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                  Performance Considerations
                </Typography>
                
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle1">Bundle Size Optimization</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" paragraph>
                      Import only the components you need to keep bundle size optimal:
                    </Typography>
                    <Paper sx={{ p: 2, bgcolor: 'grey.100' }}>
                      <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
                        {`// Good: Import specific components
import { EchoMUIButton } from './atoms/EchoMUIButton';

// Avoid: Importing entire modules
import * from '@mui/material';`}
                      </Typography>
                    </Paper>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle1">Runtime Performance</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" paragraph>
                      Optimize runtime performance with these strategies:
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemText primary="Use React.memo for frequently updated components" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Implement virtual scrolling for large datasets" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Use debouncing for search and filter inputs" />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>
              </TabPanel>

              {/* Troubleshooting Tab */}
              <TabPanel value={activeTab} index={4}>
                <Typography variant="h4" gutterBottom>
                  🛠️ Troubleshooting
                </Typography>
                <Typography variant="body1" paragraph>
                  Common issues and their solutions.
                </Typography>

                <EchoMUIStack spacing="medium">
                  <Alert severity="warning">
                    <Typography variant="body2">
                      <strong>Common Issue:</strong> Echo tokens not being applied to MUI components
                    </Typography>
                  </Alert>
                  
                  <Paper sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      Solution: Verify Theme Provider Setup
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Ensure EchoMUIThemeProvider wraps your entire app:
                    </Typography>
                    <Paper sx={{ p: 2, bgcolor: 'grey.900', color: 'white' }}>
                      <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
                        {`// Make sure this wraps your entire app
function App() {
  return (
    <EchoMUIThemeProvider>
      <Routes>
        {/* Your routes */}
      </Routes>
    </EchoMUIThemeProvider>
  );
}`}
                      </Typography>
                    </Paper>
                  </Paper>

                  <Alert severity="error">
                    <Typography variant="body2">
                      <strong>Common Issue:</strong> TypeScript errors with component props
                    </Typography>
                  </Alert>
                  
                  <Paper sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      Solution: Update Import Statements
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Make sure you're importing the correct component types:
                    </Typography>
                    <Paper sx={{ p: 2, bgcolor: 'grey.900', color: 'white' }}>
                      <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
                        {`// Import the enhanced component and its types
import { EchoMUIButton } from './atoms/EchoMUIButton';
import type { EchoMUIButtonProps } from './atoms/EchoMUIButton';`}
                      </Typography>
                    </Paper>
                  </Paper>

                  <Alert severity="info">
                    <Typography variant="body2">
                      <strong>Performance Issue:</strong> Slow rendering with large datasets
                    </Typography>
                  </Alert>
                  
                  <Paper sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      Solution: Enable Virtualization
                    </Typography>
                    <Typography variant="body2" paragraph>
                      For large tables, use server-side pagination and virtualization:
                    </Typography>
                    <Paper sx={{ p: 2, bgcolor: 'grey.900', color: 'white' }}>
                      <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
                        {`<EchoMUIDataTable
  data={data}
  pagination
  rowsPerPage={50}
  onPageChange={handlePageChange}
  // Enable server-side operations
  totalRows={totalCount}
/>`}
                      </Typography>
                    </Paper>
                  </Paper>
                </EchoMUIStack>
              </TabPanel>
            </Paper>

            {/* Summary */}
            <EchoMUICard elevation="medium" padding="large">
              <Typography variant="h5" gutterBottom color="primary">
                🎉 You're Ready to Go!
              </Typography>
              <Typography variant="body1" paragraph>
                You now have everything you need to successfully implement Echo + MUI in your project. 
                Remember to migrate progressively, test thoroughly, and maintain your Echo design consistency.
              </Typography>
              
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'success.light', color: 'success.contrastText' }}>
                    <CheckIcon sx={{ fontSize: 40, mb: 1 }} />
                    <Typography variant="subtitle2">Setup Complete</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'info.light', color: 'info.contrastText' }}>
                    <CodeIcon sx={{ fontSize: 40, mb: 1 }} />
                    <Typography variant="subtitle2">Components Ready</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'warning.light', color: 'warning.contrastText' }}>
                    <SpeedIcon sx={{ fontSize: 40, mb: 1 }} />
                    <Typography variant="subtitle2">Performance Optimized</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'secondary.light', color: 'secondary.contrastText' }}>
                    <AccessibilityIcon sx={{ fontSize: 40, mb: 1 }} />
                    <Typography variant="subtitle2">Accessible by Default</Typography>
                  </Paper>
                </Grid>
              </Grid>
            </EchoMUICard>
          </EchoMUIStack>
        </EchoMUIContainer>
      </EchoMUIThemeProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
**Complete Implementation Guide**

This comprehensive guide covers everything you need to implement Echo + MUI successfully:

### 🎯 What's Included:
- **Quick Start**: Get running in under 10 minutes
- **Step-by-Step Setup**: Detailed implementation process
- **Component Migration**: Map existing components to enhanced versions
- **Best Practices**: Recommended patterns and approaches
- **Troubleshooting**: Common issues and solutions

### 📋 Implementation Strategy:
1. Install MUI dependencies
2. Setup EchoMUIThemeProvider
3. Migrate components progressively
4. Test accessibility and performance
5. Optimize for production

### 🚀 Benefits:
- Keep 100% Echo visual design
- Gain MUI's enhanced functionality
- Improve accessibility and interactions
- Maintain backward compatibility
- Progressive enhancement approach
        `,
      },
    },
  },
};
