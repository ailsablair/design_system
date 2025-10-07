import type { Meta, StoryObj } from '@storybook/react';
import { AccordionOpen } from './AccordionOpen';

const meta = {
  title: 'Atoms/Accordion/Open Showcase',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Comprehensive showcase of open accordion components for creating stacked accordion groups.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// ===== COMPLETE FIGMA SHOWCASE =====

export const CompleteFigmaShowcase: Story = {
  name: '🎨 Complete Figma Showcase',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', padding: '24px', maxWidth: '1200px' }}>
      <div>
        <h1 style={{ marginBottom: '8px', fontFamily: 'Archivo', fontSize: '32px', color: '#191E3C' }}>
          Open Accordion Components
        </h1>
        <p style={{ color: '#6D7280', fontFamily: 'Roboto Flex', fontSize: '16px', lineHeight: '1.5', marginBottom: '32px' }}>
          Accordion components designed for creating seamless stacked groups with different positioning types.
        </p>
      </div>

      {/* Contained Type */}
      <section>
        <h2 style={{ marginBottom: '24px', fontFamily: 'Archivo', fontSize: '24px', color: '#191E3C' }}>
          Contained Type (Standalone)
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <h4 style={{ marginBottom: '8px', fontFamily: 'Archivo', fontSize: '16px', color: '#6D7280' }}>
              Default Size
            </h4>
            <AccordionOpen type="contained" size="default" />
          </div>
          <div>
            <h4 style={{ marginBottom: '8px', fontFamily: 'Archivo', fontSize: '16px', color: '#6D7280' }}>
              Large Size
            </h4>
            <AccordionOpen type="contained" size="large" />
          </div>
          <div>
            <h4 style={{ marginBottom: '8px', fontFamily: 'Archivo', fontSize: '16px', color: '#6D7280' }}>
              Small Size
            </h4>
            <AccordionOpen type="contained" size="small" />
          </div>
        </div>
      </section>

      {/* Top Type */}
      <section>
        <h2 style={{ marginBottom: '24px', fontFamily: 'Archivo', fontSize: '24px', color: '#191E3C' }}>
          Top Type (First in Stack)
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <h4 style={{ marginBottom: '8px', fontFamily: 'Archivo', fontSize: '16px', color: '#6D7280' }}>
              Default Size
            </h4>
            <AccordionOpen type="top" size="default" />
          </div>
          <div>
            <h4 style={{ marginBottom: '8px', fontFamily: 'Archivo', fontSize: '16px', color: '#6D7280' }}>
              Large Size
            </h4>
            <AccordionOpen type="top" size="large" />
          </div>
          <div>
            <h4 style={{ marginBottom: '8px', fontFamily: 'Archivo', fontSize: '16px', color: '#6D7280' }}>
              Small Size
            </h4>
            <AccordionOpen type="top" size="small" />
          </div>
        </div>
      </section>

      {/* Middle Type */}
      <section>
        <h2 style={{ marginBottom: '24px', fontFamily: 'Archivo', fontSize: '24px', color: '#191E3C' }}>
          Middle Type (Middle of Stack)
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <h4 style={{ marginBottom: '8px', fontFamily: 'Archivo', fontSize: '16px', color: '#6D7280' }}>
              Default Size
            </h4>
            <AccordionOpen type="middle" size="default" />
          </div>
          <div>
            <h4 style={{ marginBottom: '8px', fontFamily: 'Archivo', fontSize: '16px', color: '#6D7280' }}>
              Large Size
            </h4>
            <AccordionOpen type="middle" size="large" />
          </div>
          <div>
            <h4 style={{ marginBottom: '8px', fontFamily: 'Archivo', fontSize: '16px', color: '#6D7280' }}>
              Small Size
            </h4>
            <AccordionOpen type="middle" size="small" />
          </div>
        </div>
      </section>

      {/* Bottom Type */}
      <section>
        <h2 style={{ marginBottom: '24px', fontFamily: 'Archivo', fontSize: '24px', color: '#191E3C' }}>
          Bottom Type (Last in Stack)
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <h4 style={{ marginBottom: '8px', fontFamily: 'Archivo', fontSize: '16px', color: '#6D7280' }}>
              Default Size
            </h4>
            <AccordionOpen type="bottom" size="default" />
          </div>
          <div>
            <h4 style={{ marginBottom: '8px', fontFamily: 'Archivo', fontSize: '16px', color: '#6D7280' }}>
              Large Size
            </h4>
            <AccordionOpen type="bottom" size="large" />
          </div>
          <div>
            <h4 style={{ marginBottom: '8px', fontFamily: 'Archivo', fontSize: '16px', color: '#6D7280' }}>
              Small Size
            </h4>
            <AccordionOpen type="bottom" size="small" />
          </div>
        </div>
      </section>
    </div>
  ),
};

