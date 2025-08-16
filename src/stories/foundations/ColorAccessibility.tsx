import React from 'react';
import './tokens.css';

// Helper function to convert hex to RGB
const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

// Calculate relative luminance
const relativeLuminance = (r: number, g: number, b: number): number => {
  const sRGB = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
};

// Calculate contrast ratio between two colors
const contrastRatio = (color1: string, color2: string): number => {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) return 0;
  
  const lum1 = relativeLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = relativeLuminance(rgb2.r, rgb2.g, rgb2.b);
  
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  
  return (lighter + 0.05) / (darker + 0.05);
};

// Get WCAG compliance level
const getWCAGLevel = (ratio: number): { aa: boolean; aaa: boolean; largeAA: boolean; largeAAA: boolean } => {
  return {
    aa: ratio >= 4.5,           // Normal text AA
    aaa: ratio >= 7,            // Normal text AAA
    largeAA: ratio >= 3,        // Large text AA
    largeAAA: ratio >= 4.5      // Large text AAA
  };
};

// Color definitions from your design system
export const colorPalette = {
  // Primary Colors
  'Primary Blue Dark': '#191E3C',
  'Primary Blue': '#2F42BD',
  'Sky Blue': '#0BA7EA',
  
  // Base Colors
  'White': '#FFFFFF',
  'Black': '#1C1C1C',
  'Pure Black': '#000000',
  
  // Neutral Grays
  'Gray 50': '#F9FAFB',
  'Gray 100': '#F3F4F6',
  'Gray 200': '#E5E7EB',
  'Gray 300': '#D2D5DA',
  'Gray 400': '#9CA3AF',
  'Gray 500': '#6B7280',
  'Gray 600': '#4B5563',
  'Gray 700': '#374151',
  'Gray 800': '#1F2937',
  'Gray 900': '#111827',
  
  // Yellow
  'Yellow 500': '#F9C846',
  'Yellow 600': '#CA8A04',
  'Yellow 700': '#A16207',
  
  // Seafoam Green
  'Seafoam 500': '#8BBF9F',
  'Seafoam 600': '#73A78D',
  'Seafoam 700': '#5B8F7B',
  
  // Semantic Colors
  'Success': '#8BBF9F',
  'Warning': '#F59E0B',
  'Error': '#EF4444',
  'Info': '#3B82F6',
  
  // Status Colors
  'Status Red': '#CE2031',
  'Status Orange': '#EE5622',
  'Status Green': '#70CC67',
  'Status Purple': '#5D2C82',
};

export interface ColorCombination {
  background: string;
  foreground: string;
  backgroundName: string;
  foregroundName: string;
  ratio: number;
  wcag: ReturnType<typeof getWCAGLevel>;
}

export interface ColorSwatchProps {
  name: string;
  hex: string;
  className?: string;
}

export const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, hex, className = '' }) => (
  <div className={`color-swatch ${className}`}>
    <div 
      className="color-preview"
      style={{ 
        backgroundColor: hex,
        width: '40px',
        height: '40px',
        borderRadius: 'var(--spacing-radius-4px)',
        border: '1px solid var(--neutral-gray-gray-200)',
        marginBottom: 'var(--spacing-sizing-8px)'
      }}
    />
    <div className="color-info">
      <div className="color-name" style={{ 
        fontSize: 'var(--type-size-sm)', 
        fontWeight: 'var(--type-weight-medium)',
        color: 'var(--neutral-gray-gray-900)'
      }}>
        {name}
      </div>
      <div className="color-hex" style={{ 
        fontSize: 'var(--type-size-xs)', 
        color: 'var(--neutral-gray-gray-500)',
        fontFamily: 'monospace'
      }}>
        {hex.toUpperCase()}
      </div>
    </div>
  </div>
);

export interface ContrastCardProps {
  combination: ColorCombination;
}

