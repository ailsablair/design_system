import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Card } from './atoms/Card';
import { EchoMUIButton } from './atoms/EchoMUIButton';
import { Icon } from './foundations/Icons/Icon';
import { Tag } from './atoms/Tag';
import styles from './01-BrandPortal.module.css';

const meta: Meta = {
  title: 'Design System/Brand Portal',
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
  },
  tags: ['autodocs'],
};

/**
 * # Brand Portal
 *
 * The Brand Portal is a showcase of white-label design systems built with the Echo design system.
 * It displays:
 * - **Template Card**: The flagship white-label design system overview
 * - **Brand Cards**: Examples of existing brand implementations (Bruce Power ECHO, Canadian Nuclear Labs)
 * - **Empty-State Card**: Placeholder for future brand additions
 *
 * ## Design System Integration
 * This page uses:
 * - `Card` component for all card types
 * - `EchoMUIButton` for action buttons
 * - `Icon` component for visual indicators
 * - `Tag` component for metadata (year, status)
 * - **Typography Tokens**: 100% of text using `--text-styles-*` tokens
 * - **Spacing Tokens**: All padding/gap using `--spacing-sizing-*` tokens
 * - **Border Radius Tokens**: All border-radius using `--spacing-radius-*` tokens
 * - **Stroke Tokens**: All border widths using `--spacing-stroke-*` tokens
 * - **Color Tokens**: All colors using design system color variables
 *
 * ## Responsiveness
 * The layout is fully responsive:
 * - **Desktop (≥1400px)**: Fixed compact header (120px), horizontal flexbox grid (1 large + 3 small columns)
 * - **Tablet (768-1399px)**: Fixed header with adjusted padding, wrapping grid
 * - **Mobile (<768px)**: Responsive header, vertical stack layout
 *
 * ## Accessibility
 * - Proper semantic HTML (header, main, article elements)
 * - ARIA labels for icon elements
 * - Keyboard navigation support for all interactive elements
 * - WCAG AA color contrast compliance
 */

export default meta;
type Story = StoryObj;

// Plus icon SVG for empty-state cards
const PlusIconLarge = () => (
  <svg
    width="180"
    height="180"
    viewBox="0 0 180 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.emptyStateIcon}
  >
    <path d="M142.5 97.5H97.5V142.5H82.5V97.5H37.5V82.5H82.5V37.5H97.5V82.5H142.5V97.5Z" className={styles.emptyStateIconPath} />
  </svg>
);