// ===== PRACTICAL EXAMPLES =====

export const AccordionStacks: Story = {
  name: '📚 Accordion Stacks',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', padding: '24px', maxWidth: '1000px' }}>
      <div>
        <h2 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '24px', color: '#191E3C' }}>
          Default Size Stack
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <AccordionOpen 
            type="top" 
            size="default" 
            title="Project Information"
            content="View and manage project details, timeline, and key deliverables."
          />
          <AccordionOpen 
            type="middle" 
            size="default" 
            title="Team & Resources"
            content="Manage team members, assign roles, and allocate resources."
          />
          <AccordionOpen 
            type="middle" 
            size="default" 
            title="Budget & Finance"
            content="Track project budget, expenses, and financial reports."
          />
          <AccordionOpen 
            type="bottom" 
            size="default" 
            title="Documentation"
            content="Access project documentation, reports, and archived files."
          />
        </div>
      </div>

      <div>
        <h2 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '24px', color: '#191E3C' }}>
          Large Size Stack
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <AccordionOpen 
            type="top" 
            size="large" 
            title="System Overview"
            content="Comprehensive overview of system architecture, infrastructure, and performance metrics."
          />
          <AccordionOpen 
            type="middle" 
            size="large" 
            title="Configuration"
            content="Configure system settings, environment variables, and deployment options."
          />
          <AccordionOpen 
            type="bottom" 
            size="large" 
            title="Monitoring & Logs"
            content="Real-time monitoring, error tracking, and detailed system logs."
          />
        </div>
      </div>

      <div>
        <h2 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '24px', color: '#191E3C' }}>
          Small Size Stack
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <AccordionOpen 
            type="top" 
            size="small" 
            title="Quick Settings"
            content="Access frequently used settings and preferences."
          />
          <AccordionOpen 
            type="middle" 
            size="small" 
            title="Notifications"
            content="Manage notification preferences and alerts."
          />
          <AccordionOpen 
            type="bottom" 
            size="small" 
            title="Help & Support"
            content="Get help, view documentation, and contact support."
          />
        </div>
      </div>
    </div>
  ),
};

