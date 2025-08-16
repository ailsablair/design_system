/**
 * Design Token Audit Script
 * 
 * This script helps audit and compare Figma design tokens with our tokens.css file
 * Run with: node scripts/audit-design-tokens.js
 */

const fs = require('fs');
const path = require('path');

// Read tokens.css file
const tokensPath = path.join(__dirname, '../src/stories/foundations/tokens.css');
const tokensContent = fs.readFileSync(tokensPath, 'utf8');

// Extract CSS variables from tokens.css
function extractCSSVariables(content) {
  const lines = content.split('\n');
  const variables = [];
  
  lines.forEach((line, index) => {
    const match = line.match(/^\s*--([\w-]+):\s*(.+);/);
    if (match) {
      const [, name, value] = match;
      variables.push({
        name: `--${name}`,
        value: value.trim(),
        line: index + 1,
        category: getCategoryFromName(name)
      });
    }
  });
  
  return variables;
}

// Categorize tokens based on naming convention
function getCategoryFromName(name) {
  if (name.includes('spacing') || name.includes('radius') || name.includes('stroke')) {
    return 'sizing';
  }
  if (name.includes('type') || name.includes('typeface') || name.includes('archivo') || 
      name.includes('roboto') || name.includes('line-height') || name.includes('letter-spacing')) {
    return 'typography';
  }
  if (name.includes('primary') || name.includes('base') || name.includes('neutral') ||
      name.includes('secondary') || name.includes('status') || name.includes('semantic')) {
    return 'color';
  }
  if (name.includes('shadow') || name.includes('z-index') || name.includes('transition') ||
      name.includes('icon')) {
    return 'other';
  }
  return 'unknown';
}

// Main audit function
function auditTokens() {
  const currentTokens = extractCSSVariables(tokensContent);
  
  console.log('🔍 DESIGN TOKEN AUDIT REPORT');
  console.log('=====================================\n');
  
  console.log(`📊 Current Statistics:`);
  console.log(`- Total CSS Variables: ${currentTokens.length}`);
  console.log(`- Expected from Figma: 204`);
  console.log(`- Difference: ${currentTokens.length - 204} (${currentTokens.length > 204 ? 'more' : 'fewer'})\n`);
  
  // Group by category
  const byCategory = currentTokens.reduce((acc, token) => {
    if (!acc[token.category]) acc[token.category] = [];
    acc[token.category].push(token);
    return acc;
  }, {});
  
  console.log('📋 Tokens by Category:');
  Object.entries(byCategory).forEach(([category, tokens]) => {
    console.log(`- ${category.toUpperCase()}: ${tokens.length} tokens`);
  });
  console.log('');
  
  // Detailed breakdown
  console.log('🎨 COLOR TOKENS (' + (byCategory.color?.length || 0) + '):');
  if (byCategory.color) {
    const colorGroups = byCategory.color.reduce((acc, token) => {
      const group = token.name.split('-')[1] || 'other';
      if (!acc[group]) acc[group] = [];
      acc[group].push(token.name);
      return acc;
    }, {});
    
    Object.entries(colorGroups).forEach(([group, tokens]) => {
      console.log(`  ${group}: ${tokens.length} tokens`);
    });
  }
  console.log('');
  
  console.log('📐 SIZING TOKENS (' + (byCategory.sizing?.length || 0) + '):');
  if (byCategory.sizing) {
    const sizingGroups = byCategory.sizing.reduce((acc, token) => {
      const parts = token.name.split('-');
      const group = parts[1] || 'other';
      if (!acc[group]) acc[group] = [];
      acc[group].push(token.name);
      return acc;
    }, {});
    
    Object.entries(sizingGroups).forEach(([group, tokens]) => {
      console.log(`  ${group}: ${tokens.length} tokens`);
    });
  }
  console.log('');
  
  console.log('✍️ TYPOGRAPHY TOKENS (' + (byCategory.typography?.length || 0) + '):');
  if (byCategory.typography) {
    const typeGroups = byCategory.typography.reduce((acc, token) => {
      if (token.name.includes('typeface')) return { ...acc, typeface: [...(acc.typeface || []), token.name] };
      if (token.name.includes('size')) return { ...acc, size: [...(acc.size || []), token.name] };
      if (token.name.includes('weight')) return { ...acc, weight: [...(acc.weight || []), token.name] };
      if (token.name.includes('line-height')) return { ...acc, lineHeight: [...(acc.lineHeight || []), token.name] };
      if (token.name.includes('letter-spacing')) return { ...acc, letterSpacing: [...(acc.letterSpacing || []), token.name] };
      return { ...acc, other: [...(acc.other || []), token.name] };
    }, {});
    
    Object.entries(typeGroups).forEach(([group, tokens]) => {
      console.log(`  ${group}: ${tokens.length} tokens`);
    });
  }
  console.log('');
  
  // Output for comparison with Figma
  console.log('📄 TOKEN EXPORT FOR FIGMA COMPARISON:');
  console.log('=====================================');
  console.log('Copy this list to compare with your Figma variables:\n');
  
  currentTokens.forEach(token => {
    console.log(`${token.name}: ${token.value}`);
  });
  
  return currentTokens;
}

// Export JSON for programmatic use
function exportTokensJSON() {
  const currentTokens = extractCSSVariables(tokensContent);
  const outputPath = path.join(__dirname, '../design-tokens-audit.json');
  
  fs.writeFileSync(outputPath, JSON.stringify({
    meta: {
      totalTokens: currentTokens.length,
      expectedFromFigma: 204,
      auditDate: new Date().toISOString()
    },
    tokens: currentTokens
  }, null, 2));
  
  console.log(`\n📝 Detailed audit saved to: ${outputPath}`);
}

// Run audit
if (require.main === module) {
  auditTokens();
  exportTokensJSON();
}

module.exports = { auditTokens, extractCSSVariables };
