# Stepper Component - Quick Reference Guide

## Import

```tsx
import { Stepper } from '@/stories/atoms/building-blocks/Stepper';
import { StepperLine } from '@/stories/atoms/building-blocks/StepperLine';
```

## Stepper Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'number' \| 'icon'` | `'number'` | Display type |
| `state` | `'default' \| 'active' \| 'completed'` | `'default'` | Visual state |
| `size` | `'default' \| 'large'` | `'default'` | Size variant (100px or 140px) |
| `stepNumber` | `string` | - | Number or 'check' for completed |
| `label` | `string` | - | Text label below step |
| `current` | `boolean` | `false` | Whether this is the current step |
| `text` | `boolean` | `true` | Show label text |

## StepperLine Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'solid' \| 'dashed' \| 'dotted'` | `'solid'` | Line style |
| `stroke` | `'1px' \| '2px' \| '3px'` | `'2px'` | Line thickness |
| `width` | `string \| number` | `'300px'` | Custom width |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Line direction |

## Common Patterns

### Four-Step Process (Default Size)

```tsx
<div style={{ display: 'flex', alignItems: 'flex-start' }}>
  <Stepper state="completed" size="default" stepNumber="check" label="Complete" />
  <StepperLine width="249px" />
  <Stepper state="active" size="default" stepNumber="02" label="Step Two" current />
  <StepperLine width="249px" />
  <Stepper state="default" size="default" stepNumber="03" label="Step Three" />
  <StepperLine width="249px" />
  <Stepper state="default" size="default" stepNumber="04" label="Step Four" />
</div>
```

### Large Size Stepper

```tsx
<Stepper 
  type="number" 
  state="active" 
  size="large" 
  stepNumber="02" 
  label="Current Step" 
  current={true}
/>
```

### Extended Step Count (8 Steps)

```tsx
// Connector width: 40px for 8 steps
<Stepper stepNumber="01" label="Step One" />
<StepperLine width="40px" />
<Stepper stepNumber="02" label="Step Two" />
// ... continue for all 8 steps
```

## Connector Line Widths by Step Count

| Steps | Width per Connector | Total Width |
|-------|---------------------|-------------|
| 4 | 249px | ~1280px |
| 5 | 167px | ~1120px |
| 6 | 108px | ~1000px |
| 7 | 68px | ~900px |
| 8 | 40px | ~800px |

## State Visual Reference

### Default
- Border: 2px solid #E5E7EB
- Background: #FFFFFF
- Text: #1C1C1C (black)

### Active/Current
- Border: 4px solid #2F42BD
- Background: #FFFFFF
- Text: #2F42BD (blue, medium weight)

### Completed
- Border: 3px solid #191E3C (default) / 4px (large)
- Background: #2F42BD
- Icon: White checkmark (60px default, 80px large)
- Text: #2F42BD (blue, medium weight)

## Responsive Breakpoints

```css
/* Tablet (≤768px) */
- Large: 120px circle
- Default: 85px circle

/* Mobile (≤480px) */
- Large: 100px circle
- Default: 70px circle
```

## Accessibility Features

- ✅ ARIA labels included
- ✅ Keyboard navigation support
- ✅ Focus-visible states
- ✅ High contrast mode support
- ✅ Reduced motion support
- ✅ Minimum 44px touch targets

## Common Mistakes to Avoid

❌ **Don't:** Hardcode colors instead of using design tokens
```tsx
// Bad
style={{ borderColor: '#E5E7EB' }}
```

✅ **Do:** Use CSS classes that reference design tokens
```tsx
// Good - handled automatically by component
<Stepper state="default" />
```

❌ **Don't:** Use incorrect connector widths
```tsx
// Bad - wrong width for 4 steps
<StepperLine width="300px" />
```

✅ **Do:** Use correct widths from the table above
```tsx
// Good - correct width for 4 steps
<StepperLine width="249px" />
```

❌ **Don't:** Mix sizes inconsistently
```tsx
// Bad
<Stepper size="default" />
<StepperLine width="196px" /> {/* This is for large size */}
```

✅ **Do:** Match sizes correctly
```tsx
// Good
<Stepper size="default" />
<StepperLine width="249px" /> {/* Correct for default + 4 steps */}
```

## Advanced Usage

### Dynamic Step Progress

```tsx
const [currentStep, setCurrentStep] = useState(1);
const totalSteps = 5;

{Array.from({ length: totalSteps }, (_, i) => i + 1).map((step, index) => (
  <React.Fragment key={step}>
    <Stepper
      state={
        step < currentStep ? 'completed' :
        step === currentStep ? 'active' : 'default'
      }
      stepNumber={step < currentStep ? 'check' : String(step).padStart(2, '0')}
      label={`Step ${step}`}
      current={step === currentStep}
    />
    {index < totalSteps - 1 && <StepperLine width="167px" />}
  </React.Fragment>
))}
```

### Custom Line Colors (Use Sparingly)

```tsx
<StepperLine 
  type="solid" 
  stroke="2px" 
  width="249px"
  color="#96F78D" // Success green
/>
```

### Vertical Orientation

```tsx
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <Stepper stepNumber="01" label="Step One" />
  <StepperLine orientation="vertical" height="80px" />
  <Stepper stepNumber="02" label="Step Two" />
</div>
```

## Best Practices

1. **Always use design tokens** - Never hardcode colors or sizes
2. **Match connector widths** - Use the table above for correct spacing
3. **Keep sizes consistent** - Don't mix default and large in the same progression
4. **Provide meaningful labels** - Help users understand each step
5. **Test responsiveness** - Verify appearance on all device sizes
6. **Consider accessibility** - Ensure keyboard navigation works
7. **Use semantic progression** - Steps should flow logically

## Need Help?

- 📖 See `StepperComprehensiveShowcase.stories.tsx` for complete examples
- 📋 Check `STEPPER_UI_IMPROVEMENTS.md` for detailed specifications
- 🎨 Review Figma designs for visual reference
- 💬 Contact the design system team for questions

## Version

Last updated: 2024
Component version: 2.0 (Figma-aligned)
Design system: Echo v1.0
