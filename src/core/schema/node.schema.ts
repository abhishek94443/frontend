import { z } from "zod";
import { tokens } from "@/core/theme/tokens";

// Helper to create enum from object keys
const makeEnum = (obj: object) => z.enum([Object.keys(obj)[0], ...Object.keys(obj).slice(1)] as [string, ...string[]]);

// Recursive schema for responsive/hover styles
const BaseStylesShape = {
  typography: makeEnum(tokens.typography).optional(),
  fontSize: makeEnum(tokens.fontSize).optional(),
  color: makeEnum(tokens.colors).optional(),
  background: makeEnum(tokens.backgrounds).optional(),
  padding: makeEnum(tokens.spacing).optional(),
  margin: makeEnum(tokens.spacing).optional(),
  gap: makeEnum(tokens.spacing).optional(),
  sectionPadding: makeEnum(tokens.sectionPadding).optional(),
  containerPadding: makeEnum(tokens.containerPadding).optional(),
  radius: makeEnum(tokens.radius).optional(),
  shadow: makeEnum(tokens.shadow).optional(),
  maxWidth: makeEnum(tokens.maxWidth).optional(),
  width: z.union([makeEnum(tokens.width), z.string()]).optional(),
  height: z.union([makeEnum(tokens.height), z.string()]).optional(),
  opacity: makeEnum(tokens.opacity).optional(),
  zIndex: makeEnum(tokens.zIndex).optional(),
  textAlign: z.enum(['left', 'center', 'right', 'justify']).optional(),
  flex: z.enum(['1', 'auto', 'initial', 'none']).optional(),
  flexBasis: z.enum(['full', '1/2', '1/3', '2/3', '1/4', '3/4', 'auto']).optional(),
  flexDirection: z.enum(['row', 'column', 'row-reverse', 'column-reverse']).optional(),
  direction: z.enum(['row', 'column', 'row-reverse', 'column-reverse']).optional(), // Alias
  flexGrow: z.boolean().optional(),
  flexShrink: z.boolean().optional(),
  borderWidth: makeEnum(tokens.border.width).optional(),
  borderColor: makeEnum(tokens.border.color).optional(),
  borderStyle: makeEnum(tokens.border.style).optional(),
  transition: makeEnum(tokens.transition).optional(),
  easing: makeEnum(tokens.easing).optional(),
  lineHeight: makeEnum(tokens.lineHeight).optional(),
  fontWeight: makeEnum(tokens.fontWeight).optional(),
  fontFamily: makeEnum(tokens.fontFamily).optional(),
  aspectRatio: makeEnum(tokens.aspectRatio).optional(),
  
  // Grid
  columns: makeEnum(tokens.grid.columns).optional(), // Canonical
  gridColumns: makeEnum(tokens.grid.columns).optional(), // Deprecated alias
  gridGap: makeEnum(tokens.grid.gap).optional(),
};

// We need a lazy schema to handle recursion for responsive/hover
export const NodeStylesSchema: z.ZodType<any> = z.lazy(() => 
  z.object({
    ...BaseStylesShape,
    // Strict Responsive Keys
    responsive: z.object({
      sm: z.object(BaseStylesShape).optional(),
      md: z.object(BaseStylesShape).optional(),
      lg: z.object(BaseStylesShape).optional(),
      xl: z.object(BaseStylesShape).optional(),
      '2xl': z.object(BaseStylesShape).optional(),
    }).strict().optional(), // strict() ensures no other keys are allowed
    hover: z.object(BaseStylesShape).optional(),
  }).optional()
);

export const BaseNodeSchema = z.object({
  id: z.string(),
  styles: NodeStylesSchema,
});

export const TextNodeSchema = BaseNodeSchema.extend({
  type: z.literal("text"),
  props: z.object({
    content: z.string(),
    tag: z.enum(["h1", "h2", "h3", "p", "span", "div"]).optional(),
  }).optional(),
});

export const SectionNodeSchema = BaseNodeSchema.extend({
  type: z.literal("section"),
  props: z.object({
    id: z.string().optional(),
    role: z.string().optional(),
  }).optional(),
  children: z.lazy(() => z.array(SiteNodeSchema)).optional(),
});

export const FlexNodeSchema = BaseNodeSchema.extend({
  type: z.literal("flex"),
  props: z.object({
    direction: z.enum(["row", "column", "row-reverse", "column-reverse"]).optional(),
    align: z.enum(["start", "center", "end", "stretch", "baseline"]).optional(),
    justify: z.enum(["start", "center", "end", "between", "around", "evenly"]).optional(),
    wrap: z.boolean().optional(),
  }).optional(),
  children: z.lazy(() => z.array(SiteNodeSchema)).optional(),
});

export const ImageNodeSchema = BaseNodeSchema.extend({
  type: z.literal("image"),
  props: z.object({
    src: z.string(),
    alt: z.string(),
    // Layout safety: No explicit width/height in px allowed for layout.
    // These are hints for the uploader/optimizer only.
    uploadWidth: z.number().optional(),
    uploadHeight: z.number().optional(),
    objectFit: z.enum(["cover", "contain", "fill", "none", "scale-down"]).optional(),
  }),
});

export const ButtonNodeSchema = BaseNodeSchema.extend({
  type: z.literal("button"),
  props: z.object({
    label: z.string(),
    href: z.string().optional(),
    variant: z.enum(["primary", "secondary", "outline", "ghost"]).optional(),
    onClick: z.string().optional(),
  }),
});

export const GridNodeSchema = BaseNodeSchema.extend({
  type: z.literal("grid"),
  props: z.object({
    columns: z.union([z.number(), z.string()]).optional(),
  }).optional(),
  children: z.lazy(() => z.array(SiteNodeSchema)).optional(),
});

export const ContainerNodeSchema = BaseNodeSchema.extend({
  type: z.literal("container"),
  props: z.object({
    maxWidth: z.enum(["sm", "md", "lg", "xl", "2xl", "full"]).optional(),
    center: z.boolean().optional(),
  }).optional(),
  children: z.lazy(() => z.array(SiteNodeSchema)).optional(),
});

// Union of all node types
export const SiteNodeSchema: z.ZodType<any> = z.lazy(() =>
  z.union([
    TextNodeSchema, 
    SectionNodeSchema,
    FlexNodeSchema,
    ImageNodeSchema,
    ButtonNodeSchema,
    GridNodeSchema,
    ContainerNodeSchema
  ])
);

// Root Schema with Versioning
export const SiteConfigSchema = z.object({
  schemaVersion: z.string().optional(), // e.g. "1.0.0"
  tree: z.array(SiteNodeSchema),
});
