# Design System Typography Token Migration Reference

**Status**: ✅ Phase 1-3 Complete - Consolidated typography tokens across 12 core components

**Last Updated**: December 2025

---

## Overview

This document provides a comprehensive reference for the design system's typography token migration from hardcoded values to the unified `--text-styles-*` token system (142+ variants).

### What Was Done

Migrated 12 high-impact components to use the new typography token system:

| Phase | Components | Status |
|-------|-----------|--------|
| Phase 1 | Alert, Tag | ✅ Completed |
| Phase 2 | HeaderWithCount, FigmaTable, TeamMembersTable, Input, Textarea | ✅ Completed |
| Phase 3 | FileIcon, FileTypeIcon | ✅ Completed |

---

## Typography Token System Architecture

### Token Naming Convention

All typography tokens follow the pattern: `--text-styles-{style}-{variant}-{property}`

**Examples:**
- `--text-styles-h5-med-font-family`: Archivo
- `--text-styles-h5-med-font-size`: 19px
- `--text-styles-h5-med-font-weight`: 500
- `--text-styles-h5-med-line-height`: 24px
- `--text-styles-h5-med-letter-spacing`: -0.15px

### Available Properties per Token

Each typography token includes these CSS properties:
1. `font-family` (e.g., Archivo, Roboto Flex)
2. `font-size` (e.g., 10px - 36px)
3. `font-weight` (100, 300, 400, 500, 600, 700, 800)
4. `line-height` (12px - 36px)
5. `letter-spacing` (varies by style)

---

## Complete Token Mapping Reference

### Heading Styles (H1-H5)

#### H1 (36px)
- **h1-bold**: 36px, 700, 36px, -0.5px
- **h1-med**: 36px, 500, 36px, -0.5px
- **h1-light**: 36px, 300, 36px, -0.5px
- **h1-thin**: 36px, 100, 36px, -0.5px

#### H2 (32px)
- **h2-bold**: 32px, 700, 32px, -0.5px
- **h2-med**: 32px, 500, 32px, -0.5px
- **h2-light**: 32px, 300, 32px, -0.5px
- **h2-thin**: 32px, 100, 32px, -0.5px

#### H3 (28px)
- **h3-bold**: 28px, 700, 28px, -0.5px
- **h3-med**: 28px, 500, 28px, -0.5px
- **h3-light**: 28px, 300, 28px, -0.5px
- **h3-thin**: 28px, 100, 28px, -0.5px

#### H4 (24px - Archivo / 20px - Roboto Flex)
**Archivo variants:**
- **h4-archivo-bold**: 24px, 700, 24px, -0.25px
- **h4-archivo-med**: 24px, 500, 24px, -0.25px
- **h4-archivo-light**: 24px, 300, 24px, -0.25px
- **h4-archivo-thin**: 24px, 100, 24px, -0.25px

**Roboto Flex variants:**
- **h4-roboto-flex-semibold**: 20px, 600, 24px, 0.35px
- **h4-roboto-flex-default**: 20px, 400, 24px, 0.35px
- **h4-roboto-flex-light**: 20px, 300, 24px, 0.35px

#### H5 (19px - Archivo / 19px - Roboto Flex)
**Archivo variants:**
- **h5-archivo-bold**: 19px, 700, 24px, -0.15px
- **h5-archivo-med**: 19px, 500, 24px, -0.15px
- **h5-archivo-light**: 19px, 300, 24px, -0.15px
- **h5-archivo-thin**: 19px, 100, 24px, -0.15px

**Roboto Flex variants:**
- **h5-roboto-flex-semibold**: 19px, 600, 24px, 0.5px
- **h5-roboto-flex-default**: 19px, 400, 24px, 0.5px
- **h5-roboto-flex-light**: 19px, 300, 24px, 0.5px

### Title & Subtitle (32px / 24px)

#### Title (32px)
**Archivo variants:**
- **title-archivo-bold**: 32px, 700, 36px, -0.15px
- **title-archivo-med**: 32px, 500, 36px, -0.15px
- **title-archivo-light**: 32px, 300, 36px, -0.15px
- **title-archivo-thin**: 32px, 100, 36px, -0.15px

