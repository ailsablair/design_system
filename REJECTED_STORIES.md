# Rejected Stories - DO NOT REINSTALL

This document lists Storybook stories that have been **permanently rejected** during visual testing on Chromatic and should **NEVER** be reinstalled.

## ⛔ PERMANENTLY REJECTED STORIES

The following 6 stories were denied in Chromatic Build 21 (commit: 5f3d158) and must **NOT** be added back:

### 1. Colors: Usage Guidelines
- **File**: `src/stories/foundations/Colors.stories.tsx`
- **Export**: `UsageGuidelines`
- **Reason**: Rejected during visual testing
- **Status**: ❌ PERMANENTLY BANNED

### 2. Logo: All Variants
- **File**: `src/stories/foundations/Logo.stories.tsx`
- **Export**: `AllVariants`
- **Reason**: Rejected during visual testing
- **Status**: ❌ PERMANENTLY BANNED

### 3. Logo: Color Variations
- **File**: `src/stories/foundations/Logo.stories.tsx`
- **Export**: `ColorVariations`
- **Reason**: Rejected during visual testing
- **Status**: ❌ PERMANENTLY BANNED

### 4. Logo: On Dark Background
- **File**: `src/stories/foundations/Logo.stories.tsx`
- **Export**: `OnDarkBackground`
- **Reason**: Rejected during visual testing
- **Status**: ❌ PERMANENTLY BANNED

### 5. Logo: Size Comparison
- **File**: `src/stories/foundations/Logo.stories.tsx`
- **Export**: `SizeComparison`
- **Reason**: Rejected during visual testing
- **Status**: ❌ PERMANENTLY BANNED

### 6. Logo: Logomark Variations
- **File**: `src/stories/foundations/Logo.stories.tsx`
- **Export**: `LogomarkVariations`
- **Reason**: Rejected during visual testing
- **Status**: ❌ PERMANENTLY BANNED

## 🚨 IMPORTANT WARNINGS

- **DO NOT** recreate these stories under different names
- **DO NOT** attempt to modify and re-add them
- **DO NOT** create similar stories with the same content
- Any pull request attempting to add these stories will be **REJECTED**

## ✅ Approved Stories (Keep These)

The following stories passed visual testing and should remain:

### Logo Stories (Approved)
- `Default` ✅
- `Logomark` ✅ 
- `Wordmark` ✅
- `CustomSize` ✅

### Design Tokens Stories (Approved)
- `Colors` ✅
- `Spacing` ✅
- `Typography` ✅
- `Shadows` ✅

### Colors Stories (Approved)
- `PrimaryColors` ✅
- `NeutralColors` ✅
- `SemanticColors` ✅
- `BaseColors` ✅

### Foundations Stories (Approved)
- `Overview` ✅

## 📅 History

- **Build 21** (2024): Initial rejection of 6 stories
- **Build 23** (2024): Successful deployment with rejected stories removed
- **Current Status**: 13 approved stories across 4 components

---

**⚠️ VIOLATION WARNING**: Adding any of the rejected stories will break the visual testing pipeline and cause deployment failures.
