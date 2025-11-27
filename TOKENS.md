# System Design Tokens

This document serves as the **Single Source of Truth** for all design tokens in the Universal Renderer system.
It maps abstract tokens to their concrete values and Tailwind utility classes.

---

## 1. Colors (`color`, `background`)

### Brand Palette (Dynamic)
These colors change based on the selected theme (e.g., Tide, Solar).

| Token | Value (Variable) | Tailwind Class | Why it is present |
|-------|------------------|----------------|-------------------|
| `brand-50` | `var(--color-brand-50)` | `text-brand-50` / `bg-brand-50` | Lightest tint, used for subtle backgrounds or hover states. |
| `brand-100` | `var(--color-brand-100)` | `text-brand-100` / `bg-brand-100` | Light tint, used for secondary backgrounds. |
| `brand-500` | `var(--color-brand-500)` | `text-brand-500` / `bg-brand-500` | **Primary Brand Color**. Used for main actions, buttons, and links. |
| `brand-600` | `var(--color-brand-600)` | `text-brand-600` / `bg-brand-600` | Darker shade, used for hover states on primary elements. |
| `brand-700` | `var(--color-brand-700)` | `text-brand-700` / `bg-brand-700` | Deep shade, used for active states or high-contrast text. |
| `brand-900` | `var(--color-brand-900)` | `text-brand-900` / `bg-brand-900` | Darkest shade, used for headings or heavy contrast. |

### Neutral Palette (Grayscale)
These colors provide structure and hierarchy.

| Token | Value (Variable) | Tailwind Class | Why it is present |
|-------|------------------|----------------|-------------------|
| `neutral-50` | `var(--color-neutral-50)` | `text-neutral-50` / `bg-neutral-50` | Off-white, used for page backgrounds. |
| `neutral-100` | `var(--color-neutral-100)` | `text-neutral-100` / `bg-neutral-100` | Light gray, used for card backgrounds or dividers. |
| `neutral-200` | `var(--color-neutral-200)` | `text-neutral-200` / `bg-neutral-200` | Borders and subtle lines. |
| `neutral-400` | `var(--color-neutral-400)` | `text-neutral-400` / `bg-neutral-400` | Placeholder text or disabled states. |
| `neutral-500` | `var(--color-neutral-500)` | `text-neutral-500` / `bg-neutral-500` | Secondary text, captions. |
| `neutral-600` | `var(--color-neutral-600)` | `text-neutral-600` / `bg-neutral-600` | Body text (lighter). |
| `neutral-700` | `var(--color-neutral-700)` | `text-neutral-700` / `bg-neutral-700` | Body text (standard). |
| `neutral-900` | `var(--color-neutral-900)` | `text-neutral-900` / `bg-neutral-900` | Headings and primary text. |
| `white` | `#ffffff` | `text-white` / `bg-white` | Absolute white. |
| `black` | `#000000` | `text-black` / `bg-black` | Absolute black. |

### Semantic Aliases (Recommended)
Use these for clear intent.

| Token | Maps To | Tailwind Class | Why it is present |
|-------|---------|----------------|-------------------|
| `text-primary` | `neutral-900` | `text-neutral-900` | Main content text. |
| `text-secondary` | `neutral-600` | `text-neutral-600` | Supporting text (descriptions). |
| `text-tertiary` | `neutral-400` | `text-neutral-400` | Meta info (dates, authors). |
| `text-brand` | `brand-600` | `text-brand-600` | Highlighted text using brand color. |
| `bg-surface` | `white` | `bg-white` | Default background for cards/sections. |
| `bg-surface-alt` | `neutral-50` | `bg-neutral-50` | Alternate background for visual separation. |
| `bg-primary` | `brand-600` | `bg-brand-600` | Primary action background (buttons). |

---

## 2. Spacing (`padding`, `margin`, `gap`)

