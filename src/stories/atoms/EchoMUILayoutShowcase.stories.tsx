import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { EchoMUIThemeProvider } from '../foundations/EchoMUITheme';
import { 
  EchoMUICard, 
  EchoMUIDivider, 
  EchoMUIStack, 
  EchoMUIContainer,
  EchoMUIPaper,
  EchoMUILayout,
  EchoMUIGrid,
  EchoMUICardContent,
  EchoMUICardActions,
} from './EchoMUILayout';
import { EchoMUIButton } from './EchoMUIButton';
import { EchoMUITag } from './EchoMUITag';

import {
  Typography,
  Avatar,
  IconButton,
  Box,
} from '@mui/material';

import {
  MoreVert as MoreVertIcon,
  Settings as SettingsIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';

const meta: Meta = {
  title: 'Echo + MUI/Layout Components',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Echo + MUI Layout Components

Foundational layout components using MUI with Echo design tokens for consistent spacing and visual hierarchy.

## ✅ Enhanced Components:

### **EchoMUICard**
- Consistent shadow and border radius
- Interactive hover states
- Flexible padding options
- Echo token-based styling

### **EchoMUIDivider**
- Multiple visual variants
- Consistent spacing
- Text divider support
- Echo color integration

### **Layout Helpers**
- Responsive containers
- Consistent spacing
- Flexible grid system
- Stack layouts

All components maintain 100% Echo visual design while providing MUI's layout capabilities.
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof EchoMUILayout>;

// Layout Components Showcase
export const LayoutShowcase: Story = {
  render: () => {
    return (
      <EchoMUIThemeProvider>
        <EchoMUILayout variant="page" maxWidth="xl" spacing="large">
          <Typography variant="h3" gutterBottom>
            Layout Components Showcase
          </Typography>
          
          <EchoMUIStack spacing="large">
            {/* Cards Section */}
            <Box>
              <Typography variant="h4" gutterBottom color="primary">
                Enhanced Cards
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                Cards with Echo design tokens and interactive behaviors
              </Typography>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
                  gap: 3,
                }}
              >
                <Box>
                  <EchoMUICard elevation="small" interactive>
                    <EchoMUICardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                          <SettingsIcon />
                        </Avatar>
                        <Box>
                          <Typography variant="h6">
                            Project Settings
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Configure your project
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="body2">
                        Manage team members, permissions, and project configuration settings.
                      </Typography>
                      <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                        <EchoMUITag label="Active" variant="green" size="small" />
                        <EchoMUITag label="Admin" variant="blue" size="small" />
                      </Box>
                    </EchoMUICardContent>
                    <EchoMUICardActions>
                      <EchoMUIButton variant="primary" size="small">
                        Configure
                      </EchoMUIButton>
                      <EchoMUIButton variant="tertiary" size="small">
                        Learn More
                      </EchoMUIButton>
                    </EchoMUICardActions>
                  </EchoMUICard>
                </Box>

                <Box>
                  <EchoMUICard elevation="medium">
                    <EchoMUICardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar sx={{ bgcolor: 'success.main', mr: 2 }}>
                          <NotificationsIcon />
                        </Avatar>
                        <Box>
                          <Typography variant="h6">
                            Notifications
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            3 new messages
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="body2">
                        Stay updated with the latest notifications and messages from your team.
                      </Typography>
                      <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                        <EchoMUITag label="3 New" variant="orange" size="small" />
                        <EchoMUITag label="Enabled" variant="green" size="small" />
                      </Box>
                    </EchoMUICardContent>
                    <EchoMUICardActions>
                      <EchoMUIButton variant="secondary" size="small">
                        View All
                      </EchoMUIButton>
                      <IconButton size="small">
                        <MoreVertIcon />
                      </IconButton>
                    </EchoMUICardActions>
                  </EchoMUICard>
                </Box>

                <Box>
                  <EchoMUICard elevation="large" padding="large">
                    <Typography variant="h6" gutterBottom>
                      Team Activity
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      Recent activity from your team members and project updates.
                    </Typography>

                    <EchoMUIStack spacing="small">
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ width: 24, height: 24 }}>J</Avatar>
                        <Typography variant="body2">
                          John updated the design system
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ width: 24, height: 24 }}>S</Avatar>
                        <Typography variant="body2">
                          Sarah completed the user research
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ width: 24, height: 24 }}>M</Avatar>
                        <Typography variant="body2">
                          Mike deployed the latest build
                        </Typography>
                      </Box>
                    </EchoMUIStack>
                  </EchoMUICard>
                </Box>
              </Box>
            </Box>

            <EchoMUIDivider variant="primary" spacing="large">
              Layout Helpers
            </EchoMUIDivider>

            {/* Layout Helpers Section */}
            <Box>
              <Typography variant="h4" gutterBottom color="primary">
                Layout Helpers & Spacing
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                Consistent spacing and layout patterns using Echo design tokens
              </Typography>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  gap: 3,
                }}
              >
                <Box>
                  <EchoMUIPaper elevation={1} padding="medium">
                    <Typography variant="h6" gutterBottom>
                      Stack Layouts
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      Vertical and horizontal stacking with consistent spacing
                    </Typography>
                    
                    <EchoMUIStack spacing="medium">
                      <EchoMUITag label="Item 1" variant="primary" />
                      <EchoMUITag label="Item 2" variant="secondary" />
                      <EchoMUITag label="Item 3" variant="blue" />
                    </EchoMUIStack>

                    <EchoMUIDivider spacing="medium" />

                    <EchoMUIStack direction="row" spacing="small" wrap>
                      <EchoMUIButton variant="primary" size="small">Button 1</EchoMUIButton>
                      <EchoMUIButton variant="secondary" size="small">Button 2</EchoMUIButton>
                      <EchoMUIButton variant="tertiary" size="small">Button 3</EchoMUIButton>
                    </EchoMUIStack>
                  </EchoMUIPaper>
                </Box>

                <Box>
                  <EchoMUIPaper elevation={2} padding="large">
                    <Typography variant="h6" gutterBottom>
                      Divider Variants
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Different divider styles for visual separation
                    </Typography>
                    
                    <EchoMUIDivider variant="light" spacing="medium" />
                    
                    <Typography variant="body2" gutterBottom>
                      Light divider above
                    </Typography>
                    
                    <EchoMUIDivider variant="default" spacing="medium" />
                    
                    <Typography variant="body2" gutterBottom>
                      Default divider above
                    </Typography>
                    
                    <EchoMUIDivider variant="bold" spacing="medium" />
                    
                    <Typography variant="body2" gutterBottom>
                      Bold divider above
                    </Typography>
                    
                    <EchoMUIDivider variant="primary" spacing="medium">
                      Primary with text
                    </EchoMUIDivider>
                    
                    <Typography variant="body2">
                      Primary divider with text above
                    </Typography>
                  </EchoMUIPaper>
                </Box>
              </Box>
            </Box>

            {/* Container Examples */}
            <Box>
              <Typography variant="h4" gutterBottom color="primary">
                Container & Grid System
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                Responsive containers and flexible grid layouts
              </Typography>

              <EchoMUIContainer maxWidth="md" padding="medium">
                <EchoMUIPaper elevation={1} padding="large">
                  <Typography variant="h6" gutterBottom>
                    Contained Content
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    This content is contained within a medium-width container with consistent padding.
                  </Typography>

                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: {
                        xs: 'repeat(2, minmax(0, 1fr))',
                        sm: 'repeat(3, minmax(0, 1fr))',
                      },
                      gap: 2,
                    }}
                  >
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <Box key={item}>
                        <EchoMUIPaper elevation={0} padding="small">
                          <Box
                            sx={{
                              bgcolor: 'primary.light',
                              color: 'primary.contrastText',
                              textAlign: 'center',
                              minHeight: 60,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            Item {item}
                          </Box>
                        </EchoMUIPaper>
                      </Box>
                    ))}
                  </Box>
                </EchoMUIPaper>
              </EchoMUIContainer>
            </Box>

            {/* Features Summary */}
            <EchoMUICard elevation="medium" padding="large">
              <Typography variant="h5" gutterBottom color="primary">
                🎯 Layout Component Benefits
              </Typography>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  gap: 3,
                }}
              >
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Consistent Spacing
                  </Typography>
                  <Box component="ul" sx={{ pl: 2.5, lineHeight: 1.6, m: 0 }}>
                    <li>Echo design token-based spacing</li>
                    <li>Predictable layout patterns</li>
                    <li>Responsive design support</li>
                    <li>Flexible container sizes</li>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h6" gutterBottom>
                    Enhanced Components
                  </Typography>
                  <Box component="ul" sx={{ pl: 2.5, lineHeight: 1.6, m: 0 }}>
                    <li>Interactive card hover states</li>
                    <li>Multiple divider variants</li>
                    <li>Flexible stack layouts</li>
                    <li>Echo visual consistency</li>
                  </Box>
                </Box>
              </Box>
            </EchoMUICard>
          </EchoMUIStack>
        </EchoMUILayout>
      </EchoMUIThemeProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
**Layout Components Implementation**

This showcase demonstrates foundational layout components using Echo + MUI:

### 🎯 Key Features:
- **Consistent Spacing**: All spacing uses Echo design tokens
- **Interactive Cards**: Hover states and flexible padding options
- **Flexible Layouts**: Stack, Grid, and Container components
- **Visual Hierarchy**: Multiple divider variants and proper spacing
- **Echo Design**: 100% Echo tokens for consistent visual design

### 📋 Components:
1. **EchoMUICard**: Enhanced cards with interactive states
2. **EchoMUIDivider**: Multiple visual variants with consistent spacing
3. **EchoMUIStack**: Flexible stacking with Echo spacing
4. **EchoMUIContainer**: Responsive containers with consistent padding
5. **EchoMUIGrid**: Grid system with Echo spacing
6. **EchoMUIPaper**: Enhanced paper component with Echo shadows

### 🚀 Benefits:
- Consistent visual hierarchy
- Responsive design patterns
- Echo token-based spacing
- Interactive enhancements
- Flexible and composable
        `,
      },
    },
  },
};