export const MixedAccordionLayout: Story = {
  name: '🎯 Mixed Layout Example',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px', maxWidth: '1000px' }}>
      <div>
        <h2 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '24px', color: '#191E3C' }}>
          User Dashboard
        </h2>
        
        {/* First Group */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ marginBottom: '12px', fontFamily: 'Archivo', fontSize: '18px', color: '#6D7280' }}>
            Account Management
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <AccordionOpen 
              type="top" 
              size="default" 
              title="Profile Settings"
              content="Update your personal information, avatar, and bio."
            />
            <AccordionOpen 
              type="middle" 
              size="default" 
              title="Privacy & Security"
              content="Manage privacy settings, password, and two-factor authentication."
            />
            <AccordionOpen 
              type="bottom" 
              size="default" 
              title="Connected Accounts"
              content="View and manage connected social media and third-party accounts."
            />
          </div>
        </div>

        {/* Second Group */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ marginBottom: '12px', fontFamily: 'Archivo', fontSize: '18px', color: '#6D7280' }}>
            Subscription & Billing
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <AccordionOpen 
              type="top" 
              size="default" 
              title="Current Plan"
              content="View your subscription plan, billing cycle, and included features."
            />
            <AccordionOpen 
              type="bottom" 
              size="default" 
              title="Payment Methods"
              content="Add, remove, or update your payment methods and billing address."
            />
          </div>
        </div>

        {/* Standalone Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ marginBottom: '12px', fontFamily: 'Archivo', fontSize: '18px', color: '#6D7280' }}>
            Additional Options
          </h3>
          <AccordionOpen 
            type="contained" 
            size="default" 
            title="Download Data"
            content="Request a copy of all your data in a portable format."
          />
          <AccordionOpen 
            type="contained" 
            size="default" 
            title="Delete Account"
            content="Permanently delete your account and all associated data."
          />
        </div>
      </div>
    </div>
  ),
};

export const SettingsInterface: Story = {
  name: '⚙️ Settings Interface',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px', padding: '24px' }}>
      {/* Column 1 */}
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '20px', color: '#191E3C' }}>
          General Settings
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <AccordionOpen 
            type="top" 
            size="small" 
            title="Language & Region"
            content="Select your preferred language and regional settings."
          />
          <AccordionOpen 
            type="middle" 
            size="small" 
            title="Appearance"
            content="Choose theme, font size, and display preferences."
          />
          <AccordionOpen 
            type="middle" 
            size="small" 
            title="Time & Date"
            content="Set timezone, date format, and calendar preferences."
          />
          <AccordionOpen 
            type="bottom" 
            size="small" 
            title="Accessibility"
            content="Configure accessibility features and assistive options."
          />
        </div>
      </div>

      {/* Column 2 */}
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '20px', color: '#191E3C' }}>
          Privacy & Security
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <AccordionOpen 
            type="top" 
            size="small" 
            title="Data Collection"
            content="Control what data is collected and how it's used."
          />
          <AccordionOpen 
            type="middle" 
            size="small" 
            title="Sharing Permissions"
            content="Manage who can see your information and activity."
          />
          <AccordionOpen 
            type="bottom" 
            size="small" 
            title="Security Logs"
            content="View login history and security-related events."
          />
        </div>
      </div>
    </div>
  ),
};

export const ResponsiveDemo: Story = {
  name: '📱 Responsive Demo',
  render: () => (
    <div style={{ padding: '24px' }}>
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ marginBottom: '8px', fontFamily: 'Archivo', fontSize: '24px', color: '#191E3C' }}>
          Responsive Accordion Stacks
        </h2>
        <p style={{ color: '#6D7280', fontFamily: 'Roboto Flex', fontSize: '14px', marginBottom: '24px' }}>
          Try resizing your browser to see how the accordions adapt to different screen sizes.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <AccordionOpen 
            type="top" 
            size="default" 
            title="Mobile Optimized"
            content="On smaller screens, padding and font sizes automatically adjust for better readability and touch interaction."
          />
          <AccordionOpen 
            type="middle" 
            size="default" 
            title="Tablet Friendly"
            content="Medium-sized screens get optimized spacing while maintaining visual hierarchy and design consistency."
          />
          <AccordionOpen 
            type="bottom" 
            size="default" 
            title="Desktop Perfect"
            content="On larger screens, the full design specifications are applied for the best visual experience."
          />
        </div>
      </div>
    </div>
  ),
};

export const ColorVariations: Story = {
  name: '🎨 Title Color Variations',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px', maxWidth: '800px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '20px', color: '#191E3C' }}>
          Contained & Top Types (Dark Blue Titles)
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <AccordionOpen 
            type="contained" 
            size="default" 
            title="Contained type uses dark blue (#191E3C)"
            content="This title color is used for standalone accordions."
          />
          <AccordionOpen 
            type="top" 
            size="default" 
            title="Top type also uses dark blue (#191E3C)"
            content="This creates visual distinction for the first item in a stack."
          />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '20px', color: '#191E3C' }}>
          Middle & Bottom Types (Black Titles)
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <AccordionOpen 
            type="middle" 
            size="default" 
            title="Middle type uses black (#1C1C1C)"
            content="This provides visual continuity within the stack."
          />
          <AccordionOpen 
            type="bottom" 
            size="default" 
            title="Bottom type also uses black (#1C1C1C)"
            content="The darker color indicates connected items in the group."
          />
        </div>
      </div>
    </div>
  ),
};
