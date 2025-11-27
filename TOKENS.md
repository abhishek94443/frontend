# Design Tokens (Production Ready - Round 6)

This document lists all available design tokens in the system. These tokens should be used in the `styles` object of your JSON configuration.

## Safety Rules (CRITICAL)
1.  **No Absolute Pixel Widths**: Do not use pixel values for `width` or `height` in layout styles. Use tokens (`1/2`, `full`, `fit`) or `flexBasis`.
2.  **Image Props**: Images must include `alt` text. Use `uploadWidth` and `uploadHeight` only as hints for the optimizer, not for layout.
3.  **Schema Version**: The root JSON must include `"schemaVersion": "1.0.0"`.

## Colors & Backgrounds
**Important:** Background tokens are prefixed with `bg-`. Use semantic aliases where possible.

### Text Colors (`color`)
| Token | Value | Tailwind Class |
|-------|-------|----------------|
| `text-primary` | #111827 | `text-gray-900` |
| `text-secondary` | #4b5563 | `text-gray-600` |
| `text-tertiary` | #9ca3af | `text-gray-400` |
| `text-inverse` | #ffffff | `text-white` |
| `text-brand` | #2563eb | `text-blue-600` |
| `brand-900` | #1e3a8a | `text-blue-900` |
| `brand-500` | #3b82f6 | `text-blue-500` |

### Background Colors (`background`)
| Token | Value | Tailwind Class |
|-------|-------|----------------|
| `bg-surface` | #ffffff | `bg-white` |
| `bg-surface-alt` | #f9fafb | `bg-gray-50` |
| `bg-surface-dark` | #111827 | `bg-gray-900` |
| `bg-primary` | #2563eb | `bg-blue-600` |
| `bg-brand-50` | #eff6ff | `bg-blue-50` |

## Spacing
Usage: `padding`, `margin`, `gap`
**Strict Semantic Keys Only**

| Token | Value (px) | Tailwind Class |
|-------|------------|----------------|
| `none` | 0px | `p-0` |
| `xs` | 4px | `p-1` |
| `sm` | 8px | `p-2` |
| `md` | 16px | `p-4` |
| `lg` | 24px | `p-6` |
| `xl` | 32px | `p-8` |
| `2xl` | 48px | `p-12` |
| `3xl` | 64px | `p-16` |
| `4xl` | 80px | `p-20` |
| `5xl` | 96px | `p-24` |
| `6xl` | 128px | `p-32` |

### Negative Spacing (Margin Only)
`-xs`, `-sm`, `-md`, `-lg`, `-xl`

### Section Padding (`sectionPadding`)
`sm`, `md`, `lg`, `xl`

## Typography
Usage: `typography`
**Monotonic Scale (No Overlaps)**

| Token | Description | Tailwind Class |
|-------|-------------|----------------|
| `display-3xl` | 9xl Bold | `text-9xl font-bold` |
| `display-2xl` | 8xl Bold | `text-8xl font-bold` |
| `display-xl` | 7xl Bold | `text-7xl font-bold` |
| `display-lg` | 6xl Bold | `text-6xl font-bold` |
| `display-md` | 5xl Bold | `text-5xl font-bold` |
| `display-sm` | 5xl Bold | `text-5xl font-bold` |
| `heading-xl` | 4xl Bold | `text-4xl font-bold` |
| `heading-lg` | 3xl Bold | `text-3xl font-bold` |
| `heading-md` | 2xl Bold | `text-2xl font-bold` |
| `heading-sm` | xl Bold | `text-xl font-bold` |
| `heading-xs` | lg Bold | `text-lg font-bold` |
| `body-xl` | xl Regular | `text-xl` |
| `body-lg` | lg Regular | `text-lg` |
| `body-md` | base Regular | `text-base` |
| `body-sm` | sm Regular | `text-sm` |

### Font Size (`fontSize`)
`xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`, `8xl`, `9xl`

### Font Family (`fontFamily`)
`sans`, `serif`, `mono`

## Layout & Grid

### Grid Columns (`columns`)
Usage: `props.columns` or `styles.responsive.{bp}.columns`
`1`, `2`, `3`, `4`, `5`, `6`, `12`

### Grid Gap (`gridGap`)
`sm` (gap-2), `md` (gap-4), `lg` (gap-8), `xl` (gap-12)

### Width / FlexBasis
Usage: `width` or `flexBasis`. Prefer `flexBasis` for flex children.
`full`, `screen`, `auto`, `fit`, `min`, `max`, `1/2`, `1/3`, `2/3`, `1/4`, `3/4`...

### Aspect Ratio (`aspectRatio`)
`auto`, `square`, `video` (16/9), `video-16-9` (explicit), `4/3`, `21/9`

## Responsive & Hover
You can nest styles under `responsive` (breakpoints) or `hover` keys.

```json
"styles": {
  "padding": "md",
  "background": "bg-surface",
  "hover": {
    "background": "bg-surface-alt",
    "shadow": "lg"
  },
  "responsive": {
    "md": {
      "padding": "xl",
      "columns": "2"
    }
  }
}
```
