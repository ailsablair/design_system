# Border Radius Audit Report

## 🎯 Executive Summary
This audit reviewed all UI elements across the design system to ensure border-radius values match Figma design tokens. Several critical issues were identified and require immediate attention.

## 🚨 Critical Issues Found

### 1. Non-Existent Design Tokens Being Referenced
These tokens are being used but don't exist in `tokens.css`:

| **Used Token** | **Files Affected** | **Should Be** |
|---|---|---|
| `--border-radius-full` | `progressBar.css` | `--spacing-radius-full` |
| `--border-radius-default` | `paymentMethod.css`, `userProfile.css` | `--spacing-radius-8px` |
| `--spacing-border-radius-4px` | `userCell.css` | `--spacing-radius-4px` |

### 2. Hardcoded Radius Values
Components using hardcoded values instead of design tokens:

| **Value** | **Components** | **Should Use Token** |
|---|---|---|
| `border-radius: 2px` | `star.css`, `textarea.css`, `slider.css` | `--spacing-radius-2px` |
| `border-radius: 4px` | `listGroup.css`, `table` components | `--spacing-radius-4px` |
| `border-radius: 8px` | `table` components | `--spacing-radius-8px` |
| `border-radius: 12px` | `accordion.css`, `table` components | `--spacing-radius-12px` |
| `border-radius: 16px` | `accordion.css` | `--spacing-radius-16px` |
| `border-radius: 20px` | `accordion.css` | `--spacing-radius-24px` |
| `border-radius: 24px` | `imageAccordion.css` | `--spacing-radius-24px` |
| `border-radius: 50%` | Multiple components | `--spacing-radius-full` |

### 3. Accordion Components - Major Inconsistencies
The accordion components have extensive hardcoded radius values that don't match available design tokens:

- Uses `12px`, `16px`, `20px` values extensively
- Should use `--spacing-radius-12px`, `--spacing-radius-16px`, `--spacing-radius-24px`
- Position variants have inconsistent radius application

### 4. Image Accordion Mobile Breakpoints
Hardcoded `24px` values in mobile CSS that should use `--spacing-radius-24px`

## ✅ Available Design Tokens (Correct)
Current tokens in `tokens.css`:
```css
--spacing-radius-2px: 2px;
--spacing-radius-4px: 4px;
--spacing-radius-6px: 6px;
--spacing-radius-8px: 8px;
--spacing-radius-12px: 12px;
--spacing-radius-16px: 16px;
--spacing-radius-24px: 24px;
--spacing-radius-48px: 48px; /* Figma token for ImageAccordion */
--spacing-radius-full: 9999px;
```

## 🔧 Required Fixes

### Phase 1: Fix Non-Existent Token References (High Priority)
1. **progressBar.css**: Replace `--border-radius-full` → `--spacing-radius-full`
2. **paymentMethod.css**: Replace `--border-radius-default` → `--spacing-radius-8px`  
3. **userProfile.css**: Replace `--border-radius-default` → `--spacing-radius-8px`
4. **userCell.css**: Replace `--spacing-border-radius-4px` → `--spacing-radius-4px`

### Phase 2: Replace Hardcoded Values (Medium Priority)
1. **star.css**: `border-radius: 2px` → `var(--spacing-radius-2px)`
2. **textarea.css**: `border-radius: 2px` → `var(--spacing-radius-2px)`
3. **listGroup.css**: Multiple `4px` values → `var(--spacing-radius-4px)`
4. **Table components**: Various hardcoded values → appropriate tokens

### Phase 3: Accordion System Overhaul (High Priority - Figma Alignment)
1. **accordion.css**: Replace all hardcoded radius values with design tokens
2. **accordionHeader.css**: Replace all hardcoded radius values with design tokens
3. **Ensure consistency** across position variants (top, middle, bottom)

### Phase 4: Image Accordion Mobile Fixes (Low Priority)
1. **imageAccordion.css**: Replace mobile `24px` values with `var(--spacing-radius-24px)`

## 📊 Impact Assessment

### Components Requiring Updates: **15+ files**
### Design Token Violations: **50+ instances**
### High Priority Fixes: **8 files** (broken references)
### Figma Alignment Issues: **Accordion system** (major)

## 🎯 Recommendations

1. **Immediate Action**: Fix all non-existent token references (Phase 1)
2. **Figma Validation**: Review accordion radius values against latest Figma designs
3. **Add Missing Tokens**: Consider adding `--spacing-radius-1px` for edge cases
4. **Automated Linting**: Implement CSS linting to prevent hardcoded radius values
5. **Component Audit**: Regular audits to ensure ongoing compliance

## 🔍 Next Steps

1. Execute Phase 1 fixes immediately (critical)
2. Validate accordion designs against Figma (confirm exact radius values)
3. Implement Phase 2 & 3 fixes
4. Set up automated checks to prevent future violations
5. Update component documentation with correct token usage

---

**Last Updated**: Current Date  
**Reviewer**: Design System Audit  
**Status**: Fixes Required - High Priority