| Token | Value | Tailwind Class | Why it is present |
|-------|-------|----------------|-------------------|
| `none` | `0px` | `p-0` / `m-0` | Reset spacing. |
| `xs` | `4px` | `p-1` / `gap-1` | Tiny spacing for tight groups (tags, icons). |
| `sm` | `8px` | `p-2` / `gap-2` | Small spacing for related items. |
| `md` | `16px` | `p-4` / `gap-4` | **Standard spacing**. Default for cards and grids. |
| `lg` | `24px` | `p-6` / `gap-6` | Large spacing for comfortable separation. |
| `xl` | `32px` | `p-8` / `gap-8` | Extra large spacing for section dividers. |
| `2xl` | `48px` | `p-12` | Major section breaks. |
| `3xl` | `64px` | `p-16` | Hero section spacing. |
| `4xl` | `80px` | `p-20` | Massive spacing for impact. |

---

## 3. Typography (`typography`)

| Token | Value | Tailwind Class | Why it is present |
|-------|-------|----------------|-------------------|
| `display-lg` | `6xl` / Bold | `text-6xl font-bold` | Main Hero Title. Maximum impact. |
| `display-md` | `5xl` / Bold | `text-5xl font-bold` | Secondary Hero Title. |
| `display-sm` | `4xl` / Bold | `text-4xl font-bold` | Small Hero Title. |
| `heading-xl` | `4xl` / Bold | `text-4xl font-bold` | Major Section Headings. |
| `heading-lg` | `3xl` / Bold | `text-3xl font-bold` | Standard Section Headings. |
| `heading-md` | `2xl` / Bold | `text-2xl font-bold` | Card Titles / Subsections. |
| `heading-sm` | `xl` / Bold | `text-xl font-bold` | Small Titles. |
| `body-lg` | `lg` | `text-lg` | Lead paragraphs / Intros. |
| `body-md` | `base` | `text-base` | **Default Body Text**. |
| `body-sm` | `sm` | `text-sm` | Captions, footers, meta info. |
| `button-md` | `base` / Medium | `text-base font-medium` | Standard button labels. |

---

## 4. Border Width (`borderWidth`)

| Token | Value | Tailwind Class | Why it is present |
|-------|-------|----------------|-------------------|
| `0` | `0px` | `border-0` | No border. |
| `1` | `1px` | `border` | **Default border**. Subtle separation. |
| `2` | `2px` | `border-2` | Emphasis border (active states). |
| `4` | `4px` | `border-4` | Heavy border (stylistic). |

---

## 5. Radius (`radius`)

| Token | Value | Tailwind Class | Why it is present |
|-------|-------|----------------|-------------------|
| `none` | `0px` | `rounded-none` | Sharp corners. |
| `sm` | `2px` | `rounded-sm` | Subtle rounding. |
| `md` | `4px` | `rounded-md` | **Standard rounding**. Cards, inputs. |
| `lg` | `8px` | `rounded-lg` | Larger rounding. Modals. |
| `xl` | `12px` | `rounded-xl` | Modern, soft look. |
| `2xl` | `16px` | `rounded-2xl` | Very soft look. |
| `full` | `9999px` | `rounded-full` | Pills, avatars, circular buttons. |

---

## 6. Shadow (`shadow`)

| Token | Value | Tailwind Class | Why it is present |
|-------|-------|----------------|-------------------|
| `none` | `none` | `shadow-none` | Flat design. |
| `sm` | `sm` | `shadow-sm` | Subtle lift. |
| `md` | `md` | `shadow-md` | **Standard lift**. Cards. |
| `lg` | `lg` | `shadow-lg` | Floating elements (dropdowns). |
| `xl` | `xl` | `shadow-xl` | Modals, popovers. |
| `2xl` | `2xl` | `shadow-2xl` | Maximum depth. |

---

## 7. Aspect Ratio (`aspectRatio`)

| Token | Value | Tailwind Class | Why it is present |
|-------|-------|----------------|-------------------|
| `video` | `16/9` | `aspect-video` | Standard video/hero image ratio. |
| `square` | `1/1` | `aspect-square` | Avatars, product thumbnails. |
| `4/3` | `4/3` | `aspect-[4/3]` | Classic photography ratio. |

---

## 8. Layout Tokens (`width`, `height`, `flexBasis`)

