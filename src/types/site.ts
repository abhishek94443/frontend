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

export interface VendorConfig {
  name: string;
  slug: string;
  websiteConfig: {
    tree?: SiteNode[];
    theme?: any;
    meta?: any;
  } | null;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}
