import React from 'react';
import { ContainerNode } from '@/core/nodes/definitions';
import { Renderer } from '@/core/renderer';
import { clsx } from 'clsx';
import { convertStyles } from '@/core/engine/styleConverter';

interface ContainerAdapterProps {
  node: ContainerNode;
}

export const ContainerAdapter: React.FC<ContainerAdapterProps> = ({ node }) => {
  const { maxWidth = 'lg', center = true } = node.props || {};

  const maxWidths = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full',
  };

  const styleClass = convertStyles(node.styles);

  const combinedClassName = clsx(
    'w-full',
    // @ts-ignore
    maxWidths[maxWidth],
    center && 'mx-auto',
    styleClass
  );

  return (
    <div className={combinedClassName}>
      {node.children && <Renderer nodeTree={node.children} />}
    </div>
  );
};
