import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { EchoMUIThemeProvider } from '../foundations/EchoMUITheme';

// Import MUI components
import {
  Button,
  TextField,
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
  Stack,
  Chip,
  Switch,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slider,
  Checkbox,
  Radio,
  RadioGroup,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

// Import our Echo MUI components
import { EchoMUIButton } from './EchoMUIButton';
import { EchoMUIButtonCSS } from './EchoMUIButtonCSS';

// Import MUI icons (you already have these installed)
import {
  Save as SaveIcon,
  Download as DownloadIcon,
  Share as ShareIcon,
  Edit as EditIcon,
  Favorite as FavoriteIcon,
  Add as AddIcon,
} from '@mui/icons-material';

const meta = {
  title: 'Integration Examples/Echo + MUI Integration',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Echo Design System + MUI Integration

This demonstrates how to use MUI components as the foundation while maintaining 100% Echo visual design.

## ✅ What You Get:

### From MUI:
- **Robust functionality**: Complex interactions, keyboard navigation, accessibility
- **Proven components**: Tested across millions of applications
- **Rich ecosystem**: Icons, data grid, date pickers, etc.
- **Automatic accessibility**: ARIA attributes, focus management, screen reader support

### From Echo:
- **Your visual design**: 100% Echo tokens for colors, typography, spacing
- **Brand consistency**: Maintains your design system
- **Design control**: Full control over appearance
- **Token-driven**: Uses your existing design token infrastructure

## 🛠️ Implementation Approaches:

1. **Theme Provider**: Maps Echo tokens to MUI theme structure
2. **Styled Components**: Override MUI styling with styled-components + Echo tokens  
3. **CSS Classes**: Apply Echo styles via CSS classes (similar to your current approach)
4. **Direct MUI**: Use MUI components directly with theme provider

## 🎯 Benefits:

- **No breaking changes**: Keep your existing components alongside MUI ones
- **Progressive migration**: Migrate components one by one as needed
- **Enhanced UX**: Better interactions while keeping your design
- **Future-proof**: Easy to adopt new MUI features
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Integration showcase
export const IntegrationShowcase: Story = {
  render: () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [sliderValue, setSliderValue] = useState(30);
    const [switchValue, setSwitchValue] = useState(true);
    const [selectValue, setSelectValue] = useState('option1');

    return (
      <EchoMUIThemeProvider>
        <Box sx={{ p: 4, minHeight: '100vh', bgcolor: 'background.default' }}>
          <Typography variant="h3" gutterBottom sx={{ mb: 4 }}>
            Echo + MUI Integration Showcase
          </Typography>

          <Stack spacing={6}>
            {/* Button Comparison */}
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom color="primary">
                  Button Approaches Comparison
                </Typography>
                <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                  All buttons use Echo design tokens, but different implementation approaches
                </Typography>

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
                    gap: 4,
                  }}
                >
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      1. Styled MUI Button
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                      MUI Button + styled-components + Echo tokens
                    </Typography>
                    <Stack spacing={2}>
                      <EchoMUIButton variant="primary" leadingIcon={<SaveIcon />}>
                        Save Document
                      </EchoMUIButton>
                      <EchoMUIButton variant="secondary">
                        Cancel
                      </EchoMUIButton>
                      <EchoMUIButton variant="tertiary" size="small">
                        Learn More
                      </EchoMUIButton>
                    </Stack>
                  </Box>

                  <Box>
                    <Typography variant="h6" gutterBottom>
                      2. CSS-styled MUI Button
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                      MUI Button + CSS classes + Echo tokens
                    </Typography>
                    <Stack spacing={2}>
                      <EchoMUIButtonCSS variant="primary" leadingIcon={<SaveIcon />}>
                        Save Document
                      </EchoMUIButtonCSS>
                      <EchoMUIButtonCSS variant="secondary">
                        Cancel
                      </EchoMUIButtonCSS>
                      <EchoMUIButtonCSS variant="tertiary" size="small">
                        Learn More
                      </EchoMUIButtonCSS>
                    </Stack>
                  </Box>

                  <Box>
                    {/* Placeholder or other content */}
                  </Box>
                </Box>

                <Box sx={{ mt: 3, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                  <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                    💡 <strong>Notice:</strong> These approaches gain MUI's enhanced interactions (ripple effects, better touch support, etc.) while using Echo tokens.
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            {/* Direct MUI Components with Theme */}
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom color="primary">
                  Direct MUI Components (Theme-styled)
                </Typography>
                <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                  Standard MUI components automatically styled with Echo tokens via theme provider
                </Typography>

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                    gap: 4,
                  }}
                >
                  <Box>
                    <Stack spacing={3}>
                      <TextField
                        label="Your Name"
                        placeholder="Enter your full name"
                        fullWidth
                        helperText="Uses Echo fonts, colors, and spacing"
                      />

                      <FormControl fullWidth>
                        <InputLabel>Select Option</InputLabel>
                        <Select
                          value={selectValue}
                          label="Select Option"
                          onChange={(e) => setSelectValue(e.target.value)}
                        >
                          <MenuItem value="option1">Echo Primary</MenuItem>
                          <MenuItem value="option2">Echo Secondary</MenuItem>
                          <MenuItem value="option3">Echo Tertiary</MenuItem>
                        </Select>
                      </FormControl>

                      <Box>
                        <Typography gutterBottom>Volume Control</Typography>
                        <Slider
                          value={sliderValue}
                          onChange={(_, value) => setSliderValue(value as number)}
                          valueLabelDisplay="auto"
                          sx={{ color: 'primary.main' }}
                        />
                      </Box>
                    </Stack>
                  </Box>

                  <Box>
                    <Stack spacing={3}>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={switchValue}
                            onChange={(e) => setSwitchValue(e.target.checked)}
                            color="primary"
                          />
                        }
                        label="Enable notifications"
                      />

                      <FormControlLabel
                        control={<Checkbox defaultChecked color="primary" />}
                        label="I agree to the terms and conditions"
                      />

                      <RadioGroup defaultValue="echo" row>
                        <FormControlLabel value="echo" control={<Radio color="primary" />} label="Echo Design" />
                        <FormControlLabel value="mui" control={<Radio color="primary" />} label="MUI Base" />
                      </RadioGroup>

                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        <Chip label="Echo Token" color="primary" />
                        <Chip label="MUI Functionality" color="secondary" />
                        <Chip label="Best of Both" variant="outlined" />
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  startIcon={<EditIcon />}
                  onClick={() => setDialogOpen(true)}
                >
                  Open Dialog
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<DownloadIcon />}
                >
                  Export Data
                </Button>
              </CardActions>
            </Card>

            {/* Complex Interaction Example */}
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom color="primary">
                  Complex MUI Interactions
                </Typography>
                <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                  Examples of MUI components with complex behaviors, styled with Echo tokens
                </Typography>

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                      xs: '1fr',
                      sm: 'repeat(2, minmax(0, 1fr))',
                      md: 'repeat(4, minmax(0, 1fr))',
                    },
                    gap: 3,
                  }}
                >
                  <Box>
                    <Alert severity="success" sx={{ mb: 2 }}>
                      Success! Data saved using Echo green.
                    </Alert>
                  </Box>
                  <Box>
                    <Alert severity="error" sx={{ mb: 2 }}>
                      Error! Uses Echo red tokens.
                    </Alert>
                  </Box>
                  <Box>
                    <Alert severity="warning" sx={{ mb: 2 }}>
                      Warning! Uses Echo orange tokens.
                    </Alert>
                  </Box>
                  <Box>
                    <Alert severity="info" sx={{ mb: 2 }}>
                      Info! Uses Echo blue tokens.
                    </Alert>
                  </Box>
                </Box>

                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Action Buttons with MUI Interactions
                  </Typography>
                  <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 2 }}>
                    <Button
                      variant="contained"
                      startIcon={<FavoriteIcon />}
                      sx={{ bgcolor: 'error.main' }}
                    >
                      Like (Ripple Effect)
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<ShareIcon />}
                      sx={{ borderColor: 'primary.main', color: 'primary.main' }}
                    >
                      Share (Enhanced Focus)
                    </Button>
                    <Button
                      variant="text"
                      startIcon={<AddIcon />}
                      sx={{ color: 'success.main' }}
                    >
                      Add Item (Touch Optimized)
                    </Button>
                  </Stack>
                </Box>
              </CardContent>
            </Card>

            {/* Benefits Summary */}
            <Card sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  🎯 Integration Benefits
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
                      What You Keep (Echo):
                    </Typography>
                    <Box component="ul" sx={{ pl: 2.5, lineHeight: 1.6, m: 0 }}>
                      <li>100% Echo visual design and branding</li>
                      <li>Your existing design token system</li>
                      <li>Familiar CSS-based styling approach</li>
                      <li>Full control over appearance</li>
                      <li>Existing components work unchanged</li>
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      What You Gain (MUI):
                    </Typography>
                    <Box component="ul" sx={{ pl: 2.5, lineHeight: 1.6, m: 0 }}>
                      <li>Enhanced accessibility and keyboard navigation</li>
                      <li>Ripple effects and better touch interactions</li>
                      <li>Complex components (data tables, date pickers)</li>
                      <li>Proven, battle-tested component behaviors</li>
                      <li>Rich ecosystem and community support</li>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Stack>

          {/* Dialog Example */}
          <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="sm" fullWidth>
            <DialogTitle>
              Echo-styled MUI Dialog
            </DialogTitle>
            <DialogContent>
              <Typography variant="body1" sx={{ mb: 2 }}>
                This dialog uses MUI's complex behavior (focus management, backdrop clicks, ESC key handling) 
                but is styled with Echo design tokens.
              </Typography>
              <TextField
                autoFocus
                label="Your feedback"
                multiline
                rows={4}
                fullWidth
                placeholder="Tell us what you think about this integration approach..."
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button 
                variant="contained" 
                onClick={() => setDialogOpen(false)}
                startIcon={<SaveIcon />}
              >
                Save Feedback
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </EchoMUIThemeProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
**Complete Integration Example**

