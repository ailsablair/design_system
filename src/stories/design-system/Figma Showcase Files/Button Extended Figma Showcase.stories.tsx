import type { Meta, StoryObj } from '@storybook/react';
import { Button, AlarmIcon } from '../../atoms/Button';
import { SplitButton } from '../../atoms/button/SplitButton';

const meta: Meta<typeof Button> = {
  title: 'Design System/Figma Showcase Files/Button Extended Figma Showcase',
  component: Button,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Comprehensive showcase of button variants from Figma designs. This story demonstrates all button states, types, and special variants including icon-only buttons, tertiary buttons with dark themes, ghost buttons with light themes, and split button functionality.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Helper function to create alarm icon for different sizes
const createAlarmIcon = (size: number) => <AlarmIcon size={size} />;

// Sample menu items for split buttons
const sampleMenuItems = [
  { id: '1', label: 'This is the top', onClick: () => console.log('Top clicked') },
  { id: '2', label: 'This is the middle', onClick: () => console.log('Middle clicked') },
  { id: '3', label: 'This is the middle', onClick: () => console.log('Middle 2 clicked') },
  { id: '4', label: 'This is the bottom', onClick: () => console.log('Bottom clicked') },
];

export const TertiaryIconOnlyButtons: Story = {
  render: () => (
    <div style={{ padding: '20px', background: '#f5f5f5' }}>
      <h3 style={{ marginBottom: '20px', color: '#333' }}>Tertiary Icon-Only Buttons (Dark Theme)</h3>
      
      {/* Size variants */}
      <div style={{ marginBottom: '30px' }}>
        <h4 style={{ marginBottom: '15px', color: '#666' }}>Sizes - Default State</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button 
            type="tertiary" 
            size="small" 
            iconOnly 
            icon={createAlarmIcon(14)}
            onClick={() => console.log('Small tertiary clicked')}
          />
          <Button 
            type="tertiary" 
            size="default" 
            iconOnly 
            icon={createAlarmIcon(18)}
            onClick={() => console.log('Default tertiary clicked')}
          />
          <Button 
            type="tertiary" 
            size="large" 
            iconOnly 
            icon={createAlarmIcon(20)}
            onClick={() => console.log('Large tertiary clicked')}
          />
        </div>
      </div>

      {/* Hover states */}
      <div style={{ marginBottom: '30px' }}>
        <h4 style={{ marginBottom: '15px', color: '#666' }}>Hover States</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button 
            type="tertiary" 
            size="small" 
            iconOnly 
            icon={createAlarmIcon(14)}
            state="hover"
            className="force-hover"
          />
          <Button 
            type="tertiary" 
            size="default" 
            iconOnly 
            icon={createAlarmIcon(18)}
            state="hover"
            className="force-hover"
          />
          <Button 
            type="tertiary" 
            size="large" 
            iconOnly 
            icon={createAlarmIcon(20)}
            state="hover"
            className="force-hover"
          />
        </div>
      </div>

      {/* Clicked states */}
      <div style={{ marginBottom: '30px' }}>
        <h4 style={{ marginBottom: '15px', color: '#666' }}>Clicked States</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button 
            type="tertiary" 
            size="small" 
            iconOnly 
            icon={createAlarmIcon(14)}
            state="clicked"
            className="force-clicked"
          />
          <Button 
            type="tertiary" 
            size="default" 
            iconOnly 
            icon={createAlarmIcon(18)}
            state="clicked"
            className="force-clicked"
          />
          <Button 
            type="tertiary" 
            size="large" 
            iconOnly 
            icon={createAlarmIcon(20)}
            state="clicked"
            className="force-clicked"
          />
        </div>
      </div>

      {/* Focused states */}
      <div style={{ marginBottom: '30px' }}>
        <h4 style={{ marginBottom: '15px', color: '#666' }}>Focused States</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button 
            type="tertiary" 
            size="small" 
            iconOnly 
            icon={createAlarmIcon(14)}
            state="focused"
            className="force-focused"
          />
          <Button 
            type="tertiary" 
            size="default" 
            iconOnly 
            icon={createAlarmIcon(18)}
            state="focused"
            className="force-focused"
          />
          <Button 
            type="tertiary" 
            size="large" 
            iconOnly 
            icon={createAlarmIcon(20)}
            state="focused"
            className="force-focused"
          />
        </div>
      </div>

      {/* Loading states */}
      <div style={{ marginBottom: '30px' }}>
        <h4 style={{ marginBottom: '15px', color: '#666' }}>Loading States</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button 
            type="tertiary" 
            size="small" 
            iconOnly 
            loading
          />
          <Button 
            type="tertiary" 
            size="default" 
            iconOnly 
            loading
          />
          <Button 
            type="tertiary" 
            size="large" 
            iconOnly 
            loading
          />
        </div>
      </div>

      {/* Disabled states */}
      <div style={{ marginBottom: '30px' }}>
        <h4 style={{ marginBottom: '15px', color: '#666' }}>Disabled States</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button 
            type="tertiary" 
            size="small" 
            iconOnly 
            icon={createAlarmIcon(14)}
            disabled
          />
          <Button 
            type="tertiary" 
            size="default" 
            iconOnly 
            icon={createAlarmIcon(18)}
            disabled
          />
          <Button 
            type="tertiary" 
            size="large" 
            iconOnly 
            icon={createAlarmIcon(20)}
            disabled
          />
        </div>
      </div>
    </div>
  ),
};

export const GhostIconOnlyButtons: Story = {
  render: () => (
    <div style={{ padding: '20px', background: '#f5f5f5' }}>
      <h3 style={{ marginBottom: '20px', color: '#333' }}>Ghost Icon-Only Buttons (Light Theme)</h3>
      
      {/* Size variants */}
      <div style={{ marginBottom: '30px' }}>
        <h4 style={{ marginBottom: '15px', color: '#666' }}>Sizes - Default State</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button 
            type="ghost" 
            size="extra-small" 
            iconOnly 
            icon={createAlarmIcon(14)}
            onClick={() => console.log('Extra small ghost clicked')}
          />
          <Button 
            type="ghost" 
            size="small" 
            iconOnly 
            icon={createAlarmIcon(14)}
            onClick={() => console.log('Small ghost clicked')}
          />
          <Button 
            type="ghost" 
            size="default" 
            iconOnly 
            icon={createAlarmIcon(18)}
            onClick={() => console.log('Default ghost clicked')}
          />
          <Button 
            type="ghost" 
            size="large" 
            iconOnly 
            icon={createAlarmIcon(20)}
            onClick={() => console.log('Large ghost clicked')}
          />
        </div>
      </div>

      {/* Hover states */}
      <div style={{ marginBottom: '30px' }}>
        <h4 style={{ marginBottom: '15px', color: '#666' }}>Hover States</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button 
            type="ghost" 
            size="extra-small" 
            iconOnly 
            icon={createAlarmIcon(14)}
            state="hover"
            className="force-hover"
          />
          <Button 
            type="ghost" 
            size="small" 
            iconOnly 
            icon={createAlarmIcon(14)}
            state="hover"
            className="force-hover"
          />
          <Button 
            type="ghost" 
            size="default" 
            iconOnly 
            icon={createAlarmIcon(18)}
            state="hover"
            className="force-hover"
          />
          <Button 
            type="ghost" 
            size="large" 
            iconOnly 
            icon={createAlarmIcon(20)}
            state="hover"
            className="force-hover"
          />
        </div>
      </div>

      {/* Clicked states */}
      <div style={{ marginBottom: '30px' }}>
        <h4 style={{ marginBottom: '15px', color: '#666' }}>Clicked States</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button 
            type="ghost" 
            size="extra-small" 
            iconOnly 
            icon={createAlarmIcon(14)}
            state="clicked"
            className="force-clicked"
          />
          <Button 
            type="ghost" 
            size="small" 
            iconOnly 
            icon={createAlarmIcon(14)}
            state="clicked"
            className="force-clicked"
          />
          <Button 
            type="ghost" 
            size="default" 
            iconOnly 
            icon={createAlarmIcon(18)}
            state="clicked"
            className="force-clicked"
          />
          <Button 
            type="ghost" 
            size="large" 
            iconOnly 
            icon={createAlarmIcon(20)}
            state="clicked"
            className="force-clicked"
          />
        </div>
      </div>

      {/* Focused states */}
      <div style={{ marginBottom: '30px' }}>
        <h4 style={{ marginBottom: '15px', color: '#666' }}>Focused States</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button 
            type="ghost" 
            size="extra-small" 
            iconOnly 
            icon={createAlarmIcon(14)}
            state="focused"
            className="force-focused"
          />
          <Button 
            type="ghost" 
            size="small" 
            iconOnly 
            icon={createAlarmIcon(14)}
            state="focused"
            className="force-focused"
          />
          <Button 
            type="ghost" 
            size="default" 
            iconOnly 
            icon={createAlarmIcon(18)}
            state="focused"
            className="force-focused"
          />
          <Button 
            type="ghost" 
            size="large" 
            iconOnly 
            icon={createAlarmIcon(20)}
            state="focused"
            className="force-focused"
          />
        </div>
      </div>

      {/* Loading states */}
      <div style={{ marginBottom: '30px' }}>
        <h4 style={{ marginBottom: '15px', color: '#666' }}>Loading States</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button 
            type="ghost" 
            size="extra-small" 
            iconOnly 
            loading
          />
          <Button 
            type="ghost" 
            size="small" 
            iconOnly 
            loading
          />
          <Button 
            type="ghost" 
            size="default" 
            iconOnly 
            loading
          />
          <Button 
            type="ghost" 
            size="large" 
            iconOnly 
            loading
          />
        </div>
      </div>

      {/* Disabled states */}
      <div style={{ marginBottom: '30px' }}>
        <h4 style={{ marginBottom: '15px', color: '#666' }}>Disabled States</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button 
            type="ghost" 
            size="extra-small" 
            iconOnly 
            icon={createAlarmIcon(14)}
            disabled
          />
          <Button 
            type="ghost" 
            size="small" 
            iconOnly 
            icon={createAlarmIcon(14)}
            disabled
          />
          <Button 
            type="ghost" 
            size="default" 
            iconOnly 
            icon={createAlarmIcon(18)}
            disabled
          />
          <Button 
            type="ghost" 
            size="large" 
            iconOnly 
            icon={createAlarmIcon(20)}
            disabled
          />
        </div>
      </div>
    </div>
  ),
};

export const SplitButtonShowcase: Story = {
  render: () => (
    <div style={{ padding: '20px', background: '#f5f5f5' }}>
      <h3 style={{ marginBottom: '20px', color: '#333' }}>Split Buttons with Dropdown Menus</h3>
      
      {/* Regular split buttons */}
      <div style={{ marginBottom: '30px' }}>
        <h4 style={{ marginBottom: '15px', color: '#666' }}>Split Buttons - Default State</h4>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <SplitButton 
            type="ghost" 
            size="extra-small" 
            menuItems={sampleMenuItems}
            onClick={() => console.log('Extra small split button clicked')}
          >
            Button w/ leading icon
          </SplitButton>
          <SplitButton 
            type="ghost" 
            size="small" 
            menuItems={sampleMenuItems}
            onClick={() => console.log('Small split button clicked')}
          >
            Label
          </SplitButton>
          <SplitButton 
            type="ghost" 
            size="default" 
            menuItems={sampleMenuItems}
            onClick={() => console.log('Default split button clicked')}
          >
            Label
          </SplitButton>
          <SplitButton 
            type="ghost" 
            size="large" 
            menuItems={sampleMenuItems}
            onClick={() => console.log('Large split button clicked')}
          >
            Label
          </SplitButton>
        </div>
      </div>

      {/* Icon-only split buttons */}
      <div style={{ marginBottom: '30px' }}>
        <h4 style={{ marginBottom: '15px', color: '#666' }}>Icon-Only Split Button (Extra Small)</h4>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
          <SplitButton 
            type="ghost" 
            size="extra-small" 
            leadingIcon={createAlarmIcon(14)}
            menuItems={sampleMenuItems}
            onClick={() => console.log('Icon only split button clicked')}
          >
            
          </SplitButton>
        </div>
      </div>

      {/* Interactive examples */}
      <div style={{ marginBottom: '30px' }}>
        <h4 style={{ marginBottom: '15px', color: '#666' }}>Interactive Examples</h4>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <SplitButton 
            type="primary" 
            size="default" 
            menuItems={sampleMenuItems}
            onClick={() => console.log('Primary split button clicked')}
          >
            Primary Split
          </SplitButton>
          <SplitButton 
            type="secondary" 
            size="default" 
            menuItems={sampleMenuItems}
            onClick={() => console.log('Secondary split button clicked')}
          >
            Secondary Split
          </SplitButton>
          <SplitButton 
            type="ghost" 
            size="default" 
            menuItems={sampleMenuItems}
            onClick={() => console.log('Ghost split button clicked')}
          >
            Ghost Split
          </SplitButton>
        </div>
      </div>
    </div>
  ),
};

export const ComprehensiveShowcase: Story = {
  render: () => (
    <div style={{ padding: '20px', background: '#f5f5f5' }}>
      <h2 style={{ marginBottom: '30px', color: '#333', textAlign: 'center' }}>Complete Figma Design System Showcase</h2>
      
      {/* Tertiary buttons section */}
      <div style={{ marginBottom: '50px' }}>
        <h3 style={{ marginBottom: '20px', color: '#333', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>Tertiary Icon-Only Buttons</h3>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#666' }}>Small</span>
            <Button type="tertiary" size="small" iconOnly icon={createAlarmIcon(14)} />
            <Button type="tertiary" size="small" iconOnly icon={createAlarmIcon(14)} className="force-hover" />
            <Button type="tertiary" size="small" iconOnly icon={createAlarmIcon(14)} className="force-clicked" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#666' }}>Default</span>
            <Button type="tertiary" size="default" iconOnly icon={createAlarmIcon(18)} />
            <Button type="tertiary" size="default" iconOnly icon={createAlarmIcon(18)} className="force-hover" />
            <Button type="tertiary" size="default" iconOnly icon={createAlarmIcon(18)} className="force-clicked" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#666' }}>Large</span>
            <Button type="tertiary" size="large" iconOnly icon={createAlarmIcon(20)} />
            <Button type="tertiary" size="large" iconOnly icon={createAlarmIcon(20)} className="force-hover" />
            <Button type="tertiary" size="large" iconOnly icon={createAlarmIcon(20)} className="force-clicked" />
          </div>
        </div>
      </div>

      {/* Ghost buttons section */}
      <div style={{ marginBottom: '50px' }}>
        <h3 style={{ marginBottom: '20px', color: '#333', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>Ghost Icon-Only Buttons</h3>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#666' }}>Extra Small</span>
            <Button type="ghost" size="extra-small" iconOnly icon={createAlarmIcon(14)} />
            <Button type="ghost" size="extra-small" iconOnly icon={createAlarmIcon(14)} className="force-hover" />
            <Button type="ghost" size="extra-small" iconOnly icon={createAlarmIcon(14)} className="force-clicked" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#666' }}>Small</span>
            <Button type="ghost" size="small" iconOnly icon={createAlarmIcon(14)} />
            <Button type="ghost" size="small" iconOnly icon={createAlarmIcon(14)} className="force-hover" />
            <Button type="ghost" size="small" iconOnly icon={createAlarmIcon(14)} className="force-clicked" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#666' }}>Default</span>
            <Button type="ghost" size="default" iconOnly icon={createAlarmIcon(18)} />
            <Button type="ghost" size="default" iconOnly icon={createAlarmIcon(18)} className="force-hover" />
            <Button type="ghost" size="default" iconOnly icon={createAlarmIcon(18)} className="force-clicked" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#666' }}>Large</span>
            <Button type="ghost" size="large" iconOnly icon={createAlarmIcon(20)} />
            <Button type="ghost" size="large" iconOnly icon={createAlarmIcon(20)} className="force-hover" />
            <Button type="ghost" size="large" iconOnly icon={createAlarmIcon(20)} className="force-clicked" />
          </div>
        </div>
      </div>

      {/* Split buttons section */}
      <div style={{ marginBottom: '50px' }}>
        <h3 style={{ marginBottom: '20px', color: '#333', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>Split Buttons</h3>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <SplitButton type="ghost" size="small" menuItems={sampleMenuItems}>Label</SplitButton>
          <SplitButton type="ghost" size="default" menuItems={sampleMenuItems}>Label</SplitButton>
          <SplitButton type="ghost" size="large" menuItems={sampleMenuItems}>Label</SplitButton>
          <SplitButton type="ghost" size="extra-small" menuItems={sampleMenuItems}>Button w/ leading icon</SplitButton>
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', marginTop: '30px' }}>
        <p style={{ color: '#666', fontSize: '14px' }}>
          🎨 All button variants above match the exact specifications from the Figma design system.
          <br />
          Interactive examples demonstrate hover states, click effects, and dropdown functionality.
        </p>
      </div>
    </div>
  ),
};
