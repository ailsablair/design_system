import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { EchoMUIThemeProvider } from '../foundations/EchoMUITheme';
import { EchoMUIInput } from './EchoMUIInput';
import { EchoMUISelect } from './EchoMUISelect';
import { EchoMUICheckbox } from './EchoMUICheckbox';
import { EchoMUIRadio, EchoMUIRadioGroup } from './EchoMUIRadio';
import { EchoMUITextarea } from './EchoMUITextarea';
import { EchoMUIButton } from './EchoMUIButton';

// Import original components for comparison
import { Input } from './Input';
import { Checkbox } from './Checkbox';
import { RadioButton } from './RadioButton';
import { Textarea } from './Textarea';
import { Button } from './Button';

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Stack,
  Divider,
  Paper,
} from '@mui/material';

import {
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Save as SaveIcon,
  Clear as ClearIcon,
} from '@mui/icons-material';

const meta = {
  title: 'Echo + MUI/Forms Collection',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Echo + MUI Forms Collection

Complete form components using MUI foundation with Echo design tokens.

## ✅ Features:

### **Enhanced Accessibility:**
- ARIA attributes for screen readers
- Keyboard navigation support
- Focus management
- Error announcements

### **Better Interactions:**
- Smooth animations and transitions
- Touch-optimized for mobile
- Visual feedback on interactions
- Proper validation states

### **Echo Visual Design:**
- 100% Echo design tokens
- Consistent spacing and typography
- Your brand colors and styling
- Familiar component APIs

## 🎯 Priority Components Implemented:

1. **EchoMUIInput** - Enhanced text inputs with search, clear, validation
2. **EchoMUISelect** - Dropdown selections with proper focus management
3. **EchoMUICheckbox** - Checkboxes with indeterminate states
4. **EchoMUIRadio** - Radio buttons and radio groups
5. **EchoMUITextarea** - Multi-line text areas with auto-resize
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Form Components Showcase
export const FormsShowcase: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      role: '',
      experience: 'beginner',
      interests: [] as string[],
      newsletter: false,
      terms: false,
      comments: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleInputChange = (field: string) => (event: any) => {
      const value = event.target.value;
      setFormData(prev => ({ ...prev, [field]: value }));
      
      // Clear error when user starts typing
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: '' }));
      }
    };

    const handleCheckboxChange = (field: string) => (event: any) => {
      setFormData(prev => ({ ...prev, [field]: event.target.checked }));
    };

    const handleInterestChange = (interest: string) => {
      setFormData(prev => ({
        ...prev,
        interests: prev.interests.includes(interest)
          ? prev.interests.filter(i => i !== interest)
          : [...prev.interests, interest]
      }));
    };

    const handleClear = (field: string) => () => {
      setFormData(prev => ({ ...prev, [field]: '' }));
    };

    const validateForm = () => {
      const newErrors: Record<string, string> = {};
      
      if (!formData.firstName.trim()) {
        newErrors.firstName = 'First name is required';
      }
      
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      
      if (!formData.terms) {
        newErrors.terms = 'You must accept the terms and conditions';
      }
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
      if (validateForm()) {
        alert('Form submitted successfully! Check the console for form data.');
        console.log('Form Data:', formData);
      }
    };

    return (
      <EchoMUIThemeProvider>
        <Box sx={{ p: 4, maxWidth: 1200, mx: 'auto' }}>
          <Typography variant="h3" gutterBottom>
            Echo + MUI Forms Showcase
          </Typography>
          
          <Grid container spacing={4}>
            {/* Enhanced Forms */}
            <Grid item xs={12} lg={8}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom color="primary">
                    Echo + MUI Enhanced Forms
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                    Enhanced form components with MUI interactions + Echo design tokens
                  </Typography>

                  <Stack spacing={3}>
                    {/* Personal Information */}
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        Personal Information
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <EchoMUIInput
                            label="First Name"
                            placeholder="Enter your first name"
                            value={formData.firstName}
                            onChange={handleInputChange('firstName')}
                            state={errors.firstName ? 'error' : 'default'}
                            message={errors.firstName}
                            showLeadingIcon
                            leadingIcon={<PersonIcon />}
                            showClear={!!formData.firstName}
                            onClear={handleClear('firstName')}
                            required
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <EchoMUIInput
                            label="Last Name"
                            placeholder="Enter your last name"
                            value={formData.lastName}
                            onChange={handleInputChange('lastName')}
                            showLeadingIcon
                            leadingIcon={<PersonIcon />}
                            showClear={!!formData.lastName}
                            onClear={handleClear('lastName')}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <EchoMUIInput
                            label="Email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={handleInputChange('email')}
                            state={errors.email ? 'error' : formData.email && /\S+@\S+\.\S+/.test(formData.email) ? 'success' : 'default'}
                            message={errors.email || (formData.email && /\S+@\S+\.\S+/.test(formData.email) ? 'Valid email address' : '')}
                            showLeadingIcon
                            leadingIcon={<EmailIcon />}
                            showClear={!!formData.email}
                            onClear={handleClear('email')}
                            required
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <EchoMUIInput
                            label="Phone Number"
                            placeholder="(555) 123-4567"
                            value={formData.phone}
                            onChange={handleInputChange('phone')}
                            showLeadingIcon
                            leadingIcon={<PhoneIcon />}
                            showClear={!!formData.phone}
                            onClear={handleClear('phone')}
                          />
                        </Grid>
                      </Grid>
                    </Box>

                    <Divider />

                    {/* Professional Information */}
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        Professional Information
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <EchoMUIInput
                            label="Company"
                            placeholder="Your company name"
                            value={formData.company}
                            onChange={handleInputChange('company')}
                            showClear={!!formData.company}
                            onClear={handleClear('company')}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <EchoMUISelect
                            label="Role"
                            placeholder="Select your role"
                            value={formData.role}
                            onChange={handleInputChange('role')}
                            options={[
                              { value: 'developer', label: 'Developer' },
                              { value: 'designer', label: 'Designer' },
                              { value: 'pm', label: 'Product Manager' },
                              { value: 'marketing', label: 'Marketing' },
                              { value: 'sales', label: 'Sales' },
                              { value: 'other', label: 'Other' },
                            ]}
                          />
                        </Grid>
                      </Grid>
                    </Box>

                    <Divider />

                    {/* Experience Level */}
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        Experience Level
                      </Typography>
                      <EchoMUIRadioGroup
                        options={[
                          { value: 'beginner', label: 'Beginner (0-2 years)' },
                          { value: 'intermediate', label: 'Intermediate (2-5 years)' },
                          { value: 'advanced', label: 'Advanced (5+ years)' },
                          { value: 'expert', label: 'Expert (10+ years)' },
                        ]}
                        value={formData.experience}
                        onChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}
                        row
                      />
                    </Box>

                    <Divider />

                    {/* Interests */}
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        Areas of Interest
                      </Typography>
                      <Grid container spacing={1}>
                        {[
                          'Frontend Development',
                          'Backend Development',
                          'UI/UX Design',
                          'Data Science',
                          'DevOps',
                          'Mobile Development'
                        ].map((interest) => (
                          <Grid item xs={12} sm={6} md={4} key={interest}>
                            <EchoMUICheckbox
                              label={interest}
                              checked={formData.interests.includes(interest)}
                              onChange={() => handleInterestChange(interest)}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </Box>

                    <Divider />

                    {/* Comments */}
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        Additional Comments
                      </Typography>
                      <EchoMUITextarea
                        label="Comments"
                        placeholder="Tell us more about yourself or your project needs..."
                        value={formData.comments}
                        onChange={handleInputChange('comments')}
                        rows={4}
                        showClear={!!formData.comments}
                        onClear={handleClear('comments')}
                      />
                    </Box>

                    <Divider />

                    {/* Agreements */}
                    <Box>
                      <Stack spacing={2}>
                        <EchoMUICheckbox
                          label="Subscribe to our newsletter for updates and tips"
                          checked={formData.newsletter}
                          onChange={handleCheckboxChange('newsletter')}
                        />
                        <EchoMUICheckbox
                          label="I agree to the terms and conditions"
                          checked={formData.terms}
                          onChange={handleCheckboxChange('terms')}
                          state={errors.terms ? 'error' : 'default'}
                          message={errors.terms}
                          required
                        />
                      </Stack>
                    </Box>

                    {/* Submit Button */}
                    <Box sx={{ pt: 2 }}>
                      <Stack direction="row" spacing={2}>
                        <EchoMUIButton
                          variant="primary"
                          size="large"
                          leadingIcon={<SaveIcon />}
                          onClick={handleSubmit}
                        >
                          Submit Form
                        </EchoMUIButton>
                        <EchoMUIButton
                          variant="secondary"
                          size="large"
                          leadingIcon={<ClearIcon />}
                          onClick={() => {
                            setFormData({
                              firstName: '',
                              lastName: '',
                              email: '',
                              phone: '',
                              company: '',
                              role: '',
                              experience: 'beginner',
                              interests: [],
                              newsletter: false,
                              terms: false,
                              comments: '',
                            });
                            setErrors({});
                          }}
                        >
                          Clear Form
                        </EchoMUIButton>
                      </Stack>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            {/* Original Forms Comparison */}
            <Grid item xs={12} lg={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom color="primary">
                    Original Echo Forms
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                    Your current form components (for comparison)
                  </Typography>

                  <Stack spacing={3}>
                    <Input
                      label="First Name"
                      placeholder="Enter your first name"
                      showLeadingIcon
                      state="default"
                    />
                    
                    <Input
                      label="Email"
                      placeholder="your.email@example.com"
                      showLeadingIcon
                      state="default"
                    />
                    
                    <div>
                      <Checkbox
                        label="Subscribe to newsletter"
                        state="default"
                      />
                    </div>
                    
                    <div>
                      <RadioButton
                        label="Beginner"
                        name="experience-original"
                        selected={true}
                      />
                    </div>
                    
                    <Textarea
                      label="Comments"
                      placeholder="Your comments..."
                      state="default"
                    />
                    
                    <Button type="primary">
                      Submit Form
                    </Button>
                  </Stack>
                </CardContent>
              </Card>

              {/* Benefits Summary */}
              <Card sx={{ mt: 2 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    🎯 Enhancement Benefits
                  </Typography>
                  <Stack spacing={2}>
                    <Paper sx={{ p: 2, bgcolor: 'success.light', color: 'success.contrastText' }}>
                      <Typography variant="subtitle2" gutterBottom>
                        ♿ Enhanced Accessibility
                      </Typography>
                      <Typography variant="body2">
                        Better keyboard navigation, ARIA attributes, screen reader support
                      </Typography>
                    </Paper>
                    
                    <Paper sx={{ p: 2, bgcolor: 'info.light', color: 'info.contrastText' }}>
                      <Typography variant="subtitle2" gutterBottom>
                        🎨 Visual Consistency
                      </Typography>
                      <Typography variant="body2">
                        100% Echo design tokens maintained across all components
                      </Typography>
                    </Paper>
                    
                    <Paper sx={{ p: 2, bgcolor: 'warning.light', color: 'warning.contrastText' }}>
                      <Typography variant="subtitle2" gutterBottom>
                        ⚡ Better Interactions
                      </Typography>
                      <Typography variant="body2">
                        Smooth animations, touch optimization, validation feedback
                      </Typography>
                    </Paper>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </EchoMUIThemeProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
**Complete Forms Implementation**

This showcase demonstrates the full potential of Echo + MUI form components:

### 🎯 Key Features:
- **Validation States**: Error, success, warning visual feedback
- **Interactive Elements**: Clear buttons, search icons, proper focus management
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Echo Design**: 100% Echo tokens for colors, typography, spacing
- **Enhanced UX**: Better touch targets, animations, validation feedback

### 📋 Form Components:
1. **EchoMUIInput**: Text inputs with icons, validation, clear functionality
2. **EchoMUISelect**: Dropdown with proper keyboard navigation
3. **EchoMUICheckbox**: Checkboxes with indeterminate states
4. **EchoMUIRadio**: Radio buttons and radio groups
5. **EchoMUITextarea**: Multi-line text areas with auto-resize

### 🚀 Implementation Benefits:
- Same visual design as your existing components
- Enhanced functionality and accessibility
- Progressive enhancement approach
- Zero breaking changes to existing forms
        `,
      },
    },
  },
};