This story demonstrates the full potential of using MUI as a foundation with Echo design tokens:

### Implementation Strategy:
1. **Theme Provider**: Maps all Echo tokens to MUI theme structure
2. **Component Overrides**: Completely replaces MUI styling with Echo design
3. **CSS Integration**: Works with your existing CSS-based approach
4. **Progressive Migration**: Can be adopted gradually alongside existing components

### Key Features Demonstrated:
- **Visual Consistency**: All components use Echo tokens for colors, typography, spacing
- **Enhanced Interactions**: Ripple effects, better focus states, touch optimization
- **Complex Components**: Dialogs, forms, alerts with full MUI functionality
- **Accessibility**: Automatic ARIA attributes, keyboard navigation, screen reader support

### Next Steps:
1. Install the theme provider in your app
2. Start using MUI components where you need enhanced functionality
3. Gradually migrate existing components to gain MUI benefits
4. Keep your design system tokens as the single source of truth
        `,
      },
    },
  },
};

// Implementation Guide
export const ImplementationGuide: Story = {
  render: () => (
    <EchoMUIThemeProvider>
      <Box sx={{ p: 4, maxWidth: 1200, mx: 'auto' }}>
        <Typography variant="h3" gutterBottom>
          Implementation Guide
        </Typography>

        <Stack spacing={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom color="primary">
                Step 1: Install Theme Provider
              </Typography>
              <Box sx={{ bgcolor: 'grey.900', color: 'white', p: 2, borderRadius: 1, fontFamily: 'monospace' }}>
                {`// Wrap your app with EchoMUIThemeProvider
