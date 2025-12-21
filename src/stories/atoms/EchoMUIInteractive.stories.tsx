import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { EchoMUIThemeProvider } from '../foundations/EchoMUITheme';
import { EchoMUIButton } from './EchoMUIButton';
import { EchoMUIToggle } from './EchoMUIToggle';
import { EchoMUITag } from './EchoMUITag';

// Import original components for comparison
import { Tag } from './Tag';

import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Paper,
} from '@mui/material';

import {
  Save as SaveIcon,
  Download as DownloadIcon,
  Share as ShareIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Favorite as FavoriteIcon,
  Add as AddIcon,
} from '@mui/icons-material';

const meta = {
  title: 'Echo + MUI/Interactive Elements',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Echo + MUI Interactive Elements

Enhanced interactive components using MUI foundation with Echo design tokens.

## ✅ Enhanced Components:

### **EchoMUIButton**
- Ripple effects for better feedback
- Enhanced focus states
- Touch-optimized interactions
- Loading states with smooth animations

### **EchoMUIToggle**
- Smooth switch animations
- Better accessibility features
- Enhanced keyboard navigation
- Proper ARIA attributes

### **EchoMUITag**
- Interactive hover effects
- Better touch targets
- Smooth animations
- Enhanced delete functionality

All components maintain 100% Echo visual design while gaining MUI's interaction enhancements.
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Interactive Elements Showcase
export const InteractiveShowcase: Story = {
  render: () => {
    const [buttonLoading, setButtonLoading] = useState(false);
    const [toggleStates, setToggleStates] = useState({
      notifications: true,
      darkMode: false,
      autoSave: true,
      sharing: false,
    });

    type InteractiveTagVariant =
      | 'primary'
      | 'blue'
      | 'green'
      | 'orange'
      | 'purple'
      | 'outline-blue';

    const [tags, setTags] = useState<
      Array<{ id: string; label: string; variant: InteractiveTagVariant }>
    >([
      { id: '1', label: 'React', variant: 'primary' },
      { id: '2', label: 'TypeScript', variant: 'blue' },
      { id: '3', label: 'Design System', variant: 'green' },
      { id: '4', label: 'MUI Integration', variant: 'orange' },
      { id: '5', label: 'Echo Tokens', variant: 'purple' },
    ]);

    const handleToggleChange = (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setToggleStates(prev => ({ ...prev, [key]: event.target.checked }));
    };

    const handleButtonClick = () => {
      setButtonLoading(true);
      setTimeout(() => setButtonLoading(false), 2000);
    };

    const removeTag = (id: string) => {
      setTags(prev => prev.filter(tag => tag.id !== id));
    };

    const addTag = () => {
      const newTag: { id: string; label: string; variant: InteractiveTagVariant } = {
        id: Date.now().toString(),
        label: `New Tag ${tags.length + 1}`,
        variant: 'outline-blue',
      };
      setTags((prev) => [...prev, newTag]);
    };

    return (
      <EchoMUIThemeProvider>
        <Box sx={{ p: 4, maxWidth: 1200, mx: 'auto' }}>
          <Typography variant="h3" gutterBottom>
            Interactive Elements Showcase
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' },
              gap: 4,
            }}
          >
            {/* Enhanced Interactive Elements */}
            <Box>
              <Stack spacing={4}>
                {/* Buttons Section */}
                <Card>
                  <CardContent>
                    <Typography variant="h5" gutterBottom color="primary">
                      Enhanced Buttons
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                      MUI buttons with ripple effects + Echo design tokens
                    </Typography>

                    <Stack spacing={3}>
                      {/* Button Variants */}
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          Button Variants
                        </Typography>
                        <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 2 }}>
                          <EchoMUIButton variant="primary" leadingIcon={<SaveIcon />}>
                            Primary
                          </EchoMUIButton>
                          <EchoMUIButton variant="secondary" leadingIcon={<EditIcon />}>
                            Secondary
                          </EchoMUIButton>
                          <EchoMUIButton variant="tertiary" leadingIcon={<ShareIcon />}>
                            Tertiary
                          </EchoMUIButton>
                          <EchoMUIButton variant="error" leadingIcon={<DeleteIcon />}>
                            Error
                          </EchoMUIButton>
                          <EchoMUIButton variant="success" leadingIcon={<FavoriteIcon />}>
                            Success
                          </EchoMUIButton>
                        </Stack>
                      </Box>

                      {/* Button Sizes */}
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          Button Sizes
                        </Typography>
                        <Stack direction="row" spacing={2} sx={{ alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                          <EchoMUIButton variant="primary" size="extra-small">
                            Extra Small
                          </EchoMUIButton>
                          <EchoMUIButton variant="primary" size="small">
                            Small
                          </EchoMUIButton>
                          <EchoMUIButton variant="primary" size="default">
                            Default
                          </EchoMUIButton>
                          <EchoMUIButton variant="primary" size="large">
                            Large
                          </EchoMUIButton>
                        </Stack>
                      </Box>

                      {/* Interactive States */}
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          Interactive States
                        </Typography>
                        <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 2 }}>
                          <EchoMUIButton 
                            variant="primary" 
                            loading={buttonLoading}
                            leadingIcon={<DownloadIcon />}
                            onClick={handleButtonClick}
                          >
                            {buttonLoading ? 'Downloading...' : 'Download'}
                          </EchoMUIButton>
                          <EchoMUIButton variant="secondary" disabled>
                            Disabled
                          </EchoMUIButton>
                          <EchoMUIButton variant="primary" fullWidth>
                            Full Width Button
                          </EchoMUIButton>
                        </Stack>
                      </Box>

                      {/* Icon Buttons */}
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          Icon Buttons
                        </Typography>
                        <Stack direction="row" spacing={2}>
                          <EchoMUIButton 
                            iconOnly 
                            icon={<FavoriteIcon />} 
                            variant="error"
                            tooltip="Like this post"
                          />
                          <EchoMUIButton 
                            iconOnly 
                            icon={<ShareIcon />} 
                            variant="secondary"
                            tooltip="Share content"
                          />
                          <EchoMUIButton 
                            iconOnly 
                            icon={<EditIcon />} 
                            variant="tertiary"
                            tooltip="Edit content"
                          />
                          <EchoMUIButton 
                            iconOnly 
                            icon={<DeleteIcon />} 
                            variant="error"
                            tooltip="Delete item"
                          />
                        </Stack>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>

                {/* Toggles Section */}
                <Card>
                  <CardContent>
                    <Typography variant="h5" gutterBottom color="primary">
                      Enhanced Toggles
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                      MUI switches with smooth animations + Echo design tokens
                    </Typography>

                    <Stack spacing={3}>
                      {/* Toggle Variants */}
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          Settings Toggles
                        </Typography>
                        <Stack spacing={2}>
                          <EchoMUIToggle
                            label="Push Notifications"
                            description="Receive notifications for new messages and updates"
                            checked={toggleStates.notifications}
                            onChange={handleToggleChange('notifications')}
                            variant="primary"
                          />
                          <EchoMUIToggle
                            label="Dark Mode"
                            description="Switch to dark theme for better viewing in low light"
                            checked={toggleStates.darkMode}
                            onChange={handleToggleChange('darkMode')}
                            variant="primary"
                          />
                          <EchoMUIToggle
                            label="Auto Save"
                            description="Automatically save your work every 5 minutes"
                            checked={toggleStates.autoSave}
                            onChange={handleToggleChange('autoSave')}
                            variant="success"
                          />
                          <EchoMUIToggle
                            label="Public Sharing"
                            description="Allow others to view and share your content"
                            checked={toggleStates.sharing}
                            onChange={handleToggleChange('sharing')}
                            variant="warning"
                            required
                          />
                        </Stack>
                      </Box>

                      {/* Toggle Sizes */}
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          Toggle Sizes
                        </Typography>
                        <Stack direction="row" spacing={4} sx={{ alignItems: 'center' }}>
                          <EchoMUIToggle
                            label="Small"
                            size="small"
                            checked={true}
                            variant="primary"
                          />
                          <EchoMUIToggle
                            label="Default"
                            size="default"
                            checked={true}
                            variant="primary"
                          />
                          <EchoMUIToggle
                            label="Large"
                            size="large"
                            checked={true}
                            variant="primary"
                          />
                        </Stack>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>

                {/* Tags Section */}
                <Card>
                  <CardContent>
                    <Typography variant="h5" gutterBottom color="primary">
                      Enhanced Tags
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                      MUI chips with interactive effects + Echo design tokens
                    </Typography>

                    <Stack spacing={3}>
                      {/* Dynamic Tags */}
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          Dynamic Tag Collection
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                          {tags.map((tag) => (
                            <EchoMUITag
                              key={tag.id}
                              label={tag.label}
                              variant={tag.variant}
                              showClose
                              onRemove={() => removeTag(tag.id)}
                              clickable
                              onClick={() => console.log(`Clicked tag: ${tag.label}`)}
                            />
                          ))}
                        </Box>
                        <EchoMUIButton 
                          variant="tertiary" 
                          size="small" 
                          leadingIcon={<AddIcon />}
                          onClick={addTag}
                        >
                          Add Tag
                        </EchoMUIButton>
                      </Box>

                      {/* Tag Variants */}
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          Tag Variants
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          <EchoMUITag label="Primary" variant="primary" />
                          <EchoMUITag label="Secondary" variant="secondary" />
                          <EchoMUITag label="Blue" variant="blue" />
                          <EchoMUITag label="Green" variant="green" />
                          <EchoMUITag label="Orange" variant="orange" />
                          <EchoMUITag label="Red" variant="red" />
                          <EchoMUITag label="Purple" variant="purple" />
                          <EchoMUITag label="Outline Blue" variant="outline-blue" />
                          <EchoMUITag label="Light Gray" variant="light-gray" light />
                        </Box>
                      </Box>

                      {/* Tag Sizes */}
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          Tag Sizes
                        </Typography>
                        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                          <EchoMUITag label="Small" variant="primary" size="small" />
                          <EchoMUITag label="Default" variant="primary" size="default" />
                          <EchoMUITag label="Large" variant="primary" size="large" />
                        </Stack>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Stack>
            </Box>

            {/* Original Components Comparison */}
            <Box>
              <Stack spacing={3}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" gutterBottom color="primary">
                      Original Echo Components
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                      Your current components (for comparison)
                    </Typography>

                    <Stack spacing={3}>
                      {/* Original Tags */}
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          Original Tags
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          <Tag label="React" variant="primary" />
                          <Tag label="TypeScript" variant="blue" />
                          <Tag label="Design System" variant="green" showClose />
                        </Box>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>

                {/* Enhancement Benefits */}
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom color="primary">
                      🎯 Enhancement Benefits
                    </Typography>
                    <Stack spacing={2}>
                      <Paper sx={{ p: 2, bgcolor: 'info.light', color: 'info.contrastText' }}>
                        <Typography variant="subtitle2" gutterBottom>
                          ⚡ Ripple Effects
                        </Typography>
                        <Typography variant="body2">
                          Enhanced button feedback with material design ripples
                        </Typography>
                      </Paper>
                      
                      <Paper sx={{ p: 2, bgcolor: 'success.light', color: 'success.contrastText' }}>
                        <Typography variant="subtitle2" gutterBottom>
                          🎨 Smooth Animations
                        </Typography>
                        <Typography variant="body2">
                          Better transitions and micro-interactions throughout
                        </Typography>
                      </Paper>
                      
                      <Paper sx={{ p: 2, bgcolor: 'warning.light', color: 'warning.contrastText' }}>
                        <Typography variant="subtitle2" gutterBottom>
                          📱 Touch Optimized
                        </Typography>
                        <Typography variant="body2">
                          Better mobile and tablet interaction experiences
                        </Typography>
                      </Paper>
                      
                      <Paper sx={{ p: 2, bgcolor: 'error.light', color: 'error.contrastText' }}>
                        <Typography variant="subtitle2" gutterBottom>
                          ♿ Enhanced A11y
                        </Typography>
                        <Typography variant="body2">
                          Better keyboard navigation and screen reader support
                        </Typography>
                      </Paper>
                    </Stack>
                  </CardContent>
                </Card>

                {/* Usage Statistics */}
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Interactive Demo Stats
                    </Typography>
                    <Stack spacing={2}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2">Active Toggles:</Typography>
                        <Typography variant="body2" fontWeight="bold">
                          {Object.values(toggleStates).filter(Boolean).length}/4
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2">Total Tags:</Typography>
                        <Typography variant="body2" fontWeight="bold">
                          {tags.length}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2">Button Loading:</Typography>
                        <Typography variant="body2" fontWeight="bold">
                          {buttonLoading ? 'Active' : 'Idle'}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Stack>
            </Box>
          </Box>
        </Box>
      </EchoMUIThemeProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
**Interactive Elements Enhancement**

This showcase demonstrates the enhanced interactive capabilities of Echo + MUI components:

### 🎯 Key Enhancements:
- **Ripple Effects**: Material Design feedback on button interactions
- **Smooth Animations**: Better transitions and micro-interactions
- **Touch Optimization**: Improved mobile and tablet experiences
- **Accessibility**: Enhanced keyboard navigation and screen reader support

### 📋 Components Enhanced:
1. **EchoMUIButton**: Ripple effects, loading states, better focus management
2. **EchoMUIToggle**: Smooth switch animations, better accessibility
3. **EchoMUITag**: Interactive hover effects, better touch targets

### ���� Benefits:
- Same visual design as your existing components
- Enhanced user experience and accessibility
- Better mobile/touch interactions
- Progressive enhancement approach
        `,
      },
    },
  },
};
