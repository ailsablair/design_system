# Echo Design System

A comprehensive design system built with React, TypeScript, and Storybook.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start Storybook
npm run storybook

# Build for production
npm run build

# Deploy to Chromatic
npm run chromatic
```

## 📚 Documentation

- **Storybook**: Interactive component documentation
- **Chromatic**: Visual testing and review
- **Design Tokens**: Foundation-level design values

## 🎨 Components

### Foundations
- **Logo**: Echo brand logo with variants and color schemes
- **Design Tokens**: Colors, typography, spacing, shadows
- **Color Palette**: Brand and semantic color system
- **Typography**: Font families, sizes, and weights

## ⛔ Important: Rejected Stories

**WARNING**: Some stories have been permanently rejected during visual testing and must **NEVER** be reinstalled.

📋 **See [REJECTED_STORIES.md](./REJECTED_STORIES.md) for the complete list of banned stories.**

These stories were rejected in Chromatic Build 21 and will cause deployment failures if added back:
- Colors: Usage Guidelines
- Logo: All Variants, Color Variations, On Dark Background, Size Comparison, Logomark Variations

## 🔄 Deployment Pipeline

1. **Development**: Local development with hot reloading
2. **Storybook**: Component documentation and testing
3. **Chromatic**: Visual regression testing
4. **Approval**: Manual review of visual changes
5. **Production**: Deployment of approved components

## 🛡️ Visual Testing Rules

- All new stories must pass Chromatic visual testing
- Rejected stories are permanently banned (see REJECTED_STORIES.md)
- No modifications to rejected stories are allowed
- Pull requests with banned stories will be automatically rejected

## 📦 Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Storybook 9** - Component documentation
- **Chromatic** - Visual testing and deployment

## 🏗️ Project Structure

```
src/
├── stories/
│   └── foundations/
│       ├── Logo.tsx              # Logo component
│       ├── Logo.stories.tsx      # Logo documentation
│       ├── DesignTokens.stories.tsx
│       ├── Colors.stories.tsx
│       ├── Foundations.stories.tsx
│       └── tokens.css            # Design token CSS variables
├── App.tsx                       # Main application
└── index.css                     # Global styles with tokens
```

## 🔧 Development

### Adding New Components

1. Create component in appropriate directory
2. Create `.stories.tsx` file for documentation
3. Add proper TypeScript interfaces
4. Use design tokens from `tokens.css`
5. Test in Storybook locally
6. Deploy to Chromatic for visual review
7. Update `src/stories/08-ComponentTree.stories.tsx` to include the new component in the UI Component Tree Map

### Design Token Usage

```css
/* Use existing CSS custom properties */
.component {
  color: var(--primary-blue-blue-500);
  font-size: var(--type-size-base);
  padding: var(--spacing-sizing-16px);
  border-radius: var(--spacing-radius-8px);
}
```

## 📋 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run storybook` - Start Storybook
- `npm run build-storybook` - Build Storybook
- `npm run chromatic` - Deploy to Chromatic (with changes check)
- `npm run chromatic:ci` - Deploy to Chromatic (CI mode)

## 🤝 Contributing

1. Follow the existing code conventions
2. Use design tokens for consistency
3. Write comprehensive Storybook stories
4. Ensure visual tests pass in Chromatic
5. **Never reinstall rejected stories** (see REJECTED_STORIES.md)

---

Built with ❤️ by the Echo Design Team