**Roboto Flex variants:**
- **title-roboto-flex-extrabold**: 32px, 800, 36px, 0.5px
- **title-roboto-flex-semibold**: 32px, 600, 36px, 0.5px
- **title-roboto-flex-default**: 32px, 400, 36px, 0.5px
- **title-roboto-flex-light**: 32px, 300, 36px, 0.5px

#### Subtitle (24px)
**Archivo variants:**
- **subtitle-archivo-bold**: 24px, 700, 26px, -0.15px
- **subtitle-archivo-semi**: 24px, 600, 26px, -0.15px
- **subtitle-archivo-default**: 24px, 400, 26px, -0.15px
- **subtitle-archivo-light**: 24px, 300, 26px, -0.15px

**Roboto Flex variants:**
- **subtitle-roboto-flex-bold**: 24px, 700, 26px, 0.5px
- **subtitle-roboto-flex-semibold**: 24px, 600, 26px, 0.5px
- **subtitle-roboto-flex-default**: 24px, 400, 26px, 0.5px
- **subtitle-roboto-flex-light**: 24px, 300, 26px, 0.5px

### Body Styles

#### Body (16px - Roboto Flex)
- **body-extrabold**: 16px, 800, 20px, 0.05px
- **body-semibold**: 16px, 600, 20px, 0.05px
- **body-default**: 16px, 400, 20px, 0.05px
- **body-light**: 16px, 300, 20px, 0.05px
- **body-link**: 16px, 600, 20px, 0.05px

#### Body-LG (18px - Roboto Flex)
- **body-lg-extrabold**: 18px, 800, 22px, -0.15px
- **body-lg-semibold**: 18px, 600, 22px, -0.15px
- **body-lg-default**: 18px, 400, 22px, -0.15px
- **body-lg-light**: 18px, 300, 22px, -0.15px
- **body-lg-link**: 18px, 600, 22px, -0.15px

#### Body-SM (14px - Roboto Flex)
- **body-sm-extrabold**: 14px, 800, 16px, -0.15px
- **body-sm-semibold**: 14px, 600, 16px, -0.15px
- **body-sm-default**: 14px, 400, 16px, -0.15px
- **body-sm-light**: 14px, 300, 16px, -0.15px
- **body-sm-link**: 14px, 600, 16px, -0.15px

### Label Styles

#### Label (16px - Archivo)
- **label-bold**: 16px, 700, 20px, 0.15px
- **label-med**: 16px, 500, 20px, 0.15px
- **label-light**: 16px, 300, 20px, 0.15px
- **label-thin**: 16px, 100, 20px, 0.15px

#### Label-LG (18px - Archivo)
- **label-lg-bold**: 18px, 700, 20px, 0.15px
- **label-lg-med**: 18px, 500, 20px, 0.15px
- **label-lg-light**: 18px, 300, 20px, 0.15px
- **label-lg-thin**: 18px, 100, 20px, 0.15px

#### Label-SM (14px - Archivo)
- **label-sm-bold**: 14px, 700, 16px, 0.15px
- **label-sm-med**: 14px, 500, 16px, 0.15px
- **label-sm-light**: 14px, 300, 16px, 0.15px
- **label-sm-thin**: 14px, 100, 16px, 0.15px

#### Label-XS (12px - Archivo)
- **label-xs-bold**: 12px, 700, 14px, 0.15px
- **label-xs-med**: 12px, 500, 14px, 0.15px
- **label-xs-light**: 12px, 300, 14px, 0.15px
- **label-xs-thin**: 12px, 100, 14px, 0.15px

#### Label-XXS (10px - Archivo)
- **label-xxs-bold**: 10px, 700, 14px, 0.15px
- **label-xxs-med**: 10px, 500, 14px, 0.15px
- **label-xxs-light**: 10px, 300, 14px, 0.15px
- **label-xxs-thin**: 10px, 100, 14px, 0.15px

### Footnote Styles (13px)

**Archivo variants:**
- **footnote-archivo-bold**: 13px, 700, 15px, 0.2px
- **footnote-archivo-default**: 13px, 500, 15px, 0.2px
- **footnote-archivo-light**: 13px, 300, 15px, 0.2px
- **footnote-archivo-thin**: 13px, 100, 15px, 0.2px