| Token | Meaning | Tailwind Class | Why it is present |
|-------|---------|----------------|-------------------|
| `full` | 100% | `w-full` / `h-full` | Full container width/height. |
| `auto` | Auto | `w-auto` / `h-auto` | Natural size. |
| `screen` | Viewport | `w-screen` / `h-screen` | Full viewport size. |
| `fit` | Fit Content | `w-fit` / `h-fit` | Shrink to fit content. |
| `min` | Min Content | `w-min` / `h-min` | Minimum intrinsic size. |
| `max` | Max Content | `w-max` / `h-max` | Maximum intrinsic size. |
| `1/2` | 50% | `w-1/2` / `basis-1/2` | Half width. |
| `1/3` | 33.3% | `w-1/3` / `basis-1/3` | Third width. |
| `2/3` | 66.6% | `w-2/3` / `basis-2/3` | Two-thirds width. |
| `1/4` | 25% | `w-1/4` / `basis-1/4` | Quarter width. |
| `3/4` | 75% | `w-3/4` / `basis-3/4` | Three-quarters width. |

---

## 9. Text Alignment (`textAlign`)

| Token | Meaning | Tailwind Class | Why it is present |
|-------|---------|----------------|-------------------|
| `start` | Left | `text-left` | Default alignment. |
| `center` | Center | `text-center` | Headings and centered content. |
| `end` | Right | `text-right` | Numeric data or specific layouts. |
| `justify` | Justify | `text-justify` | Long blocks of text. |

---

## 10. Border Colors (`borderColor`)

| Token | Meaning | Tailwind Class | Why it is present |
|-------|---------|----------------|-------------------|
| `border-subtle` | Light Gray | `border-neutral-200` | Default dividers. |
| `border-strong` | Dark Gray | `border-neutral-500` | Inputs or active states. |
| `brand-500` | Primary Brand | `border-brand-500` | Focused inputs or active tabs. |
| `transparent` | None | `border-transparent` | Hidden borders. |

---

## 11. Responsive Syntax (`responsive`)

Use these keys to apply styles at specific breakpoints.

| Key | Min Width | Meaning |
|-----|-----------|---------|
| `sm` | 640px | Mobile Landscape |
| `md` | 768px | Tablet (iPad Portrait) |
| `lg` | 1024px | Laptop (iPad Landscape) |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Large Screens |

**Example:**
```json
"responsive": {
  "md": { "padding": "xl", "direction": "row" }
}
```

---

## 12. Hover & Interactive (`hover`)

Use the `hover` object to define styles on mouseover.

**Allowed Keys:**
*   `background` (e.g., `bg-brand-600`)
*   `color` (e.g., `text-white`)
*   `shadow` (e.g., `lg`)
*   `borderColor` (e.g., `brand-500`)

**Example:**
```json
"hover": {
  "background": "bg-brand-600",
  "shadow": "lg"
}
```

---

## 13. Font Family (`fontFamily`)

These tokens map to the dynamic fonts selected in the config.

| Token | Meaning | Tailwind Class | Why it is present |
|-------|---------|----------------|-------------------|
| `sans` | Sans Serif | `font-sans` | Primary UI font (headings, body). |
| `serif` | Serif | `font-serif` | Accent font (headings, quotes). |
| `mono` | Monospace | `font-mono` | Code blocks, technical data. |

**Concrete Font Options (Config Only):**
*   **Sans**: `inter`, `roboto`, `open-sans`, `lato`, `montserrat`, `poppins`, `source-sans`, `space-grotesk`, `nunito`, `raleway`, `outfit`, `manrope`, `dm-sans`, `plus-jakarta`, `figtree`, `work-sans`
*   **Serif**: `playfair`, `merriweather`, `lora`, `source-serif`, `crimson-text`, `libre-baskerville`, `cormorant`, `eb-garamond`, `crimson-pro`, `libre-caslon`
*   **Mono**: `jetbrains`, `fira-code`, `source-code`, `roboto-mono`, `ibm-plex-mono`, `space-mono`, `inconsolata`