import { EchoMUIThemeProvider } from './foundations/EchoMUITheme';

function App() {
  return (
    <EchoMUIThemeProvider>
      {/* Your existing components work unchanged */}
      {/* New MUI components automatically use Echo styling */}
    </EchoMUIThemeProvider>
  );
}`}
              </Box>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom color="primary">
                Step 2: Choose Your Approach
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
                  gap: 3,
                }}
              >
                <Box>
                  <Typography variant="h6" gutterBottom>
                    CSS Classes (Recommended)
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Similar to your current approach, easy migration
                  </Typography>
                  <Box
                    sx={{
                      bgcolor: 'grey.100',
                      p: 2,
                      borderRadius: 1,
                      fontFamily: 'monospace',
                      fontSize: '0.8em',
                    }}
                  >
                    {`<EchoMUIButtonCSS
  variant="primary"
  size="default"
>
  Save
</EchoMUIButtonCSS>`}
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Styled Components
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    More dynamic, runtime styling
                  </Typography>
                  <Box
                    sx={{
                      bgcolor: 'grey.100',
                      p: 2,
                      borderRadius: 1,
                      fontFamily: 'monospace',
                      fontSize: '0.8em',
                    }}
                  >
                    {`<EchoMUIButton
  variant="primary"
  size="default"
>
  Save
</EchoMUIButton>`}
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Direct MUI
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Use MUI components directly with theme
                  </Typography>
                  <Box
                    sx={{
                      bgcolor: 'grey.100',
                      p: 2,
                      borderRadius: 1,
                      fontFamily: 'monospace',
                      fontSize: '0.8em',
                    }}
                  >
                    {`<Button
  variant="contained"
  color="primary"
>
  Save
</Button>`}
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom color="primary">
                Step 3: Migration Strategy
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
                    Progressive Approach
                  </Typography>
                  <Box component="ol" sx={{ pl: 2.5, lineHeight: 1.8, m: 0 }}>
                    <li>Keep existing Echo components unchanged</li>
                    <li>Use MUI for new complex components (data tables, date pickers)</li>
                    <li>Gradually replace existing components where you need enhanced UX</li>
                    <li>Always use Echo tokens for styling</li>
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Recommended Migration Order
                  </Typography>
                  <Box component="ol" sx={{ pl: 2.5, lineHeight: 1.8, m: 0 }}>
                    <li>
                      <strong>Forms</strong>: Inputs, selects, checkboxes (better accessibility)
                    </li>
                    <li>
                      <strong>Buttons</strong>: Enhanced interactions and ripple effects
                    </li>
                    <li>
                      <strong>Data Display</strong>: Tables, lists, cards (complex behaviors)
                    </li>
                    <li>
                      <strong>Navigation</strong>: Tabs, menus, breadcrumbs (keyboard support)
                    </li>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </EchoMUIThemeProvider>
  ),
};