**Roboto Flex variants:**
- **footnote-roboto-flex-semibold**: 13px, 600, 15px, 0.2px
- **footnote-roboto-flex-medium**: 13px, 400, 15px, 0.2px
- **footnote-roboto-flex-light**: 13px, 300, 15px, 0.2px

---

## Migration Examples by Component

### Alert Component

**Pattern**: Replace hardcoded values with corresponding text-style tokens

**Before:**
```css
.alert--small .alert__title {
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.15px;
}
```

**After:**
```css
.alert--small .alert__title {
  font-family: var(--text-styles-label-sm-med-font-family, Archivo);
  font-size: var(--text-styles-label-sm-med-font-size, 14px);
  font-weight: var(--text-styles-label-sm-med-font-weight, 500);
  line-height: var(--text-styles-label-sm-med-line-height, 16px);
  letter-spacing: var(--text-styles-label-sm-med-letter-spacing, 0.15px);
}
```

### Table Component

**Pattern**: Use appropriate tokens for headers, titles, subtitles, and body text

**Example - Header Text:**
```css
.figma-table__header-text {
  font-family: var(--text-styles-label-bold-font-family, Archivo);
  font-size: var(--text-styles-label-bold-font-size, 16px);
  font-weight: var(--text-styles-label-bold-font-weight, 700);
  line-height: 22px;
  letter-spacing: var(--text-styles-label-bold-letter-spacing, 0.15px);
}
```

### FileIcon Component

**Pattern**: Use label-xxs tokens for small UI elements

```css
.file-icon__text {
  font-weight: var(--text-styles-label-xxs-bold-font-weight, 700);
  font-size: var(--text-styles-label-xxs-bold-font-size, 10px);
  line-height: 12px;
}
```

---

## Component Migration Status

### Completed Migrations (12 components)

| Component | File | Token Focus | Status |
|-----------|------|------------|--------|
| Alert | `alert.css` | label-sm, footnote, body | ✅ |
| Tag | `tag.css` | label-xxs | ✅ |
| HeaderWithCount | `headerWithCount.css` | h3-med | ✅ |
| FigmaTable | `figmaTable.css` | h5, subtitle, label, body | ✅ |
| TeamMembersTable | `teamMembersTable.css` | h5, label, body, footnote | ✅ |
| Input | `input.css` | body, body-lg, body-sm | ✅ |
| Textarea | `textarea.css` | body, footnote, label | ✅ |
| FileIcon | `fileIcon.css` | label-xxs | ✅ |
| FileTypeIcon | `fileTypeIcon.css` | label-xxs | ✅ |
| Accordion (Default) | `accordion/default.css` | h5, body, body-lg, label, subtitle | ✅ |

### Remaining Components (Candidates for Phase 4)

Priority candidates for future migration:

| Component | File | Hardcoded Values | Impact |
|-----------|------|-------------------|--------|
| Button | `button.css` | font-weight | Medium |
| Toggle | `toggle.css` | font-size, line-height, letter-spacing | Medium |
| ListGroup | `listGroup.css` | font-size, font-weight | Medium |
| Card | `card.css` | letter-spacing, line-height | Low |
| Counter | `counter.css` | font-weight, letter-spacing | Low |
| Label | `label.css` | line-height | Low |
| MenuItem | `menuItem.css` | font-weight | Low |

---

## Best Practices for New Components

### 1. Always Use Tokens

When creating new components, always use the `--text-styles-*` tokens:

```css
/* ✅ CORRECT */
.component__title {
  font-family: var(--text-styles-h4-archivo-bold-font-family, Archivo);
  font-size: var(--text-styles-h4-archivo-bold-font-size, 24px);
  font-weight: var(--text-styles-h4-archivo-bold-font-weight, 700);
  line-height: var(--text-styles-h4-archivo-bold-line-height, 24px);
  letter-spacing: var(--text-styles-h4-archivo-bold-letter-spacing, -0.25px);
}

/* ❌ INCORRECT */
.component__title {
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.25px;
}
```

### 2. Match Typography to Hierarchy

