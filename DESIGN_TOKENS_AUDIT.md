# Design Tokens Audit & Migration Plan

## 🎯 Objective
Ensure all 204 Figma design variables are properly implemented as CSS custom properties and used consistently across all UI components.

## 📊 Current State Analysis

### Current Token Count: 271 CSS Variables
- **Target from Figma**: 204 variables
- **Current**: 271 variables
- **Difference**: +67 variables (need to consolidate)

### Token Categories Breakdown

#### 🎨 **COLOR TOKENS** (~150+ variables)
**Primary Colors:**
- `--primary-blue-*` (10 tokens)
- `--primary-sky-blue-*` (25 tokens) ✅ **Main brand color**
- `--primary-yellow-*` (25 tokens)
- `--primary-seafoam-*` (25 tokens)

**Base Colors:**
- `--base-white`, `--base-black`, `--base-transparent` (3 tokens)
- `--base-peach-cream-*` (3 tokens)
- `--base-gray-*` (12 tokens)
- `--base-pure-*` (3 tokens)

**Neutral Colors:**
- `--neutral-gray-gray-*` (10 tokens)

**Secondary Colors:**
- `--secondary-*` (6 tokens)

**Status Colors:**
- `--status-red-*` (20 tokens)
- `--status-orange-*` (10 tokens)
- `--status-green-*` (10 tokens)
- `--status-*` (10 legacy tokens)

**Semantic Colors:**
- `--semantic-*` (6 tokens)

#### 📐 **SIZING TOKENS** (~26 variables)
**Spacing:**
- `--spacing-sizing-*` (14 tokens) ✅
- `--spacing-radius-*` (7 tokens) ✅
- `--spacing-stroke-*` (5 tokens) ✅

#### ✍️ **TYPOGRAPHY TOKENS** (~50 variables)
**Typefaces:**
- `--type-typeface-*` (3 tokens) ✅ **Archivo, Inter, Roboto Flex**

**Font Sizes:**
- `--type-size-*` (10 standard tokens) ✅
- `--type-archivo-*` (4 Figma-specific tokens) ✅
- `--type-roboto-flex-*` (3 Figma-specific tokens) ✅

**Font Weights:**
- `--type-weight-*` (6 tokens) ✅

**Line Heights:**
- `--type-line-height-*` (9 tokens) ✅

**Letter Spacing:**
- `--type-letter-spacing-*` (11 tokens) ✅

#### 🔧 **OTHER TOKENS** (~45 variables)
- **Icons**: `--icon-size-*`, `--icon-opacity-*` (10 tokens)
- **Shadows**: `--shadow-*` (7 tokens)
- **Z-Index**: `--z-index-*` (8 tokens)
- **Transitions**: `--transition-*` (4 tokens)

---

## 🔍 AUDIT CHECKLIST

### Step 1: Figma Variables Export
**❌ TODO**: Export all 204 variables from Figma
1. Open Figma design system file
2. Go to **Local Variables** panel
3. Export variables in JSON/CSV format
4. Compare with our current 271 variables

### Step 2: Token Consolidation
**Potential Issues to Address:**

1. **Duplicate Color Tokens**: 
   - We have both `--status-*` and `--status-red-*` patterns
   - Base colors have multiple variants (`--base-gray-*` vs `--neutral-gray-*`)

2. **Naming Inconsistencies**:
   - Some use `--primary-sky-blue-sky-blue` (legacy)
   - Mixed naming patterns for similar tokens

3. **Missing Tokens** (potential gaps):
   - Focus ring colors
   - Disabled state colors
   - Interactive state variations

### Step 3: Component Token Usage Audit

**❌ TODO**: Verify each component uses design tokens correctly

#### Current Components to Audit:
- ✅ **Checkbox**: Updated to use `--primary-sky-blue-500`
- ❌ **Button**: Verify token usage
- ❌ **Input**: Verify token usage  
- ❌ **Toggle**: Verify token usage
- ❌ **Slider**: Verify token usage
- ❌ **RadioButton**: Verify token usage
- ❌ **Textarea**: Verify token usage
- ❌ **MenuItem**: Verify token usage
- ❌ **DropdownMenu**: Verify token usage
- ❌ **Table/TableRow**: Verify token usage
- ❌ **Tag**: Verify token usage

---

## 🎯 ACTION PLAN

### Phase 1: Figma Variable Import ⚡ **URGENT**
1. **Connect to Figma** and export all 204 design variables
2. Create mapping between Figma names and CSS variable names
3. Identify missing, extra, or incorrectly named tokens

### Phase 2: Token Consolidation 🧹
1. **Remove duplicate/legacy tokens**
2. **Standardize naming conventions**
3. **Add missing tokens from Figma**
4. **Update tokens.css to exactly match Figma**

### Phase 3: Component Migration 🔧
1. **Audit each component CSS file**
2. **Replace hardcoded values with design tokens**
3. **Ensure consistent token usage patterns**
4. **Update component stories to showcase token usage**

### Phase 4: Documentation & Validation ✅
1. **Update Storybook documentation**
2. **Create token usage examples**
3. **Validate with Chromatic visual testing**
4. **Create component token usage guidelines**

---

## 🛠️ IMMEDIATE NEXT STEPS

1. **Export Figma Variables**: Get the exact 204 variables from Figma
2. **Run Component Audit**: Check which components aren't using design tokens
3. **Create Token Migration Script**: Automate the process of updating components
4. **Test with Chromatic**: Ensure visual consistency after changes

---

## 📋 COMPONENT TOKEN USAGE PATTERNS

### ✅ **Good Example** (Recently Updated):
```css
/* Checkbox - Using design tokens correctly */
.checkbox-visual.default.checked {
  background: var(--primary-sky-blue-500);
  border-color: var(--primary-sky-blue-500);
}
```

### ❌ **Bad Example** (Needs Fix):
```css
/* Hardcoded values that should use tokens */
.component {
  color: #0BA7EA; /* Should be: var(--primary-sky-blue-500) */
  padding: 12px;  /* Should be: var(--spacing-sizing-12px) */
  border-radius: 8px; /* Should be: var(--spacing-radius-8px) */
}
```

---

## 📊 SUCCESS METRICS

- ✅ **Exactly 204 design tokens** matching Figma
- ✅ **Zero hardcoded values** in component CSS
- ✅ **100% token usage** across all components
- ✅ **Consistent naming conventions**
- ✅ **Chromatic visual tests passing**
- ✅ **Storybook documentation updated**

---

*This audit should be completed to ensure design system consistency and maintainability.*
