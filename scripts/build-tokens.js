const fs = require('fs');
const path = require('path');

const brandName = process.argv[2] || 'echo';
const globalTokensPath = path.join(__dirname, '../design-tokens/global.json');
const brandTokensPath = path.join(__dirname, `../design-tokens/brands/${brandName}.json`);
const outputPath = path.join(__dirname, '../src/stories/foundations/tokens.css');

// Ensure directories exist
const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function loadJSON(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`Error: File not found at ${filePath}`);
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

const globalTokens = loadJSON(globalTokensPath);
const brandTokens = loadJSON(brandTokensPath);

/**
 * Recursively flattens the token object into CSS variable strings
 */
function generateCSSVars(obj, prefix = '') {
  let vars = [];
  for (const key in obj) {
    const value = obj[key];
    const currentPrefix = prefix ? `${prefix}-${key}` : key;

    if (value && typeof value === 'object' && '$value' in value) {
      // It's a token
      vars.push(`  --${currentPrefix}: ${value.$value};`);
    } else if (value && typeof value === 'object') {
      // It's a category, recurse
      vars.push(...generateCSSVars(value, currentPrefix));
    }
  }
  return vars;
}

const globalVars = generateCSSVars(globalTokens);
const brandVars = generateCSSVars(brandTokens);

// Legacy/Compatibility Mapping
// This ensures that existing components using --primary-blue-* etc. still work
function generateAliases(brand, brandName) {
  const aliases = [];
  
  if (brandName === 'alpha') {
    // Map Alpha's Purple to the primary-blue slots
    const primary = brand.primary;
    if (primary) {
      aliases.push(`  /* Alpha Brand Aliases (Purple -> Primary Blue slots) */`);
      aliases.push(`  --primary-blue-blue: var(--brand-primary-main);`);
      if (primary['50']) aliases.push(`  --primary-blue-blue-50: var(--brand-primary-50);`);
      if (primary['100']) aliases.push(`  --primary-blue-blue-100: var(--brand-primary-100);`);
      if (primary['200']) aliases.push(`  --primary-blue-blue-200: var(--brand-primary-200);`);
      if (primary['300']) aliases.push(`  --primary-blue-blue-300: var(--brand-primary-300);`);
      if (primary['400']) aliases.push(`  --primary-blue-blue-400: var(--brand-primary-400);`);
      if (primary['600']) aliases.push(`  --primary-blue-blue-600: var(--brand-primary-600);`);
      if (primary['700']) aliases.push(`  --primary-blue-blue-700: var(--brand-primary-700);`);
      if (primary['800']) aliases.push(`  --primary-blue-blue-800: var(--brand-primary-800);`);
      if (primary['900']) aliases.push(`  --primary-blue-blue-900: var(--brand-primary-900);`);
      aliases.push(`  --primary-blue-dark-blue: var(--brand-primary-700);`);
    }

    // Map Alpha's Orange to secondary/semantic slots
    const secondary = brand.secondary;
    if (secondary) {
      aliases.push(`\n  /* Alpha Brand Aliases (Orange -> Secondary slots) */`);
      aliases.push(`  --status-orange-alt: var(--brand-secondary-main);`);
      aliases.push(`  --status-orange-light: var(--brand-secondary-100);`);
      aliases.push(`  --status-dark-orange: var(--brand-secondary-700);`);
    }

    // Typeface Aliases
    aliases.push(`\n  /* Alpha Typeface Aliases */`);
    aliases.push(`  --type-typeface-archivo: var(--brand-typeface-heading), sans-serif;`);
    aliases.push(`  --type-typeface-roboto-flex: var(--brand-typeface-body), sans-serif;`);
  } else if (brandName === 'echo') {
    // Echo specific aliases for backward compatibility if names changed slightly
    const blue = brand.primary.blue;
    aliases.push(`  /* Echo Brand Aliases */`);
    aliases.push(`  --primary-blue-blue: var(--brand-primary-blue-main);`);
    aliases.push(`  --primary-blue-dark-blue: var(--brand-primary-blue-dark);`);
    aliases.push(`  --primary-blue-blue-50: var(--brand-primary-blue-50);`);
    aliases.push(`  --primary-blue-blue-100: var(--brand-primary-blue-100);`);
    aliases.push(`  --primary-blue-blue-200: var(--brand-primary-blue-200);`);
    aliases.push(`  --primary-blue-blue-300: var(--brand-primary-blue-300);`);
    aliases.push(`  --primary-blue-blue-400: var(--brand-primary-blue-400);`);
    aliases.push(`  --primary-blue-blue-600: var(--brand-primary-blue-600);`);
    aliases.push(`  --primary-blue-blue-700: var(--brand-primary-blue-700);`);
    aliases.push(`  --primary-blue-blue-800: var(--brand-primary-blue-800);`);
    aliases.push(`  --primary-blue-blue-900: var(--brand-primary-blue-900);`);

    const sky = brand.primary['sky-blue'];
    aliases.push(`  --primary-sky-blue-sky-blue: var(--brand-primary-sky-blue-main);`);
    aliases.push(`  --primary-sky-blue-dark-sky-blue: var(--brand-primary-sky-blue-dark);`);
    for (let i of [25, 50, 75, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 925, 950, 975]) {
      aliases.push(`  --primary-sky-blue-${i}: var(--brand-primary-sky-blue-${i});`);
    }

    const yellow = brand.primary.yellow;
    aliases.push(`  --primary-yellow-yellow: var(--brand-primary-yellow-main);`);
    aliases.push(`  --primary-yellow-dark-yellow: var(--brand-primary-yellow-dark);`);
    for (let i of [25, 50, 75, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 925, 950, 975]) {
      aliases.push(`  --primary-yellow-yellow-${i}: var(--brand-primary-yellow-${i});`);
    }

    const seafoam = brand.primary.seafoam;
    aliases.push(`  --primary-seafoam-seafoam: var(--brand-primary-seafoam-main);`);
    aliases.push(`  --primary-seafoam-dark-seafoam: var(--brand-primary-seafoam-dark);`);
    for (let i of [25, 50, 75, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 925, 950, 975]) {
      aliases.push(`  --primary-seafoam-seafoam-${i}: var(--brand-primary-seafoam-${i});`);
    }

    aliases.push(`\n  /* Echo Typeface Aliases */`);
    aliases.push(`  --type-typeface-archivo: var(--brand-typeface-heading), sans-serif;`);
    aliases.push(`  --type-typeface-roboto-flex: var(--brand-typeface-body), sans-serif;`);
  }

  // Common Aliases
  aliases.push(`\n  /* Common Foundation Aliases */`);
  aliases.push(`  --base-white: var(--base-white);`);
  aliases.push(`  --base-black: var(--base-black);`);
  for (let i of [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]) {
    aliases.push(`  --neutral-gray-gray-${i}: var(--neutral-gray-${i});`);
  }

  return aliases;
}

const aliases = generateAliases(brandTokens.brand, brandName);

const cssContent = `/**
 * DO NOT EDIT THIS FILE DIRECTLY.
 * This file is auto-generated from JSON design tokens using build-tokens.js
 * Brand: ${brandName.toUpperCase()}
 */

:root {
  /* === BRAND TOKENS === */
${brandVars.join('\n')}

  /* === GLOBAL FOUNDATIONS === */
${globalVars.join('\n')}

  /* === COMPATIBILITY ALIASES === */
${aliases.join('\n')}
}
`;

fs.writeFileSync(outputPath, cssContent);
console.log(`Successfully generated tokens for brand: ${brandName.toUpperCase()}`);