Use appropriate tokens that reflect the visual hierarchy:
- **Headings**: h1-h5 tokens
- **Titles/Subtitles**: title-*, subtitle-* tokens
- **Body text**: body, body-lg, body-sm tokens
- **UI labels**: label, label-lg, label-sm, label-xs, label-xxs tokens
- **Small text**: footnote tokens

### 3. Include Fallback Values

Always include fallback values in the `var()` function for better resilience:

```css
.component__text {
  font-size: var(--text-styles-body-default-font-size, 16px);
  line-height: var(--text-styles-body-default-line-height, 20px);
}
```

### 4. Group Related Properties

Group typography properties together for readability:

```css
.component__text {
  /* Typography tokens */
  font-family: var(--text-styles-body-default-font-family, Roboto Flex);
  font-size: var(--text-styles-body-default-font-size, 16px);
  font-weight: var(--text-styles-body-default-font-weight, 400);
  line-height: var(--text-styles-body-default-line-height, 20px);
  letter-spacing: var(--text-styles-body-default-letter-spacing, 0.05px);

  /* Other properties */
  color: var(--base-black);
  margin: 0;
}
```

---

## Token Generation

### Build Command

To regenerate the tokens from `design-tokens/global.json`:

```bash
npm run tokens:echo
```

This command:
1. Reads `design-tokens/global.json` (DTCG format)
2. Resolves all token references (e.g., `{type.scale.h1}`)
3. Flattens nested structures into CSS variables
4. Outputs to `src/stories/foundations/tokens.css`

### Token File Structure

**Input**: `design-tokens/global.json`
- Contains semantic token definitions
- Uses DTCG (Design Tokens Community Group) format
- Includes references to type scales, font families, weights, line heights

**Output**: `src/stories/foundations/tokens.css`
- Auto-generated CSS custom properties
- Pattern: `--text-styles-{style}-{variant}-{property}: value;`
- Imported globally in components via `@import '../foundations/tokens.css';`

---

## Troubleshooting

### Issue: Token Not Resolving

**Symptom**: Typography appears unstyled or fallback is used

**Solution**:
1. Verify token name in `tokens.css` file
2. Check for typos in `var()` reference
3. Ensure fallback value is reasonable
4. Rebuild tokens: `npm run tokens:echo`

### Issue: Font Family Mismatch

**Symptom**: Wrong font displayed (e.g., Roboto Flex instead of Archivo)

**Solution**:
- Check if the token includes the correct `font-family` property
- Use `--text-styles-{style}-{fontfamily}-{variant}` pattern for variants
- Example: `--text-styles-h4-archivo-med` vs `--text-styles-h4-roboto-flex-default`

### Issue: Typography Changes Across All Components

**Symptom**: Updated a value in `global.json`, but changes don't appear

**Solution**:
1. Rebuild tokens: `npm run tokens:echo`
2. Refresh browser (clear cache if needed)
3. Check that component is using token variables, not hardcoded values
4. Verify fallback values are correct

---

## Future Enhancements

### Phase 4+ Roadmap

1. **Migrate Remaining Components**: Button, Toggle, ListGroup, Card, etc.
2. **Create Typography Ref Story**: Comprehensive Storybook story showing all variants
3. **Linting Enforcement**: ESLint/StyleLint rules to prevent hardcoded typography
4. **Design Sync**: Ensure all tokens match Figma design spec
5. **Documentation Update**: Update component guidelines with token usage

### Potential Improvements

- Create a `@mixin` or helper function for typography token groups
- Build a visual typography reference tool
- Add automated visual regression testing
- Create token migration helper script for batch updates

---

## References

- **Token Definition**: `design-tokens/global.json`
- **Build Script**: `scripts/build-tokens.cjs`
- **Generated Output**: `src/stories/foundations/tokens.css`
- **Design Tokens Community Group**: https://design-tokens.github.io/community-group/
- **Figma Type Scale**: See `type-scale.json` in project resources

---

## Contact & Questions

For questions or updates to this reference, please contact the design system team or review the token generation documentation in the project README.

**Last Updated**: December 2025
**Version**: 1.0
**Status**: Active - Phase 1-3 Complete, Phase 4 Pending
