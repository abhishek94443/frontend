import React from 'react';
import { GridNode } from '@/core/nodes/definitions';
import { Renderer } from '@/core/renderer';
import { convertStyles } from '@/core/engine/styleConverter';
import { clsx } from 'clsx';

interface GridAdapterProps {
  node: GridNode;
}

export const GridAdapter: React.FC<GridAdapterProps> = ({ node }) => {
  const styleClass = convertStyles(node.styles);
  
  return (
    <div className={clsx('grid', styleClass)}>
      {node.children && <Renderer nodeTree={node.children} />}
    </div>
  );
};
