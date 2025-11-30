# AI Website Generation Workflow

This document outlines the strict step-by-step process for generating a website using the Universal Renderer system.

## Step 1: User Request
The user provides a high-level intent.
> "Create website for my salon."

## Step 2: Theme Selection
The system presents the supported themes. The AI **must** select one from this list based on the user's vibe.

**Supported Themes:**
*   **Verdant**: Green/Nature (Primary: `#059467`)
*   **Tide**: Blue/Calm (Primary: `#4c44e4`)
*   **Solar**: Orange/Warm (Primary: `#f59b0a`)
*   **Orchid**: Pink/Feminine (Primary: `#da2576`)
*   **Obsidian**: Dark/Sleek (Primary: `#36404f`)
*   **Brutalist**: Stark/Contrast (Primary: `#000000`)
*   **Lavender**: Purple/Soft (Primary: `#895bf5`)
*   **Harvest**: Autumn/Earthy (Primary: `#e9560c`)
*   **Glacier**: Ice/Cool (Primary: `#0284c5`)
*   **Classic**: Navy/Professional (Primary: `#153c51`)

**Output:**
```json
"selectedTheme": "Luxury Gold"
```

## Step 3: Font Selection
The AI selects a font pairing (Heading + Body) from the supported list.

**Sans Serif:**
`work-sans`, `inter`, `roboto`, `open-sans`, `lato`, `montserrat`, `poppins`, `source-sans`, `space-grotesk`, `nunito`, `raleway`, `outfit`, `manrope`, `dm-sans`, `plus-jakarta`, `figtree`

**Serif:**
`playfair`, `merriweather`, `lora`, `source-serif`, `crimson-text`, `libre-baskerville`, `cormorant`, `eb-garamond`, `crimson-pro`, `libre-caslon`

**Mono:**
`jetbrains`, `fira-code`, `source-code`, `roboto-mono`, `ibm-plex-mono`, `space-mono`, `inconsolata`

**Output:**
```json
{
 "headingFont": "playfair",
 "bodyFont": "inter"
}
```

## Step 4: Section Planning (AI)
The AI analyzes the request and suggests a logical flow of sections.

**Example Output:**
```json
[
  {"id":"hero","label":"Landing"},
  {"id":"services","label":"Salon Services"},
  {"id":"gallery","label":"Before/After"},
  {"id":"team","label":"Our Stylists"},
  {"id":"contact","label":"Booking"}
]
```
*User approves the structure.*

## Step 5: System Context & Rules
The system injects the following strict constraints. The AI **must obey** these rules during generation.

### 1. Design Tokens (Strict)
*   **Spacing**: Use `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`. **NO pixels.**
*   **Colors**: Use semantic tokens `text-primary`, `bg-surface` OR palette tokens `brand-500`, `neutral-200`.
*   **Typography**: Use `display-lg`, `heading-md`, `body-base`. **NO arbitrary sizes.**

### 2. Allowed Nodes
Only these node types are valid:
*   `section`: Top-level container.
*   `container`: Centers content (props: `maxWidth`).
*   `flex`: Layout container (props: `direction`, `align`, `justify`, `gap`).
*   `grid`: Grid layout (props: `columns`).
*   `text`: Content (props: `tag`, `content`).
*   `image`: Media (props: `src`, `alt`, `uploadWidth`, `uploadHeight`).
*   `button`: Action (props: `label`, `variant`).

### 3. Safety Rules
*   **No Absolute Widths**: Never use `width: "500px"`. Use `flexBasis: "1/2"` or `width: "full"`.
*   **Responsive Keys**: Use `responsive: { "md": { ... } }`.
*   **Images**: Must include `alt`. `uploadWidth/Height` are hints only.

## Step 6, 7, 8: Generation & Assembly
The AI generates each section JSON, validating against the schema.

### Expected Section Structure
```json
{
  "id": "hero-section",
  "type": "section",
  "styles": {
    "background": "bg-surface-alt",
    "padding": "4xl"
  },
  "children": [
    {
      "id": "hero-container",
      "type": "container",
      "props": { "maxWidth": "xl", "center": true },
      "children": [
        {
          "id": "hero-title",
          "type": "text",
          "props": { "tag": "h1", "content": "Welcome" },
          "styles": { "typography": "display-lg", "color": "brand-900" }
        }
      ]
    }
  ]
}
```

### Final Page Structure
This is the final JSON payload expected by the Renderer.
```json
{
  "schemaVersion": "1.0.0",
  "theme": {
    "name": "Tide",
    "tokens": {
      "primary": "#4c44e4",
      "primaryText": "#ebf0ff",
      "secondary": "#525252",
      "secondaryText": "#fafafa",
      "accent": "#f2f0ff",
      "accentText": "#895bf5",
      "background": "#f5f5f5",
      "text": "#171717",
      "card": "#fafafa",
      "cardText": "#171717",
      "popover": "#e3e3e3",
      "popoverText": "#171717",
      "muted": "#a1a1a1",
      "mutedText": "#171717",
      "destructive": "#db2424",
      "destructiveText": "#fef1f1",
      "border": "#d4d4d4",
      "input": "#d4d4d4",
      "focusRing": "#4c44e4",
      "chart": { ... }
    }
  },
  "fonts": {
    "sans": "inter",
    "serif": "playfair",
    "mono": "jetbrains"
  },
  "tree": [
    { "id": "hero", "type": "section", ... },
    { "id": "services", "type": "section", ... },
    { "id": "contact", "type": "section", ... }
  ]
}
```

## Step 9: Render
The JSON is passed to the `<Renderer />` component. The system applies the selected Theme (colors) and Fonts globally, and the Renderer draws the UI based on the Node Tree.
