# Component Documentation Template

When adding a new component to the Echo Design System, please follow this structure in your `.stories.tsx` or associated documentation files.

## 1. Overview
*Include a rundown of each variant and the design tokens it is using.*

- **Variant Name**: Description of when to use.
- **Tokens**:
  - `color`: `var(--...)`
  - `spacing`: `var(--...)`
  - `stroke`: `var(--...)`
  - `typography`: `var(--...)`

## 2. Interactive Playground
*Implementation of a Storybook story that allows full interaction with all props.*

```typescript
export const Playground: Story = {
  args: { ... },
  render: (args) => <MyComponent {...args} />
};
```

## 3. Size Comparison
*Show all sizes with visible dimensions.*

| Size | Width | Height | H-Padding | V-Padding |
|------|-------|--------|-----------|-----------|
| Small | 32px | 32px | 8px | 4px |
| Default | 44px | 44px | 12px | 8px |
| Large | 56px | 56px | 16px | 12px |

## 4. Function Blurb
*Small blurb about the general function of the component.*

**Purpose**: Why does this component exist?
**Usage**: Where and why might we use this in the app?
**Example**: "A button is used to trigger an action or event, such as submitting a form, opening a dialog, or performing a deletion. It should be used when the user needs to interact with the system to perform a specific task."
