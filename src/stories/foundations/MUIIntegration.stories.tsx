import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { EchoMUIThemeProvider } from './MUIThemeProvider';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Chip } from '@mui/material';

const meta: Meta = {
  title: 'Foundations/MUI Integration',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## Material UI 6/7 Integration with Echo Design System

This foundation layer provides complete integration between Material UI 6/7 and Echo design tokens, enabling enhanced interactions while maintaining 100% Echo visual consistency.

### Key Benefits:
- **Enhanced Interactions**: Ripple effects, better touch support, improved accessibility
- **Complete Token Mapping**: All Echo tokens mapped to MUI theme structure
- **Progressive Enhancement**: Adopt MUI features while keeping existing Echo components
- **Zero Breaking Changes**: Existing components work unchanged
        `,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <EchoMUIThemeProvider>
        <Story />
      </EchoMUIThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Token mapping data
const tokenMappings = [
  {
    category: 'Colors',
    echoToken: '--primary-blue-blue',
    muiThemeProperty: 'theme.palette.primary.main',
    usage: 'Primary buttons, links, focus states',
    status: 'Complete'
  },
  {
    category: 'Colors',
    echoToken: '--status-red',
    muiThemeProperty: 'theme.palette.error.main',
    usage: 'Error states, validation messages',
    status: 'Complete'
  },
  {
    category: 'Colors',
    echoToken: '--neutral-gray-gray-500',
    muiThemeProperty: 'theme.palette.grey[500]',
    usage: 'Secondary text, disabled states',
    status: 'Complete'
  },
  {
    category: 'Typography',
    echoToken: '--type-typeface-archivo',
    muiThemeProperty: 'theme.typography.h1.fontFamily',
    usage: 'Headings, buttons, labels',
    status: 'Complete'
  },
  {
    category: 'Typography',
    echoToken: '--type-typeface-roboto-flex',
    muiThemeProperty: 'theme.typography.body1.fontFamily',
    usage: 'Body text, descriptions',
    status: 'Complete'
  },
  {
    category: 'Spacing',
    echoToken: '--spacing-sizing-16px',
    muiThemeProperty: 'theme.spacing(4)',
    usage: 'Consistent spacing throughout UI',
    status: 'Complete'
  },
  {
    category: 'Shadows',
    echoToken: '--shadow-sm',
    muiThemeProperty: 'theme.shadows[1]',
    usage: 'Card elevations, dropdowns',
    status: 'Complete'
  },
  {
    category: 'Radius',
    echoToken: '--spacing-radius-4px',
    muiThemeProperty: 'theme.shape.borderRadius',
    usage: 'Component border radius',
    status: 'Complete'
  },
];

const enhancedFeatures = [
  {
    feature: 'Ripple Effects',
    description: 'Material Design ripple animations on button clicks',
    implementation: 'Built into EnhancedButton component',
    echoImpact: 'Zero - maintains exact Echo visual design'
  },
  {
    feature: 'Enhanced Focus States',
    description: 'Improved keyboard navigation and focus indicators',
    implementation: 'Applied to all enhanced components',
    echoImpact: 'Enhanced - better accessibility with Echo colors'
  },
  {
    feature: 'Touch Optimization',
    description: 'Better mobile and tablet touch interactions',
    implementation: 'Automatic with MUI components',
    echoImpact: 'Zero - same visual design, better interactions'
  },
  {
    feature: 'Tooltip System',
    description: 'Accessible tooltips with proper positioning',
    implementation: 'Available on all enhanced components',
    echoImpact: 'Enhanced - uses Echo typography and colors'
  },
  {
    feature: 'Loading Animations',
    description: 'Smooth CircularProgress animations',
    implementation: 'Built into enhanced components',
    echoImpact: 'Enhanced - uses Echo brand colors'
  },
];

export const TokenMapping: Story = {
  render: () => (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ fontFamily: 'var(--font-family-heading)' }}>
        Echo Token to MUI Theme Mapping
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ mb: 3 }}>
        This table shows how Echo design tokens are mapped to MUI theme properties, 
        ensuring complete visual consistency while enabling enhanced interactions.
      </Typography>

      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', fontFamily: 'var(--font-family-heading)' }}>
                Category
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontFamily: 'var(--font-family-heading)' }}>
                Echo Token
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontFamily: 'var(--font-family-heading)' }}>
                MUI Theme Property
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontFamily: 'var(--font-family-heading)' }}>
                Usage
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontFamily: 'var(--font-family-heading)' }}>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tokenMappings.map((mapping, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Chip 
                    label={mapping.category} 
                    size="small" 
                    sx={{ 
                      bgcolor: mapping.category === 'Colors' ? 'var(--primary-blue-blue-100)' :
                               mapping.category === 'Typography' ? 'var(--primary-seafoam-100)' :
                               mapping.category === 'Spacing' ? 'var(--primary-yellow-100)' :
                               'var(--neutral-gray-gray-100)',
                      color: 'var(--base-black)'
                    }}
                  />
                </TableCell>
                <TableCell sx={{ fontFamily: 'Monaco, Consolas, monospace', fontSize: '13px' }}>
                  {mapping.echoToken}
                </TableCell>
                <TableCell sx={{ fontFamily: 'Monaco, Consolas, monospace', fontSize: '13px' }}>
                  {mapping.muiThemeProperty}
                </TableCell>
                <TableCell>{mapping.usage}</TableCell>
                <TableCell>
                  <Chip 
                    label={mapping.status} 
                    size="small" 
                    color="success"
                    sx={{ bgcolor: 'var(--status-green-light)', color: 'var(--status-dark-green)' }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: `
**Complete Token Mapping Reference**

This comprehensive mapping ensures that when you use MUI components within the EchoMUIThemeProvider, 
they automatically inherit Echo design tokens for colors, typography, spacing, and other design properties.

### How It Works:
1. **Theme Provider**: EchoMUIThemeProvider reads Echo CSS custom properties
2. **Token Mapping**: Maps Echo tokens to MUI theme structure
3. **Automatic Application**: MUI components automatically use Echo styling
4. **Enhanced Interactions**: Gain MUI capabilities while keeping Echo design
        `,
      },
    },
  },
};

export const EnhancedFeatures: Story = {
  render: () => (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ fontFamily: 'var(--font-family-heading)' }}>
        Enhanced Interaction Features
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ mb: 3 }}>
        MUI integration provides enhanced interaction capabilities while maintaining 
        complete Echo visual consistency. Here's what you gain:
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', fontFamily: 'var(--font-family-heading)' }}>
                Feature
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontFamily: 'var(--font-family-heading)' }}>
                Description
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontFamily: 'var(--font-family-heading)' }}>
                Implementation
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontFamily: 'var(--font-family-heading)' }}>
                Echo Design Impact
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {enhancedFeatures.map((feature, index) => (
              <TableRow key={index}>
                <TableCell sx={{ fontWeight: 'medium', fontFamily: 'var(--font-family-heading)' }}>
                  {feature.feature}
                </TableCell>
                <TableCell>{feature.description}</TableCell>
                <TableCell sx={{ fontSize: '14px' }}>{feature.implementation}</TableCell>
                <TableCell>
                  <Chip 
                    label={feature.echoImpact.split(' - ')[0]} 
                    size="small" 
                    sx={{ 
                      bgcolor: feature.echoImpact.startsWith('Zero') ? 'var(--neutral-gray-gray-100)' :
                               'var(--status-green-light)',
                      color: feature.echoImpact.startsWith('Zero') ? 'var(--neutral-gray-gray-700)' :
                             'var(--status-dark-green)'
                    }}
                  />
                  <Typography variant="caption" sx={{ display: 'block', mt: 0.5, fontSize: '12px' }}>
                    {feature.echoImpact.split(' - ')[1]}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: `
**Enhanced Interaction Capabilities**

These features enhance the user experience without changing Echo's visual design:

### Zero Impact Features:
- **Ripple Effects**: Visual feedback during interactions
- **Touch Optimization**: Better mobile experience

### Enhanced Features:
- **Focus States**: Better accessibility with Echo colors
- **Tooltips**: Contextual help using Echo typography
- **Loading States**: Smooth animations with Echo brand colors

All enhancements maintain Echo design consistency while providing superior interactions.
        `,
      },
    },
  },
};

export const ImplementationGuide: Story = {
  render: () => (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ fontFamily: 'var(--font-family-heading)' }}>
        Implementation Guide
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ mb: 3 }}>
        Follow these steps to integrate MUI capabilities with your Echo design system:
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ fontFamily: 'var(--font-family-heading)' }}>
          Step 1: Install Dependencies
        </Typography>
        <Paper sx={{ p: 2, bgcolor: 'var(--neutral-gray-gray-800)', color: 'white' }}>
          <Typography variant="body2" sx={{ fontFamily: 'Monaco, Consolas, monospace' }}>
            npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
          </Typography>
        </Paper>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ fontFamily: 'var(--font-family-heading)' }}>
          Step 2: Wrap Your Application
        </Typography>
        <Paper sx={{ p: 2, bgcolor: 'var(--neutral-gray-gray-800)', color: 'white' }}>
          <Typography variant="body2" sx={{ fontFamily: 'Monaco, Consolas, monospace', whiteSpace: 'pre-line' }}>
{`import { EchoMUIThemeProvider } from './foundations/MUIThemeProvider';

function App() {
  return (
    <EchoMUIThemeProvider>
      {/* Your existing Echo components work unchanged */}
      {/* New MUI components automatically use Echo tokens */}
    </EchoMUIThemeProvider>
  );
}`}
          </Typography>
        </Paper>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ fontFamily: 'var(--font-family-heading)' }}>
          Step 3: Use Enhanced Components
        </Typography>
        <Paper sx={{ p: 2, bgcolor: 'var(--neutral-gray-gray-800)', color: 'white' }}>
          <Typography variant="body2" sx={{ fontFamily: 'Monaco, Consolas, monospace', whiteSpace: 'pre-line' }}>
{`import { EnhancedButton } from './atoms/EnhancedButton';
import { EnhancedInput } from './atoms/EnhancedInput';

// Enhanced with MUI interactions, styled with Echo tokens
<EnhancedButton type="primary" enhancedInteractions>
  Save Changes
</EnhancedButton>

<EnhancedInput 
  label="Search" 
  enhancedInteractions 
  showLeadingIcon 
/>`}
          </Typography>
        </Paper>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ fontFamily: 'var(--font-family-heading)' }}>
          Step 4: Direct MUI Usage
        </Typography>
        <Paper sx={{ p: 2, bgcolor: 'var(--neutral-gray-gray-800)', color: 'white' }}>
          <Typography variant="body2" sx={{ fontFamily: 'Monaco, Consolas, monospace', whiteSpace: 'pre-line' }}>
{`import { Card, CardContent, Button } from '@mui/material';

// Automatically styled with Echo tokens
<Card>
  <CardContent>
    <Button color="primary">MUI Button with Echo styling</Button>
  </CardContent>
</Card>`}
          </Typography>
        </Paper>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom sx={{ fontFamily: 'var(--font-family-heading)' }}>
          Benefits Summary
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2 }}>
          <Paper sx={{ p: 2, bgcolor: 'var(--primary-blue-blue-50)' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
              🎯 Design Consistency
            </Typography>
            <Typography variant="body2">
              100% Echo visual design maintained
            </Typography>
          </Paper>
          <Paper sx={{ p: 2, bgcolor: 'var(--status-green-light)' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
              ⚡ Enhanced UX
            </Typography>
            <Typography variant="body2">
              Better interactions and accessibility
            </Typography>
          </Paper>
          <Paper sx={{ p: 2, bgcolor: 'var(--primary-seafoam-50)' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
              🔄 Progressive
            </Typography>
            <Typography variant="body2">
              Adopt gradually, no breaking changes
            </Typography>
          </Paper>
          <Paper sx={{ p: 2, bgcolor: 'var(--primary-yellow-50)' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
              📱 Touch Ready
            </Typography>
            <Typography variant="body2">
              Optimized for mobile and tablets
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: `
**Complete Implementation Guide**

This guide provides step-by-step instructions for integrating MUI 6/7 capabilities 
with your Echo design system. The integration is designed to be:

- **Non-Breaking**: Existing components continue to work
- **Progressive**: Adopt new features as needed
- **Consistent**: Maintains Echo visual design 100%
- **Enhanced**: Provides superior interactions and accessibility
        `,
      },
    },
  },
};
