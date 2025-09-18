import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { EchoMUIThemeProvider } from './MUIThemeProvider';
import { EnhancedButton } from '../atoms/EnhancedButton';
import { EnhancedInput } from '../atoms/EnhancedInput';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';

// Import MUI components to show direct usage
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Switch,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  Slider,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Paper,
  Box,
  Grid,
  Container,
} from '@mui/material';

// Import MUI icons
import {
  FavoriteIcon,
  ShareIcon,
  BookmarkIcon,
  SaveIcon,
  DeleteIcon,
  EditIcon,
  PersonIcon,
  EmailIcon,
  NotificationsIcon,
  SettingsIcon,
} from './MaterialUIIcons';

const meta = {
  title: 'Foundations/MUI + Echo Integration',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# MUI 6/7 + Echo Design System Integration

This comprehensive guide demonstrates how to integrate Material UI 6/7 capabilities with the Echo design system while maintaining complete visual consistency.

## 🎯 Integration Strategy

### 1. **Visual Design = 100% Echo**
- All colors come from Echo design tokens
- All typography uses Echo fonts (Archivo, Roboto Flex)
- All spacing follows Echo spacing scale
- All border radius, shadows use Echo values

### 2. **Interactions = MUI Enhanced**
- Ripple effects for better feedback
- Enhanced accessibility features
- Touch-optimized interactions
- Better keyboard navigation
- Smooth animations and transitions

### 3. **Best of Both Worlds**
- Maintain Echo's visual identity
- Gain MUI's robust interaction patterns
- Keep design system consistency
- Add progressive enhancements

## 🛠️ Implementation Guide

### Step 1: Wrap with EchoMUIThemeProvider
\`\`\`jsx
import { EchoMUIThemeProvider } from './foundations/MUIThemeProvider';

function App() {
  return (
    <EchoMUIThemeProvider>
      {/* Your app content */}
    </EchoMUIThemeProvider>
  );
}
\`\`\`

### Step 2: Use Enhanced Components
\`\`\`jsx
import { EnhancedButton } from './atoms/EnhancedButton';
import { EnhancedInput } from './atoms/EnhancedInput';

// Enhanced with MUI interactions, styled with Echo tokens
<EnhancedButton type="primary" enhancedInteractions>
  Save Changes
</EnhancedButton>
\`\`\`

### Step 3: Direct MUI Component Usage
\`\`\`jsx
import { Card, CardContent } from '@mui/material';

// MUI components automatically use Echo styling via theme
<Card>
  <CardContent>
    Content automatically styled with Echo tokens
  </CardContent>
</Card>
\`\`\`

## 📋 Token Mapping

| Echo Token | MUI Theme Mapping | Usage |
|------------|-------------------|-------|
| \`--primary-blue-blue\` | \`theme.palette.primary.main\` | Primary buttons, links |
| \`--status-red\` | \`theme.palette.error.main\` | Error states, validation |
| \`--type-typeface-archivo\` | \`theme.typography.h1.fontFamily\` | Headings, buttons |
| \`--spacing-sizing-16px\` | \`theme.spacing(4)\` | Consistent spacing |
| \`--shadow-sm\` | \`theme.shadows[1]\` | Card elevations |

## ⚡ Key Benefits

- **Design Consistency**: All components follow Echo design system
- **Enhanced UX**: Better interactions with MUI capabilities  
- **Accessibility**: Improved a11y features out of the box
- **Performance**: Optimized animations and interactions
- **Future-Proof**: Easy to adopt new MUI features while keeping Echo design
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Integration Overview
export const IntegrationOverview: Story = {
  render: () => (
    <EchoMUIThemeProvider>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontFamily: 'var(--font-family-heading)' }}>
          MUI + Echo Integration Showcase
        </Typography>
        
        <Typography variant="body1" paragraph sx={{ mb: 4 }}>
          This showcase demonstrates how MUI 6/7 components automatically inherit Echo design tokens 
          when wrapped with the EchoMUIThemeProvider, providing enhanced interactions while maintaining 
          complete visual consistency with your design system.
        </Typography>

        <Grid container spacing={4}>
          {/* Enhanced Components */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" gutterBottom sx={{ color: 'var(--primary-blue-blue)' }}>
                Enhanced Echo Components
              </Typography>
              <Typography variant="body2" paragraph sx={{ color: 'var(--neutral-gray-gray-600)' }}>
                Echo components enhanced with MUI interaction capabilities
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <EnhancedButton type="primary" enhancedInteractions leadingIcon={<SaveIcon />}>
                  Enhanced Button (with ripple)
                </EnhancedButton>
                
                <EnhancedInput
                  label="Enhanced Input"
                  placeholder="Try typing here..."
                  showLeadingIcon
                  enhancedInteractions
                />
                
                <div style={{ display: 'flex', gap: '8px' }}>
                  <EnhancedButton 
                    iconOnly 
                    icon={<FavoriteIcon />} 
                    type="error" 
                    tooltip="Like this post"
                    enhancedInteractions
                  />
                  <EnhancedButton 
                    iconOnly 
                    icon={<ShareIcon />} 
                    type="secondary" 
                    tooltip="Share content"
                    enhancedInteractions
                  />
                  <EnhancedButton 
                    iconOnly 
                    icon={<BookmarkIcon />} 
                    type="tertiary" 
                    tooltip="Bookmark"
                    enhancedInteractions
                  />
                </div>
              </Box>
            </Paper>
          </Grid>

          {/* Original Components */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" gutterBottom sx={{ color: 'var(--primary-blue-blue)' }}>
                Original Echo Components
              </Typography>
              <Typography variant="body2" paragraph sx={{ color: 'var(--neutral-gray-gray-600)' }}>
                Your existing Echo components (for comparison)
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button type="primary" leadingIcon={<SaveIcon />}>
                  Original Button
                </Button>
                
                <Input
                  label="Original Input"
                  placeholder="Original Echo input..."
                  showLeadingIcon
                />
                
                <div style={{ display: 'flex', gap: '8px' }}>
                  <Button iconOnly icon={<FavoriteIcon />} type="error" />
                  <Button iconOnly icon={<ShareIcon />} type="secondary" />
                  <Button iconOnly icon={<BookmarkIcon />} type="tertiary" />
                </div>
              </Box>
            </Paper>
          </Grid>

          {/* Direct MUI Components */}
          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom sx={{ color: 'var(--primary-blue-blue)' }}>
                Direct MUI Components (Automatically Styled with Echo Tokens)
              </Typography>
              <Typography variant="body2" paragraph sx={{ color: 'var(--neutral-gray-gray-600)' }}>
                These MUI components automatically use Echo design tokens via the theme provider
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" component="div" gutterBottom>
                        User Profile
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
                          <PersonIcon />
                        </Avatar>
                        <div>
                          <Typography variant="subtitle1">John Doe</Typography>
                          <Typography variant="body2" color="text.secondary">
                            Product Designer
                          </Typography>
                        </div>
                      </Box>
                      <Chip label="Active" color="success" size="small" />
                    </CardContent>
                    <CardActions>
                      <EnhancedButton size="small" type="primary" enhancedInteractions>
                        View Profile
                      </EnhancedButton>
                      <EnhancedButton size="small" type="secondary" enhancedInteractions>
                        Message
                      </EnhancedButton>
                    </CardActions>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      Form Controls
                    </Typography>
                    
                    <FormControlLabel
                      control={<Switch defaultChecked color="primary" />}
                      label="Email notifications"
                      sx={{ mb: 1 }}
                    />
                    
                    <FormControlLabel
                      control={<Checkbox defaultChecked color="primary" />}
                      label="Marketing emails"
                      sx={{ mb: 2 }}
                    />
                    
                    <Typography variant="subtitle2" gutterBottom>
                      Notification frequency
                    </Typography>
                    <RadioGroup defaultValue="daily" sx={{ mb: 2 }}>
                      <FormControlLabel value="daily" control={<Radio color="primary" />} label="Daily" />
                      <FormControlLabel value="weekly" control={<Radio color="primary" />} label="Weekly" />
                    </RadioGroup>
                    
                    <Typography variant="subtitle2" gutterBottom>
                      Volume
                    </Typography>
                    <Slider
                      defaultValue={30}
                      color="primary"
                      sx={{ color: 'var(--primary-blue-blue)' }}
                    />
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      Navigation List
                    </Typography>
                    
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <EmailIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Messages" secondary="3 unread" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <NotificationsIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Notifications" secondary="5 new" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <SettingsIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Settings" secondary="Account" />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </EchoMUIThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: `
**Complete Integration Showcase**

This story demonstrates three approaches:

1. **Enhanced Echo Components**: Your existing components enhanced with MUI interaction capabilities
2. **Original Echo Components**: Your current components (for comparison)
3. **Direct MUI Components**: MUI components that automatically inherit Echo styling

**Key Features:**
- All components use identical Echo design tokens
- Enhanced components gain ripple effects, better accessibility, touch optimization
- Direct MUI usage for rapid development with Echo styling
- Progressive enhancement approach - you can adopt gradually
        `,
      },
    },
  },
};

// Interactive Demo
export const InteractiveDemo: Story = {
  render: () => {
    const [enhancedMode, setEnhancedMode] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [tags, setTags] = useState([
      { id: '1', label: 'Design' },
      { id: '2', label: 'React' },
    ]);

    return (
      <EchoMUIThemeProvider>
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom sx={{ fontFamily: 'var(--font-family-heading)' }}>
              Interactive Demo
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={enhancedMode}
                  onChange={(e) => setEnhancedMode(e.target.checked)}
                  color="primary"
                />
              }
              label={`${enhancedMode ? 'Enhanced' : 'Standard'} Mode`}
            />
            <Typography variant="body2" sx={{ mt: 1, color: 'var(--neutral-gray-gray-600)' }}>
              Toggle to see the difference between enhanced and standard interactions
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Button Interactions
                </Typography>
                <Typography variant="body2" paragraph sx={{ color: 'var(--neutral-gray-gray-600)' }}>
                  {enhancedMode ? 'Click to feel the ripple effect!' : 'Standard hover states only.'}
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <EnhancedButton 
                    type="primary" 
                    enhancedInteractions={enhancedMode}
                    leadingIcon={<SaveIcon />}
                  >
                    Save Document
                  </EnhancedButton>
                  
                  <EnhancedButton 
                    type="error" 
                    enhancedInteractions={enhancedMode}
                    leadingIcon={<DeleteIcon />}
                    tooltip={enhancedMode ? "This action cannot be undone" : undefined}
                  >
                    Delete Item
                  </EnhancedButton>
                  
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <EnhancedButton 
                      iconOnly 
                      icon={<FavoriteIcon />} 
                      type="error"
                      enhancedInteractions={enhancedMode}
                      tooltip={enhancedMode ? "Add to favorites" : undefined}
                    />
                    <EnhancedButton 
                      iconOnly 
                      icon={<ShareIcon />} 
                      type="secondary"
                      enhancedInteractions={enhancedMode}
                      tooltip={enhancedMode ? "Share content" : undefined}
                    />
                    <EnhancedButton 
                      iconOnly 
                      icon={<EditIcon />} 
                      type="tertiary"
                      enhancedInteractions={enhancedMode}
                      tooltip={enhancedMode ? "Edit content" : undefined}
                    />
                  </Box>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Input Interactions
                </Typography>
                <Typography variant="body2" paragraph sx={{ color: 'var(--neutral-gray-gray-600)' }}>
                  {enhancedMode ? 'Enhanced focus states and animations.' : 'Standard input behavior.'}
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <EnhancedInput
                    label="Search"
                    placeholder="Search for anything..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    showLeadingIcon
                    enhancedInteractions={enhancedMode}
                  />
                  
                  <EnhancedInput
                    label="Password"
                    variant="password"
                    placeholder="Enter your password"
                    enhancedInteractions={enhancedMode}
                  />
                  
                  <EnhancedInput
                    label="Tags"
                    variant="tags"
                    placeholder="Add tags..."
                    tags={tags}
                    enhancedInteractions={enhancedMode}
                    onTagRemove={(tagId) => {
                      setTags(tags.filter(tag => tag.id !== tagId));
                    }}
                  />
                  
                  <EnhancedInput
                    label="Options"
                    variant="autocomplete"
                    options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
                    enhancedInteractions={enhancedMode}
                  />
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Current Mode: {enhancedMode ? 'Enhanced' : 'Standard'}
                </Typography>
                <Typography variant="body2" sx={{ color: 'var(--neutral-gray-gray-600)' }}>
                  {enhancedMode 
                    ? '🎯 Enhanced mode provides ripple effects, tooltips, better focus states, and improved accessibility features while maintaining identical Echo visual design.'
                    : '📝 Standard mode shows the same visual design without MUI interaction enhancements - identical to your current Echo components.'
                  }
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </EchoMUIThemeProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
**Interactive Comparison Demo**

This interactive demo lets you toggle between enhanced and standard modes to experience the difference:

**Enhanced Mode Features:**
- ⚡ Ripple effects on button clicks
- 🎯 Enhanced focus states with better visibility
- 📱 Touch-optimized interactions
- ♿ Tooltips and improved accessibility
- 🎨 Smooth animations and transitions

**Standard Mode:**
- 📝 Same visual design without MUI enhancements
- 🔄 Identical to your current Echo components
- ⚖️ Baseline comparison

**Try It:**
1. Toggle the switch at the top
2. Click buttons and interact with inputs
3. Notice the interaction differences
4. All visual design remains identical!
        `,
      },
    },
  },
};