export const ContrastCard: React.FC<ContrastCardProps> = ({ combination }) => {
  const { background, foreground, backgroundName, foregroundName, ratio, wcag } = combination;
  
  return (
    <div style={{
      border: '1px solid var(--neutral-gray-gray-200)',
      borderRadius: 'var(--spacing-radius-8px)',
      overflow: 'hidden',
      marginBottom: 'var(--spacing-sizing-16px)'
    }}>
      {/* Color Preview */}
      <div 
        style={{
          backgroundColor: background,
          color: foreground,
          padding: 'var(--spacing-sizing-24px)',
          minHeight: '120px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <h3 style={{ 
          margin: '0 0 var(--spacing-sizing-8px) 0',
          fontSize: 'var(--type-size-lg)',
          fontWeight: 'var(--type-weight-semibold)'
        }}>
          Sample Text
        </h3>
        <p style={{ 
          margin: 0,
          fontSize: 'var(--type-size-base)'
        }}>
          Regular text example for testing readability
        </p>
        <p style={{ 
          margin: 'var(--spacing-sizing-8px) 0 0 0',
          fontSize: 'var(--type-size-xl)',
          fontWeight: 'var(--type-weight-bold)'
        }}>
          Large Text
        </p>
      </div>
      
      {/* Contrast Information */}
      <div style={{
        padding: 'var(--spacing-sizing-16px)',
        backgroundColor: 'var(--base-white)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 'var(--spacing-sizing-12px)'
        }}>
          <div>
            <div style={{ fontSize: 'var(--type-size-sm)', fontWeight: 'var(--type-weight-medium)' }}>
              {foregroundName} on {backgroundName}
            </div>
            <div style={{ 
              fontSize: 'var(--type-size-xs)', 
              color: 'var(--neutral-gray-gray-500)',
              fontFamily: 'monospace'
            }}>
              {foreground} on {background}
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ 
              fontSize: 'var(--type-size-lg)', 
              fontWeight: 'var(--type-weight-bold)',
              color: ratio >= 4.5 ? 'var(--semantic-success)' : 'var(--semantic-error)'
            }}>
              {ratio.toFixed(1)}:1
            </div>
          </div>
        </div>
        
        {/* WCAG Compliance Badges */}
        <div style={{ display: 'flex', gap: 'var(--spacing-sizing-8px)', flexWrap: 'wrap' }}>
          <span style={{
            padding: '2px 8px',
            borderRadius: 'var(--spacing-radius-4px)',
            fontSize: 'var(--type-size-xs)',
            fontWeight: 'var(--type-weight-medium)',
            backgroundColor: wcag.aa ? 'var(--semantic-success)' : 'var(--semantic-error)',
            color: 'white'
          }}>
            AA {wcag.aa ? '✓' : '✗'}
          </span>
          <span style={{
            padding: '2px 8px',
            borderRadius: 'var(--spacing-radius-4px)',
            fontSize: 'var(--type-size-xs)',
            fontWeight: 'var(--type-weight-medium)',
            backgroundColor: wcag.aaa ? 'var(--semantic-success)' : 'var(--semantic-error)',
            color: 'white'
          }}>
            AAA {wcag.aaa ? '✓' : '✗'}
          </span>
          <span style={{
            padding: '2px 8px',
            borderRadius: 'var(--spacing-radius-4px)',
            fontSize: 'var(--type-size-xs)',
            fontWeight: 'var(--type-weight-medium)',
            backgroundColor: wcag.largeAA ? 'var(--semantic-success)' : 'var(--semantic-error)',
            color: 'white'
          }}>
            Large AA {wcag.largeAA ? '✓' : '✗'}
          </span>
          <span style={{
            padding: '2px 8px',
            borderRadius: 'var(--spacing-radius-4px)',
            fontSize: 'var(--type-size-xs)',
            fontWeight: 'var(--type-weight-medium)',
            backgroundColor: wcag.largeAAA ? 'var(--semantic-success)' : 'var(--semantic-error)',
            color: 'white'
          }}>
            Large AAA {wcag.largeAAA ? '✓' : '✗'}
          </span>
        </div>
      </div>
    </div>
  );
};

// Generate common color combinations
export const generateColorCombinations = (): ColorCombination[] => {
  const combinations: ColorCombination[] = [];
  const backgrounds = ['White', 'Gray 50', 'Gray 100', 'Gray 800', 'Gray 900', 'Primary Blue Dark', 'Black'];
  const foregrounds = ['Black', 'Gray 900', 'Gray 700', 'Gray 600', 'Gray 500', 'White', 'Primary Blue', 'Sky Blue', 'Success', 'Warning', 'Error'];
  
  backgrounds.forEach(bgName => {
    foregrounds.forEach(fgName => {
      const bgColor = colorPalette[bgName as keyof typeof colorPalette];
      const fgColor = colorPalette[fgName as keyof typeof colorPalette];
      
      if (bgColor && fgColor && bgColor !== fgColor) {
        const ratio = contrastRatio(bgColor, fgColor);
        const wcag = getWCAGLevel(ratio);
        
        combinations.push({
          background: bgColor,
          foreground: fgColor,
          backgroundName: bgName,
          foregroundName: fgName,
          ratio,
          wcag
        });
      }
    });
  });
  
  return combinations.sort((a, b) => b.ratio - a.ratio);
};

export { contrastRatio, getWCAGLevel };
