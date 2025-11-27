import { tokens } from "@/core/theme/tokens";
import { clsx } from "clsx";

export interface NodeStyles {
  typography?: keyof typeof tokens.typography;
  fontSize?: keyof typeof tokens.fontSize;
  color?: keyof typeof tokens.colors;
  background?: keyof typeof tokens.backgrounds;
  padding?: keyof typeof tokens.spacing;
  margin?: keyof typeof tokens.spacing;
  gap?: keyof typeof tokens.spacing;
  sectionPadding?: keyof typeof tokens.sectionPadding;
  containerPadding?: keyof typeof tokens.containerPadding;
  radius?: keyof typeof tokens.radius;
  shadow?: keyof typeof tokens.shadow;
  maxWidth?: keyof typeof tokens.maxWidth;
  width?: keyof typeof tokens.width | string;
  height?: keyof typeof tokens.height | string;
  opacity?: keyof typeof tokens.opacity;
  zIndex?: keyof typeof tokens.zIndex;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  flex?: '1' | 'auto' | 'initial' | 'none';
  flexBasis?: 'full' | '1/2' | '1/3' | '2/3' | '1/4' | '3/4' | 'auto';
  flexGrow?: boolean;
  flexShrink?: boolean;
  borderWidth?: keyof typeof tokens.border.width;
  borderColor?: keyof typeof tokens.border.color;
  borderStyle?: keyof typeof tokens.border.style;
  transition?: keyof typeof tokens.transition;
  easing?: keyof typeof tokens.easing;
  lineHeight?: keyof typeof tokens.lineHeight;
  fontWeight?: keyof typeof tokens.fontWeight;
  fontFamily?: keyof typeof tokens.fontFamily;
  aspectRatio?: keyof typeof tokens.aspectRatio;
  
  // Grid
  columns?: keyof typeof tokens.grid.columns; // Canonical name
  gridColumns?: keyof typeof tokens.grid.columns; // Deprecated alias
  gridGap?: keyof typeof tokens.grid.gap;

  // Responsive & Hover (Recursive)
  responsive?: {
    sm?: Partial<NodeStyles>;
    md?: Partial<NodeStyles>;
    lg?: Partial<NodeStyles>;
    xl?: Partial<NodeStyles>;
    '2xl'?: Partial<NodeStyles>;
  };
  hover?: Partial<NodeStyles>;
  
  [key: string]: any;
}

// Helper maps for Tailwind class generation
const paddingMap: Record<string, string> = {
  'none': 'p-0',
  'xs': 'p-1', 'sm': 'p-2', 'md': 'p-4', 'lg': 'p-6', 'xl': 'p-8',
  '2xl': 'p-12', '3xl': 'p-16', '4xl': 'p-20', '5xl': 'p-24', '6xl': 'p-32',
};

const marginMap: Record<string, string> = {
  'none': 'm-0',
  'xs': 'm-1', 'sm': 'm-2', 'md': 'm-4', 'lg': 'm-6', 'xl': 'm-8',
  '2xl': 'm-12', '3xl': 'm-16', '4xl': 'm-20', '5xl': 'm-24', '6xl': 'm-32',
  '-xs': '-m-1', '-sm': '-m-2', '-md': '-m-4', '-lg': '-m-6', '-xl': '-m-8',
};

const gapMap: Record<string, string> = {
  'none': 'gap-0',
  'xs': 'gap-1', 'sm': 'gap-2', 'md': 'gap-4', 'lg': 'gap-6', 'xl': 'gap-8',
  '2xl': 'gap-12', '3xl': 'gap-16', '4xl': 'gap-20', '5xl': 'gap-24', '6xl': 'gap-32',
};

const flexMap: Record<string, string> = {
  '1': 'flex-1',
  'auto': 'flex-auto',
  'initial': 'flex-initial',
  'none': 'flex-none',
};

const flexBasisMap: Record<string, string> = {
  'full': 'basis-full',
  '1/2': 'basis-1/2',
  '1/3': 'basis-1/3',
  '2/3': 'basis-2/3',
  '1/4': 'basis-1/4',
  '3/4': 'basis-3/4',
  'auto': 'basis-auto',
};

const textAlignMap: Record<string, string> = {
  'left': 'text-left',
  'center': 'text-center',
  'right': 'text-right',
  'justify': 'text-justify',
};

