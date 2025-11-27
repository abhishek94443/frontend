import { SiteNode } from "@/types/site";
import { NodeStyles } from "@/core/engine/styleConverter";

export interface BaseNode extends SiteNode {
  styles?: NodeStyles;
}

export interface SectionNode extends BaseNode {
  type: 'section';
  props?: {
    id?: string;
    role?: string;
  };
}

export interface TextNode extends BaseNode {
  type: 'text';
  props?: {
    content: string;
    tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
  };
}

export interface FlexNode extends BaseNode {
  type: 'flex';
  props?: {
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    wrap?: boolean;
  };
}

export interface ImageNode extends BaseNode {
  type: 'image';
  props?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  };
}

export interface ButtonNode extends BaseNode {
  type: 'button';
  props?: {
    label: string;
    href?: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    onClick?: string;
  };
}

export interface GridNode extends BaseNode {
  type: 'grid';
  props?: {
    columns?: number | string;
  };
}

export interface ContainerNode extends BaseNode {
  type: 'container';
  props?: {
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
    center?: boolean;
  };
}
