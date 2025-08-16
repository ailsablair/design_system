# Design Token Migration Plan

## 🎯 PRIORITY ORDER (Most Critical First)

### HIGH PRIORITY - Major Hardcoded Issues
1. **input.css** - 20+ hardcoded values
2. **textarea.css** - 15+ hardcoded values  
3. **toggle.css** - 15+ hardcoded values
4. **slider.css** - 10+ hardcoded values

### MEDIUM PRIORITY - Moderate Issues
5. **dropdownMenu.css** - Custom shadows/transforms
6. **tag.css** - Border and opacity values
7. **radioButton.css** - Sizing values
8. **checkbox.css** - Sizing values

### LOW PRIORITY - Minor Issues
9. **tableRow.css** - Icon styling
10. **table.css** - Layout values

---

## 🔧 MIGRATION MAPPING

### Typography Tokens
```css
/* REPLACE THESE: */
line-height: 17px;        → var(--type-line-height-label-sm)
line-height: 24px;        → var(--type-line-height-label-lg)
letter-spacing: 0.15px;   → var(--type-letter-spacing-archivo-label-sm)
font-weight: 400;         → var(--type-weight-regular)

/* ADD TO tokens.css if missing: */
--type-line-height-label-sm: 17px;
--type-line-height-label-lg: 24px;
--type-letter-spacing-archivo-label: 0.15px;
```

### Sizing Tokens
```css
/* REPLACE THESE: */
width: 300px;             → var(--sizing-width-300)
height: 44px;             → var(--sizing-height-44)
min-height: 32px;         → var(--sizing-min-height-32)
padding: 2px;             → var(--spacing-sizing-2px)
gap: 4px;                 → var(--spacing-sizing-4px)

/* ADD TO tokens.css: */
--sizing-width-300: 300px;
--sizing-height-44: 44px;
--sizing-min-height-32: 32px;
```

### Opacity Tokens
```css
/* REPLACE THESE: */
opacity: 0.6;             → var(--opacity-medium)
opacity: 0.3;             → var(--opacity-low)
opacity: 0.9;             → var(--opacity-high)

/* ADD TO tokens.css: */
--opacity-low: 0.3;
--opacity-medium: 0.6;
--opacity-high: 0.9;
```

### Border Tokens
```css
/* REPLACE THESE: */
border: 1px solid;        → border: var(--spacing-stroke-1px) solid;
outline-offset: 2px;      → outline-offset: var(--spacing-sizing-2px);
```

### Transform Tokens
```css
/* ADD TO tokens.css: */
--transform-scale-up: scale(1.1);
--transform-scale-down: scale(0.95);
--transform-slide-up: translateY(-8px);

/* REPLACE THESE: */
transform: scale(1.1);    → transform: var(--transform-scale-up);
transform: scale(0.95);   → transform: var(--transform-scale-down);
```

### Shadow Tokens
```css
/* REPLACE THESE: */
box-shadow: 0 5px 10px 0 rgba(39, 39, 39, 0.10); → var(--shadow-dropdown)

/* ADD TO tokens.css: */
--shadow-dropdown: 0 5px 10px 0 rgba(39, 39, 39, 0.10);
```

---

## 📋 STEP-BY-STEP EXECUTION

### Step 1: Update tokens.css with missing tokens
- Add missing typography tokens
- Add sizing tokens for component dimensions
- Add opacity tokens
- Add transform tokens
- Add component-specific shadow tokens

### Step 2: Migrate High Priority Components
- input.css
- textarea.css
- toggle.css
- slider.css

### Step 3: Migrate Medium Priority Components
- dropdownMenu.css
- tag.css
- radioButton.css
- checkbox.css

### Step 4: Migrate Low Priority Components
- tableRow.css
- table.css

### Step 5: Validation
- Test all components in Storybook
- Run Chromatic tests
- Verify no visual regressions
- Check for unused tokens

---

## 🎨 TOKEN NAMING CONVENTIONS

### Consistent Patterns
- **Spacing**: `--spacing-sizing-{value}`
- **Dimensions**: `--sizing-{property}-{value}` 
- **Typography**: `--type-{property}-{variant}`
- **Colors**: `--{category}-{color}-{shade}`
- **Opacity**: `--opacity-{level}`
- **Transforms**: `--transform-{action}`
- **Shadows**: `--shadow-{context}`

### Examples
```css
--spacing-sizing-2px: 2px;
--sizing-width-300: 300px;
--type-line-height-label-sm: 17px;
--primary-sky-blue-500: #0BA7EA;
--opacity-medium: 0.6;
--transform-scale-up: scale(1.1);
--shadow-dropdown: 0 5px 10px 0 rgba(39, 39, 39, 0.10);
```

---

## ✅ SUCCESS CRITERIA

- [ ] Zero hardcoded values in component CSS
- [ ] All tokens follow naming conventions  
- [ ] Component visual appearance unchanged
- [ ] Storybook builds successfully
- [ ] Chromatic tests pass
- [ ] Design system documentation updated
