/**
 * TypeScript interfaces for BrandPortal components
 * Defines all props and data structures for the Brand Portal page and its sub-components
 */

/**
 * Color palette configuration for a brand
 */
export interface BrandColors {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
}

/**
 * Typography configuration for a brand
 */
export interface BrandTypography {
  primary: string;
  secondary: string;
}

/**
 * Complete brand card data
 */
export interface BrandCardData {
  logoSrc: string;
  logoAltText: string;
  clientName: string;
  year: string;
  colors: BrandColors;
  typography: BrandTypography;
  npmCommand: string;
  showLogoBorder?: boolean;
  onViewClick?: () => void;
}

/**
 * Props for the PortalHeader component
 */
export interface PortalHeaderProps {
  logoSrc: string;
  logoAltText?: string;
  title: string;
  ctaText: string;
  onCtaClick?: () => void;
}

/**
 * Props for the BrandCard component
 */
export interface BrandCardProps extends BrandCardData {}

/**
 * Props for the TemplateCard component
 */
export interface TemplateCardProps {
  title: string;
  subtitle: string;
  bodyText: string;
  onViewClick?: () => void;
}

/**
 * Props for the AddSystemCard component
 */
export interface AddSystemCardProps {
  onAddClick?: () => void;
}

/**
 * Props for the BrandPortal main component
 */
export interface BrandPortalProps {
  brands?: BrandCardData[];
  templateCard?: {
    title: string;
    subtitle: string;
    bodyText: string;
    onViewClick?: () => void;
  };
  onAddSystemClick?: () => void;
  onCreateDesignSystemClick?: () => void;
}