// Implementation Guide
export const ImplementationGuide: Story = {
  render: () => (
    <EchoMUIThemeProvider>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" gutterBottom sx={{ fontFamily: 'var(--font-family-heading)' }}>
          Implementation Guide
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ color: 'var(--primary-blue-blue)' }}>
                Step-by-Step Integration
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>1. Install Dependencies</Typography>
                <Paper sx={{ p: 2, bgcolor: 'var(--neutral-gray-gray-50)', fontFamily: 'monospace' }}>
                  npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
                </Paper>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>2. Wrap Your App</Typography>
                <Paper sx={{ p: 2, bgcolor: 'var(--neutral-gray-gray-50)' }}>
                  <pre style={{ margin: 0, fontSize: '13px' }}>
{`import { EchoMUIThemeProvider } from './foundations/MUIThemeProvider';

function App() {
  return (
    <EchoMUIThemeProvider>
      {/* Your existing Echo components work unchanged */}
      {/* New MUI components automatically use Echo tokens */}
    </EchoMUIThemeProvider>
  );
}`}
                  </pre>
                </Paper>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>3. Use Enhanced Components</Typography>
                <Paper sx={{ p: 2, bgcolor: 'var(--neutral-gray-gray-50)' }}>
                  <pre style={{ margin: 0, fontSize: '13px' }}>
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
                  </pre>
                </Paper>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>4. Use MUI Components Directly</Typography>
                <Paper sx={{ p: 2, bgcolor: 'var(--neutral-gray-gray-50)' }}>
                  <pre style={{ margin: 0, fontSize: '13px' }}>
{`import { Card, CardContent, Button } from '@mui/material';

// Automatically styled with Echo tokens
<Card>
  <CardContent>
    <Button color="primary">MUI Button with Echo styling</Button>
  </CardContent>
</Card>`}
                  </pre>
                </Paper>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>5. Access Echo Tokens</Typography>
                <Paper sx={{ p: 2, bgcolor: 'var(--neutral-gray-gray-50)' }}>
                  <pre style={{ margin: 0, fontSize: '13px' }}>
{`import { useTheme } from '@mui/material/styles';

function MyComponent() {
  const theme = useTheme();
  
  // Access Echo tokens via theme.echo
  const primaryColor = theme.echo.colors.primary.blue;
  const spacing = theme.echo.spacing[16];
  
  return <div style={{ color: primaryColor, padding: spacing }} />;
}`}
                  </pre>
                </Paper>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: 'fit-content' }}>
              <Typography variant="h6" gutterBottom sx={{ color: 'var(--primary-blue-blue)' }}>
                Quick Benefits
              </Typography>
              
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <Box sx={{ 
                      width: 8, 
                      height: 8, 
                      borderRadius: '50%', 
                      bgcolor: 'var(--status-green)' 
                    }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="100% Echo Visual Design" 
                    secondary="All styling comes from Echo tokens"
                  />
                </ListItem>
                
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <Box sx={{ 
                      width: 8, 
                      height: 8, 
                      borderRadius: '50%', 
                      bgcolor: 'var(--status-green)' 
                    }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Enhanced Interactions" 
                    secondary="Ripple effects, better accessibility"
                  />
                </ListItem>
                
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <Box sx={{ 
                      width: 8, 
                      height: 8, 
                      borderRadius: '50%', 
                      bgcolor: 'var(--status-green)' 
                    }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Progressive Enhancement" 
                    secondary="Adopt gradually, no breaking changes"
                  />
                </ListItem>
                
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <Box sx={{ 
                      width: 8, 
                      height: 8, 
                      borderRadius: '50%', 
                      bgcolor: 'var(--status-green)' 
                    }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Touch Optimized" 
                    secondary="Better mobile and tablet experience"
                  />
                </ListItem>
                
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <Box sx={{ 
                      width: 8, 
                      height: 8, 
                      borderRadius: '50%', 
                      bgcolor: 'var(--status-green)' 
                    }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Rapid Development" 
                    secondary="Use any MUI component with Echo styling"
                  />
                </ListItem>
              </List>

              <Divider sx={{ my: 2 }} />

              <Typography variant="subtitle2" gutterBottom>
                Ready to Start?
              </Typography>
              <EnhancedButton 
                type="primary" 
                fullWidth 
                enhancedInteractions
                leadingIcon={<SaveIcon />}
              >
                Implement in Your Project
              </EnhancedButton>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </EchoMUIThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: `
**Complete Implementation Guide**

This guide shows you exactly how to integrate MUI 6/7 capabilities into your Echo design system:

### Key Files Created:
1. **\`MUIThemeProvider.tsx\`** - Maps Echo tokens to MUI theme
2. **\`EnhancedButton.tsx\`** - Button with MUI interactions + Echo design
3. **\`EnhancedInput.tsx\`** - Input with MUI capabilities + Echo styling

### Integration Approach:
- **Zero Breaking Changes**: Existing components work unchanged
- **Progressive Enhancement**: Adopt new features gradually  
- **Complete Design Consistency**: All components use Echo tokens
- **Enhanced UX**: Better interactions and accessibility

### Next Steps:
1. Copy the provided theme provider and enhanced components
2. Wrap your app with \`EchoMUIThemeProvider\`
3. Start using enhanced components where you want better interactions
4. Use MUI components directly for rapid development
        `,
      },
    },
  },
};
