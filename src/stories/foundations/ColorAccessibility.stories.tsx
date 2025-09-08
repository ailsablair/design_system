import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { 
  ColorSwatch, 
  ContrastCard, 
  colorPalette, 
  generateColorCombinations,
  contrastRatio,
  getWCAGLevel,
  type ColorCombination 
} from './ColorAccessibility';

const meta: Meta = {
  title: 'Foundations/Color Accessibility',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Color accessibility guide showing WCAG 2.1 AA compliance for color combinations in the design system.

**WCAG 2.1 Standards:**
- **AA Normal Text**: 4.5:1 contrast ratio minimum
- **AA Large Text**: 3:1 contrast ratio minimum  
- **AAA Normal Text**: 7:1 contrast ratio minimum
- **AAA Large Text**: 4.5:1 contrast ratio minimum

**Large Text Definition**: 18pt (24px) regular or 14pt (18.5px) bold text.

Use this guide to ensure your color combinations meet accessibility standards for all users.
        `
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Helper function to filter combinations
const filterCombinations = (combinations: ColorCombination[], filter: 'all' | 'aa' | 'aaa' | 'fail') => {
  switch (filter) {
    case 'aa':
      return combinations.filter(c => c.wcag.aa);
    case 'aaa':
      return combinations.filter(c => c.wcag.aaa);
    case 'fail':
      return combinations.filter(c => !c.wcag.aa);
    default:
      return combinations;
  }
};

export const ColorPalette: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
      gap: 'var(--spacing-sizing-16px)',
      padding: 'var(--spacing-sizing-16px)',
      fontFamily: 'var(--type-typeface-roboto-flex)'
    }}>
      {Object.entries(colorPalette).map(([name, hex]) => (
        <ColorSwatch key={name} name={name} hex={hex} />
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete color palette from the design system with hex values.'
      }
    }
  }
};

export const HighContrastCombinations: Story = {
  render: () => {
    const combinations = generateColorCombinations();
    const highContrast = filterCombinations(combinations, 'aa').slice(0, 12);
    
    return (
      <div style={{
        fontFamily: 'var(--type-typeface-roboto-flex)',
        padding: 'var(--spacing-sizing-16px)'
      }}>
        <h2 style={{
          marginBottom: 'var(--spacing-sizing-24px)',
          color: 'var(--neutral-gray-gray-900)'
        }}>
          WCAG AA Compliant Combinations (4.5:1+)
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-sizing-16px)'
        }}>
          {highContrast.map((combination, index) => (
            <ContrastCard key={index} combination={combination} />
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Color combinations that meet WCAG 2.1 AA standards (4.5:1 contrast ratio or higher). These are safe to use for normal text.'
      }
    }
  }
};

export const FailingCombinations: Story = {
  render: () => {
    const combinations = generateColorCombinations();
    const failing = filterCombinations(combinations, 'fail').slice(0, 12);
    
    return (
      <div style={{
        fontFamily: 'var(--type-typeface-roboto-flex)',
        padding: 'var(--spacing-sizing-16px)'
      }}>
        <h2 style={{
          marginBottom: 'var(--spacing-sizing-24px)',
          color: 'var(--status-red)'
        }}>
          ⚠️ Non-Compliant Combinations (Below 4.5:1)
        </h2>
        <p style={{
          marginBottom: 'var(--spacing-sizing-24px)',
          padding: 'var(--spacing-sizing-16px)',
          backgroundColor: 'var(--status-red-100)',
          borderRadius: 'var(--spacing-radius-6px)',
          color: 'var(--status-red-700)',
          border: '1px solid var(--status-red-200)'
        }}>
          <strong>⚠️ Warning:</strong> These color combinations do not meet WCAG 2.1 AA standards and should be avoided for text content. They may be acceptable for decorative elements or large text in some cases.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-sizing-16px)'
        }}>
          {failing.map((combination, index) => (
            <ContrastCard key={index} combination={combination} />
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Color combinations that fail WCAG 2.1 AA standards. Avoid these combinations for text content. Some may be acceptable for large text or decorative elements.'
      }
    }
  }
};

export const AAACombinations: Story = {
  render: () => {
    const combinations = generateColorCombinations();
    const aaa = filterCombinations(combinations, 'aaa').slice(0, 8);
    
    return (
      <div style={{
        fontFamily: 'var(--type-typeface-roboto-flex)',
        padding: 'var(--spacing-sizing-16px)'
      }}>
        <h2 style={{
          marginBottom: 'var(--spacing-sizing-24px)',
          color: 'var(--semantic-success)'
        }}>
          ✨ WCAG AAA Excellence (7:1+)
        </h2>
        <p style={{
          marginBottom: 'var(--spacing-sizing-24px)',
          padding: 'var(--spacing-sizing-16px)',
          backgroundColor: 'var(--semantic-success-light)',
          borderRadius: 'var(--spacing-radius-6px)',
          color: 'var(--primary-seafoam-700)',
          border: '1px solid var(--primary-seafoam-200)'
        }}>
          <strong>✨ Excellent:</strong> These combinations exceed WCAG AAA standards, providing superior accessibility and readability for all users, including those with visual impairments.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-sizing-16px)'
        }}>
          {aaa.map((combination, index) => (
            <ContrastCard key={index} combination={combination} />
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Premium color combinations that exceed WCAG AAA standards (7:1 contrast ratio). These provide superior accessibility and are recommended for critical text content.'
      }
    }
  }
};

export const RecommendedCombinations: Story = {
  render: () => {
    // Curated list of the most practical, accessible combinations from the design system
    const recommendedCombos = [
      { bg: '#FFFFFF', fg: '#1C1C1C', bgName: 'White', fgName: 'Black' },
      { bg: '#FFFFFF', fg: '#191E3C', bgName: 'White', fgName: 'Primary Blue Dark' },
      { bg: '#FFFFFF', fg: '#374151', bgName: 'White', fgName: 'Gray 700' },
      { bg: '#F9FAFB', fg: '#1C1C1C', bgName: 'Gray 50', fgName: 'Black' },
      { bg: '#F9FAFB', fg: '#191E3C', bgName: 'Gray 50', fgName: 'Primary Blue Dark' },
      { bg: '#191E3C', fg: '#FFFFFF', bgName: 'Primary Blue Dark', fgName: 'White' },
      { bg: '#1F2937', fg: '#FFFFFF', bgName: 'Gray 800', fgName: 'White' },
      { bg: '#111827', fg: '#FFFFFF', bgName: 'Gray 900', fgName: 'White' }
    ];

    const combinations: ColorCombination[] = recommendedCombos.map(combo => {
      const ratio = contrastRatio(combo.bg, combo.fg);
      const wcag = getWCAGLevel(ratio);
      return {
        background: combo.bg,
        foreground: combo.fg,
        backgroundName: combo.bgName,
        foregroundName: combo.fgName,
        ratio,
        wcag
      };
    });
    
    return (
      <div style={{
        fontFamily: 'var(--type-typeface-roboto-flex)',
        padding: 'var(--spacing-sizing-16px)'
      }}>
        <h2 style={{
          marginBottom: 'var(--spacing-sizing-24px)',
          color: 'var(--neutral-gray-gray-900)'
        }}>
          🎯 Recommended Combinations
        </h2>
        <p style={{
          marginBottom: 'var(--spacing-sizing-24px)',
          padding: 'var(--spacing-sizing-16px)',
          backgroundColor: 'var(--primary-sky-blue-50)',
          borderRadius: 'var(--spacing-radius-6px)',
          color: 'var(--primary-sky-blue-700)',
          border: '1px solid var(--primary-sky-blue-200)'
        }}>
          <strong>🎯 Recommended:</strong> These are the most practical and accessible color combinations from our design system. Use these for primary text content, headers, and interactive elements.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-sizing-16px)'
        }}>
          {combinations.map((combination, index) => (
            <ContrastCard key={index} combination={combination} />
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Curated selection of the most practical and accessible color combinations from the design system. These are your go-to choices for common use cases.'
      }
    }
  }
};

export const ContrastChecker: Story = {
  render: () => {
    const [bgColor, setBgColor] = React.useState('#FFFFFF');
    const [fgColor, setFgColor] = React.useState('#1C1C1C');
    
    const ratio = contrastRatio(bgColor, fgColor);
    const wcag = getWCAGLevel(ratio);
    
    const combination: ColorCombination = {
      background: bgColor,
      foreground: fgColor,
      backgroundName: 'Custom Background',
      foregroundName: 'Custom Foreground',
      ratio,
      wcag
    };
    
    return (
      <div style={{
        fontFamily: 'var(--type-typeface-roboto-flex)',
        padding: 'var(--spacing-sizing-16px)'
      }}>
        <h2 style={{
          marginBottom: 'var(--spacing-sizing-24px)',
          color: 'var(--neutral-gray-gray-900)'
        }}>
          🧪 Contrast Checker Tool
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--spacing-sizing-16px)',
          marginBottom: 'var(--spacing-sizing-24px)',
          padding: 'var(--spacing-sizing-16px)',
          backgroundColor: 'var(--neutral-gray-gray-50)',
          borderRadius: 'var(--spacing-radius-6px)'
        }}>
          <div>
            <label style={{
              display: 'block',
              marginBottom: 'var(--spacing-sizing-8px)',
              fontSize: 'var(--type-size-sm)',
              fontWeight: 'var(--type-weight-medium)'
            }}>
              Background Color:
            </label>
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              style={{
                width: '100%',
                height: '40px',
                border: 'none',
                borderRadius: 'var(--spacing-radius-4px)',
                cursor: 'pointer'
              }}
            />
            <input
              type="text"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              style={{
                width: '100%',
                marginTop: 'var(--spacing-sizing-8px)',
                padding: 'var(--spacing-sizing-8px)',
                border: '1px solid var(--neutral-gray-gray-300)',
                borderRadius: 'var(--spacing-radius-4px)',
                fontFamily: 'monospace',
                fontSize: 'var(--type-size-sm)'
              }}
            />
          </div>
          
          <div>
            <label style={{
              display: 'block',
              marginBottom: 'var(--spacing-sizing-8px)',
              fontSize: 'var(--type-size-sm)',
              fontWeight: 'var(--type-weight-medium)'
            }}>
              Foreground Color:
            </label>
            <input
              type="color"
              value={fgColor}
              onChange={(e) => setFgColor(e.target.value)}
              style={{
                width: '100%',
                height: '40px',
                border: 'none',
                borderRadius: 'var(--spacing-radius-4px)',
                cursor: 'pointer'
              }}
            />
            <input
              type="text"
              value={fgColor}
              onChange={(e) => setFgColor(e.target.value)}
              style={{
                width: '100%',
                marginTop: 'var(--spacing-sizing-8px)',
                padding: 'var(--spacing-sizing-8px)',
                border: '1px solid var(--neutral-gray-gray-300)',
                borderRadius: 'var(--spacing-radius-4px)',
                fontFamily: 'monospace',
                fontSize: 'var(--type-size-sm)'
              }}
            />
          </div>
        </div>
        
        <ContrastCard combination={combination} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive tool to test contrast ratios between any two colors. Adjust the colors using the inputs to see real-time WCAG compliance results.'
      }
    }
  }
};