export const BrandPortal: Story = {
  render: () => {
    return (
      <div className={styles.brandPortal}>
        {/* Fixed Navigation Header */}
        <header className={styles.brandPortalHeader}>
          <div className={styles.navContent}>
            {/* Logo + Title */}
            <div className={styles.logoHeader}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Faf2bc788bfa84b7e872eaeeb48723cea%2F058942b012f7461b83e345169733ca03?format=webp&width=800"
                alt="NPX Cube logo"
                className={styles.npxLogo}
              />
              <h1 className={styles.designSystemPortal}>Design System Portal</h1>
            </div>

            {/* CTA Button */}
            <div className={styles.ctaSection}>
              <EchoMUIButton
                variant="primary"
                size="large"
                leadingIcon={<Icon name="star" size="lg" opacity="full" />}
              >
                Create design system
              </EchoMUIButton>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className={styles.brandPortalContent}>
          <div className={styles.brandPortalGrid}>
            {/* Column 1: Large Template Card */}
            <div className={styles.columnLarge}>
              <Card
                size="large"
                type="simple"
                align="vertical"
                dropShadow={false}
                showButtonGroup={false}
                className={styles.templateCard}
              >
                <div className={styles.templateCardContent}>
                  <div className={styles.cardHeadings}>
                    <h2 className={styles.templateTitle}>Template</h2>
                    <p className={styles.templateSubtitle}>White-label design system</p>
                  </div>
                  <p className={styles.templateBody}>
                    {`A white-label design system is a flexible, reusable framework that enables rapid customization of digital products to align with various brand identities while maintaining design consistency and user experience quality across all design and development work.

All brand assets are customizable, including:
• Logo
• Brand colours
• Typeface(s)
• Icons`}
                  </p>
                  <EchoMUIButton
                    variant="tertiary"
                    size="large"
                    fullWidth
                    leadingIcon={<Icon name="visibility" size="lg" opacity="full" />}
                  >
                    View
                  </EchoMUIButton>
                </div>
              </Card>
            </div>

            {/* Column 2: Bruce Power ECHO Card */}
            <div className={styles.columnSmall}>
              <Card
                size="small"
                type="simple"
                align="vertical"
                dropShadow={false}
                showButtonGroup={false}
              >
                <div className={styles.brandCardContent}>
                  {/* Header */}
                  <div className={styles.brandCardHeader}>
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/c2e3b24a29f74b726925ca9c7086ae7eda8d30dd?width=434"
                      alt="ECHO logo"
                      className={styles.brandCardLogo}
                    />
                    <h3 className={styles.brandCardClient}>Bruce Power</h3>
                    <Tag
                      label="2025"
                      size="small"
                      variant="light-gray"
                      shape="pill"
                      leadingIcon={<Icon name="star" size="sm" opacity="full" />}
                    />
                  </div>

                  {/* Color Palette */}
                  <div className={styles.brandCardColors}>
                    <div className={styles.colorRow}>
                      <div className={styles.colorSwatch}>
                        <p className={styles.colorLabel}>Primary</p>
                        <div className={`${styles.colorBox} ${styles.colorBoxBrucePrimary}`} />
                      </div>
                      <div className={styles.colorSwatch}>
                        <p className={styles.colorLabel}>Secondary</p>
                        <div className={`${styles.colorBox} ${styles.colorBoxBruceSecondary}`} />
                      </div>
                    </div>
                    <div className={styles.colorRow}>
                      <div className={styles.colorSwatch}>
                        <p className={styles.colorLabel}>Tertiary</p>
                        <div className={`${styles.colorBox} ${styles.colorBoxBruceTertiary}`} />
                      </div>
                      <div className={styles.colorSwatch}>
                        <p className={styles.colorLabel}>Quaternary</p>
                        <div className={`${styles.colorBox} ${styles.colorBoxBruceQuaternary}`} />
                      </div>
                    </div>
                  </div>

                  {/* Typography Info */}
                  <div className={styles.brandCardTypography}>
                    <div className={styles.typographyRow}>
                      <p className={styles.typographyLabel}>Primary</p>
                      <p className={styles.typographyValue}>Archivo</p>
                    </div>
                    <div className={styles.typographyRow}>
                      <p className={styles.typographyLabel}>Secondary</p>
                      <p className={styles.typographyValue}>Roboto Flex</p>
                    </div>
                  </div>

                  {/* NPM Command */}
                  <div className={styles.brandCardNpm}>
                    <p className={styles.brandCardNpmText}>npm run tokens.echo</p>
                  </div>

                  {/* View Button */}
                  <div className={styles.brandCardButtonWrapper}>
                    <EchoMUIButton
                      variant="tertiary"
                      size="small"
                      fullWidth
                      leadingIcon={<Icon name="visibility" size="sm" opacity="full" />}
                    >
                      View
                    </EchoMUIButton>
                  </div>
                </div>
              </Card>
            </div>

            {/* Column 3: Canadian Nuclear Labs Card */}
            <div className={styles.columnSmall}>
              <Card
                size="small"
                type="simple"
                align="vertical"
                dropShadow={false}
                showButtonGroup={false}
              >
                <div className={styles.brandCardContent}>
                  {/* Header */}
                  <div className={styles.brandCardHeader}>
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/222aa5bc80e2376f48253def222dcec8ca1d1db2?width=434"
                      alt="TBD logo"
                      className={`${styles.brandCardLogo} ${styles.brandCardLogoWithBorder}`}
                    />
                    <h3 className={styles.brandCardClient}>Canadian Nuclear Labs</h3>
                    <Tag
                      label="2026"
                      size="small"
                      variant="light-gray"
                      shape="pill"
                      leadingIcon={<Icon name="star" size="sm" opacity="full" />}
                    />
                  </div>

                  {/* Color Palette */}
                  <div className={styles.brandCardColors}>
                    <div className={styles.colorRow}>
                      <div className={styles.colorSwatch}>
                        <p className={styles.colorLabel}>Primary</p>
                        <div className={`${styles.colorBox} ${styles.colorBoxCNLPrimary}`} />
                      </div>
                      <div className={styles.colorSwatch}>
                        <p className={styles.colorLabel}>Secondary</p>
                        <div className={`${styles.colorBox} ${styles.colorBoxCNLSecondary}`} />
                      </div>
                    </div>
                    <div className={styles.colorRow}>
                      <div className={styles.colorSwatch}>
                        <p className={styles.colorLabel}>Tertiary</p>
                        <div className={`${styles.colorBox} ${styles.colorBoxCNLTertiary}`} />
                      </div>
                      <div className={styles.colorSwatch}>
                        <p className={styles.colorLabel}>Quaternary</p>
                        <div className={`${styles.colorBox} ${styles.colorBoxCNLQuaternary}`} />
                      </div>
                    </div>
                  </div>

                  {/* Typography Info */}
                  <div className={styles.brandCardTypography}>
                    <div className={styles.typographyRow}>
                      <p className={styles.typographyLabel}>Primary</p>
                      <p className={styles.typographyValue}>Ginger Pro</p>
                    </div>
                    <div className={styles.typographyRow}>
                      <p className={styles.typographyLabel}>Secondary</p>
                      <p className={styles.typographyValue}>Calibri</p>
                    </div>
                  </div>

                  {/* NPM Command */}
                  <div className={styles.brandCardNpm}>
                    <p className={styles.brandCardNpmText}>npm run tokens.&lt;tbd&gt;</p>
                  </div>

                  {/* View Button */}
                  <div className={styles.brandCardButtonWrapper}>
                    <EchoMUIButton
                      variant="tertiary"
                      size="small"
                      fullWidth
                      leadingIcon={<Icon name="visibility" size="sm" opacity="full" />}
                    >
                      View
                    </EchoMUIButton>
                  </div>
                </div>
              </Card>
            </div>

            {/* Column 4: Empty-State Card */}
            <div className={styles.columnSmall}>
              <Card
                size="small"
                type="empty-state"
                align="vertical"
                dropShadow={false}
                showButtonGroup={false}
              >
                <div className={styles.emptyStateContent}>
                  <PlusIconLarge />
                  <button
                    className={styles.emptyStateLink}
                    aria-label="Add new brand - Opens form to create a new design system brand"
                  >
                    Add new brand
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    );
  },
};
