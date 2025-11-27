export type NodeType = 
  | 'section' 
  | 'flex' 
  | 'text' 
  | 'image' 
  | 'button' 
  | 'grid' 
  | 'container';

export interface NodeStyle {
  typography?: string;
  color?: string;
  background?: string;
  padding?: string;
  margin?: string;
  gap?: string;
  radius?: string;
  shadow?: string;
  maxWidth?: string;
  width?: string;
  height?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  flex?: '1' | 'auto' | 'initial' | 'none';
  [key: string]: any;
}

export interface NodeProps {
  [key: string]: any;
}

export interface SiteNode {
  id: string;
  type: NodeType;
  props?: NodeProps;
  styles?: NodeStyle;
  children?: SiteNode[];
}

export interface ThemeColors {
  primary: string;
  primaryText: string;
  secondary: string;
  secondaryText: string;
  accent: string;
  accentText: string;
  background: string;
  text: string;
  card: string;
  cardText: string;
  popover: string;
  popoverText: string;
  muted: string;
  mutedText: string;
  destructive: string;
  destructiveText: string;
  border: string;
  input: string;
  focusRing: string;
  chart: {
    chart1: string;
    chart2: string;
    chart3: string;
    chart4: string;
    chart5: string;
  };
}

export interface ThemeConfig {
  name: string;
  tokens: ThemeColors;
}

export interface FontConfig {
  sans: string;
  serif: string;
  mono: string;
}

export interface WebsiteConfig {
  schemaVersion: string;
  theme?: ThemeConfig;
  fonts?: FontConfig;
  tree: SiteNode[];
}

export interface VendorConfig {
  name: string;
  slug: string;
  websiteConfig: WebsiteConfig | null;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}