// Core conversion logic (extracted for reuse in responsive/hover)
function convertSingleStyle(styles: Partial<NodeStyles>, prefix: string = ""): string[] {
  const classes: string[] = [];
  const p = prefix ? `${prefix}:` : "";

  // Typography
  if (styles.typography && tokens.typography[styles.typography]) {
    classes.push(tokens.typography[styles.typography].split(' ').map(c => `${p}${c}`).join(' '));
  }
  if (styles.fontSize && tokens.fontSize[styles.fontSize]) {
    classes.push(`${p}${tokens.fontSize[styles.fontSize]}`);
  }

  // Color & Background
  if (styles.color && tokens.colors[styles.color]) {
    classes.push(`${p}${tokens.colors[styles.color]}`);
  }
  if (styles.background && tokens.backgrounds[styles.background]) {
    classes.push(`${p}${tokens.backgrounds[styles.background]}`);
  }

  // Spacing
  if (styles.padding && paddingMap[styles.padding]) classes.push(`${p}${paddingMap[styles.padding]}`);
  if (styles.margin && marginMap[styles.margin]) classes.push(`${p}${marginMap[styles.margin]}`);
  if (styles.gap && gapMap[styles.gap]) classes.push(`${p}${gapMap[styles.gap]}`);
  
  // Section & Container Padding
  if (styles.sectionPadding && tokens.sectionPadding[styles.sectionPadding]) {
    classes.push(tokens.sectionPadding[styles.sectionPadding].split(' ').map(c => `${p}${c}`).join(' '));
  }
  if (styles.containerPadding && tokens.containerPadding[styles.containerPadding]) {
    classes.push(`${p}${tokens.containerPadding[styles.containerPadding]}`);
  }

  // Dimensions
  if (styles.width) {
    const w = tokens.width[styles.width as keyof typeof tokens.width] || styles.width;
    classes.push(`${p}${w}`);
  }
  if (styles.height) {
    const h = tokens.height[styles.height as keyof typeof tokens.height] || styles.height;
    classes.push(`${p}${h}`);
  }
  if (styles.maxWidth && tokens.maxWidth[styles.maxWidth]) {
    classes.push(`${p}${tokens.maxWidth[styles.maxWidth]}`);
  }

  // Flex
  if (styles.flex && flexMap[styles.flex]) classes.push(`${p}${flexMap[styles.flex]}`);
  if (styles.flexBasis && flexBasisMap[styles.flexBasis]) classes.push(`${p}${flexBasisMap[styles.flexBasis]}`);
  if (styles.flexGrow) classes.push(`${p}grow`);
  if (styles.flexShrink) classes.push(`${p}shrink`);

  // Grid
  // Canonical 'columns'
  if (styles.columns && tokens.grid.columns[styles.columns]) {
    classes.push(`${p}${tokens.grid.columns[styles.columns]}`);
  }
  // Deprecated 'gridColumns' alias support
  if (styles.gridColumns && tokens.grid.columns[styles.gridColumns]) {
    classes.push(`${p}${tokens.grid.columns[styles.gridColumns]}`);
  }
  if (styles.gridGap && tokens.grid.gap[styles.gridGap]) {
    classes.push(`${p}${tokens.grid.gap[styles.gridGap]}`);
  }

  // Visuals
  if (styles.radius && tokens.radius[styles.radius]) classes.push(`${p}${tokens.radius[styles.radius]}`);
  if (styles.shadow && tokens.shadow[styles.shadow]) classes.push(`${p}${tokens.shadow[styles.shadow]}`);
  if (styles.opacity && tokens.opacity[styles.opacity]) classes.push(`${p}${tokens.opacity[styles.opacity]}`);
  if (styles.zIndex && tokens.zIndex[styles.zIndex]) classes.push(`${p}${tokens.zIndex[styles.zIndex]}`);
  
  // Border
  if (styles.borderWidth && tokens.border.width[styles.borderWidth]) classes.push(`${p}${tokens.border.width[styles.borderWidth]}`);
  if (styles.borderColor && tokens.border.color[styles.borderColor]) classes.push(`${p}${tokens.border.color[styles.borderColor]}`);
  if (styles.borderStyle && tokens.border.style[styles.borderStyle]) classes.push(`${p}${tokens.border.style[styles.borderStyle]}`);

  // Text Align
  if (styles.textAlign && textAlignMap[styles.textAlign]) classes.push(`${p}${textAlignMap[styles.textAlign]}`);

  // Typography Modifiers
  if (styles.lineHeight && tokens.lineHeight[styles.lineHeight]) classes.push(`${p}${tokens.lineHeight[styles.lineHeight]}`);
  if (styles.fontWeight && tokens.fontWeight[styles.fontWeight]) classes.push(`${p}${tokens.fontWeight[styles.fontWeight]}`);
  if (styles.fontFamily && tokens.fontFamily[styles.fontFamily]) classes.push(`${p}${tokens.fontFamily[styles.fontFamily]}`);

  // Misc
  if (styles.aspectRatio && tokens.aspectRatio[styles.aspectRatio]) classes.push(`${p}${tokens.aspectRatio[styles.aspectRatio]}`);
  if (styles.transition && tokens.transition[styles.transition]) classes.push(`${p}${tokens.transition[styles.transition]}`);
  if (styles.easing && tokens.easing[styles.easing]) classes.push(`${p}${tokens.easing[styles.easing]}`);

  return classes;
}

export function convertStyles(styles?: NodeStyles): string {
  if (!styles) return "";

  let classes = convertSingleStyle(styles);

  // Handle Responsive
  if (styles.responsive) {
    if (styles.responsive.sm) classes = classes.concat(convertSingleStyle(styles.responsive.sm, 'sm'));
    if (styles.responsive.md) classes = classes.concat(convertSingleStyle(styles.responsive.md, 'md'));
    if (styles.responsive.lg) classes = classes.concat(convertSingleStyle(styles.responsive.lg, 'lg'));
    if (styles.responsive.xl) classes = classes.concat(convertSingleStyle(styles.responsive.xl, 'xl'));
    if (styles.responsive['2xl']) classes = classes.concat(convertSingleStyle(styles.responsive['2xl'], '2xl'));
  }

  // Handle Hover
  if (styles.hover) {
    classes = classes.concat(convertSingleStyle(styles.hover, 'hover'));
  }

  return clsx(classes);
}
