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

export interface HeadingNode extends BaseNode {
  type: 'heading';
  props?: {
    content: string;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
  };
}

export interface LinkNode extends BaseNode {
  type: 'link';
  props?: {
    label: string;
    href: string;
    target?: '_blank' | '_self';
  };
}

export interface VideoNode extends BaseNode {
  type: 'video';
  props?: {
    src: string;
    poster?: string;
    controls?: boolean;
    autoplay?: boolean;
    loop?: boolean;
    muted?: boolean;
  };
}

export interface IconNode extends BaseNode {
  type: 'icon';
  props?: {
    name: string;
    size?: number | string;
    color?: string;
  };
}

export interface DividerNode extends BaseNode {
  type: 'divider';
  props?: {
    orientation?: 'horizontal' | 'vertical';
    thickness?: number | string;
    color?: string;
  };
}

export interface SpacerNode extends BaseNode {
  type: 'spacer';
  props?: {
    size: number | string;
    axis?: 'horizontal' | 'vertical';
  };
}

export interface FormNode extends BaseNode {
  type: 'form';
  props?: {
    action?: string;
    method?: 'GET' | 'POST';
    onSubmit?: string;
  };
}

export interface InputNode extends BaseNode {
  type: 'input';
  props?: {
    name: string;
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'date' | 'textarea';
    placeholder?: string;
    required?: boolean;
    label?: string;
    defaultValue?: string;
  };
}
